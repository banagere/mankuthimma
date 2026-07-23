#!/usr/bin/env bash
#
# Local CI gate. Same checks the GitHub Actions workflow runs, so a green run
# here means a green run there. Called by .githooks/pre-push and `bun run ci`.
#
# Usage:
#   ./scripts/ci-local.sh          # full gate
#   ./scripts/ci-local.sh --fast   # skip the build (pre-commit hook uses this)

set -euo pipefail

cd "$(dirname "$0")/.."

FAST=0
[[ "${1:-}" == "--fast" ]] && FAST=1

failed=()

# Run a step, record failure, but keep going so one run surfaces every problem
# instead of making you re-run the gate once per fix.
step() {
  local name="$1"
  shift
  printf '\n\033[1m▶ %s\033[0m\n' "$name"
  if "$@"; then
    printf '\033[32m✓ %s\033[0m\n' "$name"
  else
    printf '\033[31m✗ %s\033[0m\n' "$name"
    failed+=("$name")
  fi
}

# --- Lockfile integrity -----------------------------------------------------
# --frozen-lockfile fails if package.json and bun.lock disagree, so a dependency
# can never be silently resolved to a version that was not reviewed.
step "install (frozen lockfile)" bun install --frozen-lockfile

# --- Static checks ----------------------------------------------------------
step "lint" bun run lint
step "typecheck" bun run typecheck

# --- Supply chain -----------------------------------------------------------
# Fails only on high/critical advisories absent from .audit-baseline.json.
# Several current highs are pinned transitively by eslint and next with no
# version in range, so a raw `bun audit` gate would be permanently red and
# therefore ignored. See scripts/audit-drift.ts.
step "audit (drift)" bun run audit

# --- Secrets ----------------------------------------------------------------
# This is a public repo. gitleaks is the last line before something like a KV
# connection string becomes permanent in history.
if command -v gitleaks >/dev/null 2>&1; then
  step "secret scan" gitleaks git --no-banner --redact --log-opts="-n 50"
else
  printf '\n\033[33m⚠ gitleaks not installed — skipping secret scan\033[0m\n'
  printf '  install: brew install gitleaks\n'
fi

# --- Build ------------------------------------------------------------------
if [[ $FAST -eq 0 ]]; then
  step "build" bun run build
fi

# --- Result -----------------------------------------------------------------
printf '\n'
if [[ ${#failed[@]} -gt 0 ]]; then
  printf '\033[31m✗ %d check(s) failed:\033[0m\n' "${#failed[@]}"
  printf '  - %s\n' "${failed[@]}"
  exit 1
fi
printf '\033[32m✓ all checks passed\033[0m\n'

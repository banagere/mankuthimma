import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-10 text-xl text-center">
      <h2 className="font-bold tracking-wider uppercase">
        404 — Page Not Found
      </h2>
      <p className="flex justify-center gap-2">
        Click here to go back
        <Link href={"/"} className="text-red-700 transition-opacity duration-500 hover:opacity-80">
          home &rarr;
        </Link>
      </p>
    </div>
  );
}


interface KaggaProps {
  id: string;
  number: number;
  kannada: string;
  kannada_explanation: string;
  english?: string;
}

const kaggaData: Omit<KaggaProps, "id">[] = [
  {
    number: 1,
    english:
      "Salute to that strangeness that people believe heavily in even without seeing. They all describe it differently - Sri Vishnu, beginning of everything including this world, Weaver of this web of magic, omnipotent God and the creator. - Mankutimma",
    kannada:
      "ಶ್ರೀ ವಿಷ್ಣು ವಿಶ್ವಾದಿ ಮೂಲ ಮಾಯಾಲೋಲ ।\nದೇವ ಸರ್ವೇಶ ಪರಬೊಮ್ಮನೆಂದು ಜನಂ  ॥\nಆವುದನು ಕಾಣದೊಡಮಳ್ತಿಯಿಂ ನಂಬಿಹುದೊ ।\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧ ॥",
    kannada_explanation:
      "ವಿಶ್ವಕ್ಕೆ ಮೂಲವಾದ ಶ್ರೀ ವಿಷ್ಣು, ಮಾಯಾಲೋಲ, ದೇವರು, ಪರಬ್ರಹ್ಮ, ಸರ್ವಕ್ಕೂ ಒಡೆಯನಾದ ಪರಮ ಪುರುಷ ಹೀಗೆ ಹತ್ತು ಹಲವಾರು ಹೆಸರುಗಳಿಂದ ಯಾವುದನ್ನು ಜನರು ಕಾಣದಿದ್ದರೂ ಪ್ರೀತಿ ಮತ್ತು ಭಕ್ತಿಯಿಂದ ನಂಬಿರುವರೋ  ಆ ವಿಚಿತ್ರಕ್ಕೆ ನಮಿಸು ಎಂದು ಹೇಳುತ್ತಾರೆ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 2,
    english:
      "Salute that unique thing that has at the same time both surrounded and penetrated every object - living or otherwise. Neither does it yield to emotions nor can it be measured. - Mankutimma",
    kannada:
      "ಜೀವ ಜಡರೂಪ ಪ್ರಪಂಚವನದಾವುದೋ।\nಆವರಿಸಿಕೊಂಡುಮೊಳನೆರೆದುಮಿಹುದಂತೆ॥\nಭಾವಕೊಳಪಡದಂತೆ ಅಳತೆಗಳವಡದಂತೆ।\nಆ ವಿಶೇಷಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨ ॥",
    kannada_explanation:
      "ಈ ಪ್ರಪಂಚದಲ್ಲಿ ಇರುವುದು ಎರಡೇ. ಒಂದು ಜಡ ಮತ್ತು ಮತ್ತೊಂದು ಜೀವ. ಜಡವೆಂದರೆ ಚೇತನವಿಲ್ಲದ್ದು. ಜೀವವೆಂದರೆ ಚೇತನ . ಇವೆರಡರ ಸಮ್ಮಿಲನವೇ ಜಗದ್ವ್ಯಾಪಾರ ಇವೆರಡರಲ್ಲೂ ತುಂಬಿಕೊಂಡಿರುವ, ಭಾವದಿಂದ ಊಹಿಸಲಸಾಧ್ಯವಾದ, ಅಳತೆಗೆ  ಸಿಗದ ವ್ಯಾಪಕತ್ವವು ಹೊಂದಿರುವ ಆ ವಿಶೇಷಕೆ (ಪರಮಾತ್ಮನಿಗೆ) ನಮಿಸೋ, ಮಣಿಯೋ, ನಮಸ್ಕರಿಸೋ ಮಂಕುತಿಮ್ಮ ಎಂದು ಹೇಳುತ್ತಾರೆ ಡಿ.ವಿ.ಜಿ.",
  },
  {
    number: 3,
    english:
      "It is very difficult to conclude whether it exists or not. An entity which is manifesting its glory by flowing in this world as life. If it is really true, then seek refuge in that deep thought. - Mankutimma",
    kannada:
      "ಇಹುದೊ ಇಲ್ಲವೊ ತಿಳಿಯಗೊಡದೊಂದು ವಸ್ತು ನಿಜ।\nಮಹಿಮೆಯಿಂ ಜಗವಾಗಿ ಜೀವವೇಷದಲಿ ॥\nವಿಹರಿಪುದದೊಳ್ಳಿತೆಂಬುದು ನಿಸದವಾದೊಡಾ ।\nಗಹನ ತತ್ತ್ವಕೆ ಶರಣೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩ ॥",
    kannada_explanation: "",
  },
  {
    number: 4,
    english:
      "What is life? What is this world? What is the relation between the two? Is there anything here that we do not see? What is it? Can cognisance (knowledge) of something is the only proof for its existence? - Mankutimma",
    kannada:
      "ಏನು ಜೀವನದರ್ಥ? ಏನು ಪ್ರಪಂಚಾರ್ಥ? ।\nಏನು ಜೀವಪ್ರಪಂಚಗಳ ಸಂಬಂಧ? ॥\nಕಾಣದಿಲ್ಲಿ‍ರ್ಪುದೇನಾನುಮುಂಟೆ? ಅದೇನು? ।\nಜ್ಞಾನಪ್ರಮಾಣವೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೪ ॥",
    kannada_explanation:
      "“ಈ ನಮ್ಮ ಜೀವನಕ್ಕೆ ಏನಾದರೂ ಅರ್ಥ ಇದೆಯೇ? ನಾವಿರುವ ಈ ಪ್ರಪಂಚದ ಅರ್ಥವೇನು? ನಮ್ಮ ಮತ್ತು ನಾವು ಇರುವ ಈ ಪ್ರಪಂಚದ ಪರಸ್ಪರ ಸ೦ಬ೦ಧವೇನು? ಇವೆರಡನ್ನೂ ಬೆಸೆದಿರುವ,  ನಮ್ಮ ಕಣ್ಣಿಗೆ ಕಾಣದ ಒಂದು ಶಕ್ತಿ ಏನಾದರೂ ಇದೆಯೇ? ಹಾಗಿದ್ದರೆ ಅದೇನು? ಅದು ನಮ್ಮ ವಿಚಾರ ಮತ್ತು ಜ್ಞಾನದ ಪರಿಧಿಯಿಂದ  ಮೀರಿದೆಯೇ? ಹಾಗಾದರೆ ಅದು ಏನು? ” ಎಂಬ ಭಾವಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಶ್ರೀ ಡಿ.ವಿ.ಜಿ ಯವರು.",
  },
  {
    number: 5,
    english:
      "Is God confined to the dark caves (of sanctum sactorum)? Is it the representation of all that we can not understand? If there is one God looking over the entire world, then why is the world's story like this? What is the secret of birth and death? - Mankutimma",
    kannada:
      "ದೇವರೆಂಬುದದೇನು ಕಗ್ಗತ್ತಲೆಯ ಗವಿಯೆ? ।\r\nನಾವರಿಯಲಾರದೆಲ್ಲದರೊಟ್ಟು ಹೆಸರೆ? ॥\r\nಕಾವನೊರ್ವನಿರಲ್ಕೆ ಜಗದ ಕಥಯೇಕಿಂತು? ।\r\nಸಾವು ಹುಟ್ಟುಗಳೆನು? - ಮಂಕುತಿಮ್ಮ ॥ ೫ ॥",
    kannada_explanation:
      "ದೇವರು ಎನ್ನುವುದು ಏನು? ಅದೇನು ಕತ್ತಲು ಕವಿದ ಗವಿಯೆ? ಎನ್ನುತ್ತಾರೆ ಮಾನನೀಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 6,
    english:
      "Is this world a mere riddle? What is the reason for living? Who will decipher this wonder? If a single hand created this world, then why is there so much diversity in life? - Mankutimma",
    kannada:
      "ಒಗಟೆಯೇನೀ ಸೃಷ್ಟಿ? ಬಾಳಿನರ್ಥವದೇನು? ।\r\nಬಗೆದು ಬಿಡಿಸುವರಾರು ಸೊಜಿಗವನಿದನು? ॥\r\nಜಗವ ನಿರವಿಸಿದ ಕೈಯೊದಾದೊಡೇಕಿಂತು ।\r\nಬಗೆಬಗೆಯ ಜೀವಗತಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೬ ॥",
    kannada_explanation:
      "ಈ ಸೃಷ್ಟಿಯು ಒಗಟೇ? ಈ ಬಾಳಿಗೆ ಅರ್ಥವೇನು ?. ಆದರೆ ಈ ಒಗಟನ್ನು ಬಿಡಿಸುವವರು ಯಾರು. ಈ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಮಾಡಿದ ಕೈ ಒಂದೇ ಆದರೆ , ಸೃಷ್ಟಿಯಲ್ಲಿ ಸಮಾನತೆಯೇಕಿಲ್ಲ  ?  \n ಬೇರೆ ಬೇರೆಯಾದ ಜೀವಗತಿ ಏಕೆ? ಎನ್ನುವ ಪ್ರಶ್ನೆಗಳನ್ನು ತಮಗೆ ತಾವೇ ಕೇಳಿಕೊಳ್ಳುವ ರೀತಿಯಲ್ಲಿ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು, ನಮ್ಮೆಲ್ಲರ ಮುಂದೆ ಈ ಕಗ್ಗದ ರೂಪದಲ್ಲಿ ಇಟ್ಟಿದ್ದಾರೆ. ",
  },
  {
    number: 7,
    english:
      "Who is pulling the strings of life? One? or Many? Is it fate, valour, morality or just faith that drives us all? When will this chaos actually work? Is this chaos the final reality? - Mankutimma",
    kannada:
      "ಬದುಕಿಗಾರ್ ನಾಯಕರು, ಏಕನೊ ಅನೇಕರೋ? ।\nವಿಧಿಯೊ ಪೌರುಷವೊ ಧರುಮವೊ ಅಂಧಬಲವೋ? ॥\nಕುದುರುವುದೆಂತು ಈಯವ್ಯವಸ್ಥ್ರೆಯ ಪಾಡು? ।\nಅದಿಗುದಿಯೆ ಗತಿಯೇನೋ? - ಮಂಕುತಿಮ್ಮ ॥ ೭ ॥",
    kannada_explanation:
      "ಈ ಬದುಕಿಗೆ ಯಾರು ನಾಯಕರು? ಒಬ್ಬನೇ ಒಬ್ಬನೋ ಅಥವಾ ಅನೇಕರಿದ್ದಾರೆಯೋ? ಅಥವಾ ಈ ಬದುಕಿಗೆ ನಾಯಕ, ವಿಧಿಯೋ,ಧರ್ಮವೋ,ಅಥವಾ ಅಂಧ ಶ್ರದ್ಧೆಯೋ? ಹಿಂದಿನ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿರುವ ಅವ್ಯವಸ್ಥೆ ಸರಿಯಾಗುವುದೋ ಇಲ್ಲವೋ? ಅಥವಾ ಇವೆಲ್ಲರದರ ವಿಚಾರದ ತಳಮಳದಲ್ಲಿಯೇ ನಾವು ಯಾವಾಗಲೂ ಇರಬೇಕೆ?  ಈ ರೀತಿಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಸನ್ಮಾನ್ಯ ಡಿ ವಿ ಗುಂಡಪ್ಪನವರು ತಮ್ಮನ್ನೇ ತಾವು ಕೇಳಿಕೊಳ್ಳುತ್ತಾ, ಓದುಗರ ಮುಂದೆ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.  ",
  },
  {
    number: 8,
    english:
      "Is there a rule or a goal for this world? Does the creator's mind wander from time to time? If the creator is always benevolent, then why are all these beings struggling so much? - Mankutimma",
    kannada:
      "ಕ್ರಮವೊಂದು ಲಕ್ಷ್ಯವೊಂದುಂಟೇನು ಸೃಷ್ಟಿಯಲಿ? ।\nಭ್ರಮಿಪುದೇನಾಗಾಗ ಕರ್ತೃವಿನ ಮನಸು? ॥\nಮಮತೆಯುಳ್ಳವನಾತನಾದೊಡೀ ಜೀವಗಳು ।\nಶ್ರಮಪಡುವುವೇಕಿಂತು? - ಮಂಕುತಿಮ್ಮ ॥ ೮ ॥",
    kannada_explanation:
      "ಇಲ್ಲಿ ಗುಂಡಪ್ಪನವರು  ಕೇಳುವ ಪ್ರಶ್ನೆ ಹೀಗಿದೆ” ಈ ಭಗವಂತನ ಸೃಷ್ಟಿಯಲ್ಲಿ ಒಂದು ಕ್ರಮ ಅಥವಾ ಗುರಿ ಏನಾದರೂ ಇದೆಯೇ? ಈ ಸೃಷ್ಟಿಕರ್ತನ ಮನಸ್ಸು ಏಕೆ ಆಗಾಗ ವಿಚಲಿತವಾಗಿ ಎಲ್ಲೆಲ್ಲೋ ಹರಿದಾಡುತ್ತದೆ. ?ತಾನು ಸೃಷ್ಟಿಸಿದ ಜೀವಿಗಳ ಮೇಲೆ ಅವನಿಗೆ ಪ್ರೀತಿ ವಾತ್ಸಲ್ಯಗಳು ಇರುವುದಾದರೆ ಈ ಜೀವಿಗಳು ಏತಕ್ಕಾಗಿ ಈ ರೀತಿಯ ಕಷ್ಟಗಳನ್ನು ಅನುಭವಿಸುತ್ತವೆ? ",
  },
  {
    number: 9,
    english:
      "This whole world is under a frightful illusion - just like the intoxication of fair where people worship their village diety. Dances, trances, balls of fire, deep introspection by some. This creation is filled so much wonder! - Mankutimma",
    kannada:
      "ಏನು ಭೈರವಲೀಲೆಯೀ ವಿಶ್ವವಿಭ್ರಮಣೆ ।\r\nಏನು ಭೂತಗ್ರಾಮನರ್ತನೊನ್ಮಾದ ॥\r\nಏನಗ್ನಿ ಗೋಳಗಳು! ಏನಂತರಾಳಗಳು! ।\r\nಏನು ವಿಸ್ಮಯ ಸೃಷ್ಟಿ! - ಮಂಕುತಿಮ್ಮ ॥ ೯ ॥",
    kannada_explanation:
      "ಏನಿದು ಭೈರವ ಲೀಲೆ. ಏನಿದು ಇಡೀ ವಿಶ್ವದ ಸುತ್ತಾಟ. ಏನಿದು ಪಂಚ ಮಹಾ ಭೂತಗಳ ಮತ್ತು ಆ ಭೂತಗಳ ವಾಸಸ್ಥಳವಾದ ಆ ಮಹಾ ಚೈತನ್ಯ ಮತ್ತು ಮತ್ತು ಆ ಚೈತನ್ಯದ ಉನ್ಮಾದಭರಿತ ನರ್ತನ.  ಏನಿದು ಅಗ್ನಿ ಗೋಳಗಳು ಈ ಸೃಷ್ಟಿಯ ಅಂತರಾಳ. ಆಹಾ ಎಂತಹ ಈ ವಿಸ್ಮಯ ಈ ಸೃಷ್ಟಿ. ಇದು ಈ ಕಗ್ಗದ ಅಂತರ್ಯದ ಭಾವ. ",
  },
  {
    number: 10,
    english:
      "What kind of a world is this? Why is this commotion? What wonder is this unabated force? What should be the goal of a man? What is his value? What will be his end? What is the meaning of all these? - Mankutimma",
    kannada:
      "ಏನು ಪ್ರಪಂಚವಿದು! ಏನು ಧಾಳಾಧಾಳಿ!।\r\nಏನದ್ಭುತಾಪಾರಶಕ್ತಿನಿರ್ಘಾತ! ॥\r\nಮಾನವನ ಗುರಿಯೇನು? ಬೆಲೆಯೇನು? ಮುಗಿವೇನು?।\r\nಏನರ್ಥವಿದಕೆಲ್ಲ?- ಮಂಕುತಿಮ್ಮ ॥ ೧೦ ॥",
    kannada_explanation:
      "ಇಲ್ಲಿಯವರೆಗೆ ಬಂದ ೯ ಕಗ್ಗಗಳಲ್ಲಿ, ಮೊದಲ ಮೂರು ಕಗ್ಗಗಳಲಿ, ಶ್ರೀ ಗುಂಡಪ್ಪನವರು, ಆ ಪರಮಾತ್ಮನೆಂದೆನಿಸಿಕೊಂಡ, ಪರಮಶಕ್ತಿಗೆ ನಮಿಸುತ್ತಾ, ಮುಂದಿನ ಕಗ್ಗಗಳಲ್ಲಿಮನುಷ್ಯನ ಜೀವನದ ಮತ್ತು ಸೃಷ್ಟಿಯ ವಿಚಿತ್ರಗಳನ್ನು ಬರೆದಿದ್ದಾರೆ. ಈ ಸಮಯಕ್ಕೆ ನಾ ಹಿಂದೆ ಹೇಳಿದಂತೆ ಎರಡನೇ ಮಹಾ ಯುದ್ಧ ಆರಂಭವಾಗಿ ಎಲ್ಲೆಲ್ಲೂ ಹಾಹಾಕಾರ ದಾಳಿಗಳು. ಇವಗಳನ್ನು ಕಂಡು ಅಂದಿನ ಸಮಯಕ್ಕೆ ಅವರ ಅನುಭೂತಿ ಏನಿತ್ತು ಎಂಬುದು ಇಂದಿನ ಮತ್ತು ಮುಂದಿನ ಕೆಲವು ಕಗ್ಗಗಳಲ್ಲಿ ಕಾಣಬಹುದು. ",
  },
  {
    number: 11,
    english:
      "There is a epidemic that has plagued the entire world. Death is dancing laughing at everyone. Everyday worries about the world is keeping the mind busy. Where is the end to all these? - Mankutimma",
    kannada:
      "ಮುತ್ತಿರುವುದಿಂದು ಭೂಮಿಯನೊಂದು ದುರ್ದೈವ ।\nಮೃತ್ಯು ಕುಣಿಯುತಲಿಹನು ಕೇಕೆಹಾಕುತಲಿ ॥\nಸುತ್ತಿಪುದು ತಲೆಯನನುದಿನದ ಲೋಕದ ವಾರ್ತೆ ।\nಎತ್ತಲಿದಕೆಲ್ಲ ಕಡೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೧ ॥",
    kannada_explanation:
      "ಭೂಮಿಕೆ ಅದೇ. ಯುದ್ಧ. ಘೋರ ವಿಶ್ವ ಮಹಾ ಯುದ್ಧ. ಇಡೀ ವಿಶ್ವವೇ ಅಲುಗಾಡುವಂಥ ಯುದ್ಧ. ಎಲ್ಲೆಲ್ಲೂ ರಕ್ತಪಾತ. ಎಲ್ಲೆಲ್ಲೂ ಯುದ್ಧದ ಕೂಗು. ಅದು ಈ ಭೂಮಿಗೆ ಆವರಿಸಿಕೊಂಡ ದುರ್ದೈವವೆಂದು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಎಲ್ಲೆಲ್ಲೂ ಮೃತ್ಯುವಿನ ತಾಂಡವ. ಯುದ್ಧದಲ್ಲಿ, ತಂದೆಯನ್ನೂ, ಅಣ್ಣನನ್ನೋ, ಮಗನನ್ನೂ, ಮಿತ್ರನನ್ನೋ, ತಮ್ಮನನ್ನೋ, ಭೂಮಿಯನ್ನೋ, ಹುಟ್ಟಿದೂರಲ್ಲಿ ಬಿಟ್ಟ ಬೇರನ್ನೋ, ಆ ಊರಿನ ಮಣ್ಣಿನ ಋಣವನ್ನೋ, ಕಳೆದುಕೊಂಡವರೆ ಬಹಳ ಜನ. ಕಳೆದುಕೊಂಡವರೆಲ್ಲರಿಗೂ ನೋವು. ಕಳೆದುಕೊಳ್ಳದವರಿಗೂ ಕಳೆದುಕೊಂಡವರ ನೋವಿಗಾಗಿ ಸಂತಾಪ. ಒಟ್ಟಾರೆ ಇಡೀ ಭೂಮಿಗೆ ಸೂತಕದ ಭಾವ. ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ಸಾವಿನ ನಷ್ಟದ ಸಮಾಚಾರ. ಪ್ರತಿನಿತ್ಯ ಈ ಸಮಾಚಾರಗಳನೆಲ್ಲ ಕೇಳಿ ಕೇಳಿ, ಪತ್ರಿಕೆಗಳಲ್ಲಿ ಓದಿ ಓದಿ ತಲೆ ಸುತ್ತುವಂತಾಗುತ್ತದೆ. ಇದಕ್ಕೆಲ್ಲ ಎಂದಿಗಾದರೂ ಕೊನೆಯುಂಟೆ ಎಂದು ಲೋಕ ಶಾಂತಿಗಾಗಿ ಮರುಗುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 12,
    english:
      "Are these people men or demons? Instead of shedding little tears for the sake of mother earth they soak her in blood. What hatred! What heat (resulting from destruction because of the hatred)! What smoke (after every thing worth saving is burnt)! Is this whole earth a court-place of a tyrrant. - Mankutimma",
    kannada:
      "ಮಾನವರೋ ದಾನವರೋ ಭೂಮಾತೆಯ ತಣಿಸೆ ।\nಶೋಣಿತವನೆರೆಯುವರು ಬಾಷ್ಪ ಸಲುವುದಿರೆ? ॥\nಏನು ಹಗೆ! ಏನು ಧಗೆ! ಏನು ಹೊಗೆ! ಯೀ ಧರಣಿ  ।\nಸೌನಿಕನ ಕಟ್ಟೆಯೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೨ ॥",
    kannada_explanation:
      "ಇವರೇನು ಮನುಷ್ಯರೋ ಅಥವಾ ರಾಕ್ಷಸರೋ? ಈ ಭೂಮಾತೆಯನು ತಣಿಸಲು ಅಂದರೆ ದಾಹವಿಂಗಿಸಲು ಕಣ್ಣೇರು ಸುರಿಸುವಬದಲು ರಕ್ತವನ್ನು ಸುರಿಸಿಹರಲ್ಲ! ಈ ಪ್ರಪಂಚದಲ್ಲಿನ ಹಗೆ ಮತ್ತು ಹೊಗೆಗಳನ್ನು ನೋಡಿದರೆ ಇಡೀ ಪ್ರಪಂಚವೇ ಕಟುಕನ ಜಗುಲಿಯಂತಿದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 13,
    english:
      "What is the greatest achievement of human free will? Is it the everyday blood shed on this earth? If you catch hold of a sword and pull it as if it were garland of flowers will it give out fragrance. - Mankutimma",
    kannada:
      "ಪುರುಷಸ್ವತಂತ್ರೆಯ ಪರಮಸಿದ್ಧಿಯದೇನು? ।\nಧರಣಿಗನುದಿನದ ರಕ್ತಾಭಿಷೇಚನೆಯೆ? ॥\nಕರವಾಲವನು ಪುಷ್ಪಸರವೆಂದು ಸೆಳೆದಾಡೆ ।\nಪರಿಮಳವ ಸೂಸುವುದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೩ ॥",
    kannada_explanation:
      "ಆಗ ನಡೆಯುತ್ತಿದ್ದ ಯುದ್ದ, ಯುದ್ದದಿಂದ ಆಗುತ್ತಿದ್ದ ದುಷ್ಪರಿಣಾಮಗಳು, ಇವುಗಳ ಬಗ್ಗೆ ಮನಕರಗಿ ಭಾವುಕರಾದ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಶಕ್ತಿಯ ಸ್ವಾತಂತ್ರದ ಸರ್ವೋಚ್ಚ ಗುರಿ, ಈ ಭೂಮಿಗೆ ಪ್ರತಿದಿನವೂ ರಕ್ತದ ಅಭಿಷೇಕವೇ, ಒರೆಯಿಂದ ಕತ್ತಿಯನ್ನು ಹೂವಿನ ಮಾಲೆ ಎಂದು ಎಳೆದರೆ ಅದರಿಂದ ಸುಗಂಧ ಬರಬಹುದೇ ಎನ್ನುತ್ತಾರೆ.",
  },
  {
    number: 14,
    english:
      "All people of this world see the same single sky, walk on the same earth, eat the same food, drink the same water and breathe the same air. Still how come they hate each other so much? - Mankutimma",
    kannada:
      "ಒಂದೆ ಗಗನವ ಕಾಣುತೊಂದೆ ನೆಲವನು ತುಳಿಯು ।\r\nತೊಂದೆ ಧಾನ್ಯವನುಣ್ಣುತೊಂದೆ ನೀರ್ಗುಡಿದು ॥\r\nಒಂದೆ ಗಾಳಿಯನುಸಿರ್ವ ನರಜಾತಿಯೊಳಗೆಂತು ।\r\nಬಂದುದೀ ವೈಷಮ್ಯ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೪ ॥",
    kannada_explanation:
      "ಒಂದೇ ಆಕಾಶವ ಕಾಣುತ, ಒಂದೇ ನೆಲವನ್ನು ತುಳಿಯುತ ಒಂದೇ ಧಾನ್ಯವನ್ನು ಉಣ್ಣುತ ಒಂದೇ ಗಾಳಿಯನು ಉಸಿರಾಡುವ ಮಾನವಜಾತಿಯ ಒಳಗೆ ಈ ದ್ವೇಷ ಹೇಗೆ ಬಂತು ಎಂದು ತಮಗೆ ತಾವೇ ಪ್ರಶ್ನಿಸುತ್ತ ಈ ವಿಚಾರವನ್ನು ಓದುಗರ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ, ಶ್ರೀ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 15,
    english:
      "All the old faiths and beliefs have faded. No new bright ideas have come by. The whole world is anxious - just like a blind man with just one leg finding his home collapse - that home which he was so familiar with. - Mankutimma",
    kannada:
      "ಹಳೆಯ ಭಕ್ತಿಶ್ರದ್ಧೆಯಳಿಸಿಹೋಗಿವೆ ಮಾಸಿ ।\r\nಸುಳಿದಿಲ್ಲವಾವ ಹೊಸ ದರ್ಶನದ ಹೊಳಪುಂ ॥\r\nಪಳಗಿದ್ದ ಮನೆ ಬಿದ್ದ ಕುಂಟ ಕುರುಡನ ತೆರದಿ ।\r\nತಳಮಳಿಸುತಿದೆ ಲೋಕ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫ ॥",
    kannada_explanation:
      "ಈಗ್ಗೆ ಎಪ್ಪತ್ತು ವರ್ಷಗಳ ಕೆಳಗೇ ಗುಂಡಪ್ಪನವರಿಗೆ ಹೀಗೆ ಅನ್ನಿಸಿದ್ದರೆ, ಇಂದು ಅವರು ಏನನ್ನುತ್ತಿದ್ದರೋ ಏನೋ!ಇರಲಿ, ಪುರಾತನ ಕಾಲದಿಂದಲೂ ಅನೂಚಾನವಾಗಿ ಜನಗಳಲ್ಲಿ ಇದ್ದ ದೇವರಲ್ಲಿ ಭಕ್ತಿ ಮತ್ತು ಸಂಪ್ರದಾಯಗಳಲ್ಲಿ ಇದ್ದ ಶ್ರದ್ಧೆ ಈಗ ಅಳಿಸಿ ಹೋಗಿದೆ. ಇಲ್ಲಿ ಸಂಪ್ರದಾಯ ಎಂದರೆ ಹಿಂದಿನಿಂದ ಬಂದಿರುವ ನಡವಳಿಕೆ ಎಂದಷ್ಟೆ ಅರ್ಥ. ಜನರಲ್ಲಿ ಮತ್ತೆ ಈ ಭಕ್ತಿ ಮತ್ತು ಶ್ರದ್ಧೆಗಳನ್ನು ತರಲು ಯಾವ ಹೊಸ ಸಿದ್ಧಾಂತಗಳೂ ಪ್ರತಿಪಾದಿಸಲ್ಪಟ್ಟು ಪ್ರಚಾರಕ್ಕೆ ಬಂದಿಲ್ಲ. ಹಾಗಾಗಿ ಜನರೆಲ್ಲರೂ ಮೊದಲಿನಿಂದ ಬಂದದನ್ನು ಕಳೆದು ಕೊಂಡು ಹೊಸದಿಲ್ಲದೆ ಒಂದು ಅತಂತ್ರ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದಾರೆ. ಯಾರ ಸಹಾಯವೂ ಇಲ್ಲದೆ ಸುಲಭವಾಗಿ ಮತ್ತು ಚೆನ್ನಾಗಿ ಓಡಾಡಲು ಅಭ್ಯಾಸವಾಗಿರುವ ಮನೆ ಕುಸಿದು ಹೋದರೆ, ಆ ಮನೆಯಲ್ಲಿ ವಾಸಿಸುವ ಕುಂಟನಿಗೋ ಕುರುಡನಿಗೋ, ಪಾಪ ತಳಮಳಿಸುವ ಮತ್ತು ಪರದಾಡುವಂತೆ ಆಗುತ್ತದಲ್ಲವೇ? ಹಾಗೆ ಆಗಿದೆ ಇಂದಿನ ಲೋಕದ ಪರಿಸ್ಥಿತಿ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 16,
    english:
      "The whole world is as restless as a spirit that has left this earth but not ascended to above world. Older beliefs and faiths have crumbled. New ones are not convincing yet. When will this restlessness end? - Mankutimma",
    kannada:
      "ಇಳೆಯ ಬಿಟ್ಟಿನ್ನು ಮೆತ್ತಲುಮೈದದ ಪ್ರೇತ ।\r\nವಲೆವಂತೆ ಲೋಕ ತಲ್ಲಣಿಸುತಿಹುದಿಂದು ॥\r\nಹಳೆಧರ್ಮ ಸತ್ತಿಹುದು ಹೊಸಧರ್ಮ ಹುಟ್ಟಿಲ್ಲ\r\nತಳಮಳಕೆ ಕಡೆಯೆಂದೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೬ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಯನ್ನು ಬಿಟ್ಟು ಎತ್ತಲೂ ಸೇರದ ಪ್ರೇತದಂತೆ ಲೋಕ ತಲ್ಲಣಿಸುತ್ತಿದೆ. ಹಳೆ ಧರ್ಮ ಸತ್ತಿದೆ. ಹೊಸ ಧರ್ಮ ಹುಟ್ಟಿಲ್ಲ ತಳಮಳಕೆ ಕಡೆ ಎಂದು ಮಂಕುತಿಮ್ಮ ಎಂದು ತಮ್ಮನ್ನು ತಾವೇ ಪ್ರಶ್ನಿಸುತ್ತಾ ಅದೇ ಪ್ರಶ್ನೆಯನ್ನು ನಮ್ಮ ಮುಂದಿಡುತ್ತಾರೆ.",
  },
  {
    number: 17,
    english:
      "Why are everyone on this earth so restless? It is similar to the restlessness among the Gods and Demons during the churning of the ocean when poison emanated as a produce. No one knew that it would be followed by elixir. So they did not know what to do with the poison. Luckily they had Lord Shiva to consume the posion and rescue the world. If we also know that there is such a person who will consume all our worries, then would we be still restless? - Mankutimma",
    kannada:
      "ತಳಮವಿದೇನಿಳೆಗೆ? ದೇವದನುಜರ್ಮಥಿಸೆ ।\nಜಳನಿಧಿಯೊಳಾದಂತೆ ಸುಧೆಗೆ ಪೀಠಿಕೆಯೇಂ? ॥\nಹಾಳಾಹಳಾವ ಕುಡಿವ ಗಿರಿಶನಿದ್ದಿರ್ದೊಡೀ । \nಕಳವಳವದೇತಕೆಲೋ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೭ ॥",
    kannada_explanation:
      "ಇಲ್ಲಿ ಒಂದು ಆಶಾಭಾವನೆಯನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತಾರೆ, ಶ್ರೀ ಗುಂಡಪ್ಪನವರು. ಆಗ ಎಲ್ಲೆಲ್ಲೂ ಅತಂತ್ರದ ಸ್ಥಿತಿ. ಹಳೆಯ ಭಕ್ತಿ ಶ್ರದ್ಧೆಗಳು ಸಶಿಸಿ ಹೊಸದು ಯಾವುದೋ ಇಲ್ಲದೆ, ಒಂದು ಅತಂತ್ರದ ಸ್ಥಿತಿ ಇದೆ. ಜನರೆಲ್ಲಾ ಕಳವಳ ಗೊಂಡು ತಳಮಳಿಸುತ್ತಿದ್ದಾರೆ. ಅಂತ ಸ್ಥಿತಿಯಲ್ಲಿ ಇವರಿಗೊಂದು ಆಶಾಭಾವನೆ. ಅದನ್ನು ಅವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಸೂಚಿಸುತ್ತಾರೆ.",
  },
  {
    number: 18,
    english:
      "Life is rolling on the waves of the river without any aim or goal. There is no beginning to this ordeal; No end, No signs of stopping. What difference does it make - life or death, medicine or poison? Every thing in the world is a mere water bubble. - Mankutimma",
    kannada:
      "ನದಿಯ ತೆರೆಯವೊಲುರುಳಿ ಹೊರಳುತಿರುವುದು  ಜೀವ ।\nಮೊದಲಿಲ್ಲ ಮುಗಿವಿಲ್ಲ ನಿಲುವಿಲ್ಲವದಕೆ  ॥\nಬದುಕೇನು ಸಾವೇನು ಸೊದೆಯೇನು ವಿಷವೇನು? ।\nಉದಕಬುದ್ಬುದವೆಲ್ಲ! - ಮಂಕುತಿಮ್ಮ ॥ ೧೮ ॥",
    kannada_explanation:
      "ವಾಚಕರೆ ಹಿಂದಿನ ಕಗ್ಗದಲ್ಲಿ ಈ ಹಳತು ಹೊಸತನದ ತಿಕ್ಕಾಟವನ್ನು ಅಮೃತಕ್ಕಾಗಿ ನಡೆಯುವ ಸಮುದ್ರ ಮಂಥನಕ್ಕೆ ಹೋಲಿಸಿದರು ಮಾನ್ಯ ಡಿ.ವಿ.ಜಿ ಯವರು.ಆದರೆ ಇಂದಿನ ಕಗ್ಗದಲ್ಲಿ ಒಂದು ವೇದಾಂತದ ಮಾತನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ. ಇಡೀ ಜೀವನವನ್ನು ಅವರು ಒಂದು ನದಿಯ ತೆರೆ ಅಥವಾ ಅಲೆಯಂತೆ ಎಂದಿದ್ದಾರೆ. ಒಂದು ನಿಮಿಷವೂ ಒಂದೇ ತೆರನಾಗಿ ಇರದ ನದಿಯ ತೆರೆಗೆ ಹೋಲಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 19,
    english:
      "By itself air will not go in & out of a lump of mud. If there is no life - then body is as good as a lump of mud. Usually people attribute breath and warmth as proof of life. But the same is found in a whirlwind (breath) and also when dead wood rub against each other (warmth). What then is the source of life? What is poison? What is elixir? How do they effect life? - Mankutimma",
    kannada:
      "ಗಾಳಿ ಮಣ್ಣುಂಡೆಯೊಳಹೊಕ್ಕು ಹೊರಹೊರಳದು ।\nಆಳೆನಿಪುದಂತಾಗದಿರೆ ಬರಿಯ ಹೆಂಟೆ ॥\nಬಾಳೇನು ಧೂಳು ಸುಳಿ, ಮರ ತಿಕ್ಕಿದುರಿಯ ಹೊಗೆ ।\nಕ್ಷೇಳವೇನಮೃತವೇಂ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯ ॥",
    kannada_explanation:
      "ಈ ದೇಹವನ್ನು ಮಣ್ಣು೦ಡೆಗೆ ಹೋಲಿಸಿದ್ದಾರೆ ಮತ್ತು ಈ ದೇಹದಲ್ಲಿ ಆಡುವ ಉಸಿರು ( ಗಾಳಿ ) ಆಡುತ್ತಿದ್ದರೆ ನಾವುಗಳು “ಆಳು” ಎಂದು ಎನ್ನಿಸಿ ಕೊಳ್ಳುತ್ತೇವೆ. ಇಲ್ಲದಿದ್ದರೆ ಈ ದೇಹ ಬರೀ ಮಣ್ಣಿನ ಹೆಂಟೆ ಎಂದು ಒಂದು ಅತ್ಯುತ್ತ್ತಮ ಸತ್ಯವನ್ನು ಪ್ರತಿಪಾದಿಸುತ್ತಾರೆ. ಇಂದು ನಮ್ಮ ಸ್ನೇಹಿತರೊಬ್ಬರು ಇದಕ್ಕೆ ಸರಿಯಾಗಿ” ಬಡಿತ ನಿಂತರೆ ಬಡಿವಾರ ಬಂದ್ ” ಎಂದು ಹಿಂದಿನ ಕಗ್ಗಕ್ಕೆ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ, ಬಹಳ ಸೂಕ್ತವಾಗಿ ಹೇಳಿದರು. ಬಹುಶಃ ಅವರಿಗೆ ಇಂದಿನ ಕಗ್ಗದ ಪರಿಚಯವಿತ್ತೇನೋ ಎಂದು ಅನ್ನಿಸುತ್ತದೆ. ಇರಲಿ ಗುಂಡಪ್ಪನವರು ಈ ಬಾಳನ್ನು ದೂಳ ಸುಳಿ ಎಂದು ಕರೆಯುತ್ತಾರೆ. ಇದು ಬಹಳ ಸೂಕ್ತವಾಗಿದೆ. ಏಕೆಂದರೆ,ನಾನು ಹಿಂದೆ ಒಮ್ಮೆ ಈ ಬ್ರಹ್ಮಾಂಡದ ವಿವರಣೆಯನ್ನು ಮಾಡುವಾಗ, ಇಡೀ ಬ್ರಹ್ಮಾಂಡವು ಎಷ್ಟು ದೊಡ್ಡದೆಂದರೆ, ಇದರೆದುರು ನಾವು ಒಂದು ದೂಳ ಕಣವೂ ಅಲ್ಲ ಎಂದು ಹೇಳಿದ್ದೆ. ಈಗ ಮಣ್ಣಿಂದ ಆದ, ಮತ್ತು ಈ ಸಮಸ್ತ ಭೂಮಂಡಲವನ್ನು ನಿವಾಸಸ್ಥಾನವನ್ನಾಗಿಸಿಕೊಂಡ ಪ್ರಾಣಿಗಳೆಲ್ಲವೂ ಧೂಳ ಕಣಗಳೇ ಎಂದು ಗುಂಡಪ್ಪನವರು ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 20,
    english:
      "What is the use of worshipping all the Gods (idols) you see? What is the use of planning sinister schemes? All one needs is one handfull of rice and piece of rag. Is all the wanderings of a man only to attain these? - Mankutimma",
    kannada:
      "ಕಂಡ ದೈವಕ್ಕೆಲ್ಲ ಕೈಯ ಮುಗಿದೇನಹುದು? ।\r\nಚಂಡಚತುರೋಪಾಯದಿಂದಲೇನಹೊದು? ॥\r\nತಂಡುಲದ ಹಿಡಿಯೊಂದು ತುಂಡು ಬಟ್ಟೆಯದೊಂದು ।\r\nಅಂಡಲೆತವಿದಕೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೦ ॥",
    kannada_explanation:
      "ಅಂದಿನ ಮತ್ತು ಇಂದಿನ ವಾಸ್ತವಿಕ ಚಿತ್ರಣವನ್ನು ನಮಗೆ ಗುಂಡಪ್ಪನವರು ಕೊಟ್ಟಿದ್ದಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ. ನಮ್ಮಲ್ಲಿ ಅನೇಕ ದೇವರುಗಳು. ಆ ದೇವರುಗಳ ಸಂಖ್ಯೆ ಎಷ್ಟಿದೆಯಂದರೆ ಎಣಿಸಲೂ ಸಾಧ್ಯವಿಲ್ಲ. ಒಂದುಕಡೆ ತಿರುಪತಿ ತಿಮ್ಮಪ್ಪನಾದರೆ, ಇನ್ನೊಂದು ಕಡೆ, ಬದರಿಯ ಬದರೀನಾಥ, ಒಂದುಕಡೆ ಮಧುರೆಯ ಮೀನಾಕ್ಷಿಯಾದರೆ, ಇನ್ನೊಂದುಕಡೆ ಕಾಶಿಯ ವಿಶಾಲಾಕ್ಷಿ, ಒಂದುಕಡೆ ಪೂರಿಯ ಜಗನ್ನಾಥನಾದರೆ ಇನ್ನೊಂದುಕಡೆ ತಿರುವನಂತಪುರದ ಅನಂತಪದ್ಮನಾಭ, ಒಂದುಕಡೆ ವಿನಾಯಕನಾದರೆ, ಇನ್ನೊಂದುಕಡೆ ಷಣ್ಮುಖ, ಹೀಗೇ ಬರೆಯುತ್ತಹೋದರೆ ಪಟ್ಟಿ ಬಹಳ ಉದ್ದ ಆದೀತು. ದೇಶ ಕಾಲ ಸಂಧರ್ಭಕ್ಕನುಗುಣವಾಗಿ ನಮಗೆ ನಾವು ಪೂಜಿಸುವ ದೇವತೆಗಳು ಬದಲಾಗುತ್ತ ಹೋಗುತ್ತಾರೆ. ಇದನ್ನೇ ಗುಂಡಪ್ಪನವರು “ಕಂಡ ದೈವಕ್ಕೆಲ್ಲ” ಎಂದಿರಬೇಕು.",
  },
  {
    number: 21,
    english:
      "What you treasure in this world as gold - fate treats it like dirt. You treat the boons given by providence as dirt. If the valuations of the materials is so different, then how can any trade be fair? - Mankutimma",
    kannada:
      "ಹೊನ್ನೆಂದು ಜಗದಿ ನೀಂ ಕೈಗೆ ಕೊಂಡುದನು ವಿಧಿ ।\r\nಮಣ್ಣೆನುವನ್; ಅವನ ವರ ಮಣ್ಣೆನುವೆ ನೀನು ॥\r\nಭಿನ್ನಮಿಂತಿರೆ ವಸ್ತುಮೌಲ್ಯಹಳ ಗಣನೆಯೀ ।\r\nಪಣ್ಯಕ್ಕೆ ಗತಿಯೆಂತೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೧ ॥",
    kannada_explanation:
      "ಯಾವುದನ್ನು ನೀನು ಚಿನ್ನ ಎಂದು ಕೈಗೆ ಎತ್ತಿಕೊಳ್ಳುತೀಯೋ, ಅದು ವಾಸ್ತವದಲ್ಲಿ ಚಿನ್ನವಾಗಿರದೆ, ಮಣ್ಣಂತೆ ನಿಷ್ಪ್ರಯೋಜಕವಾಗುತ್ತದೆ. ಆದರೆ ಕೆಲವು ಬಾರಿ ಬಯಸದೆ ಸಂದ ಭಾಗ್ಯವನ್ನು, ಆಪರಮಾತ್ಮನ ಕರುಣೆಯಿಂದ ವರ ರೂಪದಲ್ಲಿ ಸಂದದ್ದು ನಿನಗೆ ನಿಷ್ಪ್ರಯೋಜಕವಾಗಿ ಕಾಣುತ್ತದೆ. ಹೀಗೆ ವಸ್ತುಗಳ ನಿಜರೂಪ ಗುರುತಿಸುವುದರಲ್ಲಿ ನಮಗೆ ವ್ಯತ್ಯಾಸವಾದರೆ ಈ ಜಗತ್ತಿನ ವ್ಯಾಪಾರ ನಡೆಯುವುದು ಹೇಗೆ ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 22,
    english:
      "The whole world looks artificial. Where is truth in all these? The so-called creator is gone into hiding. This world is like a random congregation of people. We can never be sure of any body's intentions. Just like a traveller in a alien land, you must be very careful. - Mankutimma",
    kannada:
      "ಕೃತ್ರಿಮವೊ ಜಗವೆಲ್ಲ! ಸತ್ಯತೆಯದೆಲ್ಲಿಹುದೊ? ।\nಕರ್ತೃವೆನಿಸಿದನೆ ತಾಂ ಗುಪ್ತನಾಗಿಹನು ॥\nಚತ್ರವೀ ಜಗವಿದರೊಳಾರ ಗುಣವೆಂತಹುದೊ! ।\nಯಾತ್ರಿಕನೆ, ಜಾಗರಿರೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಐದು ಕಗ್ಗಗಳಲ್ಲಿ ವೇದಾಂತದ ಹಲವು ವಿಚಾರಗಳನ್ನು ನಮಗೆ ಅರುಹುತ್ತಾ, ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಜಗತ್ತಿನ ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ. ಈ ಜಗತ್ತು ಕೃತ್ರಿಮವೆನ್ನುತ್ತಾರೆ. ಇದನ್ನು ಕೇವಲ ಮಾನವರಜಗತ್ತಿಗೆ ಅನ್ವಯಿಸಿಕೊಳ್ಳಬೇಕು. ಏಕೆಂದರೆ, ಗಿಡ, ಮರ, ಪಶು ಪಕ್ಷಿ ಮತ್ತು ಅನ್ಯ ಜೀವಿಗಳಲ್ಲಿ ಇಂದಿಗೂ ಕೃತ್ರಿಮತೆ ನಾವು ಕಾಣುವುದಿಲ್ಲ. ಈ ಕೃತ್ರಿಮತೆ ಏನಿದ್ದರೂ ಕೇವಲ ಮಾನವರಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ. “ಏಕೆ ಹೀಗೆ? ಮಾನವರಲ್ಲಿ ಮಾತ್ರ ಏಕೆ? ಮಾನವರು ಮೊದಲಿನಿಂದಲೂ ಹೀಗೇ ಇದ್ದಾರೆಯೇ ಅಥವಾ ಈ ಕೃತ್ರಿಮತೆ ಕಾಲಕ್ರಮೇಣ ಜನಮಾನಸದಲ್ಲಿ ಹೊಕ್ಕಿದೆಯೇ?” ಎಂಬುದನ್ನು ಯೋಚಿಸಿದಾಗ ನಮಗೆ ಕಾಣುವುದು ಹೀಗೆ . ಮಾನವಮೊದಲಿನಿಂದಲೂ ಕೃತ್ರಿಮನಲ್ಲ. ಪ್ರಕೃತಿಯ ಮಗುವಾಗಿ ಪ್ರಕೃತಿಯಲ್ಲಿ ಒಂದಾಗಿ ಅಲ್ಲೇ ಜೀವಿಸುತ್ತಿದ್ದ. ಅವನೂ ಸಹ ಮಿಕ್ಕೆಲ್ಲ ಪ್ರಾಣಿಗಳಂತೆ, ತನ್ನ ಆಹಾರ ಹುಡುಕುವುದು, ತನ್ನನ್ನು ತಾನು ರಕ್ಷಿಸಿಕೊಳ್ಳುವುದು ಮತ್ತು ತನ್ನ ಸಂತತಿಯನ್ನು ಬೆಳೆಸುವುದು, ಇಷ್ಟಕ್ಕೆ ತನ್ನ ಚಟುವಟಿಕೆಗಳನ್ನು ಸೀಮಿತಗೊಳಿಸಿಕೊಂಡಿದ್ದ.",
  },
  {
    number: 23,
    english:
      "Is this is all existence all about these dry emotions (irritations)- wandering restlessly, eating what ever you find, flaunting what ever little wealth on has, dreaming, hating people, lamenting, getting angry, suffering. - Mankutimma",
    kannada:
      "ತಿರುತಿರುಗಿ ತೊಳಲುವುದು ತಿರಿದನ್ನವುಣ್ಣುವುದು ।\nಮೆರೆದು ಮೈಮರೆಯುವುದು ಹಲ್ಲ ಕಿರಿಯುವುದು ॥\nಮರಳಿ ಕೊರಗಾಡುವುದು ಕೆರಳುವುದು ನರಳುವುದು ।\nಇರವಿದೇನೊಣರಗಳೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೩ ॥",
    kannada_explanation:
      "ಮತ್ತೆ ಮತ್ತೆ ಮನುಷ್ಯ ಪರದಾಡುವುದು, ನಾವು ಎಲ್ಲ ಕಡೆಯೂ ಕಾಣಬಹುದು. ಪರದಾಡಿ ಅವರಿವರನ್ನು ಕಾಡಿ ಬೇಡಿ ಹೊಟ್ಟೆ ತುಂಬಿಸಿಕೊಳ್ಳುವುದು. ಪಡೆದದ್ದು ಹೆಚ್ಚಾದರೆ ಮೆರೆದು ಅಹಂಕಾರ ತೋರಿಸುವುದು. ತಮ್ಮನ್ನು ತಾವು, ಬಹಳ ಸಾಧಿಸಿದೆವೆಂದು ಅಹಂಕಾರದಿಂದ ಮೆರೆಯುವುದು., ಪಡೆದದ್ದನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಅವರಿವರ ಮುಂದೆ ಹಲ್ಲು ಕಿರಿಯುವುದು, ಗಿಂಜುವುದು, ಬೇಡುವುದು ನಾವು ಸರ್ವೇ ಸಾಮಾನ್ಯವಾಗಿ ಎಲ್ಲರಲ್ಲೂ ಕಾಣುತ್ತೇವೆ. ತಾವು ಅಂದುಕೊಂಡದ್ದು ಸಿಗದಿದ್ದ್ದರೆ ಕೋಪಗೊಳ್ಳುವುದು,ಹಾಗೂ ಸಿಗದಿದ್ದರೆ, ಕೈಲಾಗತನದಿಂದ ಸಂಕಟಪಡುವುದು ಅಥವಾ ನರಳುವುದು, ಇದನೆಲ್ಲಾ ಮಾನ್ಯ ಡಿ.ವಿ.ಜಿ.ಯವರು ಸತ್ವವಿಲ್ಲದ ಒಣ ರಗಳೆ ಅಥವಾ ಸತ್ವವಿಲ್ಲದ ಜೀವನದ ಪರಿ ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಸೂಚ್ಯವಾಗಿ ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 24,
    english:
      "Are Gods born out of human fears and desires? Or is human devotion only due to the arrogance (and tyranny) of Gods? Or are Gods troubling us in order to settle scores among themselves? Where is the concept of fairness here? - Mankutimma",
    kannada:
      "ನರರ ಭಯಬಯಕೆಗಳೆ ಸುರರ ತಾಯ್ತಂದೆಗಳೊ? ।\nಸುರರಟ್ಟಹಾಸದಿನೆ ನರಭಕ್ತಿಯೊರಲೋ? ॥\nಪರಿಕಿಸುವರೇನವರ್ಗಳನ್ಯೋನ್ಯಶಕ್ತಿಗಳ? ।\nಧರುಮವೆಲ್ಲಿದರಲ್ಲಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೪ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯರ ಬಯಕೆಗಳೇ ಈ ದೇವತೆಗಳಿಗೆ ತಂದೆ ತಾಯಿಗಳೋ ಎಂದು ಕೇಳುತ್ತಾರೆ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು. ಹೌದಲ್ಲವೇ ಈ ವಿಶ್ವದ ಎಲ್ಲವನ್ನೂ ಸೃಷ್ಟಿಸಿ ನಡೆಸಿಕೊಂಡು ಹೋಗುವ ಆ ಪರಮಾತ್ಮನಾಗಿರುವಾಗ, ಮನುಷ್ಯರು ತಮ್ಮ ತಮ್ಮ ಸಣ್ಣ ಸಣ್ಣ ಬಯಕೆಗಳನ್ನು ಈಡೇರಿಸಿಕೊಳ್ಳಲು ಬೇರೆ ಬೇರ ದೇವತೆಗಳನ್ನು ಸೃಷ್ಟಿಸಿಕೊಂಡಿರುವುದರಿಂದ, ಅವರಿಗೆ ನಮ್ಮ ಬಯಕೆಗಳೇ ತಂದೆ ತಾಯಿಗಳ ಸ್ಥಾನದಲ್ಲಿರುವುದು ತತ್ಯವಲ್ಲವೇ? ಇದನ್ನೇ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು ಹೇಳುತ್ತಾರೆ. ವಿದ್ಯೆಗೆ ಒಂದು ದೇವತೆ, ಹಣಕ್ಕೆ ಒಂದು ದೇವತೆ, ಮಳೆಗೆ ಒಂದು ದೇವತೆ, ಗಾಳಿಗೊಂದು ದೇವತೆ. ನಮಗೆ ಗಿಡ ಮರ ಬಳ್ಳಿಗಳೂ ನದಿ ಬೆಟ್ಟ ಕಾಡುಗಳೂ, ಎಲ್ಲವೂ ದೇವತಾ ಸ್ವರೂಪವೇ. ಹಾಗಾಗಿ ನಾವೇ ನಮ್ಮ ಕಲ್ಪನಾ ಶಕ್ತಿಯಿಂದ, ಆ ಪರಮಾತ್ಮನ ಸೃಷ್ಟಿ ಎಲ್ಲಕ್ಕೂ ದೇವತಾ ರೂಪವನ್ನು ಕೊಟ್ಟಿರುವುದರಿಂದ, ಮನುಷ್ಯರ ಬಯಕೆಗಳೇ ದೇವತೆಗಳಿಗೆ ತಂದೆ ತಾಯಿ ಸ್ಥಾನದಲ್ಲಿದ್ದಾವೆ, ಎಂದು ಗುಂಡಪ್ಪನವರು ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 25,
    english:
      "Just like a navigator (of a ship) uses a map (direction) and counts days to sail on a course our lives require such a blue-print. How can we understand (or come up with) the blueprint if we know neither the beginning nor the end? How did it all start? - Mankutimma",
    kannada:
      "ಜೀವಗತಿಗೊಂದು ರೇಖಾಲೇಖವಿರಬೇಕು ।\nನಾವಿಕನಿಗಿರುವಂತೆ ದಿಕ್ಕು ದಿನವೆಣಿಸೆ ॥\nಭಾವಿಸುವುದೆಂತದನು ಮೊದಲು ಕೊನೆ ತೋರದಿರೆ? ।\nಆವುದೀ ಜಗಕಾದಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೫ ॥",
    kannada_explanation:
      "ಒಂದು ಹಡಗನ್ನು ನಡೆಸಲು ನಾವಿಕನಿಗೆ ಒಂದು ದಿಕ್ಸೂಚಿ ಇರುತ್ತದೆ. ಸುತ್ತಲೂ ಸಮುದ್ರ ಮಧ್ಯದಲ್ಲಿ ಹಡಗು. ತನ್ನ ಗಮ್ಯದ ಕಡೆಗೆ ಹೋಗಲು ಆ ನಾವಿಕನಿಗೆ ದಿಕ್ಕನ್ನು ತೋರಲು ಒಂದು ದಿಕ್ಸೂಚಿ ಬೇಕು. ಆ ದಿಕ್ಸೂಚಿಯ ಸೂಚನೆಯಂತೆ ನಾವಿಕನು ಮುಂದುವರೆಯುತ್ತಾನೆ. ಆಗ ಹಡಗು ಆ ದಿಕ್ಕಿನಲ್ಲಿ ನೇರ ಹೋಗುತ್ತದೆ. ಆದರೆ ಜೀವನದ ಗತಿಗೆ ದಿಕ್ಸೂಚಿ ಯಾವುದು, ಇಲ್ಲ . ಅಂಥಹ ಒಂದು ದಿಕ್ಸೂಚಿ ಬೇಕು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಅಂದರೆ ಜೀವನದ ಗತಿಗೆ ಒಂದು ನೇರ ನಡೆ ಇಲ್ಲ. ಆ ನೇರ ನಡೆ ಬೇಕಾದರೆ ಒಂದು ನೇರ ಗೆರೆ ಬೇಕು ಎನ್ನುತ್ತಾರೆ. ಹೌದು ಇಡೀ ಬದುಕಿಗೆ ಒಂದು ನಿರ್ಧಿಷ್ಟ ಗತಿ ಅಥವಾ ಒಂದು ನಿರ್ಧಿಷ್ಟ ಯಾನದ ದಾರಿ ಇಲ್ಲ.",
  },
  {
    number: 26,
    english:
      "What is the goal of this creation? It is so unclear and merger of opposites. All the things that are likeable, mesmerising and magical are on one side. Those that are painful, fearful and horrific are on the other side. But the demarkation is not clear. They are indistinguishable from each other. This thing created by the creator is very difficult to understand. - Mankutimma",
    kannada:
      "ಸೃಷ್ಟಿಯಾಶಯವದೇನಸ್ಪಷ್ಟ ಸಂಶ್ಲಿಷ್ಟ ।\nಇಷ್ಟ ಮೊಹಕ ದಿವ್ಯಗುಣಗಳೊಂದು ಕಡೆ ॥\nಕಷ್ಟ ಭೀಭತ್ಸ ಘೋರಂಗಳಿನ್ನೊಂದು ಕಡೆ ।\nಕ್ಲಿಷ್ಟವೀ ಬ್ರಹ್ಮಕೃತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೬ ॥",
    kannada_explanation:
      "ಆಹಾ ಎಂತಹ ವಿಷಯ! ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡುವಂಥಾ ವಿಚಾರ. ಈ ಸೃಷ್ಟಿಯಾಗುವುದಕ್ಕೆ ಉದ್ದೇಶ್ಯವು ಏನಿತ್ತು ಎಂದು ಯೋಚಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಅದೊಂದು ಬ್ರಹ್ಮಗಂಟು. ಬಿಡಿಸಲಾಗದ್ದು. ಏಕೆಂದರೆ ಎಂತೆಂತಾ ಮಹಾ ಮಹಿಮರು ಈ ವಿಷಯದಲ್ಲಿ ಯೋಚನೆ ಜಿಜ್ಞಾಸೆ ತಪಸ್ಸು ಧ್ಯಾನ ಎಲ್ಲ ಮಾಡಿ ತಮಗೆ ತೋಚಿದ್ದನ್ನು ನಮಗೆ ಉಲ್ಲೇಖಿಸಿ ಕೊಟ್ಟಿದ್ದಾರೆ. ವೈಜ್ಞಾನಿಕ ಪರಿಭಾಷೆಗಳು ಬೇರೆ, ವೇದಾನ್ವಯ ಪರಿಭಾಷೆಗಳು ಬೇರೆ. ಸಿದ್ಧಾಂತಗಳು ಬೇರೆ , ನಂಬಿಕೆಗಳು ಬೇರೆ. ಆದರೆ ಎಲ್ಲೂ ಸಹಮತವಿಲ್ಲ. ನಾನು ಇಲ್ಲಿ ೯ನೆ ಕಗ್ಗಕ್ಕೆ ವಿವರಣೆ ನೀಡುವಾಗ ಕೆಲವು ಸೃಷ್ಟಿಯ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ವಿಚಾರಗಳನ್ನು ಮಂಡಿಸಿದ್ದೆ. ಅಂದು ಇಡೀ ವಿಶ್ವದ ಸೂಕ್ಷ್ಮ ವಿಚಾರ ಮಂಡಿಸಿದ್ದೆ. ಎಷ್ಟು ಅಗಾಧ, ಎಷ್ಟು ವಿಸ್ತಾರ ನಮ್ಮ ಯೋಚನೆಗೆ ನಿಲುಕದಷ್ಟು, ಎಂದು.",
  },
  {
    number: 27,
    english:
      "What is the meaning of life on this world? What is the aim? What are its fruits (benefit of enduring it)? Any action we do is just a round about to the ultimate goal. It is a constant struggle. We seem to come back to the proverbial square one again and again. Don't the animals and birds that lead a nomadic life wandering about for food very similar to us? Then what is the special achievement of mankind? - Mankutimma",
    kannada:
      "ಧರೆಯ ಬದುಕೇನದರ ಗುರಿಯೇನು ಫಲವೇನು? ।\nಬರಿ ಬಳಸು ಬಡಿದಾಟ ಬರಿ ಪರಿಭ್ರಮಣೆ ॥\nತಿರುತಿರುಗಿ ಹೊಟ್ಟೆ ಹೊರಕೊಳುವ ಮೃಗಖಗಕಿಂತ ।\nನರನು ಸಾಧಿಪುದೇನು? - ಮಂಕುತಿಮ್ಮ ॥ ೨೭ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಯಲ್ಲಿ ಜನಿಸಿದ ನಾವು ಮತ್ತು ನಮ್ಮ ಬದುಕು ಇದರ ಗುರಿಯೇನು? ಇದಕ್ಕಿರುವ ಪ್ರಯೋಜನವೇನು? ಸುಮ್ಮನೆ ಸುತ್ತಾಟ ಕೇವಲ ಪ್ರದಕ್ಷಿಣೆ ಬಂದ ಹಾಗೆ. ಕೇವಲ ಹೊಟ್ಟೆ ಪಾಡಿನ ಜೀವನ. ಪ್ರಾಣಿ ಪಕ್ಷಿಗಳಲ್ಲೂ ಸಹ ಈ ರೀತಿಯ ಹೊಟ್ಟೆ ಪಾಡಿನ ಜೀವನ ಮಾಡುತ್ತವೆ. ನಾವು ಅದಕ್ಕಿ೦ತ ಉತ್ತಮರೇನು ಅಲ್ಲ. ಇದೆಲ್ಲದರಿಂದ ಮನುಷ್ಯರು ಸಾಧಿಸುವುದದೇನು ? ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಕೆಲವು ಪ್ರಶ್ನೆಗಳನ್ನು ನಮ್ಮ ಮುಂದಿಡುತ್ತಾರೆ.",
  },
  {
    number: 28,
    english:
      "There are two seeming truths about creation. One suggests that compassion, romance, beauty and taste is the reason why there is a creation after all. Another second it seems as if the struggle and the hard heartedness is what that drives the world. It is not possible to know which one is the absolute truth. - Mankutimma",
    kannada:
      "ಕಾರುಣ್ಯ ಸರಸ ಸೌಂದರ್ಯ ರುಚಿಗಳೆ ಸೃಷ್ಟಿ- ।\nಕಾರಣಮೆನಿಪ್ಪವೊಲು ತೋರ್ಪುದೊಂದು ಚಣ ॥\nಕಾರ್ಪಣ್ಯ ಕಟುಕತೆಗಳೆನಿಪುದಿನ್ನೊಂದು ಚಣ ।\nತೋರದಾವುದು ದಿಟವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೮ ॥",
    kannada_explanation:
      "ಸಮಗ್ರ ಜೀವನದ ಚಿತ್ರದಲ್ಲಿ,ಈ ಜಗದ್ವ್ಯಾಪಾರಕ್ಕೆ, ಒಂದು ಬಾರಿ ಎನಗೆ, ಮಾನವರ ನಡುವಿನ ಕರುಣೆ, ವಿನೋದ ಸೌಂದರ್ಯ ಮುಂತಾದ ಸುಭಾವಗಳೇ ಕಾರಣವೆನಿಸುತ್ತದೆ. ಮತ್ತೆ ಕೆಲವು ಬಾರಿ ಜೀವನದ ಕಷ್ಟ ದುಃಖಗಳು, ಬಡತನ ಮತ್ತು ಬಡತನದಿಂದ ಕೂಡಿದ ಬದುಕಿನ ಕ್ಲಿಷ್ಟತೆಯಿಂದ ಕೂಡಿದ ಕಷ್ಟಗಳೇ ಕಾರಣವೆಂದು ಅನಿಸುತ್ತದೆ, ಇದು ಸತ್ಯವೋ ಅಥವಾ ಅದು ಸತ್ಯವೋ ಎಂದು ಅರಿಯದಾಗಿದೆ ಎಂದು ಒಂದು ಡೋಲಾಯಮಾನವಾದ ಭಾವನೆ ವ್ಯಕ್ತಪಡಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 29,
    english:
      "It could be possible that both are true. The seed of creation could well be in the destruction it self. Brahma (God of creation) may be with in Shiva (God of destruction). The Lord (Vishnu) has a flute in one hand and divine conch in the other. Only if he have two fingers can he produce a tapping sound. What can he do alone? Hence there must be opposites the creations. - Mankutimma",
    kannada:
      "ಎರಡುಮಿರಬಹುದು ದಿಟ; ಶಿವರುದ್ರನಲೆ ಬೊಮ್ಮ! ।\nಕರವೊಂದರಲಿ ವೇಣು, ಶಂಖವೊಂದರಲಿ! ॥\nಬೆರಳ್ಗಳೆರಡಾನುಮಿರೆ ಕೈ ಚಿಟಿಕೆಯಾಡುವುದು ।\nಒರುವನಾಡುವುದೆಂತು? - ಮಂಕುತಿಮ್ಮ ॥ ೨೯ ॥",
    kannada_explanation:
      "ಪರಮಾತ್ಮನಿಗೆ, ಶಿವನೆಂಬ ಶಾಂತ ಸುಂದರ ಮತ್ತು ಶುಭಕರವಾದ ರೂಪವೂ ಇರಬಹುದು ಅಥವಾ ರುದ್ರನೆಂದು ಕರೆಯಲ್ಪಡುವ ಭಯಂಕರ ರೂಪವೂ ಇರಬಹುದು ಅಥವಾ ಸರ್ವರನೂ ತನ್ನೆಡೆಗೆ ಆಕರ್ಷಿಸುವ, ನಯನ ಮನೋಹರ, ವೇಣುಗಾನಲೋಲನ ರೂಪವೂ ಇರಬಹುದು ಅಥವಾ ರಣ ಕಹಳೆಗೆ ದನಿಗೂಡಿಸಿ ಯುದ್ಧಕ್ಕೆ ಆಹ್ವಾನವೀಯುವ ಪಾಂಚಜನ್ಯವನ್ನೂದುವ ಕ್ಷಾತ್ರ ರೂಪವೂ ಇರಬಹುದು. ಎರಡು ರೂಪಗಳೂ ಸತ್ಯವಿರಬಹುದು. ಏಕೆಂದರೆ ಕೈ ಚಿಟಿಕೆಯಾಡಿಸಲು, ಎರಡು ಬೆರಳುಗಳೂ ಬೇಕು. ಒಂದೇ ಬೆರಳಲ್ಲಿ ಚಿಟಿಕೆಯಾಗುವುದೇ ಎನ್ನುತ್ತಾರೆ ಶ್ರೀ ಡಿ.ವಿ.ಜಿ ಯವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 30,
    english:
      "If God alone is real and all creation is a mere illusion, then is there no relation between those two? If our own eyes and mind tell us lies, then whom shall we believe? - Mankutimma",
    kannada:
      "ಬ್ರಹ್ಮವೇ ಸತ್ಯ, ಸೃಷ್ಟಿಯೆ ಮಿಥ್ಯೆಯೆನ್ನುವೊಡೆ ।\r\nಸಂಬಂಧವಿಲ್ಲವೇನಾ ವಿಷಯಯುಗಕೆ? ॥\r\nನಮ್ಮ ಕಣ್ಮನಸುಗಳೆ ನಮಗೆ ಸಟೆ ಪೇಳುವೊಡೆ ।\r\nನೆಮ್ಮುವುದದಾರನೋ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೦ ॥",
    kannada_explanation:
      "ಬ್ರಹ್ಮವೇ ಸತ್ಯ ಸೃಷ್ಟಿಯೇ ಮಿಥ್ಯ ಎನ್ನುವುದಾದರೆ ಈ ಜಗತ್ತು ಮತ್ತು ಅದನ್ನು ಸೃಷ್ಟಿಮಾಡಿದ ಆ ಪರ ಬ್ರಹ್ಮನಿಗೂ ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲವೇನು? ನಮ್ಮ ಕಣ್ಣು ಮನಸ್ಸುಗಳೇ ನಮಗೆ ಅಸತ್ಯವನ್ನು ಹೇಳುವುದಾದರೆ ನಂಬುವುದು ಯಾರನ್ನು ಎಂದು, ಸೃಷ್ಟಿಕರ್ತ ಮತ್ತು ಸೃಷ್ಟಿಯ ನಡುವಿನ ಸಂಬಂಧ ಕುರಿತಾದಂತ ಒಂದು ಅದ್ಭುತ ವಿಷಯವನ್ನು ನಮ್ಮ ಮುಂದಿಡುತ್ತಾರೆ ಶ್ರೀ ಡಿ.ವಿ.ಜಿ.ಯವರು ಈ ಕಗ್ಗದ ರೂಪದಲ್ಲಿ.",
  },
  {
    number: 31,
    english:
      "Is the truth hiding behind the viel of deceit? Can I believe that what ever is hiding to be the truth? It looks lke a strange ploy by the creations of God - they all mask the truth. - Mankutimma",
    kannada:
      "ಬಚ್ಚಿಟ್ಟುಕೊಂಡಿಹುದೆ ಸತ್ಯ ಮಿಥ್ಯೆಯ ಹಿಂದೆ? ।\r\nನಚ್ಚುವುದೆ ಮರೆಯೊಳಿಹುದನೆ ಸತ್ಯವೆಂದು? ॥\r\nಅಚ್ಚರಿಯ ತಂತ್ರವಿದು; ಬ್ರಹ್ಮಸೃಷ್ಟಿಗಳೇಕೊ ।\r\nಮುಚ್ಚಿಹವು ಸಾಜತೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೩೧ ॥",
    kannada_explanation:
      "ಸತ್ಯವಾದ ಆ ಪರಮಾತ್ಮವಸ್ತು ಅಸತ್ಯವಾದ ಈ ಸೃಷ್ಟಿಯ ಹಿಂದೆ ಬಚ್ಚಿಟ್ಟುಕೊಂಡಿರುವುದೇ? ಜಗತ್ತು ಕಾಣುತ್ತದೆ. ಇಂದ್ರಿಯ ಗ್ರಾಹ್ಯ. ಇದನ್ನು ಮಿಥ್ಯವೆಂದು ಅಸಥ್ಯವೆಂದು ಹೇಳುತ್ತಾರೆ. ಆದರೆ ಅದನ್ನು ಸೃಜಿಸಿದ ಶಕ್ತಿ ಕಾಣುವುದಿಲ್ಲ. ಭಾವಿಸಬಹುದು ಮತ್ತು ಕೇವಲ ಅನುಭವ ವೇಧ್ಯ. ಅದನ್ನು ಸತ್ಯವೆನ್ನುತ್ತಾರೆ.ಕಣ್ಣಿಗೆ ಕಾಣದೆ, ಮರೆಯಲ್ಲಿರುವುದನ್ನು ಸತ್ಯವೆಂದು ನಂಬುವುದು ಹೇಗೆ. ಈ ಸೃಷ್ಟಿಕರ್ತ ಮತ್ತು ಅವನ ಸೃಷ್ಟಿಯ ತಂತ್ರ ಬಹಳ ಆಶ್ಚರ್ಯಕರವಾದವು ಮತ್ತು ಸಹಜತೆಯು ಮುಚ್ಚಿಹುದು, ಸ್ಪಷ್ಟವಿಲ್ಲದೆ ,ಎನ್ನುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 32,
    english:
      "Let is assume that God created this world. Is it a game for him to create such worlds? Or is this his dream? Or just a mischief? If God is not a fool, there must be some order for this world. Wonder what is the that order/goal of this creation? - Mankutimma",
    kannada:
      "ಪರಬೊಮ್ಮನೀ ಜಗವ ರಚಿಸಿದವನಾದೊಡದು ।\nಬರಿಯಾಟವೋ ಕನಸೊ ನಿದ್ದೆ ಕಲವರವೋ? ॥\nಮರುಳನವನಲ್ಲದೊಡೆ ನಿಯಮವೊಂದಿರಬೇಕು ।\nಗುರಿಗೊತ್ತದೇನಿಹುದೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೨ ॥",
    kannada_explanation:
      "ಆ ಪರಮಾತ್ಮನು, ನಾವು ಹಿಂದೆ ಹೇಳಿದಂತೆ, ಈ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಿದ ಎಂದರೆ ಇದರ ಧ್ಯೇಯ ಮತ್ತು ದಿಶೆ ಎರಡೂ ಇಲ್ಲದೆ, ಒಂದು ನಿರ್ದಿಷ್ಟ ನಿಯಮವಿಲ್ಲದೆ ಏಕೆ ಹೀಗೆ ಇದೆ ? ಮಾನವರಿಗೆ ಅರ್ಥವಾಗದ ಈ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಿ, ಈ ಜಗತ್ತನ್ನು, ಬರಿ ಅವನಾಟವೆಂದೋ, ಕನಸೆಂದೋ, ಮಾಯೆಯೆಂದೋ ಹೇಳಿ, ಅರ ನಿದ್ರೆಯಲಿ ಆಡುವ ಅಸ್ಪಷ್ಟಮಾತುಗಳಂತೆ, ಈ ಜಗತ್ತಿನ ವಿಷಯದಲ್ಲಿ ಒಂದು ಸ್ಪಷ್ಟ ನಿರೂಪಣೆ ಏಕಿಲ್ಲವೆಂದು ಮತ್ತು ಇಂತಹ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಮಾಡಿದ, ಆ ಪರಮಾತ್ಮನು ಹುಚ್ಚನಲ್ಲವಷ್ಟೇ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ. ಈ ಕಗ್ಗಗಳನ್ನು ನೋಡಿದರೆ ಏಕೆ ಹೀಗೆ ಗುಂಡಪ್ಪನವರು ಮತ್ತೆ ಮತ್ತೆ ಇದೆ ಪ್ರಶ್ನೆಗಳನ್ನು ಬೇರೆ ಬೇರೆ ರೀತಿಯಲ್ಲಿ ಕೇಳಿದ್ದಾರೆ ಎಂದು ಸಂದೇಹವು ಬರುವುದು, ಸಹಜ. ವಿಷಯವೇ ಹಾಗಿದೆ. ಇದರ ವಿಚಾರವನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಜಿಜ್ಞಾಸೆಗೆ ಒಳಪಡಿಸಿದರೂ ಅರ್ಥವಾಗದಷ್ಟು ಕ್ಲಿಷ್ಟ. ಓದುಗರ ಮನಸ್ಸನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಚಿಂತನೆಗೆ ಹಚ್ಚುವ ಪ್ರಯತ್ನ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರದು.",
  },
  {
    number: 33,
    english:
      "If is God's wish to put us into tests all the time? Is our lives just a puzzle? What constitutes as its completion? Can you call a person who can help me find answers to these questions as a teacher? - Mankutimma",
    kannada:
      "ನರಪರೀಕ್ಷೆಯೆ ಬೊಮ್ಮನಾಶಯವೆ? ನಮ್ಮ ಬಾಳ್ ।\nಬರಿ ಸಮಸ್ಯೆಯೆ? ಅದರ ಪೂರಣವದೆಲ್ಲಿ? ॥\nಸುರಿದು ಪ್ರಶ್ನೆಗಳನುತ್ತರವ ಕುಡೆ ಬಾರದನ ।\nಗುರುವೆಂದು ಕರೆಯುವೆಯ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೩ ॥",
    kannada_explanation:
      "ಮಾನವರನ್ನು ಪರೀಕ್ಷಿಸುವುದೇ ಆ ಪರಮಾತ್ಮನ ಆಶಯವೇ? ನಮ್ಮ ಬಾಳು ಬರೀ ಸಮಸ್ಯೆಗಳ ಆಗರವೇ? ಇದಕ್ಕೆ ಅಂತ್ಯವೆಲ್ಲಿ? ಈ ರೀತಿಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿಸಿಕೊಂಡೂ ಸಹ ಅದಕ್ಕುತ್ತರಬಾರದವನನ್ನು ಗುರುವೆಂದು ಕರೆಯುವೆಯ?",
  },
  {
    number: 34,
    english:
      "Is it the wish of providence to let man suffer trying to find answers to his questions about the creations. The doubts always seem to multiply when he thinks more about the answers. Is this our final fate? - Mankutimma",
    kannada:
      "ಎಷ್ಟು ಚಿಂತಿಸಿದೊಡಂ ಶಂಕೆಯನೆ ಬೆಳಸುವೀ ।\nಸೃಷ್ಟಿಯಲಿ ತತ್ತ್ವವೆಲ್ಲಿಯೋ ಬೆದಕಿ ನರನು ॥\nಕಷ್ಟಪಡುತಿರಲೆನುವುದೋ ಬ್ರಹ್ಮವಿಧಿಯೇನೋ! ।\nಅಷ್ಟೆ ನಮ್ಮಯ ಪಾಡು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೪ ॥",
    kannada_explanation:
      "ಈ ಜಗದ್ಸೃಷ್ಟಿಯ ಬಗ್ಗೆ ಎಷ್ಟು ಚಿ೦ತಿಸಿದರೂ ನಿವಾರಣೆಯಾಗದ ಅನುಮಾನಗಳು, ಸಂದೇಹಗಳು ಹಾಗೆ ಉಳಿದಿವೆ. ಈ ಸೃಷ್ಟಿಯ ರಹಸ್ಯವನ್ನು ಚೇಧಿಸುವುದಕ್ಕಾಗಿ, ತತ್ವಗಳ ಹುಡುಕಿ, ತಡಕಿ ಕಷ್ಟಪದುವುದೇ ಮಾನವರಿಗೆ ಆ ಪರಮಾತ್ಮ ಬರೆದ ಹಣೆಬರಹವೋ, ಇಷ್ಟೇಯೇ ನಮ್ಮ ಪಾಡು ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 35,
    english:
      "It could be so that the Creator thought for eternity and designed this picture of the world. Would it demean his greatness any much if the mortal man is able to figure it out? - Mankutimma",
    kannada:
      "ಇರಬಹುದು; ಚಿರಕಾಲ ಬೊಮ್ಮ ಚಿಂತಿಸಿ ದುಡಿದು ।\r\nನಿರವಿಸಿಹ ವಿಶ್ವಚಿತ್ರವ ಮರ್ತ್ಯನರನು ॥\r\nಅರಿತೆನಾನೆನ್ನುವಂತಾಗೆ ಕೃತಿ ಕೌಶಲದ ।\r\nಹಿರಿಮೆಗದು ಕುಂದಲ್ತೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೫ ॥",
    kannada_explanation:
      "ಬಹಳಕಾಲ ಯೋಚನೆ ಮಾಡಿ ಶ್ರಮಪಟ್ಟು ಆ ಪರಮಾತ್ಮ ಈ ಅದ್ಭುತವಾದ ಜಗತ್ತನ್ನು ನಿರ್ಮಿಸಿರುವಾಗ, ಕೆಲಕಾಲ ಬದುಕಿ ಸಾವನ್ನಪ್ಪುವ ಯಃಕಶ್ಚಿತ್ ಮಾನವನೆಂಬ ಪ್ರಾಣಿ ಇದರ ರಹಸ್ಯವನ್ನು ತಾನು ಅರಿತುಕೊಂಡು ಬಿಟ್ಟೆ ಎಂದರೆ , ತನ್ನ ಹಿರಿಮೆ, ಶ್ರಮ ಮತ್ತು ಕುಶಲತೆಗಳಿಗೆ ಕುಂದು ಅಥವಾ ಕಳಂಕ ಬಂದಂತೆ ಆಗುತ್ತದೆ ಎಂದು, ಆ ಪರಮಾತ್ಮ, ಆ ಜಗತ್ತಿನ ರಹಸ್ಯಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಮಾನವರು ಅರಿತುಕೊಳ್ಳುವ ಶಕ್ತಿಯನ್ನು ಕೊಡಲಿಲ್ಲವೋ ಏನೋ? ಎಂಬ ಕುಹಕವನ್ನಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 36,
    english:
      "Is the providence fair in claiming that man did not succeed in his tests? It set up illusions all around him. It made him tread all the wrong (immoral) paths. - Mankutimma",
    kannada:
      "ಎಲ್ಲೆಲ್ಲಿಯುಂ ಮೋಹಸಂಭ್ರಾಂತಿಗಳ ಕವಿಸಿ ।\r\nಸಲ್ಲದ ಕುಮಾರ್ಗದೊಳು ನಿನ್ನ ತಾಂ ನಡಸಿ ॥\r\nಗೆಲ್ಲಲಿಲ್ಲವನಾ ಪರೀಕ್ಷೆಯೊಳಗೆಂದು ವಿಧಿ ।\r\nಸೊಲ್ಲಿಪುದು ಸರಿಯೇನೋ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೬ ॥",
    kannada_explanation:
      "ಇಡೀ ಜಗತ್ತೇ ಒಂದು ಭ್ರಾಂತಿಯ ಉಂಡೆ. ಮಾನವರಿಗೆ ಯಾವುದೂ ಅರ್ಥವಾಗುವುದಿಲ್ಲ ಆದರೂ ಪ್ರಯತ್ನ ಮಾಡುತ್ತಾನೆ. ಅವನಿಗೆ ಅರಿವಿನ ಮಿತಿ ಉಂಟು. ಅಮಿತವಾದ ಜಗತ್ಸೃಷ್ಟಿಯ ರಹಸ್ಯವನ್ನು ಪರಿಮಿತ ಮತಿಯಿಂದ ಅರಿಯುವುದೆಂತು? . ಈ ಜಗತ್ತನ್ನು ತನ್ನ ಅಪರಿಮಿತ ಶಕ್ತಿಯಿಂದ ಅಗಾಧವಾಗಿ ಸೃಷ್ಟಿಸಿ, ಮಾನವರನ್ನು ಅಲ್ಪಮತಿಗಳನ್ನಾಗಿಸಿ, ಅವನು ಅರಿಯುವ ಪ್ರಯತ್ನದಲ್ಲಿ ಸೋತಾಗ, ಇವನು ಗೆಲ್ಲಲಿಲ್ಲ ಎಂದು ಹೇಳುವುದು ಆ ಪರಮಾತ್ಮನಿಗೆ ಸರಿಯೇ? ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 37,
    english:
      "If you say that God incarnates on this world then why does his form change from time to time? Why is he not eager to show clues about himself to us? Why is he hiding? - Mankutimma",
    kannada:
      "ಅವತರಿಸಿಹನು ಬೊಮ್ಮ ವಿಶ್ವದೇಹದೊಳೆನ್ನೆ ।\r\nಅವನ ವೇಷಗಳೇಕೆ ಮಾರ್ಪಡುತಲಿಹವು? ॥\r\nತವಕಪಡನೇತಕೋ ಕುರುಹ ತೋರಲು ನಮಗೆ ।\r\nಅವಿತುಕೊಂಡಿಹುದೇಕೋ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೭ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತನ್ನು ಆ ಪರಮಾತ್ಮನೇ ಸೃಷ್ಟಿಮಾಡಿದ. ಈ ಜಗತಿನಲ್ಲಿರುವ ಎಲ್ಲವನ್ನೂ ಆ ಪರಮಾತ್ಮನೇ ಸೃಷ್ಟಿಮಾಡಿದ ಮತ್ತು ಎಲ್ಲದರಲ್ಲೂ ಅವನೇ ಇರುವನೆಂದು ತತ್ವಜ್ಞಾನಿಗಳು ಹೇಳುತ್ತಾರೆ. ಎಲ್ಲವೂ ಅವನ ರೂಪವೇ ಎಂದು ಹೇಳುತ್ತಾರೆ. ಹಾಗಾದರೆ ಎಲ್ಲದರಲ್ಲೂ ಅವನೇ ಅವತರಿಸಿದ್ದಾನೆ ಎಂದಾದರೆ, ಮತ್ತು ಪರಮಾತ್ಮ ನಿತ್ಯನೂ ಸತ್ಯನೂ ಅದಾಗ, ಈ ರೂಪಗಳ ಬದಲಾವಣೆ ಏಕೆ. ಎಲ್ಲ ರೂಪವೂ ಅವನೇ ಆದರೆ, ಅವನು ತನ್ನ ನಿಜ ರೂಪವನ್ನೇಕೆ ತೋರಿಸುವುದಿಲ್ಲ. ಏಕೆ ಅವಿತುಕೊಂಡಿದ್ದಾನೆ? ಎಂದು ಒಂದು ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 38,
    english:
      "Is the creator like a chameleon to change his appearance every minute? If that cheat is not ready to show himself completely ever, then what good are these part incarnations for any body? - Mankutimma",
    kannada:
      "ಬೇರಯಿಸಿ ನಿಮಿಷನಿಮಿಷಕಮೊಡಲಬಣ್ಣಗಳ ।\nತೋರಿಪೊಸರವಳ್ಳಿಯಂತೇನು ಬೊಮ್ಮಂ? ॥\nಪೂರ ಮೈದೋರೆನೆಂಬಾ ಕಪಟಿಯಂಶಾವ ।\nತಾರದಿಂದಾರ್ಗೇನು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೮ ॥",
    kannada_explanation:
      "ನಾವು ಈ ವರೆಗೆ ಹೇಳಿರುವುದೇನು ಎಂದು ಒಂದು ಬಾರಿ ನೋಡೋಣ. ಎಲ್ಲವೂ ಆ ಪರಮಾತ್ಮನಿಂದ ಆಗಿ ಅವನೇ ಎಲ್ಲ ರೂಪಗಳಲ್ಲಿಯೂ ಪ್ರಕಟವಾಗಿರುವ ಎಂದು ನಮ್ಮ ನಂಬಿಕೆ. ಈ ಪ್ರಪಂಚದಲ್ಲಿ ಇರುವ ಎಲ್ಲವೂ ಆ ಪರಮಾತ್ಮನೇ, ತನ್ನ ಅಂಶದಿಂದ ಪ್ರಕಟವಾಗಿ(ಸಿ)ದ್ದಾನೆ ಎಂದು. ಹಾಗಾಗಿ ಯಾರ್ಯಾರು ಏನೇನು ಎಂದು ಭಾವಿಸಿದರೆ ಹಾಗೆ ಅವರಿಗೆ ತೋರುವ ಆ ಪರಮಾತ್ಮ ವಸ್ತು ಏಕ ರೂಪದಲ್ಲಿ ಏಕೆ ಇಲ್ಲ ಎಂದು ಈ ಕಗ್ಗದ ಪ್ರತಾಪ. ಘಳಿಗೆ ಘಳಿಗೆಗೆ ಬದಲಾಗುವ ಮನುಷ್ಯರ ಮನದ ಭಾವಕ್ಕೆ ತಕ್ಕಂತೆ ಬದಲಾಗುವ ಆ ಪರಮಾತ್ಮ ಸ್ವರೂಪವನ್ನು ಗುಂಡಪ್ಪನವರು, ಊಸರವಲ್ಲಿಯಂತೆ ಕ್ಷಣಕ್ಕೊಂದು ರೂಪವನ್ನು ಏಕೆ ತೋರುತ್ತಾನೆ ಈ ಪರಮಾತ್ಮ. ಆಗಾಗ ಅವನೆತ್ತುವ ಅಂಶಾವತಾರಗಳಿಂದ ಯಾರಿಗೆ ಏನು ಪ್ರಯೋಜನ. ತನ್ನ ನಿಜ ರೂಪವನ್ನೇ ತೋರಬಹುದಲ್ಲ ಎಂದು, ಪ್ರತಾಪಿಸಿ, ಓದುಗರನ್ನು ಆ ಪರಮಾತ್ಮನ ನಿಜ ಸ್ವರೂಪವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಪ್ರೇರೇಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 39,
    english:
      "Let us entertain a thought that the creator who is behind a veil wants man to call the bluff (detect lie as lie) and be capable of seeing the truth. Then why has he not given us any real clue to that effect - like moon light during a dark night? - Mankutimma",
    kannada:
      "ಪುಸಿಯ ನೀಂ ಪುಸಿಗೈದು ದಿಟವ ಕಾಣ್ಬವೊಲೆಸಗೆ ।\r\nಮುಸುಕ ತಳೆದಿಹನು ಪರಬೊಮ್ಮನೆನ್ನುವೊಡೆ ॥\r\nಒಸೆದೇತಕವನೀಯನೆಮಗೊಂದು ನಿಜಕುರುಹ ।\r\nನಿಶೆಯೊಳುಡುಕರದವೊಲು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೯ ॥",
    kannada_explanation:
      "ಸುಳ್ಳನ್ನು ನೀನು ಸುಳ್ಳು ಎಂದು ಅರಿತುಕೊಂಡು ಸತ್ಯವನ್ನು ಕಾಣಲು ನಿನಗೆ ಸಹಾಯಮಾಡುವವನಂತಾದರೆ, ಆ ಪರಮಾತ್ಮನು ಮರೆಯಾಗಿ ಮುಸುಕು ಹಾಕಿಕೊಂಡಂತೆ ಇರುವುದಾದರೆ, ಅವನು ನಮ್ಮ ಮೇಲೆ ಪ್ರಸನ್ನನಾಗಿ, ರಾತ್ರಿ ಹೊತ್ತು ನಕ್ಷತ್ರದ ಕಿರಣಗಳು ನಮಗೆ ದಾರಿ ತೋರುವಂತೆ, ಒಂದು ಗುರುತನ್ನು ತನ್ನ ಇರುವಿಕೆಯ ಕುರುಹಾಗಿ ತೋರಿಸಬಾರದೇನು? ಇನ್ನುತ್ತಾರೆ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 40,
    english:
      "If he feels that daytime has too much light to his comfort, why does he not be seen even at night? Does he follow times according to cycles of Sun or Moon? Is the only time that he sneaks out when daylight fades into twilight?\n\n[Translator's note: This shloka is meant to question certain beliefs that some times in a day are more auspicious than others and Man can connect to God only then.] - Mankutimma",
    kannada:
      "ನಿಶಿಯೊಳೇಂ ಕಾಣಬಾರನು ಹಗಲನೊಲ್ಲದೊಡೆ ।\nಶಶಿರವಿಗಳವನ ಮನೆಕಿಟಕಿಯಾಗಿರರೇಂ? ॥\nಮುಸುಕುಬೆಳಕೊಂದಾದ ಸಂಜೆಮಂಜೇನವನು ।\nಮಿಸುಕಿ ಸುಳಿಯುವ ಸಮಯ? - ಮಂಕುತಿಮ್ಮ ॥ ೪೦ ॥",
    kannada_explanation:
      "ಹಗಲಲ್ಲಿ ಕಾಣಬಾರದೆಂತಾದರೆ, ರಾತ್ರಿಯಲ್ಲಿ ಏಕೆ ಕಾಣುವುದಿಲ್ಲ ಆ ಪರಮಾತ್ಮ. ರವಿ ಚಂದ್ರರು ಅವನ ಮನೆಯ ಕಿಟಕಿಗಳೇನು? ಇತ್ತ ಹಗಲೂ ಅಲ್ಲದೆ ನಿಶೆಯೂ ಅಲ್ಲದೆ ಇರುವ ಮುಸ್ಸಂಜೆಯ ಸಮಯವೇನು ಅವನು ಅಲೆದಾಡುವ ಸಮಯ ಎಂದು ಒಂದು ನೇರ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ. ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 41,
    english:
      "Let god lock himslef inside a temple. No Problem. At least, let him throw the key bunch outside. Those scholars who are good at words and sentences will at least then stop the arguments and debates and start talking (teaching) about the realization of the Truth.\r\n\r\n[Translator's note: Ancient scriptures in India say that there is one GOD and he can appear in different ways to different people. The scholars know this. Yet, they often have arguments and debates to prove that their image of GOD is the Truth and not other's. DVG seem to think that the only way they would end their debate is when God himself throws the key to the truth amongst us. Is he talking about he Bhagavadgita?] - Mankutimma",
    kannada:
      "ಕದಕಗಳಿಯನು ಬಿಗಿದು ಬೊಮ್ಮ ಗುಡಿಯೊಳಗಿರಲಿ ।\r\nಅದರ ಕೀಲ್ಕುಂಚಿಕೆಯ ಹೊರಕೆಸೆಯೆ ಸಾಕು ॥\r\nಪದವಾಕ್ಯವಿದರಾಗ ವಾದಗಡಣೆಯ ಬಿಟ್ಟು ।\r\nಒದವಿಪರು ದಿಟದರಿವ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧ ॥",
    kannada_explanation:
      "ಆ ದೇವರನ್ನು ಗುಡಿಯಲಿ ಬಿಟ್ಟು, ಬಾಗಿಲನ್ನು ಹಾಕಿ, ಚಿಲಕ ಹಾಕಿ, ಬೀಗ ಜಡಿದು ಬೀಗದ ಕೈಯನ್ನು ಎಸೆದುಬಿಟ್ಟರೆ, ಆಗ ಪಂಡಿತರು ಮತ್ತು ವಿಧ್ವಾಂಸರು ಆ ದೇವರನ್ನು ಕುರಿತ, ತಮ್ಮ ಪಾಂಡಿತ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸುವ ವ್ಯರ್ಥವಾದವನ್ನು ಬಿಟ್ಟು, ಆ ದೇವರನ್ನು ಕುರಿತಾದ ಸತ್ಯವನ್ನು ಅರಿಯಲು ಸಹಾಯಮಾಡುವರು ಎಂಬುದು ಈ ಕಗ್ಗದ ವಾಚ್ಯಾರ್ಥವು.",
  },
  {
    number: 42,
    english:
      'Aha! Do you imagine that this world has space for emotions when you see attachments (love), friendships and yearnings? Or all these feelings only meant for us exclaim "Ho Ho! Ha Ha!" now-and-then. - Mankutimma',
    kannada:
      "ಆಹ! ಈ ಮೋಹಗಳೊ ನೇಹಗಳೊ ದಾಹಗಳೊ ।\r\nಊಹಿಪೆಯ ಸೃಷ್ಟಿಯಲಿ ಹೃದಯಮಿಹುದೆಂದು? ॥\r\nಹೋಹೊ ಹಾಹಾ ಎಂದು ನಮ್ಮ ಬಾಯ್ಬಿಡಿಸುವುದೆ ।\r\nಈ ಹರಿಬದೊಳಗುಟ್ಟೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೪೨ ॥",
    kannada_explanation:
      "ಆಹಾ ಈ ಬಂಧನಗಳು ಸ್ನೇಹಗಳು ಮತ್ತು ಬಯಕೆಗಳು ಇವುಗಳ ಮಧ್ಯೆ ಈ ಜಗತ್ತಿನ ಎಲ್ಲರಲ್ಲೂ ಹೃದಯವಿದೆಯೆಂದು ನೀನು ಅಂದುಕೊಂಡಿದ್ದೀಯಾ. ಪರಸ್ಪರ ಮಾತುಗಳ ಅಟ್ಟಹಾಸದಿಂದ ನಿಮ್ಮನ್ನೂ ಅಂತಹ ಅಟ್ಟಹಾಸಕ್ಕೆ ಪ್ರತಿಕ್ರಿಯಿಸಿಸಿವುದೇ ಈ ಜಗದ್ವ್ಯಾಪಾರದ ಗುಟ್ಟು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 43,
    english:
      "There is some electrifying force that is causing this incessant movement of things. This force is every where - top, bottom, inside, outside, surrounding everything, nook-and-corner. This force acts on everything from specs of dust to celestial objects - Earth, Sun, Moon and the stars. Wonder what it may be and why it is so? - Mankutimma",
    kannada:
      "ಮೇಲೆ ಕೆಳಗೊಳಗೆ ಬಳಿ ಸುತ್ತಲೆತ್ತೆತ್ತಲುಂ ।\r\nಮೂಲೆಮೂಲೆಯಲಿ ವಿದ್ಯುಲ್ಲಹರಿಯೊಂದು  ॥\r\nಧೂಲಿಕಣ ಭೂಗೋಳ ರವಿ ಚಂದ್ರ ತಾರೆಗಳ ।\r\nಚಾಲಿಪುದು ಬಿಡು ಕೊಡದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೩ ॥",
    kannada_explanation:
      "ಪರಮ ಶಕ್ತಿಯ ಉಲ್ಲೇಖ ಈ ಕಗ್ಗದೊಳಗೆ. ಈ ಹಿಂದೆಯೂ ಈ ವಿಷಯದ ಬಗ್ಗೆ ಅವರೂ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ, ಮತ್ತೆ ನಾನೂ ಬರೆದಿದ್ದೇನೆ. ಸಕಲ ಜೀವರಾಶಿಗಳ ಅಸ್ತಿತ್ವಕ್ಕೆ ಕಾರಣೀಭೂತವಾದ ಆ ಪರಮ ಶಕ್ತಿಯನ್ನು ಎಲ್ಲ ಸಾಧಕರೂ, ಸಿದ್ಧರೂ, ಸತ್ಪುರುಷರೂ, ಭಕ್ತರೂ ತಮ್ಮ ಭಕ್ತಿ ಪಾರವಶ್ಯದಲ್ಲಿ ಅನುಭವಿಸಿದ್ದಾರೆ. ಮೇಲೆ, ಕೆಳಗೆ, ಒಳಗೆ, ಹತ್ತಿರ, ದೂರ, ಸುತ್ತಲು, ಮತ್ತು ಎತ್ತೆತ್ತಲೂ ಆ ವಿದ್ಯುಲ್ಲಹರಿಯು ಎಲ್ಲವನ್ನು ” ಬಿಡು ಕೊಡದೆ” ಎಂದರೆ ನಿರಂತರವಾಗಿ, ಒಂದು ಕ್ಷಣವೂ ವಿರಾಮವಿಲ್ಲದೇ ನಡೆಸುತ್ತಿದೆ ಎಂದು ಈ ಕಗ್ಗದ ಅಂತರ್ಯ.",
  },
  {
    number: 44,
    english:
      "Our eyesight is poor. It can not see too far. In this poor blurred vision we take some guesses and lead our lives. We do not get anything in our hand. But little flashes of light tantalize our eyes. Is guessing and groping in poor vision our ultimate fate? \n\n[Translator's note: Our senses are limited. There is much more in this universe that we can not pickup with our eyes or the machines we build. Our knowledge about the universe is though these senses and hence only limited. We never have felt anything as-is and what we think we see/hear/feel are all some educated guesses.] - Mankutimma",
    kannada:
      "ಮಂದಾಕ್ಷಿ ನಮಗಿಹುದು. ಬಲುದೂರ ಸಾಗದದು ।\nಸಂದೆ ಮಸಕಿನೊಳಿಹುದು ಜೀವನದ ಪಥವು ॥\nಒಂದುಮೆಟುಕದು ಕೈಗೆ; ಏನೊ ಕಣ್ಕೆಣಕುವುದು ।\nಸಂದಿಯವೆ ನಮ್ಮ ಗತಿ! - ಮಂಕುತಿಮ್ಮ ॥ ೪೪ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಮನಸ್ಸಿನ ಕಣ್ಣುಗಳು ಮಂದವಾಗಿವೆ. ಒಂದು ವಿಶಾಲವಾದ ದೃಷ್ಟಿ ನಮಗೆ ಇಲ್ಲ. ನಮ್ಮ ಆಲೋಚನೆಗಳು ಸ್ಪಷ್ಟವಿಲ್ಲದೆ ಸಂಜೆಗತ್ತಲಂತೆ ಮಸುಕುಮಸುಕಾಗಿರುವುದರಿಂದ ನಾವು ನಡೆಸುವ ನಮ್ಮ ಜೀವನದ ಪಥವು ಸಹ ಸ್ಪಷ್ಟತೆ ಇಲ್ಲದೆ ಮಸುಕಾಗಿದೆ. ನಮ್ಮ ಅಪೇಕ್ಷೆಗಳು ನಮಗೇ ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ. ಸರಿಯಾದ ವಸ್ತು ಇನ್ನೇನು ಸಿಕ್ಕಿತು ಎನ್ನುವ ವೇಳೆಗೆ, ನಮ್ಮ ಕಣ್ಣು ಅನ್ಯ ವಸ್ತುವಿನಮೇಲೆ ಬಿದ್ದು ನಮ್ಮನ್ನು ವಿಚಲಿತಗೊಳಿಸಿ, ಸಂದೇಹ ಮತ್ತು ಸಂದಿಗ್ಧಕ್ಕೆ ತಳ್ಳಿಬಿಡುತ್ತದೆ ಎನ್ನುವುದು ಈ ಕಗ್ಗದ ಅಂತರ್ಯ.",
  },
  {
    number: 45,
    english:
      "A ball of fire has light. So does a ball of butter. One is hot, one is cold. Eyes can not differentiate between the two. A simple ball of clay moulded into any shape is enough to decieve the eyes. The whole world is in darkness people will run to even a small lamp for light however inadequate it may be. After that, they will have no doubt that what ever they see in that low light is real.\r\n\r\n[Translator's note: More stress is laid on how limitted our senses are. Also it shows how we get comfortable with what we understand and believe it to be true.] - Mankutimma",
    kannada:
      "ಬೆಂಕಿಯುಂಡೆಯ ಬೆಳಕು ಬೆಣ್ಣೆಯುಂಡೆಯ ಬೆಳಕು ।\r\nಮಂಕುವಿಡಿಸಲು ಸಾಕು ಮಣ್ಣುಂಡೆ ಕಣ್ಗೆ ॥\r\nಶಂಕೆಗೆಡೆಯಿರದು ಕತ್ತಲೆಯೆ ಜಗವನು ಕವಿಯೆ ।\r\nಬೊಂಕುದೀವಿಗೆ ತಂಟೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೫ ॥",
    kannada_explanation:
      "ಸೂರ್ಯನ ಬೆಳಕಗಾಲೀ ಅಥವಾ ಚಂದ್ರನ ಬೆಳಕಗಾಲೀ ಅಥವಾ ಒಂದು ಪುಟ್ಟ ಹಣತೆಯಾದರೂ ಸಹ ನಮಗೆ ನೋಡಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ. ಆದರೆ ಜಗತ್ತನ್ನು ಸಂಪೂರ್ಣ ಕತ್ತಲೆ ಆವರಿಸಿದರೆ, ನೋಡುವ ಪ್ರಶ್ನೆಯೇ ಬರುವುದಿಲ್ಲ. ಆದರೆ ಒಂದು ಅರ್ದಂಬರ್ದವಾಗಿ ಕತ್ತಲೆ ಬೆಳಕಿನಾಟ ಕೇವಲ ತೊಂದರೆಯನ್ನು ಕೊಡುತ್ತದೆ ಎಂದು ಸೂಚ್ಯವಾಗಿ ಒಂದು ಗಹನವಾದ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 46,
    english:
      "Let the mystery of life be concealed behind a translucent veil - only barely visible. Will any one willingly marry a brinde who walks around naked on streets. People will not respect something that is easily accessible. Only when the mystery blooms in hiding does it tantalize our hearts with curiosity. - Mankutimma",
    kannada:
      "ಇರಲಿ ಜೀವರಹಸ್ಯವರೆಪರದೆಯೊಳಗಡಗಿ ।\nಅರಸಿ ವರಿಸುವರಾರು ಬೀದಿಬತ್ತಲಿಯ? ॥\nಅರಳಿಪುದದಡಗಿರ್ದೊಡಾಗ ನಮ್ಮದೆಗಣ್ಣ ।\nಸುರಸತೆಯ ಕುತುಕದಿಂ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬ ॥",
    kannada_explanation:
      "ಈ ಸೃಷ್ಟಿಯ ರಹಸ್ಯವು ತನ್ನ ನಿಜರೂಪವ ತೋರದೆ, ಒಂದು ಮಸುಕಾದ ಪರದೆಯೊಳಗೆ ಅಡಗಿದ್ದರೆ ಇರಲಿ. ನಮಗೆ ನಿಜವಾದ ಜ್ಞಾನವನ್ನು ಕೊಡಬೇಕಾದ ವಸ್ತು ಹೀಗೆ ಅಡಗಿ ಕುಳಿತ್ತಿದ್ದರೆ, ಹಾದಿಯಲ್ಲಿ ಹೋಗುವ ಓರ್ವ ಹುಚ್ಚಿಯನ್ನು ಯಾರಾದರೂ ಹುಡುಕಿಕೊಂಡು ಹೋಗಿ ಹೇಗೆ ವರಿಸುವುದಿಲ್ಲವೋ ಹಾಗೆ, ನಮ್ಮ ಅಂತಃಚಕ್ಷು ಕಾತರದಿಂದ ಅದನ್ನು ಅರಿಯಲು ಕಾಯುತ್ತಿರುತ್ತದೆ ಎಂದು ಪರಮಾತ್ಮನನ್ನು ಅರಿತುಕೊಳ್ಳುವ ವಿಚಾರವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 47,
    english:
      "What is the use of lamenting that our eyes are not capable of seeing the complete truth? What is the use of bemoaning that light in this world is not sufficient? It is best if we try to see whatever is visible in whatever light is available. - Mankutimma",
    kannada:
      "ಅರೆಗಣ್ಣು ನಮದೆಂದು ಕೊರಕೊರಗಿ ಫಲವೇನು? ।\nಅರೆಬೆಳಕು ಧರೆಯೊಳೆಂದೊರಲಿ ಸುಖವೇನು? ॥\nಇರುವ ಕಣ್ಣಿರುವ ಬೆಳಕಿನೊಳಾದನಿತ ನೋಡಿ ।\nಪರಿಕಿಸಿದೊಡದು ಲಾಭ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭ ॥",
    kannada_explanation:
      "ನಮಗೆ ತಿಳಿದಿರುವುದು ಅರೆ ಬರೆ. ಈ ಅರೆ ಬರೆ ಜ್ಞಾನವನ್ನು ಇಟ್ಟುಕೊಂಡು ನಾವು ಪೂರ್ಣ ಸತ್ಯವನ್ನು ಪಡೆಯುವುದು ಹೇಗೆ ಎಂದು ಗೋಳಾಡದೆ ಇರುವ ಅರಿವಿನಿಂದ ಸಂಪೂರ್ಣ ಜ್ಞಾನವನ್ನು ಪಡೆದುಕೊಳ್ಳಲು ಪ್ರಯತ್ನಿಸಿದರೆ ಅದು ಲಾಭಧಾಯಕವೆನ್ನುತ್ತಾರೆ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು. ಈ ಜಗತ್ತಿನ ಯಾವುದೇ ಭಾಗದಲ್ಲಿ ದಿನದ ಅರ್ಧಭಾಗ ಬೆಳಕು ಇನ್ನರ್ಧಭಾಗ ಕತ್ತಲು. ಬೆಳಕಿನಲ್ಲಿ ನಾವು ನಮ್ಮ ಕೆಲಸ ಕಾರ್ಯಗಳು ಮಾಡುವಹಾಗೆ, ಇರುವ ಜ್ಞಾನವನ್ನು ಉಪಯೋಗಿಸಿದರೆ ಲಾಭ ಎನ್ನುತ್ತಾರೆ. ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 48,
    english:
      "Each of us can see some thing from what ever poor vision that we have. They are different incomplete versions of the truth. But we need not be disheartened. If we can unite all the different incomplete vision (which are all truths by themselves), we may get to know the real truth. - Mankutimma",
    kannada:
      "ಒಂದಿಹುದುಪಾಯವೋರೊರ್ವನರೆಗಣ್ಣುಗಳು ।\nಮೊಂದೊಂದು ಸತ್ಯಾಂಶಕಿರಣಗಳ ಪಿಡಿದು ॥\nಒಂದುಗೂಡಿದೊಡವರ್ಗಳರಿವನೆಲ್ಲವನಾಗ ।\nಮುಂದು ಸಾಗುವೆವಿನಿತು - ಮಂಕುತಿಮ್ಮ ॥ ೪೮ ॥",
    kannada_explanation:
      "ಎಲ್ಲರಲ್ಲೂ ಅವರವರ ಭಾವಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಅಲ್ಪ ಸ್ವಲ್ಪ ಜ್ಞಾನವಿರುತ್ತದೆ. ಜ್ಞಾನಶೂನ್ಯ ಎಂಬುವವನು ಇರಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ. ಹಾಗೆ ಎಲ್ಲರಿಗೂ ಇರುವ ಅಲ್ಪಸ್ವಲ್ಪ ಜ್ಞಾನಗಳನ್ನೆಲ್ಲ, ಎಲ್ಲರ ಮನದಲ್ಲಿರುವ ಸತ್ಯವಾದ ವಿಚಾರಗಳನ್ನು ಒಂದು ಕಡೆ ಸೇರಿಸಿ ಎಲ್ಲರೂ ತಮ್ಮ ಮತವೆ ಉತ್ತಮವಾದದ್ದು ಎಂಬ ಭಾವನೆ ತೊರೆದು ಒಮ್ಮತದಿಂದ ಮುಂದೆ ಹೋದರೆ, ಎಲ್ಲರೂ ಪರಮಸತ್ಯವನ್ನರಿಯುವ ಹಾದಿಯಲ್ಲಿ ಒಂದಿಷ್ಟು ಮುಂದಕ್ಕೆ ಹೋಗಬಹುದು ಎನ್ನುವುದು ಈ ಕಗ್ಗದ ಮೂಲಕ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಪ್ರಸ್ತಾಪ.",
  },
  {
    number: 49,
    english:
      "Let us ask these learned scholars who are determined to bridge the gap between what we can see and feel (false) to the ultimate truth - Have you people been able to measure the emotional depth, ferocity of the swirls that are found there? Any talk about the truth that ignores (does not explain) the human emotion/conscience is a waste. - Mankutimma",
    kannada:
      "ಪಂಡಿತರೆ ಶಾಸ್ತ್ರಿಗಳೆ ಮಿಥ್ಯೆಯಿಂ ತಥ್ಯಕ್ಕೆ ।\r\nಖಂಡಿತದಿ ಸೇತುವೆಯ ಕಟ್ಟುವೊಡೆ ನೀವು ॥\r\nಕಂಡಿಹಿರ ನರಹೃದಯದಾಳ ಸುಳಿ ಬಿರುಬುಗಳ? ।\r\nದಂಡವದನುಳಿದ ನುಡಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೯ ॥",
    kannada_explanation:
      "ಪಾಂಡಿತ್ಯವನ್ನು ಪ್ರತಿಪಾದಿಸುವ ಪಂಡಿತರೆ ಮತ್ತು ಶಾಸ್ತ್ರವನ್ನು ಪ್ರತಿಪಾದಿಸುವ ಶಾಸ್ತ್ರಿಗಳೆ, ನಿಮ್ಮ ಪಾಂಡಿತ್ಯದಿಂದ ಮತ್ತು ಶಾಸ್ತ್ರ ಪ್ರತಿಪಾದನೆಯಿಂದ ಸುಳ್ಳನ್ನೇ ನಿಜವೆಂದು ನಿರೂಪಿಸಲು ಮತ್ತು ಇವೆರಡರ ಮಧ್ಯೆ ಒಂದು ಸೇತುವೆಯನ್ನು ಕಟ್ಟುವಾಗ ಸಾಮಾನ್ಯ ಮನುಜರ ಹೃದಯದಾಳದಲ್ಲಿ ಇರುವ ಗೊಂದಲಗಳು, ಅವರು ಅನುಭವಿಸುವ ಕಾಠಿಣ್ಯಗಳನ್ನು ಕಂಡಿದ್ದೀರಾ ಎಂದು ಕೇಳುತ್ತಾ ಸಾಮಾನ್ಯರ ಮನದ ಭಾವದ ಮುಂದೆ ಎಲ್ಲ ಪಾಂಡಿತ್ಯವೂ ಮತ್ತು ಶಾಸ್ತ್ರಗಳೂ ದಂಡವೆನ್ನುತ್ತಾರೆ (ನಿಷ್ಪ್ರಯೋಜಕ) ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 50,
    english:
      "Where can I find the truth? Should I hope to see it through scriptures and logic? Should experience also not be a way to reach the truth? In the stage of the human heart many emotions (due to experiences) take shape and those voices taunt the inadequacy of logic in this matter (of finding the ultimate truth). - Mankutimma",
    kannada:
      "ಮನೆಯೆಲ್ಲಿ ಸತ್ಯಕ್ಕೆ? ಶ್ರುತಿ ತರ್ಕಮಾತ್ರದೊಳೆ? ।\r\nಅನುಭವಮುಮದರೊಂದು ನೆಲೆಯಾಗದಿಹುದೇಂ? ॥\r\nಮನುಜಹೃದಯಾಂಗಣದೊಳೆನಿತೆನಿತೊ ದನಿಯುದಿಸಿ ।\r\nಅಣಕಿಪುವು ತರ್ಕವನು - ಮಂಕುತಿಮ್ಮ ॥ ೫೦ ॥",
    kannada_explanation:
      "ಸತ್ಯಕ್ಕೆ ಎಲ್ಲಿ ಮನೆ? ಶೃತಿ ತರ್ಕ ಮತ್ತು ವಾದಗಳಲ್ಲಿ ಮಾತ್ರವೇನು? ಮನುಜರ ಅನುಭವವೂ ಸತ್ಯವನ್ನು ನುಡಿಯಬಾರದೇನು? ಮನುಜರ ಹೃದಯದ ಆಂಗಣದಲ್ಲಿ ಹತ್ತು ಹಲವಾರು ಸತ್ಯದ ಭಾವಗಳು ಉದಯಿಸಿ ಈ ಶಾಸ್ತ್ರ ತರ್ಕ ಮತ್ತು ವಾದಗಳು ಪ್ರತಿಪಾದಿಸುವ ಸತ್ಯವನ್ನೆಲ್ಲ ಅಣಕಿಸುತ್ತವೆ ಎನ್ನುತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 51,
    english:
      "I feel that some external force has a firm grip on all my inner essence (life, mind) and is dragging it towards these wonders of this external sensory world. Is this attraction a matter of fate? Or is it some law of creation that we are not able to decipher? Think. - Mankutimma",
    kannada:
      "ಸೆಳೆಯುತಿರ್ಪುವದೊಂದು ಹೊರಬೆಡಗಿನೆಳೆಗಳೆ ।\nನ್ನೊಳಗಿನಸುವೆಲ್ಲವನು ಕಟ್ಟಿನಿಂ ಬಿಗಿದು ॥\nಎಳೆದಾಟವೇಂ ಋಣಾಕರ್ಷಣೆಯೊ? ಸೃಷ್ಟಿವಿಧಿ ।\nಯೊಳತಂತ್ರವೊ? ನೋಡು - ಮಂಕುತಿಮ್ಮ ॥ ೫೧ ॥",
    kannada_explanation:
      "ಹೊರಜಗತ್ತಿನ ಆಕರ್ಷಣೆಗಳು ನನ್ನೊಳಗಿನ ಚೇತನವನ್ನು ಯಾವುದೋ ಒಂದು ಶಕ್ತಿ ಬಿಗಿದು ಕಟ್ಟಿ ಹಾಕಿ ಎಳೆಯುತ್ತಿದೆ. ಇದು ಏನು ಎಲೆದಾಟವೋ ಅಥವಾ ಪೂರ್ವ ಕರ್ಮಗಳ ಸೆಳೆತವೋ? \n ಅಥವಾ ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ನಿಯಮದ ಒಳತಂತ್ರವೋ ಎನ್ನುವುದನ್ನು ನೀನೆ ಪರಕಿಸಿ ನೋಡು ಎನ್ನುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 52,
    english:
      "The blue sky in the morning pleases me. For some unknown reason, I don't like the crimson hue of the same sky during sunset. Where is the source of this pleasure? Is it in the blue? or in crimson? or in my mind that differentiates the two? - Mankutimma",
    kannada:
      "ಗಗನನೀಲಿಮೆಯೆನ್ನ ಕಣ್ಗೆ ಸೊಗೆವೀವಂತೆ ।\nಮುಗಿವ ತರಣಿಯ ರಕ್ತ ಹಿತವೆನಿಸದೇಕೋ! ॥\nಸೊಗದ ಮೂಲವದೆಲ್ಲಿ ನೀಲದೊಳೊ ಕೆಂಪಿನೊಳೊ ।\nಬಗೆವೆನ್ನ ಮನಸಿನೊಳೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೨ ॥",
    kannada_explanation:
      "ಆಕಾಶದ ತಿಳಿನೀಲಿ ಬಣ್ಣವು ಎನ್ನ ಮನಸ್ಸಿಗೆ ಹಿತವನ್ನು ಕೊಡುತ್ತೆ. ಆದರೆ ಮುಳುಗುವ ಸೂರ್ಯನ ಕೆಂಪು ಬಣ್ಣ ಎನಗೇಕೋ ಹಿತವನ್ನು ಕೊಡುವುದಿಲ್ಲ. ಆ ಹಿತ ಎನ್ನುವುದು ಆಕಾಶದ ನೀಲಿ ಬಣ್ಣದಲ್ಲಿದೆಯೋ ಅಥವಾ ಮುಳುಗುವ ಸೂರ್ಯನ ರಕ್ತ ವರ್ಣದಲ್ಲಿದೆಯೋ ಅಥವಾ ಎರಡೂ ಅಲ್ಲದೆ, ಹಿತವೆಂದು ತಿಳಿಯುವ ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಇದೆಯೋ ಎಂದು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ, ಶ್ರೀ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 53,
    english:
      "Where did the grass get its green color? Did it get it from its roots? or the soil? Or the Sun? or the Moon? or the water? or from you, the observer? Or is it that your eyes are fortunate to see it as pleasing green? Can there be only one source for any quality we find in objects (and people)? - Mankutimma",
    kannada:
      "ತೃಣಕೆ ಹಸಿರೆಲ್ಲಿಯದು? ಬೇರಿನದೆ? ಮಣ್ಣಿನದೆ? ।\nದಿನಪನದೆ? ಚಂದ್ರನದೆ? ನೀರಿನದೆ? ನಿನದೆ? ॥\nತಣಿತಣಿವ ನಿನ್ನ ಕಣ್ಣಿನ ಪುಣ್ಯವೋ? ನೋಡು ।\nಗುಣಕೆ ಕಾರಣವೊಂದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೩ ॥",
    kannada_explanation:
      "ಹೌದಲ್ಲವಾ? ನಮಗೂ ಇಂತಹ ಪ್ರಶ್ನೆಗಳು ಮನದಲ್ಲಿ ಉದ್ಭವವಾಗಿರಬಹುದು, ಹಲವು ಬಾರಿ. ನಾವು ನೋಡುವ ಪ್ರತಿವಸ್ತುವಿನಲ್ಲೂ ಹಲವು ಸೋಜಿಗಗಳನ್ನು ನಾವು ಕಾಣಬಹುದು. ಆದರೆ ಆ ಸೋಜಿಗಕ್ಕೆ ಒಂದು ಕಾರಣವನ್ನು ಹುಡುಕಲು ನಮ್ಮಿಂದಾಗುವುದಿಲ್ಲ. ಏಕೆಂದರೆ ಒಂದು ಕಾರಣದಿಂದ ಆದಂತ ವಸ್ತುವಾವುದೂ ಈ ಪ್ರಪಂಚದಲ್ಲಿ ಇಲ್ಲವೆಂಬುದೆ ನನ್ನ ಗಟ್ಟಿ ನಂಬಿಕೆ. ಹಾರುವ ಹಕ್ಕಿಯ ಬಣ್ಣ, ರೆಕ್ಕೆಯ ವಿನ್ಯಾಸ, ಹಾವಿನ ರೂಪ, ಅದರ ಮೈಮೇಲಿನ ಚಿತ್ತಾರಗಳು, ಅಬ್ಬಾ ಎಂತಹ ವಿಚಿತ್ರ. ಇದೊಂದೂ ನಮಗೆ ಅರ್ಥವಾಗುವುದಿಲ್ಲ. ಎಲ್ಲವೂ ವಿಸ್ಮಯ.",
  },
  {
    number: 54,
    english:
      "Doing a careful cause-effect analysis for all that we see will not lead us to the knowledge of the truth. Our logic and methods of deduction are mere jabbing forks at the truth - some times it sticks. Some time not. But never the complete truth. But for people who can think with a clear open mind - the complete truth surfaces at times in form of subtle experiences. - Mankutimma",
    kannada:
      "ಫಲವಿಲ್ಲ ಕಾರ್ಯಕಾರಣವಾದದಿಂ ತತ್ತ್ವ ।\r\nಸಿಲುಕದೆಮ್ಮಯ ತರ್ಕಕರ್ಕಶಾಂಕುಶಕೆ  ॥\r\nಸುಳಿವುದಾಗೀಗಳದು ಸೂಕ್ಷ್ಮಾನುಭವಗಳಲಿ ।\r\nತಿಳಿಮನದೆ ನೋಳ್ಪರ್ಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ಕರ್ತೃ,ಕರಣ, ಕಾರ್ಯ, ಕಾರಣ ಇವುಗಳ ಬಗ್ಗೆ ಅತಿಯಾದ ವಾದ ವಿವಾದದಿಂದ ನಮಗೆ ತತ್ವವು ಸಿಗುವುದೇ ಇಲ್ಲ. ಆದರೆ ನಿರ್ಮಲವಾದ ಮತ್ತು ತಿಳಿಯಾದ ಮನದಲ್ಲಿ ಆಗಾಗ ಸೂಕ್ಷ್ಮಾನುಭವಕ್ಕೆ ಅದು ಗೋಚರವಾಗಬಹುದು. ಯಾರಿಗೆ? ನೋಡಲು ಇಚ್ಚಿಸುವವರಿಗೆ ಮತ್ತು ನೋಡುವವರಿಗೆ ಅದು ಆಗಾಗ ಗೋಚರಿಸುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 55,
    english:
      "Will a blind person see the Sun or the Moon? He can know about them only by the heat or cold that he feels. Similarly, one can know about the eternal truth subtle experiences of his mind.\r\n\r\n[Translator's note: Again, stress is laid on the inadequacy of the senses in the search for the ultimate truth. It is accessible only through extra sensory experiences in one's mind.] - Mankutimma",
    kannada:
      "ಕುರುಡನಿನಚಂದ್ರರನು ಕಣ್ಣಿಂದ ಕಾಣುವನೆ? ।\r\nಅರಿಯುವಂ ಸೋಂಕಿಂದೆ ಬಿಸಿಲುತಣಿವುಗಳ ॥\r\nನರನುಮಂತೆಯೆ ಮನಸಿನನುಭವದಿ ಕಾಣುವನು ।\r\nಪರಸತ್ತ್ವಮಹಿಮೆಯನು - ಮಂಕುತಿಮ್ಮ ॥ ೫೫ ॥",
    kannada_explanation:
      "ಕುರುಡನಿಗೆ ಸೂರ್ಯ ಚಂದ್ರರನು ಕಾಣಲಾಗುವುದೆ? ಬಿಸಿಲು ಮತ್ತು ತಂಪನ್ನು ಅವನು ಸ್ಪರ್ಶಮಾತ್ರದಿಂದಲೇ ಅರಿಯುವುದಿಲ್ಲವೇ ಮನುಷ್ಯನೂ ಸಹ ಮನಸ್ಸಿನ ಅನುಭವದಿಂದ ಪರಮಾತ್ವ ತತ್ವವನು ಕಾಣುತ್ತಾನೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 56,
    english:
      "The joy of the stars, the chaos of this world, the agony of those who are burried below - these are the three voices that my heart hears. The voices are all telling different things and it is utter chaos - as if a village market. - Mankutimma",
    kannada:
      "ಮೇಲಿಂದ ನಕ್ಷತ್ರಜಯಘೋಷ ಸುತ್ತಣಿಂ ।\r\nಭೂಲೋಕದರಚು ಕೆಳಗಿಂ ಮೂಳೆಯಳುವು ॥\r\nಕೇಳಬರುತೀ ಮೂರು ಕೂಗೆನ್ನ ಹೃದಯದಲಿ ।\r\nಮೇಳಯಿಸುತಿದೆ ಸಂತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೬ ॥",
    kannada_explanation:
      "ಇಡೀ ಸೃಷ್ಟಿಯ ವಿಸ್ಮಯಗಳು, ಅವುಗಳ ಬಗ್ಗೆ ನಮ್ಮ ಯೋಚನೆ ಕಾಣುವ, ಕಾಣದ, ಕೇವಲ ಊಹಿಸಿ ಅನುಭವಿಸಬಹುದಾದ ಆ ವಿಸ್ಮಯಭರಿತ ಲೋಕದ ಬಗ್ಗೆ ನಮ್ಮ ಆಲೋಚನೆ, ಕಂಡದ್ದು ,ಕೇಳಿದ್ದು, ಅನುಭವಿಸಿದ್ದು ಎಲ್ಲದರ ವಿಚಾರ ತಲೆಯಲ್ಲಿ. ಇನ್ನು ನಮಗೆ ಕಾಣುವ ಸೂರ್ಯ ಚಂದ್ರರು, ನಕ್ಷತ್ರ ಪುಂಜಗಳು, ಗಾಳಿ, ಮಳೆ, ಮೋಡ, ಮಿಂಚು, ಗುಡುಗು, ಸಿಡಿಲುಗಳಂತಹ ವಿಷಯಗಳು ಮತ್ತು ಅವುಗಳ ಕಾರ್ಯ ವೈಖರಿಯ ಬಗ್ಗೆ ಮತ್ತು ಕಡೆಯದಾಗಿ ನಮ್ಮ ಪ್ರಪಂಚದ ಮತ್ತು ಭೂಮಿಯ ಮೇಲಿನ ಸಕಲ ಪ್ರಾಣಿಗಳ ಬಗ್ಗೆ ವಿಚಾರ ವಿಷಯಗಳೆಲ್ಲ ನಮ್ಮ ತಲೆಗಳಲ್ಲಿ ಸೇರಿಕೊಂಡು ಒಂದು ಸಂತೆಯಲ್ಲಿ ಆಗುವಷ್ಟು ಗಲಭೆ ಶಬ್ಧ ನಮ್ಮ ಅಂತರ್ಯದಲ್ಲಿ ನಡೆಯುತ್ತಿರುತ್ತದೆ ಎನ್ನುವುದೇ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 57,
    english:
      "The sunset of Agumbe, the sunrise of Dronaparvatha (now known as Baba Budan Giri), listening to Tyagaraja's compositions, reading poems from Ramayana written by Valmiki - Have all these not sprout the bud of happiness of realizing the eternal truth in our minds? - Mankutimma",
    kannada:
      "ಆಗುಂಬೆಯಸ್ತಮಯ ದ್ರೋಣಪರ್ವತದುದಯ ।\r\nತ್ಯಾಗರಾಜನ ಗಾನ ವಾಲ್ಮೀಕಿ ಕವನ ॥\r\nಆಗಿಸವೆ ತಾವಿವೆಮ್ಮಂತರಂಗದಿ ಸತ್ಯ ।\r\nಯೋಗಪುಲಕಾಂಕುರವ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೭ ॥",
    kannada_explanation:
      "ಆಗುಂಬೆಯ ಸೂರ್ಯಾಸ್ತಮಾನ ದ್ರೋಣಪರ್ವತದ ಸೂರ್ಯೋದಯ, ತ್ಯಾಗರಾಜನ ಗಾನ ವಾಲ್ಮೀಕಿಯ ಕವನ ಇವೆಲ್ಲವೂ ನಮ್ಮ ಅಂತರಂಗದಲ್ಲಿ ಸತ್ಯದ ದರ್ಶನವನ್ನು ಮಾಡಿಸಿ ರೋಮಾಂಚನಗೊಳಿಸುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 58,
    english:
      "There are some instances in our lives when our minds stopping running around; when we stop talking and become speechless because it wakes up our inner conscience (and makes us see the truth). Seeing mighty mountains and valleys, natures fury and thunder, love of friends, separation from wife - these are a few of such situations. - Mankutimma",
    kannada:
      "ಮಲೆಕಣಿವೆಗಳ ಬೆರಗು ಪ್ರಕೃತಿಕೊಪದ ಗುಡುಗು ।\nಕಳೆಯೊಲವು ನಲ್ಲೆಯ ವಿಯೊಗವಿಂತಹವು ॥\nನಿಲಿಸಿ ಮನದೋಟವನು ಮೂಕಗೊಳಿಪುವುವೆನ್ನ ।\nನೊಳದನಿಯದೊಂದರಿಂ - ಮಂಕುತಿಮ್ಮ ॥ ೫೮ ॥",
    kannada_explanation:
      "ಬೆಟ್ಟಗುಡ್ಡಗಳು ಅದರಲ್ಲಿರುವ ಕಣಿವೆಗಳು, ಪ್ರಕೃತಿ ವಿಕೋಪದ ಗುಡುಗು ಸಿಡಿಲು, ಮಳೆ, ಚಂದಮಾರುತದಂತಾ ವಿಷಯಗಳು, ಸ್ನೇಹಿತನ ಒಲವು, ಪ್ರೇಯಸಿಯ ವಿಯೋಗದಂತಾ ವಿಷಯಗಳು ನಮ್ಮ ಮನಸ್ಸನ್ನು ಆಳುವಾಗ, ಇವುಗಳನ್ನೆಲ್ಲ ನಿಲ್ಲಿಸಿ ಮನಸ್ಸನ್ನು ನನ್ನ ಒಳದನಿಯು ಮಾತ್ರ ಸುಮ್ಮನಾಗಿಸುವುದು ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 59,
    english:
      "Why does one need look at gems, hymns, rituals and other accomplishments as proof of God's existence? Isn't the extraordinary noble qualities found in ordinary men once in a while enough proof? - Mankutimma",
    kannada:
      "ಮಣಿಮಂತ್ರತಂತ್ರಸಿದ್ಧಿಗಳ ಸಾಕ್ಷ್ಯಗಳೇಕೆ ।\r\nಮನಗಾಣಿಸಲು ನಿನಗೆ ದೈವದದ್ಭುತವ? ॥\r\nಮನುಜರೊಳಗಾಗಾಗ ತೋರ್ಪ ಮಹನೀಯಗುಣ ।\r\nವನುವಾದ ಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೯ ॥",
    kannada_explanation:
      "ಆ ಪರತತ್ವದ ಅದ್ಭುತ ಕ್ರಿಯೆಗಳನ್ನು ನೋಡಲು ಮನಗಾಣಲು, ನಾವು ಮಂತ್ರ ತಂತ್ರ ಸಿದ್ಧಿಗಳಿಗೆ ಏಕೆ ಶರಣಾಗಬೇಕು? ಮನುಜರಲ್ಲಿ ಅಗಾಗ ಕಾಣುವ ಮಹನೀಯ ಗುಣಗಳನ್ನು ಸರಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ನಮಗೆ ದೈವದ ಕ್ರಿಯೆ ಅರ್ಥವಾಗುತ್ತದೆ, ಎನ್ನುವುದೇ ಈ ಕಗ್ಗದ ಹೂರಣ .",
  },
  {
    number: 60,
    english:
      "People in Delhi read the epics of Greece. People in Oxford, England read about the scriptures taught in Kashi. The compartmentalizing of time and space does not exist in the kingdom of ht mind. There every word - no matter who uttered it where - is a breath of God.\n\nGod,ದೇವ, ಮನ, Mind - Mankutimma",
    kannada:
      "ಗ್ರೀಸಿನಾ ಕಬ್ಬಗಳನೋದುವರು ದೆಹಲಿಯಲಿ ।\nಕಾಶಿಯಾ ಶಾಸ್ತ್ರಗಳನಾಕ್ಸ್ ಫರ್ಡಿನವರು‍ ॥\nದೇಶಕಾಲವಿಭಾಗ ಮನದ ರಾಜ್ಯದೊಳಿರದು  ।\nಶ್ವಾಸವದು ಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೬೦ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ವಿಶಾಲತೆಗೆ ಒಂದು ಕನ್ನಡಿ ಈ ಕಗ್ಗ. “ಗ್ಲೋಬಲ್ ವಿಲೇಜ್” ಎಂದು ಇತ್ತೀಚೆಗೆ ಒಂದು ಪದ ಪ್ರಯೋಗವನ್ನು ನಾವು ಕೇಳುತಿದ್ದೇವೆ. ನಾವು ಇಲ್ಲಿ ಕುಳಿತುಕೊಂಡು ಪ್ರಪಂಚದ ಯಾವುದೇ ಮೂಲೆಯಲಿರುವ ಜನರೊಡನೆ ನಾನಾ ವಿಧವಾದ ಸಂಪರ್ಕಗಳನ್ನು ಇಂದು ಹೊಂದಿದ್ದೇವೆ. ಎಲ್ಲಿಯೋ ಹುಟ್ಟಿ ಬೆಳೆದ, ಆಲ್ಬರ್ಟ್ ಕಾಮೂವಿನ ನಾಟಕಗಳನ್ನು ಇಲ್ಲಿ ಪ್ರಸ್ತುತ ಪಡಿಸುತ್ತೇವೆ. ಶೇಕ್ಸಪಿಯರನ ನಾಟಕಗಳನ್ನೂ ಆಡುತ್ತೇವೆ. ಆಲ್ಲಿ ಅವರುಗಳು ನಮ್ಮ ಭಾರತೀಯ ಸಂಸ್ಕೃತಿಯ ಕತೆ ನಾಟಕ ಶಾಸ್ತ್ರಗಳನ್ನು ಓದುತ್ತಾರೆ. ಇಂಗ್ಲೆಂಡಿನ ಶಾಲೆಗಳಲ್ಲಿ ” ಸಹನಾವವತು” ಹೇಳುತ್ತಾರೆ ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ. ಆದರೆ ದುರಂತವೆಂದರೆ, ಇಲ್ಲಿ ಭಾರತದಲ್ಲಿ ಅದನ್ನು ಶಾಲೆಗಳಲ್ಲಿ ಹೇಳಿದರೆ ಅದಕ್ಕೊಂದು ಬಣ್ಣ ಕಟ್ಟಿ ಗೊಂದಲವೇ ಆಗುತ್ತದೆ. ಇರಲಿ, ಹೀಗೆ ಬೇರೆ ಬೇರೆ ದೇಶಗಳ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಗಳನ್ನು ಬೇರೆ ಬೇರೆ ದೇಶಗಳಲ್ಲಿ ಅನುಕರಿಸಿ, ಅನುಸರಿಸುವಾಗ ಇಡೀ ಜಗತ್ತೇ ಒಂದು ಮನೆಯಾಗುವ ಸಂಭವ ಇದೆ ಎಂದು ಅರ್ಥ ತಾನೇ.",
  },
  {
    number: 61,
    english:
      "There is a voice that seems to come from beyond the constellations of stars (all the external influences to our intellect). There is one voice that rises from deep inside our heart (as a result of deep contemplation). When we can resolve this duality and unify them into one, we will see God. - Mankutimma",
    kannada:
      "ನಕ್ಷತ್ರಮಂಡಲದಿನಾಚೆಯಿಂದೊಂದು ದನಿ ।\r\nವಕ್ಷೋಗುಹಾಂತರದಿನೊಂದು ದನಿಯಿಂತೀ ॥\r\nಸಾಕ್ಷಿದ್ವಯವು ನಿನ್ನೊಳೊಂದುಗೂಡಿದೊಡದೇ ।\r\nಪ್ರೇಕ್ಷೆ ಪರಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೬೧ ॥",
    kannada_explanation:
      "ನಕ್ಷತ್ರ ಮಂಡಲದ ಆಚೆಯಿಂದ ಒಂದು ದನಿ, ವಕ್ಷ ಗುಹಾಂತರದಿಂದ ಒಂದು ದನಿಯಂತೆ ಈ ಸಾಕ್ಷಿ ದ್ವಯವು ನಿನ್ನೊಳಗೆ ಒಂದು ಗೂಡಿದೊಡೆ ಅದೇ ಪರ ಬ್ರಹ್ಮನ ದರ್ಶನವನ್ನು ನೀಡುತ್ತದೆ ಎಂಬುದೇ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 62,
    english:
      "Physicist may very well observe the trajectory and speed of the Sun, stars and earth and know their strengths. Can he measure the feelings like love and anger? Can he know any details of any energy that do not physical manifestations? \r\n\r\n[Trasnslator's note: Science can only go so far in explaining the universe. The conscience mind is still a mystery to any branch of science.] - Mankutimma",
    kannada:
      "ಭೌತವಿಜ್ಞಾನಿ ರವಿತಾರೆಧರೆಗಳ ಚಲನ ।\r\nರೀತಿ ವೇಗವನೆಳೆದು ಶಕ್ತಿಗಳ ಗುಣಿಪನ್ ॥\r\nಪ್ರೀತಿ ರೋಷಗಳನವನಳೆವನೇನ್? ಅವ್ಯಕ್ತ ।\r\nಚೇತನವನರಿವನೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೨ ॥",
    kannada_explanation:
      "ಭೌತವಿಜ್ಞಾನಿಯು ಸೂರ್ಯ ನಕ್ಷತ ಭೂಮಿಗಳ ತಿರುಗುವ ಸುಡುವ ಪ್ರಭಾವ ಬೀರುವ ಶಕ್ತಿಗಳ ಗುಣಾಕಾರ ಭಾಗಾಕಾರ ಲೆಕ್ಕಾಚಾರವನ್ನು ಮಾಡುತ್ತಾನೆ. ಆದರೆ ಮಾನವ ಮನಸ್ಸುಗಳಲ್ಲಿ ಪರಸ್ಪರ ಪ್ರೀತಿ ದ್ವೇಷ ರೋಷಗಳ ಶಕ್ತಿಯನ್ನು ಅಳೆಯುತ್ತಾನೆಯೇ? ಸಕಲ ಸೃಷ್ಟಿಯನ್ನೂ ಒಂದು ಸೂತ್ರದಲ್ಲಿ ಹೆಣೆದು ಅದರ ಗತಿ ವಿಧಿಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಆ ಬೃಹತ್ ಚೇತನವನ್ನು ಅವನಿಂದ ಅರಿಯಲು ಸಾಧ್ಯವೇ ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 63,
    english:
      "Is any human language adequate enough to describe the form of the universal being (God)? Can it even describe our feelings in our hearts? If we intend to make our inner ears (of our minds) listen to words describing the extraordinary experiences, the human language comes up as coarse and highly inadequate. - Mankutimma",
    kannada:
      "ನರಭಾಷೆ ಬಣ್ಣಿಪುದೆ ಪರಸತ್ತ್ವರೂಪವನು? ।\nಅರಿಯದದು ನಮ್ಮೆದೆಯ ಭಾವಗಳನೊರೆಯೆ ॥\nಪರಮಾನುಭವಗಳುಲಿಯನುಭವಿಗಳೊಳಕಿವಿಗೆ ।\nಒರಟುಯಾನವೊ ಭಾಷೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩ ॥",
    kannada_explanation:
      "ನಾವಾಡುವ ನರಭಾಷೆಗೆ ಒಂದು ಮಿತಿ ಇದೆ. ಈ ಭಾಷೆಯಲ್ಲಿ ಆ ಪರಮಾತ್ಮ ಸ್ವರೂಪವನ್ನು ಬಣ್ಣಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಮ್ಮ ಅಂತರಂಗದ ಭಾವವನ್ನು ಹೇಳಲು ಈ ಭಾಷೆ ಸಾಲದು. ಪರತತ್ವದ ಅನುಭವದ ಮಾತುಗಳು ಕೇವಲ ನಮ್ಮ ಒಳಗಿವಿಗೆ ಕೇಳಿಸುತ್ತದೆ. ಮಾನವರ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸುವುದು ಒಂದು ನೇರವಲ್ಲದ ಸುಗಮವಲ್ಲದ ಪ್ರಯಾಣದಂತೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 64,
    english:
      "Our experiences, feelings and merits are like paddy (with husk). One must beat with examination and arguments. Only then one will get conviction on his own philosophy. Only such a theory can be called as well-thought one. That will be the food for thought every day. - Mankutimma",
    kannada:
      "ಚಿತ್ತದನುಭವ ಭಾವ ಸಂಭಾವನೆಗಳೆಲ್ಲ ।\nಭತ್ತವದನು ವಿಚಾರಯುಕ್ತಿಗಳು ಕುಟ್ಟೆ ॥\nತತ್ತ್ವತಂಡುಲ ದೊರೆಗುಮದು ವಿವೇಚಿತತತ್ತ್ವ ।\nನಿತ್ಯ ಭೋಜನ ನಮಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೪ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಬರುವ ಭಾವ, ಅನುಭವ ಮತ್ತು ಆಲೋಚನೆಗಳೆಲ್ಲ ಬತ್ತದಂತೆ. ಅದನ್ನು ಯುಕ್ತಿ ಮತ್ತು ವಿಚಾರವೆಂಬ ಒನಕೆಗಳಿಂದ ಕುಟ್ಟಿದರೆ ತತ್ವವೆಂಬ ಅಕ್ಕಿ ನಮಗೆ ದೊರೆಯುವುದು. ಹಾಗೆ ದೊರೆತ ಅಕ್ಕಿರೂಪದ ತತ್ವವೇ ನಮ್ಮ ಭೌದ್ಧಿಕತೆಗೆ ಆಹಾರ ಎಂಬುದೇ ಈ ಕಗ್ಗದ ತಾತ್ಪರ್ಯ. ನಮ್ಮ ಮಾನಸಿಕತೆಯಲ್ಲಿ ನಮ್ಮ ವಿಚಾರ ಮಂಥನಕ್ಕೆ ಒತ್ತು ಕೊಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ .",
  },
  {
    number: 65,
    english:
      'Knowledge obtained from reading books is like an ornament on top of the head. It\'s only external. Knowledge that grows from contemplation, is like a flower on a tree. The realization of the truth can only be attained by looking inwards. Not just by being called "well-educated". - Mankutimma',
    kannada:
      "ಪುಸ್ತಕದಿ ದೊರೆತರಿವು ಮಸ್ತಕದಿ ತಳೆದ ಮಣಿ ।\nಚಿತ್ತದೊಳು ಬೆಳೆದರಿವು ತರು ತಳೆದ ಪುಷ್ಪ ॥\nವಸ್ತು ಸಾಕ್ಷಾತ್ಕಾರವಂತರೀಕ್ಷಣೆಯಿಂದ ।\nಶಾಸ್ತ್ರಿತನದಿಂದಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೬೫ ॥",
    kannada_explanation:
      "ಪುಸ್ತಕಗಳನ್ನು ಓದಿ ಪಡೆದುಕೊಂಡ ಪಾಂಡಿತ್ಯ ತಲೆಯಮೇಲೆ ತಂದಿಟ್ಟುಕೊಂಡಂತ ಕಿರೀತದಲ್ಲಿನ ಮಣಿಯಂತೆ. ಆದರೆ ನಮ್ಮ ಅನುಭವಗಳನ್ನು ವಿಚಾರದ ಒರೆಗೆ ಹಚ್ಚಿ ನಮ್ಮ ಚಿತ್ತದಲ್ಲಿ ನಮಗೆ ಸ್ಫುರಿಸಿದ ಜ್ಞಾನ, ತನ್ನ ಸ್ವಾಭಾವಿಕ ಗುಣಕ್ಕೆ, ಮಣ್ಣಿನ ಸಾರ, ಪರಿಸರದ ಪ್ರಭಾವದಿಂದ ತನ್ನೊಳಗಿಂದಲೇ ವಿಕಸಿತವಾಗುವ ಒಂದು ಗಿಡದ ” ಪುಷ್ಪದಂತೆ” ಎನ್ನುತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 66,
    english:
      "Why does most things in this creation seem to be a waste? What is the meaning of crores of these minute creatures - worms and insects? If we say the creator a spend thrift who has did not plan this creation well - we would describing the half truth.\r\n\r\n[Translator's note: In this creator's universe all creatures are created equal. There is harmony and every creature has its role to play. One cannot claim anything in this creation as waste.] - Mankutimma",
    kannada:
      "ವ್ಯರ್ಥವೆಂದೆನಿಪುದಲ ಸೃಷ್ಟಿಯಲಿ ಬಹುಭಾಗ? ।\r\nಅರ್ಥವೇಂ ಕ್ರಿಮಿಕೀಟಕೋಟಿ ರಚನೆಯಲಿ? ॥\r\nಕರ್ತನಾಲೋಚಿಸದ ದುಂದಿನವನೆಂಬ ನುಡಿ ।\r\nಯರ್ಧದೃಷ್ಟಿಯ ವಿವರ - ಮಂಕುತಿಮ್ಮ ॥ ೬೬ ॥",
    kannada_explanation:
      "“ವ್ಯರ್ಥವೆಂದೆನಿಸುತ್ತದೆ ಸೃಷ್ಟಿಯಲಿ ಬಹುಭಾಗ, ಈ ಕ್ರಿಮಿ ಕೀಟ ಕೋಟಿಗಳ ಸೃಷ್ಟಿಯಲಿ ಅರ್ಥವೇನು ? ಆ ಸೃಷ್ಟಿಕರ್ತನು ಈ ಸೃಷ್ಟಿಯನ್ನು ರಚಿಸುವಾಗ ತನ್ನ ಶಕ್ತಿಯ ದುಂದುಪಯೋಗ ಮಾಡಿರಬಹುದೆಂದು ಯಾರಾದರೂ ಆಲೋಚಿಸಿದರೆ ಅದು ಅವರ ಅಪರಿಪೂರ್ಣ ಜ್ಞಾನದ, ಯೋಚನಾ ದಾರಿದ್ರ್ಯದ ಸೂಚಕವೆಂದು ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 67,
    english:
      "We do not have the entire blueprint/script of this creation in front of us. All we see could well be just a line of the entire blueprint. Just by that little information, how can we say one thing is bad and other is good? This is a tough confusing world. - Mankutimma",
    kannada:
      "ಸ್ರಷ್ಟುಸಂಕಲ್ಪಲಿಪಿಯೆಲ್ಲ ನಮ್ಮೆದುರಿಲ್ಲ ।\nದೃಷ್ಟಿಗೋಚರವದರೊಳೊಂದು ಗೆರೆ ಮಾತ್ರ ॥\nಅಷ್ಟರಿಂದಿದು ನಷ್ಟವದು ಶಿಷ್ಟವೆನ್ನುವುದೆ? ।\nಕ್ಲಿಷ್ಟದ ಸಮಸ್ಯೆಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೬೭ ॥",
    kannada_explanation:
      "“ಜಗತ್ತು ಸೃಷ್ಟಿಯಾಗುವ ಮುಂಚಿನ ಲೇಖಾ ಅಥವಾ ರೇಖಾ ಚಿತ್ರ ನಮ್ಮ ಬಳಿ ಇಲ್ಲ. ನಾವು ಕಾಣಲಾಗಿರುವುದು ಒಂದು ಬೃಹತ್ ಚಿತ್ರದಲ್ಲಿ ಒಂದೇ ಗೆರೆ ಮಾತ್ರ. ಅಷ್ಟು ಸಣ್ಣ ಗೆರೆಯನ್ನು ಕಂಡು ನಾವು ಈ ಸೃಷ್ಟಿಯನ್ನು ಕುರಿತು ವ್ಯಾಖ್ಯಾನ ಮಾಡುತ್ತಾ, ಇದು ಸರಿ ಇದು ಸಪ್ಪು ಎನ್ನುವುದು ಸರಿಯೇ?” ಎಂದು ಕೇಳುತ್ತ, ಇದು ಬಹಳ ಕ್ಲಿಷ್ಟದ ಸಮಸ್ಯೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲಿ.",
  },
  {
    number: 68,
    english:
      "It's all half lighted here, half clues, half knowledge. No one knows where is the complete truth. Untill we know that, who is going to teach us about the mystery of this creation (kept hidden in the box)? All life is a mystery. - Mankutimma",
    kannada:
      "ಎಲ್ಲ ಅರೆಬೆಳಕು ಅರೆಸುಳಿವು ಅರೆತಿಳಿವಿಲ್ಲಿ ।\r\nಎಲ್ಲಿ ಪರಿಪೂರಣವೊ ಅದನರಿಯುವನಕ ॥\r\nಸೊಲ್ಲಿಸುವರಾರು ಸೃಷ್ಟಿಯ ಪೇಟಿಯೊಳಗುಟ್ಟ? ।\r\nಎಲ್ಲ ಬಾಳು ರಹಸ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮ ॥",
    kannada_explanation:
      "ಎಲ್ಲ ವಿಷಯಗಳಲ್ಲೂ ಅರೆ ಬರೆ ಜ್ಞಾನ ಮತ್ತು ತಿಳುವಳಿಕೆ. ಆ ತಿಳುವಳಿಕೆಯನ್ನು ಪಡೆವ ಮಾರ್ಗಗಳೂ ಸಹ ಅರ್ದಂಬರ್ದ ಮತ್ತು ಯಾವುದೂ ನಿಚ್ಚಳವಲ್ಲ. ಅದು ನಮಗೆ ಸಂಪೂರ್ಣ ಜ್ಞಾನ ಬರುವ ತನಕ ಹಾಗೇ ಇರುತ್ತದೆ. ಆದರೆ ನಮಗೆ ಆ ಪರಿಪೂರ್ಣಜ್ಞಾನವನ್ನು ಹೇಳಿಕೊಡುವವರಾರು. ಈ ಜೀವನವೆಲ್ಲ ಒಂದು ನಿಗೂಢ ಅಥವಾ ರಹಸ್ಯ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 69,
    english:
      "Doesn't a unnamed plant have juice and scent glands? Doesn't sunlight help in ripening it and make it bloom? Doesn't wind carry the scent in all directions? We are breathing the same scent. \r\n\r\n[Translator's note: Just because man has no name for it, it is no less important part of the creation. All other actors in this nature do not differentiate among other creatures - especially not based on their percieved utility.] - Mankutimma",
    kannada:
      "ಹೆಸರನರಿಯದ ಸಸಿಯೊಳಿರವೆ ರಸಗಂಧಗಳು? ।\r\nಬಿಸಿಲದನು ಪಕ್ವಗೊಳಿಸುತೆ ಬಿಡಿಸದಿಹುದೆ? ॥\r\nಪಸರಿಸದೆ ಗಾಳಿಯದನೊಯ್ದು ದಿಸೆದಿಸೆಗಳೊಳು ।\r\nಉಸಿರುತಿಹೆವದ ನಾವು  - ಮಂಕುತಿಮ್ಮ ॥ ೬೯ ॥",
    kannada_explanation:
      "ನಮಗೆ ಹೆಸರೇ ಗೊತ್ತಿಲ್ಲದ ಸಸಿಯಲ್ಲಿ ಮಕರಂದ ಮತ್ತು ಸುಗಂಧಗಳಿರುವುದಿಲ್ಲವೇ? ಆ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಅವು ಬೆಳೆಯುವುದಿಲ್ಲವೇ? ಆ ಗಿಡಗಳಲ್ಲಿರುವ ಸುಗಂಧವನ್ನು ಗಾಳಿಯು ದಿಕ್ಕು ದಿಕ್ಕುಗಳಿಗೆ ಪಸರಿಸದೆ? \n ಅಂತಹ ಗಾಳಿಯನ್ನು ನಾವು ಉಸಿರಾಡುತ್ತಿಲ್ಲವೇ? ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಈ ಕಗ್ಗದ ಮೂಲಕ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 70,
    english:
      "Juice and fragrance that is hidden in the earth gets pulled up as water-vapour. It then becomes clouds, then rains, then goes into the earth and fills the well in the form of springs. Then man drinks that water and it becomes a part of him. God has this strange policy for water - so elaborate, yet so accurate. - Mankutimma",
    kannada:
      "ಭೂವಿಷಯದಲಿ ಪುದಿದ ರಸವಾಸನೆಗಳೆಲ್ಲ  ।\r\nಆವಿಯಾಗೇಳ್ದು ಮುಗಿಲಾಗಿ ಮಳೆಗರೆದು  ॥\r\nಬಾವಿಗೂಟೆಯನಿತ್ತು ನರರೊಡಲ ಸೇರುವುದು ।\r\nದೈವ ರಸತಂತ್ರವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೦ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಗೆ ಸಂಬಂಧಿಸಿದ ಮತ್ತು ಈ ಭೂಮಿಯಲ್ಲಿ ಅಡಗಿದ ರಸಗಳು ಸೂರ್ಯನ ಶಾಖದಿಂದ, ಆವಿಯಾಗಿ, ಅದು ಮೋಡವಾಗಿ ಮತ್ತೆ ಮಳೆಯಾಗಿ ಧರೆಗಿಳಿದು ಆ ಮಳೆಯನೀ ಭೂಮಿಯಲ್ಲಿ ಇಂಗಿ ಭಾವಿಗಳಿಗೆ ಒರತೆಯಾಗಿ ಆ ನೀರನ್ನು ಕುಡಿದ ನರರ ದೇಹವನ್ನು ಸೇರುವುವು. . ಇದೆ ದೈವ ನಿರ್ಮಿಸಿದ ರಸತಂತ್ರ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 71,
    english:
      "This whole world is made of complex knot of connections - some small and some big. The sun is related to his rays, the sky has attachment to the water below, earth is connected to its movement, together they are connected to the flow of air. - Mankutimma",
    kannada:
      "ತರಣಿ ಕಿರಣದ ನಂಟು ಗಗನ ಸಲಿಲದ ನಂಟು ।\r\nಧರಣಿ ಚಲನೆಯ ನಂಟು ಮರುತನೊಳ್ನಂಟು ॥\r\nಪರಿಪರಿಯ ನಂಟುಗಳಿನೊಂದು ಗಂಟೀ ವಿಶ್ವ ।\r\nಕಿರಿದು ಪಿರಿದೊಂದಂಟು - ಮಂಕುತಿಮ್ಮ ॥ ೭೧ ॥",
    kannada_explanation:
      "ಸೂರ್ಯನ ಮತ್ತು ಕಿರಣದ ಸಂಬಂಧ, ಆಕಾಶದ ಮತ್ತು ಮಳೆ ನೀರಿನಸಂಬಂಧ, ಭೂಮಿಯ ಸುತ್ತುವಿಕೆಯ ಸಂಬಂಧ, ಮತ್ತು ಅದಕ್ಕನುಗುಣವಾಗಿ ಬೀಸುವ ಗಾಳಿಯ ಸಂಬಂಧ,ಹೀಗೆ ಒಂದಕ್ಕೊಂದು ನಂಟು ಹಾಕಿಕೊಂಡು ಹಲವಾರು ಬಗೆಯ ಸಂಬಂಧಗಳ ಒಂದು ಗಂಟೆ ಈ ಜಗತ್ತು ಇದರಲ್ಲಿ ಕೆಲವು ಸಣ್ಣ ಸಣ್ಣ ನಂಟುಗಳು ಮತ್ತೆ ಕೆಲವು ದೊಡ್ಡದಾದ ಗಂಟುಗಳು ಎಂದು ಈ ಜಗತ್ತಿನ ಎಲ್ಲವಸ್ತುಗಳ ಪರಸ್ಪರ ಸಂಬಂಧಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 72,
    english:
      "O! Mankutumma, in this world every one is connected to every one else in some way or other. Will God tell us how to unwind this tangle of interconnectedness? Truly, everything is connected - connections from living things to other living things (via a food chain or symbiosis) is understandable. But even a man's mind can create attachment to even non-living things like material possessions. Tell me which object in this world is completely detached from the rest of the creation? - Mankutimma",
    kannada:
      "ಈ ವಿಶ್ವದಲಿ ನೋಡಲೆಲ್ಲರೆಲ್ಲರ ನಂಟು ।\r\nಅವನಾ ಬಂಧುತೆಯ ಜಡೆಯ ಬಿಡಿಸುವನು? ॥\r\nಜೀವ ಜೀವಕೆ ನಂಟು ಜಡ ಚೇತನಕೆ ನಂಟು ।\r\nಆವುದದಕಂಟಿರದು? - ಮಂಕುತಿಮ್ಮ ॥ ೭೨ ॥",
    kannada_explanation:
      " ಈ ಜಗತ್ತಿನ ಎಲ್ಲವೂ ಒಂದು ರೀತಿಯ ಪರಸ್ಪರ ಕೊಂಡಿಹಾಕಿಕೊಂಡು ಅಂಟಿಕೊಂಡಿವೆ. ಜಡೆಯ ತರಹ ಹೆಣೆದು ಕೊಂಡಿರುವ  ಈ  ಅಂಟಿನ ನಂಟನ್ನು ಮತ್ತು ಗಂಟನ್ನು ಯಾರು ಬಿಡಿಸುವವರು. ಜೀವ ಜೀವಕೆ ನಂಟು ಚೇತನ ಮತ್ತು  ಜಡಕ್ಕೆ ನಂಟು, ಯಾವುದದಕಂಟಿರದು, ಅಂದರೆ ಯಾವುದಕ್ಕೆ ಅಂಟಿರದು ಹೇಳಿ ನೋಡುವಾ ಎಂಬಂತೆ ಜಗತ್ತಿನ ಬಾಂಧವ್ಯಗಳನ್ನು  ಈ ಕಗ್ಗದಲ್ಲೂ,  ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ. ",
  },
  {
    number: 73,
    english:
      "This whole universe is a big knot of interdependence, attachments and worries. There is no way one can deny having any attachment. Nor can one say that they have no part in it. One may be a loner and independent in his inner world (of mind). But to the outer world, he still has to participate a player (friend, father, spouse, child...). It is best to lead the life accepting this fact. - Mankutimma",
    kannada:
      "ನಂಟು ತಂಟೆಗಳ ಗಂಟೀ ಬ್ರಹ್ಮಭಂಡಾರ ।\r\nಅಂಟಿಲ್ಲವೆನಗಿದರೊಳೆನ್ನದಿರದೆಂದುಂ ॥\r\nಒಂಟಿ ನೀನೊಳಜಗಕೆ ಭಂಟ ಹೊರಜಗಕಾಗಿ ।\r\nಒಂಟಿಸಿಕೊ ಜೀವನವ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಆ ಪರಮಾತ್ಮನ ಸೃಷ್ಟಿಯಲ್ಲಿ , ನಂಟುಗಳು ಮತ್ತು ಅಂಟುಗಳು ಮತ್ತು ಗಂಟುಗಳು ಬಹಳಷ್ಟಿವೆ. “ಇದೆಕ್ಕೆಲ್ಲ ನನಗೆ ಸಂಬಂಧವಿಲ್ಲ” ಎಂದು ಹೇಳಬೇಡ ಎಂದೆಂದೂ. ಅಂತರ್ಯದಲ್ಲಿ ನೀನು ಒಬ್ಬಂಟಿಯಾಗಿರು, ಆದರೆ ಹೊರ ಜಗತ್ತಿಗೆ ನಿನ್ನ ನಂಟು ಒಬ್ಬ ಆಳಿನಂತೆ ಇದ್ದು ಈ ಜೀವನಕ್ಕೆ ನೀ ಅಂಟಿಸಿಕೊ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 74,
    english:
      "The creator is said to have gotten bored of being alone. He thought, let me materialise in crores of forms. This thought itself is Maya (the illusion). Our existence is inside that illusion. - Mankutimma",
    kannada:
      "ಸುಮ್ಮನೊಬ್ಬಂಟಿಯೆಂತಿಹುದು? ಬೇಸರವಹುದು  ।\r\nಹೊಮ್ಮುವೆನು ಕೋಟಿರೂಪದಲಿ ನಾನೆಂದು ॥\r\nಬೊಮ್ಮನೆಳಸಿದನಂತೆ. ಆ ಯೆಳಸಿಕೆಯೆ ಮಾಯೆ ।\r\nನಮ್ಮಿರವು ಮಾಯೆಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪ ॥",
    kannada_explanation:
      "ಆ ಪರಮಾತ್ಮನಿಗೆ ಒಬ್ಬನೇ ಇರುವುದು ಹೇಗೆ ಎಂದು ಅನಿಸಿ ಬೇಸರಬಂದು, ನಾನು ಕೋಟಿ ಕೋಟಿ ರೂಪದಲಿ ಹೊರ ಹೊಮ್ಮುವೆನು ಎಂದುಕೊಂಡು ಆ ಮಾಯಾ ರೂಪದ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಮಾಡಿದನಂತೆ. ಆ ಮಾಯೆಯೇ ಈ ಜಗತ್ತು. ನಾವಿರುವುದು ಈ ಮಾಯೆಯೊಳಗೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ಹಾಗಾಗಿ ಪರಬ್ರಹ್ಮ ಹಾಲು. ಉಕ್ಕಿ ಹರಿಯುವ ನೊರೆಯೇ ಸೃಷ್ಟಿ.",
  },
  {
    number: 75,
    english:
      "A tree grows big and wide out of a seed by destroying it. Just like that, the creation has kept hidden its origin and is exhibiting diversity to our eyes. In a tumbler full of milk, the foam is creation and milk is the creator himself.\r\n\r\n[Translator's note: No one knows the origin of this creation. In our lifetimes, we may not even know it ever. We only come close to some approximations and hypothesis about the origin and nature of this universe. One such theory is that it that the creator and the creation are not two different things - its one. The creator manifests in the ever changing form of creation and returns to original (if any one form can be called so) form every now and then. The foam on the milk, is essentially made of milk only... in a different form. The bubbles are varied - some small, some big live for a short time before going back to milk which is permanent.] - Mankutimma",
    kannada:
      "ಮರ ತನ್ನ ಹೆತ್ತ ಬೀಜವನಿಲ್ಲವೆನಿಸಿ ವಿ- ।\r\nಸ್ತರಿಸುವಂದದಿ, ಸೃಷ್ಟಿ ತನ್ನ ಮೂಲವನು ॥\r\nಮರೆಮಾಚಿ ತಾನೆ ಮೆರೆಯುತ್ತಿಹುದು ಕಣ್ಗಳಿಗೆ ।\r\nನೊರೆ ಸೃಷ್ಟಿ ಪಾಲ್ ಬ್ರಹ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫ ॥",
    kannada_explanation:
      "ಒಂದು ಮರ ತನ್ನ ಮೂಲವಾದ ಬೀಜವನ್ನು ಇಲ್ಲವಾಗಿಸಿ ತಾನು ಬೆಳೆದು ರೆಂಬೆ ಕೊಂಬೆಗಳಿಂದ ವಿಸ್ತಾರವಾಗಿ ಬೆಳೆವಂತೆ ಈ ಜಗತ್ತೂ ಸಹ ತನ್ನ ಮೂಲವಾದ ಆ ಅಗ್ನಿಗೋಳವನ್ನು ಇಲ್ಲವಾಗಿಸಿ ಮೆರೆಯುತ್ತಿದೆ ಮತ್ತು ನಮಗೆ ಕಾಣುತ್ತಿದೆ. ಇದು ಹೇಗಿದೆ ಎಂದರೆ ಆ ಪರಬ್ರಹ್ಮ ಹಾಲಾದರೆ ಅತೀ ಉಷ್ಣತೆಯಿಂದ ಕಾದು ಕಾದು ಉಕ್ಕುವ ಹಾಲಿನ ನೊರೆಯಂತೆ ಈ ಸೃಷ್ಟಿ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 76,
    english:
      "The creator felt he was alone. So, he thought of becoming 'many' himself. He used his greatness to create and place this universe here. In that he created life. Once this illusion of 'many' was created, he wanders in it unattached to the multitude of emotions it has. - Mankutimma",
    kannada:
      "ಬಹುವಾಗಲೆಳಸಿ ತಾನೊಬ್ಬಂಟಿ ಬೊಮ್ಮ ನಿಜ ।\r\nಮಹಿಮೆಯಿಂ ಸೃಜಿಸಿ ವಿಶ್ವವನಲ್ಲಿ ನೆಲಸಿ ॥\r\nವಹಿಸಿ ಜೀವತೆಯ ಮಾಯೆಯ ಸರಸವಿರಸದಲಿ ।\r\nವಿಹರಿಪನು ನಿರ್ಲಿಪ್ತ! - ಮಂಕುತಿಮ್ಮ ॥ ೭೬ ॥",
    kannada_explanation:
      "ಆ ಮಹಾ ಶಕ್ತಿ ಒಂದೇ ಇತ್ತು. ಅದು ತಾನೇ ಹಲವಾಗಿ ಪ್ರಕಟಗೊಳ್ಳಬೇಕೆಂದು, ತನ್ನ ಸಂಕಲ್ಪದಿಂದ , ತನ್ನದೇ ಆದ ಪರಮ ಶಕ್ತಿಯಿಂದ ಈ ವಿಶ್ವವನ್ನು ಸೃಷ್ಟಿಸಿ, ತನ್ನ ಶಕ್ತಿಯನ್ನು ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಇರಿಸಿ ತನ್ನ ಇರವನ್ನು ನಿಗೂಢವಾಗಿರಿಸಿಕೊಂಡು, ತಾನು ಮಾತ್ರ ನಿರ್ಲಿಪತೆತೆಯಿಂದ ಈ ಜಗವನ್ನು ನಡೆಸಿಕೊಂಡು ಹೋಗುತ್ತಿದ್ದಾನೆ ಎನ್ನುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 77,
    english:
      "Is God (Creator) like a precious gem that shines by itself (and for itself) independent and irrespective of who is watching it? Similarly a peacock with pristine colors in its feathers, is happy watching and grooming itself. Both the gem and the peacock do not care if any one else appreciates their beauty or not. The creator also is lost in his own creation - not caring for anything else. - Mankutimma",
    kannada:
      "ತನ್ನ ಹೊಳಹೊಳಪುಗಳ ನೆನೆನೆನೆದು ಮೈಮರೆತ ।\r\nರನ್ನವೋ ಬ್ರಹ್ಮ; ನೋಡುವನು-ನಿಜಪಿಂಛ ॥\r\nವರ್ಣದೆಣಿಕೆಯಲಿ ತನ್ನನೆ ಮರೆತ ನವಿಲವೊಲು ।\r\nತನ್ಮಯನೊ ಸೃಷ್ಟಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೭ ॥",
    kannada_explanation:
      "ತನ್ನ ಹೊಳಹೊಳಪುಗಳ ತಾನೇ ನೆನೆನೆನೆದು ಮೈ ಮರೆತಂತ ರತ್ನವೋ ಆ ಬ್ರಹ್ಮ. ಅಲ್ಲಿ ನೋಡು ಅವನು ಒಂದು ನವಿಲು ತನ್ನ ಗರಿಗಳನ್ನೆಲ್ಲ ಕೆದರಿ ನೃತ್ಯ ಮಾಡುವಾಗ ತನ್ನ ಗರಿಗಳ ಬಣ್ಣ ಗಳನ್ನೂ ಕಂಡು ತನ್ಮಯವಾಗುವಂತೆ, ತನ್ನಿಂದ ಆದ, ತಾನೇ ಆದ ಈ ಸೃಷ್ಟಿಯನ್ನು ಅನುಭವಿಸುವಾಗ ಆ ಪರಮಾತ್ಮನೂ ತನ್ಮಯನೋ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ . ಇಡೀ ಜಗತ್ತು, ಸೃಷ್ಟಿ ಆದದ್ದೇ ಆ ಪರಮ ಶಕ್ತಿಯಿಂದ. ಆ ಪರಮ ಶಕ್ತಿಯೇ ಜಡವನ್ನೂ ಸೃಷ್ಟಿಸಿ, ಆ ಜಡದೊಳಗೆ ಚೇತನವಾಗಿ ಪ್ರವೇಶಿಸಿ ಜಡಕ್ಕೆ ಚೈತನ್ಯವನ್ನು ತುಂಬಿ ಆಯಾಯಾ ಜಡಗಳ ಗುಣಗಳನ್ನು ತಾನೂ ಅನುಭವಿಸುತ್ತ ಆ ಅನುಭವದಲ್ಲಿ ಆ ಪರಮಾತ್ಮನೂ ಮಗ್ನನೋ? ಎನ್ನುವ ಪ್ರಶ್ನೆ. ",
  },
  {
    number: 78,
    english:
      "A young girl when alone in a room takes her own time and enjoys - wearing each ornament, looking at herself at various angles and takes it off before moving to the next ornament - next looks, next thrill. Just like that the creator is playing with his creation enjoying one form after another. He seems to be lost while enjoying this process. - Mankutimma",
    kannada:
      "ತರುಣಿ ತನ್ನೊಡವೆಗಳ ತಳೆಯುತ್ತ ತೆಗೆಯುತ್ತ ।\r\nಪರಕಿಸುತೆ ಮುಕರದಲಿ ಸೊಗಸುಗಳ ಪರಿಯ ॥\r\nಮರೆತೆಲ್ಲವನು ವಿಲಸಿಪಂತೆ ತಾಂ ವಿಶ್ವದಲಿ ।\r\nಮೆರೆಯುವನು ಪರಬೊಮ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮ ॥",
    kannada_explanation:
      "ಒಂದು ಹೆಣ್ಣು ಹೇಗೆ ತೊಟ್ಟ ಒಡವೆಗಳನ್ನು ತೆಗೆದು ಮತ್ತೆ ತೊಟ್ಟು ಕನ್ನಡಿಯಲಿ ತನ್ನ ಅಂದ ಚೆಂದವನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾ ಮೈ ಮರೆಯುತ್ತಾಳೋ, ಹಾಗೆ ತಾನೆ ಸೃಜಿಸಿದ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಬೇರೆ ಬೇರೆ ದೇಹಗಳನ್ನು ಧರಿಸಿ ಅದರಲ್ಲಿ ಸಿಗುವ ಹತ್ತು ಹಲವಾರು ಭಾವನೆಗಳ ಆನಂದದಿಂದ ಅನುಭವಿಸುತ್ತಾ ಮೈ ಮರೆತಿದ್ದಾನೋ ಏನೋ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 79,
    english:
      "A small boy is engrossed in putting together the pieces of his slate to make it complete again. He broke it in the first place. Although it is tiresome for him to put it back together, he is involved it in whole heartedly and in oblivious the rest of the world. So is the creator - engrossed in the process of creating and breaking his own creation. He is enjoying it just like the little boy even if it seems tiresome and futile. - Mankutimma",
    kannada:
      "ಬರೆವ ಹಲಗೆಯನೊಡೆದು ಬಾಲಕನು ತಾನದನು  ।\r\nಮರಳಿ ಜೋಡಿಪೆನೆನ್ನುತಾಯಾಸಗೊಳುತ ॥\r\nಸರಿಚೌಕಗೈವಾಟದಲಿ ಜಗವ ಮರೆವಂತೆ ।\r\nಪರಬೊಮ್ಮ ಸೃಷ್ಟಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಕಾಲದಲ್ಲಿ ಮಕ್ಕಳು ಬಳಪದಿಂದ ಬರೆಯಲು ಉಪಯೋಗಿಸುತ್ತಿದ್ದ ಸ್ಲೇಟು ಒಂದು ರೀತಿಯ ಮೃದು ಕಲ್ಲಿನ ಹಲಗೆಯಾಗಿರುತ್ತಿತ್ತು. ಅದಕ್ಕೆ ಮೃದು ಮರದ ಚೌಕಟ್ಟಿರುತ್ತಿತ್ತು. ಅಕಸ್ಮಾತ್ ಅದು ಕೆಳಗೆ ಬಿದ್ದು ಒಡೆದು ಹೋದರೆ, ಮತ್ತೆ ಅಂಟಿಸಲಾಗುತ್ತಿರಲಿಲ್ಲ. ಹಾಗೆ ಒಡೆದ ಹಲಗೆಯನ್ನು ಅಂಟಿಸಲು ಪ್ರಯತ್ನಪಟ್ಟು ಆಯಾಸಪಡುವ ಮಗುವಿನಂತೆ, ಆ ಪರಮಾತ್ಮನೂ ಸಹ ಒಂದೇ ಆಗಿದ್ದ ತಾನು ಹಲವಾಗಿ , ಅದನ್ನೆಲ್ಲ ಮತ್ತೆ ಒಟ್ಟಿಗೆ ಅಂಟಿಸಲು ಮಾಡುವ ಪ್ರಯತ್ನದಲ್ಲಿ ತಲ್ಲೀನನಾಗಿದ್ದಾನೋ ಎಂದು ಒಂದು ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 80,
    english:
      "When people are alone an bored, they play cards. A two person game - both of which are played by the same person. They quickly get engrossed in the game giving their full best to either sides when it is their turn to play. Creator is doing exactly like that. He is leading his lonely existence by playing all the roles of all the beings, doing good justice to all the roles. - Mankutimma",
    kannada:
      "ಚೀಟಿಯಾಟದ ಬಿನದಿ ತಾನೊರ್ವನಿರ್ವರವೊಲ್ ।\r\nಆಟವಾಡುತಲಿ ತನ್ನೊರ್ ತನವ ಮೆರೆವಾ ॥\r\nಮಾಟದಲಿ ಬೊಮ್ಮನುಂ ತನ್ನೇಕತೆಯ ಜೀವ ।\r\nಪಾಟಿಯಲಿ ಮರೆತಿಹನು - ಮಂಕುತಿಮ್ಮ ॥ ೮೦ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಅಪ್ಪನ ಕಾಲಕ್ಕೆ ಹಲ ದೊಡ್ಡವರು ಇಸ್ಪೀಟಿನ  ಒಂದು ಬಗೆಯ ಆಟವಾಡುತ್ತಿದ್ದರು. ಅದಕ್ಕೆ  ಪೇಶೆನ್ಸ್ ಅಥವಾ ಸಾಲಿಟೇರ್ ಎಂದು ಕರೆಯುತ್ತಿದ್ದರು. ಒಬ್ಬರೇ ಕುಳಿತು ಆಡುವಾಟ. ಇನ್ನೊಂದು ರಮ್ಮಿ. ಅದರಲ್ಲಿ ಒಬ್ಬರಿಗಿಂತ ಹೆಚ್ಚುಜನ ಆಡುವುದು. ಆದರೆ ಕೆಲವರು ವಯಸ್ಸಾದವರು, ಕಾಲಯಾಪನೆಗೆ ಎರಡೂ ಕಡೆಯ ಆಟವನ್ನು ಒಬ್ಬರೇ ಆಡುತ್ತಿದ್ದರು.  ಹಾಗೆ ಆಡುವಾಗ ಒಬ್ಬರೇ ಮೈ ಮರೆಯುತ್ತಿದ್ದರು. ಆ ರೀತಿ ತಾನೇ ಸೃಷ್ಟಿಸಿದ ಈ ಜಗತ್ತಿನಲ್ಲಿ ತಾನು ಮತ್ತೆಲ್ಲದರೊಳಗೆ ಸೇರಿ ತಾನೂ ಈ ಜಗತ್ತನ್ನು ಅನುಭವಿಸುತ್ತ ಮೈ ಮರೆತ್ತಿದ್ದಾನೋ  ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 81,
    english:
      "Has the creator forgotten about the creation? No, he hasn't. He only seems to have forgotten himself since he has taken form of life in this world. With in this world, he is playing the part of searching for himself. If it appears to be close to finding himself, it is happiness. Untill that happens, the search is tiresome.\n\n[Translator's note: Note the careful use of words here. DVG acknowledges that nothing is known for certain. One thing (theory/hypothesis) only seems more probable than the other. We find happiness, if we think we are closer to the truth. It does not matter if we are actually no where near it.] - Mankutimma",
    kannada:
      "ಮರೆತಿಹನೆ ಬೊಮ್ಮ? ಮರೆತಿಲ್ಲ; ಮರೆತವೊಲಿಹನು ।\nಧರಿಸಿ ಜೀವಾಕೃತಿಯ ಜಗದಿ ತನ್ನನೆ ತಾನ್ ॥\nಅರಸಿಕೊಳುವವೊಲಿಹುದು; ದೊರೆತವೊಲ್ ತೋರೆ ಸುಖ ।\nದೊರೆವವರೆಗಾಯಸವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಎಲ್ಲದರೊಳಗೆ    ಆ ಪರಬ್ರಹ್ಮ ತನ್ನನ್ನು ತಾನೇ ಮರೆತಿದ್ದಾನೇನು, ಎಂದು ಪ್ರಶ್ನಿಸಿ, ಇಲ್ಲ ಅವ ಮರೆತಂತೆ  ಇದ್ದಾನೆ ಎಂದು ಉತ್ತರಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಎಲ್ಲ ಜೀವಾತ್ಮಗಳ ಸೃಷ್ಟಿಯ ಎಲ್ಲದರ ರೂಪವನ್ನೂ ಧರಿಸಿ ತನ್ನನ್ನು ತಾನೇ ಹುಡುಕುತ್ತಿದ್ದಾನೆ. ಅವನಿಗೆ ದೊರೆತರೆ ಸುಖ ದೊರೆಯದಿದ್ದರೆ ಆಯಾಸ. ",
  },
  {
    number: 82,
    english:
      "An old lady calls all the kids to play hide-and-seek. She taunts all of them to find her. She will not accept if any one declines to play the game. The creator is like her engaging all of us in this grand game of hide-and-seek called life. - Mankutimma",
    kannada:
      "ಬನ್ನಿರಾಡುವ ಕಣ್ಣ ಮುಚ್ಚಾಲೆಯಾಟವನು ।\r\nಎನ್ನನರಸಿರಿ ಬನ್ನಿ ಮಕ್ಕಳಿರ ಬೇಗ ॥\r\nಬನ್ನಿರಾಟವ ಬೇಡವೆಂಬರನು ನಾಂ ಬಿಡೆನು ।\r\nಎನ್ನುವಜ್ಜಿಯೊ ಬೊಮ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಕಾಲದ ಅವಿಭಕ್ತ ಕುಟುಂಬಗಳಲ್ಲಿ ಯುವತಿಯರು ಮತ್ತು ವಯಸ್ಕರು ಕೆಲಸಗಳಲ್ಲಿ ಮಗ್ನರಾಗಿದ್ದರೆ ವಯಸ್ಸಾದ ಅಜ್ಜಿಯರು ಮಕ್ಕಳನ್ನು ಆಡಿಸಿಕೊಳ್ಳಲು, ಕಣ್ಣಾ ಮುಚ್ಚಾಲೆ ಆಟವಾಡಿಸುತ್ತಿದ್ದರು. ಅದು ಅವರಿಗೂ ಕಾಲಯಾಪನೆಗೆ ಒಂದು ದಾರಿಯಾಗುತ್ತಿತ್ತು. ಅಜ್ಜಿಯರು ಎಲ್ಲರನ್ನೂ ಸೇರಿಸಿಕೊಂಡು ಆಡುತ್ತಿದ್ದರು. ಯಾರನ್ನೂ ಬಿಡುತ್ತಿರಲಿಲ್ಲ. ಅದರಂತೆ ಕಂಡೂ ಕಾಣದಂತೆ ಎದುರಿಗಿದ್ದರೂ ಬಚ್ಚಿಟ್ಟುಕೊಂಡಂತೆ ಇರುವ ಆ ಪರಮಾತ್ಮನನ್ನು ಹುಡುಕುವಂತೆ ನಮ್ಮನ್ನು ಕರೆಯುತ್ತಿದ್ದಾನೇನು ಆ ಪರಬ್ರಹ್ಮ, ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 83,
    english:
      "When some worry clouds the mind we can see a person talking to himself. In his mind, he is actually talking to someone other. He argues with that person, utters words from his mouth, makes hand gestures at him. Still, you can not see the other person. There are both persons in the same single physical form that is seen.\n\n[Translator's note: This is the converse (and in some ways a corollary) of the one universe theme. Some times we make distinction among objects that are the same. And some other time, we fail to recognise the distinction between two objects and see them as one.] - Mankutimma",
    kannada:
      "ಮಾನಸವ ಚಿಂತೆವಿಡಿದಂದೊರ್ವನೆರಡಾಗಿ ।\nತಾನದಾರೊಳೊ ವಾದಿಸುವನಂತೆ ಬಾಯಿಂ ॥\nದೇನನೊ ನುಡಿಯುತ್ತ ಕೈಸನ್ನೆಗೈಯುವನು ।\nಭಾನವೊಂದರೊಳೆರಡು - ಮಂಕುತಿಮ್ಮ ॥ ೮೩ ॥",
    kannada_explanation:
      "ಮನಸ್ಸಿಗೆ ಚಿಂತೆ ಹಿಡಿದಾಗ ಹೇಗೆ ಒಬ್ಬನು ತಾನು ಅದ್ಯಾರಲ್ಲೋ ಮಾತನಾಡುವಂತೆ ಏನೇನೋ ಮಾತನಾಡುತ್ತಾ ಕೈಸನ್ನೆ ಮಾಡುತ್ತಾ ಹೋಗುತ್ತಿರುತ್ತಾರೆ. ವ್ಯಕ್ತಿ ಒಬ್ಬರೇ ಆದರೂ ಇಬ್ಬರಂತೆ ಮಾತನಾಡುತ್ತಿರುತ್ತಾರೆ. ಹಾಗೆಯೇ ಒಬ್ಬನೇ ಇರುವ ಬ್ರಹ್ಮನನ್ನು,  ಚಿಂತೆಗೀಡಾದ ಮನುಷ್ಯನಂತೆ ಎರಡೆಂದು ಭಾವಿಸುತ್ತಾರೆಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 84,
    english:
      "God created this universe with atoms, beings, planets, stars, sky and all other creations. He tied all of them together tightly with some rules. He slackened those rules a bit to let them all dance. Then he hides inside his own creation and enjoys the process (dance).\r\n\r\n[Translator's note: My best guess about the poet's interpretations - each of the creations may feel they are independent and have free will, but in reality it is only free as long and as far as His rules are not violated, because he is inside each one of us and giving us the illusion of free-will.] - Mankutimma",
    kannada:
      "ಅಣು ಭೂತ ಭೂಗೋಲ ತಾರಾಂಬರಾದಿಗಳ ।\r\nನಣಿಮಾಡಿ ಬಿಗಿದು ನಸು ಸಡಿಲವನುಮಿರಿಸಿ ॥\r\nಕುಣಿಸುತಿರುವನು ತನ್ನ ಕೃತಿಕಂತುಕವನದರೊ ।\r\nಳಣಗಿದ್ದು ಪರಬೊಮ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೮೪ ॥",
    kannada_explanation:
      "ಆ ಪರಬ್ರಹ್ಮ ಈ ಜಗತ್ತನ್ನು ಒಂದು ಸೂತ್ರದಲ್ಲಿ ಬಂಧಿಸಿ ಸ್ವಲ್ಪ ಸಡಿಲ ಬಿಟ್ಟು, ತನ್ನ ಕೃತಿಯಾದ ಈ ಜಗತ್ತನ್ನು ಒಂದು ಚೆಂಡು ಎಂದು ಭಾವಿಸಿ, ತಾನೂ ಅದರೋಗೆ ಸೇರಿ ಒಂದು  ಸೂತ್ರದಾಟವ ಆಡುತ್ತಿದ್ದಾನೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 85,
    english:
      "There is infinity in the sky, there is infinity in the depths of our conscience. In between these outer and inner worlds, the story of our lives are finite - with definite start and end. God is the one who creates these air bubbles in which we lead our lives assuming that is all there is in this creation. - Mankutimma",
    kannada:
      "ನಭದ ಬಯಲೊಳನಂತ, ಮನದ ಗುಹೆಯೊಳನಂತ ।\nವುಭಯದಾ ನಡುವೆ ಸಾದ್ಯಂತ ಜೀವಕಥೆ ॥\nವಿಭುವೊಬ್ಬನೀ ಗಾಳಿಬುಡ್ಡೆಗಳನೂದುವನು ।\nಹಬೆಗುಳ್ಳೆಯೋ ಸೃಷ್ಟಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೫ ॥",
    kannada_explanation:
      "ಆಕಾಶದ ವಿಸ್ತಾರ ಅನೂಹ್ಯ ಮತ್ತು ಅನಂತ. ಹಾಗೆಯೇ ಜೀವಿಗಳ ಮನಸ್ಸಿನ ಆಳ ಮತ್ತು ವಿಸ್ತಾರಗಳೂ ಸಹ. ಈ ಸೃಷ್ಟಿಯಲ್ಲಿ ಆ ಪರಮಾತ್ಮನಿಂದ ಸೃಷ್ಟಿಸಲ್ಪಟ್ಟ ನಾವುಗಳು ಕೇವಲ  ಗಾಳಿಯ ಗುಳ್ಳೆಗಳಂತೆ. ಒಂದು ಆದಿ  ಮತ್ತು ಒಂದು ಅಂತ್ಯ ಇವುಗಳ ನಡುವೆ ನಮ್ಮ ಜೀವನದ ಕಥೆ. ಇಡೀ ಸೃಷ್ಟಿಯೇ ಒಂದು ದೊಡ್ಡ ಗಾಳಿಯ ಗುಳ್ಳೆಯಂತೆ ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 86,
    english:
      "The sky is the hair-do. The moon and stars are flowers on the head. The world is his body. Maya, the illusion, is his wife. His laughter, roars and dance manifest as life in his creation. He, whom we call as Shiva or Rudra takes delight in his work. - Mankutimma",
    kannada:
      "ಗಗನ ತಲೆನವಿರಾಗೆ ಪರೆ ತಾರೆ ಹೂವಾಗೆ ।\r\nಜಗವೆಲ್ಲ ವಪುವಾಗೆ ಮಾಯೆ ಸತಿಯಾಗೆ ॥\r\nನಗುನಗುವ ಬೊಬ್ಬಿಡುವ ಜೀವತಾಂಡವ ರಸಿಕ ।\r\nಭಗವಂತ ಶಿವರುದ್ರ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತನ್ನೇ ದೇಹವನ್ನಾಗಿಸಿಕೊಂಡಿರುವ ಆ ಪರಮಾತ್ಮನು ಆಕಾಶವನ್ನು ತನ್ನ ತಲೆ ಕೂದಲಾಗಿಸಿಕೊಂಡು ಚಂದ್ರ ಮತ್ತು ನಕ್ಷತ್ರಗಳನ್ನು ಹೂವಂತೆ ಆ ಕೂದಲಲ್ಲಿ ಮುಡಿದು ಮಾಯೆಯನ್ನು ತನ್ನ ಸತಿಯಾಗಿಸಿಕೊಂಡು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸಂತೋಷ ಮತ್ತು ದುಃಖವನ್ನು ಸಮವಾಗಿ ಅನುಭವಿಸಿ ಆನಂದಿಸುತ್ತಿದ್ದಾನೆ. ಹಾಗೆ ಅವನು ಶಾಂತ ಶಿವ ಸ್ವರೂಪನೂ ಹೌದು ಮತ್ತು ಭಯಂಕರವಾದ ರುದ್ರ ಸ್ವರೂಪನೂ ಹೌದು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 87,
    english:
      "In growth, in brilliance, in expansion, in ugliness, in happiness, in measuring and knowing the speed of light, in identifying the directions, in feeling the movement of this world one can see illusions that are created by him for his own enjoyment. - Mankutimma",
    kannada:
      "ಬೆಳೆ ಹೊಳಪು ವಿಕಸನ ವಿಕಾರ ಸಂಭ್ರಮಗಳಲಿ ।\nಬೆಳಕು ವೇಗಗಳೆನಿಪ ಕಾಲ ದಿಕ್ಕುಗಳ ॥\nಚಲನೆಯಲಿ ವಿಶ್ವಸಂಮೋಹನಗಳೆಲ್ಲವಾ ।\nವಿಲಸಿತವು ಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೭ ॥",
    kannada_explanation:
      "ವಿಶ್ವದ ಎಲ್ಲಕ್ಕೂ ಒಂದು ನಿಗಧಿತ ಚಲನೆ ಉಂಟು. ಆ ಚಲನೆಗೆ ಕಾರಣ ಚೇತನ. ಆ ಬೃಹತ್ ಚೇತನದ ಒಂದು ಅಂಶವೇ ಎಲ್ಲಕ್ಕೂ ಚೇತನದ ಮೂಲ. ಒಂದು ಸಣ್ಣ ಬತ್ತದ ಕಾಳು ಭೂಮಿಗೆ ಬಿದ್ದಾಗ, ನೆಲ, ನೀರು, ಬೆಳಕು, ಸೂರ್ಯನ ಶಾಖಗಗಳ ಸಂಪರ್ಕಕ್ಕೆ ಬಂದಾಗ ಮೊಳಕೆಯೊಡೆದು ಸಸಿಯಾಗಿ ತೆನೆಯೋಡೆದು ಒಂದು ಇದ್ದದ್ದು ಹಲವಾಗಿ ಮತ್ತೆ  ಮತ್ತೊಂದು ಸೃಷ್ಟಿ ಚಕ್ರಕ್ಕೆ ನಾಂದಿ ಹಾಡುತ್ತದೆ. ಅದಾವ ಶಕ್ತಿ ಆ ಒಂದು ಕಾಳನ್ನು ಮೊಳೆಸಿ ಆ ಭೂಮಿಯಿಂದ ಸತ್ವವನ್ನು ಹೀರಿ ಆ ಸಣ್ಣ ಸಸಿಯ ನರ ನಾಡಿಗಳಿಂದ  ಶಿಖರಕ್ಕೆ  ತಂದು ಕಿರೀಟದಂತೆ ಆ ತೆನೆಯನ್ನು ತೊಯ್ದಾಡಿಸುತ್ತದೆ. ಎಂತಹ ಅದ್ಭುತ. ಆ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯೆಲ್ಲವೂ ಅಂತಹ ಅದ್ಭುತಗಳಿಂದಲೇ ತುಂಬಿದೆ.",
  },
  {
    number: 88,
    english:
      "This universe is ever moving and expanding or so it feels. If one goes to the root of this, you will only see the brilliance of the Creator. To be raidiant is the innate quality of a diamond. To be brilliant is a innate quality of the Creator. - Mankutimma",
    kannada:
      "ಚಲನೆ ವಿಶ್ವಾಸ್ತರಣೆಯದುವೆ ಮಾಯಾಭ್ರಮಣೆ ।\nಸಲೆ ಬಗೆಯಲದು ಪರಬ್ರಹ್ಮ ವಿಸ್ಫುರಣೆ ॥\nಥಳಥಳಕೆ ವಜ್ರದಲಿ ನೈಜವಿರುವಂತೆಯು ।\nಜ್ಜ್ವಲತೆ ಬೊಮ್ಮಗೆ ನೈಜ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮ ॥",
    kannada_explanation:
      "ನಿರಂತರ ಚಲನೆಯಲ್ಲಿರುವ ಈ ಜಗತ್ತು ಮತ್ತು ಅದರ ವಿಸ್ತಾರದ ವಿಚಾರ ನಮ್ಮನ್ನು  ಭ್ರಮಾಲೋಕಕ್ಕೆ ತಳ್ಳುತದೆ.  ಅದನ್ನು ಕೂಲಂಕುಷವಾಗಿ  ವಿಚಾರಮಾಡಿ ನೋಡಿದರೆ ಎಲ್ಲೆಲ್ಲೂ ಸಹಜ ಪ್ರಕಾಶದಿಂದ ಪ್ರಾಜ್ವಲ್ಯಮಾನವಾಗಿರುವ ಆ ಪರಮಾತ್ಮ ದರ್ಶನವಾಗುತ್ತದೆ. ಏಕೆಂದರೆ ವಜ್ರಕ್ಕೆ ಹೇಗೆ ಪ್ರಕಾಶವು ಸಹಜ ಗುಣವೋ ಹಾಗೆಯೇ ಆ ಪರಮಾತ್ಮನೂ ತನ್ನದೇ  ಪ್ರಕಾಶದಿಂದ ಹೊಳೆಯುತ್ತಿದ್ದಾನೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 89,
    english:
      'It is a very frequently asked question. When did this world begin? Our scriptures answer it in the form of a story. There is a divine turtle. If it spreads its legs and head out of the shell, it is creation. When it withdraws its limbs into the shell, the creation is destroyed.\r\n\r\n[Translator\'s note: The stress is on the futility of hte question. It is almost expected that if you find "an" answer ever, the follow-up would be "What was there before it?". The fable is to emphasize that both space and time as we measure it, know it are relative to one cycle of creation and destruction. And such cycles continue with no beginning or end.] - Mankutimma',
    kannada:
      "ಆದಿದಿವಸವದಾವುದೆಂದೆಂದುಮಿಹ ಜಗಕೆ? ।\r\nಬೋಧನೆಯ ಸುಲಭತೆಗೆ ಸೃಷ್ಟಿಲಯಕಥನ ॥\r\nಪಾದಶಿರಗಳ ಕೂರ್ಮ ಚಾಚಿಕೊಂಡಿರೆ ಸೃಷ್ಟಿ ।\r\nಸೇದಿಕೊಂಡಿರೆ ಲಯವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯ ॥",
    kannada_explanation:
      "ಎಂದೆಂದೂ ಇರುವ ಈ ಜಗತ್ತಿಗೆ ಮೊದಲ ದಿನವು ಯಾವುದು ಮತ್ತು ಕೊನೆಯ ದಿನವು ಯಾವುದು? ಅದು ಹಾಗಾಯಿತು, ಇದು ಹೀಗಾಯಿತು ಎಂದು ಸುಲಭವಾಗಿ ವಿವರಿಸಲು ಒಂದು ರೀತಿಯ ವಿವರಣೆಯನ್ನು ನೀಡುತ್ತಾರೆ. ಆಮೆ ತನ್ನ ಕಾಲುಗಳನ್ನು ಹೊರಗೆ ತೆಗೆದರೆ ಸೃಷ್ಟಿ ಒಳಗೆಳೆದುಕೊಂಡರೆ ಲಯವೆನ್ನುವ ರೀತಿ ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 90,
    english:
      "What caused the beginning of this existence? When did this creation come into being? Which one of the waves of the sea is the first? Where does this seemingly endless flow of wind end? I wonder what might be the story of this world. - Mankutimma",
    kannada:
      "ಆವುದಿರುವಿಕೆಗಾದಿ? ಎಂದು ಸೃಷ್ಟಿಯ ಮೊದಲು? ।\r\nಆವುದಬ್ಧಿಯ ತೆರೆಗಳಲಿ ಮೊಟ್ಟಮೊದಲು? ॥\r\nಆವುದೆಲರಿನ ನಿಲ್ಲದಲೆತಕ್ಕೆ ಪಡುಸೀಮೆ? ।\r\nಈ ವಿಶ್ವಕಥೆಯಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೯೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಇರುವಿಕೆಗೆ ಯಾವುದು ಮೊದಲು? ಈ ಸೃಷ್ಟಿಯ ಮೊದಲು ಎಂದು ಆಯ್ತು? ಸಮುದ್ರದ ಅಲೆಗಳಲ್ಲಿ ಮೊದಲ ಅಲೆ ಯಾವುದು. ನಿರಂತರ ನಿಲ್ಲದೆ ಬೀಸುವ ಗಾಳಿ, ಬೀಸಲು ಎಂದು ಮೊದಲಾಯ್ತು ಮತ್ತು ಅದರ ಎಲ್ಲೆಗಳು ಎಲ್ಲಿವೆ. ಈ ವಿಶ್ವ ಕಥೆ ಎಂತು ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ, ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 91,
    english:
      "A lotus blooms at sunrise and closes again in the evening. Next day it becomes a full flower again and smiles. The seems to be the order in the history of the universe - never ending cycle of expansion, contraction and reversal. - Mankutimma",
    kannada:
      "ಕಮಲವುದಯದೊಳರಳಿ ಸಂಜೆಯಲಿ ಮುಗುಳಾಗಿ ।\r\nಸುಮವಪ್ಪುದಂತೆ ಮರುವಗಲು ಮುಗುಳ್ದಂತು ॥\r\nಅಮಿತ ಪ್ರಪಂಚನಾಕುಂಚನಾವರ್ತನ ।\r\nಕ್ರಮವೆ ವಿಶ್ವಚರಿತ್ರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧ ॥",
    kannada_explanation:
      "ಕಮಲದ ಹೂ ಸೂರ್ಯನ ರಶ್ಮಿಗಳು ಸೋಕಿದೊಡನೆ ಅರಳಿ, ಮತ್ತೆ ಸಂಜೆಗೆ ಮೊಗ್ಗಾಗಿ ಮತ್ತೆ ಆ ಮೊಗ್ಗು ಮತ್ತೆ ಸೂರ್ಯನ ರಶ್ಮಿಯ ಸ್ಪರ್ಶದಿಂದ ಅರಳುವಂತೆ ಈ ಅನಂತ ಮತ್ತು ಅಮಿತವಾದ ಪ್ರಪಂಚವೂ ಸಹ ನಿರಂತರವಾಗಿ ಹರಡಿಕೊಳ್ಳುತ್ತಾ ಮತ್ತೆ ಸಂಕುಚಿತಗೊಳ್ಳುತ್ತಾ ಮತ್ತೆ ಮತ್ತೆ ಬಿರಿದುಕೊಳ್ಳುತ್ತಾ ಇದೆ ಎಂದು ಈ ಜಗತ್ತಿನ ವಿಸ್ತಾರತೆಯನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 92,
    english:
      "From some where beyond the infinite open oceans essence of the eternal truth are coming to us as waves secretly (discreetly). These waves are delivering new freshness to this world incessantly - day after day. - Mankutimma",
    kannada:
      "ಎತ್ತಣಿನೊ ದೃಕ್ಷರಿಧಿಯಾಚೆಯಿಂದಲನಂತ । \r\nಸತ್ತ್ವ ತೆರೆತೆರೆಯಾಗಿ ಬೀಸಿ ಗೂಢದಲಿ ॥\r\nಬಿತ್ತರಿಸುತಿಹುದು ಹೊಸ ಹೊಸತನವನೆಡೆಬಿಡದೆ ।\r\nನಿತ್ಯನಿತ್ಯವು ಜಗದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೯೨ ॥",
    kannada_explanation:
      "ನಮ್ಮ ದೃಷ್ಟಿಯ ಪರಿಧಿ ಆಚೆಗಿರುವ ಅನಂತ ವಿಶ್ವದಲ್ಲಿಯ ಯಾವುದೋ ಒಂದು ನಿಗೂಢ ಸತ್ವ ಅಂದರೆ ಒಂದು ಚೇತನ ಅಲೆ ಅಲೆಯಾಗಿ ಹರಿದು, ಹಳತನ್ನು ಮರೆಸಿ ಹೊಸತನ್ನು ಮತ್ತೆ ಮತ್ತೆ ನಿರಂತರವಾಗಿ ತರುತ್ತಿದೆ ಎಂದು ಈ ಜಗತ್ತಿನ “ಪ್ರಪಂಚನ ಮತ್ತು ಆಕುಂಚನ”ದ ತತ್ವವನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 93,
    english:
      "This whole world is full of interconnected fire(energy) strands dancing. In this choreography, God brought in life on his own accord - for his own pleasure. This dance is smooh, enchating and methodical at times; violent and forceful at other times. The creator has fully immersed himself in this activity of dancing.\r\n\r\n[Translator's note: Wiki pedia says the origin of string theory (http://en.wikipedia.org/wiki/String_theory) is some time in late 1960s. They may have to revise it based on this verse. I am pretty sure DVG did not come up with it, it must have been in the scriptures already. DVG is kind enough to bring to common kannada reader through this verse.] - Mankutimma",
    kannada:
      "ಜ್ವಾಲಮಾಲಾಕುಲ ಜಗದ್ರೂಪ ತಾಂಡವದಿ ।\r\nಲೀಲೆಯಿಂ ಜೀವತೆಯನಾಂತು ಪರಬೊಮ್ಮಂ ॥\r\nತಾಳಲಯಮೇಳನದಿನೊಮ್ಮೆ ರಭಸದಿನೊಮ್ಮೆ ।\r\nಲೊಲನಾಗಿರ್ಪನೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩ ॥",
    kannada_explanation:
      "ಜ್ವಾಲೆಗಳ ಮಾಲೆಯಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಈ ಜಗತ್ತಿನ ತಾಂಡವ ನೃತ್ಯ. ಇದು ಪರಬ್ರಹ್ಮನಿಗೆ ಒಂದು ಲೀಲಾ ವಿನೋದ. ಕೆಲವೊಮ್ಮೆ ತಾಳ ಲಯ ಮತ್ತು ಮೇಳಗಳೊಂದಿಗೆ, ಶಾಂತವಾಗಿ ಮತ್ತು ಕೆಲವೊಮ್ಮೆ ರಭಸದಿಂದ ತನ್ನ ಭೀಕರ ರುದ್ರ ತಾಂಡವವನ್ನು ಮೆರೆಯುತ್ತಾ ಇರುವ ಆ ಪರಬ್ರಹ್ಮ, ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 94,
    english:
      "Thinking may also be an illusion (of free will). The well choreographed world order is only a show. If a person has realised the root of it all - he will look through this illusion. On the surface it may seem as though the creator also is bound by rules and subject to some form of attachments; underneath he is totally detached and is truly free. The creator is likes playing with his creation. - Mankutimma",
    kannada:
      "ಕೇಳಿಯುಂ ಮಾಯೆಯದು; ನೃತ್ಯಗತಿ ಬರಿತೋರ್ಕೆ ।\r\nಮೂಲಮಂ ಕಂಡಂಗೆ ಸಂಭ್ರಾಂತಿಯೇನು? ॥\r\nಆಳದಲಿ ನಿರ್ಲಿಪ್ತ ಮೇಲೆ ನಿಯತಿಕ್ಲುಪ್ತ ।\r\nಲೀಲಾಪ್ರಿಯಂ ಬ್ರಹ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೯೪ ॥",
    kannada_explanation:
      "ಆ ಪರಮಾತ್ಮನ ಆ ಜಗನ್ನಾಟಕ ಕೇವಲ ಮಾಯೆಯಿಂದ ಕೂಡಿದೆ. ಅದರ ನೃತ್ಯ ಬರೀ ತೋರಿಕೆಯಷ್ಟೇ!. ಯಾರಿಗಾದರೂ ಪರಮ ಚೇತನದ ಮೂಲ ರೂಪದ ಅರಿವಾದರೆ ದ್ವಂದ್ವಗಳಾಗಲೀ ಸಂದೇಹಗಲಾಗಲೀ ಇರುವುದಿಲ್ಲ. ಏಕೆಂದರೆ, ತನ್ನ ನಿಜರೂಪದಲ್ಲಿ ಆ ಪರಮಾತ್ಮ ತನ್ನ ಸೃಷ್ಟಿಯಿಂದ ನಿರ್ಲಿಪ್ತ, ಆದರೆ ಈ ಜಗನ್ನಾಟಕದ ಚಿತ್ರ ವಿಚಿತ್ರ ನಾಟ್ಯ ಮತ್ತು ನಡಿಗೆಯನ್ನು ತನ್ನ ವಿನೋದಕ್ಕಾಗಿ ಲೀಲೆಯಂತೆ ನಡೆಸುತ್ತಿದ್ದಾನೆ ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಪಾನ್ಯ ಗುಂಡಪ್ಪನವರು ವ್ಯಾಖ್ಯಾನಮಾಡಿದ್ದಾರೆ. ",
  },
  {
    number: 95,
    english:
      "Shyamasundara (beautiful and dark - krishna) is none other than Chakri (the one with divine wheel as a weapon - to kill shishupala) or Narahari (Lion faced man who killed Hiranyakashipu). Lord Shiva is describes as Somashekhara (decorated by the moon); also as Bhairava (the frightful) and Rudra (the destroyer). Shiva's wife Parvati - also known as the pleasing Haimavati (daughter of Himavat - the mountain God). She is also the Kali and Chandika; both were her incarnations to kill demons. All this emphasizes that love and ghore are different views of the same underlying essence. - Mankutimma",
    kannada:
      "ಶ್ಯಾಮಸುಂದರನವನೆ ಚಕ್ರಿ ನರಹರಿಯಂತೆ ।\nಸೋಮಶಂಕರನೆ ಭೈರವ ರುದ್ರನಂತೆ ॥\nಹೈಮವತಿ ಶಿವೆ ತಾನೆ ಕಾಳಿ ಚಂಡಿಕೆಯಂತೆ ।\nಪ್ರೇಮ ಘೋರಗಳೊಂದೆ! - ಮಂಕುತಿಮ್ಮ ॥ ೯೫ ॥",
    kannada_explanation:
      "ಶ್ಯಾಮಸುಂದರನೂ ಅವನೇ, ಚಕ್ರಹಿಡಿದು,  ಶಿಶುಪಾಲನನ್ನು ಅಂತಗೊಳಿಸಿದ ಆ ಶ್ರೀ ಕೃಷ್ಣನೂ ಅವನೇ, ತನ್ನ ಕೈ ಉಗುರುಗಳಿಂದ ಹಿರಣ್ಯಕಶಿಪುವನ್ನು ಕೊಂದ ನರಹರಿ ರೂಪದ ನರಸಿಂಹನೂ ಅವನೇ.    \nಸೌಮ್ಯ ರೂಪದ ಚಂದ್ರ ಶೇಖರನೂ ಅವನೇ, ಉಗ್ರರೂಪದ ಭೈರವನೂ,  ರುದ್ರನೂ ಅವನೇ. ಸ್ತ್ರೀ ರೂಪಧರಿಸಿ ಹಿಮವಂತನ ಮಗಳಾದ ಪಾರ್ವತಿಯೂ ಅವನೇ, ಉಗ್ರರೂಪದ ಕಾಳಿ ಚಂಡಿಕೆಯೂ ಅವನೇ. \nಹೀಗೆ ಪರಮಾತ್ಮ, ಪುರುಷ, ನರ, ಸಿಂಹ,  ಸೌಮ್ಯ ಶ್ಯಾಮನ ರೂಪ ಮತ್ತು ಸ್ತ್ರೀ ರೂಪದಲ್ಲಿಯೂ,  ಶಾಂತ, ಮತ್ತು  ಪ್ರೇಮ ರೂಪಗಳಲ್ಲಿಯೂ,  ಘೋರ ಮತ್ತು ರುದ್ರ ರೂಪದಲ್ಲಿಯೂ ಪ್ರಕಟಗೊಂಡಿದ್ದಾನೆ \nಎಂಬುದು ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 96,
    english:
      'What is the truth in this world run by the cosmic dance? What we think as truth is not the real or complete truth in this life that behaves like waves at the ocean - temporary, but endless. If we say everything is a lie/illusion, then we open the door for that hypothesis to be false also. All we can confirm as truth is that "we are alive at this moment". The whole show is choreographed by the Creator. - Mankutimma',
    kannada:
      "ಸತ್ಯವೆಂಬುದದೇನು ಬ್ರಹ್ಮಾಂಡ ತಾಂಡವದಿ  । \nನೃತ್ಯವೇ ಸತ್ಯವಲ ಕಡಲಲೆಯ ಬಾಳೊಳ್ ॥\nಮಿಥ್ಯೆಯೆಂಬುದೆ ಮಿಥ್ಯೆ; ಜೀವನಾಟಕ ಸತ್ಯ ।\nಕೃತ್ಯವಿದು ಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೯೬ ॥",
    kannada_explanation:
      "ಇಡೀ ಬ್ರಹ್ಮಾಂಡದ ಶಾಂತ ಮತ್ತು ರುದ್ರ ತಾಂಡವದಿ, ಸತ್ಯ ಎಂಬುದು ಆವುದು. ನಮಗೆ ನಾವು ನಡೆಸುವ ಕಡಲ ಅಲೆಯಂಥಾ ಜೀವನವೇ ಸತ್ಯವಲ್ಲವೇ? ಮಿಥ್ಯೆ ಎಂಬುದು ಇಲ್ಲವೇ ಇಲ್ಲ ಈ ಜೀವನದ ನಾಟಕದಲ್ಲಿ. ಇದೆಲ್ಲವೂ ಆ ಪರಬ್ರಹ್ಮನಾಡುವ ಜಗನ್ನಾಟಕವೆನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 97,
    english:
      "What is Dharma? What is Karma? What is the story of this universe? What is life? The Supreme being is the cause of every thing. This world is an illusion created by him. He is the life in all of us. - Mankutimma.",
    kannada:
      "ಧರ್ಮವೆಂಬುದದೇನು? ಕರ್ಮವೆಂಬುದದೇನು? ।\r\nಬ್ರಹ್ಮಾಂಡಕಥೆಯೇನು? ಜೀವಿತವಿದೇನು? ॥\r\nಬ್ರಹ್ಮವೆಲ್ಲಕು ಮೂಲ ಮಾಯೆ ತತ್ಕೃತಿಜಾಲ ।\r\nಬ್ರಹ್ಮವೇ ಜೀವನವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೭ ॥",
    kannada_explanation:
      "ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಬ್ರಹ್ಮ ಎಂಬುದು ಏನು? ಕರ್ಮ ಎಂಬುದು ಏನು? ಈ ಬ್ರಹ್ಮಾಂಡದ ಕಥೆ ಏನು ? ನಮ್ಮ ಜೀವನವು ಏನು ? ಈ ಜೀವನವು ಜಗತೀಗೆಲ್ಲಕ್ಕೂ ಮೂಲವಾದ ಆ ಬ್ರಹ್ಮನ ಕ್ರಿಯೆಯಾದಂತ ಒಂದು ಮಾಯಾಜಾಲವೋ? ಆದರೆ ಬ್ರಹ್ಮನೇ ಜೀವನವೋ? ಎಂದು ಒಂದು ಮಹತ್ತರ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 98,
    english:
      "This world is a mixture of things that are straight and crooked. To search for the truth is Dharma - our duty. Just like when different kinds of sound mixed well gives out music - such different kinds of things are required in this world to make it beautiful. This wisdom which leads us to the ultimate unified truth from all the fractured truth is called Dharma. - Mankutimma",
    kannada:
      "ವಕ್ರಋಜುಮಿಶ್ರ ಜಗವದರ ಶೋಧನೆ ಧರ್ಮ ।\r\nಪ್ರಾಕೃತಧ್ವನಿಮಿಶ್ರವದರಡುಗೆ ರಾಗ ॥\r\nವ್ಯಾಕೃತದಿನವ್ಯಾಕೃತಾದಿಸತ್ತ್ವಕೆ ನಿನ್ನ ।\r\nಜಾಗೃತಿಪ ಮತಿ ಧರ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೯೮ ॥",
    kannada_explanation:
      "ಅಂಕು ಡೊ೦ಕುಗಳ, ನೇರ ಸೊಟ್ಟಗಳ, ಸುಳ್ಳು ಸತ್ಯಗಳ, ಕೇಡು ಲೇಸುಗಳ ಬೆರಕೆಯೇ ನಮ್ಮ ಈ ಲೋಕ. ಇವುಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ, ಶೋಧಿಸಿ ನೋಡಿದಾಗ ನಮಗೆ ಅರಿವಾಗುವುದು ಲೋಕ ಧರ್ಮ. ಸಂಸ್ಕಾರವಿಲ್ಲದ ಒರಟು  \n ಯೋಚನೆ, ರಾಗಾದಿಗಳನ್ನು ಸುಸಂಕೃತಗೊಳಿಸಿ ಒಂದು ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ಮಾಣಮಾಡಿ, ಶುದ್ಧವಾದ ಸತ್ಯದ ಅರಿವನ್ನು ಮೂಡಿಸುವುದೇ, ಎಚ್ಚರಗೊಳಿಸುವುದೇ ಧರ್ಮ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ. ",
  },
  {
    number: 99,
    english:
      "If one stands on the sea shore and watches either side; he sees one side (sea) moving, the other (land) stands still. One side is plain and other side has variety. Just like the such unlikes meet, this world is a amalgamation of things that we can see (and measure) and things that are beyond measure. Such blending creates this tasteful world. - Mankutimma",
    kannada:
      "ಜಲಧಿತೀರದಿ ನಿಂತು ವೀಕ್ಷಿಸಿಕ್ಕೆಲಗಳಲಿ  ।\r\nಚಲವೊಂದಚಲವೊಂದು ಸಮವದಸಮವಿದು ॥\r\nಕಲೆತಿರ್ಪುವಂತು ಮೇಯಾಮೇಯಗಳು ಜಗದಿ ।\r\nಮಿಲಿತತೆಯಿನೀ ರುಚಿಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೯ ॥",
    kannada_explanation:
      "ಸಮುದ್ರದ ತೀರದಲ್ಲಿ ನಿಂತು ಎರಡೂ ಬದಿಯಲ್ಲಿ ನೋಡಿದರೆ ಒಂದು ಕಡೆ ಸಮವಾಗಿರುವ ಕಡಲೂ ಇನ್ನೊಂದು ಬದಿಯಲ್ಲಿ ಅಸಮವಾಗಿರುವ ಭೂಮಿ, ಬೆಟ್ಟ ಗುಡ್ಡಗಳೂ ಕಾಣುತ್ತದೆ. ಇದರಂತೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹಲವು ಸಮವಾಗಿ ಮತ್ತೆ ಹಲವು ಅಸಮವಾಗಿಯೂ ಇವೆ. ಹೀಗೆ ಸಮತೆ ಮತ್ತು ಅಸಮತೆಯಿಂದ ಕೂಡಿ ಇರುವುದೇ ಜಗತ್ತು . ಕೆಲವು ನಮಗೆ ಅರ್ಥವಾಗುತ್ತದೆ. ಕೆಲವು ನಮ್ಮ ಅರಿವಿನ ಪರಿಧಿಯಿಂದಾಚೆಗೆ ಇದೆ. ಹೀಗಿರುವುದೇ, ಈ ಜಗತ್ತಿಗೆ ಸೊಬಗನ್ನು ನೀಡಿದೆಯೋ? ಎಂದು ಕೇಳುತ್ತಾ ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 100,
    english:
      "In a huge undivided ocean of knowledge about true essence, this world is a small island that we do not understand. For a learned (pure) eye, these both are one and the same. The supreme being is what is hidden beneath all these forms. - Mankutimma.",
    kannada:
      "ಅವಿದಿತಾಖಂಡಸತ್ತ್ವದಪಾರ ಜಲಧಿಯಲಿ ।\r\nಭುವನದ ದ್ವೀಪ ಕಿಂಚಿನ್ಮಾತ್ರವಿದಿತ ॥\r\nಪವಿತಾಂತರಕ್ಷಿಗಾಯೆರಡುಮೊಂದೇ ವಸ್ತು ।\r\nವವಗುಂಠಿತ ಬ್ರಹ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೦ ॥",
    kannada_explanation:
      "ಇಡೀ ಬ್ರಹ್ಮಾಂಡದಲ್ಲಿ ನಮ್ಮ ಭೂಮಿ ಬಹಳ ಸಣ್ಣದು. ಏಕೆಂದರೆ ನಮಗೆ ಕಾಣುವ ಸೂರ್ಯನ ಗಾತ್ರ ಭೂಮಿಯ ಗಾತ್ರಕ್ಕಿಂತ ೧೩ ಲಕ್ಷ ಪಟ್ಟು ದೊಡ್ಡದು. ಅಬ್ಬಾ!!!  ನಮ್ಮ ಅರಿವಿಗೆ ನಿಲುಕ್ಕದ್ದು. ಹಾಗಾದರೆ ಇಡೀ ಬ್ರಹ್ಮಾಂಡಕ್ಕೆ ಹೋಲಿಸಿದರೆ ನಮ್ಮ ಭೂಮಿಯೆಷ್ಟರದ್ದು?   ಈ ಭೂಮಿಯಮೇಲೂ,  ಒಂದು ಪಾಲು ನೆಲ ಮತ್ತು ಮೂರು ಪಾಲು ನೀರು. ಹಾಗಾಗಿ ನಾವು ನಿಂತಿರುವ  ನೆಲ ಈ ಜಗತ್ತಿನ ವ್ಯಾಪಕತ್ವಕ್ಕೆ ಹೋಲಿಸಿದರೆ ಒಂದು ಸೂಜಿ ಮೊನೆಯಷ್ಟೂ ಅಲ್ಲ. ಇದನ್ನೇ ನಮಗರಿವಿಲ್ಲದ ಮತ್ತು ಅಖಂಡವಾದ ಇಡೀ ಜಗತ್ತಿನಲ್ಲಿ ಭೂಮಿಯಪಾಲು ಕಿಂಚಿನ್ಮಾತ್ರವೆಂದರು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 101,
    english:
      "Butter in milk is like icebergs in a sea. Small measurable entities floating on the vast immeasurable. In essence both are same - fat in case of milk/butter and water in case of ocean/iceberg. But if one needs to measure/percieve they are different. Just like, air and breath. Air is every where; but when we inhale a small measurable quantity of it, we call it breath. - Mankutimma\r\n\r\n[Translator's note: The whole universe is vast, continuous and immeasurable. But we need to make sense of it only through our senses which have limited abilities. So, we cut the vastness into pieces we can perceive and name them differently. Ocean, clouds, rain, tap-water, river, pond, ground water in a well are all water - but we have difficulty in imagining that they are all the same - hence we call them differently.]",
    kannada:
      "ಹಾಲಿನೊಳು ಬೆಣ್ಣೆ  ಕಡಲೊಳಗೆ ನೀರ್ಗಲ್ಲವೊಲು ।\r\nತೇಲುವುದಮೇಯಸತ್ತ್ವದಲಿ ಮೇಯ ಜಗ ॥\r\nಮೂಲದಶೆಯೊಳಗೊಂದು, ಮಾಪನದ ಬಗೆಗೆರಡು ।\r\nಗಾಳಿಯುಸಿರುಗಳಂತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೧ ॥",
    kannada_explanation:
      "ಹಾಲಿನಲ್ಲಿ ಬೆಣ್ಣೆ ತೇಲುವಂತೆ, ಕಡಲಿನಲ್ಲಿ ಮಂಜಿನಗಡ್ಡೆ ತೇಲುವಂತೆ, ಅಗಾಧ ಅಜ್ಞಾನದ ಕಡಲಲ್ಲಿ ಜ್ಞಾನ ತೇಲುತ್ತಿದೆ. ಹೀಗೆ ಮೂಲ ರೂಪದಲ್ಲಿ ಒಂದರಂತೆ ಕಂಡರೂ ಅರ್ತೈಸಿದರೆ, ಸತ್ಯರೂಪದ ಅರಿವಾಗುತ್ತದೆ. ಹೇಗೆ ಹೊರಗಿರುವುದು ಗಾಳಿಯಾದರೆ ನಮ್ಮಜೀವನಕ್ಕೆ ಹೇತುವಾದದ್ದನ್ನು “ಉಸಿರು” ಎಂದು ಕರೆಯುತ್ತೇವೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಮಾಡಿದ್ದಾರೆ .",
  },
  {
    number: 102,
    english:
      "This body can be seen, measured and determined. The mind inside the body is quite the opposite; cannot be seen, measured or determined for certain. One can count and visualise the strengths of the muscles of the body. The life essence that makes them work is neither seen nor can be measured. A person is always a mixture of these measurable and immeasurable entities; only such a mixture makes him complete and interesting. Same is true for this world also. - Mankutimma",
    kannada:
      "ಕಾಯ ನಿರ್ಣೇಯವದರೊಳು ಮನವನಿರ್ಣೇಯ ।\r\nಸ್ನಾಯು ಸಂಖ್ಯೇಯ ಜೀವಳಮಸಂಖ್ಯೇಯ ॥\r\nಮೇಯಾಪ್ರಮೇಯಮಿಶ್ರಣವಿಂತು ನರಜಂತು ।\r\nನೇಯವದು ವಿಶ್ವಕಂ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೨ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಶರೀರದ ರಚನೆಯನ್ನು” ಇದು ಹೀಗೇ ಇದೆ ” ಎಂದು ನಿರ್ಣಯಿಸಬಹುದು. ಆದರೆ ಮನದ ರಚನೆ ಮತ್ತು ಮನದ ಇಂಗಿತವನ್ನು ನಿರ್ಣಯಿಸುವುದು ಸಾಧ್ಯವೇ ಇಲ್ಲ. ಶರೀದಲ್ಲಿ ಎಷ್ಟು ಮಾಂಸಖಂಡಗಳಿವೆ ಎಂದು ಲೆಕ್ಕ ಹಾಕಿಬಿಡಬಹುದು, ಆದರೆ ಜೀವನನ್ನು ಅಳೆಯುವುದು ಮತ್ತು ಲೆಕ್ಕಹಾಕುವುದು ಸಾಧ್ಯವಿಲ್ಲ. ಹೀಗೆ ಮನುಷ್ಯ ಪ್ರಾಣಿ ಮೇಯ, ಅಂದರೆ ನಿಖರವಾಗಿ ನೋಡಿ ಹೇಳಬಹುದಾದ ಮತ್ತು ಅಪ್ರಮೇಯ, ಎಂದರೆ ಹೇಳಲು, ಊಹಿಸಲು, ಅಳೆಯಲು ಅಸಾಧ್ಯವಾದದವುಗಳಿಂದ ಕೂಡಿದ್ದಾನೆ ಎಂದು ಹೇಳುತ್ತಾ, ಈ ರೀತಿಯ ವರ್ಣನೆ ಇಡೀ ಜಗತ್ತಿಗೂ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ,",
  },
  {
    number: 103,
    english:
      "What can be known is just an island in the vast ocean of the unknown. Mind weaves a vail of illusion over the body - like a cloud over a mountain. What is the use of knowing, measuring all that can be measured while there is a vast scape of unmeasurable out there? The world is an interesting illusion created by this mixture of the measurable and the immesurable. - Mankutimma.",
    kannada:
      "ಜ್ಞೇಯದ ದ್ವೀಪಕಜ್ಞೇಯಾಬ್ಧಿಯಾವರಣ ।\r\nಕಾಯಕದ ಗಿರಿಗೆ ಮಾನಸದಭ್ರಪಟಲ ॥\r\nಮೇಯವನು ಬಗೆದೇನ್ ಅಮೇಯ ಸುತ್ತಲುಮಿರಲು? ।\r\nಮಾಯೆಯೀ ಮಿಶ್ರಣವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೩ ॥",
    kannada_explanation:
      "ಜ್ಞಾನಕ್ಕೆ ಅಜ್ಞಾನದ ಆವರಣ ಸುತ್ತಿಕೊಂಡಿದೆ. ಮಹತ್ತರ ಕಾರ್ಯಗಳನ್ನು ಸಾಧಿಸ ಹೊರಟಾಗ, ಅಜ್ಞಾನ ನಮ್ಮ ಮನಸ್ಸನ್ನು ಮೋಡದಂತೆ ಮುಸುಕಿಬಿಡುತ್ತದೆ. ಅಜ್ಞಾನ ನಮ್ಮನ್ನು ಸುತ್ತಿಕೊಂದಿರುವಾಗ, ಜ್ಞಾನವನ್ನು ಬೆದಕಿ, ಕೆದಕಿ ತೆಗೆಯುವುದು ಬಲು ಕಷ್ಟ. ಇಡೀ ಜಗತ್ತೇ ಜ್ಞಾನಾಜ್ಞಾನಗಳ ಮಿಶ್ರಣವೆಂಬುದೆ ಗುಂಡಪ್ಪನವರ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 104,
    english:
      "Time is like an never ending torch. Its power is vast. Life is just a flash of light from a small lamp. Wind puts off some flames while helps some to get bigger. The supply of oil to these lamps is uninterrupted and infinite.\r\n\r\n[Translator's note: People come and people go. Time was there before us, and will be there even after we are gone. While we stay here, there are a lot of factors that makes us prosper, suffer or perish. Nevertheless, our life ends one day or another. But 'Life' in general continues since others continue to live and flourish. Hence the author says that supply of oil for the flame of life is inifinite and uninterrupted.]",
    kannada:
      "ಕಾಲವಕ್ಷಯದೀಪವದರ ಪಾತ್ರೆಯಪಾರ ।\r\nಬಾಳ್ ಅದರಿನಾದೊಂದು ಕಿರುಹಣತೆ ಮಿಣಕು ॥\r\nಗಾಳಿಯಾರಿಪುದೊಂದನಿನ್ನೊಂದ ಹೊತ್ತಿಪುದು ।\r\nತೈಲಧಾರೆಯಖಂಡ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೪ ॥",
    kannada_explanation:
      "ಕಾಲವೆಂಬುದು ಅವ್ಯಾಹತವಾಗಿ, ನಿರಂತರ ಉರಿಯುವ ದೀಪ. ಅದರ ಪಾತ್ರ ಬಹಳ ದೊಡ್ಡದು. ಒಂದು ಕ್ಷಣ ಮುಗಿದರೆ ಮತ್ತೊಂದು ಕ್ಷಣ ನಮ್ಮ ಬಾಳು ಕಾಲದ ಈ ಅವ್ಯಾಹತ ಪ್ರವಾಹದಲ್ಲಿ ಉರಿಯುವ ಒಂದು ಸಣ್ಣ ಹಣತೆಯಂತೆ. ಗಾಳಿಯು ಒಂದು ಹಣತೆಯನ್ನು ಆರಿಸಿದರೆ ಇನ್ನೊಂದು ದೀಪ ಹೊತ್ತಿಕೊಳ್ಳುವುದು. ಜೀವನದ ತೈಲಧಾರೆಗೆ ಅಂತ್ಯವೇ ಇಲ್ಲವೆಂಬುದೆ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 105,
    english:
      "How can the painting be there when there is no canvas? What is the joy in a canvas without the painting? The essence of truth is the canvas and the interesting painting is the life that we see on it which lasts a mere second. Our existence is in this relation between the canvas and the painting. - Mankutimma",
    kannada:
      "ಭಿತ್ತಿಯೊಂದಿಲ್ಲದಿರೆ ಚಿತ್ರವೆಂತಿರಲಹುದು? ।\r\nಚಿತ್ರವಿಲ್ಲದ ಭಿತ್ತಿ ಸೊಗಸಹುದದೆಂತು? ॥\r\nನಿತ್ಯ ಸತ್ತ್ವವೆ ಭಿತ್ತಿ, ಜೀವಿತ ಕ್ಷಣಚಿತ್ರ ।\r\nತತ್ತ್ವವೀ ಸಂಬಂಧ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೫ ॥",
    kannada_explanation:
      "ಒಂದು ಚಿತ್ರ ಬರೆಯಲು ಗೋಡೆಯೊಂದು ಬೇಕು. ಗೋಡೆಯಿಲ್ಲದೆ ಚಿತ್ರವಿರಲು ಸಾಧ್ಯವಿಲ್ಲ. ಹಾಗೆಯೇ ಚಿತ್ರವಿಲ್ಲದ ಗೋಡೆಗೆ ಸೊಗಸೂ ಇರುವುದಿಲ್ಲ. ಈ ಜಗತ್ತಿನ ಗೋಡೆಯಾದ ಆ ಪರಮಾತ್ಮ ಸತ್ವವು ನಿತ್ಯ ಮತ್ತು ಸತ್ಯವಾದ ಗೋಡೆಯಾಗಿರಲು, ನಮ್ಮ ಜೀವನವು ಆ ಗೋಡೆಯಮೇಲೆ ಬರೆದ ಒಂದು ಚಿತ್ರವಷ್ಟೇ. ಈ ತತ್ವದಿಂದಲೇ ನಮ್ಮ ಮತ್ತು ಪರಮಾತ್ಮನ ಸಂಬಂಧವಿರುತ್ತದೆ ಎನ್ನುವುದೇ ಗುಂಡಪ್ಪನವರ, ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 106,
    english:
      "The borders of the painting (and hence the canvas) is infinite. The painting itself is finite, definite and shortlived. In the infinite formless sky, we see objects that are finite (like clouds, moon, starts, sun etc...) and have forms. For a person enlightened about the truth, all worldly objects are to be measured and valued against the value of the universal truth. Any other valuation is false. - Mankutimma.\r\n\r\n[Translator's note: It took some time for me to arrive at my understanding of the verse. Here it is - Most of what we see is limitted - by space, by time, by intellectual depth. To understand the objects or phenomena we observe we use our own scale which are inherently finite and hence incomplete. But, it is good enough for the time being. For example, to explain the distance between two wickets on a pitch - we use yards (or meters); between two cities - kilometers; between two stars - light years; between two electrons - angstroms. All the units are measuring space, that too in one dimension only - yet so different and so imperfect when applied where they are not intended for. Another example is about object valuation. Most of us (even countries as entities) think Gold is very precious and hence valuable. But that is true only in a context. Ask a starving man whether he wants assured supply of three square meals a day or a truck load of gold with no food for years, you will know how distorted was our valuation. When one realizes the essence of being one with the universe - he starts seeing things for what they are and valuing everything / every phenomenon against the only scale he knows; against the universal truth.]",
    kannada:
      "ಚೌಕಟ್ಟನಂತವದರೊಳು ಚಿತ್ರಪಟ ಸಾಂತ ।\r\nಸಾಕಾರ ಘನತತಿ ನಿರಾಕಾರ ನಭದಿ ॥\r\nಲೌಕಿಕದ ಮೌಲ್ಯ ನಿರ್ಲೌಕಿಕದ ನಾಣ್ಯದಲಿ ।\r\nಲೆಕ್ಕ ತಾತ್ತ್ವಿಕನಿಗಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೬ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಕಗ್ಗದ ವಿವರಣೆಯನ್ನೇ ಮುಂದುವರೆಸಿ ನೋಡಿದರೆ, ಈ ಪರಮ ಚೇತನದ ಚೌಕಟ್ಟು, ಅನಂತ,ಅಂದರೆ ಅಂತವೇ ಇಲ್ಲದ್ದು . ಹಾಗೆ ಅನಂತವಾಗಿರುವ ಚೌಕಟ್ಟಿನಲ್ಲಿ ಅಂತ್ಯಗೊಳ್ಳುವ ಚಿತ್ರ. ಹೇಗೆ ಅನಂತ ಆಕಾಶದಲ್ಲಿ ಹಲವು ಆಕಾರಗಳ, ಆದರೆ ತನ್ನ ಆಕಾರವನ್ನು ಘಳಿಗೆ ಘಳಿಗೆಗೆ ಬದಲಾಯಿಸಿಕೊಳ್ಳುವ ಮೋಡಗಳಂತೆ, ನಮ್ಮ ಲೌಕಿಕ ಜೀವನವೂ ಈ ಅನಂತ ವಿಶ್ವದ ಭಿತ್ತಿಯಲ್ಲಿ ಸಾಂತ, ಅಂದರೆ ಬದಲಾಗುವ ಜೀವನದ ಚಿತ್ರ. ಆದರೆ ಈ ಲೌಕಿಕದ ಜೀವನದ ಮೌಲ್ಯಗಳನ್ನು, ಪಾರಮಾರ್ಥದ ಒರೆಗೆಹಚ್ಚಿ ನೋಡುವವನೆ ತತ್ವಜ್ಞಾನಿ, ಎಂದು ಆ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 107,
    english:
      "An athiest denies the existence of anything he does not understand. A believer worships it mostly because he thinks he can not know it completely anyway. A sees it as a wonder, recognizes that he does not know its ways, tries to break it down and explain why it is so. A saint is one who turns inward seeking to know it all. - Mankutimma",
    kannada:
      "ಅಜ್ಞಾತವಾದುದನಭಾವವೆನೆ ನಾಸ್ತಿಕನು ।\r\nಅಜ್ಞೇಯವೆಂದದಕೆ ಕೈ ಮುಗಿಯೆ ಭಕ್ತ ॥\r\nಜಿಜ್ಞಾಸ್ಯವೆಂದು ಪರಿಕಿಸತೊಡಗೆ ವಿಜ್ಞಾನಿ ।\r\nಸ್ವಜ್ಞಪ್ತಿಶೋಧಿ ಮುನಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೭ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಅರಿವಿಗಿಲ್ಲದ್ದು, ಗೊತ್ತಿಲದ್ದು, ತಿಳಿಯದಿರುವುದು ಎಂದು “ನಾಸ್ತಿಕ” ದೇವರನ್ನು ನಂಬುವುದಿಲ್ಲ. ಅವನಿಗೆ ದೇವರಲ್ಲಿ ನಂಬಿಕೆ ಇಲ್ಲ. ಏಕೆಂದರೆ ಅವನಿಗೆ ಗೋಚರವಾಗುವುದಿಲ್ಲ ಮತ್ತು ಅನುಭವಕ್ಕೂ ಬರುವುದಿಲ್ಲ. ಆದರೆ ಅದರ ಅರಿವಿಲ್ಲದಿದ್ದರೂ ಅದರಲ್ಲಿ ನಂಬಿಕೆ ಇಟ್ಟಿರುವವನು ಭಕ್ತ. ಇರಲಿ ನಾನು ಇದನ್ನು ವಿಚಾರಕ್ಕೆ ಒರೆ ಹಚ್ಚಿ ನಿರ್ಣಯಿಸಬೇಕು,ಪರಿಕಿಸಿ ನೋಡಬೇಕು ಎಂದು ಹೇಳುವವನೇ ವಿಜ್ಞಾನಿ. ನಂಬಿದ್ದನ್ನು ಅಂತರ್ಯದಲ್ಲಿ ಚಿಂತನ, ಮನನ , ಧ್ಯಾನ , ತಪಸ್ಸು ಮಾಡಿ ಆ ಪರಮಾತ್ಮ ವಸ್ತುವನ್ನು ಅರಿತುಕೊಳ್ಳಲು ಪ್ರಯತ್ನಪಡುವವನೆ ಮುನಿ ಅಥವಾ ಋಷಿ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 108,
    english:
      "What is a lifeless object? What is life? Where ever the energy is dormant - we call it life less; stone, stick and dirt. When the hidden enrgy is woken up, the world comes to life. In a way, life resides in lifeless objects. - Mankutimma\r\n\r\n[Translator's note: Just imagine a handful of paddy seeds. You keeep them for years, you will see no change - absolutely life less. Just sow it in sand; pour some water - you will see sprouts with in two days. Life was always hidden, sleeping in side the lifeless seeds. Sand, water and warmth of the earth only woke it up.]",
    kannada:
      "ಜಡವೇನು? ಜೀವವೇಂ? ಚೈತನ್ಯ ನಿದ್ರಿಸಿರು ।\r\nವೆಡೆಯೆಲ್ಲ ಜಡಲೋಕ ಕಲ್ಲು ಕಡ್ಡಿ ಕಸ ॥\r\nಅಡಗಿರ್ಪ ಚೈತನ್ಯವೆಚ್ಚರಲು ಜಂತು ಜಗ ।\r\nಜಡವೆ ಜೀವದ ವಸತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೮ ॥",
    kannada_explanation:
      "ಜಡವೇನು? ಜೀವವೇನು? ಚೈತನ್ಯ ಎಲ್ಲೆಲ್ಲಿ ನಿದ್ರಿಸಿದೆಯೋ ಅದೆಲ್ಲ ಜಡ. ಕಲ್ಲು ಕಡ್ಡಿ ಕಸ ಹೀಗೆ. ಹಾಗೆ ಅಡಗಿರುವ ಅಥವಾ ಸುಪ್ತವಾಗಿರುವ ಚೈತನ್ಯ ಎಚ್ಚರವಾದರೆ ಆ ವಸ್ತು ಜೀವಂತವಾಗುತ್ತದೆ. ಹಾಗಾಗಿ ಜಡವೆ ಜೀವಕ್ಕೆ ಮನೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 109,
    english:
      "Ahalya had turned into stone due to a curse from her husband Gautama. She stayed as a stone unmoved till Rama touched it with his foot. She came back to life. We may think many such objects as lifeless just because it does not move. Such objects can come to life and move when some wind blows energy into it. - Mankutimma.",
    kannada:
      "ಶಿಲೆಯಾಗಿ ನಿದ್ರಿಸುತ್ತಿರ್ದಾಕೆ ರಾಮಪದ ।\r\nತಲದ ಸಂಸ್ಪರ್ಶದಿಂದೆದ್ದು ನಿಂತಂತೆ ॥\r\nಚಲಿಸದೆನಿಸಿದ ಜಡವನಾವ ಗಾಳಿಯೊ ಸೋಕೆ ।\r\nಬಲ ತೀವಿ ಚಲಿಪುದದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೦೯ ॥",
    kannada_explanation:
      "ಶಾಪಗ್ರಸ್ತಳಾಗಿ, ಕಲ್ಲಾಗಿ ನಿದ್ರಿಸುತ್ತಿದ್ದ ಋಷಿಯ ಪತ್ನಿ ಅಹಲ್ಯೆ, ರಾಮನ ಪದ ಸೋಕಿ ಜೀವಂತವಾದಂತೆ, ಇದು ಚಲಿಸದು, ಇದು ಜಡ ಎಂದು ಯಾವುದು ಕರೆಯಲ್ಪಡುತ್ತದೋ ಅದು ಸತ್ವದ, ಚೈತನ್ಯದ, ಜೀವ ಶಕ್ತಿಯ ಸಂಸರ್ಗದಿಂದ, ಶಕ್ತಿಯನ್ನು ಪಡೆದು ಜೀವಂತವಾಗುತ್ತದೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 110,
    english:
      "If a person has seen the snow capped mountains, what greatness will he see in a mere bacteria? The bacteria though, has life, hunger and urge to go places in search of food. It has (the cumulative intelligence of) infinite lineage of bacteria that came before it; perhaps the as old as the mighty mountains. Is this legacy of bacteria any smaller than that of the mountain? - Mankutimma.",
    kannada:
      "ಹಿಮಗಿರಿಯ ಕಂಡಂಗೆ ಕ್ರಿಮಿಯ ಹಿರಿಮೆಯದೇನು? ।\r\nಕ್ರಿಮಿಗೆ ಹಸಿವುಂಟಿನಿತು ಬೆದಕಾಟವುಂಟು ॥\r\nಅಮಿತ ಸಂತತಿಯುಂಟು ಹಿಮಗಿರಿಯ ಸಮಯುಗದ ।\r\nಕ್ರಿಮಿಪಂಕ್ತಿ ಕಿರಿದಹುದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೦ ॥",
    kannada_explanation:
      "ಹಿಮಾಲಯ ಪರ್ವತವನ್ನು ಕಂಡವನಿಗೆ ಒಂದು ಸಣ್ಣ ಕ್ರಿಮಿ ಯಾವ ಲೆಕ್ಕ? ಆದರೆ ಕ್ರಿಮಿಗೆ ಸಂತತಿ ಉಂಟು, ಹಸಿವುಂಟು, ಬೆದಕಾಟವುಂಟು. ಹಿಮಾಲಯವು ಎಂದಿನಿಂದ ಇದೆಯೋ ಅಂದಿನಿಂದ ಕ್ರಿಮಿಯ ಅನಂತ ಸಂತತಿಯೂ ಉಂಟು. ಕ್ರಿಮಿಗಳು ಎಷ್ಟಿವೆಯೆಂದರೆ ಕ್ರಿಮಿ ಸಂತತಿಯನ್ನು ಒಟ್ಟು ಮಾಡಿದರೆ , ಅದು ಹಿಮಾಲಯಕ್ಕಿಂತ ದೊಡ್ಡದಾಗಬಹುದು. ಹಾಗಾಗಿ ಕ್ರಿಮಿ ಪಂಕ್ತಿ ಕಿರಿಯದಲ್ಲವೆಂದು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 111,
    english:
      "What is an inanimate object? It is just another part of creation where life is asleep. The fire of life is asleep inside them. When the supreme cosmic being blows electrifying energy into it, it starts walking (moving) like a living being. - Mankutimma.\r\n\r\n[Translator's note: Is he trying to explain the the origin of life - http://en.wikipedia.org/wiki/Abiogenesis ]",
    kannada:
      "ಜಡವೆಂಬುದೇನು? ಸೃಷ್ಟಿಯಲಿ ಚೇತನ ಸುಪ್ತಿ ।\r\nಅಡಗಿ ನಿದ್ರಿಪುದಲ್ಲಿ ಚೈತನ್ಯದಗ್ನಿ ॥\r\nಮಿಡಿಯೆ ಪರಸತ್ತ್ವ ವಿದ್ಯುದ್ದೀಪ್ತಿಯದನಾಗ ।\r\nನೆಡೆವುದದು ಜೀವಿವೊಲು - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೧ ॥",
    kannada_explanation:
      "ಒಂದೇ ಮೂಲದಿಂದ ಹೊರಟ ಎರಡು ವಸ್ತುಗಳು. ಒಂದು ಜಡ ಇನ್ನೊಂದು ಚೇತನ. ಅದರ ಅಸ್ಥಿತ್ವಕ್ಕೆ ಕಾರಣವೇ ಬೃಹಚ್ಚೇತನ. ಸೃಷ್ಟಿಯ ಆದಿಯಲ್ಲಿ ಆ ಚೇತನದ ವ್ಯಾಪಕತೆಯ ಸ್ವರೂಪವೇ ಬೇರೆ. ಕೋಟ್ಯಾಂತರ ವರ್ಷಗಳಿಂದ ಬದಲಾಗುತ್ತಾ ಬರುತ್ತಿದೆ. ಮೊದಲು ಪಂಚಭೂತಗಳಲ್ಲಿ ಮಾತ್ರ ಇದ್ದದ್ದು ಕಾಲಾನುಕಾಲಕ್ಕೆ ಗಿಡಮರಗಳಲ್ಲಿ ತದನಂತರ ಕ್ರಿಮಿ ಕೀಟಗಳಲ್ಲಿ, ನಂತರ ಪ್ರಾಣಿಗಳಲ್ಲಿ ಹೀಗೆ ಎಲ್ಲದರ ಅಸ್ಥಿತ್ವಕ್ಕೆ ಕಾರಣವಾದ ಚೇತನವು ತನ್ನ ಶರೀರವನ್ನು ರೂಪಾಂತರಗೊಳಿಸುತ್ತಾ ಹೋಯಿತು. ” ಅಕಾಶಾದ್ವಾಯು: ವಾಯೋರಗ್ನಿ: ಅಗ್ನೇರಾಪಃ ಅದ್ಭ್ಯಃ ಪೃಥಿವೀ ಪೃತಿವ್ಯಾ ಓಷದಯಃ ಒಷದೀಭ್ಯೋನ್ನಂ ಅನ್ನಾತ್ ಪುರುಷಃ ” ಹೀಗೆ ಚೇತನವು ತನ್ನ ಇರುವಿಕೆಯನ್ನು ಎಲ್ಲೆಡೆ ತೋರಿಸುತ್ತಾ ಜೀವಗಳಲ್ಲಿ ಚೇತನ ಸ್ವರೂಪದಿಂದ ” ಪುರುಷ” ನೆಂದು ಕರೆಯಲ್ಪಡುತ್ತಾ ಪೌರುಷದಿಂದ ಮೆರೆದಿದೆ.ಈ ಹಿಂದಿನ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದಂತೆ “ಜಡ” ವೆಂದರೆ ಚಲನೆ ಇಲ್ಲದ ವಸ್ತು. ಅದರಲ್ಲಿಯೂ ಚೈತನ್ಯವಿದೆ. ಆದರೆ ಆ ಚೈತನ್ಯಾಗ್ನಿ ನಿದ್ರಿಸುತ್ತಿದೆ ಎಂದರೆ ಸುಪ್ತವಾಗಿದೆ. ನಿದ್ರಿಸುತ್ತಿರುವ ಆ ಅಗ್ನಿಯ ಕಿಡಿ ಸಿಡಿದು ಮಿಡುಕಿದರೆ ಅದು ಜೀವಿಯಾಗುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 112,
    english:
      "Even inside the inanimate snow capped mountains, hides a spark of energy. It is contained and calm for the good of the earth (not everything is this world should be living - for its own good). That is the beauty of tranquillity, purity, profundity and composure. It is a source of inspiration and knowledge. - Mankutimma.",
    kannada:
      "ಹಿಮಗಿರಿಯೊಳವಿತಿಹುದು ಚೈತನ್ಯದಗ್ನಿಕಣ ।\r\nಸ್ತಿಮಿತದಿಂ ನಿಂತಿರ್ಪುದದು ಧರೆಯ ಹಿತಕೆ ॥\r\nಶಮದ ಸುಂದರದ ಸಾತ್ತ್ವಿಕದ ಗಾಂಭೀರ್ಯವದು  ।\r\nನಮಗೊಂದು ವೇದನಿಧಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೨ ॥",
    kannada_explanation:
      "ಬೃಹತ್ತಾದ ಹಿಮಾಲಯ ಪರ್ವತದ ಗರ್ಭದಲ್ಲೂ ಸಹ ಒಂದು ಚೈತನ್ಯದ ಅಗ್ನಿ ಅಡಗಿದೆ. ಅದು ಸ್ಥಿರವಾಗಿ, ಸ್ಥಿಮಿತದಿಂದ, ನಿಂತಿದೆ. ಈ ಭೂಮಿಯನ್ನು ಕಾಪಾಡುವುದಕ್ಕಾಗಿಯೇ!! ಶಾಂತ, ಸುಂದರ ಮತ್ತು ಸಾತ್ವಿಕ ಗಾಂಭೀರ್ಯದ ನಿಲುವಿನಲ್ಲಿ ನಿಂತಿರುವ ಆ ಹಿಮಾಲಯವು ನಮಗೆ ಜ್ಞಾನದ ಪ್ರತೀಕವಾಗಿದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 113,
    english:
      "A scientist can count the atoms in this world. But by knowing that can he know about the spirit of life in beings? Behind every facet of an object that can be measured, there is the greatness of the cosmic sprit that can not be measured or counted. That is the root of the object's existence. - Mankutimma.",
    kannada:
      "ಅಣುಸಂಖ್ಯೆಯೆಣಿಸುವನು ವಿಶ್ವದಲಿ ವಿಜ್ಞಾನಿ ।\r\nಗುಣಿಸುವನು ಭೂತಶಕ್ತಿಗಳನದರಿಂದೇಂ? ॥\r\nಗಣಿತಸಾಧ್ಯದ ಹಿಂದಗಣ್ಯದ ಮಹತ್ತತ್ತ್ವ ।\r\nವಣಗಿಹುದು ಮೂಲವದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೩ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಅತಿ ಸೂಕ್ಷ್ಮ ಜೀವಿ ಅಣುಗಳನ್ನು ವಿಜ್ಞಾನಿ ಲೆಕ್ಕ ಹಾಕಿಬಿಡಬಹುದು. ಭೌತಿಕ ಶಕ್ತಿಯನ್ನು ಗುಣಿಸಿ ಭಾಗಿಸಿ ಲೆಕ್ಕಹಾಕಿಬಿಡಬಹುದು. ಆದರೆ ಅದರಿಂದ ಏನು ಪ್ರಯೋಜನ. ಕೇವಲ ಭೌತಿಕ ರೂಪವಷ್ಟೇ ತಿಳಿಯುವುದು. ಈ ಗಣಿತ ಶಾಸ್ತ್ರಕ್ಕೂ ಮೀರಿ ಒಂದು ಮಹತತ್ವವು ಭೌತಿಕ ಶರೀರದೊಳಗೆ ಚೈತನ್ಯ ರೂಪದಲಿ ಅಡಗಿದೆ. ಅದೇ ಮೂಲ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 114,
    english:
      "We may observe some order in the forms of objects of creation is this world. The order may make sense to our hypothesis or may not. Does it matter? The cosmic spirit behind all forms and order is the only truth. That is not affected by the forms, or our impressions of the forms or our hypothesis about the forms. If one wants to understand it, he must set his eyes on the spirit and not the forms. - Mankutimma.",
    kannada:
      "ಸೃಷ್ಟಿರೂಪಂಗಳವತಾರದೊಳ್ ಕ್ರಮಲಕ್ಷ್ಯ ।\r\nಪುಷ್ಟವಾಗಿರ್ದೊಡೇನಿಲ್ಲದೊಡದೇನು? ॥\r\nಶಿಷ್ಟಮಾದುದು ಸತ್ತ್ವವದನು ಸೋಕದು ರೂಪ ।\r\nದೃಷ್ಟಿ ಸತ್ತ್ವದೊಳಿರಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯಲ್ಲಿ ಎಲ್ಲವೂ ಆ ಪರಮಾತ್ಮನ ಅವತಾರವೆಂದು ನಾವು ನಂಬಿದ್ದೇವೆ. ಆದರೆ ಇಡೀ ಸೃಷ್ಟಿಯಲ್ಲಿ ಒಂದು ಕ್ರಮವಿದ್ದರೆಷ್ಟು ಅಥವಾ ಇಲ್ಲದಿದ್ದರೆಷ್ಟು. ಹೊರ ರೂಪ ಶಿಷ್ಟವೋ ಅಲ್ಲವೋ ಆದರೆ ಅಂತರ್ಯದಲ್ಲಿರುವ ಆ ಪರಮಾತ್ಮ ತತ್ವವು ಹೊರರೂಪಗಳಿಗೆ ಅತೀತವಾಗಿ ವಿಕಾರಗೊಳ್ಳುವುದಿಲ್ಲ. ಹಾಗಾಗಿ ನಾವು ನಮ್ಮ ದೃಷ್ಟಿಯನ್ನು ಆ ಪರತತ್ವದಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸಬೇಕು ಎನ್ನುವುದೇ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 115,
    english:
      "What we think is order in this creation are like clouds in the sky - limitted impressions on the infinite sky. They say a single celled bacteria gave rise to fish, land animals and finally humans in that order. This hypothesis may be very well made and explain in every detail how nature works. However, it is not equal to the cosmic spirit that can breathe life into the inanimate objects. - Mankutimma",
    kannada:
      "ಕ್ರಮದ ನಭವಿಕೃತಿ ವಾಯ್ವಾದಿ ರೂಪಗಳಂತೆ ।\r\nಕೃಮಿ ಬೀಜದಿಂ ಮತ್ಸ್ಯ ಮೃಗ ಮನುಜರಂತೆ ॥\r\nಕ್ರಮ ವಿವರವೇನಿರಲಿ ಸೃಷ್ಟಿಯ ವಿಧಾನದಲಿ ।\r\nಸಮಸದದು ಸತ್ತ್ವವನು - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೫ ॥",
    kannada_explanation:
      "ಪಂಚಭೂತಗಳಿಗೆ ಒಂದು ಕ್ರಮವಿದೆ. ಸೃಷ್ಟಿಗೆ ಒಂದು ಕ್ರಮವಿದೆ ಅದು ಬದಲಾಗುವ ಕ್ರಮ. ಹೊಸ ಹೊಸ ಆವಿಷ್ಕ್ರುತ ರೂಪಗಳಲ್ಲಿ ಅದು ಕಾಣುತ್ತಲೇ ಇರುತ್ತದೆ. ಆಕಾಶ, ಭೂಮಿ ಗಾಳಿ ನೀರು ಇವೆಲ್ಲವೂ ಅವುಗಳದೇ ಆದ ಕ್ರಮದಲ್ಲಿ ಇದ್ದರೂ, ಒಂದೇ ಕ್ರಮವಿಲ್ಲದಂತೆ ಕಾಣುವುದು. ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹುಟ್ಟುವ ಕ್ರಿಮಿಗಳು, ಪ್ರಾಣಿ, ಪಕ್ಷಿ, ಜಲಚರಗಳಿಗೂ ಒಂದೊಂದು ಕ್ರಮವಿದೆ. ಆಕಾರವಿದೆ, ರೂಪಗಳಿವೆ. ಆ ರೂಪಗಳು ಕಾಲಾನುಕಾಲಕ್ಕೆ ಬದಲಾಗುತ್ತಲೇ ಇರುತ್ತವೆ. ಆದರೆ ಈ ಬದಲಾವಣೆಗಳಿಗೆ ಅತೀತವಾಗಿ ಇರುವುದೇ ಆ ಪರಮ ಚೇತನ, ಪರಮಾತ್ಮ ಶಕ್ತಿ ಅಥವಾ ಆತ್ಮವೆನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 116,
    english:
      "Ordering all the atoms in order to create this world (and perhaps other worlds), running this machinery of the world from background, giving life to all beings in this world - are all the works of the cosmic spirit. - Mankutimma",
    kannada:
      "ಪರಮಾಣುಮಿಂ ಪ್ರಪಂಚಗಳ ಸಂಯೋಜಿಪುದು ।\r\nಮರೆಯಿಂದ ಸೃಷ್ಟಿಯಂತ್ರವ ಚಾಲಿಸುವುದು ॥\r\nಚರಲೀಲೆಯಲಿ ಜೀವವೆನಿಪ ಚೈತನ್ಯವದು ।\r\nಪರಸತ್ತ್ವ ಶಕ್ತಿಯಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೬ ॥",
    kannada_explanation:
      "ಇಡೀ ಜಗತ್ತನ್ನು ಪರಮಾಣುಗಳನ್ನು ಪೋಣಿಸುವ ಕ್ರಿಯೆಯಿಂದ ಈ ಜಗತ್ತಿನ ಎಲ್ಲವನ್ನೂ ಒಂದು ಸೂತ್ರದಲ್ಲಿ ಇರುವಂತೆ ಸೃಷ್ಟಿಸಿ, ಇದನ್ನು ನಡೆಸಲು ಒಂದು ಕ್ರಮವನ್ನು ಉಂಟುಮಾಡಿ , ಅದರ ಚಲನೆಗೆ ತಾನೇ ಕಾರಣವಾಗಿ, ಈ ಜಗತ್ತಿನ ಲೀಲಾವಿನೋದವನ್ನು ನಡೆಸುವ ಜೀವವೆಂದು ಹೆಸರು ಪಡೆದ ಅದೇ ಚೈತನ್ಯ. ಆ ಚೈತನ್ಯವೇ, ಪರಮಾತ್ಮ, ಪರಮ ಶಕ್ತಿ ಮತ್ತು ಪರ ಸತ್ವ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಡಿ ವಿ.ಜಿ ಯವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 117,
    english:
      "Is life present in any one part of your body? Is it not filled from foot to head completely? Just like that, the cosmic spirit is present every where in this world as the life giving energy. At the same time, it is not attached to anything (or any one thing). - Mankutimma.",
    kannada:
      "ಸ್ಥಾಪಿತವೆ ಜೀವ ನಿನ್ನೊಡಲಿನೊಂದಂಗದಲಿ? ।\r\nಆಪಾದಶಿರವುಮದು ತುಂಬಿರುವುದಲ್ತೆ? ॥\r\nವ್ಯಾಪಿಸಿಹುದಂತೊಂದು ಚೈತನ್ಯ ವಿಶ್ವದಲಿ ।\r\nಲೇಪಗೊಳ್ಳದ ಸತ್ತ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೭ ॥",
    kannada_explanation:
      "ಆ ಜೀವವೆನ್ನುವ ಚೈತನ್ಯ ಕೇವಲ ನಿನ್ನ ಯಾವೊದೋ ಒಂದು ಅಂಗದಲ್ಲಿ ತುಂಬಿದೆ ಎಂದು ಕೊಂಡಿದ್ದೀಯಾ? ಅದು ನಿನ್ನ ಅಡಿಯಿಂದ ಮುಡಿಯವರೆಗೆ ಅಂದರೆ ಪಾದದಿಂದ ಶಿರದವರೆಗೆ, ಇಡೀ ದೇಹವನ್ನು ವ್ಯಾಪಿಸಿಕೊಂಡಿದೆ. ಹೇಗೆ ಅದು ನಮ್ಮ ದೇಹದಲ್ಲಿ ವ್ಯಾಪಕವಾಗಿದೆಯೋ ಹಾಗೆಯೇ, ಇಡೀ ವಿಶ್ವದಲ್ಲಿ ಒಂದು ಅಂಗುಲವೂ ಬಿಡದೆ ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿಕೊಂಡಿದೆ. ಹಾಗೆ ವ್ಯಾಪಿಸಿಕೊಂಡಿದ್ದರೂ, ಎಲ್ಲೂ ಯಾವುದಕ್ಕೂ ಅಂಟದೆ ಇರುವುದೇ ಆ ಚೈತನ್ಯದ ಗುಣ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 118,
    english:
      'The source of life in this world is not only due to the Sun, not only due to the earth. If life has to sustain on this planet there has to be contribution from both of them. Various energies and matter have to come together and become "one" to make life possible. It is a subtle point that can not be settled through logic or argument. - Mankutimma',
    kannada:
      "ರವಿಮಾತ್ರದಿಂದಲ್ಲ ಭುವಿಮಾತ್ರದಿಂದಲ್ಲ ।\r\nಭುವನಪೋಷಣೆಯುಭಯ ಸಹಕಾರದಿಂದ ॥\r\nವಿವಿಧ ಶಕ್ತಿರಸಂಗಳೇಕೀಭವಿಸೆ ಜೀವ ।\r\nಅವಿತರ್ಕ್ಯ ಸೂಕ್ಷ್ಮವದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೮ ॥",
    kannada_explanation:
      "ಕೇವಲ ಸೂರ್ಯನಿಂದಾಗಲೀ ಅಥವಾ ಕೇವಲ ಪ್ರುತ್ವೀತತ್ವದಿಂದಾಗಲೀ ಈ ಭೂಮಿಯು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ. ಈ ಭೂಮಿಯ ಅಸ್ಥಿಸ್ತ್ವಕ್ಕೆ ಈ ಎರಡರ ಸಹಕಾರವೂ ಬೇಕು. ಅಷ್ಟೇ ಅಲ್ಲ ಇವೆರಡರ ಸಹಕಾರದಿಂದ ಈ ಭೂಮಿಯ ಮೇಲ್ಮೈಯಲ್ಲಿ ಮತ್ತು ಅಂತರ್ಯದಲ್ಲಿ ಉತ್ಪತ್ತಿಯಾಗುವ ಹಲವಾರು ಜೀವರಸಗಳ ಸಮ್ಮಿಲನದಿಂದ ಇಲ್ಲಿ ಜೀವಿಗಳ ಜೀವಿಕೆ ಸಾಧ್ಯ. ಆದರೆ ಇದು ಏಕೆ ಹೀಗೆ? ಹಾಗೆ ಯಾಕಿರಬಾರದು? ಇದು ಹೀಗೇ ಏಕಾಗುತ್ತದೆ ಹಾಗೇಕಿರಬಾರದು, ಇದು ಸರಿ, ಅದು ಸರಿಯಿಲ್ಲ ಎನ್ನುವಂತಾ ತರ್ಕ ಕುತರ್ಕಗಳಿಗೆ ಸಿಗದ ಸೂಕ್ಷ್ಮವಿಚಾರವಿದು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 119,
    english:
      '"The food we eat, the water we drink, the air we breathe, the clothes we wear; are all works of complex machinery in this earth and cosmic space. Life is a result of both of them; earth providing material and the cosmic outer space providing the energy." - Mankutimma',
    kannada:
      "ನಾವುಣ್ಣುವನ್ನಗಳು ನಾವು ಕುಡಿವುದಕಗಳು ।\r\nನಾವುಸಿರುವೆಲರುಗಳು ನಾವುಡುವ ವಸ್ತ್ರ ॥\r\nಭೂವ್ಯೋಮಗಳ ಯಂತ್ರ ಸಂಘದುತ್ಪನ್ನಗಳು ।\r\nಜೀವವೆರಡರ ಶಿಶುವು - ಮಂಕುತಿಮ್ಮ ॥ ೧೧೯ ॥",
    kannada_explanation:
      "ನಾವು ತಿನ್ನುವ ಆನ್ನ, ನಾವು ಕುಡಿಯುವ ನೀರು ನಾವು ಉಸಿರಾಡುವ ಗಾಳಿ ನಾವು ಉಡುವ ಬಟ್ಟೆ ಎಲ್ಲವೂ ಆಕಾಶ ಮತ್ತು ಭೂಮಿಯ ಪರಸ್ಪರ ಸಮ್ಮಿಲನದಿಂದ ತಯಾರಿಸಲ್ಪಡುವ ಉತ್ಪನ್ನಗಳು. ನಮ್ಮಲ್ಲಿ ಇರುವ ಚೇತನವೂ ಸಹ ಈ ಭೂಮಿ ಮತ್ತು ಆಕಾಶಗಳ ಶಿಶುವೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 120,
    english:
      '"The body is an amazing machinery. There is a incessasant process of assimilation that goes on inside it. Everything in this world gets into it in a subtle way (through ingesting or through our senses). Once in, it has mechanism to make us want more or enough of perticular things. Why providence created such a wonderful machine!!" - Mankutimma',
    kannada:
      "ಪಾಕ ನಿನ್ನೊಳದೊಂದು ಸಾಗುತಿಹುದೆಡೆಬಿಡದೆ ।\r\nಲೋಕದೆಲ್ಲವು ಸೂಕ್ಷ್ಮಗತಿಯಿನೊಳವೊಕ್ಕು ॥\r\nಸಾಕುಬೇಕುಗಳೆಲ್ಲವದರಿನಾ ಯಂತ್ರವನು ।\r\nಏಕೆ ರಚಿಸಿದನೊ ವಿಧಿ! - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೦ ॥",
    kannada_explanation:
      "ಒಂದು ಪಾಕ ಸಿದ್ಧವಾಗುವ ರೀತಿಯಲ್ಲಿ ಮನಸ್ಸು ಬುದ್ಧಿಗಳು ದೇಹದೊಡನೆ ಸೇರಿ ನಿನ್ನೊಳು ಸೂಕ್ಷ್ಮಗತಿಯಲ್ಲಿ ಈ ಜಗದ್ವ್ಯಾಪಾರವೇ ನಡೆಯುತ್ತಿದೆ. ಕೆಲವನ್ನು ಬೇಕೆನ್ನುವ ಕೆಲವನ್ನು ಸಾಕೆನ್ನುವ. ಇಂದು ಬೇಡವೆಂದದ್ದನ್ನು ನಾಳೆ ಬೇಕೆನ್ನುವ ಎಂದೋ ಇಷ್ಟಪಟ್ಟದ್ದನ್ನು ಇಂದು ಅಸಹ್ಯಿಸಿಕೊಳ್ಳುವ , ಈ ಮನುಷ್ಯದೇಹದ ಯಂತ್ರವನ್ನು ಹೀಗೇಕೆ ರಚಿಸಿದನೋ ವಿಧಿ ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಹಾಕುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 121,
    english:
      '"What is a body? What is mind? Both are just a specific arrangement of atoms. Both of these are controlled by a third force. That force is behind the greeness of the grass, the sparkle of the stars.You must search for that spirit without getting tired."- Mankutimma',
    kannada:
      "ತನುವೇನು? ಮನವೇನು? ಪರಮಾಣು ಸಂಧಾನ ।\nಕುಣಿಸುತಿಹುದುಭಯವನು ಮೂರನೆಯದೊಂದು ॥\nತೃಣದ ಹಸಿರಿನ ಹುಟ್ಟು ತಾರೆಯೆಸಕದ ಗುಟ್ಟು ।\nದಣಿಯದದನರನು ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೧ ॥",
    kannada_explanation:
      "ದೇಹವೇನು ಮನಸ್ಸೇನು, ಎರಡೂ ಸಹ ಪರಮಾಣುಗಳ ಅನುಸಂದಾನದಿಂದ ಕಾರ್ಯಪ್ರವೃತ್ತವಾಗಿವೆ. ಆದರೆ ಇವರೆಡನ್ನೂ ಸಂಧಿ ಮಾಡಿ ಆಡಿಸುತಿರುವುದು ಆ ಮೂರನೆಯ ಪರಮ ಶಕ್ತಿ. ಹುಲ್ಲಿನ ಹಸಿರಿಗೂ, ತಾರೆಯ ಮಿನುಗುವಿಕೆಗೂ ಕಾರಣವೇನೆಂಬುದನ್ನು ನೀ ಹುಡುಕು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಕೊಟ್ಟಿದಾರೆ.",
  },
  {
    number: 122,
    english:
      '"What is born will go on procreating without giving much thought to the fact that death is imminent. A dry blade of grass also sprouts in time. People will perish, but mankind continues. The essence of life can not be subdued." - Mankutimma',
    kannada:
      "ಜನಿಸಿದುದು ಮೃತಿಯನೆಳಸದೆ ಕುಲವ ಬೆಳಸುವುದು ।\r\nಒಣಗಿದಂತಿರುವ ತೃಣಮೂಲ ಮೊಳೆಯುವುದು ॥\r\nಮನುಜರಳಿವರು ಮನುಜಸಂತಾನ ನಿಂತಿಹುದು ।\r\nಅಣಗದಾತ್ಮದ ಸತ್ತ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೨ ॥",
    kannada_explanation:
      "ಹುಟ್ಟಿದವರು ಯಾರೂ ಕೂಡಲೇ ಸಾಯಲು ಇಚ್ಚಿಸುವುದಿಲ್ಲ. ತಮ್ಮ ಕುಲವನ್ನು ಬೆಳೆಸಲು ಇಚ್ಚಿಸುತ್ತಾರೆ. ನೋಡಲು ಒಣಗಿದಂತೆ ಇದ್ದರೂ ಮಳೆಯಾದಾಗ, ಹೇಗೆ, ಮತ್ತೆ ತನ್ನ ಒಡಲಿಂದ ಜೀವಂತವಾಗಿ ಚಿಗುರು ಹಸಿರೊಡೆದು ನಲಿಯುವ ಹಸಿರು ಹುಲ್ಲಂತೆ, ಮನುಷ್ಯರು ಸತ್ತರೂ ಅವರ ಸಂತಾನ ಈ ಭೂಮಿಯಲ್ಲಿ ನಿಂತಿಹುದು. ಆತ್ಮದ ಸತ್ವ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಂದಿಗೂ ಕಡಿಮೆಯಾಗದು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ.",
  },
  {
    number: 123,
    english:
      "\"Man faces a lot of miseries and troubles in his work. But he always bounces back with a more vigor and a new endeavours. He is not the one who can remain silent when troubled. Why does he do all this when all he can think is right with him? - 'chit' (mind) is the nature of the atma (soul) that is residing in him.\" - Mankutimma",
    kannada:
      "ಬನ್ನಬವಣೆಗಳ ತಾನೆನಿತೆನಿತು ಪಟ್ಟಿರೆಯು ।\r\nಮಿನ್ನೊಮ್ಮೆ ಮತ್ತೊಮ್ಮೆ ಹೊಸ ಸಾಹಸಗಳಿಂ ॥\r\nಸನ್ನಹಿಸುವಂ ಸುಮ್ಮನಿರಲೊಲದೆ ಮಾನವನು ।\r\nಚಿನ್ಮಯತೆಯಾತ್ಮಗುಣ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೩ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯ ಎಷ್ಟೊಂದು ಕಷ್ಟ ಅನುಭವಿಸಿದರೂ, ಸೋಲನ್ನು ಅನುಭವಿಸಿದರೂ, ತೊಂದರೆಗಳನ್ನು ಎದುರಿಸದರೂ, ಮತ್ತೆ ಮತ್ತೆ ಪ್ರಯತ್ನವನ್ನು ಮಾಡುತ್ತಲೇ ಇರುತ್ತಾನೆ, ಹೊಸ ಹೊಸ ಸಾಹಸಗಳನ್ನು ಮಾಡುತ್ತಲೇ ಇರುತ್ತಾನೆ. \n ಸುಮ್ಮನಿರಲಾಗದಿರುವುದು ಮನುಷ್ಯನಲ್ಲಿರುವ ಜ್ಞಾನಸ್ವಾರೂಪವಾದ ಆತ್ಮದ ಗುಣವೆಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ.",
  },
  {
    number: 124,
    english:
      "\"Man seeks happiness always. Some seek it in silence, in conversation, in comedy, in music, in romance, in victory. What offers solace to one's perturbed mind is different for different people. Why does he do all these when 'ananda' (happiness) is the nature of the atma (soul) in him.\" - Mankutimma",
    kannada:
      "ಮೌನದೊಳೊ ಮಾತಿನೊಳೊ ಹಾಸ್ಯದೊಳೊ ಹಾಡಿನೊಳೊ ।\r\nಮಾನವಂ ಪ್ರಣಯದೊಳೊ ವೀರ ವಿಜಯದೊಳೋ ॥\r\nಎನೊ ಎಂತೋ ಸಮಾಧಾನಗಳನರಸುತಿಹ ।\r\nನಾನಂದವಾತ್ಮಗುಣ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೪ ॥",
    kannada_explanation:
      "ನಾವು ಸದಾ ಕಾಲ ಮೌನವಾಗಿಯೋ, ಮಾತನಾಡುತ್ತಲೋ, ಹಾಸ್ಯವಾಡುತ್ತಲೋ, ಹಾಡುತ್ತಲೋ, ಕೋಪಗೊಳ್ಳುತ್ತಲೋ, ಪ್ರಣಯದಲ್ಲೋ, ವೀರತ್ವದಲ್ಲೋ ಅಥವಾ ಗೆಲುವಿನ ಸಂಭ್ರಮದಲೋ ಯಾವುದಾದರೂ ವಿಧದಿಂದ ಸಮಾಧಾನ ಸಂತೋಷಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಲು ಪ್ರಯತ್ನಿಸುತ್ತಿರುತ್ತೇವೆ. ನಮ್ಮನ್ನು ಸದಾ ಕಾಲ ಸಕ್ರಿಯವಾಗಿಸಿರುವ ಆ ಪರಮ ಚೇತನವು ನಮ್ಮ ಮೂಲಕ ಈ ಎಲ್ಲ ಭಾವಗಳನ್ನೂ ಅನುಭವಿಸುತ್ತಾ ಇರುವುದೇ ಆತ್ಮನ ನಿಜವಾದ ಗುಣ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 125,
    english:
      '"sat, chit and ananda are the inherent essential qualities of the atma. The life that we lead will put a veil on them and prevent us from seeing them. That is the reason we seek those qualities in the outside world. Life is like a sugar-cane, hiding the juice in it. We have to extract the pure essence (sat, chit and ananda) by subjecting it to the crusher machine. i.e. by leading this worldly life. This world is the sugar-cane-juice-extracting-factory." - Mankutimma',
    kannada:
      "ಸಚ್ಚಿದಾನಂದಂಗಳಾತ್ಮ ಸ್ವಭಾವ ರಸ ।\r\nಬಚ್ಚಿಡುವುದದನು ಜೀವಿತೆಯ ಮಾಯಿಕತೆ॥\r\nಇಕ್ಷುವೊಲ್ ಜೀವ; ಗಾಣದವೊಲ್ ಜಗನ್ಮಾಯೆ ।\r\nನಿಚ್ಚವಿಳೆಯಾಲೆಮನೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೫ ॥",
    kannada_explanation:
      "ಆತ್ಮದ ಗುಣ ಸಚ್ಚಿದಾನಂದ. ಆದರೆ ಈ ಇಂದ್ರಿಯ ಸಂಪರ್ಕದಿಂದ ಉಂಟಾದ ನಮ್ಮ ಬದುಕಿನ ಮಾಯೆ ಅದನ್ನು ಮುಚ್ಚಿಡುವುದು. ಜೀವ, ರಸ ತುಂಬಿದ ಕಬ್ಬಿಣ ಜಲ್ಲೆ ಇದ್ದಂತೆ. ಈ ಜಗತ್ತಿನ ಮಾಯೆ ಗಾಣದ ರೀತಿ. ಹೀಗೆ ಶುದ್ಧರಸ ತುಂಬಿದ ಆತ್ಮವನ್ನು ಮಾಯೆಯಂಬ ಗಾಣದಲ್ಲಿ ಇರುಕಿಸಿ ಹಿಂಡಿ ಹಿಂಡಿ ನಿತ್ಯ ನಡೆಯುವ ಈ ಜಗತ್ತಿನ ಆಲೆಯಮನೆಯಲ್ಲಿ ಪಾಕ ತೆಗೆಯುವುದೇ ಜೀವನ ಎನ್ನುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 126,
    english:
      "\"Man appreciates his world - good, amazing. These are all just portions and particles of the whole - never the same as the complete. People call the 'whole' essence complete with all happiness and beauty as the Creator (God).\" - Mankutimma",
    kannada:
      "ಒಳಿತೆಂದು  ಸೊಗಸೆಂದು ಜಗವು ಮೆಚ್ಚುವುದೆಲ್ಲ ।\r\nಕಲೆ ಕಣಂಗಳು ಮಾತ್ರ ಪೂರ್ಣಂಗಳಲ್ಲ ॥\r\nನಲಿವು ಚೆಲುವುಗಳ ಪರಿಪೂರ್ಣ ಮೂಲಾಕೃತಿಯೆ ।\r\nಪರಬೊಮ್ಮನೆನ್ನುವರು - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೬ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಾವು ” ಇದು ಒಳ್ಳೆಯದು” ” ಇದು ಸೊಗಸು” ಎಂದು ಮೆಚ್ಚುವುದೆಲ್ಲ ಆ ಪರಮಾತ್ಮನ ಸಂಪೂರ್ಣ ರೂಪವಲ್ಲ, ಕೇವಲ ಪಾರ್ಶ್ವರೂಪ. ನಲಿವು ಚೆಲುವುಗಳ ಪರಿಪೂರ್ಣ ರೂಪವೇ ಆ ಪರಮಾತ್ಮ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 127,
    english:
      '"The creator represents all that is auspicious, pleasing and beauty. He is like a Sun full with brightness representing the three qualities. He showers his rays of splendor on the crores of waves in sea of life on this earth. With such rays the world reflects with splendor. For our eyes, this reflection itself is a pleasure." - Mankutimma',
    kannada:
      "ಶಿವಸೌಖ್ಯಸೌಂದರ್ಯಗಳ ಪೂರ್ಣರವಿ ಬೊಮ್ಮ ।\r\nಭುವನಜೀವನಜಲಧಿಯೂರ್ಮಿಕೋಟಿಯಲಿ ॥\r\nಛವಿಕೋಟಿಯೆರಚಲ್ ಪ್ರತಿಚ್ಛಾಯೆ ವಿಲಸಿಪುದು ।\r\nಸವಿ ನಮ್ಮದದರ ಕಣ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೭ ॥",
    kannada_explanation:
      "ಶುಭ ಸಂತೋಷ ಸೌಂದರ್ಯಗಳ ಪೂರ್ಣರೂಪವೇ ಆ ಪರಮಾತ್ಮ. ಈ ಜಗತ್ತಿನ ಜೀವನವೆಂಬ ಸಮುದ್ರದಲ್ಲಿರುವ ಕೋಟ್ಯಾನುಕೋಟಿ ಜೀವಬಿಂದುಗಳಲ್ಲಿ, ಆ ಪರಮ ಕಾಂತಿಯ ಛಾಯೆ ಕಾಣುವುದು ಅಥವಾ ವಿಲಾಸಿಸುವುದು. ನಾವೂ ಸಹ ಆ ಛಾಯೆಯ ಒಂದು ಕಣ ಮಾತ್ರವೆಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ. ",
  },
  {
    number: 128,
    english:
      "\"What is 'in' or 'out' in this cycle of life? Both are unified by our action of breathing. Isn't it? Even when a yogi breathes, only a little of the outside remains inside. Every being in this world is like a sponge - it can soak in the essence from outside and give it out also. Without the essence, it is dry an lifeless.\" - Mankutimma",
    kannada:
      "ಹೊರಗಾವುದೊಳಗಾವುದೀ ಸೃಷ್ಟಿಚಕ್ರದಲಿ ।\r\nಎರಡನೊಂದಾಗಿಪುದು ಹರಿವ ನಮ್ಮುಸಿರು ॥\r\nಇರುವುದುಳಿದಿನಿತು ಹೊರಗಾಳಿ ಯೋಗಿಗಳೊಳಂ ।\r\nಬರಿ ಸುಷಿರಪಿಂಡ ಜಗ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೮ ॥",
    kannada_explanation:
      "ಈ ಸೃಷ್ಟಿಯಲಿ ಹೊರಗೆ ಯಾವುದು, ಒಳಗೆ ಯಾವುದು ? ಹೊರ ಒಳಗನ್ನು ಒಂದೇ ಆಗಿಪುದು ಹರಿವ ನಮ್ಮುಸಿರು. ಯೋಗಿಗಳು ಮಾತ್ರ ತಮ್ಮ ಸಾಧನೆಯಿಂದ ಉಸಿರುಬಿಗಿ ಹಿಡಿದು ಬಿಟ್ಟ ಉಸಿರನ್ನು ತಡೆಯಬಹುದು. ಆದರೆ ಈ ಜಗವೆಲ್ಲ ಒಂದು ಕೊಳಲುಗಳ ಸಮೂಹ ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 129,
    english:
      '"Pure water from the sky comes down to the earth and mixes with water on earth. Similarly, energy from the cosmic spirit mixes with that of the man and keeps the stream of life on this earth flowing forever. This world is permanent - with somethings old, and some things old." - Mankutimma',
    kannada:
      "ಧರೆಯ ನೀರ್ಗಾಗಸದ ನೀರಿಳಿದು ಬೆರವಂತೆ ।\r\nನರನ ಪ್ರಾಕ್ತನಕೆ ನೂತನಸತ್ತ್ವ ಬೆರೆತು  ॥\r\nಪರಿವುದೀ ವಿಶ್ವಜೀವನಲಹರಿಯನವರತ ।\r\nಚಿರಪ್ರತ್ನನೂತ್ನ ಜಗ - ಮಂಕುತಿಮ್ಮ ॥ ೧೨೯ ॥",
    kannada_explanation:
      "ಭೂಮಿಯ ನೀರಿಗೆ ಆಗಸದ ಮಳೆಯ ನೀರು ಇಳಿದು ಬೆರಯುವಂತೆ, ಮನುಷ್ಯನ ಪುರಾತನತೆಗೆ ನೂತನತ್ವ ಬೆರೆತು ನಿರಂತರವಾಗಿ ಹರಿಯುವುದು ಈ ಜೀವನ ಲಹರಿ, ಹಾಗಾಗಿ ಹಳತು ಮತ್ತು ಹೊಸತದರ ನಿರಂತರ ಸಮ್ಮಿಲನವೇ ಈ ಜಗತ್ತು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 130,
    english:
      "\"This is the same world that existed eons ago. We still have the earth on which Lord Rama walked in Treta yuga. We still have the same air that Bheema breathed in Dwapara yuga. The river Ganga that Bhagiratha brought from heaven to earth is still flowing. The ocean that gave birth to the Moon (during the divine churning) is still around. How is that we are 'new'?\" - Mankutimma",
    kannada:
      "ರಾಮನಡಿಯಿಟ್ಟ ನೆಲ,ಭೀಮನುಸಿರಿದ ಗಾಳಿ  ।\r\nವ್ಯೋಮದೆ ಭಗೀರಥಂ ತಂದ ಸುರತಟಿನಿ ॥\r\nಸೋಮನಂ ಪೆತ್ತ ಕಡಲೀ ಪುರಾತನಗಳಿರೆ ।\r\nನಾಮೆಂತು ಹೊಸಬರೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೦ ॥",
    kannada_explanation:
      "ರಾಮನು ನಡೆದಾಡಿದ ನೆಲ, ಭೀಮನು ಉಸಿರಾಡಿದ ಈ ಭೂಮಿ, ದಿವಿಯಿಂದ ಭಗೀರಥ ಈ ಭೂಮಿಗೆ ತಂದ ಆಕಾಶ ಗಂಗೆ, ಸಮುದ್ರ ಮಂಥನದಲ್ಲಿ ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ ಆ ಚಂದ್ರ ಇವೆಲ್ಲವೂ ಪುರಾತನವೇ ಆಗಿರಲು, ನಾವು ಹೇಗೆ ಈ ಭೂಮಿಯಲ್ಲಿ ಹೊಸಬರಾಗುತ್ತೇವೆ ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 131,
    english:
      '"The breath from the tigers and lions, the cattle, the deer, the horses, the worms, the snake or the rat, the birds, the eagle - are all mixed in the air that we inhale. The breath in this world is all mixed - never pure." - Mankutimma',
    kannada:
      "ಪುಲಿ ಸಿಂಗದುಚ್ಛ್ವಾಸ,ಹಸು ಹುಲ್ಲೆ ಹಯದುಸಿರು ।\r\nಹುಳು ಹಾವಿಲಿಯ ಸುಯ್ಲು, ಹಕ್ಕಿ ಹದ್ದುಯ್ಲು ॥\r\nಕಲೆತಿರ್ಪುವೀಯೆಲ್ಲ ನಾಮುಸಿರ್ವೆಲರಿನಲಿ ।\r\nಕಲಬರಿಕೆ ಜಗದುಸಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೧ ॥",
    kannada_explanation:
      "ಹುಲಿ, ಸಿಂಹ, ಹಸು, ಜಿಂಕೆ, ಕುದುರೆ, ಹುಳು, ಹಾವು, ಇಲಿ , ಹಕ್ಕಿ, ಹದ್ದು ಈ ಎಲ್ಲ ಪ್ರಾಣಿ ಪಕ್ಷಿಗಳು ಉಸಿರಾಡುವ ಗಾಳಿಯೇ ನಾವು ಉಸಿರಾಡುವ ಗಾಳಿಯಲ್ಲಿ ಕಳೆತುಹೋಗಿದೆ. ಹಾಗಾಗಿ ಈ ಜಗತ್ತಿನ ಉಸಿರು ಕಲಬೆರಕೆ ಉಸಿರು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 132,
    english:
      '"Would the air exhaled from Rama not wandered near Ravana? Would not Rama have inhaled air exhaled from Ravana? Would the same air breathed by them not be still around during our times? What is new in this earth?" - Mankutimma',
    kannada:
      "ರಾಮನುಚ್ಛ್ವಾಸವಲೆದಿರದೆ ರಾವಣನೆಡೆಗೆ? ।\r\nರಾಮನುಂ ದಶಕಂಠನೆಲರನುಸಿರಿರನೆ? ॥\r\nರಾಮರಾವಣರುಸಿರ್ಗಳಿಂದು ನಮ್ಮೊಳಗಿರವೆ? ।\r\nಭೂಮಿಯಲಿ ಪೊಸತೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೨ ॥",
    kannada_explanation:
      "ರಾಮನು ಉಸಿರಾಡಿದ ಉಸಿರ ರಾವಣ ಉಸಿರಾಡಲಿಲ್ಲವೇ? ಹಾಗೆಯೇ ರಾಮನೂ ಸಹ ರಾವಣನ ಉಸಿರ ಉಸಿರಾಡಿರಬಹುದಲ್ಲವೇ. ಅಂದು ಬೀಸಿದ ಪವನನು ಇಂದೂ ಇರುವುದರಿಂದ ಅಂದು ರಾಮ ರಾವಣರು ಉಸಿರಾಡಿದ ಉಸಿರು ನಮ್ಮೊಳಗೂ ಇರುವಾಗ ಈ ಭೂಮಿಯಲಿ ಹೊಸತು ಯಾವುದು ಎಂದು ಒಂದು ಪ್ರಶ್ನೆ ಎತ್ತುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 133,
    english:
      "\"The 'out' and 'in' are unified into one. The 'past' and 'future' are one and the same. 'Here' and 'there' are the same. Energy is one. In this multi actor drama, Maya (illusion, often referred as wife of the creator) has given hundreds of roles to her husband.\" - Mankutimma",
    kannada:
      "ಬಹಿರಂತರಗಳೊಂದು ಭೂತಭವ್ಯಗಳೊಂದು ।\r\nಇಹಪರಂಗಳುಮೊಂದು ಚೈತನ್ಯವೊಂದು ॥\r\nಬಹುಪಾತ್ರನಾಟಕದಿ ಮಾಯೆ ಶತವೇಷಗಳ ।\r\nವಹಿಸಲೀವಳು ಪತಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೩ ॥",
    kannada_explanation:
      "ಒಳಗೂ ಹೊರಗುಗಳು ಒಂದೇ. ಭೂತ ಭವಿತವ್ಯಗಳು ಒಂದೇ. ಇಹ ಪರಗಳು ಒಂದೇ ಏಕೆಂದರೆ ಇವೆಲ್ಲವೂ ಆಗಿರುವುದು , ಆಗುತ್ತಿರುವುದು ಎಲ್ಲವೂ ಒಂದೇ ಚೈತನ್ಯದಿಂದ. ಆದರೆ ಈ ಜಗತ್ತನ್ನು ಆವರಿಸಿರುವ ಮಾಯೆಯೆಂಬ ಮಾಯಾಂಗನೆ ಆ ಚೈತನ್ಯಕ್ಕ್ಕೆ ಹಲವಾರು ರೂಪಗಳನ್ನು ವಹಿಸಲು ಕೊಡುತ್ತಾಳೆ, ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 134,
    english:
      '"It all starts with one. One becomes many. Over time, the many again becomes (merges into) one. This is the order of every thing in this universe - the worlds, the tribes, in a person, in an institution. One must make a note of this. But at all times, we must be aware of the cosmic spirit that is complete and eternal." - Mankutimma',
    kannada:
      "ಏಕದಿಂದಲನೇಕ ಮತ್ತನೇಕದಿನೇಕ ।\r\nವೀ ಕ್ರಮವೆ ವಿಶ್ವದಂಗಾಂಗಸಂಬಂಧ ॥\r\nಲೋಕದಲಿ ಜಾತಿಯಲಿ ವ್ಯಕ್ತಿಯಲಿ ಸಂಸ್ಥೆಯಲಿ ।\r\nಸಾಕಲ್ಯದರಿವಿರಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೪ ॥",
    kannada_explanation:
      "ಏಕದಿಂದ ಅನೇಕ ಮತ್ತು ಅನೇಕದಿಂದ ಏಕ. ಇದೆ ಕ್ರಮವೇ ವಿಶ್ವದ ಎಲ್ಲಾ ಅಂಗಗಳ ಸಂಬಂಧ. ಹಾಗಿರುವಾಗ ಲೋಕದಲ್ಲಿ ಜಾತಿಯಲಿ ವ್ಯಕ್ತಿಯಲಿ ಮತ್ತು ಈ ಜಗತ್ತಿನ ಎಲ್ಲ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸಕಲದಲ್ಲೂ, ಈ ಒಂದು ವಿಧಿ, ಕ್ರಮ ಅಥವಾ ವ್ಯವಸ್ಥೆ ಇರಬೇಕು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಆದೇಶಿಸುತ್ತಿದ್ದಾರೆ, ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 135,
    english:
      '"In this spherical universe any point you pick can be assumed to be the center. In this cosmic boiler, you (and every body else) are the ever changing center (of your own world). There is lightning like energy overflowing in the boiler. It is for us to tap into the energy and make good use. You must be like the Dhambholi lightning. (which is a lightning from Vajrayudha of Indra)" - Mankutimma',
    kannada:
      "ಸಂಪೂರ್ಣಗೋಳದಲಿ ನೆನೆದೆಡೆಯೆ ಕೇಂದ್ರವಲ ।\r\nಕಂಪಿಸುವ ಕೇಂದ್ರ ನೀಂ ಬ್ರಹ್ಮಕಂದುಕದಿ  ॥\r\nಶಂಪಾತರಂಗವದರೊಳು ತುಂಬಿ ಪರಿಯುತಿದೆ ।\r\nದಂಭೋಳಿ ನೀನಾಗು - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೫ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಯಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಕಣ ಕಣವೂ ಮಿಂಚಿನ ತರಂಗಗಳ ಕೇಂದ್ರ ಬಿಂದುವಿನನತೆ. ಬ್ರಹ್ಮ ಸೃಷ್ಟಿಮಾಡಿದ ಈ ಭೂಮಂಡಲದಲ್ಲಿ ನೀನೂ ಸಹ ಒಂದು ಕೇಂದ್ರ ಬಿಂದು. ನಿನ್ನಲ್ಲೂ ಮಿಂಚಿನ ತರಂಗಗಳು ಹರಿಯುತ್ತಿವೆ. ಹೀಗೆ ಹರಿಯುವ ಎಲ್ಲ ತರಂಗಗಳನ್ನೂ ಒಟ್ಟುಮಾಡಿ ನಿನ್ನ ಬುಧ್ದಿಯನ್ನು ವಜ್ರಾಯುಧವನ್ನಾಗಿಸಿಕೊಂಡು ಸಾಧನೆಯನ್ನು ಮಾಡು ಎಂದು ವಾಚಕರೆಗೆ ಒಂದು ಸೂಚನೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 136,
    english:
      '"The outer limit to this universe is somewhere beyond the sun and the moon. We can not know that. But for you, you can be the center of the universe and you can be where ever you want. The reach of your universe is as much as you can exhale (as far as you can think, as far as your fame/influence can reach). You must be like a fragrant flower which is very small, but has its influence far-reaching becuase of its fragrance." - Mankutimma',
    kannada:
      "ವಿಶ್ವಪರಿಧಿಯದೆಲ್ಲೊ ಸೂರ್ಯಚಂದ್ರರಿನಾಚೆ ।\r\nವಿಶ್ವಕೇಂದ್ರವು  ನೀನೆ, ನೀನೆಣಿಸಿದೆಡೆಯೆ ॥\r\nನಿಃಶ್ವಸಿತ ಸಂಬಂಧ ನಿನಗಂ ದಿಗಂತಕಂ ।\r\nಪುಷ್ಪವಾಗಿರು ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೬ ॥",
    kannada_explanation:
      "ನೀನು ಒಂದು ಕೇಂದ್ರ ಬಿಂದು. ಇಡೀ ವಿಶ್ವದ ಪರಿಧಿಯಲ್ಲಿ, ಸೂರ್ಯ ಚಂದ್ರರಿಗೂ ಆಚೆ ನೀನು ಎಲ್ಲಿ ನಿಂತರೆ ಅಲ್ಲಿ ನೀನು ಒಂದು ಬಿಂದುವಾಗಿರುವೆ. ನಿನಗೂ ದಿಗಂತಕ್ಕೂ ನಿನ್ನ ಉಸಿರಾಟದ ಸಂಬಂಧವಿದೆ. ಹಾಗಾಗಿ ನೀನು ನಿನ್ನ ಶಕ್ತಿಯ ಸುಗಂಧವನ್ನು ಎಲ್ಲೆಡೆ ಹರಡು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ಕೊಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 137,
    english:
      "\"A person who believes 'each man is the center of his world' will see himself at the center of the world wheel. Any direction he looks, he sees path taken by that wheel. The revolutions of this wheel is never-ending. This is the only ultimate truth.\" - Mankutimma",
    kannada:
      "ನಾನೆನುವವನೆ ವಿಶ್ವಚಕ್ರನಾಭಿಯವಂಗೆ ।\r\nಕಾಣಬಹ ದಿಗ್ವಲಯ ಚಕ್ರನೇಮಿಪಥ ॥\r\nಅನಂತ್ಯವೀ ಜಗಚ್ಚಕ್ರನಾಭಿಕ್ರಮತೆ ।\r\nತಾನೊಂದೆ ಸತ್ತ್ವವದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೭ ॥",
    kannada_explanation:
      "ನಾನು ಎಂದು ಯಾರಾದರೂ ಅಂದರೆ ಅವನು ಅವನ ಮಟ್ಟಿಗೆ ಅವನ ಒಂದು ಜಗಚ್ಚಕ್ರಕ್ಕೆ ನಾಭಿಯಂತಾಗುತ್ತಾನೆ. ಅವನು ನೋಡುತ್ತಿರುವುದು ಜಗತ್ತಿನ ಚಕ್ರದ ಅನಂತ ಉರುಳಾಟ. ಅದೊಂದೇ ಜೀವನದ ತಿರುಳು ಸತ್ವ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 138,
    english:
      "\"Has the cosmic spirit from beyond the sky descended into this earth and taken form of one's conscience? Or the essence radiating from one's center has reached beyond the skies?\" - Mankutimma\r\n\r\nTranslator's note: This is the classical dillemma. Are we all part of one huge world? or Does each one of us have our own worlds in our minds; each such world limitted only by the creativity of the mind?",
    kannada:
      "ಬಾನಾಚೆಯಿಂ ವಿಶ್ವಸತ್ತ್ವ ತಾನಿಳಿದಿಳಿಗೆ ।\r\nನಾನೆನುವ ಚೇತನದಿ ರೂಪಗೊಂಡಿಹುದೊ? ॥\r\nನಾನೆನುವ ಕೇಂದ್ರದಿನೆ ಹೊರಟ ಸತ್ತ್ವದ ಪರಿಧಿ ।\r\nಬಾನಾಚೆ ಹಬ್ಬಿಹುದೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೮ ॥",
    kannada_explanation:
      "ಆಕಾಶದಾಚೆ ಅಂದರೆ ನಮಗಿಂತ ಬಹಳದೂರದಿ ಇರುವ ವಿಶ್ವ ಸತ್ವವು ತಾನು ಈ ಭೂಮಿಗೆ ಇಳಿದು ” ನಾನು” ಎನ್ನುವ ಚೇತನದ ರೂಪ ತಳೆದಿದೆಯೋ ಅಥವಾ ” ನಾನು” ಎನ್ನುವ ಒಂದು ಬಿಂದುವಿನಿಂದ ಹೊರಟ ಸತ್ವವು ಆಕಾಶದಾಚೆ ಹಬ್ಬಿಹುದೋ ಎಂದು ಒಂದು ಜಿಜ್ಞಾಸಾ ಭರಿತ ಉದ್ಗಾರವನ್ನು ಎತ್ತುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 139,
    english:
      '"The story of creation is a built-up story. The story of destruction is nothing more than a story. Birth and death are the same. They are two states of the same truth. See the ultimate truth in this world in the form of constant change and the dance of energy." - Mankutimma',
    kannada:
      "ಸೃಷ್ಟಿಕಥೆ ಕಟ್ಟುಕಥೆ; ವಿಲಯಕಥೆ ಬರಿಯ ಕಥೆ ।\r\nಹುಟ್ಟುಸಾವುಗಳೊಂದೆ ಪುರುಳಿನೆರಡು ದಶೆ ॥\r\nನಿತ್ಯಪರಿವರ್ತನೆಯೆ ಚೈತನ್ಯನರ್ತನೆಯೆ ।\r\nಸತ್ಯ ಜಗದಲಿ ಕಾಣೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೩೯ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿ ಎನ್ನುವುದು,  ಲಯ ಎನ್ನುವುದು,  ಹುಟ್ಟು ಸಾವು ಎನ್ನುವುದು ಕೇವಲ ಕಲ್ಪನಾ ಕಥೆಗಳಷ್ಟೇ, ಪ್ರತಿನಿತ್ಯ ಪರಿವರ್ತನೆಯಾಗುವುದೇ ಸತ್ಯ ಈ ಜಗದಲ್ಲಿ. ಅದ್ದನ್ನು ಕಾಣು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಒಂದು ಆದೇಶವನ್ನು ನಮಗೆ ಕೊಡುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 140,
    english:
      '"Nothing stops when a person dies. The seasons continue to change. Time may grieve for some time. From the soil in which the dead are burried, rises the sprout of grass. Earth is pregnant again with new life. Nature is in a constant state of cultivation." - Mankutimma',
    kannada:
      "ಋತುಚಕ್ರ ತಿರುಗುವುದು, ಕಾಲನೆದೆ ಮರುಗುವುದು ।\nಮೃತನ ಮಣ್ಣಿಂದ ಹೊಸ ಹುಲ್ಲು ಮೊಳೆಯುವುದು ॥\nಕ್ಷಿತಿ ಗರ್ಭಧರಿಸುವಳು ಮತ್ತುದಿಸುವುದು ಜೀವ ।\nಸತತ ಕೃಷಿಯೋ ಪ್ರಕೃತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೦ ॥",
    kannada_explanation:
      "ಋತುಗಳ ಚಕ್ರ ತಿರುಗುತ್ತಲೇ ಇರುತ್ತದೆ. ಕಾಲನು ತನ್ನ ಪದಾಘಾತದಲ್ಲಿ ಮೃತರಾಗುವವರ ನೆನೆದು ಮರುಗುತ್ತಾನೆ . ಹಾಗೆ ಮೃತರಾದವರು ಮಣ್ಣಾದ ಮೇಲೆ ಆ ಭೂಮಿಯಮೇಲೆ ಮತ್ತೆ ಹೊಸ ಹುಲ್ಲು ಹುಟ್ಟುತ್ತದೆ..ಈ ಧರೆ ಮತ್ತೆ ಮತ್ತೆ ಗರ್ಭ ಧರಿಸಿ ಹೊಸ ಹೊಸ ಪಲ್ಲವಗಳಿಗೆ ಎಡೆಮಾಡಿ ಕೊಡುತ್ತಾಳೆ, ಮತ್ತೆ ಮತ್ತೆ ಹೊಸ ಜೀವ ಉದಯಿಸುವುದು. ನಿರಂತರವಾಗಿ ನಡೆಯುವ ಕೃಷಿಯೇ ಈ ಪ್ರಕೃತಿ ಎಂದು ಒಂದು ಸುಂದರ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 141,
    english:
      '"The Sun, Moon, Earth, Water, Himalayas, Ganga and the human lineage are all very very old. Can you replace any one of them just because they are old? Aren\'t the old not present in the new?" - Mankutimma',
    kannada:
      "ಹಳೆ ಸೂರ್ಯ ಹಳೆ ಚಂದ್ರ ಹಳೆ ಭೂಮಿ ಹಳೆ ನೀರು ।\nಹಳೆ ಹಿಮಾಚಲ ಗಂಗೆ ಹಳೆ ವಂಶಚರಿತೆ ॥\nಹಳೆಯವಿವು ನೀನದರೊಳಾವುದನು ಕಳೆದೀಯೊ? ।\nಹಳದು ಹೊಸತರೊಳಿರದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೧ ॥",
    kannada_explanation:
      "ನಾವು ನೋಡುವ ಸೂರ್ಯ, ಚಂದ್ರ ಈ ಭೂಮಿ ನಮ್ಮ ದೇಶದ ಹೆಮ್ಮೆಯ ಹಿಮಾಲಯ ಹಿಂದೆ ಆಗಿಹೋದ ವಂಶಗಳ ಚರಿತ್ರೆ ಎಲ್ಲವೂ ಹಳೆಯದೇ ಅಲ್ಲವೇ? ಅವರಲ್ಲಿ ನೀನು ಯಾವುದನ್ನು ತೆಗೆದು ಹಾಕಬೇಕು ಅಥವಾ ಅಳಿಸಿಹಾಕಬೇಕು ಎಂದುಕೊಂಡಿದ್ದೀಯೇ? ಹಳತು ಹೊಸತರಲ್ಲಿ ಇರಲು ಸಾಧ್ಯವಿಲ್ಲವೇ? ಎಂದು ಒಂದು ವಿಷಯವನ್ನು ಪ್ರಶ್ನಾರೂಪದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 142,
    english:
      '"The ultimate truth (essence) is one. So the sake of spicing it up, it takes up hundred forms. If you splice the existence based on time, they are all different. But if watched in totality of space and time, they are all one and the same. One must lead the life in this coarse world which is compartmentalized. But he must understand the subtlety of the one-ness in this world. Only then will he be on top of his life." - Mankutimma',
    kannada:
      "ಮೂಲವಸ್ತುವದೊಂದು ಲೀಲೆಗೋಸುಗ ನೂರು ।\r\nಕಾಲದೃಷ್ಟಿಗೆ ಬಹುಳ ಕೇವಲದೊಳೇಕ ॥\r\nಸ್ಥೂಲವಿವಿಧದಿ ಬಾಳಿ ಸೂಕ್ಷ್ಮಸಾಮ್ಯವ ತಾಳಿ ।\r\nಆಳುತಿರು ಜೀವನವ - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೨ ॥",
    kannada_explanation:
      "ಇಡೀ ಜಗತ್ತಿನ ಮೂಲ ವಸ್ತುವು ಒಂದೇ. ಆ ಪರಮಾತ್ಮ ತನ್ನ ಲೀಲಾ ವಿನೋದಕಾಗಿ ತನ್ನನ್ನೇ ತಾನು ಹಲವಾಗಿಸಿಕೊಂಡಿದ್ದಾನೆ. ಕಾಲದ ನೋಟಕ್ಕೆ ಬಹಳವಾಗಿ ಕಂಡರೂ ಅದು ಕೇವಲ ಒಂದೇ. ಸ್ಥೂಲವಾಗಿ ನೋಡಿದಾಗ ಹಲವಾಗಿ ಬಾಳಿದರೂ ಸೂಕ್ಷ್ಮ ರೂಪದಿ ನೋಡಿದಾಗ ಜಗತ್ತಿನ ಎಲ್ಲ ವಸ್ತುಗಳಲ್ಲೂ ಸಾಮ್ಯತೆಯನ್ನು ತೋರುತ್ತಾ ಆ ಆತ್ಮನೇ ಆಳುತ್ತಿದ್ದಾನೆ, ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 143,
    english:
      '"She has decorated the earth like a wedding reception and implanted restlessness in the heart of a man. She is keeping up the illusion without any break. Maya is the smiling artist amused at her own act." - Mankutimma',
    kannada:
      "ಧಾತ್ರಿಯನು ಮದುವೆಮಂಟಪದವೊಲು ಸಿಂಗರಿಸಿ ।\r\nಕ್ಷಾತ್ರದಗ್ನಿಗಳ ನರಹೃದಯಗಳೊಳಿರಿಸಿ ॥\r\nಕೃತ್ರಿಮವನೆಡೆಬಿಡದೆ ನೆಡಸಿ ನಗುವ ವಿಲಾಸಿ ।\r\nಚಿತ್ರಕಾರಿಯೊ ಮಾಯೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೩ ॥",
    kannada_explanation:
      "ಈ ಧರಣಿಯನ್ನು ಮನುಷ್ಯನ ಕಣ್ಣಿಗೆ ಸುಂದರವಾಗಿ ಕಾಣುವಂತೆ, ಮದುವೆ ಮಂಟಪದಂತೆ ಸಿಂಗರಿಸಿ, ಇದರೊಳಗೆ ಸಂಪೂರ್ಣವಾಗಿ ತನ್ನನ್ನು ತಾನು ತೊಡಗಿಸಿಕೊಳ್ಳಲು ಬೇಕಾದ ಆಸ್ಥೆ ಮತ್ತು ಆಸೆಯನ್ನು ಅವನ ಹೃದಯದಲ್ಲಿ ತುಂಬಿ ಸತ್ಯವನ್ನು ಮರೆಸಿ ಕೇವಲ ಅಸಹಜತೆಯನ್ನು ಮೆರೆಯುವಂತೆ ಮಾಡಿರುವ ಮತ್ತು ನೋಡಿ ನಗುತ್ತಿರುವ “ಮಾಯೆ” ಒಂದು ಸುಂದರ ಚಿತ್ರಕಾರಿಯೋ ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 144,
    english:
      '"Who has seen air? Who has not seen the effects of air (wind)? Just like that maya (the illusion) is the measurable manifestation of the immeasurable essence of the cosmic spirit. When a petitioner can not see the king, he laments in front of the minister." - Mankutimma',
    kannada:
      "ವಾಯುವಂ ಕಾಣ್ಬನಾರ್? ತತ್ಕ್ರಿಯೆಯ ಕಾಣನಾರ್? ।\r\nಮಾಯೆಯಂತಪರೀಕ್ಷ್ಯಸತ್ತ್ವದೀಕ್ಷ್ಯಕೃತಿ ॥\r\nರಾಯನಂ ಕಾಣಲಾಗದೆ ಮಂತ್ರಿಯೆಡೆಸಾರ್ವ ।\r\nದೇಯಾರ್ಥಿಯೊಲು ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೪ ॥",
    kannada_explanation:
      "ಗಾಳಿಯನ್ನು ನೋಡಿದವರು ಯಾರು. ಆದರೆ ಅದರ ಕ್ರಿಯೆಯನ್ನು ಅನುಭವಿಸದವರಾರು. ಮಾಯೆಯನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಆದರೆ ಆ ಪರಮಾತ್ಮನ ಕ್ರಿಯೆಯನ್ನು ನಾವು ನೋಡಬಹುದು ಆದರೆ ರಾಜನನ್ನು ನೋಡಲಾಗದೆ ಅವನ ಸೇವಕ ಮಂತ್ರಿಯ ಬಳಿ ಹೋಗಿ ಬೇಡುವವನಂತೆ ನೀ ಇದ್ದೀಯೇ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ತಮ್ಮನ್ನೇ ತಾವು ಹೇಳಿಕೊಳ್ಳುತ್ತಾ ನಮ್ಮ ಸ್ಥಿತಿಯೂ ಹಾಗೆ ಇದೆ ಎಂದು ಸೂಚ್ಯವಾಗಿ ಹೇಳುತ್ತಾರೆ. ",
  },
  {
    number: 145,
    english:
      '"Maya takes interest in indulging. What use would the purity of the cosmic essence be for us? If the illusion is lifted, would the world be as interesting? Would there by the mesmerizing story of life? This illusion is just a reflection of the cosmic spirit. She is the mother and you are the child. There is no existence without the illusion." - Mankutimma',
    kannada:
      "ಮಾಯೆಯೇ ಸರಸಿ; ನಿರ್ಗುಣ ಸತ್ತ್ವದಿಂದೇನು? ।\r\nಮಾಯೆ ಬಿಡೆ ಜಗವೆತ್ತ? ಜೀವಕಥೆಯೆತ್ತ? ॥\r\nಮೇಯವಲ್ಲದ ಮಹಿಮೆ ಛಾಯೆಯಾ ಬ್ರಹ್ಮನದು ।\r\nತಾಯವಳು ನೀಂ ಮಗುವು - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೫ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಜೀವನದ ಜೊತೆಗೆ ಸರಸವಾಡುವ ಆ ಸರಸಿಯೇ ಈ ಮಾಯೆ. ಗುಣ ರಹಿತವಾದ ಸತ್ವದಿಂದ ಏನು ಪ್ರಯೋಜನ. ಈ ಮಾಯೆಯೇ ಇಲ್ಲದೆ ಹೋದರೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ವೈವಿಧ್ಯತೆ ಇಲ್ಲದೆ ಸ್ವಾರಸ್ಯವೇ ಇಲ್ಲದೆ ಹೋಗುತ್ತಿತ್ತು. ಅರ್ಥವಾಗದ ( ಮೇಯವಲ್ಲದ) ಈ ಮಾಯೆಯಾ ಮಹಿಮೆ ಆ ಸೃಷ್ಟಿಕರ್ಣ ಬ್ರಹ್ಮನ ಛಾಯೆ (ನೆರಳು) ಈ ಮಾಯೆ ತಾಯಿ ಇದ್ದ ಹಾಗೆ ನಾವೆಲ್ಲಾ ಅವಳ ಮಕ್ಕಳಂತೆ ಎಂದು ಒಂದು ಸ್ವಾರಸ್ಯಕರ ವಿಷಯವನ್ನು ಈ ಕಗ್ಗದಲ್ಲಿ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 146,
    english:
      '"Kaikeyi ruled the Kosala kingdom the way she wanted, with total independence because she amused the old king Dasharatha. Maya seems to be running our world as she pleases by amusing the creator." - Mankutimma',
    kannada:
      "ರಾಯ ಮುದಿದಶರಥನಾಡಿಸುತ ಕೈಕೇಯಿ ।\r\nಸ್ವೀಯ ವಶದಲಿ ಕೋಸಲವನಾಳಿದಂತೆ ॥\r\nಮಾಯೆ ಬೊಮ್ಮನ ಬಿನದವಡಿಸಿ ನಮ್ಮೀ ಜಗವ ।\r\nಕಾಯುವಳು ತನ್ನಿಚ್ಛೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೬ ॥",
    kannada_explanation:
      "ಇಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ರಾಮಾಯಣದ ಒಂದು ಪ್ರಸಂಗವನ್ನು ತರುತ್ತಾರೆ. ದಾಸಿ ಮಂಥರೆಯ ಮಾತ ಕೇಳಿ, ತಾನು ಪಡೆದ ವರಗಳ ಬಲದಿಂದ, ತನ್ನ ಗಂಡನಾದ ಮುದುಕ ದಶರಥನನ್ನು, ಯುವರಾಜ ರಾಮನು ಪಟ್ಟಕ್ಕೇರದೆ ತನ್ನ ಮಗನಾದ ಭರತನು ರಾಜನಾಗಬೇಕೆಂಬ ಬಯಕೆಯ ಮುಂದಿಟ್ಟು, ತನ್ನ ಮೋಹದ ಬಲೆಯನ್ನು ಬೀಸಿ, ಅವನನ್ನು ಒಪ್ಪಿಸುತ್ತಾಳೆ. ದುಃಖಿತನಾದಾಗ್ಯೂ, ಅವಳ ಮೋಹದಲ್ಲಿ, ಅವಳಿಚ್ಚೆಯಂತೆ ರಾಜ್ಯಬಾರ ಮಾಡಲು ಬಿಡುತ್ತಾನೆ. ಹಾಗೆಯೆ ಪರಬ್ರಹ್ಮನನ್ನು ಆನಂದ ಪಡಿಸುತ್ತಾ, ಈ ಮಾಯೆಯಂಬ ಮಾಯಾಂಗನೆ ತನ್ನ ಇಚ್ಚೆಯಂತೆ ಈ ಜಗವನಾಳುತ್ತಿದ್ದಾಳೆ, ಎಂದು ಮಾಯೆಯ ಪ್ರಭಾವವನ್ನು ವಿವರಿಸುತ್ತಾರೆ, ಶ್ರೀ ಗುಂಡಪ್ಪನವರು. ಇರಲಿ ಅಮೇಯವಾದ ಮಾಯೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ. ಅದು ನಮ್ಮನ್ನು ಭ್ರಮಾ ಲೋಕಕ್ಕೆ ತಳ್ಳುತ್ತದೆ. ಅಲ್ಲೂ ಸಹ ದಶರಥನು” ಇಲ್ಲ ಸಾಧ್ಯವಿಲ್ಲ” ಎಂದಿದ್ದಿದ್ದರೆ ರಾಮಾಯಣವೇ ನಡೆಯುತ್ತಿರಲಿಲ್ಲ. ಹಾಗೆಯೇ ನಮ್ಮ ಜೀವನಗಳಲ್ಲೂ ನಾವು ಎಷ್ಟೋ ಬಾರಿ ಅಂತಹ ಭ್ರಮೆಗಳಿಗೆ ತುತ್ತಾಗಿ, ಆ ಕ್ಷಣದಲ್ಲಿ ಕೆಲವು ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ನಂತರ ಧೀರ್ಘಕಾಲ ಪರದಾಡು ವಂತಾ ಸ್ಥಿತಿಗೆ ಬೀಳುವುದಿಲ್ಲವೇ? ಹಾಗೆ. ",
  },
  {
    number: 147,
    english:
      '"Maya will shower you with care at one time. She will heal all your wounds and grant your wishes. If you lose your mind in the process of enjoyment, that is when she will push you to the underworld. She is a demon(Putani) in lovable costume." - Mankutimma',
    kannada:
      "ಮಾಯೆಯೊಮ್ಮೊಮ್ಮೆ ತೋರುವಳು ಮಿಗಿಲಕ್ಕರೆಯ ।\r\nಮಾಯಿಪಳು ಗಾಯಗಳನೀವಳಿಷ್ಟಗಳ ॥\r\nಮೈಯ ನೀಂ ಮರೆಯೆ ನೂಕುವಳಾಗ ಪಾತಾಳಕೆ ।\r\nಪ್ರೇಯ ಪೂತನಿಯವಳು - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೭ ॥",
    kannada_explanation:
      "ನಮಗೆ ಅರ್ಥವೇ ಆಗದ ಈ ಮಾಯೆಯ ಮತ್ತೊಂದು ಸ್ವರೂಪವನ್ನು ವಿವರಿಸುತ್ತಾ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ, ” ಆಗಾಗ ಈ ಮಾಯೆ ನಮ್ಮ ಮೇಲೆ ಅತೀ ಪ್ರೀತಿಯನ್ನು ತೋರಿ ನಮ್ಮ ದುಃಖಗಳನ್ನು ತೀರಿಸುವಂತೆ ಮಾಡಿ ನಮ್ಮ ಅಭೀಷ್ಟಗಳನ್ನು ತೀರಿಸುತ್ತಾಳೆ. ಆದರೆ ಆ ಸಂತೋಷದಲ್ಲಿ ನಾವೇನಾದರೂ ಮೈ ಮರೆತು ನಡೆದುಕೊಂಡೆವೋ, ತಕ್ಷಣವೇ ನಮ್ಮನ್ನು ಪಾತಾಳಕ್ಕೆ ತಳ್ಳಿ ಬಿಡುತ್ತಾಳೆ. “ಮೂಲತಃ ರಾಕ್ಷಸ ಗುಣವನ್ನು ಹೊಂದಿದವಳಾದರೂ ತಾನು ಸುಂದರ ರೂಪ ಧರಿಸಿ “ಕೃಷ್ಣ”ನಿಗೆ ವಿಷಪೂರಿತ ಹಾಲನ್ನು ಕುಡಿಸಲು ಪ್ರಯತ್ನಿಸಿದ ” ಪೂತನೆ”ಯಂತೆ” ಎಂದು ಬಹಳ ಸುಂದರವಾಗಿ ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ. ",
  },
  {
    number: 148,
    english:
      "\"Who can claim that he is outside nature? What can he create that does not have nature's contribution in it? It is best when man surrenders himself to nature and makes best use of her. Don't be an aberration in nature.\" - Mankutimma",
    kannada:
      "ಪ್ರಕೃತಿಯಿಂ ಪೊರಗಿರುವ ನರನಾರು ಸೃಷ್ಟಿಯಲಿ? ।\r\nಸ್ವಕೃತಿಯೆಂದವನೆನುವುದವಳಿರದೊಡಿರದು ॥\r\nಸುಕೃತವೆನಿಸುವುದವಳ ನೀಂ ವಶಕೆ ಕೊಳುವ ನಯ ।\r\nವಿಕೃತಿಗೆಡೆಯಾಗದಿರೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೮ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಪ್ರಕೃತಿಯ ಪ್ರಭಾವದಿಂದ ಹೊರೆಗೆ ಇರುವ ಮನುಷ್ಯ ಯಾರು. ಯಾರಾದರೂ ಇದನ್ನು ನಾನು ಮಾಡಿದ್ದು ಎಂದರೂ ಸಹ ಪ್ರಕೃತಿಯ ಪ್ರಭಾವದಲ್ಲೇ ಮಾಡಿರಬೇಕಲ್ಲವೇ? ಆದರೆ ಪ್ರಕೃತಿಯ ಪ್ರಭಾವದಲ್ಲಿ ಇದ್ದರೂ ಸಂಪೂರ್ಣ ಅದರ ವಶವಾಗದೆ, ತನ್ನ ಪ್ರತಿಭೆಯಿಂದ ಮಾಡುವ ಕೆಲಸವನ್ನು ಒಳ್ಳೆಯಕೆಲಸವೆನ್ನುತ್ತಾರೆ. ಆದರೆ ಕೆಲಸಮಾಡುವಾಗ ಸಂಪೂರ್ಣ ಪ್ರಕೃತಿಯ ಪ್ರವಾಕ್ಕೆ ಒಳಗಾಗಿ, ಕೆಲಸ ಕೆಡಿಸಿಕೊಳ್ಳದೆ ಅಂದರೆ ಅದನ್ನು ವಿಕ್ರುತಗೊಳಿಸದೆ ಕೆಸಲವನ್ನು ಮಾಡೋ ಎಂದು ನಮಗೆ ಒಂದು ಎಚ್ಚರಿಕೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 149,
    english:
      "\"There no 'one' master to our lives. There are three. We are one of them. Results of our actions - present and past is another. God is the third master of our lives. With these three masters there seems to be no goal, no start or end in this court. There is no definite rule to judge our actions by - good or bad.\" - Mankutimma",
    kannada:
      "ಅರಸನೊಬ್ಬನಲ್ಲ; ಮೂವರು ಬಾಳನಾಳುವರು ।\r\nನರ ಕರುಮ ದೈವಗಳು; ತೊಡಕದಕೆ ಸಾಜ ॥\r\nಗುರಿಯಿಡದ, ಮೊದಲು ಕೊನೆಯಿರದ, ದರಬಾರಿನಲಿ ।\r\nಸರಿಯೇನೊ ತಪ್ಪೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೪೯ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಬಾಳಿಗೆ ಅರಸ ಅಥವಾ ಒಡೆಯ ಒಬ್ಬನಲ್ಲ. ಮೂರು ಜನರಿದ್ದಾರೆ. ನಾವು, ನಮ್ಮ ಪೂರ್ವ ಕರ್ಮ ಮತ್ತು ದೈವ. ಹೀಗೆ ಒಂದು ಕಾರ್ಯಕ್ಕೆ ಮೂರು ಅರಸರಿದ್ದಾಗ, ತೊಡಕುಂಟಾಗುವುದು ಸಹಜ. ಒಂದು ಆದಿ ಮತ್ತು ಒಂದು ಅಂತ್ಯವಿರದ ಮತ್ತು ಯಾವುದೇ ನಿರ್ಧಾರಿತ ಗುರಿಯಿರದ ಈ ಬಾಳಿನಲ್ಲಿ ನಡೆಯುವುದರಲ್ಲಿ ಸರಿಯೇನೋ ತಪ್ಪೇನೋ ಎಂದು ಒಂದು ಮಹತ್ತಾದ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ",
  },
  {
    number: 150,
    english:
      '"With three masters for our life, it is interesting that at least some things fine in this world. Is there any surprise if there are some shortcomings or unexpected windfalls? Let what has to come come. Let all that has to move move. Why should you worry?" - Mankutimma\r\n\r\n[Translator\'s note: http://subhashitani.wordpress.com/2011/04/29/]',
    kannada:
      "ದೊರೆ ಮೂವರಿರುವಲ್ಲಿ ಸರಿಯಿಹುದೆ ಸೋಜಿಗವು ।\r\nಕೊರತೆ ಹೆಚ್ಚಿಕೆಗಳಿರಲಚ್ಚರಿಯದೇನು? ॥\r\nಬರಲಿ ಬರುವುದು; ಸರಿವುದೆಲ್ಲ ಸರಿಯಲಿ; ನಿನಗೆ ।\r\nಪರಿವೆಯೇನಿಲ್ಲೆಲವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೦ ॥",
    kannada_explanation:
      "ನಮ್ಮನ್ನಾಳುವ ದೊರಗಳು ಮೂವರು ಇರುವಲ್ಲಿ ಎಲ್ಲವೂ ಸರಿಯಿದ್ದರೆ ಅದು ಆಶ್ಚರ್ಯವೇ ಸರಿ. ಹೆಚ್ಚು ಕಡಿಮೆಗಳು, ಕೊರತೆ, ಹೆಚ್ಚಳಿಕೆಗಳು ಇದ್ದರೆ ಅಚ್ಚರಿಯಿಲ್ಲ. ಬರುವುದು ಬರಲಿ ನಡೆಯುವುದೆಲ್ಲ ನಡೆಯಲಿ ಅದನ್ನು ಕುರಿತು ನೀವು ಹೆಚ್ಚಾಗಿ ಚಿಂತಿಸುವೆ ಏಕೋ ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ. ",
  },
  {
    number: 151,
    english:
      '"The cosmic spirit is spoken about in three ways - When it comes to creation of the world; it is called providence. When it comes to the way it makes people behave, it is called as karma (or results of prior actions). Refferring to acts of mind, it is called as Man\'s effort." - Mankutimma',
    kannada:
      "ದೈವವೆನಿಸಿರುತೆ ವಿಶ್ವಪ್ರಕೃತಿಶಕ್ತಿಯಲಿ ।\r\nಜೀವವಾಸನೆಗಳಲಿ ಪೂರ್ವಕೃತವೆನಿಸಿ ॥\r\nಧೀವರ್ತನೆಯಲಿ ಪೌರುಷವೆನಿಸಿ ಪರಸತ್ತ್ವ ।\r\nತ್ರೈವಿಧದೊಳಿರುತಿಹುದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೧ ॥",
    kannada_explanation:
      "ಪರಮಾತ್ಮ ಈ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಿ ಪ್ರಕೃತಿಯ ಮೂಲಕ ಇದನ್ನು ನಡೆಸುತ್ತಾನೆ. ಈ ಜಗದ ಜೀವಿಗಳು, ತಮ್ಮ ಪೂರ್ವ ಮತ್ತು ಪೂರ್ವಜನ್ಮದ ವಾಸನಾ ಪ್ರೇರಿತ ಕರ್ಮಗಳ ಅನುಸಾರವಾಗಿ ತಮ್ಮ ಜೀವನ ನಡೆಸುತ್ತಿದ್ದಾರೆ. ಜೀವಿಗಳು ತಮ್ಮ ತಮ್ಮ ಪೂರ್ವಕರ್ಮಗಳನ್ನು ತಿದ್ದಿಕೊಂಡು ಮುನ್ನಡೆಯಲು “ಧೀ” ಅಂದರೆ ವಿವೇಚನಾ ಶಕ್ತಿಯನ್ನೂ ಕೊಟ್ಟಿದ್ದಾನೆ. ಹೀಗೆ ಪರಮಾತ್ಮ, ಪ್ರಕೃತಿ ಮತ್ತು ಜೀವಿಗಳ ಧೀ ಶಕ್ತಿಗಳ ಬಲದಿಂದಲೇ ಈ ಜಗದ್ವ್ಯಾಪಾರ ನಡೆಸುತ್ತಾನೆ ಎಂದು ಪ್ರಸ್ತಾಪಸಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 152,
    english:
      '"Good deeds, sins, indebtedness, various indulgences are all attributed as results of previous actions; even from prior births. These may be seen as improbable co-incidences. However, it is all well in order from the view point of the Providence." - Mankutimma',
    kannada:
      "ಪುಣ್ಯಪಾಪ ಋಣಾನುಬಂಧ ವಾಸನೆಗಳಿವು ।\r\nಜನ್ಮಾಂತರದ ಕರ್ಮಶೇಷದಂಶಗಳು ॥\r\nಎಣ್ಣಿಕೆಗೆ ಸಿಲುಕದಾಕಸ್ಮಿಕ ಯದೃಚ್ಛೆಗಳು ।\r\nಸನ್ನಿಹಿತ ದೈವಿಕದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೨ ॥",
    kannada_explanation:
      "ಒಂದು ಬೀಜ ತನ್ನ ತಾಯಿ ಮರದಿಂದ ಬೇರ್ಪಟ್ಟು, ಮುಂದೆ ಭೂಮಿ, ನೀರು ಮತ್ತು ಬೆಳಕಿನ ಸಂಸರ್ಗದಿಂದ ತಾನೂ ಮೊಳಕೆಯೊಡೆದು, ಸಸಿಯಾಗಿ, ಗಿಡವಾಗಿ ಮರವಾಗಿ ಬೆಳೆದಾಗ, ತನ್ನ ತಾಯಿಮರದಿಂದ ಪಡೆದುಕೊಂಡಬಂದ ಎಲ್ಲ ಗುಣಗಳನ್ನೂ “ನಾವು ಕಾಣಲಾಗದಿದ್ದರೂ” ಆ ಮರದಲ್ಲಿ ಪ್ರಕಟಿಸುವಂತೆ, ಪ್ರಕಾಶಿಸುವಂತೆ, ಎಲ್ಲ ಜೀವಿಗಳೂ ತಮ್ಮ ತಮ್ಮ ಪೂರ್ವಜನ್ಮದಲ್ಲಿ ಆರ್ಜಿಸಿದ ಗುಣಗಳು ಮತ್ತು ಅಂಟಿಸಿಕೊಂಡ ವಾಸನೆಗಳನ್ನು ಒಂದು ” ಸೂಕ್ಷ್ಮ ಶರೀರದಲ್ಲಿ ಹೊತ್ತು ತಂದು ಮತ್ತೊಂದು ಶರೀರ ( ಬೀಜಕ್ಕೆ, ಭೂಮಿ ಮತ್ತು ನೀರಂತೆ) ಸಿಕ್ಕಾಗ ಆ ಗುಣಗಳನ್ನು ಮತ್ತು ವಾಸನೆಗಳನ್ನು ಪ್ರಕಾಶಗೊಳಿಸುತ್ತಾ ಅನುಭವಿಸುತ್ತವೆ ಎನ್ನುವುದು ಭಾರತೀಯ ಸನಾತನ ಸಿದ್ಧಾಂತದ ಸಾರ. ಇದನ್ನೇ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 153,
    english:
      '"Results of actions done in past life and acts of Providence will manifest in our life as luck, fate and other unpredictable, non-measurable events. Of the three forms of the cosmic spirit, only the Human Effort is new and pertains to the present." - Mankutimma',
    kannada:
      "ಪ್ರಾರಾಬ್ಧಕರ್ಮಮುಂ ದೈವಿಕದ ಲೀಲೆಯುಂ ।\r\nತೋರುವುವದೃಷ್ಟವಿಧಿಯೆಂಬ ಪೆಸರುಗಳಿಂ ॥\r\nಆರುಮಳೆವವರಿಲ್ಲವವುಗಳಾವೇಗಗಳ ।\r\nಪೌರುಷವು ನವಸತ್ತ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೩ ॥",
    kannada_explanation:
      "ಪೂರ್ವ ಮತ್ತು ಪೂರ್ವಜನ್ಮ ಕರ್ಮವು ನಮಗೆ ಪ್ರಾಪ್ತವಾಗುವುದು ಒಂದು ದೈವೀ ಕ್ರಿಯೆ. ಕಾಣಲು ಸಾಧ್ಯವಿಲ್ಲವಾದ್ದರಿಂದ ಇದನ್ನು ದೈವಲೀಲೆಯನ್ನಬೇಕು. ಅದನ್ನು ಅದೃಷ್ಟ( ಕಣ್ಣಿಗೆ ಕಾಣದ್ದು ಎಂದು ಅರ್ಥ) ಅಥವಾ ವಿಧಿ ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತದೆ. ಅವುಗಳ ಚಲನೆ ಮತ್ತು ವೇಗವನ್ನು ಯಾರಿಂದಲೂ ಅಳೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ. ಸ್ವಪ್ರಯತ್ನದಿಂದ ಹೊಸತನವನ್ನು ಕಂಡುಕೊಳ್ಳಬಹುದು ಎಂದು ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 154,
    english:
      '"When water is poured at the roots of the tree every day, fresh sprouts emerge from the head of the tree. Like wise freshness is infused by the cosmic spirit into this world every day making it new every day." - Mankutimma',
    kannada:
      "ಪೊಸರಸಂ ಬೇರಿಗನುದಿನಮೊದವಿ ಧರೆಯಿಂದ ।\r\nಸಸಿಗೆ ಹೊಸತಳಿರ ತಲೆಯಲಿ ಮುಡಿಸುವಂತೆ ॥\r\nಹೊಸ ಸೃಷ್ಟಿಸತ್ತ್ವಮೆತ್ತಣಿನೊ ಬರುತನುದಿನಂ ।\r\nಪೊಸತಾಗಿಪುದು ಜಗವ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೪ ॥",
    kannada_explanation:
      "ಒಂದು ಗಿಡದ ಬೇರಿಗೆ ಹೊಸ ರಸವನ್ನು ಸತ್ವವಾಗಿ ಪೂರೈಸಿ, ಆ ಬೇರಿನ ಗಿಡದಲ್ಲಿ ಹೊಸ ಚಿಗುರನ್ನು ಮೂಡಿಸುವಂತೆ, ಹೊಸ ಸೃಷ್ಟಿಗೆ ಅನುವಾದ ಸತ್ವವು ಎಲ್ಲಿಂದಲೋ ಬಂದು ಈ ಜಗವನೆಲ್ಲ ಹೊಸತಾಗಿಸುತ್ತದೆ, ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ನಿರಂತರ ನಡೆಯುವ ಹೊಸತನದ ಆನಂದ ನೃತ್ಯವನ್ನು ಬಣ್ಣಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 155,
    english:
      '"Air from the skies descends, wanders through the caves in the moutains and enters us in the form of breath. Just like that energy from the cosmic spirit enters us as life from somewhere." - Mankutimma',
    kannada:
      "ಶ್ವಸನನಾಗಸದಿನಿಳಿದದ್ರಿಗುಹೆಗಳೊಳಲೆಯು ।\r\nತುಸಿರಾಗಿ ನಮ್ಮೊಳಾವಗಮಾಡುವಂತೆ ॥\r\nವಿಸರಸತ್ತ್ವಮದೊಂದದೆತ್ತಣಿನೊ ಬಂದು ನ ।\r\nಮ್ಮಸುಗಳೊಳವೊಗುತಿಹುದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೫ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಉಸಿರಾಗಿರುವ ಈ ಗಾಳಿಯು ಆಕಾಶದಿಂದ ಇಳಿದು, ಬೆಟ್ಟಗಳ ಮೇಲೆ ಬೀಸಿ, ಗುಹೆಗಳಲ್ಲಿ ನುಗ್ಗಿ, ಉಸಿರಾಗಿ ನಮ್ಮ ಒಡಲೊಳಗೆ ಆಡುವಂತೆ ಮಾಡುವ, ಒಂದು ವಿಸ್ತಾರ ಸತ್ವವು ಎಲ್ಲಿಂದಲೋ ಬಂದು ನಮ್ಮ ಪ್ರಾಣಗಳ ಒಳಗೆ ನುಗ್ಗುತ್ತಿದೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸ್ಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 156,
    english:
      '"Providence licking its lips to indicate its eagerness to eat us. He is cooking our lives on this stove called world - soaking, baking, increasing, cutting into poeces, heating over a pan, deep frying, dry frying, roasting us." - Mankutimma',
    kannada:
      "ತೋಯಿಸುತ ಬೇಯಿಸುತ ಹೆಚ್ಚುತ್ತ ಕೊಚ್ಚುತ್ತ ।\r\nಕಾಯಿಸುತ ಕರಿಯುತ್ತ ಹುರಿಯುತ್ತ ಸುಡುತ ॥\r\nಈಯವನಿಯೊಲೆಯೊಳೆಮ್ಮಯ ಬಾಳನಟ್ಟು ವಿಧಿ ।\r\nಬಾಯ ಚಪ್ಪರಿಸುವನು - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೬ ॥",
    kannada_explanation:
      "ಈ ವಿಧಿ ಅನ್ನುವುದು ನಮ್ಮನ್ನು ಈ ಭೂಮಿ ಎನ್ನುವ ಒಲೆಯೊಳು, ನೆನೆಸುತ್ತ, ಬೇಯಿಸುತ, ಹೆಚ್ಚುತ್ತ , ಕೊಚ್ಚುತ್ತ, ಕಾಯಿಸುತ, ಕರಿಯುತ್ತ, ಹುರಿಯುತ್ತ, ಸುಡುತ್ತ, ನಮ್ಮನ್ನು ಆಡಿಸುತ್ತ, ತಾನು ಒಂದು ರುಚಿಯಾದ ಪಕ್ವಾನ್ನವನ್ನು ತಿಂದು ಆಸ್ವಾದಿಸುವನಂತೆ ಬಾಯಿ ಚಪ್ಪರಿಸುತ್ತಿದ್ದಾನೆ ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಷಯವನ್ನು ವಿನೋದವಾಗಿ ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 157,
    english:
      '"Why is the Creator appoint providence to play with our lives? To make mankind learn some compassion. To make mankind realize that there is effectively no difference between him and the other man when he is put against providence. To make man realize that there is a soul/life in every body which is as important as the one in him. Realize this and try to become one with the rest of the world. Don\'t live in a shell. " - Mankutimma',
    kannada:
      "ಪರಬೊಮ್ಮನಾ ವಿಧಿಯ ನೇಮಿಸಿಹುದೇತಕೆನೆ ।\r\nನರಜಾತಿ ಸಾನುಭೂತಿಯ ಕಲಿಯಲೆಂದು ॥\r\nಪರರೆಂಬರಿಲ್ಲ ಆತ್ಮಾಂಶರೆಲ್ಲರೆನಿತ್ತೆ ।\r\nಬೆರೆ ನೀನು ವಿಶ್ವದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೭ ॥",
    kannada_explanation:
      "ಆ ಪರಬ್ರಹ್ಮನು ಆ “ವಿಧಿ”ಯನ್ನು ಏಕೆ ನೇಮಿಸಿದ್ದಾನೆ ? ಎಂದರೆ, ಮನುಷ್ಯರು ಪರಸ್ಪರ ಸಹಾನುಭೂತಿಯನ್ನು ಕಲಿಯಲಿ ಎಂದು ಮತ್ತು ಪರರು ಯಾರೂ ಇಲ್ಲ, ಎಲ್ಲರೂ ಆತ್ಮದ ಒಂದು ಅಂಶವೆಂದು ಅರಿತು ನೀನೂ ಬೆರೆತು ಈ ವಿಶ್ವದಲಿ ಬಾಳು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 158,
    english:
      '"Luck is supported by two hands. Man\'s prior actions is one of them. The other is the cosmic spirit that is pumping freshness into theis world. These hands make a cup and hold our precious life in it. Our life is a struggle based on how tightly they hold (squeeze)" - Mankutimma',
    kannada:
      "ಕರವೆದಡದೃಷ್ಟಕ್ಕೆ; ನರನ ಪೂರ್ವಿಕವೊಂದು ।\r\nಪೆರತೊಂದು ನವಸೃಷ್ಟಿಸತ್ತ್ವವಾ ಬೊಗಸೆ ॥\r\nಧರಿಸಿಹುದು ಮನುಜಜೀವಿತವನದರೊತ್ತಡದೆ ।\r\nಪರಿದಾಟ ನಮಗೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೮ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಪೂರ್ವಜನ್ಮದ ರೇಖೆಗಳನ್ನು ಹೊತ್ತ ಎಡಗೈ ಮತ್ತು ನಮ್ಮ ಈ ಜನ್ಮದ ಆಗು ಹೋಗುಗಳನ್ನು ಬಿತ್ತರಿಸುವ ನಮ್ಮ ಬಲಗೈಯ ರೇಖೆಗಳು . ಎರಡು ಕೈಗಳು. ಈ ಎರಡೂ ಕೈಗಳನ್ನು ಜೋಡಿಸಿದಾಗ ಒಂದು ಬೊಗಸೆಯಾಗುತ್ತದೆ. ಈ ಬೊಗಸೆಯಿಂದ ನಾವು ಹೊಸ ಹೊಸ ಕೆಲಸವನ್ನು ಮಾಡುತ್ತಾ ಇಲ್ಲಿನ ಒತ್ತಡಗಳನ್ನು ಅನುಭವಿಸುತ್ತಾ ನಾವು ಪರದಾಡುತ್ತಿರುತ್ತೇವೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 159,
    english:
      '"God who created the seasons is making life possible by cooking the elements of the earth - heating, cooling, shaking it. Similarly the providence is playing a similar game with our lives. Sometimes it supports bad guys and scutinizing the good deeds. It has us completely under its control." - Mankutimma',
    kannada:
      "ತಾಪಿಸುತೆ ತಣಿಯಿಸುತೆ ಕುಲುಕಿಸುತೆ ಋತುವೈದ್ಯ ।\r\nಭೂಪಟದಿ ಜೀವರಸಗಳ ಪಚಿಸುವಂತೆ ॥\r\nಪಾಪಿಯಂ ಪ್ರೋತ್ಸಹಿಸಿ ಸುಕೃತಿಯ ಪರೀಕ್ಷಿಸುತ ।\r\nವೇಪಿಪನು ವಿಧಿ ನಮ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೧೫೯ ॥",
    kannada_explanation:
      "ಬಿಸಿಲಲ್ಲಿ ಸುಟ್ಟು, ಮಳೆಯಲ್ಲಿ ನೆನೆಸಿ, ಚಳಿಗಾಲದಲ್ಲಿ ನಡುಗಿಸಿ, ಋತು ಬದಲಾವಣೆಯಿಂದ ಈ ಭೂಮಿಯಲ್ಲಿ ಜೀವರಸಗಳ ಪಾಕ ಮಾಡಿ ಪಕ್ವ ಮಾಡುವಂತೆ, ನಮ್ಮನ್ನು ವಿಧಿಯು ಹಲಬಗೆಯ ಪರೀಕ್ಷೆಗಳಿಗೊಡ್ಡಿ, ದುಷ್ಟನನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಿ, ಒಳ್ಳೆಯಕೆಲಸ ಮಾಡುವವರನ್ನು ಇನ್ನೂ ಪರೀಕ್ಷೆಗೆ ಒಳಪಡಿಸುತ್ತಾ, ನಮ್ಮನ್ನು ನಡುಗಿಸುತ್ತಾನೆ ಎನ್ನುವುದೇ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 160,
    english:
      '"Which pulse will boil (bake) in which water! Whose life will blossom at the cost of whose! No one can know the relation between them in advance. But can any one complain? It is a divine secret that one can not know." - Mankutimma',
    kannada:
      "ಆವ ಬೇಳೆಯದಾವ ನೀರಿನಲಿ ಬೇಯುವುದೊ! ।\r\nಆವ ಜೀವದ ಪಾಕವಾವ ತಾಪದಿನೋ! ॥\r\nಆ ವಿವರವನು ಕಾಣದಾಕ್ಷೇಪಣೆಯದೇನು? ।\r\nದೈವಗುಟ್ಟದು ತಿಳಿಯೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೦ ॥",
    kannada_explanation:
      "ಯಾವ ಬೇಳೆ ಯಾವ ನೀರಿನಲಿ ಬೇಯುವುದೋ ಗೊತ್ತಿಲ್ಲವಲ್ಲ ಹಾಗೆಯೇ ಪ್ರತಿಯೊಬ್ಬರೂ ಪಕ್ವವಾಗಲು ಯಾವ ಕರ್ಮಗಳನ್ನು ಅನುಭವಿಸಿ, ಸುಟ್ಟು, ಬೆಂದು, ತೋಯ್ದು, ನೋಡು ಎಷ್ಟುದಿನ ಅನುಭವಿಸಬೇಕೋ ಯಾರಿಗೂ ಅರ್ಥವಾಗದು. ಪ್ರತಿಯೊಬ್ಬರೂ ಈ ಅನುಭವದ ಯಾವುದೋ ಸ್ಥರದಲ್ಲಿರುತ್ತಾರೆ, ಹಾಗಾಗಿ ಮತ್ತೊಬ್ಬರನ್ನು ವಿಮರ್ಶೆ ಅಥವಾ ಆಕ್ಷೇಪಣೆ ಮಾಡಬೇಡ, ಏಕೆಂದರೆ ಇದು ದೈವ ಅಥವಾ ವಿಧಿಯ ರಹಸ್ಯ, ಇದನ್ನು ಅರಿತುಕೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 161,
    english:
      '"Where can one find a person who can escape from the clutches of providence? He who can help you get out of fear is a true friend. Harden your heart like iron, bend your back according to situations, shut your mouth - providence is the washerman and you are his donkey." - Mankutimma',
    kannada:
      "ವಿಧಿಯ ಹೊರೆಗಳನು ತಪ್ಪಿಸಿಕೊಳುವನೆಲ್ಲಿಹನು? ।\r\nಬೆದರಿಕೆಯನದರಿಂದ ನೀಗಿಪನು ಸಖನು ॥\r\nಎದೆಯನುಕ್ಕಾಗಿಸಾನಿಸು ಬೆನ್ನ, ತುಟಿಯ ಬಿಗಿ ।\r\nವಿಧಿಯಗಸ, ನೀಂ ಕತ್ತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಅನಾದಿಕಾಲದಿಂದಲೂ ಹುಟ್ಟಿದವರು ಮತ್ತು ಕಾಲವಾದವರು ಯಾರೂ ಸಹ ಈ ವಿಧಿಯು ಹೇರಿಸುವ ಹೊರೆಗಳ ಭಾರಗಳಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವೇ ಆಗಿಲ್ಲ. ಈ ಹೊರೆಯನ್ನು ಹೊರುವ ಹೆದರಿಕೆಯನ್ನು ನೀಗಿಸುವವನೇ ನಮ್ಮ ನಿಜವಾದ ಸ್ನೇಹಿತ. ನಮ್ಮ ಮನಸ್ಸನ್ನು( ಎದೆಯನ್ನು) ಕಬ್ಬಿಣದಂತೆ ಗಟ್ಟಿಯಾಗಿಸಿ, ಬೆನ್ನ ಮೇಲೆ ಹೊರೆ ಹೊತ್ತು, ತುಟಿಪಿಟಕ್ಕೆನ್ನದೆ ಮುಂದೆ ಸಾಗು. ಏಕೆಂದರೆ, ವಿಧಿಯು ಅಗಸನಾದರೆ ನೀನು ಕತ್ತೆಯಂತೆ ಎಂದು ಒಂದು ಸುಂದರ ಉಪಯೊಂದಿಗೆ ವಾಸ್ತವದ ಸತ್ಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 162,
    english:
      '"God has reared two fighting goats. He has fed them well. He provokes them, eggs them to fight against each other. These goats symbolizes fate(providence) and human effort. He is watching the fight and laughing. There are no winners in this game even though at times either of the goats may feel good. You be wary of feeling proud of your own accomplishments." - Mankutimma',
    kannada:
      "ಟಗರೆರಡ ಬೆಳಸಿ ಕೊಬ್ಬಿಸಿ ಕೆಣಕಿ ಹುರಿಗೊಳಿಸಿ ।\r\nಜಗಳವಾಡಿಸಿ ದೈವಜೀವಗಳ ಪೆಸರಿಂ ॥\r\nನಗುತಲಿರುವನು ನೋಡಿ; ಪರಬೊಮ್ಮನೇಂ ಬಿನದಿ! ।\r\nಬಿಗಿಯದಿರು ನೀಂ ಬೀಗಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೨ ॥",
    kannada_explanation:
      "ವಿಧಿಯ ರೂಪದಲ್ಲಿ ಆ ದೈವ ಮತ್ತು ನಿನ್ನ ರೂಪದಲ್ಲಿ ಈ ಜೀವ ಇವೆರಡನ್ನೂ ಕೊಬ್ಬಿದ ಟಗರುಗಳಂತೆ ಬೆಳೆಸಿ ಒಂದು ಇನ್ನೊಂದರ ಮೇಲೆ ಸೆಣಸಾಡಿಸುತ್ತಾ, ಆ ಪರಮಾತ್ಮ ನಗುತ್ತಿದ್ದಾನೆ. ನೀನು ನಿನ್ನ ಅಹಂಕಾರದಿಂದ ಗರ್ವ ಪಡದಿರು, ಎಂದು ಗುಂಡಪ್ಪನವರು ಒಂದು ಸಂದೇಶ ಮತ್ತು ಒಂದು ಆದೇಶವನ್ನು ಕೊಡುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 163,
    english:
      "\"History of mankind's prowess is a continuous story. Every new generation is making more progress than previous. He takes forward the consequences of his actions into the next life. This accounting is required to keep in check man's confidence in his abilities going overboard. Just like a hook is required to control the mighty elephants.\" - Mankutimma",
    kannada:
      "ಮನುಷ್ಯಚರಿತೆಯಚ್ಛಿನ್ನವಾಹಿನಿ ಸಾಗ ।\r\nಲಾನುಪೂರ್ವ್ಯದ ಕರ್ಮಋಣಶೇಷವಿನಿತು ॥\r\nತಾನಿರಲೆಬೇಕಲ್ತೆ ಪೌರುಷಸ್ಪರ್ಧನೆಗೆ ।\r\nಆನೆಗಂಕುಶದಂತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೩ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಜೀವನ ಹೀಗೇ ನಿರಂತರವಾಗಿ ಸಾಗುತ್ತಿರಬೇಕಾದರೆ, ಪ್ರತೀ ಜನ್ಮದಲ್ಲೂ ಒಂದಷ್ಟು ಕರ್ಮಶೇಷ ಉಳಿಸಿಕೊಂಡಿರಬೇಕು. ನಿಷ್ಶೇಶವಾಗಿಬಿಟ್ಟರೆ ಪುನರ್ಜನ್ಮವಿರುವುದಿಲ್ಲ, ಹಾಗಾಗಿ ಒಂದಿಷ್ಟು ಋಣ ಶೇಷ ಉಳಿಯುವಂತೆ ಮಾಡಿ ಆ ಪರಮಾತ್ಮ ನಮ್ಮನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಪಾತ್ರ ಧರಿಸುವಂತೆ ಮಾಡುತ್ತಾನೆ. ಆನೆಯನ್ನು ಅಂಕುಶದಿಂದ ಹತೋಟಿಯಲ್ಲಿ ಇಟ್ಟಿರುವಂತೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 164,
    english:
      '"The mountain is old and so is the earth. But rain water does erode them and adds fresh water to the pond. Just like that human effort will erode the baggages of previous births (consequences of actions then) and will lead to man\'s prosperity." - Mankutimma',
    kannada:
      "ಹಳಯ ಮಲೆ ಹಳೆಯ ನೆಲವಾದೊಡೆಯುಮೊರತೆ ಮಳೆ ।\r\nಹೊಳೆನೀರನಾವಗಂ ಪೊಸದಾಗಿಸುವವೊಲ್ ॥\r\nಹಳೆಯ ಕರ್ಮವ ಹೊಸದು ಕೊಚ್ಚಿ ಪೌರುಷನದಿಯ ।\r\nಬೆಳೆಯಿಪುದು ನವತೆಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೪ ॥",
    kannada_explanation:
      "ಹಳೆಯ ಭೂಮಿ ಮತ್ತು ಹಳೆಯ ಬೆಟ್ಟವಾದರೂ ಹೊಸದಾಗಿ ಸುರಿಯುವ ಮಳೆಯು ನದೀ ನೀರನ್ನು ಹೊಸದಾಗಿಸುವಂತೆ, ಹೊಸ ಕರ್ಮಗಳು ಹಳೆಯ ಕರ್ಮಗಳನ್ನು ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗಿ, ಮತ್ತೆ ಹೊಸ ಹೊಸ ಕರ್ಮಗಳ ಸಾಂಗತ್ಯವನ್ನು ನಮಗೆ ನೀಡುವುದು ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಕರ್ಮ ಪರಿವರ್ತನೆಯ ವೃತ್ತಾಂತವನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 165,
    english:
      "\"As we see new things in this world being created every day we must realize that they are all being made from old things only. Just like the new water (from previous verse) will have some smells from the past (of the earth) anything new will bear some resemblance to the past. Also, will 'new' not become 'old' in time?\" - Mankutimma",
    kannada:
      "ಹೊಸಹೊಸದು ತಾನಾಗುತಿರ್ದೊಡಂ ತನ್ನಯ ।\r\nಪ್ರಸವ ಪ್ರವಾಹ ಭೂಮಿಗಳ ಹಳತನದಿಂ ॥\r\nನಸುಸೋಂಕು ವಾಸನೆಯ ಪೊನಲೊಂದಬೇಕಲ್ತೆ? ।\r\nಹೊಸದು ಹಳದಾಗದೇ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೫ ॥",
    kannada_explanation:
      "ಹೊಸಮಳೆಯಿಂದ ಸೃಷ್ಟಿಯಾದ ಹೊಸನೀರಿನ ನದಿ ಹರಿಯುವುದು ಹಳೆಯ ದಾರಿಯಲ್ಲವೇ? ಅದರ ಹರಿಯುವ ಪಾತ್ರವೇನೂ ಬದಲಾಗುವುದಿಲ್ಲವಲ್ಲವೇ? ಅದು ಉಗಮವಾಗುವ ಬೆಟ್ಟವೂ ಹಲತೆ ಮತ್ತು ಅದು ಹರಿಯುವ ಭೂಮಿಯೂ ಹಳತೇ. ಹಾಗೆ ಹೊಸತನವನ್ನು ತುಂಬಿಕೊಂಡ ನದಿ ಆ ಹಳೆಯ ಭೂಮಿಯ ಗುಣಗಳನ್ನೂ ಹೊತ್ತು ಹೊಸದರಂತೆ ಹರಿಯುತ್ತದೆ. ಹಳತನ್ನು ಉಳಿಸಿಕೊಂಡು ಹೊಸ ರೂಪಧರಿಸಿ ಸಾಗುವುದೇ ಈ ಜೀವನದ ನದಿ ಎಂಬ ಅರ್ಥದಲ್ಲಿದೆ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 166,
    english:
      '"As insects and worms are being born and dying every day, as earth gets eroded and reduced everyday - some where in the ocean a new island is getting formed. As one diminishes, something else increases. There is no end to this process or to this world." - Mankutimma',
    kannada:
      "ಹುಳು ಹುಟ್ಟಿ ಸಾಯುತಿರೆ, ನೆಲ ಸವೆದು ಕರಗುತಿರೆ ।\r\nಕಡಲೊಳೆತ್ತಲೊ ಹೊಸದ್ವೀಪವೇಳುವುದು ॥\r\nಕಳೆಯುತೊಂದಿರಲಿಲ್ಲಿ, ಬೆಳೆವುದಿನ್ನೊಂದೆಲ್ಲೊ ।\r\nಅಳಿವಿಲ್ಲ ವಿಶ್ವಕ್ಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೬ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಒಂದು ಹುಳ ಸತ್ತರೆ ಹತ್ತು ಹುಟ್ಟುತ್ತವೆ. ನಾವು ಒಂದು ಸೊಳ್ಳೆಯನ್ನು ಹೊಸಕಿ ಹಾಕಿದರೆ, ಬೇರೆಲ್ಲೋ ಸಾವಿರ ಹುಟ್ಟಿರುತ್ತದೆ. ಒಂದು ಸಸಿ ನಾಶವಾದರೆ ಬದಲಾಗಿ ಸಾವಿರಾರು ಹುಟ್ಟುತ್ತವೆ. ಭೂಮಿಯ ಮೇಲ್ಮೈಯೂ ಬದಲಾಗುತ್ತಿರುತ್ತದೆ. ಎಲ್ಲೋ ಸಾಗರ ವಿಸ್ತಾರಗೊಂಡು ಕೆಲ ನೆಲಬಾಗ ಕೊಚ್ಚಿ, ಮುಚ್ಚಿಕೊಂಡು ಹೋದರೆ, ಮತ್ತೆಲ್ಲೋ ಹಲ ದ್ವೀಪಗಳು ತಲೆಯೆತ್ತುತ್ತವೆ. ಒಂದು ಎಲ್ಲೋ ಕಳೆದು ಹೋಯಿತು ಎಂದರೆ ಮತ್ತೆಲ್ಲೋ ಇನ್ನೊಂದು ಬೆಳೆದು ನಿ೦ತಿರುತ್ತದೆ. ಹೀಗೆ ಅಳಿವು, ಸುಳಿವು, ಉಳಿವುಗಳ ಪ್ರಕ್ರಿಯೆ ನಿರಂತರವಾಗಿ ಮತ್ತು ನಿರಾತಂಕವಾಗಿ ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಡೆಯುತ್ತಿರುತ್ತದೆ . ಹಾಗಾಗಿ ಈ ಜಗತ್ತಿಗೆ ಅಳಿವಿಲ್ಲ ಎನ್ನುವುದೇ ಗುಂಡಪ್ಪನವರ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 167,
    english:
      "\"The movement of earth and the Sun along its orbit, the cycle of seasons are all well defined and bound by the rules. Just like that, man's fate is decided by the actions he takes. (Typically, we believe good returns follow good deeds). However, there are also some incidents in nature that are outside of the system that can not be predicted - like earth quakes and comets. So is man's progress - unpredicatable.\" - Mankutimma",
    kannada:
      "ಕ್ಷಿತಿಚಕ್ರ ರವಿಚಕ್ರ ಋತುಚಕ್ರಗಳಿಗಿಹುದು ।\r\nಮಿತವೃತ್ತಿ; ನರನಿಗಂತೆಯೆ ಕರ್ಮನಿಯತಿ ॥\r\nಕ್ಷಿತಿಕಂಪ ರಾಹುಕೇತುಭ್ರಮೆ ನರಪ್ರಗತಿ ।\r\nಅತಿಚರಿತೆ ಪ್ರಕೃತಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೭ ॥",
    kannada_explanation:
      "ಭೂಮಿಗೆ ಎರಡು ರೀತಿಯ ಚಲನೆಗಳಿವೆ. ಒಂದು ಅದು ತನ್ನ ಅಕ್ಷೆಯ ಮೇಲೆ ಸುತ್ತುತ್ತಿರುತ್ತದೆ. ಹಾಗೆ ಸುತ್ತಿಕೊಂಡೇ ಸೂರ್ಯನ ಪರಿಭ್ರಮಣೆ ಮಾಡುತ್ತದೆ. ಈ ಎರಡೂ ಸುತ್ತುವಿಕೆಯಿಂದ ಋತು ಬದಲಾವಣೆಗಳಾಗುತ್ತವೆ. ನಮ್ಮ ಎಲ್ಲ ಕಾಲಗಣನೆ, ದಿನ, ವಾರ, ತಿಂಗಳುಗಳ ಲೆಕ್ಕಕ್ಕೆ ಈ ಸುತ್ತುವಿಕೆಯೇ ಆಧಾರ. ಆದರೆ ಅವುಗಳಿಗೆ ಅಷ್ಟುಬಿಟ್ಟರೆ ಬೇರೆ ಕೆಲಸವಿಲ್ಲ. ಅಂದರೆ ಅವುಗಳ ಪ್ರವೃತ್ತಿಗೆ ಒಂದು ಮಿತಿ ಇದೆ. ಅವು ಎಂದಿಗೂ ತಮ್ಮ ಮಿತಿಗಳನ್ನು ಮೀರಿ ಕೆಲಸ ಮಾಡಲಾರವು",
  },
  {
    number: 168,
    english:
      '"Our relationships with one another is a result of our prior actions which brings us together (or tears apart) now. These relationships gives rise to feelings in our minds - liking, hatred, indulgence. Beauty, love (attachment) and other distortions will hamper us from seeing the truth. Finally it will result in us making more relations - good or bad. This is an endless net." - Mankutimma',
    kannada:
      "ಅನುಬಂಧ ಜೀವಜೀವಕೆ ಪುರಾಕೃತದಿಂದ ।\r\nಮನದ ರಾಗದ್ವೇಷವಾಸನೆಗಳದರಿಂ ॥\r\nತನುಕಾಂತಿ ಮೋಹ ವಿಕೃತಿಗಳುಮಾ ತೊಡಕಿನವು ।\r\nಕೊನೆಯಿರದ ಬಲೆಯೊ ಅದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೮ ॥",
    kannada_explanation:
      "ಜೇವಿ ಜೀವಿಗಳ ಮಧ್ಯೆ ಇರುವ ಅನುಬಂಧವು ಪೂರ್ವಕರ್ಮದಿಂದಲೇ ಉಂಟಾಗುತ್ತದೆ. ಮನಸ್ಸಿನ ಕೋಪ ದ್ವೇಷ ಮತ್ತು ವಾಸನೆಗಳೂ ಸಹ ಇದರಿಂದಲೇ. ದೇಹದ ಹೊಳಪು ಅದರ ಆಕರ್ಷಣೆ ಮತ್ತು ಆ ಆಕರ್ಷಣೆ ಯಿಂದ ಉಂಟಾಗುವ ತೊಂದರೆ ತೊಡಕುಗಳು ಒಂದು ಅಂತ್ಯವಿಲ್ಲದ ಬಲೆಯೆಂತೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.",
  },
  {
    number: 169,
    english:
      '"You are the donkey that providence controls. It puts the weight of consequences of previous actions on you. It makes a noose made out of rope made of old actions. It puts the noose around your neck and tightens it. It dangles a handful of grass in front of you to keep you interested and dance to its tunes." - Mankutimma',
    kannada:
      "ಋಣದ ಮೂಟೆಯ ಹೊರಿಸಿ, ಪೂರ್ವಾರ್ಜಿತದ ಹುರಿಯ ।\r\nಕುಣಿಕೆಯಲಿ ನಿನ್ನ ಕೊರಳನು ಬಿಗಿದು ವಿಧಿಯು ॥\r\nತೃಣದ ಕಡ್ಡಿಯ ಮುಂದೆ ಹಿಡಿದಾಶೆ ತೋರುತಿರೆ ।\r\nಕುಣಿವ ಗರ್ದಭ ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೧೬೯ ॥",
    kannada_explanation:
      "ಋಣದ ಮೂಟೆಯನ್ನು ನಮ್ಮ ಮೇಲೆ ಹೊರಿಸಿ, ಅದನ್ನೂ ಸೇರಿಸಿ, ಪೂರ್ವಾರ್ಜಿತವೆಂಬ ಹುರಿಯಿಂದ ಕುಣಿಕೆ ಮಾಡಿ ನಮ್ಮ ಕೊರಳಿಗೆ, ಬಿಗಿದಿದ್ದಾನೆ ಆ ವಿಧಿ . ನಮ್ಮ ಮುಂದೆ ಒಂದು ಸಣ್ಣ ಹುಲ್ಲುಕಡ್ಡಿಯಂತ ಆಸೆಯನ್ನು ತೋರಿಸುತ್ತಾ, ನಮ್ಮ ಬಾಳನ್ನು ಎಳೆದುಕೊಂಡು ಹೋಗುತ್ತಿದ್ದಾನೆ. ಅವನ ತಾಳಕ್ಕೆ ಕುಣಿಯುವ ಕತ್ತೆ “ನೀನು” ಎಂದು ತಮಗೆ ತಾವು ಹೇಳಿಕೊಳ್ಳುತ್ತಾ ಇಡೀ ಮನುಕುಲದ ಸ್ಥಿತಿಯನ್ನು ವಿಡಂಬನಾತ್ಮಕವಾಗಿ ವರ್ಣಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 170,
    english:
      '"What ever we eat, dress, endure, play, create are all consequences (or unsettled loans) of our previous actions. Everything is written clearly on the forehead. But there is no one who can read it. Will any amount of lamenting erase it?" - Mankutimma',
    kannada:
      "ಉಣುವುದುಡುವುದು ಪಡುವುದಾಡುವುದು ಮಾಡುವುದು ।\r\nಋಣಗಳೆಲ್ಲವು ಪೂರ್ವಸಂಚಿತಾಂಶಗಳು ॥\r\nಹಣೆಯೊಳದು ಲಿಖಿತಮಿರೆಯುಂ ವಾಚಿಸುವನಿಲ್ಲ ।\r\nಗೊಣಗಾಟವಳಿಸುವುದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೦ ॥",
    kannada_explanation:
      "ನಾವು ಉಣುವುದು, ಉಡುವುದು, ಆಡುವುದು, ಪಡುವುದು, ಪಾಡುವುದು, ಪರದಾಡುವುದು ಮತ್ತು ಇವುಗಳಿಗೆ ಸಂಬಂಧಪಟ್ಟ ವ್ಯಕ್ತಿಗಳಲ್ಲೆರ ಸಂಬಂಧಗಳೂ ಕೇವಲ ಋಣ ರೂಪದಲ್ಲೇ ನಮಗೆ ಸಂಧಿವೆ.ನಮ್ಮ ಹಣೆಬರಹವೇ ಈ ರೀತಿ ಇರುವಾಗ, ಅದನ್ನು ಓದಲು ಯಾರಿಗೂ ಆಗುವುದಿಲ್ಲ . ಓದಲಾಗದಿದ್ದರೂ ಅದನ್ನು ಕುರಿತು ಗೊಣಗಾಡಿದರೆ, ಬರೆದ ಬರಹ ಅಳಿಸಲಾಗುವುದೇ, ಎಂದು ಪ್ರಾರಬ್ಧ ಕರ್ಮದ ಒಂದು ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 171,
    english:
      '"Today we rejoice since it is a wedding day. Tomorrow, it could be a funeral. Today we get a full course special meal. Tomorrow we may have to ask for alms. Today we have to fast. Tomorrow we may get special food. We will settle the debt of food by all these means." - Mankutimma',
    kannada:
      "ಇಂದು ಮದುವೆಯ ಹಬ್ಬ; ನಾಳೆ ವೈಕುಂಠ ತಿಥಿ ।\r\nಇಂದು ಮೃಷ್ಟಾನ್ನಸುಖ, ನಾಳೆ ಭಿಕ್ಷಾನ್ನ ॥\r\nಇಂದು ಬರಿಯುಪವಾಸ, ನಾಳೆ ಪಾರಣೆ - ಯಿಂತು ।\r\nಸಂದಿರುವುದನ್ನ ಋಣ - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೧ ॥",
    kannada_explanation:
      "ನಮ್ಮಗೆ ದಕ್ಕುವ ಅನ್ನದ ಋಣ ಒಂದೊಂದು ದಿನ ಒಂದೊಂದು ರೀತಿಯಲ್ಲಿ ಇರುತ್ತೆ ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಸುಲಲಿತವಾಗಿ ಬರೆದಿದ್ದಾರೆ. ನಮ್ಮ ಜೀವನದಲ್ಲಿ ಇಂತಹದನ್ನು ನಾವು ಬಹಳ ನೋಡುತ್ತೇವೆ. ಇಂದು ಹಬ್ಬದ ವಾತಾವರಣ ನಾಳೆ ಸೂತಕದ ಭಾವ. ಇಂದು ಪುಷ್ಕಳ ಭೋಜನ ನಾಳೆ ಉಪವಾಸ. ಇಂದು ನಮ್ಮ ಮನೆಯಲ್ಲೇ ಊಟ. ನಾಳೆ ಇನ್ನೆಲ್ಲೋ ಇನ್ಯಾರಮನೆಯಲ್ಲೋ. ಅನ್ನದ ಋಣ ಒಂದೊಂದು ದಿನ ಒಂದೊಂದು ರೀತಿ. ಈ ಜಗತ್ತಿನ ಪರಿಯೇ ಈ ರೀತಿ.",
  },
  {
    number: 172,
    english:
      '"Enemies, friends, wife, son and relatives are different forms of karma - consequences of old deeds. They are fresh sprouts of the creeper that represents the ever living debt of consequences. A family that rears the sheep with lot of love can turn tyrrant and offer as sacrifice to the Godess." - Mankutimma',
    kannada:
      "ಅರಿ ಮಿತ್ರ ಸತಿ ಪುತ್ರ ಬಳಗವದೆಲ್ಲ ।\r\nಕರುಮದವತಾರಗಳೊ, ಋಣಲತೆಯ ಚಿಗುರೋ ॥\r\nಕುರಿಯನಾಗಿಸಿ ನಿನ್ನ ಕಾಪಿಡುವ ಸಂಸಾರ ।\r\nವುರಿಮಾರಿಯಾದೀತೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೨ ॥",
    kannada_explanation:
      "ಶತ್ರು, ಮಿತ್ರ, ಹೆಂಡತಿ, ಮಗ-ಮಗಳು, ಬಂಧು, ಬಳಗವೆಲ್ಲ ನಮ್ಮ ಪೂರ್ವ ಕರ್ಮದಿಂದಲೇ ಲಭ್ಯವಾದವು ಅಥವಾ ನಾವು ಉಳಿಸಿಕೊಂಡು ಬಂದ ವಾಸನಾ ಶೇಷವೆಂಬ ಬಳ್ಳಿಯ ಹೊಸ ಹೊಸ ಚಿಗುರುಗಳೋ? ಈ ಸಂಸಾರದಲ್ಲಿ ನಾವು ಗೊತ್ತು ಗುರಿಯಿಲ್ಲದ, ತಲೆ ತಗ್ಗಿಸಿ ನಡೆಯುವ ಕುರಿಗಳಂತೆ ಇರುವಾಗ ಈ ಸಂಸಾರ ಉರಿಮಾರಿಯಾದೀತು ಎಂದು ಒಂದು ಎಚ್ಚರಿಕೆಯ ಭಾವವನ್ನು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 173,
    english:
      '"Friends and aquaintences are all soldiers of the destructor (Death). They are not mere soldiers - they are soldiers in disguise. The love they shower on us is nothing but gifts of trouble in disguise. They help they do will put burden on us. You should realise this and avoid being obligated to people." - Mankutimma',
    kannada:
      "ಬಂಧುಬಳಗವುಮಂತಕನ ಚಮುವೊ, ಛದ್ಮಚಮು ।\r\nದಂದುಗದ ಬಾಗಿನಗಳವರ ನಲುಮೆಗಳು ॥\r\nಕುಂದಿಪ್ಪುವಾತ್ಮನನವರ್ಗಳುಪಕಾರಗಳು ।\r\nಮಂದಿಗಾಗದಿರು ಬಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೩ ॥",
    kannada_explanation:
      "ನಮಗಿರುವ ಬಂಧುಗಳು ಮಾರುವೇಷದಲ್ಲಿರುವ ಯಮನ ಸೈನ್ಯದಂತಿರುವರು, ಅವರು ಮಾಡುವ ಉಪಕಾರಗಳು ಮಾತು ಅವರು ನೀಡುವ ಕೊಡುಗೆಗಳು ನಮಗೆ ನೋವುಂಟುಮಾಡಿ ನಮ್ಮ ಆತ್ಮವನ್ನು ಕುಗ್ಗಿಸುತ್ತದೆ. ಹಾಗಾಗಿ ನೀನು ಎಚ್ಚರಿಕೆಯಿಂದ ಇದ್ದು ಈ ಮಂದಿಯ ಉಪಟಳಕ್ಕೆ ಬಲಿಯಾಗದಿರು ಎಂದು ಎಚ್ಚರಿಕೆಯಮಾತನ್ನು ಆಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ .",
  },
  {
    number: 174,
    english:
      "\"Have you not seen fathers and sons going against each other? They are in total harmony untill they realise their egos. Who is the father or the son - when the word 'I' stands out. All ties break down after that. \" - Mankutimma",
    kannada:
      "ತಂದೆಮಕ್ಕಳಿಗೆ ಹದಗೆಟ್ಟುದನು ಕಾಣೆಯಾ? ।\r\nಹೊಂದಿರುವರವರ್ ಅಹಂತೆಯು ಮೊಳೆಯುವನಕ ॥\r\nತಂದೆಯಾರ್ ಮಕ್ಕಳಾರ್ ನಾನೆಂಬುದೆದ್ದುನಿಲೆ? ।\r\nಬಂಧ ಮುರಿವುದು ಬಳಿಕ - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೪ ॥",
    kannada_explanation:
      "ತಂದೆ ಮಕ್ಕಳ ಸಂಬಂಧವನ್ನು ಕುರಿತು ಒಂದು ಚೆಂದಾದ ಕಗ್ಗವಿದು. ಇಂದಿನ ಪ್ರಪಂಚದಲ್ಲಿ ತಂದೆಮಕ್ಕಳ ಬಾಂಧವ್ಯದ ರೂಪ ಹದಗೆಟ್ಟು ಹೋಗಿರುವುದನ್ನು ನೋಡಿ. ಈ ಸಂಬಂಧಗಳು ಮಕ್ಕಳಲ್ಲಿ ಅಹಂಕಾರ ಮೊಳೆಯುವತನಕ, ಸರಿ ಸುಮಾರಾಗಿರುತ್ತದೆ. ಹಾಗೆ ಪ್ರತಿಯೊಬ್ಬರ ಮನಸ್ಸಲ್ಲೂ ಅಹಂಕಾರ ಎದ್ದು ನಿಂತರೆ ತಂದೆಯಾರೋ ಮಕ್ಕಳಾರೋ? ಈ ಸಂಬಂಧಗಳ ಬಂಧ ಮುರಿದುಬೀಳುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 175,
    english:
      '"We think friends and relatives help us out by guiding us and showing us aspirations. But they are nothing different than the fairies who whispered in Mac Beth\'s ears. What is the use of all enthusiasm and love? One must see if their vision is clear (and not blinded by their prejudices)." - Mankutimma',
    kannada:
      "ಕಾಂಕ್ಷೆಗಳ ಬೋಧಿಸುವ ಬಂಧುಸಖರುಪಕಾರ ।\r\nಯಕ್ಷಿಯರು ಮ್ಯಾಕ್ ಬೆತನಿಗೆಸಗಿದುಪದೇಶ ॥\r\nಉತ್ಸಾಹವಿದ್ದೇನು? ವಾತ್ಸಲ್ಯವಿದ್ದೇನು? ।\r\nಅಕ್ಷಿ ನಿರ್ಮಲವೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೫ ॥",
    kannada_explanation:
      "ನಮ್ಮಲ್ಲಿ ಆಸೆಗಳನ್ನು ಹುಟ್ಟಿಸುವ ಮತ್ತು ವಸ್ತು ವಿಷಯವಾಗಿ ನಮಗೆ ಭೋಧನೆಮಾಡುವ ನಮ್ಮ ಬಂಧುಗಳು, ಸ್ನೇಹಿತರು , ಕೇವಲ ಯಕ್ಷಿಣಿಯರು ಮ್ಯಾಕ್ ಬೆತ್ ನಿಗೆ ಮಾಡಿದ ಉಪದೇಶದಂತೆ ಇದೆ. ನಮ್ಮನ್ನು ಕುರಿತು ಅವರಲ್ಲಿ ವಿಶ್ವಾಸವಿದ್ದರೇನು ಅಥವಾ ಪ್ರೀತಿ ಅನುರಾಗವಿದ್ದರೇನು , ಅವರ ಉದ್ಧೇಶಗಳು ಕಲುಷಿತವಾಗಿದೆಯೇನೋ ನೋಡಿಕೋ ಎಂದು ಒಂದು ಸೂಚನೆಯನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ನೀಡುತ್ತಾರೆ.",
  },
  {
    number: 176,
    english:
      '"People may never understand what gives meaning to your life. Your wife, children and relatives are determined to taunt you for your ways. They are so monkey minded that if you are pricked (on the forehead) by a golden knife, instead of grieving, they applaude it as a good decoration." - Mankutimma',
    kannada:
      "ಇಂಗಿತಜ್ಞಾನವಿಲ್ಲದ ಬಂಧುಪರಿವಾರ  ।\r\nಹಂಗಿಸುವ ಛಲವುಳ್ಳ ಸತಿಪುತ್ರಸಖರು ॥\r\nಬಂಗಾರದಸಿ ಚುಚ್ಚೆ ಸಿಂಗರದ ಬೊಟ್ಟೆನುವ ।\r\nಮಂಗಬುದ್ಧಿಯ ಜನರು - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೬ ॥",
    kannada_explanation:
      "ಪರರ ಮನಸ್ಸಿನಲ್ಲಿ ಏನಿದೆ ಎಂದು ಅರಿಯದೆ ನಮಗೆ ಕೆಲಸಕ್ಕೆಬಾರದ ಬುದ್ಧಿವಾದವನ್ನು ಹೇಳುವ ಬಂಧುಗಳು ಮತ್ತು ಪರಿವಾರದವರು, ನಮ್ಮನ್ನು ಹಂಗಿಸುವ ಹಠ ಮತ್ತು ಧೈರ್ಯಮಾಡುವ ನಮ್ಮದೇ ಪತ್ನಿ, ಪುತ್ರ ಮತ್ತು ಸ್ನೇಹಿತರುಮತ್ತು ಅವರು ಮಾಡುವ ಸಲಹೆ ಸೂಚನೆಗೆ ಸರಿ ಎಂದು ನಮಗೆ ಬಲವಂತ ಹೇಗಿದೆಯೆಂದರೆ, ಚಿನ್ನದ ಕತ್ತಿಯಲ್ಲಿ ನಮ್ಮ ಹೇಗೆ ಚುಚ್ಚಿ ಅದು ಅಲಂಕಾರದ ತಿಲಕ ಎಂದು ಹೇಳುವ ಮಂಗ ಬುದ್ಧಿಯ ಜನರು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಟೀಕಾರೂಪದಲ್ಲಿ ಈ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 177,
    english:
      '"The relatives, the friends and the servants are all your enemies. They are only leading you to the court of death with lot of baggage. They seem to be smiling when they kill you, just like a sharp end of an ornament pressing against your chest." - Mankutimma',
    kannada:
      "ಬಂಧುವುಂ ಮಿತ್ರನುಂ ಭೃತ್ಯನುಂ ಶತ್ರುವೊಲೆ ।\r\nದಂಡಧರನೋಲಗಕೆ ನಿನ್ನನೆಳೆವವರೋ ॥\r\nಅಂದದೊಡವೆಯ ಮೊನೆಗಳಿಂದೆದೆಯನೊತ್ತುವಾ ।\r\nಮಂದಹಸಿತದ ಕೊಲೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೭ ॥",
    kannada_explanation:
      "ಸ್ವಾರ್ಥವಿಲ್ಲದೆ ನಮಗೆ ಸಹಾಯ ಮಾಡುವವರು ಇಡೀ ಜಗತ್ತಿನಲ್ಲೇ ಕಾಣಸಿಗುವುದು ದುರ್ಲಭ. ನಮಗೆ ಸಹಾಯ ಮಾಡುವವರೆಲ್ಲ, ತಮ್ಮದೇ ಆದ ಕಾರಣಗಳಿಗಾಗಿ ನಮಗೆ ಒದಗುತ್ತಿರುತ್ತಾರೆ. ಆದರೆ ಅವರು ಮಾಡುವ ಸಹಾಯ ಅವರಿಗೇ ಹೆಚ್ಚು ಉಪಕಾರಿಯಾಗಿ ನಮಗೆ ಕಷ್ಟಗಳ ಫಲ ಮಾತ್ರ ಸಿಗುತ್ತವೆ. ಅವರೆಲ್ಲ ನಮಗೆ ಮಿತ್ರರಂತೆ ಕಂಡರೂ ವಾಸ್ತವದಲ್ಲಿ ಅವರು ನಮಗೆ ಶತ್ರುಗಳಂತಾಗಿ, ನಮಗೆ ಯಮಲೋಕದ ಧರ್ಶನ ಮಾಡಿಸುವವರಂತೆ ಎಂದು ಒಂದು ಕಟುಸತ್ಯವನ್ನು ಅರುಹುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 178,
    english:
      '"Just like hatred and rage can hurt you; so can friendship and attachment (excessive love). They can make you forget yourself and become a noose around your neck. It will make you get into bad habits, gives you mental agony and kills you by deceit." - Mankutimma',
    kannada:
      "ದ್ವೇಷ ರೋಷಗಳವೊಲೆ ನೇಹಮುಂ ಮೋಹಮುಂ ।\nಪಾಶವಾಗಲ್ಬಹುದು ನಿನಗೆ ಮೈಮರಸಿ ॥\nವಾಸನೆಗಳುರುಬಿ ಚಿತ್ತಜ್ವರಂಗಳ ಬಿತ್ತಿ ।\nಮೋಸದಲಿ ಕೊಲ್ಲುವುವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೮ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಪರಸ್ಪರ ಸಂಬಂಧಗಳು ದ್ವೇಷ, ರೋಷ, ಪ್ರೀತಿ, ಪ್ರೇಮ ಅನುರಾಗ, ಮೋಹಗಳಿಂದ ಕೂಡಿದ್ದು ಅವುಗಳು, ನಿನಗೆ ಅರಿವಾಗದಂತೆ ನಿನ್ನ ಕುತ್ತಿಗೆಗೆ ಉರುಳಾಗವುದು. ಈ ಎಲ್ಲ ಸಂಬಂಧಗಳು ನಿನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ತಾಪವನ್ನು ಉಂಟುಮಾಡಿ ನಿನಗರಿವಿಲ್ಲದಂತೆಯೇ ನಿನ್ನನ್ನು ಕೊಲ್ಲುತ್ತದೆಯೋ ಎಂದು ಒಂದು ವಾಸ್ತವಿಕ ಸತ್ಯವನ್ನು ಸೂಚ್ಯವಾಗಿ ನಮಗೆ ಅರುಹುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 179,
    english:
      '"Our previous actions may come back to us as fate in many ways; as love, as a delighting smile, as naughty glances from the corner of the eye, as harsh insulting words. It has the habit of drawing you close and then throwing you out. It can hug you tight and burn you from inside. Who know what plan is it hatching to get you?" - Mankutimma',
    kannada:
      "ಕರುಮ ಬಂದಿದಿರಹುದು ಮೋಹನದ ರೂಪಿನಲಿ ।\r\nಕಿರುನಗುವು ಕುಡಿನೋಟ ಕೊಂಕುನುಡಿಗಳಲಿ ॥\r\nಕರೆದು ತಳ್ಳುವ, ತಳ್ಕರಿಸುತೊಳಗೆ ಕಿಚ್ಚಿಡುವ ।\r\nತರಳತೆಯದೇಂ ತಂತ್ರ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೭೯ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಕರ್ಮವು ನಮ್ಮನ್ನು ಈ ಜಗತ್ತನ್ನು ಪ್ರೀತಿಸುವಂತೆ ಮಾಡುತ್ತದೆ. ನಮ್ಮನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ. ಆ ಆಕರ್ಷಣೆಯಲ್ಲಿ ಸಿಕ್ಕು ನಾವು ಜಗದ ಜನರ ಕುಹಕದ ಕಿರುನಗೆ, ತಿರಸ್ಕಾರದ ಕುಡಿನೋಟ ಮತ್ತು ಕೊಂಕುನುಡಿಗಳಿಗೆ ಬಲಿಯಾಗುತ್ತೇವೆ. ನಮ್ಮನ್ನು ಕರೆದಂತೆ ಮಾಡಿ ತಬ್ಬಿಕೊಂಡಂತೆ ಮಾಡಿ ಪುನಃ ತಳ್ಳಿಬಿಡುವ ಈ ಚಪಲತೆಯ ಉಪಾಯ ಅಥವಾ ಉದ್ದೇಶ್ಯ ಏನು ಎಂದು ತಿಳಿಯದಾಗಿದೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 180,
    english:
      '"Death works in mysterious ways. She comes to you as enchanting damsel. She steals your mind. She sucks the life blood out of you. It kills you by taking life away from you little by little. She takes pleasure in doing so." - Mankutimma',
    kannada:
      "ಮೃತ್ಯು ತಾಂ ಬಂದು ಮೋಹಿನಿಯರೂಪದಿ ನಿನ್ನ ।\r\nಚಿತ್ತವನು ಸೆರೆವಿಡಿದು ನೆತ್ತರನು ಬಸಿದು ॥\r\nನಿತ್ಯ ನಿನ್ನಸುವ ಲವ ಲವ ಪೀರುತಲಿ ದೀರ್ಘ ।\r\nಹತ್ಯೆಯಲಿ ಹರುಷಿಪಳೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೦ ॥",
    kannada_explanation:
      "ಪಿಶಾಚಿಗಳಲ್ಲಿ ಮೋಹಿನಿ ಎಂಬುದು ಒಂದು ಹೆಣ್ಣು ರೂಪಿನ ಪಿಶಾಚಿ. ಅದು ಅತೀ ಸುಂದರವಾಗಿ ತನ್ನ ಪಾಶಕ್ಕೆ ಸಿಕ್ಕವನ ರಕ್ತವೀರ್ಯಗಳನ್ನೆಲ್ಲ ಕೊಂಚ ಕೊಂಚವಾಗಿ ಹೀರಿ ಶಕ್ತಿಹೀನನನ್ನಾಗಿಸಿ ದೀರ್ಘಕಾಲ ನರಳುವಂತೆ ಮಾಡಿ, ಕಡೆಗೆ ಸಾವಿನ ತೆಕ್ಕೆಗೆ ನಮ್ಮನ್ನು ನೂಕುತ್ತಾಳೆ. ಇದು ಈ ಕಗ್ಗದ ಹೂರಣ. ನಾವೆಲ್ಲಾ ಹೇಗೆ ಈ ಜೀವನದ ” ಮೋಹಿನೀ ಬಲೆಯಲ್ಲಿ” ಸಿಕ್ಕು ನಮ್ಮ ಬಾಳನ್ನು ಅಳಿವಿನೆಡೆಗೆ ತೆಗೆದುಕೊಂಡು ಹೋಗುತ್ತಿದ್ದೇವೆ ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಬರೆದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 181,
    english:
      '"The trident of the lord of death kills you in an instant. But love and attachment kills you slowly second by second. It puts a noose around your neck and tightens it bit by bit all your life." - Mankutimma',
    kannada:
      "ಕ್ಷಣವೊಂದರೊಳೆ ಪೂರ್ತಿ ಕೊಲ್ಲುವುದು ಯಮಶೂಲ ।\r\nಕ್ಷಣವನುಕ್ಷಣ ಕೊಲ್ಲುವುವು ಮೋಹಮಮತೆ ॥\r\nಕುಣಿಕೆಯನು ನಿನ್ನ ಕೊರಳಿಗೆ ಹೂಡಿ ಚಿರಕಾಲ ।\r\nವಣುವಣುವೆ ಬಿಗಿಯುವುವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೧ ॥",
    kannada_explanation:
      "ಯಮನ ಶೂಲ ಕ್ಷಣ ಮಾತ್ರದಲ್ಲಿ ಒಂದೇ ಬಾರಿ ಕೊಲ್ಲುವುದು. ಆದರೆ ಈ ಜಗತ್ತಿನ ಮೋಹವು ನಮ್ಮಕುತ್ತಿಗೆಗೆ ಕುಣಿಕೆ ಹಾಕಿ ಅನುದಿನವೂ ಕ್ಷಣ ಕ್ಷಣವೂ ನಮ್ಮನ್ನು ಸೆಳೆಯುತ್ತಾ ಕೊಲ್ಲುತ್ತಲೇ ಇರುತ್ತದೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ.",
  },
  {
    number: 182,
    english:
      '"The cycle of debt is endless. The cycle of consequences of our actions are endless. The linkages from one birth to another is also endless. In spite of this, the world looks new for ever. The creator seems to relish this freshness." - Mankutimma',
    kannada:
      "ಋಣದ ಜಾಲವನಂತ, ಕರುಮಚಕ್ರವನಂತ ।\r\nಜನುಮಜನುಮದ ಕಥೆಯ ತಂತುಗಳನಂತ ॥\r\nಅನವರತ ನೂತನವಿದೆನಿಪ ವಿಶ್ವದ ತಂತ್ರ ।\r\nಬಿನದ ಪರಬೊಮ್ಮಂಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೨ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನೊಂದಿಗೆ ನಮ್ಮ ಋಣದ ಸಂಬಂಧ ಕೊನೆಯಿಲ್ಲದ್ದು, ನಾವು ಅದರೊಳಗೆ ಇದ್ದು, ನಮ್ಮನ್ನೂ ಸೇರಿಸಿಕೊಂಡು ಸುತ್ತುವ ಕರ್ಮದ ಚಕ್ರದ ಸುತ್ತಾಟ, ಕೊನೆಯಿಲ್ಲದ್ದು, ಒಂದು ಜನ್ಮದಿಂದ ಇನ್ನೊದು ಜನ್ಮಕ್ಕೆ ನಮ್ಮನ್ನು ಹೆಣೆದುಕೊಳ್ಳುವ ಸಂಕೋಲೆಗಳೂ ಕೊನೆಮೊದಲಿಲ್ಲದ್ದು. ಆದರೂ ಪ್ರತೀ ಬಾರಿಯೂ ನಮಗೆ ಇದು ಹೊಸದು ಎಂದು ಅನಿಸುವ ಈ ವಿಶ್ವದ ತಂತ್ರವನ್ನು ಆ ಪರಮಾತ್ಮ ತನ್ನ ವಿನೋದಕ್ಕಾಗಿಯೇ ಸೃಷ್ಟಿಸಿಕೊಂಡಂತಿದೆ, ಎಂದು ಒಂದು ವೇದಾಂತದ ಒಂದು ಸೂಕ್ಷ್ಮ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 183,
    english:
      '"We get riches due to good deeds done in the past. These riches make us do bad things and hence accumulate bad karma. This bad karma makes us go through a lot of misery. When enduring misery, we do good deeds. Good deeds and Bad deeds thus beget each other and keep the cycle going on for ever. Blessed is the person who can grow beyond both sin and good karma so that he can end the cycle." - Mankutimma',
    kannada:
      "ಪುಣ್ಯದಿಂ ಬಂದ ಸಿರಿ ಮದಮೋಹಗಳ ಮೂಲ ।\r\nಖಿನ್ನನಾಗಿಪ ಪಾಪಫಲವಾತ್ಮಶುದ್ಧಿ ॥\r\nಅನ್ಯೋನ್ಯಜನಕಗಳು ಪುಣ್ಯಪಾಪಗಳಿಂತು ।\r\nಧನ್ಯನುಭಯವ ಮೀರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೩ ॥",
    kannada_explanation:
      "ಒಬ್ಬ ವ್ಯಕ್ತಿ ಮಾಡಿದ ಪುಣ್ಯಕಾರ್ಯದಿಂದ ಅವನಿಗೆ ಸುಖ ಸಂಪತ್ತುಗಳು ಆನಂದಗಳು ಲಭಿಸುವುವು. ಹಾಗೆಯೆ ಅವನು ಮಾಡಿದ ಪಾಪಕರ್ಮಗಳಿಂದ ನೋವು ದುಃಖ ಕಷ್ಟ ಪಡೆಯುವನು. ಆದರೆ ಈ ಪಾಪ ಪುಣ್ಯಗಳನ್ನೂ ಮೀರಿ ಅವುಗಳ ಪರಿಧಿಯಿಂದ ಮೇಲೇರುವವನೆ ಧನ್ಯ, ಎಂದು ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 184,
    english:
      '"Our interest in this world decreases eventually over time. A garland of flowers will not remain fresh for ever; it wilts. Just like that, a beautiful body may be hiding a itch inside. The world is also like that. It looks beautiful as long as we do not scratch the surface and dig deep. One must learn to enjoy the world by superficially glancing over it." - Mankutimma',
    kannada:
      "ನೋಡುನೋಡುತ ಲೋಕಸಹವಾಸ ಸಾಕಹುದು ।\r\nಬಾಡುತಿಹ ಹೂಮಾಲೆ ಗೂಢವಿಹ ಕಜ್ಜಿ ॥\r\nತೋಡದಿರು ಬಾಳ್ವೆಯಾಳವನು; ಮೇಲ್ಮೇಲೆ ನೀ ।\r\nನೋಡಾಡು ಹಗುರದಿಂ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೪ ॥",
    kannada_explanation:
      "ಈ ಲೋಕದದಲ್ಲಿ ನಮ್ಮ ಬಾಳ್ವೆ ಮೊದಮೊದಲು ಆನಂದವಾಗಿರುತ್ತದೆ . ಎಲ್ಲವೂ ವಿನೂತನವಾಗಿರುತ್ತದೆ, ಎಲ್ಲವೂ ಇಷ್ಟಪಡುವಂತಿರುತ್ತದೆ. ಕಾಲಕ್ರಮೇಣ ಬಾಡುತಿಹ ಹೂ ಮಾಲೆಯಂತೆಯೋ ಅಥವಾ ಬಹಳದಿನದಿಂದ ಬಾಧಿಸುತ್ತಿರುವ ಕಜ್ಜಿಯಂತೆಯೋ, ” ಸಾಕಪ್ಪಾ ಸಾಕು” ಎಂದು ಅನ್ನಿಸತೊಡಗುತ್ತದೆ. ಹಾಗಾಗಿ ಈ ಲೋಕದ ಸಹವಾಸದಲ್ಲಿ ತುಂಬಾ ಆಳವಾಗಿ ಇಳಿಯದೆ, ಮೇಲೆ ಮೇಲೆ ಹಗುರವಾಗಿ ಓಡಾಡಿಕೊಂಡು ನಿನ್ನ ಜೀವನವನ್ನು ಬಾಳು ಎಂದು ಸೂಚನೆಯನ್ನು ಕೊಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 185,
    english:
      '"Is there no consideration to the hearts feelings? To the life? To the lovely feelings, love, compassion? Are all of these feelings just consequences of old deeds that fate throws away as dirt? If that be so, what is the excitement in life?" - Mankutimma',
    kannada:
      "ಹೃದಯಜೀವನಕಿನಿತು ಬೆಲೆಯಿರದೆ? ಫಲವಿರದೆ? ।\r\nಮಧುರಭಾವ ಪ್ರೇಮ ದಯೆಯೆಲ್ಲ ಬರಿದೆ ॥\r\nವಿಧಿಯಂಗಡಿಯೊಳದನು ಕಸವೆಂದು ತಳ್ಳುವೊಡೆ ।\r\nಬದುಕಿನಲಿ ತಿರುಳೇನು? - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೫ ॥",
    kannada_explanation:
      "ಹೃದಯವಂತಿಕೆಯಿಂದ ನಡೆಸುವ ಜೀವನಕೆ ಬೆಲೆಯೇ ಇಲ್ಲವೇ? ಅದಕ್ಕೇನೂ ಪ್ರಯೋಜನವಿಲ್ಲವೆ? ಪರಸ್ಪರ ಸವಿಯಾದ ಭಾವನೆಗಳು,ಪ್ರಮಾನುರಾಗಗಳು ದಯೆ ದಾಕ್ಷಿಣ್ಯಗಳು ಕೇವಲ ಪೊಳ್ಳೆ? ವಿಧಿಯ ಆಟದಲ್ಲಿ ಇದನ್ನೆಲ್ಲಾ ಕೆಲಸಕ್ಕೆ ಬಾರದ್ದು ಎಂದು ತಿರಸ್ಕರಿಸುವಹಾಗಿದ್ದರೆ, ಈ ಜೀವನದ ಸ್ವಾರಸ್ಯವೇನು ಎಂದು ಒಂದು ಪ್ರಶ್ನಾ ರೂಪದ ಪ್ರಸ್ತಾಪವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾಡುತ್ತಾರೆ.",
  },
  {
    number: 186,
    english:
      '"Entire life is a struggle. Alone in this world, we search for partners, make them struggle in their life. We wander all over the world and stretch out our hands to hold theirs. But we get lost in the whirlpool of love, debt and compassion." - Mankutimma',
    kannada:
      "ತಡಕಾಟ ಬದುಕೆಲ್ಲವೇಕಾಕಿಜೀವ ತ ।\r\nನ್ನೊಡನಾಡಿ ಜೀವಗಳ ತಡಕಿ ಕೈಚಾಚಿ ॥\r\nಪಿಡಿಯಲಲೆದಾಡುಗುಂ, ಪ್ರೀತಿ ಋಣ ಮಮತೆಗಳ ।\r\nಮಡುವೊಳೋಲಾಡುತ್ತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೬ ॥",
    kannada_explanation:
      "ಒಂದು ಜೀವ ಬದುಕಲ್ಲಿ ಏಕಾಕಿಯಾಗಿದ್ದು ಒಡನಾಡಿ ಜೀವಗಳ ಹುಡುಕಿ ಹಿಡಿದು, ಪ್ರೀತಿ, ಕರ್ಮಶೇಷ, ಮತ್ತು ಅಪ್ಯಾಯತೆಗಳ ಬಂಧನಗಳ ಸುಳಿಯಲ್ಲಿ ಸಿಕ್ಕು ಜೀವಿಸುತ್ತದೆ ಎಂಬುದೇ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 187,
    english:
      '"In scrabble we carefully pick letters from out slate and make words. Just like that, in life search for suitable partners in our life. The day we find them, our life attains completeness." - Mankutimma',
    kannada:
      "ನುಡಿಗಟ್ಟಿನಾಟದಕ್ಕರಚೀಟಿಯೊಟ್ಟಿನಲಿ ।\nತಡಕಿ ನಾವಾಯ್ದಾಯ್ದು ನುಡಿಜೋಡಿಪಂತೆ ॥\nಬಿಡಿಜೀವ ಸಂಗಾತಿಜೀವಗಳನರಸಿ ತಾಂ ।\nಪಡೆದಂದು ಪೂರ್ಣವದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೭ ॥",
    kannada_explanation:
      "“ನುಡಿಕಟ್ಟು”ಎನ್ನುವುದು ಒಂದು ಆಟ. ಸೂಕ್ತ ಅಕ್ಷರಗಳ ಜೋಡಣೆಯನ್ನು ಮಾಡುತ್ತಾ, ಪದಗಳ ವಿನ್ಯಾಸವನ್ನು ಮಾಡುವುದು. ಅದನ್ನಾಡುವುದಕ್ಕೆ ಉಪಯೋಗಿಸುವ ಅಕ್ಷರಗಳನ್ನು ಬರೆದ ಚೀಟಿಗಳನ್ನು ನಾವು ಆಯುವಂತೆ, ಜೀವನದಲ್ಲೂ ನಮಗೆ ಬೇಕಾದ ಸೂಕ್ತ ಸಂಗಾತಿ ಜೀವಗಳನ್ನಾರಿಸಿಕೊಂಡರೆ ಅಂದು ನಮ್ಮ ಜೀವನದ ವಿನ್ಯಾಸದ ಜೋಡಣೆ ಪೂರ್ಣವಾಗುವುದೆಂದು ಅಪ್ಪಣೆ ಕೊಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 188,
    english:
      '"Is there a man who does not surrender to nature\'s allurement? She introduces us to various tastes, feeds us gourmet food, makes our mouth water, makes pant (at the spices), attacks our senses from ten directions." - Mankutimma',
    kannada:
      "ರಸರುಚಿಗಳನು ಕಲಿಸಿ ಪಕ್ವಾನ್ನಗಳ ಪಚಿಸಿ ।\r\nರಸನೆಯಲಿ ನೀರಿಳಿಸಿ ಬಿಸಿಯುಸಿರ ಬಿಡಿಸಿ ॥\r\nದಶದಿಶೆಗಳಿಂ ಮುತ್ತಿ ಬರುವ ಪ್ರಕೃತಿಗದಾರು ।\r\nವಶನಾಗದಿಹ ನರನು? - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೮ ॥",
    kannada_explanation:
      "ರುಚಿರುಚಿಯಾದ ರಸಭರಿತವಾದ ಅಡುಗೆಗಳನ್ನು ಮಾಡಲು ಕಲಿಸಿ, ಇವುಗಳನ್ನು ಸವಿಯುವ ತವಕದಲಿ ನಾಲಿಗೆಯಲಿ ನೀರಿಳಿಸಿ,ಹಲವಾರು ರೀತಿಯ ಪಕ್ವಾನ್ನಗಳನ್ನು ಜೀರ್ಣಿಸಿಕೊಂಡು, ಜಿಹ್ವಾ ಚಾಪಲ್ಯವನ್ನು ತೀರಿಸಿಕೊಳ್ಳಲು ಅನುವಾಗುವಂತೆ ಮತ್ತೆ ಮತ್ತೆ ಆಸೆಪದುವಂತೆ, ಪ್ರಕೃತಿಯೇ ಹತ್ತಾರು ಕಡೆಗಳಿಂದ ನಮ್ಮನ್ನು ಸೆಳೆಯುತ್ತಿರುವಾಗ ಇದಕ್ಕೆ ವಶನಾಗದವನು ಯಾರು ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 189,
    english:
      '"Nature is the teacher for all the indulgence we do. It puts beautiful creations in front of our eyes. It gives sweet fruits to please our tastebuds. It makes wonderful notes fall on our ears." - Mankutimma',
    kannada:
      "ಪರಿಪರಿಯ ರೂಪಕಾಂತಿಗಳ ಕಣ್ಣಾಗಿಸುವ ।\r\nಪರಿಪರಿಯ ಫಲಮಧುರಗಳ ರಸನೆಗುಣಿಪ ॥\r\nಪರಿಪರಿಯ ಕಂಠರವಗಳ ಕಿವಿಗೆ ಸೋಕಿಸುವ ।\r\nಗುರು ಸೃಷ್ಟಿ ರಸಿಕತೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೧೮೯ ॥",
    kannada_explanation:
      "ಪರಿ ಪರಿಯಾದ ರೂಪ ಕಾಂತಿಗಳು, ಹೂಗಳು ಹಣ್ಣುಗಳು ತಿಂಡಿ ತಿನಿಸುಗಳು, ಪರಿಪರಿಯಾದ ಮಧುರ ನಾದಗಳು ಇವುಗಳನ್ನೆಲ್ಲ ಸೃಷ್ಟಿಸಿ ನಮ್ಮ ಮನಸ್ಸಿಗೆ ಆನಂದವೀಯುವ ಈ ಪ್ರಕೃತಿಯೇ, ಸೃಷ್ಟಿಯೇ ನಮ್ಮ ರಸಿಕತೆಗೆ ಗುರು ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 190,
    english:
      '"Nature has placed the precious drop of elixir (the soul) inside the destructible body made of earth (mud). It has put the blinders of attachment on the free thinking mind. It makes us see famine right in the midst of land of prosperity. Is nature being cunning or just humble (acting only as an instrument of the Creator)?" - Mankutimma',
    kannada:
      "ಅಮೃತಕಣವಂ ಮರ್ತ್ಯಮೃದ್ಘಟದಿ ಬಯ್ತಿರಿಸಿ ।\r\nವಿಮೃಶಬುದ್ಧಿಗೆ ಮೋಹದುಪನೇತ್ರವಿಡಿಸಿ ॥\r\nಸಾಮ್ರಾಜ್ಯಮಧ್ಯದಲಿ ದುರ್ಭಿಕ್ಷವಾಗಿಪುದು ।\r\nಕಮ್ರತೆಯೊ ನಮ್ರತೆಯೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೦ ॥",
    kannada_explanation:
      "ನಾಶವಿಲ್ಲದ ಆತ್ಮ ಅಥವಾ ಚೇತನನನ್ನು, ನಾಶವಾಗುವಂಥಾ ಈ ದೇಹವೆಂಬ ಮಣ್ಣಿನ ಮಡಿಕೆಯಲ್ಲಿ ಬಚ್ಚಿಟ್ಟು, ವಿಮರ್ಶೆಮಾಡುವಂತಾ ಬುದ್ಧಿಶಕ್ತಿಯನ್ನೂ ಕೊಟ್ಟು ವಿವೇಚನೆಯಿಂದಲೋ ಅಥವಾ ಮೋಹದಿಂದಲೋ ತನ್ನ ಬೇಕು ಬೇಡಗಳ ವಿಮರ್ಶೆಮಾಡುತ್ತಾ ಈ ಜಗತ್ತಿಗೆ ಅಂಟಿಕೊಳ್ಳುವಂತಾ ಮನವನಿತ್ತು, ಎಲ್ಲವೂ ಇರುವಾಗ ಇದ್ದಕ್ಕಿದ್ದಂತೆಯೇ, ಏನೂ ಇಲ್ಲದಂತಾಗಿಸುವುದು, ಇದೇನು ವಿಧಾನವೋ ಅಥವಾ ಮಾನವರಿಗೆ ಒಂದು ಪ್ರಲೋಭನೆಯೋ ಎಂದು ವಿಚಾರಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 191,
    english:
      '"When the body gets hungry, we struggle to find food just like the animals, birds or worms. Man usually forgets the hunger of the soul. This is because the body make a lot of noise when it is hungry. But the sould does not. Yet ultimately, it is the body that suffers" - Mankutimma',
    kannada:
      "ಪೊಡೆಯುಣಿಸ ಮಿಗಹಕ್ಕಿಹುಳುಗಳಂದದಿ ನರನು ।\r\nತಡಕುವನು; ತನ್ನಾತ್ಮದುಣಿಸ ಮರೆಯುವನು ॥\r\nಒಡಲಿನಬ್ಬರವೇನು? ಆತ್ಮದ ನಾಣ್ಚೇನು? ।\r\nಪೊಡವಿಗಿದೆ ದುಮ್ಮಾನ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೧ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನು, ಪ್ರಾಣಿ, ಹಕ್ಕಿ ಹುಳುಗಳ ರೀತಿ ತನ್ನ ಹೊಟ್ಟೆಪಾಡಿಗಾಗಿ ಆಹಾರಕ್ಕಾಗಿ ತಡಕಾಡುತ್ತಾನೆ. ಆದರೆ ಆತ್ಮಕ್ಕೆ ಬೇಕಾದ ಆಹಾರವನ್ನು ಕೊಡಬೇಕಾದ ಆಹಾರವನ್ನು ಕೊಡದೆ, ಅದನ್ನು ಸೊರಗಿಸುತ್ತಿದ್ದಾನೆ. ತೆಜೋರೂಪವಾದ ಆತ್ಮವು ಕಡೆಗಣಿಸಲ್ಪಟ್ಟಿದೆ. ಇದು ತೀರ ದುಃಖದ ವಿಚಾರ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 192,
    english:
      '"Man\'s heart is a battle ground of the Gods and the Demons (good and the bad). Emaotions, indulgences and adamance are all their armies. In illusions of just being so, winning and losing they exhibit the essence of life." - Mankutimma',
    kannada:
      "ದೇವದಾನವರ ರಣರಂಗ ಮಾನವಹೃದಯ ।\r\nಭಾವ ರಾಗ ಹಠಂಗಳವರ ಸೇನೆಗಳು ॥\r\nಭೂವಿಭವಜಯಗಳ ಭ್ರಾಂತಿಯಲಿ ಮರೆಯುವರು ।\r\nಜೀವಾಮೃತವನವರು - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೨ ॥",
    kannada_explanation:
      "ಇಂದಿನ ಸಮಾಜದಲ್ಲಿ ಮಾನವರ ನಡವಳಿಕೆಯನ್ನು ವಿಶ್ಲೇಷನೆಮಾಡುತ್ತಾ, ಒಳ್ಳೆಯ ಮತ್ತು ಕೆಟ್ಟ ವಿಚಾರಗಳ ನಡುವಿನ ಯುದ್ಧ ಪ್ರತಿ ಹೃದಯದಲ್ಲೂ ನಡೆದಿದೆ ಮತ್ತು ಜನರೆಲ್ಲಾ, ಭಾವುಕತೆ, ಕೋಪ ಮತ್ತು ಹಠವನ್ನು ಮನಗಳಲ್ಲಿ ತುಂಬಿಕೊಂಡು ಈ ಜಗತ್ತಿನಲ್ಲಿ ವೈಭವದಿಂದ ಜೀವಿಸುತ್ತಿದ್ದೇವೆ ಎನ್ನುವ ಭ್ರಮೆಯಲ್ಲಿ ಜೀವಿಸುತ್ತಾ, ಆತ್ಮದ ವಿಚಾರವನ್ನು ತೊರೆದು, ಅದರಿಂದ ದೊರೆಯುವ ಅಮೃತದ೦ತ ಅನುಭವವನ್ನು ಮರೆತಿದ್ದಾರೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 193,
    english:
      '"The supreme creator is very smart. With his two hands, he created two animals. And in one move, he merged them into one. They were a fox (ನರಿ) and a monkey(ವಾನರ) and Man(ನರ) was the result - cunning as a fox; fickle as a monkey." - Mankutimma',
    kannada:
      "ಪರಮೇಷ್ಠಿ ನಿಜಚಾತುರಿಯನಳೆಯ ನಿರವಿಸಿದ ।\r\nನೆರಡುಕೈಯಿಂದೆರಡು ಜಂತುಗಳ ಬಳಿಕ ॥\r\nಇರದೆ ತಾನವನೊಂದುಗೂಡಿಸಲು ಬೆರಗಾಯ್ತು ।\r\nನರಿಯು ವಾನರವು ನರ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೩ ॥",
    kannada_explanation:
      "ಪರಬ್ರಹ್ಮನು ತನ್ನ ನಿಜವಾದ ಚಾತುರ್ಯವನ್ನು ಪರೀಕ್ಷಿಸಲು ತನ್ನ ಎರಡೂ ಕೈಗಳಿಂದ ಎರಡು ಪ್ರಾಣಿಗಳನ್ನು ಸೃಷ್ಟಿಸಿದನಂತೆ. ಒಂದು ನರಿ, ಇನ್ನೊಂದು ಮಂಗ. ಅವುಗಳನ್ನು ಸೃಷ್ಟಿಸಿದಮೇಲೆ, ಸುಮ್ಮನೆ ಇರದೆ, ಇವೆರಡನ್ನೂ ಒಂದಾಗಿ ಸೇರಿಸಿದನಂತೆ. ಆಶ್ಚರ್ಯವೆಂದರೆ ಅವೆರಡರ ಸಮ್ಮಿಲನದಿಂದ ಉಂಟಾದದ್ದು ನರ( ಮನುಷ್ಯ) ಪ್ರಾಣಿಯಂತೆ, ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 194,
    english:
      '"Who is there who can show us our inside thoughts? Is there any one who has seen his own inner thoughts? There are many many folds, lumps and knots in one\'s own thoughts that are not visible easily to oneself." - Mankutimma',
    kannada:
      "ಅಂತರಂಗವನೆಲ್ಲ ಬಿಚ್ಚಿ ತೋರಿಪನಾರು? ।\r\nಅಂತರಗಭೀರಗಳ ತಾನೆ ಕಂಡವನಾರ್? ॥\r\nಗಂತಿಗಳು ಗಂಟುಗಳು ಮಡಿಪುಮಡಿಪುಗಳಲ್ಲಿ ।\r\nಸ್ವಂತಕೇ ದುರ್ದರ್ಶ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೪ ॥",
    kannada_explanation:
      "ತಮ್ಮ ತಮ್ಮ ಅಂತರಂಗದಲ್ಲಿ ಏನಿದೆ ಎಂದು ತೋರುವವರು ಯಾರು ಅಥವಾ ಒಳಗಿರುವ ಗಂಭೀರತೆಯನ್ನು ಕಂಡವರಾರು, ವಿಚಾರ ಮತ್ತು ವಿಷಯಗಳು ಮನಸ್ಸಿನ ಮಡಿಕೆ ಮಡಿಕೆಗಳಲ್ಲಿ ತಿರುವು ತಿರುವುಗಳಲ್ಲಿ ಗಂಟು ಗಂಟುಗಳಾಗಿ ಸೇರಿಕೊಂಡುಬಿಟ್ಟಿದೆ. ನಮ್ಮ ಮನದಾಳದಲ್ಲಿರುವುದು ನಮ್ಮ ಅನುಭವಕ್ಕೇ ಬರುವುದು ಕಷ್ಟವಾಗಿದೆ, ಎಂದು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 195,
    english:
      '"A man has four faces; so does a woman. Same number as the kind of relations one has. One face for the world, one for the family members, one to enjoy the pleasures of the world and one more his inner conscience." - Mankutimma',
    kannada:
      "ಮೊಗ ನಾಲ್ಕು ನರನಿಗಂತೆಯೆ ನಾರಿಗಂ ಬಗೆಯೆ ।\r\nಜಗಕೆ ಕಾಣಿಪುದೊಂದು, ಮನೆಯ ಜನಕೊಂದು ॥\r\nಸೊಗಸಿನೆಳಸಿಕೆಗೊಂದು, ತನ್ನಾತ್ಮಕಿನ್ನೊಂದು ।\r\nಬಗೆಯೆಷ್ಟೊ ಮೊಗವಷ್ಟು - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೫ ॥",
    kannada_explanation:
      "ನರನಿಗೆ, ನಾರಿಯನ್ನೂ ಸೇರಿ, ನಾಲ್ಕು ರೀತಿಯ ಮುಖಗಳಂತೆ. ಜಗತ್ತಿಗೆ ತೋರಲು ಒಂದು, ಮನೆಯಲ್ಲಿರುವ ಜನಗಳಿಗೆ ಒಂದು, ತನ್ನನ್ನು ತಾನಿ ನೋಡಿಕೊಳ್ಳುವುದಕ್ಕೆ ಒಂದು ಮುಖ ಮತ್ತು ಕಡೆಯದಾಗಿ ಅನ್ತಾರತ್ಮದ ಮುಖ. ಹೀಗೆ ಮನುಷ್ಯನಿಗೆ ಹಲವಾರು ಮುಖವಾಡಗಳು ಇರುತ್ತವೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 196,
    english:
      '"If one wishes to clean the world from all the imperfections, then one must start by creating a mirror for his own mind. Then he will be able to see the unique disgusting details of their own inner thoughts." - Mankutimma',
    kannada:
      "ಮನುಜಲೋಕವಿಕಾರಗಳನು ನೀನಳಿಸುವೊಡೆ ।\r\nಮನಕೊಂದು ದರ್ಪಣವ ನಿರವಿಸೆಂತಾನುಂ ॥\r\nಅನುಭವಿಪರವರಂದು ತಮ್ಮಂತರಂಗಗಳ ।\r\nಅನುಪಮಾಸಹ್ಯಗಳ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೬ ॥",
    kannada_explanation:
      "ಮನುಜರ ಮನಸ್ಸುಗಳಲ್ಲಿರುವ ವಿಕಾರಗಳನ್ನು ಅಳಿಸಿಹಾಕಿ ಅವರಲ್ಲಿ ನಿರ್ಮಲ ಮನೋ ಪ್ರವೃತ್ತಿಯನ್ನು ಉಂಟು ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ, ಆ ಮನಸ್ಸು ತನ್ನನ್ನು ತಾನೇ ನೋಡಿಕೊಳ್ಳುವಂಥಾ ಒಂದು ಕನ್ನಡಿಯನ್ನು ತಯಾರಿಸಿದರೆ, ಆಗ ಅವರುಗಳು ತಮ್ಮ ತಮ್ಮ ಮನಸ್ಸಿನ ಭಾವನೆಗಳನ್ನು ನೋಡಿಕೊಂಡರೆ, ಅಂತರಂಗದಲ್ಲಿ ಹುದುಗಿರುವ ಹೋಲಿಸಲಾಗದಷ್ಟು ಅಸಹ್ಯಕರವಾದ ಭಾವನೆಗಳನ್ನು ಅನುಭವಿಸುತ್ತಾರೆ ಎನ್ನುತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 197,
    english:
      '"A hurt tiger, an angry lion, porcupine, adamant cobra, mimicking monkey, raging dog and other animals with their frightening fighting rogue faces are all hidden inside a man\'s mind." - Mankutimma',
    kannada:
      "ಕನಲ್ದ ಹುಲಿ ಕೆರಳ್ದ ಹರಿ ಮುಳ್ ‍ಕರಡಿ ಛಲನಾಗ ।\r\nಅಣಕು ಕಪಿ ಸೀಳ್ನಾಯಿ ಮೊದಲಾದ ಮೃಗದ ॥\r\nಸೆಣಸುಮುಸುಡಿಯ ಘೋರದುಷ್ಟಚೇಷ್ಟೆಗಳೆಲ್ಲ ।\r\nವಣಗಿಹುವು ನರಮನದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೭ ॥",
    kannada_explanation:
      "ಕೋಪಗೊಂಡ ಹುಲಿ, ಕೆರಳಿದ ಸಿಂಹ, ಮುಳ್ಳಿನ ಕರಡಿ, ಛಲ ಹಿಡಿದ ನಾಗರಹಾವು, ಚೇಷ್ಟೆಯ ಕಪಿ, ಬೇಟೆಯಾಡುವ ಸೀಳು ನಾಯಿ ಮೊದಲಾದ ಮೃಗಗಳ೦ತೆ ಹೋರಾಡುವ ಮುಖವಾಡ ಹೊತ್ತು ಘೋರವಾದ ದುಷ್ಟತೆಯಿಂದ ಕೂಡಿದ ಚೇಷ್ಟೆಗಳೆಲ್ಲ ಈ ಮಾನವನ ಮನಸ್ಸಿನಲ್ಲಿ ಅಡಗಿವೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 198,
    english:
      '"He went out to search for a honest person by holding a lamp in broad day light. He could not find one. He decided that the whole world is bad and started living a well. Such was the philosophy of Diogenes." - Mankutimma',
    kannada:
      "ಸತ್ಯವಂತನನರಸಲೆನುತ ಪೇಟೆಗಳೊಳಗೆ ।\r\nಹುಟ್ಟಹಗಲೊಳೆ ದೀವಿಗೆಯ ಹಿಡಿದು ನೆಡೆದು ॥\r\nಕೆಟ್ಟುದೀ ಜಗವೆಂದು ತೊಟ್ಟಿಯೊಳೆ ವಸಿಸಿದನು ।\r\nತಾತ್ತ್ವಿಕ ಡಯೋಜೆನಿಸ್ - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೮ ॥",
    kannada_explanation:
      "ಈಗ್ಗೆ ೨೪೨೪ ವರ್ಷಗಳ ಹಿಂದೆ ಗ್ರೀಕ್ ದೇಶದಲ್ಲಿ ಜನಿಸಿದ ಡಯೋಜೆನಿಸ್ ಎಂಬ ತತ್ವಜ್ಞಾನಿಯು “ಸತ್ಯವಂತನಾದ ವ್ಯಕ್ತಿಯಾರಾದರೂ ಸಿಗುವನೋ” ಎಂದು ಹಗಲಿನ ಹೊತ್ತಿನಲ್ಲಿ ದೀವಿಗೆಯನ್ನು ಹಿಡಿದುಕೊಂಡು ಪೇಟೆಬೀದಿಗಳಲ್ಲಿ ಹುಡುಕಿದನಂತೆ. ಅವನಿಗೆ ಯಾರೂ ಸಿಗದಾಗ, “ಈ ಜಗತ್ತು ಕೆಟ್ಟು ಹೋಗಿದೆ” ಎಂದು ತನ್ನ ಮನೆಯಲ್ಲಿ ಒಂದು ತೊಟ್ಟಿಯನ್ನು ಕಟ್ಟಿಸಿ ಅದರೊಳಗೆ ವಾಸಿಸತೊಡಗಿದನಂತೆ, ಎನ್ನುತ್ತಾ ಒಂದು ವಿಡಂಬನೆಯನ್ನು ಈ ಕಗ್ಗದ ಮೂಲಕ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 199,
    english:
      "\"There are many folds and knots in everyone's heart, mind and speech. Can a man's nature be known/predicted deterministically? It's all like a picture drawn by the hands of Providence.\" - Mankutimma",
    kannada:
      "ಪದರಪದರಗಳಿಹುವು ಗಂಟುಗಂಟುಗಳಿಹುವು ।\r\nಹೃದಯದಲಿ ಬುದ್ಧಿಯಲಿ ವಾಕ್ಚರ್ಯೆಗಳಲಿ ॥\r\nಇದಮಿತ್ಥಮೆಲ್ಲಿಹುದು ಮನುಜಸ್ವಭಾವದಲಿ? ।\r\nವಿಧಿಯ ಕೈಚಿತ್ರವದು - ಮಂಕುತಿಮ್ಮ ॥ ೧೯೯ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಹೃದಯದ ಮತ್ತು ಬುದ್ಧಿಯ ಭಾವಗಳು, ಅವನ ಮಾತುಗಳು ಮತ್ತು ಕೃತಿಗಳು ಗೋಜಲು ಗೋಜಲಾಗಿಯೂ ಸಿಕ್ಕು ಸಿಕ್ಕಾಗಿ ಗಂಟಾಗಿಯೂ ಇವೆ. ಮನುಷ್ಯರ ಸ್ವಭಾವ ” ಹೇಗೇ ” ಎಂದು ಹೇಳಲಾಗದು. ಬಹುಷಃ ಇದು ವಿಧಿಯ ಕ್ರಮದಿಂದಾದ ಚಿತ್ರವಿರಬಹುದು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 200,
    english:
      '"Just as if man does not suffer enough because of hunger in the stomach, man also has the fire in his belly (due to jealousy). Even a wolf (known to be always hungry) may sleep when its stomach is full. But man still worries (after having all his wishes satisfied) by looking at others." - Mankutimma',
    kannada:
      "ಹೊಟ್ಟೆಯೊಂದರ ರಗಳೆ ಸಾಲದೆಂದೇನೊ ವಿಧಿ ।\r\nಹೊಟ್ಟೆಕಿಚ್ಚಿನ ಕಿಡಿಯ ನೆಟ್ಟಿಹನು ನರನೊಳ್ ॥\r\nಹೊಟ್ಟೆತುಂಬಿದ ತೋಳ ಮಲಗೀತು; ನೀಂ ಪೆರರ ।\r\nದಿಟ್ಟಿಸುತ ಕರುಬುವೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೦ ॥",
    kannada_explanation:
      "ಊಟದ ಚಿಂತೆಯೊಂದು ಸಾಲದೇನೋ ಎಂಬಂತೆ, ಅಸೂಯೆ ಅಥವಾ ಹೊಟ್ಟೆಯುರಿಯ ಬೆಂಕಿಯನ್ನು ಮನುಷ್ಯರ ಮನಸ್ಸುಗಳಲ್ಲಿ ಆ ವಿಧಿಯು ನೆಟ್ಟಿದ್ದಾನೆ. ಹೊಟ್ಟೆಬಾಕತನಕ್ಕೆ ಅಥವಾ ಹಸಿವಿಗೆ ಹೆಸರಾದ ಪ್ರಾಣಿ ತೋಳ. ಆ ತೋಳವೂ ಹೊಟ್ಟೆ ತುಂಬಿದರೆ ನೆಮ್ಮದಿಯಿಂದ ನಿದ್ದೆ ಮಾಡುತ್ತದೆ, ಆದರೆ ಮನುಷ್ಯ ಮಾತ್ರ ಅನ್ಯರನ್ನು ನೋಡಿ ಕೊರಗುತ್ತಿರುತ್ತಾನೆ ಎಂದು ಮನುಷ್ಯರ ಅಸೂಯಾ ಪ್ರವೃತ್ತಿಯನ್ನು ಉಪಮೆಯ ಸಹಿತ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 201,
    english:
      '"Is there water that can dowse this fire of jealousy? If hell resides in our mind, then where is the question of sleep (or peace)? Can man ever vanquish this discomfort of jealousy? Only God can help us to curb this feeling." - Mankutimma',
    kannada:
      "ಉರಿಯುತಿರೆ ಹೊಟ್ಟೆಕಿಚ್ಚಾರಿಸಲು ನೀರೆಲ್ಲಿ? ।\r\nನರಕವೆದೆಯಲಿ ನೆಲಸೆ ನಿದ್ದೆಗೆಡೆಯೆಲ್ಲಿ? ॥\r\nಹರಿಸಲಪ್ಪುದೆ ನರರು ಮತ್ಸರಿಯ ಸಂಕಟವ? ।\r\nಕರುಬಿದನ ಹರಿ ಪೊರೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೧ ॥",
    kannada_explanation:
      "ಹೊಟ್ಟೆಯುರಿಯನ್ನು ಆರಿಸಲು ನೀರು ಎಲ್ಲಿಹುದು? ನರಕದಂಥ ಹಿಂಸೆಯನ್ನು ನೀಡುವ ಈ ಅಸೂಯೆ ಎನ್ನವ ಉರಿ ಹೃದಯದಲಿ ನೆಲೆಸಿರುವಾಗ, ನಿದ್ದೆ ಬರಲು ಹೇಗೆ ಸಾಧ್ಯ. ಮತ್ಸರ ಪಡುವವನ ಸಂಕಟವನ್ನು ಯಾರಾದರೂ ನಿವಾರಿಸಲು ಸಾಧ್ಯವೇ? ಅಂತಹವನನ್ನು ಆ ದೇವರೇ ಕಾಪಾಡಬೇಕು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 202,
    english:
      '"What is so great about Ravana having ten heads? Any man had hundred heads. He has thousand cunning minds all hidden inside one. He can be at times like a snake (slippery), a tiger (dangerous) or a deer (docile). There is no other being in this world - earth and sky - that comes close to his ability." - Mankutimma',
    kannada:
      "ರಾವಣನ ದಶಶಿರವದೇಂ? ನರನು ಶತಶಿರನು ।\r\nಸಾವಿರಾಸ್ಯಗಳನೊಂದರೊಳಣಗಿಸಿಹನು ॥\r\nಹಾವಾಗಿ ಹುಲಿಯಾಗಿ ಕಪ್ಪೆ ಹುಲ್ಲೆಯುಮಾಗಿ ।\r\nಭೂವ್ಯೊಮಕತಿಶಯನು - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೨ ॥",
    kannada_explanation:
      "ರಾವಣನಿಗೆ ಹತ್ತು ತಲೆಗಳಿರಬಹುದು. ಆದರೆ ನಮ್ಮ ಮನುಷ್ಯನಿಗೆ ನೂರಾರು ತಲೆಗಳು. ಸಾವಿರ ಮುಖಗಳನ್ನು ಒಂದೇ ಮುಖದಲ್ಲಿ ಅಡಗಿಸಿಟ್ಟುಕೊಂಡು ಪ್ರದರ್ಶಿಸುವ ಕ್ಷಮತೆ ಇರುವವನು ಮನುಷ್ಯ. ಹಾವಾಗಿ, ಹುಲಿಯಾಗಿ, ಕಪ್ಪೆ, ಜಿಂಕೆಯಾಗಿಯೂ ತನ್ನ ಗುಣಗಳನ್ನು ತೋರುವ ಈ ಮನುಷ್ಯ ಇಡೀ ಜಗತ್ತಿನಲ್ಲಿ ಅತಿಶಯದ ಪ್ರಾಣಿ ಎಂದು ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 203,
    english:
      '"In a man\'s mind he can hear voices of all the birds - parrots, owls, crows, koels, eagles, peacocks. Each one has its own melody or cacophony - just like the voices of his inner mind/conscience. How can he find peace and rest?" - Mankutimma',
    kannada:
      "ತಲೆಯೊಳಗೆ ನೆರೆದಿಹುವು ನೂರಾರು ಹಕ್ಕಿಗಳು ।\r\nಗಿಳಿ ಗೂಗೆ ಕಾಗೆ ಕೋಗಿಲೆ ಹದ್ದು ನವಿಲು ॥\r\nಕಿಲಕಿಲನೆ ಗೊರಗೊರನೆ ಕಿರಿಚಿ ಕೂಗುತ್ತಿಹುವು ।\r\nನೆಲೆಯೆಲ್ಲಿ ನಿದ್ದೆಗೆಲೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೩ ॥",
    kannada_explanation:
      "ನಾವು ಈ ಹಿಂದಿನ ಕಗ್ಗಗಳಲ್ಲಿ ಮನುಷ್ಯನ ಮನಸ್ಸಿನಲಿ ಒಂದೇ ಸಮಯದಲ್ಲಿ ನಡೆಯುವ ಹಲವಾರು ಯೋಚನೆಗಳ ವಿಚಾರ ಮತ್ತು ಮನುಷ್ಯನ ಗುಣಗಳ ಹಲವಾರು ಮುಖವಾಡಗಳ ವಿಚಾರವನ್ನು ನೋಡಿದ್ದೇವೆ. ಒಂದು ಬಾರಿ ಯಾವುದೇ ಮನುಷ್ಯನ ಮಸ್ತಿಷ್ಕದಲ್ಲಿ ಹೊಕ್ಕು ನೋಡಿದರೆ, ನಮಗೆ ಅಲ್ಲಿ ಭಯಂಕರವಾಗಿ ನಡೆಯುವ ಚಿತ್ರ ವಿಚಿತ್ರವಾದ ವಿಚಾರಗಳ ಕುಸ್ತಿಯು ಕಾಣುತ್ತದೆ. ಒಂದರ ಮೇಲೊಂದು ಬೀಳುತ್ತಾ, ಒಂದರೊಂದಿಗೆ ಇನ್ನೊಂದು ಗುದ್ದಾಡುತ್ತಾ, ಕೆಲವು ಸೋಲುತ್ತಾ, ಕೆಲವು ಗೆಲ್ಲುತ್ತಾ, ಸೋತದ್ದು ಮತ್ತೆ ಗೆಲ್ಲುತ್ತಾ, ಗೆದ್ದು ಸೋಲುತ್ತಾ, ಹೊಸ ಹೊಸ ಪಟ್ಟುಗಳನ್ನು ಹಾಕುತ್ತಾ, ತಮ್ಮೊಳಗೆ ತಾವೇ ಗುದ್ದಾಡುವ, ವಿವೇಕದೊಡನೆ ಮತ್ತು ಬುದ್ಧಿಯೊಡನೆ ಗುದ್ದಾಡುವ ಸಾವಿರಾರು ಯೋಚನೆಗಳ ಆಗರವೇ ನಮ್ಮ ಮನಸ್ಸಿನ ಹಂದರ. ವಾಸ್ತಿವಿಕವಾಗಿ ಯಾವ ಶಬ್ದವೂ ಆಗದಿದ್ದರೂ ನಮಗೆ ನಮ್ಮ ಮನದಲ್ಲಿ, ಗಿಳಿ – ಕಾಗೆ – ಗೂಬೆ – ಕೋಗಿಲೆಯಂತಹ ಪಕ್ಷಿಗಳು ಒಂದೇ ಬಾರಿ ಕೂಗಿದರೆ ಆಗುವ ಕಲರವವಾದಂತೆ ಭಾಸವಾಗುತ್ತದೆ . ಈ ಶಬ್ದಗಳೇ ಹಲ ವಿಧವಾದ ಆಲೋಚನೆಗಳಂತೆ ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಹೊಕ್ಕು ರಾದ್ದಾಂತ ಮಾಡುತ್ತಿರುತ್ತದೆ. ಅಂತಹ ಕಲಸುಮೆಲೋಗರವಾದ ಆಲೋಚನೆಗಳ ಗೂಡಿನಲ್ಲಿ ಶಬ್ದವೆಲ್ಲಾ ಸ್ಥಬ್ದವಾಗಿ ನಮಗೆ ನಿದ್ದೆ ಬರುವುದು ಸಾಧ್ಯವೇ ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 204,
    english:
      '"A human life is a complex mixture of elements of Gods and Demons. One must use his intellect to know and recognise the divine elements and nurture them to be strong. One must also know his inner feelings to recognise the demonic elements and curb them to keep them under check. This is the only way he can make progress in his life." - Mankutimma',
    kannada:
      "ದೇವಾಂಶ ಪಶ್ವಂಶಗಳ ಗಂಟು ಮಾನುಷತೆ ।\r\nಧೀವಿಮರ್ಶೆಯಿನೊಂದ ಸತ್ಕರಿಸಿ ಬಲಿಸಿ ॥\r\nಭಾವಪರಿಶೋಧನೆಯಿನಿನ್ನೊಂದ ದಂಡಿಪುದೆ ।\r\nಜೀವಪ್ರಕರ್ಷಗತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೪ ॥",
    kannada_explanation:
      "ದೇವತೆಗಳಿಗಿರುವ ಗುಣಗಳ ಮತ್ತು ಪಶುಗಳಿಗಿರುವ ಗುಣಗಳ ಮಿಶ್ರಣವೇ ಮನುಷ್ಯಗುಣ. ತನ್ನ ಬುದ್ಧಿಶಕ್ತಿಯನ್ನು ಉಪಯೋಗಿಸಿ ಪಶುಗುಣಗಳನ್ನು ಕರಗಿಸುತ್ತಾ ದೈವೀಗುಣಗಳನ್ನು ಹೆಚ್ಚಿಸಿ ಕೊಳ್ಳುವುದೇ ಪ್ರಕರ್ಷ, ಎಂದರೆ ಪ್ರಗತಿ ಎಂದು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ.",
  },
  {
    number: 205,
    english:
      '"What are all the antics a man can do? He can stand still like a stone. He can bend like a creeper. He can hurt like a thorn. He can bring happiness like a fresh flower. He can both enchant and roar like waves at sea. Yet, he is just another being (when compared to the vastness and variety of this universe)." - Mankutimma',
    kannada:
      "ಕಲ್ಲಾಗಿ ನಿಲ್ಲುವನು, ಬಳ್ಳಿವೊಲು ಬಳುಕುವನು ।\r\nಮುಳ್ಳಾಗಿ ಚುಚ್ಚುವನು, ಫುಲ್ಲಸುಮವಹನು ॥\r\nಕಲ್ಲೋಲವಾರಿಧಿವೊಲುರವಣಿಸಿ ಮೊರೆಯುವನು ।\r\nಕ್ಷುಲ್ಲಮಾನಿಸನಿವನು - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೫ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಹಲವಾರು ಗುಣಗಳನ್ನು ವರ್ಣಿಸುತ್ತಾ, ಮಾನವನು ಕೆಲಬಾರಿ, ಕಲ್ಲಿನಂತೆ ಗಟ್ಟಿಯಾಗಿಯೂ, ಕೆಲಬಾರಿ ಬಳ್ಳಿಯಂತೆ ವಾಲುತ್ತಾ, ಕೆಲಬಾರಿ ಮುಳ್ಳಿನಂತೆ ಪರರನ್ನು ಚುಚ್ಚುತ್ತಾ, ಕೆಲಬಾರಿ ಅರಳಿದ ಕುಸುಮದಂತೆ ಸುಗಂಧವನ್ನು ಬೀರುತ್ತಾ, ಕೆಲಬಾರಿ ಸಮುದ್ರದ ಅಲೆಯಂತೆ ಮೇಲೆದ್ದು ಮತ್ತೆ ಕೆಳಗೆ ಬೀಳುತ್ತಾ ಸ್ಥಿರ ಮನಸ್ಸಿಲ್ಲದ ಕ್ಷುಲ್ಲಕ ಮನಸ್ಸಿನವನು ಇವನು, ಎಂದು ಪ್ರಸ್ತಾಪ ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 206,
    english:
      "\"Do not be proud like this: 'All my desires are dead. I have conquered all my senses. My mind shall not waver any more.' Wind shall carry a seed of desire (attachment) from somewhere and plant it in your mind. Can't it?  \" - Mankutimma",
    kannada:
      "ಸತ್ತವೆನ್ನಾಶೆಗಳು, ಗೆದ್ದೆನಿಂದ್ರಿಯಗಣವ ।\r\nಚಿತ್ತವಿನ್ನಲುಗದೆಂಬಾ ಜಂಬ ಬೇಡ ॥\r\nಎತ್ತಣಿಂದಲೊ ಗಾಳಿ ಮೋಹಬೀಜವ ತಂದು ।\r\nಬಿತ್ತಲಾರದೆ ಮನದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೬ ॥",
    kannada_explanation:
      "“ನನಗೆ ಆಸೆಗಳು ಸತ್ತಿವೆ. ನಾನು ಇಂದ್ರಿಯಗಳನ್ನು ಗೆದ್ದಿದ್ದೇನೆ. ನನ್ನ ಮನಸ್ಸು ಇನ್ನು ಚಂಚಲವಾಗದು ” ಎಂಬ ಜಂಬ ಪಡಬೇಡ. ಯಾವುದಾದರೂ ಒಂದು ಕಾರಣದಿಂದ, ನಿನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ಮತ್ತೆ ಆಸೆಯ ಬೀಜ ಬಂದು ಮೊಳಕೆಯೊಡೆಯಬಹುದಲ್ಲ ಎಂದು ಒಂದು ವಾಸ್ತವಿಕತೆಯನ್ನು ಬಣ್ಣಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 207,
    english:
      '"A blade of grass dries in summer and gets burried in sand. Just when two drops of water falls over it, it springs back to life. Just like that man\'s desires are all hiding when he is in trouble. They all come out and start dancing when he is prosperous again." - Mankutimma',
    kannada:
      "ಒಣಗಿ ಬೇಸಗೆಯಿಂದ ಮಣ್ಣಾಗಿ ಕಾಣದಿಹ ।\r\nತೃಣ ಮೊಳೆಯುವುದು ಮರಳಿ ಹನಿಯೆರಡು ಬೀಳೆ ॥\r\nಅಣಗಿರ್ದು ನರನಾಶೆಯಂತು ಕಷ್ಟದ ದಿನದಿ ।\r\nಕುಣಿವುದನುಕೂಲ ಬರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೭ ॥",
    kannada_explanation:
      "ಬೇಸಿಗೆಯಲ್ಲಿ ಒಣಗಿ ನಮಗೆ ಬರೀ ಮಣ್ಣಂತೆ ಕಾಣುವ ಹುಲ್ಲು ನಾಲ್ಕು ಹನಿ ಮಳೆ ಬಿದ್ದರೆ ಮತ್ತೆ ಚಿಗುರುವಂತೆ, ಕಷ್ಟದ ದಿನಗಳಲ್ಲಿ ಮನದ ಅಂತರ್ಯದಲ್ಲಿ, ಕಾಣದಂತೆ ಇದ್ದ ಮನುಷ್ಯನ ಆಸೆಗಳೆಲ್ಲ ಅನುಕೂಲವಾದ ಸ್ಥಿತ ಬಂದೊಡನೆಯೇ ಮತ್ತೆ ಚಿಗುರುತ್ತವೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 208,
    english:
      '"Life is a struggle all alonng. Every second we have new hunger. For this, for that and for something else. Sometimes it is for power, or wealth, or splendor, or fame. Mind is always restless thinking about them." - Mankutimma\r\n\r\nಆಸೆ,Desire',
    kannada:
      "ಬೆದಕಾಟ ಬದುಕೆಲ್ಲ; ಚಣಚಣವು ಹೊಸ ಹಸಿವು ।\r\nಅದಕಾಗಿ ಇದಕಾಗಿ ಮತ್ತೊಂದಕಾಗಿ ॥\r\nಅಧಿಕಾರ ಸಿರಿ ಸೊಗಸು ಕೀರ್ತಿಗಳ ನೆನೆದು ಮನ ।\r\nಕುದಿಯುತಿಹುದಾವಗಂ - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೮ ॥",
    kannada_explanation:
      "ಪ್ರತೀ ಕ್ಷಣವೂ ನಾವುಗಳೆಲ್ಲ ಹೊಸ ಹೊಸ ಯೋಜನೆಗಳು, ಯೋಚನೆಗಳು, ಆಸೆಗಳು, ಆಕಾಂಕ್ಷೆಗಳನ್ನು ಹೊತ್ತು, ಇದನ್ನೋ, ಅದನ್ನೋ ಅಥವಾ ಮತ್ಯಾವುದನ್ನೋ ಪಡೆಯುವುದಕ್ಕೆ ಪರದಾಡುತ್ತಿರುತ್ತೇವೆ. ಈ ಪರದಾಟ, ಅಧಿಕಾರ ಸಂಪತ್ತು, ಅಂದ ಚೆಂದ ಅಥವಾ ಕೀರ್ತಿಗಳಂತಹ ವಿಚಾರಗಳನ್ನು ನೆನೆದು ನಮ್ಮ ಮನಸ್ಸುಗಳು ಕುದಿಯುತ್ತಿರುತ್ತವೆ ಎಂಬ ವಿಷಯವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 209,
    english:
      '"Cow, lion, tiger, snake, fish and other animals have a simple definition of life. Struggle for food, secure a mate to have a healthy progeny, be scared about life (from predators or nature) - this pretty much completes their life and they are happy if they are able to do just that. But man is not like them. He is not happy just doing the same. His desires grow and change every second." - Mankutimma',
    kannada:
      "ದನ ಸಿಂಗ ಹುಲಿ ಹಕ್ಕಿ ಹಾವು ಮೀನ್ ಗಳಿಗೆಲ್ಲ ।\r\nಇನಿಸುಣಿಸು, ಬೆದೆ, ಬೆದರು - ಅಷ್ಟೆ ಜೀವಿತವು ॥\r\nಮನುಜನೆಂತನಿತರಿಂ ತೃಪ್ತಿವಡೆವನವಂಗೆ ।\r\nಕ್ಷಣಕ್ಷಣವು ಹೊಸ ಹಸಿವು - ಮಂಕುತಿಮ್ಮ ॥ ೨೦೯ ॥",
    kannada_explanation:
      "ದನ,ಸಿಂಹ, ಹುಲಿ, ಹಕ್ಕಿ, ಹಾವು, ಮೀನು ಮಂತಾದ ಪ್ರಾಣಿಗಳಿಗೆ ಹಸಿವಾದಾಗ ಆಹಾರ, ಸಂತಾನಾಭಿವೃದ್ಧಿ ಮತ್ತು ತಮ್ಮನ್ನು ತಾವು ಕಾಪಾಡಿಕೊಳ್ಳುವುದಕ್ಕೆ ಪೂರಕವಾದ ಅವಶ್ಯಕತೆಗಳನ್ನು ಬಿಟ್ಟರೆ ಬೇರಾವ ಆಸೆಗಳೂ ಇರದು ಮತ್ತು ಅವುಗಳ ಜೀವಿತವು ಅಷ್ಟಕ್ಕೇ ಸೀಮಿತವು. ಆದರೆ ಕೋಟ್ಯಂತರ ಆಸೆ ಆಕಾಂಕ್ಷೆಗಳ ಆಗರವೇ ಆದ ಮನುಷ್ಯ ಎಂದಿಗೂ ತೃಪ್ತನಾಗುವುದೇ ಇಲ್ಲ. ಕ್ಷಣ ಕ್ಷಣವೂ ಅವನ ಆಸೆಗಳ ಹಸಿವು ಅಧಿಕವಾಗುತ್ತಲೇ ಇರುತ್ತದೆ ಎಂಬ ಭಾವವನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 210,
    english:
      "\"A hungry person is satisfied (temporarily) even if he is given stale food. But a person who has eaten wants to look good and have a companion. Later more needs come up like gold for ornaments, position of power, fame. The fountain of wants in his heart does not go dry even if he gets all of them.\" - Mankutimma\r\n[Translator's note: Maslov's hierarchy of needs : http://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs ]",
    kannada:
      "ತಂಗಳುಣಿಸಾದೊಡಂ ಸಾಕೆನುವನುಪವಾಸಿ ।\r\nಸಿಂಗಾರ ಸಂಗಾತಿ ಬೇಕುಂಡವನಿಗೆ ॥\r\nಬಂಗಾರ ಪದವಿ ಪ್ರತಿಷ್ಠೆ ಬೇಕಾಬಳಿಕ ।\r\nಹಿಂಗದಾಯೆದೆಚಿಲುಮೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೦ ॥",
    kannada_explanation:
      "ಬಹಳ ಹಸಿವಿನಿಂದಿರುವವನಿಗೆ ತಂಗಳನ್ನವಾದರೂ ತೃಪ್ತಿ ನೀಡುತ್ತದೆ. ಒಂದು ಬಾರಿ ಆ ಹಸಿವು ನೀಗಿದರೆ ಅವನಿಗೆ ಶೃಂಗಾರ, ಬಟ್ಟೆ ಬರೆ, ಸಂಗಾತಿ ಬೇಕೆನಿಸುತ್ತದೆ. ಅವುಗಳು ಸಿಕ್ಕರೆ ಮುಂದಕ್ಕೆಆಸ್ತಿಅಂತಸ್ತು ಪದವಿ ಬೇಕೆನಿಸುತ್ತದೆ, ಹೀಗೆ ಬಯಕೆಗಳ ಒರತೆ ಮನುಜನ ಮನದಲ್ಲಿ ಎಂದಿಗೂ ಹಿಂಗದು ಎಂದು ಸ್ಪಷ್ಟಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 211,
    english:
      '"As the mind grows, so does the hunger. To satiate that hunger the mind comes up with various novel ideas. These ideas are the cause of human progress perhaps leading to the growth of mind. But, is there an end to this cycle of growth of the mind? Think." - Mankutimma',
    kannada:
      "ಮನಸು ಬೆಳೆದಂತೆಲ್ಲ ಹಸಿವು ಬೆಳೆಯುವುದಯ್ಯ ।\r\nತಣಿಸಲದನೊಗೆಯುವುದು ಬಗೆಬಗೆಯ ಯುಕ್ತಿ ॥\r\nಮನುಜನೇಳಿಗೆಯದರಿನ್; ಆ ಮನಸಿನೇಳಿಗೆಗೆ ।\r\nಕೊನೆಯೆಲ್ಲಿ? ಚಿಂತಿಸೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೧ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಮನಸ್ಸು ಬೆಳೆದಂತೆಲ್ಲ ಅವನ ಮನಸ್ಸಿನ ಹಸಿವೂ ಸಹ ಬೆಳೆಯುತ್ತದೆ. ಆ ಹಸಿವನ್ನು ಇಂಗಿಸಲು ಮನಸ್ಸು ಬಗೆ ಬಗೆಯ ಉಪಾಯಗಳನ್ನು ಹುಡುಕುತ್ತದೆ. ಈ ರೀತಿಯ ಹಸಿವು ಮತ್ತು ಆ ಹಸಿವಿನ ತಣಿಯುವಿಕೆಯಿಂದ ಮನುಷ್ಯನ ಬಾಹ್ಯ ಜೀವನ ಉತ್ತಮವಾಗಬಹುದು.ಈ ರೀತಿ ಆಸೆ ಪಡುವುದು, ಆ ಆಸೆಗಳನ್ನು ತೀರಿಸಿಕೊಳ್ಳಲು ಹಲವಾರು ಉಪಾಯಗಳನ್ನು ಮಾಡುವುದು ಮತ್ತು ಈ ಉಪಾಯಗಳಿಂದ ಉನ್ನತ ಸ್ಥಾನ ಹೊಂದುವುದು, ಹೀಗೆ ನಡೆಯುವ ಏಳಿಗೆಗೆ ಕೊನೆಯಲ್ಲಿ ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯ ಮೂಲಕ ಬಹಳ ಗಹನವಾದ ವಿಚಾರವನ್ನು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತುತ ಪಡಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 212,
    english:
      "\"Everyday they become stale and decay. All mankind's achievements are temporary; his works, his victories and his wealth. Your life's satisfaction must lie in the action of cleaning yesterday's stale and making them today's new.\" - Mankutimma",
    kannada:
      "ದಿನದಿನವು ಹಳಸುವುವು, ದಿನದಿನವು ಕೊಳೆಯುವುವು ।\r\nಮನುಜಕುಲದೆಲ್ಲ ಕೃತಿವಿಜಯವಿಭವಗಳು ॥\r\nಅನುದಿನವು ಮತ್ತವನು ತೊಳೆದು ಹೊಸತೆನಿಸುವುದೆ ।\r\nಜನುಮಸಫಲತೆ ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೨ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಕೆಲಸಗಳು, ಸಾಧನೆಗಳು ಮತ್ತು ಅದರ ವೈಭವಗಳು ದಿನ ಕಳೆದಂತೆ ಹಳತಾಗುತ್ತಾ ಹೋಗುತ್ತದೆ ಮತ್ತು ಹಳಸುತ್ತಾ, ಕೊಳೆಯುತ್ತಾ ಹೋಗುತ್ತದೆ. ಅಂತಹ ಹಳಸಿದ ಮತ್ತು ಕೊಳೆತ ಸಾಧನೆಗಳನ್ನು ಮತ್ತೆ ತೊಳೆದು ಹೊಳಪನ್ನು ನೀಡುವುದೇ ನೀನು ಸಾಧಿಸುವ ಸಫಲತೆ, ಹೇ ! ಮಾನವ ಎಂದು ಉದ್ಘಾರವನ್ನು ತೆಗೆಯುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 213,
    english:
      '"Are you turning a blind eye towards your bad habits sighting their innate nature as a reason not to change? Only animals and insects can not get to change their innate behaviours. To curb the innate instincts and to use it for the good of the world order is the greatness of being human." - Mankutimma',
    kannada:
      "ಸಾಜಗುಣವೆಂದುಪೇಕ್ಷಿಪೆಯ ನಿನ್ನವಗುಣವ? ।\r\nಸಾಜವನು ಬಿಟ್ಟಲುಗದಿಹುದು ಮೃಗಕೀಟ ॥\r\nಸಾಜವಂ ಶಿಕ್ಷಿಸುತ ಲೋಕಸಂಸ್ಥಿತಿಗದನು ।\r\nಯೋಜಿಪುದೆ ನರಮಹಿಮೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೩ ॥",
    kannada_explanation:
      "ತನ್ನ ಅವಗುಣಗಳನ್ನು ತೀರಾ ಸಾಮಾನ್ಯವೆಂದು ಅಥವಾ ಸಹಜವೆಂದು ಅವುಗಳನ್ನು ಉಪೇಕ್ಷಿಸುತ್ತಾನೆ ಮನುಷ್ಯ. ಆದರೆ ಪ್ರಾಣಿ, ಪಕ್ಷಿ, ಕೀಟಗಳು ತಮ್ಮ ಸಹಜ ಗುಣವನ್ನು ಬಿಡುವುದೇ ಇಲ್ಲ. ಹೀಗೆ ಇವನ ದುರ್ಗುಣಗಳನ್ನು ದಂಡಿಸುತ ಅಥವಾ ತಿದ್ದುತ್ತಾ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಮಾನವನ ಬದುಕನ್ನು ಒಂದು ವ್ಯವಸ್ಥಿತವಾದ ರೀತಿಯಲ್ಲಿ ಇಡಬೇಕೆಂದು ಯತ್ನಿಸುವುದೇ ನಿರಂತರವಾಗಿ ನಡೆದಿರುವ ಮನುಷ್ಯ ಪ್ರಯತ್ನವೆಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 214,
    english:
      '"It is innate nature to be naked, the nails and the beard. Clothes, fashion and decoration are results of ages of civilizations. To be natural is to be illiterate. To learn is then is to be artificial. The artificial always has its roots in the natural." - Mankutimma',
    kannada:
      "ಸಹಜ ನಗ್ನತೆ ನಮಗೆ, ಸಹಜ ನಖದಾಡಿಗಳು ।\r\nಬಹುಯುಗದ ಸಂಸ್ಕಾರ ವಸ್ತ್ರ ಸಿಂಗಾರ ॥\r\nಸಹಜತೆ ನಿರಕ್ಷರತೆ, ವಿದ್ಯೆ ತಾಂ ಕೃತಕವಲ ।\r\nಸಹಜಿದಿನೆ ಕೃತಕಮುಂ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೪ ॥",
    kannada_explanation:
      "ನಗ್ನತೆಯು ಮನುಜನಿಗೆ ಸಹಜ. ಈ ದೇಹದಲ್ಲಿ ಉಗುರುಗಳು ಗಡ್ಡ ಮೀಸೆಗಳು ಸಹಜ. ಆದರೆ ಸಾವಿರಾರು ವರ್ಷಗಳಕಾಲದ ಸಂಸ್ಕಾರದಿಂದ ಮನುಷ್ಯ ಬಟ್ಟೆ ಹಾಕಿಕೊಳ್ಳುವುದನ್ನು, ತನ್ನನ್ನು ತಾನು \n ಸಿಂಗರಿಸಿಕೊಳ್ಳುವುದನ್ನು ಕಲಿತಿದ್ದಾನೆ. ಹಾಗೆಯೇ ನಿರಕ್ಷರತೆ ಸಹಜ. ಇವನು ಅಕ್ಷರವನ್ನು ಮತ್ತು ವಿದ್ಯೆಯನ್ನು ಕಲಿತ. ಆ ಸಹಜತೆಯಿಂದ ಬಂದ ಕೃತಕತೆಯೇ ಇದು. ಹಾಗಾಗಿ ಹೊರಕಾಣುವ ಕೃತಕತೆಯು ಸಹಜತೆಯಿಂದಲೇ ಬರುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 215,
    english:
      '"There is something better than what we have now. There is a way to get that too. I will have to go though some difficulty to get it. But, I am prepared to do that. The spring of such desires is present in all of us. It is very natural. What this natural longing makes our mind do is artificial." - Mankutimma',
    kannada:
      "ಇಹುದಕಿಂತೊಳಿತಿಹುದು; ಒಳಿತ ಗಳಿಸಲ್ಬಹುದು ।\r\nಸಹಿಸಿಸುವೆನದಕೆನುವ ಮತಿಯಿನೇ ಪ್ರಗತಿ ॥\r\nರಹಸಿಯದ ಬುಗ್ಗೆಯದು, ಚಿಮ್ಮುತಿಹುದೆಲ್ಲರೊಳು ।\r\nಸಹಜವಾ ಮತಿ ಕೃತಕ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೫ ॥",
    kannada_explanation:
      "ಈಗ ಇರುವ ಸ್ಥಿತಿಗಿಂತ ಇನ್ನೂ ಉತ್ತಮ ಸ್ಥಿತಿ ಇದೆ, ಒಳಿತಾದ ಸ್ಥಿತಿಯನ್ನು ಪಡೆಯಬಹುದು. ಅದಕ್ಕಾಗಿ ನಾನು ಸಾಹಸ ಮಾಡುತ್ತೇನೆ ಎನ್ನುವುದೇ ಮನುಷ್ಯ ಬುದ್ಧಿ. ಆ ರೀತಿ ಹೊಮ್ಮುವ ಬುದ್ಧಿಯ ಬುಗ್ಗೆಗಳೇ ಪ್ರಗತಿಗೆ ಹಾದಿ. ಈ ರೀತಿಯ ಯೋಚನೆಗಳು ಬುಗ್ಗೆ ಬುಗ್ಗೆಯಾಗಿ, ಅಲೆ ಅಲೆಯಾಗಿ ಎಲ್ಲರಲ್ಲೂ ಸಹಜವಾಗೇ ಇರುತ್ತದೆ. ಈ ರೀತಿ ಇರುವ ಸಹಜ ಬುದ್ಧಿಯೂ ಸಹ ಸಹಜದಿಂದ ಉದ್ಭವವಾದ ಕೃತಕತನವೇ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 216,
    english:
      '"Life is a struggle; for wealth and pleasures, for position weak or powerful. These are pranks of the characters in the drama directed by the creator. The living being who is going through the struggle is the hero - the protagonist. The feeling that kindles the longing for desires is the heroine." - Mankutimma',
    kannada:
      "ಸಿರಿ ಸೊಬಗುಗಳ ಬೆದಕು, ಕೆಳೆ ಬಲುಮೆಗಳ ಬೆದಕು ।\r\nಪರಬೊಮ್ಮ ನಾಟಕದ ವೇಷಚೇಷ್ಟೆ ॥\r\nಅರಸುತಿಹ ಜೀವ ನಾಯಕನು, ನಾಯಕಿಯವನ ।\r\nಕೆರಳಿಸುವ ಮೋಹರುಚಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೬ ॥",
    kannada_explanation:
      "ಮಾನವನಿಗಿರುವ, ಐಶ್ವರ್ಯ ಅಲಂಕಾರಗಳ ಅರಸುವಿಕೆಯ ಆಸೆ, ಸ್ನೇಹ, ಬಂಧನ ಮತ್ತು ಬಲ ಪ್ರದರ್ಶನದಆಸೆ, ಇವೆಲ್ಲವುಗಳನ್ನೂ ಮನುಷ್ಯನ ಮನಗಳಲ್ಲಿ ತುಂಬಿ ಹಲವಾರು ವೇಷಗಳನ್ನು ಹಾಕಲು ಹುರಿದುಂಬಿಸುವುದು ಕೇವಲ ಆ ಪರಮಾತ್ಮನ ಜಗನ್ನಾಟಕದ ಒಂದು ಬಾಗವಷ್ಟೇ . ಪರಮ ಚೇತನದ ಅಂಶವಾದ ಈ ಜೀವನು ಈ ನಾಟಕದ ನಾಯಕನು ಮತ್ತು ಇವನನ್ನು ಈ ನಾಟಕದಲ್ಲಿ ಪಾತ್ರವಹಿಸಲು ಪ್ರೇರೇಪಿಸುವ ನಾಯಕಿಯೇ ಹಲವಾರು ರೀತಿಯ ಆಸೆಗಳು ಮತ್ತು ಜಗತ್ತಿನ ಮೋಹಗಳೆಂದು, ಬಹಳ ಸೂಕ್ಷ್ಮವಾದ ವಿಚಾರವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 217,
    english:
      "\"Let's discuss one of the senses - the sight. The sky that seems to meet the Earth at the horizon, the curve of the Moon, the crookedness of the waves of the sea, the dancing elegance of the plants and creepers, the darkness of the cloud, it's shadow on the ground. By showing us all this, it is nature that taught us to indulge in this sensory pleasure.\" - Mankutimma",
    kannada:
      "ಆಗಸದ ಬಾಗು, ಚಂದ್ರಮನ ಗುಂಡಿನ ನುಣ್ಪು ।\r\nಸಾಗರದ ತೆರೆವಂಕು, ಗಿಡಬಳ್ಳಿ ಬಳುಕು ॥\r\nಮೇಘವರ್ಣಚ್ಛಾಯೆ - ಯೀಸೃಷ್ಟಿಯಿಂ ನಮ್ಮೊ ।\r\nಳಾಗಿಹುದು ರೂಪರುಚಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೭ ॥",
    kannada_explanation:
      "ದಿಗಂತದಲ್ಲಿ ಕಾಣುವ ಬಾಗಿದಂತ ಮುಗಿಲು, ನುಣುಪಾಗಿ ಮತ್ತು ಗುಂಡಾಗಿ ಕಾಣುವ ಹುಣ್ಣಿಮೆಯ ಚಂದಿರ, ಅಂಕುಡೊಂಕಾದ ಸಾಗರದ ಅಲೆಗಳು, ಚಿತ್ರ ವಿಚಿತ್ರ ವಿನ್ಯಾಸದ ಗಿಡ ಬಳ್ಳಿಗಳ ಬಳುಕು, ಹಲ ವಿದವಾದ ವರ್ಣಗಳನ್ನು ಧರಿಸುವ ಮೋಡಗಳು, ಆ ಮೋಡಗಳ ವಿನ್ಯಾಸದಿಂದ ಭೂಮಿಯಮೇಲೆ ಬೀಳುವ ನೆರಳಿನಾಕಾರಗಳು, ಹೀಗೆ ಸೃಷ್ಟಿಯ ಹಲವಾರು ವಿಚಿತ್ರಗಳೇ ನಮ್ಮೊಳಗಿನ ರೂಪ ಮತ್ತು ರುಚಿಗಳಿಗೆ ಕಾರಣವಾಗಿವೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 218,
    english:
      '"Nature produces so many things that are rich in beauty, brilliance and taste. It also puts hunger in man and teaches him to savour her products. Once hooked, man takes it further by creating his own combinations and creates more tasty products. But it is nature that taught him his first lessons of taste." - Mankutimma',
    kannada:
      "ಪರಿಪರಿಯ ರೂಪಿನಲಿ ಕಾಂತಿಯಲಿ ರಾಗದಲಿ ।\r\nನೆರೆಯಿಸುತ ಪರಿಪರಿಯ ರಸಗಳಂ ಪ್ರಕೃತಿ ॥\r\nಕೆರಳಿಸುತ  ಹಸಿವುಗಳ, ಸವಿಗಳನು ಕಲಿಸುವಳು ।\r\nಗುರು ರುಚಿಗೆ ಸೃಷ್ಟಿಯಲ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೮ ॥",
    kannada_explanation:
      "ವಿಧ ವಿಧವಾದ ರೂಪಗಳಲ್ಲಿ, ಕಾಂತಿಗಳಲ್ಲಿ, ಹಲವಾರು ಇಂಪಾದ ದನಿಗಳಲ್ಲಿ, ರಸಭರಿತವಾಗಿ ಪ್ರಕಟಗೊಂಡು, ಪ್ರಕೃತಿ, ನಿಸರ್ಗಅವುಗಳಲ್ಲಿಈ ಜಗತ್ತಿನ ಜೀವಿಗಳ ಮನಸ್ಸಿನಲ್ಲಿ ಆಸೆ ಹಸಿವು ಬಯಕೆ ಮತ್ತು ರುಚಿಗಳಂಥಾ ಭಾವಗಳನ್ನು ಉಂಟು ಮಾಡುತ್ತದೆ. ಹಾಗಾಗಿ ಸೃಷ್ಟಿಯೇ ರುಚಿಗಳಿಗೆ ಗುರು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 219,
    english:
      '"The complete truth about the cosmic spirit is vast. What little love and beauty we see (and get happy) in this world are mere waves that reach the shore. The sea of complete love and happiness is the cosmic spirit. Just like the rays of the Sun which is so far is an undeniable proof of the existence of the Sun, the waves are the proof of the existence of that ocean of happiness." - Mankutimma',
    kannada:
      "ಅರೆಯರೆಯ ನಮಗೆ ತೋರ್ಪೊಲವು ಚೆಲುವುಗಳೆಲ್ಲ ।\r\nಪರಿಪೂರ್ಣ ಸುಖ ಸತ್ತ್ವ ಸಾಗರದ ತೆರೆಗಳ್ ॥\r\nತರಣಿ ದೂರದೊಳಿಹನು; ಕಿರಣ ನಮಗೆಟಕುವುದು ।\r\nತೆರೆಯು ನೆರೆತದ ಕುರುಹೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೧೯ ॥",
    kannada_explanation:
      "ನಮಗೆ ಕಾಣುವ ಒಲವು ಚೆಲುವುಗಳೆಲ್ಲ, ಅರೆ ಬರೆ. ಒಂದು ಪರಿಪೂರ್ಣತೆಯ ಅಪೂರ್ಣ ರೂಪ. ಮಹಾನ್ ಸಾಗರದಲ್ಲಿ ಎದ್ದ ತೆರೆಗಳಂತೆ. ಹೇಗೆ ದೂರದಲ್ಲಿರುವ ಸೂರ್ಯನ ಕಿರಣಗಳನ್ನು ಮಾತ್ರ ನಾವು ಕಾಣುತ್ತೇವೆಯೋ, ಹೇಗೆ ಉಕ್ಕುವ ಸಾಗರದ ತೆರೆಗಳನ್ನು ಮಾತ್ರ ನಾವು ನೋಡಲಿಕ್ಕಾಗುತ್ತದೆಯೋ, ಹಾಗೆ ಪರಬ್ರಹ್ಮನ ಈ ಸೃಷ್ಟಿಯಲ್ಲಿಯೂ ಸಹ ನಾವು ನೋಡುವುದು ಕೇವಲ ಹೊರನೋಟ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 220,
    english:
      '"If beauty and compassion (relationship) are not true then what else in this world can be called as truth? Everything else either falls short or breaks down when challenged. Beauty and love are the fragrances of the flower that represents the cosmic spirit. Why is there any doubt about this?" - Mankutimma',
    kannada:
      "ಸೌಂದರ್ಯ ಬಾಂಧವ್ಯಗಳು ಸತ್ಯವಲ್ಲದೊಡೆ ।\r\nಕುಂದುವಡೆಯದ ಸತ್ಯವಿಳೆಯೊಳಿನ್ನೆಲ್ಲಿ? ॥\r\nಗಂಧಾನಿಲಂಗಳವು ಪರಸತ್ತ್ವಪುಷ್ಪದವು ।\r\nಸಂದೇಹವೇನಲವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೌಂದರ್ಯ, ಬಾಂಧವ್ಯಗಳು ಸತ್ಯವಲ್ಲದಿದ್ದರೆ, ಕುಂದದ, ಕಡಿಮೆಯಾಗದ ಸತ್ಯವು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲಿದೆ ಎಂದರೆ ಪುಷ್ಪದಲ್ಲಿ ಉತ್ತಮವಾದ ಸತ್ವದಂತೆ ಬಂದು ಸೇರುವ ಗಂಧದಂತೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಪರಮಾತ್ಮ ತತ್ವದಿಂದ ಈ ಸೌಂದರ್ಯ ಬಾಂಧವ್ಯಗಳೆಲ್ಲ ಬಂದು ಸೇರಿವೆ, ಇದರಲ್ಲಿ ಸಂದೇಹವೇನೂ ಇಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 221,
    english:
      "\"An experience lasting just half a second is enough to soften us. Don't such experiences bring clarity and refines our convictions in life? These experiences could be pleasant or troublesome. But they touch your soul and their effect is real. Can we deny that?\" - Mankutimma\r\n\r\n[Translator's note: This is a question to the people who say that life has to be led entirely objectively based only on facts and feelings are unreal.]",
    kannada:
      "ಅರೆಗಳಿಗೆಯನುಭವವೆ ಮಾನಸವ ಕರಗಿಸದೆ? ।\r\nಪರಿಪಕ್ವಗೊಳಿಸದೇನದು ಜೀವರಸವ? ॥\r\nಉರಿ ತಣಿಪುಗಳಿನಾತ್ಮಸಂಸ್ಕಾರಗಳನೆಸಪ ।\r\nಪುರಳ ಪುಸಿಯೆನ್ನುವೆಯ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೧ ॥",
    kannada_explanation:
      "ಜೀವನದಲ್ಲಿ ಒಂದು ಅರೆಗಳಿಗೆಯಲ್ಲಿ ಆಗುವ ಅನುಭವವು ನಮ್ಮ ಮನಸ್ಸನ್ನು ಕರಿಗಿಸದೆ? ನಮ್ಮಲ್ಲಿ ಹರಿಯುವ ಜೀವರಸವನ್ನು ಪರಿಪಕ್ವಗೊಳಿಸದೇನುಅದು? ಉರಿ ಮತ್ತು ಶೀತಲತೆಗಳು ಆತ್ಮವನ್ನು ಸಂಸ್ಕರಿಸುವ ಆ ತಿರುಳನ್ನು, ಸತ್ವವನ್ನು ಹುಸಿಯನ್ನುತೀಯಾ ನೀನು? ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 222,
    english:
      "\"We always seek something good and beautiful in what we already don't have. We struggle and wander in different direcions seeking the same. Man's mind will drive his life into circles behind these longings. The mind does this to find solace nad peace.\" - Mankutimma",
    kannada:
      "ಆವುದೋ ಒಳಿತೆಂದು ಆವುದೋ ಸೊಗವೆಂದು ।\r\nಆವಾವ ದಿಕ್ಕಿನೊಳಮಾವಗಂ ಬೆದಕಿ ॥\r\nಜೀವ ಪರಿಧಾವಿಪವೊಲ್ ಆಗಿಪಂತರ್ವೃತ್ತಿ ।\r\nಭಾವುಕದ ನೆಲೆಯ ಕರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೨ ॥",
    kannada_explanation:
      "ಯಾವುದೋ ಒಳ್ಳೆಯದೆಂದು ಮತ್ಯಾವುದೋ ಸೊಗಸೆಂದು ಬೇರೆ ಬೇರೆ ದಿಕ್ಕಿನಲ್ಲಿ ಸದಾಕಾಲ ಹುಡುಕುತ್ತಾ ಓಡುವಂತೆ ಮಾಡುವ ನಮ್ಮ ಅಂತರ್ಯಕ್ಕೆ ಇಂಬುನೀಡುವುದು ನಮ್ಮ ನಮ್ಮ ಭಾವನೆಯ ಕೂಗು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 223,
    english:
      "\"A dog can trace his master's footsteps by catching the scent and finally reach him. Man searches for God's artistry just like that in this poor world. The things true and beautiful are the dropped ornaments of Him (lord Shiva).\" - Mankutimma",
    kannada:
      "ಒಡೆಯನಾವೆಡೆ ಸಾರ್ದನೆಂದು ಪದವಾಸನೆಯ ।\r\nತಡಕಿ ಮೂಸುತ ಶುನಕನಲೆದಾಡುವಂತೆ ॥\r\nಬಡಜಗವನೊಳಿತಕೆಂದತ್ತಿತ್ತ ಪುಡುಕಿಸುವ ।\r\nಬೆಡಗು ಶಿವನೊಡವೆಯದೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೩ ॥",
    kannada_explanation:
      "ತನ್ನ ಒಡೆಯ ಎತ್ತ ಹೋದನೆಂದು ಅವನ ಕಾಲ ವಾಸನೆಯನ್ನು ಮೂಸುತ್ತಾ ಅಲೆಯುವ ನಾಯಿಯಂತೆ, ಈ ಜಗತ್ತಿನಲ್ಲಿ ತನಗೆ ಒಳಿತಾವುದು ಎಂದುನಾವುಹುಡುಕುವಂತೆ ಮಾಡುವ ಈ ಲೋಕಮಾಯೆಯೇ ಆ ಪರಶಿವನ ಅಲಂಕಾರದ ಒಡವೆಯೋ ಎಂದು ಒಂದು ಉದ್ಘಾರವನ್ನು ತೆಗೆಯುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 224,
    english:
      '"Want that, want this and want something else. Man runs around the world with this sole thought in his mind since he feels he can be happy after getting that something. Getting that triggers a happy feeling deep in his heart. But he does not realise that the happiness was already there to begin with. There is unlimitted happiness right in his heart if only he can meditate and see it." - Mankutimma',
    kannada:
      "ಅದು ಬೇಕು ಇದು ಬೇಕು ಮತ್ತೊಂದು ಬೇಕೆಂದು ।\r\nಬೆದಕುತಿರುವುದು ಲೋಕ ಸೊಗದಿರವನೆಳಸಿ ॥\r\nಹೃದಯಗುಹೆಯಾ ಸುಖಧ್ಯಾನದೂಟೆಯೆ ಸಾಕ್ಷಿ ।\r\nಮುದಗಳಮಿತದ ನಿಧಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೪ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯರ ಹೃದಯಗಳಲ್ಲಿ ಮಿತಿಯಿಲ್ಲದಸುಖಗಳಆಸೆಯ ಒರತೆ ಅಥವಾ ಊಟೆ ಬತ್ತುವುದೇ ಇಲ್ಲ. ಸದಾಕಾಲಮನಸ್ಸು “ಅದು ಬೇಕು ಇದು ಬೇಕು ಮತ್ತೊಂದು ಬೇಕು” ಎಂದು ಮತ್ತು ಅದು “ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ” ಎಂದು ಹುಡುಕಾಡುತ್ತಲೇಇರುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 225,
    english:
      '"The waves of the sea are relentless. They keep bringing to shore precious things from the bottom of the sea. The cosmic spirit is also relentless like the waves. It flows inside and outside of us for ever and fills us with life." - Mankutimma',
    kannada:
      "ಶರಧಿಯೊಳಗಣ ವಸ್ತುಗಳನಲಚಿ ಜಾಲಿಸುವ ।\r\nತೆರೆಯಂತೆ ವಿಶ್ವಸತ್ತ್ವದ ಲಹರಿ ನಮ್ಮ ॥\r\nಹೊರಗೊಳಗುಗಳಲಿ ಸಂತತ ನೆರೆದು ಹರಿಯುತ್ತ ।\r\nಭರಿಸುತಿರುವುದು ಬಾಳ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೫ ॥",
    kannada_explanation:
      "ಸಮುದ್ರದೊಳಗಿರುವ ವಸ್ತುಗಳನ್ನು ಕೇರಿ ಜಾಲಿಸುವ ಸಾಗರದ ತೆರೆಗಳಂತೆ, ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ತತ್ವಗಳು ನಮ್ಮ ಒಳಗು ಹೊರಗುಗಳಲ್ಲಿ ತುಂಬಿ ಹರಿಯುತ್ತಾ ನಮ್ಮ ಜೀವನವನ್ನು ಭರಿಸುತ್ತಿದೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 226,
    english:
      "\"When a man inhales, the breath makes hims fresh and a 'new' man. The cosmic spirit is the force behind this freshness and makes the 'fresh him' work so that he can distribute the freshness to the rest of the world. This world order is maintained for ever.\" - Mankutimma",
    kannada:
      "ಉಸಿರವೊಲನುಕ್ಷಣಂ ಪುರುಷನೊಳವೊಗುತವನ ।\r\nಪೊಸಬನಂಗೆಯ್ದು ದೈವಿಕಸತ್ತ್ವಮವನುಂ ॥\r\nಪೊಸತನವನ್ ಉಳಿದ ಲೋಕಕೆ ನೀಡೆ ದುಡಿವಂತೆ ।\r\nಬೆಸಸುತಿಹುದೇಗಳುಂ  - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೬ ॥",
    kannada_explanation:
      "ಉಸಿರು ನಮ್ಮ ದೇಹದೊಳಕ್ಕೆ ಹೊಕ್ಕು, ನಮಗೆ ಪ್ರತಿ ಉಸಿರಾಟದಲ್ಲೂ ಒಂದು ಹೊಸತನವನ್ನು ನೀಡುವಂತೆ ಆ ಪರಮಾತ್ಮ ತತ್ವವು ಮನುಷ್ಯನ ಒಳಹೊಕ್ಕು ಅವನಿಗೆ ಹೊಸತನವನ್ನು ನೀಡಿ ಲೋಕಕ್ಕೆ ಹೊಸತನವನ್ನು ನೀಡಲು ದುಡಿಯುವಂತೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ. ಈ ರೀತಿಯ ಪರಸ್ಪರ ಬೆಸುಗೆ ಪರಮಾತ್ಮ ತತ್ವಕ್ಕೂ ಮನುಷ್ಯನಿಗೂ ಸದಾಕಾಲ ಇರುತ್ತದೆ ಎಂದು ಪ್ರತಿಪಾದಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 227,
    english:
      "\"Mankind's progress is measured by trying to achieve freshness, completeness, lack of void. That is very natural. Science, scriptures, arts, poetry and education are all man's way of feeling satisfied with his progress.\" - Mankutimma",
    kannada:
      "ನೂತ್ನತೆಯ ಪೂರ್ಣತೆಯನನ್ಯೂನತೆಯ ಗಳಿಪ ।\r\nಯತ್ನಮೆ ಪೌರುಷಪ್ರಗತಿ; ಅದೆ ಪ್ರಕೃತಿ ॥\r\nವಿಜ್ಞಾನ ಶಾಸ್ತ್ರ ಕಲೆ ಕಾವ್ಯ ವಿದ್ಯೆಗಳೆಲ್ಲ ।\r\nಧನ್ಯತೆಯ ಬೆದಕಾಟ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೭ ॥",
    kannada_explanation:
      "ಹೊಸತನವನ್ನು ಪೂರ್ಣತೆಯನ್ನು ಕುಂದಿಲ್ಲದ್ದನ್ನು ಗಳಿಸುವ ಪ್ರಯತ್ನವೇ ಪುರುಷನ ಪ್ರಗತಿಯ ಪ್ರತೀಕ. ಪ್ರಕೃತಿಯನ್ನು ಆರಾಧಿಸುವುದು, ವಿಜ್ಞಾನ, ಕಲೆ, ಕಾವ್ಯ, ಸಾಹಿತ್ಯ, ಸಂಗೀತ ಮುಂತಾದ ವಿದ್ಯೆಗಳೆಲ್ಲವೂ ಮನುಷ್ಯ ಪರಿಪೂರ್ಣತೆಯಡೆಗೆ ನಡೆಯಲು ಬೇಕಾದ ಸಾಧನಗಳು ಮತ್ತು ಅವುಗಳ ಮೂಲಕವೇ ಪರಿಪೂರ್ಣತೆಯ ಸಾಧನೆ ಸಾಧ್ಯವೆಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 228,
    english:
      "\"The mind wanders in the search of things that are true, auspicious, and fresh. This is what he perceives as 'progress'. In that regard he has come up with his own moral framework, written scriptures, got countries to agree on treaties. All these are small victories of the mind. The real challenge is to reconcile with the inner self and find peace - not the perceived progress\" - Mankutimma",
    kannada:
      "ಮತಿಯು ತಾಂ ಸತ್ಯಶುಭಗಳ ನವನವಾಂಶಗಳ ।\r\nಗತಿಯನರಸುತ ನಡೆಯೆ ಪೌರುಷಪ್ರಗತಿ ॥\r\nಮತ ನೀತಿ ಶಾಸ್ತ್ರಗಳು ರಾಜ್ಯಸಂಧಾನಗಳು  ।\r\nಮತಿಯ ಕಿಂಚಿದ್ವಿಜಯ - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೮ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯ ತನ್ನ ಬುದ್ಧಿಶಕ್ತಿಯನ್ನು ಹೊಸ ಹೊಸ ವಿಚಾರಗಳನ್ನು ಹೊಸಹೊಸ ವಿಷಯ ವಸ್ತುಗಳನ್ನು ಹುಡುಕಲು ಉಪಯೋಗಿಸಿ ನಡೆದರೆ ಪುರುಷ ಪ್ರಗತಿ . ಆ ರೀತಿಯ ಪ್ರಯತ್ನದಲ್ಲಿ ಲಭಿಸಿದ ಅಲ್ಪಮಾತ್ರ ವಿಜಯವೇ ವಿಜ್ಞಾನ, ನೀತಿ ಶಾಸ್ತ್ರಗಳು, ಅವನು ಕಟ್ಟಿದ ರಾಜ್ಯಗಳು ಮುಂತಾದವುಗಳು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 229,
    english:
      "\"The waves in a stream always ebb and fall for ever. So does the energy that drives man's progress. It does not knows to stop. It will not give up the dynamic nature. It's motion is like the perfect pendullum of God.\" - Mankutimma",
    kannada:
      "ತೊರೆಯ ತೆರೆಸಾಲ್ಗಳೇಳುತ ಬೀಳುತಿರುವಂತೆ ।\r\nಪರಿಯುತಿರ್ಪುದು ಪುರುಷಚೈತನ್ಯಲಹರಿ ॥\r\nಅರಿಯದದು ನಿಲುಗಡೆಯ, ತೊರೆಯದದು ಚಲಗತಿಯ ।\r\nಪರಬೊಮ್ಮನುಯ್ಯಲದು - ಮಂಕುತಿಮ್ಮ ॥ ೨೨೯ ॥",
    kannada_explanation:
      "ಪುರುಷ ಚೈತನ್ಯ, ನದಿಯ ತೆರೆಯಂತೆ ಏಳುತ್ತಾ ಬೀಳುತ್ತಾ ಹರಿಯುತ್ತಿದೆ. ಅದಕ್ಕೆ ತನ್ನ ನಿಲುವೆಲ್ಲಿ ಎಂದು ಗೊತ್ತಿಲ್ಲ. ಅದು ತನ್ನ ಚಲನೆಯ ಗತಿಯೂ ಗೊತ್ತಿಲ್ಲ. ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹರಿಯುವ ಪರಮ ಚೈತನ್ಯದ ಚಲನೆ ಆ ಪರಮಾತ್ಮನ ಉಯ್ಯಾಲೆಯಂತಿದೆ ಎಂದು ಬಹಳ ಗಹನ ತತ್ವದ ಪ್ರತಿಪಾದನೆಯನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ .",
  },
  {
    number: 230,
    english:
      '"Man\'s progress is like the waves of a stream. They rise when the cosmic spirit fills them with freshness. When man suffers the consequences of his own actions, the wave falls. Low follows a high and high follows  a low. Alternating between highs and lows is the hall mark of life." - Mankutimma',
    kannada:
      "ತೆರೆಯೇಳುವುದು ದೈವಸತ್ತ್ವ ನರನೊಳು ನೆರೆಯೆ ।\r\nತೆರೆ ಬೀಳುವುದು ಕರ್ಮವಿಧಿಯಿದಿರು ಪರಿಯೆ ॥\r\nತೆರೆಯನಾನುತೆ ತಗ್ಗು, ತಗ್ಗನಾನುತಲಿ ತೆರೆ ।\r\nತೆರೆತಗ್ಗುಗಳಿನೆ ತೊರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೦ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಮನಸ್ಸಿನಲ್ಲಿ ಆ ಪರಮಾತ್ಮ ತತ್ವ ತುಂಬಿದಾಗ ಒಂದು ಆಧ್ಯಾತ್ಮಿಕ ಭಾವ ಉನ್ನತವಾಗಿರುತ್ತದೆ. ಆದರೆ ಬದುಕಿನ ಕೆಲಸಕಾರ್ಯಗಳಲ್ಲಿ ಮಗ್ನರಾದಾಗ ಆ ಭಾವ ಮರೆಯಾಗಿ ನಾವು ಮತ್ತೆ ಪ್ರಾಪಂಚಿಕ ವಿಷಯಗಳಲ್ಲಿ ಬೀಳುತ್ತೇವೆ. ಮತ್ತೆ ಆ ಪಾರಮಾರ್ಥಿಕ ಭಾವ ಮನದಲ್ಲಿ ತುಂಬಿಕೊಂಡಾಗ ಮತ್ತೆ ಮೇಲೇಳುತ್ತೇವೆ ಹೀಗೆ ಏಳುತ್ತಾ ಬೀಳುತ್ತಾ ಸಾಗುವುದೇ ಜೀವನದ ಪ್ರಯಾಣ ಎಂದು ಒಂದು ಸುವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 231,
    english:
      '"High part of today will fall tomorrow. Again it will raise tomorrow in a different spot, in a different form. Only when you see today and tomorrow together, you will realise that it has moved forward. Mankin\'d progress is like that." - Mankutimma',
    kannada:
      "ಇಂದೆದ್ದ ತೆರೆ ನಾಳೆ ಬೀಳುವುದು; ಮರುವಗಲು ।\r\nಮುಂದೆ ತಾನೇಳುವುದು ಬೇರೆ ಗಾತ್ರದಲಿ ॥\r\nಇಂದು ನಾಳೆಗಳನೆಲ್ಲವ ಕೂಡಿ ನೋಡಿದೊಡೆ ।\r\nಮುಂದಹುದು ಬೆರಗೊಂದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೧ ॥",
    kannada_explanation:
      "ಇಂದು ಎದ್ದ ತೆರೆ ಬೀಳುವುದು ಮತ್ತೆ ಮರುದಿವಸ ಇನ್ನೊಂದು ತೆರೆ ಬೇರೆ ಗಾತ್ರದಲಿ ಏಳುವುದು. ಹಾಗೆ ಇಂದು ನಾಳೆಗಳ ಬೇರೆ ಬೇರೆ ಗಾತ್ರದ ತೆರೆಗಳನ್ನೆಲ್ಲ ಒಟ್ಟುಗೂಡಿಸಿದರೆ ಅದರ ಹಿಂದೆ ನಮಗೆ ಒಂದು ವಿಶಾಲವಾದ ಕಡಲು ಕಾಣುವಂತೆ, ನಮ್ಮ ಮನಸ್ಸುಗಳಲ್ಲಿ ಬೇರೆ ಬೇರೆ ರೀತಿಯಲ್ಲಿ, ರೂಪದಲ್ಲಿ, ಗಾತ್ರದಲ್ಲಿ ಮತ್ತು ಬೇರೆ ಸಮಯದಲ್ಲಿ, ಬೇರೆ ಬೇರೆ ಕಾರಣಗಳಿಗೆ ಎಂದ್ದಂತಹ ಪರತತ್ವದ ಭಾವಗಳನ್ನೆಲ್ಲ ಒಟ್ಟು ಮಾಡಿದರೆ ನಮಗೆ ಆ ಪರತತ್ವದಿಂದ ಪ್ರತಿರೂಪವಾದ ಪರಮಾತ್ಮನ ಅರಿವು ಮೂಡುತ್ತದೆ ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಈ ಕಗ್ಗದ ಮೂಲಕ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಮಂಡಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 232,
    english:
      '"These are the only the antics of mankind. Stopping things from going bad, reconstructing things that fall apart. If milk gets spoilt, they churn it and make curds from it. Letting a few things spoil. Renewing the spoilt things by making something new from it." - Mankutimma',
    kannada:
      "ಬೀಳುವುದ ನಿಲ್ಲಿಪುದು, ಬಿದ್ದುದನು ಕಟ್ಟುವುದು ।\r\nಹಾಲೊಡೆಯೆ ಕಡೆದದನು ತಕ್ರವಾಗಿಪುದು ॥\r\nಹಾಳ ಹಾಳಾಗಿಪುದು, ಹಳದ ಹೊಸತಾಗಿಪುದು ।\r\nಬಾಳಿಗಿದೆ ಚಿರಧರ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೨ ॥",
    kannada_explanation:
      "ಬೀಳುವುದನ್ನು ಎತ್ತಿ ನಿಲ್ಲಿಸುವುದು, ಬಿದ್ದುದ್ದನ್ನು ಕಟ್ಟಿ ನಿಲ್ಲಿಸುವುದು, ಹಾಲು ಒಡೆದರೆ( ಮೊಸರಾದರೆ) ಅದನ್ನು ಕಡೆದು ಮಜ್ಜಿಗೆಯನ್ನಾಗಿಸುವುದು, ಯಾವುದಾರೂ ವಸ್ತು ಹಾಳಾದರೆ ಹಾಗೆಯೇ ಬಿಡುವುದು, ಹಳತನ್ನು ಹೊಸದಾಗಿಸುವುದು, ಮುಂತಾದ ಕೆಲಸಗಳನ್ನು ಮಾಡುವುದೇ ಮಾನವನ ಬಾಳಿಗೆ ಶಾಶ್ವತ ಧರ್ಮ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 233,
    english:
      '"There are hundred things crooked in the ways of nature. Collectively mankind has taken a vow to correct them all. But individually their desires are all inter-related and often contradicts with that of others. But many times, the opposites do come together by attraction." - Mankutimma',
    kannada:
      "ಸೃಷ್ಟಿಯ ವಿಧಾನದಲಿ ಸೊಟ್ಟಗಳು ನೂರಿಹುವು ।\r\nನೆಟ್ಟಗಿಪೆನ್ ಅವನ್ ಎಂದು ನರರ ಚಿರದೀಕ್ಷೆ ॥\r\nಇಷ್ಟಗಳನನ್ಯೋನ್ಯವವರೇಕೆ ಬಗೆದಿರರು? ।\r\nನಿಷ್ಠುರಪ್ರಿಯರವರು - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೩ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ವಿಧಾನದಲ್ಲಿ ನೂರಾರು ಸೊಟ್ಟುಗಳು ಅಂದರೆ ಅಂಕು ಡೊಂಕುಗಳು ಇವೆ. ಅದನ್ನು ನೆರವಾಗಿಸಬೇಕೆನ್ನುವುದೇ ಮಾನವನ ಸದಾಕಾಲದ ಇಚ್ಛೆ. ಮನುಷ್ಯರು ಪರಸ್ಪರ ಇಚ್ಛೆಗಳನ್ನು ಅರಿಯಲು ವಿಫಲರಾಗುತ್ತಾರೆ . ಆದರೆ ಜಗತ್ತಿನ ಸೊಟ್ಟಗಳನ್ನು ಸರಿಪಡಿಸಲು ಮನುಷ್ಯ ಮಾಡುವ ಪ್ರಯತ್ನದಲ್ಲಿ ತಾನೂ ನಿಷ್ಠುರನಾಗಿ, ಅನ್ಯರೊಡನೆ ಹಗೆತನವನ್ನು ಕಟ್ಟಿಕೊಳ್ಳುತ್ತಾನೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 234,
    english:
      "\"Why are the two eyes on the same side next to each other? One in the back and another in the front would be very useful. Right? Nature's ways are sometimes strange and at times unfair also. Man's opinions have no value there.\" - Mankutimma",
    kannada:
      "ಕಣ್ಣೆರಡದೇಕೆರಡುಮೊಂದೆ ಪಕ್ಕದೊಳೇಕೆ? ।\r\nಬೆನ್ನೊಳೊಂದೆದೆಯೊಳೊಂದಿರಲು ಸುಕರವಲ? ॥\r\nಅನ್ಯಾಯ ವಿಕಟಂಗಳೆನಿತೊ ಸೃಷ್ಟಿಕ್ರಮದಿ! ।\r\nಸೊನ್ನೆ ಜನವಾಕ್ಕಲ್ಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೪ ॥",
    kannada_explanation:
      "ನಮಗೆ ಎರಡು ಕಣ್ಣುಗಳು ಇವೆ. ಅವರೆಡೂ ಮುಖದಲ್ಲಿ ಪಕ್ಕ ಪಕ್ಕದಲ್ಲಿ ಇವೆ. ಅದು ಏಕೆ ಹಾಗಿದೆ? ಮುಖದಲ್ಲಿ ಒಂದು ಬೆನ್ನಲ್ಲಿ ಒಂದು ಇದ್ದಿದ್ದಿದ್ದರೆ ಸುಲಭವಾಗಿ ಹಿಂದೆ ಮುಂದೆ ಎರಡೂ ಕಡೆ ನೋಡಲು ಆಗುತ್ತಿತ್ತಲ್ಲ, ಎಂದು ಚಿತ್ರವಿಚಿತ್ರವಾಗಿ ಮನುಷ್ಯ ಯೋಚಿಸುತ್ತಾನೆ. ಆದರೆ ಹೀಗೆ ಸೃಷ್ಟಿಕ್ರಮದಲ್ಲಿ ಎಷ್ಟೋ ವಿಚಿತ್ರಗಳು ಇವೆ. ಈ ರೀತಿಯ ಸೃಷ್ಟಿಯ ವಿಚಿತ್ರಗಳನ್ನು ಪ್ರಶ್ನಿಸುವ ಅಧಿಕಾರ ಮನುಷ್ಯನಿಗೆ ಇಲ್ಲ ಎಂಬ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಭಾವವೇ ಈ ಕಗ್ಗದ ಹೂರಣ.",
  },
  {
    number: 235,
    english:
      '"The earth gives man the fruits as nutrition to help him grow. Later it takes back part of what it gives. After death man\'s body gets back into earth. Our bodies are like bowls of kadubu (delicacy). It is the brilliance of the Creator that everything comes around a full circle." - Mankutimma',
    kannada:
      "ಧರೆ ಸಸ್ಯಫಲದಿ ಜೀವಿಗೆ ಪುಷ್ಟಿಯಿತ್ತೊಡೇಂ? ।\r\nಮರಳಿ ತಾಂ ಪಡೆಯಳೇನ್ ಅವನಿನರ್ಧವನು? ॥\r\nಧರಣಿಗೇ ನಮ್ಮೊಡಲು ಹುಯ್ಗಡುಬು ತಪ್ಪಲೆಯೊ! ।\r\nಪರಮೇಷ್ಠಿ ಯುಕ್ತಿಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೫ ॥",
    kannada_explanation:
      'ನಮ್ಮ ಭೂಮಿ ತಾಯಿ ಈ ಸೃಷ್ಟಿಯಲ್ಲಿರುವ ಎಲ್ಲ ಪ್ರಾಣಿಗಳಿಗೂ ಪುಷ್ಟಿಕರವಾದ ಆಹಾರವನ್ನು ಇತ್ತು, ಇತ್ತುದರ ಅರ್ಧವನ್ನು ಮತ್ತೆ ಪಡೆದು ಬಿಡುತ್ತಾಳೆ. "ತನಗೆ ಬೇಕಾದ್ದನ್ನು ನಮ್ಮಲ್ಲಿ ಬೇಯಿಸಿಕೊಳ್ಳಲಿಕ್ಕೆ ನಮ್ಮ ದೇಹವನ್ನೇನಾದರೂ ಹಬೆಯಿಂದ ಮಾಡುವ ಇಡ್ಲಿ ಪಾತ್ರೆಯಂತೆ ಸೃಷ್ಟಿಕರ್ತ ಉಪಯೋಗಿಸುತ್ತಾನೋ?" ಎಂದು ಒಂದು ಪ್ರಶೆಯನ್ನು ಕೇಳಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ \n \n ಒಂದು ಮರದಲ್ಲಿ ಚಿಗುರು, ಹೂ, ಕಾಯಿ, ಹಣ್ಣು ಮತ್ತು ಬೀಜ ಉತ್ಪತ್ತಿಯಾಗಬೇಕಾದರೆ, ಆ ಮರ ತನ್ನ ಬೇರುಗಳ ಮೂಲಕ ಧರೆಯಿಂದ ಸತ್ವವನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ. ಆ ಮರದ ಎಲೆಗಳನ್ನು ಶರದೃತುವಿನಲ್ಲಿ ಉದುರುವಂತೆ ಮಾಡಿ, ಅವು ಮತ್ತೆ ಗೊಬ್ಬರದ ರೂಪದಲ್ಲಿ ಭೂಮಿಗೆ ಸತ್ವವಾಗುವುದರ ಮೂಲಕ, ಭೂಮಿ, ಎಲೆಗಳಿಗೆ ತಾನಿತ್ತ ಸತ್ವದ ಅರ್ದವನ್ನು ತಾನೇ ಪಡೆದು ಮತ್ತೆ ತನ್ನಲ್ಲಿ ಆ ಮರಕ್ಕೆ ಸಾರವನ್ನು ನೀಡುವ ಕ್ಷಮತೆಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳುತ್ತದೆ.',
  },
  {
    number: 236,
    english:
      '"Different kinds of plants, birds and animals - there are hundreds of them. But mankind is different. Every man lives his own world. There is individuality in every one. But, there is sameness in being human and the like for individuality." - Mankutimma',
    kannada:
      "ತರುಜಾತಿ ಖಗಜಾತಿ ಮೃಗಜಾತಿಗಳು ನೂರು ।\r\nನರಜಾತಿ ಮಿಕ್ಕ ಜಾತಿಗಳಿಂದ ಬೇರೆ ॥\r\nನರರೊಳೋರೊರ್ವನುಂ ತಾನೊಂದು ಬೇರೆ ಜಗ ।\r\nಬೆರಕೆ ಸಾಮ್ಯಾಸಾಮ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೬ ॥",
    kannada_explanation:
      "ಗಿಡಗಳ ಜಾತಿ, ಪಕ್ಷಿಗಳ ಜಾತಿ, ಪ್ರಾಣಿಗಳ ಜಾತಿಗಳು ನೂರಾರು ಇವೆ ಆದರೆ ಮನುಷ್ಯ ಜಾತಿ ಇವೆಲ್ಲಕ್ಕಿಂತ ಭಿನ್ನ. ಪ್ರತಿಯೊಬ್ಬ ಮನುಷ್ಯನೂ ಒಂದು ಜಗದಂತೆ ಇದ್ದಾನೆ. ಇವನು ಸಾಮ್ಯದ ಮತ್ತು ಅಸಾಮ್ಯದ ಬೆರಕೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 237,
    english:
      '"Its the same land. But a farmland, a garden or a desert are all different. Water is the same. But some are sweet, salty or hard. People may be from same family. But they may have different characters. Being same as others and being different are all very natural." - Mankutimma',
    kannada:
      "ನೆಲವೊಂದೆ, ಹೊಲ ಗದ್ದೆ ತೋಟ ಮರಳೆರೆ ಬೇರೆ ।\r\nಜಲವೊಂದೆ, ಸಿಹಿಯುಪ್ಪು ಜವುಗೂಟೆ ಬೇರೆ ॥\r\nಕುಲವೊಂದರೊಳೆ ಸೋದರವ್ಯಕ್ತಿಗುಣ ಬೇರೆ ।\r\nಹಲವುಮೊಂದುಂ ಸಾಜ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೭ ॥",
    kannada_explanation:
      "ಮಾನ್ಯಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ಜಗತ್ತಿನ ವೈವಿಧ್ಯತೆಯ ಒಂದು ಆಯಾಮವನ್ನು ನಮಗೆ ಪರಿಚಯ ಮಾಡುತ್ತಾರೆ. ಇಲ್ಲಿ ನೆಲವೊಂದೆ ಆದರೂ ಅದನ್ನು ಹೊಲ, ಗದ್ದೆ, ತೋಟ ಎಂದು ಅಲ್ಲಿನ ಮಣ್ಣಿನ ಗುಣ, ನೀರಿನ ಅನುಕೂಲ. ಮತ್ತು ನೀರಿನ ಗುಣದ ಆಧಾರದಮೇಲೆ ವಿಂಗಡಿಸುತ್ತಾರೆ. ಒಂದೇ ನೆಲವಾದರೂ ಒಂದೇ ರೀತಿಯ ವಾತಾವರಣವಿದ್ದರೂ, ಅಲ್ಲಿ ಬೆಳೆಯುವ ಬೆಳೆಗಳ ಮತ್ತು ಗಿಡಗಳ ವೈವಿಧ್ಯತೆ ಬಹಳ ಅದ್ಭುತ. ಇದು ಸೃಷ್ಟಿಯ ವೈವಿಧ್ಯತೆ. ಒಂದೇ ನೆಲ, ಒಂದೇ ಜಲ ಮತ್ತು ಒಂದೇ ವಾತಾವರಣವನ್ನು ಹಂಚಿಕೊಂಡರೂ ಒಂದು ಮಾವು ಮತ್ತೊಂದು ಬೇವು. ಇದೇ ರೀತಿ ಒಂದೇ ನೆಲವನ್ನು ಹಂಚಿಕೊಂಡ, ಒಂದೇ ನೀರನ್ನು ಕುಡಿವ, ಒಂದೇ ಗಾಳಿಯನ್ನು ಸೇವಿಸುವ ಮನುಷ್ಯ ಮನುಷ್ಯರಲ್ಲಿ ಎಷ್ಟೊಂದು ಬೇಧ ಎಂಬ ವಿಚಾರವನ್ನು ಸುಂದರವಾಗಿ ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಡಿ .ವಿ. ಜಿ ಯವರು",
  },
  {
    number: 238,
    english:
      '"Mankind is thus. Each individual is unique. They may resemble each other in form - body and organs. But in terms of qualities and character, they are all different. In their mind each one lives in their own world (with them as the center). This is the paradox of people being different and the same." - Mankutimma',
    kannada:
      "ಮನುಜಕುಲವೊಂದೊಬ್ಬನಿನ್ನೊಬ್ಬನಂತಿಲ್ಲ ।\r\nತನುವಂಗಗಳೊಳೊಂದು, ರೂಪ ಗುಣ ಬೇರೆ ॥\r\nಮನದೊಳೊಬ್ಬೊಬ್ಬನೊಂದೊಂದು, ಪ್ರಪಂಚವಿಂ ।\r\nತನುವೇಕದೊಳ್ ಬಹುಳ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೮ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯರಲ್ಲಿ ಒಬ್ಬನಿದ್ದಂತೆ ಇನ್ನೊಬ್ಬನಿಲ್ಲ. ದೇಹದ ಅಂಗಾಂಗಗಳೆಲ್ಲ ಒಂದೇ ರೀತಿ ಇದ್ದರೂ ರೂಪ ಬೇರೆ ಮತ್ತು ಗುಣಗಳೂ ಬೇರೆ ಬೇರೆ. ಮನದೊಳಗೆ ಪ್ರತಿಯೊಬ್ಬನದೂ ಒಂದೊಂದು ವಿಚಾರ. ಅದೇ ಒಂದು ಬೇರೆ ಪ್ರಪಂಚವಿದ್ದಂತೆ. ಇಡೀ ಜಗತ್ತೇ ಅನೇಕತೆಯಲ್ಲಿ ಏಕತೆಯ ರೂಪ ಎಂದು ಅನೇಕತೆಯಲ್ಲಿ ಏಕತೆಯ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 239,
    english:
      '"There is very little likeness in the creation. One man is not like the other. This gives the feeling that it is all random. But Nature seems to have a good hold of the whole act and runs it according to a plan. She has no forgiveness. She makes sure that one always faces consequences of his action - good or bad. If you think you can alter any one process in her order, she will challenge you. She is your adversary then. " - Mankutimma',
    kannada:
      "ಸಮವಿಲ್ಲ ಸೃಷ್ಟಿಯಲಿ, ನರನಂತೆ ನರನಿಲ್ಲ ।\r\nಕ್ಷಮೆಯುಮವಳೊಳಗಿಲ್ಲ, ಕರ್ಮದಂತೆ ಫಲ ॥\r\nಕ್ರಮವೊಂದ ನೀಮಾಗಿಸಿರಿ ನೋಳ್ಪೆನಾನೆನುತೆ ।\r\nನಮಗವಳ್ ಪ್ರಸ್ಪರ್ಧಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೩೯ ॥",
    kannada_explanation:
      "ಅಸಮತೆಯೇ ಸೃಷ್ಟಿಯ ಗುಣ. ಹಾಗಾಗಿ ಸೃಷ್ಟಿ ಸಮವಿಲ್ಲ ಅಥವಾ ಸೃಷ್ಟಿಯಲ್ಲಿ ಸಮಾನತೆ ಇಲ್ಲ. ಒಬ್ಬ ಮನುಷ್ಯ ಮತ್ತೊಬ್ಬ ಮನುಷ್ಯನಂತೆ ಇಲ್ಲ. ಪ್ರತಿಯೊಬ್ಬನೂ ಅವನವನ ಕರ್ಮಾನುಸಾರವಾಗಿ ತನ್ನ ಕರ್ಮಫಲವನ್ನು ಅನುಭವಿಸುತ್ತಾನೆ. ಹಾಗೇನಾದರೂ ನಾವೇನಾದರೂಪ್ರಕೃತಿಗೆ ವಿರುದ್ಧವಾಗಿ ನಡೆಯುತ್ತೇನೆಂದು ಸೃಷ್ಟಿಗೆ ಒಂದು ಸ್ಪರ್ಧೆಯನ್ನು ಕೊಟ್ಟರೆ, ಸೃಷ್ಟಿಯೇ ನಮಗೆ ಪ್ರತಿಸ್ಪರ್ಧಿಯಾಗುತ್ತದೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಅರುಹುತ್ತಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 240,
    english:
      '"Look at out fingers. No two of them are alike. For the fingers, it is good to be dissimilar like that. Can the fingers hold any thing firmly if they were all alike? They are good as they are - dissimilar." - Mankutimma',
    kannada:
      "ಬೆರಳುಗಳ ನೋಡವುಗಳೊಂದರಂತೊಂದಿಲ್ಲ ।\r\nಕರಧರ್ಮಕುಚಿತವಾ ಹೆಚ್ಚು ಕಡಮೆಗಳು ॥\r\nಪುರಳ ಪಿಡಿವುವೆ ಬೆರಳ್ಗಳೆಲ್ಲಮೊಂದುದ್ದವಿರೆ? ।\r\nಸರಿಯಹುದು ಕಾರ್ಯದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೦ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಕೈ ಬೆರಳುಗಳು ಒಂದೇ ಉದ್ದವಿಲ್ಲ. ಕೈಗಳು ಮಾಡಬೇಕಾದ ಕೆಲಸಕಾರ್ಯಗಳಿಗೆ ಅವುಗಳ ಉದ್ದದಲ್ಲಿರುವ ಹೆಚ್ಚು ಕಡಿಮೆಗಳು ಸರಿಯಾಗೇ ಇದೆ. ಹಾಗೇನಾದರೂ ಎಲ್ಲ ಬೆರಳುಗಳೂ ಒಂದೇ ಉದ್ದ ಇದ್ದಿದ್ದಿದ್ದರೆ, ನಾವು ಕೈಬೆರಳುಗಳಿಂದ ಯಾವ ವಸ್ತುವನ್ನಾದರೂ ಹಿಡಿಯಲು ಆಗುತ್ತಿತ್ತೇ? ಹಾಗಾಗಿ ಈ ಅಸಮತೆಯು ಕೈಗಳ ಕೆಲಸ ಕಾರ್ಯಗಳಿಗೆ ಸರಿಯಾಗೇ ಇದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 241,
    english:
      '"One attains inner peace when he can see oneness among the dissimilar, when he respect friendship even in the face of danger, when one can come up with a recipe for harmony in chaos, when he is tasteful to find humour in this world filled with misery." - Mankutimma',
    kannada:
      "ಅಸಮದಲಿ ಸಮತೆಯನು ವಿಷಮದಲಿ ಮೈತ್ರಿಯನು ।\r\nಅಸಮಂಜಸದಿ ಸಮನ್ವಯ ಸೂತ್ರ ನಯವ ॥\r\nವೆಸನಮಯ ಸಂಸಾರದಲಿ ವಿನೋದವ ಕಾಣ್ಬ ।\r\nರಸಿಕತೆಯೆ ಯೋಗವಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೧ ॥",
    kannada_explanation:
      "ಸಮವಲ್ಲದ ವಿಷಯದಲಿ ಸಮತೆಯನು ಕಾಣುವುದು,ವಿಷಮದಲಿ ಸ್ನೇಹವನು ಕಾಣುವುದು,ಸಮಂಜಸವಲ್ಲದರಲ್ಲಿ ಸಮನ್ವಯದ ಸೂತ್ರವನ್ನು ಹೆಣೆಯುವುದು, ಸಂಕಷ್ಟಗಳೇ ತುಂಬಿರುವ ಈ ಸಂಸಾರದಲ್ಲಿ ವಿನೋದವನ್ನು ನಗೆಯನ್ನು ಕಾಣುವಂಥಾ ರಸಿಕತೆಯೇ,ಯೋಗವೆಂದು ತಿಳಿಯಬೇಕು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 242,
    english:
      '"Oneness and multiplicity, controlled and independent, logical and illogical, things are achievable by man\'s endeavors and those that are impossible are all mixed up in this picture of the world which is a knotty mess." - Mankutimma',
    kannada:
      "ಐಕ್ಯ ನಾನಾತ್ವಗಳು, ನಿಯತಿ ಸ್ವತಂತ್ರಗಳು ।\nತರ್ಕ್ಯ ನಿಸ್ತರ್ಕ್ಯಗಳು ಬೆರತು ಚಿತ್ರದಲಿ ॥\nಶಕ್ಯಮುಂ ಪುರುಷತಂತ್ರಕ್ಕಶಕ್ಯಮುಮಾದ ।\nಸಿಕ್ಕಗಳ ಕಂತೆ ಜಗ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೨ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಜಗತ್ತುಒಟ್ಟಾದ , ಬೇರೆ ಬೇರೆಯಾದ, ನಿಯಂತ್ರಕ್ಕೊಳಗಾದ, ಸ್ವತಂತ್ರವಾದ, ತರ್ಕಿಸಬಹುದಾದ, ತರ್ಕಕ್ಕೆ ನಿಲುಕದ ವಿಷಯಗಳು ಚಿತ್ರವಿಚಿತ್ರವಾಗಿ ಸಮ್ಮಿಶ್ರವಾಗಿ ಮತ್ತು ಮಾನವರಿಗೆ ಸಾಧ್ಯವಾದ ಮತ್ತು ಅಸಾಧ್ಯವಾದ ವಿಷಯಮತ್ತು ಕಾರ್ಯಗಳಿಂದ ಕೂಡಿದ ಒಗಟು ಒಗಟಾದ, ಗಂಟು ಗಂಟಾದ ವಿಷಯಗಳಿಂದ ಕೂಡಿದೆ ಎಂದು ಹಲವು ವೈವಿಧ್ಯತೆಗಳನ್ನು ಈ ಕಗ್ಗದಲ್ಲಿ ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 243,
    english:
      '"There are only two people who treat every one uniformly. One is Yama, the God of death and the other is the King of stomach (hunger). Hunger will haunt every one and force them to do something or other every day. The other will take every thing away and put an end to everyone." - Mankutimma',
    kannada:
      "ಸಮವರ್ತಿಗಳು ಜಗದೊಳಿಬ್ಬರೇ ದಿಟವರಿಯೆ ।\r\nಯಮರಾಜನೊಬ್ಬ ಜಾಠರರಾಜನೊಬ್ಬ ॥\r\nಶ್ರಮವನನುದಿನಮುಮಾಗಿಪನೊಬ್ಬನೆಲ್ಲವನು ।\r\nಶಮಿಸಿ ಮುಗಿಸುವನೊಬ್ಬ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೩ ॥",
    kannada_explanation:
      'ಈ ಜಗದಲ್ಲಿ ಸಮಭಾವವಿರುವವರು ಇಬ್ಬರೇ. ಒಬ್ಬ ಜಠರರಾಜ.ಇನ್ನೊಬ್ಬ ಯಮರಾಜ. ಒಬ್ಬ ನಮ್ಮೆಲ್ಲರನ್ನೂ ಹೊಟ್ಟೆಯ ಹಸಿವನ್ನು ನೀಗಿಸಿಕೊಳ್ಳಲು ಪ್ರತಿನಿತ್ಯ ಶ್ರಮಪಡುವಂತೆ ಪ್ರೇರೇಪಿಸುವ, ಜಠರದಲ್ಲಿ ಅಡಗಿರುವ ರಾಜ, "ವೈಶ್ವಾನರ" ಮತ್ತು ನಮ್ಮ ಜೀವನದ ಶ್ರಮವನ್ನೆಲ್ಲ ಶಮನಗೊಳಿಸಿ ಜೀವ ಮತ್ತು ದೇಹದ ಸಂಬಂಧವನ್ನು ಅಂತ್ಯಗೊಳಿಸುವವನು ಆ ಯಮರಾಜ. ಈ ಸತ್ಯವನ್ನು ನಾವು ಅರಿತುಕೊಳ್ಳಬೇಕು ಎಂದು ಒಂದು ಜಗತ್ ಸೂಕ್ಷ್ಮವನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 244,
    english:
      '"Who does not appreciate the virtue of non-violence as a philosophy. Problems arise only when we start following it and intend not to harm any one. Can a tiger stop eating a deer and live on dry grass? There is no place for compassion in this nature." - Mankutimma',
    kannada:
      "ಒಲ್ಲೆನೆನುವರದಾರ್ ಅಹಿಂಸೆತತ್ತ್ವದ ಸೊಬಗ? ।\r\nಸಲ್ಲಿಸುವೆನಾ ವ್ರತವನೆನಲೊಂದು ತೊಡಕು ॥\r\nಹುಲ್ಲೆಯನು ತಿನುವ ಹುಲಿಯೊಣಹುಲ್ಲನುಣಲಹುದೆ ।\r\nಎಲ್ಲಿ ಸೃಷ್ಟಿಯಲಿ ದಯೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೪ ॥",
    kannada_explanation:
      "ಅಹಿಂಸೆಯ ಪ್ರತಿಪಾದನೆಯನ್ನು ಬೇಡವೆನ್ನುವವರು ಯಾರು. ಆದರೆ ಅಹಿಂಸಾ ವ್ರತ ಪಾಲನೆಯಲ್ಲಿ ತೊಡಕಿದೆ. ತನ್ನ ಆಹಾರಕ್ಕೆ ಜಿಂಕೆ ಮತ್ತಿತರ ಮೇಲೆ ಅಧಾರ ಪಟ್ಟಿರುವ, ಹುಲಿಯು ಹುಲ್ಲ ತಿಂದು ಜೀವಿಸಲಿಕ್ಕೆ ಆಗುತ್ತದೆಯೇ. ಈ ಸೃಷ್ಟಿಯಲಿ ದಯೆ ಎಲ್ಲಿದೆ? ಎಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 245,
    english:
      '"You may call a tiger cruel and a murderer. But does it not care for its own cubs? It shows that it is capable of love that is hidden in its belly - deep inside its body that shows off only hatred. So is the innate nature of man. But his greatness is in getting the love out into open. That love is also a means to enrich his soul." - Mankutimma',
    kannada:
      "ಕೊಲೆಗಡಿಕನೆನಿಪ ಹುಲಿ ಸಲಹದೇಂ ಮರಿಗಳನು? ।\r\nಒಲುಮೆಕರುಳಡಗಿಹುದು ಪಗೆತನದ ಪೊಡೆಯೊಳ್ ॥\r\nನಲುಮೆಯನು ಹೊರಹೊಮ್ಮಿಸುವುದು ನರನುನ್ನತಿಕೆ ।\r\nಒಲವಾತ್ಮವಿಸ್ತರಣ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೫ ॥",
    kannada_explanation:
      "ಕೊಲೆಗಡುಕ ಪ್ರಾಣಿಯೆಂದು ಹೆಸರ ಪಡೆದ ಹುಲಿ, ಪ್ರೀತಿಯಿಂದ ತನ್ನ ಮರಿಗಳನ್ನು ಸಲಹುವುದಿಲ್ಲವೇ? ಆದ್ದರಿಂದ ಒಲುಮೆ ಮತ್ತು ಹಗೆತನ ಎರಡೂ ಅಂತರ್ಯದಲ್ಲಿರುತ್ತದೆ. ಅವರವರ ಅವಶ್ಯಕತೆಯಂತೆ ಭಾವಗಳನ್ನು ಹೊರಗೆ ವ್ಯಕ್ತಪಡಿಸುದು ಸಹಜ. ಹಾಗೆ ನಲುಮೆಯನ್ನು ವ್ಯಕ್ತಪಡಿಸುವುದು ನರನ ಔನ್ನತ್ಯ. ಆತ್ಮದ ಗುಣವೇ ಆನಂದವಾದ್ದರಿಂದ ಒಲವನ್ನು ತೋರುವುದು ಆತ್ಮದ ಗುಣ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 246,
    english:
      '"In this world there are seeds of love, just like there are seeds of hatred. Just like there is peace and calm, there is misery and turmoil in this nature. Seeing all these contradictions in this creation, our mind may wander. But we must strive to search for the truth that unifies them all." - Mankutimma\r\n\r\n[Translator\'s note: Scientists are still struggling to find a unified theory that explains gravitation, electro magnetic forces, subatomic forces - strong and weak.]',
    kannada:
      "ಪ್ರೇಮಬೀಜಗಳಿಹುವು ವೈರಬೀಜಗಳವೊಲೆ ।\r\nಸೌಮ್ಯಮುಂ ಸಂಕ್ಷೋಭೆಯಂತೆ ಪ್ರಕೃತಿಯಲಿ ॥\r\nಭ್ರಾಮಕದ ಸೃಷ್ಟಿಯಾ ವಿಷಮಲಕ್ಷಣಗಳಲಿ ।\r\nಸಾಮರಸ್ಯವನರಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೬ ॥",
    kannada_explanation:
      "ಈ ಪ್ರಕೃತಿಯಲಿ, ಸೌಮ್ಯ ಮತ್ತು ಸಂಕ್ಷೋಭೆಯ ಭಾವಗಳಿರುವಂತೆ, ಪ್ರೇಮಕ್ಕೆ ಮತ್ತು ದ್ವೇಷಕ್ಕೂ ಕಾರಣಗಳಿವೆ. ಭ್ರಮೆಯನ್ನುಂಟುಮಾಡುವಂಥಾ ಸೃಷ್ಟಿಯ ಬೇರೆ ಬೇರೆ ಲಕ್ಷಣಗಳಲ್ಲಿ, ನೀನು ಸಮರಸವನ್ನು ಹುಡುಕು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 247,
    english:
      '"Worries in life travel from mind to mind when people exchange their thoughts and fears. Just like wind carries smoke from house to house. The beauty of this world is that minds of men feed on each others anxiety and creates spectacle. Mind is a miracle." - Mankutimma',
    kannada:
      "ಮನದಿಂದ ಮನಕೆ ಪಾರ್ವುದು ಬಾಳಿನುರಿಯ ಕಿಡಿ ।\r\nಮನೆಯಿಂದ ಮನೆಗಲೆವ ಗಾಳಿ ಹೊಗೆಯಂತೆ ॥\r\nಮನುಜರ ಪರಸ್ಪರೋದ್ರೇಕ ಜಗದ ವಿಲಾಸ ।\r\nಮನವೆ ಪರಮಾದ್ಭುತವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೭ ॥",
    kannada_explanation:
      "ಒಂದು ಮನೆಯಲ್ಲಿ ಹಚ್ಚಿದ ಒಲೆಯ ಹೊಗೆ ಮತ್ತೊಬ್ಬರ ಮನೆಗೂ ನುಗ್ಗುವಂತೆ,ಒಬ್ಬರ ಮನಸ್ಸಿನ ಬೇಗೆ ಮತ್ತೊಬ್ಬರ ಮನಸ್ಸಿಗೆ ತಾಗುತ್ತದೆ. ಹೀಗ ಜಗತ್ತಿನಲ್ಲಿನ ಮನುಷ್ಯರ ಪರಸ್ಪರ ಉದ್ರೇಕಗಳ ವಿಲಾಸಕ್ಕೆ ಕಾರಣವಾದ ಮನುಷ್ಯನ ಮನಸ್ಸು ಪರಮಾತ್ಮನ ಅದ್ಭುತ ಸೃಷ್ಟಿಗಳಲ್ಲಿ ಒಂದು, ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು",
  },
  {
    number: 248,
    english:
      '"There are many taxes that are due to nature from us (and rightly so). If you forget to pay, then she will punish. But she has all the apparatus needed to make progress. We should use them in moderation and pay her the rent for them." - Mankutimma',
    kannada:
      "ತೆರಿಗೆಗಳು ಹಲವುಂಟು ಪ್ರಕೃತಿಗಂ ಸಲ್ಲುವುವು ।\r\nತೆರದೆ ನೀಂ ಮರೆಯೆ ದಂಡಿಪಳಾಕೆ ಮುನಿದು ॥\r\nಕರಣಂಗಳಾಕೆಯವು ಮಿತದೊಳವುಗಳ ಬಳಸಿ ।\r\nತೆರು ಸಲುವ ಬಾಡಿಗೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೮ ॥",
    kannada_explanation:
      "ನಾವು ಈ ಜಗತ್ತಿನಲ್ಲಿ ವಾಸಿಸುವಾಗ ತೆರಬೇಕಾದ ತೆರಿಗೆಗಳು ಹಲವಾರು ಉಂಟು. ಅವುಗಳಲ್ಲಿ ಪ್ರಕೃತಿಗೂ ಕೆಲವು ಸಲ್ಲುವುವು. ಅವುಗಳನ್ನೇನಾದರೂ ಸಲ್ಲಿಸದೆ ಇದ್ದರೆ ಪ್ರಕೃತಿ ವಿಧಿಸುವ ಶಿಕ್ಷೆಗೆ ಗುರಿಯಾಗಬೇಕು. ಪ್ರಕೃತಿ ದತ್ತವಾದ ಎಲ್ಲವೂ ನಮಗೆ ಜೀವಿಸುವುದಕ್ಕೆ ಉಪಕರಣಗಳಿದ್ದಂತೆ. ಅವುಗಳನ್ನು ಮಿತವಾಗಿ ಬಳಸಿಕೊಳ್ಳಬೇಕು ಮತ್ತು ಅದಕ್ಕೆ ಸಲ್ಲಬೇಕಾದ ಬಾಡಿಗೆಯನ್ನು ನೀಡಲೇಬೇಕು ಎಂದು ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಮ್ಮ ಜೀವನ ಹೇಗಿರಬೇಕೆಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಸೂಚಿಸಿದ್ದಾರೆ ಈ ಕಗ್ಗದಲ್ಲಿ .",
  },
  {
    number: 249,
    english:
      '"One may say - all life is a waste, futile. But having said so, is there any one smart enough to free himself from its bondage? Misery or battle, happiness or sadness - one has to live his life. Life does not give you a choice not to." - Mankutimma',
    kannada:
      "ಹಾಳು ಹಾಳೆಲ್ಲ ಬಾಳೆನ್ನುತಿರ್ದೊಡೆಯುಮದ-  ।\r\nರೂಳಿಗವ ತಪ್ಪಿಸುವ ಜಾಣನೆಲ್ಲಿಹನು? ॥\r\nಊಳಿಗವೊ ಕಾಳಗವೊ ಕೂಳ್ಕರೆಯೊ ಗೋಳ್ಕರೆಯೊ ।\r\nಬಾಳು ಬಾಳದೆ ಬಿಡದು - ಮಂಕುತಿಮ್ಮ ॥ ೨೪೯ ॥",
    kannada_explanation:
      'ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇರುವ ಮನುಷ್ಯರೆಲ್ಲಾ ಯಾವುದಾದರೂ ಒಂದು ರೀತಿಯ ಸಂಕಷ್ಟಗಳಿಗೆ ಸಿಕ್ಕು " ಅಯ್ಯೋಈ ಬಾಳೆಲ್ಲ ಹಾಳು " ಎಂದು ಈ ಜೀವನವನ್ನು ಹಳಿಯುತ್ತಿದ್ದರೂ, ಈ ಜಂಜಡದ ಬದುಕಿನಲ್ಲಿ ಜೀವಿಸುವುದನ್ನು ತಪ್ಪಿಸಿಕೊಂಡಂಥಾ ಜಾಣನೆಲ್ಲಿಹನು? ಪರಿರಿಗೆ ಊಳಿಗವನ್ನೋ, ಕಾಳಗವನ್ನೋ ಹೊಟ್ಟೆಪಾಡಿಗಾಗಿ ಗೋಳಾಡುತ್ತಲಾದರೂ ಈ ಜಗತ್ತಿನ ಪ್ರತೀ ಜೀವಿಯೂ ಬಾಳಲೇ ಬೇಕು ಎಂದು ಬದುಕಿನಒಂದು ಅನಿವಾರ್ಯತೆಯನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.',
  },
  {
    number: 250,
    english:
      '"Life is a precious wealth. But that belongs the creator. We are living it only to materialize His whims and wishes. In this process we exchange so many things with other fellow creatures. But how can we separate who is the giver or who is the taker, when all of them are part of the same One. All of your experiences - good or bad - are just handed over to you by Him." - Mankutimma',
    kannada:
      "ಜೀವನವದೊಂದು ಪರಮೈಶ್ವರ್ಯ ಬೊಮ್ಮನದು ।\r\nಸೇವೆಯದನೂರ್ಜಿತಂಗೊಳಿಸುವೆಲ್ಲೆಸಕ ॥\r\nಈವರಾರ್ ಕೊಳುವರಾರೆಲ್ಲರೊಂದಾಗಿರಲು? ।\r\nನೈವೇದ್ಯಭಾಗಿ ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತು ಮತ್ತು ಇಲ್ಲಿ ನಡೆಯುವ ಜೀವಿಗಳ ಜೀವನವು ಆ ಪರಮಾತ್ಮ ತನ್ನ ವಿನೋದಕ್ಕಾಗಿ ಸೃಷ್ಟಿಸಿಕೊಂಡ ಸಂಪತ್ತು. ಇದು ಅವನಿಗೆ ಸೇರಿದ್ದು. ಇಲ್ಲಿರುವ ಎಲ್ಲ ಜೀವಿಗಳೂ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇದ್ದು ಅನುಭವಿಸಿ, ತಮ್ಮ ಎಲ್ಲ ಕೆಲಸಗಳನ್ನೂ ಅದನ್ನು ಊರ್ಜಿತಗೊಳಿಸುವುದರಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಬೇಕು. ಎಲ್ಲವೂ ಅವನದೇ ಆಗಿ ಎಲ್ಲವೂ ಅವನೇ ಆಗಿರುವಾಗ ಇಲ್ಲಿ ಕೊಡುವವನೂ ಮತ್ತು ತೆಗೆದುಕೊಳ್ಳುವವನೂ ಬೇರೆ ಬೇರೆ ಅಲ್ಲ.ಈ ಜಗತ್ತಿನ ಸಕಲ ಪ್ರಾಣಿಗಳ ಜೀವನವನ್ನು ಸಮಗ್ರ ಬಾಳಿನ ನೈವೇದ್ಯದಂತೆ ಆ ಪರಮಾತ್ಮನಿಗೆ ನಿವೇದನೆ ಮಾಡುತ್ತಿರುವಾಗ ನಾವೆಲ್ಲಾ ಅದರೊಳಗೆ ಒಂದು ಭಾಗವನ್ನು ಹಂಚಿಕೊಂಡಿದ್ದೇವೆ ಎನ್ನುತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 251,
    english:
      '"The roots are above its head. Below are the branches and the fresh sprouts. The shoots that supports it are countless. There is neither a beginning nor any end to this banyan tree. Just like the tree, mankind (and the rest of nature) grows unhindered. The creator is just revelling in his own creation." - Mankutimma',
    kannada:
      "ತಲೆಯಮೇಗಡೆ ಬೇರು, ಕೆಳಗೆ ಕೊಂಬೆಲೆ ಚಿಗುರು ।\r\nಬಿಳಲೂರೆಗಳ ಲೆಕ್ಕಕಿಲ್ಲ ಕೊನೆ ಮೊದಲು ॥\r\nಬೆಳೆವುದೀ ಪರಿಯರಳಿಮರದಂತೆ ನರಕೋಟಿ ।\r\nನಲಿವನದರಲಿ ಬೊಮ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೧ ॥",
    kannada_explanation:
      "ಒಂದು ಅರಳಿ ಮರದ ಕೊಂಬೆಯಿಂದಬಿಳಲುಗಳು ಹೊರಟು ಭೂಮಿಯನ್ನು ಮುಟ್ಟಿ, ಮತ್ತೆ ಭೂಮಿಯೊಳಕ್ಕೆ ನುಸುಳುತ್ತದೆ. ಇದು ಮೇಲಿನ ಬೇರು ಆ ಬೇರು ಮೇಲಿದ್ದು ಕೊಂಬೆಗಳು, ಎಲೆಗಳು ಮತ್ತು ಚಿಗುರು, ಅರಳೀ ಮರದಲ್ಲಿ ಕೆಳಗಿರುತ್ತದೆ. ಅದೇ ರೀತಿ ಜೀವ ಧರಿಸಿದ ದೇಹ ಹಳತಾಗುತ್ತದೆ, ಮೇಲಿದ್ದರೂ ಮುಂದೆ ವಂಶದಲ್ಲಿನ ಅನ್ಯ ಶಾಖೆಗಳಿಗೆ ಮತ್ತು ಚಿಗುರಂಥ ಮಕ್ಕಳು ಮೊಮ್ಮಕಳಿಗೆ ಬೇರಂತೆ ಆಧಾರವಾಗಿರುತ್ತದೆ. ಇಂತಹ ಕೋಟಿ ಕೋಟಿ ಮರಗಳ ಬೇರುಗಳ ಕೊಂಬೆಗಳ ಮತ್ತು ಚಿಗುರುಗಳ ಪ್ರತಿರೂಪವಾದ ಕೋಟಿ ಕೋಟಿ ನರರಿರುವ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಪರಮಾತ್ಮ ನಲಿವಿನಿಂದ ಆನಂದದಿಂದ ನಲಿಯುತ್ತಾನೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 252,
    english:
      '"If one branch wilts, another one sprouts. Thus this banyan tree is bestowed with endless freshness. This tree will be like this for ever and every day. You are just one branch of it." - Mankutimma',
    kannada:
      "ಒಂದು ಕೊಂಬೆಯು ಬಾಡಲಿನ್ನೊಂದು ಚಿಗುರುವುದು ।\r\nಸಂದಿಹುದು ಚಿರನವತೆಯಶ್ವತ್ಥಮರಕೆ ॥\r\nಎಂದೆಂದುಮಂತಿರುವುದೀ ವಿಶ್ವವೃಕ್ಷವದ ।\r\nರೊಂದು ರೆಂಬೆಯೊ ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೨ ॥",
    kannada_explanation:
      "ಅಶ್ವತ್ಥಮರದ ಒಂದು ಕೊಂಬೆ ಒಣಗಿದರೆ ಮತ್ತೊಂದು ಚಿಗುರುತ್ತದೆ.ಹೇಗೆ ಆ ಮರವು ತನ್ನ ಚಿರನೂತನತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುತ್ತದೋ, ಹಾಗೆಯೇ ಸಕಲ ಜೀವರಾಶಿಗಳಿಂದ ಕೂಡಿದ ಈ ಜಗತ್ತೆಂಬ ವಿಶ್ವ ವೃಕ್ಷವೂ ಎಂದೆಂದೂ ಬಾಡದೆ ಇರುತ್ತದೆ. ಅಂತಹ ವಿಶ್ವವೃಕ್ಷದ,ಒಂದು ರೆಂಬೆ ನೀನೆಂದು ತಿಳಿ, ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 253,
    english:
      '"Everyday one must tend to this tree as much or as little life permits. He must make the root stable, take out the weeds, pour water. The tree takes strength from this care and gives out beautiful sprouts and grows. It is best if we stand at the service of this tree that symbolises our entire world." - Mankutimma',
    kannada:
      "ಅಂದಂದಿಗಾದನಿತು ಬುಡ ಕಟ್ಟಿ ಕಳೆ ತೆಗೆದು ।\r\nಚೆಂದಳಿರು ದಿನದಿನಮುಮೊಗೆಯೆ ನೀರೆರೆದು ॥\r\nಸಂದ ಬಲದಿಂದ ಜಗದಶ್ವತ್ಥ ಸೇವೆಯಲಿ ।\r\nನಿಂದಿರುವುದಲೆ ಧರ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೩ ॥",
    kannada_explanation:
      "ಇದು ನಮಗೆ ಜೀವಿಸುವ ಬಗೆಯ ತತ್ವವನ್ನು ಬೋಧಿಸುವ ಕಗ್ಗ. ಒಂದು ಸಣ್ಣ ಅರಳೀ ಸಸಿಯನ್ನು ತಂದು, ಭೂಮಿಯಲ್ಲಿ ಗುಣಿ ತೋಡಿ, ಸಸಿ ನೆಟ್ಟು, ಪ್ರತಿನಿತ್ಯ ಬೊಗಸೆ ಬೊಗಸೆಯಲ್ಲಿ ನೀರನ್ನು ಎರೆದು, ಕಳೆ ತೆಗೆದು ಅದನ್ನು ಕಾಪಾಡಿ ಒಂದು ಬೃಹತ್ವೃಕ್ಷವನ್ನಾಗಿಸಿದಂತೆ, ಈ ಜಗದಶ್ವತ್ಥದ ಸೇವೆಯಲಿ ನಿಲ್ಲುವುದೇ ಧರ್ಮವೆನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 254,
    english:
      '"Look at the drama happening on the stage of the Universe. Crores o people are playing colorful characters. This drama has no plot, no beginning and no ending. Here, the audience are also part of the act and play characters." - Mankutimma',
    kannada:
      "ನಾಟಕವ ನೋಡು ಬ್ರಹ್ಮಾಂಡರಂಗಸ್ಥಲದಿ ।\r\nಕೋಟಿ ನಟರಾಂತಿಹರು ಚಿತ್ರಪಾತ್ರಗಳ ॥\r\nಆಟಕ್ಕೆ ಕಥೆಯಿಲ್ಲ ಮೊದಲಿಲ್ಲ ಕಡೆಯಿಲ್ಲ ।\r\nನೋಟಕರು ಮಾಟಕರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೪ ॥",
    kannada_explanation:
      "ಇಡೀ ಬ್ರಹ್ಮಾಂಡವೇ ಒಂದು ರಂಗಸ್ಥಳ. ಈ ರಂಗಸ್ಥಳದಲ್ಲಿ ನಡೆಯುವ ನಾಟಕವ ನೋಡು. ಈ ನಾಟಕದಲ್ಲಿ ಚಿತ್ರ ವಿಚಿತ್ರ ಪಾತ್ರಗಳ ಧರಿಸಿ ಕೋಟಿ ಕೋಟಿ ನಟರು ತಮ್ಮ ತಮ್ಮ ಪಾತ್ರಗಳ ಧರಿಸಿದ್ದಾರೆ. ಈ ನಾಟಕದ ಕಥೆಗೆ ಮತ್ತು ಇಲ್ಲಿ ನಡೆಯುವ ಪ್ರತಿಯೊಂದೂ ಅಂಕಕ್ಕೂ, ಮೊದಲಿಲ್ಲ, ಕೊನೆಯಿಲ್ಲ. ಎಲ್ಲರೂ ಪಾತ್ರಧಾರಿಗಳಾಗಿಯೂ ಪ್ರೇಕ್ಷಕರಾಗಿಯೂ ಇದ್ದಾರೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 255,
    english:
      '"The only way to be happy in this world is to realize that it is a drama played on a stage and immerse in it completely from the very beginning (of self). One must play his part to the fullest of his abilities to entertain others. At the same time, he must realize that he is also a spectator for the play and enjoy some scenes that he witnesses - irrespective of it being a comedy or a tragedy. If you learn this lesson, then you will be the master who rules your life. Even though this drama does not have a plot, a beginning or an end, it does have rules." - Mankutimma',
    kannada:
      "ನಾಟಕದೊಳನುವಿಂದ ಬೆರತದನು ಮೆಚ್ಚೆನಿಸಿ ।\r\nನೋಟಕನುಮಾಗಿ ತಾಂ ನಲಿದು ನಲಿಯಿಸುವಾ ॥\r\nಪಾಠವನು ಕಲಿತವನೆ ಬಾಳನಾಳುವ ಯೋಗಿ ।\r\nಆಟಕಂ ನಯವುಂಟು - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೫ ॥",
    kannada_explanation:
      "ಈ ಜಗನ್ನಾಟಕದಲ್ಲಿ ಪಾತ್ರಧಾರಿಗಳಾದ ನಾವುಗಳು ಈ ನಾಟಕದೊಳಕ್ಕೆ ಸಿದ್ಧರಾಗಿ ಪಾತ್ರ ಧರಿಸಿ, ನಮ್ಮ ಪಾತ್ರವನ್ನು ಮೆಚ್ಚಿಕೊಂಡು, ನಟನಾಗಿಯೂ ಪ್ರೇಕ್ಷಕನಾಗಿಯೂ, ತನ್ನ ಪಾತ್ರವನ್ನು ನಿಭಾಯಿಸಿ ಆ ಪಾತ್ರದಲ್ಲಿ ತಾನೂ ನಲಿದು ಅನ್ಯರಿಗೂ ಸಂತಸವನ್ನು ನೀಡುವಂಥಾ ಪಾಠವನ್ನು ಕಲಿತರೆ ಯೋಗಿ. ಈ ಜಗನ್ನಾಟಕಕ್ಕೂ ಒಂದು ನಿಯಮ ಉಂಟು ಎಂದು ಮನುಷ್ಯರ ಬಾಳನ್ನು ಬಹಳ ಸುಂದರವಾಗಿ ವಿಶ್ಲೇಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 256,
    english:
      '"Having kept your sight on the other world (calling it better), you consider this world to be inferior (and not worthy of efforts). If you give up efforts in this world then how can you get good results in the other world? You are trying to keep a ladder to climb up to a rainbow and forgetting about the small beautiful flower in your backyard." - Mankutimma',
    kannada:
      "ಪರದ ಮೇಲ್ಕಣ್ಣಿಟ್ಟು ಧರೆಯ ತುಚ್ಛವೆನುತ್ತ ।\r\nತೊರೆದಾಯಸಂಗೊಳ್ಳೆ ದೊರೆವ ಫಲವೇನು? ॥\r\nಸುರಧನುವಿಗೇಣಿಯಿಡಹೊರಟು ನಿನ್ನಂಗಳದ ।\r\nಕಿರಿಹೂವ ಮರೆಯುವೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೬ ॥",
    kannada_explanation:
      'ನಾವು, ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹುಟ್ಟಿ, ಇದು ಕಳಪೆಯಾಗಿದೆ, ಇದು ಕೀಳು, ಎನ್ನುತ್ತಾ, ನಮಗೆ ಗೊತ್ತಿಲ್ಲದ ಆ ಸ್ವರ್ಗಕ್ಕೆ ಅಥವಾ ಸುರಲೋಕಕ್ಕೆ ಆಸೆಪಟ್ಟು, ಇದನ್ನು ತೊರೆದರೆ ಏನು ಫಲ? "ಆಕಾಶದಲ್ಲಿನ ಕಾಮನ ಬಿಲ್ಲಿಗೆ ಆಸೆಪಟ್ಟು ನಿನ್ನ ಮನೆಯ ಅಂಗಳದಲ್ಲಿ ಅರಳಿದ ಒಂದು ಸಣ್ಣ, ಆದರೂ ಸುಂದರ ಹೂವನ್ನು ಕಡೆಗಣಿಸುವೆಯಾ?" ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 257,
    english:
      '"If you agree that a good after-life (in another world) is based on what we do in this world now. Then, how can we belittle what we do here? Actions here are as important as in the other world. In order to pass to the next, we have to bear all the troubles (and happiness) in this world without any exception. Then why frown up on this world?" - Mankutimma',
    kannada:
      "ಪರಕಿಹವೆ ಸೋಪಾನವೆಂದು ನೀನೊಪ್ಪುವೊಡೆ ।\r\nಪರಕಿಂತಲಿಹವೆಂತು ಜೊಳ್ಳದಾದೀತು? ॥\r\nಹೊರಲೆಬೇಕಂತಾದೊಡಿಹದ ಹೊರೆಗಳನೆಲ್ಲ ।\r\nಜರೆವುದೇಕಿನ್ನದನು? - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೭ ॥",
    kannada_explanation:
      "ಪರವನ್ನು ಸೇರಲು ಇಹವೆ ಮೆಟ್ಟಿಲು ಎಂದು ನೀನು ಒಪ್ಪುವುದಾದರೆ, ಇಹವು ಪರಕ್ಕಿಂತ ಜೋಳ್ಳಾಗುವುದೆಂತು? ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಾವು ಬಂದಮೇಲೆ, ನಮ್ಮ ಬದುಕಿನ ಹೊರೆಗಳನ್ನು ಹೊರಲೆಬೇಕು ಎಂದು ಆದರೆ ಈ ಇಹದ ಬದುಕನ್ನು ಹಳಿಯುವುದು ಏಕೆ ? ಎಂದು ಒಂದು ಬದುಕಿನ ಸೂಕ್ಷ್ಮ ವಿಚಾರವನ್ನು ವಿಮರ್ಶೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 258,
    english:
      "\"Don't say no to Life. Don't be ignorant of love. Cut yourself a little slack and make room for liesure. Don't worry about the injustices meted out to you. Face them with courage and be ready for everything.\" - Mankutimma",
    kannada:
      "ಒಲ್ಲೆನೆನದಿರು ಬಾಳನ್, ಒಲವದೇನೆನ್ನದಿರು ।\r\nಉಲ್ಲಾಸಕೆಡೆಮಾಡು ನಿನ್ನನಾದನಿತು ॥\r\nನಿಲ್ಲು ಕೆಚ್ಚೆದೆಯಿಂದಲನ್ಯಾಯಗಳನಳಿಸೆ ।\r\nಎಲ್ಲಕಂ ಸಿದ್ಧನಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೮ ॥",
    kannada_explanation:
      'ಈ ಬಾಳನ್ನು ಬೇಡ ಎನ್ನದಿರು. "ಈ ಜೀವನದ ಮೇಲೆ ಏಕಿಷ್ಟು ಒಲವು" ಎನ್ನದಿರು. ನಿನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ಸಂತೋಷಕ್ಕೆ ಎಡೆಮಾಡಿಕೊಡು. ನಿನ್ನ ಕೈಲಾದಷ್ಟು ಸ್ಥಿರವಾಗಿ,ದೈರ್ಯವಾಗಿ ನಿಂತು ಜಗತ್ತಿನ ಅನ್ಯಾಯಗಳನ್ನು ಅಳಿಸಲು, ಎಲ್ಲ ರೀತಿಯ ಪರಿಸ್ಥಿತಿಗಳನ್ನೂ ಎದುರಿಸಲು ಸದಾ ಸಿದ್ದನಿರು ಎಂದು ಒಂದು ಸ್ಪಷ್ಟ ಆದೇಶವನ್ನು ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 259,
    english:
      '"The Gods and Demons churned the sea from their muscle strength and got amazing returns. From the strength derived from his penance Agasthya could drink the entire ocean. These were great men who could accomplish the feats with ease. But lesser mortals can not achieve greatness without struggle. Its like living a forest where every day is a struggle." - Mankutimma',
    kannada:
      "ಕಡಲ ಕಡೆದರು ಸುರಾಸುರರು ನಿಜಬಲದಿಂದ ।\r\nಕುಡಿದನದನು ತಪಸ್ಸಿನಿಂದ ಕುಂಭಜನು ॥\r\nಕಡಮೆಜನ ಪಾರಗಾಂಬರೆ ಗಾಸಿಯನು ಪಡದೆ? ।\r\nಪೊಡವಿ ಬಾಳ್ವೆಯುಮಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೨೫೯ ॥",
    kannada_explanation:
      "ಅಮೃತವನ್ನು ಪಡೆಯಲು ಸುರರು ಮತ್ತು ಅಸುರರು ಸಮುದ್ರಮಂಥನವನ್ನು ಮಾಡಿದರು. ಅದು ದೈವೀ ಶಕ್ತಿ. ಆದರೆ ತನ್ನ ತಪಸ್ಸಿನ ಶಕ್ತಿಯಿಂದ ಅಗಸ್ತ್ಯನು ಆ ಸಮುದ್ರವನ್ನು ಒಂದೇ ಗುಟುಕಿಗೆ ಕುಡಿದುಬಿಟ್ಟನು. ಆದರೆ ಮಾನವ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿದ ಹುಲುಮಾನವರಾದ ನಾವು ಕಷ್ಟ ಪಡದೆ ಈ ಭವಸಾಗರವನ್ನು \n ದಾಟಿ ಆ ದಡವನ್ನು ಸೇರಲಾಗುವುದೇ? ಹೇಗೆ ಕಷ್ಟಪಟ್ಟು ಜೀವಿಸುವುದೇ ಈ ಬಾಳಿನ ಸ್ವಭಾವ. ಎಂದು ಒಂದು ವಾಸ್ತವವನ್ನು ನಮ್ಮೆದುರಿಗೆ ಇಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 260,
    english:
      '"Nuances of life is not like drinking grape juice (which is very easy). It is more like getting sugarcane juice from the cane. If one is determined and puts in the effort he will get couple of gulps of juice. That\'s it. Rest of them are like flies sitting on crushed cane - they get close, but can not taste the juice. " - Mankutimma',
    kannada:
      "ದ್ರಾಕ್ಷಿರಸವೇನಲ್ಲ ಜೀವನದ ತಿರುಳಾರ್ಗಮ್ ।\r\nಇಕ್ಷುದಂಡದವೊಲದು ಕಷ್ಟಭೋಜನವೆ ॥\r\nದಕ್ಷತೆಯಿನಿಡಿಯುವಂಗೊಂದೆರಡು ಗುಟುಕು ರಸ ।\r\nಮಾಕ್ಷಿಕರು ಮಿಕ್ಕೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೨೬೦ ॥",
    kannada_explanation:
      "ಬಾಯಿಗಿಟ್ಟ ತಕ್ಷಣ ಸಿಗುವ ದ್ರಾಕ್ಷಿಹಣ್ಣಿನ ರಸದ ರುಚಿಯಂತೆ ಅಲ್ಲ, ಅದು ಕಬ್ಬಿನ ಜಲ್ಲೆಯನ್ನು, ಬಾಯಲ್ಲೇ ಸಿಪ್ಪೆ ತೆಗೆದು ಅಗಿದಾಗ ಮಾತ್ರ ಸಿಗುವ ಸಿಹಿರಸದ ಎರಡು ಹನಿಯಂತೆ ಈ ಜೀವನದ ಸ್ವಾರಸ್ಯವೂ ಯಾರಿಗೂ ಸುಲಭವಾಗಿ ಲಭ್ಯವಾಗುವುದಿಲ್ಲ. ಕಷ್ಟಪಡಬೇಕು. ಹಾಗೆ ಪಡದಿದ್ದ ಪಕ್ಷದಲ್ಲಿ, ಕಬ್ಬಿನ ಜಲ್ಲೆಯಮೇಲೆ ಕುಳಿತ ನೊಣಗಳಿಗೆ ಹೇಗೆ ರಸ ಸಿಗುವುದಿಲ್ಲವೋ ಹಾಗೆ, ಬದುಕಿನ ಅನುಭವ, ಸ್ವಾರಸ್ಯ ಯಾವುದೂ ಸಿಗುವುದಿಲ್ಲ ಎಂದು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 261,
    english:
      '"This world could be a game, an illusion or just a pain. But we have to get through this. So, do not say no to food and nourishments. Let these be a lesson to your body. But let us keep our eyes (mind) on the philosophy. The goal of hte mind should be to attain a balance." - Mankutimma',
    kannada:
      "ಆಟವೋ ಮಾಟವೋ ಕಾಟವೋ ಲೋಕವಿದು! ।\r\nಊಟ ಉಪಚಾರಗಳ ಬೇಡವೆನ್ನದಿರು ॥\r\nಪಾಟವವು ಮೈಗಿರಲಿ, ನೋಟ ತತ್ತ್ವದೊಳಿರಲಿ ।\r\nಪಾಠಿಸು ಸಮನ್ವಯವ - ಮಂಕುತಿಮ್ಮ ॥ ೨೬೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ನೀನು ಬಂದಮೇಲೆ ಜೀವನವನ್ನು ಒಂದು ಆಟವಾಗಿಯೋ, ಶ್ರಮವಾಗಿಯೋ, ಹಿಂಸೆಯಾಗಿಯೋ ಅನುಭವಿಸಲೇ ಬೇಕು. ಬೇರೆ ದಾರಿಯಿಲ್ಲ, ಇದೇ ಪ್ರಪಂಚ. ಇದು ನನಗೆ ಇಷ್ಟವಿಲ್ಲ ಎಂದು ನೀನು ನಿರಾಹಾರನಾಗಿ ದೇಹವನ್ನು ದಂಡಿಸಬೇಡ. ದೇಹ ದೃಢವಾಗಿರಲಿ. ಮನಸ್ಸು ಬುದ್ಧಿಗಳು ಪರಮಾತ್ಮನನ್ನು ಚಿಂತಿಸುತ್ತ ಇಹ ಮತ್ತ ಪರಗಳೆರಡರ ನಡುವೆ ಒಂದು ಸಮನ್ವಯವನ್ನು ಸಾಧಿಸು ಎಂದು ಒಂದು ಆದೇಶ ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 262,
    english:
      '"When one eye sheds tears, people try to make themselves happy by showing beautiful things tot he other eye. This is how world works - in constant pursuit of happiness. People get trapped in this world permanently due to love for relatives, seeking fame, wanting revenge or longing for magnanimity. " - Mankutimma',
    kannada:
      "ಒಂದು ಕಣ್ಣಳುವಂದು ಮತ್ತೊಂದ ತಳ್ಕೈಸಿ ।\r\nಅಂದ ಚೆಂದಗಳ ಜನವರಸುವುದು ಬಾಳೊಳ್ ॥\r\nಬಂಧುಮೋಹವೊ ಯಶವೊ ವೈರವೋ ವೈಭವವೊ ।\r\nಬಂಧಿಪುದು ಜಗಕವರ - ಮಂಕುತಿಮ್ಮ ॥ ೨೬೨ ॥",
    kannada_explanation:
      "ಒಬ್ಬರು ಅಳುತ್ತಿದ್ದರೆ ಮತ್ತೊಬ್ಬರು ಅವರನ್ನು ತಬ್ಬಿಕೊಂಡು ಸಂತೈಸಿ ಸಾಂತ್ವನಗೊಳಿಸುತ್ತಾರೆ. ಇದು ಒಂದು ರೀತಿಯ ಬಂಧ. ಹೀಗೆಯೇ ಜನರು ಬಾಳಿನಲ್ಲಿ ಅಂದ ಚೆಂದಗಳ ಅರಸುತ್ತಾರೆ. ಮೋಹ, ಯಶಸ್ಸು, ಪರಾಭವ, ದ್ವೇಷ ಮುಂತಾದ ಭಾವನೆಗಳಿಂದ ಒಬ್ಬರಿಗೊಬ್ಬರು ಬಂಧಿತರಾಗಿ ತನ್ಮೂಲಕ ಈ ಜಗತ್ತಿಗೆ ಅಂಟಿಕೊಂಡಿರುತ್ತಾರೆ, ಈ ಜಗದ ಮನುಜರು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 263,
    english:
      '"People may say Life is a waste. But have they given up the struggle? Do they not wait patiently for better days to come? Even they know that time will not remain like this forever and always look forward for a better tomorrow." - Mankutimma',
    kannada:
      "ಬಾಳು ಪಾಳೆನ್ನುವರ ಬಿಟ್ಟಿಹುದೆ ಬೆದಕಾಟ? ।\r\nತಾಳಿದರೆ ಬಾಳನಂತಹರುಮ್ ಆಶೆಯಲಿ? ॥\r\nಕಾಲವಿನ್ನಿರದಿಂತು ನಾಳೆ ನೋಡುವಮೆನುತ ।\r\nಮೇಲನೆ ನಿರೀಕ್ಷಿಪರು - ಮಂಕುತಿಮ್ಮ ॥ ೨೬೩ ॥",
    kannada_explanation:
      "ಈ ಜೀವನ ಜಂಜಾಟಗಳ ಆಗರ, ಇದು ಹಾಳು ಎಂದು ಹೇಳುವವರನ್ನೂ ಈ ಬಾಳಿನ ಬೆದಕಾಟ ಬಿಟ್ಟಿಲ್ಲ ಅಲ್ಲವೇ? ತಾಳಿದರೆ ಬಾಳುವೆನು ಎನ್ನುವಾಶೆಯಲಿ ಬಾಳಿದರೆ, ಒಳ್ಳೆಯದು. ಏಕೆಂದರೆ ಕಾಲವು ಎಂದಿಗೂ ಹೀಗೇ ಇರುವುದಿಲ್ಲ. ಇಂದು ಇರುವುದಕ್ಕಿಂತ ಉತ್ತಮ ಕಾಲವನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಾ ಎಲ್ಲರೂ ಬದುಕುತ್ತಾರೆ, ಎಂದು ಜೀವನದ ಒಂದು ಸತ್ಯವನ್ನು ಅರುಹುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 264,
    english:
      "\"Don't whine. Don't indulge nad revel either. Live life as if it is controlled by the whims of the cosmic spirit. You are just playing a part in the grand scheme of things that he Cosmic Spirit is well in control of. Its whim is not arbitrary, it also follows the rules of Dharma.\" - Mankutimma",
    kannada:
      "ಗೋಳಾಡಲುಂ ಬೇಡ, ಲೋಲಾಪ್ತಿಯುಂ ಬೇಡ ।\r\nಬಾಳು ಪರಚೇತನದ ಕೇಳಿಯೆಂದೆಣಿಸಿ ॥\r\nಪಾಲಿಗನು ನೀನದರೊಳೆನಿಪಂತೆ ಬಾಳುತಿರು  ।\r\nಕೇಳಿಯುಂ ಧರ್ಮವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨೬೪ ॥",
    kannada_explanation:
      'ಈ ಜಗತ್ತಿನ ಬದುಕು ಸರಿಯಿಲ್ಲವೆಂಬ ಗೋಳಾಟವೂ ಬೇಡ ಅಥವಾ ಈ ಜಗತ್ತಿನ ಜೀವನದಲ್ಲಿ ಅತಿಯಾದ ಆಸಕ್ತಿಯೂ ಬೇಡ. ಈ ನಮ್ಮ ಬಾಳು ಆ ಪರಮಾತ್ಮನ ಆಟ ಮತ್ತು ನಾವು ಅದರೊಳಗಿನ ಒಂದು ಪಾಲನ್ನು ಹಂಚಿಕೊಂಡು ನಮ್ಮ ಪಾತ್ರವನ್ನು ನಿರ್ವಹಿಸುತ್ತಿದ್ದೇವೆ ಮತ್ತು ಬಾಳುತ್ತಿದ್ದೇವೆ ಎಂದು ಅಂದುಕೊಳ್ಳಬೇಕು. ಏಕೆಂದರೆ "ಹಾಗೆ ಬಾಳುವುದು ಧರ್ಮ" ಎಂದು ಬಾಳನ್ನು ಹೇಗೆ ಜೀವಿಸಬೇಕೆಂಬ ಒಂದು ಸತ್ಯವನ್ನು ಪ್ರತಿಪಾದಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 265,
    english:
      '"The master of the game has shown us all the riches and the beauties of the world. Don\'t say all these worldly things are inferior to the pursuit of the supreme. If you say so, you will be brash, dim-wit and a person with a stone heart. People who try to understand this world by muscle strength, intellect, words and appreciate it are called tasteful." - Mankutimma',
    kannada:
      "ಬಾಳ ಸಿರಿ ಸೊಗಸುಗಳ ಪೆರ್ಚಿಪನು ಖೇಲಕನು ।\r\nಕೀಳದೆನಿಪವನೊರಟ, ಮಂಕ, ಕಲ್ಲೆದೆಗ ॥\r\nತೋಳಿಂದೆ ತಿಳಿವಿಂದೆ ನುಡಿಯಿಂದೆ ಜಗದರಿವ ।\r\nಮೇಲೆನಿಪವನೆ ರಸಿಕ -  ಮಂಕುತಿಮ್ಮ ॥ ೨೬೫ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸುಂದರತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತಲೇ ಇರುತ್ತಾನೆ, ಈ ಜಗನ್ನಾಟಕ ಸೂತ್ರಧಾರಿ. ಇದನ್ನು ಕೀಳು ಎಂದು ಎನ್ನುವವನು ಒರಟ ,ಮಂಕ ಮತ್ತು ಕಲ್ಲು ಮನದವನು. ತನ್ನ ಬಾಹುಬಲದಿಂದ, ಅರಿವಿನ ಬಲದಿಂದ ಮತ್ತು ಮಾತಿನ ಚಮತ್ಕಾರದಿಂದ, ಈ ಜಗತ್ತಿನ ಬದುಕನ್ನು ಉತ್ತಮವಾಗಿಸುವವನೆ, ರಸಿಕ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 266,
    english:
      '"Why belittle life? Why whine? This life has to be lived no matter what antics we do to escape from it. This universe is being run as part a wish of the Creator. You are a part of it. Don\'t resist being a part of it." - Mankutimma',
    kannada:
      "ಬಾಳ ಹಳಿವುದದೇಕೆ? ಗೋಳ ಕರೆವುದದೇಕೆ? ।\r\nಬಾಳಿದಲ್ಲದೆ ತಪ್ಪದೇನ ಮಾಡಿದೊಡಂ ॥\r\nಕೇಳಿಯದು ಬೊಮ್ಮನಾಡಿಪನು ನೀನದರೊಳಗೆ ।\r\nಪಾಲುಗೊಳಲಬೇಡ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೬೬ ॥",
    kannada_explanation:
      "ನೀವು ಈ ಬಾಳನ್ನು ಏಕೆ ಹಳಿಯುತ್ತೀರಾ? ಇಲ್ಲಿ ಏಕೆ ಗೋಳಾಡುತ್ತೀರಾ? ತಪ್ಪೋನೆಪ್ಪೋ ಮಾಡುತ್ತಾ ಬದುಕನ್ನು ಬದುಕಲೇ ಬೇಕು. ಏಕೆಂದರೆ ನಿಮ್ಮ ಬದುಕು ನಿಮ್ಮದಲ್ಲ ಆ ಪರಬ್ರಹ್ಮನಾಡಿಸುವ ಜಗನ್ನಾಟಕ. ಅದನ್ನು ಹಾಗೆ ಅರಿತು ನೀವು ಅದರೊಳಗೆ ಪಾಲುಗೊಳ್ಳಲು ಅಳಬೇಡಿ ಎಂದು ಆದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 267,
    english:
      '"Is all life just an illusion? Don\'t treat us like kids. We may get angry at who ever is running the Universe and opt to get out of the game. Fate will catch hold of those people and make them play the game again." - Mankutimma',
    kannada:
      "ಲೀಲೆಯೇಂ ಬಾಳೆಲ್ಲ?  ಛೀ ತಳ್ಳು ಹಾಸ್ಯವನು ।\r\nಬಾಲರೇಂ ನಾವಿನ್ನುಮೆನುತ ಪಲ್ಕಡಿದು ॥\r\nಖೇಲನವ ಬೇಡವೆನುವರನು ವಿಧಿರಾಯನವ- ।\r\nಹೇಳಿಪನು ಸೆರೆವಿಡಿದು -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೬೭ ॥",
    kannada_explanation:
      "ನಾವೇನು ಚಿಕ್ಕಮಕ್ಕಳೇನು? ಈ ಜಗತ್ತು ಮತ್ತು ಈ ಜಗತ್ತಿನ ಬದುಕು ಒಂದು ನಾಟಕ ಮತ್ತು ಇದು ಆ ಜಗನ್ನಾಟಕ ಸೂತ್ರಧಾರಿಯಾಡಿಸುವ ಆಟ ಎಂದು, ಇದಕ್ಕೆ ನಮ್ಮನ್ನು ನಾವು ಚಕಾರವೆತ್ತದೆ ತೊಡಗಿಸಿಕೊಳ್ಳಬೇಕು ಎಂದು ಹೇಳುತ್ತೀರಾ? ತಮಾಷೆಮಾಡಬೇಡಿ ಎಂದು ಹಾಗೇನೂಇಲ್ಲ!! ಎಂದು ಈ ಜಗತ್ತನ್ನು ಅವಹೇಳನ ಮಾಡುವವರನ್ನು ಈ ಜೀವನ ಬೇಡವೆನ್ನುವವರನ್ನೂ ಸಹ ಆ ವಿಧಿರಾಯ ಸೆರೆಹಿಡಿದು ಬದುಕಲೇ ಬೇಕೆಂದು ವಿಧಿಸುತ್ತಾನೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 268,
    english:
      '"Why should one be ashamed of enjoying life? The soul is spreading its tongue towards all directions to lick all available drops of elixir. Pursuit of happiness is natural to the soul." - Mankutimma',
    kannada:
      "ನಾಚಿಕೆಯದೇಕೆ ನೀಂ ಬದುಕಿನಲಿ ಸೊಗವಡಲು? ।\r\nಚಾಚುದಿಹುದಾತ್ಮ ನಾಲಗೆಯ ದೆಸೆದೆಸೆಗೆ ॥\r\nಬಾಚಿಕೊಳಲಮೃತಕಣಗಳನೆಲ್ಲ ತನ್ನೆಡೆಗೆ ।\r\nಸಾಜ ಸೊಗವಾತ್ಮಂಗೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೬೮ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲಿ ಸುಖಪಡಲು ನೀನೇಕೆ ನಾಚಿಕೊಳ್ಳುತ್ತೀಯ? ನಿನ್ನಾತ್ಮವು ಈ ಜೀವನದ ಸುಖವನ್ನು ಪಡೆಯಲು, ಸುಖದ ಪ್ರತಿಘಳಿಗೆಯನ್ನೂ ತನ್ನೆಡೆಗೆ ಸೆಳೆದುಕೊಳ್ಳಲು,ನಾಲ್ಕೂ ದಿಕ್ಕುಗಳಿಗೆ ತನ್ನನ್ನು ತಾನು ಚಾಚಿಕೊಂಡಿದೆ.ಆನಂದಪಡುವುದೇ ಆತ್ಮದ ಸಹಜ ಗುಣ ಎಂದು ವೇದಂತದ ಒಂದು ವಿಚಾರವನ್ನು ಮಂಡಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 269,
    english:
      '"One must put in hard work in life and create wonderful things. When hard work does not yeild results, the spirit must not be subdued. One must proceed ahead again with renewed vigor. This courage in man\'s efforts is what makes this world beautiful." - Mankutimma',
    kannada:
      "ಸುಂದರವನೆಸಗು ಜೀವನದ ಸಾಹಸದಿಂದೆ ।\r\nಕುಂದಿಲ್ಲವದಕೆ ಸಾಹಸಭಂಗದಿಂದೆ ॥\r\nಮುಂದಕದು ಸಾಗುವುದು ಮರಳಿ ಸಾಹಸದಿಂದೆ ।\r\nಚೆಂದ ಧೀರೋದ್ಯಮವೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೬೯ ॥",
    kannada_explanation:
      'ಸಾಹಸದಿಂದ ನಿನ್ನ ಜೀವನದಲ್ಲಿ ಒಳ್ಳೆಯ ಕೆಲಸವನ್ನು ಮಾಡು. ನಿನ್ನ ಸಾಹಸದ ಪ್ರಯತ್ನದಲ್ಲಿ ಭಂಗ ಉಂಟಾದರೆ ತೊಂದರೆಯಿಲ್ಲ. ಏಕೆಂದರೆ ಮರಳಿ ಯತ್ನವನ್ನು ಮಾಡಲು ಅದು ಪ್ರೇರಕವಾಗುತ್ತದೆ. ಹೀಗೆ ಧೈರ್ಯದಿಂದ ಒಳ್ಳೆಯ ಕೆಲಸಗಳನ್ನು ಮಾಡಲು ಬದುಕಿನಲ್ಲಿ ಸಾಹಸ ಮಾಡುವುದೇ ಚೆಂದ ಎಂದು " ಒಂದು ಒಳ್ಳೆಯ" ಬದುಕಿನ ಮಾರ್ಗವನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 270,
    english:
      '"Be available to help every one. Be open to receive help from others. Learn to live in harmony like thus. To live ones life, one needs support structure around him - house, state and the world. Don\'t belittle them." - Mankutimma',
    kannada:
      "ಎಲ್ಲರಿಗಮಾಗಿ ತಾನ್, ಎಲ್ಲರುಂ ತನಗಾಗಿ ।\r\nನಿಲ್ಲುವೇಕಾತ್ಮತೆಯ ಬಾಳ್ವೆಯಿಂ ಕಲಿಯಲ್ ॥\r\nಸಲ್ಲುವುಪಕರಣಗಳು ಮನೆ ರಾಜ್ಯ ಸಂಸಾರ- ।\r\nವಲ್ಲಗಳೆಯದಿರವನು -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೭೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲರಿಗಾಗಿ ನಾನು, ಎಲ್ಲರೂ ನನಗಾಗಿ ಎಂದು ಬಾಳಬೇಕು. ಈ ರೀತಿ ಬಾಳಿನಲ್ಲಿ ಏಕಾತ್ಮ ಭಾವವನ್ನು ಕಲಿಯಲು ನಮಗೆ ಸಿಗುವ ಉಪಕರಣಗಳೇ ಮನೆ, ರಾಜ್ಯ ಮುಂತಾದವುಗಳು. ಅವಗಳನ್ನು ಅಲ್ಲಗಳೆಯದಿರು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 271,
    english:
      '"Don\'t tell that the struggle of life is a waste. You will understand the purpose of life when you get the whole picture. The Cosmic spirit is dancing inside every non-living and living things. When you understand this completely, you will revel." - Mankutimma',
    kannada:
      "ವ್ಯರ್ಥವೀ ಜೀವನದ ಬಡಿದಾಟವೆನ್ನದಿರು ।\r\nಅರ್ಥವಹುದದು ನಿನಗೆ ಪೂರ್ಣದರ್ಶನದಿಂ ॥\r\nನರ್ತಿಪನು ಜಡಜೀವರೂಪಂಗಳಲಿ ।\r\nಪೂರ್ತಿಯಿದನರಿಯೆ ಸೊಗ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೭೧ ॥",
    kannada_explanation:
      "ಈ ಜೀವನದ ಹೋರಾಟವನ್ನು ವ್ಯರ್ಥ ಎನ್ನದಿರು. ಈ ಸೃಷ್ಟಿಯ ಸಂಪೂರ್ಣ ದರ್ಶನವಾದಾಗ ನಿನಗೆ ಈ ಜಗತ್ತಿನ ಸಾರ್ಥಕತೆ ಅರ್ಥವಾಗುತ್ತದೆ. ಜೀವ ಮತ್ತು ಜಡ ರೂಪದಲ್ಲಿ ಆ ಪರಮಾತ್ಮನ ಲೀಲಾ ನರ್ತನ ನಡೆಯುತ್ತಿದೆ. ಇದರ ಸಂಪೂರ್ಣ ರೂಪ ನೋಡಿದರೆ ಸೊಗಸು ಎಂದು ಜಗತ್ಸೃಷ್ಟಿಯ ವಿಶೇಷವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 272,
    english:
      '"The creator himself is engrossed in building this world. Nature is not wasting even fraction of a second and is pumping joy into this creation. Is it right for us to give up on life? Is it right for us to doubt the intentions (of the creator/nature)?" - Mankutimma',
    kannada:
      "ಬೊಮ್ಮನೇ ಸಂಸೃತಿಯ ಕಟ್ಟಿಕೊಂಡುತ್ಸಹಿಸೆ ।\r\nಸುಮ್ಮನರೆಚಣವಿರದೆ  ಪ್ರಕೃತಿ  ತೊಡಗುತಿರೆ ॥\r\nಜನ್ಮ ಸಾಕೆನುವುದೇ? ದುಮ್ಮಾನವಡುವುದೇಂ? ।\r\nಚಿಮ್ಮುಲ್ಲಸವ ಧರೆಗೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೭೨ ॥",
    kannada_explanation:
      'ಈ ಜಗತ್ತೆಂಬ ಸಂಸಾರವನ್ನು ಕಟ್ಟಿಕೊಂಡು ಆ ಪರಮಾತ್ಮನೇ ಇಷ್ಟೊಂದು ಉತ್ಸಾಹದಿಂದ ಇರುವಾಗ, ಅವನ ಸೃಷ್ಟಿಯಾದ ಈ ಪ್ರಕೃತಿಯು ಒಂದು ಅರೆಕ್ಷಣವೂ ಸುಮ್ಮನಿರದೆ ಈ ತನ್ನ ಕೆಲಸದಲ್ಲಿ ನಿರತವಾಗಿರುವಾಗ, " ನನಗೆ ಈ ಜನ್ಮ ಸಾಕು, ನಾನೇಕೆ ಬದುಕ ಬೇಕು?" ಎನ್ನುವಂತ ದುಮ್ಮಾನಗಳು ನಿನಗೇಕೆ? ಬದುಕಿರುವಾಗ ಉತ್ಸಾಹದಿಂದ ಬದುಕಿ, ಈ ಜಗತ್ತಿಗೂ ಉತ್ಸಾಹವನ್ನು ನೀಡು ಎಂದು ಒಂದು ಬುದ್ಧಿವಾದವನ್ನು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 273,
    english:
      '"This world has crores of creatures all going through their lives just as you are doing. All of them may have their tired moments, happy moments, moments of savoring the beauties of the world. There are cries of excitement, sorrow, encouragement let out by them. All these are making formations in the sky. How can you escape from this world? No matter where you go, these cries will always follow you. Some of them are yours too." - Mankutimma',
    kannada:
      "ಕೋಟಿ ದೆಸೆಯುಸಿರುಗಳು, ಕೋಟಿ ರಸದಾವಿಗಳು ।\nಕೋಟಿ ಹೃದಯದ ಹೋಹೊ ಹಾಹಕಾರಗಳು ॥\nಕೂಟ ಕೂಡಿಹುವಂತರಿಕ್ಷದಲಿ  ನೀನದರಿನ್ ।\nಓಟವೋಡುವುದೆತ್ತ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೭೩ ॥",
    kannada_explanation:
      "ಕೋಟಿ ಕೋಟಿ ಜೀವಿಗಳ ಉಸಿರಾಟದ ಭಾವ, ಜಗತ್ತಿನ ಕೋಟಿ ಕೋಟಿ ವಸ್ತುಗಳ ರಸದ ಆವಿ,ಕೋಟಿ ಕೋಟಿ ಹೃದಯಗಳ ಸಂತಸದ ಮತ್ತು ಕಾರ್ಪಣ್ಯದ ನಿಟ್ಟುಸಿರು ಎಲ್ಲವೂ ಕೂಡಿದ ಭಾವವೆಲ್ಲ ಅಂತರಿಕ್ಷದಲ್ಲಿ ತುಂಬಿಕೊಂಡಿರುವಾಗ ನೀನು ಅದರಿಂದ ತಪ್ಪಿಸಿಕೊಂಡು ಓಡುವುದಾದರೂ ಎಲ್ಲಿಗೆ? ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 274,
    english:
      '"The life that you have is part of the cosmic spirit that resides in your body. You have to treat it with love and compassion. You should be very wary of doing anything that would hurt it. You should worship it. Life inside us should be the most loved thing in this creation." - Mankutimma',
    kannada:
      "ನಯದಿಂದ ಸೋಕು, ನೀಂ  ದಯೆಯಿಂದ  ನೋಡದನು ।\nಭಯದಿನೋಲಗಿಸು, ನೀಂ ಪೂಜೆಗೈಯದನು ॥\nಸ್ವಯಮಂಕುರಿತ ಸಕಲ ವಿಶ್ವಸತ್ತ್ವವೊ; ಜೀವ ।\nಪ್ರಿಯತಮವೊ ಸೃಷ್ಟಿಯಲಿ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೭೪ ॥",
    kannada_explanation:
      "ಈ ಜೀವವೆನ್ನುವುದು ಸಮಸ್ತ ಸೃಷ್ಟಿಯಲಿ ಅತೀ ಪ್ರಿಯತಮವು. ಅದು ತಾನೇ ತಾನಾಗಿ ‘ಆಗಿ’ ಸೃಷ್ಟಿಯ ಸಮಗ್ರ ಸತ್ವದಿಂದ ಕೂಡಿದೆ. ಹಾಗಾಗಿ ಅದನ್ನು ನಯದಿಂದ ಸ್ಪರ್ಶಿಸು, ದಯೆಯಿಂದ ನೋಡು, ಭಯದಿಂದ ಓಲೈಸು ಮತ್ತು ಸದಾಕಾಲ ಅದನ್ನು ಪೂಜೆ ಮಾಡು, ಎಂದು ಆತ್ಮ ತತ್ವವಾದ ವಿಚಾರ ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 275,
    english:
      '"Until life poses a difficult question every one is noble and preachers. When life becomes difficult, feelings (and illusions) arise from deep down their heart. Only God can save us then." - Mankutimma',
    kannada:
      "ಸರ್ವರುಂ ಸಾಧುಗಳೆ ಸರ್ವರುಂ ಬೋಧಕರೆ ।\nಜೀವನಪರೀಕ್ಷೆ ಬಂದಿದಿರು ನಿಲುವನಕ ॥\nಭಾವಮರ್ಮಂಗಳೇಳುವುವಾಗ ತಳದಿಂದ ।\nದೇವರೇ ಗತಿಯಾಗ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೭೫ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲರೂ ಒಳ್ಳೆಯವರಂತೆ, ಬೋಧಕರಂತೆ ಕಾಣುತ್ತಾರೆ. ಆದರೆ ಎಲ್ಲರೂ ಹಾಗಾಡುವುದು, ಜೀವನ ಅವರನ್ನು ವಿಷಮ ಸ್ಥಿತಿಯಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಪರೀಕ್ಷೆಗೆ ಒಡ್ದುವತನಕ ಮಾತ್ರ. ಹಾಗೆ ಪರೀಕ್ಷೆಗೆ ಒಳಗಾದ ಪ್ರತಿಯೊಬ್ಬನಿಗೂ ತನ್ನಂತರಂಗದಲ್ಲಿ ಸತ್ಯದರಿವಾದಾಗ ಅವನನ್ನು ದೇವರೇ ಕಾಪಾಡಬೇಕು ಎಂದು ಒಂದು ಪರಮ ಸತ್ಯವನ್ನು ವಿಡಂಬನಾತ್ಮಕವಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಿದ್ಡಾ ರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 276,
    english:
      '"Everyone has conquered his mind as long as divine illusion does not bring in a beautiful form in front of you to taunt your senses. Arjuna was a celibate saint untill the beautiful Subhadra came infront of him." - Mankutimma',
    kannada:
      "ಎಲ್ಲರುಂ ಜಿತಮನಸ್ಕರೆ  ದೈವ ವಿಧಿ ಮಾಯೆ ।\nಚೆಲ್ವರೂಪಿಂ ಬಂದು ಕಣ್ಕುಕ್ಕುವನಕ ॥\nವಲ್ಗುರೂಪೆ ಸುಭದ್ರೆ ಕಣ್ಮುಂದೆ ಸುಳಿವನಕ ।\nಫಲ್ಗುಣನು ಸಂನ್ಯಾಸಿ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೭೬ ॥",
    kannada_explanation:
      "ತನ್ನ ಅಣ್ಣನ ಆದೇಶದ ಮೇಲೆ, ಒಂದು ವರ್ಷ ಕಾಲ ಸನ್ಯಾಸಿಯಾಗಿದ್ದ ಅರ್ಜುನನೂ ಸಹ ಕಣ್ಣು ಕೋರೈಸುವ ಸುಂದರಿಯಾದ ಸುಭದ್ರೆ ಕಣ್ಣ ಮುಂದೆ ಸುಳಿಯಲು ಮನಸ್ಸಿನ ಸ್ಥಿಮಿತವನ್ನು ಕಳೆದುಕೊಂಡು ಅವಳಲ್ಲಿ ಅನುರಕ್ತನಾಗಲಿಲ್ಲವೇ? ಹಾಗೆಯೇ ಈ ಜಗತ್ತಿನ ಎಲ್ಲರೂ, ತಾವು ಯಾವುದಕ್ಕೂ ಆಸೆಪಡದ, ಮನಸ್ಸನ್ನು ಗೆದ್ದವರಂತೆ ಇದ್ದರೂ, ದೈವ ನಿಯಮಿತ ವಿಧಿ, ಮಾಯೆಯರೂಪದಲ್ಲಿ ನಮ್ಮ ಕಣ್ಣ ಮುಂದೆ ಬಂದು ನಿಂತಾಗ ವಿಚಲಿತರಾಗುತ್ತೇವೆ ಎಂದು ಒಂದು ಜಗತ್ಸತ್ಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 277,
    english:
      '"Is there is any better example of self control than Sita? What happened to her when the golden deer came in front of her? Desire hides sleeping in deep ocean of the mind. It does not die. When the time is right (or wrong) it comes up and troubles every one. What is that which provokes it?" - Mankutimma',
    kannada:
      "ಧಾರುಣೀಸುತೆಯವೊಲು ದೃಢಮನಸ್ಕರದಾರು? ।\nಮಾರೀಚಹರಣವಡ್ಡಾಡಲೇನಾಯ್ತು? ॥\nವಾರಿಧಿಯೊಳಡಗಿ ನಿದ್ರಿಪ ಬಾಡವವೊ ತೃಷ್ಣೆ ।\nಆರದನು ಕೆರಳಿಪರೊ! -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೭೭ ॥",
    kannada_explanation:
      "ಕೇವಲ ರಾಮನನ್ನೇ ಅಪೇಕ್ಷಿದ ಸೀತೆಯಂತೆ ದೃಢ ಮನಸ್ಕರು ಯಾರು. ಅಂತಹವಳ ಮನಸ್ಸೂ ಆ ಮಾರೀಚನೆಂಬ ರಾಕ್ಷಸ ಚಿನ್ನದ ಜಿಂಕೆಯ ರೂಪದಲ್ಲಿ ಕಣ್ಣ ಮುಂದೆ ಸುಳಿಯಲು, ಅದಕ್ಕೆ ಆಸೆಪಡಲಿಲ್ಲವೇ? ಹಾಗೆಯೇ ನಮ್ಮ ಮನಸ್ಸುಗಳಲ್ಲಿನ ಆಸೆಯೂ ಸಹ ಆ ಸಮುದ್ರದ ಆಂತರ್ಯದಲ್ಲಿ ಅಡಗಿರುವ ಅಗ್ನಿಪರ್ವತಗಳಂತೆ. ಸುಪ್ತವಾಗಿರುವುದನ್ನು ಯಾರು ಯಾರು ಕೆರಳಿಸುತ್ತಾರೋ ನಮಗೆ ತಿಳಿಯುವುದಿಲ್ಲ.",
  },
  {
    number: 278,
    english:
      '"Who teaches the elephants, ants, crows and frogs to find food? No one does. The hunger inside them leads them to their food. Man has hunger in every part of the body and hence has developed various tastes. These are tastes that make him what he is - prosperous or miserable." - Mankutimma',
    kannada:
      "ಆನೆಗಾರ್ ಇರುವೆಗಾರ್ ಕಾಗೆಗಾರ್ ಕಪ್ಪೆಗಾರ್ ।\r\nಕಾಣಿಸುವರನ್ನವನು? ಹಸಿವವರ ಗುರುವು ॥\r\nಮಾನವನುಮಂತುದರಶಿಷ್ಯನವನಾ ರಸನೆ ।\r\nನಾನಾವಯವಗಳಲಿ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೭೮ ॥",
    kannada_explanation:
      "ಆನೆಗೆ,ಇರುವೆಗೆ,ಕಾಗೆಗೆ,ಕಪ್ಪೆಗೆ ಆಹಾರವನ್ನು ಯಾರು ತೋರುತ್ತಾರೆ? ಅವುಗಳಿಗೆ ಹಸಿವಾದಾಗ ತಮ್ಮ ಆಹಾರವನ್ನು ತಾವೇ ಹುಡುಕಿಕೊಂಡು ಹೋಗುತ್ತವಲ್ಲವೇ? ಹಾಗಾಗಿ ಹಸಿವೇ ಅವುಗಳಿಗೆ, ತಮ್ಮ ಆಹಾರ ಹುಡುಕಲು ಗುರು. ಅದೇ ರೀತಿಯೇ ಮನುಷ್ಯನೂ ಸಹ,ಅವನ ಹೊಟ್ಟೆ ಹಸಿವಿಗೆ ಅವನು ಶರಣಾದರೂ ಅವನ ಹಸಿವನ್ನು ಇಂಗಿಸುವಲ್ಲಿ ಅವನ ನಾಲಿಗೆ ತನ್ನ ಪ್ರಭಾವ ತೋರಿ ಅವನನ್ನು ನಾನಾ ದಿಕ್ಕುಗಳಲ್ಲಿ ಓಡುವಂತೆ ಮಾಡುತ್ತದೆ ಎಂದು ಒಂದು ವಾಸ್ತವಿಕ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 279,
    english:
      '"Why should one consider Yama (Lord of death) harsh? Is man very kind to his own kind? Either through love, compassion, anger or fun he creates emotions in those around him. This emotional roller coaster every minute erodes life out of people minute by minute." - Mankutimma',
    kannada:
      "ಯಮನಿಗೇಕಪಕೀರ್ತಿ? ನರರು ಬಲು ಕರುಣಿಗಳೆ? ।\r\nಮಮತೆಯಿನೊ ರೋಷದಿನೊ ಹಾಸ್ಯದಿನೊ ಹೇಗೋ ॥\r\nನಿಮಿಷನಿಮಿಷಮುಮೊರ್ವನಿನ್ನೊರ್ವನನು ತಿಕ್ಕಿ ।\r\nಸಮೆಯಿಸುವನಾಯುವನು -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೭೯ ॥",
    kannada_explanation:
      "ಯಮ ಎಂದರೆ ಸಾವನ್ನು ತರುವವನು. ಅವನ ಲೋಕ, ತೀವ್ರವಾದ ಕಷ್ಟಗಳನ್ನು ಅನುಭವಿಸಬೇಕಾದ ನರಕ, ಎಂಬ ಅಪಕೀರ್ತಿ ಮನುಜಲೋಕದಲ್ಲಿ ಇದೆಯಲ್ಲವೇ? ಅದು ಏಕೆ? ಇಲ್ಲಿರುವ ಕಾಲದಲ್ಲೇ ಪ್ರೀತಿಯಿಂದಲೋ ದ್ವೇಷದಿಂದಲೋ ಅಥವಾ ಹಾಸ್ಯದಿಂದಲೋ ಪ್ರತೀ ನಿಮಿಷವೂ ಎಲ್ಲ ಒಬ್ಬೊಬ್ಬರೂ ಮತ್ತೊಬ್ಬರೊಡನೆ ಹೊಡೆದಾಡಿ ಹೋರಾಡಿ ತಮ್ಮ ತಮ್ಮ ಆಯಸ್ಸನ್ನು ಕಳೆಯುತ್ತಿಲ್ಲವೇ. ಹಾಗಾಗಿ ಇಲ್ಲಿರುವ ನರರೂ ಸಹ ಕರುಣಾಮಯಿಗಳೇನಲ್ಲ, ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಮನುಷ್ಯರ ಬಾಳಿನ ಒಂದು ಪರಿಯನ್ನು ವಿಶ್ಲೇಷಣೆಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 280,
    english:
      '"Don\'t single out people and call them as imperfect and sinners. Who knows how many desires he had to fight against? How many he endured? How many he burnt? Sensory pleasures pull him strongly in all direction. Man is always bound by his desires." - Mankutimma',
    kannada:
      "ದೋಷಿಯವನಿವನು ಪಾಪಿಯೆನುತ್ತ ಗಳಹದಿರು ।\r\nಆಶೆಯೆನಿತವನು  ಸಹಿಸಿದನೊ! ದಹಿಸಿದನೊ! ॥\r\nವಾಸನೆಗಳವನನೇನೆಳದವೋ ಬಲವೆನೊ! ।\r\nಪಾಶಬದ್ಧನು ನರನು -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೦ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿ ಯಾರನ್ನೂ, ಅವನು ದೋಷಿ, ಇವನು ಪಾಪಿಯೆಂದು ಹೇಳುತ್ತಾ ಇರಬೇಡ. ಪಾಪ ಅವನು ಎಷ್ಟೊಂದು ಆಸೆಗಳನ್ನು ಹೊತ್ತು, ತೀರಿಸಿಕೊಳ್ಳಲಾಗದೆ ಸಹಿಸಿದ್ದಾನೋ, ಹಾಗೆ ತೀರಿಸಿಕೊಳ್ಳಲಾಗದ ಎಷ್ಟೊಂದು ಆಸೆಗಳನ್ನು ಸುಟ್ಟಿದ್ದಾನೋ ನಿನಗೆ ಗೊತ್ತಿಲ್ಲವಲ್ಲ. ಅವನ ಪಾಪ-ದೋಷಗಳೆಲ್ಲವೂ ಅವನು ಹೊತ್ತು ತಂದ ವಾಸನೆಗಳು, ಅವನನ್ನು ತನ್ನ ಪಾಶದಲ್ಲಿ ಬಂಧಿಸಿ,ಬಲವಾಗಿ ಅವನನ್ನು ತನ್ನ ಸೆಳೆತದಲ್ಲಿ ಸಿಕ್ಕಿಸಿಕೊಂಡಿದ್ದರಿಂದ ಆದದ್ದು ಎಂದು ‘ವಿಧಿವಿಲಾಸದ’ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 281,
    english:
      '"Those who feel angry at a sinner; are they pure? Who knows why any one does what they do? They may have failed to resist against desire. The defeated deserve our sympathies. It is not wise to berate them." - Mankutimma',
    kannada:
      "ಪಾತಕಿಯೊಳಾಗ್ರಹವ ತೋರೆ ನಿರ್ಮಲನಾರು? ।\r\nಆತುಮದ ಪರಿಕಥೆಯನರಿತವರೆ ನಾವು? ॥\r\nಸೋತ ದುರ್ಬಲಿಗೆ ಸಲ್ಲುವುದು ನಮ್ಮನುಕಂಪೆ ।\r\nನೀತಿ ನಿಂದೆಯೊಳಿರದು -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೧ ॥",
    kannada_explanation:
      "ಯಾರೋ ಒಬ್ಬನನ್ನು ‘ಇವನು ಪಾಪಿ,ಪಾತಕಿ’ ಎಂದು ಬೆರಳು ತೋರಲು ಇಲ್ಲಿ ಯಾರೂ ಸಂಪೂರ್ಣ ನಿರ್ಮಲರು ಇಲ್ಲವಲ್ಲ! ಮತ್ತೊಬ್ಬರ ಆಂತರ್ಯವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅರಿತವರು ಯಾರಿದ್ದಾರೆ ಹೇಳಿ? ಸೋತವರಿಗೆ ಅಥವಾ ಕೆಳಗೆಬಿದ್ದವರಿಗೆ ನಮ್ಮ ಅನುಕಂಪವಿರಬೇಕು, ನಿಂದೆಯಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 282,
    english:
      '"It is not very easy to commit sin. If one had a choice, they would never commit any sin. If someone commits any sin, there must be a strong reason why he did so. That reason may be hidden deep inside his mind and troubling him all along. One can not know the depth of the well by standing by its side. It can only be measured by getting into it. Instead of commenting on them, one must understand why any one commits sin." - Mankutimma',
    kannada:
      "ಪಾಪವೆಂಬುದದೇನು ಸುಲಭಸಾಧನೆಯಲ್ಲ ।\r\nತಾಪದಿಂ ಬೇಯದವನ್ ಅದನೆಸಪನಲ್ಲ ॥\r\nವಾಪಿಯಾಳವ ದಡದಿ ನಿಂತಾತನರಿವನೇಂ? ।\r\nಪಾಪಿಯೆದೆಯೊಳಕಿಳಿಯೊ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೨ ॥",
    kannada_explanation:
      "ಪಾಪ ಮಾಡುವುದು ಸುಲಭ ಸಾಧನೆಯಲ್ಲ. ಬದುಕಿನ ತಾಪದಿಂದ ಬೆಂದು ಬೆಂಡಾಗಿಹೋಗದ ಹೊರತು ಪಾಪಗಳನ್ನು ಮಾಡಲಾಗುವುದಿಲ್ಲ. ಭಾವಿಯ ದಡದಲ್ಲಿ ನಿಂತಿರುವವನಿಗೆ ಭಾವಿಯಾಳವು ತಿಳಿಯುವುದೇ? ಅದೇ ರೀತಿ ಪಾಪಿಯ ಹೃದಯದಾಳಕ್ಕಿಳಿದು ಅವನಂತರಾಳವನ್ನು ಅರಿತಿಕೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 283,
    english:
      '"You may want to criticize Ravana for doing all the sins committed in Ramayana. But have you thought about his motive? Have thought how strong should that emotion (desire, revenge) be which pushed him to do so? How much pained was he because of these feelings? Try to understand his turmoil. After understanding, if you still want to criticize, go ahead. But criticizing without understanding is meaningless. " - Mankutimma',
    kannada:
      "ರಾವಣನ ಹಳಿವವನೆ, ಜೀವವನೆ ಬಿಸುಡಿಸುವ ।\r\nಲಾವಣ್ಯವೆಂತಹುದೊ? ನೋವದೆಂತಹುದೊ? ॥\r\nಬೇವಸವ ಪಟ್ಟು ತಿಳಿ; ತಿಳಿದು ಹಳಿಯುವೊಡೆ ಹಳಿ ।\r\nಗಾವಿಲನ ಗಳಹೇನು?‌ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೩ ॥",
    kannada_explanation:
      "ರಾವಣಾಸುರ ಸೀತೆಯನ್ನು ಅಪಹರಿಸಿದ್ದಕ್ಕೆ ಅವನನ್ನು ಕೆಟ್ಟವ ಎಂದು ಜನರೆಲ್ಲಾ ಅವನನ್ನು ಬಯ್ಯುತ್ತಾರೆ. ಆದರೆ ಪರಸ್ತ್ರೀಯನ್ನು ಹೊತ್ತುಕೊಂಡು ಹೋಗುವಂಥಾ ಹೇಯ ಕೃತ್ಯ ಮಾಡಲು ಪ್ರೇರೇಪಿಸಿದ ಆ ಸೀತೆಯ ಸೌಂದರ್ಯವೆಷ್ಟಿತ್ತೋ? ಮತ್ತು ಅವಳನ್ನು ಪಡೆಯಬೇಕೆಂಬ ಉತ್ಕಟ ಅಪೇಕ್ಷೆಯ ಯಾತನೆಯಷ್ಟಿತ್ತೋ? ಕಾರಣವ ಶ್ರಮಪಟ್ಟು ಅರಿತುಕೊ. ಅರಿತು ಮಾತನಾಡಿದರೆ ಸರಿ, ಅರಿಯದೆ ಏಕೆ ಮಾತನಾಡುವೆ? ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 284,
    english:
      '"We do not know the beginning of this cycle of debt (or causation). How can we say something is right or wrong? Alas! it is very difficult, the burden of judgement of morality. Let us leave that job to fate." - Mankutimma',
    kannada:
      "ಜೀವಋಣಗಳ ಲೆಕ್ಕದಾದಿಯರಿಯದ ನಾವು ।\r\nಆವುದನು ಸರಿಯೆನುವ?‌ತಪ್ಪಾವುದೆನುವ? ॥\r\nಓವೊ ಬಿಡು ಕಡುಕಷ್ಟ ನೀತಿನಿರ್ಣಯದ ಹೊರೆ ।\r\nದೈವವದ ಹೊರಲಿ ಬಿಡು -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಜನಿಸುವ ಎಲ್ಲ ಜೀವಿಗಳು ತಮ್ಮ ಜನ್ಮದಿಂದ ಹೊತ್ತು ತರುವ ಋಣದ ಭಾರವೆಷ್ಟು, ಅದರ ರೂಪವೇನು, ಅದರಿಂದ ಜೀವಿಗಳು ತಮ್ಮ ತಮ್ಮ ಜೀವನದಲ್ಲಿ ಏನೆಲ್ಲಾ ಅನುಭವಿಸಬೇಕು, ಹಾಗೆ ಅನುಭವಿಸುವಾಗ ಅವರು ಮಾಡುವ ತಪ್ಪುಗಳೆಷ್ಟು ಮತ್ತು ಸರಿಗಳೆಷ್ಟು ಎಂಬ ಲೆಕ್ಕಾಚಾರವನ್ನು ಮಾಡುವುದು ಬಹಳ ಕಷ್ಟ. ಅದನ್ನು ನಾವು ವಿಚಾರಮಾಡದೆ ಅದರ ನಿರ್ಣಯವನ್ನು ಆ ಪರಮಾತ್ಮನಿಗೇ ಬಿಟ್ಟುಬಿಡುವುದು ಲೇಸು ಎಂದು ಹುಟ್ಟು ಮತ್ತು ಜೀವನದ ಲೆಕ್ಕಾಚಾರವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 285,
    english:
      '"We let our mind wander in search of pleasures. But when we think about it the next morning, we get embarrassed. We withdraw the tounge that was stretched out to taste (symbolic of us reeling our minds back under control). Such control is good for the soul. " - Mankutimma',
    kannada:
      "ನಾಚಿಕೆಯನಾಗಿಪುವು ನಮ್ಮ ಸುಖದಾತುರದ ।\r\nಯೋಚನೆಗಳವನು ಮರುವಗಲು ಪರಿಕಿಸಲು ॥\r\nಚಾಚಿದ್ದ ರಸನೆ ತಾನೊಳಸೇದಿಕೊಳ್ಳುವುದು ।\r\nರೇಚನವದಾತ್ಮಕ್ಕೆ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೫ ॥",
    kannada_explanation:
      '"ನಾವು ಇಂದು ಸುಖಪಡಲು ಆತುರಪಡುವುದನ್ನು ನಾವೇ ನಾಳೆ ಯೋಚಿಸಿದರೆ, ನಮಗೆ ನಾಚಿಯಾಗುತ್ತದೆ. ಲಾಲಸೆಯಿಂದ ಆತುರ ಪಡುವ ಮನಸ್ಸನ್ನು ಹಿಂತೆಗೆದುಕೊಂಡರೆ ಒಳಗಿದ್ದ ಹೊಲಸನ್ನು ಹೊರಹಾಕಿ, ಆತ್ಮ ಶುದ್ಧಿಯಾದಂತೆ" ಎಂದು ಮನುಷ್ಯನ ಆಸೆಗಳ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 286,
    english:
      '"Both divine and demonic characters are together in a man. His actions lead both to good and bad karma. At times our eyes look at the sky (and feel happy). At other times, the same eyes roll over mud (looking down in shame)." - Mankutimma',
    kannada:
      "ಸನ್ನಿಹಿತ ಮನುಜನಲಿ ದೈವಪಾಶವವೆರಡು ।\r\nಪುಣ್ಯ ಪಾಪದ ಮಿಶ್ರವವನ ಸ್ವಭಾವ  ॥\r\nಕಣ್ಣೊಮ್ಮೆಯಾಗಸದ ಬೆಳಕಿನೊಡನಾಡುವುದು ।\r\nಮಣ್ಣೊಳುರುಳುವುದೊಮ್ಮೆ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೬ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಸ್ವಭಾವ ದೈವ ಗುಣ ಮತ್ತು ಪಶು ಗುಣಗಳ ಮಿಶ್ರಣ. ಹಾಗಾಗಿ ಅವನು ಕೆಲವು ಬಾರಿ ಪುಣ್ಯವನ್ನು ಮಾಡುತ್ತಾನೆ ಮತ್ತೆ ಕೆಲವು ಬಾರಿ ಪಾಪ ಮಾಡುತ್ತಿರುತ್ತಾನೆ, ಎಂದು ಆಗಸ ಮತ್ತು ಮಣ್ಣಿನ ಉಪಮೆಗಳನ್ನು ನೀಡುತ್ತಾ, ಮನುಷ್ಯ ಸ್ವಭಾವವನ್ನು ವಿಶ್ಲೇಸಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 287,
    english:
      '"Why are we so worried about varying natures and imperfections of people? Do we worry about the same kind of difference or imperfections on the face of the earth? There are mountains and valleys; But we don\'t get angry at any of them. Intoxicating alcohol, poison and elixir all came from the same exercise of churning the ocean. So, all of them are brotherly. One must understand this and accept people as they are with their innate qualities." - Mankutimma',
    kannada:
      "ನರರ ಸ್ವಭಾವ ವಕ್ರಗಳನೆಣಿಸುವುದೇಕೆ? ।\r\nಗಿರಿ ಕಣಿವೆಗಳ ಗಣಿಸಿ ರೋಷಗೊಳ್ಳುವೆಯೇಂ ॥\r\nಸುರೆ ಗರಲ ಸುಧೆಗಳ್ ಅಬ್ಧಿಯಲಿ ಸೋದರರಲ್ತೆ? ।\r\nಅರಿತೊಗ್ಗು ಸಾಜಕ್ಕೆ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೭ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯರ ಸ್ವಭಾವಗಳ ವಕ್ರಗಳನ್ನು ಏಕೆ ನೀನು ಎಣಿಸುತ್ತೇಯೆ? ಭೂಮಿಯ ಮೇಲಿರುವುದೆಲ್ಲ ಬೆಟ್ಟ, ಗುಡ್ಡ, ಕಣಿವೆಗಳ ಕಂಡು ನೀ ಕೋಪಗೊಳ್ಳುವೆಯಾ? ಸಮುದ್ರ ಮಂಥನದಲ್ಲಿ ‘ಹಾಲಾಹಲವೆಂಬ ವಿಷ ಮತ್ತು ಅಮೃತ’ ಕ್ಷೀರಸಾಗರದ ಗರ್ಭದಿಂದ ಸಹೋದರರಂತೆ ಹೊರಬರಲಿಲ್ಲವೇ? ಈ ಏರುತಗ್ಗುಗಳು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸಹಜವಾಗೇ ಇವೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 288,
    english:
      '"When there was Rama, there was a Ravana. When there was a Bheema, there was one Dushyasana. Is there any period in this world that did not have bad people? In your time, you should be on Rama\'s side (good side)." - Mankutimma',
    kannada:
      "ರಾಮನಿರ್ದಂದು ರಾವಣನೊಬ್ಬನಿರ್ದನಲ ।\r\nಭೀಮನಿರ್ದಂದು ದುಶ್ಶಾಸನನದೊರ್ವನ್ ॥\r\nಈ ಮಹಿಯೊಳನ್ಯಾಯಕಾರಿಯಿಲ್ಲದುದೆಂದು? ।\r\nರಾಮಭಟನಾಗು ನೀಂ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೮ ॥",
    kannada_explanation:
      "ಅಂದು ತ್ರೇತಾಯುಗದಲಿ ರಾಮನಿದ್ದಾಗಲೇ ರಾವಣನೂ ಇದ್ದನಲ್ಲ! ಹಾಗೆಯೇ, ದ್ವಾಪರದಲ್ಲಿ ಭೀಮನಿದ್ದಾಗ ಒಬ್ಬ ದುಶ್ಶಾಸನನೂ ಇದ್ದನಲ್ಲವೇ? ಈ ಭೂಮಿಯಮೇಲೆ ಈ ರೀತಿ ಸಜ್ಜನರಿದ್ದಾಗ, ಅನ್ಯಾಯಗಳನ್ನು ಮಾಡುವವರೂ ಇಲ್ಲದ ಕಾಲವೇ ಇರಲಿಲ್ಲ.. ನೀನು ರಾಮನ ಭಂಟನಾಗು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 289,
    english:
      '"This life is like a dangerous sea. We can not know its depth or its expanse. Is there any one who can dive deep, touch its bottom (understand it completely), come back to surface and tell us what is good and what is not? Without such knowledgeable people, everything other people say are just hypothesis, rumors that cause fears." - Mankutimma',
    kannada:
      "ಆಳನೀಳಗಳ ಕಾಣಲ್ಕಾಗಿಸದೆ ಮೊರೆವ ।\r\nಬಾಳ ಕಡಲೊಳು ಮುಳುಗಿ ತಳದಿಂದಲೆದ್ದು ॥\r\nಪೇಳುವರದಾರು ನ್ಯಾಯಾನ್ಯಾಯ ವಿವರಗಳ ।\r\nಗಾಳಿಗಾಬರಿಯೆಲ್ಲ -  ಮಂಕುತಿಮ್ಮ  ॥  ೨೮೯ ॥",
    kannada_explanation:
      "ಜೀವನವನ್ನು ಸಾಗರ ಎಂದಿದ್ದಾರೆ. ಹೇಗೆ ಯಾರೂ ಕಡಲ ಒಳಹೊಕ್ಕು ಅದರ ಆಳ, ಉದ್ದ ಮತ್ತು ಅಗಲವನ್ನು ಕಂಡು ಹೇಳಲು ಸಾಧ್ಯವಿಲ್ಲವೋ, ಹಾಗೆಯೇ ಬದುಕೆಂಬ ಸಾಗರದ ಆಳಕ್ಕೆ ಹೊಕ್ಕು ಇದು ನ್ಯಾಯ, ಇದು ಅನ್ಯಾಯ ಎಂದು ಹೇಳುವವರಾರು. ಹಾಗೆ ಯಾರಾದರೂ ಹೇಳಿದರೆ, ಅದು ಕೇವಲ ಊಹಾಪೋಹ ಅಥವಾ ಹೆದರಿಕೆಯಿಂದ ಹೇಳಿದ ಮಾತು ಎಂದು ತಿಳಿಯಬೇಕು ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 290,
    english:
      '"If you keep a sweet candy in front of a child and ask it not to eat, it will not work out. The child will definitely not be able to resist and try eating it. Then will you punish the child? Man already has desires which are not moral. But, fate adds intoxication to the desiring mind and encourages it." - Mankutimma',
    kannada:
      "ಸಕ್ಕರೆಯ ಭಕ್ಷ್ಯವನು ಮಕ್ಕಳೆದುರಿಗೆ ಕೈಗೆ ।\r\nಸಿಕ್ಕುವಂತಿರಿಸಿ  ಕದ್ದರೆ ಗದ್ದರಿಪುದೇಂ? ॥\r\nತಕ್ಕುದಲ್ಲದಪೇಕ್ಷೆಗೇಕೆ ಮದ್ಯವ ಕುಡಿಸು-।\r\nತುಕ್ಕಿಸುವನದನು ವಿಧಿ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೦ ॥",
    kannada_explanation:
      "ಸಿಹಿಯಾದ ಮಿಠಾಯಿಯನ್ನು ಮಕ್ಕಳ ಎದುರಿಗೆ ಇರಿಸಿ, ಅವರು ಅದನ್ನು ಕದ್ದು ತಿಂದರೆ ಗದರಿಸುವಂತೆ ಯೋಗ್ಯವಲ್ಲದ ಆಸೆಗಳಿಗೆ ನಮ್ಮ ಮನಸ್ಸುಗಳಲ್ಲಿ ಇಂಬುಕೊಡುವಂತೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲ ವಿಷಯಗಳನ್ನು ಇಟ್ಟು, ಅವುಗಳನ್ನು ಪಡೆಯಲು ನಮ್ಮ ಮನಸ್ಸನ್ನು ಹೆಂಡಕುಡಿದವನಂತೆ ಆಡಿಸುತ್ತಿದೆ ‘ವಿಧಿ’ ಎಂದು ಜೀವನದ ವಾಸ್ತವವನ್ನು ಪ್ರಸ್ತುತ ಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 291,
    english:
      "\"If you don't blow over the soot covered coal, will it catch fire? If both hands don't meet, can one clap? Desire is the mother addictions (sin); But the father is circumstances. Hence, we can never tell if the root of sin is innate or circumstantial.\" - Mankutimma\r\n\r\n[Translator's note: a classical nature v/s nurture argument.]",
    kannada:
      "ಬೀಸಿದಲ್ಲದೆ ಬೂದಿಕವಿದ ಕಿಡಿಯುರಿದೀತೆ? ।\r\nಕೈಸೋಕದಿರೆ ಕೈಯ ಸಪ್ಪುಳಾದೀತೆ? ॥\r\nವಾಸನೆಯೆ ಮಾತೆಯಾಶೆಗೆ ಪಿತನು ಸಂದರ್ಭ ।\r\nದೋಷವೊಳಗೋ ಹೊರಗೊ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೧ ॥",
    kannada_explanation:
      "ಬೂದಿ ಮುಚ್ಚಿದ ಕೆಂಡಕ್ಕೆ ಗಾಳಿಬೀಸಿದರೆ ಮತ್ತೆ ಉರಿಯುತ್ತದೆ. ಹಾಗೆಯೇ ಎರಡೂ ಕೈಗಳು ಸೋಕಿದರೆ ಸಪ್ಪಳವಾಗುತ್ತದೆ. ಇದರಂತೆಯೇ ನಮ್ಮ ಪ್ರತೀ ಕ್ರಿಯೆಗೂ ನಾವು ಹೊತ್ತು ತಂದ ವಾಸನೆಯೇ ತಾಯಿ ಮತ್ತು ನಾವು ಇರುವ ಸಂದರ್ಭವೇ ತಂದೆ. ಇದರಲ್ಲಿ ದೋಷವು ಹೊತ್ತು ತಂದದ್ದರಲ್ಲೋ ಅಥವಾ ಇಲ್ಲಿ ಗಳಿಸಿಕೊಂಡದ್ದರಲ್ಲೋ ಎಂದು ಒಂದು ಗಹನವಾದ ಪ್ರಶ್ನೆಯನ್ನು ನಮ್ಮ ಮುಂದಿಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 292,
    english:
      '"You must work to correct yourself before trying to correct the world. You must remember that there is a limit to this correction. You can do all exercise and make your finger stronger (to point mistakes in others and correct them). But can you be any comparison to Trivikrama?" - Mankutimma',
    kannada:
      "ತಿದ್ದಿಕೊಳೊ ನಿನ್ನ ನೀಂ; ಜಗವ ತಿದ್ದುವುದಿರಲಿ ।\r\nತಿದ್ದಿಕೆಗಮೊಂದು ಮಿತಿಯುಂಟು ಮರೆಯದಿರು ॥\r\nಉದ್ದ ನೀಂ ಬೆರಳನಿತು ಬೆಳೆದೀಯೆ ಸಾಮಿಂದೆ ।\r\nಸ್ಪರ್ಧಿಯೆ ತ್ರಿವಿಕ್ರಮಗೆ?-  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೨ ॥",
    kannada_explanation:
      'ಪುರಾಣದಲ್ಲಿ "ಮಹಾವಿಷ್ಣು" ವು ವಾಮನಾವತಾರದಲ್ಲಿ ತನ್ನ ಸ್ವಶಕ್ತಿಯಿಂದ ತ್ರಿವಿಕ್ರಮನಾಗಿ ಬೆಳೆದು ಭೂಮ್ಯಾಕಾಶವನ್ನು ಎರಡು ಹೆಜ್ಜೆಗಳಲ್ಲಿ ಅಳೆದು, ಮೂರನೇ ಹೆಜ್ಜೆಯನ್ನು’ಬಲಿ’ಯ ಶಿರದ ಮೇಲಿರಿಸಿ ಅವನಿಗೆ ಪಾತಾಳದಲ್ಲಿ ಸ್ಥಳ ಕಲ್ಪಿಸಿದ ಕಥೆಯಿದೆ. ನೀನು ಅವನಿಗೆ ಸ್ಪರ್ಧಿಯಾಗಲು ಸಾಧ್ಯವೇ? ಏಕೆಂದರೆ ನೀನು ಎಷ್ಟೇ ಪ್ರಯತ್ನಪಟ್ಟರೂ ಒಂದು ಬೆರಳುದ್ದ ಬೆಳೆಯಬಹುದು. ನಿನ್ನ ಬೆಳವಣಿಗೆಗೆ ಒಂದು ಮಿತಿಯುಂಟು. ನೀನು ನಿನ್ನ ಮಿತಿಯಲ್ಲಿರು. ಜಗತ್ತಿನ ಡೊಂಕನ್ನು ತಿದ್ದಲು ನಿನಗೆ ಸಾಧ್ಯವೇ? ಬದಲಾಗಿ ‘ನಿನ್ನನ್ನೇ ‘ ನೀನು ತಿದ್ದಿಕೋ ಎಂದು ಒಂದು ಸ್ಪಷ್ಟ ಆದೇಶ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಕಗ್ಗದಲ್ಲಿ. \n ಸಾವಿರಾರು ನ್ಯೂನತೆಗಳನ್ನು ನಮ್ಮಲ್ಲೇ ಇಟ್ಟುಕೊಂಡು ಅನ್ಯರ ದೋಷಗಳನ್ನು ಎತ್ತಿ ತೋರುವುದು ಸರಿಯೇ? ‘ಇವನ ಎಲೇಲಿ ಆನೆ ಸತ್ ಬಿದ್ದಿದ್ರೂ ಬೇರೇವ್ರ ಎಲೇಲಿ ನೊಣ ತೋರಿಸ್ತಾನೆ’ ಎನ್ನುವ ಮಾತು ನಾವು ಬಹಳಷ್ಟು ಬಾರಿ ಕೇಳುತ್ತೇವೆ. ನಮ್ಮ ಕೊರತೆಗಳೇ ನಮ್ಮಲ್ಲಿ ಸಾಕಷ್ಟು ಇರುವಾಗ ಅವುಗಳನ್ನು ಸರಿಪಡಿಸಿಕೊಳ್ಳದೆ ಅಥವಾ ಸರಿಪಡಿಸಿಕೊಳ್ಳುವ ಪ್ರಯತ್ನವನ್ನೂ ಮಾಡದೆ ಪರರ ದೋಷಗಳನ್ನು ಎತ್ತಿ ತೋರುವುದು,ಅದರ ಬಗ್ಗೆ ಚರ್ಚೆ ಮಾಡುವುದು ಮತ್ತು ಅವರಿಗೆ ಪುಕ್ಕಟ್ಟೆಯಾಗಿ ಸಲಹೆಗಳನ್ನು ಕೊಡುವುದು ನಮ್ಮಲ್ಲೆರಲ್ಲೂ ಸರ್ವೇ ಸಾಮಾನ್ಯವಾಗಿ ಕಾಣುವಂತಾ ಗುಣ. ಇದು ಖಂಡಿತಾ ಸರಿಯಲ್ಲ.',
  },
  {
    number: 293,
    english:
      '"There are no mountains without valleys. There can not be light without shadows. If people never died, there would be no life or births.For every virtue, there is a vice. A tide cannot rise before having fallen before (and vice-versa)." - Mankutimma',
    kannada:
      "ದರಿಯಿರದೆ ಗಿರಿಯಿಲ್ಲ, ನೆರಳಿರದೆ ಬೆಳಕಿಲ್ಲ ।\r\nಮರಣವಿಲ್ಲದೆ ಜನನಜೀವನಗಳಿಲ್ಲ ॥\r\nವರಗುಣೋನ್ನತಿಗೆ ನಿಮ್ನಗುಣಂಗಳೊಡವುಟ್ಟು ।\r\nತೆರೆ ಬೀಳದೇಳುಳುವುದೆ?-  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೩ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಯಲ್ಲಿ ಕಣಿವೆಗಳಿಲ್ಲದೆ ಬೆಟ್ಟಗಳು ಇರಲು ಸಾಧ್ಯವಿಲ್ಲ. ನೆರಲಿಲ್ಲದೆ ಬೆಳಕಿರಲು ಸಾಧ್ಯವಿಲ್ಲ. ಮರಣವಿಲ್ಲದೆ ಜನನ ಮತ್ತು ಜೀವನಗಳಿಲ್ಲ. ಹಾಗೆಯೇ ಮನುಷ್ಯನೂ ಸಹ ತನ್ನ ಮನಸ್ಸು ಬುದ್ಧಿಗಳಲ್ಲಿ ಕೆಲಬಾರಿ ಒಳ್ಳೆಯಗುಣಗಳಿಂದ ಔನ್ನತ್ಯದಲ್ಲಿರುತ್ತಾನೆ ಮತ್ತೆ ಕೆಲವು ಬಾರಿ ನೀಚ ಗುಣಗಳಿಂದ ಅದೋಗತಿಯಲ್ಲಿರುತ್ತಾನೆ.ಹೇಗೆ ಸಮುದ್ರದಲ್ಲಿನ ಮೇಲೆದ್ದ ತೆರೆಗಳು ಕೆಳಗೆ ಬೀಳುತ್ತವೆಯೋ ಹಾಗೆಯೇ ಮನುಷ್ಯನ ಗುಣಗಳೂ ಸಹ ಎಂದು ಮನುಷ್ಯನ ಮನಸಿನ ಗುಣಗಳನ್ನು ಹಲವು ಉಪಮೆಗಳೊಂದಿಗೆ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 294,
    english:
      '"For a tasty meal it must have a little salt, a little sour, a little hot and a little sweet - all to correct proportions. If it is not so, then how can one eat such food? Similarly, our life must be a proportional combination of mistakes, right choices, stupidity, intelligence, beauty and shortcomings. With twenty such qualities life becomes meaningful." - Mankutimma',
    kannada:
      "ಉಪ್ಪಿಷ್ಟು  ಹುಳಿಯಿಷ್ಟು  ಕಾರ ಸಿಹಿಯಷ್ಟಿಷ್ಟು  ।\r\nಒಪ್ಪಿರ್ದೊಡದು ಭೋಜ್ಯವಂತು ಜೀವಿತಮುಂ ॥\r\nತಪ್ಪು ಸರಿ ಬೆಪ್ಪು ಜಾಣಂದಕುಂದುಗಳ ಬಗೆ ।\r\nಯಿಪ್ಪತ್ತು ಸೇರೆ ರುಚಿ -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೪ ॥",
    kannada_explanation:
      "ನಾವು ಮಾಡುವ ಊಟದಲ್ಲಿಉಪ್ಪು, ಹುಳಿ, ಕಾರ, ಸಿಹಿ, ಸರಿಯಾದ ಪ್ರಮಾಣದಲ್ಲಿ ಒಪ್ಪವಾಗಿ ಇದ್ದರೆ ಹೇಗೆ ತೃಪ್ತಿಯಿಂದ ಭೋಜನಮಾಡಬಹುದು.ಹಾಗೆಯೇ ಬದುಕಿನಲ್ಲೂ ಸರಿ, ತಪ್ಪು, ಪೆದ್ದುತನ, ಜಾಣ್ಮೆ, ಅಂದ, ಕುಂದು, ಮುಂತಾದ ಹತ್ತಾರು ಬಗೆಯ ಭಾವಗಳು ಸೇರಿದರೆ ಜೀವನವೂ ನೀರಸವಾಗದೆ ‘ಸಮರಸ’ವಾಗಿರುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 295,
    english:
      '"If a person does not tolerate mistakes from any one and considers himself perfect then he is like a crab\'s eye seed which think it is red and oblivious to its back which is black. If you want to know if your sweat is sweet or salty, then you have lick and taaste. You will know that it is salty, just like anyone else. At least now, do you agree that there is a Creator?" - Mankutimma',
    kannada:
      "ತಪ್ಪನಿನಿತುಂ ಸೈಸದಪ್ಪಟದ ಗುಣಶಾಲಿ ।\r\nಕಪ್ಪು ಕಂಡು ಕನಲ್ವ ಕೆಂಡ ಗುಲಗಂಜಿ ॥\r\nಉಪ್ಪೊ  ಸಪ್ಪೆಯೊ ನಿನ್ನ ಮೈಬೆವರು ನೆಕ್ಕಿ ತಿಳಿ ।\r\nಒಪ್ಪಿಹೆಯ ನೀನಜನ?-  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೫ ॥",
    kannada_explanation:
      "ತಾನು ಮಹಾ ಗುಣಶಾಲಿ, ತಾನು ತಪ್ಪೇ ಮಾಡಿಲ್ಲ, ತಾನು ಹಿಂದೆ ಎಂದೂ ತಪ್ಪೇ ಮಾಡಿಲ್ಲ ಮತ್ತು ಮುಂದೆಯೂ ಮಾಡುವುದಿಲ್ಲ ಎಂದು ಡಂಬ ಕೊಚ್ಚಿಕೊಳ್ಳುವವರನ್ನು ಮತ್ತು ಅಂತಹ ಮನೋಭಾವದಿಂದ ಅನ್ಯರಲ್ಲಿ ‘ಗುಣ’ವನ್ನೇ ನೋಡದವರನ್ನು ನಾವು ಕಂಡಿದ್ದೇವಲ್ಲವೇ? ತನ್ನ ಮೈಮೇಲೆ ಕಪ್ಪು ಚುಕ್ಕೆ ಇದ್ದಾಗ್ಯೂ ಕಪ್ಪನ್ನು ಕಂಡು ಕೋಪಗೊಳ್ಳುವ ಕೆಂಪನೆಯ ಗುಲಗಂಜಿಯಂತೆ ಇವರು. ನಮ್ಮ ಬೆವರು ಉಪ್ಪೋ ಸಪ್ಪೆಯೋ ಎಂದು ನಮ್ಮ ಬೆನ್ನನ್ನು ನಾವೇ ನೆಕ್ಕಿ ನೋಡಿದರೆ ತಿಳಿಯುತ್ತದೆ. ಸೃಷ್ಟಿಕರ್ತನನ್ನು ನೀನು ನಂಬುವೆಯಾ? ಎಂದು ಒಂದು ವಿಡಂಬನೆಯನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ",
  },
  {
    number: 296,
    english:
      '"Friend, there is a powerful weapon in a compassion filled eyes that is not found in the harsh words. A sinner may not be get reformed by the fear of a sword, but his heart could melt down by compassion." - Mankutimma',
    kannada:
      "ಮರುಕದುಂಬಿದ ಕಣ್ಣನೋಟದೊಳಗಿದ್ದೀತು ।\r\nಬಿರುನುಡಿಯೊಳಿರದೊಂದು ಕೂರಲಗು, ಸಖನೆ ॥\r\nಕರವಾಳಕದಿರದಿಹ ದುರಿತಕಾರಿಯ ಹೃದಯ ।\r\nಕರುಣೆಯಿಂ ಕರಗೀತೊ-  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೬ ॥",
    kannada_explanation:
      "ಯಾರಾದರೂ ದುಷ್ಟನನ್ನು ತಿದ್ದಲು ನಾವು ಕೋಪಗೊಂಡು ಎರಡು ಮಾತನಾಡಬಹುದು. ಆದರೆ ನಿರೀಕ್ಷಿದ ಪರಿಣಾಮ ಬಾರದೆ, ದುಷ್ಟ ತಿರುಗಿ ಬೀಳುವ ಅಥವಾ ಅಸಡ್ಡೆಯ ಪ್ರತಿಕ್ರಿಯೆ ತೋರಬಹುದು. ಕತ್ತಿಯಂತೆ ತೀಕ್ಷ್ಣವಾದ ಮಾತುಗಳಿಂದ ಅಥವಾ ಬಿರುನುಡಿಗಳಿಂದ ಬದಲಾಗದ ದುಷ್ಟ, ಮರುಕ ತೋರಿ ಕರುಣೆಯಿಂದ ಮಾತನಾಡಿ, ಪ್ರೀತಿಯಿಂದ ಅವನನ್ನು ತಿದ್ದಲು ಪ್ರಯತ್ನಮಾಡಿದಾಗ, ಅವನ ಮನ ಕರಗಿ ಬದಲಾಗಬಹುದು,ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ತಿಳಿಹೇಳಲು ಪ್ರಯತ್ನಪಡುತ್ತಾರೆ.",
  },
  {
    number: 297,
    english:
      '"There are a lot of good qualities described in the scriptures. Two of them are the best and most difficult to cultivate. One is to be free from jealousy. The other is to forgive a sinner. These are the very best practices that one must follow." - Mankutimma',
    kannada:
      "ಪೆರ್ಮೆಯ ಗುಣಂಗಳಿನ್ನೂರು ಶಾಸ್ತ್ರೋಕ್ತದವು  ।\r\nಸರ್ವೋತ್ತಮಗಳೆರಡು ಸರ್ವಕಠಿನಗಳು  ॥\r\nನಿರ್ಮತ್ಸರತೆಯೊಂದು ದೋಷಿಯೊಳ್ ಕ್ಷಮೆಯೊಂದು  ।\r\nಬ್ರಾಹ್ಮಿಕಾಭ್ಯಾಸವದು -  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೭ ॥",
    kannada_explanation:
      "ನಮ್ಮಲ್ಲಿ ಶಾಸ್ತ್ರದಲ್ಲಿ ಮತ್ತು ಹಿರಿಯರಿಂದ ‘ಉತ್ತಮಗುಣಗಳು’ ಎಂದು ಹೇಳಪಟ್ಟಿರುವುದು ಹಲವಾರು ಮತ್ತು ಅದರ ಪಟ್ಟಿ ಬಹಳ ದೊಡ್ಡದು. ಆದರೆ ಅತ್ಯುತ್ತಮವಾದ ಆದರೆ ಪಾಲಿಸಲು ಬಹಳ ಕಠಿಣವಾದ ಅತ್ಯುತ್ತಮ ಗುಣಗಳು ಎರಡು ಮಾತ್ರ. ಒಂದು ಅನ್ಯರ ದೋಷವನ್ನು ಕ್ಷಮಿಸುವುದು ಮತ್ತು ಪರರಲ್ಲಿ ಮತ್ಸರವಿಲ್ಲದಿರುವುದು. ಇವುಗಳನ್ನು ಅಭ್ಯಾಸಮಾಡುವುದು ಬಹಳ ಉತ್ತಮವಾದುದು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 298,
    english:
      '"Man\'s nature is not to constant; not etched in stone, not immovable as wodden pillars. It is mercurial. People take brave vows to control their own character. A while later, they realize they were wrong. Such efforts to stay constant are not for ever. We must understand and endure such insteadiness." - Mankutimma',
    kannada:
      "ಗಾರೆಗಚ್ಚೀನಲ್ಲ ದಾರು ದೂಲಗಳಲ್ಲ ।\r\nಪಾರದ ದ್ರವದವೊಲು ಮನುಜಸ್ವಭಾವ ॥\r\nವೀರಶಪಥಗಳಿಂದೆ ಘನರೂಪಿಯಾಗದದು ।\r\nಸೈರಿಸದನಿನಿತು ನೀಂ-  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೮ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಮನಸ್ಸಿನಸ್ವಭಾವ ಗಟ್ಟಿಯಾದ ಇಟ್ಟಿಗೆ ಮತ್ತು ಗಾರೆಗಳಿಂದ ಮಾಡಿದ್ದಲ್ಲ.ಇದಕ್ಕೆ ಗಟ್ಟಿಯಾದಯಾವ ಮರದ ಭಾರವಾದ ತೊಲೆಯ ಆಧಾರವೂ ಇಲ್ಲ. ಎಷ್ಟೇ ದೃಢವಾಗಿ ನಿರ್ಧಾರ ಮಾಡಿದರೂ, ಮನಸ್ಸು ಪಾದರಸದಂತೆ ಒಂದೆಡೆ ನಿಲ್ಲದೆ ಚಂಚಲವಾಗಿರುತ್ತದೆ. ಇಂತಹ ಚಂಚಲ ಮನಸ್ಸನ್ನು ಸಹಿಸಿದರೆ ಮಾತ್ರ ನಮ್ಮ ಜೀವನ ಸುಗಮವಾಗುತ್ತದೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 299,
    english:
      '"One must not take a hard-liner\'s approach in life. Is it possible? There are as many lies in our lives mixed up as our turths. Can a wall built of mud (us) stay put under pressure? We should not be so hard on rest of the world when we ourselves are imperfect." - Mankutimma',
    kannada:
      "ಹಟವಾದಕೆಡೆಯೆಲ್ಲಿ ಮನುಜಪ್ರಪಂಚದಲಿ? ।\r\nಸಟೆಯೆಷ್ಟೊ  ದಿಟವೆಷ್ಟೊ  ಬೆರೆತಿರುವುವಿಲ್ಲಿ ॥\r\nಪಟುವಾಗಿ ನಿಲಲಹುದೆ ಮಣಲೊಳೆಸಗಿದ ಗೋಡೆ? ।\r\nಕಟುತೆ ಸಲ್ಲದು ಜಗಕೆ-  ಮಂಕುತಿಮ್ಮ  ॥ ೨೯೯ ॥",
    kannada_explanation:
      'ಖಂಡಿತವಾದಕ್ಕೆ ಅಥವಾ ಹಟವಾದಕ್ಕೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸ್ಥಾನವಿಲ್ಲ.ಏಕೆಂದರೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಿಜ ಮತ್ತು ಸುಳ್ಳು ಸಮಾನ ಪ್ರಮಾಣದಲ್ಲಿ ಬೆರೆತಿದೆ. ಹೀಗೆ ಸುಳ್ಳು ಸತ್ಯಗಳ ಸಂಮಿಶ್ರಣದಿಂದ ಆದ ಈ ಜಗತ್ತು ಹೇಗಿದೆಯೆಂದರೆ ಮರಳಲ್ಲಿ ಕಟ್ಟಿದ ಗೋಡೆಯಂತಿದೆ.ಹಾಗಾಗಿ ಜಗತ್ತಿನಲ್ಲಿ " ಇದು ಹೀಗೇ ಇರಬೇಕು ಎಂದಾಗಲೀ ಅಥವಾ ಇದು ಹೀಗೇ ಆಗಬೇಕು’ ಎಂಬ ಕಟುತ್ವ ಇರಬಾರದು ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.',
  },
  {
    number: 300,
    english:
      '"The same object hsa different importance for others. A smiling flower in a plant will make a naturalist happy. A tasteful youth will be happy if his wife wears that flower. A devotee will be happy if that flower is placed on the idol at the temple. For a flower maid, it is just a means to make money."- Mankutimma',
    kannada:
      "ಗಿಡದಿ ನಗುತಿರುವ ಹೂ ಪ್ರಕೃತಿಸಖನಿಗೆ ಚೆಂದ ।\r\nಮಡದಿ ಮುಡಿದಿರುವ ಹೂ ಯುವಕಂಗೆ ಚೆಂದ  ॥\r\nಗುಡಿಯೊಳಗೆ ಕೊಡುವ ಹೂ ದೈವಭಕ್ತಗೆ ಚೆಂದ ।\r\nಬಿಡಿಗಾಸು ಹೂವಳಗೆ-  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೦ ॥",
    kannada_explanation:
      "ಗಿಡದಲ್ಲಿ ಅರಳಿದ ಹೂ ಕಂಡು ನಿಸರ್ಗ ಪ್ರೇಮಿ ಸಂತಸಪಡುತ್ತಾನೆ. ಅದೇ ಹೂವನ್ನು ತನ್ನ ಮಡದಿಯ ತುರುಬಿನಲ್ಲಿ ಕಂಡು ಆನಂದಿಸುತ್ತಾನೆ ರಸಿಕ ಯುವಕ. ಆ ಹೂವನ್ನು ದೇವಾಲಯದಲ್ಲಿ ದೇವರ ಪಾದಕ್ಕೆ ಭಕ್ತಿಯಿಂದ ಸಮರ್ಪಿಸಿ ಶ್ರದ್ಧೆಯಿಂದ ಪ್ರಸಾದದ ರೂಪದಲ್ಲಿ ಸ್ವೀಕರಿಸುತ್ತಾನೆ ಭಕ್ತ. ಆದರೆ ಯಾರು ಹೇಗೆ ಉಪಯೋಗಿಸಿಕೊಂಡರೂ ಆ ಹೂವನ್ನು ಮಾರುವವನಿಗೆ ಅದು ಮಾರಾಟವಾಗಿ ಅವನಿಗೆ ಕಾಸು ಬಂದರೆ ತೃಪ್ತಿ ಎಂದು ಸಾಮಾನ್ಯ ಬದುಕಿನ ಒಂದು ಸತ್ಯವನ್ನು ವಿಮರ್ಶಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 301,
    english:
      '"Here is better. There is better. Somewhere else is better. A calf thinks one pasture is better than the other and keeps running from one to another without grazing. Thus, it gets tired. If you also run behind pleasures like that, where is happiness for you?" - Mankutimma',
    kannada:
      "ಇಲ್ಲಿ ಚೆನ್ನಲ್ಲಿ ಚೆನ್ನೆಲ್ಲೊ ಚೆನ್ನೆನುತೆಣಿಸಿ ।\nಹುಲ್ಲು ಬಯಲೊಂದೆಡೆಯಿನೊಂದಕ್ಕೆ ನೆಗೆದು ॥\nಮೆಲ್ಲದೆಯೆ ಧಾವಿಸುತ ದಣಿವ ಕರುವನು ಪೋಲ್ತೊ- ।\nಡೆಲ್ಲಿಯೋ ಸುಖ ನಿನಗೆ ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೧ ॥",
    kannada_explanation:
      'ಒಂದು ವಿಶಾಲವಾದ ಹುಲ್ಲ ಬಯಲಲ್ಲಿ,ಒಂದು ಆಕಳ ಕರು ಚಂಗು ಚಂಗೆಂದು ನೆಗೆಯುತ್ತಾ ‘ ಒಳ್ಳೆಯ ಹುಲ್ಲು ಇಲ್ಲಿದೆ, ಆಲ್ಲಿ ಚೆನ್ನಾಗಿದೆ ಅಥವಾ ಇನ್ನೂ ಎಲ್ಲೋ ಚೆನ್ನಾಗಿರಬಹುದು" ಎಂದು ಯೋಚಿಸಿ, ಎಲ್ಲ ಕಡೆ ಓಡಿ, ಕಡೆಗೆ ಎಲ್ಲಿಯೂ ಮೆಲ್ಲದೆಯೇ ಓಡಿ ಓಡಿ ದಣಿವಂತೆ ಇದೆ ನಿನ್ನ ಪರಿಸ್ತಿತಿ. ಈ ವಸ್ತುವಿನಲ್ಲಿ ಸುಖವಿದೆ, ಆ ವಸ್ತುವಿನಲ್ಲಿ ಆನಂದವಿದೆ ಅಥವಾ ನಾ ಹುಡುಕುವ ಸುಖ ಮತ್ತು ಆನಂದ ಬೇರೆ ಯಾವ ವಸ್ತುವಿನಲ್ಲಿದೆಯೋ ಎಂದು ವಸ್ತುವಿನಿಂದ ವಸ್ತುವಿಗೆ ಮತ್ತು ವಿಷಯದಿಂದ ವಿಷಯಕ್ಕೆ ನೆಗೆ – ನೆಗೆದು ನೀ ದಣಿಯುತ್ತಿದ್ದೀಯಲ್ಲ, ನಿನಗಾವುದರೊಳಗೆ ಸುಖ ? ಎಂದು ಸುಖದಾಸೆಯ ಭ್ರಮೆಯಲ್ಲಿ ಸುತ್ತುವ ನಮ್ಮನ್ನು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.',
  },
  {
    number: 302,
    english:
      '"Ants build an ant-hill by carrying each grain of sand laboriously and working incessantly. Later it becomes home for a poisonous snake. Man’s effort also  suffer the same fate." - Mankutimma',
    kannada:
      "ಹೊತ್ತು ಕಣಕಣದಿ ಮಣ್ಣನು ಗೆದ್ದಲಿರುವೆಗಳು ।\nಮೆತ್ತುತೆಡೆಬಿಡದೆ ದುಡಿದಾಗಿಸಿದ ಗೂಡು ॥\nಹುತ್ತವಾಗುವುದು ವಿಷಸರ್ಪಕ್ಕೆ; ಮಾನವನ ।\nಯತ್ನಗಳ ಕಥೆಯಿಷ್ಟೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೨ ॥",
    kannada_explanation:
      "ಇರುವೆಗಳು ಮಣ್ಣ ಕಣ ಕಣವನ್ನು ನಿರಂತರವಾಗಿ ಹೊತ್ತು ತಂದು ಬಹಳ ಶ್ರಮ ಪಟ್ಟು ಗೂಡನ್ನು ಕಟ್ಟುತ್ತವೆ. ಆದರೆ ಅದರೊಳಕ್ಕೆ ಒಂದು ಹಾವು ಬಂದು ವಾಸಿಸುತ್ತದೆ. ಇರುವೆಗಳ ಶ್ರಮ ಅವುಗಳಮಟ್ಟಿಗೆ ಸಂಪೂರ್ಣ ವ್ಯರ್ಥವಾಗುತ್ತದೆ. ಹಾಗೆಯೇ ಮನುಷ್ಯರು ನಿರಂತರ ಶ್ರಮಪಟ್ಟು ಕೆಲಸಮಾಡಿ ಆ ಕೆಲಸದ ಫಲವನ್ನು ಪರರು ಕಸಿದುಕೊಂಡು ಬಿಡುತ್ತಾರೆ ಎಂದು ಒಂದು ಜಗತ್ಸತ್ಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 303,
    english:
      '"One plays merry-go-round and has fallen flat with dizziness. Another one is day dreaming and has forgotten the real world. There is another one who is endlessly weighing the right and the wrong for every action. All of them are not doing any action. Who among the three is the most dumb?" - Mankutimma',
    kannada:
      "ಅಪ್ಪಾಲೆ ತಿಪ್ಪಾಲೆ ತಿರುಗಿಬಿದ್ದವನೊಬ್ಬ ।\nಸ್ವಪ್ನಲೋಕದಿ ತಿರೆಯ ಮರೆತಾತನೊಬ್ಬ ॥\nತಪ್ಪುಸರಿಗಳ ತೂಕವಳೆಯೆ ಕುಳಿತವನೊಬ್ಬ ।\nಬೆಪ್ಪನಾರ್ ಮೂವರಲಿ ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೩ ॥",
    kannada_explanation:
      "ಆ ಚಿಕ್ಕ ಮಕ್ಕಳು ‘ ಅಪ್ಪಾಲೆತಿಪ್ಪಾಲೆ ‘ ಆಡುವಾಗ ತಲೆ ಸುತ್ತಿದಂತಾಗುತ್ತದೆ. ಹಾಗೆ ಈ ಬದುಕಿನಲ್ಲಿ ತಿರುಗಿ ತಿರುಗಿ ತಲೆ ಸುತ್ತಿ ಭ್ರಮೆ ಹಿಡಿದು ಕುಳಿತಂತವನು ಒಬ್ಬ, ತಾನು ತಿರಿದು ತಂದ ಭಿಕ್ಷೆಯನ್ನುಕನಸು ಕಾಣುತ್ತಾ ಕಾಲಲ್ಲಿ ಒದ್ದು, ಇದ್ದದ್ದನ್ನೂ ಕಳೆದುಕೊಂಡ ‘ ತಿರುಕನೋರ್ವನೂರಮುಂದೆ ‘ ಎನ್ನುವ ಪದ್ಯದಲ್ಲಿ ಬರುವ ತಿರುಕನೊಬ್ಬ, ಮತ್ತು ಸದಾ ಕಾಲ ಅನ್ಯರ ತಪ್ಪುಸರಿಗಳ ಎಣಿಕೆಹಾಕುತ್ತಾ ಕೂರುವವನೊಬ್ಬ. ಈ ಮೂವರಲ್ಲಿ ಬೆಪ್ಪನಾರು ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 304,
    english:
      '"Sisyphus is punished by the Gods to roll a boulder a hill only to see it roll back down again. He has to do this till eternity. This is the same fate of human progress. Cycles of progress and devastation continue forever." - Mankutimma\n\n\n[Translator’s note: http://en.wikipedia.org/wiki/Sisyphus ]',
    kannada:
      "ಗಿರಿಯ ಮೇಲಕೆ ದೊಡ್ದ ಬಂಡೆಯನು ಸಿಸಿಫಸನು ।\nಉರುಳಿಸಿರಲೊಂದೆರಡು ಮಾರು ಘಾಸಿಯಲಿ ॥\nಸರಿದು ಕೆಳಕದದೆಂತೊ ಜಾರುವುದು ಮರಮರಳಿ ।\nಪುರುಷಪ್ರಗತಿಯಂತು -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೪ ॥",
    kannada_explanation:
      "ಸಿಸಿಫಸನು ಸಾವನ್ನು ನಾಲ್ಕು ಬಾರಿ ದಾರಿ ತಪ್ಪಿಸಿಕೊಂಡದ್ದರಿಂದ ಮೃತ್ಯುದೇವನು ಅವನಿಗೆ, ದೊಡ್ಡದೊಂದು ಬಂಡೆಯನ್ನು ಬೆನ್ನಮೇಲೆ ಹೊತ್ತುಕೊಂಡು ಹೋಗಿ ಅದನ್ನು ಬೆಟ್ಟದ ಮೇಲಿರಿಸಿ ಬರಬೇಕೆಂದು ಶಿಕ್ಷೆ ವಿಧಿಸಿದನಂತೆ. ಆದರೆ ಅವನು ಪ್ರತೀ ಬಾರಿ ಅದನ್ನು ಹೊತ್ತುಕೊಂಡು ಹೋಗಿ ಅಲ್ಲಿಡುವುದರಲ್ಲೇ, ಯಾವುದೋ ಕಾರಣಕ್ಕೆ ಅದು ಉರುಳಿ ಹೋಗುತ್ತಿತ್ತಂತೆ. ನಮ್ಮ ಪ್ರಗತಿಯೂ ಹಾಗೇ ಇದೆ ಎಂದು ಮನುಷ್ಯ ಪ್ರಗತಿಯ ಒಂದು ರೂಪವನ್ನು ನಮಗೆ ದರ್ಶನ ಮಾಡಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 305,
    english:
      '"There are so many coincidences in world (like the time of a crow sitting on a palm tree and the palm leaf falling). The causation of events is beyond our analysis. Our eyes wander without reason. It catches attention of some things without reason. The end result of trying to analyze is only anxiety." - Mankutimma',
    kannada:
      "ಕಾಕತಾಳೀಯ ಕಥೆ ಲೋಕಚರಿತೆಯೊಳೆಷ್ಟೊ! ।\nತೀಕೆಗೆಟುಕವು ನಮಗೆ ಕಾರ್ಯಕಾರಣಗಳ್ ॥\nಎಕೊ ಕಣ್ಣಲೆಯುವುದು; ಎನೊ ಅದ ಪಿಡುಯುವುದು ।\nವ್ಯಾಕುಲತೆ ಫಲಿತಾಂಶ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೫ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಚರಿತ್ರೆಯಲ್ಲಿ ನಡೆದ ಘಟನೆಗಳು ಕಾಕತಾಳೀಯವಾಗಿ ನಡೆದಿರುವುದೆಷ್ಟೋ? ಒಂದು ಕಾಗೆ ತಾಳೆ ಮರದ ಮೇಲೆ ಕುಳಿತ ತತ್ಕ್ಷಣ ಆ ಮರದಿಂದ ಒಂದು ಹಣ್ಣು ಬಿದ್ದರೆ!!!! ಆ ಘಟನೆಗಳಿಗೆ ಕಾರಣವನ್ನು ಹುಡುಕುವುದು ಕಷ್ಟ. ಅದಕ್ಕೇ ಕಾಕತಾಳೀಯ ಎನ್ನವುದು. ಅದು ಗೊತ್ತಿದ್ದರೂ ನಮ್ಮ ಕಣ್ಣುಗಳು ಕಂಡದ್ದನ್ನೆಲ್ಲ ಹಿಡಿಯಲು ಮತ್ತು ಪಡೆಯಲು ಆಸೆಪಡುವುದು. ಆದರೆ ಅದನ್ನು ಹಿಡಿಯಲು ಆಗದೆ, ಪಡೆಯಲು ಸೋತು, ಕೇವಲ ಮನೋ ವ್ಯಾಕುಲತೆ ಮಾತ್ರ ನಮಗೆ ಸಿಗುವ ಫಲ ಎಂದು ಮಾನವರ ಪ್ರಯತ್ನಗಳ ಕಥೆಯನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ಅರುಹುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 306,
    english:
      '"Brave and courageous Ceasar and Anthony were mesmerized by the shape of her nose and became slaves of Cleopatra. This resulted in them and their country being defamed. Such stories are common in human history when something so precious is lost for frivolous reasons." - Mankutimma',
    kannada:
      "ನಾಸಿಕದ ಮಾಟದಿಂದಾ ಕ್ಲಿಯೋಪ್ಯಾಟ್ರಳಿಗೆ ।\nದಾಸರಾದರು ಶೂರ ಸೀಸರ್ ಆಂಟನಿಗಳ್ ॥\nದೇಶಚರಿತೆಗಮವರ ಜಸಕಮಂಕುಶವಾಯ್ತು ।\nನಾಸಾಪುಟದ ರೇಖೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೬ ॥",
    kannada_explanation:
      "ಕ್ಲಿಯೋಪ್ಯಾಟ್ರ ಎಂಬುವಳು ಸೀಸರನ ಕಾಲಕ್ಕೆ ಗ್ರೀಕ್ ದೇಶದ ರಾಣಿ. ಸೀಸರ್ ಮತ್ತು ಅಂಟನಿ ಮಿತ್ರರು. ಆ ಕ್ಲಿಯೋಪ್ಯಾಟ್ರಳ ನಾಸಿಕದ ಸೌಂದರ್ಯಕ್ಕೆ ಬಲಿಯಾಗಿ ಇವರಿಬ್ಬರೂ ಅವಳ ದಾಸರಾಗಿ ದೇಶವನ್ನು ಕಡೆಗಣಿಸಿ, ರಾಜ್ಯದಲ್ಲಿ ಪಿತೂರಿ ಮತ್ತು ಒಳಪಿತೂರಿ ನಡೆಸಿ, ಕಡೆಗೆ ದೇಶದ ಹಿತವನ್ನೇ ಕಡೆಗಣಿಸಿ ನಾಶವಾದರು. ಹೀಗೆ, ವ್ಯರ್ಥವಾದ ಅಥವಾ ಕೆಲಸಕ್ಕೆ ಬಾರದ ವಿಷಯ ಅಥವಾ ವಸ್ತುವಿಗೆ ದಾಸರಾಗಿ ನಮ್ಮ ನಮ್ಮ ಜೀವನದ ದಿಕ್ಕನ್ನು ತಪ್ಪಿಸುವಂಥಾ ಕೆಲಸವನ್ನು ನಾವು ಮಾಡುತ್ತೇವೆ, ಎಂದು ನಿರ್ಧಿಷ್ಟ ವಿಷಯ ವ್ಯಕ್ತಿ ಅಥವಾ ವಸ್ತುವಿಗೆ ದಾಸರಾಗುವವರ ಚರಿತ್ರೆಯನ್ನು ಸಾದೋಹರಣವಾಗಿ ವರ್ಣಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ .",
  },
  {
    number: 307,
    english:
      '"In the court of Indra, Vishwamitra and Vasishta had an argument. The result of that was all the hardships that Harishchandra had to face. The troubles we face could also come to us from nowhere. We have to just endure them as they come." - Mankutimma\n\n[Translator’s note: http://en.wikipedia.org/wiki/Harishchandra ]',
    kannada:
      "ಸುರಪಸಭೆಯಲಿ ಗಾಧಿಸುತ ವಸಿಷ್ಟ ಸ್ಪರ್ಧೆ ।\nಧರೆಯೊಳದರಿಂ ಹರಿಶ್ಚಂದ್ರಂಗೆ ತಪನೆ ॥\nಬರುವುದಿಂತೆತ್ತಣಿನೊ ಬೇಡದ ಪ್ರಾರಬ್ಧ ।\nಕರುಮಗತಿ ಕೃತ್ರಿಮವೊ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೭ ॥",
    kannada_explanation:
      "ಒಂದುಬಾರಿ ಇಂದ್ರನ ಒಡ್ಡೋಲಗದಲ್ಲಿ ದೇವರ್ಷಿ ವಸಿಷ್ಠನಿಗೂ ವಿಶ್ಮಾಮಿತ್ರನಿಗೂ ‘ಸತ್ಯವನ್ನೇ’ ನುಡಿಯುವ ವ್ಯಕ್ತಿಗಳ ಬಗ್ಗೆ ವಾದ ವಿವಾದವಾಯಿತಂತೆ. ಅದರ ಫಲವೇ ಭೂಮಿಯಮೇಲಿದ್ದ ಹರಿಶ್ಚಂದ್ರನ ಜೀವನದಲ್ಲಿ ಉಂಟಾದ ತಾಪತ್ರಯಗಳು ಮತ್ತು ಏರುಪೇರುಗಳು. ಹೀಗೆ ಪ್ರಾರಬ್ಧಕರ್ಮ ನಮ್ಮನ್ನು ಹೇಗೆ ಯಾವಾಗ ಯಾವ ರೀತಿಯಲ್ಲಿ ಕಾಡುತ್ತದೆ ಎಂದು ಹೇಳುವುದು ಅಸಾಧ್ಯವೆಂದು ಜೀವನದ ನಗ್ನ ಸತ್ಯವನ್ನು ವಿವರಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 308,
    english:
      '"Government is like a coracle. There are whirls and strong currents on either side. Drunkards are in charge of the oars. There is a strong wind. There are people who are dancing (like revolting). It is surprising that it has not capsized." - Mankutimma',
    kannada:
      "ಸರಕಾರ ಹರಿಗೋಲು, ತೆರೆಸುಳಿಗಳತ್ತಿತ್ತ ।\nಸುರೆ ಕುಡಿದವರು ಕೆಲರು ಹುಟ್ಟು  ಹಾಕುವರು ॥\nಬಿರುಗಾಳಿ ಬೀಸುವುದು, ಜನವೆದ್ದು ಕುಣಿಯುವುದು ।\nಉರುಳದಿಹುದಚ್ಚರಿಯೊ‌!‌-  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೮ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಸರಕಾರ ಒಂದು ಹರಿಗೋಲಿದ್ದಂತೆ. ಆಡಳಿತದ ಸಾಗರದಲ್ಲಿ ಈ ಸರಕಾರದ ಹರಿಗೋಲು, ತೆರೆಗಳ ಮತ್ತು ಸುಳಿಗಳ ತುಯ್ದಾಟದ ನಡುವೆ ಸಾಗುತ್ತಿದೆ. ಇದರ ಚುಕ್ಕಾಣಿ ಹಿಡಿದು ಹುಟ್ಟು ಹಾಕುವವರು ಹೆಂಡ ಕುಡಿದವರಂತೆ ಅಧಿಕಾರದಿಂದ ಉನ್ಮತ್ತರಾಗಿ ನಡೆದುಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ. ವಿರೋದಪಕ್ಷದವರು ಕಾಲೆಳೆಯಲು ಪ್ರಯತ್ನಿಸಿದರೂ, ಜನರಿಗೆ ಏನಾಗುವುದೋ ಎಂದು ಕಳವಳದಿಂದ ಇದ್ದರೂ, ಈ ಸರಕಾರವೆಂಬ ದೋಣಿ ಉರುಳಿ ಮುಳುಗಿ ಹೋಗದೆ ಇರುವುದೇ ಆಶ್ಚರ್ಯ ಎಂದು ನಮ್ಮ ಸರಕಾರ, ವಿರೋಧಪಕ್ಷಗಳು ಮತ್ತು ಆಡಳಿತ ವ್ಯವಸ್ಥೆಯನ್ನು ವಿಮರ್ಶೆಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ .",
  },
  {
    number: 309,
    english:
      '"What will happen if a cow comes into an area with wild animals? What is the use of a philosopher in a street full of businessmen? Will the chaotic world intoxicated by injustice think about right or wrong?" - Mankutimma',
    kannada:
      "ವನ್ಯಮೃಗಗಳ ನಡುವೆ ಗೋವು ಬಂದೇನಹುದು? ।\nಪಣ್ಯವೀಧಿಯಲಿ ತಾತ್ತ್ವಿಕನಿಗೇನಹುದು‌? ॥\nಅನ್ಯಾಯದುನ್ಮತ್ತ ಕೋಲಾಹಲದ ಲೋಕ ।\nಪುಣ್ಯವನು ಚಿಂತಿಪುದೆ ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೦೯ ॥",
    kannada_explanation:
      "ಕಾಡುಪ್ರಾಣಿಗಳ ನಡುವೆ ಹಸು ಬಂದರೆ ಏನಾಗುತ್ತದೆ? ಅವುಗಳೆಲ್ಲ ಅದನ್ನು ಕೊಂದು ತಿನ್ನುತ್ತವೆ. ವ್ಯಾಪಾರ ನಡೆಯುವ ಬೀದಿಯಲ್ಲಿ ಯಾವನೋ ಒಬ್ಬ ತತ್ವಜ್ಞಾನಿ ತತ್ವವನ್ನು ಹೇಳಿದರೆ, ಕೇಳುವವರಾರು? ಹಾಗೆಯೇ ಅನ್ಯಾಯ, ಮದ ಅಹಂಕಾರ, ಸ್ವಾರ್ಥ ತುಂಬಿದ ಈ ಲೋಕದಲ್ಲಿ ಪುಣ್ಯಕೆಲಸದ ಬಗ್ಗೆ ಯಾರು ಚಿಂತಿಸುತ್ತಾರೆ ಎಂದು ಲೋಕದ ವಾಸ್ತವಿಕತೆಯನ್ನು ಬಿಂಬಿಸುವ ವಿಚಾರವನ್ನು ಈ ಕಗ್ಗದಲ್ಲಿ ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 310,
    english:
      '"These are the three curses on mankind. Forgetting natural limitation and trying to place a ladder to the sky. To believe the un-natural as the truth. To chase wealth although it leads to destruction." - Mankutimma',
    kannada:
      "ಸ್ವಾಭಾವಿಕವ ಮರೆತು ನಭಕೇಣಿ ಹೂಡುವುದುಮ್ ।\nಆಭಾಸವನು ಸತ್ಯವೊಂದು ಬೆಮಿಸುವುದುಮ್ ॥\nಸೌಭಾಗ್ಯಗಳನರಸಿ ದೌರ್ಭಾಗ್ಯಕೀಡಹುದುಮ್ ।\nಅಭಿಶಾಪ ನರಕುಲಕೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೦ ॥",
    kannada_explanation:
      "ಸಹಜತೆಯ ಮರೆತು ಆಕಾಶಕ್ಕೆ ಎಣಿಹಾಕುವ ಪ್ರಯತ್ನವನ್ನು ಮಾಡುತ್ತಾ ಮಿತ್ಯವನ್ನೇ ಸತ್ಯವೆಂದು ಭ್ರಮಿಸುತ್ತಾ ಉತ್ತಮ ಸ್ಥಿತಿಗಳನು ಹುಡುಕುತ್ತಾ ಅಧೋಗತಿಗೆ ಬೀಳುವುದೇ ಈ ಮನುಷ್ಯರಿಗೆ ಒಂದು ಶಾಪವಿದ್ದಂತೆ ಎಂದು ಜಗತ್ತಿನ ಸರ್ವಕಾಲಿಕ ಸತ್ಯವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 311,
    english:
      '"The bottomline is this. The creator is a very tasteful person. But he has his idiasynchrasies. He rocks the cradle and also pinches the child. He makes us siblings and puts lot of love between us. But he also makes us angry at each other. He makes us lose whenever we are at fight with him. For him, we are just food for fun." - Mankutimma',
    kannada:
      "ಒಟ್ಟಿನಲಿ ತತ್ತ್ವವಿದು: ವಿಕಟರಸಿಕನೋ ಧಾತ ।\nತೊಟ್ಟಿಲನು ತೂಗುವನು, ಮಗುವ ಜಿಗುಟುವನು ॥\nಸಿಟ್ಟನ್ ಒಡವುಟ್ಟುಗಳೊಳಾಗಿಪನು, ಸೋಲಿಪನು ।\nತುತ್ತು ವಿಕಟಿಗೆ ನಾವು-  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ತತ್ವವಿಷ್ಟೇ. ನಮ್ಮನ್ನು ಹಾಸ್ಯದಂತೆ ಕಾಣುವ ಹಿಂಸೆಯಿಂದ ನಡೆಸಿಕೊಳ್ಳುತ್ತಿದ್ದಾನೆ, ನಮ್ಮ ಸೃಷ್ಟಿಕರ್ತ. ಒಂದು ಕಡೆ ಮಗುವಿನ ತೊಟ್ಟಿಲನ್ನುತೂಗಿ ಮತ್ತೆ ಮಗುವನ್ನು ಜಿಗುಟಿ ವಿಕಟ ಅಟ್ಟಹಾಸವನ್ನು ಮೆರೆಯುವಂತೆ, ನಮ್ಮ ಒಡಹುಟ್ಟಿದವರಲ್ಲಿ, ಪ್ರೀತಿಯಿರಬೇಕಾದ್ದಲ್ಲಿ, ಸಿಟ್ಟನ್ನು ಕೊಟ್ಟು, ಜಯದ ಮತ್ತು ಆನಂದದ ದಾರಿಯನ್ನು ತೋರಿಸಿ ಕಷ್ಟಗಳ ಸಂಕೋಲೆಯಲ್ಲಿ ನಮ್ಮನ್ನು ಸಿಕ್ಕಿಸಿ, ನಾವು ಸಂಕಟ ಪಡುವಾಗ ತಾನು ಆನಂದಪಡುತ್ತಾನೆ. ನಾವು ಗೆಲುವಿನ ಸಂಭ್ರಮದಲ್ಲಿರುವಾಗ ನಮ್ಮನ್ನು ಸೋಲಿಸುತ್ತಾನೆ. ಏನಾದರೇನು ನಾವೆಲ್ಲಾ ಅವನ ವಿಕಟಹಾಸ್ಯಕ್ಕೆ ತುತ್ತಾಗಿದ್ದೇವೆ,ಎಂದು ವಿಧಿ ವಿಲಾಸದ ಸ್ವರೂಪವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 312,
    english:
      '"Why doesn\'t the account of causation (time, cause and action) be tallied to zero balance at the end of each life? Why does it get carried over to subsequent births and haunt us then. Providence ties us down with pervious balance for ever." - Mankutimma',
    kannada:
      "ಒಂದು ಜನ್ಮದ ಲೆಕ್ಕವಂದೆ ಮುಗಿವಂತೇಕೆ ।\nಸಂಧಿಸವು ಕಾಲ ಕಾರಣ ಕರಣ ಕಾರ್ಯ ? ॥\nಮುಂದಕೇತಕೆ ಮಿಗಿಸಿ ಕರ್ಮಋಣಶೇಷಗಳ ।\nಬಂಧಿಪನು ವಿಧಿ ನಿನ್ನ ? -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೨ ॥",
    kannada_explanation:
      "‘ಈ ಜನ್ಮದಲ್ಲಿನ ನಮ್ಮ ಕೆಲಸ ಮತ್ತು ಅದರ ಫಲಗಳ ಲೆಕ್ಕಾಚಾರ ಈ ಜನ್ಮದಲ್ಲೇ ಏಕೆ ಮುಗಿಯುವುದಿಲ್ಲ? ನಮ್ಮ ಕೆಲಸ, ಅದರ ಸಮಯ, ಅದಕ್ಕೆ ಬೇಕಾದ ಸಾಧನ ಮತ್ತು ಅದರ ಕಾರಣಗಳನ್ನು ಏತಕ್ಕೆ ಉಳಿಸಬೇಕು. ಬಹುಶಃ ಇವುಗಳನ್ನು ಉಳಿಸಿ ನಿನ್ನನ್ನು ಇನ್ನೊಂದು ಜನ್ಮಕ್ಕೆ ಬಂದಿಸುತ್ತಾನೋ ವಿಧಿ’ ಎಂದು ಜನ್ಮ ಜನ್ಮಾಂತರದ ಕೊಂಡಿಯ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 313,
    english:
      '"The Creator does not seem to be a smart accountant. He waits for many lifetimes to extract from us what we owe him. Why has he not put a practice in place to settle the account of this birth in this life only?" - Mankutimma',
    kannada:
      "ಒಳ್ಳೆ ಲೆಕ್ಕಿಗನಲ್ಲ ಪರಮೇಷ್ಠಿ; ನಮ್ಮಿಂದ ।\nಸಲ್ಲುವುದ ಕೊಳಲು ಜನ್ಮಾಂತರಕೆ ಕಾಯ್ವಂ ॥\nಇಲ್ಲಿ ಸಲ್ಲುವುದ ತಾನಿಂದೆ ತೀರಿಸಿಕೊಳ್ಳ- ।\nಲೊಲ್ಲನೇನಂತಕನು -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೩ ॥",
    kannada_explanation:
      'ಆ ಪರಬ್ರಹ್ಮ ಒಳ್ಳೆಯ ಲೆಕ್ಕಾಚಾರದವನಲ್ಲ. ನಾವು ನಮ್ಮ ಕರ್ಮವನ್ನೆಲ್ಲ ಜನ್ಮ ಜನ್ಮಾಂತರಕ್ಕೆ ಕೊಂಡು ಹೋಗಲು ಇಷ್ಟಪಡದೆ ಇಂದೇ ಅವನಿಗೊಪ್ಪಿಸಿ ಲೆಕ್ಕಾಚಾರವನ್ನೆಲ್ಲ ಇಂದೇ ತೀರಿಸಿ ಹೋಗಬೇಕೆಂದುಕೊಂಡರೆ, ಅವನಿಗದು ಇಷ್ಟವಿಲ್ಲ(ಒಲ್ಲ) ಏಕೆ? ಎಂದು ಒಂದು ತಾತ್ವಿಕವಾದ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ. ಜೀವನದಲ್ಲಿ ಬಹಳ ಕಷ್ಟಪಟ್ಟು ನೊಂದು ಬೆಂದ ಜನರು " ಸಾಕಪ್ಪಾ ಈ ಜನ್ಮ, ಮುಕ್ತಿ ಸಿಕ್ಕರೆ ಸಾಕು’ ಎಂದು ಬೇಡುವ ದನಿಯಂತೆ ಇದೆ ಈ ಕಗ್ಗ.',
  },
  {
    number: 314,
    english:
      '"The left over debt of consequences of actions from previous births are the seeds sown in the garden of the Creator. New trees of repeated births grow from that. It is because of this carrying over, does this garden stay green for ever. The reason for this setup is a great mystery in this creation." - Mankutimma',
    kannada:
      "ಕರ್ಮಋಣಶೇಷಂಗಳುಳಿಯದಿರೆ ಬಿತ್ತಾಗಿ ।\nಜನ್ಮ ಜನ್ಮಾಂತರದ ಮರಗಳೇಳದಿರೆ ॥\nಬ್ರಹ್ಮನುದ್ಯಾನವನ ಶಾಶ್ವತದೊಳಿಹುದೆಂತು ?‌ ।\nಮರ್ಮವಿದು ಸೃಷ್ಟಿಯಲಿ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೪ ॥",
    kannada_explanation:
      "ಜನ್ಮದಿಂದ ಜನ್ಮಕ್ಕೆ ನಮ್ಮ ಕರ್ಮ ಶೇಷವು ಬೀಜವಾಗಿ ಬರದೆ ಇದ್ದರೆ ಜನ್ಮ ಜನ್ಮಾಂತರದ ಮರ ಹೇಗೆ ಬೆಳೆಯುತ್ತದೆ. ಹಾಗಾದರೆ ಮಾತ್ರ ಈ ಜಗತ್ತು ಆ ಪರಮಾತ್ಮನ ಲೀಲಾವಿನೋದಕ್ಕೆ ಒಂದು ಸುಂದರ ಉದ್ಯಾನವನವಾಗಲು ಸಾಧ್ಯ. ಇದೇ ಜಗತ್ತಿನ ಸೃಷ್ಟಿ ರಹಸ್ಯ ಎಂದು ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ಮತ್ತು ನಿರಂತರತೆಯ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 315,
    english:
      '"Our life is filled with hundreds of annoyances - want of better salary, urge to be famous and successful, attachement towards home, call of a wife (spouse), crying of a child and so on. The whole world is running because of these drivers." - Mankutimma',
    kannada:
      "ಸಂಬಳದ ಹಂಬಲವೊ, ಡಾಂಭಿಕತೆಯಬ್ಬರವೊ ।\nಇಂಬು ಕೂರ್ಮೆಯ ಕರೆಯೊ, ಕರುಳ ಕರೆಕರೆಯೋ ॥\nತುಂಬಿಹುವು ಬಾಳಿನಲಿ ನೂರು ತಕರಾರುಗಳು ।\nಬೆಂಬಲವವೆಲೊ ಜಗಕೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೫ ॥",
    kannada_explanation:
      "ವರಮಾನದ ಆಸೆ, ನಮ್ಮಲ್ಲಿರುವ ಸಂಪತ್ತನ್ನು ತೋರ್ಪಡಿಸಿಕೊಳ್ಳುವ ಹಂಬಲ, ಪ್ರೀತಿಸಿ ಒತ್ತಾಸೆ ಕೊಡುವ ಪ್ರಯತ್ನ, ನಾವು ಹೆತ್ತ ಮಕ್ಕಳಿನ ಮೇಲಿನ ಮಮತೆ, ಮೋಹ ಮತ್ತು ಅದರೊಟ್ಟಿಗೆ ಬರುವ ಸಾವಿರ ಸಾವಿರ ತಲೆನೋವುಗಳು,ಹೀಗೆ ಮಾನವರ ನೂರಾರು ತಕರಾರುಗಳೇ ಪೂರಕವಾಗಿ ಮತ್ತು ಅದರ ಬೆಂಬಲದಿಂದಲೇ ಈ ಜಗತ್ವ್ಯಾಪಾರ ನಡೆಯುತ್ತಿದೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 316,
    english:
      '"A top spins beautifully. It may think it is the master of its own fate. But it loses and slows down. It falls on the ground when it has not more strength. Man is also like that. As long as he has any strength in him, he will continue to stay in action - creating things. Once the strength vanishes, he is burried and becomes one with the earth." - Mankutimma',
    kannada:
      "ತಿರುತಿರುಗಿ ತಿರುಗುತ್ತೆ ಬುಗುರಿ ತಾನೇ ಸೋತು ।\nತಿರೆಗುರುಳುವುದು ತನ್ನ ಬಲವ ತಾಂ ಕಳೆದು ॥\nನರನುಮಂತೆಯೆ ಸುತ್ತಿ ಕಡೆಗೊಂದು ದಿನ ।\nತೆರುವನಸ್ಥಿಯ ಧರೆಗೆ -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೬ ॥",
    kannada_explanation:
      "ಒಂದು ಬುಗುರಿಗೆ ಚಾಟಿಯನ್ನು ಸುತ್ತಿ ಜೋರಾಗಿ ತಿರುಗಿಸಿದಾಗ, ಅದು ನಾವು ಕೊಟ್ಟ ಜೋರು ಕಡಿಮೆಯಾಗುವತನಕ ಸುತ್ತುತ್ತದೆ. ಜೋರು ಕಡಿಮೆಯಾಗುತ್ತಾ ತನ್ನ ತಿರುಗುವ ವೇಗವನ್ನು ಕಡಿಮೆ ಮಾಡಿಕೊಂಡು ನಿಧಾನವಾಗಿ ಸುತ್ತುತ್ತಾ ಕೆಳಗೆ ಬೀಳುತ್ತದೆ. ಹಾಗೆಯೇ ಮನುಷ್ಯನೂ ಸಹ ಶಕ್ತಿಯಿರುವವರೆಗೂ ಸುತ್ತ್ತಿ ಸುತ್ತಿ ಏನನ್ನೋ ಸಾಧಿಸಬೇಕೆಂದು ಓಡಿ ಓಡಿ ಶಕ್ತಿಯಲ್ಲ ಕುಂದಿ ಧರೆಗೆ ಬಿದ್ದು, ಸಾವನ್ನಪ್ಪಿ ತನ್ನ ದೇಹವನ್ನು ಈ ಧರೆಗೇ ಒಪ್ಪಿಸುತ್ತಾನೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 317,
    english:
      '"Man\'s efforts attract both sins and good karma. His actions are driven by his attachment towards his past (homeland) and future (his children). He wears colorful clothes (does lot of antics). There is some dark along with white. (some good, some sins). Every body is like that. You dont squint your eyes when you see some one with a mix of good and bad qualities." - Mankutimma',
    kannada:
      "ಪುಣ್ಯಪಾಪದ ಮಿಶ್ರ ನರಜಂತುವವನ ನೆಲೆ ।\nಮಣ್ಣು ಕರುಳುಗಳೆಸಕವವನ ಮೈದೊಡವು ॥\nಬಣ್ಣ ಬಣ್ಣದ ವಸ್ತ್ರ; ಬಿಳ್ಪೊಡನೆ ಕಪ್ಪಿಹುದು ।\nಕಣ್ಣ ದುರುಗುಟಿಸದಿರು -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೭ ॥",
    kannada_explanation:
      "ಪುಣ್ಯ ಮತ್ತು ಪಾಪಗಳ ಮಿಶ್ರಣದಿಂದಾದವನೇ ನಮ್ಮ ಮಾನವ. ಈ ಜಗತ್ತಿನ ವಸ್ತುಗಳು ಮತ್ತು ಅದರೊಂದಿಗೆ ಅವನ ಸಂಬಂಧಗಳಲ್ಲೇ ಸಂತೋಷಪಡುವುದು ಅವನ ಸ್ವಭಾವ. ಹೇಗೆ ಅವನು ಹಾಕಿಕೊಳ್ಳುವ ಬಣ್ಣಬಣ್ಣದ ವಸ್ತ್ರಗಳಲ್ಲಿ ಬಿಳುಪು ಮತ್ತು ಕಪ್ಪು ಬಣ್ಣ ಎರಡೂ ಕೂಡಿ ಇದೆಯೋ, ಹಾಗೆಯೇ ಅವನ ಸ್ವಭಾವದಲ್ಲೂ ಗುಣ ಮತ್ತು ದೋಷಗಳೆರಡೂ ಇವೆ. ಅದನ್ನು ನೀನು ಕೋಪದಿಂದ ವಿಮರ್ಶೆಮಾಡಬೇಡ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 318,
    english:
      '"The Creator is a funny person. Such is his humour - He is very straight faced, but he tickles you with his fingers. It is like some one greeting you well when you go to their home, but serve only sour and spicy food. This is the way he runs this world." - Mankutimma',
    kannada:
      "ಹಾಸ್ಯಗಾರನೊ ಬೊಮ್ಮ; ವಿಕಟ ಪರಿಹಾಸವದು ।\nಆಸ್ಯ ಗಂಭೀರ; ಬೆರಲಿಂದ ಚಕಳಗುಳಿ ॥\nವಿಶ್ವಾಸದುಪಚಾರ; ಹುಣಿಸೆಮೆಣಸಾಹಾರ ।\nವಿಶ್ವಪಾಲನೆಯಿಂತು -  ಮಂಕುತಿಮ್ಮ  ॥ ೩೧೮ ॥",
    kannada_explanation:
      "ನಮ್ಮನ್ನು ಸೃಷ್ಟಿಸಿದ ಆ ಬ್ರಹ್ಮ ವಿಕಟತೆಯಿಂದ ಕೂಡಿದ ಹಾಸ್ಯಗಾರನೋ? ಅವನ ಮುಖ ಮಾತ್ರ ಗಂಭೀರವಾಗಿದ್ದರೂ, ಬೆರಳಿಂದ ಕಚಗುಳಿ ಇಡುತ್ತಾ ನಮ್ಮನ್ನು ನಗಿಸಲು ಪ್ರಯತ್ನಿಸುವ ಅಥವಾ ಬಹಳ ವಿಶ್ವಾಸದಿಂದ ನಮಗೆ ಉಪಚಾರ ಮಾಡುತ್ತಾ ಭೋಜನವ ಬಡಿಸಿ ಊಟದಲ್ಲಿ ಹುಣಸೆಯ ಹುಳಿಯನ್ನೂ, ಮೆಣಸಿನ ಖಾರವನ್ನೂಇಟ್ಟಂತೆ, ನಮಗೆ ಜೀವನದಲ್ಲಿ ಗುಣ-ಅವಗುಣ, ಸಂತೋಷ – ದುಃಖ, ಹೀಗೆ ಒಂದಕ್ಕೊಂದು ವಿರೋಧವಾದದ್ದನ್ನು ಇಟ್ಟು ನಮ್ಮ ಪರಿಸ್ಥಿತಿ ನೋಡಿ ತಾನು ಆನಂದವನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದಾನೋ ಆ ಬ್ರಹ್ಮ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 319,
    english:
      '"Five basic elements; Five sense organs. Why are they always five? Why not four? Or Six? The creator is hatching some plan. We do not know what his plan is. We are the people who are being duped (keeping a secret from us)." - Mankutimma',
    kannada:
      "ಪಂಚಭೂತಗಳಂತೆ; ಪಂಚೇಂದ್ರಿಯಗಳಂತೆ ।\nಪಂಚವೇಕೆ? ಚತುಷ್ಯ ಷಟ್ಯವೇಕಲ್ಲ? ॥\nಹೊಂಚುತಿಹನಂತೆ ವಿಭು; ಸಂಚವನದೇನಿಹುದೊ ।\nವಂಚಿತರು ನಾವೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೩೧೯ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತನ್ನು ನಡೆಸುವುದು ಪಂಚಭೂತಗಳಂತೆ ಮತ್ತು ನಮಗೆ ಪಂಚೇಂದ್ರಿಯಗಳಿವೆಯಂತೆ. ಐದೇ ಏಕೆ, ನಾಲ್ಕು ಅಥವಾ ಆರು ಏಕಿರಬಾರದು?. ಪರಮಾತ್ಮ ಈ ಜಗತ್ತನ್ನು ಯಾರಿಗೂ ಅರ್ಥವಾಗದ ರೀತಿಯಲ್ಲಿ ಸೃಜಿಸಿದ್ದಾನೆ, ಇದರಲ್ಲಿ ಅವನ ಸಂಚು ಏನಿರಬಹುದು. ನಮಗೆ ಇದೆಲ್ಲ ಅರಿಯದಂತೆ ಈ ಜಗತ್ತನ್ನಿಟ್ಟು ನಮ್ಮನ್ನೆಲ್ಲ ವಂಚಿಸಿದ್ದಾನೋ ಆ ಪರಮಾತ್ಮ ಎಂದು, ಇನ್ನೂ ಸಂದೇಹವಾಗಿಯೇ ಉಳಿದಿರುವ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 320,
    english:
      '"Principle of five, or five times five. What do we got to do with relations among the basic elements? What do we gain by understanding them? Can the incomplete knowledge about parts lead to the realization of the whole? The cosmic spirit is like a lightning that is difficult to grasp." - Mankutimma',
    kannada:
      "ಪಂಚಕವೊ, ಪಂಚ ಪಂಚಕವೊ; ಮಾಭೂತಗಳ ।\nಹಂಚಿಕೆಯನರಿತೇನು? ಗುಣವ ತಿಳಿದೇನು? ॥\nಕೊಂಚ ಕೊಂಚಗಳರಿವು ಪೂರ್ಣದರಿವಾದೀತೆ? ।\nಮಿಂಚಿದುದು ಪರತತ್ತ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೦ ॥",
    kannada_explanation:
      "ಪಂಚಭೂತಗಳೆಂಬ ಈ ಮಹಾ ಭೂತಗಳು ಐದೋ,ಇಪ್ಪತ್ತೈದೋ,ಅದರ ಲೆಕ್ಕವನ್ನು ಅರಿತು ಏನು ಪ್ರಯೋಜನ? ಅವುಗಳ ಗುಣಗಳನ್ನು ನಾವು ತಿಳಿದುಕೊಂಡು ಏನಾಗಬೇಕಿದೆ? ಅದರ ಸಮಗ್ರ ಅಥವಾ ಸಂಪೂರ್ಣ ಅರಿವು ನಮಗಾಗುವುದಿಲ್ಲ. ಅಲ್ಪಸ್ವಲ್ಪ ಅದನ್ನು ತಿಳಿದುಕೊಂಡರೆ, ಪೂರ್ಣದ ಅರಿವು ನಮಗೆ ಆಗುತ್ತದೆಯೇ?. ಈ ಪರಮಾತ್ಮನ ಮತ್ತು ಅವನ ಸೃಷ್ಟಿಯ ಜ್ಞಾನ,ನಮ್ಮ ಅರಿತುಕೊಳ್ಳುವ ಕ್ಷಮತೆಗೆ ಮಿಂಚಿದ್ದು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 321,
    english:
      '"There is one complete vision of Life. This vision is beyond the boundaries of expanse earth and the sky. In that vision, the Gods, humans, animals, plants are all dancing. Imagine such a picture." - Mankutimma\n\n[Translator\'s note: In that perfect vision, there is no difference between them - Gods, humans, animals and plants. Infact, there is nothing separating them from the other inanimate objects also.]',
    kannada:
      "ಜೀವನದ ಪರಿಪೂರ್ಣದರ್ಶನವದೊಂದಿಹುದು ।\nಭೂವ್ಯೋಮ ವಿಸ್ತರದ ಮಿತಿಯ ಮೀರ್ದುದುದು ॥\nದೇವ ನರ ಪಶು ಸಸಿಗಳೆಲ್ಲ ಕುಣಿಯುವರಲ್ಲಿ ।\nಭಾವಿಸಾ ಚಿತ್ರವನು - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೧ ॥",
    kannada_explanation:
      "ಜೀವನಕ್ಕೆ ಪರಿಪೂರ್ಣವಾದ ಒಂದು ದರ್ಶನವಿದೆ ಅಥವಾ ಇಡೀ ಬದುಕಿಗೆ ಒಂದು ಪೂರ್ಣವಾದ ಚಿತ್ರವಿದೆ. ಅದು ಭೂಮಿ ಆಕಾಶದ ವಿಸ್ತಾರವನ್ನು ಮೀರಿ ಇದೆ. ಅಲ್ಲಿ ದೇವತೆಗಳು, ನರರು, ಪಶುಗಳು ಗಿಡ ಮರಗಳು ಎಲ್ಲವೂ ನಲಿದಾಡುತ್ತಾರೆ.ಅಂತಹ ಚಿತ್ರವನ್ನು ಭಾವಿಸು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 322,
    english:
      '"In this vision of the universe, all opposites are together (and not differnt from each other)- living things and  objects, planned and the spontaneous, required as well as dispensable, free as well as constrained. Such is the glory of the unified view." - Mankutimma',
    kannada:
      "ಆ ವಿಶ್ವರೂಪ ಸಂದರ್ಶನದಿ ಹೊಂದಿಹುವು ।\nಜೀವ ನಿರ್ಜೀವಗಳು, ಕ್ರಮ ಯದೃಚ್ಛೆಗಳು ॥\nಆವಶ್ಯ ವಶ್ಯ; ಸ್ವಾಚ್ಛಂದ್ಯ ನಿರ್ಭಂದಗಳು ।\nಕೈವಲ್ಯದೃಷ್ಟಿಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೨ ॥",
    kannada_explanation:
      "ಈ ವಿಶ್ವದ ರೂಪದಲ್ಲಿ ಜೀವವಿರುವುದು ಮತ್ತು ಜೀವವಿಲ್ಲದವು, ಕ್ರಮಬದ್ಧವಾಗಿರುವುದು, ಕ್ರಮಕ್ಕೊಳಪಡದೆ ಸ್ವತಂತ್ರವಾಗಿರುವುದು, ನಮ್ಮ ವಶದಲ್ಲಿರುವುದು, ನಮ್ಮ ವಶದಲ್ಲಿ ಇರದೇ ಇರುವುದು, ಸ್ವಚ್ಚಂದವಾಗಿ ನಡೆಯುವುದು, ನಿರ್ಬಂಧಕ್ಕೊಳಪಟ್ಟವು ಎಲ್ಲವೂ ಇವೆ. ಇವುಗಳನ್ನು ಹೇಗೆ ಇವೆಯೋ ಹಾಗೆಯೇ ನೋಡಿದರೆ ಅದು ನಿರ್ಮಲ ಅಥವಾ ಸ್ವಚ್ಚ ದೃಷ್ಟಿ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 323,
    english:
      '"The Creator is the treasure of all essence and happiness. That being so, how can we say that his creation and life is not fascinating. Fascination is also a mystery just like what drives mankind towards courage, love and beauty." - Mankutimma',
    kannada:
      "ಸಾರಸುಖನಿಧಿ ಪರಬ್ರಹ್ಮನಿರುತಿರಲ್ ।\nಸ್ವಾರಸ್ಯಹೀನರೆನ್ನುವರೆ ಜೀವಿತವೆ? ॥\nಪೌರುಷ ಪ್ರೇಮ ಸೌಂದರ್ಯಗಳುಮಂತೆಯೇ ।\nಸ್ವಾರಸ್ಯವೋ ರಹಸ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೩ ॥",
    kannada_explanation:
      "ಸುಖರಸದ ಸಾರದ ನಿಧಿಯಂತೆ ಪರಬ್ರಹ್ಮನು ಇರುತಿರುವಾಗ ಜೀವನವನ್ನು ಸ್ವಾರಸ್ಯಹೀನವೆನ್ನಲಾದೀತೇ. ಪೌರುಷ, ಪ್ರೇಮ ಮತ್ತು ಸೌಂದರ್ಯಗಳೂ ಸಹ ಅಂತೆಯೇ. ಈ ಜಗತ್ತಿನ ಎಲ್ಲ ಸ್ವಾರಸ್ಯವೂ ರಹಸ್ಯವಾಗೇ ಇದೆ ಎಂದು ಸೃಷ್ಟಿಯ ಒಂದು ರೂಪವನ್ನು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 324,
    english:
      '"What and where is the nature of soul? There may be many theories; some true, some false. But every one has a conscience that every one feels and understands. Don\'t do any thing that brings harm to that conscience. Meditate and listen to (and follow) it. " - Mankutimma',
    kannada:
      "ಏನೆ ನಿಜವಿರಲಿ ಮತ್ತೇನೆ ಸುಳ್ಳಾಗಿರಲಿ ।\nನಾನೆನಿಪ್ಪಾತ್ಮವೊಂದಿರುವುದನುಭವಿಕ ॥\nಹಾನಿಗಾವಾತನಾತ್ಮವನುಮಂ ಕೆಡಹದಿರು ।\nಧ್ಯಾನಿಸಾತ್ಮದ ಗತಿಯ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೪ ॥",
    kannada_explanation:
      "ಯಾವುದೇ ನಿಜವಾಗಿರಲಿ ಅಥವಾ ಸುಳ್ಳಾಗಿರಲಿ, ‘ನಾನು’ ಎಂದು ಎನಿಸುವ ಆತ್ಮದ ಅನುಭವವಿರುವ ತನಕ ‘ಅನ್ಯ’ ಆತ್ಮಗಳಿಗೆ ಹಾನಿಯನ್ನುಂಟು ಮಾಡದೆ, ನಿನ್ನ ಆತ್ಮದ ಗತಿಯ ಮತ್ತು ಗಮ್ಯದ ಬಗ್ಗೆ ನೀನು ಧ್ಯಾನಿಸು, ಎಂದರೆ ಅದರ ಬಗ್ಗೆ ಆಲೋಚಿಸು ಎಂದು ಅದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 325,
    english:
      '"This human body is made of so many different kind of machines and so many emotions. Man\'s body is the final result of tiresome refining of the base material. He is the crown jewel of creation" - Mankutimma',
    kannada:
      "ಎಷ್ಟು ಬಗೆ ಯಂತ್ರಗಳೊಳೆಷ್ಟು ರಸಮಿಶ್ರದಿಂ ।\nದೆಷ್ಟಾಧಿಭೂತಗಳು ಪರಿಪಾಕವೊಂದಿ ॥\nಒಟ್ಟು ಸೇರಿಹವು ನರನೆಂಬ ಸಿದ್ಧಿಯೊಳವನು ।\nಸೃಷ್ಟಿಶೈಲದ ಶಿಖರ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೫ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿ ಪ್ರಾಣಿಗಳ ಸೃಷ್ಟಿಯ ಕ್ರಮವೊಂದನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡುತ್ತಾ, ಪ್ರಾಣಿಗಳ ದೇಹವು ಪಂಚಭೂತಗಳಿಂದಾದ ಯಂತ್ರಗಳಸಮೂಹ. ಈ ದೇಹ ಉತ್ಪತ್ತಿಯಾಗುವುದು, ಬೆಳೆಯುವುದು ಮತ್ತು ಬದುಕುವುದುಎಲ್ಲ ಈ ಯಂತ್ರಗಳು ಒಸರುವ ರಸಗಳಮಿಶ್ರಣದಿಂದ. ಹೀಗೆ ಆ ಪರಮಾತ್ಮನ ಸೃಷ್ಟಿಯಲ್ಲಿ ‘ನರ’ ನೆಂಬ ಪ್ರಾಣಿ, ಪ್ರಾಣಿ ಸಂಕುಲದಲ್ಲಿ ಅತ್ಯುತ್ತಮವಾದವನು. ಸೃಷ್ಟಿಯನ್ನು ಒಂದು ‘ಬೆಟ್ಟವೆಂದುಕೊಂಡರೆ’ ಮಾನವ ಅದರ ತುತ್ತ ತುದಿಯಲ್ಲಿ ಇದ್ದಾನೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 326,
    english:
      '"The creator did not want to be alone. So, he created a companion for himself from himself - Maya (the illusion). Now he lets Maya create the world of illusion and wanders all around it. Our life is in that illusion. Let us lead it in way it befits him." - Mankutimma',
    kannada:
      "ಸುಮ್ಮನಿರಲೊಲದೆ ತನಗೊಡನಾಡಿಯೊರ್ವಳನು ।\nನಿರ್ಮಿಸಿ ನಿಜಾಂಶದಿಂ ಮಾಯೆಯೆಂಬವಳಿಂ ॥\nದುಣ್ಮಿದ ಜಗಜ್ಜಾಲಗಳಲ್ಲಿ ವಿಹರಿಸುತಿರುವ ।\nಬೊಮ್ಮನಾಟವ ಮೆರೆಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೬ ॥",
    kannada_explanation:
      'ತಾನೊಬ್ಬನೇ ಇರಲಾಗದೆಂದು ತನಗೆ ಒಡನಾಡಿ ಬೇಕೆಂದು " ಮಾಯೆ"ಯೆಂಬ ಒಡನಾಡಿಯನ್ನು ಸೃಷ್ಟಿಸಿ, ಅವಳ ಮೂಲಕ ಈ ಜಗಜ್ಜಾಲವನ್ನು ನಿರ್ಮಿಸಿ ಆ ಜಗಜ್ಜಾಲದಲ್ಲಿ ತಾನು ವಿಹರಿಸುತ್ತ ನಡೆಸುತ್ತಿರುವ ಈ ಜಗತ್ತಿನ ನಾಟಕವನ್ನು " ಮೆರೆಸೋ’ ಚೆನ್ನಾಗಿ ಅನುಭವಿಸಿ, ಅಭಿಮಾನಿಸಿ, ಅಭಿವೃದ್ಧಿಪಡಿಸೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 327,
    english:
      '"What is this living world? It is like a board game. Providence, human effort and previous deed (their consequences) are the players. The game involves disbursing the pawns, arraging them again and mixing them. We are just the pawns." - Mankutimma',
    kannada:
      "ಜೀವಸಂಘವಿದೇನು? ಗಂಜೀಫಿನೆಲೆಗಟ್ಟು ।\nದೈವ ಪೌರುಷ ಪೂರ್ವವಾಸನೆಗಳೆಂಬಾ ॥\nಮೂವರದನಾಡುವರು, ಚದುರಿಸುತೆ, ಬೆರಸಿಡುತೆ ।\nನಾವೆಲ್ಲರಾಟದೆಲೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೭ ॥",
    kannada_explanation:
      "ಮಾನವನ ಬದುಕನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡುತ್ತಾ, ಜೀವಿಗಳ ಬದುಕು ಗಂಜೀಫಾ ಎಲೆಗಳ ಆಟದಂತೆ ಇದೆ. ಇದನ್ನು ಆಡುವವರು ದೈವ, ನಮ್ಮ ಪೂರ್ವಕರ್ಮ ಮತ್ತು ನಮ್ಮ ಪ್ರಯತ್ನ. ನಾವೆಲ್ಲಾ ಈ ಗಂಜೀಫಿನ ಎಲೆಗಳಂತೆ. ನಮ್ಮನ್ನು ಈ ಮೂವರು ಆಟಗಾರರು ಬೆರೆಸುತ್ತ, ಚದುರಿಸುತ್ತಾ, ಮತ್ತೆ ಬೆರೆಸುತ್ತ ಆಡುತ್ತಾರೆ,ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ ‘ಬದುಕಿಗಾರ್ ನಾಯಕರು’ ಎಂದು ೭ ನೇ ಕಗ್ಗದಲ್ಲಿ ಕೇಳುವಂತೆ.",
  },
  {
    number: 328,
    english:
      '"Creation is like a pack of cards. We are the cards. The game involves mixing them and drawing them at random. No one cannot know which card will be dealt when and where. Any card can be used for anything at any time. We are wandering in this world thus." - Mankutimma',
    kannada:
      "ಎಲೆಕಟ್ಟನಾಗಾಗ ಕಲಸಿಕೊಡುವುದೆ ಸೃಷ್ಟಿ ।\nಬಳಿಕೆಲೆಯ ಗತಿಯೆಂತೋ ಎಲ್ಲಿ ಸೇರುವುದೋ! ॥\nಬಳಸುತಿಹುದೊಂದೊಂದುಮೊಂದೊಂದು ದಿಕ್ಕಿನಲಿ ।\nಅಲೆಯುವೆವು ನಾವಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೮ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿ ಜನರ ಬದುಕಿನ ಪರಿಯನ್ನು ವಿವರಿಸುವ ಈ ಇಸ್ಪೀಟಾಟದ ಉದಾಹರಣೆಯನ್ನು, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಹಿಂದಿನ ಕಗ್ಗಗಳಲ್ಲೂ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ. ಇಸ್ಪೀಟಿನ ಆಟದಲ್ಲಿ ಎಲೆಗಳನ್ನು ಕಲೆಸಿದನಂತರ ಯಾವ ಎಲೆ ಯಾವ ದಿಕ್ಕಿನಲ್ಲಿ ಹೋಗುವುದೋ ಗೊತ್ತಿಲ್ಲದಂತೆ ಹಂಚಿ ನಾನಾ ದಿಕ್ಕುಗಳಿಗೆ ಎಸೆಯಲ್ಪಟ್ಟು ಎಲ್ಲಿ ಸೇರುವುದೋ ಎಂಬಂತೆ, ವಿಧಿಯಾಟದಿಂದ ಕಲಸಲ್ಪಟ್ಟು, ಹಂಚಲ್ಪಟ್ಟು ನಾನಾ ದಿಕ್ಕುಗಳಿಗೆ ಎಸೆಯಲ್ಪಟ್ಟು ದಿಕ್ಕಾಪಾಲಾಗಿ ಅಲೆಯುವುದೇ ನಮ್ಮ ಬದುಕೂ ಸಹ ಎಂದು ಬದುಕಿನ ಒಂದು ಸತ್ಯವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 329,
    english:
      '"Like this, the game of cards go on for ever without beginning or an end. We spend our lives after lives in this game (being cards). Who is winning, who is losing - we will never know. When will the scorecards be tallied? The game itself is the result." - Mankutimma',
    kannada:
      "ನಿಲದೆ ನಡೆವುದು ಮೊದಲು ಕೊನೆಯಿಲ್ಲದೀಯಾಟ ।\nಕಳೆವುವದರಲಿ ನಮ್ಮ ಜನುಮಜನುಮಗಳು ॥\nಗೆಲವಾರ್ಗೊ! ಸೋಲಾರ್ಗೊ! ಲೆಕ್ಕನೋಡುವುದೆಂದೊ! ।\nಫಲವು ಬರಿಯಾಟವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩೨೯ ॥",
    kannada_explanation:
      "ನಿರಂತರವಾಗಿ ನಡೆಯುವುದು ಜನ್ಮ ಜನ್ಮಾಂತರದ ನಮ್ಮ ಬದುಕಿನ ಆಟ. ಈ ಆಟದಲ್ಲಿ ಗೆದ್ದವರು ಯಾರೋ, ಸೋತವರು ಯಾರೋ ಎಂದು ಲೆಕ್ಕವನ್ನು ನೋಡುವುದು ಯಾವ ಕಾಲಕ್ಕೋ ಎಂದು ಯಾರಿಗೂ ಅರಿವಿಲ್ಲ. ಆದ್ದರಿಂದ ನಮ್ಮ ಬದುಕಿಗೆ ಫಲವೆಂದರೆ, ಬರೀ ಬಾಳಿನಾಟ ಅಡುವುದಷ್ಟೇ ಅಲ್ಲದೆ ಬೇರೇನೂ ಅಲ್ಲ ಎಂದು ಬದುಕಿನ ಲೆಕ್ಕಾಚಾರಗಳ ಮತ್ತು ಫಲಾಫಲಗಳ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 330,
    english:
      '"What is the outcome of the game? The curiosity generated during the game itself is the result. The game does not progress if the cards are not cut (dropped). Once played, no one should care if the card won or got trumped. The progress of the game itself should be considered as profit." - Mankutimma',
    kannada:
      "ಆಟಕ್ಕೆ ಫಲವೇನು? ಕುತುಕದ ರುಚಿಯೆ ಫಲ ।\nಚೀಟಿ ತಾಂ ಬೀಳೆನೆನಲ್ ಆಟ ಸಾಗುವುದೆ? ॥\nಏಟಾಯ್ತೆ ಗೆಲವಾಯ್ತೆಯೆಂದು ಕೇಳುವುದೇನು? ।\nಆಟದೋಟವೆ ಲಾಭ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೦ ॥",
    kannada_explanation:
      "ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮತ್ತೆ ಇಸ್ಪೀಟಿನ ಆಟದ ಉದಾಹರಣೆಯನ್ನು ನೀಡಿ, ನಮ್ಮ ಬಾಳಿನ ಆಟವೂ ಅದೇ ರೀತಿ ಎಂದು ಹೇಳುತ್ತಾರೆ. ಇಸ್ಪೀಟಿನ ಆಟದಲ್ಲಿ ಸರಿಯಾದ ಎಲೆ ಬಿದ್ದರೆ ಆಟ ಮುಂದುವರೆಯುವುದು. \n ಹಾಗಾಗಿ, ಇಲ್ಲಿ ಗೆದ್ದೆವೋ, ಸೋತೆವೋ ಎಂದು ಕೇಳುವುದದೇನು,ಆಟವಾಡಿದ್ದಷ್ಟೇ ಲಾಭವಲ್ಲವೇ? ಹಾಗೆಯೇ ‘ಜೀವನದಾಟದಲ್ಲಿ ಏಟಾಯ್ತೆ ಗೆಲುವಾಯ್ತೆಂದೆಂದು ಕೇಳುವುದದೇನು’ ಎಂದು ಹೇಳುತ್ತಾ, ಇಲ್ಲಿ ಬದುಕಿದ್ದೆ ಲಾಭವೆಂದು ಹೇಳುತ್ತಾರೆ ಶ್ರೀ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 331,
    english:
      '"Sat (truth), Chit(inner peace) and Ananda (happiness) are the qualities of the cosmic spirit. It is also our base qualities (Satya (truth), Shiva (peace), Sundara (beauty))that we may have forgotten. On a canvas of these qualities, the colourful picture of life is drawn. You should channelise your mind every day towards these qualities. Then whatever work you do will attain the same qualities." - Mankutimma',
    kannada:
      "ಸತ್ಯ ಶಿವ ಸುಂದರದ ಸಚ್ಚಿದಾನಂದನದ ।\nಭಿತ್ತಿಯಲಿ ಬಣ್ಣಬಣ್ಣದ ಜೀವಚಿತ್ರ ॥\nನಿತ್ಯ ನೀನದ ನೆನೆದು ಚಿತ್ರದಲಿ ಮನವಿರಿಸೆ ।\nವೃತ್ತಿ ತನ್ಮಯವಹುದೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೧ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ಚಿತ್ರ, ಸತ್ಯವಾಗಿಯೂ ಮಂಗಳಕರವಾಗಿಯೂ,ಸುಂದರವಾಗಿಯೂ ಇದ್ದು, ಸಚ್ಚಿದಾನಂದ ಸ್ವರೂಪದಿಂದಿದೆ. ಪ್ರತಿ ನಿತ್ಯ ನೀನು ಅಂತಹ ಚಿತ್ರದಲ್ಲಿ ನಿನ್ನ ಚಿತ್ತವನು ಇರಿಸಿದರೆ ನೀ ಮಾಡುವ ಕೆಲಸ ತನ್ಮಯತೆಯಿಂದ ಕೂಡಿರುತ್ತದೆ ಎಂದು ನಾವು, ಈ ಪರಮಾತ್ಮನ ಸೃಷ್ಟಿಯಲ್ಲಿ ಏನನ್ನು ಮತ್ತು ಜಗಚ್ಚಿತ್ರವನ್ನು ಹೇಗೆ ಕಾಣಬೇಕು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 332,
    english:
      '"Where is the truth hidden? In your own conscience. In the world surrounding you that you can experience. When you connect them both with your intellect, then you will have the realization of the ultimate truth. " - Mankutimma',
    kannada:
      "ಸತ್ಯವೆಂಬುದದೆಲ್ಲಿ? ನಿನ್ನಂತರಂಗದೊಳೊ ।\nಸುತ್ತ ನೀನನುಭವಿಪ ಬಾಹ್ಯ ಚಿತ್ರದೊಳೋ ॥\nಯುಕ್ತಿಯಿಂದೊಂದನೊಂದಕೆ ತೊಡಿಸಿ ಸರಿನೋಡೆ ।\nತತ್ತ್ವದರ್ಶನವಹುದು - ಮಂಕುತಿಮ್ಮ ॥೩೩೨ ॥",
    kannada_explanation:
      "ಸತ್ಯವೆಂಬುದು ಎಲ್ಲಿದೆ? ನಿನ್ನ ಅಂತರಂಗದಲ್ಲೋ ಅಥವಾ ನೀ ಇದ್ದು ಅನುಭವಿಸುತ್ತಿರುವ ಈ ಬಾಹ್ಯ ಪ್ರಪಂಚದಲ್ಲೋ? ಯುಕ್ತಿಯಿಂದ ಒಂದನು ಒಂದಕ್ಕೆ ಸರಿಹೊಂದಿಸಿ ನೋಡಿದರೆ ನಮಗೆ ತತ್ವದರ್ಶನವಾಗುವುದು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 333,
    english:
      '"The realization of the truth can not happen to every one in the same way. Can it? One may realize it in the valley looking up towards the enormous mountain. Another person may have it on top of the mountain. Can a person in the valley see the same thing as the one on the top? What we see depends on our point of view." - Mankutimma',
    kannada:
      "ಸತ್ಯಾನುಭವವೆಲ್ಲರಿಂಗಮೊಂದೆಂತಹುದು? ।\nಬೆಟ್ಟದಡಿಯೊಳಗೊಬ್ಬ; ಕೋಡಬಳಿಯೊಬ್ಬ ॥\nಎತ್ತರದ ದೃಶ್ಯ ಕಣಿವೆಯೊಳಿಹನಿಗಾದೀತೆ? ।\nನೇತ್ರದಂದದೆ ನೋಟ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೩ ॥",
    kannada_explanation:
      "ಸತ್ಯದ, ಎಂದರೆ ಪರಮಾತ್ಮನ ಅನುಭವ ಎಲ್ಲರಿಗೂ ಒಂದೇ ರೀತಿಯಲ್ಲಿ ಆಗುವುದು ಹೇಗೆ ಸಾಧ್ಯ? ಬೆಟ್ಟದಡಿ ಒಬ್ಬ ನಿಂತರೆ ಅವನಿಗೆ ಬೆಟ್ಟದ ಬುಡ ಮಾತ್ರ ಕಾಣುತ್ತದೆ. ಬೆಟ್ಟದ ತುತ್ತ ತುದಿಯಲ್ಲಿ ನಿಂತವನಿಗೆ ತುದಿ ಮಾತ್ರ ಕಾಣುತ್ತದೆ. ಕಣಿವೆಯಲ್ಲಿ ನಿಂತವಗೆ ಎತ್ತರದ ದೃಶ್ಯ ಕಾಣುತ್ತದೆಯೇ? ನಮಗೆ ನೋಡಲು ಕ್ಷಮತೆ ಎಷ್ಟಿದೆಯೋ ಅಷ್ಟು ಮಾತ್ರ ನೋಟ ಸಿಗುತ್ತದೆ. ಹೀಗೆ ಈ ಜಗತ್ತನ್ನು ನೋಡುವ ಮತ್ತು ಆ ಸೃಷ್ಟಿಕರ್ತನನ್ನು ಮತ್ತು ಅವನ ಸೃಷ್ಟಿಯನ್ನು ನೋಡುವ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 334,
    english:
      '"Each one has his own desires and his own qualities. Each one has to deal with his own burdens in his own way. Providence is playing a careful game of Kolu Jade of hundred strings by controlling all of us." - Mankutimma\n\n[Translator\' note: The game involves tying one end of all the strings very high up. Each one will hold one end and dance to choreographed steps so that the strings can be twisted and untwisted without making a knot.]',
    kannada:
      "ಓರೋರ್ವನಿಚ್ಛೆಗುಣವೊಂದೊಂದು ಬಗೆ ಜಗದಿ ।\nಭಾರಮೋರೊರ್ವನಿಂಗೊಂದೊಂದು ತೆರದಿ ॥\nದಾರಗಳಿನವರ ವಿಧಿ ಪಿಡಿದು ಕುಣಿದಾಡಿಸಲು ।\nನೂರುಜಡೆಕೋಲಾಟ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೪ ॥",
    kannada_explanation:
      'ಜಗತ್ತಿನಲ್ಲಿ ಒಬ್ಬೊಬ್ಬನ ಇಚ್ಚೆಯ ಗುಣ ಒಂದೊಂದು ರೀತಿ ಮತ್ತು ಅವನವನ ಕಾರ್ಯದ ಭಾರ ಒಬ್ಬೊಬ್ಬನಿಗೆ ಒಂದೊಂದು ರೀತಿ . ಎಲ್ಲರ ಸೂತ್ರಗಳನ್ನೂ ವಿಧಿಯು ಹಿಡಿದು ಕುಣಿದಾಡಿಸಲು,ಈ ಜಗತ್ತೇ ಒಂದು" ನೂರು ಜಡೆ ಕೋಲಾಟ" ವಾಡುವಂತಹ ಚಿತ್ರಣವನ್ನು ಬಿಂಬಿಸುತ್ತದೆ ಎಂಬುದೆ ಈ ಮುಕ್ತಕದ ಹೂರಣ.',
  },
  {
    number: 335,
    english:
      '"Left over karmic debt from some older birth, consequences of previous actions come back to haunt us. They come as mango or neem (sweet or bitter) in the forest of this world. Providence makes a strong potion of those fruits and make people drink it and induce a fever of emotions." - Mankutimma',
    kannada:
      "ಆವ ಜನ್ಮದ ಋಣವೊ, ಆವ ಕರ್ಮದ ಕಣವೊ ।\nಮಾವಾಗಿ ಬೇವಾಗಿ ಸಂಸಾರ ವನದಿ ॥\nಜೀವಕೀಂಟಿಪುವು ಮಾದಕದ ರಸಪಾನಗಳ ।\nಭಾವಜ್ವರಂಗಳವು - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೫ ॥",
    kannada_explanation:
      'ಹಲವಾರು ಪೂರ್ವ ಜನ್ಮಗಳ ವಾಸನೆಗಳಿಗೆ ಅನುಸಾರವಾಗಿ ನಮಗೆ ಈ ಜನ್ಮ. ( ಇದನ್ನು ನಂಬದವರೂ ಇದ್ದಾರೆ). ಹಿಂದಿನಿಂದ ಹೊತ್ತು ತಂದ ಆ ವಾಸನೆ ಮತ್ತು ಕರ್ಮಗಳನ್ನು ಪೂರೈಸಿಕೊಳ್ಳಲು ಈ ಜನ್ಮ ಮತ್ತು ಇಲ್ಲಿನ ಕರ್ಮ. ಇಲ್ಲಿ ಮಾವಿನ ಸಿಹಿಯನ್ನೂ ಸವಿಯಬೇಕು. ಬೇವಿನ ಕಹಿಯನ್ನೂ ಸವಿಯಬೇಕು. ಇವೆರಡರ ಸಮ್ಮಿಶ್ರ ‘ರಸಪಾನ’ವನ್ನು ನಮಗೆ ವಿಧಿ ಮಾಡಿಸುತ್ತಿದೆ. ನಮ್ಮ ಭಾವೋದ್ವೇಗಗಳೇ ನಮಗೆ ತಾಪವನ್ನು ಹೆಚ್ಚಿಸುತ್ತಾ "ಭಾವ ಜ್ವರ’ವನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ ಎಂದು, ಬದುಕಿನಲ್ಲಿ ನಮಗೆ ದೊರೆಯುವ ಸಿಹಿ-ಕಹಿಗಳ ಸಮ್ಮಿಶ್ರ ಅನುಭವಗಳನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 336,
    english:
      '"Do you think your whole life is self made? There are so many forces that have got together to shape your present. People who have given you food, others who have advised you, some others who just gave you company - have these people not been a part of your making?" - Mankutimma',
    kannada:
      "ನಿನ್ನ ಜೀವಿತವೆಲ್ಲ ನಿನ್ನ ಕೈಮಾಳ್ಕೆಯೇಂ? ।\nಅನ್ಯಶಕ್ತಿಗಳೆನಿತೊ ಬೆರೆತಿರುವುವಲ್ಲಿ ॥ \nಅನ್ನವಿಡುವರು, ತಿಳಿವನೀವರ್, ಒಡನಾಡುವರು ।\nನಿನ್ನ ಬಾಳ್ಗಿವರಿರರೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೬ ॥",
    kannada_explanation:
      'ನಿನ್ನ ಬೆಳವಣಿಗೆಗೆ ಅನ್ಯರ ಶಕ್ತಿಗಳೆಷ್ಟೋ ಪೂರಕವಾಗಿ ಬೆರೆತಿರುವಾಗ ನಿನ್ನ ಬದುಕು ಕೇವಲ ನಿನ್ನಿಂದಲೇ ರೂಪುಗೊಂಡದ್ದೇನು? ನಿನಗೆ ಅನ್ನವಿಟ್ಟವರು, ಅರಿವನಿತ್ತವರು ಮತ್ತು ನಿನ್ನ ಒಡನಾಡಿಗಳು, ಈ ಎಲ್ಲರೂ ಒತ್ತಾಸೆಯಿಂದ ನಿನ್ನ ಬಾಳಲ್ಲಿ ಇರುವಾಗ, " ನಾನು ಸ್ವತಂತ್ರನಾಗಿ ಬೆಳೆದಿದ್ದೇನೆ" ಎಂದು ನೀ ತಿಳಿಯಬಾರದು ಎಂದು, ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಬಾಳ ವಿಕಸನದ ಪರಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 337,
    english:
      '"Air and earth are the basic qualities that get into the plants and cereals. Our body follows the qualities of what we eat. Mind follows the body. This leads to varieties in population. All are same at a human level, but differ at a group level due to their habits." - Mankutimma',
    kannada:
      "ಅನಿಲಗುಣ ಭೂಗುಣಗಳಿಂ ಸಸ್ಯಧಾನ್ಯಗುಣ ।\nತನುಗುಣಗಳನ್ನದಿಂ, ಮನದ ಗುಣ ತನುವಿಂ ॥\nಜನಪದವಿಧಂಗಳಿಂತಾಗಿಹುವು ಸೃಷ್ಟಿಯನೆ ।\nಮನುವೊಬ್ಬ, ಜನತೆ ಶತ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೭ ॥",
    kannada_explanation:
      "ಬೀಸುವ ಗಾಳಿ ಮತ್ತು ಅದರೊಳಗಿನ ಅನಿಲಗಳ ಗುಣಗಳು ಮತ್ತು ಅಲ್ಲಿನ ಭೂಮಿಯ ಗುಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ,ಆ ಪ್ರದೇಶದಲ್ಲಿ ಬೆಳೆಯುವ ಬೆಳೆಗಳ ಗುಣ, ತಿನ್ನವ ಅನ್ನದ ಗುಣದಿಂದ ದೇಹದ ಗುಣ, ದೇಹದ ಗುಣದಂತೆ ಮನದ ಗುಣ, ಹೀಗೆ ಬೇರೆ ಬೇರೆ ಪ್ರದೇಶದಲ್ಲಿ ಬೇರೆ ಬೇರೆ ರೀತಿಯ ಜನಪದ. ಎಲ್ಲರೂ ಮನುಷ್ಯರೇ ಆದರೂ ಜನಾಂಗಗಳು ನೂರಾರಾಗಿ ರೂಪುಗೊಂಡಿವೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ, ಎಂಬುದೇ ಶ್ರೀ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 338,
    english:
      '"Individuality is a myth. How can you think about yourself as a single person? There are traces of hundred (many) people in this shell that you call as "me". Your ancestors, family, relatives, friends and enemies are all part of what you are. Your qualities are derived (influenced) by all of them." - Mankutimma',
    kannada:
      "ಓರ್ವ ನಾನೆಂದು ನೀನೆಂತು ತಿಳಿಯುವೆ ಜಗದಿ? ।\nನೂರ್ವರಣಗಿಹರು ನಿನ್ನಾತ್ಮ ಕೋಶದಲಿ ॥\nಪೂರ್ವಿಕರು, ಜತೆಯವರು, ಬಂಧುಸಖಶತ್ರುಗಳು ।\nಸರ್ವರಿಂ ನಿನ್ನ ಗುಣ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೮ ॥",
    kannada_explanation:
      "‘ನಾನು’ ಒಬ್ಬನೇ, ಒಬ್ಬಂಟಿ ‘ನನ್ನಿಂದಲೇ ನಾನು’ ಎಂದು ನೀ ತಿಳಿಯಬೇಡ. ನಿನ್ನ ಭಾವಗಳಲ್ಲಿ, ಯೋಚನೆಗಳಲ್ಲಿ, ಗುಣಗಳಲ್ಲಿ ಮತ್ತು ನಿನ್ನ ಅಂತರಾತ್ಮದಲ್ಲಿ ನಿನ್ನ ಪೂರ್ವಜರ, ಸ್ನೇಹಿತರ, ಬಂಧುಗಳ, ಸನ್ನಿಹಿತರ ಮತ್ತು ನಿನ್ನ ಶತ್ರುಗಳ, ಹೀಗೆ ಎಲ್ಲರ ಪ್ರಭಾವ ಆಗಿದೆ. ನಿನ್ನ ಗುಣಮತ್ತು ಸ್ವಭಾವವು ನೀ ಸಂಪರ್ಕಕ್ಕೆ ಬಂದ ಎಲ್ಲರಿಂದ ಆಗಿದೆ, ಎಂದು ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ರೂಪುಗೊಳ್ಳುವಿಕೆಯನ್ನು ವಿಶಧೀಕರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 339,
    english:
      '"Your grandfather, his father and the fist person in your lineage all of them are inside you. They will also be in your son who is yet to be born, and his grand son too. The live inside you in the form of the influence each generation has on its next and that will go on for ever." - Mankutimma\n\n[Traslator\'s note: Is he talking about genes?]',
    kannada:
      "ನಿನ್ನಜ್ಜ ಮುತ್ತಜ್ಜ ಮೂಲಜ್ಜರೆಲ್ಲರುಂ ।\nನಿನ್ನೊಳವತರಿಸಿ ಮುಂದಿನ್ನು ಜನಿಸಲಿಹ ॥\nನಿನ್ನ ಮಗ ಮರಿಮೊಮ್ಮರೊಳು ಜೀವಿಪ್ಪರ್ ।\nಅನ್ವಯ ಚಿರಂಜೀವಿ - ಮಂಕುತಿಮ್ಮ ॥ ೩೩೯ ॥",
    kannada_explanation:
      "ವಂಶವಾಹಿನಿಯ ಸಿದ್ಧಾಂತದ ಪ್ರಕಾರ ನಮ್ಮ ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜ, ತಾಯಿ, ಅಜ್ಜಿ, ಮುತ್ತಜ್ಜಿ, ಹೀಗೆ ಹಿಂದಿನ ಏಳು ತಲೆಮಾರಿನ ಎಲ್ಲ ಜನರ ಸ್ವಭಾವ ಮತ್ತು ರೂಪಗಳು ನಮ್ಮೊಳಗೆ ಅವತರಿಸಿರಬಹುದು ಮತ್ತು ಮತ್ತು ಅವರುಗಳು ನಮ್ಮನ್ನೂ ಸೇರಿಸಿಕೊಂಡು ನಮ್ಮ ಮಗ, ಮೊಮ್ಮಗ , ಮರಿಮಗ ಹೀಗೆ ಮುಂದಿನ ಏಳು ತಲೆಮಾರುಗಳಿಗೆ ಸ್ವಭಾವ ಮತ್ತು ರೂಪಗಳನ್ನು ರವಾನಿಸುತ್ತಾ, ಚಿರಂಜೀವಿಯಂತೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಜೀವಿಸುತ್ತಾರೆ ಎಂದು ಜಗತ್ತಿನ ನಿರಂತರತೆಯ ಸ್ವರೂಪವನ್ನು ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 340,
    english:
      '"Let the secrets coded in the lines of your forehead be as they are. You can see it from your own eyes in the happenings in this world around you and the feelings they generate in you. Thiose feelings will touch your soul and make you realise that heaven and hell are the same. In essence they will make you realize that if you relate to the world around you, the encoded secret (often termed as fate) does not matter at all." - Mankutimma',
    kannada:
      "ರೇಖಾರಹಸ್ಯಗಳು ನಿನ್ನ ಹಣೆಯವದಿರಲಿ ।\nನಿಂ ಕಾಣ್ಬ ರೂಪಭಾವಂಗಳೊಳಮಿಹುವು ॥\nತಾಕಿ ನಿನ್ನಾತುಮದ ನಾಕನರಕಂಗಳ್ ।\nಏಕವೆನಿಪುವುವು ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೦ ॥",
    kannada_explanation:
      '"ನಿನ್ನ ಹಣೆಯಲ್ಲಿ ರಹಸ್ಯವಾಗಿರುವ ಹಣೆಬರಹಗಳ ಗೆರೆಗಳು ಇವೆ. ಅವು ಒತ್ತಟ್ಟಿಗೆ ಇರಲಿ. ನೀನು ನೋಡುವ ರೂಪ, ಭಾವಗಳ ಒಳಗೆ ಇರುವ ಸತ್ಯ ಮತ್ತು ಸತ್ವ, ನಿನ್ನ ಆತ್ಮವನು ತಾಕಿ ನಿನಗೆ ಸ್ವರ್ಗ ನರಕಗಳು ಒಂದೇ ಅನಿಸುವಂತೆ ಮಾಡುತ್ತವೆ " ಎಂದು ನಿನ್ನ ಮತ್ತು ಈ ಜಗದ ಸಂಬಂಧದಲ್ಲಿ ನಿನಗೆ ಯಾವ ರೀತಿಯ ಅನುಭವವಾಗಬಹುದು ಎಂಬ ವಿಷಯವನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ',
  },
  {
    number: 341,
    english:
      "\"Rice mixed in milk is good for man's body. Milk comes from the cow. Cow grows well when it eats the grass. For grass, the nutrition comes from soil of the village that is mixed with cow's waste. The whole nature is thus filled with such relationships of provider and comsumers. Every being's produce becomes food for the next. What is then the difference between milk or dung?\" - Mankutimma",
    kannada:
      "ಕ್ಷೀರಾನ್ನದಿಂದೆ ನರಪುಷ್ಟಿ; ಹಸುವಿಂ ಪಾಲು ।\nಪೈರು ಬೆಳಸಿಂದೆ ಹಸು; ಪೈರುಗಳ್ಗೂರ ॥\nಸಾರದಿಂ ಪುಷ್ಟಿ; ಇಂತುಣಿಸುಮುಂಬನುಮೊಂದು ।\nಪಾಲೇನು? ಪೇಲೇನು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೧ ॥",
    kannada_explanation:
      "ಹಾಲಿನಿಂದ ನರರಿಗೆ ಪೌಷ್ಟಿಕತೆ ದೊರೆಯುತ್ತದೆ. ಆ ಹಾಲನೀಯುವ ಹಸುವಿಗೆ ಹಸಿರು ಪೈರು,ಹುಲ್ಲು ಮತ್ತು ಕಾಳುಗಳಿಂದ ಪೌಷ್ಟಿಕತೆ ಸಿಗುತ್ತದೆ. ಆ ಪೈರುಗಳಿಗೆ ಬೆಳೆಯುವ ಭೂಮಿಗೆ ಊರಜನರ ತ್ಯಾಜ್ಯದಿಂದ ಸಾರ ಅಥವಾ ಪೌಷ್ಟಿಕತೆ ಸಿಗುತ್ತದೆ.ಹೀಗೆ ಒಂದಕ್ಕೊಂದು ಅಧಾರಪಟ್ಟಿರುವಾಗ, ಹಾಲು ಉತ್ತಮ ಮಲ ಅಧಮ ಎನ್ನುವುದು ಏಕೆ? ಸಮಗ್ರತೆಯ ಕಾಣು ಎನ್ನುವಂತೆ ಈ ಜಗತ್ತಿನ ಎಲ್ಲಕ್ಕೂ ಮತ್ತೊಂದರ ಮೇಲಿನ ನಿರ್ಭರತೆಯ ಚಿತ್ರಣವನ್ನು ನಮಗೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 342,
    english:
      '"In the first hour, a garland of flowers will have lusture and fragrance. In the next hour, it will rot and stink. In the third hour, it will dry and prick us like a thorn. The story of the world is also thus." - Mankutimma',
    kannada:
      "ಪೂಸರದಿ ಕಾಂತಿ ಸೌರಭ ಮೊದಲನೆಯ ತಾಸು ।\nವಾಸನೆಯ ಹಳಸು ಕೊಳಕೊಳಚೆಯಾ ಬಳಿಕ ॥\nಮಾಸಿ ನಲುನಲುಗಿ ಮುಳ್ಳಹುದು ಮೂರನೆ ತಾಸು ।\nಸಂಸಾರಕಥೆಯದುವೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೨ ॥",
    kannada_explanation:
      "ಆಗತಾನೆ ಪೋಣಿಸಿದ ಹೂಮಾಲೆಯಲ್ಲಿ ನವ ನವೀನತೆ ಇರುತ್ತದೆ ಮತ್ತು ಪರಿಮಳದ ಘಮಲು ಎಲ್ಲೆಲ್ಲೂ ಪಸರಿಸುತ್ತದೆ. ಆದರೆ ಸ್ವಲ್ಪ ಸಮಯದ ಬಳಿಕ ಅದು ಬಾಡುತ್ತಾ ತನ್ನ ಸುಗಂಧ ಮತ್ತು ನಾವೀನ್ಯವನ್ನು ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ. ಸಮಯ ಕಳೆದಂತೆ ನಲುಗಿ, ಕೊಳೆತು ಸುಗಂಧ ದುರ್ಗಂಧಕ್ಕೆ ಎಡೆಮಾಡಿಕೊಡುತ್ತದೆ. ಸಂಜೆಯಹೊತ್ತಿಗೆ ಅದರ ವಾಸನೆ ಅಸಹನೀಯವಾಗಿ ಬಿಸುಡುವ ಮನಸ್ಸಾಗುತ್ತದೆ. ನಮ್ಮೆಲ್ಲರ ಜೀವನದ ಕಥೆಯೂ ಇಷ್ಟೇ ಎಂದು ಬದುಕಿನ ವಾಸ್ತವಿಕತೆಯನ್ನು ಉಪಮಾ ಸಹಿತ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 343,
    english:
      '"One gets fed up of his associations with the pleasures of this world. It is like posion ivy; we get itches where ever it touches. If you don\'t scratch, then we suffer a silent agony. If you scratch, you get rashes. It is like making fun of a helpless person." - Mankutimma',
    kannada:
      "ಸಾಕುಸಾಕೆನಿಸುವುದು ಲೋಕ ಸಂಪರ್ಕಸುಖ ।\nಸೋಕಿದೆಡೆ ತುರಿಯನೆಬ್ಬಿಸುವ ತುರುಚಿಯದು ॥\nಮೂಕನವೆ ತುರಿಸದಿರೆ, ತುರಿಯುತಿರೆ ಹುಣ್ಣುರಿತ ।\nಮೂಕನಪಹಾಸ್ಯವದು - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೩ ॥",
    kannada_explanation:
      "ಲೋಕ ಸಂಪರ್ಕದ ಸುಖ ಹಲವು ಬಾರಿ ಸಾಕು ಸಾಕೆನಿಸುತ್ತದೆ. ಸಂಪರ್ಕಗಳು, ತುರಿಕೆ ಸೊಪ್ಪು ಸೋಕಿದಾಗ ಆಗುವಂತಾ ಉರಿಯನ್ನು ನೀಡುತ್ತವೆ. \n ತುರಿಸಿಕೊಂಡರೆ ಹುಣ್ಣಾಗಿ ಮತ್ತಷ್ಟು ನವೆಯಾಗುತ್ತದೆ ಮತ್ತು ತುರಿಸಿಕೊಳ್ಳದಿದ್ದರೆ ಒಂದು ಮೂಕವೇದನೆಯನ್ನು ನೀಡುತ್ತದೆ.ಇದು ಹೇಗಿದೆಯಂದರೆ, ಒಬ್ಬ ಮೂಕ, ಆದರೂ ಅಪಹಾಸ್ಯಮಾಡಬೇಕೆಂದುಕೊಂಡಾಗ ಮಾತನಾಡಲಾಗದೆ ಬರೀ ಕೈಸನ್ನೆಯಲ್ಲೇ ಮಾಡುವಂಥಾ ಚೇಷ್ಟೆಯನ್ನೆ ಮಾಡುತ್ತೇವೆ ನಾವು ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 344,
    english:
      '"To eat guavas without waiting for them to ripe. To drink castor oil when stomach hurts (due to the guavas). When the pain subsides, calling that as pleasure. This is the way we have fun in this world." - Mankutimma\n\n[Translator\'s note: We were perfectly normal and happy. But, due to our restlessness, we do things that disturb happiness. Then we search the entire world for a cure. When little of the disturbed happiness is back, we feel satisfied. The whole cycle would have been unnecessary if we coutroled our restlessness to bgen with.]',
    kannada:
      "ಮಿಡಿಚೀಪೆಕಾಯಿಗಳ ತಡಬಡದೆ ನುಂಗುವುದು ।\nಕಡಿಯೆ ಹೊಟ್ಟೆಯಲಿ ಹರಳೆಣ್ಣೇ ಕುಡಿಯುವುದು ॥\nಬಿಡುತಿರಲು ನೋವಾಗ ಸುಖವೀಗಳೆನ್ನುವುದು ।\nಪೊಡವಿಗಿದೆ ಭೋಗವಿಧಿ - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೪ ॥",
    kannada_explanation:
      "ಇನ್ನೂ ಮಾಗದ ಸಣ್ಣ ಸಣ್ಣ ಹಸೀ ಸೀಬೇಕಾಯಿಗಳನ್ನು ಆಸೆಯಿಂದ ಕಡಿದು, ಸಂಪೂರ್ಣ ಜಗಿಯದೆ ಆತುರಾತುರವಾಗಿ ನುಂಗಿ, ಹೊಟ್ಟೆನೋವು ಬರಿಸಿಕೊಂಡು, ಆ ನೋವ ನಿವಾರಣೆಗೆ, ಹರಳೆಣ್ಣೆ ಕುಡಿದು, ಆ ನೋವು ಕಡಿಮೆಯಾಗುವಾಗ, ಆಹಾ! ಇದೇ ಸುಖ ಎನ್ನುವಂತೆ ಇದೆ, ಮನುಷ್ಯರು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸುಖಗಳನ್ನು ಅನುಭವಿಸುವ ರೀತಿ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 345,
    english:
      '"To slip and fall; only to shake up and get up to continue. To eat lot of kadubu (sweet) in hurry; only to be forced to take bitter medicine later. Making wring decisions due to haste; not accepting them as wrong as pursuing them as if they were the right ones. Life is just this. Isn\'t it?" - Mankutimma',
    kannada:
      "ಅಡಿಜಾರಿ ಬೀಳುವುದು, ತಡವಿಕೊಂಡೇಳುವುದು ।\nಕಡುಬ ನುಂಗುವುದು, ಕಹಿಮದ್ದ ಕುಡಿಯುವುದು ॥\nದುಡುಕಿ ಮತಿದಪ್ಪುವುದು, ತಪ್ಪನೊಪ್ಪೆನ್ನುವುದು ।\nಬದುಕೆಂಬುದಿದು ತಾನೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೫ ॥",
    kannada_explanation:
      "ಇಡುವ ಹೆಜ್ಜೆ ಜಾರಿ ಕೆಳಗೆ ಬೀಳುವುದು,ಮತ್ತೆ ಸಾವರಿಸಿಕೊಂಡು ಮೇಲೆ ಏಳುವುದು, ಸಿಹಿ ಕಡುಬ ತಿನ್ನುವುದು, ತಿಂದದ್ದು ಹೆಚ್ಚಾಗಿ ಹೊಟ್ಟೆ ನೊಂದರೆ, ಕಹಿಯಾದ ಔಷಧಿಯನ್ನು ಕುಡಿಯುವುದು, ದುಡುಕಿ ಏನೋ ತಪ್ಪ ಮಾಡುವುದು, ಮಾಡಿದ ತಪ್ಪನ್ನು ‘ನಾ ಮಾಡಿದ್ದೇ ಸರಿ’ಎಂದು ಸಾಧಿಸುವುದು, ಹೀಗೆ ಸಾಗುವುದೇ ನಮ್ಮ ಜೀವನವೆಂದು, ಬದುಕಿನಲ್ಲಿನ ವಾಸ್ತವಿಕತೆಯ ಒಂದು ಚಿತ್ರವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 346,
    english:
      "\"Most of man's endeavours fall into this category. A coolie who agrees to carry your weight through. He takes it on his shoulders. After walking just four yards, he starts asking how much longer he needs to go. In a haste, he gives up and drops the weight.\" - Mankutimma\n\n[Translator's note: We are both quick to start and quick to call it off. We must understand that we need to deliberate the pros and cons of any project before starting it. Once started we must see it through]",
    kannada:
      "ಹೇರಾಳು ಮೂಟೆಗೂಲಿಯ ಬೇಡಿ ಹೆಗಲೊಡ್ಡಿ ।\nಭಾರವನು ನಾಲ್ಕು ಮಾರೊಯ್ದಷ್ಟರೊಳಗೇ ॥\nದೂರವಿನ್ನೆಷ್ಟೆನುತಲಾತುರಿಪನ್ ಅದನಿಳಿಸೆ ।\nಕಾರುಬಾರುಗಳಷ್ಟೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೬ ॥",
    kannada_explanation:
      "ಮೂಟೆ ಹೊರಲು ಬಂದ ಕೂಲಿಯಾಳು, ಹೊತ್ತ ಮೂಟೆಯ ಭಾರ ತಡಿಯಲಾರದೆ, ಸ್ವಲ್ಪ ದೂರ ನಡೆಯುವಷ್ಟರಲ್ಲಿಯೇ, ಹೊತ್ತ ಭಾರವನ್ನು ಇಳಿಸಲು ‘ಇನ್ನೂ ಎಷ್ಟು ದೂರವಿದೆ’ ಎಂದು ಆತುರ ಪಡುವಂತೆ ಇದೆ ನಮ್ಮ ಜೀವನದ ಪರಿ ಎಂದು ವಿಡಂಬನೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 347,
    english:
      '"God has created the body with parts that have conflicting needs. The tongue likes spicy tasty food which is bad for th tummy. The skin like cool breeze that is bad for the lungs. You have to decide which one you need to please." - Mankutimma',
    kannada:
      "ರುಚಿಗೊಪ್ಪೆ ರಸನೆಗದು ಶೂಲವಹುದುದರಕ್ಕೆ ।\nತ್ವಚೆ ಬೇಳ್ಪ ತಂಗಾಳಿಯಿಂ ಬೇನೆಯೆದೆಗೆ ॥\nರಚಿಸಿದವನಿಂತೊಡಲೊಳಿಡೆ ವಿಷಮ ಕುಟಿಲಗಳ ।\nಉಚಿತವಾವುದೋ ನಿನಗೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೭ ॥",
    kannada_explanation:
      "ನಾಲಿಗೆಗೆ ರುಚಿಯಾದದ್ದು,ಆರೋಗ್ಯಕ್ಕೆ ಹಿತವಾಗುವುದಿಲ್ಲ. ರುಚಿಯಾಗಿದೆ ಎಂದು ಆಸೆ ಪಟ್ಟು ತಿಂದರೆ ಹೊಟ್ಟೆನೋಯುತ್ತದೆ,ಆರೋಗ್ಯ ಕೆಡುತ್ತದೆ. ಚರ್ಮಕ್ಕೆ ಹಿತವಾಗಿರುತ್ತದೆ ಎಂದು ತಂಗಾಳಿಗೆ ಹೋದರೆ ಒಳಗೆ ಶೀತವೋ,ಉಬ್ಬಸವೋ ಬರುತ್ತದೆ. ಒಂದು ಅಂಗಕ್ಕೆ ಹಿತವಾದದ್ದು ಮತ್ತೊಂದು ಅಂಗಕ್ಕೆ ವಿಷಮವಾಗುವಂತಹ ಕುಟಿಲತೆಗಳನ್ನು ‘ಸೃಷ್ಟಿಸಿದಾತನೆ’ ನಮ್ಮ ಒಡಲಲ್ಲಿ ಇಟ್ಟಿರುವಾಗ ನಮಗೆ ಹಿತವಾವುದು ಅಹಿತವಾವುದು ಎಂದು ಅರಿಯುವುದೇ ಕಷ್ಟ ಎಂದು ನಮ್ಮ ಬದುಕಿನ ವಾಸ್ತವಿಕತೆಯ ಒಂದು ಆಯಾಮವನ್ನು ತೋರಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 348,
    english:
      '"The struggles and passions in life are like flames spreading heat in ten directions. Time is like a fool who is thowing sand at it (fire) to douse it. This whole world seems to be a dance of dust and smoke from this activity. You may rise or you may fall; in this dance, everything seems to be the same." - Mankutimma',
    kannada:
      "ಬಾಳಿನೊಳಕಿಚ್ಚು ದೆಸೆದೆಸೆಗುರಿಯ ಚಾಚುತಿರೆ ।\nಕಾಲನೆನ್ನುವ ಹುಚ್ಚ ಮಣ್ಣನೆರಚುತಿರೆ ॥\nಧೂಳು ಹೊಗೆಗಳ ಹೊರತು ಜಗದಿ ಬೇರಿಲ್ಲದಿರೆ ।\nಮೇಲೇನು? ಬೀಳೇನು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೮ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಮನದೊಳಗೆ ಇರುವ ದ್ವೇಷ, ಅಸೂಯೆ, ಮತ್ಸರ, ಮುಂತಾದ ದಳ್ಳುರಿಗಳು ನಾಲ್ಕೂ ದಿಕ್ಕುಗಳಿಗೆ ಸಮಯ ಸಮಯಕ್ಕೆ ಬುಗ್ಗೆಯಂತೆ ಮೇಲೇಳುತ್ತಿರುವಾಗ, ಇವೆಲ್ಲ ಕೂಡಿ ಧೂಳಂತೆ ಹರಡುತ್ತಿರುವಾಗ ಮತ್ತು ಈ ಧೂಳು ಮತ್ತು ಬೆಂಕಿಗಳಲ್ಲದೆ ಬೇರೇನೂ ಇಲ್ಲದೆ ಇರುವಾಗ ನಾವುಮೇಲಿದ್ದರೇನುಕೆಳಗಿದ್ದರೇನು ಎಂದು ಮನುಜರ ಬದುಕಿನ ಮತ್ತೊಂದು ಆಯಾಮವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 349,
    english:
      '"Limitted are your qualities and capabilities. So, limited are your duties as well. To recognize one\'s limit is hard and it very easy to confuse it with the limitless possibilities. You must put in as much effort that pleases you (your limit). Stop when it is truly hurting. Leave the rest to God. Let there be His part also in your work." - Mankutimma',
    kannada:
      "ಮಿತ ನಿನ್ನ ಗುಣ ಶಕ್ತಿ, ಮಿತ ನಿನ್ನ ಕರ್ತವ್ಯ ।\nಮಿತ ಅತಿಗಳಂತರವ ಕಾಣುವುದೆ ಕಡಿದು ॥\nಹಿತವೆನಿಸಿದನಿತೆಸಗು; ದೈವಕುಳಿದುದನು ಬಿಡು ।\nಕೃತಿಯಲಿ ದೈವಕಂ - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೯ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಶಕ್ತಿ ಮತ್ತು ನಿನ್ನ ಕ್ಷಮತೆಗೆ ಒಂದು ಮಿತಿ ಇದೆ ಮತ್ತು ಆ ಮಿತಿಯೊಳಗೆ ನಿನ್ನ ಎಲ್ಲ ಕೆಲಸ ಕಾರ್ಯಗಳೂ ಇರುತ್ತವೆ. ಆದರೆ ನಮ್ಮ ಮಿತಿಗಳನ್ನು ಮತ್ತು ನಮ್ಮ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಅರಿಯುವುದು ಬಹಳ (ಕಡಿದು) ಕಷ್ಟವಾದ ಕೆಲಸ.ನಿನಗೆ ಹಿತ ಎಂದು ಅನಿಸಿದ್ದನ್ನು ನೀನು ಮಾಡು, ನಿನ್ನ ಮಿತಿಯನ್ನು ಮೀರಿದ್ದನ್ನು ಮತ್ತು ನಿನ್ನ ಕೈಲಾಗದ್ದನ್ನು ಆ ದೈವಕ್ಕೆ ಬಿಡು. ನೀ ಮಾಡುವ ಎಲ್ಲ ಕೆಲಸವನ್ನೂ ಆ ದೈವಕ್ಕೆ ಅರ್ಪಿಸಿಬಿಡು ಎಂಬ ತತ್ವವನ್ನು ಪ್ರತಿಪಾದಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 350,
    english:
      '"What do we have in life? So much hunger that can not be described. Restlessness that is har to endure. Embarrassing thoughts buried deep in our minds. Desires that the wind brings along from somewhere. These are our facts of life and how can we be happy with these?" - Mankutimma',
    kannada:
      "ಹೇಳಲಾಗದ ಹಸಿವು, ತಾಳಾಲಾಗದ ತಪನೆ ।\nಆಳಾದಲಿ ನಾಚನಾಗಿಪ ಚಿಂತೆಯೂಟೆ ॥\nಗಾಳಿಯೆತ್ತತ್ತಣಿನೊ ತಂದೀವ ಸೋಂಕು - ಇವೆ ।\nಬಾಳ ಸಾಮಗ್ರಿಯಲ - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೦ ॥",
    kannada_explanation:
      "ನಮಗೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಏನೋ ಬೇಕು,ಆದರೆ ಅದು ನಮಗೇ ಹೇಳಲಾಗುವುದಿಲ್ಲ ಮತ್ತು ಅದನ್ನು ಪಡೆಯಲು ನಾವು ತೀವ್ರವಾಗಿ ಪರದಾಡುತ್ತೇವೆ.ನಮ್ಮ ಮನಸ್ಸಿನ ಒಳಗೆ ನಾವೇ ಹೊಕ್ಕು, ನಮಗಿರುವ ಆಲೋಚನೆಗಳು ಮತ್ತು ಬುಗ್ಗೆ ಬುಗ್ಗೆಯಾಗಿ ಮೇಲೇಳುವ ಚಿಂತೆಗಳ ಮಹಾಪೂರವನ್ನು ನೋಡಿದರೆ, ನಾಚಿಕೆಯಾಗುತ್ತದೆ. ಹೊರಗಿನಿಂದ ಬಂದು ನಮ್ಮ ಮನದಲ್ಲಿ ಮನೆಮಾಡಿ ನಮ್ಮನ್ನು ಈ ಜಗತ್ತಿಗೆ ಅಂಟಿಸಿಬಿಡುವ ಇಂತಹ ಆಲೋಚನೆಗಳೇ, ನಾವು ನಡೆಸುವ ಬಾಳಿಗೆ ಸಾಮಗ್ರಿ ಎಂದು ವಾಸ್ತವಿಕ ಚಿತ್ರಣವನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 351,
    english:
      '"Where has God hidden in this body? In the heart? or brain? or where the eyebrows meet? Many people have debated it before; Listen to my theory - stomach is where He lives." - Mankutimma',
    kannada:
      "ಹುದುಗಿಹುದದೆಲ್ಲಿ ಪರಮಾತ್ಮನೀ ತನುವಿನಲಿ? ।\nಹೃದಯದೊಳೊ ಮೆದುಳಿನೊಳೊ ಹುಬ್ಬಿನಿರುಕಿನೊಳೋ ॥\nಇದನೆನಿತೊ ತರ್ಕಿಸಿಹರ್; ಎನ್ನೆಣಿಕೆಯನು ಕೇಳು ।\nಉದರವಾತ್ಮನಿವಾಸ - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯ ಎಲ್ಲದರಲ್ಲೂ ಆ ಪರಮಾತ್ಮ ನಿವಸಿಸುತ್ತಾನೆ ಎನ್ನುವುದು ನಮ್ಮ ನಂಬಿಕೆ. ಆದರೆ ನಮ್ಮ ದೇಹದಲ್ಲಿ ಆ ಪರಮಾತ್ಮ ಎಲ್ಲಿದ್ದಾನೆ? ಹೃದಯದಲ್ಲೋ, ಬುದ್ಧಿಯಲ್ಲೋ ಅಥವಾ ಎರಡು ಹುಬ್ಬುಗಳು ಕೂಡುವ ಭ್ರುಕುಟಿಯಲ್ಲೋ ಎಂದು ನಾನಾ ತರ್ಕಗಳು ಇರುವಾಗ, ಹೊಟ್ಟೆ ತುಂಬಿದಾಗ ಆತ್ಮ ತೃಪ್ತಿಯಾಗುತ್ತದೆಯಾದ್ದರಿಂದ, ಆ ಪರಮಾತ್ಮ ಉದರದಲ್ಲಿ, ಎಂದರೆ ಹೊಟ್ಟೆಯಲ್ಲಿ ಇದ್ದಾನೆ ಎಂದು ಅರಿತುಕೋ ಎನ್ನುತ್ತಾ ಒಂದು ಪರಮಸತ್ಯವನ್ನು ನುಡಿದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 352,
    english:
      '"Our life is nothing but the daily antics of the Stomach. Because of this Stomach, we are ready to bend our body (back) to work for a wealthy master. Our mouth opens as soon as it sees food (for the sake of the Stomach). To keep the Stomach filled, we beg for clothes from the master. The hand automatically stretches out for the alms. Thus is all our stories." - Mankutimma\n\n[Translator\'s note: Stomach capitalized to treat him like a person.]',
    kannada:
      "ಹೊಟ್ಟೆರಾಯನ ನಿತ್ಯದಟ್ಟಹಾಸವೊ ಬಾಳೊ ।\nಧೃಷ್ಟ ಧಣಿಯೂಳಿಗಕೆ ಸೊಟ್ಟು ಮೈಬಾಗು ॥\nಹಿಟ್ಟಿಗಗಲಿದ ಬಾಯಿ, ಬಟ್ಟೆಗೊಡ್ಡಿದ ಕೈಯಿ ।\nಇಷ್ಟೆ ನಮ್ಮೆಲ್ಲ ಕಥೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೨ ॥",
    kannada_explanation:
      "ನಮಗೆ ಪ್ರತಿ ನಿತ್ಯ ಹಸಿವಾಗುವುದು. ಹೊಟ್ಟೆಪಾಡಿಗಾಗಿ ಮತ್ತು ನಮ್ಮ ಜೀವನದ ಇತರೆ ಅವಶ್ಯಕತೆಗಳಿಗೆ ನಮಗಿಂತ ಬಲಿಷ್ಟನಾದವನ ಬಳಿ ಊಳಿಗ ಮಾಡುವುದು, ಮೈ ಬಗ್ಗಿಸಿ ದುಡಿಯುವುದು ಮತ್ತು ಅವನು ನೀಡುವ ಹಣಕ್ಕೆ ಕೈ ಒಡ್ಡುವುದು, ಇಷ್ಟೇ ನಮ್ಮ ಎಲ್ಲರ ಜೀವನದ ಕಥೆಯೂ ಎಂದು ಬದುಕಿನ ವಾಸ್ತವಿಕತೆಗೆ ಕನ್ನಡಿಯಂತೆ ನುಡಿದಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 353,
    english:
      '"Many interesting things may happen. You may go to many places. You may be alive, well respected and prosperous. What good are all this when they are all controlled by something beyond all human understanding (God) and will finally finish them all. Always keep thinking about that." - Mankutimma',
    kannada:
      "ಏನಾದೊಡೇನು? ನೀನೆಲ್ಲಿ ಪೋದೊಡಮೇನು? ।\nಪ್ರಾಣವೇಂ ಮಾನವೇನಭ್ಯುದಯವೇನು? ॥\nಮಾನವಾತೀತವೊಂದೆಲ್ಲವನು ನುಂಗುವುದು ।\nಜಾನಿಸಿದನಾವಗಂ - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೩ ॥",
    kannada_explanation:
      'ಏನಾದರೇನು? ಎಲ್ಲಿ ಹೋದರೇನು? ನಿನ್ನ ಪ್ರಾಣವು, ಮಾನವು ಮತ್ತು ಉದ್ಧಾರವೂ ಒಂದು ಅತಿಮಾನವ ಶಕ್ತಿಯ ಅಧೀನದಲ್ಲಿರುವುದರಿಂದ ನೀನು " ನಾನು ಪರಮಾತ್ಮಾಧೀನ" ಎಂದು ಅರಿತು ಅದನ್ನು ಕುರಿತು ಧ್ಯಾನಿಸು ಎಂದು ಅಪ್ಪಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 354,
    english:
      '"We say that the whole world is a divine game. In this game, there is no loser and hence there must be no sorrow. Eventhough there is no loser, the game is still interesting. It is like getting a dumb person (who cannot speak) drunk and letting a scorpion bite him. He can not tell any one about his pain. But is jumping around. People think he is jumping/dancing because of the liquor and laugh at him. Only God is amusing himself." - Mankutimma',
    kannada:
      "ಲೋಕವೆಲ್ಲವು ದೈವಲೀಲೆಯಂಬರೆ, ಪೇಳಿ ।\nಶೋಕ ಸೋಂಕಿರದೊಡಾ ಲೀಲೆ ನೀರಸವೇಂ? ॥\nಮೂಕಂಗೆ ಕಳ್ ಕುಡಿಸಿ ಚೇಳ್ ಕುಟುಕಿಪಾಟವಿದು ।\nಏಕಪಕ್ಷದ ಲೀಲೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೪೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತೆಲ್ಲವೂ ಆ ಪರಮಾತ್ಮನ ಲೀಲಾವಿನೋದ ಎನ್ನುವ ಹೇ! ಜನರೇ, ಹೇಳಿ ಆ ಲೀಲೆಯಲ್ಲಿ ದುಃಖದ ಲೇಪನ ಇಲ್ಲದಿದ್ದಿದ್ದರೆ ಈ ಜೀವನವೇನು ನೇರಸವಾಗಿಬಿಡುತ್ತಿತ್ತೆ? ಮಾತನಾಡಲಾಗದವನಿಗೆ ಹೆಂಡವನ್ನು ಕುಡಿಸಿ ನಂತರ ಚೇಳಿನಿಂದ ಕಚ್ಚಿಸುವಂತೆ, ಇದೊಂದು ಏಕಪಕ್ಷೀಯವಾದ ಲೀಲೆ ಆ ಪರಮಾತ್ಮನದು ಎಂದು, ಜಗತ್ತಿನಲ್ಲಿ ಜನರ ಜೀವನದ ಪರಿಯನ್ನು ವಿಶ್ಲೇಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 355,
    english:
      '"What is the use of calculating your wealth, divising new ways to earn, working hard endlesslessly? There is a force hidden somewhere that you can not imagine who will make fun of all your calculations. Providence is working tirelessly to make fun of your efforts." - Mankutimma',
    kannada:
      "ಗುಣಿಗುಣಿಸಿ ತಿಣುಕುತ್ತ ಹೆಣಗಾಡಿ ಫಲವೇನು ।\nಗಣನೆಗೆಟುಕದದೊಂದಚಿಂತ್ಯವೆತ್ತಲೊ ತಾನ್ ।\nಅಣಗಿರ್ದು ನಿನ್ನೆಲ್ಲ ಗಣಿತಗಳನಣಕಿಪುದು ।\nದಣಿಯದಾ ವಿಧಿ ವಿಕಟ - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೫ ॥",
    kannada_explanation:
      "ನಾವು ನಮ್ಮ ಜೀವನದ ಆಗುಹೋಗುಗಳನ್ನು ತೀವ್ರವಾಗಿ ಆಲೋಚಿಸುತ್ತಾ, ಅದರ ಬಗ್ಗೆ ಲೆಕ್ಕಾಚಾರವನ್ನು ಹಾಕುತ್ತಾ ಪರದಾಡಿದರೆ ಏನು ಪ್ರಯೋಜನ? ನಮ್ಮ ಲಕ್ಕಾಚಾರಕ್ಕೆ ಎಟುಕದ ಮತ್ತು ನಮ್ಮ ಯೋಚನೆಯ ಪರಿಧಿಯೊಳಕ್ಕೆ ನಿಲುಕದ ಒಂದು ಶಕ್ತಿ ವಿಧಿ ರೂಪದಲ್ಲಿ, ತಾನು ಹೊರಗೆ ತೋರ್ಪಡಿಸಿಕೊಳ್ಳದೆ ಇದ್ದರೂ, ನಮಗೆ ಕಾಣದೆ ಇದ್ದರೂ, ತನ್ನ ಪ್ರಭಾವವನ್ನು ಬೀರಿ ನಮ್ಮ ಎಲ್ಲ ಲೆಕ್ಕಾಚಾರವನ್ನೂ ಬುಡಮೇಲು ಮಾಡಿ, ನಮ್ಮನ್ನು ವಿಕಟ ಅಟ್ಟಹಾಸದಿಂದ ಅಣಕಿಸುತ್ತದೆ ಎಂದು ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ ವಿಧಿಯಾಟದ ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 356,
    english:
      '"Fate will pull you towards it by using desire as his bait. When you are wounded and tired, it sees your from the corner of its eyes, give a pleasant look, pats your back as if to give you support. In reality is is only setting you up to trip in your next step. It is secretly smiling at you after finishing you in this devious game." - Mankutimma',
    kannada:
      "ಆಶೆ ಬಲೆಯನು ಬೀಸಿ, ನಿನ್ನ ತನ್ನೆಡೆಗೆಳೆದು ।\nಘಾಸಿ ನೀಂ ಬಡುತ ಬಾಯ್ಬಿಡಲೋರೆ ನೋಡಿ ॥\nಮೈಸವರಿ ಕಾಲನೆಡವಿಸಿ, ಗುಟ್ಟಿನಲಿ ನಗುವ ।\nಮೋಸದಾಟವೊ ದೈವ - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೬ ॥",
    kannada_explanation:
      "ಆಸೆಯ ಬಲೆಯನ್ನು ನಮ್ಮ ಮೇಲೆ ಬೀಸಿ, ನಮ್ಮ ಮನಸ್ಸುಗಳಲ್ಲಿ ಆಸೆ ಚಿಗುರುವಂತೆ ಮಾಡಿ, ಆ ಆಸೆಗಳನ್ನು ಪೂರೈಸಿಕೊಳ್ಳಲು ನಾವು ಪಡುವ ಪಾಡನ್ನು ಓರೆಗಣ್ಣಿಂದ ನೋಡಿ, ನಮ್ಮ ಮೇಲೆ ಕರುಣೆಯೋ ಎಂಬಂತೆ ನಮ್ಮ ಮೈದಡವಿ ಎದ್ದುನಿಲ್ಲುವಂತೆ ಮಾಡಿ, ಮತ್ತೆ ನಮ್ಮ ಕಾಲನ್ನು ಎಡವಿಸಿ ಮರೆಯಲ್ಲಿ ನಿಂತು ನೋಡಿ ಮುಸಿ ಮುಸಿ ನಗುವ ಆ ಪರಮಾತ್ಮನದು, ಮೋಸದಾಟವೋ? ಎಂದು ವಿಡಂಬನಾತ್ಮಕ ಪ್ರಸ್ತಾಪವನ್ನು ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 357,
    english:
      '"You are a mere sesame seed lined up for crushing in the oil mill of the Creator. He will crush every one. He will not spare any one. He will not hurry. Neither will he forget. He will not ignore his work (of crushing you). He will get to every one." - Mankutimma',
    kannada:
      "ಧಾತನೆಣ್ಣೆಯಗಾಣದೆಳ್ಳುಕಾಳಲೆ ನೀನು? ।\nಆತನೆಲ್ಲರನರೆವನ್; ಆರನುಂ ಬಿಡನು ॥\nಆತುರಂಗೊಳದೆ ವಿಸ್ಮೃತಿಬಡದುಪೇಕ್ಷಿಸದೆ ।\nಘಾತಿಸುವನೆಲ್ಲರನು - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೭ ॥",
    kannada_explanation:
      "ನಮಗೆ ಈ ಬದುಕನ್ನು ಕೊಟ್ಟ ದಾತನು ಎಂದರೆ ಆ ಪರಮ ಪುರುಷ ನಮ್ಮನ್ನು ಜೀವನವೆಂಬ ಗಾಣದಲ್ಲಿ ಎಳ್ಳಿನ ಕಾಳುಗಳಂತೆ ಅರೆಯುತ್ತಾನೆ. ಯಾರಿಗೂ ಈ ಅರೆತದಿಂದ ವಿನಾಯತಿ ಇಲ್ಲ. ನಿಧಾನವಾಗಿ ಎಲ್ಲರನ್ನೂ ನೆನಪಿನಲ್ಲಿರಿಸಿಕೊಂಡು, ಯಾರನ್ನೂ ಉಪೇಕ್ಷಿಸದೆ, ಅವರ ಅವರ ಕರ್ಮಾನುಸಾರ ಎಂತೆಂತಹ ಪೆಟ್ಟುಗಳನ್ನು ಕೊಡಬೇಕೋ ಅವುಗಳನ್ನೆಲ್ಲ ನಿಶ್ಚಯವಾಗಿ ಕೊಡುತ್ತಾನೆ ಎಂಬುದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 358,
    english:
      '"Many a work in our daily schedule will not pan out the way we want it to. Some don\'t progress. Others may have have come to a full stop. Why does your heart get excited and boil? Who gave you the role of setting things right in this world? Are you the mason appointed by God to run this world?" - Mankutimma',
    kannada:
      "ಇದು ನಡೆಯಲಿಲ್ಲವದು ನಿಂತುಹೋಯಿತೆನುತ್ತ ।\nಎದೆಯುಬ್ಬೆಗವನೊಂದಿ ಕುದಿಯುತಿಹುದೇಕೋ? ॥\nಅಧಿಕಾರಪಟ್ಟವನು ನಿನಗಾರು ಕಟ್ಟಿಹರು? ।\nವಿಧಿಯ ಮೇಸ್ತ್ರಿಯೇ ನೀನು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೮ ॥",
    kannada_explanation:
      "ನೀನು ಕೆಲಸ ಕಾರ್ಯಗಳನ್ನು ಮಾಡುವಾಗ ಕೆಲವು ಕೆಲಸಗಳು ಅಂದುಕೊಂಡಹಾಗೆ ನಡೆಯಲಿಲ್ಲವೆಂದು ಅಥವಾ ಕೆಲವು ಕೆಲಸಗಳು ನಿಂತುಹೋಯಿತೆಂದು ಹೃದಯದೊಳಗೆ ಉದ್ವೇಗವನ್ನು ತುಂಬಿಕೊಂಡು ಮಾನಸಿಕ ಕುದಿತವೇಕೆ? ಹಾಗೆ ಕುದಿಯುವ ಅಧಿಕಾರವನ್ನು ನಿನಗೆ ಕೊಟ್ಟವರು ಯಾರು? ನೀನೇನು ವಿಧಿಯನ್ನು ನಿಯಂತ್ರಿಸುವ ಮೇಲ್ವಿಚಾರಕನೇನು? ಎಂದು ಮನುಷ್ಯರು ಪ್ರಾಕೃತ ಭಾವದಿಂದ ಪಡುವ ಅನುಭವವನ್ನು ವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 359,
    english:
      '"Even since the beginning of the creation, people are trying to straighten the crooked things in this nature. What is the result? If the stomach ache subsides, the arm starts hurting. It is like trying to fill a hole in earth by digging elsewhere." - Mankutimma',
    kannada:
      "ಸೊಟ್ಟುಗಳ ನೆಟ್ಟಗಾಗಿಪ ಯತ್ನ ಲೋಕದಲಿ ।\nಸೃಷ್ಟಿಯಾದಿಯಿನಾಗುತಿಹುದು; ಫಲವೇನು? ॥\nಹೊಟ್ಟೆ ನೋವಿಳಿಯುತಿರೆ ರಟ್ಟೆ ನೋವೆನ್ನುವುದು ।\nಮಟ್ಟಸವೆ ತಿರೆಹರಿವು? - ಮಂಕುತಿಮ್ಮ ॥ ೩೫೯ ॥",
    kannada_explanation:
      'ಸೊಟ್ಟುಗಳನ್ನು ನೆಟ್ಟಗೆ ಮಾಡುವ ಪ್ರಯತ್ನವು ಪ್ರಪಂಚದ ಆದಿಯಿಂದ ನಡೆದಿದೆ. ಅದರಿಂದ ಯಾವ ಪ್ರಯೋಜನವೂ ಇಲ್ಲ. ಏಕೆಂದರೆ ಹೊಟ್ಟೆ ನೋವೆಂದು ಔಷಧಿ ತೆಗೆದುಕೊಂಡರೆ ಮತ್ತೆ ಬುಜ ನೊವಾಗುತ್ತದೆ. "ಈ ಪ್ರಪಂಚದಲ್ಲಿ ಅಥವಾ ಭೂಮಿಯಲ್ಲಿ ಯಾವುದೂ ಸಮನಾಗಿಲ್ಲ ಅಲ್ಲವೇ" ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 360,
    english:
      '"Don\'t get restless by thinking about the future. Many things are not under your control. You will not know what fate has in store for you. His plan is something that you can not see. Placate your mind and be happy. (after putting your best efforts at any endeavor)" - Mankutimma',
    kannada:
      "ಇನ್ನೇನು ಮತ್ತೇನು ಗತಿಯೆಂದು ಬೆದರಿದರು ।\nನಿನ್ನ ಕೈಯೊಳಗಿಹುದೆ ವಿಧಿಯ ಲೆಕ್ಕಣಿಕೆ? ॥\nಕಣ್ಣಿಗೆಟುಕದೆ ಸಾಗುತಿಹುದು ದೈವದ ಸಂಚು ।\nತಣ್ಣಾಗಿರಿಸಾತ್ಮವನು - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೦ ॥",
    kannada_explanation:
      "ನೀ ನಿನ್ನ ಪರಿಸ್ಥಿತಿಗೆ ಹೆದರಿ ‘ಅಯ್ಯೋ ಇನ್ನೇನು ಗತಿ’ಎಂದು ಕೊರಗದಿರು, ಏಕೆಂದರೆ ನಿನ್ನ ಹಣೆಬರಹವನ್ನು ಬರೆಯುವ ಲೇಖನಿ(pen) ನಿನ್ನ ಕೈಯಲ್ಲಿ ಇಲ್ಲ. ಅದು ವಿಧಿಯ ಕೈಯಲ್ಲಿ ಇದೆ. ಆ ದೈವ, ವಿಧಿಯ ಮೂಲಕ ನಡೆಸುವ ನಮ್ಮ ಜೀವನದ ಪಾತ್ರವನ್ನು ಬಹಳ ಉಪಾಯವಾಗಿ, ನಮಗೆ ಅರ್ಥವಾಗದ ರೀತಿಯಲ್ಲಿ ಬರೆಸಿ,ನಡೆಸುತ್ತದೆ. ಆದ್ದರಿಂದ’ನಿನ್ನ ಆತ್ಮವನ್ನು ತಣ್ಣಗಿರಿಸಿಕೋ’ಎಂದು ಅದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 361,
    english:
      '"Some where in Providence\'s secret workshop there are machines and fixtures that work non-stop. All day-to-day activities are paced by that machines. Why are you becoming restless?" - Mankutimma',
    kannada:
      "ಎಲ್ಲಿಯೋ ವಿಧಿಯ ಗೂಢದ ಕರ್ಮಶಾಲೆಯಲಿ ।\nನಿಲ್ಲದಾಡುತ್ತಿಹುದು ಯಂತ್ರ ಕೀಲುಗಳು ॥\nಎಲ್ಲಾಗುಹೋಗುಗಳುಮಾ ಚಕ್ರಗತಿಯಂತೆ ।\nತಲ್ಲಣವು ನಿನಗೇಕೆ? – ಮಂಕುತಿಮ್ಮ ॥ ೩೬೧ ॥",
    kannada_explanation:
      "ಬಹಳ ಗುಪ್ತವಾಗಿ ನಡೆಯುವ ವಿಧಿಯ ಕಾರ್ಯಾಂಗದಲ್ಲಿ ಜಗತ್ತಿನ ಎಲ್ಲ ಜೀವಿಗಳ ಆಗುಹೋಗುಗಳ ನಿರ್ಣಯಿಸುವ ಚಕ್ರವು ನಿರಂತರವಾಗಿ ತಿರುಗುತ್ತಿರುತ್ತದೆ. ಅದು ಗೂಡತೆಯಿಂದ ನಡೆಯುತ್ತಿದೆ ಮತ್ತು ಅದು ನಿನಗೆ ಅರ್ಥವಾಗದ ವಿಷಯವಾದದ್ದರಿಂದ,ನೀ ಏಕೆ ತಲ್ಲಣ ಪಡುತ್ತೀಯೆ? ಎಂದು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 362,
    english:
      '"In this river of time, our boat of life is sailing well. We are very happy. We know no fear. But a gust of wind from somewhere can wipe us off and topple us any time. Everything that was held high will have to lay low then." - Mankutimma',
    kannada:
      "ಕಾಲನದಿಯಲಿ ನಮ್ಮ ಬಾಳದೋಣಿಯು ಮೆರೆದು ।\nತೇಲುತ್ತ ಭಯವ ಕಾಣದೆ ಸಾಗುತಿರಲು ॥\nಗಾಳಿಯಾವಗಮೊ ಬಂದೆತ್ತಣಿನೊ ಬೀಸುತ್ತ ।\nಮೇಲ ಕೀಳಾಗಿಪುದು - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೨ ॥",
    kannada_explanation:
      "ಅವ್ಯಾಹತವಾಗಿ ಹರಿಯುವ ‘ಕಾಲ’ವೆಂಬ ನದಿಯಲ್ಲಿ ನಾವು ನಮ್ಮ ‘ ಬಾಳು’ ಎಂಬ ದೋಣಿಯಲ್ಲಿ ಕುಳಿತು ಭಯವಿಲ್ಲದೆ, ಮೆರೆಯುತ್ತಾ ಸಾಗುತ್ತಿರಲು, ಎಲ್ಲಿಂದಲೋ ಒಂದು ಬಿರುಗಾಳಿ ಬೀಸದಂತೆ ಆಗಿ, ಕಷ್ಟಗಳ ಸಂಕೋಲೆಗಳಲ್ಲಿ ಸಿಲುಕಿ ನಮ್ಮ ಬಾಳ ದೋಣಿ ತಲೆಕೆಳಗಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಕಗ್ಗದಲ್ಲಿ.",
  },
  {
    number: 363,
    english:
      '"There is no anxiety (or urgency) in the running of the Providence machine. No fear. No lapse (or forgetting) ever. It will achieve and outlast everything without fail, without letting off. Why do you get restless?" - Mankutimma',
    kannada:
      "ಆತುರತೆಯೇನಿರದು ವಿಧಿಯಯಂತ್ರಚಲನೆಯಲಿ ।\nಭೀತತೆಯುಮಿರದು, ವಿಸ್ಮೃತಿಯುಮಿರದೆಂದುಂ ॥\nಸಾಧಿಪುದದೆಲ್ಲವನು ನಿಲದೆ, ತಪ್ಪದೆ, ಬಿಡದೆ ।\nಕಾತರತೆ ನಿನಗೇಕೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೩ ॥",
    kannada_explanation:
      "ವಿಧಿಯ ಚಕ್ರದ ಚಲನೆಯಲಿ ಆತುರವಿರದು.ಭೀತತೆಯು ಇರದು ಮತ್ತು ವಿಧಿ ಯಾವುದನ್ನೂ ಮರೆಯದೆ ತಾನು ಸಾಧಿಸಬೇಕಾದದ್ದನ್ನೆಲ್ಲ ಬಿಡದೆ ,ತಪ್ಪದೆ ಸಾಧಿಸಿಯೇ ತೀರುತ್ತದೆ. ಹಾಗಾಗಿ ಏನಾಗುವುದೋ ಎಂತಾಗುವುದೋ ಎಂಬ ಕಾತರತೆ ನಿನಗೆ ಬೇಡ ಎಂದು ಒಂದು ಕಿವಿಮಾತನ್ನು ಆದೇಶದ ರೂಪದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ ಹೇಳಿದ್ದಾರೆ.",
  },
  {
    number: 364,
    english:
      '"Every once in a while, Providence acts as if it is compassionate with us. Just like a tyrant throws grains at the bird (not with the intent to feed, but to capture it). His gifts is like milk that touch (and warms) the lips but does not reach the toungue. The favours showered on you by Creation is a mere illusion." - Mankutimma',
    kannada:
      "ನಟಿಪುದೊಮ್ಮೊಮ್ಮೆ ಮರುಕವ ದೈವ ಮನುಜರಲಿ ।\nಕಟುಕನಿನಿಸಕ್ಕಿಯನು ಹಕ್ಕಿಗೆರೆಚುವವೋಲ್ ॥\nತುಟಿ ಸುಟ್ಟು ರಸನೆಗೆಟುಕದ ಕೀರು ದೈವಕೃಪೆ ।\nತಟವಟವೊ ಸೃಷ್ಟಿದಯೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೪ ॥",
    kannada_explanation:
      'ಹಕ್ಕಿಗಳ ಕತ್ತರಿಸುವ ಮುನ್ನ ಅವುಗಳಿಗೆ ತೋರಿಕೆಯ ಕರುಣೆಯಿಂದ ಅಕ್ಕಿಯನು ಎರಚುವ ಕಟುಕನ ರೀತಿ ಅಥವಾ ರುಚಿಯಾದ ಬಿಸಿ ಹಾಲನ್ನೋ ಅಥವಾ ಪಾಯಸವನ್ನೋ ನಮ್ಮ ಮುಂದಿಟ್ಟು,ನಾವದನ್ನು ಆಸೆಯಿಂದ ಹೀರಲು ಹೋಗಿ ತುಟಿ ಸುಟ್ಟುಕೊಂಡು "ಇನ್ನು ಪಾಯಸವೇ ಬೇಡ" ಎನ್ನುವಂತೆ ಮಾಡುವ, ಮೋಸದ ಅಥವಾ ಕಪಟದ ಕರುಣೆಯೇ ಆ ದೈವ ಕೃಪೆಯೋ? ಎನ್ನುತ್ತಾರೆ ನಮ್ಮ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ. ',
  },
  {
    number: 365,
    english:
      '"Why are you so hardlined branding some things as good and some as bad? Fate has put a veil on everything so that you will never know the true form of anything. A bowl of poison may bear the smell of elixir. Such are the ways of illusion created by Creation." - Mankutimma',
    kannada:
      "ಅದು ಒಳಿತು ಇದು ಕೆಟ್ಟುದೆಂಬ ಹಟ ನಿನಗೇಕೆ? ।\nಹೊದಿಸುವುದು ದೈವವೆಲ್ಲಕಮೊಂದು ತೆರೆಯ ॥\nಸೊದೆಯ ಸೌರಭ ನಂಜುಬಟ್ಟಲಲಿ ತೋರೀತು ।\nವಿಧಿಯ ಬಗೆಯೆಂತಿಹುದೋ! - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೫ ॥",
    kannada_explanation:
      "ಒಂದು ಒಳ್ಳೆಯದು ಅಥವಾ ಇನ್ನೊಂದು ಕೆಟ್ಟದೆಂದು ವ್ಯಾಖ್ಯಾನ ಮಾಡುವ ಹಠ ನಿನಗೆ ಏಕೆ? ಎಂದು ಅಧಿಕಾರಯುಕ್ತವಾಗಿ ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಾ, ಆ ದೈವವು ಎಲ್ಲದರ ನಿಜಸ್ವರೂಪವನ್ನೂ ಒಂದು ತೆರೆಯ ಹಿಂದೆ ಅಡಗಿಸಿಟ್ಟಿದೆ. ಆ ವಿಧಿಯ ಕಾರ್ಯ ವೈಖರಿಯ ವಿಧಾನ ಹಲವು ಬಗೆಯಾದದ್ದು, ಏಕೆಂದರೆ ನಮಗೆ ಹಲವು ಬಾರಿ ವಿಷದ ಬಟ್ಟಲಲ್ಲಿ ಅಮೃತದ ಸುವಾಸನೆ ಅಥವಾ ಸುಗಂಧ ಸಿಗಬಹುದು ಎಂದು ನಮಗೆ ವಸ್ತು ವಿಷಯ ಅಥವಾ ವ್ಯಕ್ತಿಗಳ ನಿಜ ಸ್ವರೂಪವನ್ನು ಅರಿಯುವ ಬಗೆಯನ್ನು ವಿಶದ ಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 366,
    english:
      '"Can the astrologer change your fate by fudging your horoscope? The movement of the planets follow a definite rule (independant of the astrologer). (If you believe that the planets have an effect on you, then) there is no escaping from effects the of fate in your life. One has to endure it. While doing so, patience is like a diamond (impregnable) armour." - Mankutimma',
    kannada:
      "ಗ್ರಹಗತಿಯ ತಿದ್ದುವನೆ ಜೋಯಿಸನು ಜಾತಕದಿ? ।\nವಿಹಿತವಾಗಿಹುದದರ ಗತಿ ಸೃಷ್ಟಿ ವಿಧಿಯಿಂ ॥\nಸಹಿಸಿದಲ್ಲದೆ ಮುಗಿಯದಾವ ದಶೆ ಬಂದೊಡಂ ।\nಸಹನೆ ವಜ್ರದ ಕವಚ - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೬ ॥",
    kannada_explanation:
      "ಜ್ಯೋತಿಷ್ಕನ ಬಳಿ ಹೋಗಿ ನಿನ್ನ ಜಾತಕವ ತೋರಿಸಿದರೆ,ಅವನಿಗೆ ನಿನ್ನ ಗ್ರಹ ಗತಿಯನ್ನು ತಿದ್ದಲು ಸಾಧ್ಯವೇ? ಇಲ್ಲ,ಏಕೆಂದರೆ ನೀ ಈ ಜಗತ್ತಿಗೆ ಬಂದಾಗಲೇ ನಿನ್ನ ಗ್ರಹಗತಿಯನ್ನು ವಿಧಿ ನಿರ್ಧರಿಸಿಬಿಟ್ಟಿದೆ. ಹಾಗಾಗಿ ಯಾವ ದೆಶೆಯಾದರೂ, ಬಂದದ್ದನ್ನು ಅನುಭವಿಸಿಯೇ ತೀರಬೇಕು. ಹಾಗೆ ಅನುಭವಿಸುವಾಗ ಬರುವ ನೋವು ಸಂಕಷ್ಟಗಳನ್ನು ಸಹಿಸಲು ನಿನಗೆ ಬೇಕಾದದ್ದು ‘ಸಹನೆ’ ಎಂಬ ‘ವಜ್ರದ ಕವಚ’ ಎಂದು ಜನರ ಭವಿಷ್ಯವನ್ನು ",
  },
  {
    number: 367,
    english:
      '"There is one good news for the earthlings. There is one way not to be sad in this world. When one is sad, look at people who are more sad. When you are living in hell, look at people living in worse hell. Their plights will make one feel fortunate about his own state of living." - Mankutimma',
    kannada:
      "ಧಾರಿಣಿಯ ವಾಸಿಗಳ್ಗಿಹುದೊಂದು ಹಿತವಾರ್ತೆ ।\nಆರಯ್ವುದಾರ್ತರ್ ಅತ್ಯಾರರಾಪದವ ॥\nರೌರವಿಗೆ ಹಿತ ಮಹಾರೌರವಿಯ ಗೋಳುದನಿ ।\nನಾರಕದೊಳುದುಪಾಯ - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೭ ॥",
    kannada_explanation:
      'ಈ ಜಗತ್ತಿನಲ್ಲಿರುವವರಿಗೆ ಒಂದು ಒಳ್ಳೆಯ ಉಪಾಯವಿದೆ. ಅತಿಯಾಗಿ ಕಷ್ಟಗಳನ್ನು ಅನುಭವಿಸುವವರ ಕಷ್ಟಗಳನ್ನು ಅವರಿಗಿಂತ ಕಡಿಮೆ ಕಷ್ಟಗಳನ್ನು ಅನುಭವಿಸುವವರು ವಿಚಾರ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಮಾಡಿದರೆ ‘ನಮಗಿಂತ ಹೆಚ್ಚು ಕಷ್ಟ ಅಥವಾ ಹಿಂಸೆ ಅನುಭವಿಸುವವರಿಗಿಂತ ನಾವು ಉತ್ತಮ’ ಎಂದು ನಾವು ಅಂದುಕೊಳ್ಳಬಹುದು. "ಮಹಾನರಕ ಯಾತನೆ ಅನುಭವಿಸುವವನಿಗಿಂತ ನನ್ನ ಯಾತನೆ ಕಡಿಮೆಯಾದದ್ದು" ಎಂದು ನಮಗಿಂತ ಹೆಚ್ಚು ಕಷ್ಟ ಮತ್ತು ಹಿಂಸೆ ಅನುಭವಿಸುವವರನ್ನು ನೋಡಿ ಸಮಾದಾನ ಪಟ್ಟುಕೊಳ್ಳುವುದೇ ಉಪಾಯ ಎಂದು ಬಂದ ಕಷ್ಟಗಳನ್ನು’ಲಲಿತ\'(light) ವಾಗಿ ಹೇಗೆ ಭಾವಿಸಬಹುದೆಂಬ ಸೂಚನೆಯ ರೀತಿಯಲ್ಲಿದೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಆಂತರ್ಯ.',
  },
  {
    number: 368,
    english:
      '"The world is run by three crore Gods (as per popular theology). Then why is man wandering aimlessly? Is it surprising? When the lords themselves don\'t have unity, then how can the followers escape such a fate?" - Mankutimma',
    kannada:
      "ಮುಕ್ಕೋಟಿ ದೇವತೆಗಳಾಳುತಿಹ ಲೋಕದಲಿ ।\nದಿಕ್ಕುಕಾಣದೆ ಜೀವಿಯಲೆಯುವುದಚ್ಚರಿಯೇಂ? ॥\nಒಕ್ಕಟನೊಡೆಯರೇ ಕಲಿಯದಿರೆ ನಮ್ಮ ಗತಿ- ।\nಗಿಕ್ಕಟ್ಟು ತಪ್ಪುವುದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೬೮ ॥",
    kannada_explanation:
      'ಜಗತ್ತೆಲ್ಲ ‘ ದೇವರನ್ನು ನಂಬು, ನಂಬಿ ಕೆಟ್ಟವರಿಲ್ಲವೋ, ದೇವರು ನಂಬಿದವರ ಕೈಬಿಡನು’ ಎಂದೆಲ್ಲಾ ಹೇಳುತ್ತದೆ. "ಆದರೆ ತೀರ ಕಷ್ಟದಲ್ಲಿ ಇದ್ದು ಕಣ್ನೀರಿಡುವ ಜನರೇಕೆ ದೇವರನ್ನು ನಂಬುವುದಿಲ್ಲ. ಆಸೆಯನ್ನು ಬಿಟ್ಟವನಿಗೆ ನಂಬಿಕೆಯ ಹಂಗು ಏಕೆ? ನೀನೂ ಸಹ ಈ ನಂಬಿಕೆಯ ವೃತ್ತದಿಂದ ಹೊರಬರಬೇಕಾದರೆ ನಿನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ವಿರಕ್ತಿಯನ್ನು ತುಂಬಿಕ"’ಎಂದು ಆದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 369,
    english:
      '"Why can the thoughts of man and God be alike? If God can control everything, why does he not make my mind tune to what he wants? My mind wants one thing. Fate give me another. What is the remedy for this treachery." - Mankutimma',
    kannada:
      "ಏಕವಾಗವೆ ದೈವಚಿತ್ತನರಚಿತ್ತಗಳು? ।\nಏಕೆನ್ನ ಮನವನಾಳನು ಲೋಕದೊಡೆಯಂ? ॥\nಬೇಕೆನಿಪುದೊಂದೆನಗೆ, ವಿಧಿ ಗೆಯ್ವದಿನ್ನೊಂದು ।\nಈ ಕುಟಿಲಕೇಂ ಮದ್ದು ?- ಮಂಕುತಿಮ್ಮ ॥ ೩೬೯ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಮನದ ಆಸೆ ಮತ್ತು ಆ ದೈವದ ಆಸೆ ಒಂದಾಗುವುದಿಲ್ಲವೇ? ನಮ್ಮ ಮನಸ್ಸನ್ನು ತಾನೇ ಏಕೆ ಆಳಲೊಲ್ಲ ಆ ಪರಮಾತ್ಮ? ನಮಗೆ ಒಂದು ಬೇಕೆನಿಸಿದರೆ ಅವನು ಕೊಡುವುದೇ ಬೇರೆ!! ಈ ವಿಪರ್ಯಾಸಕ್ಕೆ ಮದ್ದು ಯಾವುದಾದರೂ ಉಂಟೆ ಎಂದು ವಿಧಿಯಾಟದ ವಿಶ್ಲೇಷಣೆ ಮಾಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 370,
    english:
      '"When it rains during Swati period (star), the oyster rises to the surface and opens its mouth to get a drop of fresh water. (Popular belief says that such drops of pure water become pearls) Lot of factors have to come together in time to bear such a beautiful fruit (pearl). So are the birth of love, happiness, truth, realization and peace in our life." - Mankutimma',
    kannada:
      "ಸ್ವಾತಿ ಮಳೆಹನಿ ಬೀಳ್ವ, ಶುಕ್ತಿ ಬಾಯ್ದೆರೆದೇಳ್ವ ।\nಕೌತುಕದ ಸಮಯಯೋಗದೆ ಮೌಕ್ತಿಕ ಫಲ ॥\nಪ್ರೀತಿ ಸುಖ ಸತ್ಯದರ್ಶನ ಶಾಂತಿಗಳ ಹುಟ್ಟುಮ್ ।\nಆ ತೆರೆದ ಯೋಗದಿನೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೦ ॥",
    kannada_explanation:
      "ಸ್ವಾತಿ ನಕ್ಷತ್ರದ ದಿನ ಬೀಳುವ ಮಳೆ ಬೀಳುವಾಗ, ಸಮುದ್ರದಲ್ಲಿನ ಚಿಪ್ಪು ಬಾಯ ತೆರೆದು, ಒಂದು ಮಳೆ ಹನಿಗೆ ಕಾಯುತ್ತದಂತೆ. ಹಾಗೆ ಅದರೊಳಗೆ ಬಿದ್ದ ಸ್ವಾತಿಮಳೆಯ ಒಂದು ಹನಿ ಆ ಚಿಪ್ಪಿನ ಗರ್ಭದಲ್ಲಿ ಹೊಕ್ಕಾಗ ‘ಮುತ್ತು’ ಆಗುತ್ತದಂತೆ. ಇದು ಒಂದು ಸು-ಸಂಯೋಗ. ಆ ರೀತಿಯ ಯೋಗದಿಂದಲೇ ಪ್ರೀತಿ, ಸುಖ, ಶಾಂತಿ ಮತ್ತು ಸತ್ಯದ ದರ್ಶನವಾಗುತ್ತದೆ, ಎಂದು ಯೋಗ ಮತ್ತು ಸಂಯೋಗಗಳ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತದಲ್ಲಿ.",
  },
  {
    number: 371,
    english:
      "\"I want this. I want that. I want something else. Why did the creator make this pot that always shouts 'want, want, want'? When will this chanting of 'want' turn to 'enough'?\" - Mankutimma",
    kannada:
      "ಬೇಕು ಬೇಕದು ಬೇಕು ಬೇಕಿದೆನಗಿನ್ನೊಂದು ।\nಬೇಕೆನುತ ಬೊಬ್ಬಿಡುತಲಿಹ ಘಟವನಿದನು ॥\nಏಕೆಂದು ರಚಿಸಿದನೊ ಬೊಮ್ಮನೀ ಬೇಕು ಜಪ ।\nಸಾಕೆನಿಪುದೆಂದಿಗಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೧ ॥",
    kannada_explanation:
      "ಅದು ಬೇಕು, ಇದು ಬೇಕು, ಮತ್ತೊಂದು ಬೇಕು ಎಂದು ಸದಾಕಾಲ ಪರದಾದುವಂತಾ ಈ ದೇಹವೆಂಬ ಮಡಕೆಯನ್ನು ಏಕೆ ಸೃಷ್ಟಿಸಿದನೋ ಆ ಪರಮಾತ್ಮ? ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ ಈ ‘ ಬೇಕು’ ಗಳ ಜಪ ಎಂದಿಗೆ ಕೊನೆಯಾಗುತ್ತದೋ ಎಂದು ಜಗತ್ತಿನ ಮನುಷ್ಯರ ಬದುಕಿನಲ್ಲಿ ಆಸೆಗಳ ಪರಿಯನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 372,
    english:
      '"If one leaves this society and retreats to a forest, where there are no people to disturb him - and sits in silence and meditates, will he be at peace? In his memories he still carries all the experiences of the past. The beautiful sights, the tasty food, the anger, the jelousy - all these feelings will still continue to haunt and trouble him." - Mankutimma',
    kannada:
      "ವನದಿ ನಿರ್ಜನದಿ ಮೌನದಿ ತಪವನೆಸಗುವನ ।\nನೆನಪಿನಲಿ ಪಿಂತಿನನುಭವವುಳಿಯದೇನು? ॥\nಇವಿನೋಟ ಸವಿಯೂಟ ಕಿನಿಸು ಕರುಬುಗಳಾಟ ।\nಕನಲುತಿಹುವಾಳದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೨ ॥",
    kannada_explanation:
      "ನಿರ್ಜನವಾದ ಕಾಡಿನಲ್ಲಿ ಮೌನವಾಗಿ ತಪಸ್ಸನ್ನು ಮಾಡುವವನ ನೆನಪಿನಲ್ಲಿ, ಅವನ ಜೀವನದ ಹಳೆಯ ನೆನಪುಗಳು ಇರುವುದಿಲ್ಲವೇನು? ಆ ನೆನಪಿನಲ್ಲಿ ಅವನು ಅನುಭವಿಸಿದ ಸುಖ, ಕೋಪ, ದ್ವೇಷ ನೋವು ಸಂಕಟಗಳ ಹಳೆಯ ಅನುಭವಗಳು ಮನಸಿನಂತರಾಳದಲಿ ಇದ್ದೇ ಇರುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 373,
    english:
      '"Will abandoning one\'s home help? Will retreating to forest help? Will subjecting the body to strict austerity help? Will wandering from village to village in search of happiness help? Wherever you go, whatever you do - your mind is following you will all its baggage and will not let you in peace. Is there a way one can live by leaving his mind behind?" - Mankutimma',
    kannada:
      "ಮನೆಯ ತೊರೆದೋಡಲೇಂ? ವನಗುಹೆಯ ಸಾರಲೇಂ? ।\nತನುವನುಗ್ರವ್ರತಗಳಿಂದೆ ದಂಡಿಸಲೇಂ? ॥\nಬಿನದಗಳನರಸಿ ನೀನೂರೂರೊಳಲೆದೊಡೇಂ? ।\nಮನವ ತೊರೆದಿರಲಹುದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೩ ॥",
    kannada_explanation:
      "‘ಮನೆಯ ತೊರೆದು ಹೋದರೇನು ಅಥವಾ ತಪಸ್ಸಿಗೆಂದು ಕಾಡಿನ ಗುಹೆಗಳಲ್ಲಿ ಸೇರಿದರೇನು ಅಥವಾ ಹಠಯೋಗ ಮುಂತಾದ ಕಠಿಣ ವ್ರತಗಳಿಂದ ದೇಹವನ್ನು ದಂಡಿಸಿದರೇನು ಅಥವಾ ಸುಖವನ್ನು ಹುಡುಕುತ್ತಾ ಒಂದು ಊರಿಂದ ಬೇರೆ ಬೇರೆ ಊರಿಗೆ ಹೋದರೇನು, ನಮ್ಮ ಮನಸ್ಸನ್ನು ತೊರೆಯಲಾಗುವುದೇ?’ ಎಂದು ನಮ್ಮ ಮತ್ತು ಮನಸ್ಸಿನ ಅವಿನಾಭಾವ ಸಂಬಂಧವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 374,
    english:
      "\"The fragrance of this world are inciting various kinds of hunger in our minds. Will the mind keep quiet if we deny it the food to satisfy the hunger? Trying to find inner peace by denying innate needs of a body is called 'haTayOga'. Instead of that, 'rAjayOga' - of being aware of the needs as well as the body's limiations is better.\" - Mankutimma",
    kannada:
      "ಈ ಜಗದ ಗಂಧ ಪರಿಪರಿ ಹಸಿವ ಕೆಣಕುತಿರೆ ।\nಭೋಜನವ ನೀಡನೆನೆ ಮನ ಸುಮ್ಮನಿಹುದೆ? ॥\nಸಾಜಗಳ ಕೊಲ್ಲೆನುವ ಹಠಯೋಗಕಿಂತ ಸರಿ ।\nರಾಜಯೋಗದುಪಾಯ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೆಳೆತಗಳು ನಿನ್ನ ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಹಸಿವೆಗಳನ್ನು ಕೆಣಕುತ್ತಾ ಇರುವಾಗ, ಅವುಗಳ ತಣಿಸದೆ ನೀವು ಅವುಗಳಿಗೆ ಆಹಾರ ಕೊಡಲು ನಿರಾಕರಿಸಿದರೆ, ನಿನ್ನ ಮನಸು ಸುಮ್ಮನಾದೀತೆ? ಸಹಜವಾದ ಆಸೆ ಆಕಾಂಕ್ಷೆಗಳ ತುಳಿದು ಹಠ ಯೋಗವನ್ನು ಸಾಧಿಸುವುದಕ್ಕಿಂತ ಇತಿ ಮಿತಿಯ ರಾಜಯೋಗವೇ ಒಳಿತು ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 375,
    english:
      '"The way to rule the mind is similar to dealing with a cranky kid. One must feed sweet in small quantities by telling them interesting tales. A kid will not keep quiet by us yelling at it or spanking. It has to be consoled by giving it a little and making it forget the rest." - Mankutimma',
    kannada:
      "ಮನವನಾಳ್ವುದು ಹಟದ ಮಗುವನಾಳುವ ನಯದೆ ।\nಇನಿತಿನಿತು ಸವಿಯುಣಿಸುಸವಿಕಥೆಗಳಿಂದೆ ॥\nಅನುಕೂಲಿಸದು ಬರಿಯ ಕೂಗು ಬಡಿತಗಳಿನದು ।\nಇನಿತಿತ್ತು ಮರಸಿನಿತ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೫ ॥",
    kannada_explanation:
      "ಕೇವಲ ಕೂಗಾಟ ಬಡಿದಾಟಗಳಿಂದ ಅಲ್ಲದೆ, ಕೆಲವನ್ನು ಕೊಟ್ಟು ಮತ್ತೆ ಕೆಲವನ್ನು ಮರೆಸಿ, ಸ್ವಲ್ಪ ಸವಿಯಾದ ತಿನಿಸು ಮತ್ತು ಸೊಗಸಾದ ಕಥೆಗಳನ್ನು ಹೇಳಿ ಹಠಮಾಡುವ ಮಗುವನ್ನು ನಯ ವಿನಯದಿಂದ ಲಾಲಿಸಿ ಪಾಲಿಸುವಂತೆ, ಹಠಮಾರಿ ಮನಸ್ಸನ್ನೂ ಸಹ ಪಾಲಿಸಬೇಕು ಎನ್ನುವುದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 376,
    english:
      '"When your mind gets restless, you should try to find a way to placate it - like this, like that or some how. You may empathise with it once or punish it some other time. You should treat your mind like a kid and correct it without hurting it." - Mankutimma',
    kannada:
      "ಅಂತಾನುಮಿಂತಾನುಮೆಂತೊ ನಿನಗಾದಂತೆ ।\nಶಾಂತೆಯನೆ ನೀನರಸು ಮನ ಕೆರಳಿದಂದು ॥\nಸಂತವಿಡುತೊಮ್ಮೆ ಶಿಕ್ಷಿಸುತೊಮ್ಮೆ ಶಿಶುವೆಂದು ।\nಸ್ವಾಂತಮಂ ತಿದ್ದುತಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೬ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಮನಸ್ಸು ಕೆರಳಿದಾಗ, ಹಾಗಾದರೂ ಸರಿ, ಹೀಗಾದರೂ ಸರಿ, ಹೇಗಾದರೂ ಸರಿ ನಿನಗೆ ಆದಂತೆ, ಆ ಮನಸ್ಸನ್ನು ಶಾಂತಗೊಳಿಸಲು ಪ್ರಯತ್ನಿಸು. ಹಠ ಮಾಡುವ ಮಗುವನ್ನು ಹಲವುಬಾರಿ ಸಮಾದಾನದಿಂದ ಮತ್ತೆ ಕೆಲಬಾರಿ ಶಿಕ್ಷೆಯಿಂದ ಶಾಂತಗೊಳಿಸುವಂತೆ, ನಿನ್ನ ಮನಸ್ಸನ್ನೂ ತಿದ್ದುತ್ತ ಇರು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 377,
    english:
      '"Stomach is the first God that we should try to worship. All other Gods will come after that and only because of that. If you worship it too much, it will become powerful and control you. If you let it suffer in hunger, it will get angry. How does one maintian balance?" - Mankutimma',
    kannada:
      "ಉದರ ದೈವಕೆ ಜಗದೊಳೆದುರು ದೈವವದೆಲ್ಲಿ? ।\nಮೊದಲದರ ಪೂಜೆ; ಮಿಕ್ಕೆಲ್ಲವದರಿಂದ ॥\nಮದಿಸುವುದದಾದರಿಸೆ, ಕುದಿವುದು ನಿರಾಕರಿಸೆ ।\nಹದದೊಳಿರಿಸುವುದೆಂತೋ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೭ ॥",
    kannada_explanation:
      "ಹೊಟ್ಟೆಯೊಳಗಿನ ದೈವದ ಪೂಜೆ ಮೊದಲು ಆದಮೇಲೆ ಮಿಕ್ಕೆಲ್ಲ ದೇವರುಗಳ ಪೋಜೆಯಾಗುತ್ತದೆ. ಏಕೆಂದರೆ ಆ ಹೊಟ್ಟೆಯೊಳಗಿನ ದೈವಕ್ಕಿಂತ ಮಿಗಿಲಾದ ದೈವವು ಯಾವುದೂ ಇಲ್ಲ. ಅದಕ್ಕೆ ಕೊಡಬೇಕಾದ್ದನ್ನು ಕೊಟ್ಟರೆ ಅದು ಶಾಂತವಾಗಿರುತ್ತದೆ, ಇಲ್ಲದಿದ್ದರೆ ಕೋಪಗೊಳ್ಳುತ್ತದೆ. ಅದನ್ನು ಸಮವಾಗಿರಿಸುವುದು ಹೇಗೋ ಎಂದು ಉದರ ಪೂಜೆಯ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 378,
    english:
      '"If you heat it more, it will get a smoky smell. If you heat it less, then it will still retain the raw smell. if you shake it more, it will get spoilt. The balance with which you should treat milk is very delicate. So is the nature of our mind. Pay careful attention to it. Life is a bliss when the mind is balanced." - Mankutimma',
    kannada:
      "ಕುದಿ ಹೆಚ್ಚೆ ವೆಗಟಹುದು; ಕಡಿಮೆಯಿರೆ ಹಸಿನಾತ ।\nಕದಡಲೊಡೆವುದು ಹಾಲು; ಸೂಕ್ಷ್ಮವದರ ಹದ ॥\nಅದರವೊಲೆ ಮನದ ಹದ, ಅದನೆಚ್ಚರದಿ ನೋಡು ।\nಬದುಕು ಸೊಗ ಹದದಿಂದ - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೮ ॥",
    kannada_explanation:
      "ಹಾಲನ್ನು ಕಾಯಿಸುವಾಗ ಹದವಾಗಿ ಕಾಸಿದರೆ ಅದು ಚೆನ್ನಾಗಿ ಕಾದು, ಕೆನೆಕಟ್ಟಿ, ಕುಡಿಯಲು ರುಚಿಯಾಗಿರುತ್ತದೆ. ಅದನ್ನು ಹೆಚ್ಚಾಗಿ ಕಾಯಿಸಿದರೆ ಅಡಿಕಟ್ಟಿ ಸೀದ ವಾಸನೆ ಬರುತ್ತದೆ. ಅಲ್ಲದೆ ಕಡಿಮೆಯಾಗಿ ಕಾಯಿಸಿದರೆ, ಸರಿಯಾಗಿ ಕಾಯದೆ ಹಸಿ ವಾಸನೆ ಬಂದು ಕುಡಿಯಲು ಯೋಗ್ಯವಾಗಿರುವುದಿಲ್ಲ. ಹಾಗಾಗಿ ಹಾಲನ್ನು ಹದವಾಗಿ ಕಾಯಿಸಬೇಕು. ಅದರಂತೆಯೇ ಮನಸ್ಸನ್ನೂ ಎಚ್ಚರದಿಂದ ಹದವಾಗಿಟ್ಟುಕೊಂಡು ಬಾಳನ್ನು ಬಾಳಬೇಕು ಎಂದು ಆದೇಶಿಸುತ್ತಾರೆ, ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 379,
    english:
      '"Desire that knows no satisfaction is similar to the food that does not get digested. It rots inside and turns into poison. They intoxicate people\'s mind and create restlessness. How do we lay these desires to rest? " - Mankutimma',
    kannada:
      "ತೃಪ್ತಿಯರಿಯದ ವಾಂಛೆ, ಜೀರ್ಣಿಸದ ಭುಕ್ತಿವೊಲು ।\nಗುಪ್ತದಲಿ ಕೊಳೆಯುತ್ತೆ ವಿಷಬೀಜವಾಗಿ ॥\nಪ್ರಾಪ್ತಿಗೊಳಿಪುದು ಜೀವಕುನ್ಮಾದತಾಪಗಳ ।\nಸುಪ್ತವಹುದೆಂತಿಚ್ಛೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೭೯ ॥",
    kannada_explanation:
      'ತೃಪ್ತವಾಗದ ಬಯಕೆಗಳು, ಜೀರ್ಣವಾಗದ ಆಹಾರದಂತೆ, ಒಳಗೊಳಗೇ ಕೊಳೆತು ವಿಷವಾಗಿಬಿಡುತ್ತದೆ. ಆ ರೀತಿಯ ಬಯಕೆಗಳು ಜೀವವನ್ನು ಉನ್ಮಾದ ಮತ್ತು ಉದ್ರೇಕಗೊಳಿಸುತ್ತವೆ. "ಈ ರೀತಿಯ ಬಯಕೆಗಳು ಶಾಂತವಾಗಿ ಮೇಲೇಳದಂತೆ ಇರುವುದು ಎಂದೋ?" ಎಂದು ಮಾನವನ ಆಸೆಗಳ ಬಗ್ಗೆ ಒಂದು ಸುಂದರ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 380,
    english:
      '"A tiger will provoke another tiger. A monkey will provoke anohter monkey. Can anyone find a man who does not have a tiger and a monkey inside him? An intelligent person will let the sleeping animals inside him lie. Don\'t try to shake the tail." - Mankutimma',
    kannada:
      "ಹುಲಿಯ ಕೆಣುಕುವುದು ಹುಲಿ; ಕಪಿಯನಣಕಿಪುದು ಕಪಿ ।\nಹುಲಿಕಪಿಗಳವಿತಿರದ ನರಜಂತುವೆಲ್ಲಿ? ॥\nಮಲಗಿರುವ ಮೃಗವನಂತಿರಲು ಬಿಡುವುದೆ ಜಾಣು ।\nಕುಲಕದಿರು ಬಾಲವನು - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೦ ॥",
    kannada_explanation:
      'ಒಂದು ಹುಲಿಯನ್ನು ಮತ್ತೊಂದು ಹುಲಿ ಕೆಣಕುವುದು.ಒಂದು ಕಪಿ ಮತ್ತೊಂದು ಕಪಿಯನ್ನು ಅಣಕಿಸುತ್ತದೆ. ಇವೆರಡಕ್ಕೂ ಅವುಗಳದೇ ಆದಂತ ಗುಣಗಳಿವೆ. ಆದರೆ ಹುಲಿ ಮತ್ತು ಕಪಿಗಳೆರಡರ ಸಮ್ಮಿಶ್ರ ಗುಣಗಳಿಲ್ಲದ ಮನುಷ್ಯ ಸಿಗುವುದೇ ಇಲ್ಲ. ಹಾಗೆ ಎರಡೂ ಗುಣಗಳಿರುವ ಈ ಮನುಷ್ಯನ ಎರಡೂ ಗುಣಗಳನ್ನು ಹಾಗೆ ಬಿಡುವುದೇ ಜಾಣತನ."ನಿನ್ನಲ್ಲಿರುವ ಈ ಗುಣಗಳನ್ನು ಕೆದಕದೆ ಇರು" ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 381,
    english:
      "\"Can we say that a person who is born without senses (eyes or ears) is the most fortunate? Can others (those born with senses) test the poison and still stand? If a person has less hunger and consumes less, who else can we call as the 'conquerer of senses (desires)'? There is no need to over analyze this.\" - Mankutimma",
    kannada:
      "ಅತಿಶಯದದೃಷ್ಟ ಹುಟ್ಟಿಂ ಮೃತೇಂದ್ರಿಯನದಲ? ।\nಇತರರೊಳು ವಿಷಪರೀಕ್ಷೆಗೆ ನಿಲುವರಾರು? ॥\nಮಿತಕುಕ್ಷಿ ಮಿತಭುಕ್ತ; ಮತ್ತಾರ್ ಜಿತೇಂದ್ರಿಯನು? ।\nಅತಿಚರ್ಚೆ ಸಲದಲ್ಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೧ ॥",
    kannada_explanation:
      "ಜನ್ಮದಿಂದಲೇ ಇಂದ್ರಿಯ ಲಾಲಸೆ ಸತ್ತವನು ಇದ್ದರೆ, ಅದು ಅತಿಶಯದ ಅದೃಷ್ಟವಲ್ಲವೇ? ಹಾಗಲ್ಲದೆ ಘೋರ ಪರೀಕ್ಷಗೆ ಒಳಪಡುವವರಾರು? ಕಡಿಮೆ ಹಸಿವಾಗುವವನೋ ಅಥವಾ ಮಿತವಾಗಿ ಆಹಾರ ಸೇವಿಸುವವನೋ, ಯಾರು ಜಿತೇಂದ್ರಿಯರು? ಎನ್ನುವ ಪ್ರಶ್ನೆಗಳನ್ನು ತೆಗೆದು, ಈ ವಿಷಯದಲ್ಲಿ ಅತಿಯಾದ ಚರ್ಚೆ ಮಾಡಬಾರದು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 382,
    english:
      '"When one claims to have conquered his senses (desires), one must be skeptical. Did he really conquer? or his senses have gone weak? or the lady of beauty abandoned him? A blind person is naturally inclined away from enjoying beauty. Any one can be a saint as long as he has not seen a celestal damsel. Is there anyone who can resist the temptation after seening the damsels?" - Mankutimma',
    kannada:
      "ಇಂದ್ರಿಯವ ಜಯಿಸಿದೆಯೊ? ಮಂದವೋ ನಿನ್ನಕ್ಷಿ? ।\nಸೌಂದರ್ಯ ಯಕ್ಷಿಣಿಯೆ ನಿನ್ನ ತೊರೆದಿಹಳೋ? ॥\nಅಂಧನೆ ವಿರಕ್ತನ್; ಅಪ್ಸರೆಯ ಕಾಣದನೆ ಯತಿ ।\nಕಂಡು ಕೆರಳನಾರೊ! - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೨ ॥",
    kannada_explanation:
      "ನೀನೇನು ಇಂದ್ರಿಯಗಳ ಜಯಿಸಿದ್ದೀಯೊ? ಅಥವಾ ಸೌಂದರ್ಯವನ್ನು ನೋಡುವ ಕ್ಷಮತೆಯನ್ನು ಕಳೆದುಕೊಂಡಿದ್ದೀಯೋ? ಅಥವಾ ಈ ಜಗತ್ತಿನ ಸೌಂದರ್ಯದಲ್ಲಿನಿನಗೆ ಆಸೆ ಮೂಡಿಸುವ ಆ ಯಕ್ಷಿಣಿ ನಿನ್ನನ್ನು ತೊರೆದು ಹೋಗಿದ್ದಾಳೋ? ಕಣ್ಣು ಕಾಣದವನು ಏನನ್ನೂ ನೋಡದಿದ್ದರೆ ಅವನ ಮನದೊಳಗೆ ಆಸೆಗಳು ಇಲ್ಲವೇನು? ತಪಸ್ಸಿನಲ್ಲಿ ನಿರತ ಯತಿಯು ಅಪ್ಸರೆಯನ್ನು ನೋಡದಿರುವನೆ? ಹಾಗೆ ಕಂಡೂ ಆಸೆಪಡದೆ ಇರುವವರಾರು? ಎಂದು ಅಶಾ ಪ್ರವೃತ್ತವಾದ ಮನುಷ್ಯನ ಮನಸ್ಸನ್ನು ಕುರಿತುಹತ್ತುಹಲವಾರು ಪ್ರಶ್ನೆಗಳನ್ನು, ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 383,
    english:
      "\"Ravana's desires were aroused when he saw Sita (daughter of Janaka). Sita's desires were aroused when she saw the golden deer. We all know what followed. People criticize Ravana, but sympathize with Sita - even though both gave in to their desires. No one can know how mind reacts.\" - Mankutimma",
    kannada:
      "ಜನಕಜೆಯ ದರುಶನಿದಿನಾಯ್ತು ರಾವಣ ಚಪಲ ।\nಕನಕಮೃಗದರುಶನದೆ ಜಾನಕಿಯ ಚಪಲ ॥\nಜನವವನ ನಿಂದಿಪುದು, ಕನಿಕರಿಪುದಾಕೆಯಲಿ ।\nಮನದ ಬಗೆಯರಿಯದದು - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೩ ॥",
    kannada_explanation:
      "ಸೀತೆಯನ್ನು ನೋಡಿ ರಾವಣನಿಗೆ ಅವಳನ್ನು ಪಡೆಯಬೇಕೆಂಬ ಚಪಲವಾಯ್ತು. ಆದರೆ ಸೀತೆಗೆ ಬಂಗಾರದ ಜಿಂಕೆಯನ್ನು ನೋಡಿ ಅದನ್ನು ಪಡೆಯಬೇಕೆಂಬ ಚಪಲವಾಯ್ತು. ಆದರೆ ಜನರು ಸೀತೆಗೆ ಕನಿಕರ ತೋರುತ್ತಾರೆ ಮತ್ತು ರಾವಣನನ್ನು ದುಷ್ಟನೆಂದು ಜರಿಯುತ್ತಾರೆ. ಹಾಗೆ ಭಿನ್ನವಾಗಿ ಅಭಿಪ್ರಾಯಪಡುವ ಜನರು ಮನವನ್ನು ಸರಿಯಾಗಿ ಅರಿಯದೆ ಮಾತನಾಡುತ್ತಾರೆ ಎಂದು ಜನಸಾಮಾನ್ಯರ ಮನೋಭಾವದ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 384,
    english:
      '"There are two secret parts of this creation machinery - hunger and love. These strong emotions make people build forts, (look to) snatch stars from the sky. They make man ambitious. It is so strong that people are ready to give up straight ways to achieve their ambitions." - Mankutimma',
    kannada:
      "ಹೊಟ್ಟೆಯಲಿ ಹಸಿವು, ಮನದಲಿ ಮಮತೆ - ಈ ಎರಡು ।\nಗುಟ್ಟು ಕೀಲುಗಳಿಹವು ಸೃಷ್ಟಿಯಂತ್ರದಲಿ ॥\nಕಟ್ಟಿಪುವು ಕೋಟೆಗಳ, ಕೀಳಿಪುವು ತಾರೆಗಳ ।\nಸೊಟ್ಟಾಗಿಪುವು ನಿನ್ನ - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೪ ॥",
    kannada_explanation:
      "ಉದರದಲ್ಲಿರುವ ಹಸಿವು, ಮನಸ್ಸಿನಲ್ಲಿರುವ ಮಮತೆ ಈ ಎರಡೂ ಜಗತ್ತಿನಲ್ಲಿ ಸೃಷ್ಟಿಯಂತ್ರದ ಕೀಲುಗಳಂತೆ ಇವೆ. ಆಕಾಶಕ್ಕೆ ಏಣಿ ಹಾಕಿ ನಕ್ಷತ್ರಗಳ ಕಿತ್ತು ತರುವ ಸಾಹಸವನ್ನು ಮಾಡುವುದು ಈ ಹಸಿವು ಮತ್ತು ಮಮತೆಯ ಬಲದಿಂದ. ಈ ರೀತಿಮಾಡುವಾಗ, ಸಾಧ್ಯಾಸಾಧ್ಯತೆಗಳನ್ನುಮತ್ತುಯುಕ್ತಾಯುಕ್ತತೆಗಳನ್ನು ಅರಿಯದೆ ಏನೆನ್ನೋ ಮಾಡಲು ಹೋಗಿ ತನ್ನ ಬಾಳನ್ನು ಸೊಟ್ಟಗಾಗಿಸಿಕೊಳ್ಳುತ್ತಾನೆ ಎಂದು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಮನುಷ್ಯನ ಪರಾಕ್ರಮವನ್ನು ಕುರಿತು ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 385,
    english:
      '"We are all servants. We follow our desires like dogs follow the scent (of food) in all directions. The strings that yank us (the desires) are no doubt, outside us. But the hook that ties them to us are with in us. If we make our mind up, we can unhook us from those strings. To reduce our indulgence is no less than salvation." - Mankutimma',
    kannada:
      "ದಾಸರೋ ನಾವೆಲ್ಲ ಶುನಕನಂದದಿ ಜಗದಿ ।\nವಾಸನೆಗಳೆಳೆತಕ್ಕೆ ದಿಕ್ಕು ದಿಕ್ಕಿನಲಿ ॥\nಪಾಶಗಳು ಹೊರಗೆ, ಕೊಂಡಿಗಳು ನಮ್ಮೊಳಗಿಹವು ।\nವಾಸನಾಕ್ಷಯ ಮೋಕ್ಷ - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೫ ॥",
    kannada_explanation:
      "ಹೇಗೆ ನಾಯಿಯು ಕೇವಲ ವಾಸನೆಯಿಂದ ವ್ಯಕ್ತಿ ಮತ್ತು ವಸ್ತುಗಳನ್ನು ಗುರುತು ಹಿಡಿಯುತ್ತದೆಯೋ ಹಾಗೆಯೇ ನಾವೆಲ್ಲಾ ಈ ಜಗತ್ತಿನ ಸಕಲ ದಿಕ್ಕುಗಳಲ್ಲಿರುವ ವಾಸನೆಗಳಿಂದ ಸೆಳೆಯಲ್ಪಡುತ್ತೇವೆ. ಸೆಳೆತಗಳು ಹೊರಗಿವೆ ಮತ್ತು ಅವುಗಳೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಲು ಆಸೆಗಳೆಂಬ ಕೊಂಡಿಗಳು ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿವೆ. ಈ ಆಸೆಗಳು ಮತ್ತು ಆಶಾ ಪ್ರೇರಿತವಾದ ಸೆಳೆತಗಳು, ನಮ್ಮಲ್ಲಿ ಎಂದು ಸಂಪೂರ್ಣ ನಾಶವಾಗುವುದೋ, ಅಂದೇ ನಮಗೆ ಮುಕ್ತಿ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 386,
    english:
      '"When the stomach is full, the uneasiness subsides when you burp - let out a relieving sound from the food pipe. What should one do when you feel full in the heart? You laugh, cry, praise, condemn and let it out. Once you let it out, you will feel relieved." - Mankutimma',
    kannada:
      "ಹೃದಯದುಬ್ಬರವೇನು ಹೊಟ್ಟೆಯುಬ್ಬರದಂತೆ ।\nಅದರಿಳಿತ ಕೊರಳ ನಾದದ ಸದ್ದಿನಿಂದ ॥\nಅದೆ ನಗುವು ದುಗುಡಗಳು, ಅದೆ ಹೊಗಳು ತೆಗಳುಗಳು ।\nಅದನಿಳಿಸೆ ಶಾಂತಿಯೆಲೋ - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೬ ॥",
    kannada_explanation:
      "ಹೊಟ್ಟೆಯು ಹಸಿವಿನಿಂದ ಪರದಾಡುವಂತೆ, ಹೃದಯವೂ,ಮನಸ್ಸೂ ಪರದಾಡುತ್ತದೆ. ಭಾವನೆಯ ಹಸಿವಿನಿಂದ. ಆಹಾರವು ಕೊರಳ ನಾಳದಿಂದ ಒಳಹೊಕ್ಕಂತೆ ಹೃದಯದ ಅಬ್ಬರವೂ ಸಹ ಕೊರಳ ನಾಳದಿಂದಲೇ, ನಗು,ಕೋಪ, ಹೊಗಳಿಕೆ, ತೆಗಳಿಕೆ ಮುಂತಾದವುಗಳಾಗಿ ಒಳ ಹೊಕ್ಕು, ಹೊರ ಹೊಮ್ಮುತ್ತದೆ. ಈ ಎಲ್ಲ ರೀತಿಯ ಭಾವಗಳ ಶಮನದಿಂದಲೇ ಮನಸ್ಸಿಗೆ ಶಾಂತಿ ಸಿಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 387,
    english:
      '"When a baby is about grow teeth, it will go through the pain of desentry and fever. It is very natural and no child has ever escaped the fate. Once you get through it, you will come out stronger and brighter like the Moon escaping from the mouth of Rahu (after eclipse)." - Mankutimma',
    kannada:
      "ರದನೋದಯಜ್ವರಕೆ ಸಿಲುಕದಿಹ ಶಿಶುವಿರದು ।\nವಿಧಿಯೊದೆಗೆ ಸಿಕ್ಕದಿಹ ನರಜಂತುವಿರದು ॥\nಒದೆಪೆಟ್ಟು ಮುಗಿದಂದು ರಾಹುದಂಷ್ಟ್ರದೆ ಹೊರಟ ।\nವಿಧುಬಿಂಬವೋ ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೭ ॥",
    kannada_explanation:
      "ಪ್ರತೀ ಶಿಶುವಿಗೂ ಒಸಡನ್ನು ಸೀಳಿಕೊಂಡು ‘ಹಲ್ಲು’ ಬರುವಾಗ ಜ್ವರ ಬರುತ್ತದೆ. ಪೂರ್ಣ ಹಲ್ಲು ಬಂದಾಗ ಆ ಜ್ವರ ಕದಿಮೆಯಾಗುತ್ತದೆ. ಹಾಗೆಯೇ ವಿಧಿ ಹೊರೆಸಿದ ನಮ್ಮ ಕರ್ಮಗಳನ್ನು ಅನುಭವಿಸಿ ಹೊರಬಂದಾಗ, ಗ್ರಹಣ ಮುಕ್ತರಾಗಿ ಅಧಿಕ ದೀಪ್ತಿಯಿಂದ ಪ್ರಜ್ವಲಿಸುವ ಸೂರ್ಯ ಚಂದ್ರರಂತೆ, ನಮ್ಮ ಉತ್ಸಾಹವೂ ಅಧಿಕವಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 388,
    english:
      '"Body and spirit are both essential parts of life. They have to complement each other like friends. If one of them is left dry, where is happines for the other? You should not betray either one of them." - Mankutimma',
    kannada:
      "ದೇಹಾತುಮಂಗಳೆರಡಂಗಗಳು ಜೀವನಕೆ ।\nನೇಹದಿಂದೊಂದನೊಂದಾದರಿಸೆ ಲೇಸು ॥\nದಾಹಗೊಂಡಿರಲೊಂದು ಮಿಕ್ಕೊಂದಕೆಲ್ಲಿ ಸುಖ? ।\nದ್ರೋಹ ಬೇಡೊಂದಕಂ - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೮ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಜೀವನಕೆ ದೇಹ ಮತ್ತು ಅತ್ಮಗಳೆರಡು ಅಂಗಗಳು. ಅವರೆಡೂ ಪರಸ್ಪರ ಸ್ನೇಹದಿಂದ ಇದ್ದರೆ ಒಳ್ಳೆಯದು. ಒಂದು ತನ್ನದೇ ಅವಶ್ಯಕತೆಗಳ ದಾಹದಲ್ಲಿ ಮುಳುಗಿಬಿಟ್ಟರೆ ಮತ್ತೊಂದಕ್ಕೆ ಸುಖವಿರುವುದಿಲ್ಲ. ಸಮತೋಲನವನ್ನು ಕಾಯುವು ಸಲುವಾಗಿ ಒಂದಕ್ಕೊಂದು ದ್ರೋಹಮಾಡಿಕೊಳ್ಳಬಾರದು ಎಂದು ದೇಹಾತ್ಮ ಸಂಬಂಧದ ಗಹನ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 389,
    english:
      '"If you consider this body as just a pot of mud filled with pieces of flesh, call it disgusting - then can you do justice to the soul. Body is the material through which the soul can prosper. If you make body weak then the sould loses its support. You must do justice to the body as well. " - Mankutimma',
    kannada:
      "ಕಾಯವನು ಮೃದ್ಭಾಂಡ ಮಾಂಸಪಿಂಡವೆನುತ್ತೆ ।\nಹೇಯವೆಂದೆಂದೊಡಾತ್ಮಂಗಪ್ಪುದೇನು? ॥\nಆಯುಧವನದನು ತೊರೆದಾತ್ಮನೇಂಗೈದಪನು ।\nನ್ಯಾಯ ತನುವಿಗಮಿರಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೩೮೯ ॥",
    kannada_explanation:
      "ನಮ್ಮ ದೇಹವನ್ನು ಕೇವಲ ಮಣ್ಣಿಂದ ಆದ ಮಡಕೆ ಅಥವಾ ಮೂಳೆ ಮಾಂಸದ ತಡಿಕೆ ಎಂದು ಅಸಹ್ಯ ಪಟ್ಟುಕೊಂಡರೆ ಆತ್ಮನಿಂದ ಏನೂ ಮಾಡಲಾಗುವುದಿಲ್ಲ. ಆತ್ಮನಿಗೆ ದೇಹವೊಂದು ಆಯುಧ. ಅದನ್ನು ತೊರೆದು ಆತ್ಮನೇನು ಮಾಡಬಲ್ಲ? ಹಾಗಾಗಿ ದೇಹಕ್ಕೂ ನ್ಯಾಯವನ್ನು ಒದಗಿಸು, ಅದನ್ನು ಸೊರಗಿಸಬೇಡ ಎನ್ನುವ ಅರ್ಥದಲ್ಲಿ ಈ ಮುಕ್ತಕದಲ್ಲೂ ದೇಹಾತ್ಮ ಸಂಬಂಧವನ್ನು ಕುರಿತು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 390,
    english:
      '"The tale of the beggar kicking the foos in his sleep while dreaming is not fiction. It is everyone\'s life story. The whole world may be a dream, an illusion. But, its sting is very real." - Mankutimma',
    kannada:
      "ಸುಳ್ಳಲ್ಲ ಕಥೆಯ ತಿರುಕನು ಕಂಡ ಸವಿಗನಸು ।\nಚೆಲ್ಲಿತಲ್ಲವೆ ಹಿಟ್ಟು ಘಟವನವನೊದೆಯೆ? ॥\nಜಳ್ಳು ಸುಖದುಃಖವಿರಬಹುದಾದೊಡದರ ಮೊನೆ ।\nಮುಳ್ಳಹುದು ಜೀವಕ್ಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೦ ॥",
    kannada_explanation:
      'ಮುಪ್ಪಿನ ಷಡಕ್ಷರಿ ಎಂಬ ಕವಿಯ "ತಿರುಕನ ಕನಸು" ಎಂಬ ಕವಿತೆಯ ಕಥೆಯನ್ನು ಉಲ್ಲೇಖ ಮಾಡುತ್ತಾ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ‘ಅವನು ಕಂಡದ್ದು ಕನಸೇ ಆದರೂ ಕನಸಿನ ಅಂತ್ಯದಲ್ಲಿ ಅವನು ತಾನು ತಿರುಪೆ ಎತ್ತಿ ತಂದಿದ್ದ ಹಿಟ್ಟಿನ ಮಡಕೆಯನ್ನು ಒದ್ದದ್ದು ವಾಸ್ಥವವಲ್ಲವೇ? ಹಾಗೆಯೇ ನಮ್ಮ ಜೀವನದಲ್ಲಿ ನಡೆಯುವ ಎಲ್ಲ ಘಟನೆಗಳೂ ಕನಸಂತೆ ಕಂಡರೂ ಅ ಘಟನೆಗಳಿಂದಾಗುವ ಪರಿಣಾಮಗಳು ನಮ್ಮ ಸ್ವಭಾವಕ್ಕೆ ಸೇರಿಕೊಂಡು ‘ಆತ್ಮದ’ ಗುಣವಾಗುತ್ತದೆ’ ಎಂದು ಕರ್ಮಶೇಷದ ಪ್ರಯಾಣದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ, ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 391,
    english:
      '"When one sees a noose made of a rope in the dim light, he may think it is a snake. He is frightened and starts sweating. The fright and sweat are all real. But the snake is not. This world is also as real as that. Don\'t dismiss the appearances because everything is real as long as the feeling is real. " - Mankutimma',
    kannada:
      "ಹುರಿಯುರುಳೆ ಹಾವಲ್ಲವಾದೊಡಂ ಮಬ್ಬಿನಲಿ ।\nಹರಿದಾಡಿದಂತಾಗೆ ನೋಳ್ಪಂಗೆ ಬೆದರಿ ॥\nಸುರಿಸುವಾ ಬೆವರು ದಿಟ; ಜಗವುಮಂತುಟೆ ದಿಟವು ।\nಜರೆಯದಿರು ತೋರ್ಕೆಗಳ - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೧ ॥",
    kannada_explanation:
      "ಕತ್ತಲಲ್ಲಿ ಹಗ್ಗವನ್ನು ಕಂಡು ಹಾವೆಂದು ತಿಳಿದು ಹೆದರಿ ಗಾಬರಿಗೊಂಡು ಬೆವರು ಸುರಿಸಿದಾಗ, ‘ ಅದು ಹಗ್ಗ;ಹಾವಲ್ಲ’ ವೆಂದು ‘ಸತ್ಯ’ ನಂತರ ಗೊತ್ತಾದರೂ, ಹರಿಸಿದ ಬೆವರು ಸತ್ಯವೇ ಅಲ್ಲವೇ? ಅದೇ ರೀತಿ ಈ ಜಗದ ವಿಷಯಗಳೂ ತನ್ನ ಸತ್ಯರೂಪವನ್ನು ತೋರಗೊಡದೆ, ನಮ್ಮನ್ನು ಹೆದರಿಸಿ ಬೆದರಿಸುತ್ತವೆ. ಸತ್ಯವಲ್ಲದಿದ್ದರೂ ತೋರಿಕೆಯ ರೂಪಗಳೇ ತಮ್ಮ ಪ್ರಭಾವವನ್ನು ಬೀರುತ್ತವೆ. ಹಾಗಾಗಿ ತೋರಿಕೆಗಳನ್ನು ತಿರಸ್ಕರಿಸಬೇಡ ಎಂದು ಜಗದ್ವಿಷಯಗಳನ್ನು ವಿಮರ್ಶಿಸಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 392,
    english:
      '"Can you dismiss the beauty and love in this world as all illusion and false? Don\'t these very feelings get us together or make us sad? have you not seen strangers who are caught in the torrent (or at sea) cling to each other for dear life. We are also like that in this torrent of life and seeking eachother to get through it is very natural." - Mankutimma',
    kannada:
      "ಸೌಂದರ್ಯ ಬಾಂಧವ್ಯಗಳನು ಬರಿದೆನಲಹುದೆ? ।\nಹೊಂದಿಸವೆ ಕುಂದಿಸವೆ ಜೀವಿಗಳನವುಗಳ್? ॥\nಸಿಂಧುಪೂರದಿ ಬಿದ್ದವರೊಳೊಬ್ಬರೊಬ್ಬರನು ।\nಅಂದಿಕೊಳಲದು ಬರಿದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೨ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೌಂದರ್ಯ ಮತ್ತು ಬಾಂಧವ್ಯಗಳನ್ನು ವ್ಯರ್ಥವೆಂದು ಹೇಳಬಹುದೇ? ಅವು ಜೀವಿಗಳನ್ನು ಒಬ್ಬರಿಗೊಬ್ಬರನ್ನು ಸೇರಿಸುತ್ತದೆ ಅಗಲಿಸುತ್ತದೆ, ಉಬ್ಬುವಂತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕುಗ್ಗುವಂತೆ ಮಾಡುತ್ತದೆ. ಪ್ರವಾಹದಲ್ಲಿ ಸಿಕ್ಕು ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗುವಾಗ ಯಾರು ಸಿಕ್ಕರೆ ಅವರನ್ನು ಹಿಡಿದು ಪ್ರಾಣ ರಕ್ಷಣೆ ಮಾಡಿಕೊಳ್ಳುವುದಿಲ್ಲವೇ? ಅಂತಹ ಬಂಧನಗಳನ್ನು ಬರಿದಾದ ಬಂಧವೆನ್ನಲು ಸಾಧ್ಯವೇ? ಎಂದು, ಮನುಷ್ಯ ಮನುಷ್ಯರ ನಡುವಿನ ಸಂಬಂಧಗಳ ವಿಚಾರವನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 393,
    english:
      '"The artifacts of this world distort the images in our mind. We can never be free of our prejudices. We can only believe those images cast on our mind are real. The measure of reality is only through the experiences. " - Mankutimma',
    kannada:
      "ಎನಿತೆನಿತ್ತು ವಿಕಾರ ಪರಿಣಾಮಗಳ ನಮ್ಮ ।\nಮನಕಾಗಿಪುವೊ ಲೋಕರೂಪಶಕ್ತಿಗಳು ॥\nಅನಿತನಿತು ಸತ್ಯತೆಯವಕ್ಕುಂಟು ಜೀವಿತದಿ ।\nಅನುಭವವೆ ದಿಟದಳತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೩ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ, ಲೋಕದ ಆಗುಹೋಗುಗಳು ಮತ್ತು ಅವುಗಳಿಂದಾಗುವ ಪರಿಣಾಮಗಳು ನಮ್ಮ ಮನಸ್ಸಿಗೆ ಹಲವಾರು ವಿಕಾರಗಳನ್ನು ಅಂಟಿಸುತ್ತದೆ ನಮ್ಮ ಮಟ್ಟಿಗೆ ಅವು ಸತ್ಯವಲ್ಲವೇ? ಆ ಪರಿಣಾಮಗಳಿಂದಾಗುವ ಅನುಭವವೇ ನಮ್ಮ ಅರಿವಿಗೆ ಒಂದು ಮಾಪನ ಅಥವಾ ಅಳತೆ ಎಂದು ಜೀವನಾನುಭವದ ಮತ್ತು ಅದರಿಂದ ನಮ್ಮ ಮೇಲೆ ಆಗುವ ಪರಿಣಾಮದ ವಿಚಾರವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 394,
    english:
      '"The dream is real. Memories are real. Real are those feelings which incite us and make us dance to its tunes. These are small truths. All parts and pieces of the ultimate thruth. These smaller truths are also very essential for life." - Mankutimma',
    kannada:
      "ಕನಸು ದಿಟ; ನೆನಸು ದಿಟ; ತನುವೊಳಿಹ ಚೇತನವ ।\nಕನಲಿಸುವ ಕುಣಿಸುವಾ ಹಬೆಗಳೆಲ್ಲ ದಿಟ ॥\nಇನಿತನಿತು ದಿಟಗಳಿವು-ತುಂಬುದಿಟದಂಶಗಳು ।\nಗಣನೀಯವವು ಬಾಳ್ಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೪ ॥",
    kannada_explanation:
      "ನಾವು ಕಾಣುವ ಕನಸುಗಳು, ಕಾಣುವಾಗ ನಿಜವಾಗಿರುತ್ತವೆ ಮತ್ತು ನೆನಸಿನಲ್ಲಿ ನಮಗಾಗುವ ಅನುಭವಗಳೂ ಸಹ ಸತ್ಯವಾಗಿರುತ್ತವೆ. ಆ ಕನಸು ನೆನಸುಗಳಲ್ಲಿ ಆಗುವ ಅನುಭವಗಳು ಮತ್ತು ಅವುಗಳ ಪ್ರಭಾವ ಮತ್ತು ಪರಿಣಾಮ ನಮ್ಮ ದೇಹವನ್ನು ಧರಿಸಿರುವ ಚೇತನದ ಮೇಲೆ ಖಂಡಿತ ಆಗುತ್ತದೆ. ಹೀಗೆ ಆಗುವ ಸಣ್ಣ ಸಣ್ಣ ನಿಜಗಳೆಲ್ಲ ನಮ್ಮ ಬಾಳ್ವೆಗೆ ಅವಶ್ಯಕವೆಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 395,
    english:
      '"Comprehending the full truth is beyond our lifetimes. The ultimate truth is there in all reflections of itself. It can be seen with love. It exists even beyond the skies in all directions. It exists by the will of the Creator" - Mankutimma',
    kannada:
      "ತುಂಬುದಿಟ ಜೀವಿತದ ಗಣನೆಗಳ ಮೀರಿದುದು ।\nಇಂಬುಗಳ ಬಿಂಬಗಳ ಸನ್ನಿಧಾನವದು ॥\nಅಂಬರದಿನಾಚಿನದು, ತುಂಬಿರುವುದೆತ್ತಲುಂ ।\nಶಂಭು ಪರಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೫ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿಗೆ ಕಾರಣವಾದ ಪೂರ್ಣ ಸತ್ಯ ಅಥವಾ ಪರಮ ಸತ್ಯ ನಮ್ಮ ಲೆಕ್ಕಾಚಾರಕ್ಕೆ ನಿಲುಕದ್ದು. ಪ್ರೀತಿ ಪ್ರೇಮಗಳ ಪ್ರತಿರೂಪದ ಸ್ಥಾನವದು. ಗಗನಕ್ಕೂ ಮೀರಿದ್ದು. ಎಲ್ಲಕಡೆಯೂ ತುಂಬಿರುವ ಈ ರೂಪ ಪರಬ್ರಹ್ಮನಾದ ಶಂಬುವಿನ ರೂಪವು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 396,
    english:
      "\"Don't berate teh body as an ant hill (snake's house) full of impurities (and poison). The ancient sages have proclaimed it as the abode of the Creator himself. If one can keep the energetic horse under control, the he can go to places. We can definitely reach our goals. We have five horses (senses).\" - Mankutimma",
    kannada:
      "ಕಲ್ಮಷದ ವಲ್ಮೀಕವೆಂದೊಡಲ ಜರೆಯದಿರು ।\nಬ್ರಹ್ಮಪುರಿಯೆಂದದನು ಋಷಿಗಳೊರೆದಿಹರು ॥\nಹಮ್ಮುಳ್ಳ ಹಯವ ಕಾಪಿಟ್ತು ಕಡಿವಣ ತೊಡಿಸೆ ।\nನಮ್ಮ ಗುರಿಗೈದಿಪುದು - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೬ ॥",
    kannada_explanation:
      "ನಮ್ಮ ದೇಹವನ್ನು ಕೊಳೆಯ ಹುತ್ತವೆನ್ನಬೇಡಿ. ನಮ್ಮ ಋಷಿ ಮುನಿಗಳು ಈ ದೇಹವನ್ನು ಪರಮಾತ್ಮನ ಆವಾಸಸ್ಥಾನವೆಂದಿದ್ದಾರೆ. ಚೆನ್ನಾಗಿ ಬೆಳೆಸಿ, ರಕ್ಷಿಸಿ, ಕಡಿವಾಣ ತೊಡಿಸಿ ಓಡಿಸಿದರೆ ತನ್ನ ಗುರಿಮುಟ್ಟುವ ಒಳ್ಳೆಯ ಕುದುರೆಯಂತೆ, ನಾವೂ ಸಹ ನಮ್ಮ ದೇಹವನ್ನು ರಕ್ಷಿಸಿಕೊಂಡು ದೃಢವಾಗಿಟ್ಟುಕೊಂಡು ತನ್ಮೂಲಕ ಸಾಧನೆಗೈದರೆ, ನಮ್ಮ ಗಮ್ಯವಾದ ಪರಮಾತ್ಮನನ್ನು ಮುಟ್ಟಬಹುದು ಎಂದು ದೇಹಾತ್ಮ ಸಂಬಂಧವನ್ನು ವಿಮರ್ಶೆಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 397,
    english:
      '"Body is a horse. Soul is the rider. If the vehicle is starved, will it move? If the rider is not alert, then can the journey be safe and happy? It is best if both the horse and the rider are friends with each other." - Mankutimma',
    kannada:
      "ದೇಹವೆಂಬುದು ಕುದುರೆಯಾತ್ಮನದರಾರೋಹಿ ।\nವಾಹನವನುಪವಾಸವಿರಿಸೆ ನಡೆದೀತೆ? ॥\nರೋಹಿ ಜಾಗ್ರತೆದಪ್ಪೆ ಯಾತ್ರೆ ಸುಖ ಸಾಗೀತೆ? ।\nಸ್ನೇಹವೆರಡಕಮುಚಿತ - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೭ ॥",
    kannada_explanation:
      "ದೇಹವೆಂಬುದು ಕುದುರಯಂತೆ ಮತ್ತು ಅದನ್ನು ಸವಾರಿಮಾಡುವವನೇ ಆತ್ಮ.ತಾನು ಸವಾರಿಮಾಡುವ ವಾಹನವಾದ ದೇಹವನ್ನು ಉಪವಾಸ ಕೆಡವಿದರೆ ಪ್ರಯಾಣ ಸಾಧ್ಯವಾದೀತೆ? ಅಥವಾ ಅವರೋಹಣ ಮಾಡಿ ಪ್ರಯಾಣಮಾಡುವ ಸವಾರನಾದ ಆತ್ಮ ಎಚ್ಚರ ತಪ್ಪಿದರೆ ಪ್ರಯಾಣ ಸುಗಮವಾದೀತೇ? ಎರಡೂ ಸರಿಯಲ್ಲ. ಹಾಗಾಗಿ ಇವೆರಡಕ್ಕೂ ಸ್ನೇಹ ಇರುವುದೇ ಉಚಿತ ಎಂದು ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 398,
    english:
      '"Our life here is real. It is not up to us to discuss (and decide) how it came into existence. Let us leave that to God. We are here. We have to strive to make this place more beautiful and prosperous. We should think in those lines. It must be the goal of all our worldly endeavors." - Mankutimma',
    kannada:
      "ಇರುವನ್ನಮೀ ಬಾಳು ದಿಟವದರ ವಿವರಣೆಯ ।\nಹೊರೆ ನಮ್ಮ ಮೇಲಿಲ್ಲ ನಾವದರ ಸಿರಿಯ ॥\nಪಿರಿದಾಗಿಸಲು ನಿಂತು ಯುಕ್ತಿಯಿಂ ದುಡಿಯುವುದು ।\nಪುರುಷಾರ್ಥಸಾಧನೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೮ ॥",
    kannada_explanation:
      "ನಾವು ಇರುವ ಬಾಳು ನಮ್ಮ ಮಟ್ಟಿಗೆ ಸತ್ಯವಾದದ್ದು. ಅದರ ವಿವರಣೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ ಮಾಡುವ ಹೊಣೆ ಅಥವಾ ಜವಾಬುದಾರಿ ನಮ್ಮ ಮೇಲಿಲ್ಲ. ಅದನ್ನು ಕೇವಲ ಜಾಣ್ಮೆಯಿಂದ ಅನುಭವಿಸಿ, ಇದರ ಹಿರಿಮೆಯನ್ನು ಹೆಚ್ಚಿಸುವುದಕ್ಕೆ ಕ್ರಿಯಾಶೀಲರಾಗುವುದೇ, ನಮ್ಮ ಕರ್ತವ್ಯ ಎಂದು ನಮ್ಮ ಬಾಳನ್ನು ಹೇಗೆ ನಡೆಸಬೇಕು ಎನ್ನುವ ಮಂತ್ರವನ್ನು ನಮಗೆ ಕೊಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 399,
    english:
      '"It is not about body alone. Neither is it about the soul alone. Only when both are fused into one, does the joy of life materialize. The soul is like your mother and the body is like your wife. You must watch their balance carefully." - Mankutimma',
    kannada:
      "ಕಾಯಮಾತ್ರದುದಲ್ಲವಾತ್ಮಮಾತ್ರದುದಲ್ಲ- ।\nವಾಯೆರಡುಮೊಂದಾಗಲದು ಜೀವಲೀಲೆ ॥\nತಾಯಿವೊಲು ನಿನಗಾತ್ಮ, ಮಡದಿವೊಲು ಕಾಯವವ- ।\nರಾಯವನು ಸರಿನೋಡು - ಮಂಕುತಿಮ್ಮ ॥ ೩೯೯ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಜೀವನವು ಕೇವಲ ದೇಹದಿಂದಾಗಲೀ ಅಥವಾ ಕೇವಲ ಆತ್ಮದಿಂದಾಗಲೀ ನಡೆಯುವುದಿಲ್ಲ.ಇವರೆಡೂ ಒಂದಾದಾಗ ಮಾತ್ರ ಜೀವನ ಸಾಗುತ್ತದೆ. ಆತ್ಮ ತಾಯಿಯಂತಾದರೆ ದೇಹವು ಮಡದಿಯಂತೆ. ಹೇಗೆ ನಾವು ತಾಯಿ ಮತ್ತು ಮಡದಿಯರನ್ನು ಸಮಭಾವದಿಂದ ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆಯೋ, ಅದೇ ರೀತಿ ದೇಹ ಮತ್ತು ಆತ್ಮಗಳ ಸಮನ್ವಯವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಬೇಕು ಎಂದು ದೇಹಾತ್ಮ ಸಂಬಂಧವನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 400,
    english:
      '"What if everything that can be seen is destroyed? We can not do anythinga about it. But to see whatever is accessible to our senses now is to be seen. Only by experiencing this world can we hope to reach the cosmic spirit or univesal soul. This is the only path from destructible to permanent" - Mankutimma',
    kannada:
      "ದೃಶ್ಯವೆಲ್ಲವು ನಶ್ಯವಾದೊಡೇಂ? ದೃಷ್ಟಿಗದು ।\nವಶ್ಯವಿರುವನಕದನು ದೃಷ್ಟಿಪುದೆ ಕಾರ್ಯಂ ॥\nವಿಶ್ವಾನುಭವವೆ ವಿಶ್ವಾತ್ಮಾನುಭವಕೆ ಪಥ ।\nನಶ್ಯದಿಂದವಿನಶ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೦ ॥",
    kannada_explanation:
      "ನಮಗೆ ಕಾಣುವುದೆಲ್ಲವೂ ನಾಶವಾಗುವಂತಹದ್ದಾದರೂ, ನಮ್ಮ ನೋಟದ ಪರಿಧಿಗೆ ಬಂದಾಗ ಅದು ಸತ್ಯವಾಗಿರುತ್ತದೆ ಹಾಗಾಗಿ ಕೇವಲ ನೋಡುವುದಷ್ಟೇ ನಮ್ಮ ಕರ್ತವ್ಯ. ವಿಶ್ವದ ಅನುಭವವೇ ವಿಶ್ವಾತ್ಮಾನುಭವಕ್ಕೆ ದಾರಿ ಮತ್ತು ನಾಶವಾಗುವುದರ ಮೂಲಕವೇ ಅವಿನಾಶಿಯಾದ ಆ ಪರಮಾತ್ಮನನ್ನು ಅರಿತುಕೊಳ್ಳಲು ಸಾಧ್ಯವೆಂದು ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ ಸತ್ಯವಾದ ಅರಿವಿನ ಮತ್ತು ಅರಿವಿಗೆ ಮಾರ್ಗದ ಪರಿಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 401,
    english:
      "Even after knowing that a patient is terminallty ill, we treat him up until the last second he has life left in him. Similarly, we should treat this world even though we know that every thing in this world will get destroyed in time. - Mankutimma",
    kannada:
      "ಮರಣಶಯ್ಯೆಯದೆಂದು ತಿಳಿದೊಡಂ ರೋಗಿಯನು ।\nಹರಣಮಿರುವನ್ನೆಗಂ ಪರಿಚರಿಸುವಂತೆ ॥\nಸ್ಥಿರವಲ್ಲವೀ ಲೋಕವಾದೊಡಮದುಳ್ಳನಕ ।\nಚರಿಸು ನೀನಾಳಾಗಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೧ ॥",
    kannada_explanation:
      "ರೋಗಿ ಇನ್ನೇನು ಸಾಯುವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದಾನೆ ಎಂದು ಅರಿತ ವೈದ್ಯನು, ಆ ರೋಗಿಯಲ್ಲಿ ಪ್ರಾಣವಿರುವ ತನಕ, ಔಷಧಿಗಳನ್ನು ಇತ್ತು ಪರಿಚರ್ಯೆ ಮಾಡುವ ರೀತಿಯಲ್ಲಿ,ಸ್ಥಿರವಲ್ಲದ, ಈ ಲೋಕದಲ್ಲಿ ನಮ್ಮೊಳಗೆ ಪ್ರಾಣವಿರುವ ತನಕ ಒಂದು ಆಳಿನಂತೆ ಕೆಲಸಮಾಡುತ್ತಲೇ ಇರಬೇಕು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 402,
    english:
      "Everybody hates Death since he puts an end to every ting we know. But just imagine what would happen if he just stopped working. This world would be filled with old people. If no one conceded any space, how could new people come to this world. Death brings freshness into this world. - Mankutimma",
    kannada:
      "ಜವನ ನಿಂದಿಪುದೇಕೆ ಸರ್ವಘಾತಕನೆಂದು? ।\nಭುವಿಗೆ ವೃದ್ಧಸಮೃದ್ಧಿಯನು ಸುಮ್ಮನಿರಲ್ ॥\nನವಜನಕ್ಕೆಡೆಯೆತ್ತಲಾರುಮೆಡೆಬಿಡದೆ ನಿಲೆ? ।\nನವತೆಯವನಿಂ ಜಗಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೨ ॥",
    kannada_explanation:
      "ಎಲ್ಲರನ್ನೂ ನಾಶಮಾಡುವವನೆಂದು ಆ ‘ಯಮರಾಯ’ನನ್ನು ನಿಂದಿಸುವುದೇಕೆ? ಅವನು ತನ್ನ ಕೆಲಸಮಾಡದೇ ಸುಮ್ಮನಿದ್ದರೆ, ಈ ಭೂಮಿಯಮೇಲೆ ಮುದುಕರೇ ಅಧಿಕವಾಗಿಬಿಡುತ್ತಾರೆ. ಇಲ್ಲಿರುವವರಾರೂ ಸ್ಥಳ ಬಿಡದೆ ಇಲ್ಲೇ ನೆಲೆ ನಿಂತರೆ ಹೊಸಜನ ಬರಲು ಆಸ್ಪದವೇ ಇರುವುದಿಲ್ಲ. ಹಾಗಾಗಿ ಆ ‘ಯಮ’ನಿಂದಲೇ ಈ ಜಗತ್ತಿಗೆ ಹೊಸತನ ಉಂಟಾಗುತ್ತದೆ ಎಂದು ಜನನ ಮರಣಗಳ ಸೂಕ್ಷ್ಮತೆಯನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 403,
    english:
      "In between the brilliance of gems, there is gap (lackluster) in a necklace. Between streaks of light are some shadows. Between expanse of cultivated farm, there is boundaries where there is nothing. All the above things - gems, light and farms look beautiful (and meaningful) only when they exist with (and right next to) their antithesis. - Mankutimma",
    kannada:
      "ಹೊಳಪು ಹೊಳಪಿನ ನಡುವೆ ಬಿಡುವಿನಿತು ರತ್ನದಲಿ ।\nಬೆಳಕು ಬೆಳಕಿನ ನಡುವೆ ಅನಿತಿನಿತು ನೆರಳು ॥\nಬೆಳಸು ಬೆಳಾಸಿನ ಸಾಲು ನಡುವೆ ಬದಿ ಗದ್ದೆಯಲಿ ।\nಉಳಿಗಳಿವಿನ ನೆರೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೩ ॥",
    kannada_explanation:
      "ಹೇಗೆ ರತ್ನಹಾರದಲ್ಲಿ ಒಂದು ರತ್ನಕ್ಕೂ ಮತ್ತೊಂದಕ್ಕೂ ಮಧ್ಯೆ ಚಿನ್ನದ ಗೆರೆಯಿರಿಸಿ ರತ್ನದ ಹೊಳಪನ್ನು ಅಧಿಕವಾಗಿಸುತ್ತಾರೋ, ಹೇಗೆ ನೆರಳು ತಾನಿದ್ದು ಬೆಳಕಿಗೆ ಪ್ರಾಮುಖ್ಯತೆ ನೀಡುತ್ತದೋ, ಹೇಗೆ ಹೊಲ ಗದ್ದೆಗಳಲ್ಲಿ ಪೈರ ಸಾಲ ನಡುವಿನ ಬದಿ ತನ್ನ ಚೌಕಟ್ಟಿನಲ್ಲಿರುವ ಬೆಳೆಯನ್ನು ಕಾಯುತ್ತದೋ, ಹಾಗೆಯೇ ಉಳಿವಿಗೆ ಅಳಿವು ಪೂರಕವಾಗಿರುತ್ತದೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 404,
    english:
      "Gods may rise and disappear. But divinity is permanent. Nights and days may come and go. But time remains. Beings may die. But life goes on. Imagine such a universal truth. - Mankutimma",
    kannada:
      "ದೇವರ್ಕಳುದಿಸಿ ಮರೆಯಹರು; ದೇವತ್ವ ಚಿರ ।\nಜಾವ ದಿನ ಬಂದು ಪೋಗುವುವು; ಕಾಲ ಚಿರ ॥\nಜೀವದ ವ್ಯಕ್ತಿ ಸಾಯ್ವುದು; ಜೀವಸತ್ವ ಚಿರ ।\nಭಾವಿಸಾ ಕೇವಲವ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೪ ॥",
    kannada_explanation:
      'ದೇವರುಗಳು ಉದಯಿಸಿ ಮರೆಯಾಗುತ್ತಾರೆ, ಆದರೆ ಅವರ ದೇವತ್ವ ಸದಾ ಇರುತ್ತದೆ. ಅವ್ಯಾಹತ ಕಾಲಪ್ರವಾಹದಲ್ಲಿ ಜಾವ, ದಿನ ವಾರಗಳು ಬಂದುಹೋಗುತ್ತವೆ, ಆದರೆ ಕಾಲ ನಿರಂತರ. ಹಾಗೆಯೇ ಒಬ್ಬ ವ್ಯಕ್ತಿ ಮರಣ ಹೊಂದಿದರೆ ಕಾಯ ಕೊನೆಯಾದರೂ ಆ ಕಾಯದಲ್ಲಿ ವಾಸಿಸಿದ ಚೇತನ ನಿರಂತರ. ಹೀಗೆ ಜಗತ್ತಿನ ಎಲ್ಲದರಲ್ಲಿ ಇದ್ದು, ಅದು ಇರುವ ವಸ್ತು ನಾಶವಾದರೂ, ತಾನು ಚಿರವಾಗಿ, ನಿರಂತರವಾಗಿ ಇರುವ "ಚೈತನ್ಯವನ್ನು" ಸದಾಕಾಲ ಭಾವಿಸು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 405,
    english:
      "The creator is one and only one. But he himself has materialized as so many beings. In this form, he has forgotten his earlier form (of whole). To get back to his original form, he has got Maya (illusion) create a hook to wake us up - that is love between a man and a woman. - Mankutimma",
    kannada:
      "ಪರಬೊಮ್ಮ ಜೀವಭೇದದಿ ನಿಜೈಕ್ಯವ ಮರೆಯೆ ।\nಮರಳಿ ತನ್ನೊಟ್ಟನವನರಸಲೆಚ್ಚರಿಸಲ್ ॥\nನರನಾರಿಯರ ಪರಸ್ಪರ ಮೋಹದಲಿ ಮಾಯೆ ।\nನಿರವಿಸಿಹಳಂಕುಶವ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೫ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಕೋಟ್ಯಾಂತರ ಜೀವ ಬೇದಗಳಲ್ಲಿ,ಆ ಪರಮಾತ್ಮನೇ ಚೇತನದ ರೂಪದಿ ಸೇರಿ, ತನ್ನ ನಿಜ ಸ್ವರೂಪವನ್ನು ಮರೆತು, ತನ್ನ ಸ್ವಸ್ಥಾನವನ್ನು ಮರೆತು ಇರುವಾಗ, ಅಲ್ಲಿಗೆ ಸೇರಲು ಆತ್ಮವನ್ನು ಎಚ್ಚರಿಸಲು, ನರ ನಾರಿಯರ ಪರಸ್ಪರ ಆಕರ್ಷಣೆಯಲ್ಲಿ, ಮಾಯೆ ಅಂಕುಶವನ್ನು ನಿರ್ಮಿಸಿದೆ ಎಂದು ಒಂದು ಗಹನವಾದ ತತ್ವವನ್ನು ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 406,
    english:
      "From the love between a man and woman starts a family and a dynasty. To support a family, a house. Then neighbors. Later villages and then nations and alliances. There is only one pod. But a vibration started at the center of it creates a hundred waves spreading in all direction. Such is this world.  - Mankutimma",
    kannada:
      "ನರನಾರಿಮೋಹದಿಂ ವಂಶವದಕಾಗಿ ಮನೆ ।\nನೆರೆ ಹೊರೆಗಳೂರು ರಾಷ್ಟ್ರಗಳು ಸಂಘಗಳು ॥\nಕೆರೆಯೊಂದು ಕೇಂದ್ರದಿಂದಲೆಯೆ ಬಳೆಗಳು ನೂರು ।\nಹರಿವಂತೆ ಸಂಸಾರ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೬ ॥",
    kannada_explanation:
      "ಹೆಣ್ಣು ಗಂಡಿನ ಪರಸ್ಪರ ಆಕರ್ಷಣೆ ಮತ್ತು ಮೋಹದಿಂದಲೇ ವಂಶಗಳು, ಮನೆ,ನೆರೆ ಹೊರೆಯವರು,ಊರುಗಳು,ಸಂಘಗಳು,ದೇಶಗಳು ಆಗಿವೆ. ಕೆರೆಯ ನೀರಲ್ಲಿ ಒಂದು ಬಿಂದುವಿನಿಂದ ಹೊರಡುವ ಅಲೆಯ ಬಳೆಗಳು ನೂರಾರಾಗುವಂತೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸಂಸಾರವೆಂಬುದು ಎಂದು ಜಗದ್ಬೆಳವಣಿಗೆಯ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 407,
    english:
      "It (love between a man and a woman) leads to customs and traditions. Then to families and pride in dynasties. Nations, religious sects, moral framework and institutions follow. These again enable a person to shed his attachment and desire. From that follows the enrichment of the soul - Mankutimma",
    kannada:
      "ಅದರಿಂದ ನೀತಿ ನಯವದರಿಂದ ಕುಲಗೋತ್ರ ।\nವದರಿಂದ ರಾಜ್ಯ ಮಠ ಧರ್ಮ ಸಂಸ್ಥೆಗಳು ॥\nಒದವುವದರಿಂದೆ ಮಮತಾನಾಶದವಕಾಶ- ।\nವದರಿನಾತ್ಮವಿಕಾಸ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೭ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಮುಕ್ತಕದಲ್ಲಿ ಉಲ್ಲೇಖಗೊಂಡಿರುವ ನರ ನಾರಿಯರ ಪರಸ್ಪರ ಆಕರ್ಷಣೆ ಮತ್ತು ವ್ಯಾಮೋಹದಿಂದ ಮೊದಲಾಗಿ ಅತಿ ಒರಟನಾಗಿದ್ದ ಮನುಷ್ಯ, ಕಾಲಾನುಕಾಲಕ್ಕೆ ‘ನಯವನ್ನು’ ತನ್ನ ನಡವಳಿಕೆಯಲ್ಲಿ ತಂದುಕೊಂಡ, ತನ್ನದೇ ಬಾಳಿಗೆ ಒಂದು ನಿಯಮವನ್ನು ಸೃಷ್ಟಿಸಿಕೊಂಡು ಪಾಲಿಸತೊಡಗಿದ. ಅವನ ಕುಲಗಳು ಬೆಳೆದವು, ಗೋತ್ರಗಳು, ಹುಟ್ಟಿಕೊಂಡವು. ತತ್ಕಾರಣವಾಗಿ ರಾಜ್ಯ,ಮಠ,ಧರ್ಮ ಸಂಸ್ಥೆಗಳು ಹುಟ್ಟಿಕೊಂಡವು. ಇವನ ಅನುಭವ ಹೆಚ್ಚಾಗಿ, ಜ್ಞಾನ ಮೂಡಿ, ಬದುಕಿನ ನಶ್ವರತೆಯನ್ನು ಮನಗಂಡು, ಜಗತ್ತಿನ ಮೇಲಿನ ಮಮತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳುತ್ತಾ, ಅದರಿಂದ ಆತ್ಮ ವಿಕಾಸದತ್ತ ತನ್ನ ಗಮನ ಹರಿಸ ತೊಡಗಿದ, ಎನ್ನುವುದೇ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 408,
    english:
      "Head to head (person to person), generation to generation, wave to a wave humanity is passing on information (traditions and customs) just like post man. This is happening since every epoch of time since the beginning. Individuals may perish. But humanity continues like a endless stream of elixir.  - Mankutimma",
    kannada:
      "ತಲೆಯಿಂದ ತಲೆಗೆ, ಪೀಳಿಗೆಯಿಂದ ಪೀಳಿಗೆಗೆ ।\nಅಲೆಯಿಂದಲಲೆಗೆ ಟಪ್ಪೆಯ ಚಾರನಂತೆ ॥\nಇಳಿಯುತಿದೆ ಯುಗದಿಂದ ಯುಗಕೆ ಮಾನವಧರ್ಮ ।\nನಿಲದಮೃತಧಾರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೮ ॥",
    kannada_explanation:
      "ಒಂದು ಅಲೆ ಮತ್ತೊಂದು ಅಲೆಗೆ ಕಾರಣವಾಗುವಂತೆ, ಅಂಚೆ ಹಂಚುವವ ತನ್ನ ಕೈಲಿರುವ ಅಂಚೆಯನ್ನು ಹಲವಾರು ಮನೆಗಳಿಗೆ ತಲುಪಿಸುವಂತೆ, ಪ್ರಕೃತಿಯಲ್ಲಿ ಅರಳಿದ ಮನುಷ್ಯ, ತಾನು ರೂಢಿಸಿಕೊಂಡ ವಿಚಾರ, ಅಚಾರ,ಧರ್ಮ,ವಿಜ್ಞಾನ,ಕಲೆ ಮುಂತಾದವುಗಳನ್ನು ತಲೆಮಾರಿನಿಂದ ತಲೆಮಾರಿಗೆ ಪೀಳಿಗೆಯಿಂದ ಪೀಳಿಗೆಗೆ, ಹಂಚುತ್ತಾ ‘ಅರಿವಿನ ಮತ್ತು ಜ್ಞಾನದ ಅಮೃತಧಾರೆ’ಯನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಯ ವಿಚಾರ ಶಕ್ತಿಗೆ ಕಾರಕನಾಗುತ್ತಾನೆ ಎಂಬ ವಿಷಯವನ್ನು ಅರುಹುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 409,
    english:
      "The story of mankind is beautiful poetry composed  by the cosmic spirit. In this poem we see the rise of the soul (self). What desires! What courage! What antics! What beautiful experiences! (as comparable to the vedas)  - Mankutimma",
    kannada:
      "ಮಾನುಷದ ಚರಿತೆ ಪರಸತ್ತ್ವಸಾಕ್ಷಾತ್ಕವಿತೆ ।\nಕಾಣಿಪುದದಾತ್ಮಸ್ವಭಾವದುದ್ಗಮವ ॥\nಏನಾಶೆ! ಯೇನು ಸಾಹಸ! ವೇನು ಭಂಗಗಳು! ।\nಆನುಭವವೇದವದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೦೯ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಮಾನವರ ಅಸ್ತಿತ್ವದ ಚರಿತ್ರೆಯು ಪರಮ ಚೇತನದ ಆತ್ಮಚರಿತ್ರೆಯ ಕವಿತೆಯಂತಿದೆ. ಅದು ಅಭಿವೃದ್ಧ್ಯಾಭಿಮುಖವಾದ ಆತ್ಮದ ಸ್ವಭಾವವನ್ನು ತೋರುತ್ತದೆ. ಮನುಷ್ಯ ದೇಹವನ್ನು ಧರಿಸಿದ ಚೇತನದ ಆಸೆ, ಸಾಹಸ, ಪ್ರಯತ್ನ. ನಿರಾಸೆ ಮುಂತಾದ ಅನುಭವಗಳನ್ನು ಸಮಗ್ರವಾಗಿ ‘ಅನುಭವವೇದ’ವೆಂದು ಕರೆದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 410,
    english:
      "Provinces, states, empires, pontiffs, positions, religions, languages, skills and teachings have all come and gone in this flood of time. Only humanity stands constant. - Mankutimma",
    kannada:
      "ಜಾನಪದಗಳು ರಾಜ್ಯಸಾಮ್ರಾಜ್ಯಗಳು ಗುರು ।\nಸ್ಥಾನಗಳು ಧರ್ಮಗಳು ಭಾಷೆ ವಿದ್ಯೆಗಳು ॥\nಕಾಣಿಸದೆ ಸಾಗಿಹವು ಕಾಲಪ್ರವಾಹದಲಿ ।\nಮಾನವತೆ ನಿಂತಿಹುದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೦ ॥",
    kannada_explanation:
      "ಎಷ್ಟೋ ಗುಂಪುಗಳು ಜಾನಪದಗಳು, ರಾಜ್ಯಗಳು, ಸಾಮ್ರಾಜ್ಯಗಳು, ಗುರುಗಳು, ಗುರುಪೀಠಗಳು, ಧರ್ಮಗಳು, ಭಾಷೆಗಳು, ವಿದ್ಯೆಗಳು, ಹುಟ್ಟಿ ಕೆಲಕಾಲ ಇದ್ದು ಬದಲಾಗಿ ತನ್ನ ಮೂಲ ಸ್ವರೂಪವನ್ನು ಕಳೆದುಕೊಂಡು ಕಾಲ ಪ್ರವಾಹದಲ್ಲಿ ಕಾಣೆಯಾಗಿವೆ. ಆದರೆ ಅದನ್ನೆಲ್ಲ ಕಂಡ ಕಂಡುಕೊಂಡ,ಅನುಭವಿಸಿದ ಮಾನವತೆ ಮಾತ್ರ ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಿಂತಿದೆ ಎನ್ನುವುದೇ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 411,
    english:
      "Time flows incessantly. In this flow man made artifacts have all gone floating and drifting - cities, countries, forts, castes, moral constructs, wisdom. Mankind alone stands. - Mankutimma",
    kannada:
      "ತೆರಪನರಿಯದೆ ಪರಿವ ಕಾಲಪ್ರವಾಹದಲಿ ।\nಪುರುಷರಚಿತಗಳೆನಿತೊ ತೇಲಿಹೋಗಿಹವು ॥\nಪುರ ರಾಷ್ಟ್ರ ದುರ್ಗಗಳು, ಮತ ನೀತಿ ಯುಕ್ತಿಗಳು ।\nಪುರುಷತನ ನಿಂತಿಹುದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೧ ॥",
    kannada_explanation:
      "ಬಿಡುವಿಲ್ಲದೆ ಅವ್ಯಾಹತ ಹರಿಯುವ ಕಾಲ ಪ್ರವಾಹದಲ್ಲಿ ಮನುಷ್ಯ ರಚಿಸಿದ ರಚನೆಗಳು ಲೆಕ್ಕವಿಲ್ಲದಷ್ಟು ತೇಲಿಹೋಗಿವೆ. ಊರುಗಳು, ರಾಷ್ಟ್ರಗಳು, ಮತಗಳು, ನೀತಿಗಳು, ಯುಕ್ತಿಗಳು ಹೀಗೆ ಎಷ್ಟೋ!!!!. ಪುರುಷನ ರಚಿತವೆಲ್ಲಾ ತೇಲಿಹೋಗಿದ್ದರೂ, ಪುರುಷ ಮತ್ತು ಅವನ ಪುರುಷತನ ಇನ್ನೂ ಹಾಗೆ ನಿಂತಿಹುದು, ಎನ್ನುವುದೇ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 412,
    english:
      "A river flows from its birthplace to the sea. All along, it collects qualities of the earth and giving the earth some of its own qualities - forever changing. It is the same with qualities of humanity. They keep changing in every generation. One can not keep count or track of how the changes happen. - Mankutimma",
    kannada:
      "ಜನಿಸಿದೆಡೆಯಿಂ ಕಡಲವರೆಗಮಡಿಯಡಿ ನೆಲದ ।\nಗುಣದ ಕೊಳ್ಳುತ ಕೊಡುತ ಪೊನಲು ಮಾರ್ಪಡುಗಂ ॥\nಮನುಜಸಂತಾನದಲಿ ಗುಣದವತರಣವಂತು ।\nಗುಣಿಪುದೆಂತಾ ತೆರನ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೨ ॥",
    kannada_explanation:
      "ತನ್ನ ಜನ್ಮ ಸ್ಥಾನದಿಂದ ಕಡಲ ಸೇರುವವರೆಗೂ ತಾನು ಹರಿಯುವ ನೆಲದ ಗುಣವನ್ನು ಪಡೆದುಕೊಳ್ಳುತ್ತಾ, ತಾ ಹೊತ್ತು ತಂದದ್ದನ್ನು ಹರಿವೆಡೆಯಲ್ಲ ಕೊಡುತ್ತಾ ತಾನು ಬದಲಾಗುತ್ತಾ ಹರಿವ ‘ನದಿ’ ಯಂತೆ, ಮನುಜಕುಲವೂ ತನ್ನ ಬದುಕಿನ ಪ್ರವಾಹದಲ್ಲಿ ಹಿಂದಿನಿಂದ ತಾನು ಹೊತ್ತು ತಂದು ಗುಣಗಳನ್ನು ಇಲ್ಲಿ ಕೆಲವನ್ನು ಗಳಿಸಿ, ಕೆಲವನ್ನು ಹಂಚಿ, ಕೆಲವನ್ನು ಉಳಿಸಿ, ಕೆಲವನ್ನು ಹೊತ್ತು ಹೋಗುತ್ತಿರುವುದೇ ಅದರ ಗುಣವಾಗಿರುವಾಗ, ಅದನ್ನು ಲೆಕ್ಕಹಾಕುವುದು ಹೇಗೆ ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ನಮ್ಮ ಮುಂದಿಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 413,
    english:
      "No one in this world is entirely male or entirely female. All of us are like Lord Shiva a mixture of both male and female qualities. There will always be soft woman-like qualities in a man. There will be harsh man-like qualities in every woman. The mix of these qualities twist our mind in various ways. - Mankutimma",
    kannada:
      "ಬರಿಯ ಹೆಣ್ ಬರಿಯ ಗಂಡೆಂಬುದಿಳೆಯೊಳಗಿಲ್ಲ ।\nಬೆರಕೆಯಲ್ಲರುಮರ್ಧನಾರೀಶನಂತೆ ॥\nನರತೆಯಣು ನಾರಿಯಲಿ ನಾರೀತ್ವ ನರನೊಳಣು ।\nತಿರಿಚುತಿರುವುದು ಮನವ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೩ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿಯಲ್ಲಿ ಕೇವಲ ಗಂಡು ಅಥವಾ ಕೇವಲ ಹೆಣ್ಣು ಎನ್ನುವುದಿಲ್ಲ. ಎಲ್ಲರೂ ಅರ್ಧನಾರೀಶ್ವರರಂತೆ ಮಿಶ್ರಗುಣಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಗಂಡಿನಲ್ಲಿ ಹೆಣ್ಣಿನ ಗುಣಗಳ ಅಣುಗಳೂ ಮತ್ತು ಹೆಣ್ಣಿನಲ್ಲಿ ಗಂಡಿನ ಗುಣಗಳ ಅಣುಗಳೂ ಸೇರಿಕೊಂಡು ಎಲ್ಲರ ಮನಗಳಲ್ಲೂ ಈ ದ್ವಿ ಗುಣಗಳ ಮಿಶ್ರಣವೇ ಇದೆ ಎಂದು ವಿಮರ್ಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 414,
    english:
      "Who is to explain (measure) the bondings that strings a man and woman together? The love, the hatred are feelings that are all confusing at the very depth. One can not be distinguished from another. But, providence will keep a detailed account of all our actions. It simply does not let us know the fact. - Mankutimma",
    kannada:
      "ಅಳೆವನಾರ್ ಪೆಣ್ಗಂಡುಗಳನೆಳೆವ ನೂಲುಗಳ? ।\nಕೆಳೆಪಗೆಗಳೆಲ್ಲವಾಳದಲಿ ಬಲು ತೊಡಕು ॥\nಇಳೆಯ ಋಣಗಳ ಲೆಕ್ಕವಿಹುದು ವಿಧಿಯಕ್ಕರದಿ ।\nತಿಳಿಯಗೊಡನದ ನಮಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೪ ॥",
    kannada_explanation:
      "ಹೆಣ್ಣು ಗಂಡುಗಳ ಪರಸ್ಪರ ಸೆಳೆವ ದಾರಗಳನ್ನು ಅಳೆವುದುಯಾರು? ಅದು ಸಾಧ್ಯವಿಲ್ಲ. ಪರಸ್ಪರ ಸ್ನೇಹ ಅಥವಾ ದ್ವೇಷಗಳ ಕಾರಣದ ‘ಆಳ’ ಬಹಳ ಮತ್ತು ಅಬೇಧ್ಯ. ಪ್ರತಿ ಜೀವಿಗೂ ಇರುವ ಈ ಭೂಮಿಯ ಋಣದ ಲೆಕ್ಕವನ್ನು ವಿಧಿ ಸರಿಯಾಗಿ ಬರೆದಿಟ್ಟಿರುತ್ತಾನೆ. ಅದರ ಪ್ರಕಾರ ಎಲ್ಲ ನಡೆಯುತ್ತದೆ. ಆದರೆ ಆ ವಿಧಿ ನಮಗೆ ಅದನ್ನು ತಿಳಿಯಗೊಡಲಾರ ಎಂದು ಮಾನವರ ಪರಸ್ಪರ ಸಂಬಂಧದ ಸೂಕ್ಷ್ಮತೆಯನ್ನು ವಿಶ್ಲೇಷಣೆಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 415,
    english:
      "Providence binds beings from some place to another in a different (far away) place. If people resist, then it will let them both by themselves to fight it out between them. This act of fate has not logic and does not seem to help the people involved. It is like throwing a handful of sand in a sweet dish (mostly sweet, but cannot eat because of the sand). - Mankutimma",
    kannada:
      "ಎಲ್ಲಿಯದನೊ ಅದೆಲ್ಲಿಯದಕೋ ಹೆಣೆಯುವನು ।\nಒಲ್ಲೆವೆನೆ ನೀವೆ ಕಿತ್ತಾಡಿಕೊಳಿರೆನುವನ್ ॥\nಬೆಲ್ಲದಡುಗೆಯಲಿ ಹಿಡಿ ಮರಳನೆರಚಿರಿಸುವನು ।\nಒಳ್ಳೆಯುಪಕಾರಿ ವಿಧಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೫ ॥",
    kannada_explanation:
      "ವಿಧಿ, ಎಲ್ಲಿಯೋ ಇರುವುದಕ್ಕೆ ಮತ್ತೆಲ್ಲಿಯೋ ಇರುವುದನ್ನು ನಂಟುಹಾಕಿಸುತ್ತಾನೆ. ನಾವು ಅಕಸ್ಮಾತ್ ವಿಧಿ ಲಿಖಿತವನ್ನು ಧಿಕ್ಕರಿಸಿ, ನಮ್ಮ ಸ್ವಂತ ಬುದ್ಧಿ ಉಪಯೋಗಿಸಿ ಏನೋ ಮಾಡಲು ಹೋಗಿ ಪರದಾಟದಲ್ಲಿ ಸಿಕ್ಕಿಹಾಕಿಕೊಂಡರೆ, ‘ನೀನೇ ಹೋರಾಡಿಕೋ’ ಎಂದು ಸುಮ್ಮನಿರುತ್ತಾನೆ. ನಾವು ಆಸೆಪಟ್ಟದ್ದನ್ನು ಕೆಡಿಸಿ \n ‘ಸಿಹಿಯಾದ ಪಾಕದಲ್ಲಿ ಮರಳನ್ನು ಎರಚುತ್ತಾನೆ’ ಇವನು ನಮಗೆ ಬಹಳ ಒಳ್ಳೆಯ ಉಪಕಾರಿ ಎಂದು ನಮ್ಮ ಬದುಕುಗಳಲ್ಲಿ ವಿಧಿಯಾಟವನ್ನು ಕುಹಕವಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 416,
    english:
      "Did Shoorpanakha not take the form of a delicate damsel? Did Putani whose body was full of poison not appear to be very pleasing (as harmless as the eye-lashes) to the eyes? Can a smile not hide devious intention? The whole bodily appearance is nothing but a lie. - Mankutimma",
    kannada:
      "ಕುಸುಮಕೋಮಲಗಾತ್ರ ಶೂರ್ಪಣಖಿಗರಿದಾಯ್ತೆ? ।\nವಿಷದ ಪೂತನಿ ನಯನಪಕ್ಷ್ಮದೊಳಗಿರಳೆ? ॥\nಮುಸಿನಗುವಿನೊಳಗಿರಲಶಕ್ಯವೆ ಪಿಶಾಚಿಕೆಗೆ ।\nಮೃಷೆಯೊ ಮೈಬೆಡಗೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೬ ॥",
    kannada_explanation:
      "ರಾಮಾಯಣದ ಶೂರ್ಪಣಖಿಗೆ ರಾಮನನ್ನು ಕೀಟಲೆ ಮಾಡಲು ಸುಂದರ ರೂಪವನ್ನು ಧರಿಸಲು ಕಷ್ಟವೇನೂ ಆಗಲಿಲ್ಲ. ಹಾಗೆಯೇ ಕೃಷ್ಣನನ್ನು ಕೊಲ್ಲಲು ಬಂದ ಪೂತನೆಯು ತನ್ನ ದೇಹವೆಲ್ಲಾ ವಿಷವಾದರೂ, ಮೋಹನ ರೂಪವನ್ನು ಧರಿಸಿ ಬರಲಿಲ್ಲವೇ? ಪಿಶಾಚಿಗೆ ಮುಗುಳುನಗೆ ಸೂಸುವುದು ಆಶಕ್ಯವಲ್ಲ. ಹಾಗಾಗಿ ಹೊರಗಿನ ರೂಪವೆಲ್ಲ ಕೇವಲ ಕಪಟ, ಭ್ರಮೆ ಎಂದು ಹೊರ ರೂಪ ಮತ್ತು ಅಂತರ್ಯದ ವ್ಯತ್ಯಾಸಗಳನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 417,
    english:
      "What has this creator made? He has kept dirty (mixed with waste and mire) water in a golden pot. He has given bad smell (of meat and death) to a beautiful thing. He has given love razor sharp edges. Oh! What an irony! - Mankutimma",
    kannada:
      "ಹೇಮಕುಂಭದಿ ಕೊಳಚೆರೊಚ್ಚುನೀರ್ಗಳ ತುಂಬಿ ।\nರಾಮನೀಯಕದೊಳಿಟ್ಟಾಮಗಂಧವನು ॥\nಪ್ರೇಮಪುಷ್ಪಕೆ ಮೊನಚು ಗರಗಸವನಂಚಿರಿಸಿ ।\nಏಂ ಮಾಡಿದನೊ ಬೊಮ್ಮ! - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೭ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿಯಲ್ಲಿ ಬಂಗಾರದಂತ ಅಮೂಲ್ಯ ವಸ್ತುವಿನೊಳಗೆ ಕೊಳಚೆ ರೊಚ್ಚೆಯಂತಹ ಹೊಲಸನ್ನು ತುಂಬಿ, ಅತೀ ಸುಂದರವಾದ ಪ್ರಾಣಿಯೊಳಗೆ ಕೀವು, ಮಲ ಮುಂತಾದ ದುರ್ನಾತದ ವಸ್ತುಗಳನ್ನು ಸೇರಿಸಿ, ದೂರದಿಂದ ಸುಂದರವಾಗಿ ರಮಣೀಯವಾಗಿ ಕಾಣುವ ಹೂವಿನ ಕಾಂಡದಲ್ಲಿ ಮೊನಚಾದ, ಚುಚ್ಚುವ ಮುಳ್ಳುಗಳನ್ನು ಇಟ್ಟು, ಈ ಜಗತ್ತನ್ನು ಏಕೆ ಸೃಷ್ಟಿಸಿದನೋ ಆ ಪರಬ್ರಹ್ಮ ಎಂದು ಪರಸ್ಪರ ವಿರೋಧಗಳ,ಸಹ ವಾಸ್ತವ್ಯವನ್ನು ವಿಶ್ಲೇಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 418,
    english:
      "There is no lady in this world who does not have few qualities of Kaikeyi and Satyabhama. This world is growing only because of them. It is creator's plot to encourage such behavior in people so that the world can move on. To deal with that, one needs to recognize it, laugh about it and have a little patience. - Mankutimma \n\n[Translator's note: Kaikeyi is the step mother of Rama who forced him into exile so that her son Bharatha could become the king of Ayodhya. It is a different matter that Bharatha himself refused to be crowned. Satyabhama is one of the many wives that Lord Krishna had. Legend has that she was too possessive about him and was jealous of anyone else who spent time with him.]",
    kannada:
      "ಕೈಕೇಯಿ ಸತ್ಯಭಾಮೆಯರಂಶವಿರದ ಪೆಣ್ ।\nಲೋಕದೊಳಗಿರಳು; ಬೆಳೆವುದು ಲೋಕವವರಿಂ ॥\nಸಾಕಿ ಸಲಹುವ ಮತ್ಸರವದು ಸೃಷ್ಟಿಯುಪಾಯ ।\nಬೇಕದಕೆ ನಗು ಸಹನೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೮ ॥",
    kannada_explanation:
      "ಕೈಕೇಯಿ ಮತ್ತು ಸತ್ಯಭಾಮೆಯರ ಗುಣಗಳ ಅಂಶವಿರದ ಹೆಣ್ಣು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇರಲು ಸಾಧ್ಯವಿಲ್ಲ. ಅಂತಹವರಿಂದಲೇ ಜಗತ್ತು ವೃದ್ಧಿಯಾಗುತ್ತದೆ. ಹೆಣ್ಣಿನಲ್ಲಿ ಅಂತಹ ಮಮತೆ, ಸ್ವಾರ್ಥ, ಮತ್ತು ಮತ್ಸರದ ಭಾವನೆಗಳು ಈ ಜಗತ್ತಿನ ಬೆಳವಣಿಗೆಗೆ ಅಗತ್ಯ ಮತ್ತು ಇದು ಸೃಷ್ಟಿಯಿಂದ ಬಂದಸಹಜವಾದ ಗುಣ. ಇಂತಹ ಗುಣಗಳಿಗೆ ತೀವ್ರ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡದೆ ಸಹನೆಯಿಂದ ನಕ್ಕು ಮನವನ್ನು ಹಗುರಾಗಿಸಿಕೊಳ್ಳಬೇಕು ಎಂದು ಸೂಚಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 419,
    english:
      "A small plant will sprout new leaves every day. Fresh water flows out of a spring without stopping. Young children become wiser and grow up every day. Watching all this in on this earth is itself fun. - Mankutimma",
    kannada:
      "ಎಳೆಯ ತರು ದಿನದಿನವು ಹೊಸತಳಿರ ತಳೆವಂತೆ ।\nತಿಳಿನೀರು ಚಿಲುಮೆಯಲಿ ನಿಲದುಕ್ಕುವಂತೆ ॥\nಎಳೆ ಮಕ್ಕಳೊಳು ತಿಳಿವು ಮೊಳೆತು ಬೆಳೆವುದು ನೋಡು ।\nಇಳೆಯೊಳಗದೊಂದು ಸೊಗ - ಮಂಕುತಿಮ್ಮ ॥ ೪೧೯ ॥",
    kannada_explanation:
      "ಒಂದು ಚಿಕ್ಕ ಗಿಡ ಪ್ರತಿನಿತ್ಯ ಹೊಸ ಚಿಗುರನ್ನು ತಳೆವಂತೆ, ಭೂಮಿಯಲ್ಲಿರುವ ನೀರ ಚಿಲುಮೆಯಲ್ಲಿ ನಿಲ್ಲದೆ ತಿಳಿನೀರುಕ್ಕುವಂತೆ, ಎಳೆಯ ಮಕ್ಕಳಲ್ಲಿ ಪ್ರತಿನಿತ್ಯ ಹೊಸತನ್ನು ಅರಿತುಕೊಳ್ಳುವಿಕೆ ನಿರಂತರವಾಗಿ ನಡೆದೇ ಇರುತ್ತದೆ. ಈ ನಿರಂತರ ಅರಿತುಕೊಳ್ಳುವಿಕೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಬಹಳ ಸೊಗಸಾದ ವಿಚಾರ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 420,
    english:
      "Don't be worried about the children's future. Fate will bring strange things beyond your control into their lives. Were the children of either Pandu or Kuru (Kaurava and brothers) able to enjoy the kingdom in peace? Each one will find his own way. - Mankutimma",
    kannada:
      "ಮಕ್ಕಳ ಭವಿಷ್ಯಕ್ಕೆ ಕಕ್ಕುಲಿತೆಗೊಳಬೇಡ ।\nಪಕ್ಕಾಗುವುದು ಭಾಗ್ಯವೆಂತೆಂತೊ ಜಗದಿ ॥\nದಕ್ಕಿತೇಂ ಕುರುಪಾಂಡುತನಯರ್ಗೆ ರಾಜ್ಯಸುಖ? ।\nದಿಕ್ಕುವರಿಗವರವರೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೦ ॥",
    kannada_explanation:
      "ಕೌರವರಿಗೂ ಪಾಂಡವರಿಗೂ ರಾಜ್ಯಸುಖ ಸಿಗಲೇ ಇಲ್ಲ.ಅವರವರು ಪಡೆದುಕೊಂಡು ಬಂದ ಭಾಗ್ಯ ಅವರವರಿಗೆ ಜಗತ್ತಿನಲ್ಲಿ ಖಂಡಿತ ಸಿಗುತ್ತದೆ. ಹಾಗಾಗಿ, ಮಕ್ಕಳ ಭವಿಷ್ಯವ ಕುರಿತು ಅತಿಯಾದ ಅಕ್ಕರೆ, ಅಪೇಕ್ಷೆ ಪಡಬೇಡ. ಅವರವರ ದಿಕ್ಕು ಅವರವರಿಗೆ ಇರುತ್ತದೆ ಎಂದು ಮಕ್ಕಳ ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಅತಿಯಾಗಿ ಚಿಂತಿಸುವ ಮಕ್ಕಳ ತಂದೆ ತಾಯಂದಿರಿಗೆ ಒಂದು ಸ್ಪಷ್ಟ ಸೂಚನೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 421,
    english:
      "Who is able to escape the attachment towards their children? Even the omniscient sage Vyasa could not control himself when his son was separated from him. The attachment takes birth in one's heart naturally. It brings tears to one's eyes as soon as there is separation. One must not take these feelings too strongly. - Mankutimma",
    kannada:
      "ತನುಭವವ್ಯಾಮೋಹ ಮುಸುಕಿತಾ ವ್ಯಾಸನಂ? ।\nಜನಿಪುದದು ಪ್ರಕೃತಿತಂತ್ರದೆ ಹೃದಯತಲದೊಳ್ ॥\nಕ್ಷಣಮಾತ್ರಮಾನುಮದು ಕಣ್ಣೀರ ಬರಿಸುವುದು ।\nಗಣಿಸಬೇಡದನು ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೧ ॥",
    kannada_explanation:
      "ಮಹಾನ್ ಜ್ಞಾನಿ ವ್ಯಾಸನನ್ನೂ ಪುತ್ರ ವ್ಯಾಮೋಹ ಬಿಡಲಿಲ್ಲ. ಈ ವ್ಯಾಮೋಹ ಎನ್ನುವುದು ಪ್ರಕೃತಿಯಿಂದ ಸಹಜವಾಗಿ ಹೃದಯಾಂತರಾಳಕ್ಕೆ ಬಂದು, ಎಂತಹ ಗಟ್ಟಿ ಮನುಷ್ಯನಿಗೂ, ಆ ಕ್ಷಣಕ್ಕೆ ಕಣ್ಣೀರ ತರಿಸುತ್ತದೆ. ಅದನ್ನು ಲೆಕ್ಕಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳಬೇಡ ಎಂದು ಒಂದು ಉಪದೇಶವನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 422,
    english:
      "Love and disappointment sometimes create a storm in our minds and disturb our peace. It is good. When it pours all night with strong winds, the following morning will be bright and pleasant - Mankutimma",
    kannada:
      "ಅನುರಾಗದುಃಖಂಗಳೊಮ್ಮೊಮ್ಮೆ ಬಿರುಬೀಸಿ ।\nಮನದಿ ತೆರೆಗಳ ಕುಲುಕಿ ಕಡೆಯುವುದುಮೊಳಿತು ॥\nಘನ ವರ್ಷ ಬಿರುಗಾಳಿ ಬಡಿಯಲಿರುಳೊಳ್ ನೆಲನ ।\nದಿನದ ಸೊಗಸಿಮ್ಮಡಿಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೨ ॥",
    kannada_explanation:
      "ರಾತ್ರಿಯಲ್ಲಾ ಘನವಾದ ಮಳೆ ಸುರಿದು ಮುಂಜಾನೆ ಮಳೆ ನಿಂತ ನಂತರದ ಬೆಳಗು ಎಷ್ಟು ಆಹ್ಲಾದಕರವಾಗಿರುವ ರೀತಿ, ಮನಸ್ಸಿನಲ್ಲಿ ಅಡಗಿ ಕುಳಿತ ಅನುರಾಗ, ಪ್ರೀತಿ, ಕೋಪ, ದುಗುಡ, ದುಃಖಗಳಂತಹ ಭಾವಗಳು ಹೃದಯದಲ್ಲೇ ಮಂಥನವಾಗಿ ಒಮ್ಮೊಮ್ಮೆ ಹೊಮ್ಮಿ ಹೊರ ಬಂದರೆ ಒಳ್ಳೆಯದು. ಏಕೆಂದರೆ ಅದು ಹೊರಬಂದ ನಂತರ ಮನಸ್ಸು ನಿರಾಳವಾಗುತ್ತದೆ ಎನ್ನುವ ಅರ್ಥವನ್ನು ಈ ಮುಕ್ತಕದಲ್ಲಿ ನಮಗೆ ಕೊಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 423,
    english:
      "It is not wrong to succumb to feelings and emotions. But one must not lose the balance of wisdom and intellect. If the feelings are pure and free from innate ignorance, attachment and love then they will cleanse your heart. - Mankutimma",
    kannada:
      "ಭಾವರಾಗೋದ್ರೇಕ ತಾನೆ ತಪ್ಪೇನಲ್ಲ ।\nಧೀವಿವೇಕದ ಸಮತೆಯದರಿನದಿರದಿರೆ ॥\nಸ್ವಾವಿದ್ಯೆಯಾ ಮೋಹ ಮಮತೆಯದನಂಟದಿರೆ ।\nಪಾವನವೊ ಹೃನ್ಮಥನ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೩ ॥",
    kannada_explanation:
      "ಭಾವುಕತೆ,ಕೋಪ,ಉದ್ರೇಕ ಮುಂತಾದ ಭಾವಗಳು ಇರಲಿ ತಪ್ಪೇನಿಲ್ಲ. \n ಆದರೆ ಆ ಭಾವ ಉತ್ಕಟತೆ ಬುದ್ಧಿಯ ಸಮತೋಲನವನ್ನು ವಿಚಲಿತಗೊಳಿಸಿ ಕದಡದೆ ಇದ್ದರೆ ಅಷ್ಟೇ ಸಾಕು. ಮನಸ್ಸಿನಲ್ಲಿ ನಡೆಯುವ ಎಲ್ಲ ವ್ಯಾಪಾರವೂ ಸಹಜವಾಗಿ ಇರಲಿ ಆದರೆ ನಾವು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಕಲಿತ ವಿದ್ಯೆ ಮತ್ತು ಅಂಟಿಸಿಕೊಂಡ ವ್ಯಾಮೋಹ ಮತ್ತು ಮಮಕಾರಗಳ ಮನೋವ್ಯಾಪಾರದ ಮೇಲೆ ತನ್ನ ಪ್ರಭಾವ ಬೀರದೆ ಇದ್ದರೆ ಮನಸ್ಸು ಬುದ್ಧಿಗಳು ಶುದ್ಧವಾಗಿರುತ್ತವೆ, ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 424,
    english:
      "In a dark night when the sky is dark, what is the use of a hundreds of stars? A traveler will seek not the light from stars, but the light from a home where he can be safe. Let us have faith in a God who is far away. But for day-to-day counseling one needs a friend. That's all the poor soul is asking for. - Mankutimma",
    kannada:
      "ಕಾರಿರುಳೊಳಾಗಸದಿ ತಾರೆ ನೂರಿದ್ದೇನು? ।\nದಾರಿಗನ ಕಣ್ಗೆ ಬೇಕೊಂದು ಮನೆಬೆಳಕು ॥\nದೂರದಾ ದೈವವಂತಿರಲಿ, ಮಾನುಷಸಖನ ।\nಕೋರುವುದು ಬಡಜೀವ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೪ ॥",
    kannada_explanation:
      "ಕಗ್ಗತ್ತಲ ರಾತ್ರಿಯಲ್ಲಿ ದಾರಿಗನಿಗೆ ದಾರಿತೋರಲು, ಆಕಾಶದಲ್ಲಿ ನೂರಾರು ನಕ್ಷತ್ರಗಳಿದ್ದರೇನು? ಅವು ಅವನಿಗೆ ದಾರಿಯನ್ನು ತೋರಲು ಸಾಧ್ಯವೇ? ಆದರೆ ದಾರಿಯಲ್ಲಿರುವ ಯಾವುದೋ ಮನೆಯ ಬೆಳಕು ಅವನಿಗೆ ದಾರಿ ತೋರುತ್ತದೆ. ಹಾಗೆಯೇ ನಾವು ಕಾಣದ, ನಮ್ಮಿಂದ ಬಹಳ ದೂರದಲ್ಲಿರುವ ಮತ್ತು ಕಷ್ಟಸಾಧ್ಯನಾದ ಆ ದೈವಕ್ಕಿಂತ, ನಮ್ಮ ಪಕ್ಕದಲ್ಲಿ ನಿಂತು ‘ನಿನಗೆ ನಾನಿದ್ದೇನೆ’ ಎನ್ನುವಂತಹ ಒಬ್ಬ ಮಾನವನ ಸ್ನೇಹವನ್ನು ಕೋರುತ್ತದೆ ಮಾನವ ಜೀವ ಎಂದು ಮನುಷ್ಯನ ಆಕಾಂಕ್ಷೆಗಳ ಬಗ್ಗೆ ಬರೆಯುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 425,
    english:
      "It is often asked of us to devote all our love to Him (God). But how is that easy? He has not shown himself ever. He has not spoken to us. Human beings always find it easy to love those and long for whom they can see and connect to. - Mankutimma",
    kannada:
      "ಹರಿಗೆ ನಿನ್ನನುರಾಗವೆಲ್ಲವನು ಸಲ್ಲಿಸೆನೆ ।\nಮರುನುಡಿಯ ನುಡಿವನೇನ್ ಒಡಲ ತೋರದನು? ॥\nಪರಿತಪಿಸುವುದು ಜೀವ ಜೀವಸರಸವನೆಳಸಿ ।\nನರಧರ್ಮಸೂಕ್ಷ್ಮವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೫ ॥",
    kannada_explanation:
      "ಆ ‘ಹರಿ’ ಗೆ ನಿನ್ನ ಪ್ರೀತಿಪೂರ್ವಕವಾದ ಭಕ್ತಿಯನ್ನು ಸಲ್ಲಿಸು! ಎಂದರೆ, ತನ್ನ ರೂಪವನ್ನೇತೋರದಅವನು ಪ್ರತ್ಯುತ್ತರನೀಡುವನೇನು? ಈ ಜಗತ್ತಿನಲ್ಲಿ ಜನಿಸಿದ ಜೀವ ಪ್ರತಿಸ್ಪಂದಿಸುವ ಮತ್ತೊಂದು ಜೀವವನ್ನು ಸೇರಲು, ಪ್ರೀತಿ ತೋರಲು, ಸರಸವಾಡಲು, ಹಾತೊರೆಯುವುದು. ಇದು ನರರ ಸ್ವಭಾವದ ಸೂಕ್ಷ್ಮವು, ಎಂದು ಮನುಷ್ಯನ ಪರಸ್ಪರ ಆಕರ್ಷಣೆಯ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 426,
    english:
      "When a person does not get enough love he diverts all his love towards a cat, a parrot, a monkey or a dog. He listens to the sounds they make and finds solace in it. Everyone longs to be spoken to - at least by pets. - Mankutimma",
    kannada:
      "ಮನುಜರೂಪದಿನಾದರವನು ಪಡೆಯದ ಹೃದಯ- ।\nವನುರಾಗವನು ಬಿಡಾಲಕೊ ಶುಕಕೊ ಕಪಿಗೊ ॥\nಶುನಕಕೋ ಸುರಿದದರ ಮಾರ್ದನಿಯನಾಲಿಪುದು ।\nತಣಿವು ಜೀವಸ್ವರದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೬ ॥",
    kannada_explanation:
      "ಹಾಗೆ ಮತ್ತೊಂದು ಜೀವಿಯಿಂದ ಮಾನುಷ ಪ್ರೀತಿಗೆ ಹಾತೊರೆಯುವವನಿಗೆ, ಅನ್ಯ ಮನುಷ್ಯರಿಂದ ಆದರ ಪ್ರೀತಿಗಳು ಲಭ್ಯವಾಗದಿದ್ದಲ್ಲಿ, ಆ ಪ್ರೀತಿಯನ್ನು ಅವನು ತಾನು ಸಾಕಿದ ಬೆಕ್ಕಿಗೋ, ಗಿಣಿಗೋ,ಕೋತಿಗೋ ಅಥವಾ ನಾಯಿಗೋ ತೋರಿದ್ದಲ್ಲಿ ಆ ಪ್ರಾಣಿಗಳು ಪ್ರೀತಿಯ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿದಾಗ, ಮತ್ತೊಂದು ಜೀವ ಸ್ವರವನ್ನು ಆಲಿಸಿ ಈ ಜೀವವೂ ಸಾಂತ್ವನವನ್ನು ಪಡೆಯುತ್ತದೆ ಎಂದು ಜೀವ ಜೀವಕ್ಕಿರುವ ಪರಸ್ಪರ ಪ್ರೀತಿಯ ಸ್ಪಂದನದ ವಿಷಯವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗರುಹಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 427,
    english:
      "Everyone is bit by this love bug. Its an addiction. They want to show their love to others - as a mother, as a father, as a husband, as a wife, as a brother, as a son or as a friend. - Mankutimma",
    kannada:
      "ಮಾತೆವೊಲೊ ಪಿತನವೊಲೊ ಪತಿಯವೊಲೊ ಸತಿಯವೊಲೊ ।\nಭ್ರಾತಸುತಸಖರವೊಲೊ ಪಾತ್ರವೊಂದಕೆ ತಾಂ ॥\nಕಾತರಿಸುತಿಹುದು ತನ್ನೆಲ್ಲವನು ಮುಡುಪುಕುಡೆ ।\nಪ್ರೀತಿಯ ಹುಚ್ಚು ಚಟ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೭ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯ ತನ್ನದನ್ನು ಪರರಿಗೆ ಕೊಡಲು ಮತ್ತು ಪರರಿಂದ ಏನಾದರೂ ಪಡೆಯಲು ಪ್ರೀತಿ ಪ್ರೇಮಗಳ ಸಹಾಯವನ್ನು ಪಡೆದುಕೊಳ್ಳುತ್ತಾನೆ. ಹಾಗೆ ಕೊಡಲು ಅಥವಾ ಪಡೆದುಕೊಳ್ಳಲು ಅವನು ತಾಯಿಯ, ತಂದೆಯ ಪತಿಯ , ಪತ್ನಿಯ, ಸ್ನೇಹಿತನ, ಅಣ್ಣ-ತಮ್ಮಂದಿರ ಅಥವಾ ಅಕ್ಕತಂಗಿಯರ ಪಾತ್ರವನ್ನು ವಹಿಸುತ್ತಾನೆ(ಳೆ). ಪ್ರೀತಿ ತೋರುವುದು ಮನುಷ್ಯನಿಗೊಂದು ಚಟ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 428,
    english:
      "Love is two faced. If it is irritated, it becomes a demon. If it is satisfied, it is as peaceful as Lakshmi. It wanders about looking for someone who can return love. Love alone has the ability to do the supreme sacrifice of offering oneself to someone else. It attains peace thereby. - Mankutimma",
    kannada:
      "ಪ್ರೇಮ ಕನಲೆ ಪಿಶಾಚಿ, ತೃಪ್ತಿಯಾಂತಿರೆ ಲಕ್ಷ್ಮಿ ।\nಭ್ರಾಮಿಪುದದು ಪ್ರತಿಪ್ರೇಮಯಾಚನೆಯೊಳ್ ॥\nಮಾಮಕವಿದೆಂದಾವುದಕೊ ತಾನೆ ಬಲಿವೋಗಿ ।\nಶಾಮನವನೊಂದುವುದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೮ ॥",
    kannada_explanation:
      "ಪ್ರೇಮವು ಕೆರಳಿದರೆ ಅದು ತೃಪ್ತಿಯಾಗುವ ತನಕ ಮನಸ್ಸು ಪಿಶಾಚಿಯಂತೆ ಆಡುತ್ತದೆ. ಬಯಸಿದ ವಸ್ತು ಸಿಕ್ಕಿಬಿಟ್ಟರೆ ಸಂತಸಗೊಳ್ಳುತ್ತದೆ. ಪ್ರತಿಬಾರಿ ಪ್ರೇಮವುಕ್ಕಿದಾಗಲೂ ಮನಸ್ಸು ಒಂದು ಭ್ರಮೆಯಲ್ಲಿರುತ್ತದೆ. ತನ್ನದು ಎನ್ನುವ ವಸ್ತುವಿಗೆ ಪ್ರೇಮದಲಿ ಬಲಿಯಾಗಿ ಆ ವಸ್ತುವನ್ನು ಪಡೆದು ಮನಸ್ಸು ಶಮನಗೊಳ್ಳುತ್ತದೆ, ಎಂದು ಮಾರ್ಮಿಕವಾಗಿ ನಮ್ಮ ಆಸೆಗಳ, ಪ್ರೇತಿ, ಪ್ರೇಮಗಳನ್ನು ವಿಡಂಬನಾತ್ಮಕವಾಗಿ ವರ್ಣಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 429,
    english:
      "Love between people is not a bondage. If you stand alone, you are a mere half. If you connect and stand together, then you bloom. This love reduces the troubles by half and doubles the happiness. Such a love is God's gift to us. - Mankutimma",
    kannada:
      "ಬಂಧನವದೇನಲ್ಲ ಜೀವಜೀವಪ್ರೇಮ ।\nಒಂದೆ ನಿಲೆ ಜೀವವರೆ, ಬೆರೆತರಳೆ ಪೂರ್ಣ ॥\nದಂದುಗವನ್ ಅರಗೆಯ್ದು, ಸಂತಸವನಿಮ್ಮಡಿಪ ।\nಬಾಂಧವ್ಯ ದೈವಕೃಪೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೨೯ ॥",
    kannada_explanation:
      "ಒಂದು ಜೀವಕ್ಕೂ ಮತ್ತೊಂದು ಜೀವಕ್ಕೂ ಇರುವ ಪ್ರೇಮವೇನೂ ತೊಂದರೆ ಎನ್ನುವರ್ಥದಲ್ಲಿಬಂಧನವಲ್ಲ. ಜೀವಒಂದೇ ಇದ್ದರೆ ಜೀವನವು ಅರ್ಧವಾಗಿರುತ್ತದೆ. ಅಲ್ಲದೆ, ಇನ್ನೊಂದು ಜೀವದೊಡನೆ ಬೆರೆತು ಬಾಂಧವ್ಯ ಅರಳಿದರೆ, ಬದುಕು ಪರಿಪೂರ್ಣವಾಗುವುದು. ಬದುಕಿನಲ್ಲಿ ಸಂದ ಕಷ್ಟದ ಕೋಟಲೆಯನ್ನು ಮತ್ತೊಂದು ಜೀವದೊಡನೆ ಸಮನಾಗಿ ಹಂಚಿಕೊಂಡಾಗ ಕಷ್ಟವು ಅರ್ಧವಾಗಿಸಂತಸವು ಎರಡುಪಟ್ಟಾಗುತ್ತದೆ. ಈ ಬದುಕಿನ ಬಾಂಧವ್ಯಗಳು ನಮಗೆ ಕೇವಲ ದೈವ ಕೃಪೆಯಿಂದ ಬರುವಂತಹುದು ಎಂದು ಜೀವ ಜೀವಗಳ ಪರಸ್ಪರ ಬಾಂಧವ್ಯಗಳನ್ನುವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತದಲ್ಲಿ.",
  },
  {
    number: 430,
    english:
      "When one eats alone, he can neither enjoy nor does it taste good. So, God thought about becoming two (created one more of himself). He kept on doing it and created this world. When even God could not stand being alone, why should man do so? Life is large and world is huge. Embrace it wholeheartedly. - Mankutimma",
    kannada:
      "ಒಬ್ಬನುಣುವೂಟದಲಿ ಸವಿಯಿಲ್ಲ ಸೊಗವಿಲ್ಲ ।\nಇಬ್ಬರಾಗುವೆನೆಂದನಂತೆ ಪರಬೊಮ್ಮಂ ॥\nಹೆಬ್ಬದುಕನೊಂಟಿತನದೊಳದೇನು ಬದುಕುವೆಯೊ? ।\nತಬ್ಬಿಕೊಳೊ ವಿಶ್ವವನು - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೦ ॥",
    kannada_explanation:
      "ಆ ಪರಮಾತ್ಮ ತಾನು ಒಬ್ಬನೇ ಕುಳಿತು ಊಟ ಮಾಡುವುದರಲ್ಲಿ ಏಕೋ ರುಚಿಯಿಲ್ಲ ಮತ್ತು ಸೊಗಸೂ ಇಲ್ಲ ಎಂದು ನೆನೆದು ‘ಇಬ್ಬರಾಗುವೆ’ ಎಂದನಂತೆ. ಸಕಲ ಚರಾಚರಗಳಿಗೆ ಒಡೆಯನಾದ ಅವನಿಗೇ ಹಾಗನ್ನಿಸಿರುವಾಗ, ಇಷ್ಟು ದೊಡ್ಡದಾದ ಬದುಕನ್ನು ನೀನು ಒಂಟಿಯಾಗಿ ಹೇಗೆ ಬದುಕುವೆ? ಹಾಗಾಗಿ ಇಡೀ ವಿಶ್ವವನ್ನೇ ತಬ್ಬಿಕೊಳ್ಳು ಎಂದು ಅದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 431,
    english:
      "When one get down into a pond to take bath, you can see ripples emanating with you as center. The waves expand all the way to the banks. Just like that your actions create ripples in this world. We should make positive influences around us and expand our influence so that we feel one with the world. - Mankutimma",
    kannada:
      "ಕೊಳದಿ ನೀಂ ಮೀವಂದು ತೆರೆಯೆದ್ದು ಹರಡುತ್ತೆ ।\nವಲಯವಲಯಗಳಾಗಿ ಸಾರುವುದು ದಡಕೆ ॥\nಅಲೆಗಳಾ ತೆರದಿ ನಿನ್ನಾತ್ಮದಿಂ ಪರಿಪರಿದು ।\nಕಲೆತುಕೊಳ್ಳಲಿ ಜಗದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೧ ॥",
    kannada_explanation:
      "ನಾವು ಕೊಳದಲ್ಲಿ ಸ್ನಾನಮಾಡಲು ಹೋಗಿ ಮುಳುಗೆದ್ದಾಗ ನೀರ ಉಂಗುರಗಳು ನಮ್ಮ ಸುತ್ತಲೂ ಹರಡಿ ದಡವ ತಲುಪುವಂತೆ, ನಾವು ನಮ್ಮ ಚೈತನ್ಯದಿಂದ ಸುಭಾವವನ್ನು ಹರಿಸಿ ಜಗತ್ತಿನಲ್ಲೆಲ್ಲ ಕಲೆತುಕೊಳ್ಳುವಂತೆ ಬಾಳಬೇಕು ಮತ್ತು ಹಾಗೆಯೇ ಬದುಕಿನ ದಡ ಸೇರಬೇಕೆಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 432,
    english:
      "Material pleasures enjoyed in isolation is weak. The gains made thus is only for a show. The real happiness is only when you expand your 'self' to include the world. That happiness is for ever. Individual happiness is best when it is enjoyed with the whole. Learn to live together. - Mankutimma",
    kannada:
      "ಪ್ರತ್ಯೇಕಸುಖವಲ್ಪದುದು, ಗಳಿಗೆತೋರ್ಕೆಯದು ।\nಆತ್ಮವಿಸ್ತಾರವಾಗಿಪುದೆ ನಿತ್ಯಸುಖ ॥\nವ್ಯಕ್ತಿಜೀವನದ ಸೊಂಪು ಸಮಷ್ಟಿಜೀವನದಿ ।\nಒಟ್ಟುಬಾಳ್ವುದ ಕಲಿಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೨ ॥",
    kannada_explanation:
      "ನಾವು ಪ್ರತಿಯೊಬ್ಬರೂ ನಮ್ಮಷ್ಟಕ್ಕೆ ನಾವೇ ಅನುಭವಿಸಿ ಆನಂದ ಪಡುವ ಸುಖ, ಅಲ್ಪ ಸುಖ ಮತ್ತು ಕ್ಷಣಿಕವಾದದ್ದು. ಹಾಗಲ್ಲದೆ ಆತ್ಮದ ಭಾವವನ್ನು ವಿಶಾಲವಾಗಿಸಿವುದೇ ಶಾಶ್ವತ ಸುಖ. ಒಬ್ಬ ವ್ಯಕ್ತಿ ತನ್ನಷ್ಟಕ್ಕೆ ತಾನೇ ಸುಖಪಡುವುದಕ್ಕಿಂತ ತನ್ನೊಡನೆ ಸಮಸ್ತರನ್ನೂ ಸೇರಿಸಿಕೊಂಡು ಸುಖಪಡುವುದು ಹಿತವಾಗಿರುತ್ತದೆ, ಹಾಗಾಗಿ ಒಟ್ಟು ಬಾಳುವೆಯನ್ನು ಕಲಿತುಕೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 433,
    english:
      "What is the meaning of crying? What does laughing mean? These are ways to open the doors to your heart. Are you a stone that does not melt (in grief)? Are you sand that does not bloom (in happiness)? Weeping and laughing are shortcuts to make inner emotions come out and take in the senses of world. - Mankutimma",
    kannada:
      "ಅಳುವೇನು? ನಗುವೇನು? ಹೃತ್ಕಪಾಟೋದ್ಘಾಟ ।\nಶಿಲೆಯೆ ನೀಂ ಕರಗದಿರಲ್? ಅರಳದಿರೆ ಮರಳೇಂ? ॥\nಒಳಜಗವ ಹೊರವಡಿಪ, ಹೊರಜಗವನೊಳಕೊಳುವ ।\nಸುಳುದಾರಿಯಳುನಗುವು - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೩ ॥",
    kannada_explanation:
      "ಅಳುವೇನು,ನಗುವೇನು? ಅವು ಹೃದಯದ ಬಾಗಿಲನ್ನು ತೆಗೆದು ಮುಚ್ಚುವ ಸಾಧನಗಳು. ಕರಗದೆ ಇರಲು ನೀನು ಕಲ್ಲೇನು?ಅಥವಾ ಅರಳದೆ ಇರಲು ನೀನು ಮರಳೇನು? ನಿನ್ನ ಒಳಗಿರುವ ಭಾವ ಜಗತ್ತನ್ನು ಹೊರಜಗತ್ತಿನೊಂದಿಗೆ ಬೆರೆಸಿ ಹೊರಜಗತ್ತಿನ ಭಾವ ಸಂಪತ್ತನ್ನು ನಿನ್ನ ಒಳಕ್ಕೆ ಸೆಳೆದುಕೊಳ್ಳಲು \n ಈ ‘ನಗು ಮತ್ತು ಅಳು’ ಗಳೇ ಸುಲಭದ ದಾರಿಗಳು ಎಂದು ಒಂದು ಅದ್ಭುತ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 434,
    english:
      "Happiness and grief are both emotions. While happiness is like fragrance of the flower of the soul. Grief helps you centrifuge your thoughts and gets the truth out. Identify them both and experience them. - Mankutimma",
    kannada:
      "ನಗುವೊಂದು ರಸಪಾಕವಳುವೊಂದು ರಸಪಾಕ ।\nನಗುವಾತ್ಮ ಪರಿಮಳವ ಪಸರಿಸುವ ಕುಸುಮ ॥\nದುಗುಡವಾತ್ಮವ ಕಡೆದು ಸತ್ತ್ವವೆತ್ತುವಮಂತು ।\nಬಗೆದೆರಡನುಂ ಭುಜಿಸು - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೪ ॥",
    kannada_explanation:
      "ಮನಸ್ಸಿನ ಭಾವರಸದಲ್ಲಿ ಉಕ್ಕಿಹರಿಯುವುದೇ ನಗು ಮತ್ತು ಅಳು. ಆತ್ಮದ ಸಂತೋಷದ ಭಾವ ಪರಿಮಳವನ್ನು ಹರಡುವ ಹೂವೇ ‘ನಗು’. ಕಷ್ಟಗಳನ್ನು ಅನುಭವಿಸಿದ ಆತ್ಮವನ್ನು ಕಡೆದು ಸತ್ವವೆನ್ನುವ ಬೆಣ್ಣೆಯನ್ನು ತೆಗೆಯುವ ಕಡಗೋಲಂತೆ ‘ಅಳು’. ಇವೆರಡರ ಅನುಭವವನ್ನೂ ಪಡೆದು ನೀ ಜೀವಿಸಬೇಕೆಂದು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 435,
    english:
      "An eye that can experience beauty along with a mind that does not waver from goal. A loving mind along with a soul that does not get tied down by attachment. Strength like that of Bheema along with the restraint of Rama. Its a boon to have these both together. - Mankutimma",
    kannada:
      "ರಮಣೀಯಕದಿ ನಲಿವಕ್ಷಿಯೊಡನೆಚಲಮನ ।\nಪ್ರೇಮಮಯಮನದೊಡನೆ ಮೋಹಬಡದಾತ್ಮ ॥\nಭೀಮಬಲದೊಡನೆ ರಾಮನ ಅಭಯ ನಿಯಮವಿರೆ ।\nಯಾಮಳ ವರಂಗಳವು - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೫ ॥",
    kannada_explanation:
      "ಸುಂದರವಾದ ವಸ್ತುಗಳು ನಮ್ಮ ಕಣ್ಣಿಗೆ ಬಿದ್ದರೂ ಅದನ್ನು ಪಡೆಯಬೇಕೆಂದು ಮನಸ್ಸಾದರೂ ಅದರಲ್ಲಿ ಮೋಹಪರವಶರಾಗದ ಮನೋ ನಿಗ್ರಹವಿರುವುದು, ಭೀಮನಷ್ಟು ಬಲವಿದ್ದರೂ ಮತ್ತನಾಗದೆ ರಾಮನಂತೆ ಆ ಬಲವನ್ನು ಕೇವಲ ಲೋಕಕಲ್ಯಾಣಕ್ಕಾಗಿ ಅಥವಾ ಪರಹಿತಕ್ಕಾಗಿ ಉಪಯೋಗಿಸುವ ನಿಯಮವನ್ನು ನಮಗೆ ನಾವೇ ಹಾಕಿಕೊಂಡರೆ, ಈ ಎರಡೂ ಗುಣಗಳು ನಮಗೆ ಆ ದೈವ ಕೊಟ್ಟ ಎರಡು ವರಗಳಂತೆ ಎಂದು ಮನಸ್ಸಿನ ಭಾವವನ್ನು ಹೇಗೆ ಆತ್ಮಹಿತ ಮತ್ತು ಪರಹಿತಕ್ಕೆ ಉಪಯೋಗಿಸಿಕೊಳ್ಳಬಹುದು ಎಂದು ಸೂಚ್ಯವಾಗಿ ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 436,
    english:
      "If the heart does not feel, it is no use of just eyes enjoying the sight. Is it? If the heart does not reciprocate, is there is any use of extending friendship? If the mind is not excited, is bodily pleasure any good? There is no harm in enjoying. But when we do enjoy, we must remember when it is in good taste and when not. - Mankutimma",
    kannada:
      "ಎದೆ ಮಾರುವೋಗದೊಡೆ, ಕಣ್ ಸೊಬಗನುಂಡರೇಂ? ।\nಹೃದಯ ಮುಯ್ ಕೇಳದೊಡೆ, ನೆಲವ ಸೂಸಿದರೇಂ? ॥\nಕದಡದಿರ್ದೊಡೆ ಮನವ, ತನು ಸೊಗವ ಸವಿದೊಡೇಂ? ।\nಮುದ ತಾನೆ ತಪ್ಪಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೬ ॥",
    kannada_explanation:
      "ಸುಖಪಡುವುದು ತಪ್ಪಲ್ಲ. ಒಂದು ಸುಂದರ ವಸ್ತುವನ್ನು ನೋಡಿದಾಗ ಹೃದಯ ತದನುಸಾರವಾಗಿ ಮಿಡಿಯದಿದ್ದರೆ ಏನು ಪ್ರಯೋಜನ? ಪ್ರೀತಿ ತೋರಿದ ಹೃದಯ ಮರು ಪ್ರೀತಿಯನ್ನು ಅಪೇಕ್ಷಿಸದಿದ್ದರೆ ಏನು ಪ್ರಯೊಜನ? ದೇಹವು ಏನನ್ನಾದರೂ ಪಡೆದು ಸಂತೋಷಪಟ್ಟಾಗ ಮನಸ್ಸೂ ಸಹ ಆನಂದಿಸಿ ಸಂತೋಷಪಡದಿದ್ದರೆ ಏನು ಪ್ರಯೋಜನ? ಹೀಗೆ ಮನಸ್ಸು, ಹೃದಯ ಮತ್ತು ದೇಹಗಳ ಪರಸ್ಪರ ಸ್ಪಂದನೆಗಳ ಬಗ್ಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 437,
    english:
      "Let the senses have the strength to extract flavors of the world. Along with it, let there be aversion towards indulgence. It is the best of the best to be both powerful and not let the power get to one's head. (be levelheaded) - Mankutimma",
    kannada:
      "ಶಕ್ತಿ ಕರಣಕ್ಕಿರಲಿ, ರಸ ಸಂಗ್ರಹಣ ಶಕ್ತಿ ।\nಯುಕ್ತಿವದರೊಡನಿರಲಿ ಭೋಗದಿ ವಿರಕ್ತಿ ॥\nಶಕ್ತಿ ತನ್ನೊಳಗಿದ್ದು ರಕ್ತಮನನಾಗದನೆ ।\nಉತ್ತಮೋತ್ತಮ ಸುಕೃತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೭ ॥",
    kannada_explanation:
      "ದೇಹದ ಅಂಗಾಂಗಗಳಲ್ಲಿ ಪಟುತ್ವವಿರಬೇಕು, ಜೀವನದ ಸ್ವಾರಸ್ಯವನ್ನು ಗ್ರಹಿಸುವ ಶಕ್ತಿಯಿರಬೇಕು. ಆ ಸ್ವಾರಸ್ಯದಲ್ಲಿ ಆಸಕ್ತಿಯಿದ್ದರೂ ಅದನ್ನು ಭೋಗಿಸುವುದರಲ್ಲಿ ಆಸಕ್ತಿಯಿಲ್ಲದೆ, ವಿರಕ್ತರಾಗಿರಬೇಕು. ವ್ಯಕ್ತಿ, ವಸ್ತು, ವಿಷಯಗಳನ್ನು ನೋಡುವ, ಸ್ವಾರಸ್ಯವನ್ನು ಗ್ರಹಿಸುವ, ಅನುಭವಿಸುವ ಶಕ್ತಿ ಇದ್ದಾಗ್ಯೂ, ಸ್ವಯಂ ಪ್ರೇರಣೆಯಿಂದ ನಿಗ್ರಹವನ್ನು ಪಾಲಿಸಲು ಆದರೆ, ಆದೇ ಉತ್ತಮೋತ್ತಮವಾದ ಮಾರ್ಗವೆಂದು, ವಿರಕ್ತಿಯ ನಿಜಸ್ವರೂಪವನ್ನು ಅನಾವರಣಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 438,
    english:
      "Who in this world can deny being attracted to these - light red tinge of fresh sprout, waving of green leaves to the tune of the wind, bright laughter of young people with pure (light, clear) mind, first words of a baby just coming to grips with the world. These are all God's gift to us and every one loves it. - Mankutimma",
    kannada:
      "ತಳಿರ ನಸುಕೆಂಪು, ಬಳುಕೆಲೆಯ ಹಸುರಿನ ಸೊಂಪು ।\nತಿಳಿಮನದ ಯುವಜನದ ನಗುಗಣ್ಣ ಹೊಳಪು ॥\nಬೆಳೆವರಿವು ಮಗುದುಟಿಯಿನುಣ್ಣಿಸುವ ನುಡಿಚಿಗುರು ।\nಇಳೆಯೊಳಿವನೊಲ್ಲನಾರ್? - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೮ ॥",
    kannada_explanation:
      "ಕೆಂಪಾದ ಚಿಗುರೆಲೆ, ಹಸಿರಾದ ಹೊಸ ಎಲೆಗಳ ಬಳ್ಳಿಗಳು, ಮುಗ್ದ ಮನಸ್ಸಿನ ಎಳೆಯರ ಅಶಾಭಾವನೆಯ ಕಣ್ಣ ಹೊಳಪು, ಬೆಳೆಯುವ ಮಕ್ಕಳು ಮಾತು ಕಲಿಯುವಾಗ ಆಡುವ ಮೊದಲ ತೊದಲು ನುಡಿಗಳು, ಇವೆಲ್ಲವನ್ನೂ ಬೇಡವೆನ್ನುವ ಮತ್ತು ನೋಡಿ, ಕೇಳಿ ಆನಂದಿಸದ ಮನುಷ್ಯ ಈ ಭೂಮಿಯಮೇಲೆ ಇರಲು ಸಾಧ್ಯವೇ? ಎಂದು ಒಂದು ಪ್ರಶ್ನೆ ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 439,
    english:
      "There are so many things in this world that effect us. Sometimes, one of them can create a storm in our hearts. That storm can shake your life from root to tip. One may even feel that your whole life is a spec of dust being tossed around in that storm.  - Mankutimma\n\n[Translator's note: At the end of the day, one must realize that the storm is created *by* us inside *our* hearts and so are capable of controlling it ourselves.]",
    kannada:
      "ಏಳಿಸುವುದೊಂದು ಹೊರಸುಳಿವೆನ್ನ ಹೃದಯದಲಿ ।\nಗಾಳಿಸುಂಟರೆಯನದು ಹರಣಗಳ ಕುಲುಕಿ ॥\nಬಾಳನಲ್ಲಾಡಿಪುದು ಬೇರಿಂದ ತುದಿವರೆಗೆ ।\nಧೂಳದರೊಳೀ ಜನ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೪೩೯ ॥",
    kannada_explanation:
      "ಹೊರಗೆ ಸುಳಿದಾಡುವ ಯಾವುದೋ ವಿಚಾರ ನಮ್ಮ ಹೃದಯವನ್ನು ಹೊಕ್ಕು ನಮ್ಮ ಮನಸ್ಸು ಬುದ್ಧಿಗಳನ್ನು ಆವರಿಸಿ, ಕಲಕಿ ನಮ್ಮ ಇಡೀ ಜೀವನವನ್ನು ಮೇಲಿಂದ ಕೆಳಗೆ, ಮೊದಲಿಂದ ಅಂತ್ಯದವರೆಗೆ ಅಲ್ಲಾಡಿಸಿ, ತನ್ನ ಅಗಾಧತೆಯನ್ನು ತೋರಿ ನಮ್ಮ ಶಕ್ತಿಯನ್ನು ಕಲಕಿ, ನಮ್ಮ ಬದುಕನ್ನು ಧೂಳೆಬ್ಬಿಸುತ್ತದೆ ಎಂದು ಬದುಕಿನ ವಾಸ್ತವ ಚಿತ್ರಣವನ್ನು ನಮ್ಮ ಮುಂದೆ ಇಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 440,
    english:
      "A shining attraction in the outside world can create a pain in our hearts. It burns it. It clouds our eyes (and judgment). It excites our senses and cheats our simple lives. All this happens because of our inner longing and attachment towards outer entities. - Mankutimma",
    kannada:
      "ಹೊರಗೆ ಹೊಳೆವೊಂದು ಹೊಳಪಿನ ಕಿರಣವೆನ್ನೆದೆಯೊ- ।\nಳುರಿಯನೆಬ್ಬಿಸಿ ಹೊಗೆಯನೆರಚಿ ಕಣ್ಗಳಿಗೆ ॥\nಕೆರಳಿಪುದು ಕರಣಗಳ, ಮರಳಿಪುದು ಹರಣಗಳ ।\nಹೊರಮೋಹವೊಳದಾಹ - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೦ ॥",
    kannada_explanation:
      "ಹೊರಗಿನ ಆಕರ್ಷಣೆಯ ಹೊಳಪುಗಳು ನಮ್ಮ ಹೃದಯದಲ್ಲಿ ಆಸೆಯನ್ನು ಹುಟ್ಟಿಸಿ ನಮ್ಮ ಇಂದ್ರಿಯಗಳನ್ನು ಕೆರಳಿಸಿ ನಮಗೆ ಶಕ್ತಿಯನ್ನು ನೀಡುತ್ತವೆ. ಹೊರಗಿನ ವಸ್ತುಗಳ ಮೋಹ ಮತ್ತು ಪಡೆದುಕೊಳ್ಳುವ ಒಳಗಿನ ದಾಹದ ಸಹಜ ಪ್ರಕ್ರಿಯೆಯನ್ನು, ಈ ಮುಕ್ತಕದಲ್ಲಿ ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 441,
    english:
      "There is no separate inner and outer worlds. The sounds of the outside village can be heard on the inside. The voice of the inner mind can be heard even among the chaos of the outside. The inner and outer worlds are two facets of our mind. - Mankutimma",
    kannada:
      "ಇಂತು ಹೊರಗೊಳಗುಗಳು ಬೇರೆಲೋಕಗಳಲ್ಲ ।\nಅಂತರಂಗದೊಳೂರಸಂತೆ ಸದ್ದಿಹುದು ॥\nಸಂತೆಯೊಳಮಂತರಂಗದ ಸದ್ದು ಕೇಳಿಪುದು ।\nಸ್ವಾಂತದಿಕ್ಕೆಲಗಳವು - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೧ ॥",
    kannada_explanation:
      "ಹೀಗೆ ಹೊರಗು ಮತ್ತು ಒಳಗುಗಳೆಲ್ಲ ಬೇರೆ ಬೇರೆ ಅಲ್ಲ. ಅಂತರಂಗದೊಳಗೆ ಹೊರಗಿನ ಜಗದ್ವ್ಯಾಪಾರದ ಸದ್ದು ಮತ್ತು ನಮ್ಮ ಅಂತರಂಗದ ಪ್ರತಿಬಿಂಬದಂತೆ ಜಗದ್ವ್ಯಾಪಾರ. ಒಳಮನಸ್ಸು ಮತ್ತು ಹೊರಜಗತ್ತು ಎರಡೂ ಅಕ್ಕಪಕ್ಕಗಳಲ್ಲಿ ಇರುತ್ತವೆ ಎಂದು ನಮ್ಮ ಮತ್ತು ಈ ಜಗತ್ತಿನ ಸಂಬಂಧದ ಸೂಕ್ಷ್ಮತೆಯನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ, ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು .",
  },
  {
    number: 442,
    english:
      "Is there is a human being who does not like beauty and happiness? A child, an old man, an accountant, a priest - can any one deny it? When the world is not looking, every one look at the mirror and correct their faces. - Mankutimma",
    kannada:
      "ಸೊಗಸು ಬೇಡದ ನರಪ್ರಾಣಿಯೆಲ್ಲಿಹುದಯ್ಯ? ।\nಮಗುವೆ, ಮುದುಕನೆ, ಪುರಾಣಿಕ ಪುರೋಹಿತರೆ? ॥\nಜಗದ ಕಣ್ಣಿಣಿಕದೆಡೆ ಮುಕುರದೆದುರೊಳು ನಿಂತು ।\nಮೊಗವ ತಿದ್ದುವರೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೨ ॥",
    kannada_explanation:
      "ಸೊಗಸು ಅಂದರೆ ಅಂದ ಚೆಂದವನ್ನು ಬೇಡದ ಮನುಷ್ಯರು ಎಲ್ಲಿಹರು? ಮಗುವಿನಿಂದ ಹಿಡಿದು ಮುದುಕನತನಕ, ಪುರಾಣ ಹೇಳುವವರು, ಪುರೋಹಿತರು ಹೀಗೆ ಜಗತ್ತಿನ ಎಲ್ಲರೂ ತಮ್ಮನ್ನು ಯಾರೂ ನೋಡದಿದ್ದಾಗ ಕನ್ನಡಿಯ ಮುಂದೆ ನಿಂತು ತಮ್ಮ ಅಂದ ಚೆಂದಗಳ ನೋಡಿ ಅಭಿಮಾನಪಡುತ್ತಾ, ತಮ್ಮ ಮುಖವನ್ನು ತಾವು ತಿದ್ದಿಕೊಳ್ಳುವವರೇ ಎಲ್ಲ ಎಂದು ಮನುಷ್ಯರ ಸ್ವಭಾವದ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 443,
    english:
      "Six months of effort is required for a rose plant to flower. After that, the flower displays its beauty only for a small time. This beauty emanates a wave of happiness even though it is short lived. Does a person who experiences such happiness crib that the creator is a big miser (for not extending that pleasure for longer)? - Mankutimma",
    kannada:
      "ತಿಂಗಳಾರರ ದುಡಿತ ಚೆಂಗುಲಾಬಿಯ ಬೆಳೆತ ।\nಕಂಗೊಳಿಪುದದರ ಸಿರಿಯರೆಗಳಿಗೆಯಲರೊಳ್ ॥\nಪೊಂಗುವಾನಂದವದನನುಭವಿಸಿದವನ್ ಅಜನ ।\nಹಂಗಿಪನೆ ಕೃಪಣತೆಗೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೩ ॥",
    kannada_explanation:
      "ಆರು ತಿಂಗಳ ಸತತ ದುಡಿತದಿಂದ ಬೆಳೆಸಿದ ಒಂದು ಗುಲಾಬಿ ಗಿಡ ತನ್ನ ಸಿರಿತನವನ್ನು ತನ್ನಲ್ಲಿ ಬಿಡುವ ಮೊದಲ ಹೂವಿನಲ್ಲಿ ಪ್ರಕಟಗೊಳಿಸುತ್ತದೆ. ಅದರ ಅಂದ ಚೆಂದಗಳು ಒಂದು ದಿನವಿದ್ದು ಬಾಡಿಹೋಗುತ್ತದೆ. ಹಾಗೆ ಆ ಗಿಡದಲ್ಲಿ ಹೂವಿನ ರೂಪದಲ್ಲಿ ಉಕ್ಕುವ ಆನಂದವನ್ನು, ನೋಡಿ ಸಂತಸಪಡದವನು, ಆ ಹೂವನ್ನು ಅರೆಗಳಿಗೆಯ ಸಂತೋಷಕ್ಕೆ ಸೃಷ್ಟಿಸಿದ ಆ ಸೃಷ್ಟಿಕರ್ತನ ಜಿಪುಣತನವನ್ನು ಹಳಿದರೇನು ಪ್ರಯೋಜನ ಎಂದು ಜಗತ್ಸೃಷ್ಟಿಯನ್ನು ಮತ್ತು ಅದರಲ್ಲಿನ ಸಂತೋಷವನ್ನು ಅನುಭವಿಸುವ ಪರಿಯ ಬಗ್ಗೆ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 444,
    english:
      "The beautiful bend of the sky (at horizon), the straight rays of the Sun, the pleasant rays of moonlight, the twinkle of the stars - these are the first lessons of experiencing beauty. This is what leads to people's perception of beauty in human form. Nature is the first teacher of experiencing beauty. - Mankutimma",
    kannada:
      "ಬಾಂದಳದ ಬಾಗು, ರವಿಕಿರಣಗಳ ನೀಳ್ಕೋಲು ।\nಇಂದುಮಣಿನುಣ್ಪು, ತಾರೆಗಳ ಕಣ್ಮಿನುಗು ॥\nಚೆಂದದಂಗಾಂಗಭಾವದಿ ಮೊದಲ ಪಾಠವಿವು ।\nಸೌಂದರ್ಯಗುರು ಪ್ರಕೃತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೪ ॥",
    kannada_explanation:
      "ಕ್ಷಿತಿಜದಲ್ಲಿ ನಮಗೆ ಕಾಣುವ ಆ ಬಾಗಿದಂತಹ ಆಕಾಶ, ನೇರವಾಗಿ ಭೂಮಿಯ ಮೇಲೆ ಇಳಿಯುವ ಸೂರ್ಯನ ಕಿರಣಗಳು, ತಂಪಾದ ಚಂದ್ರ, ಫಳಫಳನೆ ಹೊಳೆಯುವ ಮುಗಿಲ ನಕ್ಷತ್ರಗಳ ಹೊಳಪು ಇತ್ಯಾದಿಗಳು ಪ್ರಕೃತಿಯಲ್ಲಿ ಚೆಂದವಾಗಿ ಕಾಣುವ ಆ ಸೌಂದರ್ಯಗಳೆಲ್ಲಾ, ಪ್ರಕೃತಿಯು ನಮಗೆ ನೀಡುವ ಸುಂದರತೆಯ ಮೊದಲ ಪಾಠದಂತಿದೆ ಎಂದು ಮೂಲ ಸೌಂದರ್ಯವನ್ನು ನಮಗೆ ಅರುಹುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 445,
    english:
      "When our experience is filled with truth, purity and beauty then that fleeting second seems like eternity. Mind gets filled with calmness (of the moon). Our memory of that second will be like elixir. See infinity in that second. - Mankutimma",
    kannada:
      "ಕ್ಷಣವದೊಂದೆ ಅನಂತಕಾಲ ತಾನಾಗುವುದು ।\nಅನುಭವಕೆ ಸತ್ತ್ವ ಶಿವ ಸುಂದರಗಳಮರೆ ॥\nಮನ ತುಂಬುಶಶಿಯಾಗಿ, ನೆನಪಮೃತವಾಗುವುದು ।\nಕ್ಷಣದೊಳಕ್ಷಯ ಕಾಣೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೫ ॥",
    kannada_explanation:
      "ಒಂದೊಂದು ಕ್ಷಣವೇ ಅನಂತಕಾಲವಾಗಿರುವಾಗ ನಮ್ಮ ಅನುಭವಕ್ಕೆ ಸುಂದರವಾದ ಶಿವಸ್ವರೂಪದ ಸತ್ವವು ಬಂದರೆ, ಮನವು ಚಂದ್ರ ಬೆಳಕಿನಂತೆ ತಣ್ಣಗಿದ್ದರೆ ನಮ್ಮ ನೆನಪುಗಳೆಲ್ಲಾ ಸವಿಯಾದ ಅಮೃತದಂತೆ ಆಗುವುವು. ಹಾಗಾಗಿ ಪ್ರತೀ ಕ್ಷಣದಲ್ಲೂ ಎಂದೂ ಕರಗದ ಅಮೃತ ಭಾವವನ್ನು ಕಾಣು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 446,
    english:
      "What is it to feel 'beautiful'? What is the secret of happiness that makes people forget themselves? Being conscious of the whole world and empathizing with it is being beautiful. That is the source of life. That is the connection between a man and the Creator. - Mankutimma",
    kannada:
      "ಸುಂದರತೆಯೆನುವುದೇಂ? ಜನಕೆ ಮೈಮರೆಯಿಪಾ- ।\nನಂದದೊಳಮರುಮವೇಂ? ವಿಶ್ವಚೇತನದಾ ॥\nಸ್ಪಂದನವೆ ಸೌಂದರ್ಯಮದುವೆ ಜೀವನಮೂಲ ।\nಬಂಧುರತೆ ಬೊಮ್ಮನದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೬ ॥",
    kannada_explanation:
      '" ಸುಂದರತೆ ಎಂದರೆ ಏನು? ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯು ಎಲ್ಲವೂ ಅದನ್ನು ಕಂಡು ಮೈ ಮರೆಯುವಂತೆ ಮಾಡುವ ಆ ಒಳಗುಟ್ಟು ಏನು?" ಎಂದರೆ ಪರಮ ಚೇತನಕ್ಕೆ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯೆಲ್ಲವೂ ಪ್ರತಿಸ್ಪಂದಿಸುವಂತೆ ಮಾಡುವುದೇ ಈ ಸುಂದರತೆ. ಪರಮಾತ್ಮ ಸೃಷ್ಟಿಯಾದ ಈ ಜಗಜ್ಜೀವಜಾಲದ ಪರಸ್ಪರ ಆಕರ್ಷಣೆಗೆ ಈ ಸುಂದರತೆಯೇ ಕಾರಣ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 447,
    english:
      "God has kept one black-dot in all beautiful things. Just like the black-dot on the moon. Is it a secret plan? Is it for protection? Is it for decoration? Is it just for fun? There is also ugliness in nature serving as a black-dot in an otherwise beautiful creation. - Mankutimma\n\n[Translator's note: In Indian households, a black-dot is kept on the face of little kids after decorating so that it can absorb all the ill-effects of being the source of all jealousy. Whenever there is absolute beauty, it is made imperfect using a black-dot.]",
    kannada:
      "ದೃಷ್ಟಿಚುಕ್ಕೆಯದೊಂದನೆಲ್ಲ ಚೆಂದಂಗಳ್ಗ- ।\nಮಿಟ್ಟಿಹನು ಪರಮೇಷ್ಠಿ, ಶಶಿಗೆ ಮಶಿಯವೊಲು ॥\nಗುಟ್ಟೇನೊ? ರಕ್ಷೆಯೋ? ಸಿಂಗರವೊ? ಹೇಳನವೊ? ।\nಮಷ್ಟು ಸೃಷ್ಟಿಗೆ ಬೊಟ್ಟು - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೭ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿಕರ್ತ, ತನ್ನ ಸೃಷ್ಟಿಯಲ್ಲಿನ ಚೆಂದಗಳಿಗೆಲ್ಲಾ ಒಂದು ದೃಷ್ಟಿಚುಕ್ಕೆಯನ್ನು ಇಟ್ಟಿದಾನೆ, ಚಂದ್ರನಲ್ಲಿ ಕಲೆಗಳಂತೆ. ಇದರ ಗುಟ್ಟು ಏನಿರಬಹುದು ಎಂದು ಒಂದು ಪ್ರಶ್ನೆ ಕೇಳುತ್ತಾ, ಹಾಗೆ ಕಲೆಗಳನ್ನು ಇಟ್ಟು ಅದನ್ನು ‘ ಇನ್ನೂ ಅಧಿಕ ಸಿಂಗಾರಕ್ಕೊ,ಕಾಪಾಡುವುದಕ್ಕಾಗಿಯೋ, ಅಥವಾ ಹಳಿಯಲೋ,’ ಎಂದು ಸೂಚಿಸುತ್ತಾ, ಏನಾದರಾಗಲಿ ಕೊಳೆ ಈ ಜಗತ್ತಿನ ಸೌಂದರ್ಯಕ್ಕೆ ಇಟ್ಟ ದೃಷ್ಟಿಬೊಟ್ಟು ಎಂದು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 448,
    english:
      "Beauty comes from coordination of the opposites. A point and an expanse, a bent stroke right next to a straight one, a mixture of colors pleasing to the eye, fast moving and stationary objects, food with sour and salts and so on. - Mankutimma",
    kannada:
      "ಬಿಂದು ವಿಸರಗಳನುವು, ವಂಕು ಸರಲಗಳನುವು ।\nಚೆಂದ ಕಣ್ಣಿಗೆ ವರ್ಣವಿವಿಧಂಗಳನುವು ॥\nಚೆಂದ ವೇಗ ಸ್ತಿಮಿತದನುವು, ಹುಳಿಯುಪ್ಪನುವು ।\nದ್ವಂದ್ವದನುವುಗಳಂದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೮ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿಯಲ್ಲಿ ಹಲವಾರು ದ್ವಂದ್ವಗಳು ಜೊತೆಜೊತೆಯಲ್ಲೇ ಇರುತ್ತವೆ. ಒಂದು ಚುಕ್ಕೆಯ ಸುತ್ತ ವಿಸ್ತಾರ, ಅಂಕುಡೊಂಕುಗಳೊಡನೆ ನೇರಗಳು, ಒಂದಕ್ಕೊಂದು ಹೊಂದಿಕೊಂಡು ಹಲವಾರಾದರೂ, ನಮ್ಮ ಕಣ್ಣಿಗೆ ಚೆಂದವಾಗಿ ಕಾಣುವ ವಿವಿಧ ಬಣ್ಣಗಳು, ಕೆಲವು ಸ್ಥಾಯೀಯಾಗಿರುವುದು ಮತ್ತೆ ಕೆಲವು ವೇಗವಾಗಿ ಓಡುತ್ತಿರುವುದು, ಹೀಗೆ ಪರಸ್ಪರ ವಿರುದ್ಧವಾಗಿದ್ದರೂ ಅಕ್ಕ ಪಕ್ಕಗಳಲ್ಲೇ ಇರುವ ಈ ದ್ವಂದ್ವಗಳ ಪರಸ್ಪರ ಅನ್ಯೋನ್ಯತೆ ಈ ಜಗತ್ತನ್ನು ಇನ್ನಷ್ಟು ಸುಂದರವಾಗಿಸಿದೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 449,
    english:
      "Beauty does not exist in the mere presence of the opposites. They have to be well coordinated. They have to be mixed in right proportions. This is the rule of compromise. This is the rule of cooperation. This is what comes out as 'natural' in life situations. - Mankutimma",
    kannada:
      "ಸೌಂದರ್ಯದಾಲಯ ಬರಿ ದ್ವಂದ್ವವೇನಲ್ಲ ।\nದ್ವಂದ್ವದೊಳಗನುವು; ಅದು ಪರಿಮಾಣದುಚಿತ ॥\nಸಂಧಾನರೀತಿಯದು; ಸಹಕಾರ ನೀತಿಯದು ।\nಸಂದರ್ಭಸಹಜತೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೪೯ ॥",
    kannada_explanation:
      "ಕೇವಲ ದ್ವಂದ್ವಗಳು ಇದ್ದರೆ ಸಾಲದು, ಅವು ಒಂದಕ್ಕೊಂದು ಅನುಗುಣವಾಗಿರಬೇಕು, ಪರಿಮಾಣಗಳ ಔಚಿತ್ಯವನ್ನು ಹೊಂದಿರಬೇಕು, ಒಂದಕ್ಕೊಂದು ಸಮರ್ಪಕವಾಗಿ ಅನುಸಂಧಾನದಿಂದಿರಬೇಕು ಮತ್ತು ಪರಸ್ಪರ ಸಹಕಾರಯುತವಾಗಿರಬೇಕು. ಈ ಎಲ್ಲ ರೀತಿಯ ಸಂದರ್ಭಗಳು ಇದ್ದಾಗ ಅದು ನಿಜವಾದ ಸೌಂದರ್ಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 450,
    english:
      "There is duality in beauty. There is duality in relations of life. There is duality in the whole web of life. Going forward, if you can surpass the duality and see the unity in each one of them then you will liberated. - Mankutimma",
    kannada:
      "ಸೌಂದರ್ಯದೊಳ್ ದ್ವಂದ್ವ, ಬಾಂಧವ್ಯದೊಳ್ ದ್ವಂದ್ವ ।\nದ್ವಂದ್ವವೀ ಲೋಕ ಸಹವಾಸಗಳೊಳೆಲ್ಲ ॥\nಮುಂದೆ ನೀನಾವುಭಯಗಳ ದಾಟಿ ಸಾಗುತಿರೆ ।\nಬಂಧಮೋಚನ ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿರುವ ಎಲ್ಲ ಸೌಂದರ್ಯ ಮತ್ತು ಬಾಂಧವ್ಯಗಳಲ್ಲಿ ದ್ವಂದ್ವಗಳಿವೆ. ಈ ಜಗತ್ತಿನ ಸಹವಾಸವೆಂದರೆ, ದ್ವಂದ್ವದಲ್ಲಿ ಬಿದ್ದೆವು ಎಂದರ್ಥ. ಎಂದು ನಾವು ಈ ದ್ವಂದ್ವಗಳನ್ನು ಮೀರಿ ಮುಂದೆ ಹೋಗುತ್ತೇವೆಯೋ ಅಂದೇ ನಮಗೆ ಬಂಧ ವಿಮೋಚನೆ ಎಂದು ಸುಂದರ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 451,
    english:
      "The twinkling star looks beautiful because of the vast expanse of the sky (emptiness). The flowing water of the stream is beautiful because the rocks on which it flows are stationary. The safety of the home is so meaningful because life is like being in open ground. Things are mostly beautiful because they are contrasted with their opposites. - Mankutimma",
    kannada:
      "ನೀಲ ವಿಸ್ತರವಿರಲು ನಕ್ಷತ್ರ ಬಿಂದು ಸೊಗ ।\nಶೈಲದಚಲತೆಯಿರಲು ಝರಿಯ ವೇಗ ಸೊಗ ॥\nಬಾಳು ಬಯಲಂತಿರಲು ಮನೆಯಚ್ಚುಕಟ್ಟಿಂಭು ।\nವೈಲಕ್ಷಣದೆ ಚೆಂದ - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೧ ॥",
    kannada_explanation:
      "ವಿಶಾಲವಾದ ಅಕಾಶವಿರಲು ಅಲ್ಲಿ ಹರಡಿರುವ ನಕ್ಷತ್ರ ಸಮೂಹ ಚೆಂದ, ಅಲುಗಾಡದೆ ನಿಂತಿರುವ ಬೆಟ್ಟಗಳಿರುವಾಗ ಅಲ್ಲಿಂದ ಹರಿವ ನೇರ ಜಲಪಾತ ನೋಡಲು ಚೆಂದ, ಬದುಕು ಬಯಲಂತೆ ಇರಲು ನಾವಿರುವ ಮನೆಯೇ ನಮಗೆ ಸೊಗಸು, ಹಿತ. ಹೀಗೆ ವಿಭಿನ್ನತೆಯಿಂದ ಕೂಡಿದ ಜಗತ್ತೇ ನಮಗೆ ಚೆಂದವಾಗಿ ಕಾಣುತ್ತದೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 452,
    english:
      "The waves at sea always keep changing the waterline. It bends and curves on its own. When the meter (rule based) and rhythm (pleasing) are fused, the musical attracts people's attention. The burning ball of fire (Sun) makes the sky look beautiful. These seemingly contradicting entities support each other and make a beautiful combination. - Mankutimma",
    kannada:
      "ನೀಳುಗೆರೆ ಬಳುಬಳುಕೆ ಕಡಲತೆರೆಯೊಯ್ಯಾರ ।\nತಾಳಲಯ ಸೇರೆ ರಾಗದ ನಾಟ್ಯ ಧಾಟಿ ॥\nಗೋಳದ ಜ್ವಾಲೆಯಿಂ ಗಗನಪಟ ಸಿಂಗಾರ ।\nವೈಲಕ್ಷಣದೊಳಿಂಬು - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೨ ॥",
    kannada_explanation:
      "ಕಡಲಂಚಿನಲ್ಲಿ ಕಾಣುವ ನೇರ ನೇರವಾದ ಗೆರೆ ಹೇಗೆ ಕಡಲಲ್ಲಿ ತೆರೆಯೆದ್ದಾಗ ಒಂದು ಬಾರಿ ಬಳುಕಿ ನೋಡುಗರಿಗೆ ಆನಂದವನ್ನು ನೀಡುತ್ತದೋ, ಹೇಗೆ ರಾಗದ ಜೊತೆ ತಾಳ ಸೇರಿ ಲಯವಾಗಿ ನಾಟ್ಯಧಾಟಿಯಿಂದ ಮನವನ್ನು ರಂಜಿಸುತ್ತದೆಯೋ, ಪ್ರತಿಯೊಂದೂ ಉರಿವ ಅಗ್ನಿ ಗೋಳಗಳಾಗಿದ್ದರೂ ಆಗಸದ ಪಟಲದಲ್ಲಿ ಉದ್ದಕ್ಕೂ ಹರಡಿ ನಕ್ಷತ್ರಗಳು, ಒಂದು ಸುಂದರ ಚಿತ್ತಾರವನ್ನು ಮೂಡಿಸಿದೆಯೋ, ಹಾಗೆ ವಿಲಕ್ಷಣವಾದ ಪ್ರತಿಯೊಂದೂ ಈ ಜಗತ್ತನ್ನು ಸುಂದರವಾಗಿಸಲು ಇಂಬು ನೀಡುತ್ತಿವೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 453,
    english:
      "There is difference in attraction towards our mother or sisters and that towards a lover. The former is pure and calm. The later creates a lot of emotions and urgent. When these attractions pull you in different directions, what will you go by? One has to ponder hard and find a way to reconcile - Mankutimma",
    kannada:
      "ತಾಯೊ ತಂಗಿಯೊ ಎನಿಪ ಶುಚಿಯ ಸೌಮ್ಯದ ಸೊಬಗು ।\nಪ್ರೇಯಸಿಯ ಕರೆವೊಲಾತುರವಡಿಪ ಬೆಡಗು ॥\nಈಯೆರಡು ಸಮದ ರುಚಿ ನಿನ್ನಿನಿಬ್ಬಗೊಳಿಸೆ ।\nಧ್ಯೇಯ ನಿನಗಾವುದೆಲೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೩ ॥",
    kannada_explanation:
      "ತಾಯಿ ಮತ್ತು ತಂಗಿಯರ ಸೌಂದರ್ಯವನ್ನು ನೋಡುವ ಬಗೆ ಬೇರೆ ಮತ್ತು ತುಡಿತ ಮತ್ತು ಮಿಡಿತದಿಂದ ಕೂಡಿದ ಕರೆ ನೀಡುವ ಪ್ರೇಯಸಿಯ ಸೌಂದರ್ಯವನ್ನು ನೋಡುವ ಬಗೆ ಬೇರೆ. ಆದರೆ ಈ ಎರಡೂ ಭಾವಗಳು ನಮ್ಮಲ್ಲಿ ಬರುವುದರಿಂದ ಸೌಂದರ್ಯವನ್ನು ನೋಡುವ ಎರಡೂ ಬಗೆ ಭಿನ್ನ ಭಿನ್ನವಾಗಿದ್ದು ಇವೆರಡೂ ನಮಗೆ ಸಮನಾಗಿ ಆನಂದವೀಯುತ್ತಾ ಇರುವಾಗ ನಮ್ಮ ಧ್ಯೇಯ ಯಾವುದಾಗಿರಬೇಕು ಎನ್ನುವ ಪ್ರಶ್ನೆ ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 454,
    english:
      "There are so many elements in this universe - natural forces, energies. They sensitize a man's heart and create a stir. From that arises illusions, courage and seriousness. The interplay of these emotions is beautiful. - Mankutimma",
    kannada:
      "ಪರಿಪರಿಯ ವಿಶ್ವಪ್ರಕೃತಿಶಕ್ತಿತೇಜಗಳು ।\nಕೆರಳಿಸಲು ನರಹೃದಯರಭಸಗಳನದರಿಂ ॥\nಪೊರಮಡುವ ಸಂಮೋಹಧೀರಗಂಭೀರಗಳ ।\nಸರಸತೆಯೆ ಸುಂದರವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೪ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿನ ಮೂಲ ಶಕ್ತಿ ಎಂದರೆ ಪರಮಾತ್ಮ ಶಕ್ತಿ, ಬೇರೆ ಬೇರೆ ವಿಧದಲ್ಲಿ ಪ್ರಕಟಗೊಂಡು ಮನುಷ್ಯನ ಹೃದಯದಲ್ಲಿ ಮೋಹಕ, ಧೀರ, ಗಂಭೀರಗಳಂತಹ ಚಿತ್ರವಿಚಿತ್ರ ಭಾವನೆಗಳನ್ನು ಕೆರಳಿಸಿ, ಆನಂದವನ್ನು ಪಡೆಯಲುದ್ಯುಕ್ತನಾದಾಗ ಈ ಶಕ್ತಿಗಳೊಡನೆ ಇವನು ನಡೆಸುವ ಸರಸವೇ ಒಂದು ಸುಂದರತೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 455,
    english:
      "There are hundreds of emotions in this world. Only three of them are very strong - attachment, compassion and peace. If these three emotions enhance one another, then life becomes beautiful. One must start feeling attached to everything (comes from love). This attachment should lead to compassion towards all. This automatically puts your mind at ease and find peace. Once peaceful, it helps person to love more.  - Mankutimma",
    kannada:
      "ಸುಂದರದ ರಸ ನೂರು; ಸಾರವದರೊಳು ಮೂರು ।\nಹೊಂದಿಪ್ಪುವವು ಮೋಹ ಕರುಣೆ ಶಾಂತಿಗಳ ॥\nಒಂದರಿಂದೊಂದು ಬೆಳೆಯಾದಂದು ಜೀವನವು ।\nಚೆಂದಗೊಂಡುಜ್ಜುಗವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೫ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ವಸ್ತುಗಳಲ್ಲಿನ ನೂರಾರು ‘ರಸ’ಗಳಲ್ಲಿ ‘ಸಾರ’ವಿರುವುದು ಮೂರು . ಅವೇ ‘ ಮೋಹ, ಕರುಣೆ ಮತ್ತು ಶಾಂತಿ’. ಈ ಮೂರೂ ಸಾರಗಳು ಒಂದಕ್ಕೊಂದು ಪೂರಕವಾಗಿದ್ದು ಒಂದು ಮತ್ತೊಂದರ ಬೆಳವಣಿಗೆಗೆ ಮೂಲವಾದರೆ ನಮ್ಮ ಜೀವನವು ಚೆಂದಗೊಳ್ಳುತದೆ ಎಂದು ಸಾರಯುಕ್ತವಾದ ಬದುಕಿನ ಪರಿಚಯವನ್ನು ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾಡಿದ್ದಾರೆ.",
  },
  {
    number: 456,
    english:
      "One of the three emotions is attachment. It tells man to earn (even little), spend and enjoy it and become owner of stuff. Compassion tells him to give, submit and serve. Peace tells him to erase all barriers between me and you. It urges you to lift yourself to the consciousness of the universal soul. - Mankutimma",
    kannada:
      "ಪಿಡಿ ಗಳಿಸು ಭುಜಿಸೊಡೆಯನಾಗೆನ್ನುವುದು ಮೋಹ ।\nಕೊಡು ಸಲಿಸು ಸೇವೆಗೈಯೆನ್ನುವುದು ಕರುಣೆ ॥\nಬಿಡು ನೀನು ನಾನುಗಳ, ವಿಶ್ವಾತ್ಮಪದವನೀ- ।\nನಡರೆನ್ನುವುದು ಶಾಂತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೬ ॥",
    kannada_explanation:
      "ಹಿಡಿ, ಗಳಿಸು, ಅನುಭವಿಸು, ಒಡೆಯನಾಗು ಎಂದು ‘ಮೋಹ’ ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸುತ್ತದೆ. ‘ಕರುಣೆ’ ಕೊಡು, ಸಲ್ಲಿಸು, ಸೇವೆಮಾಡು, ಎನ್ನುವ ಭಾವಗಳನ್ನು ಮನದಲ್ಲಿ ಮೂಡಿಸುತ್ತದೆ. ನೀನು ಮತ್ತು ನಾವು ಎನ್ನುವ ಭೇದವನ್ನು ತೊರೆದು ವಿಶ್ವಾತ್ಮಭಾವವನ್ನು ಪಡೆ ಎಂದು ‘ಶಾಂತಿ’ ಭೋದಿಸುತ್ತದೆ ಎಂದು, ಮೋಹ ಕರುಣೆ ಮತ್ತು ಶಾಂತಿಯ ಸ್ವಭಾವಗಳನ್ನು ವಿಸ್ತರಿಸಿ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 457,
    english:
      "When one sees beautiful scenes his heart expands with love. If we see oppression and tyranny, it creates anger(towards oppressor) and compassion together (towards victim). These extreme stimuli range from scary to magnificent and make us contemplate in peace. These are the ways for one’s enrichment - Mankutimma",
    kannada:
      "ಚಾರುದೃಶ್ಯಂಗಳಿಂ ಪ್ರೀತಿ ಹೃದಯವಿಕಾಸ ।\nಕ್ರೂರದೌಷ್ಟ್ಯಂಗಳಿಂ ವೀರಾನುಕಂಪ ॥\nಭೈರವಾದ್ಭುತಗಳಿಂ ಮೌನದಂತರ್ಮನನ ।\nದಾರಿಯುದ್ಧಾರಕಿವು - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೭ ॥",
    kannada_explanation:
      "ಒಳ್ಳೆಯ ಸುಂದರವಾದ ದೃಶ್ಯಗಳನ್ನು ನೋಡಿದರೆ ಮನಸ್ಸು ಪ್ರಫುಲ್ಲವಾಗುತ್ತದೆ. ಕ್ರೌರ್ಯ ಮತ್ತು ದುಷ್ಟತನವನ್ನು ನೋಡಿದರೆ, ಮನದಲ್ಲಿ ವೀರಾವೇಶ ಉಕ್ಕುತ್ತದೆ ಅಥವಾ ಅನುಕಂಪ ಉಂಟಾಗುತ್ತದೆ. ಭೀಕರ ಅಥವಾ ಅದ್ಭುತಗಳನ್ನು ಕಂಡಾಗ ಅಂತರ್ಮನ ಮೌನ ತಳೆದು ಚಿಂತನೆಗೊಳಗಾಗುತ್ತದೆ. ಈ ರೀತಿಯ ಅನುಭವಗಳು ಮಾನವನ ಉದ್ಧಾರಕ್ಕೆ ಮಾರ್ಗಗಳು ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 458,
    english:
      "In the moment of enlightenment, there is no memory of the past. There is no anxiety for the future. That fraction of second is filed with all the excitement of eternity. In that beautiful vision, there is unity of what we see, where we want to go, the body and soul. -Mankutimma",
    kannada:
      "ಹಿಂದಣದರುಳಿವಿರದು, ಮುಂದಣದರುಸಿರಿರದು ।\nಒಂದರೆಕ್ಷಣ ತುಂಬಿ ತೋರುವುದನಂತ ॥\nಒಂದೆ ಕಣ್ಣೊಂದೆ ಗುರಿಯೊಂದೆ ಮೈಮನಮರೆತ ।\nಸುಂದರದ ಲೋಕವದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೮ ॥",
    kannada_explanation:
      "ಹಿಂದಿನದರ ಉಳಿವಿರದು, ಮುಂದಿನಿದರ ಸುಳಿವಿರದು, ರಸಾಸ್ವಾಧನೆಮಾಡುವಾಗ, ನೋಟ ಗಮನ ಎಲ್ಲದರೊಳಗೂ ಒಂದು ಘಳಿಗೆ ಆ ರಸದ ಅನುಭವವೇ ತುಂಬಿ ಮೈ ಮನವನ್ನು ಮರೆತಂತೆ ಆಗುತ್ತದೆ ಮತ್ತು ಅಲ್ಲಿರುವಾಗ ಅದೊಂದು ಸುಂದರ ಲೋಕದಂತೆ ಕಾಣುತ್ತದೆ ಎಂದು ರಸಾಸ್ವಾಧನೆಯ ಮಾರ್ಗವನ್ನು ವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 459,
    english:
      "The heart has the nectar which makes the soul truly happy. When the eyes see a beautiful scene, it fills the heart with that beauty (and satisfaction). That brilliance is present in life, in poetry, in fine arts and nature. - Mankutimma",
    kannada:
      "ಹೃದಯಪುಷ್ಪಮರಂದವಾತ್ಮಕೆ ನಿಜಾನಂದ ।\nಉದಿಪುದಾ ರಸ ಸುಂದರದ ಕಿರಣ ಸೋಕೆ ॥\nಬದುಕಿನೊಳ್ ಕವಿತೆಯೊಳ್ ಕಲೆಗಳೊಳ್ ಪ್ರಕೃತಿಯೊಳ್ ।\nಪುದಿದಿರ್ಪ ಕಾಂತಿಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೫೯ ॥",
    kannada_explanation:
      "ಸೌಂದರ್ಯದ ಕಿರಣ ನಮ್ಮನ್ನು ಸೋಕಿದೊಡನೆ ತತ್ಸಂಬಂಧವಾದ ‘ರಸ’ ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಉಕ್ಕಿ ಹೃದಯದ ಅನುಭವಕ್ಕೆ ಬಂದಾಗ, ಆತ್ಮವು ನಿಜಾನಂದವನ್ನು ಪಡೆಯುವುದು. ಬದುಕಿನಲ್ಲಿ, ಕವಿತೆ, ಕಲೆ ಮತ್ತು ಪ್ರಕೃತಿಗಳಲ್ಲಿ ಅಂತಹ ಅನಂದವನ್ನು ನೀಡುವ ಕಾಂತಿ ಅಡಗಿದೆ ಎಂದು ನಿಜಾನಂದಾನುಭೂತಿಯ ವಿಚಾರವನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 460,
    english:
      "Providence locks you up in the prison of this world. There are windows that let you see outside – scriptures, fine arts and literature. Look through those windows towards the sky experience the infinite. That is the way to liberate yourself. While doing so, you should make sure you make the rest of the world happy also. - Mankutimma",
    kannada:
      "ಜಗದ ಬಂದೀಗೃಹದಿ ಬಿಗಿಯುತಿರೆ ವಿಧಿ ನಿನ್ನ ।\nನಿಗಮ ಸತ್ಕಲೆ ಕಾವ್ಯಗಳ ಗವಾಕ್ಷಗಳಿಂ ॥\nಗಗನದೊಳನಂತದರ್ಶನದೆ ಮುಕ್ತಿಯನೊಂದು ।\nನಗುನಗಿಸಿ ಲೋಕವನು - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೦ ॥",
    kannada_explanation:
      "ವಿಧಿಯು ನಿನ್ನನ್ನು ಈ ಜಗತ್ತಿನ ಬಂದೀಖಾನೆಯಲ್ಲಿ ಸೆರೆಯಾಳಾಗಿಸಿರುವಾಗ,ಬಂದೀಖಾನೆಯ ಸೂರಿನಲ್ಲಿರುವ ಕಿಟಕಿಗಳಿಂದ ಆಕಾಶದ ಅನಂತ ದರ್ಶನದಿಂದ, ವೇದ, ಕಲೆ ಕಾವ್ಯಗಳಂತಹ ವಿಚಾರಗಳನ್ನು ಅರಿತು, ಈ ಜಗತ್ತಿನಲ್ಲಿ ಅನಂದವನ್ನು ಪಡೆದು ನಕ್ಕು ನಲಿದು, ಪರರನ್ನೂ ನಗಿಸಿ, ಮುಕ್ತಿಯನು ಹೊಂದು ಎಂದು ಅಪ್ಪಣೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 461,
    english:
      "When Rama and Bharatha met and hugged each other, tears of love rolled like a torrent. Such was their emotions which crossed all limits of love and beauty. Once in a while letting our emotions flow like this is good for life. – Mankutimma\n\n[Translator's note: Bharatha loved his brother Rama very much and still cited as exemplary example of brotherly love. Due to certain circumstances, Rama had to go on exile. Bharatha visited Rama twice during the exile (Panchavati and Nandigrama) and both times the meeting is described in Ramayana to be very emotional]",
    kannada:
      "ರಾಮನುಂ ಭರತನುಂ ತಬ್ಬಿಕೊಂಡತ್ತಂದು ।\nಪ್ರೇಮಾಶ್ರುವುಕ್ಕಿ ನದಿಯಾಗಿ ಪರಿದಂದು ॥\nಸೀಮೆಯಂ ಮುಟ್ಟಿತಲ ಬಾಂಧವ್ಯಸೌಂದರ್ಯ ।\nಕ್ಷೇಮವದು ಜೀವಕ್ಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೧ ॥",
    kannada_explanation:
      "ರಾಮನು ಭರತನನ್ನು ಗಾಢವಾಗಿ ತಬ್ಬಿಕೊಂಡು ಅತ್ತ ದಿನ ಅವರಿಬ್ಬರಲ್ಲೂ ಪ್ರೇಮಾಶ್ರುವು ಉಕ್ಕಿ ನದಿಯಾಗಿ ಹರಿದು ಭಾವ ಸೌಂದರ್ಯದ ಗರಿಮೆಯನ್ನು ಮುಟ್ಟಿದಂತೆ, ಪ್ರತೀ ಜೀವಿಯೂ ಭಾವ ಸೌಂದರ್ಯದಲ್ಲಿ ಮೆರೆದರೆ ಅದು ಜೀವಕ್ಕೆ ಹಿತ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 462,
    english:
      "Valmiki has painted a very beautiful picture depicting magnanimity of love in Ramayana. In Mahabharata, Vyasa has shown us the intricate subtleties of various hues of morality. In the Bhagavadgita, he has revealed the secret of life in this world. That is the reason why these poems are famous. - Mankutimma",
    kannada:
      "ಪ್ರೀತಿಮಹಿಮೆಯ ಚಿತ್ರರೀತಿಯಂ ವಾಲ್ಮೀಕಿ ।\nನೀತಿಸೂಕ್ಷ್ಮದ ಗಹನಮಾರ್ಗಮಂ ವ್ಯಾಸರ್ ॥\nಗೀತೆಯಲಿ ವಿಶ್ವಜೀವನರಹಸ್ಯವನವರ್ ।\nಖ್ಯಾತಿಸಿಹರದು ಕಾವ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೨ ॥",
    kannada_explanation:
      "ವಾಲ್ಮೀಕಿ ಮಹರ್ಷಿಯು ರಾಮಾಯಣದಲ್ಲಿ ಪ್ರೀತಿಯ ಮಹಿಮೆಯನ್ನೂ, ವ್ಯಾಸ ಮಹರ್ಷಿಯು ಮಹಾಭಾರತದಲ್ಲಿ ನೀತಿ ಸೂಕ್ಷ್ಮದ ಉನ್ನತ ವಿಚಾರಗಳನ್ನೂ, ಭಗವಾನ್ ಶ್ರೀ ಕೃಷ್ಣ ‘ಭಗವದ್ಗೀತೆ’ಯಲ್ಲಿ ಬದುಕಿನ ರಹಸ್ಯವನ್ನೂ ತೋರಿ ಜಗತ್ತಿನಲ್ಲಿರುವ ‘ಪ್ರೀತಿ, ನೀತಿ ಮತ್ತು ಜೀವನ’ದ ಸೌಂದರ್ಯವನ್ನು ಕಾವ್ಯರೂಪದಲ್ಲಿ ನೀಡಿದ್ದಾರೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 463,
    english:
      "The language that the heart understands is that of emotions. Discussions and words are good for conveying ideas or arguments. It is apt that the heart and mind must be like husband and wife. Life is happy when emotions and logic are both in present in right proportions. - Mankutimma",
    kannada:
      "ಹೃದಯಕೊಪ್ಪುವ ಭಾಷೆ ರಾಗಲಯ ವಿಸ್ತಾರ ।\nಪದ ಚರ್ಚೆ ಮಿತವಿಚಾರಕೆ ತಕ್ಕ ಭಾಷೆ ॥\nಹೃದಯಮತಿ ಸತಿಪತಿಗಳಂತಿರಲು ಯುಕ್ತವದು ।\nಬದುಕು ರಸತರ್ಕೈಕ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೩ ॥",
    kannada_explanation:
      "ಹೃದಯಕ್ಕೆ ಮುದನೀಡುವುದು ಸಂಗೀತ, ಕಲೆ, ಪ್ರಕೃತಿ ಮುಂತಾದವು ಅಗತ್ಯ . ತಮ್ಮ ತಮ್ಮ ಅಭಿಪ್ರಾಯವನ್ನು ಸಿದ್ಧಪಡಿಸಲು ಚರ್ಚೆಗೆ ವಾಗ್ಜರಿ ಬೇಕು. ಹೃದಯ ಮತ್ತು ಬುದ್ಧಿ ಎರಡೂ ಗಂಡ-ಹೆಂಡಿರಂತಿರಲು ಬದುಕಿನಲ್ಲಿ ರಸಾನುಭವ ಮತ್ತು ತರ್ಕದ ಐಕ್ಯತೆಯನ್ನು ಕಂಡರೆ ಬದುಕು ಸುಂದರವಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 464,
    english:
      "The essence of life flows as emotions in the bottom of every heart. Poets listen (and hear) this secret that comes out as poems and songs. Similarly, it is the sages opinion that the truth beyond this world comes to as the Vedas - Mankutimma",
    kannada:
      "ಸ್ರವಿಸುವುದು ಜೀವರಸ ಹೃದಯಗರ್ತದ ತಳದಿ ।\nಕಿವಿಗಾ ರಹಸ್ಯದಲಿ ಕಾವ್ಯಗಾನಗಳಿಂ ॥\nಭುವನದಾಚಿನ ರಹಸ್ಯದ ಕೀರ್ತಿ ವೇದಗಳ ।\nರವದಿನೆಂದಾರ್ಷಮತ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೪ ॥",
    kannada_explanation:
      "ಕಾವ್ಯವೋ, ಕವನವೋ,ಗಾಯನವೋ ಅಥವಾ ಯಾವುದಾದರೂ ಒಂದು ವಾದ್ಯದ ಸಂಗೀತವೋ ನಾವು ಏಕಾಂತದಲ್ಲಿದ್ದಾಗ ನಮ್ಮ ಕಿವಿಗಳಿಗೆ ಬಿದ್ದರೆ ನಮ್ಮ ಹೃದಯಗಳಿಂದ ಜೀವರಸ ಒಸರುತ್ತದೆ. ಇದು ಈ ಜಗತ್ತಿನ ವಿಷಯವಾದರೆ, ಈ ಭೂಮಿಯಿಂದಾಚಿನ ಜ್ಞಾನವು, ರಹಸ್ಯವಾಗಿ ವೇದಗಳಾಗಿ ಶಬ್ದರೂಪದಿ ನಮಗೆ ಇಳಿದುಬಂದಿದೆ ಎನ್ನುವುದು ಋಷಿಗಳ ಅಭಿಮತ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 465,
    english:
      "Melodious songs, drama and fabulous acting can trigger emotions and innate urges that are asleep deep in our mind. Fine arts is imitating God. - Mankutimma",
    kannada:
      "ಸ್ವರರಾಗಗೀತಿಗಳು ನಾಟ್ಯಾಭಿನೀತಿಗಳು ।\nಕರೆದೇಳಿಸುವುವು ಮನಸಿನಲಿ ನಿದ್ರಿಸುವಾ ॥\nಪರಿಪರಿಯ ಭಾವಗಳ ಗೂಢಸ್ವಭಾವಗಳ ।\nಪರಮೇಷ್ಠಿ ಟೀಕು ಕಲೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೫ ॥",
    kannada_explanation:
      "ಸುಮ್ಮನಿರುವ ಅಥವಾ ಶಾಂತವಾಗಿರುವ ಮನಸ್ಸನ್ನು ಕರೆದು ಎಬ್ಬಿಸಿ ಸ್ವರ ರಾಗ ಗೀತೆಗಳ ಕೇಳುವ ಮತ್ತು ಕೇಳಿ ಆನಂದಿಸುವ, ನಾಟ್ಯ, ಅಭಿನಯ ಮುಂತಾದವುಗಳ ನೋಡುವ ಮತ್ತು ಹಾಗೆ ಕೇಳಿ ನೋಡಿದ್ದನ್ನು ಪರಿಪರಿಯಾಗಿ ಆನಂದಿಸುವ ಮಾನವನ ಹಲವಾರು ಗುಪ್ತ ಮತ್ತು ಸುಪ್ತ ಭಾವಗಳು ಆ ಪರಮಾತ್ಮನ ಸೃಷ್ಟಿಯನ್ನೇ ಟೀಕಿಸುವ ಅಥವಾ ಅಣಕವಾಡುವ ಕಲೆಯಂತೆ ಇದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 466,
    english:
      "Everyday emotions are of two types – that which make us happy (laugh) or make us sad (cry). But there is one which is different from the two. It is the vision of this strange universe and the secret of life. That emotion is nothing but wonderful silence. - Mankutimma",
    kannada:
      "ವ್ಯಸನಕಾರಣವೊಂದು ಹಸನಕಾರಣಾವೊಂದು ।\nರಸಗಳೀಯೆರಡಕಿಂತಾಳವಿನ್ನೊಂದು ॥\nಭೃತವಿಶ್ವಜೀವಿತಗಭೀರತೆಯ ದರ್ಶನದ ।\nರಸವದದ್ಭುತಮೌನ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೬ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೌಂದರ್ಯಗಳು, ಕೆಲವರಿಗೆ ವ್ಯಸನಕ್ಕೆ ಕಾರಣವಾದರೆ,ಮತ್ತೆ ಕೆಲವು ಹರುಷಕ್ಕೆ ಕಾರಣವಾಗುತ್ತವೆ. ಆದರೆ ಈ ಎರಡೂ ರಸಗಳಿಗಿಂತ ಆಳವಾದ ಇನ್ನೊಂದು ಅನುಭವವಿದೆ. ಈ ವಿಶ್ವದ ಗಂಭೀರತೆಯ ವಿಚಿತ್ರವನ್ನು ನೋಡಿದರೆ ಮನದಲ್ಲಿ ಒಂದು ಗಾಢ ಮೌನ ಆವರಿಸುತ್ತದೆ. ಈ ಮೌನ ರಸದ ಅನುಭವ ಬಹಳ ಅದ್ಭುತ ಎಂದು ಪ್ರಕೃತಿ ಸೌಂದರ್ಯವನ್ನು ಅನುಭವಿಸುವಲ್ಲಿ ಮಾನವನ ಚಿತ್ರ ವಿಚಿತ್ರವಾದ ಪ್ರತಿಕ್ರಿಯೆಯ ಬಗ್ಗೆ ನಮಗೆ ವಿವರಿಸಿದ್ದಾರೆ ಅ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 467,
    english:
      "The qualities of the soul are innumerable, immeasurable and indescribable. They can only be experienced. It is reflected in what we do using our mind, body and life. When we see that, we realize that every atom is beautiful.  - Mankutimma",
    kannada:
      "ಗಣನೆಗೆಟುಕದ ಗುಣಗಳಾತ್ಮದವವರ್ಣ್ಯಗಳು ।\nಮನದ ದೇಹದ ಜೀವದೆಲ್ಲ ಕರಣಗಳಾ ॥\nಅನುಭವದ ಮುಕರದೊಳ್ ಪ್ರತಿಫಲಿಸೆ ತನ್ನದೊಂ - ।\nದಣುವದುವೆ ಸುಂದರವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೭ ॥",
    kannada_explanation:
      "ವರ್ಣಿಸಲು ಆಗದ ಮತ್ತು ಎಣಿಸಲು ಆಗದ ಆತ್ಮದ ಗುಣಗಳು ಮನಸ್ಸಿನ, ದೇಹದ, ಜೀವದ ಇಂದ್ರಿಯಗಳಿಂದ ಪಡೆದ ಅನುಭವಗಳನ್ನು ಮತ್ತು ಅದರಿಂದ ಪಡೆದ ಆನಂದವನ್ನು ಕನ್ನಡಿಯಂತಹ ಮುಖದ ಮೂಲಕ ಪ್ರತಿಫಲಿಸಿದಾಗ ಆ ಅನುಭವದ ಸೌಂದರ್ಯ ಇನ್ನೂ ಹೆಚ್ಚಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 468,
    english:
      "Beauty is the natural quality of the soul. It is perhaps why people of the world imagine Gods to be in beautiful form (idols). They become happy by  offering all the worldly items that they like to Gods. - Mankutimma",
    kannada:
      "ಲಾವಣ್ಯವಾತ್ಮಗುಣವದರಿಂದೆ ಲೋಕಜನ ।\nದೇವನನು ಕಮನೀಯ ವಿಗ್ರಹಂಗಳಲಿ  ॥\nಭಾವಿಸುತ ತಮ್ಮಿಷ್ಟಭೋಗಗಳನರ್ಪಿಸುವ ।\nಸೇವೆಯಿಂ ನಲಿಯುವರು - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೮ ॥",
    kannada_explanation:
      "ಆತ್ಮದ ಗುಣ ಬಹಳ ಸುಂದರ. ಇಂತಹ ಸುಂದರ ಭಾವದಿಂದ ಸುಂದರ ವಿಗ್ರಹಗಳಲ್ಲಿ ಆ ಪರಮಾತ್ಮನನ್ನು ಭಾವಿಸುತ್ತಾ, ಆ ಪರಮಾತ್ಮನಿಗೆ ತಮಗಿಷ್ಟವಾದ ಪದಾರ್ಥಗಳನ್ನು ನೈವೇದ್ಯವಾಗಿ ಅರ್ಪಿಸುವ ಸೇವೆಯನ್ನು ಮಾಡುತ್ತಾ, ಲೋಕದ ಜನರು ನಲಿಯುತ್ತಾರೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 469,
    english:
      "The experience of beauty is divine secret, just like the secret of creation. The longing for that experience forms the base for every one's longing to live. The exact definition of a beautiful experience varies from culture to culture. To be able to recognize and experience it is itself a penance. - Mankutimma",
    kannada:
      "ಸೌಂದರ್ಯವೊಂದು ದೈವರಹಸ್ಯ, ಸೃಷ್ಟಿವೊಲು ।\nನಿಂದಿರ್ಪುದದರಾಶೆಯಿನೆ ಜೀವಿತಾಶೆ ॥\nಅಂದುವುದು ಕಣ್ಣಿಗದು ಸಂಸ್ಕೃತಿಗೆ ತಕ್ಕಂತೆ  ।\nಚೆಂದದರಿವೆ ತಪಸ್ಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೬೯ ॥",
    kannada_explanation:
      "‘ಒಂದು ವಸ್ತುವು ಸುಂದರವಾಗಿ ಏಕೆ ಇದೆ?’ ಎನ್ನುವುದು ದೇವ ರಹಸ್ಯ. ಆ ಸೌಂದರ್ಯವನ್ನು ನೋಡಲು ಪಡೆಯಲು ಮತ್ತು ಅನುಭವಿಸಲು ಮಾನವನಲ್ಲಿ ಇರುವ ಬಯಕೆಯೇ ಅವನ ಬದುಕಿನಾಸೆಗೆ ಅಧಾರ. ಪ್ರತಿಯೊಂದು ವಸ್ತುವಿನ ಅಂದ ಅಥವಾ ಸೌಂದರ್ಯಾನುಭವ ಆಯಾ ವ್ಯಕ್ತಿಯ ಸಂಸ್ಕೃತಿ, ಸಂಸ್ಕಾರಗಳಿಗೆ ಅನುಗುಣವಾಗಿರುತ್ತದೆ. ಆದರೆ ಒಂದು ವಸ್ತುವಿನ ನಿಜ ಸೌಂದರ್ಯವನ್ನು ಅರಿಯುವುದೇ ತಪಸ್ಸು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 470,
    english:
      "Soundaryakameshti, is a metaphor for antics people do to experience beauty. It is a furnace where many different rasa (emotions, feelings) are distilled. A poet can create such a world where everything is beautiful. An artist can bring it right in front of your eyes. But it is right there in nature's secret (from with in the cave) all around us. Penance is the only way to see it. - Mankutimma",
    kannada:
      "ವಿವಿಧರಸಗಳ ಭಟ್ಟಿ, ಸೌಂದರ್ಯಕಾಮೇಷ್ಟಿ  ।\nಕವಿಜಗತ್ಸೃಷ್ಟಿಯದು, ಕಲೆಗನಾಕೃಷ್ಟಿ ॥\nಗವಿಯೊಳಗಣ ಪ್ರಕೃತಿಯಂತ್ರ ವೈಚಿತ್ರ್ಯವದು ।\nತಪಸೊಂದೆ ಪಥವದಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೦ ॥",
    kannada_explanation:
      "ಹಲವಾರು ರಸಗಳನ್ನು ಭಟ್ಟಿ ಇಳಿಸಿದಂತೆ ಮನಸ್ಸಿನಲ್ಲಿ ಸೌಂದರ್ಯೋಪಾಸನೆಯ ಒಂದು ಯಜ್ಞ ನಡೆಯುತ್ತದೆ. ಕವಿಯ ಕಾವ್ಯ, ಕವನ, ಕವಿತೆ ಮುಂತಾದವುಗಳಿಂದ, ಕಲಾವಿದನ ಸೃಷ್ಟಿಯಾದ ಚಿತ್ರ, ಶಿಲ್ಪ, ನೃತ್ಯ, ಗಾಯನ ಮುಂತಾದವುಗಳ ಸೆಳೆತದಿಂದ ಮತ್ತು ಮನವೆಂಬ ಗುಹೆಯಲ್ಲಿ ಸ್ವಾಭಾವಿಕವಾಗಿ ನಡೆಯುವ ಮಂಥನದಿಂದ ಭಾವರಸೋತ್ಪತ್ತಿಯಾಗಿ, ಆ ಭಾವಗಳೇ ಸೌಂದರ್ಯಾನುಭವದ ಯಜ್ಞಕ್ಕೆ ಹವಿಸ್ಸಾಗುತ್ತದೆ. ಆ ರೀತಿಯ ಅನುಭವಕ್ಕೆ ತಪಸ್ಸೊಂದೇ ಮಾರ್ಗವೆಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 471,
    english:
      "These people are all creators of beauty in their own ways - a sculptor at a temple, an engineer who builds machines, a diplomat, a scientist, an entrepreneur, a leader, a philanthropist who gets people together. - Mankutimma",
    kannada:
      "ಮಂದಿರದ ಶಿಲ್ಪಿ ಯಂತ್ರಗಳ ಯೊಜಕ ರಾಜ್ಯ - ।\nಸಂಧಾನಿ ವಿಜ್ಞಾನಿಯುದ್ಯೊಗದಾನಿ ॥\nಮಂದಿಮುಂದಾಳು ಜನಬಾಂಧವ್ಯಪೋಷಕನು ।\nಸೌಂದರ್ಯಕರರಿವರು - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೧ ॥",
    kannada_explanation:
      "ಮಂದಿರವನ್ನು ನಿರ್ಮಿಸುವ ಶಿಲ್ಪಿ, ಯಂತ್ರಗಳನ್ನು ಸೃಷ್ಟಿಸುವ ವಿಜ್ಞಾನಿ ಆ ಯಂತ್ರಗಳನ್ನು ಕೈಗಾರಿಕೆಗಾಗಿ ಉಪಯೋಗಿಸುವ ಉದ್ಯಮಿ, ಸಮಾಜದ ವ್ಯವಸ್ಥೆಗೆ ರಾಜ್ಯಬಾರ ಕ್ರಮವನ್ನು ಅನುಸಂಧಾನ ಮಾಡುವ ರಾಜಕಾರಣಿ, ಉದ್ಯಮಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ಸಾವಿರಾರು ಜನರಿಗೆ ಉದ್ಯೋಗವನ್ನು ಕೊಡುವವ, ಜನರನ್ನು ಹುರಿದುಂಬಿಸಿ ಕಾರ್ಯೋನ್ಮುಖರನ್ನಾಗಿಸುವ ಜನನಾಯಕರು ಮತ್ತು ಜನರಲ್ಲಿ ಪರಸ್ಪರ ಬಾಂಧವ್ಯವನ್ನು ಹೆಚ್ಚಿಸುವವರು, ಇವರೆಲ್ಲರೂ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸೌಂದರ್ಯವನ್ನು ಉಂಟುಮಾಡುವವರು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 472,
    english:
      "These people give freshness to our minds every day - a poet, a painter, a scientist/philosopher interested in the finding out the truth, people who are experts in playing instruments, singers, dancers and other artisans. Their acts enhance the experience of beauty every day. - Mankutimma",
    kannada:
      "ಕವಿ ಚಿತ್ರಕೋವಿದನು ಪರತತ್ತ್ವಶೋಧಕನು ।\nವಿವಿಧ ವಾದನ ಗೀತ ನೃತ್ಯ ಕುಶಲಿಗಳು ॥\nನವನವತೆಯಂ ಮನಸಿಗೀವೆಲ್ಲ ಕಲೆಗಾರ- ।\nರವರಿಂದ ಸುಂದರತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೨ ॥",
    kannada_explanation:
      "ಕವಿ, ಚಿತ್ರ ಕಲಾವಿದ, ಪರತತ್ವವನು ಶೋಧಿಸಿ ಸತ್ವ ಗ್ರಾಹಕ ಮತ್ತು ತತ್ವ ಪ್ರಚಾರಕನು, ವಿವಿಧ ವಾದ್ಯಗಳನ್ನು ನುಡಿಸುವ ಕಲಾವಿದರು, ಸಂಗೀತ, ನೃತ್ಯ ಮುಂತಾದ ಕಲೆಗಳಲ್ಲಿ ನಿಪುಣತೆಯನ್ನು ಪಡೆದ ಕುಶಲಿಗಳು, ತಮ್ಮ ತಮ್ಮ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಹೊಸ ಹೊಸ ಆವಿಷ್ಕಾರವನ್ನು ಮಾಡಿ, ಹೊಸವಿಚಾರಗಳನ್ನು ನಮಗೆ ನೀಡಿ ಆನಂದವನ್ನು ನೀಡುವರು, ಇವರ ಸೃಷ್ಟಿಯೂ ಸಹ ‘ಸುಂದರತೆ’ಯನ್ನು ಜಗತ್ತಿಗೆ ನೀಡುತ್ತದೆ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಹಲವಾರು ಜನ ತಮ್ಮ ಕಲ್ಪನೆ ಮತ್ತು ಕುಶಲತೆಯಿಂದ ಬದುಕಿನ ಸುಂದರತೆಗೆ ತಮ್ಮ ಕಾಣಿಕೆಯನ್ನು ನೀಡುತ್ತಾರೆ ಎನ್ನುವ ಭಾವವನ್ನು ಈ ಮುಕ್ತಕದಲ್ಲಿ ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 473,
    english:
      "Parijata plant gives very fragrant flowers. A poet may imagine it, sigh and create a beautiful poem telling the story of how Krishna brought the tree from heaven to earth. The poem will be beautiful. But a king creates beauty by his action - getting the sapling planted in the garden of the town and making sure it grows well. Both are creators of beauty. - Mankutimma",
    kannada:
      "ಪಾರಿಜಾತವ ಕಂಡು ನಿಡುಸುಯ್ದು, ಪದಗಳಿಂ ।\nಶೌರಿಕಥೆಯನು ಹೆಣೆದು ತೃಪ್ತನಹನು ಕವಿ ॥\nಊರಿನುದ್ಯಾನಕದ ತರಿಸಿ ಬೆಳಸುವ ಕಾರ್ಯ- ।\nಧೀರನಲ ರಾಜ್ಯಕನು - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೩ ॥",
    kannada_explanation:
      "ಶ್ರೀ ಕೃಷ್ಣನ ಭಾರ್ಯೆ ರುಕ್ಮಿಣಿಗೆ ನಾರದನು ತಂದುಕೊಟ್ಟ, ದೇವಲೋಕದ ಪಾರಿಜಾತ ಪುಷ್ಪವನ್ನು ಕಂಡು ಅಸೂಯೆಗೊಂಡ ಸತ್ಯಭಾಮೆಯನ್ನು ಮೆಚ್ಚಿಸಲು ಶ್ರೀ ಕೃಷ್ಣ ಆ ದೇವಲೋಕದ ಪಾರಿಜಾತ ವ್ರುಕ್ಷವನ್ನೇ ಕದ್ದು ತಂದ ಕತೆಯನ್ನು ಕವಿ ತನ್ನ ಕಲ್ಪನೆಯಿಂದ ಹೆಣೆದಿದ್ದಾನೆ. ಹೀಗೆ ಕವಿ ತನ್ನ ಕಲ್ಪನೆಯಲ್ಲಿ ಬರುವ ಎಲ್ಲವನ್ನೂ ಕಾವ್ಯದಲ್ಲಿ ಸಾಜವನ್ನು ಸುಂದರವಾಗಿಸುವ ಸದುದ್ದೇಶದಿಂದ ತುಂಬಿದಾಗ ಅವನು ಮಹಾಕವಿಯಾಗುತ್ತಾನೆ. ಜನರು ಅದರಲ್ಲಿ ಶ್ರದ್ಧೆಯನ್ನಿಟ್ಟಾಗ, ರಾಜನು ಅದನ್ನು ಕಾರ್ಯರೂಪಕ್ಕೆ ತಂದಾಗ ಅವನು ಧೀರನಾಗುತ್ತಾನೆ ಎಂದು ಉಲ್ಲೇಖಮಾದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 474,
    english:
      "Man's immortality is in reconstructing that which has fallen down. We should not shy away from that responsibility. The sky cleans the earth again and again by pouring rain on earth tirelessly. An agriculture field does not refuse produce after the first harvest. Does it? You should always build the broken house back. - Mankutimma",
    kannada:
      "ಬಿದ್ದುದನು ನಿಲ್ಲಿಪುದೆ ನರನ ಮೃತ್ಯುಂಜಯತೆ ।\nಶುದ್ಧಿಸದೆ ನಭ ಧರೆಯ ಮರಮರಳಿ ಮಳೆಯಿಂ? ॥\nಗದ್ದೆ ಕೊಯ್ಲಾಗೆ ಮಗುಳ್ದದು ಬೆಳೆಯ ಕುಡದಿಹುದೆ? ।\nಬಿದ್ದ ಮನೆಯನು ಕಟ್ಟೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೪ ॥",
    kannada_explanation:
      "ಕೊಳೆಯಾದ ಇಳೆಯನ್ನು ಮಳೆಯಿಂದ ಮತ್ತೆ ಮತ್ತೆ ತೊಳೆಯುವ ಆ ಆಕಾಶದಂತೆ, ಬೆಳೆಯನ್ನು ಕೊಯ್ದ ನಂತರವೂ ಮತ್ತೆ ಮತ್ತೆ ಬೆಳೆ ಬೆಳೆಯುವ ಈ ಧರೆಯಂತೆ, ಕೆಳಗೆ ಬಿದ್ದಿರುವುದನ್ನು ಎತ್ತಿ ನಿಲ್ಲಿಸುವುದೇ ಮಾನವನ ನಿರಂತರ ಕ್ಷಮತೆ. ಹಾಗಾಗಿ ಬಿದ್ದ ಮನೆಯನ್ನು ಎತ್ತಿ ಕಟ್ಟೋ ಎಂದು ಆದೇಶಿಸುತ್ತಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 475,
    english:
      "Respect life, respect the source of all energy. Don't be disinterested in this world assuming someone else is running it. Putting in hard work is the only path towards prosperity. It is also the path towards enrichment of your soul. - Mankutimma",
    kannada:
      "ಗೌರವಿಸು ಜೀವನವ, ಗೌರವಿಸು ಚೇತನವ ।\nಆರದೋ ಜಗವೆಂದು ಭೇದವೆಣಿಸದಿರು ॥\nಹೋರುವುದೆ ಜೀವನಸಮೃದ್ಧಿಗೋಸುಗ ನಿನಗೆ ।\nದಾರಿಯಾತ್ಮೊನ್ನತಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೫ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಜೀವನವನ್ನು ಗೌರವಿಸು, ಆ ಜೀವನಕ್ಕೆ ಮೂಲವಾದ ಚೇತನವನ್ನು ಗೌರವಿಸು. ಇದು ಯಾರದೋ ಜಗತ್ತು, ನಾನೇನೂ ಇಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಇರುವುದಿಲ್ಲವಲ್ಲ ಎಂದು ಬದುಕನ್ನು ಗೌಣವೆಂದೆಣಿಸಬೇಡ. ಈ ಬದುಕಿನಲ್ಲಿ ನಾವು ಹೋರಾಡುವುದೇ ಸಮೃದ್ಧಿಗೋಸ್ಕರ. ಈ ಹೋರಾಟ ನಮಗೆ ಆತ್ಮೋನ್ನತಿಗೆ ದಾರಿಯಾಗಿದೆ ಎಂದು ಬಹಳ ಗಹನವಾದ ತತ್ವವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ ಅರುಹಿದ್ದಾರೆ.",
  },
  {
    number: 476,
    english:
      "Consider all hard work we put in this world same as tending to a garden. If the fruits of our cultivation of feelings and emotions brings sparkle of smiles on many faces, then we can think we served God well. - Mankutimma",
    kannada:
      "ಜೀವನೋದ್ಯಮವೆಲ್ಲ ತೋಟದುದ್ಯೋಗವೆನು ।\nಭಾವಬುದ್ಧಿಗಳ ಕೃಷಿಯಿಂದೊಗೆದ ಫಲದಿಂ ॥\nತೀವುತಿರೆ ನಗೆ ಹೊಳಪು ಮೊಗಮೊಗದೊಳಂ ಜಗದಿ ।\nಸೇವೆಯದು ಬೊಮ್ಮಂಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೬ ॥",
    kannada_explanation:
      "ಸಕಲ ಚರಾಚರಗಳ ಜಗತ್ತಿನ ಜೀವನವು ಆ ಪರಮಾತ್ಮನ ತೋಟ ಅಥವಾ ಉದ್ಯಾನವನ. ನಾವೆಲ್ಲಾ ಅವನು ಬೆಳೆಸಿದ ನಡೆದಾಡುವ ಗಿಡಗಳು. ನಮ್ಮ ಭಾವಗಳ ಮಂಥನದಿಂದ ಈ ಉದ್ಯಾನವನ್ನು ಕೃಷಿಗೈದಾಗ, ‘ಆನಂದ’ದ ರೂಪದಲ್ಲಿ ಸುಫಲ ಲಭ್ಯವಾಗಿ ಪ್ರತೀ ಜೀವಿಯ ಮುಖದಲ್ಲೂ ನಗೆ ಮತ್ತು ಸಂತೋಷದ ಹೊಳಪು ತುಂಬಿ ತುಳುಕ್ಕುತ್ತಿದ್ದರೆ, ಆ ಕೃಷಿಯೇ ನಾವೆಲ್ಲಾ ಮಾಡುವ ‘ಪರಮಾತ್ಮನ ಸೇವೆ’ ಯೆಂದಾಗುತ್ತದೆ ಎಂದು ಪರಮಾತ್ಮನ ಸೇವೆಯ ಮತ್ತೊಂದು ವಿಧಾನವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 477,
    english:
      "What do you feel when you see a rose blooming in a plant? Do you feel pain? or pleasure? See the thorn also. Our life secret is also as simple as that. The rose the goal of life. The thorns are the only ways to attain it. - Mankutimma",
    kannada:
      "ಹೂವ ತಳೆದ ಗುಲಾಬಿಯಿಂದ ಮನಕಹುದೇನು? ।\nನೋವೋ? ಸಂತಸವೊ? ನೋಡಾಮುಳ್ಳು ಬಾಳ್ಗೆ ॥\nಹೂವೆ ದಿವ್ಯಕಿರೀಟವದುವೆ ಕಾಲಕಟಾಕ್ಷ ।\nಜೀವನದ ತಿರುಳಷ್ಟೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೭ ॥",
    kannada_explanation:
      "ಸುಂದರವಾದ ಹೂವನ್ನು ತಳೆದ ಗುಲಾಬಿ ಗಿಡದಿಂದ ನಾವು ಅರಿಯುವುದು ಅಥವಾ ಅನುಭವಿಸುವುದು, ನೋವೋ ನಲಿವೋ ಸಂತಸವೋ?. ನೋಡಿ, ಗಿಡದ ಮುಳ್ಳನ್ನು ಬಾಳಿಗೆ ಹೋಲಿಸಿಕೊಂಡರೆ, ಗಿಡದ ಶಿಖರದಲ್ಲಿ ತಳೆಯುವ ಆ ಸುಂದರ ಹೂವನ್ನು ನಾವು ನಡೆದು ಬಂದ ಕಾಲವು ನಮಗೆ ಜೀವನದ ಅಂತ್ಯದಲ್ಲಿ ಕರುಣಿಸುವ ಶಾಂತಿ ನೆಮ್ಮದಿ ಅಥವಾ ಸುಖಕ್ಕೆ ಹೋಲಿಸಿಕೊಳ್ಳಬೇಕು. ಜೀವನದ ತಿರುಳು ಅಥವಾ ಸಾರವು ಅಷ್ಟೇ ಎಂದು ಜೀವನಾನುಭವವನ್ನು ನಾವು ಹೇಗೆ ಪರಿಗಣಿಸಬೇಕು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 478,
    english:
      "A gardener will dig, put manure, pour water and grow a rose plant. He will endure the pain caused by the piercing of the thorns. The rose bud smiles only for half a second. Its life ends after the smile. But that smile is worth all the effort. - Mankutimma",
    kannada:
      "ಅಗೆದು ಗೊಬ್ಬರವಿಕ್ಕಿ ನೀರೆರೆದು ತೋಟಿಗನು ।\nಜಗಿದ ಮುಳ್ಳಿರಿತಗಳ ಸೈರಿಸೆ ಗುಲಾಬಿ ॥\nನಗುವುದೊಂದರೆನಿಮಿಷ ನಗಲು ಬಾಳ್ಮುಗಿಯುವುದು ।\nಮುಗುಳು ದುಡಿತಕೆ ತಣಿಸು - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೮ ॥",
    kannada_explanation:
      "ಆ ಗುಲಾಬಿ ತೋಟದ ಮಾಲಿ, ನೆಲ ಅಗೆದು ಸಸಿಯ ನೆಟ್ಟು, ಅದಕ್ಕೆ ಗೊಬ್ಬರವ ಕೊಟ್ಟು ನೀರೆರೆದು, ಸೈರಣೆಯಿಂದ ಆ ಗಿಡದ ಮುಳ್ಳುಗಳಿಂದ ಚುಚ್ಚಿಸಿಕೊಂಡು, ಪ್ರೀತಿಯಿಂದ ಆ ಗಿಡವನ್ನು ಬೆಳೆಸಿದರೆ ಒಂದು ದಿನ ಹೂ ಬಿಟ್ಟು, ಅಲ್ಪಕಾಲವಾದರೂ ಜಗಕೆ ಸಂತಸವನ್ನು ಕೊಡುತ್ತಾ ನಲಿದಾಗ, ಮಾಲಿಯ ಅಷ್ಟೂ ದುಡಿತಕ್ಕೂ ಒಂದು ಸಾರ್ಥಕ್ಯದ ಭಾವ ಮೂಡುತ್ತದೆ, ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ‘ಆನಂದ’ವನ್ನು ಅನುಭವಿಸುವ ಪರಿಯ ಮತ್ತೊಂದು ಕೋನವನ್ನು ನಮಗೆ ವಿಶಧೀಕರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 479,
    english:
      "What is the meaning of truth in the life of a soldier? The sword is the only truth he knows. All morality is derived from that. He has no belief in the simple pleasures of life - food, sleep and merry. People believe what gives them satisfaction as the ultimate truth. - Mankutimma",
    kannada:
      "ಸತ್ಯವೆಂಬುದದೇನು ಸೈನಿಕನ ಜೀವನದಿ? ।\nಕತ್ತಿಯವನಿಗೆ ಸತ್ಯವದರಿಂದೆ ಧರ್ಮ ॥\nಭುಕ್ತಿಸುಪ್ತಿಗಳ ವಿಭವಂಗಳವನಿಗೆ ಮಿಥ್ಯೆ ।\nಸಾರ್ಥಕತೆಯಿಂ ಸತ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೪೭೯ ॥",
    kannada_explanation:
      "ಸೈನಿಕನ ಜೀವನದಲ್ಲಿ ಸತ್ಯವೆಂಬುದು ಏನು? ಅವನಿಗೆ ಕತ್ತಿಯೇ ಅವನಿಗೆ ಸತ್ಯ ಮತ್ತು ಅದರಿಂದಲೇ ಅವನು ತನ್ನ ಧರ್ಮವನ್ನು ನಿರ್ವಹಿಸುತ್ತಾನೆ. ಆ ಸತ್ಯದ ಬಲದಿಂದ ಅವನು ತನ್ನ ಧರ್ಮವನ್ನು ನಿರ್ವಹಿಸುವಾಗ ಅವನಿಗೆ ಅನ್ನಾಹಾರಗಳ,ಆರಾಮ ನಿದ್ರೆಗಳ, ಮತ್ತು ಸುಖ ಆನಂದಗಳ ಪರಿವೆಯಿರುವುದಿಲ್ಲ ಮತ್ತು ಅವುಗಳೆಲ್ಲಾ ಅವನಿಗೆ ಮಿಥ್ಯವಾಗಿ ಕಾಣುತ್ತದೆ. ಅವನು ಸತ್ಯದ ಬಲದಿಂದಲೇ ತನ್ನ ಧರ್ಮ ನಿರ್ವಹಣೆಯಿಂದ ಬದುಕಿನಲ್ಲಿ ಸಾರ್ಥಕತೆಯನ್ನು ಕಂಡುಕೊಂಡು ಜೀವನದ ಸತ್ಯವನ್ನು ಕಾಣುತ್ತಾನೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 480,
    english:
      "There are hundreds of worries. But desires keep coming back. When we talk about bad times, we remember the better times we have had earlier (and wish to return). We may at some point feel that our desires have all died. But the moment we come across anything beautiful, our eyes get drawn towards it. It is the innate quality of all beings and it can not be masked. - Mankutimma",
    kannada:
      "ಕ್ಲೇಶ ನೂರಾಗಿರೆಯುಮಾಶೆಗಳ ಪುನರುದಯ ।\nಬೇಸರದ ನುಡಿಯೊಳಂ ಲೇಸುಗಳ ನೆನಪು ॥\nಆಶೆ ಸಾಯ್ತೆಂದೊಡಂ ಚೆಲುವೆನಲು ಕಣ್ಣಲೆತ ।\nಮಾಸವೀ ಜೀವಗುಣ - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೦ ॥",
    kannada_explanation:
      'ನೂರಾರು ಕಷ್ಟಗಳನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದರೂ, ಮತ್ತು ಆ ಕಷ್ಟಗಳು ‘ಆಸೆ’ ಯ ಕಾರಣದಿಂದಲೇ ಸಂದಿವೆ ಎಂದು ಅರಿವಿದ್ದರೂ, ಮತ್ತೆ ಮತ್ತೆ ಮನದೊಳಗೆ ಆಸೆಗಳ ಬುಗ್ಗೆಗಳು ಏಳುತ್ತವೆ. ಇಂದಿನ ಕಷ್ಟಗಳ ಅನುಭವದಿಂದ ನಾವು ಆಡುವ ಬೇಸರದ ನುಡಿಗಳ ಮಧ್ಯೆ ಹಿಂದೆ ಅನುಭವಿಸಿದ ಸುಖ ಸಂತೋಷಗಳ ಸುಂದರ ನೆನಪು ಬರುತ್ತವೆ. ಇಷ್ಟೆಲ್ಲಾ ಕಷ್ಟ ಸುಖಗಳನ್ನು ಅನುಭವಿಸಿ ‘ ಏನೋ ಸ್ವಲ್ಪ ಜ್ಞಾನ ಬಂದಿದೆ’ ‘ ಮನದೊಳಗಿನ ‘ಆಸೆ ಸತ್ತಿದೆ’ ಎನ್ನುವಾಗಲೇ ಮತ್ತೆ ಸುಂದರವಾದದ್ದು ಎದುರಾದರೆ ಕಣ್ಣು ಸೆಳೆಯುತ್ತದೆ ಮತ್ತು ಮನಸ್ಸುಅದರ ಕಡೆಗೆ ವಾಲುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾ ‘ ಇವು ಜೀವದ ಸ್ವಭಾವ, ಇವು ಅಳಿಸಿಹೋಗಲು ಸಾಧ್ಯವಿಲ್ಲ"ಎಂದು ಜಗತ್ತು ಮತ್ತು ಜೀವದ ಪರಸ್ಪರ ಸಂಬಂಧವನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 481,
    english:
      "Darkness behind, darkness ahead and chaos in between - this is life. Some think this darkness is void. Some others think it is a mystery. If we think that there is a some being in the darkness, then will its breath not touch you ever? - Mankutimma",
    kannada:
      "ನಿಶಿ ಹಿಂದೆ, ನಿಶಿ ಮುಂದೆ, ನಡುವೆ ಮಿಸುಕಾಟ ಬಾಳ್ ।\nನಿಶಿ ಕೆಲವರಿಗೆ ಸೊನ್ನೆ , ಕೆಲವರಿಗೆ ಗುಟ್ಟು ॥\nಮಸಕಿನಲಿ ಭೂತವೊಂದಿಹುದು ದಿಟವಾದೊಡದ- ।\nರುಸಿರು ಸೋಕದೆ ನಿನ್ನ? - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೧ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಈ ಜನ್ಮದ ಹಿಂದೆ ಏನಿತ್ತೋ ಮತ್ತು ಈ ಜನ್ಮದ ನಂತರ ಏನೋ ನಮಗೆ ಅರಿವಿಲ್ಲ. ಇವೆರಡರ ನಡುವೆ ನಮ್ಮ ಮಿಸುಕಾಟ, ಓಡಾಟ, ಪರದಾಟಗಳು. ಕೆಲವರಿಗೆ ಹಿಂದೆ ಏನೋ ಇತ್ತು ಮತ್ತು ಮುಂದೆಯೂ ಏನೋ ಇದೆ ಎಂದು ನಂಬಿಕೆ. ಮತ್ತೆ ಕೆಲವರಿಗೆ ಏನೂ ಇಲ್ಲ ಮತ್ತೆ ಕೆಲವರಿಗೆ ಅದೊಂದು ರಹಸ್ಯ ಎಂದು ನಂಬಿಕೆ.ಇಲ್ಲದ್ದು ನಮ್ಮ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಲು ಸಾಧ್ಯವಿಲ್ಲ. ಆದರೆ ಇದೆ ಎಂಬ ನಂಬಿಕೆ ಬಂದರೆ ಹಾಗೆ ಇರುವುದು ತನ್ನ ಪ್ರಭಾವವನ್ನು ನಮ್ಮ ಮೇಲೆ ಬೀರದೆ ಇರುತ್ತದೆಯೇ ಎಂದು ಜನ್ಮ ಜನ್ಮಾಂತರದ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 482,
    english:
      "Cave on the left, cave on the right, mountain straight ahead. Will you trust that there is no tiger prowling around and walk freely in the valley? No. You will be careful. Like wise, in life we must always be cautious of being caught by the secret entity (providence). A wise man would do that. - Mankutimma",
    kannada:
      "ಗುಹೆಯೆಡಕೆ, ಗುಹೆ ಬಲಕೆ, ನಡುವೆ ಮಲೆ; ಕಣಿವೆಯಲಿ ।\nವಿಹರಿಪೆಯ ಹುಲಿ ಬಾರದೆಂದು ನೀಂ ನಚ್ಚಿ? ॥\nರಹಸಿಯದ ಭೂತ ಪಿಡಿಯದ ತೆರದಿ ಬದುಕ ನಿ- ।\nರ್ವಹಿಸುವುದೆ ಜಾಣ್ಮೆಯಲ - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೨ ॥",
    kannada_explanation:
      "ಎಡಕ್ಕೆ ಒಂದು ಗುಹೆ ಮತ್ತು ಬಲಕ್ಕೆ ಒಂದು ಗುಹೆ. ಇವೆರಡರ ನಡುವೆ ಒಂದು ಬೆಟ್ಟ. ಇವೆರಡರ ನಡುವೆ ಕಣಿವೆಯೂ ಇದ್ದು ಅಲ್ಲೆಲ್ಲ ಓಡಾಡುವಾಗ ‘ಹುಲಿಯೋ, ಸಿಂಹವೋ’ ಬರುವ ಸಾಧ್ಯತೆಗಳಿದ್ದರೂ ‘ ಛೆ! ಅವೆಲ್ಲ ಇಲ್ಲಿ ಬರುವುದಿಲ್ಲ ಎಂಬ ನಂಬಿಕೆಯಿಂದ ನೀ ಇದ್ದೀಯೇನು’? ನಿನಗೆ ಗೊತ್ತಿಲ್ಲದ ರಹಸ್ಯದ ಭೂತ ನಿನ್ನ ಮೇಲೆ ಬಂದು ಎರಗಬಹುದು. ಹಾಗಾಗಿ ಅದು ಬಂದು ನಿನ್ನನ್ನು ಹಿಡಿಯದಂತೆ ಜಾಣ್ಮೆಯಿಂದ ಬದುಕನ್ನು ನಡೆಸಬೇಕು ಎಂದು ವಾಸ್ತವ ಮತ್ತು ನಮ್ಮ ನಂಬಿಕೆಗಳ ಮೇಲೆ ನಡೆಯುವ ನಮ್ಮ ಜೀವನಕ್ಕೆ ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 483,
    english:
      "If you punch in air what is the use? It will only result in your pain. Similar is the result on any industry that forgets the basics (that you can not control the outcome by yourself). When the will of providence aligns with human effort, only then will man succeed. Until then, he has to exercise patience. - Mankutimma",
    kannada:
      "ಗಾಳಿಯನು ಗುದ್ದಿದರೆ ಮೈ ನೊಯ್ವುದೊಂದೆ ಫಲ ।\nಮೂಲಸತ್ತ್ವವ ಮರೆತ ಸಾಹಸಗಳಂ‌ತು ॥\nಮೇಳವಿಸೆ ಪೌರುಷಕೆ ದೈವಕೃಪೆಯಂದು ಫಲ ।\nತಾಳಿ ಬಾಳಾವರೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೩ ॥",
    kannada_explanation:
      "ಹಾಗೆ ನಮಗೆ ಗೊತ್ತಿಲ್ಲದ ಅಥವಾ ಅರಿವಿಲ್ಲದ ಸಂಗತಿಗಳಲ್ಲಿ ನಮ್ಮನ್ನು ನಾವು ತೊಡಗಿಸಿಕೊಂಡು ಒಂದು ಭ್ರಮೆಯಿಂದ ಏನನ್ನೋ ಸಾಧಿಸಬೇಕೆಂದು ಹೊರಟಾಗ, ಕೇವಲ ಗಾಳಿಯಲ್ಲಿ ಗುದ್ದಾಡಿ ಮೈ ನೋಯಿಸಿಕೊಂಡಂತೆ, ವ್ಯರ್ಥ ಪ್ರಯತ್ನವಾಗುತ್ತದೆ. ಅಂತಹ ಕೆಲಸಗಳನ್ನು ಮಾಡುವಾಗ ನಮ್ಮನ್ನು ಕ್ರಿಯಾಶೀಲತೆಗೆ ಪ್ರೇರೇಪಿಸುವ ಆ ಪರಮ ಶಕ್ತಿಯನ್ನು ಅರಿಯದೆ ಮಾಡಿದ ಕೆಲಸಗಳವು. ಎಂದು ನಮ್ಮ ಪ್ರಯತ್ನಕ್ಕೆ ಆ ಪರಮಾತ್ಮನ ಕೃಪೆಯ ಜೊತೆಯಾಗುತ್ತದೆಯೋ ಅಂದು ನಾವು ಸಫಲರಾಗುತ್ತೇವೆ. ಅಲ್ಲಿಯ ತನಕ ತಾಳ್ಮೆಯಿಂದ ಬಾಳಬೇಕು ಎಂದು ಆದೇಶವನ್ನು ಮಾಡಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 484,
    english:
      "Dogs have a habit of barking loudly in the middle of night for no reason. They seem to see something moving in the dark of night. In the hope that a friend can hear, they lift their head and start howling. Out devotion towards God is much the same. - Mankutimma",
    kannada:
      "ಕತ್ತಲೆಯೊಳೇನನೋ ಕಂಡು ಬೆದರಿದ ನಾಯಿ  ।\nಎತ್ತಲೋ ಸಖನೊರ್ವನಿಹನೆಂದು ನಂಬಿ ॥\nಕತ್ತೆತ್ತಿ ಮೋಳಿಡುತ ಬೊಗಳಿ ಹಾರಾಡುವುದು ।\nಭಕ್ತಿಯಂತೆಯೆ ನಮದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೪ ॥",
    kannada_explanation:
      "ಕತ್ತಲಲ್ಲಿ ಭ್ರಮಿಸಿ ಏನನ್ನೋ ಕಂಡಂತಾಗಿ ಹೆದರಿದ ನಾಯಿ, ತನ್ನನ್ನು ಕಾಯುವ ಅಥವಾ ಕಾಪಾಡುವ ಯಾರೋ ಒಬ್ಬ ಸ್ನೇಹಿತನಿರುವನೆಂದು, ಎಲ್ಲಿರುವನೆಂದು ಅರಿಯದಿದ್ದರೂ, ಕತ್ತೆತ್ತಿ ಮೋಳಿಡುತ, ಬೊಗುಳಿ, ಹಾರಾಡಿ ಪರದಾಡುವುದು. ನಮ್ಮ ಭಕ್ತಿಯೂ ಸಹ ಇದೆ ರೀತಿಯದೆಂದು ಹೇಳುತ್ತಾರೆ ನಮ್ಮ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 485,
    english:
      "Father (Hiranyakashipu) was a non-believer. But, Prahlada believed entirely. You are a confused person who think he believes, but not. They were both liberated either by true realization (Prahlada) or by the pillar (Hiranyakashipu, by Narasimha coming out of the pillar and killing him). But what about your state? You are like a fly fallen into filth (mucus). Can't rejoice it, can't escape it. - Mankutimma",
    kannada:
      "ನಂಬದಿರ್ದನು ತಂದೆ, ನಂಬಿದನು ಪ್ರಹ್ಲಾದ ।\nನಂಬಿಯುಂ ನಂಬದಿರುವಿಬ್ಬಂದಿ ನೀನು ॥\nಕಂಬದಿನೊ ಬಿಂಬದಿನೊ ಮೋಕ್ಷವವರಿಂಗಾಯ್ತು ।\nಸಿಂಬಳದಿ ನೊಣ ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೫ ॥",
    kannada_explanation:
      "ಪ್ರಹ್ಲಾದನ ತಂದೆ ಹಿರಣ್ಯಕಶಿಪು ‘ಹರಿ’ಯನ್ನು ನಂಬಲಿಲ್ಲ,ದ್ವೇಷಿಸಿದ ಮತ್ತು ತಾನೇ ದೇವರೆಂದ. ಅವನ ಮಗ ಪ್ರಹ್ಲಾದ ‘ಹರಿ’ ಸರ್ವೋತ್ತಮನೆಂದ. ತಂದೆಯ ದ್ವೇಷ ಮತ್ತು ಮಗನ ಭಕ್ತಿ ಅಥವಾ ನಂಬಿಕೆ ಸಂಪೂರ್ಣವಾಗಿತ್ತು. ಹಾಗಾಗಿ ನಂಬದ ತಂದೆಯನ್ನು ಕಂಬದಿಂದ ಒದಗಿ ಮತ್ತು ಮಗನಿಗೆ ದರ್ಶನ ಭಾಗ್ಯದಿಂದ ಮುಕ್ತಿಯನ್ನು ಪ್ರಸಾದಿಸಿದ. ಆದರೆ ನಾವೋ ನಂಬಿಯೂ ನಂಬದಂತೆ ‘ಎಡಬಿಡಂಗಿ’ ಸ್ಥಿತಿಯಲ್ಲಿ, ಸಿಂಬಳದಲ್ಲಿ ಏನೋ ಸಿಗುವುದೆಂಬ ಆಸೆಯಿಂದ ಹೋಗಿ ಅದರೊಳಗ ಅಂಟಿಕೊಂಡು ಹೊರ ಬರಲಾರದ ನೊಣದಂತೆ ಇದ್ದೇವೆ ಎಂದು ನಮ್ಮ ಭಕ್ತಿಯ ಪರಿಯನ್ನು ಕುಹಕವಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 486,
    english:
      "Man has been thinking that there is something much bigger, larger, greater than him, then the world he knows, than anything he has experienced, behind the secret of creation. He is able to hypothesize and make that thing larger and larger - the concept of God. This thinking is the result of inner greatness in a man. - Mankutimma",
    kannada:
      "ತನಗಿಂತ ಹಿರಿದ, ಭುವನಕ್ಕಿಂತ ಹಿರಿದೊಂದ- ।\nನನುಭವದ ಹಿಂದೆ, ಸೃಷ್ಟಿಯ ನೆರಳ ಹಿಂದೆ ॥\nಆನುಮಿತಿಸಿ ಮನುಜನಾ ಹಿರಿದನೆಳಸುವನೆಯ್ದೆ ।\nಮನುಜನೊಳಹಿರಿಮೆಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೬ ॥",
    kannada_explanation:
      "ತನಗಿಂತ ಹಿರಿದಾದದ್ದು ಈ ಭೂಮಿಗಿಂತ ಹಿರಿದಾದದ್ದು ಮತ್ತು ಇವೆಲ್ಲದರ ಅನುಭವಕ್ಕಿಂತ ಒಂದು ಹಿರಿದಾದ ಅನುಭವ ಈ ಸೃಷ್ಟಿಯ ಹಿಂದೆ ಇದೆ ಮತ್ತು ಈ ಜಗತ್ತು ಅಂತಹ ಹಿರಿದಾದ ಒಂದು ಶಕ್ತಿಯ ನೆರಳು ಮಾತ್ರ ಎಂದು ಅರಿತ ಮಾನವನು ಆ ಪರಮಾತ್ಮನ ಸೃಷ್ಟಿಯಲ್ಲಿ ಭಿನ್ನವಾಗಿ ತನ್ನ ಹಿರಿಮೆಯನ್ನು ಮೆರೆದಿದ್ದಾನೆ ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 487,
    english:
      "Just like humans, the Gods have roamed this earth and have disappeared in all mythologies - Indian, Egyptian or Greek. There are so many names to the Gods. But the truth remains universal and singular. Waves come in crores, but the sea is still only one. - Mankutimma",
    kannada:
      "ನರರವೊಲೆ ಸುರರುಮಲೆದಲೆದು ಮರೆಯಾಗಿಹರು ।\nಭರತದೇಶದೊಳಮೈಗುಪ್ತ ಯವನರೊಳಂ ॥\nಸುರ ನಾಮ ರೂಪಗಳಸಂಖ್ಯಾತ, ನಿಜವೊಂದು ।\nತೆರೆ ಕೋಟಿ ಕಡಲೊಂದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೭ ॥",
    kannada_explanation:
      "ಆತ್ಮದ ಗುಣಗಳು ಅಸಂಖ್ಯವಾದವು. ಎಣಿಸಲಾಗದ್ದು ಮತ್ತು ವರ್ಣಿಸಲು ಅಸಾಧ್ಯ. ದೇಹ ಮನಸ್ಸು ಬುದ್ಧಿಗಳೇ ಆ ಗುಣಗಳ ಗ್ರಹಣೆಗೆ ಕಾರಣಗಳು ಅಥವಾ ಸಾಧನಗಳು. ಬದುಕಿನ ಅನುಭವದ ಕನ್ನಡಿಯಲ್ಲಿ ಪ್ರತಿಫಲಿಸುವ ಆತ್ಮದ ಒಂದೊಂದೂ ಗುಣವೂ ತನ್ನದೇ ಆದ ಸೌಂದರ್ಯವನ್ನು ಹೊಂದಿರುತ್ತದೆ ಎಂದು ಆತ್ಮ ಸೌಂದರ್ಯದ ರೂಪವನ್ನು ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 488,
    english:
      "If no being ever prayed, then who cares for a God? If God did not hide (the secret), then what would the being search for? (What would then be the purpose of existence?) Both God and the being are in search of each other. This is the beauty of this creation. - Mankutimma",
    kannada:
      "ಜೀವಿ ಬೇಡಿದಿರೆ ದೈವವನು ಕೇಳುವರಾರು? ।\nದೈವ ಗುಟ್ಟಿರಿಸದಿರೆ ಜೀವಿಯರಸುವುದೇಂ? ॥\nಜೀವ ದೈವಂಗಳ ಪರಸ್ಪರಾನ್ವೇಷಣೆಯೆ ।\nಲಾವಣ್ಯ ಸೃಷ್ಟಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೮ ॥",
    kannada_explanation:
      "ಜೀವಿ ‘ಕಾಪಾಡು’ಎಂದು ಬೇಡದ್ದಿದರೆ ಆ ದೇವರನ್ನು ಕೇಳುವವರಾರು ಅಥವಾ ಅ ದೈವವೆಂಬ ವಸ್ತು ನಿಗೂಢವಾಗಿಲ್ಲದಿದ್ದರೆ, ಜೀವಿ ಹುಡುಕುವುದೇನನ್ನು? ಹಾಗಾಗಿ ಜೀವನದಲ್ಲಿ ಈ ದೈವ ಮತ್ತು ಜೀವಯ ಪರಸ್ಪರ ನಿರ್ಭರತೆಯೇ ಈ ಸೃಷ್ಟಿಗೆ ಒಂದು ಮೆರಗನ್ನು ಕೊಟ್ಟಿದೆ ಎಂದು ಒಂದು ಕಡು ಸತ್ಯವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 489,
    english:
      "What good is the sun with out eyes to see? What good are the eyes without the sun? When one helps the other, there will be satisfying relation. Similar is the relation between your soul and the universe. They are like fire and splinters. - Mankutimma",
    kannada:
      "ಕಣ್ಣಿರದೆ ರವಿಯೇನು? ರವಿಯಿರದೆ ಕಣ್ಣೇನು? ।\nಅನ್ಯೋನ್ಯ ಸಹಕೃತಿಯಿನುಭಯ ಸಾರ್ಥಕತೆ  ॥\nನಿನ್ನಾತ್ಮ ಜಗದಾತ್ಮಕಂತು ಸಂಬಂಧವವು ।\nವಹ್ನಿಸ್ಫುಲಿಂಗಗಳೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೮೯ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿಯ ಪರಸ್ಪರ ನಿರ್ಭರತೆಯನ್ನು ಮುಂದುವರೆಸುತ್ತಾ, ನೋಡುವ ಶಕ್ತಿಯಿಲ್ಲದೆ ಬೆಳಕಿದ್ದರೇನು ಬಿಟ್ಟರೇನು? ಬೆಳಕಿಲ್ಲದಿದ್ದರೆ ಕಣ್ಣಿದ್ದರೆಷ್ಟು ಬಿಟ್ಟರೆಷ್ಟು, ಇವೆರಡರ ಅನ್ಯೋನ್ಯತೆ ಮತ್ತು ಸಹಕಾರವೇ, ಆತ್ಮ ಮತ್ತು ಪರಮಾತ್ಮ ಸಂಬಂಧದ ಸ್ವರೂಪ, ಬೆಂಕಿಯಿದ್ದಾಗ ಕಿಡಿಯಿರುವಂತೆ ಎಂದು ಪ್ರತಿವಸ್ತುವಿಗೂ ಇರುವ ಕಾರಣ,ಕಾರ್ಯ,ಕರ್ಮ ಮತ್ತು ಫಲದ ಸ್ವರೂಪವನ್ನು ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 490,
    english:
      "There is wonder in the external creation. There is another wonder inside of every mind. To make the inner wonder grasp the outer wonder is possible only through experience. Those who have already experienced the wonders have devised ways to help us also to do so. Oh! Fool, why do you laugh at those methods? - Mankutimma",
    kannada:
      "ಬಹಿರದ್ಭುತವ ಮನುಜನಂತರದ್ಭುತವರಿತು ।\nಗ್ರಹಿಸುವಂತಾಗಿಸಲು ಪೂರ್ವಾನುಭವಿಗಳ್ ॥\nಬಹುಪರಿಯುಪಾಯಗಳ ನಿರವಿಸಿಹರದಕೇಕೆ ।\nಗಹಗಹಿಸುವೆಯೊ, ಮರುಳೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೦ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಪೂರ್ವಜರು ತಮ್ಮ ಅನುಭವದಿಂದ, ಸೃಷ್ಟಿಯಲ್ಲಿ ನಮಗೆ ಹೊರಗೆ ಕಾಣುವ ಅದ್ಭುತಗಳನ್ನು ಅಂತರಂಗದಲ್ಲಿ ಅರಿತುಕೊಳ್ಳಲು ಹಲವಾರು ವಿಧಾನಗಳನ್ನು ಕಂಡುಕೊಂಡಿದ್ದಾರೆ. ಅದನ್ನು ಅರಿಯುವ ಮುನ್ನ ಅಥವಾ ಅದನ್ನು ಅರಿತುಕೊಳ್ಳುವ ಪ್ರಯತ್ನವನ್ನೇ ಮಾಡದೆ ಅದನ್ನು ಕಂಡು ಕುಹಕವಾಡುವಂತೆ ಗಹಗಹಿಸಿ ಏಕೆ ನಗುತ್ತೀಯೆ,ಹುಚ್ಚಾ ಎಂದು ಸತ್ಯವರಿಯದೆ ಒಂದು ವಿಷಯದ ಬಗ್ಗೆ ಕುಹಕವಾಡುವ ಮನಗಳನ್ನು ಕೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 491,
    english:
      "Trying to fill the water of the ocean in a pot, to see sunlight through the window is akin to a poor man amassing wealth. Our attempt at condensing the infinite definition of God into a small idol (reflection) is very similar. It only give solace to our simple minds. - Mankutimma",
    kannada:
      "ಅಂಬುಧಿಯ ಮಡಕೆಯಲಿ, ಹೊಂಬಿಸಿಲ ಕಿಟಿಕಿಯಲಿ ।\nತುಂಬಿಕೊಳ್ಳುವ ಬಡವನೈಶ್ವರ್ಯದಂತೆ ॥\nಬಿಂಬದೊಳಗಮಿತ ಸತ್ತ್ವವ ಪಿಡಿದಿಡುವ ಭಕ್ತಿ- ।\nಯಿಂಬು ಕಿಂಚಿನ್ಮತಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೧ ॥",
    kannada_explanation:
      "ಸಾಗರವನ್ನು ಒಂದು ಪುಟ್ಟ ಮಡಕೆಯಲ್ಲಿ ಅಥವಾ ಸೂರ್ಯನ ಹೊಂಬಿಸಿಲನ್ನು ತನ್ನ ಪುಟ್ಟ ಗುಡಿಸಲಿನ ಕಿಟಕಿಯಲ್ಲಿ ತುಂಬಿಕೊಳ್ಳುವ ಪ್ರಯತ್ನಪಡುವ ಬಡವನಂತೆ ಮಹತ್ತಾದ ಪರತತ್ವವನ್ನು ಒಂದು ಪುಟ್ಟ ಮೂರ್ತಿಯಲ್ಲಿ ಕಾಣುವುದೇ ಭಕ್ತಿ ಎಂದು ಮಹತ್ತಾದ ವಿಷಯವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 492,
    english:
      "Unifying the inner spirit with the one outside is the goal of conscience. This is constantly reminded in rituals of aachamana, arghya, pujaa and naivedya. These are ideas to meet the inner expanse of the cave with the outer. When such co-ordination happens, it feels right. - Mankutimma",
    kannada:
      "ಬಹಿರಂತರೈಕ್ಯವನು ನೆನಪಿಗಾಗಿಸಲೆಂದು ।\nವಿಹಿತಮ್ ಆಚಮನಾರ್ಘ್ಯ ಪೂಜೆ ನೈವೇದ್ಯ ॥\nಗುಹೆಯೊಳಗಣದ ಹೊರಗಣದ ಕೂಡಿಸುವುಪಾಯ ।\nಸಹಭಾವವದಕೆ ಸರಿ - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೨ ॥",
    kannada_explanation:
      "ಹೊರ ಮತ್ತು ಒಳಗಿನ ಚೇತನವು ಒಂದೇ ಎಂದು ನಮಗೆ ನೆನಪು ಮಾಡಿಕೊಡಲು ವಿಧಿಸಲ್ಪಟ್ಟ ಕ್ರಮವೇ, ಆಚಮನ ಅರ್ಘ್ಯ ಮತ್ತು ನೈವೇಧ್ಯಗಳಿಂದ ಮಾಡುವಂತಹ ಪೂಜೆ. ಈ ಪೂಜಾಕ್ರಮದಿಂದ ನಮ್ಮ ಒಳಗಿರುವ ಮತ್ತು ಹೊರಗಿರುವ ಚೇತನಗಳ ಏಕತೆ ಮತ್ತು ಐಕ್ಯತೆಯನ್ನು ಅರಿತು ಎರಡರಲ್ಲೂ ಸಮನ್ವಯವನ್ನು ತಾಳುವುದಕ್ಕೆ ಸರಿಯಾದ ಉಪಾಯವೇ ಪೂಜೆ ಎನ್ನುತ್ತಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 493,
    english:
      "When many people consider a place as miraculous and holy, don't get suspicious. Who can instruct God (power) to reside and act miraculously only there? Miracle is when (and where) the logical mind concedes defeat. (and belief takes over). - Mankutimma",
    kannada:
      "ಬಹುಜನಂ ಕೈಮುಗಿದ ತೀರ್ಥದೊಳ್ ಕ್ಷೇತ್ರದೊಳ್ ।\nಮಹಿಮೆಯಲ್ಲೇನೆಂದು ಸಂಶಯಿಸಬೇಡ ॥\nವಿಹಿತಗೈದವರಾರು ವಸತಿಂ ದೈವಕ್ಕೆ? ।\nಮಹಿಮೆ ಮನಸೋತೆಡೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೩ ॥",
    kannada_explanation:
      'ಪರಮಾತ್ಮ ಸರ್ವ ವ್ಯಾಪಿ. "ಬಹಳ ಜನ ಕೈ ಮುಗಿಯಲು ಹೋಗುವ ಪುಣ್ಯತೀರ್ಥದಲ್ಲಿ ಅಥವಾ ಪುಣ್ಯಕ್ಷೇತ್ರದಲ್ಲಿ ಮಾತ್ರ ಪರಮಾತ್ಮನ ಮಹಿಮೆ ಇದೆಯೇನು?" ಎಂದು ಸಂಶಯಪಡಬೇಡ. ಆ ದೈವಕ್ಕೆ ಇಂತಹ ಕಡೆಯೇ ಇರಬೇಕು ಅಥವಾ ಇರಬಹುದು ಎಂದು ನಿಗದಿ ಪಡಿಸಿದವರಾರು? ಮಾನವರು ದೈವಕ್ಕೆ ಮನಸೋತೆಡೆಯಲ್ಲಾ ಆ ದೈವದ ಮಹಿಮೆ ಇರುವುದು ಎಂದು ಮನುಜರ ಭಕ್ತಿಯ ಪರಿಪರಿ ವಿಧಗಳನ್ನು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 494,
    english:
      "Among the devotees of the Lord, how many are driver by fear? How many have devotions towards boons and not God himself? It is real devotion when feeling of love and happiness is only sought from it. That is the attraction of God. - Mankutimma",
    kannada:
      "ಹರಿಭಜಕರೊಳು ಭಯದಿನೊಗೆದುದೆನಿಬರ ಭಕುತಿ? ।\nವರದ ಮೇಲಣ ಭಕ್ತಿಯೆನಿಬರದು ನೋಡೆ? ॥\nಬರಿಯ ಸಂತೋಷದನುರಾಗರಸ ನಿಜಭಕ್ತಿ- ।\nಪರಮದಾಕರ್ಷೆಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೪ ॥",
    kannada_explanation:
      "ಹರಿಭಕ್ತರಲ್ಲಿ ‘ಭಯ’ದಿಂದ ‘ಭಕ್ತಿ’ ಯನ್ನು ತೋರುವವರು ಮತ್ತು ಬೇಡಿಕೆಗಳನ್ನು ಮುಂದಿಟ್ಟು, ಆ ಬೇಡಿಕೆಗಳು ಈಡೇರಲೆಂದು ಭಕ್ತಿ ತೋರುವವರು, ಮತ್ತು ‘ ನೀ ನನಗೆ ಇದ ಕೊಟ್ಟರೆ, ನಾ ನಿನಗೆ ಅದ ಕೊಡುವೆ ಎಂದು ಆ ದೈವದೊಂದಿಗೆ ವ್ಯಾಪಾರದ ಭಕ್ತಿ ತೋರುವವರೇ ಹೆಚ್ಚಾಗಿದ್ದಾರೆ. ಆದರೆ ಕೇವಲ ಆನಂದದ ಮತ್ತು ಅನುರಾಗದ ಭಾವದಿಂದ ‘ನಿರಪೇಕ್ಷಿ ‘ಯಾಗಿ ತೋರುವುದೇ ನಿಜವಾದ ಭಕ್ತಿ ಎಂದು ಅರುಹುತ್ತಾರೆ ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 495,
    english:
      "When one watches the brilliance of sun rise, the heights of mountains and the vast expanse of the seas - what does he see/feel? Wonder, just wonder. Wonder that can not be described by words. Enjoying such a spectacle is a way we worship God. - Mankutimma",
    kannada:
      "ಅರುಣೊದಯಪ್ರಭೆಯ, ಗಿರಿಶೃಂಗದುನ್ನತಿಯ  ।\nವರುಣಾಲಯಾಯತಿಯ ನಿರುಕಿಸಿದೊಡಹುದೇಂ? ॥\nಬೆರಗು, ಬರಿಬೆರಗು, ನುಡಿಗರಿದೆನಿಪ್ಪಾನಂದ ।\nಪರಮಪೂಜೆಯುಮಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೫ ॥",
    kannada_explanation:
      "ಮೂಡುತ್ತಿರುವ ಸೂರ್ಯನ ಬೆಳಕನ್ನು, ಮುಗಿಲನ್ನು ಮುಟ್ಟುವಂತೆ ನಿಂತಿರುವ ಗಿರಿಗಳ ಎತ್ತರವನ್ನು, ಅಳತೆಗೆ ಎಟುಕದ ಕಡಲ ವಿಸ್ತಾರವ ನೋಡಿದಾಗ ಅವುಗಳ ನಿಜ ಸೌಂದರ್ಯವು ನಮ್ಮನ್ನು ಬೆರಗಾಗಿಸಿ ನಮ್ಮಲ್ಲಿ ಮಾತಿಗೆ ಎಟುಕದಂತ ಒಂದು ಪ್ರಶಾಂತ,ಮೂಕ ಆದರೂ ಆನಂದದ ಭಾವವು ಬಂದು ನಿಲ್ಲುವುದಿಲ್ಲವೇ? ಹಾಗೆಯೇ ಪರಮಾತ್ಮನ ಪೂಜೆಯೂ ಆಗಬೇಕು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 496,
    english:
      "All sights of magnanimity will cause wonder. It is this feeling of wonder, getting lost, feeling speechless that is pleasing. When our intellect is encompassed by this wonder, there is peace. The radiance of this peace is the boon by which we please the creator. - Mankutimma",
    kannada:
      "ಬೆರಗಾಗಿಪುವುವೆಲ್ಲ ಪಿರಿತನದ ನೋಟಗಳು ।\nಬೆರಗೆ, ಮೈಮರೆವೆ, ಸೊಲ್ಲಣಗುವುದೆ ಸೊಗಸು ॥\nಬೆರಗು ಚಿತ್ತವ ನುಂಗಲೊಗೆವ ಶಾಂತಿಯ ಕಾಂತಿ ।\nಪರಮನರ್ಚನೆಗೆ ವರ - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೬ ॥",
    kannada_explanation:
      "ಜಗತ್ಸೃಷ್ಟಿಯ ಹಿರಿದಾದ ನೋಟಗಳೆಲ್ಲ ನಮ್ಮನ್ನು ಬೆರಗಾಗಿಸುತ್ತವೆ. ಆ ಬೆರಗು ನಮ್ಮನ್ನು ಮೈಮರೆಯುವಂತೆ ಮಾಡಿದಾಗ ನಾವು ಮೂಕಸ್ಮಿತರಾಗುವುದೇ ಸೊಗಸು. ನಾವು ಹಾಗೆ ಬೆರಗಾದಾಗ ನಮ್ಮ ಮನಸ್ಸನ್ನು ಆವರಿಸುವ ಪ್ರಭೆಯ ಅಥವಾ ಕಾಂತಿಯ ಶಾಂತತೆಯೇ ನಮಗೆ ಆ ಪರಮಾತ್ಮನನ್ನು ಪೂಜಿಸಲು ಸಿಕ್ಕ ‘ವರ’ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 497,
    english:
      "You bring up a daughter with lot of love and care. Then you give her away to a in-laws with a lot of money and gold. What do you expect in return? Nothing. What can you expect in return? Virtue its own reward. It is good for maturity of the mind. - Mankutimma",
    kannada:
      "ಸುತೆಯ ಪೋಷಿಸಿ ಬೆಳಸಿ, ಧನಕನಕದೊಡನವಳನ್- ।\nಇತರಗೃಹಕಿತ್ತು ನೀಂ ಕೇಳ್ವ ಮುಯ್ಯೇನು? ॥\nಪ್ರತಿಫಲವು ಬೇರೇಕೆ? ಸುಕೃತಕದು ತಾನೆ ಫಲ ।\nಹಿತ ಮನದ ಪಾಕಕದು - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೭ ॥",
    kannada_explanation:
      "ತನ್ನ ಮಗಳನ್ನು ಪೋಷಿಸಿ, ಬೆಳೆಸಿ, ದೊಡ್ದವಳನ್ನಾಗಿಸಿ, ಸೂಕ್ತ ವಯಸ್ಸಿನಲ್ಲಿ ಧನ ಕನಕಗಳ ಸಹಿತ ವಿಜೃಂಭಣೆಯಿಂದ ವಿವಾಹ ಮಾಡಿ ಅನ್ಯರ ಮನೆಗೆ ಕಳುಹಿಸಿಕೊಡುವಾಗ, ತಂದೆ ಪ್ರತಿಫಲವಾಗಿ ಅಪೇಕ್ಷೆ ಪಡುವುದೇನು? ಮಾಡಿದ ಕೆಲಸ ಸರಾಗವಾಗಿ ನಡೆದರೆ ಅದೇ ಒಳ್ಳೆಯ ಫಲವಲ್ಲವೇ? ಹಾಗೆಯೇ (ಪರಮಾತ್ಮನ ಪೂಜೆಯಿಂದ) ಮನಸ್ಸು ಹಿತವಾಗಿ ಪಕ್ವವಾದರೆ ಸಾಕಲ್ಲವೇ ಬೇರೇನು ಬೇಕು? ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 498,
    english:
      "Music may make head nod, but can it fill the stomach? Cool light from the moon is pleasing on the eyes, but will the granary fill with that? But these are all wonderful things with in tangible benefits. Don't make it a transaction at a shop by weighing everything against profits. The enriching soul is the only benefit of those acts. - Mankutimma",
    kannada:
      "ಸಂಗೀತ ತಲೆದೂಗಿಪುದು, ಹೊಟ್ಟೆ ತುಂಬೀತೆ? ।\nತಂಗದಿರನೆಸಕ ಕಣ್ಗಮೃತ, ಕಣಜಕದೇಂ? ॥\nಅಂಗಡಿಯ ಮಾಡದಿರು ಸುಕೃತಪ್ರಸಕ್ತಿಯಲಿ ।\nಪೊಂಗುವಾತ್ಮವೆ ಲಾಭ - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೮ ॥",
    kannada_explanation:
      "ಸಂಗೀತವನ್ನು ಆಲಿಸಿದರೆ ಮನಸ್ಸಿಗೆ ಸಂತೋಷವಾಗುತ್ತದೆ, ಹೊಟ್ಟೆ ತುಂಬುತ್ತದೆಯೇ? ಇಲ್ಲ, ಹುಣ್ಣಿಮೆಯ ಬೆಳದಿಂಗಳು ಕಣ್ಣುಗಳಿಗೆ ಹಿತವಾಗಿರುತ್ತದೆ, ಮನೆಗೆ ದವಸ ದಾನ್ಯ ತಂದೀತೆ? ಇಲ್ಲ, ಹಾಗಾಗಿ ಸುಕೃತವನ್ನು ಎಸಗುವಾಗ ವಸ್ತುರೂಪದ ಪ್ರತಿಫಲವನ್ನು ಅಪೇಕ್ಷಿಸಬೇಡ. ಅಂತಹ ಒಳ್ಳೆಯ ಕೆಲಸ ಮಾಡುವುದರಿಂದ, ಕೇವಲ ಆತ್ಮಾನಂದವನ್ನು ಪಡೆಯಬೇಕು ಎಂದು ಸೂಚನೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 499,
    english:
      "Temples, worship and offerings we make god are all decorations to our lives, They are meant to enrich our minds. If any such act will take our mind off from every day worries and raises it to a higher level then it is good - what ever it may be. - Mankutimma",
    kannada:
      "ದೇವಮಂದಿರ ಭಜನೆ ಪೂಜೆ ಪ್ರಸಾದಗಳು ।\nಜೀವನದಲಂಕಾರ, ಮನಸಿನುದ್ಧಾರ ॥\nಭಾವವಂ ಕ್ಷುಲ್ಲಜಗದಿಂ ಬಿಡಿಸಿ ಮೇಲೊಯ್ವು- ।\nದಾವುದಾದೊಡಮೊಳಿತು - ಮಂಕುತಿಮ್ಮ ॥ ೪೯೯ ॥",
    kannada_explanation:
      "ದೇವಸ್ಥಾನಕ್ಕೆ ಹೋಗುವುದು, ಭಜನೆ ಮಾಡುವುದು, ಪೂಜೆ, ನೈವೇಧ್ಯ, ಪ್ರಸಾದ ಎಲ್ಲವೂ ನಮ್ಮ ಜೀವನಕ್ಕೆ ಒಂದು ಅಲಂಕಾರವಿದ್ದಂತೆ, ಮನಸ್ಸಿನ ಉದ್ಧಾರದ ಮಾರ್ಗವಷ್ಟೇ. ಇವೆಲ್ಲವನ್ನೂ ಮಾಡಿ ನಮ್ಮ ಮನಸ್ಸು ಬುದ್ಧಿಗಳನ್ನು ಈ ಕ್ಷಣಿಕ ಜಗತ್ತಿನ ಅಂಟಿನಿಂದ ಬಿಡಿಸಿಕೊಂಡು ನಮ್ಮ ಭಾವ ಮತ್ತು ಆಲೋಚನೆಗಳಲ್ಲಿ ಒಂದಿಷ್ಟು ಔನ್ನತ್ಯವನ್ನು ಪಡೆದರೆ ಒಳಿತು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ",
  },
  {
    number: 500,
    english:
      "Is god simply a power human to indulge in our offerings? Does he want the flowers, eateries, clothes and ornaments that offer him? Man simply offers to God all those things that are dear to him. This is a well known fact. - Mankutimma",
    kannada:
      "ದೇವನೇನತಿಶಯಿತಮಾನಿಸನೆ ಭೋಗಕ್ಕೆ? ।\nಹೂವುಣಿಸು ಮುಡುಪೊಡವೆಯವನಿಗಂ ಬೇಕೆ? ॥\nಆವುದೊಳ್ಳಿತೊ ತನಗೆ ನರನದನು ಪರಮಂಗೆ ।\nನೈವೇದಿಪುದು ಸಾಜ - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೦ ॥",
    kannada_explanation:
      "ನಾವು ಪೂಜೆಮಾಡುವ ಆ ದೇವನು ಅತಿಶಯದ ಮನುಷ್ಯನೇನು. ನಾ ಮಾಡುವ ಹೂವಿನಲಂಕಾರ, ಕಟ್ಟಿಡುವ ಮುಡುಪುಗಳು, ನಾ ತೊಡಿಸುವ ಒಡವೆ ವಸ್ತ್ರಗಳು ಅವನಿಗೆ ಬೇಕೆ? ತಮಗೆ ಏನು ಬೇಕೋ, ಯಾವುದು ಹಿತವೋ ಅದನ್ನು ಆ ದೇವನಿಗೆ ಅರ್ಪಿಸುವುದು ಮಾನವನ ಸಹಜ ಗುಣ ಎಂದು ಭಕ್ತಿಯ ಒಂದು ಆಯಾಮವನ್ನು ಇಲ್ಲಿ ವಿಚಾರಕ್ಕೆ ಇಟ್ಟಿದ್ದಾರೆ ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ",
  },
  {
    number: 501,
    english:
      "In a world everything is driven by intellect, devotion (towards God) is like a poor foreigner. What will you do when your strength and smartness are diminished? What is the use of praying God at the time of death alone? Devotion should be like blood - with in you all your life. - Mankutimma",
    kannada:
      "ಯುಕ್ತಿಸಾಮ್ರಾಜ್ಯದಲಿ ಭಕ್ತಿ, ಬಡ ಪರದೇಶಿ ।\nಶಕ್ತಿ ಚತುರತೆಯುಡುಗಿ ನೀನು ಸೋತಂದು ॥\nಉತ್ಕ್ರಮಣದರೆಮನದಿ ದೈವವನು ಪಿಡಿದೇನು? ।\nಭಕ್ತಿ ರಕ್ತದಿ ಪರಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೧ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಅತಿ ಬುದ್ಧಿವಂತಿಕೆ ಉಪಯೋಗಿಸಿ ನಾವು ನಡೆಸುವ ಜೀವನದಲ್ಲಿ ಹಲವಾರು ಚತುರತೆಗಳನ್ನು ಬಳಸಿ ಬದುಕಬಹುದು. ಹಾಗೆ ಬದುಕುವಾಗ, ದೈವ ಭಕ್ತಿಯೆನ್ನುವುದು ನಮ್ಮಲ್ಲಿ ಸೊರಗುತ್ತದೆ, ಬಡವಾಗುತ್ತದೆ. ದೇಹದ ಶಕ್ತಿಯು ಅಡಗಿ ನಾವು ಸೊರಗಿದಾಗ ‘ನಮ್ಮದೆಲ್ಲ ಮುಗಿಯಿತು, ಹೇ ಪರಮಾತ್ಮ ನೀನೆ ಗತಿ’ ಎಂದು ಸಾಯುವ ಸಮಯದಲ್ಲಿ ಭಕ್ತಿ ತೋರಿದರೆ ಏನೂ ಪ್ರಯೊಜನವಿಲ್ಲ. ಭಕ್ತಿಯನ್ನುವುದು ನಮ್ಮ ದೇಹದಲ್ಲಿ ರಕ್ತ ಹರಿದಂತೆ ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಸದಾಕಾಲ ಪ್ರಹಿಸುತ್ತಿರಬೇಕು ಎಂದು ಭಕ್ತಿ ನಮ್ಮಲ್ಲಿ ಹೇಗಿರಬೇಕು ಎನ್ನುವುದನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕ್ದಲ್ಲಿ.",
  },
  {
    number: 502,
    english:
      "If we believe in an all powerful being (called God), then it must not be a big deal for him to make learn about our wishes and make them come true. The only difficulty we have is to make him want to make our wishes come true and urge him to do so. - Mankutimma",
    kannada:
      "ಸೃಷ್ಟಿಯದ್ಭುತಶಕ್ತಿಯುಳ್ಳೊರ್ವನಿರಲು ನ- ।\nಮ್ಮಿಷ್ಟಗಳನರಿತು ನೀಡುವುದವನಿಗರಿದೇಂ? ॥\nಇಷ್ಟವಾತನೊಳುದಿಸುವುವಂತೆ, ಚೋದಿಪುದೆಂತು? ।\nಕಷ್ಟ ನಮಗಿಹುದಷ್ಟೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೨ ॥",
    kannada_explanation:
      "ಬೃಹತ್ತಾದ ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಾವು ಒಂದು ಧೂಳ ಕಣದ ಲಕ್ಷದ ಒಂದು ಭಾಗವೂ ಅಲ್ಲ. ಆದರೆ ಅವನೋ, ಪರಮಾತ್ಮ, ಸೃಷ್ಟಿಯನ್ನೇ ಮಾಡುವ ಶಕ್ತಿಯುಳ್ಳವನು ಮತ್ತು ಬ್ರಹ್ಮಾಂಡಕ್ಕಿಂತ ಹಿರಿದಾದವನು. ಹಾಗಿರುವಾಗ ನಮ್ಮನ್ನು ಸೃಷ್ಟಿಸಿದ ಅವನಿಗೆ ನಮ್ಮ ಅವಶ್ಯಕತೆಗಳು ಮತ್ತು ನಮ್ಮ ಇಷ್ಟಗಳನ್ನು ಅರಿತುಕೊಂಡು ಎಲ್ಲವನ್ನೂ ನೀಡಲು ಗೊತ್ತಿಲ್ಲವೇನು? ಆದರೆ ಹಾಗೆ ನಮಗೆ ನೀಡುವ ಇಷ್ಟವನ್ನು ಅವನಲ್ಲಿ ಉಂಟಾಗುವಂತೆ ಮಾಡುವುದೇ ನಮಗಿರುವ ಕಷ್ಟ ಎಂದು ನಮ್ಮ ಪ್ರಾರ್ಥನೆ ಪೂಜೆಗಳ ಫಲ ಸ್ವರೂಪವನ್ನು ವಿಶ್ಲೇಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 503,
    english:
      "There is a huge stockpile of life essentials. An invisible wealthy master is controlling it. He is known to loan essentials on a need basis once in a while. But, how to entice him to do that? - Mankutimma",
    kannada:
      "ಜೀವಸತ್ತ್ವದಪಾರಭಂಡಾರವೊಂದಿಹುದು ।\nಸಾವಕಾರನದೃಷ್ಟನ್ ಅದನಾಳುತಿಹನು ॥\nಅವಶ್ಯಕದ ಕಡವನವನೀವುದುಂಟಂತೆ! ।\nನಾವೊಲಿಪುದೆಂತವನ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೩ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಸಮಸ್ತ ಜೀವಕೋಟಿಗೆ ಏನೇನು ಬೇಕೋ ಅವೆಲ್ಲವೂ ಒಳಗೊಂಡಂತೆ ಈ ಜಗತ್ತು ಸತ್ವಭರಿತವಾಗಿದೆ. ಈ ಸತ್ವಕ್ಕೆಲ್ಲ ಒಡೆಯ, ಅಧಿಪತಿ ಆ ಪರಮಾತ್ಮ. ನಾವು ಕೇಳಿ ಬಯಸಿದ್ದನ್ನು ಕೊಡಲು ಅವನಿಗೆ ಸಾಧ್ಯವಿದೆ. ಆದರೆ ಅವನಿಂದ ನಮಗೆ ಬೇಕಾದ್ದನ್ನು ಪಡೆಯಲು ಅವನನ್ನು ಒಲಿಸುವುದು ಹೇಗೆ ಎನ್ನುವುದೇ ನಮ್ಮ ಪ್ರಶ್ನೆ ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 504,
    english:
      "God's grace is showered on us when we are in deep trouble. That is when we appreciate it the most. On a day when the sky feels like a warm blanket, the lakes feel like ovens, the gusts of wind (breath of the nature) seem like smoke - the clouds from some where shower the earth with rain cooling her. How welcome is that rain? - Mankutimma",
    kannada:
      "ಗಗನ ಬಿಸಿಗವಸಾಗಿ, ಕೆರೆಗಳಾವಿಗೆಯಾಗಿ ।\nಜಗದುಸಿರೆ ಹೊಗೆಯಾಗಿ ಧಗಧಗಿಸುವಂದು ॥\nಒಗೆದೆತ್ತಣಿನೊ ರಾತ್ರಿಯಲಿ ಧರೆಗೆ ತಂಪೆರೆವ ।\nಮುಗಿಲವೊಲು ದೈವಕೃಪೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೪ ॥",
    kannada_explanation:
      "ಗಗನವು ಸೂರ್ಯನ ಪ್ರತಾಪದಿಂದ ಶಾಖ ಹೆಚ್ಚಾಗಿ ಇಡೀ ಧರೆಗೆ ಒಂದು ಬಿಸಿಯ ಹೊದಿಕೆಯಂತಾಗಿ, ಭೂಮಿಯ ಮೇಲಿನ ಎಲ್ಲಾ ಕೆರೆಗಳು ಆ ಶಾಖದಿಂದ ಒಲೆಗಳಂತಾಗಿ ನೀರೆಲ್ಲ ಬತ್ತಿ, ಜಗತ್ತಿನ ಉಸಿರೆಲ್ಲ ಹೊಗೆಯಂತೆ ಧಗಧಗಿಸುವಾಗ, ರಾತ್ರಿಯಲ್ಲಿ ಎಲ್ಲಿಂದಲೋ ಮೋಡಗಳೆಲ್ಲ ಒಂದುಗೂಡಿ ಧರೆಯನ್ನು ತಂಪಾಗಿಸಲು ಮಳೆಯ ಸುರಿಸುವಂತೆ, ಕಷ್ಟಗಳ ಸರಮಾಲೆಗಳಲ್ಲಿ ಸಿಕ್ಕು, ನಮಗೆ ಜೀವನವು ದುರ್ಭರವಾಗಿ, ಬದುಕಿನಲ್ಲಿ ತಾಪ ಹೆಚ್ಚಾಗಿ, ಅನ್ಯ ದಾರಿಯಿಲ್ಲದೆ ಕಂಗಾಲಾಗಿ ನಾವು ನಿಂತಾಗ, ನಮಗೆ ಆ ದೈವದ ಕೃಪೆ ಬರುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 505,
    english:
      "What is God's grace? It is just the fresh shower of cosmic spirit (energy) on this world. How much and how fast you receive depends on the your maturity in your emotions and actions. When you thoughts and action are noble, the grace is also abundant. - Mankutimma",
    kannada:
      "ದೈವಕೃಪೆಯೆನುವುದೇಂ? ಪರಸತ್ತ್ವನವವೃಷ್ಟಿ  ।\nಜೀವಗುಣ ಪಕ್ವಪಟ್ಟಂತದರ ವೇಗ ॥\nಭಾವಚೋದನೆಗಳಲಿ ಬಾಹ್ಯಸಾಧನೆಗಳಲಿ ।\nತೀವಿ ದೊರೆಕೊಳುವುದದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೫ ॥",
    kannada_explanation:
      "ದೇವರ ಕೃಪೆ ಎಂದರೆ ಏನು? ಪ್ರತಿನಿತ್ಯ ನವ ನವೀನ ರೀತಿಯಲ್ಲಿ ನಮಗೆ ಸಿಗುವ ಅವನ ಕೃಪೆಯಷ್ಟೆ. ಜೀವಿ ತನ್ನ ಅಂತರಂಗದ ಭಾವದಲ್ಲಿ ಮತ್ತು ಬಾಹ್ಯ ನಡವಳಿಕೆಗಳಲ್ಲಿ ಎಷ್ಟು ಬೇಗ ಪಕ್ವಗೊಂಡರೆ, ಅಷ್ಟೇ ವೇಗದಲ್ಲಿ ಅವನಿಗೆ ಆ ‘ಪರಮಾತ್ಮನ ಕೃಪಾಧಾರೆ’ ಸುರಿದು ತುಂಬಿಕೊಳ್ಳುವುದು ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 506,
    english:
      "You may present hundreds of requests in front of a King. He may choose to grant a few that he feels are just. Just because he did not grant all your wishes, you cannot deny that he is the King (or that the king exists). Do you think that having compassion on you is binding on him? - Mankutimma\n\n[Translator's note: Draw a parallel to God. One can not deny his existence on mere fact that all his wishes were not answered.]",
    kannada:
      "ದೊರೆಗೆ ನೀಂ ಬಿನ್ನಯಿಸೆ ನೂರೆಂಟು ಬಯಕೆಗಳ ।\nಸರಿ ತನಗೆ ತೋರ್ದೆನಿತನ್ ಅದರೊಳವನೀವಂ ॥\nಅರಿಕೆಯೆಲ್ಲವನಡಸದಿರೆ ದೊರೆಯೆ ಸುಳ್ಳಹನೆ? ।\nಕರುಣೆ ನಿರ್ಬಂಧವೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೬ ॥",
    kannada_explanation:
      "ರಾಜನಿಗೆ ನೀನು ನಿನ್ನ ನೂರೆಂಟು ಬಯಕೆಗಳನ್ನು ಅರಿಕೆಮಾಡಿದರೆ, ಅವನಿಗೆ ಯಾವುದು ಸರಿಯೆಂದು ತೋರುವುದೋ ಅದನ್ನು ನೀಡುವನು. ನೀ ಕೇಳಿದ್ದೆಲ್ಲ ಕೊಡಲಿಲ್ಲವೆಂದರೆ ಅವನು ರಾಜನೇ ಅಲ್ಲವೆಂದು ಹೇಳಲು ಸಾಧ್ಯವೇ? ಹಾಗೆಯೇ ಪರಮಾತ್ಮನ ಕರುಣೆಯೂ ಸಹ ಎಂದು ಭಗವದ್ಕೃಪಾವಿಧಾನವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 507,
    english:
      "At the time of giving a judgment, you will ask to be forgiven. The judge does look at all the good things you have done in the past and your present miseries. He can wear a fatherly hat and analyze the circumstances that lead the Can he not reduce the severity of the punishment based in this? - Mankutimma\n\n[Translator's note: Draw a parallel to God. He is the judge in the court of after-life.]",
    kannada:
      "ದಂಡನಿರ್ಣಯದಿ ನೀಂ ಕ್ಷಮಿಸೆನಲ್ ನ್ಯಾಯಪತಿ ।\nಹಿಂದಿನಾ ನಿನ್ನೊಳ್ತನವನ್ ಅಂದಿನಳಲನ್ ॥\nತಂದೆಬಗೆಯಿಂ ಬಗೆದು ಶಾಸನೋಗ್ರವನಿನಿತು ।\nಕುಂದಿಸಲಿಕಾಗದೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೭ ॥",
    kannada_explanation:
      "‘ನನ್ನ ಶಿಕ್ಷೆ ಕಡಿಮೆ ಮಾಡಿ ಎಂದು’ ಬೇಡಿದರೆ ನ್ಯಾಯಾಧಿಪತಿಯು ಅಪರಾಧಿಯ ಹಿಂದಿನ ಸದ್ವರ್ತನೆ ಮತ್ತು ಹಿಂದೆ ಅವನು ಅನುಭವಿಸಿರುವ ದುಃಖವನ್ನು ಪರಿಗಣಿಸಿ, ತಂದೆ ತನ್ನ ಸುತನು ಸರಿ ಮಾರ್ಗದಲ್ಲಿರಲೆಂದು ಶಿಕ್ಷೆ ಕಡಿಮೆ ಮಾಡುವಂತೆ, ಶಿಕ್ಷೆಯ ತೀವ್ರತೆ ಮತ್ತು ಕಠಿಣತೆಯನ್ನು ಕಡಿಮೆಮಾಡಲಾರನೆ? ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾ ಪರಮಾತ್ಮನ ಕೃಪೆಯಿಂದ ನಾವು ನಮ್ಮ ಪೂರ್ವ ಕರ್ಮ ಮತ್ತು ಅದರ ಪರಿಣಾಮಗಳ ತೀವ್ರತೆಯನ್ನು ಹೇಗೆ ಕಡಿಮೆಮಾಡಿಕೊಳ್ಳಬಹುದು ಎಂಬ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 508,
    english:
      "God has a balance to measure our deeds. On one plate he keeps all the sins of man without letting even one go unaccounted. On the other he places all the good deeds which includes faith, devotion and remorse. It is up to us to tilt the scale either way. - Mankutimma",
    kannada:
      "ತಕ್ಕಡಿಯ ದೈವ ಪಿಡಿದದರೊಂದು ತಟ್ಟೆಯಲಿ ।\nಒಕ್ಕುವುದು ಬಿಡದೆ ಜೀವಿಯ ಪಾಪಚಯವ ॥\nಇಕ್ಕುವುದು ಸುಕೃತಗಳನಿನ್ನೊಂದರೊಳಗಲ್ಲಿ ।\nಭಕ್ತಿ ಪಶ್ಚಾತಾಪ - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೮ ॥",
    kannada_explanation:
      "ನಾವು ಮಾಡಿದ ಕೃತ್ಯಗಳನ್ನು ಒಳ್ಳೆಯ ಮತ್ತು ಕೆಟ್ಟದ್ದೆಂದು ವಿಂಗಡಿಸಿ, ಒಂದು ತಕ್ಕಡಿಯಲ್ಲಿ ಒಂದು ತಟ್ಟೆಗೆ ಸತ್ಕರ್ಮಗಳನ್ನೂ ಮತ್ತೊಂದು ತಟ್ಟೆಗೆ ಪಾಪಕರ್ಮಗಳನ್ನೂ ಹಾಕಿ ಆ ದೈವ ‘ತುಲನೆ’ ಮಾಡುತ್ತದಂತೆ. ಸುಕೃತಗಳ ಫಲ ಸುಖದ ರೂಪದಲ್ಲಿ ಮತ್ತು ಪಾಪ ಕರ್ಮಗಳ ಫಲ ಕಷ್ಟಗಳ ರೂಪದಲ್ಲಿ ನಮಗೆ ಸಿಗುತ್ತದೆ. ಈಗಾಗಲೇ ಗಂಟು \n ಕಟ್ಟಿಕೊಂಡ ಪಾಪ ಕ್ರಮಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ. ಆದರೆ ಅವುಗಳು ನಮ್ಮ ಮೇಲೆ ಭೀರುವ ಪ್ರಭಾವ ಮತ್ತು ಪರಿಣಾಮಗಳ ತೀವ್ರತೆಯನ್ನು ಭಕ್ತಿ ಮತ್ತು ಪಶ್ಚಾತ್ತಾಪಗಳಿಂದ ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳಬಹುದು ಎನ್ನುವುದೇ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಅಂತರ್ಯ.",
  },
  {
    number: 509,
    english:
      "If you have carried over punya (Good Karma) from previous births and you add to that by behaving well and feeling true remorse for all bad deeds, then God will fell compassionate and will soften the punishment that has to be meted out (as per law) in your afterlife. - Mankutimma",
    kannada:
      "ಪ್ರಾರಾಬ್ಧದಲಿ ನಿನ್ನ ಪುಣ್ಯವೆನಿತಾನುಮಿರೆ ।\nಸೇರೆ ಪಶ್ಚಾತಾಪ ಭಾರವದರೊಡನೆ ॥\nದಾರುಣದ ಕರ್ಮನಿಯತಿಯನಿನಿತು ಶಿಥಿಲಿಪುದು ।\nಕಾರುಣ್ಯದಿಂ ದೈವ - ಮಂಕುತಿಮ್ಮ ॥ ೫೦೯ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಪೂರ್ವ ಕರ್ಮಗಳಿಗನುಸಾರವಾಗಿ ಘೋರವಾದ ಕರ್ಮಫಲಗಳನ್ನು ಅನುಭವಿಸಲೇ ಬೇಕಾದಾಗ, ಪೂರ್ವ ಸಂಚಿತ ಕರ್ಮಗಳಲ್ಲಿ ಸ್ವಲ್ಪವಾದರೂ ಪುಣ್ಯವು ಇದ್ದರೆ, ಅದರೊಟ್ಟಿಗೆ ನಮ್ಮ ತಪ್ಪಿನ ಅರಿವಾಗಿ ಪಶ್ಚಾತ್ತಾಪವೂ ಸೇರಿದರೆ, ದೈವದ ಕರುಣೆಯಿಂದ ಅನುಭವಿಸಬೇಕಾದ ಕಷ್ಟಗಳ ತೀವ್ರತೆ ಸ್ವಲ್ಪವಾದರೂ ಕಡಿಮೆಯಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 510,
    english:
      "Do you think the whole world is a plan for you - for your rises and falls, for your happiness and grief? Have you ever thought how actions are effecting the lives of so many other beings? The chain of causation is very difficult to follow. - Mankutimma",
    kannada:
      "ನಿನ್ನೇಳುಬೀಳುಗಳು ನಿನ್ನ ಸೊಗ ಗೋಳುಗಳು ।\nನಿನ್ನೊಬ್ಬನೋಸುಗವೆ ನೆಡೆವ ಯೋಜನೆಯೇಂ? ॥\nಇನ್ನದೆನಿಬರ ಜೀವಪಾಕವದರಿಂದಹುದೊ! ।\nಛಿನ್ನವಾ ಋಣಮಾರ್ಗ - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೦ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಬದುಕಿನ ಏರಿಳಿತಗಳು, ನಿನ್ನ ಸಂತೋಷ ಮತ್ತು ದುಃಖಗಳೆಲ್ಲವೂ ನಿನ್ನೊಬ್ಬನಿಗಾಗಿಯೇ ನಡೆದ ಒಂದು ಯೋಜನೆಯೆಂದು ನೀನಂದುಕೊಳ್ಳಬೇಡ. ನಿನ್ನ ಜೀವನ ಹಲವಾರು ಕಾರಣಗಳ ಪ್ರಭಾವದಿಂದ ರೂಪುಗೊಂಡಿದೆ.ಆದರೆ ಯಾರಿಂದ ಯಾವ ಋಣ ಬಂದಿದೆ,ಎಷ್ಟು ಬಂದಿದೆ ಎನ್ನುವುದು ನಮಗರಿವಾಗದ ರಹಸ್ಯ, ಎಂದು ಒಂದು ಗೂಢವಾದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 511,
    english:
      "It is true that Yudhistira was not put into hell in his afterlife. He did every thing according to dharma in his life. Yet he was not spared from teh ordeal of having to see hell on the way to heaven. This was done because of his involvement in the slaying of Drona during the Kurukhsetra war. Although, the plot was not his own, he had to bear the punishment. It does not matter who plants the seed of sin, if you get involved, then you will have to eat the fruit. That is the calculation of debt of karma. - Mankutimma",
    kannada:
      "ನರಕ ತಪ್ಪಿತು ಧರ್ಮಜಂಗೆ, ದಿಟ, ಆದೊಡೇಂ? ।\nನರಕದರ್ಶನದುಃಖ ತಪ್ಪದಾಯಿತಲ? ॥\nದುರಿತತರುವಾರು ನೆಟ್ಟುದೊ, ನಿನಗಮುಂಟು ಫಲ ।\nಚಿರಋಣದ ಲೆಕ್ಕವದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೧ ॥",
    kannada_explanation:
      'ಶ್ರೀ ಕೃಷ್ಣನ ಅನುಜ್ಞೆಯಂತೆ " ಹತೋsಶ್ವತ್ತಾಮೋ ನಾಮ ಕುಂಜರಃ" ಎಂದು ಹೇಳುವಾಗ ‘ನಾಮ ಕುಂಜರಃ’ ಎನ್ನುವುದನ್ನು ಕೇಳಿಸದಂತೆ ಹೇಳಿ, ತನ್ನ ಮಗನಾದಅಶ್ವತ್ತಾಮನೇಸತ್ತನೆಂದು ಭಾವಿಸುವಂತೆ ಮಾಡಿ ಕೌರವರ ಸೇನಾಧಿಪತ್ಯವನ್ನು ವಹಿಸಿದ್ದ ‘ದ್ರೋಣ’ ನ ಸಾವಿಗೆ ತಂತ್ರದಿಂದ ಕಾರಣನಾದ ಧರ್ಮರಾಯನಿಗೆ ನರಕವಾಸ ತಪ್ಪಿದರೂ, ಈ ಒಂದು ಪಾಪದಿಂದನರಕ ದರ್ಶನವಾಯಿತಲ್ಲ!! ‘ಇಲ್ಲಿ ಕೃಷ್ಣನ ಮಾತು ಧರ್ಮಜನಬಾಯಲ್ಲಿ’ ಅದೇ ರೀತಿ ನಮ್ಮ ನಮ್ಮ ಬದುಕುಗಳಲ್ಲೂ ಯಾರೋ ಮಾಡಿದ ಪಾಪಕ್ಕೆ ಯಾರೋ ಬಲಿಯಾಗುವುದಿಲ್ಲವೇ? ಅದಕ್ಕೆ ಕಾರಣ ನಮಗರ್ಥವಾಗದ ‘ಋಣ’ ದ ಲೆಕ್ಕಾಚಾರ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 512,
    english:
      "No one can explain the reasons behind the actions of Fate. It could be due to consequence of some of your action, or as preparation for someone's comfort, or some other reason or part of bigger plan. If such actions (will of the providence) require you to go through pain; simply endure it and don't call out God to be blind. - Mankutimma\n\n[Translator's note: ತೇನವಿನಾ ತೃಣಮಪಿ ನ ಚಲತೆ । Without His will, even a blade of grass will move. Just because we can not connect the dots, we should not blame God to be unfair and blind towards our suffering. At the very least, it will be part of a bigger plan.]",
    kannada:
      "ಆವ ಋಣಕೋಸುಗವೊ, ಆರ ಹಿತಕೋಸುಗವೊ ।\nಆವಾವ ಕಾರಣಕೊ, ಆವ ಯೋಜನೆಗೋ ॥\nನೋವ ನೀಂ ಪಡುವುದೇ ದೈವೇಚ್ಛೆಯಾಗಿರದೆ? ।\nದೈವ ಕುರುಡೆನ್ನದಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೨ ॥",
    kannada_explanation:
      "ಯಾವ ಋಣ ತೀರಿಸಲೋ ಅಥವಾ ಯಾರ ಹಿತಕ್ಕಾಗಿಯೋ ಅಥವಾ ಬೇರೆ ಯಾವುದೋ ಕಾರಣಕ್ಕೋ ಅಥವಾ ನಮಗರಿಯದ ಶಕ್ತಿಯ ಯಾವ ಯೋಜನೆಗನುಸಾರವಾಗಿಯೋ ನೀನು ನೋವನುಭವಿಸುವುದೇ ದೈವೇಚ್ಛೆ ಆಗಿದ್ದರೆ ಆ ದೈವವನ್ನು ಕುರುಡು ಎನ್ನಬೇಡ, ಏಕೆಂದರೆ ನೀ ಅನುಭವಿಸುವುದು ಕೇವಲ ದೈವ ಕೃಪೆಯನ್ನಲ್ಲ ಅದರೊಳಗೆ ನಿನ್ನ ಪಾಲೂ ಇರುತ್ತದೆ ಎಂದು ನಮ್ಮ ಕರ್ಮಫಲಗಳ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 513,
    english:
      "It can not be said with certainty when and by what means will fate help us. Or when it will release us from the clutches of previous actions. When will our present and future good deeds match up to the past sins? All these are part of the divine secret. - Mankutimma",
    kannada:
      "ಆವುದರಿನಾವಾಗ ದೈವ ತಾನೊಲಿದೀತೊ? ।\nಪೂರ್ವಿಕದ ನಿಯತಿಯನದೆಂದು ಸಡಲಿಪುದೋ? ॥\nಭಾವಿಸುಕೃತವದೆಂದು ಪೂರ್ವದುರಿತಕೆ ಮಿಗಿಲೊ? ।\nದೈವಿಕರಹಸ್ಯವದು- ಮಂಕುತಿಮ್ಮ ॥ ೫೧೩ ॥",
    kannada_explanation:
      "ನಾವು ಏನು ಮಾಡಿದರೆ ಆ ದೈವ ನಮಗೆ ಒಲಿದೀತು? ಹಿಂದಿನಿಂದ ಪಡೆದುಬಂದ ಕರ್ಮ ಶೇಷವನ್ನು ಎಂದು ಸಡಿಲಿಸೀತು. ನಮ್ಮ ಮುಂದಿನ ಪುಣ್ಯವು ಹಿಂದಿನ ಪಾಪಕ್ಕಿಂತ ಎಂದು ಅಧಿಕವಾಗುವುದೋ ಯಾವುದೂ ನಮಗೆ ಅರ್ಥವಾಗುವುದಿಲ್ಲ. ಅದೊಂದು ದೈವೀಕ ರಹಸ್ಯವೆಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 514,
    english:
      "If you say there is no God because you don't have happiness then what do you think a happy person may say? Your notion of God should not be tied to your happiness - especially those that are related to body and external world. If you seek for an experience that is beyond the senses, then you will be happy (with your realization of God). - Mankutimma",
    kannada:
      "ಎನಗೆ ಸುಖವಿಲ್ಲವದರಿಂ ದೇವರಿರನೆನ್ನು-।\nವನುಮತಿಯ ನೀಂ ಗೆಯ್ಯೆ, ಸುಖಿಯದೇನನುವಂ ॥\nತನುಬಾಹ್ಯಕರಣದನುಭವಕಿಂತ ಸೂಕ್ಷ್ಮ ತರ- ।\nದನುಭವವ ನೀನರಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೪ ॥",
    kannada_explanation:
      "ನಿನಗೆ ಕಷ್ಟ ಬಂದಿದೆ, ಹಾಗಾಗಿ ಆ ದೇವರೇ ಇಲ್ಲ ಎಂದು ನೀನು ಅನುಮಾನ ಪಟ್ಟರೆ, ಸುಖಪಡುತ್ತಿರುವವನು ಏನು ಹೇಳುತ್ತಾನೆ ಎಂದು ನೋಡು. ಈ ಸುಖ ದುಃಖವೆನ್ನುವುದು ಕೇವಲ ಹೊರಗಿನ ಅನುಭವ. ಆದ್ದರಿಂದ ದೇಹ ಮನಸ್ಸು ಬುದ್ಧಿಗಳೆಂಬ ಬಾಹ್ಯ ‘ಕರಣ’ಗಳಿಗೂ ಅತೀತವಾದ ಸೂಕ್ಷತರವಾದ ಆನಂದದ ಅಥವಾ ಸುಖದ ಅನುಭವವನ್ನು ನೀನು ಹುಡುಕು ಎಂದು ಒಂದು ಸೂಚನೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ",
  },
  {
    number: 515,
    english:
      "Can one deny the existence of God just because his wishes were not fulfilled? Can he say that the entire world in unfair? There is no God at all? If every one based their notion of God on his own experience (material), then will the truth not be fractured? (as opposed to being universal) - Mankutimma",
    kannada:
      "ಎನ್ನ ಬೇಡಿಕೆ ನಷ್ಟವಹುದೆಂತು ದೇವನಿರೆ? ।\nಅನ್ಯಾಯ ಜಗವೆಲ್ಲ; ದೇವನಿರನೆನುತ ॥\nತನ್ನ ತನ್ನನುಭವವ ನಂಬಲೋರೊರ್ವನುಂ ।\nಭಿನ್ನವಾಗದೆ ಸತ್ಯ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೫ ॥",
    kannada_explanation:
      '"ಆ ದೇವನಿರುವುದಾದರೆ ನನ್ನ ಬೇಡಿಕೆಗಳು ಈಡೇರದೆ ಇರಲು ಸಾಧ್ಯವೇ?" ಎಂದು ದೇವರನ್ನು ನಂಬುವವನು ಆಶಾಭಾವದಿಂದ ಇರುತ್ತಾನೆ. ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಷ್ಟೊಂದು ಅನ್ಯಾಯಗಳು ಅಕ್ರಮಗಳು ದುಷ್ಟತನಗಳು ನಡೆಯುತ್ತಿರುವಾಗ " ಛೆ! ಇಷ್ಟೊಂದು ಅನ್ಯಾಯಗಳಿರುವಾಗ ಆ ದೇವರೆಂಬುವನು ಇರಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ವಾಸ್ತವವಾದಿ ಅಥವಾ ನಾಸ್ತಿಕವಾದಿ ಇರುತ್ತಾನೆ. ಹೀಗೆ, ಇರುವ ಒಂದು ಸತ್ಯಕ್ಕೆ ಅವರವರ ಅನುಭವಕ್ಕೆ ಅನುಸಾರವಾಗಿ ಬೇರೆ ಪರಿಭಾಷೆಯನ್ನು ಕೊಟ್ಟಾಗ ಸತ್ಯವು ಭಿನ್ನವಾಗದೆ? ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 516,
    english:
      "If there are hundred people there will be hundreds of hundred experiences. On any given day, every single person will have a hundred different ways of experiencing God. How can one measure them? (to determine which one is better). What should be the scale (to measure it against)? The description of God based on personal experience is like sand castles - momentary existence. - Mankutimma",
    kannada:
      "ಅನುಭವದ ಪರಿ ನೂರ್ವರಿಗೆ ನೂರು ನೂರು ಪರಿ ।\nದಿನವೊಂದರೊಳೆ ಅದೊಬ್ಬಂಗೆ ನೂರು ಪರಿ ॥\nಎಣಿಪುದಾರನುಭವವನ್, ಆವ ಪ್ರಮಾಣದಲಿ ।\nಮಣಲ ಗೋಪುರವೊ ಅದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೬ ॥",
    kannada_explanation:
      "ನಮಗೆ ಯಾವುದೇ ವಿಷಯದ ಅನುಭವ ಎಲ್ಲ ಕಾಲಕ್ಕೂ ಒಂದೇ ರೀತಿಯಲ್ಲಿ ಇರುವುದಿಲ್ಲ. ಒಂದು ವಿಷಯ ನೂರು ಜನಕ್ಕೆ ನೂರು ರೀತಿಯ ಅನುಭವವನ್ನು ನೀಡಬಹುದು. ಹಾಗೆಯೇ ಒಂದೇ ವಿಷಯವು ಒಂದೇ ದಿನದಲ್ಲಿ ಒಬ್ಬನೇ ವ್ಯಕ್ತಿಗೆ ಬೇರೆ ಬೇರೆ ಸಮಯದಲ್ಲಿ ಬೇರೆ ಬೇರೆ ರೀತಿಯ ಅನುಭವವನ್ನು ನೀಡಬಹುದು. ಹಾಗೆಯೇ ಪರಮಾತ್ಮಾನುಭವವೂ ಸಹ ಸದಾಕಾಲ ಒಂದೇ ರೀತಿಯಲ್ಲಿರುವುದಿಲ್ಲ ಮತ್ತು ಅವನನ್ನು ಕುರಿತಾದ ಭಾವನೆಗಳನ್ನುಎಣಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾ, ಈ ಅನುಭವವು, ಎದ್ದು, ಬಿದ್ದು ಮತ್ತೆ ಬೇರೆಯೇ ರೂಪ ಪಡೆದು ನಿಲ್ಲುವಂತೆ ಮತ್ತೆ ಬೀಳುವ ಮರಳ ಗೋಪುರವಿದ್ದಂತೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 517,
    english:
      "Can there be a limit to the number of different ways people (all humans) may experience God? New experiences will keep flowing just like the waves at sea. Hence having a set of rules or regulations for such experience is baseless. There are hundreds of voices in each man's hearts. - Mankutimma",
    kannada:
      "ಮನುಜಸಾಕಲ್ಯದನುಭವಕೆ ಮಿತಿಗೊತ್ತುಂಟೆ? ।\nದಿನದಿನವು ಕಡಲಲೆಗಳಂತೆ ಪರಿವುದದು ॥\nಅನುಮಿತಿಯ ನಿರ್ಧಾರವದರಿಂ ನಿರಾಧಾರ ।\nದನಿ ನೂರು ನರನೆದೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೭ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಸಕಲ ಅನುಭವಗಳಿಗೆ ಒಂದು ಮಿತಿಯು ಉಂಟೆ? ಸಮುದ್ರದ ಮೇಲೆ ಏಳುವ ಅಲೆಗಳನ್ನು ಎಣಿಸಲಾಗುವುದೇ? ಹಾಗೆಯೇ ಪ್ರತಿನಿತ್ಯ ಮನುಷ್ಯನ ಹೃದಯದಲ್ಲಿ ಏಳುವ ಭಾವನೆಗಳನ್ನು ಎಣಿಸಲೂ ಆಗುವುದಿಲ್ಲ ಮತ್ತು ಅದರ ಉದ್ದ, ಆಳ, ಮತ್ತು ಎತ್ತರಗಳನ್ನು ಅಳೆಯಲೂ ಆಗುವುದಿಲ್ಲ. ಹಾಗೆ ಅಳೆದರೆ ಅದಕ್ಕೆ ಯಾವ ಆಧಾರವೂ ಇರುವುದಿಲ್ಲ ಏಕೆಂದರೆ ನೂರಾರು ಭಾವನೆಯ ದನಿಗಳು ನರನ ಹೃದಯಕ್ಕೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 518,
    english:
      "There is some meaning to individual experiences. But that is limited meaning. The same realization expands when selfishness is reduced. When that realization is coupled with learnings from the ancient wise sages, then it becomes truly meaningful - just like the one Arjuna had in the battlefield of Kurukshetra after listening to Krishna (the advice of Geeta). - Mankutimma",
    kannada:
      "ಅರ್ಥವುಂಟನುಭವಕ್ಕಾದೊಡದು ಮಿತದರ್ಥ ।\nಸ್ವಾರ್ಥ ಮಿತವಾದಂತೆ ವಿಸ್ತರಿಪುದರ್ಥ ॥\nಸಾರ್ಥಕವಪ್ಪುದಾರ್ಷೇಯಾರ್ಥದೊಡವೆರೆಯೆ ।\nಪಾರ್ಥನನುಭವದಂತೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೮ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಪ್ರತೀ ಅನುಭವಕ್ಕೂ ಅರ್ಥವಿದೆಯಾದರೂ ಅದು ಕೇವಲ ನಮ್ಮ ಪರಿಮಿತ ಮತಿಯ ಮಿತಿಗೆ ಸೀಮಿತವಾದದ್ದು. ಏಕೆಂದರೆ ಅಲ್ಲಿ ಸ್ವಾರ್ಥದ ಲೇಪವಿರುತ್ತದ್ದೆ. ಸ್ವಾರ್ಥದ ಭಾವ ಕಡಿಮೆಯಾದಲ್ಲಿ ಆ ಭಾವದ ಅರ್ಥ ವಿಸ್ಥಾರವಾಗುತ್ತದೆ. ಅರ್ಜುನನಿಗೆ ಯುದ್ಧರಂಗದಲ್ಲಿ ವೈರಾಗ್ಯ ಬಂದಾಗ ಹೇಗೆ ಅವನಿಗೆ ‘ಭಗವದ್ಗೀತೆ’ ಯ ಭೋಧನೆಯಾಯಿತೋ ಹಾಗೆಯೇ ನಮ್ಮ ಸನಾತನ ಋಷಿಮುನಿಗಳಿಂದ ಹರಿದುಬಂದಿರುವ ಜ್ಞಾನದ ವಾಹಿನಿಯೊಂದಿಗೆ ನಮ್ಮ ಭಾವ ಮಿಳಿತವಾದರೆ ಆಗ ನಾವು ಭಾವ ಸಾರ್ಥಕ್ಯವನ್ನು ಪಡೆಯಬಹುದು ಎಂದು ಭಾವಗಳ ಔನ್ನತ್ಯವನ್ನು ಹೇಗೆ ಪಡೆಯಬಹುದು ಎಂದು ನಮಗೆ ಮಾರ್ಗ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 519,
    english:
      "The Ganges has its birth in the caves of the mighty Himalayas. It is always flowing. The knowledge in the Vedas are also like that - ever green. The efforts of mankind, his intellect and wisdom are like tributaries that feed in little water to the mighty river. The knowledge of the Vedas is self-standing and our efforts (to prove it) are like tributaries that feed in water to the river from time-to-time and not permanent. - Mankutimma",
    kannada:
      "ಪ್ರಾಲೇಯಗಿರಿಗುಹೆಯ ಗಂಗೆ ವೇದ ಪುರಾಣ ।\nಕಾಳಿಂದಿ ಶೋಣೆ ಪೌರುಷ ಬುದ್ಧಿ ಯುಕ್ತಿ ॥\nಮೂಲ ಸ್ವತಸ್ಸಿದ್ಧ ಸಂವಿದಾಪಗೆಗಿಂತು ।\nಕಾಲದುಪನದಿ ನೆರವು - ಮಂಕುತಿಮ್ಮ ॥ ೫೧೯ ॥",
    kannada_explanation:
      "ಹಿಮಾಲಯದ ಅಂತರಂಗದಿಂದ ಹರಿವ ಮತ್ತು ಎಂದೂ ಬತ್ತದ ಸಾರ್ವಕಾಲಿಕ ನದಿ ಗಂಗೆಯಂತೆ, ಸರ್ವಕಾಲಕ್ಕೂ ಸತ್ಯವನ್ನೇ ಪ್ರತಿಪಾದಿಸುವ ನಮ್ಮ ವೇದ ಮತ್ತು ಪುರಾಣಗಳು. ಆ ಗಂಗೆಯಲ್ಲಿ ಬಂದು ಸೇರುವ ಯಮುನಾ ಶೋಣಾ ಮುಂತಾದ ನದಿಗಳಂತೆ ನಮ್ಮ ಬುದ್ಧಿಶಕ್ತಿ, ಜಾಣ್ಮೆ,ಯುಕ್ತಿಗಳು ಸತ್ಯದ ಮೂಲವಾದ ವೇದ ಉಪನಿಷತ್ತುಗಳ ಸತ್ವವನ್ನು ಅನುಸಂಧಾನಮಾಡಿದಾಗ ಕಾಲವೆಂಬ ಉಪನದಿಯ ನೆರವನ್ನು ಪಡೆದು, ಜ್ಞಾನದ ಸುಭದ್ರ ತಳಹದಿಯಮೇಲೆ ನಮ್ಮ ಪ್ರಯತ್ನದಿಂದ ಜ್ಞಾನದೀವಿಗೆಯನ್ನು ನಮ್ಮ ನಮ್ಮ ಹೃದಯದಲ್ಲಿ ಬೆಳಗಿಸಿಕೊಳ್ಳಬೇಕು ಎನ್ನುವ ಆಶಯವನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 520,
    english:
      "From time immemorial, this world is enlightened by the ancient knowledge (of Vedas). Will you discard them all just because they are old? You would be a fool to do so. It is the foundation of all our new understandings. That knowledge is enabling us to make modern-day-progress possible. Just like a tree is always beautiful only when the roots are old and sprouts are fresh. - Mankutimma",
    kannada:
      "ತಿಳಿವಾವುದಿಳೆಗೆ ಯುಗಯುಗದ ಬೆಳಕಾಗಿತ್ತೊ ।\nಹಳದೆಂದು ನೀನದನು ಕಳೆಯುವೆಯ, ಮರುಳೆ ॥\nತಳಹದಿಯದಲ್ತೆ ನಮ್ಮೆಲ್ಲ ಹೊಸ ತಿಳಿವಿಂಗೆ? ।\nಹಳೆ ಬೇರು ಹೊಸ ತಳಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಮ್ಮ ಸನಾತನದ ವೇದದ ಜ್ಞಾನವೇ ಅತೀ ಪುರಾತನವಾದದ್ದು. ಅದು ಅನಾದಿ ಕಾಲದಿಂದ ಯುಗ ಯುಗಗಳಿಂದ ಜನಮಾನಸದೊಳಕ್ಕೆ ಹರಿದು ಬರುತ್ತಿದೆ. ಅದನ್ನು ಹಳತು ಎಂದು ನೀನು ಹೇಳುತ್ತೀಯಾ ಹುಚ್ಚಾ? ಅದೇ ಅಲ್ಲವೇ ನಮ್ಮ ಜಗತ್ತಿನ ಸಮಸ್ತ ಆಧುನಿಕ ಜ್ಞಾನದ ಉಗಮಕ್ಕೆ ತಳಹದಿ ಅಥವಾ ಅಡಿಪಾಯ. ಹಳೆಯಬೇರು ಆಳವಾಗಿ ನೆಲದಲ್ಲಿರುವಾಗ ಮಾತ್ರ ಹೊಸ ಚಿಗುರು ಪ್ರತೀ ವಸಂತಕ್ಕೂ ನಳನಳಿಸುವುದು ಎಂದು ನಮ್ಮ ಬದುಕಿನ, ಸಂಸ್ಕಾರ, ಸಂಸ್ಕೃತಿಗಳ ಮತ್ತು ಜ್ಞಾನದ ಬೇರನ್ನು ನಮಗೆ ನೆನಪಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 521,
    english:
      "The ancient knowledge of the Vedas, the current traditions of the world and wisdom you accumulated based on your experiences. These have to be thought over and over again. They have to be tallied with each other. When we go through such exercise, a new philosophy emerges that is very personal to each one. That should be treated as the yardstick for all decisions. That shall light your path going forward. - Mankutimma",
    kannada:
      "ವೇದ ಲೋಕಾಚಾರ ನಿನ್ನನುಭವದ ಯುಕ್ತಿ ।\nಶೋಧಿಸೀ ಮೂರನುಂ ಸಂವಾದಗೊಳಿಸು ॥\nಸಾಧಿಜ್ಞಾನ ನರಸಾಧ್ಯ ಪ್ರಮಾಣವದು ।\nಹಾದಿ ಬೆಳಕದು ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೧ ॥",
    kannada_explanation:
      "ಅನಾದಿ ಕಾಲದಿಂದಲೂ ಹರಿದು ಬಂದಿರುವ ವೇದಜ್ಞಾನದ ಸಾರ, ಲೋಕಾರೂಢಿಯಲ್ಲಿ ನಮಗೆ ಲಭ್ಯವಾದ ಜ್ಞಾನ ಮತ್ತು ನಾವು ನಮ್ಮ ಅಂತರಂಗದಲ್ಲಿ ಮಥಿಸಿ ಅರಿತು ಪಡೆದುಕೊಂಡ ಅರಿವು, ಈ ಮೂರನ್ನು ಸಮನ್ವಯಗೊಳಿಸಿದ್ದಲ್ಲಿ, ಅದು ಸಾಧಿಸಿದ ಜ್ಞಾನವಾಗಿ ರೂಪುಗೊಳ್ಳುತ್ತದೆ. ನರನ ಸಾಧನೆಗೆ ಮತ್ತು ಅಂತಹ ಸಾಧಿತ ಜ್ಞಾನವೇ ನಮ್ಮ ಬದುಕಿಗೆ ಬೆಳಕಾಗುತ್ತದೆ ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 522,
    english:
      "A tree is most healthy and beautiful when it has old roots and fresh sprouts. Just like that, it is Dharma only when new wisdom is in harmony with ancient philosophy. When the words of sages are reverberated in acts of science and art, there is bound to be prosperity to all. - Mankutimma",
    kannada:
      "ಹೊಸ ಚಿಗುರು ಹಳೆ ಬೇರು ಕೂಡಿರಲು ಮರಸೊಬಗು ।\nಹೊಸಯುಕ್ತಿ ಹಳೆತತ್ತ್ವದೊಡಗೂಡೆ ಧರ್ಮ ॥\nಋಷಿವಾಕ್ಯದೊಡನೆ ವಿಜ್ಞಾನ ಕಲೆ ಮೇಳವಿಸೆ ।\nಜಸವು ಜನಜೀವನಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೨ ॥",
    kannada_explanation:
      "ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕ ಬಹಳ ಪ್ರಖ್ಯಾತವಾದ ಮತ್ತು ಹೆಚ್ಚು ಪ್ರಚಾರವನ್ನು ಪಡೆದ ಮುಕ್ತಕಗಳಲ್ಲಿ ಒಂದು. ಒಂದು ಮರದ ಬೇರುಗಳು ಹಳೆಯದಾಗಿದ್ದು ಮತ್ತು ಆಳವಾಗಿದ್ದರೆ ಆ ಮರದಲ್ಲಿ ಮೊಳೆಯುವ ಹೊಸ ಚಿಗುರು ಬಹಳ ಸೊಗಸು. ಹಾಗೆಯೇ ನಮ್ಮ ಹಳೆಯ ತತ್ವದ ಸತ್ವವನ್ನು ಉಳಿಸಿಕೊಂಡು ಹೊಸ ಯುಕ್ತಿಯಿಂದ ಕೂಡಿ ಪಾಲಿಸುವ ಧರ್ಮವಾಗಬೇಕು. ಪುರಾತನ ಋಷಿಗಳ ಜ್ಞಾನದ ವಾಕ್ಯಗಳೊಡನೆ ನವೀನ ವಿಜ್ಞಾನವು ಸಮನ್ವಯಗೊಂಡರೆ, ಅಂತಹ ಒಂದು ಸ್ಥಿತಿ ಜನರ ಜೀವನಕೆ ನಿಜವಾದ ಸಂತಸವನ್ನು ತರುತ್ತದೆ ಎಂದು ಬದುಕಿನ ಅದ್ಭುತ ಸತ್ಯವನ್ನು ಪ್ರತಿಪಾದಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 523,
    english:
      "The Vedas, various scriptures and doctrines on morality are all the road-side lamps to help us see the right path in the darkness. What good are these street lights for a person who is already elevated to a higher level of consciousness or attained nirvana (ultimate realization)? - Mankutimma",
    kannada:
      "ವೇದಗಳು ಶಾಸ್ತ್ರಗಳು ಲೋಕನೀತಿಗಳೆಲ್ಲ ।\nಹಾದಿ ತೋರಲು ನಿಶಿಯೊಳುರಿವ ಪಂಜುಗಳು ॥\nಸೌಧವೇರಿದವಂಗೆ, ನಭವ ಸೇರಿದವಂಗೆ ।\nಬೀದಿಬೆಳಕಿಂದೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೩ ॥",
    kannada_explanation:
      "ಕತ್ತಲಲ್ಲಿ ನಮಗೆ ಬೆಳಕ ತೋರುವ ಪಂಜುಗಳಂತೆ ಅಜ್ಞಾನದಲ್ಲಿರುವವಗೆ ವೇದದ ಮತ್ತು ಶಾಸ್ತ್ರಗಳ ಜ್ಞಾನ ವಿಜ್ಞಾನಗಳು ದೀಪಗಳಂತೆ. ಒಂದು ಲಾಟೀನಿನ ಬೆಳಕಿನಲ್ಲಿ ಹಾದಿಯನ್ನು ಸವೆಸಿ,ದೀಪಗಳ ಬೆಳಕಿನಿಂದ ಪ್ರಾಜ್ವಲ್ಯಮಾನವಾದ ಮನೆಯನ್ನೋ, ಸೌಧವನ್ನೋ ಹೊಕ್ಕವನಿಗೆ ಆ ಲಾಟೀನಿನ ಬೆಳಕಿನ ಅವಶ್ಯಕತೆಯಿರುವುದಿಲ್ಲ ಎಂದು ಅಜ್ಞಾನದಿಂದ ಜ್ಞಾನದೆಡೆಗೆ ಹೋಗುವ ಮಾರ್ಗವನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 524,
    english:
      "To be alive is the strongest yardstick to measure our actions against. It trumps all other measure like religion and morality. Does a river having floods try to contain itself with in the banks (and attempt not to hurt the ones living on the banks)? Every situation calls for re-evaluation of our previously held standards of morality. The real code to live by is thus elusive and always changing. We should always be in search of that balance. - Mankutimma",
    kannada:
      "ಪಿರಿದೆಲ್ಲ ಮತನೀತಿಗಳಿಗಿಂತ ಜೀವಿತವು ।\nನೆರೆಬಂದ ನದಿ ದಡಕೆ ಬಾಗಿ ಪರಿಯುವುದೇಂ? ॥\nಧರುಮಸೂಕ್ಷ್ಮದ ತಿಳಿವೆ ಲೋಕಸೂತ್ರದ ಸುಳಿವು ।\nಅರಸು ಜೀವಿತ ಹಿತವ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೪ ॥",
    kannada_explanation:
      "ಬದುಕು ಬದುಕಿನ ಎಲ್ಲ ಸೂತ್ರಗಳಿಗಿಂತ ಹಿರಿಯದು. ಉಕ್ಕಿ ಪ್ರವಾಹವಾಗಿ ಹರಿಯುವ ನದಿ, ದಡಕ್ಕೆ ನಮಸ್ಕರಿಸುತ್ತದೇನು? ಧರ್ಮ ಸೂಕ್ಷ್ಮಗಳೆಲ್ಲ ಬದುಕಿನ ಸೂತ್ರಗಳನ್ನು ನಮಗೆ ಅರಿವಾಗಿಸಬೇಕು ಹಾಗಾಗಿ ನೀನು ಅವುಗಳನ್ನೆಲ್ಲ ಮೀರಿ ಬದುಕಿನ ಹಿತವನ್ನು ಹುಡುಕು ಎಂದು ಒಂದು ಜ್ಞಾನದ ಸುಳಿವು ಮತ್ತು ಒಂದು ಆದೇಶ ಎರಡನ್ನೂ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 525,
    english:
      "When the world is growing, the scriptures will also grow. Scriptures are considered to be created by God (The universal truth). Those scriptures will beget more others which will interpret and elaborate on the basic truth. As we find a variety of beings, so will be the scriptures. That is how science (one of the modern scriptures) is born. - Mankutimma",
    kannada:
      "ಜಗ ಬೆಲೆದು ಚಿಗುರುತಿರೆ ಶಾಸ್ತ್ರ ಕರಟರಲಹುದೆ?  ।\nನಿಗಮಸಂತತಿಗೆ ಸಂತತಿಯಾಗದಿಹುದೆ? ॥\nಬಗೆಬಗೆಯ ಜೀವಸತ್ತ್ವವಿಕಾಸವಾಗುತಿರ- ।\nಲೊಗೆವುದೈ ವಿಜ್ಞಾನ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೫ ॥",
    kannada_explanation:
      "ಜಗತ್ತೆಲ್ಲ ಬೆಳೆದು ಹೊಸ ವಿಚಾರಗಳು ಚಿಗುರುತ್ತಿರುವಾಗ ಅದಕ್ಕೆ ಪೂರಕವಾದ ಶಾಸ್ತ್ರವು ಸುರುಟಿಕೊಂಡಿರಲು ಸಾಧ್ಯವೇ? ಜ್ಞಾನದ ಆಯಾಮಗಳೂ ಸಹ ಹೊಸ ಹೊಸ ವಿಚಾಗಳ ನೆಲೆಯಾಗಬೇಕು. ಎಲ್ಲೆಡೆಯಲ್ಲಿಯೂ ಹೊಸತಿನ ವಿಕಾಸವಾಗುತ್ತಿರಬೇಕಾದರೆ ಜ್ಞಾನವೂ ವಿಕಾಸಗೊಳ್ಳಬೇಕು ಮತ್ತು ಹಾಗೆ ವಿಕಾಸಗೊಂಡದ್ದರಿಂದ ವಿಜ್ಞಾನದ ಹೊಸ ಹೊಸ ವಿಚಾರಗಳು ಬೆಳಕಿಗೆ ಬರಬೇಕು ಎಂದು ಜಗತ್ತಿನ ನಿರಂತರ ನವೀನತೆಯ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 526,
    english:
      "The tree of Dharma (the moral code of life) will not stay hostage to any one sect. It does get weak if it takes shelter in any one of the sect's temples. Only when it accept freshness from the cosmic spirit through the roots of everyday life of the world (by not limiting itself to the temple) will the tree look prosperous. - Mankutimma",
    kannada:
      "ಸೆರೆಬಿದ್ದು ಧರ್ಮಪಾದಪ ನಿಲದು ಮತಗಳಲಿ ।\nಜರೆಯಿಂದ ಬರಡಹುದು ಮಠದ ನೆರಳಿನಲಿ ॥\nಪರಸತ್ತ್ವರಸ ವಿಶ್ವಜೀವನದ ಬೇರ್ಗಳಿಂ ।\nನೆರೆಯಲಾ ತರು ಸೊಂಪು - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೬ ॥",
    kannada_explanation:
      "ಧರ್ಮವೆಂಬ ಮರ ಭಿನ್ನ ಭಿನ್ನ ಮತಗಳ ಆಧಾರದಮೇಲೆ ನಿಲ್ಲುವುದಿಲ್ಲ. ಮಠಗಳ ಮತ್ತು ಅವುಗಳು ಪ್ರತಿಪಾದಿಸುವ ಮತಗಳ ನೆರಳಿನಲ್ಲಿದ್ದರೆ, ಧರ್ಮ ಸೊರಗುತ್ತದೆ. ಜನ ಜೀವನದ ಬದುಕಿನಲಿ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಂಸ್ಕಾರಗಳ ಬೇರುಗಳಲ್ಲಿ ಪರತತ್ವದ, ಪರಮಾತ್ಮನ, ತತ್ವ ಮತ್ತು ಸತ್ವಗಳು ಆಳವಾಗಿ ಇಳಿದಲ್ಲಿ ಈ ಧರ್ಮವೆಂಬ ವೃಕ್ಷ ಮತ್ತೆ ಸಮೃದ್ಧಿಯಾಗಿ ಬೆಳೆದು ಸೊಂಪಾಗುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 527,
    english:
      "The source of life is mysterious and a divine secret. But we must strive to find it by enhancing our intellect as much as possible. We must find that path towards the realization. Our wisdom is the only light we have to do so. - Mankutimma\n\n[Translator's note: I think the stress is to find one's own light. It is not possible to know the secret, using other's light. You are free to light your lamp from the knowledgeable - But searching has to be done by you.",
    kannada:
      "ಜೀವಕಾರಣಮೂಲ ಗೂಢವಾಗಿರ್ದೊಡಂ ।\nಧೀವಿಕಾಸದ ಬೆಳಕನಾದನಿತು ಗಳಿಸಿ ॥\nಕೈವಲ್ಯಪಥವನರಸುತ ಯಾತ್ರಿಸಲೆಬೇಕು ।\nದೀವಿಗೆಯು ಮತಿಯೊಂದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೭ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಮೂಲ ಕಾರಣವು ಗೂಢವಾಗಿರುವಾಗ, ಬುದ್ಧಿಯು ವೃದ್ಧಿಯಾಗುವಂತಹ ಜ್ಞಾನದ ಬೆಳಕನ್ನು ಪಡೆದು ಪಾರಮಾರ್ಥದ ತತ್ವವನ್ನು ಅರಸುವ ದಾರಿಯಲ್ಲಿ ಪ್ರಯಾಣಮಾಡಲೇಬೇಕು. ಕತ್ತಲಲ್ಲಿ ಬೆಳಕ ನೀಡುವ ದೀವಿಗೆ ಮತ್ತು ಜ್ಞಾನವನ್ನು ಅರಸುವ ಬುದ್ಧಿ ಎರಡೂ ಒಂದೇ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 528,
    english:
      "It is easy to believe. It is easy to chant the God's name. It is difficult to understand the concept of God though. It is difficult to think and imagine him. While the general population go round and round a hill looking for clues, only the steadfast climb it to seek God. - Mankutimma",
    kannada:
      "ಭಕ್ತಿ ನಂಬುಗೆ ಸುಲಭ, ಭಜನೆ ವಂದನೆ ಸುಲಭ ।\nತತ್ತ್ವ ಶೋಧನೆ ಕಷ್ಟ; ಮತಿಕಾರ್ಯ ಕಷ್ಟ ॥\nಸುತ್ತುವುದು ಗಿರಿಸುತ್ತ ಸುಳುವೆಂದು ಲೋಕಜನ ।\nಹತ್ತುವನು ತಾಪಸಿಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೮ ॥",
    kannada_explanation:
      "ಭಕ್ತಿ, ಭಜನೆ, ಧ್ಯಾನಗಳನ್ನು ಮಾಡುವುದು ಸುಲಭದ ಕೆಲಸ. ಆದರೆ ಪರತತ್ವವನ್ನು ಹುಡುಕುವುದು ಮತ್ತು ಆ ಹುಡುಕುವುದಕ್ಕಾಗಿ ನಡೆಸುವ ಬುದ್ಧಿಯ ಕಾರ್ಯ ಇನ್ನೂ ಕಷ್ಟತರವಾದದ್ದು. ಸುಲಭವೆಂದು ಬೆಟ್ಟವನ್ನು ಸುತ್ತುತ್ತಾರೆ ಲೋಕದ ಜನ. ಆದರೆ ಹತ್ತಿ ಸಾಧಿಸುವವನೇ ತಾಪಸಿ ಎಂದು ಭಕ್ತಿ ಮಾರ್ಗವನ್ನು ಮತ್ತು ಪರತತ್ವವನ್ನು ಅರಿಯುವ ಮಾರ್ಗವನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 529,
    english:
      "It is true that Man does not have a future after abandoning God. But, if Man were not to be there, who will care for God? Being human is the bridge between being an animal and realizing God. Don't blow up the bridge. - Mankutimma",
    kannada:
      "ಪರದೈವವನು ತೊರೆಯೆ ಗತಿ ನರನಿಗಿಲ್ಲ ದಿಟ ।\nನರನಿಲ್ಲದಿರೆ ದೇವನನು ಕೇಳ್ವರಾರು? ॥\nಪುರುಷತೆಯೆ ಸೇತುವೆ ಮೃಗತ್ವದಿಂ ದಿವ್ಯತೆಗೆ ।\nಮುರಿಯದಿರು ಸೇತುವೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೫೨೯ ॥",
    kannada_explanation:
      "ದೇವರನ್ನು ಬಿಟ್ಟು ಮನುಷ್ಯನಿಗೆ ಬೇರೆ ಗತಿಯೇ ಇಲ್ಲ. ಮನುಷ್ಯನಿಲ್ಲದಿದ್ದರೆ ಆ ದೇವರನ್ನು ಕೇಳುವವರು ಯಾರು? ಜಗತ್ತನ್ನು ಸರ್ವರೀತಿಯಲ್ಲೂ ಆವರಿಸಿಕೊಂಡಿರುವ ಆ ಪರಮ ಶಕ್ತಿಯೇ ಪಶುತ್ವಕ್ಕೂ ದೈವತ್ವಕ್ಕೂ ನಡುವೆ ಇರುವ ಸೇತುವೆ. ಆ ಸೇತುವೆಯನ್ನು ಮುರಿಯದೆ ಇರು ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಮನುಷ್ಯನಿಗೂ ಮತ್ತು ಆ ದೇವರೆಂಬ ತತ್ವಕ್ಕೂ ಇರುವ ಸಂಬಂಧವನ್ನು ವಿವರಿಸುತ್ತಾ, ಈ ಸಂಬಂಧವನ್ನು ಮುರಿಯದಿರು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 530,
    english:
      "Your world is all what your eyes, ears and mind can see. These are the only things that can make you cry or laugh. If you raise yourselves mentally, then your vision starts expanding. That is how you will grow and get rid of innate 'small-mindedness'. - Mankutimma",
    kannada:
      "ನಿನ್ನ ಕಣ್ ಕಿವಿ ಮನಗಳರಿವಷ್ಟು ನಿನ್ನ ಜಗ ।\nನಿನ್ನನಳಿಸುವ ನಗಿಸುವೆಲ್ಲ ನಿನ್ನಂಶ ॥\nಉನ್ನತಿಗೆ ನೀನೇರಿದಂತೆ ಜಗ ವಿಸ್ತರಿಸಿ ।\nಸಣ್ಣತನ ಸವೆಯುವುದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೦ ॥",
    kannada_explanation:
      "ನೀನು ಕಾಣುವಷ್ಟು, ನೀನು ಕೇಳುವಷ್ಟು ಮತ್ತು ನಿನ್ನ ಮನಸ್ಸು ಎಷ್ಟನ್ನು ಊಹಿಸಬಹುದೋ ಅಷ್ಟು ನಿನ್ನ ಜಗತ್ತಾಗುತ್ತದೆ. ನಿನ್ನನ್ನು ಕಣ್ಣೀರಿಡಿಸುವ ಮತ್ತು ನಗಿಸುವ ಎಲ್ಲ ಅಂಶಗಳೂ ನಿನ್ನವೇ ಆಗಿರುತ್ತದೆ. ಅವುಗಳನ್ನು ಮೀರಿ ನೀನು ಬೆಳೆದರೆ ನಿನ್ನ ಜಗತ್ತು ವಿಶಾಲವಾಗಿ ನಿನ್ನಲ್ಲಿ ಸಣ್ಣತನ ಸವೆದು ನೀನೂ ಸಹ ಬೆಳೆಯುತ್ತೀಯೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 531,
    english:
      "The Cosmic Spirit is a permanent being. But it expands and contracts as the universe. In doing so, it dances happily along side human progress. It gets itself lost in it and plays the game of finding itself (via realization). It is very happy in playing this game for ever. - Mankutimma",
    kannada:
      "ಶಶ್ವದ್ವಿಕಾಸನ ಹ್ರಾಸವ ಕ್ರಮಗಳಿಂ ।\nವಿಶ್ವದಲಿ ನರ್ತಿಸುತೆ ಪೌರುಷೊನ್ನತಿಯೊಳ್ ॥\nಸ್ವಸ್ವರೂಪವನರಸುವಾಟ ಪರಚೇತನದ ।\nಹೃಷ್ಯದ್ವಿಲಾಸವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೧ ॥",
    kannada_explanation:
      "ಶಾಶ್ವತವಾದ ಆ ಪರಮ ಪೌರುಷ(ಶಕ್ತಿ)ವೊಂದು ವಿಕಸನ ಮತ್ತು ಹ್ರಾಸನ ಕ್ರಮಗಳಿಂದ ತನ್ನನ್ನೇ ತಾನು ಹುಡುಕುವ ಆಟವನ್ನು ಆಡುತ್ತಾ ಜಗನ್ನಾಟಕದಲ್ಲಿ ಹರ್ಷ ಮತ್ತು ವಿಲಾಸದಿಂದ ಮಗ್ನವಾಗಿದೆ ಎನ್ನುವ ತತ್ವವನ್ನು ಈ ಮುಕ್ತಕದಲ್ಲಿ ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 532,
    english:
      "How can the brick know about the structure of the building? But if it does not stand firm, the wall cracks and the building fails. So, the mason makes sure that every brick is laid out just the way it should. However once in a while a lone brick will stick out. The mason will either hit it back into the wall or chop it off. In the fort of this creation, each man is a mere brick. If you do anything that does not fit in the grand scheme, be prepared to be whacked. - Mankutimma",
    kannada:
      "ಕಟ್ಟಡದ ಪರಿಯನಿಟ್ಟಿಗೆಯೆಂತು ಕಂಡೀತು? ।\nಗಟ್ಟಿ ನಿಲದದು ಬೀಳೆ ಗೋಡೆ ಬಿರಿಯುವುದು ॥\nಸೃಷ್ಟಿ ಕೋಟೆಯಲಿ ನೀನೊಂದಿಟಿಕೆ; ಸೊಟ್ಟಾಗೆ ।\nಪೆಟ್ಟು  ತಿನ್ನುವೆ ಜೋಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೨ ॥",
    kannada_explanation:
      "ಇಟ್ಟಿಗೆಗಳಿಂದ ಕಟ್ಟಲ್ಪಡುವುದು ಕಟ್ಟಡ. ಆದರೆ ಆ ಕಟ್ಟಡ ಹೇಗಿರುವುದೆಂದು ಆ ಇಟ್ಟಿಗೆ ಅರಿಯಲು ಸಾಧ್ಯವಿಲ್ಲ. ಆ ಇಟ್ಟಿಗೆ ಗಟ್ಟಿಯಾಗಿ ನಿಲ್ಲದೆ ಇದ್ದರೆ ಅದರಿಂದ ಕಟ್ಟಿದ ಗೋಡೆ ಬಿರುಕುಬಿಡುವುದು. ಹಾಗೆಯೇ ಈ ಜಗತ್ತಿನ ಕಟ್ಟಡದಲ್ಲಿ ನಾವೂ ಒಂದು ಇಟ್ಟಿಗೆ ಮಾತ್ರ. ನಾವು ಸ್ಥಿರವಾಗಿರದಿದ್ದರೆ, ಪೆಟ್ಟು ತಿಂದು ಸರಿಯಾಗಬೇಕಾಗುವುದು, ಜೋಕೆ ಎಂದು ಒಂದು ಎಚ್ಚರಿಕೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 533,
    english:
      "Is man independent? Or is he always under the control of Providence? Both of them are true to some extent. He is as free as his arms are. They can swing and fold by their wish - but even when they do, they have to follow the body structure. Man's power is also limited thus to the outline that Providence provides. - Mankutimma",
    kannada:
      "ಪುರುಷಂ ಸ್ವತಂತ್ರನೋ? ದೈವವಿಧಿ ಪರವಶನೊ? ।\nಎರಡುಮನಿತಿನಿತುಳ್ಳ ತೋಳಿನಂತಿಹನೋ? ॥\nತಿರುಗುವುದು ಮಡಿಸುವುದು ತೋಳ್ ಮೈಯಕಟ್ಟಿನಲಿ ।\nನರನಂತು ಮಿತಶಕ್ತ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೩ ॥",
    kannada_explanation:
      '"ಮನುಷ್ಯ ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರನೋ ಅಥವಾ ಅವನು ದೈವ ಮತ್ತು ತನ್ನ ಪೂರ್ವ ಕರ್ಮಗಳಿಗೆ ಅಧೀನನೋ? ಅಥವಾ ಸ್ವಾತಂತ್ರ ಮತ್ತು ತನ್ನಿಚ್ಛೆ ಎರಡೂ ಅಲ್ಪ ಸ್ವಲ್ಪ ಇರುವವನೋ?" ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾ ಹೇಗೆ ನಮ್ಮ ಮೈಕಟ್ಟಿನ ಮಿತಿಯೊಳಗೆ ನಮ್ಮ ತೋಳಿಗೆ ತಿರುಗಿಸಲು,ಮಡಿಸಲು ತಿರುಗಿಸಲು ಸ್ವಾತಂತ್ರವಿದೆಯೋ ಹಾಗೆಯೇ ನಮಗೂ ನಮ್ಮ ಸ್ವ ಶಕ್ತಿಯ ಮತ್ತು ನಾವು ಪಡೆದುಕೊಂಡು ಬಂದ ವಿಧಿಯ ಮಿತಿಯೊಳಗೆ ‘ನಡೆದು’ಕೊಳ್ಳಲಾಗುತ್ತದೆ, ಎಂದು ಮನುಷ್ಯನ ಇತಿ ಮಿತಿಗಳ ಒಂದು ವಿಶ್ಲೇಷಣೆಯನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 534,
    english:
      "It is the nature of wind to spread. It does not like obstacles. If it has freedom, it will bring down everything (obstacles) in this world. But it exxercises restraint and feels pleasant. Man's freedom is also similar. It is pleasant when restrained. We should hence search and realize our boundaries and exercise our freedom only with in that. - Mankutimma",
    kannada:
      "ಹರಡುವುದು ಸಾಜ ವಾಯುಗೆ ಸೈಸದದು ತಡೆಯನ್ ।\nಉರುಳಿಪುದದೆಲ್ಲವನು ತಡೆಗಳಿಲ್ಲದಿರೆ ॥\nನರನ ಸ್ವತಂತ್ರಗತಿಯಂತು ಹಿತಮಿತವಿರಲು ।\nಅರಸೊ ಮಿತಿಯಾಯತಿಯ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೪ ॥",
    kannada_explanation:
      "ವಿಶಾಲವಾಗಿ ಹರಡಿಕೊಳ್ಳುವುದು ಗಾಳಿಗೆ ಸಹಜ ಗುಣ. ಅದರ ಹರಡುವಿಕೆಗೆ ಅಡ್ಡಿಗಳನ್ನು ಅದು ಸಹಿಸುವುದಿಲ್ಲ. ಹಾಗೆ ತನಗೆ ಅಡ್ಡಿಯಾಗಿ ಬಂದದ್ದನ್ನೆಲ್ಲಾ ಉರುಳಿಸಿ ತಳ್ಳಿಬಿಡುತ್ತದೆ. ಬದುಕಿನ ಗತಿಗೆ ಅಡೆ ತಡೆಗಳಿಲ್ಲದಿದ್ದರೆ ಮನುಷ್ಯನ ಬದುಕಿನ ಗತಿಯೂ ಸಹ ಗಾಳಿಯಂತೆಯೇ ಸಿಕ್ಕ ಸಿಕ್ಕದ್ದನ್ನೆಲ್ಲಾ ಉರುಳಿಸಿಕೊಂಡು ಹೋಗುವಂತಾಗುತ್ತದೆ. ಮಿತಿಯಿರಲು ಬದುಕು ಹಿತ. ಹಾಗಾಗಿ ನೀನು ನಿನ್ನ ಬದುಕಿನ ವೈಶಾಲ್ಯತೆಯ ಮಿತಿಯನ್ನು ಅರಿತುಕೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 535,
    english:
      "A raging river will pound on the dam that stands in its way. If there are no embankments, it will destroy the towns on the banks. If proper embankments are built on either side, then the flow will be peaceful and productive. Thus is the story of the river called human progress - Mankutimma",
    kannada:
      "ನೀರ ನೆರೆ ತನ್ನೆದುರಿನಣೆಕಟ್ಟನೊದೆಯುವುದು ।\nಊರನದು ಕೊಚ್ಚುವುದು ಬದಿಯ ಕಟ್ಟದಿರೆ ॥\nಏರಿಗಳನಿಕ್ಕೆಲದಿ ನಿಲಿಸೆ ಹರಿವುದು ಸಮನೆ ।\nಪೌರುಷದ ನದಿಯಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೫ ॥",
    kannada_explanation:
      "ನದಿಯ ಪ್ರವಾಹ ಹೊಮ್ಮಿ ಬಂದರೆ ಅದು ಅಣೆಕಟ್ಟನ್ನು ಒಡೆಯುವುದು. ತನ್ನ ಹರಿವಿನ ಹಾದಿಯಲ್ಲಿ ಬರುವ ಊರುಗಳನೆಲ್ಲ ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗಬಹುದು. ಆದರೆ ಅದೇ ನದಿಗೆ ಎರಡೂ ಬದಿಯಲ್ಲಿ ಕಟ್ಟೆಗಳನ್ನು ಕಟ್ಟಿದರೆ ಅದು ಸಮನಾಗಿ ಹರಿದು ತನ್ನ ಗಮ್ಯವನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತದೆ. ನದಿಯ ಶಕ್ತಿಯಷ್ಟೇ ಅಲ್ಲ ಮಿಕ್ಕ ಎಲ್ಲಾ ಶಕ್ತಿಗಳೂ ಈ ನದಿಯ ಪ್ರವಾಹದ ಶಕ್ತಿಯಂತೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 536,
    english:
      "The petals of flower are held securely to the stalk below. On top, wind plays with it. The flower has to maintain the balance between getting stuck to the stack and sending its fragrance to the wind. It does this freely without any effort. Life is happy if we can find such balance. - Mankutimma",
    kannada:
      "ಎಸಳಿನಡಿ, ಗಿಡದ ಬಿಗಿ, ಮೇಲೆ ಗಾಳಿಯ ಸರಸ   ।\nಕುಸುಮದ ಕ್ಷೇಮವಾ ಬಿಗಿತ ಬಿಡುತೆಗಳಿಂ ॥\nಕುಶಲ ಸೌರಭವ ನಿರ್ಯತ್ನ ಸ್ವತಂತ್ರದಿಂ ।\nಪಸರಿಪಾ ನಯ ಸುಖವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೬ ॥",
    kannada_explanation:
      "ಹೂವಿನ ಎಸಳುಗಳನ್ನು ತೊಟ್ಟಿನ ಮೂಲಕ ಗಿಡವು ಬಿಗಿಯಾಗಿ ಹಿಡಿದುಕೊಂಡು ಇರುತ್ತದೆ. ಹೀಗೆ ಹೂವಿನ ಕ್ಷೇಮಕ್ಕಾಗಿ ಗಿಡದ ಭದ್ರಹಿಡಿತಕ್ಕೆ ಒಳಪಟ್ಟ ಹೂವಿನ ಮೇಲೆ ಗಾಳಿ ಸರಸವಾಡುತ್ತದೆ ಮತ್ತು ಹೂವು ಗಿಡದ ಹೊರಗಿದ್ದರೂ ಅದರ ಹಿಡಿದಲ್ಲಿದ್ದುಕೊಂಡೆ ತನ್ನ ಸೌರಭವನ್ನು ಅಪ್ರಯತ್ನವಾಗಿ ಹೊರಸೂಸುವುದು ಸುಖ. ನಮ್ಮ ಬದುಕೂ ಹಾಗೆಯೇ ನಮ್ಮ ಮಿತಿಗಳ ಬಿಗಿ ಹಿಡಿತದಲ್ಲಿ ಇದ್ದುಕೊಂಡೇ ಒಳಿತನ್ನು ಪಸರಿಸುವ ಕೆಲಸ ನಮ್ಮಿಂದ ಆಗಬೇಕು ಎಂದು ಒಂದು ಆಶಯವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 537,
    english:
      "God has defined rules on how the Sun, Moon, earth moves, when it rains, how fast the wind can blow and fire burn. But for some unknown reason, he has left man to find the way himself. Why did he do that? - Mankutimma",
    kannada:
      "ತರಣಿಶಶಿಪಥಗಳನು, ಧರೆವರುಣಗತಿಗಲನು ।\nಮರುದಗ್ನಿವೇಗಗಳ ನಿಯಮಿಸಿಹ ದಕ್ಷನ್ ॥\nನರನರಸಿಕೊಳಲಿ ದಾರಿಯ ತನಗೆ ತಾನೆಂದು ।\nತೊರೆದನೇತಕೆ ನಮ್ಮ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೭ ॥",
    kannada_explanation:
      "ಆ ದಕ್ಷನಾದ, ಸರ್ವಶಕ್ತನಾದ ಪರಮಾತ್ಮನು ತಾನೇ ಸೃಷ್ಟಿಸಿದ ಸೂರ್ಯ, ಚಂದ್ರ, ಭೂಮಿ, ಮಳೆ, ಗಾಳಿ,ಅಗ್ನಿ ಮುಂತಾದವುಗಳ ವೇಗವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತಿದ್ದಾನೆ. ಆದರೆ ಮನುಷ್ಯರಿಗೆ ಮಾತ್ರ ತಮ್ಮ ತಮ್ಮ ವೇಗವನ್ನು ತಾನೇ ನಿಯಂತ್ರಿಸಿಕೊಳ್ಳಲಿ ಎಂದು ಏಕೆ ಬಿಟ್ಟನೋ ಎಂದು ಒಂದು ಸುಂದರ ಪ್ರಶ್ನೆಯನ್ನು ತಮಗೆ ತಾವೇ ಕೇಳಿಕೊಳ್ಳುತ್ತಾ ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 538,
    english:
      "People find their own ways to feel free. Some do it by hard work relishing in their own sweat - satisfied by the fact that they are the masters of their own fate. Some others take a dip in the holy waters and feel free - satisfied that their fate completely rests in the hands of the all powerful God that they believe in. - Mankutimma",
    kannada:
      "ತನ್ನ ಬೆವರಿನ ಕೊಳದಿ ತಾಂ ಮುಳುಗಿ ತೇಲುತ್ತೆ ।\nಧನ್ಯನಾನೆನ್ನುವನದೊರ್ವ ಸ್ವತಂತ್ರನ್ ॥\nಪುಣ್ಯತೀರ್ಥದೊಳಿಳಿದು ಕರಗಲ್ ಸ್ವತಂತ್ರ ತಾನ್ ।\nಎನ್ನುವವನಿನ್ನೊರ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೮ ॥",
    kannada_explanation:
      "ತನ್ನ ದುಡಿಮೆಯನ್ನು ತನಗಾಗಿ ಮತ್ತು ತನ್ನ ಕುಟುಂಬಕ್ಕಾಗಿಯೇ ಮಾಡುತ್ತಾ ತನ್ನ ಕಷ್ಟ ಸುಖಗಳ ಸುಳಿಯಲ್ಲೇ ತಾನೇ ಮುಳುಗಿ ತೇಲುತ್ತಾ ತನ್ನ ಜೀವನ ಸಾರ್ಥವಾಯಿತು ಎಂದು ನೆನೆಯುವ ಒಬ್ಬನಾದರೆ ತನ್ನ ಕುಟುಂಬವನ್ನು ಪಾಲಿಸುತ್ತಾ ಈ ಜಗತ್ತೇ ಒಂದು ಕುಟುಂಬ ಅಥವಾ ಪುಣ್ಯಕ್ಷೇತ್ರ ಅಥವಾ ಪುಣ್ಯತೀರ್ಥ ಎಂದು ಸಮಾಜಾಭಿಮುಖಿಯಾಗಿ ತನ್ನ ಹೆಸರನ್ನೂ ಉಳಿಸದೆ ಕರಗಿಹೋಗುವವನು ಮತ್ತೊಬ್ಬ. ಹೀಗೆ ಜಗತ್ತಿನಲ್ಲಿ ಇರುವ ನಾನಾ ರೀತಿಯ ಜನಗಳ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 539,
    english:
      "Can we search for the realization of cosmic spirit be achieved just be mental calculations - logic? How can we be certain of the purity of mind? (not being corrupted by temptations of senses) The realization will appear to the mind by itself (through experiences) like a lightening in the sky. - Mankutimma",
    kannada:
      "ಬರಿಯ ಬುದ್ಧಿವಿಮರ್ಶೆಗರಿದು ಜೀವನತತ್ತ್ವ ।\nಪರಿಶೋಧಿಸುವರಾರು ಬುದ್ಧಿಋಜುತೆಯನು? ॥\nಸ್ಫುರಿಸುವುದದೆಂದೊ ತಾನೇ ಮಿಂಚುಬಳ್ಳಿವೊಲು ।\nಪರತತ್ತ್ವ ಮನದೊಳಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೩೯ ॥",
    kannada_explanation:
      "ಕೇವಲ ಬುದ್ಧಿಯ ತರ್ಕಕ್ಕೆ ಸಿಗುವುದಿಲ್ಲ ಜೀವನದ ಸತ್ವ. ಬುದ್ಧಿಯ ಪ್ರಾಮಾಣಿಕತೆಯನ್ನು ಪರಿಶೋಧಿಸುವವರಾರು? ಪ್ರತಿಯೊಬ್ಬನಿಗೂ ಆ ಪರತತ್ವವು ಮತ್ತು ಆ ಪರತತ್ವದ ಸತ್ವವು ಎಂದೋ ಒಂದು ದಿನ ತಾನೇ ತಾನಾಗಿ ಒಂದು ಮಿಚ ಬಳ್ಳಿಯಂತೆ ಸ್ಫುರಿಸುವುದು ಎಂದು ಒಂದು ಅದ್ಭುತ ಸತ್ಯವನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 540,
    english:
      "A man's intellect is not pure like the rain water. It is more like the water of the lake that has impurities from washing the bodies of all the villagers. The purity from the skies is dirtied by the everyday life on the earth. - Mankutimma",
    kannada:
      "ನರವಿವೇಕವದೇನು ಬರಿಯ ಮಳೆ ನೀರಲ್ಲ ।\nಕೆರೆಯನೀರ್ ಊರ ಮೈಸೋಂಕುಗಳ ಬೆರಕೆ  ॥\nಧರೆಯ ರಸವಾಸನೆಗಳಾಗಸದ ನಿರ್ಮಲದ ।\nವರವ ಕದಡಾಗಿಪುವು - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೦ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ವಿವೇಕವು ಮಳೆಯ ನೀರಿನಂತೆ ಶುದ್ಧವಲ್ಲ. ಕೆರೆಯ ನೀರಲ್ಲಿ ಊರ ಜನರ ಮೈಲಿಗೆಯಲ್ಲ ಕಲೆತಂತೆ. ಪರಮಾತ್ಮನ ವರದಂತೆ ಧರೆಗಿಳಿದ ನಿರ್ಮಲ ವರ್ಷಧಾರೆ ಭೂ ಸ್ಪರ್ಶವಾದೊಡನೆ ಭೂಮಿಯ ಮೇಲಿನ ರಸ ಮತ್ತು ಗಂಧಗಳ ಸಂಪರ್ಕದಿಂದ ಮಲಿನವಾಗುವಂತೆ, ಮನುಷ್ಯನ ವಿವೇಕವೂ ಸಹ ಇಲ್ಲಿನ ರಸ ವಾಸನೆಗಳ ಪರಿಣಾಮಗಳಿಂದ ತನ್ನ ಶುದ್ಧತೆಯನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲಾಗದೆ ಮಲಿನವಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 541,
    english:
      "Our old memories are our first adviser. They influence our intellect to suit itself (justify itself). It will always favor your argument only and may seem to help you. But in the end, it is serving its purpose only and hence deceitful - Mankutimma",
    kannada:
      "ಪ್ರಾಕ್ತನದ ವಾಸನೆ ಮನಕೆ ಮೊದಲಿನ ಮಂತ್ರಿ ।\nಯುಕ್ತಿಗಳ ತನಗೊಪ್ಪುವಂತೆ ತಿರುಗಿಪುದು ॥\nಸೂಕ್ತವೆನಿಪುದು ಸಹಜರುಚಿ ತನ್ನ ತರ್ಕವನೆ ।\nಗುಪ್ತದೊಳು ಕುಟಿಲವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೧ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಪೂರ್ವ ಜನ್ಮದ ವಾಸನೆಗಳೇ, ನಮ್ಮ ಮನಸ್ಸು ಬುದ್ಧಿಗಳಿಗೆ, ತನಗೆ ಅನುಗುಣವಾಗಿ ಸಲಹೆಗಳನ್ನು ನೀಡುವ ಮಂತ್ರಿಯಿದ್ದ ಹಾಗೆ. ಈ ವಾಸನೆಗಳೇ ತನ್ನ ಸಹಜವಾದಂತಹ ಅಭಿರುಚಿಗೆ ಸರಿಯಾದ ತರ್ಕವನ್ನು ಮಂಡಿಸಿ ತನಗೆ ಹೇಗೆ ಬೇಕೋ ಹಾಗೆ ನಮ್ಮನ್ನು ತಿರುಗಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಇದು ನಮ್ಮನ್ನು ಅವುಗಳಿಂದ ಮುಕ್ತರಾಗಿ ಪರತತ್ವದೆಡೆಗೆ ಹೋಗದಂತೆ ತಡೆಯುವ ಕುಟಿಲತೆ ಎಂದು ನಮ್ಮ ಪೂರ್ವ ವಾಸನೆಗಳಿಗೂಮತ್ತು ಇಂದಿನ ನಮ್ಮ ಬದುಕಿಗೂ ಇರುವ ಸಂಬಂಧವನ್ನು ವಿಶ್ಲೇಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 542,
    english:
      "Desire is Manthara. Man's rational mind is Kaikeyi. As long as desire did not could one's thoughts, a man follows dharma and lives life honestly. As soon as desire breathes into his mind, the light of wisdom strays and bends the truth and logic to satisfy the desires. Resist and kill such tremptations. - Mankutimma",
    kannada:
      "ಆಶೆ ಮಂಥರೆ, ನರವಿವೇಚನೆಯೆ ಕೈಕೇಯಿ ।\nಬೀಸೆ ಮನದುಸಿರು ಮತಿದೀಪವಲೆಯುವುದು ॥\nವಾಸನೆಗಳನುಕೂಲ ಸತ್ಯತರ್ಕಕೆ ಶೂಲ ।\nಶೋಷಿಸಾ ವಾಸನೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೨ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಮನದಲ್ಲಿ ಉದ್ಭವವಾಗುವ ಆಸೆಗಳನ್ನು ಮಂಥರೆಗೆ ಮತ್ತು ಮನುಷ್ಯರ ವಿವೇಚನೆಯನ್ನು ಕೈಕೇಯಿಗೆ ಹೋಲಿಸಿದ್ದಾರೆ ಮಾನ್ಯಗುಂಡಪ್ಪನವರು. ಮನಸ್ಸಿನಲ್ಲಿ ಉದ್ಭವವಾಗುವ ಆಸೆಗಳು ತನ್ನ ಹೂಂಕಾರದ ರಭಸದಿಂದ ಮತಿ ಎಂದರೆ ವಿವೇಕವನ್ನು ತಲ್ಲಣಗೊಳಿಸುತ್ತದೆ. ನಮ್ಮ ಪೂರ್ವ ವಾಸನೆಗಳಿಗನುಕೂಲವಾಗುವಂತೆ ಓಲಾಡುವ ನಮ್ಮ ಆಸೆಗಳ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದರೆ, ಸತ್ಯಕ್ಕೆ ಇರಿತವಾಗುತ್ತದೆ. ಹಾಗಾಗಿ ಸತ್ಯದ ಪಥದಿಂದ ದೂರಾಗಿಸುವಂತಹ ಈ ವಾಸನೆಗಳನ್ನು ನಿನ್ನ ಸ್ವಭಾವ ಮತ್ತು ಗುಣದಿಂದ ದೂರಾಗಿಸು ಅಥವಾ ಇಲ್ಲವಾಗಿಸು ಎಂದು ಒಂದು ಸೂಕ್ತ ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 543,
    english:
      "Even under the influence of strong emotions, let the mind be like a horse (agile, fast). But, let intellect be like a skilled rider. Let the mind and intellect be like man and his wife who love each other very much. Life becomes a success story automatically. - Mankutimma",
    kannada:
      "ಭಾವದಾವೇಶದಿಂ ಮನವಶ್ವದಂತಿರಲಿ ।\nಧೀವಿವೇಚನೆಯದಕೆ ದಕ್ಷರಾಹುತನು ॥\nತೀವಿದೊಲವಿನ ದಂಪತಿಗಳಾಗಿ ಮನಬುದ್ಧಿ ।\nಜೀವಿತವು ಜೈತ್ರಕಥೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೩ ॥",
    kannada_explanation:
      "ಭಾವದ ಆವೇಶದಲ್ಲಿ ಮನಸ್ಸು ಕುದುರೆಯಂತಿರಲಿ. ನಮ್ಮ ಬುದ್ಧಿ ಮತ್ತು ವಿವೇಕಗಳು ದಕ್ಷತೆಯ ಸವಾರನಾಗಲಿ. ಮನಸ್ಸು ಬುದ್ಧಿಗಳು ತುಂಬಿದ ಒಲವಿನ ದಂಪತಿಗಳಂತಿದ್ದರೆ ನಮ್ಮ ಬದುಕೇ ಯಶಸ್ಸಿನ ಕಥೆಯಾಗುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.ನಮ್ಮ ಮನಸ್ಸು ಸಾವಿರಾರು ಭಾವಗಳ ಆಗರ. ಸಮುದ್ರದ ಅಲೆಗಳಂತೆ ಈ ಭಾವಗಳು ಕ್ಷಣಕ್ಷಣಕ್ಕೆ ಮೇಲೆ ಬರುತ್ತವೆ ಮತ್ತೆ ಇಳಿಯುತ್ತವೆ. ಎಷ್ಟೋ ಭಾವಗಳ ಏರಿಳಿತಗಳಿಗೆ ಕಾರಣ ನಮಗೆ ಅರ್ಥವಾಗುವುದಿಲ್ಲ. ಈ ಭಾವಗಳ ಆವೇಶದಿಂದ ಮನಸ್ಸು ವಿಚಲಿತವಾಗಿ ಕುಣಿಯುತ್ತದೆ. ಆಸೆ ನಿರಾಸೆಗಳ, ರಾಗ ದ್ವೇಷಗಳ, ಕೋಪ ತಾಪಗಳ, ಕರುಣೆ ವಿಹ್ವಲತೆಗಳ, ಪ್ರೇಮ ಪ್ರೀತಿಗಳ ಹತ್ತು ಹಲವಾರು ಭಾವಗಳು ಮನಸ್ಸಿನ ಫಟಲದಲ್ಲಿ ಕುಣಿಯುತ್ತವೆ. ಇವುಗಳನ್ನು ಹತೋಟಿಯಲ್ಲಿಡದೆ ಹರಿಬಿಟ್ಟರೆ ಅನಾಹುತವಾಗುತ್ತದೆ ಮತ್ತು ಬದುಕು ದುರ್ಭರವಾಗುತ್ತದೆ. ಹಾಗಾಗಿ ನಮ್ಮ ಬುದ್ಧಿ ಮತ್ತು ವಿವೇಕ ಈ ಮನಸ್ಸಿನಲ್ಲಿ ಕುಣಿಯುವ ಭಾವನೆಗಳ ಕುದುರೆಗೆ ದಕ್ಷತೆಯ ಸವಾರನಂತಾಗಬೇಕು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 544,
    english:
      "Only when the milk of experience is churned with deep contemplation, that the butter of knowledge gets realized. One feels very happy when it happens. Knowledge from books is like the wisdom of a parrot. It is the knowledge based on experience that will be guiding lights for leading a life according to dharma. - Mankutimma",
    kannada:
      "ಅನುಭವದ ಪಾಲೊಳು ವಿಚಾರ ಮಂಥನವಾಗೆ ।\nಜನಿಯಿಕುಂ ಜ್ಞಾನನವನೀತವದೆ ಸುಖದಂ ॥\nಗಿಣಿಯೋದು ಪುಸ್ತಕಜ್ಞಾನ; ನಿನ್ನನುಭವವೆ ।\nನಿನಗೆ ಧರುಮದ ದೀಪ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೪ ॥",
    kannada_explanation:
      "ಅನುಭವವೆಂಬ ಹಾಲನ್ನು ವಿಚಾರವೆಂಬ ಕಡಗೋಲಿನಿಂದ ಮಥಿನಗೊಂಡು ಜ್ಞಾನವೆಂಬ ಬೆಣ್ಣೆ ಹೊರಬಂದಾಗ ಅದು ಸುಖವನ್ನು ನೀಡುತ್ತದೆ. ಪುಸ್ತಕದ ಜ್ಞಾನ ಗಿಳಿ ಪಾಠವಿದ್ದಂತೆ. ಹಾಗಾಗಿ ನಿನಗೆ ನಿನ್ನ ಜೀವನಾನುಭವವೇ ಧರ್ಮದ ದರ್ಶನ ಮಾಡಿಸುವಂತಹ ದೀಪ ಎಂದು ಬಾಳಿನ ಪರಮ ಸತ್ಯವನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 545,
    english:
      "One must search inwards for experiences using the light of one's intellect. From that, you will find the universal truth. Applying that universal truth to every day dilemmas and resolving them is called 'Dharma' - nothing more complex. - Mankutimma",
    kannada:
      "ಬುದ್ಧಿಪ್ರಕಾಶದಿಂದಂತರನುಭವಶೋಧೆ ।\nಸಿದ್ಧವಾ ಶೋಧೆಯಿಂ ಸತ್ಯಸಂವೀಕ್ಷೆ ॥\nಶುದ್ಧಸತ್ಯವ ಜೀವಿತಪ್ರಶ್ನೆಗನ್ವಯಿಪ ।\nಪದ್ಧತಿಯೆ ಧರ್ಮವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೫ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಅಂತರಂಗದ ಅನುಭವವು ಬುದ್ಧಿಯಿಂದ ಜಿಜ್ಞಾಸೆಗೆ ಒಳಪಟ್ಟಾಗ ಅದು ಬೆಳಗಿ ಆ ಬೆಳಕಿನಲ್ಲಿ ಅರಿವು ಅರಳಿ, ಮತ್ತಷ್ಟು ಶೋಧನೆ ನಡೆದಾಗ ಸತ್ಯವು ಗೋಚರವಾಗುತ್ತದೆ. ಆ ಶುದ್ಧ ಸತ್ಯವನ್ನು ನಮ್ಮ ಬದುಕಿನ ಹಲವಾರು ಪ್ರಶ್ನೆಗಳಿಗೆ ಅನ್ವಯಿಸುವ ಪದ್ದತಿಯೇ ಧರ್ಮ ಎಂದು ನಮ್ಮ ಅಂತರಂಗದಲ್ಲಿ ನಡೆಯ ಬೇಕಾದ ಜಿಜ್ಞಾಸೆಗೆ ಒಂದು ಮಾರ್ಗವನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 546,
    english:
      "The ancient people prayed for wealth, longevity, strength and victory. But of all the hymns, they consider Gayatri Mantra to be most sacred. In that, they pray only for their intellect to be provoked. The practice is to chant this daily to keep the mind fresh and rejuvenated. All other forms of well being will follow the well being of the mind. - Mankutimma",
    kannada:
      "ಶೀಯನಾಯುವ ಬಲವ ಜಯವ ಬೇಡಿರ್ದೊಡಂ ।\nಗಾಯತ್ರಿಯನೆ ಪರಮಮಂತ್ರವೆಂದಾರ್ಯರ್ ॥\nಧೀಯಂ ಪ್ರಚೋದಿಸೆಂದನುದಿನದಿ ಬೇಡಿದರು ।\nಶ್ರೇಯಸ್ಸು ಧೀಮಹಿಮೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೬ ॥",
    kannada_explanation:
      "ಶ್ರೇಯಸ್ಸನ್ನು ಬಯಸಿ ಅದರಿಂದ ಬಲವನ್ನು ಮತ್ತು ಯಶಸ್ಸನ್ನು ಬೇಡುವುದಕ್ಕೆ ‘ಗಾಯತ್ರಿ’ಮಂತ್ರವನ್ನೇ ಪರಮೋಚ್ಚ ಮಂತ್ರವೆಂದು ಕಂಡುಕೊಂಡ ನಮ್ಮ ಸನಾತನದ ಪೂರ್ವಜರು, ನಮ್ಮ ಬುದ್ಧಿ ತೀಕ್ಷ್ನಗೊಳ್ಳಲಿ, ಮತ್ತಷ್ಟು ಮೊನಚಾಗಲಿ, ಎಂದು ಪ್ರತಿನಿತ್ಯವೂ ಬೇಡಿದರು. ಏಕೆಂದರೆ ಧೀ ಎಂದರೆ ಉತ್ತಮ ಬುದ್ಧಿಮತ್ತೆಯೇ ಮನುಷ್ಯನ ಶ್ರೇಯಸ್ಸಿಗೆ ದಾರಿ ಎಂದು ‘ಧೀ’ ಮಹಿಮೆಯನ್ನು ಈ ಮುಕ್ತಕದಲ್ಲಿ ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 547,
    english:
      "Wisdom (or intellect) is like our eyes. It can only see forward but can not move. It's abilities are as limited as the movements of a cripple. It rides on the legs of the mind and makes things possible. Hence for proper functioning in life, we need intellect that rides well on a sound mind. A mind that leaves the intellect behind is blind and is severely limitted. - Mankutimma",
    kannada:
      "ಮತಿ ನಯನದಂತೆ ಮುಂದಿರ್ಪುದನು ನೋಡುವುದು ।\nಮಿತವದರ ಕೆಲಸ, ಹೆಳವನ ಚಲನೆಯಂತೆ ॥\nಗತಿಶಕ್ತಿಯದಕೆ ಮನವೆಂಬ ಚರಣದ ಬಲದೆ ।\nಮತಿಬಿಟ್ಟ ಮನ ಕುರುಡು - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೭ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಬುದ್ಧಿಯು ಕಣ್ಣುಗಳ ಮೂಲಕ ಮುಂದಿರುವುದನ್ನು ನೋಡುತ್ತದೆ. ಕುಂಟನ ಚಲನೆಯಂತೆ ಬುದ್ಧಿಯ ಕೆಲಸವೂ ಮಿತವಾದದ್ದು. ಮನಸ್ಸೇ ಅದಕ್ಕೆ ಕಾಲು. ಮನಸ್ಸಿನ ಶಕ್ತಿಯಿಂದಲೇ ಬುದ್ಧಿಯೂ ನಡೆಯುತ್ತದೆ. ಆದರೆ ಬುದ್ಧಿಯ ಬಲವಿಲ್ಲದ ಮನಸ್ಸು ಕೇವಲ ಕುರುಡು ಎಂದು ಮನಸ್ಸು ಬುದ್ಧಿಗಳ ಪರಸ್ಪರ ಸಂಬಂಧವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 548,
    english:
      "It is not that man can achieve everything on his own efforts. It is also not true that we would not need any divine help. But, we must go as long as our legs are strong and vision is clear. Only beyond that, we should let Providence take control. If we do not the efforts we are capable of, then it is us who lack - not Fate. - Mankutimma",
    kannada:
      "ಪುರುಷಬುದ್ಧಿಯೆ ಸಾಕು ವರಸಿದ್ಧಿಗೆಂದಲ್ಲ ।\nಪರಮೇಶಕರುಣೆಯನವಶ್ಯವೆಂದಲ್ಲ ॥\nಚರಣ ನಡೆವನಿತು ಕಣ್ಣರಿವನಿತು ದೂರ ನೀಂ ।\nಚರಿಸದಿರೆ ಲೋಪವಲ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೮ ॥",
    kannada_explanation:
      "ಜಗತ್ಸೃಷ್ಟಿಯ ಕರ್ತೃವನ್ನು ಅರಿಯಲು ನಮ್ಮ ಬುದ್ಧಿಯಷ್ಟೆ ಸಾಕು ಎಂದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ ಅಥವಾ ಆ ಪರಮೇಶ್ವರನ ಕೃಪೆಯ ಅವಶ್ಯಕತೆ ಇಲ್ಲವೆಂದು ಅಂದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ. ದೇಹದಲ್ಲಿ ಶಕ್ತಿಯಿರುವಷ್ಟು ಮತ್ತು ವಸ್ತು ವಿಷಯಗಳನ್ನು ನಮ್ಮ ದೃಷ್ಟಿಯಿಂದ ಎಷ್ಟು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲಾಗುವುದೋ ಅಷ್ಟನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಪ್ರಯತ್ನಪಡದಿದ್ದರೆ, ಅದು ನಮ್ಮ ಕರ್ತವ್ಯದಲ್ಲಿ ಲೋಪವಾಗುತ್ತದೆ ಎಂದು ಪುರುಷ ಪ್ರಯತ್ನ ಮತ್ತು ಪರಮಾತ್ಮನ ಕೃಪೆಗಳ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 549,
    english:
      "Don't try to give a blue print to Providence and expect it to follow it. You are not its master. Neither is Providence an idiot. It will let good things happen when the time (and ecosystem) is just right for it. Don't fight with Providence. - Mankutimma",
    kannada:
      "ವಿಧಿಗೆ ನೀಂ ಕಾರ್ಯನಕ್ಷೆಯ ವಿಧಿಸ ಹೊರಡದಿರು ।\nಅಧಿಕಾರಿ ನೀನಲ್ಲ; ವಿಧಿ ಬೆಪ್ಪನಲ್ಲ ॥\nಹದವರಿತು ವಿಧಿ ತಾನೆ ಕುದುರಿಸುವನೆಲ್ಲವನು ।\nಅದಟದಿರು ನೀನವನ - ಮಂಕುತಿಮ್ಮ ॥ ೫೪೯ ॥",
    kannada_explanation:
      "ವಿಧಿಗೆ ತನ್ನದೇ ಆದ ಕಾರ್ಯದ ಒಂದು ನಕ್ಷೆಯಿದೆ. ನೀನು ನಿನ್ನ ವಿಧಿಗೆ ಅಧಿಕಾರಿಯಲ್ಲ. ಆ ವಿಧಿ ಬೆಪ್ಪನಲ್ಲ. ವಿಧಿ ನಿನ್ನ ಜೀವನವನ್ನು ಹದವರಿತು ಸೂಕ್ತವಾಗಿ ಸರಿಪಡಿಸುವ (ಕುದುರಿಸುವ). ನೀನು ಅವನನ್ನು ಗದರಿಸದೆ ಇರು ಎಂದು ವಿಧಿಯಾಟದ ಲಕ್ಷಣವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 550,
    english:
      "Sometimes he comes very slowly and pleasantly. Some times he comes with all his force. He never comes giving prior notice - such are the acts of Providence. He will make the miserable prosperous and the prosperous miserable. You should only stay put with patience. - Mankutimma",
    kannada:
      "ತಾಳಿ ಮೆಲುಮೆಲನೊಮ್ಮೆ ಧಾಳಿ ರಭಸದಿನೊಮ್ಮೆ ।\nಹೇಳದೆಯೆ ಕೇಳದೆಯೆ ಬಹನು ವಿಧಿರಾಯ ॥\nಕೀಳ ಮೇಲಾಗಿಪನು ಮೇಲ ಕೀಳಾಗಿಪನು ।\nತಾಳುಮೆಯಿನಿರು ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೦ ॥",
    kannada_explanation:
      "ಆ ವಿಧಿರಾಯ ಪ್ರತಿಯೊಬ್ಬರ ಬದುಕಿನಲ್ಲೂ ನಮ್ಮ ಅರಿವಿಗೆ ಬಾರದಂತೆಯೇ ಹೇಳ ಕೇಳದೆಯೇ ಕೆಲವು ಬಾರಿ ತಡೆದು ಮೆಲ್ಲ ಮೆಲ್ಲನೆ ತನ್ನ ಪ್ರಭಾವವನ್ನು ತೋರಿದರೆ,ಮತ್ತೆ ಕೆಲವು ಬಾರಿ ರಭಸದಿಂದ ಬದುಕನ್ನು ಬುಡಮೇಲಾಗಿಸುವನು. ಅದನ್ನು ತಡೆಯಲು ನಮ್ಮಿಂದಾಗುವುದಿಲ್ಲವಾದ್ದರಿಂದ ಸಹನೆಯಿಂದ ಇರುವುದೇ ಸರಿಯಾದ ದಾರಿ ಎಂದು ವಿಧಿಯ ಆಟವನ್ನು ಮತ್ತು ಅದನ್ನು ಸಹಿಸುವ ಪರಿಯನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 551,
    english:
      "If you try to wriggle away from your responsibilities and put the weight on Providence, do you think it would work? Will Providence concur? It may or may not honor your request. But, you should continue to show your strength and do as much as you can. - Mankutimma",
    kannada:
      "ನಿನ್ನ ಹೆಗಲಿನ ಹೊರೆಯ ದೈವಭುಜಕೇರಿಸುವ ।\nಸನ್ನಾಹ ಸಾಗೀತೆ? ದೈವವೊಪ್ಪೀತೆ? ॥\nಮನ್ನಿಸಲಿ ವಿಧಿ ನಿನ್ನ ಬೇಡೀಕೆಯ, ಭಿನ್ನಿಸಲಿ ।\nನಿನ್ನ ಬಲವನು ಮೆರಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೧ ॥",
    kannada_explanation:
      "ನಾವು ಹೊತ್ತು ತಂದ ವಿಧಿಯ ಹೊರೆಯನ್ನು ನಾವು ಹೊರದೆ ದೈವದ ಭುಜಕ್ಕೆ ಏರಿಸುವ ಪ್ರಯತ್ನ ಸರಿಯಾದೀತೆ? ಅದನ್ನು ದೈವವಾದರೂ ಒಪ್ಪೀತೆ? ನಾವು ನಮ್ಮ ಭಾರವನ್ನು ದೈವಕ್ಕೆ ಹೊರಿಸಲು ಪ್ರಯತ್ನಿಸಿದಾಗ ಅದನ್ನು ದೈವ ಮನ್ನಿಸಲಿ ಅಥವಾ ತಿರಸ್ಕರಿಸಲಿ, ನಾವು ಮಾತ್ರ ನಮಗೆ ದೈವವಿತ್ತಿರುವ ಶಕ್ತಿಯನ್ನು ಉಪಯೋಗಿಸಿ ನಮ್ಮ ಭಾರವನ್ನು ಹೊರವ ಪ್ರಯತ್ನವನ್ನು ಮಾಡಬೇಕು ಎಂದು ವಿಧಿ, ಪುರುಷ ಪ್ರಯತ್ನ ಮತ್ತು ದೈವ ಕೃಪೆಗಳನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 552,
    english:
      "The knowledge hidden in the scriptures are difficult to discern unless somebody explains them to us as discourses. The words in the scriptures and the mind that can understand should fuse into one as complementary to each other. That is found in a few saints. Through them, you can see the universal truth. You also try to find a balance in the words and experiences. - Mankutimma",
    kannada:
      "ಶ್ರುತಿಯರ್ಥ ವಿಶದವಪ್ಪುದು ಪುರುಷಭಾಷ್ಯದಿಂ ।\nಶ್ರುತಿಮತಿಗಳನ್ಯೋನ್ಯಪರಿಪೂರಕಂಗಳ್ ॥\nಯತಿಯೊಳವು ಸೇರಿರಲು ಸತ್ಯದರ್ಶನ ನಿನಗೆ ।\nಕೃತ ಸಮನ್ವಯನಾಗು - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೨ ॥",
    kannada_explanation:
      "ಶ್ರುತಿಯ (ವೇದದ) ಅರ್ಥವು, ಅದನ್ನು ಜಿಜ್ಞಾಸೆಗೊಳಪಡಿಸಿದಾಗ ತಿಳಿಯಾಗುತ್ತದೆ. ಹಾಗೆ, ಕೇಳಿದ ವಿಷಯ ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಜಿಜ್ಞಾಸೆಯನ್ನುಂಟುಮಾಡಿದ್ದಾಗ ಮತ್ತು ಕೇಳಿದ ವಿಷಯ ಮತ್ತು ನಾವು ಅರಿತುಕೊಂಡದ್ದು ಒಂದಕ್ಕೊಂದು ಪೂರಕವಾಗಿ ಸೇರಿದರೆ ನಮಗೆ ಸತ್ಯದ ದರ್ಶನವಾಗುತ್ತದೆ. ಹಾಗೆ ನಮಗೆ ದೃಗ್ಗೋಚರವಾದ ಸತ್ಯವನ್ನು ನಾವು ಕೃತಿಯಲ್ಲಿ ಅಳವಡಿಸಿಕೊಂಡು,’ಕೃತಸಮನ್ವಯ’ರಾಗಬೇಕು ಎಂದು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ತಿಳಿಸಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 553,
    english:
      "There are sixteen pieces of the moon. When joined properly from the first to fifteenth day, you will see the beautiful full moon. The moon of universal truth has hundreds of pieces. When you can understand each piece, keep them in right place and grow, a beautiful full moon of truth will appear. - Mankutimma",
    kannada:
      "ಚೂರುಗಳು ಹದಿನಾರು ಚಂದ್ರಮಂಡಲಕಂತೆ ।\nನೂರಾರು ಚೂರುಗಳು ಸತ್ಯಚಂದ್ರನವು ॥\nಸೇರಿಸುತಲವುಗಳನು ಬಗೆಯರಿತು ಬೆಳಸುತಿರೆ ।\nಸಾರ ಋತಪೂರ್ಣಿಮೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೩ ॥",
    kannada_explanation:
      "ಚಂದಿರ ಅಮಾವಾಸ್ಯೆಯಿಂದ ಹಿಡಿದು ಹುಣ್ಣಿಮೆಯ ತನಕ ಹದಿನಾರು ದಿನ ಪ್ರತಿನಿತ್ಯ ನಮಗೆ ಒಂದೊಂದು ಚೂರಾಗಿ ಕಂಡು ಮತ್ತು ಪ್ರತಿನಿತ್ಯ ಆ ಚೂರುಗಳು ಬೆಳೆದು ಹುಣ್ಣಿಮೆಯಂದಿಗೆ ಪೂರ್ಣಚಂದ್ರನಾಗಿ ಬೆಳಗುವಂತೆ ನಾವು ಕಂಡುಕೊಳ್ಳುವ ಸಾವಿರಾರು ಚಿಕ್ಕ ಚಿಕ್ಕ ಸತ್ಯಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತಾ ಹೋದರೆ ಎಂದೋ ಒಂದು ದಿನ ನಮಗೂ ಅಂತರಂಗದಲ್ಲಿ ಪೂರ್ಣರೂಪದಲ್ಲಿ ಸತ್ಯದರ್ಶನವಾದೀತು ಎಂದು ಸತ್ಯಾನ್ವೇಷಣೆಯ ಮಾರ್ಗವನ್ನು ನಮಗೆ ತಿಳಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 554,
    english:
      "Intellect knows about the right and the wrong. But the mind does not let us always choose the right. There is a valley (and two hills) difference between the mind and the intellect. Only then they both strive together - like the oil and the wick in a lamp - does life become happy and elevated. - Mankutimma",
    kannada:
      "ತಿಳಿವಿಗೊಳಿತೆನಿಸುದುದು ನಡೆಯೊಳೇತಕ್ಕರಿದು? ।\nಕುಳಿ ಮೇಡು ದೂರ ಮತಿಮನಸುಗಳ ನಡುವೆ ॥\nಒಳಗಿನಾಯೆಣ್ಣೆ ಬತ್ತಿಗಳೆರಡುಮೊಡವೆರೆಯೆ ।\nಬೆಳಕು ಜೀವೋನ್ನತಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೪ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಅರಿವಿಗೆ ಒಳಿತು ಎನಿಸಿದ್ದು ನಮ್ಮ ನಡತೆಯಲ್ಲಿರುವುದಿಲ್ಲ ಏಕೆ? ನಮಗಿರುವ ತಿಳುವಳಿಕೆ ಮತ್ತು ಮನಸ್ಸಿನ ನಡುವೆ ಬೆಟ್ಟ ಮತ್ತು ಕಮರಿಗಳಷ್ಟು ಅಂತರವಿದೆ. ನಮ್ಮ ಅರಿವು ಮತ್ತು ಮನಸ್ಸುಗಳು ದೀಪದ ಎಣ್ಣೆ ಮತ್ತು ಬತ್ತಿಗಳಂತೆ ಒಂದಕ್ಕೊಂದು ಪೂರಕವಾಗಿದ್ದರೆ ನಮ್ಮ ಜೀವದ ಉನ್ನತಿಗೆ ಬೆಳಕಾಗುತ್ತದೆ ಎಂದು ಮತಿ ಮನಸ್ಸುಗಳ ಪೂರಕತೆಯ ಅವಶ್ಯಕತೆಯನ್ನು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 555,
    english:
      "When your mind is faced with an ethical dilemma, then do a critical examination of self - but only after removing self from the equation. When you remove the self, then a good wisdom emerges. Nothing is more reliable than that. - Mankutimma",
    kannada:
      "ಧರ್ಮಸಂಕಟದಿ ಮನ ತಲ್ಲಣಿಸುತಿರುವಂದು ।\nನಿರ್ಮಥಿಸು ನಿನ್ನಾತ್ಮವನೆ ಮಮತೆ ಬಿಟ್ಟು ॥\nನಿರ್ಮಮದ ಸದ್ವಿವೇಕದ ದೀಪಕಿಂತ ನೀಂ ।\nನೆಮ್ಮಲಿನ್ನೇನಿಹುದೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೫ ॥",
    kannada_explanation:
      "ಮನದಲ್ಲಿ ಮೂಡುವ ಭಾವಗಳಲ್ಲಿ, ಅದೋ-ಇದೋ, ಹೇಗೊ-ಹಾಗೋ ಎಂದು ದ್ವಂದ್ವಗಳಲ್ಲಿ ಸಿಲುಕಿದಾಗ ವಿಷಯದ ಮಂಥನ ಅಂತರಂಗದಲ್ಲಿ ಮಾಡಿ ಸರಿಯಾದ ನಿರ್ಣಯವನ್ನು ತೆಗೆದುಕೋ. ಮಮತೆಯನ್ನು ತೊರೆದು ವಿವೇಕದಿಂದ ತೆಗೆದುಕೊಂಡ ನಿರ್ಣಯಗಳನ್ನು ನೀನು ನೆಚ್ಚಿಕೊ ಮತ್ತು ನಂಬಿಕೋ ಎಂದು ಒಂದು ಕ್ರಮವನ್ನು ಆದೇಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 556,
    english:
      "If life throws difficult tests at you or asks you tough questions, turn your thinking inwards. There; Right there you will find all answers - the continuous flow (stream) of cosmic truth. We should know how to tap it. - Mankutimma",
    kannada:
      "ಶಕ್ತಿಮೀರ್ದ ಪರೀಕ್ಷೆಗಳನು ವಿಧಿ ನಿಯಮಿಸಿರೆ ।\nಯುಕ್ತಿಮೀರ್ದ ಪ್ರಶ್ನೆಗಳನು ಕೇಳುತಿರೆ ॥\nಚಿತ್ತವನು ತಿರುಗಿಸೊಳಗಡೆ; ನೋಡು, ನೋಡಲ್ಲಿ ।\nಸತ್ತ್ವದಚ್ಛಿನ್ನ ಝರಿ - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೬ ॥",
    kannada_explanation:
      'ಬದುಕಿನಲ್ಲಿ ನಮ್ಮ ಶಕ್ತಿಗೆ ಮೀರಿದ ಪರೀಕ್ಷೆಯಾದರೆ ಮತ್ತು ನಾವು ಎದುರಿಸುವ ವಿಷಮ ಪರಿಸ್ಥಿತಿಗಳಿಂದ ನಮ್ಮ ಮನದಲ್ಲಿ ನಮಗೆ ಅರ್ಥವಾಗದ ಮತ್ತು ಉತ್ತರವೇ ಸಿಗದ ‘ಏಕೆ ಹೀಗೆ?’ ‘ಇದು ಏನು?’ ‘ಪರಿಹಾರವೇನು?" ಎಂಬಂತಹ ಪ್ರಶ್ನೆಗಳು ಉದ್ಭವವಾದಾಗ, ಅಂತರ್ಮುಖಿಗಳಾದರೆ ನಮಗೆ ಅಲ್ಲಿ ನಿರಂತರ ಹರಿಯುವ ಜ್ಞಾನದ ಝರಿ ಕಾಣುತ್ತದೆ ಮತ್ತು ಆ ಜ್ಞಾನದ ಝರಿಯಲ್ಲಿ ಮಿಂದಾಗ, ಚಿತ್ತ ಹರ್ಶಿತವಾಗುತ್ತದೆ ಎಂದು ಅಂತರಂಗದ ಶಾಂತಿಯ ಉಪಾಯವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 557,
    english:
      "If your inner conscience has enough windows, then worries will not get built up with in. Those worries can not suffocate your soul since they are let out through the windows. If you want peace, then realize that windows are as important for a house as the walls. Find such windows for yourself. - Mankutimma",
    kannada:
      "ಅಂತರಂಗದ ಗವಾಕ್ಷಗಳ ತೆರೆದಿಡಲಲ್ಲಿ ।\nಚಿಂತೆ ಕುಮುಲದು, ಹೊಗೆಗಳೊತ್ತವಾತ್ಮವನು ॥\nಶಾಂತಿ ಬೇಳ್ಪೊಡೆ ಮನೆಗೆ ಗೋಡೆವೊಲೆ ಕಿಟಿಕಿಯುಂ ।\nಸಂತತದಪೇಕ್ಷಿತವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೭ ॥",
    kannada_explanation:
      "ಅಂತರ್ಮುಖಿಗಳಾದಾಗ, ನಮಗೆ ನಮ್ಮ ಅಂತರಂಗದಲ್ಲಿ ನಡೆಯುವ ವಿಧ್ಯಮಾನಗಳ ಅರಿವಾಗುತ್ತದೆ. ಮನವನ್ನು ಮುಕ್ತವಾಗಿಡದೆ ಎಲ್ಲ ಕದ-ಕಿಟಕಿಗಳನ್ನು ಮುಚ್ಚಿಕೊಂಡುಬಿಟ್ಟರೆ ನಮ್ಮ ಚಿಂತೆ ಒಳಗೊಳಗೇ ಸುಟ್ಟು ಹೊಗೆಯಾಡುತ್ತದೆ ಮತ್ತು ಆ ಹೊಗೆಯ ದಟ್ಟತೆಯಲ್ಲಿ ಅಶಾಂತಿಯಿಂದ ಮನಸ್ಸು ಬುದ್ಧಿ ಆತ್ಮಗಳು ಸೊರಗುತ್ತವೆ. ಹಾಗಾಗಿ ನಮಗೆ ನಿರಂತರದ ಶಾಂತಿ ಬೇಕಿದ್ದಲ್ಲಿ ಮನದ ಗೋಡೆಯಲ್ಲಿ ಕಿಟಕಿಗಳಿರಬೇಕು ಎಂದು ಒಂದು ಸಂದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 558,
    english:
      "When one thinks a lot and speaks (like the sages did) their words will have more than one meaning - one that is apparent and simple, and another which is involved and mysterious. Understanding both will help us cross this ocean of samsaara (worldly miseries) - just like the boat requires both the sail (apparent) and the rudder (hidden) to move. - Mankutimma",
    kannada:
      "ಆಳವನು ನೋಡಿ ಬಗೆದಾಡುವ ಮಾತಿಂಗೆ ।\nರೂಢಿಯರ್ಥವದೊಂದು ಗೂಡಾರ್ಥವೊಂದು ॥\nವಾರಿಧಿಯ ದಾಂಟುವುಡುಪಕೆ ಗಾಳಿಪಟವೊಂದು ।\nಕೋಲು ಹುಟ್ಟೊಂದು ಬಲ - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೮ ॥",
    kannada_explanation:
      "ನಾವು ಕೇಳುವ ಮಾತನ್ನು ಆಳವಾಗಿ ಪರೀಕ್ಷಿಸಿ ನೋಡಿದರೆ, ಮೇಲುನೋಟಕ್ಕೆ ಒಂದು ಅರ್ಥ ಕಂಡರೆ, ಒಳನೋಟಕ್ಕೆ ಬೇರೆ ಅರ್ಥವಿರುವುದು. ಸಾಗರವ ದಾಟುವ ಹಡಗಿಗೆ ಮೇಲಿಂದ ದಿಕ್ಕನ್ನು ಸೂಚಿಸುವ ಹಾಯಿ ಅಥವಾ ಗಾಳಿಪಟದ ಮತ್ತು ಅಡಿಯಲ್ಲಿ ಬಲದಿಂದ ಹಾಕುವ ಹುಟ್ಟಿನ ಬಲವಿದ್ದಂತೆ, ನಾವು ಆಡುವ ಅಥವಾ ಕೇಳುವ ಮಾತಿಗೆ ರೂಢಿಯಲ್ಲಿರುವ ಅರ್ಥವು ಒಂದಿದ್ದರೆ ಗಹನವಾದ ವಿಚಾರದಿಂದ ಕೂಡಿದ ಮತ್ತೊಂದು ಅರ್ಥವಿರುತ್ತದೆ, ಎಂದು ಮಾತು ಮತ್ತು ಅದರ ಅರ್ಥದ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 559,
    english:
      "Try looking at the universal true picture - there is a tree with its root in the sky. Towards the earth are its twigs, branches and struts. This is the tree of life. This is the universe symbolized as a Ashwattha tree (root being the supreme being - God, and leaves are beings of this world). Try and analyze its meaning. - Mankutimma\n\n[Translator's note: This verse is essence of a shloka from Bhagavadgita - Chapter 15, Verse 1]",
    kannada:
      "ಪರಮಪದದಲಿ ನೋಡು; ಬೇರುಗಳ್ ವ್ಯೋಮದಲಿ ।\nಧರೆಗಿಳಿದ ಕೊಂಬುರಂಬೆಗಳು, ಬಿಳಲುಗಳು ॥\nಚಿರಜೀವಿವೃಕ್ಷವಿದು ವಿಶ್ವಜೀವಾಶ್ವತ್ಥ ।\nಪರಿಕಿಸಿದರರ್ಥವನು - ಮಂಕುತಿಮ್ಮ ॥ ೫೫೯ ॥",
    kannada_explanation:
      "ನಿಸರ್ಗದಲ್ಲಿ ಮರವು ಮೇಲಿದ್ದರೆ ಬೇರುಗಳು ಭೂಮಿಯ ಒಳಗೆ ಇರುತ್ತದೆ. ಆದರೆ ಜಗದ್ವೃಕ್ಷದ ಬೇರುಗಳು ಆಕಾಶದಲ್ಲಿ ಅಥವಾ ಪರಮ ಪದದಲ್ಲಿ ಇರುತ್ತದೆ. ಅವು ಪರಮ ಪದದ ಬೇರುಗಳಾದ್ದರಿಂದ ಬದುಕು ಚಿರಂತನ ಮತ್ತು ನಿರಂತರ. ಇದನ್ನು ವಿಶ್ವ ಜೀವಾಶ್ವತ್ಥ ಎಂದು ಕರೆದು ಬದುಕಿನ ಮೂಲ ಮತ್ತು ಅಗಾಧತೆಯನ್ನು ಅರುಹಿ, ಅದರ ಅರ್ಥವನ್ನು ಪರೀಕ್ಷಿಸಿ ನೋಡು ಎಂದು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು",
  },
  {
    number: 560,
    english:
      "The root source of life is at the very top of the tree (inverted) in the Supreme Being. It sends out the life giving freshness to our world. We are the twigs and leaves of the tree. We blossom and wilt in time. But there is no death to the tree itself. - Mankutimma",
    kannada:
      "ಜೀವನದ ಮೂಲ ಮೇಲಿಹುದು ಪರಮೋರ್ಧ್ವದಲಿ ।\nತೀವಿರ್ಪುದದು ಕೆಳಗೆ ನಮ್ಮ ಲೋಕದಲಿ ॥\nನಾವದರ ಕಡ್ಡಿಯೆಲೆ, ಚಿಗುರುವೆವು, ಬಾಡುವೆವು ।\nಸಾವು ಮರಕೇನಿಲ್ಲ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೦ ॥",
    kannada_explanation:
      "ಜೀವನದ ಮೂಲ ಅಥವಾ ಅಧಾರ ಎಲ್ಲೋ ಮೇಲಿದೆ. ಅದು ಇರುವ ಸ್ಥಳ ಪರಮ ಊರ್ಧ್ವ. ಅದಕ್ಕಿಂತ ಮೇಲೆ ಯಾವುದೂ ಇಲ್ಲ. ಆದರೆ ಅದು ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲೆಲ್ಲೂ ಎಂದರೆ ನಮ್ಮ ಲೋಕದಲ್ಲೂ ವ್ಯಾಪಿಸಿಕೊಂಡಿದೆ. ನಾವುಗಳು ಈ ಜಗತ್ವೃಕ್ಷದ ಕಡ್ಡಿ ಮತ್ತು ಎಲೆಗಳು. ನಾವು ಒಣಗಿ ಬಾಡಿ ಉದುರಿದರೂ ಈ ಜಗತ್ವೃಕ್ಷಕ್ಕೆ ಸಾವು ಎಂಬುದು ಇರುವುದಿಲ್ಲ ಎಂದು ಸೃಷ್ಟಿಯ ಸೂಕ್ಷ್ಮತೆಯನ್ನು,ವ್ಯಾಪ್ತಿಯನ್ನು ಮತ್ತು ನಿರಂತರತೆಯನ್ನು ವಿಶ್ಲೇಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 561,
    english:
      "The tree blossoms in one side, and wilts in another. Branches may recede while it expands at the head (which is down). The tree is forever new as well as old. The spirit running through the tree is of the supreme being. - Mankutimma",
    kannada:
      "ಒಂದು ಕಡೆ ಚಿಗುರುತಲಿ, ಒಂದು ಕಡೆ ಬಾಡುತಲಿ ।\nಕಂದುತಿರೆ ಕೊಂಬೆ, ಮುಂಡದಲಿ ಹಬ್ಬುತಲಿ ॥\nಎಂದೆಂದುಮಶ್ವತ್ಥ ಹಳೆಹೊಸದು; ತಾನದಾ ।\nಸ್ಪಂದನವೊ ಬ್ರಹ್ಮನದು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೧ ॥",
    kannada_explanation:
      "ಅಶ್ವತ್ಥ ವೃಕ್ಷವು ಒಂದು ಕಡೆ ಬಾಡಿದರೆ ಒಂದುಕಡೆ ಚಿಗುರುವುದು. ಕೆಲ ಕೊಂಬೆಗಳು ಒಣಗುತ್ತಿದ್ದರೆ ಮತ್ತೊಂದು ಕಡೆ ಮೇಲೆ(ಮುಂಡದಲಿ) ಹೊಸ ಚಿಗುರ ತಳೆಯುತ್ತದೆ. ಅದೇ ರೀತಿ ಈ ಜಗದ್ವೃಕ್ಷವೂ ಸಹ ಒಂದು ”ಲಯ”ದಲ್ಲಿ ಬದಲಾಗುತ್ತಾ, ಎಂದೆಂದೂ ಬಾಡದ, ಹಳೆಯದಾಗದ ಮತ್ತೆ ಮತ್ತೆ ಹೊಸತನವನ್ನು ತಳೆಯುವ ರೀತಿಯಲ್ಲಿದೆ ಮತ್ತು ಚಲನ ರೂಪದಲ್ಲಿರುವ ಆ ಬ್ರಹ್ಮನೇ ಈ ಜಗತ್ತು ಎಂದು ಸೃಷ್ಟಿಯ ಸ್ವರೂಪವನ್ನು ಎಳೆ ಎಳೆಯಾಗಿ ಬಿಡಿಸಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 562,
    english:
      "In this tree of life, the leaves are supported by twigs, twigs by the branches. This way they are all enhancing the beauty of the nature. Every one has his own space in this tree. So, do not hate your existence. - Mankutimma",
    kannada:
      "ಎಲೆಗಳನು ಕಡ್ಡಿ, ಕಡ್ಡಿಯ ರಂಬೆಕೊಂಬೆಗಳು ।\nತಳೆದು ಪೆರ್ಚಿಸುತಿಹುವು ಮರದ ಬಾಳ್ಸಿರಿಯ ॥\nಸ್ಥಲವೊಂದು ನಿನಗಿಹುದು ವಿಶ್ವವೃಕ್ಷದೊಳಂತು ।\nಹಳಿಯದಿರು ನಿನ್ನಿರವ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೨ ॥",
    kannada_explanation:
      "ಒಂದು ಅಶ್ವತ್ಥ ವೃಕ್ಷದಲ್ಲಿ ಎಲೆಗಳನ್ನು ಕಡ್ಡಿಗಳೂ, ಕಡ್ಡಿಗಳನ್ನು ರೆಂಬೆಗಳು, ರೆಂಬೆಗಳನ್ನು ಕೊಂಬೆಗಳೂ ತಳೆದು ಆ ಮರದ ಸೊಬಗನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. ಅದೇ ರೀತಿ ಈ ಜಗದ್ವೃಕ್ಷದ ಎಂದರೆ ವಿಶ್ವಜೀವನದ ವೃಕ್ಷದಲ್ಲಿ ಮತ್ತು ಅದರ ಸೊಬಗಿನಲ್ಲಿ ನಿನಗೂ ಒಂದು ಪಾತ್ರವಿದೆ. ಹಾಗಾಗಿ ನಿನ್ನ ಬಾಳನ್ನು ನೀ ಜರಿಯದಿರು, ಹಳಿಯದಿರು ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಜನಿಸುವ ಪ್ರತೀ ಜೀವಿಯ ಪಾತ್ರದ ಕುರಿತು ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 563,
    english:
      "You are not the struts, not the roots, not the canopy or the branches, not the sprouts, not the flowers or the fruits. You are just a leaf - among the many many leaves in this tree of life. Understand your role and be of use (help). - Mankutimma",
    kannada:
      "ಬಿಳಲಲ್ಲ, ಬೇರಲ್ಲ, ಮುಂಡಕಾಂಡಗಳಲ್ಲ ।\nತಳಿರಲ್ಲ, ಮಲರಲ್ಲ, ಕಾಯಿಹಣ್ಣಲ್ಲ ॥\nಎಲೆ ನೀನು; ವಿಶ್ವವೃಕ್ಷದೊಳ್ ಎಲೆಯೊಳೊಂದು ನೀಂ ।\nತಿಳಿದದನು ನೆರವಾಗು - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೩ ॥",
    kannada_explanation:
      "ಈ ಜಗದ್ವೃಕ್ಷದಲ್ಲಿ ನೀನು ಬಿಳಲಲ್ಲ, ಬೇರಲ್ಲ,ಮುಂಡವಲ್ಲ,ಕಾಂಡವಲ್ಲ,ಚಿಗುರಲ್ಲ,ಹೂವಲ್ಲ,ಕಾಯಿ ಹಣ್ಣೂ ಅಲ್ಲ. ಆ ವೃಕ್ಷದ ಸಹಸ್ರಾರು ಎಲೆಗಳಲ್ಲಿ ನೀನೂ ಸಹ ಒಂದು ಎಲೆ. ‘ನಾನೇ’ ಎನ್ನುವ ಭಾವ ಬಿಟ್ಟು ‘ ನಾನೂ ಎಲ್ಲರಂತೆ’ ಎಂದು ಈ ಬದುಕೆಂಬ ವೃಕ್ಷದಲ್ಲಿ ಒಂದಾಗಿ ಆ ವೃಕ್ಷಕ್ಕೆ ನೆರವಾಗು ಎಂದರೆ ಒಟ್ಟಾರೆ ಬದುಕಿಗೆ ಪೂರಕವಾಗಿ ಜೀವಿಸು ಎಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 564,
    english:
      "Why does nature take all the pains to create a wonderful picture (of a flower blossom) in a creeper deep in darkness of the forest? There is no one there to appreciate it. But if is satisfaction enough if one brings all the strength and quality into the work and completes it. - Mankutimma",
    kannada:
      "ಎತ್ತಲೋ ಕಾಡುಮಬ್ಬಿನ ಬಳ್ಳಿ ಮೊಗ್ಗಿನಲಿ ।\nಚಿತ್ರರಚನೆಗದೇಕೆ ತೊಡಗುವಳ್ ಪ್ರಕೃತಿ? ॥\nಕೃತ್ಯಕ್ಕೆ ತಾಂ ತರುವ ಶಕ್ತಿ ಗುಣ ಪೂರ್ಣತೆಯೆ ।\nಸಾರ್ಥಕವೊ ಜೀವಿತಕೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೪ ॥",
    kannada_explanation:
      "ಪ್ರಕೃತಿಮಾತೆ, ಎಲ್ಲೋ ಒಂದು ಕತ್ತಲೆಯ ಕಾಡಿನಲ್ಲಿ ಒಂದು ಬಳ್ಳಿಯಲ್ಲಿ ಸುಂದರ ಹೂವನ್ನು ಚಿತ್ರದಂತೆ ರಚನೆ ಮಾಡಿ, ತನ್ನ ಶಕ್ತಿಯನ್ನು ಸಾರ್ಥಕಗೊಳಿಸುವಂತೆ, ನಾವು ಮಾಡುವ ಪ್ರತೀ ಕೆಲಸಕ್ಕೂ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ ಪರಿಪೂರ್ಣತೆಯೆಡೆಗೆ ನಡೆದರೆ ನಮ್ಮ ಬದುಕಿಗೂ ಅದು ಸಾರ್ಥಕ್ಯ ಎಂದು ಬದುಕಿನ ಸಾರ್ಥಕತೆಯನ್ನು ಸಾಧಿಸುವ ಪರಿಯನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 565,
    english:
      "Why does nature create wonderful sceneries in the forest for birds and insects to see? Does she ask for appreciation from those who see it? It is her practice to exhibit her creations as much as she can - not caring much if there is an audience or not. That is her style. - Mankutimma",
    kannada:
      "ಕಾಡುಹಕ್ಕಿ ಹುಳಕ್ಕೆ ವರ್ಣಚಿತ್ರಗಳೇಕೆ?- ।\nನೋಡುವರ ಕಣ್ಣೊಲವ ಬೇಡುವಳೆ ಸೃಷ್ಟಿ? ॥\nಮಾಡುವಾ ಮಾಟಗಳನಾದನಿತು ಬೆಳಗಿಪುದು ।\nರೂಢಿಯಾ ಪ್ರಕೃತಿಯದು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೫ ॥",
    kannada_explanation:
      "ಕಾಡಿನ ಹಕ್ಕಿ ಹುಳ ಹುಪ್ಪಟೆಗಳಿಗೆ ಚಿತ್ರ ವಿಚಿತ್ರವಾದ ಬಣ್ಣಗಳು ಏಕೆ ಇವೆ? ನೋಡುವವರು ಅವುಗಳನ್ನು ನೋಡಿ ಒಲವನ್ನು ತೋರಲಿ ಎಂದೇ? ಖಂಡಿತ ಅಲ್ಲ. ಕೋಟ್ಯಾಂತರ ರೂಪ ಮತ್ತು ಬಣ್ಣಗಳಲ್ಲಿ, ಚಿತ್ರ ವಿಚಿತ್ರವಾದ ವಿನ್ಯಾಸಗಳಲ್ಲಿ ಪ್ರಕಟಗೊಳ್ಳುವುದು ಪ್ರಕೃತಿಯ ಸ್ವಧರ್ಮ ಅಥವಾ ರೂಢಿ ಎಂದು ಪ್ರಕೃತಿಯ ಸ್ವಾಭಾವಿಕ ವೈವಿಧ್ಯತೆಯನ್ನು ಎತ್ತಿ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 566,
    english:
      "Who is there to smell the fragrance of a flower in the forest? Who is there to search and appreciate the colors of the dress of a butterfly? Nature pulls out wonders not caring about who is there to watch them. - Mankutimma",
    kannada:
      "ಆರಣ್ಯಕದ ಪುಷ್ಪಗಳ ಮೂಸುವವರಾರು? ।\nಆರಿಹರು ಪತಗದುಡುಪನು ಹುಡುಕಿ ಮಚ್ಚಲ್? ॥\nಬೇರೊಬ್ಬರೆಣಿಕೆಯಿಲ್ಲದೆ ಪ್ರಕೃತಿ ತನಗೆಂದೆ ।\nಸ್ವಾರಸ್ಯವೆಸಗುವಳೊ! - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೬ ॥",
    kannada_explanation:
      "ಕಾಡಿನಲ್ಲಿನ ಪುಷ್ಪಗಳ ಸುಗಂಧವನ್ನು ಆಘ್ರಾಣಿಸುವವರು ಯಾರಿದ್ದಾರೆ? ಬಣ್ಣ ಬಣ್ಣಗಳ ಚಿತ್ತಾರಗಳನ್ನು ಹೊತ್ತ ಪತಂಗಗಳ ಹುಡುಕಿ ಹುಡುಕಿ ಮೆಚ್ಚುವವರಾರು? ಮತ್ತೊಬ್ಬರ ಮೆಚ್ಚುಗೆಗೆ ಆಸೆಪಡದೆ ಪ್ರಕೃತಿ ತಾನೇ ತೃಪ್ತಿಪಡಲು ಈ ಜಗತ್ತಿನಲ್ಲಿನ ಎಲ್ಲ ವಸ್ತುಗಳಲ್ಲೂ ಸುಂದರತೆಯನ್ನು ಪ್ರಕಟಿಸಿ ಆಕರ್ಷಣೆಯನ್ನು ಇಟ್ಟು ಜಗತ್ತನ್ನು ಮತ್ತಷ್ಟು ಸ್ವಾರಸ್ಯಕರವಾಗಿಸುತ್ತದೆ ಎಂದು ಪ್ರಕೃತಿಯ ಸಹಜ ಗುಣವನ್ನು ಪ್ರಶಂಸಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 567,
    english:
      "Where can one find these fortunate people - a poet who can describe the feelings of the mind completely? a sculptor who can carve everything without leaving out any detail? an builder/engineer who can convert ideas/plans into reality? They are fortunate because they do something that nature does every day with so much ease. - Mankutimma",
    kannada:
      "ಮನದ ಭಾವಗಳ ಪೂರ್ಣದಿನೊರೆಯಲರಿತ ಕವಿ ।\nಇನಿತನುಂ ಬಿಡದೆ ರೂಪಿಸಲರಿತ ಶಿಲ್ಪಿ  ॥\nಅನುರೂಪದಿಂದ ವಾಸ್ತವಗೊಳಿಪ ಕೃತಿಚತುರ ।\nಧನಿಯರಿವರೆಲ್ಲಿಹರೊ?  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೭ ॥",
    kannada_explanation:
      "ಮನಸ್ಸಿನಲ್ಲಿ ಬಂದ ಭಾವಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ವ್ಯಕ್ತಪಡಿಸುವಂತಾ ಕವಿ, ಸ್ವಲ್ಪವೂ ಕೊರತೆಯಿಲ್ಲದೆ ಕೆತ್ತಬಲ್ಲ ಶಿಲ್ಪಿ, ಯಾವುದೇ ಕೆಲಸವನ್ನು ಹಿಡಿದರೂ ಯೋಜಿಸಿದ್ದನ್ನು ಮಾಡಿಯೇ ತೀರುವ ಕಾರ್ಯ ನೈಪುಣ್ಯತೆಯನ್ನು ಹೊಂದಿರುವ ಧನಿಗಳು ಲೋಕದಲ್ಲಿ ಎಲ್ಲಿದ್ಧಾರೆ, ಎಂದು ಅಂತಹ ನೈಪುಣ್ಯತೆ ಇರುವವರೇ ಜಗತ್ತಿನಲ್ಲಿ ಧನ್ಯರು ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 568,
    english:
      "There are no apparatus that are similar to what we have imagined. There are no means to see through our calculations. The same cycle of misery and helplessness is repeated in all the lives. Tell me who should I be angry with? - Mankutimma",
    kannada:
      "ಮನದ ಭಾವಿತಕೊಪ್ಪುವುಪಕರಣ ನಮಗಿಲ್ಲ ।\nಎಣಿಕೆಗಳ ಪೂರಯಿಪ ಸಾಧನಗಳಿಲ್ಲ ॥\nಜನುಮಜನುಮಗಳಿಂತು ಪೇಚಾಟ, ತಿಣಕಾಟ ।\nಮುನಿಪುದಾರಲಿ, ಹೇಳು?  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೮ ॥",
    kannada_explanation:
      'ಮನಸ್ಸಿನಲ್ಲಿ ಮೂಡಿದ ಭಾವಗಳನ್ನು ಕಾರ್ಯರೂಪಕ್ಕೆ ತರಲು ನಮಗೆ ಅವಶ್ಯಕ ಸಾಧನಗಳಿಲ್ಲ. ಈ ಸಾಧನಗಳ ಅಥವಾ ಉಪಕರಣಗಳ ಕೊರತೆ ನಮಗೆ ಜನ್ಮ ಜನ್ಮಾಂತರದಿಂದಲೂ ಕಾಡುತ್ತಾ ಇದೆ. ಇದರಿಂದ ಪ್ರತೀ ಜನ್ಮದಲ್ಲೂ ನಮಗೆ ತಿಣುಕಾಟ ಮತ್ತು ಪೇಚಾಟಗಳು ಇದ್ದೇ ಇರುತ್ತವೆ. "ಇದು ಹೀಗೆ ಏಕಿದೆ?" ಎಂದು ನಾವು ಯಾರಲ್ಲಿ ದೂರುವುದು? ಎಂದು ತಮ್ಮಲ್ಲಿ ತಾವೇ ಪ್ರಶ್ನಿಸುತ್ತಾ ನಮ್ಮ ಮುಂದೆ ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 569,
    english:
      "Do the trees have definitely time-table to bear flowers and fruits? The results of our mind and intellect are also like that - no timetable of for results. Constant nurturing, innate qualities of the seed and the right time of the year (climate) will result in flowers and fruits. Human talent is also like wise - will blossom under certain conditions only. - Mankutimma",
    kannada:
      "ಕ್ಷಿತಿರುಹಕೆ ಸುಮಫಲಮುಹೂರ್ತ ನಿಶ್ಚಿತವೇನು? ।\nಮತಿಮನಂಗಳ ಕೃಷಿತಪಃಫಲವುಮಂತು ॥\nಸತತ ಕೃಷಿ, ಬೀಜಗುಣ, ಕಾಲವರ್ಷಗಳೊದವೆ ।\nಪ್ರತಿಭೆ ವಿಕಸಿತವಹುದೊ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೬೯ ॥",
    kannada_explanation:
      "ಗಿಡಮರಗಳಿಗೆ, ಹೂ ಹಣ್ಣುಗಳನ್ನು ಬಿಡಲು ಮುಹೂರ್ತವೇನಾದರೂ ನಿಶ್ಚಿತವಾಗಿದೆಯೇನು? ಮನಸ್ಸು ಬುದ್ಧಿಗಳ ಕೃಷಿ ಮತ್ತು ತಪಸ್ಸಿನ ಫಲವೂ ಅಂತೆಯೇ. ಬೀಜದ ಗುಣ ಉತ್ತಮವಾಗಿದ್ದು, ಸಕಾಲದಲ್ಲಿ ಮಳೆಯಾಗಿ, ಮಾಡುವ ಪರಿಶ್ರಮ ಸತತವಾಗಿದ್ದರೆ ಹೇಗೆ ಒಳ್ಳೆಯ ಫಲ ಲಭ್ಯವಾಗುತ್ತದೆಯೋ ಹಾಗೆಯೇ ನಮ್ಮ ಪ್ರತಿಭೆಯನ್ನೂ ಸಹ ಸನ್ಮಾರ್ಗ, ಸತ್ಸಂಗ, ಸದ್ಭಾವದಂತಹ ಸಲಕರಣೆಗಳಿಂದ ನಿರಂತರ ಕೃಷಿಮಾಡಿದರೆ ನಮ್ಮ ಪ್ರತಿಭೆಯೂ ವಿಕಸಿತಗೊಂಡು ಸತ್ಫಲವನ್ನು ನೀಡುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 570,
    english:
      "Every one has a mouth. But the charisma to utter the right words is found only in some. One can buy a sword with money. But courage is innate. There are very few people who are capable of making history - those who are courageous and have influence over many with their words. They become instruments of God's will. - Mankutimma",
    kannada:
      "ವಕ್ತ್ರವುಂಟೆಲ್ಲರಿಗೆ, ವರ್ಚಸೋರೊರ್ವರಿಗೆ ।\nಕತ್ತಿ ಪಣ್ಯದೊಳುಂಟು, ಶಕ್ತಿ ಸಹಜದಲಿ ॥\nವ್ಯಕ್ತಿ ಪ್ರಭಾವೀ ಲೋಕಚರಿತೆಯ ಕೀಲು ।\nಹಸ್ತವದು ದೈವಕೆಲೊ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೦ ॥",
    kannada_explanation:
      "ಎಲ್ಲರಿಗೂ ಮುಖವಿದೆ. ಆದರೆ ಲಕ್ಷಣ ಅಥವಾ ವರ್ಚಸ್ಸು ಕೇವಲ ಕೆಲವರಿಗೆ ಇದೆ. ಹಾಗೆಯೇ ಕತ್ತಿಯನ್ನು ಹಣಕೊಟ್ಟು ಕೊಳ್ಳಬಹುದು. ಆದರೆ ಅದನ್ನು ಎತ್ತಿ ಹೋರಾಡುವ ಶಕ್ತಿ ಸಹಜವಾಗಿ ವ್ಯಕ್ತಿಯಲ್ಲಿರಬೇಕು. ಅಂತಹ ವ್ಯಕ್ತಿಗಳ ಸಹಜ ಶಕ್ತಿಯಾ ಪ್ರಭಾವವೇ ಜಗತ್ತಿನ ಚರಿತ್ರೆಗೆ ಕಾರಕವಾಗಿರುತ್ತದೆ.ಈ ಜಗತ್ತನ್ನು ರೂಪಿಸುವಲ್ಲಿ ತಿದ್ದುವಲ್ಲಿ ಮತ್ತು ನಡೆಸಿಕೊಂಡು ಹೋಗುವಲ್ಲಿ ಆ ದೈವವು ಮನುಷ್ಯನ ಪ್ರಭಾವೀ ಶಕ್ತಿಯನ್ನು ತನ್ನ ಕರಣದಂತೆ ಉಪಯೋಗಿಸುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 571,
    english:
      "You have the same mouth and eyes as Valmiki. Then how come he (only he) could create the beautiful Ramayana? How come you like it so much that it has a place in your heart? The inner fire (of love towards the magnanimous) is present in every one. It is asleep in most people but active in the great minds like Valmiki. - Mankutimma",
    kannada:
      "ನಿನಗಿರದ ಕಣ್ ಬಾಯಿ ವಾಲ್ಮೀಕಿಗೆಂತಾಯ್ತು? ।\nಮುನಿಕವಿತೆಗೆಂತು ನಿನ್ನೆದೆಯೊಳೆಡೆಯಾಯ್ತು? ॥\nಘನಮಹಿಮನೊಳ್ ಜ್ವಲಿಸುತಿತರರೊಳು ನಿದ್ರಿಸುತೆ ।\nಅನಲನೆಲ್ಲರೊಳಿಹನು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೧ ॥",
    kannada_explanation:
      "ನಿನಗೆ ಇರುವ ಕಣ್ಣು ಬಾಯಿಗಳೇ ಆ ‘ವಾಲ್ಮೀಕಿ’ ಗೂ ಇತ್ತು, ಬೇರೇನಲ್ಲ. ಆ ಮುನಿ ಬರೆದ ಕವಿತೆಗೆ ನಿನ್ನ ಮನದಲ್ಲೂ ಸ್ಥಳವಾಯಿತಲ್ಲವೇ? ಅಂತಹ ಘನ ಮಹಿಮನಲ್ಲಿ ಜ್ವಲಿಸುವ ಬೆಂಕಿ ಅಥವಾ ಜ್ಞಾನವೇ ಎಲ್ಲರೊಳೂ ಇರುತ್ತದೆ. ಆದರೆ ಕೆಲವರಲ್ಲಿ ಜಾಗೃತವಾಗಿ ಮತ್ತೆ ಕೆಲವರಲ್ಲಿ ಸುಪ್ತವಾಗಿ ಇರುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 572,
    english:
      "When your efforts don't materialize - don't worry too much. Never give up. Never say never again. In the big ocean, if a single fish is born or dies, does it really matter? Individual success or failure are thus insignificant. - Mankutimma",
    kannada:
      "ಪುರುಷಯೋಚನೆಯೆಲ್ಲ ಮುರಿದು ಮಣ್ಣಹುದೆಂದು ।\nಕೊರಗದಿರು; ಕೆಟ್ಟನೆಂದೆಂದುಮೆನ್ನದಿರು ॥\nಶರಧಿಯೊಳು ಮೀನೊಂದು ಪುಟ್ಟಲೇಂ ಸಾಯಲೇಂ? ।\nಪರವೆಯೇನಿಲ್ಲವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೨ ॥",
    kannada_explanation:
      "ಅಯ್ಯೋ ನಾವು ಮಾಡುವ ಯೋಚನೆಯೆಲ್ಲಾ ಯಾವುದೂ ಫಲಿಸುವುದಿಲ್ಲ ನಮ್ಮ ಪ್ರಯತ್ನವೆಲ್ಲಾ ಮಣ್ಣಾಗುವುದು ಎಂದು ಕೊರಗದೆ ಇರು. ‘ನಾ ಕೆಟ್ಟೆ’ ಎನ್ನದಿರು. ಕಡಲಿನಲ್ಲಿ ಮೀನು ಒಂದು ಹುಟ್ಟಿದರೇನು ಸತ್ತರೇನು ಕಡಲಿಗೇನೂ ವ್ಯತ್ಯಾಸವಾಗುವುದಿಲ್ಲವಲ್ಲ. ಹಾಗೆಯೇ ನಿನ್ನ ಯೋಚನೆಗೆಲ್ಲ ಒಂದು ರೂಪ ಸಿಗಲೇಬೇಕೆಂದು ನೀ ಯೋಚಿಸಬೇಡ ಎಂದು ನಮ್ಮ ಯೋಚನೆಗಳನ್ನು ಪರಿಪಕ್ವತೆಯೆಡೆಗೆ ಕೊಂಡೊಯ್ಯಲು ಒದಗುವ ವಿಚಾರ ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 573,
    english:
      "Its okay if you (and you alone) fall. You must still continue the fight. Always look to take the courageous path. There is no point in living a life on the sidelines cribbing, but not getting involved. You must endure the hardships and show off your true strengths. - Mankutimma",
    kannada:
      "ಹೋರಾಡು ಬೀಳ್ವನ್ನಮೊಬ್ಬಂಟಿಯಾದೊಡಂ ।\nಧೀರಪಥವನೆ ಬೆದಕು ಸಕಲಸಮಯದೊಳಂ ॥\nದೂರದಲಿ ಗೊಣಗುತ್ತ ಬಾಳ್ವ ಬಾಳ್ಗೇನು ಬೆಲೆ? ।\nಹೋರಿ ಸತ್ತ್ವವ ಮೆರಸು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೩ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲ್ಲಿ ಸೋತು ಬಿದ್ದು ಒಬ್ಬಂಟಿಯಾದರೂ, ಎಲ್ಲ ಸಮಯದಲ್ಲೂ ಧೈರ್ಯದ ಮಾರ್ಗವನ್ನೇ ಹುಡುಕಿ, ಹೋರಾಡು. ಸೋತೆನೆಂದು ಗೊಣಗುತ್ತ ಬಾಳುವ ಬಾಳಿಗೆ ಏನು ಬೆಲೆ? ಬದುಕಿನ ಹೋರಾಟವನ್ನು ಹೋರಾಡಿ ಬದುಕಿನ ಸತ್ವವನ್ನು ಅರಿತು ಮೆರೆಸಬೇಕು ಎಂದು ಬದುಕಿನ ಪರಿಯನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 574,
    english:
      "You must fight on with courage. Not by stubbornness. You must not fight just to continue a rivalry. There must be a higher calling. When you can find both detachment and compassion, then courage emerges. Fight showing off such a magnanimous courage. - Mankutimma",
    kannada:
      "ಹೋರು ಧೀರತೆಯಿಂದ, ಮೊಂಡುತನದಿಂ ಬೇಡ ।\nವೈರ ಹಗೆತನ ಬೇಡ, ಹಿರಿ ನಿಯಮವಿರಲಿ ॥\nವೈರಾಗ್ಯ ಕಾರುಣ್ಯ ಮೇಳನವೆ ಧೀರತನ ।\nಹೋರುದಾತ್ತತೆಯಿಂದ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೪ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲ್ಲಿ ಧೈರ್ಯದಿಂದ ಹೋರಾಡು. ಆದರೆ ಆ ಹೋರಾಟ ಮೊಂಡುತನದಿಂದಾಗಿರಬಾರದು. ದ್ವೇಷ ಹಗೆತನದಿಂದಾಗಿರಬಾರದು. ಆ ಹೋರಾಟಕ್ಕೆ ಒಂದು ನಿಯಮವಿರಬೇಕು. ವೈರಾಗ್ಯ ಮತ್ತು ಕರುಣೆ ಎರಡರ ಸಮ್ಮಿಲನವೇ ಧೀರತನ. ಅದು ಒಂದು ವ್ಯಕ್ತಿಯಲ್ಲಿ ಉದಾತ್ತತೆಯನ್ನು ತುಂಬುತ್ತದೆ. ಹಾಗಾಗಿ ಬದುಕಿನ ಹೋರಾಟ ಅಂತಹ ಉದಾತ್ತತೆಯಿಂದ ಆಗಬೇಕು ಎಂದು ಕಷ್ಟ ಕಾರ್ಪಣ್ಯಗಳ ಬದುಕನ್ನು ಹೇಗೆ ಎದುರಿಸಬೇಕು, ಬದುಕಿನ ಹೋರಾಟವನ್ನು ಹೇಗೆ ನಿಭಾಯಿಸಬೇಕು ಎಂದು ಸೂಕ್ತ ಸಲಹೆಗಳನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 575,
    english:
      "Every plaintiff approaches the court thinking he has a iron-clad case. On the day of the judgment, the best way to deal is to be like a witness - not bothering which party wins. A witness' job ends once he has told the complete truth under oath in the stands. One must accept the court's decision as it comes. He must lead the rest of the life like a bikshu (mendicant) who does not grieve/rejoice on previous events. In mind one must be as free as a bird. - Mankutimma",
    kannada:
      "ಕಕ್ಷಿಗಾರನವೊಲೇ ಪೋರುತ್ತೆ ನ್ಯಾಯಕ್ಕೆ ।\nಸಾಕ್ಷಿವೊಲಿರು ಕಡೆಗೆ ತೀರ್ಪಾಗುವಂದು ॥\nಭಿಕ್ಷುವೊಲು ಕಾಲ ಸವೆಯಿಸಿ ಲೋಕಯಾತ್ರೆಯಲಿ ।\nಪಕ್ಷಿವೊಲು ಮನದೊಳಿರು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೫ ॥",
    kannada_explanation:
      "ನ್ಯಾಯಾಲಯವನ್ನು ನ್ಯಾಯಕ್ಕಾಗಿ ಹತ್ತಿ ನ್ಯಾಯ ಸಿಕ್ಕುವವರೆಗೆ ಪ್ರತಿನಿತ್ಯ ಹೋರಾಡುವವನಂತೆ ನೀನೂ ಸಹ ಬದುಕಿನಲ್ಲಿ ಹೋರಾಡು. ಆದರೆ ಸಾಕ್ಷಿ ಹೇಳುವವನು ನ್ಯಾಯದ ತೀರ್ಪಿನಿಂದ ವಿಚಲಿತನಾಗುವುದಿರುವಂತೆ, ಬದುಕಿನಲ್ಲಿ ನಿರ್ಲಿಪ್ತನಾಗಿ ಸಾಕ್ಷಿಯಂತೆ ಇರು. ಬೌದ್ಧ ಬಿಕ್ಷು ಕಾಲನಡಿಗೆಯಲ್ಲೇ ಲೋಕಯಾತ್ರೆಮಾಡುವಂತೆ, ಮುಕ್ತವಾಗಿ ಆಗಸದಲ್ಲಿ ಹಾರಾಡುವ ಪಕ್ಷಿಯಂತೆ ನಾವೂ ಸಹ ಬದುಕಿನಲ್ಲಿ ನಡೆಯಬೇಕು. ನಿಷ್ಠೆಯಿಂದ ನಡೆಯಬೇಕು, ಕರ್ತವ್ಯವನ್ನು ಮಾಡಬೇಕು ಮತ್ತು ಸಾಫಲ್ಯ ಅಥವಾ ವೈಪಲ್ಯದಿಂದ ವಿಚಲಿತರಾಗದೆ ಮುಕ್ತವಾಗಿ ಬಾಳಬೇಕು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ಇತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 576,
    english:
      "Fortunate is a person who can do all these - know his strength, introspect critically his qualities, understand the subtleties of the situation, exhibit courage, act with in the perimeter of his powers (and duty) and still get the work done. - Mankutimma",
    kannada:
      "ತನ್ನ ಶಕ್ತಿಯನಳೆದು, ತನ್ನ ಗುಣಗಳ ಬಗೆದು ।\nಸನ್ನಿವೇಶದ ಸೂಕ್ಷ್ಮವರಿತು, ಧೃತಿದಳೆದು ॥\nತನ್ನ ಕರ್ತವ್ಯಪರಿಧಿಯ ಮೀರದುಜ್ಜುಗಿಸೆ ।\nಪುಣ್ಯಶಾಲಿಯ ಪಾಡು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೬ ॥",
    kannada_explanation:
      "ಒಬ್ಬ ವ್ಯಕ್ತಿ, ತನ್ನ ಗುಣಾವಗುಣಗಳಿಂದ ಕೂಡಿದ ”ಶಕ್ತಿ’ ಯನ್ನು ಅರಿತು, ಅವುಗಳಲ್ಲಿ ಗುಣಗಳನ್ನು ಮಾತ್ರ ತೋಡಿ ಹೊರತೆಗೆದು, ಸಮಯ ಸಂಧರ್ಭಗಳ ಸೂಕ್ಷ್ಮವನ್ನು ಅರಿತು. ತನ್ನ ಕಾರ್ಯವ್ಯಾಪ್ತಿಯನ್ನರಿತು, ಅದರ ಪರಿಧಿಯನ್ನು ಮೀರದೆ ತನ್ನ ಕರ್ತವ್ಯವನ್ನು ಮಾಡುವುದು ಪುಣ್ಯಶಾಲಿಯ ಪಾಡು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಹಾಗೆ ಕಾರ್ಯಪ್ರವೃತ್ತನಾಗಲಾದರೆ ಅಂತಹವನೇ ಪುಣ್ಯಶಾಲಿ ಎನ್ನುವುದೇ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 577,
    english:
      "When a log falls over a spark, it kills the spark. But if the same spark grows into a fire, it consumes hundreds of such logs. The spark has the potential to grow big. When such talent is still nascent in you, you should not undertake huge tasks. You should wait until the talent in you ripens and gets stronger before you take on a mighty opponent. - Mankutimma",
    kannada:
      "ಕಿಡಿ ಸಣ್ಣದನು ಮೇಲೆಬಿದ್ದ ಕೊರಡಾರಿಪುದು ।\nಸುಡುವುದಾ ಕಿಡಿಯುರಿಯೆ ನೂರು ಕೊರಡುಗಳ ॥\nಉಡುಗಿ ನಿನ್ನಾತ್ಮವಿರೆ ಬಿಡು ಹೆಗ್ಗಲಸಗಳನು ।\nತೊಡಗಾತ್ಮ ಬಲಿತಂದು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೭ ॥",
    kannada_explanation:
      "ಒಂದು ಸಣ್ಣ ಬೆಂಕಿಯ ಕಿಡಿಯ ಮೇಲೆ ಮರದ ಒಂದು ದಪ್ಪ ತುಂಡು ಬಿದ್ದರೆ ಆ ಬೆಂಕಿಯ ಕಿಡಿ ಆರಿಹೊಗುತ್ತದೆ. ಆದರೆ ಆ ಕಿಡಿ ಆರದೆ ಹಾಗೆ ಉರಿದರೆ ಅಂತಹ ನೂರಾರು ಮರದ ತುಂಡುಗಳನ್ನು ಸುಟ್ಟು ಕರಕಲಾಗಿಸುವ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಹಾಗಾಗಿ ನಿನ್ನ ಆತ್ಮ ಶಕ್ತಿ, ಧೈರ್ಯ ಎಲ್ಲವೂ ಅಡಗಿರುವಾಗ ಸುಮ್ಮನಿರು ಮತ್ತು ನಿನಗೆ ಶಕ್ತಿ ಬಲವಂದು ಆತ್ಮ ಸ್ಥೈರ್ಯ ಕೂಡಿದಾಗ, ಬೃಹತ್ಕಾರ್ಯಗಳನ್ನು ಕೈಗೊಳ್ಳು ಎಂದು ಒಂದು ವಿವೇಚನೆಯ ಮಾತನ್ನು ನಮಗೆ ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 578,
    english:
      "Those who are aiming to move the mountain, please listen up. Is it achievable? Will the rod (to be used with the fulcrum) itself not get bent? If not, you may break your arm while being immersed in your efforts. Please take a break and think what you are aiming for is just.  - Mankutimma",
    kannada:
      "ಬೆಟ್ಟಕ್ಕೆ ಸನ್ನೆಹಾಕಿರುವ ಮಹದಾಶಿಗನೆ ।\nಗಟ್ಟಿಯೇ? ಸೊಟ್ಟಾಗದೇ ಸನ್ನೆಗೋಲು? ॥\nರಟ್ಟೆಯೇ ಮುರಿದೀತು ಮೈಮರೆತ ಸಾಹಸದಿ ।\nಎಷ್ಟುಚಿತವೋ ನೋಡು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೮ ॥",
    kannada_explanation:
      "ಬೆಟ್ಟವನ್ನೇ ಎತ್ತಿಡಲು ಸನ್ನೆ ಕೋಲನ್ನು ಹಾಕಿರುವ, ಹೇ! ಅತಿ ಸಾಹಸಿಯೇ, ಮೊದಲು ನಿನ್ನ ಸನ್ನೆ ಕೋಲು ಗಟ್ಟಿಯೇ ಎಂದು ನೋಡಿಕೋ, ಇಲ್ಲದಿದ್ದರೆ ಅದು ಬೆಟ್ಟದ ಭಾರದಿ ಸೊಟ್ಟಗಾಗುವುದು. ಬೆಟ್ಟ ಮತ್ತು ಕೋಲು ಎರಡೂ ಗಟ್ಟಿಯಾಗಿದ್ದರೆ ಮೈಮರೆತ ಅತಿ ಸಾಹಸದಿ ನಿನ್ನ ಬುಜವೇ ಮುರಿದೀತು. ಹಾಗಾಗಿ ನಿನ್ನ ಶಕ್ತಿಯ ಔಚಿತ್ಯವನ್ನು ನೋಡಿಕೊಂಡು ಕೆಲಸವನ್ನು ಮಾಡು ಎಂದು ನಮಗೆ ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 579,
    english:
      "You must know your strengths (the size of your back) and endure the weight that fate puts on it. You must leave it to providence to remove some of your burden or put more. If you falter while carrying the weight around, then treat each one as a learning for the soul. It is a fair deal. - Mankutimma",
    kannada:
      "ಬೆನ್ನಿನಗಲವನಳೆದು ಹೊರಗೆ ನೀನದನೊಡ್ಡು ।\nತನ್ನದೆನುವುದನು ವಿಧಿ ತಾನೆ ಕೊಳಲಿ ಬಿಡು ॥\nಬನ್ನ ನಿನಗೊದಗಲದನಾತ್ಮ ಶಿಕ್ಷಣವೆನ್ನು ।\nಮಾನ್ಯದೊಪ್ಪಂದವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೫೭೯ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲ್ಲಿ ಜೀವನದ ದೈನಂದಿನ ಕಾರ್ಯಕೆಲಸಗಳಲ್ಲಿ, ಎಷ್ಟು ಭಾರವನ್ನು ನಿನಗೆ ಹೊರಲು ಆಗುವುದೋ, ಅಷ್ಟನ್ನು ಮಾತ್ರ ಹೊತ್ತುಕೋ!! ನಿನ್ನ ಪೂರ್ವ ಕರ್ಮದನುಸಾರ ನಿನ್ನಿಂದ ಏನೇನು ಆಗಬೇಕೋ ಅದನ್ನೆಲ್ಲ ಆ ವಿಧಿ ಮಾಡಿಸಿಕೊಳ್ಳಲಿ ಬಿಡು. ಹಾಗೆ ಕರ್ಮ ಮಾಡುವಾಗ ಭಂಗವುಂಟಾದರೆ ಅದನ್ನು ಬದುಕಿನಲ್ಲಿ ನಿನಗೆ ಸಿಗುವ ಶಿಕ್ಷಣವೆಂದು ತಿಳಿ. ಅದೇ ಸರಿಯಾದ ಒಡಂಬಡಿಕೆ(compromise) ಎಂದು ಬದುಕನ್ನು ಬದುಕುವ ಮತ್ತೊಂದು ಪರಿಯನ್ನು ಉಪದೇಶಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 580,
    english:
      "One can not wear the costumes of a king and forget the manly moustache. One can not also flaunt a moustache when he is playing the part of a beggar or a brahmin. Everybody in this world has a role to play. We have to act according to our role as actors in a play. Just like we change clothes based on seasons, we should change based on our roles. - Mankutimma",
    kannada:
      "ದೊರೆಯ ವೇಷವ ಧರಿಸಿ ಮರೆಯುವೆಯ ಮೀಸೆಯನು? ।\nತಿರುಕಹಾರುವನಾಗಿ ಮೀಸೆ ತಿರಿಚುವೆಯ? ॥\nಇರುವುದವನವನಿಗವನವನ ತಾಣದ ಧರ್ಮ ।\nಅರಿವೆ ಋತುಗತಿಯಂತೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೦ ॥",
    kannada_explanation:
      "ನಾಟಕದಲ್ಲಿ ರಾಜನ ಪಾತ್ರ ಧರಿಸಿ ಮೀಸೆಯನ್ನು ಮರೆಯಬಹುದೇ? ಭಿಕ್ಷಾರ್ಥಿಯಾದ ಬಡ ಬ್ರಾಹ್ಮಣನ ವೇಷ ಧರಿಸಿದಪ್ಪ ದಪ್ಪ ಮೀಸೆಯನ್ನು ಇಟ್ಟುಕೊಂಡರೆ ಬಿಕ್ಷೆ ಸಿಕ್ಕೀತೆ?. ಜಗತ್ತಿನಲ್ಲಿರುವ ಪ್ರತಿಯೊಬ್ಬನಿಗೂ ಅವನವನದೇ ಆದಂತ ಒಂದು ಪಾತ್ರವಿರುತ್ತದೆ ಮತ್ತು ಆ ಪಾತ್ರಕ್ಕೊಂದು ಧರ್ಮವಿರುತ್ತದೆ. ಋತು ಬದಲಾದಂತೆ ನಮ್ಮ ಉಡುಗೆ ತೊಡುಗೆಗಳೂ ಬದಲಾಗುವುದಿಲ್ಲವೇ? ಹಾಗೆ ಸಮಯ ಸಂಧರ್ಭದ ಔಚಿತ್ಯಕ್ಕನುಸಾರವಾಗಿ ನಮ್ಮ ವೇಷ, ನಡೆ ನುಡಿ ಇರಬೇಕು ಎನ್ನವುದೇ ಈ ಮುಕ್ತಕದ ಹೂರಣ",
  },
  {
    number: 581,
    english:
      "What kind of devotion is this? You say everything belongs to God. All things exist only for Him. Yes, you don't want to leave any matter entirely up to Him. You get restless when ever His decision is even slightly different than yours. - Mankutimma",
    kannada:
      "ದೇವರದಿದೆಲ್ಲ  ದೇವರಿಗೆಲ್ಲವೆಂದೊರಲು-।\nತಾವುದನುಮವನ ನಿರ್ಣಯಕೆ ಬಿಡದೆಯೆ ತಾಂ ॥\nದಾವನ್ತ ಬಡುತ ತನ್ನಿಚ್ಛೆಯನೆ ಘೋಷಿಸುವ ।\nಭಾವವೆಂತಹ ಭಕುತಿ?  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತೆಲ್ಲವೂ ಆ ದೇವರದು ಮತ್ತು ಇಲ್ಲಿರುವುದೆಲ್ಲವೂ ಆ ದೇವರಿಗಾಗಿಯೇ ಇದೆ ಎಂದು ವಟಗುಟ್ಟುತ್ತಾ ಯಾವುದನ್ನೂ ಅವನ ನಿರ್ಣಯಕ್ಕೆ ಬಿಡದೆ, ತಾನೇ ಎಲ್ಲದಕ್ಕೂ ದಾವಂತಪಡುತ್ತಾ, ತನ್ನದೇ ಆದ ನಿರ್ಣಯಗಳನ್ನು ಸದಾಕಾಲ ಘೋಷಿಸುತ್ತಾ ಇರುವುದು ಯಾವ ರೀತಿಯ ಭಕ್ತಿ ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 582,
    english:
      "If you keep cribbing - this is not right, that is not right; it is same as spreading a layer of thorns on your bed. Can you sleep peacefully? What is wrong is something in this world is slightly crooked? Or something is bigger than its ideal size? Life is a giant approximation. Just get used to it. - Mankutimma",
    kannada:
      "ಸರಿಯಾಗಲಿಲ್ಲವದು ಸರಿಯಿದಲ್ಲವೆನುತ್ತ ।\nಹರಡಿಕೊಳಬೇಡ ಮುಳ್ಳನು ಹಾಸಿಗೆಯಲಿ ॥\nಕೊರೆಯಾದೊಡೇನೊಂದು?  ನೆರೆದೊಡೇನಿನ್ನೊಂದು?।\nಒರಟು ಕೆಲಸವೊ ಬದುಕು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೨ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲ್ಲಿ ಮಾಡಿದ ಕೆಲಸ ಸರಿಯಾಗಲಿಲ್ಲ ಎಂದೋ ಅಥವಾ ಸಿಕ್ಕದ್ದು ಸರಿಯಿಲ್ಲ ಎಂದೋ ಕೊರಗುತ್ತಾ, ಬದುಕಿನ ಹಾಸಿಗೆಯಲ್ಲಿ ಮುಳ್ಳನ್ನು ಹರಡಿಕೊಳ್ಳಬೇಡ. ಯಾವುದೇ ಒಂದು ಕಡಿಮೆಯಾದರೂ ಅಥವಾ ಹೆಚ್ಚಾದರೂ ಏನೂ ವ್ಯತ್ಯಾಸವಾಗುವುದಿಲ್ಲ. ಆದರೂ ಇದನ್ನೇ ಕುರಿತು ತಲೆ ಕೆಡಿಸಿಕೊಂಡು ಬದುಕುವುದು ಒಂದು ಒರಟು ಕೆಲಸ ಎಂದು ಬದುಕಿನ ಪರಿಯ ಮತ್ತೊಂದು ಆಯಾಮವನ್ನು ನಮಗೆ ತೋರುತ್ತಾ ಶಾಂತಿಯ ಮತ್ತು ನೆಮ್ಮದಿಯ ಬದುಕಿಗೆ ಒಂದು ದಾರಿಯನ್ನೂ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 583,
    english:
      "Are you one of the Gods that is in charge of an expanse of the universe (one of eight directions)? Are you the Adi Shesha who is holding up the universe on his shoulders? Then why are you complaining that your load is too much? No one in this world needs to hear you and feel pity. Everyone has their own burden to bear. What ever order is present in this world is just fine. - Mankutimma",
    kannada:
      "ಅಷ್ಟದಿಗ್ಗಜವೆ ನೀನ್? ಆದಿಶೇಷನೆ ನೀನು?।\nಕಷ್ಟಭಾರವಿದೆಂದು ನಿಟ್ಟುಸಿರ ಬಿಡುವೆ! ॥\nನಿಷ್ಠುರದ ನಿನ್ನ ಕನಿಕರ ಜಗಕೆ ಬೇಕಿಲ್ಲ ।\nಎಷ್ಟಾದರಷ್ಟೆ ಸರಿ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೩ ॥",
    kannada_explanation:
      'ಬದುಕಿನ ಬವಣೆಯನ್ನು ಪಡುವಾಗ " ಅಯ್ಯೋ ಇದು ಕಷ್ಟ ಮತ್ತು ಇದು ಭಾರ" ಎಂದು ನಿಟ್ಟುಸಿರು ಬಿಡುವೆಯಲ್ಲಾ, ನೀನೇನು ಎಂಟು ದಿಕ್ಕುಗಳನ್ನು ಹೊತ್ತ ಆನೆಗಳಷ್ಟು ಭಾರವನ್ನೂ ಹೊತ್ತಿಲ್ಲ ಅಥವಾ ಆ ಆನೆಗಳನ್ನು ಹೊತ್ತ ಆದಿಶೇಷನಷ್ಟು ಭಾರವನ್ನೂ ಹೊತ್ತಿಲ್ಲವಲ್ಲ. ಸುಮ್ಮನೆ " ನಾನು ಬಹಳ ಕಷ್ಟಪಡುತ್ತಿದ್ದೇನೆ " ಎನ್ನುತ್ತಾ ಅನ್ಯರ ಅನುಕಂಪವನ್ನು ಆಕರ್ಷಿಸುವ ನಿನ್ನನ್ನು ಯಾರೂ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಗಮನಿಸುವುದಿಲ್ಲ. ನಿನಗೆ ಎಷ್ಟು ಹೊರಲಾದರೆ ಅಷ್ಟು ಹೊತ್ತುಕೋ. ಸುಮ್ಮನೆ ಅಲವತ್ತುಕೊಳ್ಳಬೇಡ ಎಂದು ಕಿವಿಮಾತನ್ನು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 584,
    english:
      "The creator has not given you the responsibility to run the entire world. He has however given you your set of duties. There is no escaping from that. Perform as many duties as possible and let the rest to be dealt by Him. He will not like a person who believes in Him partially (conditionally). - Mankutimma",
    kannada:
      "ಎಲ್ಲಕಂ ನಿನಗಿಲ್ಲ ಕರ್ತವ್ಯದಧಿಕಾರ ।\nಇಲ್ಲದೆಯುಮಿಲ್ಲ ನಿನಗಾ ಹೊರೆಯ ಪಾಲು ॥\nಸಲ್ಲಿಸಾದನಿತ, ಮಿಕ್ಕುದು ಪಾಲಿಗನ ಪಾಡು।\nಒಲ್ಲನವನ್ ಅರೆನಚ್ಚ - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೪ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಎಲ್ಲ ಕೆಲಸದ ಹೊರೆಯನ್ನು ಹೊರುವ ಅಧಿಕಾರ ನಿನಗಿಲ್ಲ. ಆದರೆ ನಿನಗೆ ಹೊರೆಯೇ ಇಲ್ಲವೆಂದಲ್ಲ!!!! ನೀನು ಮಾಡಲೇ ಬೇಕಾದ ಕರ್ತವ್ಯದ ಹೊರೆ ನಿನಗಿದೆ. ನಿನ್ನ ಕೈಲಾದಷ್ಟನ್ನು ನಿಷ್ಠೆಯಿಂದ ಮಾಡು ಮತ್ತು ಮಿಕ್ಕದ್ದನ್ನು ನಿನ್ನನ್ನು ಪಾಲಿಸುವ ಆ ದೈವದಲ್ಲಿ ದೃಢ ನಂಬಿಕೆ ಇಟ್ಟು ಬಿಟ್ಟುಬಿಡು. ನಂಬಿಕೆ ಪೂರ್ಣವಾಗಿರಲಿ. ಏಕೆಂದರೆ ಅವನು ಅರೆಬರೆ ನಂಬಿಕೆಯನ್ನು ಒಪ್ಪುವುದಿಲ್ಲ.",
  },
  {
    number: 585,
    english:
      "Don't entertain such thoughts. What is the use of struggling so much? Why should I fight so much in this world? Any way providence is not going to make it easier for me. Neither will it let go of anything I owe. The whole world is bad. There is a no solid foundation on which life is built (to rely on). The whole thing is nothing but colossal confusion. - Mankutimma",
    kannada:
      "ಫಲವೇನು ಹೆಣಗಾಡಿ ಹೋರಾಡಿ ಧರೆಯೊಳಗೆ? ।\nಸಲಿಸದೊಂದನುಮೊಂದನುಂ ದೈವ ಬಿಡದು ॥\nಹೊಲಸೆಲ್ಲವೆಲ್ಲ ಪಾಳ್, ಬಾಳ್ಗೆ ತಳಹದಿಯಿಲ್ಲ ।\nಗಲಿಬಿಲಿಯಿದೆನಬೇಡ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೫ ॥",
    kannada_explanation:
      'ಆ ದೈವ ತಾನು ನಮ್ಮಿಂದ ಏನನ್ನು ಮಾಡಿಸಬೇಕೆಂದಿದೆಯೋ ಅದನ್ನು ಮಾಡಿಸದೆ ಬಿಡದು, ನಾವು ‘ ನಾನು ‘ ಮಾಡುತ್ತೇನೆ ಎಂದು ಎಷ್ಟು ಹೋರಾಡಿ, ಹೆಣಗಾಡಿದರೂ ಏನೂ ಪ್ರಯೋಜನವಿಲ್ಲ. ಹಾಗಿರುವಾಗ ನಮ್ಮ ಮತ್ತು ಈ ದೈವ ಅಥವಾ ವಿಧಿಯ ನಡುವಿನ ಹೋರಾಟದಲ್ಲಿ ಸೋತು, ಒಂದು ಅಯೋಮಯ ಸ್ಥಿತಿಯಲ್ಲಿ " ಛೆ! ಈ ಬದುಕಿನಲ್ಲಿ ನಾವಂದುಕೊಂಡದ್ದನ್ನು ಮಾಡಲಾಗುವುದೇ ಇಲ್ಲ. ಈ ಬಾಳಿಗೆ ತಳಹದಿಯಿಲ್ಲ, ಈ ಬಾಳೆಲ್ಲ ಹೊಲಸು" ಎಂದು ಹೇಳಬೇಡ ಎಂದು ನಮ್ಮ ಬದುಕು ಮತ್ತು ದೈವದ ನಡುವಿನ ಸಮನ್ವಯದ ಅವಶ್ಯಕತೆಯನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 586,
    english:
      "The red faced fate is burning down everything (I do). Death is destroying every thing everywhere. Situation being so, the only result of all our struggle is just the the one handful of food. Right? This life is so hollow and has no greater meaning. - Mankutimma",
    kannada:
      "ಕೆಂಡಮುಸುಡಿಯ ದೈವವೆಲ್ಲವನು ದಹಿಸುತಿರೆ ।\nದಂಡಧರನತ್ತಲ್ಲೆಲ್ಲವನು ಕೆಡಹುತಿರೆ ॥\nಮೊಂಡುಘಾಸಿಯ ಲಾಭ ಪಿಂಡಮಾತ್ರವು ತಾನೆ? ।\nಭಂಡಬಾಳಲೆ ನಮದು?  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೬ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಪ್ರತಿ ಜೀತಿಯನ್ನೂ ಆ ಯಮನು ಕೆಡವಿ ಬೀಳಿಸುತ್ತಿರುವಾಗ ಮತ್ತು ಹಾಗೆ ಬಿದ್ದ ಪ್ರತಿಯೊಂದನ್ನೂ ಅಗ್ನಿದೇವನು ದಹಿಸಿಬೂದಿ ಮಾಡುತ್ತಿರುವಾಗ ಜಗತ್ತಿನಲ್ಲಿ ಬದುಕುವಾಗ ಮೊಂಡುತನಮಾಡಿ, ಪೆಟ್ಟು ತಿಂದು ಕೇವಲ ತುತ್ತು ಹಿಟ್ಟಿಗಾಗಿ ಹೋರಾಡುವ ನಮ್ಮದು ಕೇವಲ ಬಂಡ ಬಾಳು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 587,
    english:
      "Yes, life is meaningless for any one if it ends abruptly right now. A fruit has a bitter taste if its life ended when it was still very young. But as it ripens it sweetens. Our lives are very similar. They get a greater meaning as we get old (and ripe with wisdom). - Mankutimma",
    kannada:
      "ಅಹುದು ಬಾಳ್ ಭಂಡತನವಿಹದಿ ಬಾಳ್ ಮುಗಿಯುವೊಡೆ ।\nಕಹಿಯೊಗರು ಕಾಯಿ, ಮಿಡಿತನದೊಳದು ಮುಗಿಯೆ ॥\nಸಿಹಿಯಹುದು ಕಾಯಿ ಹಣ್ಣಾಗೆ, ಜೀವಿತವಂತು ।\nಮಹಿಮೆಗೊಳುವುದು ಮಾಗೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೭ ॥",
    kannada_explanation:
      "ಒಂದು ಮರದಲ್ಲಿ ಬಿಟ್ಟ ಕಾಯಿ ಮಾಗದೆ, ಹಣ್ಣೇ ಆಗದೆ ಉದುರಿಹೋದರೆ ಅದು ಮಧ್ಯಂತರವಾಗಿ ಮುಗಿದುಹೋದ ಬಾಳಾಗುತ್ತದೆ. ಪರಿಪೂರ್ಣ ಸಾರ್ಥಕ ಬದುಕಿಗೆ ಅದು ಮಾಗಿ ಹಣ್ಣಾದರೆ, ಅದರೊಳಗೆ ಸವಿ ಸೇರಿ, ಸಿಹಿಯಾಗುತ್ತದೆ. ನಮ್ಮ ಜೀವಿತವೂ ಸಹಾ ಹಾಗೆಯೇ, ಬಂಡತನದ ಬಾಳಲ್ಲೇ ಅಂತ್ಯವಾಗದೆ, ಅನುಭವಿಸಿ, ಕಲಿತು, ಪಕ್ವವಾಗಬೇಕು, ಎಂದು ಬಾಳಿನ ಸಾರ್ಥಕ್ಯಕ್ಕೊಂದು ಮಾರ್ಗವನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 588,
    english:
      "If a wrestler loses a fight can you say that all his practice (of body building and wrestling moves) in the gym are all waste? Touch his body and see. It is as hard as iron. That physique is what the gym made him to be - and is worth all the effort.  - Mankutimma",
    kannada:
      "ಜಟ್ಟಿ ಕಾಳಗದಿ ಗೆಲ್ಲದೊಡೆ ಗರಡಿಯ ಸಾಮು ।\nಪಟ್ಟುವರಸೆಗಳೆಲ್ಲ ವಿಫಲವೆನ್ನುವೆಯೇಂ? ॥\nಮುಟ್ಟಿ ನೋಡವನ ಮೈಕಟ್ಟು ಕಬ್ಬಿಣ ಗಟ್ಟಿ  ।\nಗಟ್ಟಿತನ ಗರಡಿ ಫಲ - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೮ ॥",
    kannada_explanation:
      "ಜಟ್ಟಿಯಾದವನು ಮಲ್ಲ ಯುದ್ದದಲ್ಲಿ ಸೋತರೆ, ಅವನು ಮಲ್ಲನಾಗುವತನಕ ಮಾಡಿದ ಸಾಮು ಮತ್ತು ಅಭ್ಯಾಸಗಳು ಮತ್ತು ಕಲಿತ ಪಟ್ಟು ವರಸೆಗಳೆಲ್ಲಾ ವ್ಯರ್ಥವೆನ್ನುತ್ತೀಯೇನು? ಅವನು ಸೋತಿದ್ದರೂ ಅವನನ್ನು ಒಮ್ಮೆ ಮುಟ್ಟಿ ನೋಡು ಅವನ ಮೈ ಕಬ್ಬಿಣದಂತೆ ಗಟ್ಟಿಯಾಗಿರುತ್ತದೆ. ಅವನಿಗೆ ಆ ಗಟ್ಟಿತನ ಬಂದದ್ದು ಆ ಗರಡಿಯ ಸಾಮು ಮತ್ತು ವ್ಯಾಯಾಮದಿಂದ ಅಲ್ಲವೇ? ಹಾಗಾಗಿ ಸೋಲು ಗೆಲುವಲ್ಲ, ಗಟ್ಟಿತನವೇ ಗರಡಿಯ ಸಾಮಿನ ಮತ್ತು ಅಭ್ಯಾಸದ ಫಲ, ಎಂದು ಒಂದು ಉಪಮೆಯ ಮೂಲಕ ನಾವು ಬದುಕಿನಲ್ಲಿ ಸೋಲಬಹುದು ಅಥವಾ ಗೆಲ್ಲಬಹುದು ಆದರೆ ನಾವು ಪಕ್ವವಾಗುವುದೇ ನಮ್ಮ ಜೀವನದ ಫಲ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 589,
    english:
      "Life puts you through a series of exams. It makes you suffer defeat many times. These are to be taken as exercises of mind and intellect. The wounds on the mind and body should be considered as scars of victory. Only when a flower wilts, the fruit makes it its home. For good things to happen, we will have go through rough times. - Mankutimma",
    kannada:
      "ಪರಿ ಪರಿ ಪರೀಕ್ಷೆಗಳು, ಪರಿಭವದ ಶಿಕ್ಷೆಗಳು ।\nಗರಡಿಯ ವ್ಯಾಯಾಮ ಮನಬುದ್ಧಿಗಳಿಗೆ ॥\nಪುರುಷತೆಗೆ ಪೆಟ್ಟುಗಳಿನಾದ ಗಂತಿಯೆ ವಿಜಯ ।\nಬಿರಿದ ನನೆ ಫಲಕೆ ಮನೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೮೯ ॥",
    kannada_explanation:
      "ಗರಡಿಯ ಮನೆಯಲ್ಲಿ ಜಟ್ಟಿಗೆ ವ್ಯಾಯಾಮವಾದಂತೆ, ನಮಗೆ ಬದುಕಿನಲ್ಲಿ ಪರಿ ಪರಿಯಾದ ಪರೀಕ್ಷೆಗಳು, ಅ ಪರೀಕ್ಷೆಗಳಿಂದಾಗುವ ಸೋಲು, ಸೋಲಿನಿಂದಾಗಿ ಅನುಭವಿಸಬೇಕಾದ ವ್ಯಾಕುಲತೆಯ ಶಿಕ್ಷೆ, ಇವುಗಳೆಲ್ಲ ನಮ್ಮ ಮನಸ್ಸು ಬುದ್ಧಿಗಳಿಗೆ ಆಗುವ ವ್ಯಾಯಾಮದಂತೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಗಿಡದಲ್ಲಿನ ಒಂದು ಹೂ ಅರಳಿನಿಂತರೆ ಅದು ಮುಂಬರುವ ಹಣ್ಣಿಗೆ ನಾಂದಿಯಾದಂತೆ, ಬದುಕಿನಲ್ಲಿ ನಮಗೆ ಸಿಗುವ ಈ ಪೆಟ್ಟುಗಳಿಂದಲೇ ಮನಸ್ಸು ಬುದ್ಧಿಗಳು ಪಕ್ವವಾಗಿ, ಬಾಳಿನಲ್ಲಿ ನಮಗೆ ಜಯ ಸಿಗುತ್ತದೆ, ಎಂದು ನಮ್ಮ ಅನುಭವಗಳಿಂದ ಸಿಗುವ ಫಲದ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 590,
    english:
      "A man is as independent of this world as his hands are independent of him. They  have a perimeter beyond which they can not reach. With in the limits, they can turn, fold, extend or spring up. But, they cannot leave the body and fly. - Mankutimma",
    kannada:
      "ಪುರುಷನ ಸ್ವಾತಂತ್ರ್ಯವವನ ತೋಳ್ಗಿರುವಷ್ಟು  ।\nಪರಿಧಿಯೊಂದರೊಳದರ ಯತ್ನ ಕಡೆಯುಂಟು ॥\nತಿರುಗುವುದು ಮಡಿಸುವುದು ನಿಗುರುವುದು ನೀಳುವುದು ।\nತೊರೆದು ಹಾರದು ತೋಳು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೦ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಸ್ವಾತಂತ್ರ್ಯ, ಅವನ ಬಾಹುಗಳನ್ನು ಎಷ್ಟು ತಿರುಗಬಹುದೋ, ಎಷ್ಟು ಮಡಿಸಬಹುದೋ, ಎಷ್ಟು ನೆಟ್ಟಗಾಗಿಸಬಹುದೋ, ಎಷ್ಟು ನೀಟಬಹುದೋ, ಅಷ್ಟು. ಬಾಹುಗಳು ದೇಹಕ್ಕಂಟಿಕೊಂಡಿರುವುದರಿಂದ, ಅವನ ಬಾಹುಗಳ ಕಾರ್ಯ ಬಾಹುಳ್ಯಕ್ಕೆ ಒಂದು ಮಿತಿ ಇದೆ. ಆ ಬಾಹುಗಳು ದೇಹದಿಂದ ಬೇರ್ಪಟ್ಟು ಹಾರಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾ, ಪ್ರತೀ ಮಾನವನ ಕಾರ್ಯಕ್ಷಮತೆ ಅಥವಾ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಒಂದು ಮಿತಿ ಇರುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 591,
    english:
      "Life is like a battle. If you have the right perspective, it is a fun game. There is no beginning or an end to this game; just beautiful scenes. There is no result or final tally - hence no winners or losers. Having fun while playing is the only important thing. - Mankutimma",
    kannada:
      "ಬದುಕು ಕದನದ ತೆರನೆ; ನೋಡೆ ಲೀಲೆ ಕದನ ।\nಮೊದಲುಮುಗಿವುಗಳಿರದ ಚಿತ್ರಲೀಲೆಯದು ॥\nಇದರೊಳೆಂದಿಗುಮಿರದು ಸೋಲ್ಗೆಲುವು ಕಡೆಯೆಣಿಕೆ ।\nಸದರದಾಟವೆ ಮುಖ್ಯ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೧ ॥",
    kannada_explanation:
      "ಜೀವನ ಒಂದು ಹೋರಾಟದಂತೆ ಅಥವಾ ಯುದ್ಧದಂತೆ. ಆದರೆ ಅದನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ನೋಡಿದರೆ ಪರಮಾತ್ಮನು ತನ್ನ ಸಂತೋಷಕ್ಕಾಗಿ ಸೃಷ್ಟಿಸಿದ ಪ್ರಕೃತಿ ಮತ್ತು ತನ್ನ ಶಕ್ತಿ ಮತ್ತು ಪ್ರಕೃತಿಗಳ ಸಮ್ಮಿಲನದಿಂದ ಸೃಷ್ಟಿಸಿಕೊಂಡ, ಕೋಟ್ಯಾಂತರ ರೂಪಗಳನ್ನು ಹೊತ್ತ ಜೀವಿಗಳ ‘ಜೀವನ’ ವೆನ್ನುವ, ಲೀಲಾ ವಿನೋದವೆಂದು ನಮಗೆ ತಿಳಿಯುತ್ತದೆ. ಇದೊಂದು ಅಂತ್ಯವಿಲ್ಲದ ಜಗನ್ನಾಟಕದ ಹೋರಾಟ. ಈ ಹೋರಾಟದಲ್ಲಿ ಸೋಲು ಅಥವಾ ಗೆಲುವು ಎಂಬುದೇ ಇಲ್ಲ. ಸರಸದಿಂದ ಬದುಕುವುದೇ ಇಲ್ಲಿ ಮುಖ್ಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 592,
    english:
      "In the battle of human life (everyone's life) Fate is on one side. The wisdom, love and affection acquired over the lifetime is on the other side. When you are going about progressing in life, retaining the love towards others is itself a pleasure. Showing off love and there by being human is itself victory. - Mankutimma",
    kannada:
      "ನರಜೀವನದ ರಣದಿ ವಿಧಿಯ ಬಲವೊಂದು ಕಡೆ ।\nಚಿರವಿವೇಕದಿ ಬೆಳೆದ ನಲುಮೆಯೊಂದು ಕಡೆ ॥\nಉರುಬುತಿರೆ ಪುರುಷಂಗೆ ನಲುಮೆಯುಳಿತವೆ ಗೆಲವು।\nಪುರುಷತನವೇ ವಿಜಯ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೨ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಬದುಕಿನ ಹೋರಾಟದಲ್ಲಿ ವಿಧಿಯ ಬಲವು ಒಂದು ಕಡೆ ಇವನನ್ನು ಸೆಳೆಯುತ್ತಿದ್ದರೆ, ಮನುಷ್ಯ ತನ್ನ ಸಾಮರ್ಥ್ಯದಿಂದ ಬೆಳೆಸಿಕೊಂಡ ವಿವೇಕವು ಇವನಿಗೆ ಬೇರೆ ದಾರಿಯನ್ನು ತೋರುತ್ತಿರುತ್ತದೆ. ಹೀಗೆ ಇವನ ಹೋರಾಟದ ಓಟದಲ್ಲಿ ಅಥವಾ ಇವನ ಬದುಕಿನಲ್ಲಿ ಇವನು ಕಡೆಗೆ ತನ್ನ ಜೀವದಲ್ಲಿ ಸತ್ವವನ್ನು ಬೆಳೆಸಿಕೊಂಡು ಉಳಿಸಿಕೊಂಡರೆ ಅವನಿಗೆ ನಲುಮೆ ಎಂದರೆ ಸಂತೋಷವನ್ನು ಪಡೆದುಕೊಂಡರೆ ಅದೇ ಅವನಿಗೆ ಜಯ ಸಿಕ್ಕಂತೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 593,
    english:
      "Don't entertain such thoughts - I am dead. I am defeated. I have no more life (strength) left in me. Death is merely a low-tide at sea. High tide will come again tomorrow. Maintain hope. - Mankutimma\n\n[Translator's note: Perhaps DVG is talking about death of someone we completely rely on. May not be one's own death. But in the grand schema of the perpetual universe and rebirths, the same could be valid for one's own death as well.]",
    kannada:
      "ಸತ್ತೆನೆಂದೆನಬೇಡ; ಸೋತೆನೆಂದೆನಬೇಡ ।\nಬತ್ತಿತೆನ್ನೊಳು ಸತ್ತ್ವದೂಟೆಯೆನಬೇಡ ॥\nಮೃತ್ಯುವೆನ್ನುವುದೊಂದು ತೆರೆಯಿಳಿತ; ತೆರೆಯೇರು ।\nಮತ್ತೆ ತೋರ್ಪುದು ನಾಳೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೩ ॥",
    kannada_explanation:
      '"ನಾನು ಸೋತೆ, ನನ್ನಲ್ಲಿ ಇನ್ನು ಶಕ್ತಿಯಿಲ್ಲ, ನನ್ನಲ್ಲಿ ಶಕ್ತಿಯ ಒರತೆ ಬತ್ತಿ ಹೋಗಿದೆ, ಹಾಗಾಗಿ ನಾನು ಸತ್ತೆನೆಂದೇ ತಿಳಿಯುತ್ತೇನೆ" ಎಂದು ಬದುಕಿನ ಹೋರಾಟದಲ್ಲಿ ಹತಾಶೆಯನ್ನು ತಾಳಬೇಡ. ಸಾವು ಎನ್ನುವುದು ಕಡಲ ಮೇಲಿನ ಅಲೆಯಂತೆ, ಒಮ್ಮೆ ಮೇಲೆದ್ದರೆ ಒಮ್ಮೆ ಇಳಿಯುತ್ತದೆ ಮತ್ತು ಮತ್ತೆ ಮೇಲೇಳುತ್ತದೆ. ಹಾಗಾಗಿ ನಿರಾಶೆ ಹತಾಶೆಗಳಿಗೆ ಬಲಿಯಾಗಬೇಡ ಎಂಬ ಬುದ್ಧಿವಾದವನ್ನು ನೀಡಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 594,
    english:
      "Life is like a shop that runs non-stop. Our job is to keep the account books. Since it is a never ending story, how can we know if we are making profit or loss. We can only know short-term results at the end of each day - but in the long run they may be exactly reverse. So, stop running behind short-term profits. - Mankutimma",
    kannada:
      "ಬಿಡುವಿಲ್ಲದೀ ಜೀವಿತಾಪಣದ ಸರಕೆಣಿಸೆ ।\nಕಡೆಯೆಂದು? ಮುಗಿಯದಿಹ ಲಾಭನಷ್ಟಗಳ ॥\nಕಡತದೊಳ್ ಅದೆಂದಿನಾ ಲೆಕ್ಕವೇ ತೀರ್ಮಾನ? ।\nಬಿಡು ಲಾಭದಾತುರವ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೪ ॥",
    kannada_explanation:
      'ಬಿಡುವಿಲ್ಲದೆ ನಡೆಯುವ ಈ ಜಗತ್ತಿನ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ, ನಮಗೆ ನಮ್ಮ ಸರಕನ್ನ ಎಣಿಸಿ ಕಡೆಗೆ ಇಳಿಸಿ "ಇಂದಿನ ವ್ಯಾಪಾರ ಮುಗಿಯಿತು" ಎಂದು ಅಂದಿನಲಾಭ ನಷ್ಟಗಳ ಲಾಭ ನಷ್ಟಗಳ ಲೆಕ್ಕಾ ಹಾಕಲಾಗುವುದೆ? ಸಾಧ್ಯವಿಲ್ಲ, ಹಾಗಾಗಿ ನೀನು ನಿನ್ನ ಜೀವನವೆಂಬ ವ್ಯಾಪಾರದಲ್ಲಿ ಲಾಭದ ಆಸೆಯನ್ನು ಬಿಡು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 595,
    english:
      "Those who are wise will never ask you how many battles you won in life. They will ask how many you fought, how hard you tried, how much burden did you carry. For them, the valiant effort matters and not the victories. This world is a everyday gym. - Mankutimma",
    kannada:
      "ಎನಿತು ನೀಂ‌ಗೆಲಿದೆಯೆಂದೆನರು ಬಲ್ಲವರೆಂದು- ।\nಮೆನಿತು ನೀಂ ಪೋರ್ದೆ ಯೆನಿತನು ಪೊತ್ತೆಯೆನುವರ್ ॥\nಗಣನೆ ಸಲುವುದು ತೋರ್ದ ಪೌರುಷಕೆ, ಜಯಕೆಲ್ಲ ।\nದಿನದಿನದ ಗರಡಿಯಿದು  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೫ ॥",
    kannada_explanation:
      "ಅರಿತವರು, ನೀ ಏನನ್ನು ಅಥವಾ ಎಷ್ಟು ಗೆದ್ದೆಯೆಂದು ಕೇಳುವುದಿಲ್ಲ, ನೀ ಎಷ್ಟುಹೋರಾಡಿದೆ ಎಂದೋ ಅಥವಾ ನೀ ಎಷ್ಟು ಭಾರವನ್ನು ಹೊತ್ತೆ ಎಂಬುದನ್ನು ನೋಡುತ್ತಾರೆ. ಏಕೆಂದರೆ ಬದುಕಿನ ಹೋರಾಟದಲ್ಲಿ ನಾವೆಷ್ಟು ಧೈರ್ಯದಿಂದ, ತಾಳ್ಮೆಯಿಂದ ಹೋರಾಡಿದ್ದೇವೆ ಎನ್ನುವುದೇ ಗಣನೆಗೆ ಬರುವುದು. ನಾವು ಪಡೆದ ಜಯಕ್ಕೆ ಅಲ್ಲ. ಈ ಜಗತ್ತಿನ ಹೋರಾಟ ಒಂದು ಪ್ರತಿ ನಿತ್ಯದ ಗರಡಿಮನೆಯಂತೆ. ಪ್ರತಿ ನಿತ್ಯ ವ್ಯಾಯಾಮ ಮಾಡಬೇಕು, ಪ್ರತಿ ನಿತ್ಯವೂ ಕುಸ್ತಿ ಮಾಡಬೇಕು. ಇಲ್ಲಿ ಎಷ್ಟು ಕಸರತ್ತು ಮಾಡಿದ್ದೇವೆ ಎನ್ನುವುದೇ ಮುಖ್ಯವಾಗುತ್ತದೆ ಹೊರತು ಗೆಲುವಲ್ಲ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 596,
    english:
      "You are a wrestlers practicing in a gym. So what if you do not defeat the opponent today? Will you not get better physique because of the fight? So what if your prayers at the temple are not answered immediately? Having a pure mind is itself a boon. - Mankutimma",
    kannada:
      "ಗರಡಿಯ ಸಾಮಿಂದೆ ನೀನೆದುರಾಳ ಗೆಲ್ಲದೊಡೇಂ? ।\nಬರದಿಹುದೆ ನಿನಗನಿತು ಕಾಯಾಂಗಪಟುತೆ? ॥\nವರ ಸದ್ಯಕಿಲ್ಲದೊಡೆ ಬರಿದಾಗುವುದೆ ಪೂಜೆ? ।\nಪರಿಶುದ್ಧ ಮನವೆ ವರ - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೬ ॥",
    kannada_explanation:
      "ನೀನು ಗರಡಿಯ ಸಾಮನ್ನು ಮಾಡಿ, ಕುಸ್ತಿಯಲ್ಲಿ ಎದುರಾಳಿಯಮೇಲೆ ಗೆಲ್ಲದಿದ್ದರೆ ಏನಂತೆ, ನಿನ್ನ ದೇಹವಂತೂ ಗಟ್ಟಿಯಾಗುವುದಲ್ಲವೆ? ಪೂಜೆ ಮಾಡಿದ ಕೂಡಲೇ ವರ ಸಿಗದಿದ್ದರೆ, ಪೂಜೆಯನ್ನು ವ್ಯರ್ಥವೆನ್ನುತ್ತೀಯೇನು? ಗರಡಿ ಸಾಮಿಂದ ದೇಹ ಗಟ್ಟಿಯಾಗುವುದು ಹೇಗೆ ಸಂದ ಫಲವೋ ಹಾಗೆ ಮನಸ್ಸು ಶುದ್ಧವಾಗುವುದೇ ಪೂಜೆಯಿಂದ ಸಲ್ಲುವ ಉತ್ತಮ ಫಲವೆಂದು, ಜಗತ್ತಿನ ಬದುಕಿನಲ್ಲಿ ನಮ್ಮೆಲ್ಲರ ಹೋರಾಟದ ಫಲಶೃತಿಯ ರೂಪವನ್ನು ನಮಗೆ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 597,
    english:
      "The quality of the crop depends on our efforts (seeds, work and other efforts) as well as providence. When both things work out, then the crop will be excellent. If efforts lack, it is our fault. If rains don't work out then it creates anxiety - but nothing much can be done about it. We will never know about the crop until it comes. - Mankutimma",
    kannada:
      "ಬಿತ್ತ ಮಳೆಗಳವೋಲು ಯತ್ನ ದೈವಿಕ ನಮಗೆ ।\nಯುಕ್ತದೊಳಗೆರಡುಮನುವಾಗೆ ಬೆಳೆ ಹುಲುಸು ॥\nಯತ್ನ ಬಿಟ್ಟರೆ ಲೋಪ, ದೈವ ತಾಂ ಬಿಡೆ ತಾಪ ।\nಗೊತಿಲ್ಲ ಫಲದ ಬಗೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೭ ॥",
    kannada_explanation:
      "ಸಕಾಲಕ್ಕೆ ಬಿತ್ತುವ ಬೀಜ ಮತ್ತು ಬರುವ ಮಳೆಯಿಂದಾಗಿ ಬೆಳೆ ಬರಬೇಕು. ಸಕಾಲಕ್ಕೆ ಸರಿಯಾದ ಬೀಜವನ್ನು ಬಿತ್ತುವುದು ನಮ್ಮ ಯತ್ನ, ಸಕಾಲಕ್ಕೆ ಸರಿಯಾದ ಹದದಲ್ಲಿ ಬರುವ ಮಳೆ ದೈವ ಕೃಪೆಯಿಂದಾಗಬೇಕು. ನಾಮ್ಮ ಪ್ರಯತ್ನ ಮತ್ತು ದೈವ ಕೃಪೆಗಳು ಸೇರಿದರೆ ಬೆಲೆ ಹುಲುಸಾಗಿ ಬೆಳೆಯುತ್ತದೆ. ನಮ್ಮ ಪ್ರಯತ್ನವನ್ನು ಮಾಡದಿದ್ದರೆ ಅದು ನಮ್ಮ ಕರ್ತವ್ಯ ಲೋಪ. ದೈವ ಕೃಪೆಯಾಗದಿದ್ದರೆ ದೈವ ಮುನಿಸಿಕೊಂಡಿದೆ ಎಂದೇ ತಿಳಿಯಬೇಕು. ಹಾಗಾಗಿ ನಮಗೆ ನಮ್ಮ ಕೆಲಸಕಾರ್ಯಗಳಿಗೆ ಸೂಕ್ತ ಫಲ ಸಿಗುವುದೋ ಇಲ್ಲವೋ ಎಂಬ ಅರಿವಿಲ್ಲ ಎಂದು ಉಲ್ಲೇಖಮಾದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 598,
    english:
      "If one thinks that life is a tough battle and tries to run away; will he not become snacks for the providence? Make your heart as strong as iron. Hold the club of intellect and face fate head on - it will relent and support you. - Mankutimma",
    kannada:
      "ಬದುಕು ಕದನವೆಂದಂಜಿ ಬಿಟ್ಟೋಡುವನು ।\nಬಿದಿಯ ಬಾಯಿಗೆ ಕವಳವಾಗದುಳಿಯುವನೆ? ॥\nಎದೆಯನುಕ್ಕಾಗಿಸುತ, ಮತಿಗದೆಯ ಪಿಡಿದು, ನೀ- ।\nನೆದುರು ನಿಲೆ ಬಿದಿಯೊಲಿವ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೮ ॥",
    kannada_explanation:
      "ಜೀವನವನ್ನು ಒಂದು ಕದನವೆಂದು, ಅದಕ್ಕೆ ಹೆದರಿ ಬಿಟ್ಟು ಓಡಿಹೋಗುವವನು ವಿಧಿಯ ವಿನ್ಯಾಸದಿಂದ ಹೊರಗುಳಿಯಲು ಸಾಧ್ಯವೇ? ಹಾಗೆ ಹೆದರಿ ಹೋದರೆ ವಿಧಿಯು ವಿಧಿಸಿದ ಕರ್ಮವ ಸವೆಸದೆ ಈ ಬದುಕಿನಿಂದ ಹೋಗಲು ಸಾಧ್ಯವೇ? ಹಾಗಾಗಿ ಮನಸ್ಸಿನಲ್ಲಿ ಧೈರ್ಯವನ್ನು ತುಂಬಿಕೊಂಡು, ವಿವೇಕವನ್ನೇ ಆಯುಧವನ್ನಾಗಿಸಿಕೊಂಡು, ಬಂದದ್ದನ್ನೆಲ್ಲಾ ಎದುರಿಸುತ್ತೇನೆ ಮತ್ತು ಸಹಿಸುತ್ತೇನೆ ಎಂದು ಗಟ್ಟಿಯಾಗಿ ನಿಂತರೆ, ಭವ ಸಾಗರವನ್ನು ಈಜಲು ನಮ್ಮ ಪ್ರಯತ್ನಕ್ಕೆ ಆ ವಿಧಿಯೂ ಸಹ ಸಹಾಯಮಾಡುತ್ತದೆ, ಎಂದು ನಮಗೆ ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 599,
    english:
      "Let the providence run the world machinery as it pleases. Let the planets and stars wander the way they want. Let fate keep laughing at you (your failures). You continue to march on to your goal with a steady mind. - Mankutimma",
    kannada:
      "ತಿರುಗಿಸಲಿ ವಿಧಿರಾಯನಿಚ್ಛೆಯಿಂ ಯಂತ್ರವನು ।\nಚರಿಕೆ ತಾರಾಗ್ರಹಗಳಿಷ್ಟವೋದಂತೆ ॥\nಪರಿಹಾಸದಿಂ ಕರ್ಮ ದೈವ ಕೇಕೆಗಳಿಡಲಿ ।\nಸ್ಥಿರಚಿತ್ತ ನಿನಗಿರಲಿ  - ಮಂಕುತಿಮ್ಮ ॥ ೫೯೯ ॥",
    kannada_explanation:
      'ನಿನ್ನ ನಿಯಂತ್ರಿಸುವ ಆ ವಿಧಿರಾಯನು, ತನ್ನ ಇಚ್ಚೆಯಂತೆ ನಿನ್ನ ಬದುಕಿನ ಚಕ್ರವನ್ನು ಹೇಗಾದರೂ ತಿರುಗಿಸಲಿ ಮತ್ತು ನಿನ್ನ ಜಾತಕದ ರೀತ್ಯಾ ನಕ್ಷತ್ರ ಗ್ರಹಗಳು ನಿನ್ನ ಬದುಕಿನ ಗತಿಯನ್ನು ಬದಲಾಯಿಸುತ್ತಾ ಇರಲಿ, ನಿನ್ನ ಕರ್ಮಕ್ಕೆ ನಿಯಂತ್ರಕರಾದ ದೇವತೆಗಳು ಅಟ್ಟಹಾಸದಿಂದ ಅಥವಾ ಪರಿಹಾಸದಿಂದ "ನೋಡಿದೆಯಾ ಇವನನ್ನು ಹೇಗೆ ಆಡಿಸುತ್ತಿದ್ದೇವೆ" ಎಂದು ಕುಹಕದ ನಗೆ ನಗಲಿ. ಏನೇ ಆದರೂ ನಿನ್ನ ಮನಸ್ಸು ದೃಢವಾಗಿರಲಿ ವಿಚಲಿತವಾಗದೆ ಇರಲಿ ಎಂದು ಒಂದು ಉಪದೇಶವನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 600,
    english:
      "Life is like a tonga. Providence is the master. You are the horse. Passengers are chosen by the master. So, you will have brief company of whom He choses for you. The ride could be to a wedding or a funeral. You are not to ask - just run. If your legs fail, don't worry there is ground below to support you. - Mankutimma",
    kannada:
      "ಬದುಕು ಜಟಕಾಬಂಡಿ, ವಿಧಿಯದರ ಸಾಹೇಬ ।\nಕುದುರೆ ನೀನ್, ಅವನು ಪೇಳ್ದಂತೆ ಪಯಣಿಗರು ॥\nಮದುವೆಗೋ ಮಸಣಕೋ  ಹೋಗೆಂದ ಕಡೆಗೋಡು ।\nಪದ ಕುಸಿಯೆ ನೆಲವಿಹುದು  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೦ ॥",
    kannada_explanation:
      'ಒಂದು ಕುದುರೆಯನ್ನು ಕಟ್ಟಿ ಎಳೆಯಲ್ಪಡುವ, ನಾಲ್ಕು ಜನ ಕುಳಿತುಕೊಳ್ಳಬಹುದಾದ ಬಂಡಿಗೆ, "ಜಟಕಾ" ಎಂದು ಕರೆಯುತ್ತಿದ್ದರು. ಆ ಕಾಲಕ್ಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಮುಸ್ಲಿಮರು ಅದನ್ನು ಓಡಿಸುವ ಕೆಲಸದಲ್ಲಿ ತಮ್ಮನ್ನು ಅಧಿಕವಾಗಿ ತೊಡಗಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದರು. ಹಾಗಾಗಿ ಅದನ್ನು ಓಡಿಸುವವರಿಗೆ ‘ ಸಾಹೇಬ’ ಎಂದು ಕರೆಯುತ್ತಿದ್ದರು. ಅದು ಅಪಭ್ರಂಶವಾಗಿ "ಜಟಕಾ ಸಾಬಿ" ಎಂದೂ ಸಂಬೋಧಿಸಲ್ಪಡುತ್ತಿದ್ದರು.ಇದನ್ನೇ ಒಂದು ದೃಷ್ಟಾಂತವಾಗಿ ಇಟ್ಟುಕೊಂಡು, " ನಮ್ಮ ಬದುಕೇ ಒಂದು ಜಟಕಾ ಬಂಡಿ, ಅದನ್ನೆಳೆದುಕೊಂಡು ಹೋಗುವ ನಾವೇ ಕುದುರೆಗಳು. ಈ ಬದುಕೆಂಬ ಜಟಕಾ ಬಂಡಿಯನ್ನು ಓಡಿಸುವವನೇ ವಿಧಿ, ಎಂದರೆ ಪರಮಾತ್ಮ. ಬಂಡಿಗೆ ಕಟ್ಟಿದ ಕುದುರೆಗೆ ಆ ಬಂಡಿ ಓಡಿಸುವವನು ಹೇಳಿದಲ್ಲಿಗೆ ಹೋಗಬೇಕು. ಅದು ಮದುವೆಗಾದರೂ ಆಗಬಹುದು ಅಥವಾ ಸ್ಮಶಾನಕ್ಕಾದರೂ ಆಗಬಹುದು. ಬದುಕೆಂಬ ಜಟಕಾ ಬಂಡಿಯನ್ನು ಎಳೆಯುವ ಕುದುರೆಗಳಾದ ನಮಗೆ, ಬದುಕ ಬಂಡಿಯನ್ನು ಎಳೆದೂ ಎಳೆದೂ ಸುಸ್ತಾಗಿ ಕಾಲು ಸೋತು ಕುಸಿದರೆ ವಿಶ್ರಮಿಸಿಕೊಳ್ಳಲು ನೆಲವುಂಟು ಎಂದು ಬದುಕಿನ ಓಟದ ಸತ್ಯವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 601,
    english:
      'Do your work with all your heart without feeling sorry for yourself. Do not crib and enjoy what ever your get. Endure the misery of this world without losing sight of the universal truth. When it is your turn to go, just leave without crying." - Mankutimma',
    kannada:
      "ಇರುವ ಕೆಲಸವ ಮಾಡು ಕಿರಿದೆನದೆ ಮನವಿಟ್ಟು ।\nದೊರತುದ ಹಸಾದವೆಂದುಣ್ಣು  ಗೊಣಗಿಡದೆ ॥\nಧರಿಸು ಲೋಕದ ಭರವ ಪರಮಾರ್ಥವನು ಬಿಡದೆ ।\nಹೊರಡು ಕರೆ ಬರಲ್ ಅಳದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೧ ॥",
    kannada_explanation:
      'ಬದುಕಿನಲ್ಲಿ ನಿನಗೆ ಸಿಕ್ಕ ಕೆಲಸವನ್ನು " ಇದು ಸಣ್ಣದು- ಇದು ಸರಿಯಲ್ಲ " ಎನ್ನದೆ ಮನವಿಟ್ಟು ಮಾಡು ಮತ್ತು ಆ ಕೆಲಸದಿಂದ ನಿನಗೆ ದೊರೆತ ಫಲವನ್ನು ಗೊಣಗಾಡದೆ, ಆ ಪರಮಾತ್ಮನ ಪ್ರಸಾದವೆಂದು ಬಗೆದು ಸ್ವೀಕರಿಸು. ನಿನ್ನ ಮೇಲೆ ಹೊರಿಸಿದ ಲೋಕದ ಭಾರದ ಭಾಗವನ್ನು ಭರಿಸುವಾಗ ಪಾರಮಾರ್ಥಿಕ ಭಾವವನ್ನು ಬಿಡದೆ ಬದುಕಿ, ಅಂತಕನ ಕರೆ ಬಂದಾಗ ಅತ್ತು, ಬೇಸರಿಸದೆ ಹೊರಡು, ಎಂದು ಬದುಕನ್ನು ಹೇಗೆ ಬಾಳಬೇಕು ಎನ್ನುವ ಉಪದೇಶವನ್ನು ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 602,
    english:
      'He created the illusion (Maya) so that he could amuse himself. He made her (Maya) the mother of this world. He seems to be busy running this world. Such is the nature of the creator. He is the leader and we all follow him. What is the difficulty in accepting this fact?" - Mankutimma',
    kannada:
      "ಮಾಯೆಯೆಂಬಳ ಸೃಜಿಸಿ, ತಾಯನಾಗಿಸಿ ಜಗಕೆ ।\nಆಯಸಂಗೊಳುತ ಸಂಸಾರಿಯಾಗಿರುವ ॥\nನಾಯಕ ಬ್ರಹ್ಮನ್ ಅನುಯಾಯಿಗಳು ನಾವೆಲ್ಲ ।\nಹೇಯವದರೊಳಗೇನೊ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೨ ॥",
    kannada_explanation:
      '” ಸುಮ್ಮನೊಬ್ಬಂಟಿ ಯೆಂತಿಹುದು” ” ಹೊಮ್ಮುವೆನು ಕೋಟಿರೂಪದಲಿ ನಾನು” ಎಂದು ಆ ಪರಮಬ್ರಹ್ಮ ಎಣಿಸಿದನಂತೆ ‘ಆ ಏಳಸಿಕೆಯೇ ಮಾಯೆ " ಎಂದು ಗುಂಡಪ್ಪನವರು ಮುಕ್ತಕ ೭೪ ರಲ್ಲಿ ಬರೆಯುತ್ತಾರೆ. ಅದನ್ನೇ ಮುಂದುವರೆಸುತ್ತಾ ಈ ಮಾಯೆಯನ್ನು ಸೃಷ್ಟಿಸಿ ಅದನ್ನು ಆ ಜಗತ್ತಿಗೆ ತಾಯಿಯಾಗಿಸಿ, ತಂದೆಯ ರೂಪದಲಿ ಆ ಪರಮಾತ್ಮ, ಜಗತ್ಸಂಸಾರಿಯಾಗಿದ್ದಾನೆ. ನಾವೆಲ್ಲಾ ಅವನ ಈ ಮಾಯಾ ಸಂಸಾರದ ವಾಸಿಗಳು ಮತ್ತು ಅವನ ಅನುಯಾಯಿಗಳು. ಹಾಗಿರುವಾಗ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇದ್ದೂ ಈ ಜಗತ್ತನ್ನು ಅಸಹ್ಯಪಟ್ಟುಕೊಳ್ಳುವುದು ಸರಿಯೇನೋ? ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಮುಂದಿಟ್ಟಿದ್ದಾರೆ.',
  },
  {
    number: 603,
    english:
      'This earth is a vessel. Lives of all of us gets cooked inside that using heat of this world (just by being in the world). By relating ourselves to others in this world, our pride and selfishness will wear and the true nature (true, beautiful and content) of the soul will expand." - Mankutimma',
    kannada:
      "ಧರಣಿಗೋಳವು ಮೂಸೆ; ಜೀವಗಳನದರೊಳಗೆ ।\nಪರಿಶುದ್ಧಿಗೊಳಿಸುವುದು ಸಂಸಾರತಾಪ ॥\nಪರಿಪರಿಯ ಬಂಧುಧರ್ಮದಿನ್ ಅಹಂಮತಿ ಕರಗೆ ।\nಹರಡಿ ಹಬ್ಬುವುದಾತ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೩ ॥",
    kannada_explanation:
      "ಇಡೀ ಜಗತ್ತೇ ಒಂದು ಲೋಹಗಳನ್ನು ಕಾಯಿಸಿ, ಕರಗಿಸಿ, ಶುದ್ಧೀಕರಿಸುವ ಪಾತ್ರೆ. ನಾವೆಲ್ಲಾ ಬದುಕನ್ನು ಪಡೆದು ಅದರೊಳಕ್ಕೆ ಬಿದ್ದಿದ್ದೇವೆ. ಪರಿಪರಿಯಾದ ಬಂಧಗಳ ಧರ್ಮಗಳನ್ನು ಪಾಲಿಸುತ್ತಾ ನಾವಿರುವಾಗ, ಸಂಸಾರದ ತಾಪ, ನಮ್ಮನ್ನು ಅದರೊಳಗೆ ಕಾಯಿಸಿ, ಕಲ್ಮಷಗಳನ್ನು ಸುಟ್ಟು ಪರಿಶುದ್ಧಗೊಳಿಸುತ್ತದೆ. ಹಾಗೆ ಪರಿಶುದ್ಧಗೊಂಡ ನಮ್ಮಲ್ಲಿ ಅಹಂಕಾರವು ನಶಿಸಿದರೆ, ಭೇದಗಳು ಅಳಿಸಿ ಜಗದಾತ್ಮತೆಯ ಭಾವ ಅರಳಿದರೆ ನಾವು ವಿಶ್ವಮಾನವರಾಗುತ್ತೇವೆ ಎನ್ನುವ ಭಾವವನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 604,
    english:
      'Every man feels himself as a-new-man every second  when is being cooked for purification in the furnace of the world. When one sheds all the impurities the universal realization dawns on him and he becomes one with the universe (and the creator)." - Mankutimma',
    kannada:
      "ಹೊಸಹೊಸಬನಾಗುವನನುಕ್ಷಣಂ ಮಾನವನು ।\nವಸುಧೆಯಾ ಮೂಸೆಯಲಿ ಪುಟಪಾಕವಾಂತು ॥\nರಸಮೂರ್ತಿಯಾಗುವನು ಜಗದಾತ್ಮಮತಿ ಬೆಳೆಯೆ ।\nಕಸವೆಲ್ಲ ಕಳೆದವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೪ ॥",
    kannada_explanation:
      "ಮಾನವನು ಈ ಜಗತ್ತಿನ ಬದುಕಿನ ಮೂಸೆಯಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಕಾಯಿಸಲ್ಪಟ್ಟು, ಶುದ್ಧೀಕರಿಸಲ್ಪಟ್ಟು ‘ಅಪರಂಜಿ’ ಯಂತೆ, ಕಸವನ್ನೆಲ್ಲ ಕಳೆದುಕೊಂಡು, ಸತ್ವವನ್ನು ತುಂಬಿಕೊಂಡು, ಹೊಸತನವನ್ನು ಮೆರೆಯುತ್ತಾ ಶುದ್ಧನಾಗುತ್ತಾನೆ. ಅವನು ರಸಮೂರ್ತಿಯಾಗಿ ಸತ್ವವನ್ನು ಬೆಳಗುತ್ತಾ, ಸಂಕುಚಿತತೆ ಕಳೆದು, ಜಗತ್ತಿನಲ್ಲಿ ಏಕಾತ್ಮ ಭಾವದಿಂದ ಬೆಳಗುತ್ತಾನೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 605,
    english:
      'Every being is baked by the heat in his stomach (hunger) and the heat in his heart (love). If the life is not so heated, how will it melt? Only if murky life is heated thus will it get clear. Only then can it fill the sea of the soul." - Mankutimma',
    kannada:
      "ಉದರಶಿಖಿಯೊಂದುಕಡೆ, ಹೃದಯಶಿಖಿಯೊಂದುಕಡೆ ।\nಕುದಿಸದಿರೆ ಜೀವಶಿಲೆ ಮೃದುವಪ್ಪುದೆಂತು? ॥\nಬದುಕಿನುರಿಯಲಿ ಕರಗಿ ತಿಳಿಯಾಗದಿಹ ಜೀವ ।\nಪುದಿಯದಾತ್ಮಾರ್ಣವದಿ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೫ ॥",
    kannada_explanation:
      'ಹೊಟ್ಟೆಯ ಶಾಖ ಒಂದು ಕಡೆ, ಹೃದಯದ ಶಾಖವೊಂದುಕಡೆ. "ಇವೆರಡು ಶಾಖಗಳ ನಡುವೆ ಕಲ್ಲಾದ ಆತ್ಮ ಮೃದುವಾಗುವುದೆಂತು? ಜೀವನದ ಬೇಗೆಯಲ್ಲಿ ಬೆಂದು ಕರಗದ ಆತ್ಮ ಜಗದಾತ್ಮಸಾಗರವ ಸೇರುವುದೆಂತು? " ಎಂದು ಹೇಳುತ್ತಾ, ಆತ್ಮ ತನ್ನ ಬೇಧಗಳನ್ನು ಕಳೆದುಕೊಂಡು ವೈಶಾಲ್ಯವನ್ನು ಪಡೆಯಬೇಕಾದರೆ ಕರಗಬೇಕು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 606,
    english:
      'Dealing with the dilemmas of culture is as difficult a task as keeping frogs still on a balance. It is like walking on a tight rope when people are wielding swords to kill you when you fall down. Running a household is such a delicate balancing act." - Mankutimma',
    kannada:
      "ತ್ರಾಸಿನಲಿ ಕಪ್ಪೆಗಳ ಸರಿಕೂಡಿಸುವ ಚತುರಿ ।\nಸಂಸ್ಕೃತಿ ದ್ವಂದ್ವಗಳ ಸಮತೂಗಲರಿವಂ ॥\nಬೀಸುಕತ್ತಿಗಳ ಮಧ್ಯದಿ ನೂಲಮೇಲ್ ನಡೆವ ।\nಸಾಸವೀ ಗೃಹಧರ್ಮ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೬ ॥",
    kannada_explanation:
      "ಒಬ್ಬ ಗೃಹಸ್ಥ ತನ್ನ ದಾಯತ್ವವನ್ನು ನಿರ್ವಹಿಸಲು ಪಡುವ ಪರದಾಟದ ಚಿತ್ರಣವನ್ನು ನೀಡುತ್ತಾ, ತಕ್ಕಡಿಯಲ್ಲಿ ಕಪ್ಪೆಗಳನ್ನು ಸಮರ್ಪಕವಾಗಿ ತೂಗಬಹುದಾದ, ಎರಡು ಸಂಸ್ಕೃತಿಗಳ ಅಥವಾ ಒಂದೇ ಸಂಸ್ಕೃತಿಯಲ್ಲಿರುವ ದ್ವಂದ್ವಗಳ ನಡುವೆ ಸಮತೋಲನವನ್ನು ಕಾಯಬಲ್ಲ, ಮತ್ತು ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ಬೀಸುಕತ್ತಿಗಳು ತೂಗುತ್ತಿರುವಾಗ, ಅವುಗಳನ್ನು ತಪ್ಪಿಸಿಕೊಂಡು ಹಗ್ಗದ ಮೇಲೆ ನಡೆಯುವ ಚತುರತೆಯೆಂತೆಯೇ ಗೃಹಧರ್ಮವನ್ನು ಸಮರ್ಪಕವಾಗಿ ನಿಭಾಯಿಸಬಲ್ಲ ಸಾಹಸಕ್ಕೂ ಬೇಕಾಗಿದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 607,
    english:
      'A marriage without excess love and affection will not prosper. But if you let love grow into too much attachment, then it ties you down like a chain. How can one reconcile these two opposites? Thus are the tricks of attraction." - Mankutimma',
    kannada:
      "ಪ್ರೇಮಾತಿಶಯವಿರದ ದಾಂಪತ್ಯ ವರ್ಧಿಸದು ।\nವ್ಯಾಮೋಹಕೆಡೆಗೊಟ್ಟೊಡದು ನಿಗಳವಹುದು ॥\nಸಾಮರಸ್ಯವನೆಂತು ಕಾಣ್ಬುದೀ ವಿಷಮದಲಿ? ।\nಆಮಿಷದ ತಂಟೆಯಿದು  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೭ ॥",
    kannada_explanation:
      "ದಾಂಪತ್ಯದಲ್ಲಿ ಸಾಮರಸ್ಯವಿರಬೇಕು. ಇಲ್ಲದಿದ್ದರೆ ಅದು ವೃದ್ಧಿಯಾಗುವುದಿಲ್ಲ. ಕೌಟುಂಬಿಕ ಜೀವನದಲ್ಲಿ ಪರಸ್ಪರ ಅತಿಶಯದ ಪ್ರೇಮವಿರಬೇಕು. ಪ್ರೇಮದ ಸ್ಥಾನದಲ್ಲಿ ವ್ಯಾಮೋಹವಿದ್ದರೆ ಅದು ನಮಗೆ ಬಂಧನದ ಸಂಕೋಲೆಗಳಾಗಿ ಬದುಕು ಕ್ಲಿಷ್ಟವಾಗಿ ಪರಿಣಮಿಸುತ್ತದೆ. ಅಂತಹ ಸ್ಥಿತಿಯಲ್ಲಿ ಸಾಮರಸ್ಯವನ್ನು ಕಾಣಲು ಸಾಧ್ಯವಿಲ್ಲ. ಈ ರೀತಿ ನಮಗೆ ಮೋಹ ಅಥವಾ ವ್ಯಾಮೋಹ ಉಂಟಾಗುವುದಕ್ಕೆ ನಮ್ಮ ಮನದಲ್ಲುಂಟಾಗುವ ಆಸೆಗಳೇ ಕಾರಣ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 608,
    english:
      'Mothers should be like Kaikeyi (mother of Bharatha in Ramayana). Wife should be like Satyabhama (wife of Krishna). They both showed the world how powerful their love can be. Their actions although born out of love, had adverse consequences. Life is wonderful only when such unlimited love and affection exist. Such jealousy, affection and attachment are required for the drama of life." - Mankutimma',
    kannada:
      "ಕೈಕಯಿಯವೊಲು ಮಾತೆ, ಸತ್ಯಭಾಮೆವೊಲು ಸತಿ ।\nಸಾಕಿ ಸಂತಸವೆರೆಯೆ ಸಂಸಾರ ಲೀಲೆ ॥\nಬೇಕು ಮತ್ಸರ ಮಮತೆ ಮೋಹಂಗಳಾವೇಶ ।\nಲೋಕನಾಟಕಕಾಗ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೮ ॥",
    kannada_explanation:
      "ಕೈಕೇಯಿಯಂತಹ ತಾಯಿ ಇರಬೇಕು ಮತ್ತು ಸತ್ಯಭಾಮೆಯಂತಹ ಹೆಂಡತಿ ಇರಬೇಕು. ಅವರಂತೆ ಪ್ರೀತಿ ತೋರಿದರೆ ಮಾತ್ರ ನಡೆಯುವುದು ಸಂಸಾರದ ಲೀಲಾವಿನೋದ. ಈ ಜಗನ್ನಾಟಕದ ಲೀಲೆಗೆ ಮೋಹ, ಮಮತೆ, ಮತ್ಸರ ಮುಂತಾದವುಗಳು ಬೇಕು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 609,
    english:
      'Every being has its own cleansing experience. Which experience will trigger that refinement is very personal and varied among the beings! Which good deed cancels out which portion of baggage of sins! There is no being that can get refined without being heated (troubled). Consider every one of your troubles to be uplifting refining process." - Mankutimma',
    kannada:
      "ಆವ ಜೀವದ ಪಾಕವಾವನುಭವದಿನಹುದೊ! ।\nಆವ ಪಾಪಕ್ಷಯವದಾವ ಪುಣ್ಯದಿನೋ! ॥\nಕಾವಿರದೆ ಪಕ್ವವಿಹ ಜೀವವಿಳೆಯೊಳಗಿರದು ।\nನೋವೆಲ್ಲ ಪಾವಕವೊ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೦೯ ॥",
    kannada_explanation:
      "ಜಗತ್ತೆಂಬುದು ಒಂದು ಮೂಸೆ. ಆ ಮೂಸೆಯನ್ನು ಕಾಯಿಸುವುದೇ ತಾಪತ್ರಯಗಳು ಮತ್ತು ಅದರೊಳಗೆ ಕಾದು ಶುದ್ಧವಾಗುವುದೇ ಜೀವ ಅಥವಾ ಆತ್ಮ ಎಂದು ಈ ಹಿಂದಿನ ಮುಕ್ತಕಗಳಲ್ಲಿ ಹೇಳಿದ್ದಾರೆ. ಆದರೆ ಬದುಕಿನ ಈ ಮೂಸೆಯಲ್ಲಿ ನಾವು ಅನುಭವಿಸುವ ಯಾವ ಕರ್ಮ, ನಮಗೆ ನಮ್ಮ ಪಾಪಗಳನ್ನು ತೊಳೆದುಕೊಳ್ಳಲು, ಎಂದು ಮತ್ತು ಹೇಗೆ ಒದಗುತ್ತದೆ ಎಂದು ಅರ್ಥವಾಗುವುದಿಲ್ಲ. ನಾವು ಮಾಡುವ ಯಾವ ಕೆಲಸದಿಂದ ನಮಗೆ ಪುಣ್ಯವುಂಟಾಗುತ್ತದೋ ಗೊತ್ತಿಲ್ಲ. ಆದರೆ ಕಾಯದೆ,ಸುಲಭವಾಗಿ ಪಕ್ವವಾಗುವ ಜೀವಗಳು ಈ ಜಗತ್ತಿನಲ್ಲಿರುವುದಕ್ಕೆ ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾ. ನಾವು ಅನುಭವಿಸುವ ನೋವುಗಳೇ ನಮ್ಮನ್ನು ಶುದ್ಧೀಕರಿಸುವ ಅಗ್ನಿ ಎಂದು ಜೀವಿಗಳ ಸಂಸ್ಕಾರದ ಪರಿಯನ್ನು ವಿಮರ್ಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 610,
    english:
      'Hunger and affection trouble a man a lot and drive him to introspect. Those are furnace and hammer in a the foundry. They repeated heat and beat the metal to cleanse it of all impurities. The world is also like that. A person who can introspect and philosophize will use it to refine his thoughts (and get closer to God / truth)." - Mankutimma',
    kannada:
      "ಕ್ಷುತ್ತುಮಮತೆಗಳು ಜೀವಕೆ ಕುಲಿಮೆಸುತ್ತಿಗೆಗಳ್ ।\nಉತ್ತಮವದೆನಿಪುವುವು ಕಿಟ್ಟಗಳ ಕಳೆದು ॥\nಚಿತ್ತ ಸಂಸ್ಕಾರಸಾಧನವಯ್ಯ ಸಂಸಾರ ।\nತತ್ತ್ವ ಪ್ರವೃತ್ತಂಗೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೦ ॥",
    kannada_explanation:
      "ಕಮ್ಮಾರನ ಕುಲಿಮೆಯಲ್ಲಿ ಲೋಹವನ್ನು ಕಾಯಿಸಿದಾಗ ಕಲ್ಮಶಗಳು ಕಳೆದ ಮತ್ತು ಶುದ್ಧವಾದ ಲೋಹವನ್ನು ಸುತ್ತಿಗೆಗಳಿಂದ ಬಡಿದಾಗ ಅದು ಬಯಸಿದ ಆಕಾರವನ್ನು ಪಡೆಯುವಂತೆ, ಬದುಕಿನಲ್ಲೂ, ದೇಹದ ಹಸಿವಿನ ಅವಶ್ಯಕತೆಯಾದ ಆಹಾರವನ್ನು ಪಡೆಯುವ ಪ್ರಯತ್ನ ಮತ್ತು ಭೌದ್ಧಿಕ ಹಸಿವನ್ನು ಪೂರೈಸುವ ಮಮತೆ ಮುಂತಾದವುಗಳ ಸುಳಿಯಲ್ಲಿ ಬಿದ್ದು, ಹಾದು, ಅನುಭವವನ್ನು ಪಡೆದು, ಪರತತ್ವವನ್ನು ಮನೋಗತಮಾಡಿಕೊಳ್ಳಲು ಈ ಸಂಸಾರದ ಕಶ್ಮಲಗಳನ್ನು ತೊಳೆದುಕೊಳ್ಳಲು ಮಾರ್ಗವೇ ಈ ಸಂಸಾರ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 611,
    english:
      'You should consider your own home as hermitage. Your own friends and relatives are your teachers. You should serve them well - this is the only lesson that is taught (by culture). This world as we see it is the only bridge that you have to the rest of the universe (after life, heaven, hell, whatever). Living in this world and abiding dharma is a cleansing exercise to the mind." - Mankutimma',
    kannada:
      "ಮನೆಯೆ ಮಠವೆಂದು ತಿಳಿ, ಬಂಧು ಬಳಗವೆ ಗುರುವು ।\nಅನವರತಪರಿಚರ್ಯೆಯವರೊರೆವ ಪಾಠ ॥\nನಿನಗುಳಿದ ಜಗವ ಮುಟ್ಟಿಪ ಸೇತು ಸಂಸಾರ ।\nಮನಕೆ ಪುಟಸಂಸ್ಕಾರ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೧ ॥",
    kannada_explanation:
      "ಜ್ಞಾನಕ್ಕಾಗಿ ಅಲೆಯದೆ, ಮನೆಯನ್ನೇ ಮಠವೆಂದು ತಿಳಿ. ನಿನ್ನ ಮನೆಗೆ ಬಂದುಹೋಗುವ ಬಂಧು ಮಿತ್ರರೇ ನಿನ್ನ ಗುರುಗಳು. ನಿರಂತರವಾಗಿ ಅವರೊಂದಿಗಿನ ನಿನ್ನ ಪರಿಚಯ ಮತ್ತು ಅವರಿಗೆ ನೀನು ಮಾಡುವ ಸೇವೆಯೇ ನೀನು ಕಲಿಯುವ ಪಾಠ. ನಿನಗೆ ಹೊರ ಜಗತ್ತಿನೊಂದಿಗೆ ಸಂಪರ್ಕವನ್ನು ಕಲ್ಪಿಸುವ ಸೇತುವೆಯೇ ಈ ಸಂಸಾರ. ಈ ಸಂಸಾರದಲ್ಲಿ ಕಲಿತ ಪಾಠಗಳೇ ಮನಕ್ಕೆ ಪಟುತ್ವವನ್ನು ನೀಡಿ ನಿನ್ನನ್ನು ಸಂಸ್ಕಾರವಂತನನ್ನಾಗಿಸುತ್ತದೆ ಎಂದು ಬದುಕಿನಲ್ಲಿ ಬದುಕುವುದರಿಂದಲೇ ಕಲಿಯುವ ಪಾಠವನ್ನು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 612,
    english:
      "A ascetic does his penance wearing saffron. But it is a tougher penance to run a household and live according to dharma in this world - a penance done without wearing special attire. For this penance to go smoothly one must learn to practice being content, subdue urges and maintain composure. It is as tough as walking over a knife's edge.\" - Mankutimma",
    kannada:
      "ಕಾಷಾಯವೇಂ ತಪಸು ಗೃಹಲೋಕನಿರ್ವಾಹ ।\nವೇಷತಾಳದ ತಪಸು, ಕಠಿನತರ ತಪಸು ॥\nಲೇಸಿನಿಂದದು ಸಾಗೆ ಬೇಕು ಶಮ ದಮ ಸಮತೆ ।\nಆಸಿಧಾರವ್ರತವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೨ ॥",
    kannada_explanation:
      "ಕಾವಿ ಬಟ್ಟೆಗಳನ್ನು ಧರಿಸಿ ಕಾಡಿನಲ್ಲಿ ಕುಳಿತರೆ ಮಾತ್ರ ತಪಸ್ಸಾಗುತ್ತದೇನು? ಸಂಸಾರ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಆಗುವುದಿಲ್ಲವೇನು? ತಪಸ್ವಿಯ ವೇಷವನ್ನು ಧರಿಸದಿದ್ದರೂ ಗೃಹ ನಿರ್ವಹಣೆ ಮಾಡುವುದೂ ಸಹ ಒಂದು ತಪಸ್ಸು, ಬಹಳ ಕಠಿಣ ತಪಸ್ಸು. ಅದು ಚೆನ್ನಾಗಿ ನಡೆಯಬೇಕಾದರೆ ಮಾನವರು ಶಮ ದಮದ ಸಮತೆಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಬೇಕು. ಈ ಗೃಹ ನಿರ್ವಹಣೆ ಅಥವಾ ಸಂಸಾರವನ್ನು ತೂಗಿಸುವುದು ಕತ್ತಿಯ ಅಲಗಿನ ಮೇಲಿನ ನಡೆಯಂತೆ ಎಂದು ಸಂಸಾರ ನಿರ್ವಹಣೆಯೂ ಸಹ ಒಂದು ತಪಸ್ಸು ಎನ್ನುವ ವಿಚಾರವನ್ನು ದೃಢಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 613,
    english:
      'Shiva is the supreme practitioner of art of balance between attachment and detachment. He takes care of (overlooks) the world with this two eyes. But when it is time for destruction, he simply goes ahead to end the world with his third eye on the fore head. He destroyed Manmatha (God of Love). Yet, he loved Parvathi so much that he gave her half his body to become Ardhanareeshawara." - Mankutimma',
    kannada:
      "ನಯನಯುಗದಿಂ ಜಗವ ಪೊರೆದು, ನಿಟಿಲಾಕ್ಷಿಯಿಂ ।\nಲಯವಡಿಸುವುದದೇನು ಶಿವಯೋಗಲೀಲೆ? ॥\nಜಯಿಸಿ ಮದನನ ಬಳಿಕ ತನ್ನೊಡಲೊಳ್ ಉಮೆಯನ- ।\nನ್ವಯಿಸಿಕೊಂಡಿಹುದೇನು?  - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೩ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತನ್ನು ತನ್ನ ಎರಡೂ ಕಣ್ಣುಗಳಿಂದ ಶಾಂತ ನೋಟದಿಂದ ನೋಡುತ್ತಾ, ಪೊರೆಯುತ್ತಾ, ಹಣೆಯ ಕಣ್ಣಿಂದ ಲಯ ಕಾರ್ಯದಲ್ಲಿ ನಿರತನಾಗಿರುವವನು ಶಿವ. ಎರಡೂ ಕೆಲಸಗಳನ್ನು ಸಮತೆಯಿಂದ ಸಮಭಾವದಿಂದ ಮಾಡುವುದೇ ಶಿವಯೋಗಲೀಲೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ಒಂದು ಕಡೆ ಕಾಮನನ್ನು ತನ್ನ ಒಳಗಣ್ನಿಂದ ಸುಟ್ಟು ಅದೇ ರೀತಿ ಪಾರ್ವತಿಯನ್ನು ತನ್ನ ಅರ್ಧಾಂಗಿಯನ್ನಾಗಿಸಿಕೊಂಡು” ಅರ್ಧನಾರೀಶ್ವರ” ನೆಂದು ಕರೆಯಲ್ಪಟ್ಟಿದ್ದಾನೆ. ಒಂದರೊಳಗಿದ್ದುಕೊಂಡು ಅದನ್ನೇ ಜಯಿಸಿ ಬದುಕಿನಲ್ಲಿ ಸಮನ್ವಯವನ್ನು ಕಂಡುಕೊಳ್ಳುವ ವಿಧಾನವನ್ನು ದೃಷ್ಟಾಂತ ಸಹಿತ ನಮಗೆ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 614,
    english:
      "When Shiva has conquered Manmatha (Cupid of Indian mythology), why should be afraid of Gowri's beauty? He accepted her because she was the appropriate partner for his life. If one can come over attachment, there is nothing to be afraid of in this world. The world will just be a good friend in your journey (towards enlightenment).\" - Mankutimma",
    kannada:
      "ಮಾರನಂ ದಂಡಿಸಿರೆ ಗೌರಿಯಿಂ ಭಯವೇನು? ।\nಚಾರುಸಹಕಾರಿಯವಳೆಂದು ಶಿವನೊಲಿದನ್ ॥\nಮೀರೆ ಮೋಹವನು ಸಂಸಾರದಿಂ ಭಯವೇನು? ।\nದಾರಿ ಕೆಳೆಯದು ನಿನಗೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೪ ॥",
    kannada_explanation:
      "ಮನ್ಮಥನನ್ನುಸುಟ್ಟರೆ ಗೌರಿಯಿಂದ ಭಯವೇನು? ಮನೋಹರ ಮಾನಸಳು ಅವಳೆಂದು ಪಾರ್ವತಿಗೆ ಒಲಿದಿಹನು,ಶಂಕರ. ಹಾಗೆಯೇ ಸಂಸಾರದಲ್ಲಿರುವವರಿಗೆ ಮೋಹವನ್ನು ತೊರೆದ ಮೇಲೆ ಭಯವಿರುವುದಿಲ್ಲ. ಮೋಹರಹಿತವಾದ ಮಾರ್ಗವು ನಮಗೆ ಸನ್ನಿಹಿತವಾಗಿ ಸ್ನೇಹಿತನಂತೆ ಭವದ, ಅಂದರೆ ಸಂಸಾರದ ಹಾದಿಯನ್ನು ಸವೆಸಲು ಸಹಕಾರಿಯಾಗಿರುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 615,
    english:
      'Butter is not visible in milk. Only when you heat it, leave it overnight to ferment and stir does it start floating. Life is like that. The world is a big stirrer. It will stir our lives and let the butter of inner wisdom of the soul come out." - Mankutimma',
    kannada:
      "ಹಾಲ ಕಾಯಿಸಿ ಹೆಪ್ಪನಿಕ್ಕಿ ಕಡೆದೊಡೆ, ಮೊದಲು ।\nಮೇಲೆ ಕಾಣದ ಬೆಣ್ಣೆ ತೇಲಿ ಬರುವಂತೆ ॥\nಬಾಳನೀ ಜಗದ ಮಂತುವು ಕಡೆಯಲೇಳುವುದು ।\nಆಳದಿಂದಾತ್ಮಮತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೫ ॥",
    kannada_explanation:
      "ಹಾಲನ್ನು ಕಾಯಿಸಿ, ಅದಕ್ಕೆ ಹೆಪ್ಪನ್ನು ಸೇರಿಸಿ ಅದು ಮೊಸರಾದಮೇಲೆ ಕಡೆದರೆ, ಮೊದಲು ಕಾಣದೆ ಇದ್ದ ಬೆಣ್ಣೆ, ತೇಲಿ ಮೇಲೆ ಬರುವಂತೆ ನಮ್ಮ ಬದುಕನ್ನು ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಮಗಾಗುವ ಅನುಭವಗಳೆಂಬ ಕಡಗೋಲಿನಿಂದ ಕಡೆದಾಗ ನಮ್ಮೊಳಗಿಂದಲೇ ‘ಆತ್ಮಮತಿ’ ಹೊರಬರುತ್ತದೆ ಎಂದು ಬದುಕಿನ ಬವಣೆಗಳಿಂದ ನಾವು ಪಡೆಯಬಹುದಾದ ಜ್ಞಾನದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 616,
    english:
      'There are two ways of life - immersing yourself fully into the dynamics of the world, or renouncing it completely. They are not too different from each other. If you think properly, they are the the two edges of the same path (the lead to salvation) that never meet. The search of the ultimate truth is achieved by following dharma - the code of life. That is exactly the strength of the knowledge of the soul. (Hence both ways of life are trying to achieve the same)" - Mankutimma',
    kannada:
      "ಭುಕ್ತಿಪಥ ಮುಕ್ತಿಪಥ ಬೇರೆಬೇರೆಯವಲ್ಲ ।\nಯುಕ್ತದಿಂದೆರಡುಮಂಚುಗಳೊಂದೆ ಪಥಕೆ ॥\nಸತ್ತ್ವಶೋಧನೆ ಲೋಕಸಂಸ್ಕಾರದಿಂ ನಿನಗೆ ।\nಶಕ್ತಿಯಧ್ಯಾತ್ಮಕದು - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೬ ॥",
    kannada_explanation:
      "ಹೊಟ್ಟೆಪಾಡಿನ ದಾರಿ ಮತ್ತು ಪರಮಾರ್ಥದ ಹಾದಿ ಎರಡೂ ಬೇರೆಬೇರೆಯಲ್ಲ. ಬೇರೆಬೇರೆಯಂತೆ ಕಂಡರೂ ಈ ಹಾದಿಗೆ ಅಂಚುಗಳೊಂದೆ. ಲೋಕದ ಬದುಕಿನಿಂದಲೇ ಸತ್ಯ ಶೋಧನೆಯಾಗಬೇಕು. ಅಂತಹ ಪ್ರಯತ್ನದಿಂದ ನಮ್ಮ ಅಧ್ಯಾತ್ಮಿಕ ಬದುಕಿಗೆ ಶಕ್ತಿ ಹೆಚ್ಚಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 617,
    english:
      'The story of the human life is just about echoing the voices of the world around him. His heart dances to the tunes of the nature surrounding him. Love for love, compassion for misery (sadness), bravery for provocation and submission for mighty roaring." - Mankutimma',
    kannada:
      "ಧ್ವನಿತ ಪ್ರತಿಧ್ವನಿತ ಮನುಜಜೀವಿತವೆಲ್ಲ ।\nಕುಣಿವುದವನೆದೆ ಜಗತ್ಪ್ರಕೃತಿ ಪಾಡುವವೊಲ್ ॥\nಇನಿದಕೊಲವಳಲಿಗನುತಾಪ; ಸೆಣಸಿಗೆ ಬೀರ ।\nಘನಗರ್ಜಿತಕೆ ದೈನ್ಯ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೭ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಪ್ರಕೃತಿ ಜನ್ಯವಾದ ತ್ರಿಗುಣಗಳಿಗನುಸಾರವಾಗಿ ಮನುಷ್ಯನ ಎದೆಯಲ್ಲಿ ಉಂಟಾಗುವ ಭಾವನೆಗಳಿಂದ ಇವನು ಧ್ವನಿಗೆ ಪ್ರತಿಧ್ವನಿ ಎಂದರೆ ಕ್ರಿಯೆಗೆ ಒಂದು ಪ್ರತಿಕ್ರಿಯೆ ತೋರುತ್ತಾನೆ. ಪ್ರೀತಿ ತೋರಿದರೆ ಪ್ರೀತಿ, ದುಃಖದಲ್ಲಿ ಮರುಕ ಅಥವಾ ಅನುಕಂಪ, ಹೋರಾಟದಲ್ಲಿ ಧೈರ್ಯ, ಘೋರ ಘರ್ಜನೆಗೆ ದೈನ್ಯತೆಯನ್ನು ತೋರುತ್ತಾನೆ ಎಂದು ವಸ್ತು ವಿಷಯ ಮತ್ತು ವ್ಯಕ್ತಿಗಳ ಕುರಿತು ಮನುಷ್ಯನ ಪ್ರತಿಕ್ರಿಯೆಯ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 618,
    english:
      'The sounds of this world - happiness, grief and celebrations -  will touch the very heart of human existence. It will shake it and cause chaos. But a lighthearted poet will see it with amusement. He will consider the world to be the Sun and himself a lotus that blooms when exposed to sunlight." - Mankutimma',
    kannada:
      "ಜಗದ ಸಂತಾಪ ಸಂತಸ ಸಂಭ್ರಮಂಗಳುಲಿ ।\nಬಗಿದು ನರನೆದೆಯ, ಜೀವವ ಪಿಡಿದು ಕುಲುಕೆ ॥\nಸೊಗಯಿಪುದು ಮನಸಿಗದು ಕವಿಕಲಾರಸಿಕರ್ಗೆ ।\nಜಗ ಸೂರ್ಯ ನೀಂ ಕಮಲ - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೮ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಬದುಕಿನಲ್ಲಿ ಮನುಷ್ಯರು ಅನುಭವಿಸುವ ದುಃಖ ಸಂತೋಷ ಮತ್ತು ಸಂಭ್ರಮಗಳ ಭಾವಗಳು ನರನ ಹೃದಯದೊಳಕ್ಕೆ ನುಗ್ಗಿ, ಅವನನ್ನು ಹಿಗ್ಗಿಸಿ, ಸಂಭ್ರಮಿಸಿ ಕುಲುಕಿ, ಕಲಕಿ, ಹಿಂಡಿ, ಹಿಪ್ಪೆ ಮಾಡಿ ಅವನ ಮೇಲೆ ತನ್ನ ಪ್ರಭಾವ ಬೀರುತ್ತದೆ. ಆದರೆ ಕಲಾವಿದರಿಗೆ, ಕಲಾರಸಿಕರಿಗೆ ಮತ್ತು ಕವಿಗಳ ಮೇಲೆ ಅದು ಬೇರೆಯೇ ರೀತಿಯಾದ ಪ್ರಭಾವ ಬೀರಿ ಒಂದು ಭಿನ್ನ ರೂಪದಲ್ಲಿ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡುವಂತೆ ಮಾಡುತ್ತದೆ. ಅಂತಹ ಪ್ರತಿಕ್ರಿಯೆ ಅವರಿಗೆ ಮತ್ತು ಜಗತ್ತಿನ ಮನಸ್ಸಿಗೆ ಅದು ಸೊಗವಾಗಿ ಕಾಣುತ್ತದಂತೆ. ಅದಕ್ಕೆ ಒಂದು ಉಪಮೆಯನ್ನು ನೀಡುತ್ತಾ, ಈ ಜಗತ್ತು ಒಂದು ಸೂರ್ಯನಾದರೆ, ಆ ಸೂರ್ಯನ ಬೆಳಕಿಗೆ ಅರಳುವ ಕಮಲ ನೀನು ಎಂದು ಜಗದ ಭಾವಗಳಿಂದ ನಾವೆಲ್ಲಾ ಹೇಗೆ ಪ್ರಭಾವಿತರಾಗುತ್ತೇವೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 619,
    english:
      "If you want all your happiness and all your prosperity to yourself (and don't share) and push the rest of the world away, then who is at loss? You are a fool to think it is in your interest to do so. It is your soul that is drying up.\" - Mankutimma",
    kannada:
      "ಪ್ರತ್ಯೇಕ ಸುಖವ, ನೀಂ ಪ್ರತ್ಯೇಕ ಸಂಪದವ- ।\nನತ್ಯಾಶೆಯಿಂದರಸಿ ಮಿಕ್ಕೆಲ್ಲ ಜಗವ- ॥\nನೊತ್ತಟ್ಟಿಗಿಡುವೆನೆನೆ, ನಷ್ಟವಾರಿಗೊ ಮರುಳೆ? ।\nಬತ್ತುವುದು ನಿನ್ನಾತ್ಮ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೧೯ ॥",
    kannada_explanation:
      '"ನನ್ನ ಸುಖ ನನಗೆ ಮುಖ್ಯ ನನ್ನ ಆಸ್ತಿ ಸಂಪತ್ತು ನನಗೆ ಮುಖ್ಯ, ಈ ಜಗತ್ತಿನಿಂದ ನನಗೇನಾಗಬೇಕಿದೆ, ಎಂದು ಅತಿ ಆಸೆ ಪಟ್ಟು ಈ ಜಗತ್ತಿನಿಂದ ದೂರವಿದ್ದರೆ, ನಷ್ಟವು ಯಾರಿಗೋ, ಹುಚ್ಚ?" ಎಂದು ಕೇಳುತ್ತಾ, ಹಾಗೆ ಮಾಡಿದರೆ ನಿನ್ನ ಆತ್ಮ ಬತ್ತುವುದು, ಸೊರಗುವುದು ಎಂದು ಜಗದಾಭಿಮುಖ್ಯವಾಗಿ ಇಲ್ಲದೆ ಸ್ವಾರ್ಥ ಸಾಧಿಸುವ ಜನರಿಗೆ ಒಂದು ಕಿವಿಮಾತನ್ನು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 620,
    english:
      'Getting through life in this world will clear your mind. From that clarity arises a wisdom. Using that wisdom one must turn his thought inwards. When one does that, he will realize the universal nature of the soul - beyond all boundaries of time and space. We can realize the universal truth (timeless and invariant) only by getting through the life on this world (time bound and limited) - know the infinite through the finite." - Mankutimma',
    kannada:
      "ಲೋಕಜೀವನದೆ ಮಾನಸದ ಪರಿಪಾಕವಾ ।\nಪಾಕದಿಂ ಮತಿಶುದ್ಧಿಯದರಿನೊಳದೃಷ್ಟಿ ॥\nಸಾಕಲ್ಯದಾತ್ಮಸಂದರ್ಶನಕೆ ಕರಣವದು ।\nಲೋಕದಿಂ ನಿರ್ಲೋಕ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೦ ॥",
    kannada_explanation:
      "ಲೋಕದ ಬದುಕಿನಲ್ಲಿ ಅನುಭವಗಳಿಂದ ಮನಸ್ಸು ಪಕ್ವವಾಗುತ್ತದೆ. ಹಾಗೆ ಪಕ್ವವಾದ ಮನಸ್ಸಿನಿಂದ ಬುದ್ಧಿ ಪಕ್ವವಾಗುತ್ತದೆ. ಪರಿಶುದ್ಧವಾದ ಮನಸ್ಸು ಬುದ್ಧಿಗಳಿಂದ ಅಂತರಂಗದ ಶುದ್ಧಿಯಾಗುವುದಕ್ಕೆ ಮತ್ತು ಜಗತ್ತಿನಲ್ಲಿ ಏಕಾತ್ಮ ಭಾವ ನಮಗೆ ಬರಲು ಒಂದು ಸಾಧನವಾಗುತ್ತದೆ ಮತ್ತು ಮಾನಸಿಕ ಅಪ್ರಬುದ್ಧತೆಯಲ್ಲಿ ಕಾಣುವ ಭೇದಗಳೆಲ್ಲ ನಶಿಸಿ ಲೋಕದಲ್ಲಿದ್ದರೂ ಲೋಕದಿಂದಲೇ ಪರತತ್ವದ ಭಾವ ಮನಸ್ಸು ಬುದ್ಧಿಗಳಲ್ಲಿ ನೆಲೆಯೂರುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 621,
    english:
      "Don't they say that Dharma protects everybody? Believe in it. Carry the yoke of this worldly life, and carry it well. Tread the paths of this world - whichever you feel good. As you go, repair the paths, lakes, and rest houses along the way. Make yourself useful to the world while you are here.\" - Mankutimma",
    kannada:
      "ಧರಿಸಿರ್ಪುದಲ ಧರ್ಮ? ಧರಿಸು ಜೀವನಧುರವ ।\nಚರಿಸು ಲೋಕದ ಮಾರ್ಗಗಳಲಿ ಹಿತವರಿತು ॥\nಸರಿಪಡಿಸಿ ದಾರಿಗಳ ಕೆರೆ ತೋಪು ಸತ್ರಗಳ ।\nನೆರವಾಗು ಪಯಣಕ್ಕೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೧ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಎಲ್ಲವನ್ನೂ ಧರ್ಮವು ಧರಿಸಿಹುದಲ್ಲವೇ? ನೀನು ಜೀವನವೆಂಬ ನೊಗವನ್ನು ಹೊತ್ತು, ಹಿತವನ್ನು ಅರಿತು ಲೋಕದ ಮಾರ್ಗಗಳಲ್ಲಿ ನಡೆ. ಮಾರ್ಗದಲ್ಲಿ, ಸುಗಮವಾದ ಪಯಣಕ್ಕೆ ತೊಡಕುಗಳಿರುವ ಮಾರ್ಗ, ಕೆರೆ, ತೋಪು, ಸತ್ರಗಳನ್ನು ಸರಿಪಡಿಸಿ, ನಿನ್ನ ಮತ್ತು ಜಗತ್ತಿನ ಅನ್ಯರ ಪ್ರಯಾಣಕ್ಕೆ ನೆರವಾಗು ಎಂದು ಹೇಳುತ್ತಾ, ನಾವು ಸಮಾಜಮುಖಿಯಾಗಿ ಹೇಗಿರಬೇಕು ಎನ್ನುವ ಸಲಹೆಯನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 622,
    english:
      'The results of your action are to dependent on your actions from previous births and has to be seen with the right context. Once you understand this, you will observe the happenings in your life with detachment and that will help you experience pure joy. That is as close as you can get to God." - Mankutimma',
    kannada:
      "ಧರ್ಮನಿರ್ಣಯ ನಿನಗೆ ಜನ್ಮಜನ್ಮಾಂತರದ ।\nಕರ್ಮಸಂದರ್ಭದಿಂದೊಗೆವುದದನರಿತು ॥\nನಿರ್ಮಮದ ನಿರ್ಮಲೋತ್ಸಹದೆ ನೀನಾಚರಿಸೆ ।\nಬ್ರಹ್ಮಸಾಮೀಪ್ಯವೆಲೊ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೨ ॥",
    kannada_explanation:
      "ನಿನಗೆ ನಿನ್ನ ಸ್ವಭಾವ, ಎಂದರೆ ಧರ್ಮ, ಜನ್ಮಜನ್ಮಾಂತರದ ಕರ್ಮ ಸಂಬಂಧದಿಂದ ಉಂಟಾಗಿರುತ್ತದೆ. ಅದನ್ನು ಅರಿತು, ಪ್ರಕೃತಿ ಸಂಬಂಧದಿಂದ ಉಂಟಾಗುವ ಮಮಕಾರ ಮತ್ತು ಮಾನಸಿಕ ಹೊಲಸನ್ನು ಸ್ವ ಇಚ್ಚೆಯಿಂದ ಉತ್ಸಾಹದಿಂದ ತೊರೆದು ತೊಳೆದುಕೊಂಡರೆ, ಶುದ್ಧನಾಗಿ ಬ್ರಹ್ಮ ಸಾಮೀಪ್ಯವನ್ನು ಪಡೆಯಬಹುದು ಎಂದು ಮೋಕ್ಷದ ಹಾದಿಯನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 623,
    english:
      'At all levels - home, nation, society, world - one must do what ever he can to preserve the well being of all. While doing so one must balance the duties of this world and the next. Being of help to run this world is the real meaning of Dharma" - Mankutimma',
    kannada:
      "ಗೃಹದಿ ರಾಷ್ಟ್ರದಿ ಸಮಾಜದಿ ಲೋಕಸಂಗತದಿ ।\nವಿಹಿತದ ಸ್ಥಾನದಿಂ ಸಹಜಗುಣಬಲದಿಂ- ॥\nದಿಹಪರಸಮನ್ವಯದೆ ಸರ್ವಹಿತಸಂಸ್ಥಿತಿಗೆ ।\nಸಹಕರಿಪುದಲೆ ಧರ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೩ ॥",
    kannada_explanation:
      "ನಿನಗೆ ನಿನ್ನ ಹುಟ್ಟಿನಿಂದಲೇ ಒಂದು ಸ್ಥಾನ ಮತ್ತು ಆ ಸ್ಥಾನಕ್ಕೆ ವಿಧಿತವಾದ ಒಂದು ಧರ್ಮವಿದೆ. ಮನೆಯಲ್ಲಿ, ಸಮಾಜದಲ್ಲಿ, ದೇಶದಲ್ಲಿ ಮತ್ತು ಲೋಕದಲ್ಲಿ ನಿನಗೆ ಲಭಿಸಿರುವ ಸ್ಥಾನದಿಂದ ಮತ್ತು ಜನ್ಮಾಂತರಗಳಿಂದ ಸಂಚಿತ ಗುಣಗಳಿಂದ ನೀನು ಇಲ್ಲಿನ ಬದುಕು ಮತ್ತು ಪರಮಾರ್ಥದ ನಡುವೆ ಒಂದು ಸಮನ್ವಯವನ್ನು ಕಂಡುಕೊಳ್ಳುವುದೇ ಧರ್ಮ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 624,
    english:
      'A soldier does not care for the result when he is on the battle field - killing or being killed, victory or defeat. He has no selfish agenda to be achieved during the war. His actions are not determined by calculations of profit or loss in the outside world. He is just repaying the debt of his soul to the world. We should approach life like that." - Mankutimma',
    kannada:
      "ಹತ್ಯೆಯೋ ಹನ್ಯತೆಯೊ ವಿಜಯವೋ ಪರಿಭವವೊ ।\nಕ್ಷತ್ರಿಯಂ ಸ್ವಾರ್ಥಮಂ ಗಣಿಸುವನೆ ರಣದೊಳ್? ॥\nಕೃತ್ಯನಿರ್ಣಯ ಬಾಹ್ಯಲಾಭನಷ್ಟದಿನಲ್ಲ ।\nಆತ್ಮಋಣವದು ಜಗಕೆ  - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೪ ॥",
    kannada_explanation:
      "ಕೊಲ್ಲುವುದೋ, ಕೊಲ್ಲಲ್ಪಡುವುದೋ, ಗೆಲುವೋ, ಸೋಲೋ ಎಲ್ಲದಕ್ಕೂ ಸಿದ್ಧನಾಗಿರುವ ಕ್ಷತ್ರಿಯ, ಯುದ್ಧದಲ್ಲಿ ಹೋರಾಡುವಾಗ ಅವುಗಳಾವುದನ್ನೂ ಲೆಕ್ಕಿಸುವುದಿಲ್ಲ. ಅವನ ಹೋರಾಟದಲ್ಲಿ ಸ್ವಾರ್ಥಕ್ಕೆ ಸ್ಥಾನವೇ ಇಲ್ಲ. ಹೋರಾಡುವುದಷ್ಟೇ ಅವನ ಅನನ್ಯ ಧರ್ಮವಾಗಿರುತ್ತದೆ. ಹಾಗೆಯೇ ನಾವು ಮಾಡಬೇಕಾದ ಕರ್ತವ್ಯದ ಕಾರಣ ಕೇವಲ ನಾವು ಈ ಜಗತ್ತಿಗೆ ತೀರಿಸಬೇಕಾದ ಋಣವಾಗಿರುತ್ತದೆ, ಲಾಭ ನಷ್ಟಗಳ ಲೆಕ್ಕಾಚಾರವಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 625,
    english:
      "This is a bad world. By living in this world, man's mind has become dark like charcoal. But you can leave it alone by itself. The more you touch it, it more dirty you get. The right way to deal with it is to touch it - very lightly, as if you have not. There is nothing great in this art.\" - Mankutimma",
    kannada:
      "ಕೆಟ್ಟ ಪ್ರಪಂಚವಿದು, ಸುಟ್ಟ ಕರಿ ನರಮನಸು ।\nಬಿಟ್ಟುಬಿಡಲರಿದದನು, ಕಟ್ಟಿಕೊಳೆ ಮಷ್ಟು ॥\nಮುಟ್ಟಿ ಮುಟ್ಟದವೋಲುಪಾಯದಿಂ ನೋಡದನು ।\nಗಟ್ಟಿ ಪುರುಳೇನಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೫ ॥",
    kannada_explanation:
      "ಈ ಪ್ರಪಂಚ ಕೆಟ್ಟ ಪ್ರಪಂಚ. ಇಂತಹ ಕೆಟ್ಟ ಪ್ರಪಂಚದಲ್ಲಿ ಮನವೆಲ್ಲ ಸುಟ್ಟು ಕರಕಲಾದರೂ ಇದನ್ನು ಬಿಟ್ಟು ಬಿಡಲಾಗದೆ ಕೊಳೆ ಮತ್ತು ರಾಡಿಯನ್ನು ತುಂಬಿಕೊಳ್ಳುತ್ತಾನೆ ಮನುಷ್ಯ. ಇಲ್ಲಿ ಇದ್ದೂ ಇಲ್ಲದಹಾಗೆ ಉಪಾಯದಿಂದ ಬದುಕಬೇಕು. ಈ ಜಗತ್ತು ಬಿಡಲಾಗಲಾರದಂತಹ ಗಟ್ಟಿ ವಸ್ತುವೇನಲ್ಲ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 626,
    english:
      'If you are a flowers you would know that you should smell them without holding them too tight. If you crush them, the fragrance turns into a stink. One must deal with this world like wise. Just like we should drink the clear water from the top of the lake without disturbing the sediment at the bottom, life is happy if dealt with lightly." - Mankutimma',
    kannada:
      "ಕುಸುಮಸಖನೇಂ ನೀನು? ಹಿಸುಕದೆಯೆ ಮೂಸದನು ।\nಹಿಸುಕೆ ಕಟುಕಂಪು; ನರಲೋಕವದರವೋಲೇ ॥\nಗಸಿಯ ಕಲಕದೆ ಕೊಳದ ಮೇಲ್ತಿಳಿಯ ಕುಡಿದು ನಡೆ ।\nಹಸನು ಹಗುರದ ಬಾಳು - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೬ ॥",
    kannada_explanation:
      "ನೀನು ಕುಸುಮಗಳ ಮಿತ್ರನಾದರೆ ಅವುಗಳನ್ನು ಹಿಸುಕದೆ, ಕೇವಲ ಅವುಗಳ ಸುಗಂಧವನ್ನು ಮಾತ್ರ ಆಘ್ರಾಣಿಸು. ಹಿಸುಕಿದರೆ ಸುಗಂಧದ ಬದಲು ಕಡು ಕಮುಟು ವಾಸನೆ ಬರುತ್ತದೆ. ಈ ಜಗತ್ತೂ ಹಾಗೆಯೇ. ಬದುಕಿನ ಅಂತರಾಳದಲ್ಲಿ ಭಾವಗಳ ಮತ್ತು ಅನುಭವಗಳ ರಾಡಿ ಅಡಗಿದೆ. ಅದನ್ನು ಕಲಕದೆ, ರಾದಿಯಿರುವ ಕೊಳದ ತಿಳಿ ನೀರನ್ನು ಕೊಳದ ತಿಳಿ ನೀರನ್ನು ಕುಡಿಯುವಂತೆ, ಬದುಕಿನಲ್ಲಿ ತೀರ ಆಳಕ್ಕೆ ಇಳಿಯದೆ ಹಗುರವಾಗಿ ಹಸನಾದ ಬಾಳನ್ನು ಬಾಳು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 627,
    english:
      "It is better to die than be attracted to the material pleasures in this world. Isn't being hungry better than consuming poisoned food? When a man is controlled by desire, he is like a worm that falls into a hot vessel. He is like a baby in the hands of a demon.\" - Mankutimma",
    kannada:
      "ವಿಷಯಸನ್ನಿಧಿಗಿಂತ ಮಸಣಸನ್ನಿಧಿ ಲೇಸು ।\nವಿಷದೂಟಕಿಂತುಪೋಷಿತವೆ ಲೇಸಲ್ತೆ? ॥\nತೃಷೆ ಕನಲೆ, ಜೀವ ಬಿಸಿಬಾಣಲಿಗೆ ಬಿದ್ದ ಹುಳು ।\nಶಿಶು ಪಿಶಾಚಿಯ ಕೈಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೭ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ವಿಷಯಗಳಲ್ಲಿ ಅತಿಯಾದ ಆಸಕ್ತಿಯಿಂದ ಬದುಕುವುದಕ್ಕಿಂತ ಮರಣವೇ ಉತ್ತಮ. ಹಾಗೆಯೇ ವಿಷದ ಊಟ ಮಾಡುವುದಕ್ಕಿಂತ, ಉಪವಾಸವಿರುವುದೇ ಉತ್ತಮ. ಮನುಷ್ಯನ ಆಸೆಗಳು ಕೆರಳಿದರೆ ಜೀವ ಕಾದ ಬಾಣಲಿಗೆ ಬಿದ್ದ ಹುಳುವಿನಂತೆ ವಿಲವಿಲ ಒದ್ದಾಡುತ್ತದೆ, ಪಿಶಾಚಿಯ ಕೈಗೆ ಸಿಕ್ಕ ಶಿಶುವಿನಂತೆ, ಎಂದು ಬದುಕಿನಲ್ಲಿ ಜೀವ ಹೇಗೆ ಒದ್ದಾಡುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 628,
    english:
      'One has to repay the debt to this world. There is no getting away. We have to repay debt by seeing the traces of universal cosmic spirit in every being of the world. We have to try to assimilate into the spirit (world). This is the religious goal that can achieved while we go about doing the everyday work of this world. Your own home is your temple." - Mankutimma',
    kannada:
      "ಋಣವ ತೀರಿಸಬೇಕು, ಋಣವ ತೀರಿಸಬೇಕು ।\nಋಣವ ತೀರಿಸುತ ಜಗದಾದಿಸತ್ತ್ವವನು ॥\nಜನದಿ ಕಾಣುತ್ತದರೊಳ್ ಒಂದುಗೂಡಲುಬೇಕು ।\nಮನೆಯೊಳಗೆ ಮಠ ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೮ ॥",
    kannada_explanation:
      "ನಾವು ಋಣವನ್ನು ತೀರಿಸಬೇಕು. ಆ ಪರಮಾತ್ಮ ಸತ್ವವನ್ನು ಎಲ್ಲರಲ್ಲೂ ಕಾಣುತ್ತ ಎಲ್ಲರೊಳಗೆ ಒಂದಾಗಿ ಬದುಕಬೇಕು. ಪಡೆದದ್ದನ್ನೆಲ್ಲ ಹಿಂತಿರುಗಿಸಿ ಸಾಲ ತೀರಿಸಬೇಕು. ಸಂಸಾರದಲ್ಲಿ ಇದ್ದೇ ಎಲ್ಲವನ್ನೂ ತೊರೆದು ಸನ್ಯಾಸಿಯಾಗಬೇಕು. ಮನೆಯನ್ನೇ ಮಠವಾಗಿಸಿಕೊಳ್ಳಬೇಕು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 629,
    english:
      'We are all troubled by miseries. The only saving grace is the variety. Not all of us are burdened with sorrow at the same time. Those who are not sorrow will console the ones who are sad. Life cannot be difficult now. Can it?" - Mankutimma',
    kannada:
      "ವೈವಿಧ್ಯವೊಂದುಕೃಪೆ ನಮಗಿರುವ ಕಷ್ಟದಲಿ ।\nಆವರಿಸದಳಲ್ ಎಲ್ಲರನುಮೊಂದೆ ಸಮಯ ॥\nನೋವಿಲ್ಲದರು ನೊಂದವರನು ಸಂತಯಿಸುತಿರೆ ।\nಜೀವನವು ಕಡಿದಹುದೆ?  - ಮಂಕುತಿಮ್ಮ ॥ ೬೨೯ ॥",
    kannada_explanation:
      "ವೈವಿಧ್ಯತೆಯೇ ನಮಗೆ ಆ ಪರಮಾತ್ಮ ಕರುಣಿಸಿರುವ ಕೃಪೆ. ಎಲ್ಲರನ್ನೂ ಒಂದೇ ಬಾರಿ ಕಷ್ಟಗಳು ಆವರಿಸುವುದಿಲ್ಲ, ಹಲ ನೋವಿಲ್ಲದವರು ಹಲ ನೋವಿರುವವರನ್ನು ಸಂತೈಸುತ್ತಾ ಇರುವಾಗ ಬದುಕು ಕಷ್ಟವಾಗುವುದಿಲ್ಲ, ಎಂದು ಬದುಕಿನ ಸುಖ ದುಃಖಗಳ ಮತ್ತೊಂದು ಆಯಾಮವನ್ನು ನಮಗೆ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 630,
    english:
      'Your relatives and friends may not be always nice to you. They will treat you badly once in a while. They are the faithful soldiers of time who soften you before pushing you into its mouth as food. They are only extracting a previous debt from you - just like you would be doing from them in a different circumstance. You must be patient with them." - Mankutimma',
    kannada:
      "ಸ್ಥೂಲಸೂಕ್ಷ್ಮ ವಿವೇಕರಹಿತೇಷ್ಟ ಬಂಧುಜನ ।\nಕಾಲದಂಷ್ಟ್ರಕೆ ನಿನ್ನ ಮೃದುಗೊಳಿಪ ಭಟರು ॥\nಸಾಲವನು ನಿನ್ನಿಂದ ಸಲಿಸಕೊಳಬಂದವರು ।\nತಾಳುಮೆಯಿನವರೊಳಿರು  - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೦ ॥",
    kannada_explanation:
      "ವಿಷಯಗಳ ಸೂಕ್ಷ್ಮತೆ ಮತ್ತು ಸ್ಥೂಲತೆಯನ್ನು ಅರಿಯದೆ ನಮ್ಮೊಡನೆ ನಡಕೊಳ್ಳುವ ನಮ್ಮ ಬಂಧು ಮಿತ್ರರು ಕಾಲನ ಕರೆಗೆ ನಮ್ಮನ್ನು ಅಣಿಗೊಳಿಸುತ್ತಾರೆ. ನಾವು ಜನ್ಮ ಜನ್ಮಾಂತರದಲ್ಲಿ ಬಹುಜನರಿಂದ ಪಡೆದ ಸಾಲವನ್ನು ಹಿಂತಿರುಗಿ ಪಡೆಯಲು ಬಂದವರೇ ಇವರೆಲ್ಲ. ಹಾಗಾಗಿ ಇವರೊಂದಿಗೆ ವ್ಯವಹರಿಸುವಾಗ ತಾಳ್ಮೆಯಿಂದಿರು ಎಂದು ಪರರ ವ್ಯವಹಾರದಿಂದ ನಮ್ಮ ಮೇಲೆ ಆಗುವ ಪ್ರಭಾವವನ್ನು ಎದುರಿಸುವ ಪರಿಯನ್ನು ಭೋಧಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 631,
    english:
      'A rich person may have a silk cloth with embroidery to wear over his body. A poor person may wear just rags. They may eat multi course meals and collected alms respectively. But in the final analysis, both end in the same fate - death. Even after knowing this, why do you feel jealous and worry?" - Mankutimma',
    kannada:
      "ಸರಿಗೆಪಂಚೆಯೊ ಹೊದಿಕೆ, ಹರಕುಚಿಂದಿಯೊ ಮೈಗೆ ।\nಪರಮಾನ್ನ ಭೋಜನವೊ, ತಿರುಪೆಯಂಬಲಿಯೋ ॥\nಪರಿಣಾಮದಲಿ ಧನಿಕ ಬಡವರಿರ್ವರುಮೊಂದೆ ।\nಕರುಬು ಕೊರಗೇತಕೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೧ ॥",
    kannada_explanation:
      "ರೇಶಿಮೆಯ ಪಂಚೆಯನ್ನು ಉಟ್ಟರೂ, ಹರಿದ ಚಿಂದಿಯನ್ನು ಉಟ್ಟರೂ ಪರಿಣಾಮ ಒಂದೇ ಮತ್ತು ಪರಮಾನ್ನವನ್ನು ಉಂಡರೂ, ಭಿಕ್ಷೆಯೆತ್ತಿ ಗಂಜಿಯನ್ನು ಕುಡಿದರೂ ಪರಿಣಾಮ ಒಂದೇ. ಹಾಗಾಗಿ ‘ನಿನ್ನ ಬಳಿ ಏನೇ ಇದ್ದರೂ ಅಥವಾ ಇರದಿದ್ದರೂ ಕೊರಗದೆ ಬದುಕು’ ಎಂದು ಬದುಕಿನಲ್ಲಿ ಸಂತೋಷದ ಹಾದಿಯನ್ನು ತೋರಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 632,
    english:
      'Will the ear not go deaf over time by wearing a gem studded ear piece? Can good food stop the skin from developing wrinkles over age? In the effects of the world on the body, there is no difference between the rich and the poor. Death is the final leveler." - Mankutimma',
    kannada:
      "ಕಿವುಡುತನ ತಪ್ಪೀತೆ ರನ್ನ ಕುಂಡಲದಿಂದ? ।\nತೊವಲು ಜಬ್ಬಲು ಬಿಳದೆ ಮೃಷ್ಟಾನ್ನದಿಂದ? ॥\nಭುವಿಯ ಪರಿಣಾಮದಲಿ ಸಿರಿಬಡತನಗಳೊಂದೆ ।\nಜವರಾಯ ಸಮವರ್ತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೨ ॥",
    kannada_explanation:
      "ಕಿವಿಯಲ್ಲಿ ರತ್ನದ ಕುಂಡಲಗಳನ್ನು ಧರಿಸಿದರೆ ಇರುವ ಕಿವುಡುತನ ತಪ್ಪೀತೆ? ಕೇವಲ ಮೃಷ್ಟಾನ್ನವನ್ನು ತಿಂದರೆ ದೇಹ ಪ್ರಾಯ ಸಂದಂತೆ ಜೋತು ಬೀಳುವುದು ತಪ್ಪೀತೆ? ಭೂಮಿಯಲ್ಲಿನ ಪ್ರಕೃತಿಗೆ ಅನುಗುಣವಾಗಿ ಆಗುವ ಪರಿಣಾಮಗಳಿಗೆ ಬಡವ-ಬಲ್ಲಿದನೆಂಬ ಬೇಧವಿರುವುದಿಲ್ಲ. ಎಲ್ಲರ ಬದುಕನ್ನೂ ಸಮನಾಗಿ ಕೊನೆಗಾಣಿಸುವ ಆ ಯಮರಾಯ ಸಮವಾಗಿ ವರ್ತಿಸುತ್ತಾನೆ ಎಂದು ಬದುಕಿನ ಪರಮ ಸತ್ಯವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 633,
    english:
      "No one is capable of closing the books of karma. They would have to wipe off all the consequences of their previous actions which is impossible. So, one has to bear the burden of the consequences of past karma. Only advice can be that of 'patience'.\" - Mankutimma",
    kannada:
      "ಸಾಧ್ಯಪಡದಾರಿಗಂ ನರಭಾಲಪಟ್ಟವನು ।\nಶುದ್ಧಪಡಿಸಲು ತೊಡೆದು ಪೂರ್ವದೆಲ್ಲವನು ॥\nಹೊದ್ದೆ ಹರಿಯಲಿ ಬೇಕು ಕರ್ಮಶೇಷದ ಪಟವ ।\nಬುದ್ಧಿನುಡಿ ಸೈರಣೆಯೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೩ ॥",
    kannada_explanation:
      "ಪೂರ್ವಕರ್ಮವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಒಂದೇ ಬಾರಿಗೆ ಅಳಿಸಿಹಾಕಲು ಯಾರಿಗೂ ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ. ಆ ಪೂರ್ವಕರ್ಮದ ಹೊದಿಕೆಯನ್ನು ಹೊದ್ದೇ, ಎಂದರೆ ಕರ್ಮವನ್ನು ಹೊತ್ತುಕೊಂಡೇ, ಮಾಡುತ್ತಲೇ, ಸವೆಸುತ್ತಲೇ ಜೀವನವನ್ನು ಸಾಗಿಸಬೇಕು. ಆದರೆ ಹಾಗೆ ಬದುಕುವಾಗ ಸೈರಣೆಯಿಂದ, ತಾಳ್ಮೆಬಿಡದೆ, ವಿವೇಕದಿಂದ ಜೀವಿಸಬೇಕು ಎಂದು ಪೂರ್ವಕರ್ಮಾಧಾರಿತ ಬದುಕಿನ ಬವಣೆಯನ್ನು ಎದುರಿಸುವ ಪರಿಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 634,
    english:
      "One may try to set all the things wrong right - by war, by diplomacy, my knowledge. But one can not erase all results of one's action. Some traces of hunger, misery, injustice will remain for us as burden.\" - Mankutimma",
    kannada:
      "ಯುದ್ಧವಾಗಲಿ ರಾಜ್ಯವಿದ್ಯೆಯಾಗಲಿ ಶಾಸ್ತ್ರ ।\nವೃದ್ಧಿಯಾಗಲಿ ನರನ ಹಣೆಯಿನಳಿಯಿಸದಾ ॥\nಕ್ಷುದ್ರಕಾರ್ಪಣ್ಯದನ್ಯಾಯದನಿತಿನಿತುಳಿಕೆ ।\nಯಿದ್ದೆಯಿರುವುದು ನಮಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೪ ॥",
    kannada_explanation:
      "ವಿಧಾತನೊಂದಿಗೆ ಹೋರಾಡಿ ಅಥವಾ ಯುದ್ಧಮಾಡಿಯಾಗಲೀ ಅಥವಾ ಹಲವು ಶಾಸ್ತ್ರಗಳನ್ನು ಅಭ್ಯಾಸಮಾಡಿ ಜ್ಞಾನವಂತನಾಗುವುದರಿಂದಾಗಲೀ, ಹಣೆಯ ಬರಹವನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ. ಎಲ್ಲವನ್ನೂ ತೊಳೆದಂತೆ ಅಥವಾ ಅಳಿಸಿದಂತೆ ಕಂಡರೂ ನಮ್ಮ ಸಣ್ಣತನದ, ಅಜ್ಞಾನದ, ಜ್ಞಾನದ ಕಾರ್ಪಣ್ಯ, ಎಂದರೆ ಅರಿವಿನ ಬಡತನ, ಕಳ್ಳತನದ, ಮೋಸಮಾಡುವಂತಹ ಕ್ಷುದ್ರ ಬುದ್ದಿಗಳ ಕಿಂಚಿತ್ ಉಳಿಕೆ ನಮ್ಮಲ್ಲಿ ಇದ್ದೇ ಇರುತ್ತದೆ. ಅದನ್ನು ಸಂಪೂರ್ಣ ತೊಡೆದುಹಾಕುವುದಕ್ಕೆ ಆಗುವುದೇ ಇಲ್ಲ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 635,
    english:
      'Can the mountains and valleys be made plains with just a pickax? Can any medicine stop old age that ambushes like a thief? Can the cool creeper of peace come up amidst the heat of war? One has to patiently wait  for (or wait it out) times to change. Be prepared for that." - Mankutimma',
    kannada:
      "ಗುದ್ದಲಿಯಿನಾದೀತೆ ಮಲೆ ಕಣಿವೆ ಸಮದ ನೆಲ? ।\nಮದ್ದು ತಡೆವುದೆ ಮುಪ್ಪು ಕಳ್ಳನವೊಲಮರೆ? ॥\nಯುದ್ಧತಾಪದೆ ಶಾಂತಿಶೀತಲತೆಯುದಿಸೀತೆ? ।\nಸಿದ್ಧವಿರು ಸೈರಣೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೫ ॥",
    kannada_explanation:
      "ಮಣ್ಣನ್ನು ಅಗೆಯಲು ಉಪಯೋಗಿಸುವ ಗುದ್ದಲಿಯಿಂದ ದೊಡ್ಡ ಬೆಟ್ಟ ಮತ್ತು ಕಣಿವೆಯನ್ನು ಅಗೆದು ನೆಲ ಸಮ ಮಾಡಲಾದೀತೇ? ನಮ್ಮ ಅರಿವಿಗೆ ಬಾರದಂತೆ ಕಳ್ಳನಂತೆ ನಮ್ಮ ಮೇಲೆ ಎರಗಿದ ಮುಪ್ಪನ್ನು, ಯಾವುದಾದರೂ ಔಷದಿಯನ್ನು ಕುಡಿದು ವೃದ್ಧಾಪ್ಯ ಬರುವುದನ್ನು ತಡೆಯಲಾಗುವುದೇ? ಕದನದಲ್ಲಿ ಶಾಂತಿ ಮತ್ತು ತಣ್ಣನೆಯ ವಾತಾವರಣ ಉದ್ಭವವಾಗುವುದೇ? ಹಾಗೆಯೇ ಬದುಕಿನಲ್ಲಿ ನಡೆಯುವುದನ್ನು ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ತಾಳ್ಮೆಯಿಂದ ಅನುಭವಿಸುವುದನ್ನು ಹೊರತು ನಿನಗೆ ಬೇರೆ ದಾರಿಯಿಲ್ಲ ಎನ್ನುವ ಬುದ್ಧಿವಾದವನ್ನು ಮಾಡಿದ್ದಾರೆ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 636,
    english:
      'You should continue to implement thousand ideas of adventure. If your efforts pay off - well and good. Yet, you will still be left with some failures and some pain. You should endure it without lamenting." - Mankutimma',
    kannada:
      "ಸಾಸಿರದ ಯುಕ್ತಿ ಸಾಹಸವ ನೀನೆಸಗುತಿರು ।\nಲೇಸು ಫಲ ದೊರೆಗೆ ನಿನ್ನೆಲ್ಲ ಪೌರುಷಕಂ ॥\nಶೇಷ ನಿನಗುಳಿವುದೆಂತಾದೊಡಂ ನೋವಿನಿತು ।\nಸೈಸದನು ನೀನಳದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೬ ॥",
    kannada_explanation:
      "ಬದುಕಿನ ಬವಣೆಯನ್ನು ಎದುರಿಸಲು ಮತ್ತು ಸಂದ ಕರ್ಮಫಲವನ್ನು ಅನುಭವಿಸಲು ನೀನು ಸಾವಿರಾರು ಯುಕ್ತಿಯನ್ನು ಮಾಡು. ಅಂತಹ ಪ್ರಯತ್ನದಿಂದ ನಿನಗೆ ಒಳ್ಳೆಯ ಫಲ ದೊರಕಿ ಪಾಪಕರ್ಮದ ಫಲವು ಕಡಿಮೆಯಾದರೂ ಒಂದಿಷ್ಟು ನೋವು ಮನದ ಮೂಲೆಯಲ್ಲೆಲ್ಲೋ ಉಳಿದಿರುತ್ತದೆ. ಅದನ್ನು ಸಹಿಸಿಕೊಂಡು ಬಾಳು ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 637,
    english:
      'There is little difference between being rich or poor in the final outcome. Right or wrong, smart or stupid have the same difference at the end. Death will treat them all same. Why does one have to worry so much? (about individual decisions)" - Mankutimma',
    kannada:
      "ಸಿರಿದರಿದ್ರತೆಗಳ್ಗೆ ಫಲದೊಳಂತರ ಕಿರಿದು ।\nಸರಿತಪ್ಪುಗಳಿಗಂತು, ಜಾಣ್ ಬೆಪ್ಪುಗಳ್ಗಂ ॥\nಮರಣವೆಲ್ಲವನೊಂದೆ ತೆರದಿ ಮುಸುಕುವುದೆಂದೊ ।\nಪರವೆಯೆಂತಾದೊಡೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೭ ॥",
    kannada_explanation:
      "ಸಿರಿತನ ಮತ್ತು ಬಡತನದ ಬದುಕಿನ ಫಲದ ನಡುವೆ ಅಂತರ ಬಹಳ ಕಿರಿದು, ಹಾಗೆಯೇ ಸರಿ ತಪ್ಪುಗಳ ನಡುವೆಯೂ ಮತ್ತು ಜಾಣತನ ಮತ್ತು ಹೆಡ್ಡತನದ ನಡುವೆಯೂ ಅಂತರ ಬಹಳ ಕಡಿಮೆ. ಸಿರಿವಂತ, ಬಡವ, ಜಾಣ, ಪೆದ್ದ, ತಪ್ಪು ಮಾಡಿದವನು ಅಥವಾ ಮಾಡದವನು ಹೀಗೆ ಸಕಲರನ್ನೂ ಮೃತ್ಯು ಒಂದೇ ರೀತಿಯಲ್ಲಿ, ಯಾವ ಭೇದವನ್ನೂ ಮಾಡದೆ ಆವರಿಸುತ್ತದೆ ಕವಿಯುತ್ತದೆ. ಹಾಗಾಗಿ ಈ ದ್ವಂದ್ವಗಳ ನಡುವಿನ ಅಂತರದ ಮತ್ತು ಅದರಿಂದುಂಟಾಗುವ ಫಲವ್ಯತ್ಯಯದ ಬಗ್ಗೆ ನೀನು ಚಿಂತಿಸಬೇಡ ಎನ್ನುವಂತಹ ವಿವೇಕದ ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ. ",
  },
  {
    number: 638,
    english:
      'The world insists that we believe in God. It almost forces to do so. But there are so many people who are sad. Do they not believe in God? But if a person has given up his desires, then what has he got to gain by believing in God? Fill your mind with thought that help you kill your desires." - Mankutimma',
    kannada:
      "ನಂಬು ದೇವರ, ನಂಬು, ನಂಬೆನ್ನುವುದು ಲೋಕ ।\nಕಂಬನಿಯನಿಡುವ ಜನ ನಂಬಲೊಲ್ಲದರೇಂ? ॥\nಹಂಬಲನೆ ತೊರೆದಂಗೆ ನಂಬಿಕೆಯ ಹಂಗೇಕೆ? ।\nತುಂಬು ವಿರತಿಯ ಮನದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೮ ॥",
    kannada_explanation:
      'ಜಗತ್ತೆಲ್ಲ ‘ ದೇವರನ್ನು ನಂಬು, ನಂಬಿ ಕೆಟ್ಟವರಿಲ್ಲವೋ, ದೇವರು ನಂಬಿದವರ ಕೈಬಿಡನು’ ಎಂದೆಲ್ಲಾ ಹೇಳುತ್ತದೆ. "ಆದರೆ ತೀರ ಕಷ್ಟದಲ್ಲಿ ಇದ್ದು ಕಣ್ನೀರಿಡುವ ಜನರೇಕೆ ದೇವರನ್ನು ನಂಬುವುದಿಲ್ಲ. ಆಸೆಯನ್ನು ಬಿಟ್ಟವನಿಗೆ ನಂಬಿಕೆಯ ಹಂಗು ಏಕೆ? ನೀನೂ ಸಹ ಈ ನಂಬಿಕೆಯ ವೃತ್ತದಿಂದ ಹೊರಬರಬೇಕಾದರೆ ನಿನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ವಿರಕ್ತಿಯನ್ನು ತುಂಬಿಕ"’ಎಂದು ಆದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 639,
    english:
      "Don't get lost due to attachment. Without getting attached, you are free to savor everything in this world. If you are careful, you don't have to worry about getting lost due to intoxication. This world is full of observer and the observed. Understand that be part of the setup - sometimes as observer and sometimes as the observed. Enjoy the process without being attached.\" - Mankutimma",
    kannada:
      "ಮುಗ್ಧನಾಗದೆ ಭುಜಿಸು ಭುಜಿಸಲಿಹುದನು ಜಗದಿ ।\nಮಾಧ್ವೀಕ ಭಯವಿರದು ಜಾಗರೂಕನಿಗೆ ॥\nದೃಗ್ದೃಶ್ಯಚಿತ್ರಪ್ರಪಂಚದಲಿ ಸೇರಿ ನೀಂ ।\nಮುಗ್ಧನಾಗದೆ ಸುಖಿಸು - ಮಂಕುತಿಮ್ಮ ॥ ೬೩೯ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಅನುಭವಿಸಬೇಕಾದ್ದನ್ನು ಮೋಹವಿಲ್ಲದೆ ಅನುಭವಿಸು. ಮೋಹವಿಲ್ಲದವನಿಗೆ ಅಹಂಕಾರವು ಬಂದು ಅಂಟಿಕೊಳ್ಳುವ ಭಯವಿರದು.ಚಿತ್ರಕಾರನೂ ಚಿತ್ರವೂ ಎರಡೂ ಒಂದೇ ಆಗಿರುವ ಈ ಪ್ರಪಂಚದಲ್ಲಿ ನೀನೂ ಸಹ ಒಂದಾಗಿ ಈ ಜಗತ್ತಿಗೆ ಅಂಟದೆ ಮೋಹವನ್ನು ತೊರೆದು ಸುಖದಿಂದಿರು, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 640,
    english:
      "You are a mere beggar in this grand universe. Don't you ever forget that. What if you are very rich in your own little world? What if you have too many relative, friends and followers? Renounce all appearances and become your own servant. Live in this world as if you are a traveler just passing through the world. Don't develop attachments.\" - Mankutimma",
    kannada:
      "ತಿರುಕ ನೀನೀ ಬ್ರಹ್ಮಪುರಿಯೊಳದ ಮರೆಯದಿರು ।\nಸಿರಿಯಿರ್ದೊಡೇನು? ಪರಿಜನವಿರ್ದೊಡೇನು? ॥\nತೊರೆದೆಲ್ಲ ಡಂಭಗಳ ನೀನೆ ನಿನ್ನಾಳಾಗು ।\nಪರದೇಶಿವೊಲು ಬಾಳು - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ನೀನು ಕೇವಲ ಒಬ್ಬ ಭಿಕ್ಷುಕ. ಅದನ್ನು ಮರೆಯಬೇಡ. ಹಣ ಬಲ ಮತ್ತು ಜನ ಬಲವಿದ್ದರೆ ಏನು ಪ್ರಯೋಜನ. ಅದರಿಂದ ಮನದಲ್ಲಿ ಉಂಟಾಗುವ ಎಲ್ಲ ಡಂಬಾಚಾರ ಬೂಟಾಟಿಕೆಗಳನ್ನು ಬಿಟ್ಟು ಎಲ್ಲಿಂದಲೋ ಬಂದ ನೀನು, ನಿನ್ನ ಆತ್ಮಕ್ಕೆ ನೀನೇ ಸೇವಕನಾಗು. ಈ ಜಗತ್ತಿನಲ್ಲಿ ನೀನು ಪರಕೀಯ, ಪರದೇಶಿ. ಹಾಗೆಯೇ ಬಾಳು ಎಂದು ಬದುಕಿಗೆ ನಾವು ಎಷ್ಟರಮಟ್ಟಿಗೆ ಅಂಟಿಕೊಳ್ಳಬೇಕು ಎನ್ನುವದನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ತಿಳಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 641,
    english:
      'Is there a map that the bird follows while flying? Are there path rules that the fish follow while swimming in water? Yet they manage to get from place to place well. Life is like that - a little pull here, a little push there. At the end of it it is all well balanced. One must not try to plan it too well since life changes based on the world around which is very unpredictable. Life is like a kite." - Mankutimma',
    kannada:
      "ಬಾನೊಳಿರುವುದೆ ಪಕ್ಷಿ ಪಾರ್ವ ದಾರಿಯ ನಕ್ಷೆ? ।\nಮೀನು ನೀರೊಳು ನುಸುಳೆ ಪಥನಿಯಮವಿಹುದೆ? ॥\nಏನೊ ಜಿವವನೆಳೆವುದೇನೊ ನೂಕುವುದದನು ।\nನೀನೊಂದು ಗಾಳಿಪಟ - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೧ ॥",
    kannada_explanation:
      "ಆಕಾಶದಲ್ಲಿ ಹಾರುವ ಪಕ್ಷಿಯ ಚಲನಕ್ಕೆ ಒಂದು ನಿರ್ದಿಷ್ಟ ಪಥವಿಲ್ಲ, ಎಂದರೆ ಒಂದು ಮಾರ್ಗವಿಲ್ಲ. ಹಾಗೆಯೇ ಕಡಲಿನಲ್ಲಿರುವ ಮೀನು ಚಲಿಸಲು ಒಂದು ನಿಗದಿತ ಹಾದಿ ಇಲ್ಲ. ಆಯಾಯಾ ದೇಹಗಳನ್ನು ಧರಿಸಿದ ಜೀವವನ್ನು ಒಂದು ಶಕ್ತಿ ಎಳೆಯುತ್ತಾ ನೂಕುತ್ತಾ ಮುಂದಕ್ಕೆ ಮತ್ತು ಹಿಂದಕ್ಕೆ ತಳ್ಳುತ್ತಿರುತ್ತದೆ. ಹಾಗೆಯೇ ನಮ್ಮ ಜೀವನವೂ ಒಂದು ಗಾಳಿಪಟವಿದ್ದಂತೆ. ಕೈಯಲ್ಲಿ ದಾರ ಹಿಡಿದು ಗಾಳಿಪಟವನ್ನು ಹಾರಿಬಿಟ್ಟರೂ ಅದು ಹಾರುವುದು ನಭದಲ್ಲಿನ ಗಾಳಿಯ ಚಲನೆಯನುಸಾರವಾಗಿ. ಹಾಗಾಗಿ ವಿಧಿಯೆಂಬ ಗಾಳಿಯ ಹೊಯ್ದಾಟದ ಅನುಸಾರವಾಗಿ ಹಾರಾಡುವ ಬದುಕನ್ನು ಹೊಂದಿರುವ ನೀನೂ ಒಂದು ಗಾಳಿಪಟದ ರೀತಿ ಎಂದು ನಮ್ಮ ಬದುಕಿನ ಪರಿಯನ್ನು ವಿಶ್ಲೇಷಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 642,
    english:
      "Is there a plan and goal for a crow? It just eats some munchies on some house, some mice, some worm, some offering to some ancestor. It does not care where its next meal comes from and makes the most of the present. Such is its life. Is your's any better?\" - Mankutimma",
    kannada:
      "ದಾರಿಗುರಿಗಳ ಗೊತ್ತು ಕಾಗೆಗುಂಟೇನಯ್ಯ ।\nಆರ ಮನೆ ಸಂಡಿಗೆಯೊ, ಚುಂಡಿಲಿಯೊ, ಹುಳುವೋ ॥\nಆರ ಪಿಂಡವೊ, ಏನೊ, ಎಂತೊ ಆ ಬಾಳ ಗತಿ! ।\nಮೀರಿದವನೇಂ ನೀನು? - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೨ ॥",
    kannada_explanation:
      "ಕೆಲವರಿಗೆ ಮಾತ್ರ ತಾವು ಮಾಡಬೇಕಾದ ಕೆಲಸದ ಸೂಕ್ತತೆ,ಪ್ರಸ್ತುತತೆ ಅಥವಾ ಅಪ್ರಸ್ತುತತೆಯ ಪೂರ್ವ ಪರಿಚಯ, ಮಾಡುವ ವಿಧಾನ, ಮಾಡುವ ಅಥವಾ ಬಿಡುವ ಸಂಪೂರ್ಣ ಸ್ವಾತಂತ್ರ್ಯ ಇರುತ್ತದೆ. ಅವರು ಪುಣ್ಯವಂತರು. ಮಿಕ್ಕೆಲ್ಲರಿಗೂ ಅದಿಲ್ಲದೆ ಮನಸ್ಸಿಗೆ ಬರುವ ಚಿತ್ರ ವಿಚಿತ್ರ ವಿಚಾರಗಳ ಧಾರಾಪ್ರವಾಹಕ್ಕನುಗುಣವಾಗಿ ಅವರ ಕೆಲಸ ಕಾರ್ಯಕೆಲಸಗಳಿರುತ್ತವೆ. ಒಂದು ನಿರ್ಧಿಷ್ಟವಾದ ದಿಕ್ಕು ಅಥವಾ ದಿಶೆ ಇರುವುದಿಲ್ಲ. ತಾವು ಏತಕ್ಕಾಗಿ ಆ ಕೆಲಸವನ್ನು ಮಾಡುತ್ತಿದ್ದೇವೆ ಎನ್ನುವುದರ ಅರಿವಿಲ್ಲದೆಯೇ ಸುಖಾಸುಮ್ಮನೆ ಮಾಡುತ್ತಾ ಹೋಗುತ್ತಾರೆ. ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ‘ ಮೀರಿದವನೇಂ ನೀನು’ ಎಂದು ಕೇಳುವಂತೆ ನಾವು ಈ ರೀತಿಯ ಬದುಕನ್ನು ಮೀರಲಾಗುವುದಿಲ್ಲ.",
  },
  {
    number: 643,
    english:
      'During this life you will be faced with hundreds of troubles and obstacles. They will not budge even a little no matter how hard you try with begging or pleading. What is the use of lament? What is the use of fist fights? One has to have the patience to live through it." - Mankutimma',
    kannada:
      "ಬಾಳ್ಕೆಯಲಿ ನೂರೆಂಟು ತೊಡಕು ತಿಣಕುಗಳುಂಟು ।\nಕೇಳ್ಕೆಮಾಣ್ಕೆಗಳಿಗವು ಜಗ್ಗವೊಂದಿನಿಸುಂ ॥\nಗೋಳ್ಕರದರೇನು ಫಲ? ಗುದ್ದಾಡಲೇನು ಫಲ? ।\nಪಲ್ಕಿರಿದು ತಾಳಿಕೊಳೊ- ಮಂಕುತಿಮ್ಮ ॥ ೬೪೩ ॥",
    kannada_explanation:
      "ನಾವು ಒಪ್ಪಲಿ ಅಥವಾ ಒಪ್ಪದೆ ಇರಲಿ, ನಮ್ಮ ಬಾಳಿನಲ್ಲಿ ನೂರೆಂಟು ಎಡರು ತೊಡರುಗಳು, ಕಷ್ಟ ಆಯಾಸಗಳು ಬರುತ್ತವೆ. ಅವುಗಳನ್ನು ಸಹಿಸಲಾಗದೆ, ದುಃಖಪಡುವುದೋ ಅಥವಾ ವಿಷಮ ಸ್ಥಿತಿಗೆದುರಾಗಿ ಗುದ್ದಾಡುವುದೋ ಮಾಡಿದರೆ ಯಾವ ಪ್ರಯೋಜನವೂ ಇಲ್ಲ. ನಗುನಗುತ್ತಾ ಅದನ್ನು ತಾಳಿಕೊಳ್ಳುವುದ ಬಿಟ್ಟು ನಿನಗೆ ಬೇರೆ ದಾರಿಯೇ ಇಲ್ಲ ಎಂದು ಬದುಕಿನ ಅನಿವಾರ್ಯತೆಯನ್ನು, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 644,
    english:
      'A monkey scratches a simple bruise repeatedly to make it a rotting wound. Just like that you will pick one of your worries and remind yourself again and again, curse the entire world for that, create a hell for yourself in your own mind - finally suffer in that hell. Do you call this life? Learn to let go and move on." - Mankutimma',
    kannada:
      "ತರಚುಗಾಯವ ಕೆರೆದು ಹುಣ್ಣನಾಗಿಪುದು ಕಪಿ ।\nಕೊರತೆಯೊಂದನು ನೀನು ನೆನೆನೆನೆದು ಕೆರಳಿ ॥\nಧರೆಯೆಲ್ಲವನು ಶಪಿಸಿ, ಮನದಿ ನರಕವ ನಿಲಿಸಿ ।\nನರಳುವುದು ಬದುಕೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೪ ॥",
    kannada_explanation:
      "ಮರದಿಂದ ಮರಕ್ಕೆ ಹಾರುವಾಗಲೋ ಅಥವಾ ಯಾವುದೋ ಬೇಲಿಯಲ್ಲಿ ನುಗ್ಗುವಾಗಲೋ ಮುಳ್ಳೋ ಕಲ್ಲೋ ತರಚಿ ಆದ ಒಂದು ಸಾಮಾನ್ಯ ಗಾಯವನ್ನು ಕೆರೆದು ದೊಡ್ಡ ಹುಣ್ಣಾಗಿಸಿ, ರಣವಾಗಿಸಿ ಅತಿಯಾದ ನೋವಿಂದ ಪರದಾಡುವ ‘ಕಪಿ’ ಯಂತೆ, ನೀನು ಯಾವುದೋ ಒಂದು ಕೊರತೆಯನ್ನು ಹಿಡಿದುಕೊಂಡು ಮತ್ತೆ ಮತ್ತೆ ಅದನ್ನೇ ನೆನೆದು, ಕನಲಿ ನಿನ್ನ ಕೊರತೆಗೆ ಜಗತ್ತನ್ನೇ ಕಾರಣವನ್ನಾಗಿಸಿ, ಎಲ್ಲರನ್ನೂ ದೂರಿ, ಮನಸ್ಸಿನಲ್ಲಿ ದುಮ್ಮಾನ ತುಂಬಿಕೊಂಡು ನರಕ ಯಾತನೆಯನ್ನು ಅನುಭವಿಸುವುದೂ ಒಂದು ಬಾಳೇ ? ಎಂದು ನಮ್ಮೆಲ್ಲರ ಸ್ಥಿತಿಯನ್ನು ಎತ್ತಿತೋರುವ ರೀತಿಯಲ್ಲಿ ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 645,
    english:
      'The troubles and worries are the cleansers that purify your thoughts. Happiness and joy are like good food that is also prescribed diet. One must alternate between the two options to keep the soul healthy. Just accept what ever comes - trouble, worries, happiness, joy, grief, shock what ever it may be." - Mankutimma',
    kannada:
      "ಚಿಂತೆಸಂತಾಪಗಳು ಮನಸಿಗೆ ವಿರೇಚಕವೊ ।\nಸಂತಸೋತ್ಸಾಹಗಳೆ ಪಥ್ಯದುಪಚಾರ ॥\nಇಂತುಮಂತುಂ ನಡೆಯುತಿರುವುದಾತ್ಮ ಚಿಕಿತ್ಸೆ ।\nಎಂತಾದೊಡಂತೆ ಸರಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೫ ॥",
    kannada_explanation:
      "ಮನಸ್ಸಿನಲ್ಲಿ ಗೂಡು ಕಟ್ಟಿರುವ ನೋವು ಮತ್ತು ಹಿಂಸೆಗಳನ್ನು ಹೊರಹಾಕಲು ಚಿಂತೆ ಮತ್ತು ದುಃಖಗಳು ಸಹಾಯಮಾಡುತ್ತವೆ ಮತ್ತು ಅಂತಹ ಮನಸ್ಸನ್ನು ತಿಳಿಯಾಗಿಸಲು ಮದ್ದಿನಂತೆ ಸಂತಸ ಮತ್ತು ಉತ್ಸಾಹಗಳು ಇವೆ. ಹೀಗೆ ದುಃಖವನ್ನು ಹೊರಹಾಕುವುದೋ ಅಥವಾ ಸಂತಸವನ್ನು ಒಳಗೆ ತಂದುಕೊಳ್ಳುವುದೋ, ಹೇಗಾದರೂ ಸರಿ ಎರಡೂ ವಿಧಾನದಲ್ಲಿ ಚಿಕಿತ್ಸೆ ನಡೆದು ಆತ್ಮಕ್ಕೆ ಉಪಚಾರವಾಗಿ ಆತ್ಮ ಉದ್ಧಾರವಾದರೆ ಸರಿ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 646,
    english:
      'If the body has cold or other ailments, the medicine is to follow healthy diet (limited food). Just like that when mind get perturbed (by desires) by eagerness of the eyes and ears, the only remedy to reason with them and teach them to act according to dharma. Our soul will be peaceful them." - Mankutimma',
    kannada:
      "ಶೀತವಾತಗಳಾಗೆ ದೇಹಕೌಷಧ ಪಥ್ಯ ।\nಚೇತ ಕೆರಳಿರೆ ಕಣ್ಣು ಕಿವಿಗಳಾತುರದಿಂ ॥\nಪ್ರೀತಿಯಿಂದದನೊಲಿಸಿ ನೀತಿಯಲಿ ಶಿಕ್ಷಿಸುವು- ।\nದಾತುಮದ ನೆಮ್ಮದಿಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೬ ॥",
    kannada_explanation:
      "ಶೀತವೋ, ವಾತವೋ ಆಗಿ ದೇಹಾರೋಗ್ಯ ಕೆಟ್ಟರೆ ಪಥ್ಯ ಮಾಡಿ ಸರಿಪಡಿಸಿಕೊಳ್ಳಬಹುದು. ಆದರೆ ಈ ದೇಹಧಾರಣೆ ಮಾಡಿದ ಚೇತನಕ್ಕೆ ಕಿವಿ ಮತ್ತು ಕಣ್ಣುಗಳ ಮೂಲಕ ರೋಗಾಣುಗಳು ತಗುಲಿ ಆರೋಗ್ಯ ಕೆಟ್ಟರೆ, ಅದನ್ನು ಪ್ರೀತಿಯಿಂದ ಒಲಿಸಿಕೊಂಡು ನಿಯಮಿತವಾಗಿ ಶಿಕ್ಷಣ ನೀಡಿವುದು ಆತ್ಮಕ್ಕೆ ನೆಮ್ಮದಿಯನ್ನು ತರುತ್ತದೆ ಎಂದು ಅಂತರಂಗದ ಸಂಸ್ಕರಣದ ಮಾರ್ಗವನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂದಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 647,
    english:
      'The calmness of the mind is the salvation that everyone seeks. Thats it, nothing else. Being free of excessive desires is salvation. He is strong who can restrain his senses (eyes and ears) and correct them when they stray (from the virtuous path)." - Mankutimma',
    kannada:
      "ಮುಕ್ತಿಯೆಂಬುದು ಮನದ ಸಂಸ್ಥಿತಿಯೆ, ಬೇರಲ್ಲ ।\nರಕ್ತಿ ವಿಪರೀತವದಕಾಗದಿರೆ ಮುಕ್ತಿ ॥\nಯುಕ್ತಿಯಿಂ ಕರಣಚೇಷ್ಟಿತವ ತಿದ್ದುತೆ ಶಮಿಪ ।\nಶಕ್ತಿವಂತನೆ ಮುಕ್ತ - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೭ ॥",
    kannada_explanation:
      "ಮುಕ್ತಿಯೆಂಬುದು ಕೇವಲ ಮನಸ್ಸಿನ ಒಂದು ಭಾವವಷ್ಟೆ. ಮುಕ್ತಿಯೆಂದರೆ ಈ ಜಗತ್ತಿನಿಂದ, ಮುಕ್ತಿಯೆಂದಲ್ಲ. ಜಗತ್ತಿನೊಂದಿಗೆ ರಕ್ತಿ ಅಂದರೆ ಅಂಟು ಅಧಿಕವಾಗದಿದ್ದರೆ ಅಥವಾ ಅಂಟೀ ಅಂಟದ ಹಾಗೆ ಜೀವಿಸಲಾದರೆ ಅದೇ ಮುಕ್ತಿ. ಯುಕ್ತಿಯನ್ನು ಉಪಯೋಗಿಸಿ ಇಂದ್ರಿಯಗಳನ್ನು ನಿಯಂತ್ರಿಸುವುದಕ್ಕೆ ಪ್ರಯತ್ನಪಡುತ್ತಾ ಮತ್ತು ಅದರ ಮೂಲಕ ಆತ್ಮ ಸಂಸ್ಕಾರಗೊಳ್ಳಲು ಪೂರಕವಾದ ಕೆಲಸ ಮಾಡಲು, ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಶಕ್ತಿಯನ್ನು ವ್ಯಯಿಸುವವನೇ ಮುಕ್ತ ಎಂದು ಮುಕ್ತಿಗಾಗಿ ನಾವು ಮಾಡಬೇಕಾದ ಪ್ರಯತ್ನವನ್ನು ವಿಶಧೀಕರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 648,
    english:
      'The knots in your mind -severe it, leave it, destroy it from your memories. These are the knots that tie you to various other objects in this world. They are like a garland that looks good on the bosom, but it is a noose around the neck for the soul." - Mankutimma',
    kannada:
      "ತರಿದುಬಿಡು, ತೊರೆದುಬಿಡು, ತೊಡೆದುಬಿಡು ನೆನಹಿಂದ ।\nಕರೆಕರೆಯ ಬೇರುಗಳ, ಮನದ ಗಂಟುಗಳ ॥\nಉರಕೆ ಸೊಗಸೆನಿಸಿದಾ ಪ್ರೀತಿಹಾರಮುಮೊರ್ಮೆ ।\nಉರುಳಪ್ಪುದಾತ್ಮಕ್ಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೮ ॥",
    kannada_explanation:
      "ಅಂತರಾತ್ಮಕ್ಕೆ ಮುಜುಗರ ಮಾಡುವಂತಹ ನೆನಪಿನ ಬೇರುಗಳನ್ನು ಮತ್ತು ಗಂಟುಗಳನ್ನು ಅಂತರಾಳದಿಂದ ಕತ್ತರಿಸಿಬಿಡು, ತೊರೆದುಬಿಡು, ಅಳಿಸಿಬಿಡು. ಏಕೆಂದರೆ ಹೃದಯಕ್ಕೆ ಹಿತವೆನಿಸುವಾ ಪ್ರೀತಿ ಪ್ರೇಮಗಳ ಮಾಲೆಯು ಆತ್ಮಕ್ಕೆ ಕೆಲವು ಬಾರಿ ನೇಣಿನಂತೆ ಆಗುವುದು ಎಂದು ಗತವನ್ನು ನೆನೆಯುವ, ಆ ನೆನಪಿನಲ್ಲಿ ಹಿಂಸೆಯನ್ನನುಭವಿಸುವ ನಮ್ಮ ಬದುಕಿನ ವಿಚಾರವನ್ನು ತಿಳಿಗೊಳಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 649,
    english:
      'Why do you worry that the world does not love you. You are the loving child of only your parents. For the rest of the world, you are competition. Everyone who is ever born is burdened by his own worries and troubles. Who has time for your banter?" - Mankutimma',
    kannada:
      "ಜಗವೆನ್ನ ಮುದ್ದಿಸದದೇಕೆಂದು ಕೊರಗದಿರು ।\nಮಗುವು ನೀಂ ಪೆತ್ತರ್ಗೆ, ಲೋಕಕೆ ಸ್ಪರ್ಧಿ ॥\nಹೆಗಲಹೊರೆ ಹುಟ್ಟಿದರ್ಗೆಲ್ಲಮಿರುತಿರೆ, ನಿನ್ನ ।\nರಗಳೆಗಾರೆಗೆ ಬಿಡುವೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೪೯ ॥",
    kannada_explanation:
      "ಜಗದೊಳಿರುವ ಜನರೆಲ್ಲ ನನ್ನನ್ನು ಪ್ರೀತಿಸಿಬೇಕು, ಎಂದು ಅಪೇಕ್ಷೆಪಟ್ಟು, ಅದು ಆಗದಿದ್ದಾಗ ನೀನು ಕೊರಗಬೇಡ. ನಿನ್ನ ಹೆತ್ತವರಿಗೆ ನೀನು ಮಗು, ಆದರೆ ಲೋಕಕ್ಕೆ ಪ್ರತಿಸ್ಪರ್ಧಿ. ಹುಟ್ಟಿದವರಿಗೆಲ್ಲಾ ಅವರವರ ಬಾಳಿನ ಹೊರೆ ಇದ್ದೇ ಇರುತ್ತದೆ. ನಿನ್ನ ಬಗ್ಗೆ ತಲೆಕೆಡಿಸಿಕೊಳ್ಳಲು ಯಾರಿಗೂ ಬಿಡುವಿಲ್ಲ ಎಂದು ಪ್ರತಿಯೊಬ್ಬರೂ ಅವರವರ ಜೀವನದ ಹೊರೆಯನ್ನು ಅವರವರೇ ಹೊರಬೇಕಾದ ಅನಿವಾರ್ಯತೆಯನ್ನು ಸ್ಪಷ್ಟೀಕರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 650,
    english:
      'If a person can live happily after eating just ragi balls (staple of the poor), then will he feel jealous of the crow that steals its meals from left-overs of a feast? Both of them are equivalent when it comes to satiating hunger. Do not compromise your soul for the left overs." - Mankutimma',
    kannada:
      "ರಾಗಿಮುದ್ದೆಯ ನುಂಗಿ ನಲಿದು ಬಾಳ್ವಾತಂಗೆ ।\nಕಾಗೆ ಕದ್ದುಣುವ ಭಕ್ಷ್ಯವ ಕಂಡು ಕರುಬೆ? ॥\nನೀಗುವುದು ಹಸಿವನ್ ಉಣಿಸೆಂತಪ್ಪುದಾದೊಡಂ ।\nಬಾಗಿಸದಿರಾತ್ಮವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೦ ॥",
    kannada_explanation:
      "ರಾಗಿ ಮುದ್ದೆಯ ತಿಂದು ಸಂತುಷ್ಟನಾಗಿ ನಲಿಯುವವನು, ಕಾಗೆ ಎಲ್ಲಿಂದಲೋ ಕದ್ದು ತಂದು ಉಣ್ಣುವ ಮೃಷ್ಟಾನ್ನ ಭೋಜನವನ್ನು ನೋಡಿ ಕರುಬುತ್ತಾನೆಯೇ? ಆಹಾರ ಎಂತಹದ್ದಾದರೂ ಅದು ಹಸಿವನ್ನು ಇಂಗಿಸುವುದು. ಅದನ್ನು ಕಷ್ಟಪಟ್ಟು ದುಡಿದು ಸಂಪಾದಿಸುವುದೇ ಮುಖ್ಯ. ಅದನ್ನು ಬಿಟ್ಟು ಮೃಷ್ಟಾನ್ನವನ್ನು ಪಡೆಯಲು ಆತ್ಮಾಭಿಮಾನವನ್ನು ಬಿಡಬೇಡ ಎಂದು ಬುದ್ಧಿವಾದದ ಕಿವಿಮಾತನ್ನು ನಮಗೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 651,
    english:
      'A respectable person can be satisfied by just eating malt. He will not feel jealous of a dog eating the left overs of a feast. A wise man knows the difference between the two which goes much beyond just the taste. You should imitate the wise man and bring calmness to your mind." - Mankutimma',
    kannada:
      "ಮೌನದಿಂದಂಬಲಿಯನುಂಡು ತಣಿಯುವ ಮಾನಿ ।\nಶ್ವಾನನುಣುವೆಂಜಲೋಗರಕೆ ಕರುಬುವನೆ? ॥\nಜ್ಞಾನಿ ನಡೆವಂ ವಿಷಯ ತರತಮವಿವೇಕದಲಿ ।\nಮಾಣು ನೀಂ ತಲ್ಲಣವ - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೧ ॥",
    kannada_explanation:
      "ಮೌನದಿಂದ ಗಂಜಿಯನ್ನು ಕುಡಿದು ಸಂತುಷ್ಟಗೊಳ್ಳುವ ಮಾನಧನನಾದ ವ್ಯಕ್ತಿ, ಬೀದಿಯಲ್ಲಿ ಯಾರೋ ಬಿಸುಟ ಎಂಜಲೆಲೆಯಲ್ಲಿ ಮೃಷ್ಟಾನ್ನ ಭೋಜನವ ತಿನ್ನುವ ನಾಯಿಯನ್ನು ಕಂಡು ಕರುಬುವನೇನು? ಹೇಗೆ ಸರಿ ತಪ್ಪುಗಳನ್ನು ಅರಿತ ಜ್ಞಾನಿ ಬದುಕಿನಲ್ಲಿ ನಡೆದುಕೊಳ್ಳುತ್ತಾನೋ, ಹಾಗೆಯೇ ನೀನೂ ಸಹ ದೃಢಮನಸ್ಕನಾಗಿ, ತಲ್ಲಣವ ತೊರೆದು ನಡೆದುಕೋ ಎಂದು ನಮಗುಪದೇಶವನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 652,
    english:
      "The longing for gold is stronger than that for food. Stronger than that is the longing of lovers for each other. Longing for fame is stronger than all of these. It has the ability to eat one's own soul.\" - Mankutimma",
    kannada:
      "ಅನ್ನದಾತುರಕಿಂತ ಚಿನ್ನದಾತುರ ತೀಕ್ಷ್ಣ ।\nಚಿನ್ನದಾತುರಕಿಂತ ಹೆಣ್ಣುಗಂಡೊಲವು ॥\nಮನ್ನಣೆಯ ದಾಹವೀಯೆಲ್ಲಕಂ ತೀಕ್ಷ್ಣತಮ ।\nತಿನ್ನುವುದದಾತ್ಮವನೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೨ ॥",
    kannada_explanation:
      "ಅನ್ನವನ್ನು ಪಡೆಯಬೇಕು ಎನ್ನುವ ತೀವ್ರತಮ ಬಯಕೆಗಿಂತ ಚಿನ್ನದಮೇಲಿನ ಆಸೆಯ ತೀವ್ರತೆ ಹೆಚ್ಚು, ಅದಕ್ಕಿಂತ ತೀವ್ರ ಹೆಣ್ಣುಗಂಡಿನ ಪರಸ್ಪರ ಆಕರ್ಷಣೆಯ ತೀವ್ರತೆ. ಇವೆಲ್ಲಕ್ಕಿಂತ ಮೀರಿದುದು ಮನ್ನಣೆಯ, ಪ್ರಚಾರದ ಆಸೆ. ಈ ಎಲ್ಲ ಆಸೆಗಳು ಆತ್ಮವನ್ನು ಕೊರಗಿಸಿ, ಸೊರಗಿಸಿ ತಿನ್ನುತ್ತವೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 653,
    english:
      'People struggle all their life to be of noteworthy somewhere - in the house, in the temple, in a gathering, in the market, at least in the forest or at a funeral. All through out this effort they forget about the happiness of the soul and spend their time impressing others so that they become famous." - Mankutimma',
    kannada:
      "ಮನೆಯೊಳೋ ಮಠದೊಳೋ ಸಭೆಯೊಳೋ ಸಂತೆಯೊಳೊ ।\nಕೊನೆಗೆ ಕಾಡೊಳೊ ಮಸಾಣದೊಳೊ ಮತ್ತೆಲ್ಲೋ ॥\nಗಣನೆಗೇರಲಿಕೆಂದು ಜನ ತಪಿಸಿ ತೊಳಲುವುದು ।\nನೆನೆಯದಾತ್ಮದ ಸುಖವ - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೩ ॥",
    kannada_explanation:
      "ಮನೆ, ಮಠ, ಸಭೆ, ಸಂತೆ ಹೀಗೆ ಎಲ್ಲೇ, ಇದ್ದರೂ ‘ನನ್ನನ್ನು ಎಲ್ಲರೂ ಗುರುತಿಸಬೇಕು’ ಎನ್ನುವ ಹಂಬಲ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಇರುತ್ತದೆ. ಅಲ್ಲೆಲ್ಲೂ ಆಗದಿದ್ದರೆ ಯಾರೂ ಇರದ ಕಾಡಿನಲ್ಲಾಗಲೀ ಅಥವಾ ಸತ್ತು ಸ್ಮಶಾನ ಸೇರಿದಮೇಲಾಗಲೀ ಎಲ್ಲರೂ ತನ್ನನ್ನು, ಗುರುತಿಸಬೇಕು, ಹೊಗಳಬೇಕು ಎನ್ನುವ ಹಂಬಲ ಮತ್ತು ಬದುಕಿನ್ನುದ್ದಕ್ಕೂ ಅಂತಹ ಹೊಗಳಿಕೆಗೆ ಬಾಯ್ಬಿಡುತ್ತಾ, ಶಾಶ್ವತವಾಗಿ ಅನಂತವಾಗಿರುವ ಆತ್ಮದ ಸುಖ ಮತ್ತು ಉದ್ಧಾರಕ್ಕೆ ಯಾರೂ ಆಲೋಚಿಸುವುದಿಲ್ಲ ಎಂದು ಆತ್ಮೋದ್ಧಾರಕ್ಕೆ ಮಾರಕವಾದ ಮನ್ನಣೆಯ ಹಂಬಲದ ಬಗ್ಗೆ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 654,
    english:
      "Why are you toiling so hard to attain fame? One fine day, your fame will become garbage among all the other dirt of this world. If you were to pray God for something, let it me that the world forgets you very soon. Don't let yourself wallow in dirt.\" - Mankutimma",
    kannada:
      "ಹೆಸರು ಹೆಸರೆಂದು ನೀಂ ಬಸವಳಿವುದೇಕಯ್ಯ? ।\nಕಸದೊಳಗೆ ಕಸವಾಗಿ ಹೋಹನಲೆ ನೀನು? ॥\nಮುಸುಕಲೀ ಧರೆಯ ಮರೆವೆನ್ನನ್, ಎನ್ನುತ ಬೇಡು ।\nಮಿಸುಕದಿರು ಮಣ್ಣಿನಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೪ ॥",
    kannada_explanation:
      "‘ ಹೆಸರನ್ನು ಗಳಿಸುವುದಕ್ಕೆ ಮತ್ತು ಗಳಿಸಿದ ಹೆಸರನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದಕ್ಕೆ ನೀನು ಏತಕ್ಕ ದಣಿಯುತ್ತೀಯಾ? ಜಗತ್ತಿನ ಬೇರೆ ಕಸಗಳನತೆಯೇ ನೀನೂ ಸಹ ಕಸದಲ್ಲಿ ಕಸವಾಗಿ, ಮಣ್ಣಲ್ಲಿ ಮಣ್ಣಾಗಿ ಹೋಗುವವನು. ಜಗತ್ತಿನ ಜನರ ಮರೆವು ನನ್ನ ಹೆಸರನ್ನು ಮರೆಮಾಡಿಬಿಡಲಿ ಎಂದು ನೀನು ಪಾರ್ಥಿಸು. ಸತ್ತ ನಂತರವೂ ಹೆಸರನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವ ಕೊರಗನ್ನು ನೀನು ಪಡಬೇಡ’ ಎಂದು ಖ್ಯಾತಿಯ ಮತ್ತು ಪ್ರಶಂಸೆಯ ಹಿಂದೆ ಓಡುವವರಿಗೆ ಒಂದು ಕಿವಿಮಾತನ್ನು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 655,
    english:
      'Who is the person who thought rice and be boiled for food? Who is the first person to use the alphabet to write? The world has not kept notes of its own ancestors who have contributed this immensely to its progress. Do you think you can attain fame that has eluded these people?" - Mankutimma',
    kannada:
      "ಅಕ್ಕಿಯೊಳಗನ್ನವನು ಮೊದಲಾರು ಕಂಡವನು? ।\nಅಕ್ಕರದ ಬರಹಕ್ಕೆ ಮೊದಲಿಗನದಾರು? ॥\nಲೆಕ್ಕವಿರಿಸಿಲ್ಲ ಜಗ ತನ್ನಾದಿಬಂಧುಗಳ ।\nದಕ್ಕುವುದೆ ನಿನಗೆ ಜಸ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೫ ॥",
    kannada_explanation:
      '"ಇಂದು ಜಗತ್ತಿನ ಬಹುತೇಕ ಮಂದಿ ತಿನ್ನುವ ಅನ್ನವನ್ನು ಅಕ್ಕಿಯಿಂದ ಮಾಡಬಹುದು ಎಂದು ಕಂಡುಕೊಂಡಂತಹ ಮೊದಲ ಮಾನವನು ಯಾರು? ಅವನ ಹೆಸರೇ ಈ ಜಗತ್ತಿಗೆ ಗೊತ್ತೇ ಇಲ್ಲ!!!, ಅಲ್ಲವೇ? ನಾವಿಂದು ಬರೆಯುವ ಅಕ್ಷರಗಳನ್ನು ‘ಹೀಗೇ’ ಬರೆಯಬೇಕೆಂದು ಕಂಡುಹಿಡಿದವನು ಯಾರು ಎಂದು ನಮಗೆ ಗೊತ್ತಿಲ್ಲ. ಹೀಗೆ ಈ ಜಗತ್ತು, ಆದಿಯಲ್ಲಿ ಇಲ್ಲಿನ ವಸ್ತು ವಿಷಯಗಳನ್ನು ರೂಪಿಸಿದ ಆದಿ ಬಂಧುಗಳನ್ನೇ ಲೆಕ್ಕವಿರಿಸದೆ ಮರೆತುಹೋಗಿರುವಾಗ, ನೀನು ಯಾವ ಘನಕಾರ್ಯ ಮಾಡಿದ್ದೀಯೆ ಎಂದು ಯಶಸ್ಸನ್ನು ಅಪೇಕ್ಷೆಪಡುತ್ತಿದ್ದೀಯೆ? " ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾ ಹೆಸರು ಪ್ರಖ್ಯಾತಿಗಳ ಹುಚ್ಚು ಹಿಡಿದವರಿಗೆ ಎಚ್ಚರಿಕೆಯ ಮಾತನ್ನು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 656,
    english:
      'What is fame? It is a breeze that carries foul smell. Why do you think that you deserve a permanent place (name) in this world? In your mind you become a sinless child, or a cow, or a useful plant, or at least be a broom that cleans the world. (these are things that do a lot of good without expectation of any return)" - Mankutimma',
    kannada:
      "ಹೆಸರು ಹೆಸರೆಂಬುದೇಂ? ಕಸುರು ಬೀಸುವ ಗಾಳಿ ।\nಹಸೆಯೊಂದು ನಿನಗೇಕೆ ಬ್ರಹ್ಮಪುರಿಯೊಳಗೆ ॥\nಶಿಶುವಾಗು ನೀಂ ಮನದಿ, ಹಸುವಾಗು, ಸಸಿಯಾಗು ।\nಕಸಬೊರಕೆಯಾಗಿಳೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೬ ॥",
    kannada_explanation:
      "ಹೆಸರು ಹೆಸರೆಂಬುದು ಅದು ಏನು? ಕೊಳೆಯಿಂದ ಕೂಡಿದ ಉಸಿರು. ಈ ಜಗತ್ತಿನೊಳಗೆ ನಿನಗೆ ಬಿರುದು ಬಾವುಲಿಗಳ ಮನ್ನಣೆ ಏಕೆ ಬೇಕು? ಹಸುಗೂಸಿನಂತೆ ಮುಗ್ದನಾಗು, ಸಾಧು ಭಾವದ ಹಸುವಿನಂತಾಗು, ಮುಂದೆ ಗಿಡವಾಗಿ ಹೆಮ್ಮರವಾಗಿ ಹೂ, ಹಣ್ಣು ಮತ್ತು ಸುಗಂಧವನ್ನು ನೀಡುವ ಪುಟ್ಟ ಸಸಿಯಾಗು, ನಿನ್ನ ಮನಸ್ಸಿನ ಕಲ್ಮಷಗಳನ್ನು ಗುಡಿಸಿಹಾಕಲು ನೀನೇ ಒಂದು ಪೊರಕೆಯಾಗು ಎಂದು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಖ್ಯಾತಿಯ ಬಯಕೆಯನ್ನು ಹತ್ತಿಕ್ಕಿ ಸಹಜವಾಗಿ ಹೇಗೆ ಬಾಳಬೇಕೆಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 657,
    english:
      'People do not leave the path of dharma and follow a muddy road not just for the well known reasons - wealth and women. They do it even for name and fame. There are enough sins committed by people to attain a good name and an ever spreading and never ending fame." - Mankutimma',
    kannada:
      "ಸಿರಿಮಾತ್ರಕೇನಲ್ಲ, ಪೆಣ್ ಮಾತ್ರಕೇನಲ್ಲ ।\nಕರುಬಿ ಜನ ಕೆಸರುದಾರಿಯಲಿ ಸಾಗುವುದು ॥\nಬಿರುದ ಗಳಿಸಲಿಕೆಸಪ, ಹೆಸರ ಪಸರಿಸಲೆಸಪ ।\nದುರಿತಗಳ್ಗೆಣೆಯುಂಟೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೭ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಜನರು ಕೆಟ್ಟ ದಾರಿಯಲ್ಲಿ ಹೋಗುವುದು ಕೇವಲ ಹಣವನ್ನು ಸಂಪಾದಿಸುವುದಕ್ಕೆ ಮಾತ್ರವಲ್ಲ, ಹೆಣ್ಣನ್ನು ಮೆಚ್ಚಿಸಲಿಕ್ಕಾಗಲೀ ಅಥವಾ ಪಡೆಯಲಿಕ್ಕಾಗಲೀ ಮಾತ್ರವಲ್ಲ. ಹೆಸರು ಗಳಿಸುವುದಕ್ಕೆ ಮತ್ತು ಆ ಗಳಿಸಿದ ಹೆಸರನ್ನು ಜಗತ್ತಿನ ನಾಲ್ಕೂ ಮೂಲೆಗಳಿಗೆ ಪ್ರಚಾರಮಾಡಿಕೊಳ್ಳಲಿಕ್ಕೆ ಇವನು ತುಳಿಯುವ ದುರ್ದಾರಿಗಳಿಗೆ, ಮಾಡುವ ಪಾಪಗಳಿಗೆ ಮಿತಿಯೇ ಇಲ್ಲ ಎಂದು ಇಂದಿಗೂ ಪ್ರಸ್ತುತವಾಗುವಂತೆ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 658,
    english:
      'You will rise and fall. You will fight and lose. You will create lot of noise to get fame. You claim to uplift the entire world. Oh friend! have you seen how much of uplift have you done to yourself (your soul) in the process?" - Mankutimma',
    kannada:
      "ಎದ್ದೆದ್ದು ಬೀಳುತಿಹೆ, ಗುದ್ದಾಡಿ ಸೋಲುತಿಹೆ ।\nಗದ್ದಲವ ತುಂಬಿ ಪ್ರಸಿದ್ಧನಾಗುತಿಹೆ ॥\nಉದ್ಧರಿಸುವೆನು ಜಗವನೆನ್ನುತಿಹ ಸಖನೆ, ನಿ- ।\nನ್ನುದ್ಧಾರವೆಷ್ಟಾಯ್ತೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೮ ॥",
    kannada_explanation:
      "ಬಡಗಿ, ರೈತ, ಕಮ್ಮಾರ, ಕುಂಬಾರ ಮುಂತಾದ ಕುಶಲ ಕರ್ಮಿಗಳೆಲ್ಲ ‘ಯೋಗ’ವನ್ನು ಕಲಿತವರೇನು? ಅವರ ಜೀವನವೆಲ್ಲ ಮೈಬಗ್ಗಿಸಿ ಮಾಡುವ ದುಡಿತಕ್ಕೆ ಮೀಸಲಾಗಿರುತ್ತದೆ. ಬಿಡುವಿಲ್ಲದ ಕೆಲಸಕಾರ್ಯಗಳ ಮಧ್ಯೆ ಅವರಿಗೆ ವ್ಯರ್ಥ ಹರಟೆಗೆ ಸಮಯವಿರುವುದಿಲ್ಲ. ಅವರು ಸದಾ ದುಡಿದು ತಿನ್ನುವವರಾದ್ದರಿಂದ, ಅವರಿಗೆ ಯಾರ ಹಂಗೂ ಇರುವುದಿಲ್ಲ. ಅಂತಹವರಿಗೆ ಬಾಳು ದುರ್ಗಮವೆನಿಸುವುದಿಲ್ಲ ಎಂದು ‘ಕಾಯಕ’ ದ ಮಹತ್ವವನ್ನು ಬಹಳ ಸುಂದರವಾಗಿ ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 659,
    english:
      "One of these days in the future your pride will be definitely broken. It's only a matter of when. Will the Gods not be jealous of a person flaunting his power? Fate will bring together all circumstances to facilitate your downfall. Once everything is right, he shall embrace you.\" - Mankutimma",
    kannada:
      "ಎಂದೊ ನಿನಗೊಂದುದಿನ ಮೂಗು ಮುರಿಯುವುದು ದಿಟ ।\nವೃಂದಾರಕರು ಮತ್ಸರಿಸರೆ, ಗರ್ವಿತರ? ॥\nಸಂದರ್ಭಗಳನದಕೆ ಜೋಡಿಪನು ವಿಧಿರಾಯ ।\nಅಂದಿಕೊಳ್ಳನೆ ನಿನ್ನ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೫೯ ॥",
    kannada_explanation:
      '"ಮುಂದೆ ಎಂದಾದರೂ ಒಂದು ದಿನ ಖಂಡಿತ ನಿನಗೆ ಗರ್ವ ಭಂಗವಾಗುತ್ತದೆ. ನಿನ್ನ ಪ್ರತಿಷ್ಠೆ ಹೆಚ್ಚಾದರೆ ಆ ದೇವತೆಗಳು ನಿನ್ನ ನೋಡಿ ಈರ್ಷ್ಯೆಪಡುತ್ತಾರೆ ಮತ್ತು ವಿಧಿರಾಯ ನಿಮ್ಮ ಗರ್ವ ಭಂಗಕ್ಕೆ ಸರಿಯಾದ ಸಂದರ್ಭಗಳನ್ನು ಸೃಷ್ಟಿಸಿ ನಿನ್ನನ್ನು ಬಗ್ಗು ಬಡಿಯದೆ ಇರುವನೇ?" ಎಂದು ವಾಸ್ತವವಾಗಿ ಜಗತ್ತಿನಲ್ಲಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದವರು ಅತಿಯಾಗಿ ತೋರುವ ಗರ್ವದ ಭಂಗ ಹೇಗಾಗುತ್ತದೆಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.',
  },
  {
    number: 660,
    english:
      'Lord Vishnu made Garuda and Arjuna lose their arrogance by showing to them how insignificant their achievements were. Providence is jealous of people who show off their arrogance. It does not tolerate them. It will arrange circumstances such that arrogance is punished appropriately. So, it is always good to be humble." - Mankutimma',
    kannada:
      "ಗರುವಭಂಗವನಾಗಿಸಿದನು ಗರುಡಂಗೆ ಹರಿ ।\nಮುರಿಯಿಸಿದನಂತೆ ಫಲುಗುಣನ ಹೆಮ್ಮೆಯನು ॥\nಕರುಬುವಿಧಿಸೈರಿಸನು ದರ್ಪವನದಾರೊಳಂ ।\nಶಿರವ ಬಾಗಿಹುದೆ ಸಿರಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೦ ॥",
    kannada_explanation:
      "ಗರುಡನ ತಾಯಿ ವಿನುತೆ, ತನ್ನ ಸವತಿ ಕದ್ರುವಿನೊಡನೆ ಪಂದ್ಯದಲ್ಲಿ ಸೋತು ಅವಳ ದಾಸ್ಯವನ್ನು ಸ್ವೀಕರಿಸುತ್ತಾಳೆ. ತಾಯನ್ನು ದಾಸ್ಯದಿಂದ ಬಿಡಿಸಲು ದೇವಲೋಕದಿಂದ ಅಮೃತವನ್ನು ತರಲು ಹೊರಟುದೇವತೆಗಳೊಡನೆ ಹೋರಾಡಿ, ಕಡೆಗೆ ದರ್ಪದಿಂದ ಇಂದ್ರನಮೇಲೆ ಯುದ್ಧಕ್ಕೆ ನಿಂತಾಗ, ಇಂದ್ರ ‘ಹರಿ’ಯ ಮೊರೆ ಹೋಗಲು, ಹರಿಯ ಪಾದದಡಿ ನಲುಗಿದ ಗರುಡನ ಗರ್ವ ಭಂಗವಾಗುತ್ತದೆಂದು ಭಾಗವತ ಪುರಾಣ ಹೇಳುತ್ತದೆ. ಅದೇ ರೀತಿ ಕುರುಕ್ಷೇತ್ರ ಯುದ್ಧದಲ್ಲಿ ವೀರಾವೇಶದಿಂದ ಹೋರಾಡುತ್ತಾ ತನಗೆ ಸಮಾನರಾರೂ ಇಲ್ಲವೆಂದು ಬೀಗುತ್ತಿದ್ದ ಅರ್ಜುನನಿಗೆ, ಕೇವಲ ಒಂದು ಹದ್ದಿನಿಂದ ಗರ್ವ ಭಂಗವಾಗುವಂತಹ ಪರಿಸ್ಥಿತಿಯನ್ನು ಉಂಟುಮಾಡುತ್ತಾನೆ ಶ್ರೀ ಕೃಷ್ಣ.",
  },
  {
    number: 661,
    english:
      'There are no drum rolls when a sprout rises out of the earth. No trumpets when fruits ripe. The Sun and the Moon who give us light work silently. You should stitch your lips shut." - Mankutimma',
    kannada:
      "ಇಳೆಯಿಂದ ಮೊಳಕೆಯೊಗವಂದು ತಮಟೆಗಳಿಲ್ಲ ।\nಫಲ ಮಾಗುವಂದು ತುತ್ತೂರಿ ದನಿಯಿಲ್ಲ ॥\nಬೆಳಕೀವ ಸೂರ್ಯಚಂದ್ರರದೊಂದು ಸದ್ದಿಲ್ಲ ।\nಹೊಲಿ ನಿನ್ನ ತುಟಿಗಳನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೧ ॥",
    kannada_explanation:
      '"ಇಳೆಯಿಂದ ಕುಡಿಯೊಡೆದು ಮೊಳಕೆ ಭೂಮಿಯ ಪದರವನ್ನು ಸೀಳಿಕೊಂಡು ಬರುವಾಗ ಯಾವುದೇ ಅಬ್ಬರ ಆರ್ಭಟಗಳಿಲ್ಲದೆ ಬರುತ್ತದೆ. ಮರದಲ್ಲಿ ಕಾತ ಕಾಯಿ ಹಣ್ನಾಗುವಾಗ’ ನಾನು ಹಣ್ಣಾಗುತ್ತಿದ್ದೇನೆ ‘ ಎಂದು ತುತ್ತೂರಿ ಊದಿ ಮಾಗುವುದಿಲ್ಲ. ಜಗತ್ತಿಗೆ ಬೆಳಕನ್ನು ಈವ ಸೂರ್ಯ ಚಂದ್ರರೂ ಸಹ ಶಬ್ದವಿಲ್ಲದೆ ತಮ್ಮ ತಮ್ಮ ಕೆಲಸವನ್ನು ಮಾಡಿ ಹೋಗುತ್ತಾರೆ. ಹಾಗಿದ್ದಲ್ಲಿ ನೀನು ಯಾವ ಮಹಾ ಸಾಧನೆ ಮಾಡಿದ್ದೀಯೆ ಎಂದು ಜಂಬಕೊಚ್ಚಿಕೊಳ್ಳುತ್ತೀಯೆ? ನಿನ್ನ ತುಟಿಗಳನ್ನು ಹೊಲಿದಿಕೋ" ಎಂದು ಸಲಹೆಯನ್ನು ಇತ್ತಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 662,
    english:
      'Practice dharma for ever without giving up like the Sun. Exhibit brilliance (even if it is just for a moment) like a lightning bolt. If circumstances grow beyond your control, then submit to the providence without asking too many questions (about why and who won)." - Mankutimma',
    kannada:
      "ಖದ್ಯೋತನಂತೆ ಬಿಡುಗೊಳದೆ ಧರ್ಮವ ಚರಿಸು ।\nವಿದ್ಯುಲ್ಲತೆಯ ತೆರದಿ ತೇಜಗಳ ಸೂಸು ॥\nಗೆದ್ದುದೇನೆಂದು ಕೇಳದೆ, ನಿನ್ನ ಕೈಮೀರೆ ।\nಸದ್ದುಮಾಡದೆ ಮುಡುಗು - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೨ ॥",
    kannada_explanation:
      "ಒಂದು ಕ್ಷಣವೂ ಬಿಡುವಿಲ್ಲದೆ ಬೆಳಕ ನೀಡುವ ತನ್ನ ಧರ್ಮವನ್ನು ಆಚರಿಸುವ ಸೂರ್ಯನಂತೆ, ಬೆಳಕ ನೀಡುವ ಮಿಂಚ ಬಳ್ಳಿಗಳಂತೆ, ನೀನೂ ಸಹ ಜಗತ್ತಿನಲ್ಲಿ ನಿನಗೆ ವಿಧಿಸಿದ ಧರ್ಮವನ್ನು ಆಚರಿಸಲು ಪ್ರಯತ್ನಿಸು. ‘ ಇಂದರಿಂದ ಏನು ಪ್ರಯೋಜನ ಎಂದು ನಿನ್ನ ಸಾಧನೆಯ ಪ್ರಾಯೋಜಕತೆಯನ್ನು ಲೆಕ್ಕ ಹಾಕದೆ, ನಿನ್ನ ಕ್ಷಮತೆ ಅಥವಾ ಯೋಗ್ಯತೆ ಇರುವಷ್ಟು ನೀನು ನೀಡು. ನಿನ್ನ ಕೈ ಮೀರಿದರೆ ನಿ:ಶಬ್ದವಾಗಿ, ಸದ್ದಿಲ್ಲದೇ ಆ ಪರಮಾತ್ಮನಿಗೆ ಶರಣಾಗಿ ಬಿಡು ಎಂದು ಹಿತಬೋಧೆಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 663,
    english:
      "Everything in this world have two values associated with it. One is the absolute value that is based just n the universal invariant truth about it. The other is relative value based on the context of valuation. You must try to find out both. While you are trying to evaluate the situational value of anything, don't forget the intrinsic innate absolute value.\" - Mankutimma",
    kannada:
      "ಎರಡುತೆರ ಮೌಲ್ಯಂಗಳೆಲ್ಲಕಂ ಲೋಕದಲಿ ।\nಪರಮಾರ್ಥಕೊಂದು, ಸಾಂಪ್ರತದರ್ಥಕೊಂದು ॥\nಪರಿಕಿಸೆರಡಂ ನೀನು; ಹೊರಬೆಲೆಯ ಗುಣಿಪಂದು ।\nಮರೆಯಬೇಡೊಳಬೆಲೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೩ ॥",
    kannada_explanation:
      'ಈ ಲೋಕದಲ್ಲಿ ಎಲ್ಲಕ್ಕೂ ಎರಡು ಬಗೆಯ ಅರ್ಥವುಂಟು ಮತ್ತು ಎರಡು ಬಗೆಯ ಮೌಲ್ಯಗಳುಂಟು. ಇಹಕ್ಕೊಂದು ಅರ್ಥ ಮತ್ತು ಮೌಲ್ಯ ಮತ್ತು ಪರಕ್ಕೊಂದು ಅರ್ಥ ಮತ್ತು ಮೌಲ್ಯ. "ನೀನು ಇವೆರಡನ್ನೂ ಪರೀಕ್ಷಿಸಿ ನೋಡು. ಮೌಲ್ಯಗಳ ಲೆಕ್ಕಾಚಾರವನ್ನ್ಹು ಹಾಕುವಾಗ ಮೇಲೆ ತೋರುವ ಅರ್ಥ ಮತ್ತು ಮೌಲ್ಯದ ಜೊತೆಗೆ ಪರಮಾರ್ಥ ಮತ್ತು ಅಂತರ್ಮೌಲ್ಯಗಳನ್ನು ನೀ ಮರೆಯಬೇಡ’ ಎಂದು ನಮ್ಮನ್ನು ಎಚ್ಚರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 664,
    english:
      'Every transaction that man carries out results in two kinds of accounting. One for the external world (monies and goods) and other for his own conscience. The income got from the first account is used up for the benefit of the body. But how does the mind benefit? think about the second account." - Mankutimma',
    kannada:
      "ನರನೊಂದುವೆವಹಾರಕೆರಡಾಯವೆಯ ಲೆಕ್ಕ ।\nಹೊರಗಣನುಭೋಗಕೊಂದೊಳನೀತಿಗೊಂದು ॥\nವರಮಾನ ದೇಹಕಾದೊಡೆ ಮಾನಸಕದೇನು? ।\nಪರಕಿಸಾ ಲೆಕ್ಕವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೪ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯರ ವ್ಯವಹಾರಕ್ಕೆ ಎರಡು ಆಯಾಮಗಳು ಇರುತ್ತವೆ. ಒಂದು ‘ಆಯ’ ಮತ್ತು ಎರಡನೆಯದು ‘ವ್ಯಯ’. ಅವನ ಅನುಭವವೆಲ್ಲಕ್ಕೂ ಎರಡು ಮುಖಗಳಿರುತ್ತದೆ. ಒಂದು ಬಾಹ್ಯಾನುಭವಕ್ಕೆ ಮತ್ತೊಂದು ಒಳಗಿನ ನೀತಿಗೊಂದು. ಎಲ್ಲ ಅನುಭವಗಳು ದೇಹಕ್ಕಾದರೆ ಮನಸ್ಸಿಗೇನು. ಅದನ್ನು ಕೊಂಚ ಪರೀಕ್ಷಿಸಿ ನೋಡಿಕೋ ಎಂದು ನಮಗೆ ನಿರ್ದೇಶಿಸುತ್ತಾ, ಅಂತರಂಗ ಮತ್ತು ಬಹಿರಂಗದ ಅನುಭವಗಳನ್ನು ಪಡೆದುಕೊಳ್ಳುವ ಬಗೆಯನ್ನು ತಿಳಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 665,
    english:
      'We do some actions to satisfy our hunger. Those actions may cause mental agony (if we had to sell our respect). There are other actions we do only to please our mind. Those actions may endanger our lives (like a crime of passion). One experience leads to another in terms of causation. We should always evaluate the effect of any action in terms of what it does to our soul." - Mankutimma',
    kannada:
      "ತನುವ ತಣಿಸುವ ತುತ್ತು ಮನಕೆ ನಂಜಾದೀತು ।\nಮನಮೋಹ ಜೀವಕ್ಕೆ ಗಾಳವಾದೀತು ॥\nಅನುಭವದ ಪರಿಣಾಮವೊಂದರಿಂದೊಂದಕ್ಕೆ ।\nಗಣಿಸಾತ್ಮಲಾಭವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೫ ॥",
    kannada_explanation:
      "ದೇಹಕ್ಕೆ ಹಿತವೆನಿಸುವ ಮತ್ತು ನಾಲಿಗೆಗೆ ರುಚಿಯಾದ ಆಹಾರದ ತುತ್ತು ಮನಸ್ಸಿಗೆ ವಿಷವಾಗಬಹುದು. ಮನಸ್ಸಿನ ಮೋಹ ಆತ್ಮವನ್ನು ಬಂಧನಕ್ಕೆ ಸಿಲುಕಿಸುವ ಗಾಳವಾಗಬಹುದು. ನಮಗಾಗುವ ಒಂದು ಅನುಭವದ ಪರಿಣಾಮ ಬಹು ವಿಧದಲ್ಲಿ ನಮ್ಮ ಮೇಲೆ ಆಗುತ್ತದೆ. ಆದರೆ ಆ ಪರಿಣಾಮಗಳಲ್ಲಿ ಆತ್ಮಕ್ಕೇನು ಲಾಭವಾಯಿತು ಎಂದು ನೀನು ಎಚ್ಚರನಾಗಿರು ಎಂದು ಒಂದು ಸಂದೇಶವನ್ನು ಮತ್ತು ಎಚ್ಚರಿಕೆಯ ಮಾತನ್ನು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 666,
    english:
      'In this market place of life, there are hundreds of commodities. They come from various villages, various streets, various home and various souls. Each philosophy has its own place of origin and its own value. Variety and diversity is the only rule. It is not fair to expect uniformity," - Mankutimma',
    kannada:
      "ನೂರಾರು ಸರಕುಗಳು ಜೀವಿತದ ಸಂತೆಯಲಿ ।\nಊರಿನವು, ಕೇರಿಯವು, ಮನೆಯವಾತ್ಮದವು ॥\nಬೇರೆ ಬೇರೆ ಪುರಳ್ಗೆ ಬೇರೆ ನೆಲೆ, ಬೇರೆ ಬೆಲೆ ।\nತಾರತಮ್ಯವೆ ತತ್ತ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೬ ॥",
    kannada_explanation:
      "ಬದುಕಿನ ಸಂತೆಯಲ್ಲಿ ನೂರಾರು ವಸ್ತುಗಳು. ಕೆಲವು ನಮ್ಮ ಊರಿನವು, ಕೆಲವು, ನಮ್ಮ ಬೀದಿಯದ್ದು, ಕೆಲವು ನಮ್ಮ ಮನೆಯದ್ದು ಮತ್ತು ಕೆಲವು ಆತ್ಮದ್ದು. ಎಲ್ಲಕ್ಕೂ ಅದರದರದೇ ಸ್ಥಳ ಮತ್ತು ಅದರದರದೇ ಬೆಲೆ. ಈ ವಸ್ತುಗಳಲ್ಲಿ ತಾರತಮ್ಯವನ್ನು ಅರಿತು ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ ಯಾವುದಕ್ಕೆ ಎಷ್ಟು ಬೆಲೆ ಕೊಡಬೇಕು, ಯಾವುದಕ್ಕೆ ಯಾವ ಸ್ಥಾನಕೊಡಬೇಕು ಎಂದು ಅರಿತು ಬದುಕುವುದೇ ಬದುಕಿನ ತತ್ವ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 667,
    english:
      'If there is a fire burning your house, you must rush to run and douse it. If there is a similar flame in the corner of your mind and irritating you - you must stay away from it as much as possible. When you rush to give help to your body, you must take care not to disturb the state of balance in your mind." - Mankutimma',
    kannada:
      "ಮನೆಯ ಸುಡುತಿಹ ಬೆಂಕಿಯುರಿಯನಾರಿಸೆ ನುಗ್ಗು ।\nಮನವ ಸುಡುವುರಿಯಿಂದ ದೂರ ನೀಂ ನಿಲ್ಲು ॥\nತನುವಿಗುಪಕೃತಿಗೆಯ್ವ ಭರದಿ ನೀನಾತುಮದ ।\nಅನುನಯವ ಕೆಡಿಸದಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೭ ॥",
    kannada_explanation:
      "ಮನಗೆ ಬೆಂಕಿ ಹೊತ್ತಿಕೊಂಡರೆ, ಅದನ್ನು ಆರಿಸಲು ನುಗ್ಗು. ಆದರೆ ಮನಸ್ಸನ್ನು ಸುಡುವ ಬೆಂಕಿಯಿಂದ ದೂರ ಇರು. ದೇಹಕ್ಕೆ ಆನಂದವನ್ನು ನೀಡುವ ಅತಿಯಾದ ಆಸೆಯಿಂದ ಆತ್ಮವನ್ನು ಕಡೆಗಣಿಸಬೇಡ ಎಂದು ಒಂದು ಸೂಕ್ತ ತಿಳುವಳಿಕೆಯನ್ನು ನೀಡಿದ್ದಾರೆ, ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ .",
  },
  {
    number: 668,
    english:
      "The carpenters, the farmers and other hard workers are fortunate and saints in their own way. All their mental energy is focused on the work at hand. They do not have any spare time for gossip, jealousy and other worries. They get returns for their work and don't have to depend on others for food. Life is not seem 'tough' for them.\" - Mankutimma",
    kannada:
      "ಬಡಗಿ ಬೇಸಾಯಿ ಕರ್ಮಿಗರೇನು ಯೋಗಿಗಳೊ! ।\nಮುಡಿಪವರ ಮನಸೆಲ್ಲ ಕೈಯ ದುಡಿತಕ್ಕೆ ॥\nಬಿಡುವಿರದು ಬಣಗು ಚಿಂತೆಗೆ, ಬುತ್ತಿ ಹಂಗಿರದು ।\nಕಡಿದಲ್ಲವರ್ಗೆ ಬಾಳ್ - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೮ ॥",
    kannada_explanation:
      "ಬಡಗಿ, ರೈತ, ಕಮ್ಮಾರ, ಕುಂಬಾರ ಮುಂತಾದ ಕುಶಲ ಕರ್ಮಿಗಳೆಲ್ಲ ‘ಯೋಗ’ವನ್ನು ಕಲಿತವರೇನು? ಅವರ ಜೀವನವೆಲ್ಲ ಮೈಬಗ್ಗಿಸಿ ಮಾಡುವ ದುಡಿತಕ್ಕೆ ಮೀಸಲಾಗಿರುತ್ತದೆ. ಬಿಡುವಿಲ್ಲದ ಕೆಲಸಕಾರ್ಯಗಳ ಮಧ್ಯೆ ಅವರಿಗೆ ವ್ಯರ್ಥ ಹರಟೆಗೆ ಸಮಯವಿರುವುದಿಲ್ಲ. ಅವರು ಸದಾ ದುಡಿದು ತಿನ್ನುವವರಾದ್ದರಿಂದ, ಅವರಿಗೆ ಯಾರ ಹಂಗೂ ಇರುವುದಿಲ್ಲ. ಅಂತಹವರಿಗೆ ಬಾಳು ದುರ್ಗಮವೆನಿಸುವುದಿಲ್ಲ ಎಂದು ‘ಕಾಯಕ’ ದ ಮಹತ್ವವನ್ನು ಬಹಳ ಸುಂದರವಾಗಿ ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 669,
    english:
      'Life begins. It progresses in which ever way possible - this, that, any which way. Finally it ends. It is best to forget it once it finishes. The fact that it will definitely end - now or a little later - is a fortune that we should relish." - Mankutimma',
    kannada:
      "ಹಾಗೆಯೋ ಹೀಗೆಯೋ ಹೇಗೆ ಹೇಗೆಯೊ ಜನುಮ ।\nಸಾಗಿ ಮುಗಿವುದು; ಮುಗಿದು ಮರೆವುದದೆ ಸುಕೃತ ॥\nಈಗಲೊ ಆಗಲೋ ಎಂದೊ ಮುಗಿವುಂಟೆಂಬ ।\nಭಾಗ್ಯವನು ನೆನೆದು ನಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೬೯ ॥",
    kannada_explanation:
      "ಹೇಗೋ ಒಂದು ರೀತಿಯಲ್ಲಿ, ಹುಟ್ಟಿದ ನಮಗೆಲ್ಲಾ ಸಾವು ನಿಶ್ಚಿತ. ಈ ಜನುಮದಲ್ಲಿ ಹಿಂದಿನ ಜನುಮದ ನೆನಪಿಲ್ಲ. ಮುಂದಿನ ಜನುಮದಲ್ಲಿ ಇಂದಿನ ಜನುಮದ ನೆನಪಿರುವುದಿಲ್ಲ. ಅದೇ ನಮ್ಮ ಪುಣ್ಯ. ಕಡೆಗೂ ಒಂದು ದಿನ ಇದಕ್ಕೆಲ್ಲಾ ಅಂತ್ಯವಾಗುವುದು ಎಂಬ ಭಾಗ್ಯ ನಮಗೆ ಇದೆಯಲ್ಲಾ ಎಂದು ಸಂತಸಿಸಬೇಕು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 670,
    english:
      'Has anyone been able to find a medicine for all ailments that can affect man? Is there any solution to the wretched behavior of man? We have no other way but to tolerate these by biting our teeth hard - just like the earth patiently holds the inner heat concealed." - Mankutimma',
    kannada:
      "ಬರುವೆಲ್ಲ ಬೇನೆಗಂ ಮದ್ದನಾರಿರಿಸಿಹರು? ।\nನರರ ಕೀಳ್ತನಕೆಲ್ಲ ಪರಿಹಾರವೆಂತು? ॥\nಕಿರಿದು ಪಲ್ಲನು ತಾಳಿಕೊಳಲೆಬೇಕಷ್ಟಿಷ್ಟು ।\nಧರೆಯಂತರುಷ್ಣವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೦ ॥",
    kannada_explanation:
      "ಹೊಸಹೊಸದಾಗಿ ಬರುವ ರೋಗಗಳಿಗೆಲ್ಲ ಔಷಧವನ್ನು ಯಾರು ಕಂಡುಹಿಡಿದಿದ್ದಾರೆ? ಅದೇ ರೀತಿ ಈ ಜಗತ್ತಿನ ಮನುಷ್ಯರು ಹೊಸಹೊಸದಾಗಿ ಕಲಿಯುವ ದುರ್ಬುದ್ಧಿಗೆ ಪರಿಹಾರವೆಲ್ಲಿದೆ?. ನಾವು ಈ ಜಗತ್ತಿನಲ್ಲಿರಬೇಕು ಎಂದರೆ ಇಂತಹ ಅಂತರಂಗದ ಬಿಸಿಯನ್ನು ತಾಳ್ಮೆಯಿಂದ ನಗುನಗುತ್ತಾ ಸಾಧ್ಯವಾದಷ್ಟು ತಡೆದುಕೊಳ್ಳಬೇಕು, ಬೇರೆ ದಾರಿಯಿಲ್ಲ ಎಂಬಂತೆ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 671,
    english:
      'You are beggar in this world seeking alms (not being in control yourself). That being so, what value does your jealousy or anger have? If the person giving alms says a harsh word or two, do you stare back and yell? No, you just suck it up and collect alms. What else is there in this world that you can take pride on?" - Mankutimma',
    kannada:
      "ತಿರಿದನ್ನವುಂಬಂಗೆ ಹುರುಡೇನು, ಹಟವೇನು ।\nತಿರುಪೆಯಿಡುವರು ಕುಪಿಸಿ ಬಿರುನುಡಿಯ ನುಡಿಯೆ ॥\nದುರದುರನೆ ನೋಡಿ ನೀನೆದುರುನುಡಿ ನುಡಿಯುವುದೆ? ।\nಗರುವವೇತಕೆ ನಿನಗೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೧ ॥",
    kannada_explanation:
      "ಭಿಕ್ಷೆ ಬೇಡಿ ತಿನ್ನುವವನಿಗೆ ಪೈಪೋಟಿ, ಹಠ ಇರಬಹುದೇ? ತಿರುಪೆ ನೀಡುವವನ ಮೇಲೆ ಕೋಪಿಸಿಕೊಂಡು ಅವನನ್ನು ಬಿರುಸಾದ ನುಡಿಗಳಿಂದ ನೀನು ನುಡಿಯಬಹುದೇ? ಬೇಡುವುದೇ ಭಿಕ್ಷೆಯಾದಮೇಲೆ ನಿನಗೆ ಗರ್ವವಿರಬಹುದೇ? ಎಂದು ಒಂದು ಗಹನವಾದ ವಿಚಾರವನ್ನು ನಮ್ಮ ಮುಂದೆ ಇಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 672,
    english:
      'We are tourists who are visiting this holy place (this world). We stay at this free hostel. We have to abide by the rules of this place. After three nights, we have to leave. If we do so as soon as we are asked to leave, then the care-taker (God) will be happy." - Mankutimma',
    kannada:
      "ಯಾತ್ರಿಕರು ನಾವು, ದಿವ್ಯಕ್ಷೇತ್ರವೀ ಲೋಕ ।\nಸತ್ರದಲಿ ನೇಮದಿಂದಿರಲಿಕೆಡೆಯುಂಟು ॥\nರಾತ್ರಿ ಮೂರಾಯ್ತು ಹೊರಡೆನೆ ತೆರಳಿದೊಡೆ, ಪಾರು- ।\nಪತ್ಯದವ ಮೆಚ್ಚುವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೨ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತು ಒಂದು ಧರ್ಮಛತ್ರವಿದ್ದಂತೆ. ಇಲ್ಲಿ ತಂಗಲು ಕೆಲವು ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಬೇಕು. ನಿಯಮದ ಪ್ರಕಾರ ಅಲ್ಲಿದ್ದು, ಹೊರಡೆಂದಾಗ ಹೊರಟರೆ, ಅದರ ಮೇಲ್ವಿಚಾರಕ ಮೆಚ್ಚುವನು. ಇಲ್ಲದಿದ್ದರೆ ಬಲವಂತವಾಗಿ ಹೊರದಬ್ಬುವನು, ಎಂದು ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಮ್ಮ ಬದುಕಿಗಿರುವ ನಿಯಮವನ್ನು, ಒಂದು ಉಪಮೆಯ ಆಧಾರದಿಂದ ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 673,
    english:
      'You shall not get a grain more or a grain less. After having collected the debt of rice, you should leave this world. The time of departure does not get a second faster nor does it get delayed even by a second. All the necessary calculations are already taken into account. " - Mankutimma',
    kannada:
      "ಒಂದಗಳು ಹೆಚ್ಚಿರದು, ಒಂದಗಳು ಕೊರೆಯಿರದು ।\nತಿಂದು ನಿನ್ನನ್ನಋಣ ತೀರುತಲೆ ಪಯಣ ॥\nಹಿಂದಾಗದೊಂದು ಚಣ, ಮುಂದಕುಂ ಕಾದಿರದು ।\nಸಂದ ಲೆಕ್ಕವದೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೩ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಜೀವನದಲ್ಲಿ ನಾವು ಸೇವಿಸಬೇಕಾದ ಆಹಾರದ ಒಂದು ಅಗಳೂ ಅಧಿಕವಾಗದು ಅಥವಾ ಒಂದು ಅಗಳೂ ಕಡಿಮೆಯಾಗದು. ಹೀಗೆ ನಮ್ಮ ಅನ್ನದ ಋಣ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಮುಗಿದೊಡನೆಯೇ ಇಲ್ಲಿಂದ ಪಯಣ ಬೆಳಸಬೇಕು. ನಮಗೆ ಎಷ್ಟು ದಿನ ಎಷ್ಟು ಗಂಟೆ ಮತ್ತು ಎಷ್ಟು ಕ್ಷಣ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇರಬೇಕೋ ಅದಕ್ಕಿಂತ ಒಂದು ಕ್ಷಣ ಕಡಿಮೆಯೋ ಅಥವಾ ಒಂದು ಕ್ಷಣ ಅಧಿಕವಾಗೋ ಇಲ್ಲಿ ಇರಲಾಗದು. ಲೆಕ್ಕ ಮುಗಿದ ಒಡನೆಯೇ ನಮ್ಮ ಇಹಲೋಕದ ಪ್ರಯಾಣ ಕೈಗೊಳ್ಳಬೇಕು ಎಂದು ಬದುಕಿನ ಅನಿವಾರ್ಯತೆಯನ್ನು ನಮಗೆ ಈ ಸಾಲುಗಳಲ್ಲಿ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 674,
    english:
      "There are as many cradles as funerals in this world. We celebrate at the sight of a cradle without realizing that it will be consumed by a funeral. If those who are born don't die, then where is place for the newly born?\" - Mankutimma",
    kannada:
      "ತೊಟ್ಟಿಲುಗಳೆಷ್ಟೊ ಮಸಣಗಳಷ್ಟು ಧರೆಯೊಳಗೆ ।\nತೊಟ್ಟಲಿಗೆ ಹಬ್ಬ ಮಸಣವು ತೇಗುತಿರಲು ॥\nಹುಟ್ಟಿದವರೆಲ್ಲ ಸಾಯದೆ ನಿಲ್ತೆ, ಹೊಸತಾಗಿ ।\nಹುಟ್ಟುವರ್ಗೆಡೆಯೆಲ್ಲಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹುಟ್ಟಿದವರಿಗಾಗಿ ಇರುವ ತೊಟ್ಟಿಲುಗಳು ಎಷ್ಟು ಇವೆಯೋ, ಸತ್ತವರಿಗಾಗಿ ಸ್ಮಶಾನಗಳೂ ಅಷ್ಟೇ ಇವೆ. ಸ್ಮಶಾನವು ಸತ್ತವರನ್ನು ಸ್ವೀಕರಿಸಿ ಹೇಗೆ ನುಂಗಿ ತೇಗುತ್ತದೆಯೋ ಹಾಗೆಯೇ ಹುಟ್ಟಿದವರನ್ನು ಸ್ವೀಕರಿಸಿ ಹಬ್ಬವನ್ನಾಚರಿಸುತ್ತವೆ ತೊಟ್ಟಿಲುಗಳು. ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹುಟ್ಟಿದವರೆಲ್ಲ ಸಾಯದೆ ಇಲ್ಲೇ ಉಳಿದುಬಿಟ್ಟರೆ ಹೊಸದಾಗಿ ಹುಟ್ಟುವವರಿಗೆ ಸ್ಥಳವೇ ಇಲ್ಲದಂತಾಗುತ್ತದೆ ಎಂದು ಹುಟ್ಟು ಸಾವುಗಳ ಅನಿವಾರ್ಯತೆಯನ್ನು ವಿಶಧೀಕರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 675,
    english:
      'The amount of pleasures one can enjoy in his lifetime is not limitless. If one lets his eyes wander all around, then the only result would be to slip from the righteous ways. Greed always results in adverse results." - Mankutimma',
    kannada:
      "ಅಪರಿಮಿತವೇನಲ್ಲ ಜೀವನಕೆ ಲಭ್ಯ ಸುಖ ।\nಚಪಲದಿಂ ಕಣ್ಣನತ್ತಿತ್ತಲಲಸುತಿರೆ ॥\nಸ್ವಪರಿಸ್ಥಿತಿಯ ಧರ್ಮ ನಷ್ಟವಹುದೊಂದೆ ಫಲ ।\nವಿಫಲ ವಿಪರೀತಾಶೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೫ ॥",
    kannada_explanation:
      "ಜೀವನದಲ್ಲಿ ಎಲ್ಲರಿಗೂ ಸುಖಪಡಲು ಸಾಧ್ಯವಿದೆ. ಆದರೆ ನಮಗೆ ಸುಖನೀಡುವ ಆ ‘ಸುಖ’ ಸಾಧನಗಳಿಗೆ ಮಿತಿಯಿದೆ. ನಾವು ಇರುವ ಪರಿಸ್ಥಿತಿಯ ಧರ್ಮದ ಚೌಕಟ್ಟನ್ನು ಮೀರಿ, ಚಪಲತೆ ಮತ್ತು ಅತಿ ಆಸೆಯಿಂದ, ಸುಖವನ್ನು ನಾನಾ ಕಡೆ ಅರಸಿದರೆ, ಅದು ಮರೀಚಿಕೆಯಂತೆ ಕೈಗೆ ಎಟುಕದೆ, ಸಂದ ಸುಖವನ್ನೂ ಅನುಭವಿಸಲಾಗದೆ, ವಿಪರೀತ ಆಸೆಯಿಂದ ಕೇವಲ ವೈಫಲ್ಯವನ್ನು ಅನುಭವಿಸಬೇಕಾಗುತ್ತದೆ ಎಂದು ಸುಖವನ್ನು ಅನುಭವಿಸದೆ, ಅರಸುವುದರಲ್ಲೇ ವ್ಯರ್ಥ ಕಾಲಯಾಪನೆ ಮಾಡುವವರಿಗೆ ಒಂದು ಕಿವಿಮಾತನ್ನು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 676,
    english:
      "There will not be infinite variety in any one person's life. One can not get it all. If one understands the existence of such limit, then life will be fruitful. All the tastes can not be present in any one fruit. You must enjoy what ever fruit you get.\" - Mankutimma",
    kannada:
      "ಸ್ವಾರಸ್ಯವಮಿತಮಾರಿಗುಮಿರದು ಜೀವನದಿ ।\nಪಾರದಿರ್ಕೆಯ ನೆನೆದು ನೆಡೆಯಲದು ಸಫಲ ॥\nಸಾರಂಗಳ್ ಎಲ್ಲ ಪಣ್ಗಳವುಮ್ ಒಂದರೊಳಿರವು ।\nಆರೋಗಿಸಿರುವುದನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೬ ॥",
    kannada_explanation:
      "ಎಲ್ಲ ಹಣ್ಣುಗಳ ಸಾರ, ಸತ್ವ ಮತ್ತು ರುಚಿ ಒಂದೇ ಹಣ್ಣಿನಲ್ಲಿ ಇರಲು ಹೇಗೆ ಸಾಧ್ಯವಿಲ್ಲವೋ ಹಾಗೆಯೇ ನಮಗೆ ಜಗತ್ತಿನ ಎಲ್ಲ ಸುಖಗಳ ಅನುಭವವೂ ಒಂದೇ ಸಲ ಲಭ್ಯವಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ. ಯಾರಿಗೂ ಅ’ಮಿತ’ವಾದ, ‘ಪಾರ’ವಿಲ್ಲದ ಸ್ವಾರಸ್ಯ, ಸುಖ ಬದುಕಿನಲ್ಲಿ ಇರುವುದಿಲ್ಲ. ಪ್ರತಿಯೊಬ್ಬರ ಸುಖಕ್ಕೂ ಒಂದು ಮಿತಿಯಿರುತ್ತದೆ. ನಮಗೆ ಸಿಗುವ ಮತ್ತು ನಾವು ಅನುಭವಿಸಲಾಗುವ ಸಂತೋಷ ಮತ್ತು ಸುಖಗಳ ಮಿತಿಯನ್ನು ಅರಿತು ಅನುಭವಿಸಿ ಬಾಳಿದರೆ ಬದುಕು ಸಫಲವಾಗುತ್ತದೆ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 677,
    english:
      'Does it matter how much you eat? The body can assimilate only that much that the stomach can digest. Rest all is waste. Similarly, it does not matter how much wealth you accumulate. You can only use (and need) only handful of flour." - Mankutimma',
    kannada:
      "ಎಷ್ಟು ನೀನುಂಡರೇಂ? ಪುಷ್ಟಿ ಮೈಗಾಗುವುದು ।\nಹೊಟ್ಟೆ ಜೀರ್ಣಿಸುವಷ್ಟೆ; ಮಿಕ್ಕುದೆಲ್ಲ ಕಸ ॥\nಎಷ್ಟು ಗಳಿಸಿಟ್ಟೊಡಂ ನಿನಗೆ ದಕ್ಕುವುದೆಷ್ಟು? ।\nಮುಷ್ಟಿ ಪಿಷ್ಟವು ತಾನೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೭ ॥",
    kannada_explanation:
      "ನೀನು ಎಷ್ಟು ಆಹಾರವನ್ನು ತಿಂದರೂ, ಅದರಿಂದ ದೇಹಕ್ಕೆ ಪುಷ್ಟಿಸಿಗುವುದು, ನಿನ್ನ ದೇಹ ಜೀರ್ಣಿಸಿಕೊಳ್ಳುವಷ್ಟು ಮಾತ್ರ. ಅಧಿಕವಾಗಿ ತಿಂದದ್ದೆಲ್ಲ ಜೀರ್ಣವಾಗದೆ, ಮಲರೂಪದಲ್ಲಿ ಕಸವಾಗಿ ಹೊರಬರುತ್ತದೆ. ಎಷ್ಟು ಸಂಪತ್ತನ್ನು ಗಳಿಸಿದರೂ ಹಸಿವಾದಾಗ ನೀನು ಸೇವಿಸಲಾಗುವುದು ಕೇವಲ ಒಂದು ಮುಷ್ಠಿ ಅನ್ನ ತಾನೆ? ಎಂದು ಕೇಳುತ್ತಾ ನಮ್ಮ ಮಿತಿಗಳನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವಂತೆ ನಮಗೆ ಸೂಚನೆಯನ್ನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 678,
    english:
      'It is a satisfactory and an auspicious moment when fate the thread of affection is severed by Fate. It is these bondages that prevent the uplift of the soul. One can rejoice when those strings are cut." - Mankutimma',
    kannada:
      "ಧನ್ಯತಮವಾ ಘಳಿಗೆ, ಪುಣ್ಯತಮವಾ ಘಳಿಗೆ ।\nನಿನ್ನ ಮಮತೆಯ ನೂಲ ವಿಧಿಯ ಪರಿದಂದು ॥\nಉನ್ನತಿಯಿನಾತ್ಮವನು ತಡೆದಿಡುವ ಪಾಶಗಳು ।\nಛಿನ್ನವಾದಂದೆ ಸೊಗ - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೮ ॥",
    kannada_explanation:
      "ಆ ವಿಧಿಯ ನೆರವಿನಿಂದ ಆತ್ಮೋದ್ಧಾರಕ್ಕೆ ಅಡ್ಡಿಯಾಗಿರುವ, ಈ ಜಗತ್ತಿನ ಮೇಲಿನ ಮಮಕಾರ ಮೋಹಗಳ ಪಾಶದ ಕೊಂಡಿಗಳು ಎಂದು ಕಳಚಿಕೊಂಡು, ಕತ್ತರಿಸಿ ಹೋಗಿ ನಾಶವಾಗುತ್ತವೆಯೋ ಅಂದೇ ‘ಧನ್ಯ’ತಮವಾದಂತಹ ಮತ್ತು ‘ಪುಣ್ಯ’ತಮವಾದ ಘಳಿಗೆ ಮತ್ತು ಅದೇ ನಮಗೆ ಲಭಿಸುವ ಜೀವನದ ನಿಜವಾದ ಸೊಗಸು ಎಂದು ಈ ಜಗತ್ತಿನೊಂದಿಗೆ ನಮಗಿರುವ ಮೋಹ ಮತ್ತು ನಿರ್ಮೋಹದ ವಿಚಾರವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 679,
    english:
      'Will a grownup ever get hungry (jealous) if he sees kids enjoying beaten rice and jaggery? Will they also not enjoy the sight? Just like that, a wise man will look at this material world with detachment. He will neither feel happy or sad with the events that take place." - Mankutimma',
    kannada:
      "ಶಿಶುಗಳವಲಕ್ಕಿಬೆಲ್ಲದ ಸಂಭ್ರಮವ ನೋಡಿ ।\nಹಸಿವನೊಂದುವನೆ ಹಿರಿಯನು? ನಲಿಯದಿಹನೆ? ॥\nವಿಷಯಸಂಸಕ್ತಲೋಕವನ್ ಅನಾಸಕ್ತಿಯಿಂ- ।\nದೊಸೆದುನೋಳ್ಪನು ಜಾಣ - ಮಂಕುತಿಮ್ಮ ॥ ೬೭೯ ॥",
    kannada_explanation:
      "ಮಕ್ಕಳು ಅವಲಕ್ಕಿ ಬೆಲ್ಲವನು ತಿನ್ನುವುದನ್ನು ನೋಡಿ ಮನೆಯ ಹಿರಿಯರು ತಮಗೂ ಹಸಿವಾಗಿದೆಯೆಂದು ಅದನ್ನು ಅಪೇಕ್ಷಿಸುವರೆ? ಆ ಮಕ್ಕಳು ತಿನ್ನುವುದನ್ನು ನೋಡಿ ತಾವು ಸಂತೋಷಪಡುತ್ತಾರೆ ಅಲ್ಲವೇ? ಹಾಗೆಯೇ ವಿಷಯಗಳ ಆಸಕ್ತಿಯಲ್ಲಿ ಮುಳುಗಿರುವ ಜಗತ್ತಿನ ಜನರನ್ನು ನೋಡಿ ಅವರಲ್ಲಿ ಅನಾದರತೋರದಿದ್ದರೂ ಅನಾಸಕ್ತಿಯನ್ನು ತೋರುವವನೆ ಜಾಣ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 680,
    english:
      'A wise man looks at the world with such an affection that he sees himself in each one of them. This is comparable with the calm happiness in the face of a content (not hungry) man looking at people who are eating (no jealousy). It is also similar to the earnest enthusiasm of a teacher bestowing his knowledge to the interested students." - Mankutimma',
    kannada:
      "ಉಂಡಾತನುಣುತಿರುವರನು ಕಾಣ್ಬ ನಲವಿಂದ ।\nಪಂಡಿತನು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೊರೆವ ನಯದಿಂ ॥\nಕಂಡು ಲೋಕವನು ಸಂತೈಸುತಿರುವಂ ಜ್ಞಾನಿ ।\nಕಂಡೆಲ್ಲರೊಳು ತನ್ನ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೦ ॥",
    kannada_explanation:
      "ಊಟಮಾಡಿ ಹೊಟ್ಟೆ ತುಂಬಿದವನು ನಂತರ ಉಣ್ಣುವವರನ್ನು ‘ ನಿಧಾನವಾಗಿ ಆಗಲಿ’ ಸಾವಕಾಶ ತಿನ್ನಿ’ ಎನ್ನುವಂತಹ ಪ್ರೀತಿಯ ಮಾತನ್ನಾಡುವಂತೆ, ಒಬ್ಬ ನಿರಹಂಕಾರಿ ಪಂಡಿತನು ತನ್ನ ಶಿಷ್ಯರ ಜ್ಞಾನ ವೃದ್ಧಿಗಾಗಿ ನಲುಮೆಯಿಂದ, ತನ್ನ ಮಕ್ಕಳಂತೆ ಕಾಣುವಂತೆ, ಜ್ಞಾನಿಯಾದವನು ಲೋಕದ ಚರಾಚರಗಳಲ್ಲಿ ತನ್ನ ಪ್ರತಿಬಿಂಬವನ್ನೇ ಕಾಣುತ್ತಾ ಅರಿವಿಲ್ಲದ ಜನರಲ್ಲಿ ಅನಾದರ ತೋರದೆ ಅವರಲ್ಲಿ ಅರಿವನ್ನು ಮೂಡಿಸಲು ಮತ್ತು ಅವರನ್ನು ಔನ್ನತ್ಯಕ್ಕೆ ಕೊಂಡುಹೋಗಲು ಪ್ರಯತ್ನಿಸುತ್ತಾನೆ ಎಂದು ಸಜ್ಜನರ, ಸದ್ಗುರುಗಳ ಮತ್ತು ಸತ್ಪುರುಷರ ಲಕ್ಷಣವನ್ನು ನೀಡಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 681,
    english:
      'Why should now we talk about uncertainties of future? Let the future present itself and we shall think about it then. He who is arranging it all up is not your servant. He does not do it your liking or convenience. He has his own plans. So, live in the present and live life day by day. " - Mankutimma',
    kannada:
      "ಮುಂದೇನೊ, ಮತ್ತೇನೊ, ಇಂದಿಗಾ ಮಾತೇಕೆ? ।\nಸಂದರ್ಭ ಬರಲಿ, ಬಂದಾಗಳಾ ಚಿಂತೆ ॥\nಹೊಂದಿಸುವನಾರೊ, ನಿನ್ನಾಳಲ್ಲ, ಬೇರಿಹನು ।\nಇಂದಿಗಿಂದಿನ ಬದುಕು - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೧ ॥",
    kannada_explanation:
      "ಮುಂದೆ ಏನಾಗುವುದೋ ಹೇಗಾಗುವುದೋ ಎಂದು ಇಂದು ಚಿಂತಿಸಬೇಡ. ಆ ಸಂದರ್ಭ ಬಂದಾಗ ಆ ಚಿಂತೆ ಮಾಡು. ನಮಗೆ ನಮ್ಮ ಜೀವನದಲ್ಲಿ ನಡೆವುದೆಲ್ಲವನೂ ಹೊಂದಿಸುವವನು ಬೇರೆ ಯಾರೋ. ಹಾಗೆ ಹೊಂದಿಸುವವನು ನೀನು ಹೇಳಿದಂತೆ ಕೇಳುವ ನಿನ್ನ ಸೇವಕನಲ್ಲ. ಹಾಗಾಗಿ ಇಂದು ನೀ ಇಂದಿನ ಬದುಕನ್ನು ಬದುಕು ಎಂದು ಮಾನಸಿಕ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವ ಬಗೆಯನ್ನು ನಮಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 682,
    english:
      'Day to day, minute to minute you spend life by thinking (worrying) about the immediate future. All the while there is a different master who is choreographing your life. You should just look to live through this life." - Mankutimma',
    kannada:
      "ದಿವಸದಿಮ್ ದಿವಸಕ್ಕೆ, ನಿಮಿಷದಿಂ ನಿಮಿಷಕ್ಕೆ ।\nಭವಿಷಿಯವ ಚಿಂತಿಸದೆ ಬದುಕ ನೂಕುತಿರು ॥\nವಿವರಗಳ ಜೋಡಿಸುವ ಯಜಮಾನ ಬೇರಿಹನು ।\nಸವೆಸು ನೀಂ ಜನುಮವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೨ ॥",
    kannada_explanation:
      "ಮುಂದೇನಾಗುವುದೋ ಎಂದು ಚಿಂತಿಸದೆ ನಿತ್ಯದ ಬದುಕನ್ನು ಜೀವಿಸು. ನಮ್ಮ ಬದುಕಿನ ಅನುಕ್ಷಣವನ್ನೂ ಹೊಂದಿಸುವ ಜೋಡಿಸುವ ನಮ್ಮ ಯಜಮಾನ ಬೇರೆ ಇದ್ದಾನೆ. ಹಾಗಾಗಿ ಸುಮ್ಮನೆ ಬದುಕನ್ನು ಸವೆಸು ಎಂದು ಅನುದಿನವೂ ಚಿಂತೆಗಳ ಮಡುವಿನಲ್ಲಿ ಮುಳುಗಿರುವವರಿಗೆ ಒಂದು ಸಲಹೆಯನ್ನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 683,
    english:
      'Why do you worry when Sun is revolving non-stop every day? He will outlast everything in this world and take everything with him. We will have numerous lives during his lifetime. But our forgetfulness will consume everything and reset once in every birth. We should consider this as a boon because if we could remember across births, life would be very difficult." - Mankutimma',
    kannada:
      "ರವಿ ನಿಲದೆ ಸುತ್ತುತಿರೆ ಕೊರಗು ಕಳವಳವೇಕೊ ।\nಸವೆಯಿಸುತಲೆಲ್ಲವನು ಕಡೆಗೊಯ್ವನವನು ॥\nಕವಳಿಸುವುದೆಲ್ಲವನು ಮರೆವು; ಬಾಳೊಲ್ ಅದೊಂದು ।\nಶಿವಕೃಪೆಯ ಲಕ್ಷಣವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೩ ॥",
    kannada_explanation:
      "ಕಾಲದ ಪ್ರವಾಹ ನಿರಂತರ. ಅದರಂತೆಯೇ ಸೂರ್ಯೋದಯ ಸೂರ್ಯಾಸ್ಥಮಾನಗಳು ಅವ್ಯಾಹತ ನಡೆಯುತ್ತಲೇ ಇರುವಾಗ, ಕಾಲ ಕಳೆದಂತೆ ಎಲ್ಲಕ್ಕೂ ಒಂದು ಅಂತ್ಯವಿರುತ್ತದೆ. ಕಳೆದುಹೋದ ವಿಷಯಗಳೆಲ್ಲ ನಮ್ಮ ನೆನಪಿನಿಂದ ಮರೆಯಾಗುತ್ತದೆ. ಕಡೆಗೆ ಎಲ್ಲವನ್ನೂ ಮರೆತುಹೋಗುವ ವರವನ್ನು ನಮಗೆ ಪರಮಾತ್ಮ ಕರುಣಿಸಿದ್ದಾನೆ ಎಂದು ಜೀವನದ ನಶ್ವರತೆಯನ್ನು ಅರುಹಿ ಮತ್ತು ಎಲ್ಲವೂ ತಾತ್ಕಾಲಿಕವಾಗಿರುವಾಗ ನಿನಗೆ ಚಿಂತೆ ಮಾಡಲು ಏನಾದರೂ ಕಾರಣವಿದೆಯೇ? ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 684,
    english:
      'One determines the amount of grains in a heap by using measuring a fixed quantity (using a standard measuring device) repeatedly. Just like that, Sun measures our life span one day at a time. His son, Yama (God of death) keeps count of the measure. Of all the Gods, these two are the ones most helpful to mankind. They help us lose this body. (and perhaps become one with the universe)" - Mankutimma',
    kannada:
      "ದಿವಸಕೊಳಗದಿನ್ ಆಯುರಾಶಿಯನು ರವಿಯಳೆಯಲ್ ।\nಅವನ ಮಗ ಜವನ್ ಅದರ ಲೆಕ್ಕವಿರಿಸುವನು ॥\nದಿವಿಜರೊಳಗಿವರಿರ್ವರುಪಕಾರಿಗಳು ನಮಗೆ ।\nಸವೆಸುವರು ತನುಘಟವ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೪ ॥",
    kannada_explanation:
      "ನಾವು ಈ ಭೂಮಿಯ ಮೇಲೆ ಎಷ್ಟು ಗಂಟೆ, ಎಷ್ಟು ದಿವಸ, ಎಷ್ಟು ತಿಂಗಳು, ಎಷ್ಟು ವರ್ಷ ಬದುಕಿರುತ್ತೇವೆ ಎನ್ನುವುದು ನಮ್ಮ ಆಯಸ್ಸು. ಸೂರ್ಯನ ಉದಯ ಮತ್ತು ಅಸ್ತಮಾನಗಳ ಅಧಾರದ ಮೇಲೆ ನಾವು ಅದರ ಲೆಕ್ಕವನ್ನು ಹಾಕುತ್ತೇವೆ. ಹಾಗೆಯೇ ಸೂರ್ಯನ ಮಗನಾದ ಯಮನು ನಾವು ಎಷ್ಟು ದಿನ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇರಬೇಕು ಎಂದು ಲೆಕ್ಕವಿಟ್ಟುಕೊಂಡು, ಸರಿಯಾದ ಸಮಯಕ್ಕೆ ನಮ್ಮನ್ನು ಇಲ್ಲಿಂದ ಕರೆದುಕೊಂಡುಹೋಗುತ್ತಾನೆ . ಈ ದೇಹವನ್ನು ಸವೆಸುವುದರಲ್ಲಿ ಮತ್ತು ಇದರ ಅಂತ್ಯದಲ್ಲಿ ಈ ದೇವತೆಗಳಿಬ್ಬರು ನಮಗೆ ಬಹಳ ಉಪಕಾರ ಮಾಡುತ್ತಾರೆ ಎಂದು ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 685,
    english:
      'By some way or other, this life will end. It could happen today or some specified date in future or some unknown date. But end is definite. On that day, in a blink of an eye - we forget everything. In our next birth, we would not remember anything from past. This is the only reason to be happy." - Mankutimma',
    kannada:
      "ಅಂತೊ ಇಂತೋ ಎಂತೊ ಜೀವಕಥೆ ಮುಗಿಯುವುದು ।\nಅಂದೊ ಇಂದೋ ಎಂದೊ ಜನುಮ ಕಳೆಯುವುದು ॥\nಒಂದೆ ಮರೆವಿನ ಮುಸುಕು ಮುಸುಕಲಿಹುದೆಲ್ಲವನು ।\nಸಂತಸದ ಮಾತಿಷ್ಟೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೫ ॥",
    kannada_explanation:
      "ಹಾಗೋ ಹೇಗೊ ಹೇಗೋ ಒಂದು ಹಾಗೆ ಬದುಕಿನ ಕತೆಯೂ ಅಂತ್ಯವಾಗುವುದು ಈ ಜನ್ಮದ ಅಂತ್ಯದೊಂದಿಗೆ ಈ ಜನ್ಮದಲ್ಲಿ ನಡೆದ ಎಲ್ಲ ಘಟನೆಗಳ, ಅರಿತುಕೊಂಡ ಎಲ್ಲ ವಿಷಯಗಳ ಮತ್ತು ವ್ಯಕ್ತಿಗಳ ನೆನಪೂ ಮಾಸಿಹೋಗುವುದು. ಇಲ್ಲಿಂದ ಹೊರಡುವಾಗ ಅವುಗಳ ಮೂಟೆಯನ್ನು ಹೊತ್ತು ಹೋಗಬೇಕಾಗಿಲ್ಲವೆಂಬುದಷ್ಟೇ ಸಂತೋಷದ ವಿಷಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 686,
    english:
      'Life is filled with nothing but grouses, struggles and obstacles. There is no supporting stick that we can hold. Neither there is ample light to see the path. In spite of this, we muster all our strength, lose our sleep and crawl along some path. We aim to get through this life like this - it is an overambitious task." - Mankutimma',
    kannada:
      "ಎಲ್ಲ ಬರಿ ಗೊಣಗಾಟ, ತಿಣಕಾಟ, ತಡಕಾಟ ।\nಇಲ್ಲ ನಮಗೊರೆಕೋಲ್, ತಿಳಿಬೆಳಕುಮಿಲ್ಲ ॥\nಬಲ್ಲತನ ಮಬ್ಬಿನಲಿ ನಿದ್ರಿಸದೆ ತೆವಳುವುದು ।\nಸಲ್ಲದುಬ್ಬಟೆ ನಮಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೬ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ ನಾವು ಮಾಡುವುದೆಲ್ಲವೂ ಒಂದು ರೀತಿಯ ತಿಣುಕಾಟ, ಪರದಾಟ. ಅದನ್ನು ಮಾಡಲು ನಮ್ಮ ತಡಕಾಟ ಮತ್ತು ಗೊಣಗಾಟ. ಬದುಕಿನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ನಿಲ್ಲಲು ನಮಗೆ ಒಂದು ಊರುಗೋಲಿಲ್ಲ ಅಥವಾ ತಿಳಿಯಾದ ಜ್ಞಾನವೂ ಇಲ್ಲ. ನಮ್ಮ ಎಲ್ಲ ಮಾನಸಿಕ ಮತ್ತು ದೈಹಿಕ ಓಡಾಟಗಳಿಗೆ ಒಂದು ನಿಶ್ಚಿತ ಅರಿವಿನ ಆಧಾರವಿಲ್ಲ, ಎಚ್ಚರವೂ ಇಲ್ಲ ನಿದೆಯೂ ಇಲ್ಲ ಒಂದು ರೀತಿಯ ‘ಮಂಪರು’. ಆದರೂ ಬೇಡವಾದ ಅಥವಾ ಸೂಕ್ತವಲ್ಲದ ಉತ್ಸಾಹ ನಮಗೆ ಎಂದು ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 687,
    english:
      'Magnanimous situations can only be experienced. They can not be narrated. One has to be there to understand the weight of such situations. Can any one imagine the expanse of the Himalayas by reading about it in a book or seeing a picture?" - Mankutimma',
    kannada:
      "ಅತ್ಯಂತದುತ್ಕಟದ ಸನ್ನಿವೇಶಗಳ ಭರ ।\nಪ್ರತ್ಯಕ್ಷ ದರ್ಶನದಿನಲ್ಲದೆಂತಹುದು? ॥\nಪುಸ್ತಕದ ಚಿತ್ರದಿಂದೂಹಿಪೆಯ ಹಿಮಗಿರಿಯ ।\nವಿಸ್ತಾರದದ್ಭುತವ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೭ ॥",
    kannada_explanation:
      "ಹಿಮಾಲಯ ಪರ್ವತದ ಒಂದು ಚಿತ್ರವನ್ನು ನೋಡಿ ಅದರ ವಿಸ್ತಾರ, ಅಗಾಧತೆಗಳನ್ನು ಊಹಿಸಲುಸಾಧ್ಯವಿಲ್ಲ. ಅದರ ಅನುಭವವಾಗಬೇಕಾದರೆ ಅದನ್ನು ನಾವು ಪ್ರತ್ಯಕ್ಷ ನೋಡಬೇಕು ಎಂದು ಹೇಳುತ್ತಾ, ಹಾಗೆಯೇ ಬದುಕಿನ ಅತ್ಯಂತ ತೀವ್ರತಮ ಘಟನೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದರೆ, ಆ ಘಟನೆಗಳಲ್ಲಿ ನಾವೂ ಭಾಗಿಯಾಗಿ ಅದರ ಪರಿಣಾಮಗಳ ಅನುಭವವನ್ನು ಪಡೆದರೆ ಮಾತ್ರ ಸತ್ಯವಾದ ಚಿತ್ರಣ ನಮಗೆ ಅರ್ಥವಾಗುವುದು ಸಾಧ್ಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 688,
    english:
      "There is a awe experienced when one sees the ocean in front of him. The same cannot be achieved by reading about the ocean or by counting the waves and trying to gauge the magnanimity of the ocean from that. The essence of the 'whole' can only be got by experiencing it by being in presence of the same. The truth is apparent only then.\" - Mankutimma",
    kannada:
      "ಅರ್ಣವವ ಕಣ್ಣಿಂದ ಕಂಡ ಬೆರಗಾದೀತೆ ।\nವರ್ಣನೆಯನೋದಿದೊಡೆ, ತೆರೆಯನೆಣಿಸಿದೊಡೆ? ॥\nಪೂರ್ಣವಸ್ತುಗ್ರಹಣವಪರೋಕ್ಷದಿಂದಹುದು ।\nನಿರ್ಣಯ ಪ್ರತ್ಯಕ್ಷ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೮ ॥",
    kannada_explanation:
      "ಪ್ರತ್ಯಕ್ಷವಾಗಿ ಕಾಣದೆ ಕೇವಲ ಪುಸ್ತಕದಲ್ಲಿನ ವರ್ಣನೆಯನ್ನು ಓದಿ ಸಮುದ್ರದ ಬೆರಗನ್ನು ಅನುಭವಕ್ಕೆ ತಂದುಕೊಳ್ಳಲು ಸಾಧ್ಯವೇ? ಅಥವಾ ಸಮುದ್ರದ ಮೇಲೇಳುವ ಅಲೆಗಳನ್ನು ಎಣಿಸಿದರೆ ಸಮುದ್ರದ ಸೊಬಗು ಅನುಭವಕ್ಕೆ ಬರುವುದೇ? ಅದನ್ನು ಅರಿಯಲು ಪ್ರತ್ಯಕ್ಷ ನೋಡಬೇಕು ಅದರ ಸೊಬಗನ್ನು ಸವಿಯಬೇಕು. ಅದೇ ರೀತಿ ಯಾವುದೇ ವಸ್ತುವಿನ ನಿಜ ಸ್ವರೂಪವನ್ನರಿಯಲು ಪ್ರತ್ಯಕ್ಷವಾಗಿ ನೋಡಬೇಕು, ಅನುಭವಿಸಬೇಕು. ಪ್ರತ್ಯಕ್ಷಾನುಭವವಾದರೆ ಮಾತ್ರ ಒಂದು ವಸ್ತುವನ್ನು ನಿರ್ಣಾಯಕವಾಗಿ ಅರಿಯಲು ಸಾಧ್ಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 689,
    english:
      'You will be standing alone in all the crucial moments od your life - when faced with moral dilemma, while fighting for life, at the moment of divine realization and at death. Learn to be friendless." - Mankutimma',
    kannada:
      "ಒರ್ವನೇ ನಿಲುವೆ ನೀನುತ್ಕಟಕ್ಷಣಗಳಲಿ ।\nಧರ್ಮಸಂಕಟಗಳಲಿ, ಜೀವಸಮರದಲಿ ॥\nನಿರ್ವಾಣದೀಕ್ಷೆಯಲಿ, ನಿರ್ಯಾಣಘಟ್ಟದಲಿ ।\nನಿರ್ಮಿತ್ರನಿರಲು ಕಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೮೯ ॥",
    kannada_explanation:
      "ಬದುಕಿನ ಕ್ಲಿಷ್ಟತರವಾದ ಘಟ್ಟಗಳಲ್ಲಿ, ಧರ್ಮ ಸಂಕಟದ ಸ್ಥಿತಿಗಳಲ್ಲಿ, ಜೀವನದ ಹೋರಾಟದಲ್ಲಿ, ಪರಮಾರ್ಥ ಸಾಧನೆಯಲ್ಲಿ, ಮೃತ್ಯುವನ್ನೆದುರಿಸುವಾಗ, ನೀನು ಒಬ್ಬನೇ ನಿಲ್ಲಬೇಕಾಗುತ್ತದೆ, ಅನ್ಯರೇನು, ಮಿತ್ರರಿಂದಲೂ ಸಹಾಯ ಅಥವಾ ಸಲಹೆಗಳನ್ನು ಅಪೇಕ್ಷಿಸಬೇಡ ಎಂದು ಅತ್ಯುತ್ತಮ ಸಲಹೆನ್ನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 690,
    english:
      'A dog followed Yudhistira all the way till the very end - till heaven. Like that, every one of us has a person who is with us at every step of the way. If we look around and make sure no one is watching, just then he is watching us closely. He is our conscience." - Mankutimma',
    kannada:
      "ಶುನಕ ಬೆಂಬತ್ತಿತಲ ಧರ್ಮಜನ ಕಡೆವರಂ ।\nನಿನಗಂತು ಸಂಗಡಿಗನೊರ್ವನೆಡೆಬಿಡದನ್ ॥\nಇಣಿಕಿ ನೋಡರದಾರುಮೆನ್ನುವೆಡೆ ಕಾದಿಹನು ।\nಅಣಕಿಗ ಮನಸ್ಸಾಕ್ಷಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೦ ॥",
    kannada_explanation:
      'ಮಹಾಭಾರತದಲ್ಲಿ ಧರ್ಮರಾಯನ ಸ್ವರ್ಗಾರೋಹಣ ಕಾಲಕ್ಕೆ ಅವನ ಸಂಗಡ ಹೊರಟವರೆಲ್ಲರೂ ಒಬ್ಬರಾದಂತೆ ಒಬ್ಬರು ತೀರಿಕೊಂಡ ನಂತರ, ಅವನನ್ನು ಸ್ವರ್ಗದ ಬಾಗಿಲವರೆಗೂ ಒಂದು ನಾಯಿ ಹಿಂಬಾಲಿಸಿತಂತೆ. ಧರ್ಮರಾಯನನ್ನು ಒಳಗೆ ಸ್ವಾಗತಿಸಿದ ಸ್ವರ್ಗಾಧಿಕಾರಿಗಳು ನಾಯಿಯ ಪ್ರವೇಶವನ್ನು ನಿರಾಕರಿಸಿದರಂತೆ. "ನನ್ನನ್ನು ನಂಬಿ ಹಿಂಬಾಲಿಸಿ ಬಂದ ನಾಯಿಗೆ ಪ್ರವೇಶವಿಲ್ಲದ ಸ್ವರ್ಗಕ್ಕೆ ನಾನೂ ಪ್ರವೇಶಮಾಡುವುದಿಲ್ಲ"ವೆಂದು ಧರ್ಮರಾಯನೆಂದಾಗ, ಆಗ ಆ ನಾಯಿಯ ರೂಪದಲ್ಲಿದ್ದ ‘ಯಮಧರ್ಮರಾಯನು’ ತನ್ನ ನಿಜ ಸ್ವರೂಪವನ್ನು ತೋರಿದನಂತೆ. ಹಾಗೆಯೇ ತನ್ನ ನಿಜಸ್ವರೂಪವನ್ನು ತೋರದಿದ್ದರೂ ನಮ್ಮ ಅಂತರಾತ್ಮ, ನಾವು ಮಾಡಿದ ಮತ್ತು ಪಾಲಿಸಿದ ಧರ್ಮ ಅಥವಾ ಅಧರ್ಮಗಳನ್ನು ಸಾಕ್ಷೀ ರೂಪದಲ್ಲಿ ನೋಡುತ್ತಾ ಇರುತ್ತದೆ ಎಂದು ಈ ಜಗತ್ತಿನಲ್ಲಿ ನಾವಿರುವಾಗ ಏನನ್ನು ಗಳಿಸಬೇಕು ಅಥವಾ ಗಳಿಸಿದ ಯಾವುದು ನಮ್ಮನ್ನು ಅಗಲದೆ ಇರುತ್ತದೆ ಎನ್ನುವುದನ್ನು ಸೂಚ್ಯವಾಗಿ ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 691,
    english:
      'We feel the birds in the sky are free to what they want. But the memory of nest drags them back to the nest. A cow grazing the field is only as free as the length of the rope permits. But is there any value in total freedom? If one does not ground himself to any one philosophy, then life is like a kite whose string is severed. It is mercy of the wind." - Mankutimma',
    kannada:
      "ಸುತ್ತಿ ಸುತ್ತುವ ಖಗದ ಗೂಡ ನೆನಪೆಳೆಯುವುದು ।\nಗೊತ್ತುನೂಲ್ ಪಿಡಿದಿಹುದು ದನವ ಬಯಲಿನಲಿ ॥\nತತ್ತ್ವವೊಂದರ ಹಿಡಿತಕೊಗ್ಗದಿಹ ಬಾಳೇನು? ।\nಕಿತ್ತ ಗಾಳಿಯ ಪಟವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೧ ॥",
    kannada_explanation:
      "ತನ್ನ ಆಹಾರಕ್ಕಾಗಿ ಎಲ್ಲೆಲ್ಲೊ ಸುತ್ತಿ ಅಲೆಯುವ ಪಕ್ಷಿ ಸಂಜೆಗೆ ತನ್ನ ಗೂಡನ್ನು ನೆನಪಿಸಿಕೊಂಡು ಸೇರುವಂತೆ, ಒಂದು ಗೂಟಕ್ಕೆ ಹಗ್ಗದ ಸಹಾಯದಿಂದ ಕಟ್ಟಿಹಾಕಿದ ದನ, ಹುಲ್ಲ ಮೇಯಲು ಆ ಹಗ್ಗದ ಅಳತೆಯ ಪರಿಧಿಯಲ್ಲೇ ಸುತ್ತುತ್ತಾ ಒಂದು ಬಂಧಕ್ಕೆ ಒಳಪಟ್ಟಂತೆ, ನಾವೂ ಸಹ ಒಂದು ತತ್ವಕ್ಕೆ ಅಥವಾ ಸಿದ್ಧಾಂತಕ್ಕೆ ಒಳಪಟ್ಟು ಬದ್ಧರಾಗದೆ ಇದ್ದರೆ, ಅದೂ ಸಹ ಒಂದು ಬಾಳೇನು? ಖಂಡಿತ ಅಲ್ಲ, ಅದು ಸೂತ್ರ ಕಿತ್ತ ಗಾಳಿಪಟದಂತಹ ಬದುಕು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 692,
    english:
      "Just education, just debates and just intellect is not enough to understand the cosmic universal truth. A different kind of 'eye' is required for that. When the veil of affection (that clouds our vision) gets torn down, the realization will dawn on us - they eye of knowledge will thus open.\" - Mankutimma",
    kannada:
      "ಬರಿಯೋದು ಬರಿವಾದ ಬರಿಬುದ್ಧಿ ದೊರಕಿಸದು ।\nಪರತತ್ತ್ವವನು; ಬೇಕು ಬೇರೆ ಕಣ್ಣದಕೆ ॥\nಚಿರದ ಮಮತಾವೇಷ್ಟಿತದ ಪೊರೆಯ ಪರಿದಂದು ।\nಅರಳ್ವದರಿವಿನ ಕಣ್ಣು - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೨ ॥",
    kannada_explanation:
      "ಶಾಸ್ತ್ರಗಳನ್ನು ಓದುವುದು, ಅವಗಳಲ್ಲಿನ ವಿಷಯವನ್ನು ಹಿಡಿದು ಚರ್ಚೆ, ವಾದ ಮಾಡುವುದು, ಅಥವಾ ಬುದ್ಧಿಯಿಂದ ತರ್ಕ, ಕುತರ್ಕ, ವಿತರ್ಕಗಳ ಕಸರತ್ತನ್ನು ಮಾಡಿದರೆ ಪರತತ್ವದ ದರ್ಶನವಾಗುವುದಿಲ್ಲ. ಪರತತ್ವನ್ನು ಕಾಣುವುದಕ್ಕೆ ಬೇರೊಂದು ಕಣ್ಣು ಬೇಕು. ಆದರೆ ಆ ಕಣ್ಣಿನ ಸುತ್ತ ‘ಮಮತೆ’, ಎಂದರೆ ‘ನಾನು ನನ್ನದು’ ಎಂಬ ಒಂದು ಪೊರೆ ಅಡ್ಡವಾಗಿ ಇದೆ. ಆ ಪೊರೆ ಹರಿದಂದು ಅಂದರೆ, ಅದು ತೊಲಗಿದರೆ ಒಳಗಣ್ಣ ತೆರೆದುಕೊಂಡು ನಮಗೆ ಪರತತ್ವದ ದರ್ಶನವಾಗುತ್ತದೆ ಎಂದು, ಸ್ಪಷ್ಟವಾಗಿ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 693,
    english:
      'Can the object beyond the senses (the cosmic truth) be ever sensed by the sensory organs? Can the rainbow ever be grasped by the garden hook? The realization of the truth happens to every soul through a different medium. It can only achieved when one shuns laziness and actively looks for it." - Mankutimma',
    kannada:
      "ಇಂದ್ರಿಯಾತೀತವನು ಪಿಡಿಯಲಿಂದ್ರಿಯಕಳವೆ? ।\nಇಂದ್ರಧನು ಕೈದೋಟಿ ಕೊಂಕಿಗೆಟುಕುವುದೆ? ॥\nಸಂದೃಶ್ಯವಾತ್ಮಕೆ ಬೇರೆ ಕರಣದಿಂ ।\nತಂದ್ರಿ ಬಿಡೆ ದೊರೆವುದದು - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೩ ॥",
    kannada_explanation:
      "ಇಂದ್ರಿಯಗಳಿಗೆ ಅತೀತವಾದದ್ದನ್ನು ನಮ್ಮ ಇಂದ್ರಿಯಗಳಿಗೆ ಅರಿಯಲು ಸಾಧ್ಯವೇ? ಕಾಮನಬಿಲ್ಲನ್ನು ತೋಟದಲ್ಲಿ ನಾನು ಹೂವೋ ಹಣ್ಣೋ ಕೀಳಲುಪಯೋಗಿಸುವ ಕೈ ದೋಟಿಯಿಂದ ಕಿತ್ತುಕೊಳ್ಳಲು ಸಾಧ್ಯವೇ? ಹಾಗೆಯೇ ಪರತತ್ವದ ದರ್ಶನವಾಗಬೇಕಾದರೆ ಅದಕ್ಕೆ ಬೇರೆಯೇ ಉಪಕರಣ ಬೇಕು. ನೋಡಬೇಕಾದರೆ ಆಲಸ್ಯವನ್ನು ಬಿಟ್ಟು ನಿರಂತರ ಪ್ರಯತ್ನದಿಂದ ಮಾತ್ರ ಸಾಧ್ಯ ಎಂದು ಹೇಳುತ್ತಾರೆ ಗುಂಡಪ್ಪನವರು ಮುಕ್ತಕದಲ್ಲಿ .",
  },
  {
    number: 694,
    english:
      'The flood water from the stream (pond) will break all barriers and flow out towards the ocean to become one with the water of the sea. Just like that our individual souls will break the boundaries (limitations) of senses and become one the cosmic truth only when we let our vision go beyond the sensory world." - Mankutimma',
    kannada:
      "ಬಂಧನಗಳೆಲ್ಲವನು ದಾಟಿ, ಹೊಳೆ ನೆರೆ ನೀರು ।\nಸಂಧಿಪುದು ಕಡಲನೀರ್ಗಳನ್; ಅಂತು ಜೀವನ್ ॥\nಇಂದ್ರಿಯದ ಕಟ್ಟುಗಳ ಮೀರ್ದೀಕ್ಷೆಯೋಟದಿಂ ।\nಸಂದರುಶಿಪನು ಪರನ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೪ ॥",
    kannada_explanation:
      "ಹೇಗೆ ಕೆರೆ ತುಂಬಿ ಹರಿಯುವ ನೀರು ತನಗೊಡ್ದುವ ಅಡ್ಡಿಗಳೆಲ್ಲವನ್ನೂ ದಾಟಿ, ಹರಿದು, ತನ್ನ ಗಮ್ಯವಾದ ಕಡಲನ್ನು ಸೇರುವಂತೆ, ಜೀವನೂ ಸಹ ಪರತತ್ವದ ಮೇಲೆ ಕಣ್ಣಿಟ್ಟು, ಅದನ್ನು ಸೇರುವ ಆತುರದಿಂದ, ಅದನ್ನು ಅರಿಯಲು ಇಂದ್ರಿಯಗಳು ಒಡ್ಡಿದ ಮತ್ತು ಒಡ್ಡಬಹುದಾದ ಎಲ್ಲ ಅಡ್ಡಿಗಳನ್ನೂ ದಾಟಿ ಪರತತ್ವದ ದರ್ಶನವನ್ನು ಪಡೆಯುತ್ತದೆ ಎಂದು ನಿಖರವಾಗಿ ಉಲ್ಲೇಕ್ಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 695,
    english:
      'Lord Shiva is the ultimate example of the way this world has to be dealt with. He has two eyes using which he will preside over the wellbeing of the entire world. But for philosophical union with the cosmic truth, the has the third eye. With that he can perceive beyond the senses. In our lives, we have to find the balance between what can be seen with our eyes and what has to be experienced with eyes shut." - Mankutimma',
    kannada:
      "ದ್ವಂದ್ವಲೋಕವನಕ್ಷಿಯುಗದೆ  ಪೊರೆದು ತ್ರ್ಯಕ್ಷ- ।\nನೊಂದರಿಂ ಮಾಯೆಯಾಟವ ಮೀರುವಂತೆ ॥\nಇಂದ್ರಿಯಾತೀತದರ್ಶನಕೆ ಬೇರೊಂದಕ್ಷಿ ।\nಸಂಧಾನವನು ಗಳಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೫ ॥",
    kannada_explanation:
      "ಕೋಟ್ಯಾಂತರ ದ್ವಂದ್ವಗಳಿಂದ ಕೂಡಿದ ಈ ಲೋಕವನ್ನು ತನ್ನೆರಡು ಕಣ್ಣುಗಳಿಂದ ನೋಡುತ್ತಾ ಕಾಪಾಡಿ, ಮಾಯೆಯಾಟದಿಂದ ಉಂಟಾಗುವಕಾಮನನ್ನು ಅಥವಾ ಮನ್ಮಥನನ್ನು ತನ್ನ ಮೂರನೆಯ ಕಣ್ಣಿಂದ, ಆ ಪರಮಶಿವ ಸುಟ್ಟಂತೆ, ಇಂದ್ರಿಯಗಳಿಗೆಟುಕದರ ದರ್ಶನಕೆ ನಿನ್ನಲ್ಲಿರುವ ವಿವೇಕದ ಅಥವಾ ಜ್ಞಾನದ ಕಣ್ಣನ್ನು ಮನಸ್ಸು ಬುದ್ಧಿಗಳೊಂದಿಗೆ ಅನುಸಂಧಾನ ಮಾಡಿಕೊ ಎಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 696,
    english:
      'Man does many things to achieve the magnanimous - he swims across oceans, fights in wars and so on. In his quest, he does not see anything other than the goal. He forgets himself in pursuit of his quest. When the self gets dissolved, it is called Moksha (realization)." - Mankutimma',
    kannada:
      "ಶರಧಿಯನೀಜುವನು, ಸಮರದಲಿ ಕಾದುವನು ।\nಗುರಿಯೊಂದನುಳಿದು ಪೆರತೊಂದ ನೋಡುವನೆ? ॥\nಮರೆಯುವನು ತಾನೆಂಬುದನೆ ಮಹಾವೇಶದಲಿ ।\nನಿರಹಂತೆಯದು ಮೋಕ್ಷ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೬ ॥",
    kannada_explanation:
      "ಕಡಲನ್ನು ಈಜುವವನು ಅಥವಾ ಯುದ್ಧದಲ್ಲಿ ಹೋರಾಡುವವನು ತನ್ನ ಗುರಿಯನ್ನು ಮಾತ್ರ ನೋಡುತ್ತಾನಲ್ಲದೆ ಬೇರೊಂದನ್ನು ನೋಡುವನೆ? ಆ ಸ್ಥಿತಿಯಲ್ಲಿ ಅವನಿಗಿರುವ ಮಹಾ ಆವೇಶದಲಿ ಅವನು ತನ್ನನ್ನೇ ತಾನು ಮರೆತು ಈಜುತ್ತಾನೆ ಅಥವಾ ಹೋರಾಡುತ್ತಾನೆ. ಹಾಗೆಯೇ ಪರತತ್ವವನು ಅರಿಯಲು ಇಚ್ಚಿಸುವವನು ‘ಅಹಂ’ಕಾರವನ್ನು ಮರೆತು, ತೊರೆದು ಏಕದೃಷ್ಟಿಯಿಂದ ಮುನ್ನಡೆದಾಗ ಅವನಿಗೆ ಮೋಕ್ಷವುಂಟಾಗುತ್ತದೆ, ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 697,
    english:
      'It is not enough if the mind can know what is the righteous thing to do. One has to put it to practice in daily life again and again so that it becomes his nature. If it is broken for some reason, then start again." - Mankutimma',
    kannada:
      "ಉತ್ತಮತೆಯಿಂತೆಂದು ಮತಿಗೆ ತೋರ್ದೊಡದೇನು? ।\nವೃತ್ತಿಯೊಳ್ ಅದೂರಿ ಸ್ವಭಾವಾಂಶವಾಗಲ್ ॥\nಮತ್ತುಮತ್ತನುವರ್ತಿಸುತ, ಭಂಗವಾದಂದು ।\nಯತ್ನಿಸಿನ್ನುಂ ಮರಳಿ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೭ ॥",
    kannada_explanation:
      "ಪರತತ್ವವನ್ನು ಕಂಡುಕೊಳ್ಳಲು ನಾವು ‘ನಿರಹಂತೆ’ ಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಬೇಕು ಎಂದು ಹಿಂದಿನ ಮುಕ್ತಕದಲ್ಲಿ ಅರಿತೆವು. ಆದರೆ ‘ನಿರಹಂತೆ’ ಒಳ್ಳೆಯದು ಎಂದು ಕೇವಲ ಬುದ್ಧಿಗೆ ಅವಗಾಹನೆಯಾದರೇನು ಫಲ. ಅದನ್ನು ನಾವು ಕಾರ್ಯರೂಪಕ್ಕೆ ತಂದು, ಅದು ನಮ್ಮ ಸ್ವಭಾವವಾಗಲು ನಮ್ಮ ಪ್ರಯತ್ನಗಳಿಗೆ ತೊಡಗುಗಳು ಬಂದರೆ, ಅದನ್ನು ನಮ್ಮ ಸ್ವಾಭಾವವಾಗಿಸಿಕೊಳ್ಳಲು ಮತ್ತೆ ಮತ್ತೆ ಪ್ರಯತ್ನವನ್ನು ಮಾಡು ಎಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 698,
    english:
      'Is there any child that has learned to walk without ever having tripped, without breaking open a wound? Similar is the story of wisdom. One does err (and get hurt), regain composure - shake it off and continue. Troubles and setbacks are natural." - Mankutimma',
    kannada:
      "ಎಡವದೆಯೆ, ಮೈಗಾಯವಡೆಯದೆಯೆ, ಮಗುವಾರು ।\nನಡೆಯ ಕಲಿತವನು? ಮತಿನೀತಿಗತಿಯಂತು ॥\nತಡವರಿಸಿ ಮುಗ್ಗರಿಸಿ ಬಿದ್ದು ಮತ್ತೆದ್ದು ಮೈ- ।\nದಡವಿಕೊಳುವವರೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೮ ॥",
    kannada_explanation:
      "ನಡೆಯಲು ಪ್ರಯತ್ನಪಡುವ ಪ್ರತಿಯೊಂದು ಮಗುವೂ ತಡವರಿಸಿ, ಎಡವಿ, ಮುಗ್ಗರಿಸಿ, ಬಿದ್ದು ತಾನೇ ನಡೆಯುವುದನ್ನು ಕಲಿಯುವುದು. ಮಗು ಹೇಗೆ ಮತ್ತೆ ಮತ್ತೆ ಬಿದ್ದರೂ ಮೈದಡವಿಕೊಂಡು, ಮೇಲೆದ್ದು ನಡೆಯುವಂತೆ, ರೀತಿ, ನೀತಿಯನ್ನು, ಧರ್ಮ ಮಾರ್ಗವನ್ನು, ಬದುಕಿನ ತತ್ವವನ್ನು ಮತ್ತು ಪರತತ್ವನ್ನರಿಯಲು ಪ್ರಯತ್ನಿಸುವ ಪ್ರತಿಯೊಬ್ಬರೂ ಅಡೆ ತಡೆ ಎದುರಾದರೂ ಮತ್ತೆ ಮತ್ತೆ ಪ್ರಯತ್ನವನ್ನು ಮಾಡುತ್ತಾರೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 699,
    english:
      'How many times did Vishvamitra (Koushika) undertook stringent penances to attain the position of Brahmarshi? He failed many times. Yet, he kept trying time and again. That way he refined his soul. We should persevere like him towards our goal in spite of repeated failures." - Mankutimma',
    kannada:
      "ಏಸು ಸಲ ತಪಗೈದುದೇಸು ಬನ್ನವನಾಂತು ।\nಕೌಶಿಕಂ ಬ್ರಹ್ಮರ್ಷಿಪದಕರ್ಹನಾದನ್? ॥\nಘಾಸಿಪಡುತಿನ್ನೊಮ್ಮೆ ಮತ್ತೊಮ್ಮೆ ಮರಮರಳಿ ।\nಲೇಸಾಗಿಸಾತ್ಮವನು - ಮಂಕುತಿಮ್ಮ ॥ ೬೯೯ ॥",
    kannada_explanation:
      "ಕೌಶಿಕನೆಂಬ ಕ್ಷತ್ರಿಯ ರಾಜನು ವಸಿಷ್ಠ ಮಹರ್ಷಿಯ ಬ್ರಹ್ಮ ತೇಜಸ್ಸಿನ ಬಲವನ್ನು ಕಂಡು ‘ ಕ್ಷಾತ್ರಬಲಕ್ಕಿಂತ ಬ್ರಹ್ಮಬಲ’ ವೇ ಉತ್ತಮವೆಂದರಿತುಅದನ್ನು ಪಡೆಯಲು ತಪಸ್ಸನ್ನು ಮಾಡಿದಾಗ, ಅವನ ತಪಸ್ಸಿಗೆ ಇಂದ್ರಾದಿದೇವತೆಗಳು ಒಡ್ಡಿದ ಹಲವಾರು ಅಡ್ಡಿಗಳನ್ನು ತಡೆದುಕೊಂಡು, ಅವುಗಳೆಲ್ಲವನ್ನು ಮೆಟ್ಟಿ ನಿಂತು, ಮತ್ತೆ ಮತ್ತೆ ತಪವನ್ನು ಮಾಡಿ ಬ್ರಹ್ಮರ್ಷಿತ್ವವನ್ನು ಪಡೆದನಲ್ಲವೇ ? ಹಾಗೆಯೇ ನೀನೂ ಸಹ ನಿನ್ನ ಆತ್ಮಬಲವನ್ನು ಹೆಚ್ಚಿಸಿಕೊಳ್ಳುವ ನಿನ್ನ ಪ್ರಯತ್ನಕ್ಕೆ ಬರುವ ಅಡ್ಡಿಗಳನ್ನು ಮೆಟ್ಟಿ ನಿಂತು ಮತ್ತೆಮತ್ತೆ ಪ್ರಯತ್ನವನ್ನು ಮಾಡಿ ನಿನ್ನ ಆತ್ಮವನ್ನು ಉತ್ತಮವನ್ನಾಗಿಸಿಕೋ ಎಂದು ಮಾರ್ಗತೋರಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 700,
    english:
      'There are always struggles between these - urge to indulge and wisdom that says to refrain, old wisdom and new enthusiasm. It depends on the strength of the individual which one wins. But to be able to destroy desire and enhance wisdom, one needs Gods grace and that alone." - Mankutimma',
    kannada:
      "ವಾಸನೆ ವಿವೇಚನೆಗಳೆರಡಕಂ ಸಂಗರ್ಷ ।\nಪ್ರಾಚೀನಕಂ ಪೌರುಷಕ್ಕಮಿರುವಂತೆ  ॥\nಆಶಾವಿನಾಶಮುಂ ಧೀಶಕ್ತಿಯುದ್ಭವಮುಮ್ ।\nಈಶಪ್ರಸಾದದಿಂ - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೦ ॥",
    kannada_explanation:
      "ನಮ್ಮ ‘ಗುಣಗಳ ‘ರೂಪದಲ್ಲಿರುವ ವಾಸನೆಗಳು ಮತ್ತು ನಮ್ಮ ವಿವೇಕದ ನಡುವಿನ ಸಂಘರ್ಷದಿಂದ, ಹಿಂದಿನಿಂದ ಬಂದ ನಮ್ಮ ಗುಣಗಳಿಗೂ ನಮಗಿರುವ ವಿವೇಕದಿಂದ ಕೂಡಿದ ಬುದ್ಧಿಶಕ್ತಿಗೂ ನಡೆಯುವ ಸಂಘರ್ಷದಿಂದ ನಮ್ಮ ಆಸೆಗಳು ನಶಿಸಿ ಪರಮಾತ್ಮನನ್ನು ಮತ್ತು ಪರತತ್ವವನ್ನು ಅರಿಯುವ ಶಕ್ತಿಯು ನಮ್ಮಲ್ಲಿ ಆ ಪರಮಾತ್ಮನ ಪ್ರಸಾದದಂತೆ ಸಿಗುತ್ತದೆ ಎಂದು ಪ್ರಸ್ತಾಪಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 701,
    english:
      "You make two rooms in your mind. In the outer room, you go about performing worldly actions that is required to be done in order to survive this world. You rest alone in the inner room remain silent. You will find peace. This is the the way you will find balance in life. - Mankutimma",
    kannada:
      "ಎರಡು ಕೋಣೆಗಳ ನೀಂ ಮಾಡು ಮನದಾಲಯದಿ ।\nಹೊರಕೋಣೆಯಲಿ ಲೋಗರಾಟಗಳನಾಡು ॥\nವಿರಮಿಸೊಬ್ಬನೆ ಮೌನದೊಳಮನೆಯಲಿ ಶಾಂತಿಯಲಿ ।\nವರಯೋಗಸೂತ್ರವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೧ ॥",
    kannada_explanation:
      "ಮನದ ಆಲಯದಲ್ಲಿ ನೀನು ಎರಡು ಕೋಣೆಗಳನ್ನು ಮಾಡು. ಹೊರಗಿನ ಕೋಣೆಯಲಿ ಲೋಕದ ಆಟವನ್ನಾಡು. ಒಳಗಿನ ಕೋಣೆಯಲಿ ಮೌನದಿಂದ ತುಂಬಿದ ಶಾಂತಿಯಲ್ಲಿ ವಿಶ್ರಮಿಸು. ಒಳಹೊರಗುಗಳ ಮಧ್ಯೆ ಒಂದು ಸಸಮನ್ವಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಇದು ವರದಂತಹ ಸೂತ್ರ, ಎಂದು, ನಮ್ಮ ಮನಃ ಫಟಲದ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವ ವಿಧಾನವನ್ನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 702,
    english:
      "You live in this material world all the time. You remember God and visit the temple once in a while. But mentally, you should be close to God most of the time and visit home once in a while. - Mankutimma",
    kannada:
      "ಮನೆಯ ಸಂಸಾರದಲಿ ವಾಸವಿರುತಾಗಾಗ ।\nನೆನೆದು ನೀಂ ದೇಗುಲಕೆ ಪೋಗಿಬರುವಂತೆ ॥\nದಿನವೆಲ್ಲ ದೇವಸನ್ನಿಧಿಯೊಳಿರುತಾಗಾಗ ।\nಮನೆಗೆ ಬರುವನವೊಲಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೨ ॥",
    kannada_explanation:
      "ಸಂಸಾರದಲ್ಲಿರುವ ನೀನು ಆಗಾಗ ದೇವಾಲಯಕ್ಕೆ ಹೋಗಿ ಬರುವಂತೆ, ಹೆಚ್ಚು ಕಾಲ ದೇವಾಲಯದಲ್ಲಿ ಕಳೆದು ಆಗಾಗ ಮನೆಗೆ ಬಂದುಹೋಗುವವನಂತಾಗು ಎಂದು ಸೂಚನೆಯನ್ನಿತ್ತು ಮನೋವ್ಯಾಪಾರವನ್ನುಹೇಗಿಟ್ಟುಕೊಂಡರೆ ನಮಗದು ಹಿತವಾಗುತ್ತದೆ ಎಂದು ಬದುಕಿನ ಒಂದು ಸೂಕ್ಷ್ಮವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 703,
    english:
      "Happiness in life needs a very precise balance. It needs utmost caution and tranquility of mind. A practitioner of this art will not get attached to any thing in life. He will neither reject anything. He is standing alone while being friends with the entire world. - Mankutimma",
    kannada:
      "ಬೇಕು ಜೀವನಯೋಗಕೊಂದು ಬಹುಸೂಕ್ಷ್ಮನಯ ।\nಬೇಕೊಂದು ಜಾಗರೂರಕತೆ, ಬುದ್ಧಿ ಸಮತೆ ॥\nತಾಕನೊಂದನು ಯೋಗಿ, ನೂಕನೊಂದನು ಜಗದಿ ।\nಎಕಾಕಿ ಸಹವಾಸಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೩ ॥",
    kannada_explanation:
      "ಜೀವನವೆನ್ನುದುವು ಒಂದು ಯೋಗದಂತೆ. ಅದು ಬಹಳ ಸೂಕ್ಷ್ಮ ಮತ್ತು ನಯ. ಇದನ್ನು ಸಮರ್ಪಕವಾಗಿಸಲು ನಾವು ಬಹಳ ಜಾಗರೂಕರಾಗಿ, ಸಮಬುದ್ಧಿಯಿಂದ ಇರಬೇಕು. ಯೋಗಿಯಾದವನು ಎಲ್ಲದರಲ್ಲೂ ಇದ್ದು, ಯಾವುದರಲ್ಲೂ ಇರದಂತೆ ಇದ್ದು, ಅಂತರಂಗದಲ್ಲಿ ‘ತನಗೆ ತಾನೇ’ ಹೇಗಿರುತ್ತಾನೋ ಹಾಗಿರಬೇಕು. ಎಂದು ಹೇಳಿ ನಾವು ಬದುಕಿನ ಪಯಣವನ್ನು ಹೇಗೆ ಸಾಗಿಸಬೇಕು ಎನ್ನುವುದನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 704,
    english:
      "See everyone equally. Have control over your senses. Exercise restraint. You should serve the world thus. If you do so, the mind will be in your control and lead to beautiful experiences of the soul. Knowledge comes when the attachment ends - not by being a scholar. You have to work hard on the shop-floor of this world. There is no other way. - Mankutimma",
    kannada:
      "ಸಮತೆಸಂಯಮಶಮಗಳಿಂ ಭವವನೋಲಗಿಸೆ ।\nಸಮನಿಪುದು ಮತಿಯ ಹದವಾತ್ಮಾನುಭವಕೆ ॥\nಮಮತೆಯಳಿವಿಂ ಜ್ಞಾನ; ಪಾಂಡಿತ್ಯದಿಂದಲ್ಲ ।\nಶ್ರಮಿಸಿಳೆಯ ಗಾಣದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೪ ॥",
    kannada_explanation:
      "ಸಮಾನತೆ, ಇಂದ್ರಿಯ ನಿಗ್ರಹ, ಮತ್ತು ಶಾಂತಿಯಿಂದ ಭವ, ಎಂದರೆ ಇಲ್ಲಿನ ಬದುಕನ್ನು ಪ್ರೀತಿಯಿಂದ ನಡೆಸಿಕೊಂಡರೆ, ಮನಸ್ಸು ಬುದ್ಧಿಗಳ ಹದವು ಆತ್ಮಾನುಭವಕ್ಕೆ ಸಮಾನವಾಗುತ್ತದೆ. ಮಮಕಾರವು ನಾಶವಾದರೆ ಮಾತ್ರ ಜ್ಞಾನದ ಹೊಳಪು ಅಂತರಂಗದಲ್ಲಿ ಬೆಳಗುತ್ತದೆ, ಪಾಂಡಿತ್ಯದಿಂದಲ್ಲ. ಆದ್ದರಿಂದ ಈ ಜಗತ್ತೆಂಬ ಗಾಣದಲ್ಲಿ ನಿನ್ನ ಬದುಕನ್ನು ಆಡಿಸಿಕೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 705,
    english:
      "One must punish the mind for straying always and resort to  long term training on austerity. Only then one can attain inner tranquillity. One must placate his mind by being satisfied at work and serving (God) alone. - Mankutimma",
    kannada:
      "ಸಂತತದ ಶಿಕ್ಷೆಯಿಂ ದೀರ್ಘದಭ್ಯಾಸದಿಂ- ।\nದಂತರಂಗದ ಕಡಲು ಶಾಂತಿಗೊಳಲಹುದು ॥\nಸಂತೃಪ್ತವೃತ್ತಿಯಿಂದೇಕಾಂತಸೇವೆಯಿಂ ।\nಸಂತಯಿಸು ಚಿತ್ತವನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೫ ॥",
    kannada_explanation:
      "ನಿರಂತರ ಪ್ರಯತ್ನದ ಶಿಕ್ಷಣದಿಂದ ಮತ್ತು ದೀರ್ಘ ಅಭ್ಯಾಸದಿಂದ ಅಂತರಂಗದ ಕಡಲು ಶಾಂತವಾಗುತ್ತದೆ. ತೃಪ್ತಿ ಮತ್ತು ಸಂತೃಪ್ತಿಯಿಂದ ನಿನ್ನಲ್ಲಿ ನೀನೇಸಂತೋಷಪಡುತ್ತಾ ಏಕಾಂತದಲಿ ಆತ್ಮಸಂದಾನಮಾಡಿಕೊಳ್ಳುತ್ತಾ ಮನಸ್ಸನ್ನು ಸಂತೈಸಿಕೊಳ್ಳಬೇಕು, ಎಂದು ಒಂದು ಉಪದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 706,
    english:
      "The King was exiled to the forest. But he brought his sandals to the city and placed them on the throne. He gave updates (to the throne) on the matters of the state even when not asked for. He bore the burden of being a king without ever being one. You must be like that Bharatha. - Mankutimma",
    kannada:
      "ಅರಸಡವಿಗೈದಿದೊಡಮ್, ಅವನಿತ್ತ ಪಾದುಕೆಗ- ।\nಳೊರೆಯದೊಡಮೆನನಂ, ತಾಂ‌  ವರದಿಯೊರೆದು॥\nದೊರೆತನದ ಭಾರವನು ಹೊತ್ತು ದೊರೆಯಾಗದಾ ।\nಭರತನವೊಲಿರು ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೬ ॥",
    kannada_explanation:
      "ರಾಜನಾಗಬೇಕಾದ ‘ರಾಮ’ ನು ತಂದೆಯ ಆಜ್ಞೆಯಂತೆ ಕಾಡಿಗೆ ಹೋದಮೇಲೆ, ತಂದೆ ದಶರಥನ ಮರಣಾನಂತರ, ಭರತನು ಅಣ್ಣನನ್ನು ಮತ್ತೆ ರಾಜ್ಯಕ್ಕೆ ಬರಹೇಳಿ, ಓಲೈಸಿ, ವಿಫಲನಾಗಿ, ಕಡೆಗೆ ಅವನ ಪಾದುಕೆಗಳನ್ನು ಬೇಡಿ ತಂದು, ಅವುಗಳನ್ನೇ ಸಿಂಹಾಸನದ ಮೇಲೆ ಇಟ್ಟು, ಆ ಪಾದುಕೆಗಳು ಯಾವ ರೀತಿಯ ಆದೇಶಗಳನ್ನೂ ನೀಡದಿದ್ದರೂ, ದೇಶದ ಎಲ್ಲ ಆಗುಹೋಗುಗಳನ್ನೂ, ಆ ಪಾದುಕೆಗಳೇ ‘ರಾಜ’ನೆಂಬಂತೆ ಅವುಗಳಿಗೆ ವರದಿ ಮಾಡುತ್ತಾ, ದೊರೆತನದ ಭಾರವನ್ನು ಹೊತ್ತಿದ್ದರೂ ತಾನು ದೊರೆ ಎನ್ನುವ ಭಾವವಿಲ್ಲದೆ ನಡೆದುಕೊಂಡ ‘ಭರತ’ ನ ದೃಷ್ಟಾಂತವನ್ನು ನೀಡಿ ನೀನು ಅವನಂತೆ ಈ ಜೀವನದಲ್ಲಿರು ಎಂದು ನಿರ್ಮೋಹ ಮತ್ತು ನಿರ್ಲಿಪ್ತತೆಯನ್ನು ತಿಳಿಹೇಳುವ ಆದೇಶವನ್ನು ನಮಗೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 707,
    english:
      "The real owner of this (Kingdom) will come back one day. He will ask for a detailed account and I must provide one. This was Bharata's mantra while running the state while Rama was away. He was always righteous. He gave his body, mind and his life towards this single goal. - Mankutimma",
    kannada:
      "ಒಡೆಯನೆಂದೋ ಬಂದು ಕೇಳ್ವನದಕುತ್ತರವ ।\nಕೊಡಬೇಕು ತಾನೆನುವವೊಲು ಋಜುತೆಯಿಂದ ॥\nಒಡಲ, ಜಾಣಿನ, ಜೀವಶಕ್ತಿಗಳನೆಲ್ಲವನು ।\nಮುಡುಪುಕೊಟ್ಟನು ಭರತ - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೭ ॥",
    kannada_explanation:
      '‘ರಾಮನ ರಾಜ್ಯವನ್ನು ಆಳುತ್ತಿದ್ದೇನೆ’ ಎಂದು ಪರಿಗಣಿಸಿ, ಅವನ ಪಾದುಕೆಗಳನ್ನು ಸಿಂಹಾಸನದಮೇಲೆ ಇರಿಸಿ, ಎಂದಾದರೂ ಒಂದು ದಿನ ಎನ್ನ ಒಡೆಯ ನಾನು ಮಾಡಿದ ಎಲ್ಲ ಕೆಲಸಗಳಿಗೂ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಕೇಳುತ್ತಾನೆ ಎಂಬಂತೆ ತನ್ನ ದೇಹ, ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಚೈತನ್ಯವನ್ನೆಲ್ಲ, ನಿರಪೇಕ್ಷೆಯಿಂದ, ಪ್ರಾಮಾಣಿಕತೆಯಿಂದ ರಾಮನ ರಾಜ್ಯವನ್ನಾಳಲು ಮುಡುಪಾಗಿಟ್ಟ ಭರತನಂತೆ, "ನೀನೂ ಸಹ ಬದುಕು" ಎಂದು ಸೂಚಿಸುವಂತೆ ನಮಗೊಂದು ಆದೇಶವನ್ನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 708,
    english:
      "He commands the entire state. But realizes that it is not his to command. He looks over every thing even if it is not his responsibility. He is free to do anything. But he chooses to be faithful to his brother. Isn't Bharata a great yogi (ascetic)? - Mankutimma",
    kannada:
      "ಒಡರಿಸುವನೆಲ್ಲವನ್, ಅದಾವುದುಂ ತನದಲ್ಲ ।\nಬಿಡನೊಂದನುಂ ರಾಜ್ಯ ತನದಲ್ಲವೆಂದು ॥\nನಡೆವಂ ಸ್ವತಂತ್ರದಲಿ ಸಲಿಸುತೆ ವಿಧೇಯತೆಯ ।\nಕಡುಯೋಗಿ ಭರತನಲ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೮ ॥",
    kannada_explanation:
      "ಯಾವುದೂ ತನ್ನದಲ್ಲದದ್ದಿರೂ, ಭರತ ತಾನೇ ರಾಜನಂತೆ ರಾಜ್ಯಭಾರ ನಡೆಸುವನು ಮತ್ತು ಈ ರಾಜ್ಯ ರಾಮನಿಗೆ ಸೇರಿದ್ದು, ತನ್ನದಲ್ಲ ಎಂದು ಯಾವ ಕೆಲಸವನ್ನೂ ಬಿಡುವುದಿಲ್ಲ. ತನ್ನ ಪಾಲಿಗೆ ಬಂದ ಕೆಲಸವನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ನಿರ್ಧರಿಸುತ್ತಿದ್ದರೂ, ಅಂತರಂಗದಲ್ಲಿ ರಾಮನಿಗೆ ವಿಧೇಯತೆಯನ್ನು ತೋರುತ್ತಾ ಇದ್ದ ಅ ಭರತ ನಿಜಕ್ಕೂ ಮಹಾನ್ ಯೋಗಿಯೇ ಎಂದು,ಹೇಳುತ್ತಾ ಈ ಜಗತ್ತು ತಮ್ಮದಲ್ಲದಿದ್ದರೂ ಜೀವನವನ್ನು ಯಾವ ರೀತಿ ನಿರ್ವಹಿಸಬೇಕು ಎನ್ನವುದಕ್ಕೆ ನಮಗೊಂದು ಉದಾಹರಣೆಯನ್ನು ನೀಡಿ ಸೂಚ್ಯವಾಗಿ ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 709,
    english:
      "There are many dilemmas and tough decisions that a king has to make - dilemmas, strategies and difficulties. Did Bharata defer dealing with them till Rama comes back? He realized the full weight of his position and the performed his duties worthy of a King even if he was not a king. - Mankutimma",
    kannada:
      "ದೊರೆತನದ ಜಟಿಲಗಳ, ಕುಟಿಲಗಳ, ಖಠಿನಗಳ ।\nಭರತನುಳಿಸಿದನೆ ರಾಮನ ತೀರ್ಪಿಗೆಂದು ॥\nಅರಿವಿಗಿಹ ಕರ್ತವ್ಯಭಾರವನು ತಾನರಿತು ।\nಧುರವ ಧರಿಸಿದನವನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೦೯ ॥",
    kannada_explanation:
      "ರಾಜನಲ್ಲದಿದ್ದರೂ, ರಾಜ್ಯಭಾರದ ಸಕಲ ಸಮಸ್ಯೆಗಳನ್ನೂ, ರಾಮನ ತೀರ್ಪಿಗೆ ಬಿಡದೆ ತನ್ನ ಕರ್ತವ್ಯದ ಭಾರವನ್ನರಿತು ಆಡಳಿತದ ನೊಗವನ್ನು ತಾನೇ ಹೊತ್ತು ನಿರ್ವಸಿದ ಭರತ ಎಂದು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 710,
    english:
      "The master is not present to oversee. Yet, Bharata always kept him in his mind and served the cause (being a king) with true dedication. In every day life, we must follow this principle everyday. We must set aside our selfish desires. - Mankutimma",
    kannada:
      "ಪ್ರತ್ಯಕ್ಷವಿಲ್ಲದಾ ಸ್ವಾಮಿಯಂ ನೆನೆನೆನೆದು ।\nಸತ್ಯಭಕ್ತಿಯ ಸೇವೆಗೆಯ್ದವಂ ಭರತಂ ॥\nನಿತ್ಯಜೀವನದಿ ನೀನಾ ನಯವನನುಸರಿಸೊ ।\nಸ್ವತ್ವದಾಶೆಯ ನೀಗಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೦ ॥",
    kannada_explanation:
      "ಪ್ರತ್ಯಕ್ಷವಾಗಿ ತನ್ನ ಹಿಂದೆ ನಿಂತು ಆದೇಶಿಸದಿದ್ದರೂ, ರಾಮನನ್ನೇ ರಾಜನೆಂದು ನೆನೆದು ಶ್ರದ್ಧೆಯಿಂದ, ಸತ್ಯವಾದ ಭಕ್ತಿಯಿಂದ ಸೇವೆಯನ್ನು ಮಾಡಿದವನು ಭರತ. ನೀನೂ ಸಹ ನಿನ್ನ ನಿತ್ಯ ಜೀವನದಲ್ಲಿ ಸ್ವಾರ್ಥವನ್ನು ತೊರೆದು, ಭರತನಂತೆ ಜೀವಿಸು ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 711,
    english:
      "This world is like Kosala (Kingdom of Rama). The creator is like Rama. Like Bharata we are all just care-takers following orders. The owner is still the king. But the administration of this world is in our hands. Let us serve him with joy. - Mankutimma",
    kannada:
      "ಧರೆಯೆ ಕೋಸಲ, ಪರಬ್ರಹ್ಮನೇ ರಘುವರನು ।\nಭರತವೊಲನುಪಾಲನಕ್ರಿಯರು ನಾವು ॥\nಅರಸನೂಳಿಗ ನಮ್ಮ ಸಂಸಾರದಾಡಳಿತ ।\nಹರುಷದಿಂ ಸೇವಿಸೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತೇ ಕೋಸಲ ದೇಶದಂತೆ. ಆ ರಘುವರನೇ ಪರಮಾತ್ಮನೆಂಬಂತೆ ರಾಮನ ಆಜ್ಞೆಯನ್ನು ಪಾಲಿಸುವವನಂತೆ ರಾಜ್ಯಯವನಾಳಿದ ಭರತನಂತೆ ನಾವು ಈ ಸೃಷ್ಟಿಯ ಅರಸನಾದ ಆ ಪರಮಾತ್ಮನ ರಾಜ್ಯವಾದ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಅವನು ರೂಪಿಸಿರುವ ನಿಯಮಗಳಂತೆ ನಮ್ಮ ಜೀವನವನ್ನು ಹರುಷದಿಂದ ನಡೆಸಬೇಕು ಎಂದು ಬದುಕಿನ ಸುಲಭ ಆದರೂ ಸಂತೋಷದಾಯಕವಾದ ವಿಧಾನವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 712,
    english:
      "The nose inhales and exhales for as long as you are alive. There is no effort there. Let your existence be like that. You bring good things to those around without trying too hard or working towards it exclusively. Let doing good come naturally to you. - Mankutimma",
    kannada:
      "ನಾಸಿಕದೊಳುಚ್ಛ್ವಾಸ ನಿಶ್ವಾಸ ನಡೆವಂತೆ ।\nಸೂಸುತ್ತಲಿರಲಿ ನಿನ್ನಿರವು ಮಂಗಳವ ॥\nಆಶಿಸದೆ ಸಂಕಲ್ಪಯತ್ನಗಳನಿನಿತುಮಂ ।\nಸಾಜವಾಗಲಿ ಸಯ್ಪು - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೨ ॥",
    kannada_explanation:
      "ಉಸಿರಾಡುವುದನ್ನು ನೀನು ಎಷ್ಟು ಸಹಜವಾಗಿ ಮಾಡುತ್ತೀಯೋ ಅಷ್ಟೇ ಸಹಜತೆಯಿಂದ ನಿನ್ನಿಂದ ಮಂಗಳಕರವಾದ ಕೆಲಸಗಳು ನಡೆಯಲಿ ಮತ್ತುಅಂತಹ ಕೆಲಸಗಳನ್ನು ಮಾಡಲು ವಿಶೇಷವಾದ ಸಂಕಲ್ಪದ ಅಥವಾ ಪ್ರಯತ್ನದ ಅವಶ್ಯಕತೆಯಿಲ್ಲದೆ, ಸಹಜವಾಗಿ ಸೂಕ್ತ ಕೆಲಸ ಆಗಲಿ ಎಂದು ಸಹಜ ಬದುಕಿನ ಸೂತ್ರವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 713,
    english:
      "To do work in this world in such a way that the soul is not sad (compromised). To follow all the rules of life in this world. Not to look forward for future gains. Not to think about the past. These are great morals that one must meditate on. - Mankutimma",
    kannada:
      "ಕಾಯಕವ ಚರಿಪುದಾತ್ಮ ಜುಗುಪ್ಸೆಗೆಡೆಗುಡದೆ ।\nಆಯತದ ಲೋಕಧರ್ಮಗಳ ಪಾಲಿಪುದು ॥\nಆಯತಿಗೆ ಬಾಯ್ಬಿಡದೆ ಗತವ ಚಿಂತಿಸದಿಹುದು ।\nಧ್ಯೇಯವೀ ಸೂತ್ರಗಳು - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೩ ॥",
    kannada_explanation:
      "‘ಆತ್ಮ’ ನೊಂದುಕೊಳ್ಳದ ರೀತಿಯಲ್ಲಿ ಕಾಯಕವನ್ನು ಮಾಡುವುದು,ನಮ್ಮ ಪೂರ್ವಜರಿಂದ ವಿಸ್ತಾರವಾಗಿ ನಿರ್ಧರಿಸಲ್ಪಟ್ಟ , ಲೋಕಧರ್ಮವನ್ನು ಪಾಲಿಸುವುದು, ನಮ್ಮ ಕಾಯಕದಿಂದ ಮುಂದೆ ಬರುವ ಫಲಕ್ಕೆ ಬಾಯಿಬಿಟ್ಟು ಕಾಯದೆ, ಹಿಂದೆ ನಡೆದ ಘಟನೆಗಳಿಗಾಗಿ ಚಿಂತೆ ಮಾಡದೆ ಇರುವುದೇ ಬದುಕಿನಲ್ಲಿ ನಾವು ಒಂದು ಧ್ಯೇಯದಂತೆ ಪಾಲಿಸಬೇಕಾದ ಸೂತ್ರಗಳು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 714,
    english:
      "Having desires that know their limits. Happiness that is got when one is freed from bondage. Being able to perform duties of the world with detachment. Having an intellect that can dig the facts of life to search and hold on to the truth. These are four boons and the only boons that one must wish for. - Mankutimma",
    kannada:
      "ಪರಿಮಿತಿಯನರಿತಾಶೆ, ಪರವಶತೆಯಳಿದ ಸುಖ ।\nವಿರತಿಯೊಡವೆರೆದ ಲೋಕೋದ್ಯೋಗಯುಕ್ತಿ ॥\nಪರಿಕಿಸುತ ಜೀವಿತವ ಸತ್ಯವನೆ ಪಿಡಿವ ಮತಿ ।\nವರಗಳೀ ನಾಲ್ಕೆ ವರ - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೪ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಆಸೆಗಳ ಮಿತಿಯನ್ನು ಅರಿಯುವುದು, ಅತೀ ಉತ್ಸಾಹದ ಸುಖಾನುಭವವಿಲ್ಲದಿರುವುದು, ಲೋಕದಲ್ಲಿ ನಾವು ಮಾಡುವ ಕೆಲಸಕ್ಕೆ ಅತಿಯಾಗಿ ಅಂಟಿಕೊಳ್ಳದೆ ಒಂದು ವಿರಕ್ತ ಭಾವದಿಂದಿರುವುದು, ಮತ್ತು ಜೀವನದ ಪ್ರತೀ ಅನುಭವವನ್ನೂ ಪರೀಕ್ಷಿಸುತ ಅದರಲ್ಲಿನ ಸತ್ಯವನ್ನು ಕಂಡುಕೊಂಡು, ಅದರ ಸತ್ವವನ್ನು ಹಿಡಿದುಕೊಳ್ಳುವುದೇ ಆ ಪರಮಾತ್ಮ ನರನಿಗೆ ಕರುಣಿಸಿದ ಶ್ರೇಷ್ಠ ವರಗಳು ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 715,
    english:
      "You must show forgiveness to those who have erred. One must be courageous when providence conspires against you. You must show equality in defeat or victory. One must never be jealous of other's success. These are the only four penances required to get your mind under control. All other penances are just illusions - Mankutimma",
    kannada:
      "ಕ್ಷಮೆ ದೋಷಿಗಳಲಿ, ಕೆಚ್ಚೆದೆ ವಿಧಿಯ ಬಿರುಬಿನಲಿ ।\nಸಮತೆ ನಿರ್ಮತ್ಸರತೆ ಸೋಲ್ಗೆಲುವುಗಳಲಿ ॥\nಶಮವ ನೀಂ ಗಳಿಸಲೀ ನಾಲ್ಕು ತಪಗಳೆ ಸಾಕು ।\nಭ್ರಮೆಯೊ ಮಿಕ್ಕೆಲ್ಲ ತಪ - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೫ ॥",
    kannada_explanation:
      "ದೋಷವಿರುವರಲ್ಲಿ ಕ್ಷಮೆಯನ್ನು ತೋರುವುದು, ವಿಧಿಯ ಹೊಡೆತಗಳು ಅಧಿಕವಾದಾಗ ಧೈರ್ಯವನ್ನು ಬಿಡದೆ ಇರುವುದು, ಸೋಲು ಗೆಲುವುಗಳಲ್ಲಿ ಸಮಾನ ಮನಸ್ಕರಾಗಿರುವುದು, ಅನ್ಯರಲ್ಲಿ ಮತ್ಸರವ ತೋರದಿರುವುದು ನಮ್ಮ ಮನಸ್ಸನ್ನು ಹಿಡಿತದಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳಲು ಮಾಡಬೇಕಾದ ನಾಲ್ಕು ಶ್ರೇಷ್ಠತಮ ತಪಸ್ಸುಗಳು ಮತ್ತು ಮಿಕ್ಕೆಲ್ಲ ಪ್ರಯತ್ನಗಳೂ ಕೇವಲ ನಮ್ಮ ಭ್ರಮೆಯಷ್ಟೇ ಎಂದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 716,
    english:
      "Do the carriers of a man's cadaver worry about the stories of his life. They do not care if the wife is crying or the banker who lent him money is creating a ruckus. They seem to have controlled their mind and focused on getting the body away in the coffin. One must try to be detached like them. - Mankutimma",
    kannada:
      "ಮೃತನ ಸಂಸಾರಕಥೆ ಶವವಾಹಕರಿಗೇಕೆ? ।\nಸತಿಯು ಗೋಳಿಡಲಿ, ಸಾಲಿಗನು ಬೊಬ್ಬಿಡಲಿ ॥\nಜಿತಮನದಿ ಚಿತಿಗಟ್ಟಿ ಕೊಂಡೊಯ್ಯುತಿಹರವರು ।\nಧೃತಿಯ ತಳೆ ನೀನಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೬ ॥",
    kannada_explanation:
      "ಹೆಣಹೊರುವವರಿಗೆ ಸತ್ತವರ ಮನೆಯವರ ಗೋಳಿನ ಬಗ್ಗೆ ಗಮನವೇಕೆ. ಸತ್ತವನ ಹೆಂಡತಿ(ಗಂಡ) ಅಳುತ್ತಿದ್ದರೂ, ಅವನಿ(ಳಿ)ಗೆ ಸಾಲವನ್ನು ಕೊಟ್ಟವರು ಬೊಬ್ಬೆಹಾಕುತ್ತಿದ್ದರೂ ಅವಾವುದೂ ‘ನಮಗೆ ಕೇಳಲೇ ಇಲ್ಲ’ ಎನ್ನುವಂತೆ ಜಿತ ಮನಸ್ಕರಾಗಿ ಹೆಣವನ್ನು ಚಿತೆಗೇರಿಸುವ ಸಲುವಾಗಿ ತೆಗೆದು ಹೋದಂತೆ, ನೀನೂ ಸಹ ಬದುಕಿನಲ್ಲಿ ಆಗುಹೋಗುಗಳಿಗೆ ತಲೆಕೆಡಿಸಿಕೊಳ್ಳದೆ ನಿರ್ಮಮತೆಯಿಂದ ಬದುಕು ಎಂದು ಬದುಕಿನಲ್ಲಿ ನಾವು ಖಡ್ಡಾಯವಾಗಿ ಅಳವಡಿಸಿಕೊಳ್ಳಲೇ ಬೇಕಾದ ವಿಚಾರವನ್ನು ಅರುಹಿದ್ದಾರೆ.",
  },
  {
    number: 717,
    english:
      "You must carry your own dead body (burden of life). You should not call for help from your brothers and friends. You must live life such that there is no weight left when you die. Your body is the pyre. The troubles that the world gives you is the firewood. The dirt that the world sets on you while working is the cleansing water. You must die (perform all duties you are supposed to) before your body dies. - Mankutimma",
    kannada:
      "ನಿನ್ನ ಹೆಣವನು ನೀನೆ ಹೊತ್ತು ಸಾಗಿಸಬೇಕೊ ।\nಅಣ್ಣ ಬಾ ತಮ್ಮ ಬಾ ಎಂದಳುವುದೇಕೋ? ॥\nನಿನ್ನೊಡಲೆ ಚಿತೆ, ಜಗದ ತಂಟೆಗಳೆ ಸವುದೆಯುರಿ ।\nಮಣ್ಣೆ ತರ್ಪಣ ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೭ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಬದುಕಿನ ಬವಣೆಗಳನ್ನು ನೀನೇ ಅನುಭವಿಸಬೇಕು. ಅದನ್ನನುಭವಿಸಲು ಬೇರೆಯಾರನ್ನಾದರೂ ‘ ಅಣ್ಣಾ ಬಾ ಅಥವಾ ತಮ್ಮಾ ಬಾ’ ಎಂದು ಕರೆಯುವ ಹಾಗಿಲ್ಲ ನಿನ್ನ ಅಂತರಂಗವೇ ಚಿತೆ ಮತ್ತು ಆ ಚಿತೆಯುರಿಯಲು ಉರುವಲೇ ಬದುಕಿನ ತಾಪತ್ರಯಗಳು. ಕಡೆಗೆ ನಿನಗೆ ಮಣ್ಣೇ ತರ್ಪಣ ಎಂದು ಬದುಕಿನಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬರ ಒಂಟಿತನದ, ಏಕಾಕಿತನದ ಅನಿವಾರ್ಯತೆಯನ್ನು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 718,
    english:
      "Did Guru Yesu (Jesus) not carry his own crucifix to his death? One must carry his the burden of his actions himself. He must do so with his lips closed (not cribbing). There is no escaping from carrying the burden of death (accounts that have not squared off). - Mankutimma",
    kannada:
      "ತನ್ನ ಶಿಲುಬೆಯ ತಾನೆ ಹೊತ್ತನಲ ಗುರು ಯೇಸು? ।\nನಿನ್ನ ಕರ್ಮದ ಹೊರೆಯ ಬಿಡದೆ ನೀನೆ ಹೊರು ॥\nಖಿನ್ನನಾಗದೆ ತುಟಿಯ ಬಿಗಿದು ಶವಭಾರವನು ।\nಬೆನ್ನಿನಲಿ ಹೊತ್ತು ನಡೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೮ ॥",
    kannada_explanation:
      "‘ಯೇಸು’ ತನ್ನನ್ನು ಏರಿಸಿದ ಶಿಲುಬೆಯನ್ನು ತಾನೇ ಹೊತ್ತು ನಡೆದಂತೆ ನಿನ್ನ ಕರ್ಮದ ಭಾರವನ್ನು ನೀನೇ ಬಿಡದೆ ಹೊರಬೇಕು. ಬೇಸರಮಾಡಿಕೊಳ್ಳದೆ ನಿರಾಶೆ ಪಡದೆ ಆ ಭಾರವನ್ನು ಹೊತ್ತು ನಡೆಯಬೇಕು ಎಂದು ಕರ್ಮಾನುಭವದ ಮತ್ತು ಅವರವರ ಕರ್ಮವನ್ನು ಅವರವರೇ ಸವೆಸಬೇಕಾದ ಪರಿಯನ್ನು ತಿಳಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 719,
    english:
      "You will not show the dirt on inner side of the hat or the tear in the inner folds of the dhoti to the world. You will only share it with your laundry man. Then why do you want to share your grief and anxiety with the whole world? - Mankutimma",
    kannada:
      "ತಲೆಪಾಗಿನೊಳಕೊಳಕ, ಪಂಚೆನಿರಿಯೊಳಹರಕ  ।\nತಿಳಿಸುವೆಯ ರಜಕಗಲ್ಲದೆ ಲೋಗರಿಂಗೆ? ॥\nಅಳಲುದುಗುಡಗಳ ನಿನ್ನೊಳಗೆ ಬಯ್ತಿಡದೆ ನೀ ।\nನಿಳೆಗೆ ಹರಡುವುದೇಕೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೧೯ ॥",
    kannada_explanation:
      '"ನೋಡು ತಲೆಗೆ ಸುತ್ತುವ ರುಮಾಲಿನಲ್ಲಿ ಇಲ್ಲಿ ಕೊಳೆಯಾಗಿದೆ" ಯೆಂದೋ, ಅಥವಾ ಉಡುವ ಪಂಚೆಯ ನೆರಿಗೆಯಲ್ಲಿ ಹರಿದಿದೆ ‘ಜೋಪಾನವೆಂದೋ’, ಅದನ್ನು ಒಗೆಯುವ ಅಗಸನಿಗೆ ಮಾತ್ರ ನೀನು ಹೇಳುತ್ತೀಯೆ!! ಲೋಕದ ಜನಕ್ಕೆಲ್ಲ ಅಲ್ಲವಲ್ಲ. ಅದೇ ರೀತಿ ಬದುಕಿನ ನಿನ್ನ ಜಂಜಾಟ, ದುಗುಡ, ದುಮ್ಮಾನಗಳನ್ನು ಜಗತ್ತಿಗೆಲ್ಲ ಏಕೆ ಸಾರುತ್ತೀಯೇ? ಎಂದು ಕೇಳುತ್ತಾ ನಮಗೆ ಸಂದ ಕಷ್ಟಗಳನ್ನು ನಾವೇ ಗುಟ್ಟಾಗಿ ಹೇಗೆ ಅನುಭವಿಸಬೇಕು ಎಂದು ಸಾರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 720,
    english:
      "Freshness is life. Stale is death. Get rid of it. Life springs out of that freshness every day. We must spread goodness in the form of words, acts and perspective. Life is beautiful then. - Mankutimma",
    kannada:
      "ಹೊಸತನವೆ ಬಾಳು; ಹಳಸಿಕೆಯೆಲ್ಲ ಸಾವು ಬಿಡು ।\nರಸವು ನವನವತೆಯಿಂದನುದಿನವು ಹೊಮ್ಮಿ ॥\nಹಸನೊಂದು ನುಡಿಯಲ್ಲಿ ನಡೆಯಲ್ಲಿ ನೋಟದಲಿ ।\nಪಸರುತಿರೆ ಬಾಳ್ ಚೆಲುವು - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೦ ॥",
    kannada_explanation:
      "ಹೊಸತನವೇ ಬಾಳು, ಗತಿಸಿಹೋದುದ್ದೆಲ್ಲ ಸತ್ತುಹೋಗಿದೆ, ಅದನ್ನು ಬಿಟ್ಟುಬಿಡು. ಮೃದುವಾದ ಮಾತು, ನಮ್ಮ ಸುತ್ತಲಿನವರಿಗೆ ಹಿತವಾಗುವಂತೆ ನಮ್ಮ ನಡೆ ಮತ್ತು ಭಾವಗಳನ್ನು ಪ್ರತಿನಿತ್ಯವೂ ಹೊಸತಾಗಿ ಸೂಸುತ್ತಾ ಅಂತಹ ಸಂತಸದ ಮಾತು ಮತ್ತು ಭಾವಗಳನ್ನು ಹೊರಹೊಮ್ಮಿಸುತ್ತಿದರೆ ಬದುಕು ಸುಂದರವಾಗಿರುತ್ತದೆ ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ .",
  },
  {
    number: 721,
    english:
      "There are many a wonders in this creation - wonders of earth, the sky and that of human creation. Of all of them, I consider the love shown by person who knows (and follows) Dharma to be the greatest wonder. When one loves after realization (as opposed to love due to attachment) - it is great. - Mankutimma",
    kannada:
      "ಮೆರೆಯುವುವು ನೂರಾರು ಮೈಮೆಗಳು ಸೃಷ್ಟಿಯಲಿ ।\nಧರಣಿಯವು, ಗಗನದವು, ಮನುಜಯತ್ನದವು ॥\nಪಿರಿದೆಂಬೆನವುಗಳೊಳು ಧರುಮವರಿತವನೊಲುಮೆ ।\nಅರಿವುಳ್ಳೊಲುಮೆ ಪಿರಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೧ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಸೃಷ್ಟಿಯಲಿ ನೂರಾರು ಮಹಿಮೆಗಳಿವೆ. ಇವುಗಳಲ್ಲಿ ಭೂಮಿಯದು ಹಲವು ಗಗನದ್ದು ಹಲವು, ಮನುಷ್ಯ ಪ್ರಯತ್ನದ ಸಾಧನೆಗಳಲ್ಲಿ, ಮಹತ್ತಾದ ಸಾಧನೆ ‘ಧರ್ಮವನ್ನು’ ಅರಿತವನ ಒಲುಮೆ ಅಥವಾ ಪ್ರೀತಿ. ಅಂತಹ ಧರ್ಮಯುಕ್ತವಾದ ಪ್ರೀತಿಯಲ್ಲಿ ‘ಅರಿವು’ ಎಂದರೆ ಜ್ಞಾನವೂ ಸೇರಿಕೊಂಡರೆ ಅದು ಅತೀ ಉತ್ತಮವಾದ ಸಾಧನೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 722,
    english:
      "Many people think ascetics who have the universal realization are devoid of feelings and are stone cold. Their eyes (pupils) light up when they see beauty and happiness. They shed tears when they see crying and pain. His heart's inner voice will respond to all the world sounds appropriately. His heart is not a stone. - Mankutimma",
    kannada:
      "ಚೆಲುವುನಗುವುಗಳ ಕಂಡವನ ಕಣ್ಣರಳುವುದು ।\nಅಳುವುನೋವುಗಳ ಕಂಡೊದ್ದೆಯಾಗುವುದು ॥\nಇಳೆಯ ದನಿಗವನೆದೆಯೊಳೊಪ್ಪು ಮರುದನಿಯಹುದು ।\nಶಿಲೆಯಲ್ಲ ಯೋಗಿಯೆದೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೨ ॥",
    kannada_explanation:
      "ಸೊಗಸು, ನಗುಗಳ ಕಂಡು ಯೋಗಿಯ ಕಣ್ಣು ಸಂತಸದಿಂದ ಅರಳುವುದು, ಅನ್ಯರ ನೋವು ಮತ್ತು ತತ್ಕಾರಣ ಆಗುವ ದುಃಖವನ್ನು ಕಂಡು ಅವನ ಹೃದಯ ಕಣ್ಣೀರ ಹಾಕುವುದು,ಜಗತ್ತಿನ ದನಿಗೆ ಮಾರ್ದನಿಕೊಡುವ ಹೃದಯ ಯೋಗಿಗೆ ಇದೆ.ಅವನೇನು ಹೃದಯವಿಲ್ಲದ ಶಿಲೆಯಂತಹ ಮನುಷ್ಯನಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 723,
    english:
      "One must love the entire world. But not too much that can spoil your own balance. There must be detachment from everything. But the passion in one's work must not come down. Both profit and loss have to taken with light humor. All these are required for total well being of yourself. - Mankutimma",
    kannada:
      "ಸ್ವಸ್ಥತೆಯ ಕದಲಿಸದ ಜಗದಾಸ್ಥೆಯೊಂದು ಗುಣ ।\nಆಸ್ಥೆಯನು ಕುಂದಿಸದ ತಾಟಸ್ಥ್ಯವೊಂದು ॥\nನಷ್ಟಲಾಭಂಗಳಲಿ ಲಘುಹಾಸ್ಯನಯವೊಂದು ।\nಸ್ವಸ್ತಿಗಾವಶ್ಯಕವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೩ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಕ್ಷೇಮವನ್ನು ಕದಡದ ಬದುಕಿನಾಸೆಯ ಗುಣ, ಆಸೆ ಅಥವಾ ನಿರಾಸೆ ಎರಡೂ ಅತಿಯಾಗದೆ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವ ಗುಣ, ನೋವು ನಲಿವುಗಳನ್ನು ಒಂದು ನವಿರಾದ ಹಾಸ್ಯ ತೋರುತ್ತಾ ಸಾಕ್ಷಿಯಂತೆ ಕಂಡು ನಸುನಕ್ಕುಬಿಡುವ ಗುಣಗಳು, ನಮ್ಮ ಕ್ಷೇಮಕ್ಕೆ ಅವಶ್ಯಕವೋ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 724,
    english:
      "Let there be a smile on your face always. But let it not turn into a laughter that hurts others (let it not fall on other's ears). Always speak pleasantly. But do not leave the path of truth. There must be moderation in anxiety and indulgence. Let there not be over indulgence in anything. - Mankutimma",
    kannada:
      "ಸ್ಮಿತವಿರಲಿ ವದನದಲಿ, ಕಿವಿಗೆ ಕೇಳಿಸದಿರಲಿ ।\nಹಿತವಿರಲಿ ವಚನದಲಿ, ಋತವ ಬಿಡದಿರಲಿ ॥\nಮಿತವಿರಲಿ ಮನಸಿನುದ್ವೇಗದಲಿ, ಭೋಗದಲಿ ।\nಅತಿ ಬೇಡವೆಲ್ಲಿಯುಂ - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೪ ॥",
    kannada_explanation:
      "‘ನಿನ್ನ ಮೊಗದಲ್ಲಿ ನಗೆಯಿರಲಿ. ಆದರದು ಅನ್ಯರಿಗೆ ಕೇಳಿಸದಿರಲಿ. ನಿನ್ನ ಮಾತಿನಲ್ಲಿ ಹಿತವಿರಲಿ ಆದರೆ ಅದು ಸತ್ಯವಾಗಿರಲಿ. ಸುಖದುಃಖಗಳ ಅನುಭವದಲ್ಲಿ ಒಂದು ಮಿತಿಯಿರಲಿ, ಯಾವುದರಲ್ಲಿಯೂ ಅತಿಯಾಗದಿರಲಿ,’ ಎಂದು ನಮ್ಮ ಬದುಕಿನಲ್ಲಿ ನಾವು ನಮ್ಮ ಅ ಹಿತಕ್ಕಾಗಿಯೇ ಪಾಲಿಸಬೇಕಾದ ಕೆಲ ಮೂಲಭೂತ ವಿಚಾರಗಳನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 725,
    english:
      "Even if the floods cause the seas to unite (drowning the land in between). Even if the forest is covered in fog. Do not let go of your inner tranquility. Do not feel anxious. The seas will recede. The fog will clear up. There is an end to everything - good or bad. - Mankutimma",
    kannada:
      "ಕಡಲ್ಗಳೊಂದಾದೊಡಂ, ಪೊಡವಿ ಹಬೆಯಾದೊಡಂ ।\nಬಿಡದಿರೊಳನೆಮ್ಮದಿಯ, ಬಿಡು ಗಾಬರಿಕೆಯ ॥\nಕಡಲ ನೆರೆ ತಗ್ಗುವುದು, ಪೊಡವಿಧೂಳಿಳಿಯುವುದು ।\nಗಡುವಿರುವುದೆಲ್ಲಕಂ - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೫ ॥",
    kannada_explanation:
      "ಕಡಲುಗಳೆಲ್ಲಾ ಅಲೆಯದ್ದು ಉಕ್ಕಿ ಒಂದಾದರೂ, ಧರೆ ಕಾದು ಹಬೆಯಾಗಿ ಧೂಳೆದ್ದರೂ, ನೀನು ನಿನ್ನ ಅಂತರಂಗದ ನೆಮ್ಮದಿಯನ್ನು ಬಿಡ ಬೇಡ ಏಕೆಂದರೆ ಉಕ್ಕುವ ಸಮುದ್ರ ಶಾಂತವಾಗುತ್ತದೆ ಧರೆಯಮೇಲೆ ಎದ್ದ ಧೂಳೆಲ್ಲ ಮತ್ತೆ ಭೂಮಿಗಿಳಿದು, ಶಾಂತವಾಗುತ್ತದೆ. ಗಾಬರಿಯ ಬಿಡು, ಎಲ್ಲಕ್ಕೂ ಒಂದು ಸಮಯವಿರುತ್ತದೆ, ಆ ಸಮಯಕ್ಕಾಗಿ ಶಾಂತವಾಗಿ ನಿರೀಕ್ಷಿಸು ಎನ್ನುವಂತೆ ಬದುಕಿನ ಏರಿಳಿತಗಳನ್ನು ನೋಡುವ ಮತ್ತು ಅನುಭವಿಸುವ ಬಗೆ ಮತ್ತು ಜೀವನದಲ್ಲಿ ತಾಳ್ಮೆಯನ್ನು ವಹಿಸಬೇಕಾದ ಅವಶ್ಯಕತೆಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 726,
    english:
      "You are the mail man that Fate has sent to earth to deliver various news to other people. The letters may entertain, placate, provoke, trouble, anger, friendship, kinship, hatred, fight, conspiracy to the recipient. You are just a messenger. - Mankutimma",
    kannada:
      "ನಲಿಸುವೊಲಿಸುವ, ಕೆಣಕಿ ಕಾಡಿಸುವ ಮುಳಿಯಿಸುವ ।\nಕೆಳೆ ನಂಟು ಹಗೆ ಕಲಹ ಕುಹಕದೋಲೆಗಳಂ ॥\nಹಲಬರಿಗೆ ಹಂಚಿ ಬಾರೆಂದು ವಿಧಿ ನೇಮಿಸಿಹ ।\nಇಳೆಯಂಚೆಯಾಳು ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೬ ॥",
    kannada_explanation:
      "ಸಂತೋಷಗೊಳಿಸುವ, ರಮಿಸುವ, ಕೆಣಕಿ ಕಾಡಿಸುವ, ಕೋಪಗೊಳ್ಳುವ, ಸ್ನೇಹ, ಬಂಧುತ್ವ, ದ್ವೇಷ, ಕಿತ್ತಾಟ ಕುಹಕ ಭಾವಗಳನ್ನು ಹೊತ್ತ ಹಲವಾರು ಒಲೆಗಳನ್ನು ಹಲವರಿಗೆ ಹಂಚಿ ಬಾರೆಂದು ವಿಧಿ ಕಳುಹಿಸಿಹ ಅಂಚೆಯ ಆಳು(post man) ನೀನು ಎಂದು ಹೇಳುತ್ತಾ, ನೀ ಸೂಸುವ ಭಾವಗಳೆಲ್ಲಾ ಆ ವಿಧಿಯ ನಿರ್ದೇಶನದಂತೆ ನಡೆಯುತ್ತದೆ, ನೀನು ಕೇವಲ ನಿಮಿತ್ತ ಮಾತ್ರ ಎನ್ನುವಂತಹ ವಿಚಾರವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 727,
    english:
      "Why is the messenger bothered about the content of the message? His job is done if he delivers them to the right people. The message could be about debt, death, pain or happiness. He is not bothered. He is running around to earn his food. - Mankutimma",
    kannada:
      "ಓಲೆಗಾರನಿಗೇಕೆ ಬರೆದ ಸುದ್ದಿಯ ಚಿಂತೆ? ।\nಓಲೆಗಳನವರವರಿಗೈದಿಸಿರೆ ಸಾಕು ॥\nಸಾಲಗಳೊ, ಶೂಲಗಳೊ, ನೋವುಗಳೊ, ನಗುವುಗಳೊ! ।\nಕಾಲೋಟವವನೂಟ - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೭ ॥",
    kannada_explanation:
      "ಪತ್ರ ಹಂಚುವವನಿಗೆ ಪತ್ರದೊಳಗಿನ ಸುದ್ಧಿಯ ಚಿಂತೆ ಏಕೆ? ಬೇರೆ ಬೇರೆಯವರಿಗೆ ಸೇರಬೇಕಾದ ಪತ್ರಗಳು ಅವರವರಿಗೆ ಸೇರಿಸಿದರೆ ಸಾಕು. ಆ ಪತ್ರಗಳಲ್ಲಿ, ಸಾಲದ ವಿಷಯವೋ, ನೋವಿನ ವಿಚಾರವೋ ಅಥವಾ ಸಂತೋಷದ ಸಮಾಚಾರವೋ ಏನಾದರಾಗಲಿ ಅದು ಕೇವಲ ಯಾರಿಗೆ ಸೇರಬೇಕೋ ಅವರಿಗೆ ಸೇರಿದರೆ ಸಾಕು. ಅದನ್ನು ತಲುಪಿಸುವವನಿಗೆ, ಆ ಪತ್ರಗಳನ್ನು ತಲುಪಿಸಿ ಕಾಲದೂಡುವುದೇ ಧರ್ಮ ಎಂದು, ಬದುಕಿನಲ್ಲಿ ಒಂದು ನಿರ್ಲಿಪ್ತ ಭಾವವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳುವ ಬಗೆಯನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 728,
    english:
      "When you see the distortions of the world, laugh it off - but internally only. When you are working hard or in pain, hold your lips (tongue). Do not speak to every one about it. At the same time, do not distance yourself from the world. Mingle with the world and live life to the fullest. Laugh and be happy always. When it is over, leave the world without much fanfare. - Mankutimma",
    kannada:
      "ನಗುಮನದಿ ಲೋಗರ ವಿಕಾರಂಗಳನು ನೋಡಿ ।\nಬಿಗಿ ತುಟಿಯ ದುಡಿವಂದು ನೋವಪಡುವಂದು ॥\nಪೊಗು ವಿಶ್ವಜೀವನದ ಜೀವಾಂತರಂಗದಲಿ ।\nನಗುನಗುತ ಬಾಳ್, ತೆರಳು - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೮ ॥",
    kannada_explanation:
      "ಲೋಕದ ವಿಚಿತ್ರಗಳ ಮತ್ತು ಲೋಕದ ಜನರ ವಿಚಿತ್ರ ನಡವಳಿಕೆಯನ್ನು ಕಂಡು, ಮನದಲ್ಲೇ ನಕ್ಕುಬಿಡು. ನಿನಗೆ ಕಷ್ಟ ಬಂದು ತೀವ್ರ ಹೋರಾಟ ನಡೆಸಬೇಕಾದಾಗ ಮೌನವಾಗಿ ಅನುಭವಿಸು, ಜಗವೆಲ್ಲವನು ‘ಏಕಾತ್ಮ’ಭಾವದಲಿ ನೋಡುತ್ತಾ ನಗುನಗುತ್ತಾ ಬಾಳು ಮತ್ತು ನಗುನಗುತ್ತಲೇ ಇಲ್ಲಿಂದ ತೆರಳು ಎಂದು ಸಂತೋಷದಿಂದ ಬದುಕುವ ಮತ್ತು ನಿರ್ಗಮಿಸುವ ಉಪಾಯವನ್ನು ನಮಗೆ ತಿಳಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 729,
    english:
      "Why keep worrying about obstacles in life? Solve as many as possible for your mind. You put in the hard work. Then live through the consequences. Leave the rest to Providence. Never let of of the inner tranquility. This is the path to salvation - to be free from the cycle of misery. - Mankutimma",
    kannada:
      "ಎಡರು ತೊಡರೆನಲೇಕೆ? ಬಿಡಿಸು ಮತಿಗಾದನಿತ ।\nದುಡಿ ಕೈಯಿನಾದನಿತು; ಪಡು ಬಂದ ಪಾಡು ॥\nಬಿಡು ಮಿಕ್ಕುದನು ವಿಧಿಗೆ; ಬಿಡದಿರುಪಶಾಂತಿಯನು ।\nಬಿಡುಗಡೆಗೆ ದಾರಿಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೨೯ ॥",
    kannada_explanation:
      "‘ ಅಯ್ಯೋ ಬದುಕಿನಲ್ಲಿ ಕಷ್ಟಗಳು ಬಂದಿವೆಯಲ್ಲಾ’ ಎಂದು ನೀ ಏಕೆ ಹೇಳುತ್ತೀಯೆ? ಆ ತೊಡಕುಗಳನ್ನು ನಿನ್ನ ಬುದ್ದಿಗೆ ತೋಚಿದಷ್ಟನ್ನು, ಕೈಲಾದಷ್ಟನ್ನು ನೀನೇ ಬಿಡಿಸಿಕೋ. ನಿನ್ನ ಸಮಸ್ಯೆಗಳನ್ನು, ನಿನ್ನ ಕೈಲಾದಷ್ಟು, ನೀನೇ ತೀರಿಸಿಕೋ. ತೀರಿಸಲಾಗದ್ದನ್ನು ಅನುಭವಿಸು. ಮಿಕ್ಕದ್ದನ್ನು ಆ ವಿಧಿಯಾಟಕ್ಕೆ ಬಿಟ್ಟುಬಿಡು. ಆದರೆ ಪ್ರಯತ್ನಪಡುವಾಗ ಅನುಭವಿಸುವಾಗ ಅಂತರಂಗದ ಶಾಂತಿಯನ್ನು ಕಾಪಾಡಿಕೋ. ಅದೇ ಬಿಡುಗಡೆಗೆ ದಾರಿ ಎಂದು ನಿರ್ಲಿಪ್ತ ಬದುಕಿನ ಪ್ರ್ರಯತ್ನ ಹೇಗಿರಬೇಕೆಂದು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ",
  },
  {
    number: 730,
    english:
      "Will the bird know in advance what is going to happen it during the day? Is there anyone who will call it and give scraps. It will go as its wings take it. It will eat whatever it gets. Its lifestyle is very suitable to you also. - Mankutimma",
    kannada:
      "ಹಕ್ಕಿ ಮುನ್ನರಿಯುವುದೆ ತನ್ನ ಪಯಣದ ತೆರನ? ।\nಇಕ್ಕುವರದಾರದನು ಕರೆದು ತಿರುಪೆಯನು? ॥\nರೆಕ್ಕೆ ಪೋದಂತಲೆದು, ಸಿಕ್ಕಿದನುಣ್ಣುವುದು ।\nತಕ್ಕುದಾ ವ್ರತ ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೦ ॥",
    kannada_explanation:
      "‘ತನ್ನ ರೆಕ್ಕೆಯ ಬಡಿಯುತ್ತಾ ಸಾಗುವ ಹಕ್ಕಿಗೆ ತನ್ನ ಪಯಣ ಹೇಗೆ ಸಾಗುತ್ತದೆ ಎಂದು ಮುಂಚೆಯೇ ಗೊತ್ತಿರುವುದೇ? ಅದಕ್ಕೆ ಯಾರಾದರೂ ‘ಬಾ ಬಾ’ ಎಂದು ಕರೆದು ಊಟವನ್ನು ನೀಡುತ್ತಾರೆಯೇ? ರೆಕ್ಕೆ ಬಡಿದ ಹಾಗೆ ಅದರ ಗತಿ ಸಾಗುವುದು ಮತ್ತು ಎಲ್ಲಿ ಏನು ಸಿಕ್ಕರೆ ಅದನ್ನು ತಿನ್ನುವುದು. ಈ ರೀತಿ ಬದುಕ ಸಾಗಿಸಬೇಕೆಂಬುದೇ ‘ನಿನ್ನ ವ್ರತವಾಗಿರಬೇಕು’ ಎಂದು ಸ್ವಚ್ಚಂದ ಜೀವನದ ಪರಿಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 731,
    english:
      "The eye catches something interesting. It sees something and gets scared. It remembers something else and just takes off. These are the everyday experience of a bird flying in the open sky. Do you think your experiences are any better? - Mankutimma",
    kannada:
      "ಏನೊ ಕಣ್ಣನು ಪಿಡಿವುದೇನೊ ದಿಗಿಲಾಗಿಪುದು ।\nಏನನೋ ನೆನೆದು ಸರ್ರೆಂದು ಹಾರುವುದು ॥\nಬಾನೊಳಾಡುವ ಹಕ್ಕಿಗದುವೆ ನಿತ್ಯಾನುಭವ ।\nನೀನದನು ಮೀರಿಹೆಯ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೧ ॥",
    kannada_explanation:
      'ಆಕಾಶದಲ್ಲಿ ಹಾರುವ ಹಕ್ಕಿಗೆ ಯಾವುದೋ ಒಂದು ವಸ್ತು ಇಷ್ಟವಾಗುತ್ತದೆ ಅಥವಾ ಮತ್ಯಾವುದನ್ನೋ ನೋಡಿ ಅದು ಹೆದರುತ್ತದೆ, ಮತ್ತೊಂದು ಕ್ಷಣಕ್ಕೆ ಏನನ್ನೋ ನೆನೆದು ಅದು ಪುರ್ರೆಂದು ಹಾರಿಹೋಗುತ್ತದೆ. ಹಕ್ಕಿಗೆ ಇದು ನಿತ್ಯ ಆಗುವ ಅನುಭವ. "ನಿನ್ನ ಬದುಕು ಈ ಪರಿಯನ್ನು ಮೀರಿಹುದೇನು?" ಎಂದು ಪ್ರಶ್ನಾರೂಪದಲ್ಲಿ ನಮಗೆ ನಮ್ಮ ಬದುಕೂ ಸಹ ಹಾರುವ ಹಕ್ಕಿಯ ಬದುಕಿಗಿಂತ ಭಿನ್ನವಲ್ಲ ಎಂದು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 732,
    english:
      "One can not say which way the bird would fly. when it would turn, at what instant would it take off. Even the bird may not be able to tell. We are also like that. We are puppets in the hands of the illusion of creation. Life can never be certain. - Mankutimma",
    kannada:
      "ಆವ ಕಡೆ ಹಾರುವುದೊ! ಆವ ಕಡೆ ತಿರುಗುವುದೊ ।\nಆವಾಗಳಾವಕಡೆಗೆರಗುವುದೊ ಹಕ್ಕಿ! ॥\nನಾವುಮಂತೆಯೆ ಸೃಷ್ಟಿಕೃತ್ರಿಮದ ಕೈಗೊಂಬೆ ।\nಜೀವಮಾರ್ಗವನೂಹ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೨ ॥",
    kannada_explanation:
      "ಗಗನದಲ್ಲಿ ಹಾರುವ ಹಕ್ಕಿ ಯಾವ ಕಡೆಗೆ ಹಾರುವುದೋ, ಯಾವ ಕಡೆಗೆ ತಿರುಗುವುದೋ ಗೊತ್ತಾಗುವುದಿಲ್ಲ. ಹಾಗೆ ಹಾರುವಾಗ ಯಾವ ಸಮಯಕ್ಕೆ ಗಕ್ಕೆಂದು ಎರಗಿ ಎಲ್ಲಿ ಇಳಿಯುವುದೋ ಎಂಬುದೂ ಸಹ ಗೊತ್ತಾಗುವುದಿಲ್ಲ. ಅಂತೆಯೇ ಮನುಷ್ಯರ ಬದುಕೂ ಸಹ. ನಾವೆಲ್ಲರೂ ಈ ಪ್ರಕೃತಿಯ ಕೈ ಗೊಂಬೆಗಳು. ಆ ವಿಧಿಯಾಡಿಸಿದಂತೆ ಆಡಬೇಕಾದ ಗೊಂಬೆಗಳು. ನಮಗೆ ನಮ್ಮ ಜೀವನದ ಮಾರ್ಗವು, ಪಯಣದ ಗತಿಯು ಊಹಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಬದುಕಿನ ವಾಸ್ತವಿಕತೆಯನ್ನು ಅರುಹಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 733,
    english:
      "You may plant a mango (sweet) sapling and grow it. But you must be prepared to eat neem (bitter). The nourishment it receives from earth sometimes has the ability to change the basic nature of the plant itself. But why should you bother with that process. Let the owner of the garden (Creator) worry about that. Aren't you a mere servant taking care of the garden? - Mankutimma",
    kannada:
      "ಮಾವುಸಸಿಯನು ನೆಟ್ಟು ಬೇವುಣಲು ಸಿದ್ಧನಿರು ।\nಭೂವಿಷಯದಿಂದ ರಸ ಮಾರ್ಪಡುವುದುಂಟು ॥\nಆ ವಿವರ ನಿನಗೇಕೆ? ತೋಟದೊಡೆಯನಿಗಿರಲಿ ।\nಸೇವಕನು ನೀನಲ್ತೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೩ ॥",
    kannada_explanation:
      "ಮಾವಿನ ಸಸಿಯನ್ನು ನೆಟ್ಟು ಬೇವಿನ ಹಣ್ಣನ್ನು ತಿನ್ನಲು ನೀನು ಸಿದ್ಧನಾಗಿರು. ಭೂಮಿಯಲ್ಲಿನ ರಸಗಳು ಬದಲಾಗುವುದುಂಟು. ಅವು ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎನ್ನುವುದನ್ನು ಯೋಚಿಸಲು, ತರ್ಕಿಸಲು ನೀನು ಅರ್ಹನಲ್ಲ. ಆ ವಿವರಗಳು ನಿನಗೆ ಬೇಡ. ಆ ವಿವರಗಳನ್ನು ತೋಟದ ಒಡೆಯ ತಾ ನೋಡಿಕೊಳ್ಳುವನು. ನೀನು ಈ ತೋಟದಲ್ಲಿ ಕೇವಲ ಒಬ್ಬ ಸೇವಕ ಎಂದು ಬದುಕಿನಲ್ಲಿ ನಮ್ಮೊಡನೆ ನಡೆಯುವ ವಿದ್ಯಮಾನಗಳ ವೈಪರೀತ್ಯವನ್ನು ವಿವರಿಸಿ ನಾವು ಈ ಬದುಕಿನಲ್ಲಿ ಹೇಗಿರಬೇಕು ಎನ್ನುವುದನ್ನು ನಮಗರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 734,
    english:
      "You are a soldier. We don't know where the commander is! He is sending instructions. We have to understand and execute the orders wisely and courageously. Victory or defeat is not ours, but his. Life is the rule of the invisible commander. - Mankutimma",
    kannada:
      "ಸೈನಕನು ನೀನು, ಸೇನಾಧಿಪತಿಯೆಲ್ಲಿಹನೊ! ।\nಆಣತಿಯ ಕಳುಹುತಿಹನದನು ನೀನರಿತು ॥\nಜಾಣಿನಧಟಿಂ ಪೋರು; ಸೋಲುಗೆಲುವವನೆಣಿಕೆ ।\nಕಾಣಿಸದನಾಳ್ಕೆಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನ ಬದುಕೇ ಒಂದು ರಣರಂಗ. ಅದರಲ್ಲಿ ನೀನೊಬ್ಬ ಯೋಧ. ನಿನಗೆ ಆಜ್ಞೆಗಳನ್ನೀವ ಸೇನಾಧಿಪತಿಯು ಎಲ್ಲಿಹನೋ ನೀನರಿಯೆ. ಅವನಿರುವಲ್ಲಿಂದಲೇ ತನ್ನ ಆಜ್ಞೆಗಳನ್ನು ಹೊರಡಿಸುತ್ತಾನೆ. ಆ ಆಜ್ಞೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು, ಜಾಣತನ ಮತ್ತು ಪರಾಕ್ರಮದಿಂದ ಹೋರಾಡುವುದಷ್ಟೇ ನಿನ್ನ ಕರ್ತವ್ಯ. ಹೋರಾಟದಲ್ಲಾಗುವ ‘ಜಯಾಪಜಯ’ಗಳ ಲೆಕ್ಕಾಚಾರ ಅವನಿಗೆ ಸೇರಿದ್ದು. ನಮ್ಮ ಕಣ್ಣಿಗೆ ಕಾಣಿಸದ ಅವನ, ಆಳ್ವಿಕೆ ಇದು, ಎಂದು ಹೇಳುತ್ತಾ ಬಂಧನವಿಲ್ಲದೆ, ಅಂಟದೆ ನಮ್ಮ ಕರ್ತವ್ಯ ಪಾಲನೆಯ ಪರಿಯನ್ನು ನಮಗುಪದೇಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 735,
    english:
      "Let the worry of keeping counts of victories and defeat be left to the leader (God). The only outcome of the process should be your training for the battle. The practice alone is good enough outcome and it will lead to enrichment of your life. - Mankutimma",
    kannada:
      "ನಾಯಕನಿಗಿರಲಿ ರಣವಿಜಯ ಪರಿಭವ ಗಣನೆ ।\nಆಯವದರಿಂ ಭಟನ ಸತ್ತ್ವಶಿಕ್ಷಣಕೆ ॥\nಸ್ವೀಯ ಸತ್ತ್ವವಿಕಾಸ ನಿಜಶಕ್ತಿಯಭ್ಯಾಸ ।\nಶ್ರೇಯಸಿಗೆ ಸೋಪಾನ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೫ ॥",
    kannada_explanation:
      "ಯುದ್ಧದಲ್ಲಿ ಹೋರಾಡುವ ಸೈನಿಕನಿಗೆ, ರಣರಂಗವು, ಕಲಿಕೆಗೆ ಮತ್ತು ಸತ್ವವರ್ಧನೆಗೆ ಒಂದು ಸೂಕ್ತ ಸ್ಥಳ(ಆಯ). ಆ ರಣದ ಸೋಲುಗೆಲುವಿನ ಲೆಕ್ಕಾಚಾರ ಆ ರಣದ ನಾಯಕನಿಗಿರಲಿ ಎಂದು ಹೇಳುತ್ತಾ ಬದುಕಿನ ಹೋರಾಟವನ್ನೂ ಸಹ ಸೋಲುಗೆಲುವುಗಳ ಚಿಂತೆಯಿಲ್ಲದೆ ಹೋರಾಡಿ, ನಮ್ಮ ಅನುಭವದಿಂದ ಅಂತಃಸತ್ವವನ್ನು ವರ್ಧಿಸಿಕೊಳ್ಳಬೇಕು, ಅದೇ ವ್ಯಕ್ತಿಯ ಶ್ರೇಯಸ್ಸಿಗೆ ಮೆಟ್ಟಿಲು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 736,
    english:
      "Do your duty. Console your mind. Don't let your inner conscience get anxious. Play (revel) with the grand illusion of this world. Always keep God in mind. You must get through your life like this. - Mankutimma",
    kannada:
      "ಕಾಯಕವ ಚರಿಸುತ್ತ, ಮಾನಸವ ಸಯ್ತಿಡುತ ।\nಆಯಸಂಬಡಿಸದವೊಲಂತರಾತ್ಮನನು ॥\nಮಾಯೆಯೊಡನಾಡುತ್ತ, ಬೊಮ್ಮನನು ಭಜಿಸುತ್ತ ।\nಆಯುವನು ಸಾಗಿಸೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೬ ॥",
    kannada_explanation:
      "ಕರ್ತವ್ಯವನ್ನು ಮಾಡುತ್ತಾ ನಮ್ಮದೇ ಮನಸ್ಸನ್ನು ಸಂತೈಸುತ್ತಾ ಆತ್ಮವನ್ನು ಆಯಾಸಗೊಳಿಸದಂತೆ, ಜಗತ್ತಿನ ಮಾಯೆಯೊಡನೆ ಆಟವಾಡುತ್ತಾ, ಪರಮಾತ್ಮನನ್ನು ಭಜಿಸುತ್ತಾ ನಿನ್ನ ಬದುಕನ್ನು ಸಾಗಿಸು ಎಂದು ನಾವು ಜಗತ್ತಿನಲ್ಲಿ ಹೇಗಿರಬೇಕು ಎನ್ನುವುದನ್ನು ಬಹಳ ಸೂಕ್ತವಾಗಿ ಆದೇಶ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 737,
    english:
      "If there is some debt from previous actions (from any births) that is yet to be repaid, then make a start right now. Embrace those who keep you away by expanding your self-consciousness. There by you will expand yourself and realize that the whole world is one. - Mankutimma",
    kannada:
      "ಎಂದಿಗಾನುಂ ನಿನ್ನ ಪೂರ್ವಋಣಗಳ ಲೆಕ್ಕ ।\nನೊಂದಬೇಕೆಂದಿರ್ದೊಡಿಂದೆ ಮೊದಲನಿಡು ॥\nಅಂದಿಸಿಕೊ ಹೆರರೆನಿಪರನು ಹೃದಯವಿಸ್ತರದೆ ।\nಹೊಂದು ವಿಶ್ವಾತ್ಮತೆಯ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೭ ॥",
    kannada_explanation:
      "‘ಎಂದಿಗಾದರೂ ನಿನ್ನ ಪೂರ್ವ ಕರ್ಮಗಳ ಲೆಕ್ಕಾಚಾರವನ್ನು ನೋಡಿ ಮುಗಿಸಬೇಕೆಂದೆನಿಸಿದರೆ, ಆ ದಿಕ್ಕಿನಲ್ಲಿ ಮೊದಲ ಹೆಜ್ಜೆಯನ್ನು ಇಂದೇ ಇಡು. ಹೃದಯ ವಿಸ್ತಾರದಿಂದ ಅನ್ಯರನ್ನು ಎಟುಕಿಸಿಕೋ. ಜಗತಾತ್ಮತೆಯನ್ನು ಹೊಂದು, ಅನುಭವಿಸು ಎಂದು, ಬದುಕಿನ ಭಾರವನ್ನು ಕಳೆದುಕೊಂಡು, ವೈಶಾಲ್ಯತುಂಬಿದ ಜೀವನದ ಪರಿಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 738,
    english:
      "If a father misses a fortune and sees his son get it, he will rejoice it just as much. A wise man will do just the same for any joy experienced by any one in this world. That is the secret of his happiness. - Mankutimma",
    kannada:
      "ತನಗೆ ಬಾರದ ಲಾಭ ತನಯಂಗೆ ಬಂದಾಗ ।\nಜನಕನ್ ಅದು ತನದೆಂದು ಸಂತಸಿಪ ತೆರದಿ ॥\nಜನದೊಳಾರ್ಗಾವ ಸೊಗವಾದೊಡಂ ತನದೆನ್ನು- ।\nತನುಭವಿಪನೋ ಜ್ಞಾನಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೮ ॥",
    kannada_explanation:
      "ಜೀವನದಲ್ಲಿ ನಾನು ಪಡೆಯಲಾಗದ್ದನ್ನು ನನ್ನ ಮಗ(ಳು)ಪಡೆದರೆ ಸಂತೋಷಿಸುವ ತಂದೆಯಂತೆ, ಜಗತ್ತಿನಲ್ಲಿ, ನಾವು ಬಯಸಿ, ನಮಗೆ ಸಿಗದಿದ್ದದ್ದು ಬೇರೆ ಯಾರಿಗಾದರೂ ದಕ್ಕಿ ಅದು ಅವರ ಸಂತೋಷಕ್ಕೆ ಕಾರಣವಾದರೆ ಆ ಸಂತೋಷವನ್ನು ತನ್ನ ಸಂತೋಷವೆಂದು ಸಂಭ್ರಮಿಸುವವನೆ ಜ್ಞಾನಿ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 739,
    english:
      "He is a wise, content and realized man who can see himself as two people and live like that. One of them is under the control of the mind and chasing the worldly existence. While the other is knows it is all futile and observes (with a smile) his mind detached just as it would observe the rest of the world. - Mankutimma",
    kannada:
      "ತನ್ನ ಮನದಾಟಗಳ ತಾನೆ ನೋಡುತ ನಗುವ ।\nತನ್ನೊಳಗೆ ತಾನಿರ್ವರಾದವೊಲು ಬಾಳ್ವ ॥\nಚಿನ್ಮಾತ್ರವನು ಬೇರೆ ಬಗೆದು ಜಾನಿಪ ಚತುರ ।\nಧನ್ಯತೆಯ ಕಂಡವನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೩೯ ॥",
    kannada_explanation:
      'ತನ್ನ ಮನದೊಳಗೆ ನಡೆಯುವ ಇಂದ್ರಿಯ ಪ್ರಚೋದಿತ ಆಟವನ್ನು ತಾನೇ ನೋಡುತ್ತಾ, "ಮಾಡುವವನು ಬೇರೆ ಮತ್ತು ನೋಡುವವನು ಬೇರೆ" ಎಂಬಂತೆ ತನ್ನ ಕರ್ಮಗಳನ್ನು ತಾನೇ ಸಾಕ್ಷೀ ರೂಪದಲ್ಲಿ ನೋಡಲು ಮತ್ತು ‘ತಾನು ಆತ್ಮ’ ಎಂಬ ಅರಿವು ಮೂಡಿ ಆ ಅರಿವಿನಲ್ಲಿ ಧ್ಯಾನಸ್ಥನಾಗಬಲ್ಲವನೇ ಚತುರ ಮತ್ತು ಅವನ ಬದುಕೇ ಧನ್ಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 740,
    english:
      "Succeeding in life is an art. But who can teach the art? There are thousands of rules and tactics that one can master. But victory eludes you unless you have that one special skill. Details of that skill is available only to you - within you. - Mankutimma",
    kannada:
      "ಜೀವನವದೊಂದು ಕಲೆ; ಕಲೆಯ ಕಲಿಸುವುದೆಂತು? ।\nಸಾವಿರದ ನಿಯಮ ಯುಕ್ತಿಗಳನೊರೆದೊಡೆಯುಂ ॥\nಆವುದೋ ಕುಶಲತೆಯದೊಂದಿರದೆ ಜಯವಿರದು ।\nಆ ವಿವರ ನಿನ್ನೊಳಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೦ ॥",
    kannada_explanation:
      "ಬದುಕುವುದು ಒಂದು ಕಲೆ. ಆದರೆ ಆ ಕಲೆಯನ್ನು ಕಲಿಸುವುದು ಹೇಗೆ? ಸಾವಿರಾರು ನಿಯಮಗಳು, ಸೂತ್ರಗಳು, ಯುಕ್ತಿಗಳನ್ನು ಪಾಠ ಹೇಳಿ ಕೊಟ್ಟಂತೆ ಕಲಿಸಿದರೂ, ಅಂತರಂಗದ ಕುಶಲತೆ ಇಲ್ಲದಿದ್ದರೆ ಬದುಕಿನಲ್ಲಿ ಜಯವಿರುವುದಿಲ್ಲ. ಆ ಕುಶಲತೆಯ ವಿವರವನ್ನು ನೀನು ನಿನ್ನೊಳಗೇ ಕಂಡುಕೋ ಎಂದು ಬದುಕಿನ ಜಯಕ್ಕೆ ಒಂದು ಮಾರ್ಗ ತೋರಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 741,
    english:
      "A circus artiste shows us the most important lesson of life. He walks over tight shaky rope with pot on his head and sword in his hand. He is able to move forward without falling down or to his side. He is able to attain the balance in spite of all the noise around him. His art of concentrating on the balance and filtering everything else out is the key to happiness in life. - Mankutimma",
    kannada:
      "ತಲೆ ಕೊಡವ ತಳೆದಿರಲು, ಕೈ ಕತ್ತಿ ಪಿಡಿದಿರಲು ।\nಬಳುಕು ಹಗ್ಗದ ಮೇಲೆ ತಾನಡಿಯನಿಡುತ ॥\nಕೆಲ ಬಲಕೆ ಬೀಳದೆ ಮುನ್ನೆಡೆವ ಡೊಂಬನುಪಾಯ ।\nಕಲೆಯೆ ಜೀವನಯೋಗ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೧ ॥",
    kannada_explanation:
      "ತಲೆಯಮೇಲೆ ಕೊಡವನ್ನು ಹೊತ್ತು, ಕೈಯಲ್ಲಿ ಕತ್ತಿಯನ್ನು ಹಿಡಿದು, ಓಲಾಡುವ ಹಗ್ಗದಮೇಲೆ ತಾನು ಅಡಿಯನ್ನು ಇಡುತ್ತಾ, ಎಡಬಲಗಳಿಗೆ ಬಾಗುತ್ತಾ ತೂಗುತ್ತಾ ಕೆಳಗೆ ಬೀಳದೆ, ದೊಂಬರಾಟದವ ತನ್ನ ಆಟವನ್ನು ತೋರುವ ಕಲೆಯಂತೆಯೇ, ಜೀವನದ ಕಲೆಯೂ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 742,
    english:
      "You don't need very sophisticated education, or grand logic, or elaborate rituals to make the burden of life lighter. What you need is patience, a common view of entire world and critical introspection. These are all good for the soul. - Mankutimma",
    kannada:
      "ಬಹುವಿದ್ಯೆ  ಬಹುತರ್ಕ ಬಹುನೇಮ ಬೇಕಿಲ್ಲ ।\nವಹಿಸೆ ಜೀವನಭರವನದು ಹಗುರೆನಿಪವೊಲ್ ॥\nಸಹನೆ ಸಮರಸಭಾವವಂತಃಪರೀಕ್ಷೆಗಳು ।\nವಿಹಿತವಾತ್ಮದ ಹಿತಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೨ ॥",
    kannada_explanation:
      "ಬದುಕಿನ ಭಾರ ‘ಹಗುರ’ ವೆಂಬಂತೆ ಹೊರಲು, ಬಹು ವಿದ್ಯೆಗಳ ಪಾಂಡಿತ್ಯ, ಅತಿಯಾದ ತರ್ಕ ಮತ್ತು ಕಠೋರ ವ್ರತ ನಿಯಮಗಳ ಪಾಲನೆ ಅನಗತ್ಯ. ತಾಳ್ಮೆ, ಸಮಭಾವ ಮತ್ತು ಅಂತರಂಗದಲ್ಲಿ ವಿಚಾರ ಮಂಥನಗಳಾದರೆ ಸಾಕು, ಆತ್ಮಕ್ಕೆ ಹಿತವಾಗುವುದಕ್ಕೆ ಎಂದು ಸರಳವಾಗಿ, ಆನಂದವಾಗಿ ಬದುಕುವ ದಾರಿಯ ಸೂತ್ರವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 743,
    english:
      "It is true that everything gets destroyed in time. Everything is controlled by time. Man is truly insignificant when compared to Time. But in the little time one lives, it is his duty to be happy. There is one reson to be happy too. The same Time that destroys you, also makes your prosper. Just like grass dries up, and again grows back. - Mankutimma",
    kannada:
      "ಎಲ್ಲ ನಾಶನವೆಲ್ಲ ಕಾಲವಶವಾದೊಡಂ ।\nಕ್ಷುಲ್ಲಕನು ನರನಾದೊಡಂ ಲಾಲನಿದಿರೊಳ್ ॥\nಉಲ್ಲಾಸವೇ ಧರ್ಮ; ಕೊಲ್ಲಿಪನೆ ಬೆಳೆಯಿಪನು ।\nಹುಲ್ಲೊಣಗಿ ಬೆಳೆವುದಲ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೩ ॥",
    kannada_explanation:
      "ಭೂಮಿಯ ಮೇಲಿನ ಹುಲ್ಲು, ಪ್ರಕೃತಿಯ ಕಾರಣದಿಂದ ಚಿಗುರಿ, ಪ್ರಕೃತಿಯ ಕಾರಣದಿಂದಲೇ ಒಣಗಿ ನಾಶವಾದರೂ ಮತ್ತೆ ಪ್ರಕೃತಿಯ ಕಾರಣದಿಂದಲೇ ಚಿಗುರುವಂತೆ ಜಗತ್ತಿನ ಎಲ್ಲವೂ ಕಾಲ ವಶವಾಗಿ ನಾಶವಾಗುತ್ತದೆಯೆಂದಾದರೆ, ನಾಶಮಾಡುವವನು ಮತ್ತು ಸೃಷ್ಟಿಕರ್ತನೂ ಒಬ್ಬನೇ ಎಂದಾದರೆ, ಪ್ರಕೃತಿ ಮತ್ತು ಕಾಲನೆದುರು ಬಹಳ ಬಲಹೀನರಾಗಿ, ಅಲ್ಪರಾಗಿ ಕಾಣುವ ಮನುಷ್ಯರು, ಬದುಕುವಾಗ ‘ಆನಂದ’ ದಿಂದ ಇರುವುದೇ ಧರ್ಮ.ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 744,
    english:
      "It hides during summer. When rains gives it a call, it comes out. It does not mind whether it is a pit or the banks of a stream. It just grows wherever it can. It gives food to the cows and coolness to mankind. Grass is like a saint with great qualities. - Mankutimma",
    kannada:
      "ಅಣಗಿದ್ದು ಬೇಸಗೆಯೊಳ್, ಎದ್ದು ಮಳೆ ಕರೆದಂದು ।\nಗುಣಿಯೆನದೆ ತಿಟ್ಟೆನದೆ ಸಿಕ್ಕಿದೆಡೆ ಬೆಳೆದು ॥\nಉಣಿಸನೀವನು ದನಕೆ, ತಣಿವನೀವನು ಜಗಕೆ ।\nಗುಣಶಾಲಿ ತೃಣಸಾಧು - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೪ ॥",
    kannada_explanation:
      "ಬೇಸಿಗೆಯಲ್ಲಿ ಒಣಗಿ ಮತ್ತೆ ಮಳೆ ಬಂದಾಗ ಚಿಗುರಿ, ಹಳ್ಳವೆನ್ನದೆ ಗುಡ್ಡವೆನ್ನದೆ ಎಲ್ಲಕಡೆ ಹರಡಿಕೊಂಡು, ದನಗಳಿಗೆ ಆಹಾರವಾಗಿ ಜಗತ್ತಿಗೆ ತಂಪನ್ನೀಯುವ ಗುಣವನ್ನು ಹೊಂದಿರುವ ‘ತೃಣ’ , ಎಂದರೆ ಹುಲ್ಲು ಬಹಳ ಸಾಧು ಎಂದು ಹೇಳುತ್ತಾ, ಸದ್ದಿಲ್ಲದೇ ಜಗತ್ತಿನಲ್ಲಿ ಉಪಯುಕ್ತ ಜೀವನವನ್ನು ಮತ್ತು ಅನ್ಯರಿಗೆ ಸಂತಸವನ್ನು ಕೊಡುವ ಬಗೆಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 745,
    english:
      "Let us set aside the concept of 'helping others'. These trees seem to entirely live for the benefit of others - man, animals, birds, worms and fishes. They do not expect any help from others. They always help others. Truly, trees must be accumulating a lot of good karma. - Mankutimma",
    kannada:
      "ಪರಹಿತದ ಮಾತಿರಲಿ; ಪರರಿನೇ ಜೀವಿಪನು ।\nನರಜಂತು, ಪಶು ಪಕ್ಷಿ ಕೀಟ ಮೀನ್ಗಳವೋಲ್ ॥\nಪರರಿನೆಳಸದದೇನನುಂ ಪರರಿಗುಪಕರಿಪ ।\nತರುಜನ್ಮವಲ ಪುಣ್ಯ! - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೫ ॥",
    kannada_explanation:
      "ಪರರಿಗೆ ಉಪಕಾರ ಮಾಡುವ ಮಾತು ಒತ್ತಟ್ಟಿಗೆ ಇರಲಿ, ಮನುಷ್ಯ ಸದಾಕಾಲ, ಪಶು ಪಕ್ಷಿ ಕೀಟ ಮೀನುಗಳಂತೆ ಪರರಮೇಲೆ ಅಧಾರಪಡುತ್ತಲೇ ಜೀವಿಸುತ್ತಾನೆ. ಪರರಿಂದ ಏನನ್ನೂ ಬಯಸದೆ ಅನ್ಯರಿಗುಪಕರಿಸುವ ಮರದ ಜನ್ಮ ಶ್ರೇಷ್ಠ ಎಂದು ನಿರಾಧಾರವಾದ ಬದುಕಿನ ಪರಿಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 746,
    english:
      "It gives a little shade when it is hot. It gives relief when you are tired. It makes the journey on this earth a little more manageable. If we can be like that tree inside or outside our houses, then it is akin to following the best Dharma. - Mankutimma",
    kannada:
      "ನೆರಳನಿನಿತನು ಕೊಡುವ, ದಣಿವನಿನಿತನು ಕಳೆವ ।\nತಿರೆಯ ಪಯಣದ ಹೊರೆಯನಿನಿತು ಸುಳುವೆನಿಪಾ ॥\nತರುವಾಗಿ ಮನೆಯೊಳಗೊ ಹೊರಗೊ ನೀಂ ಬೆಳೆಯುತಿರೆ ।\nಪರಮಧರ್ಮವದೆಲವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೬ ॥",
    kannada_explanation:
      "ಕೊಂಚ ನೆರಳನ್ನು ಕೊಡುವ, ಅದರಡಿ ಕುಳಿತಾಗ ದಣಿವಾರುವ, ಸುತ್ತಾಟದ ಆಯಾಸದ ಭಾರ ಸ್ವಲ್ಪ ಹಗುರಾಗಿಸುವಂತಹ ಒಂದು ‘ಮರ’ ವನ್ನು, ನೀನು ಮನೆಯ ಒಳಗೋ ಅಥವಾ ಹೊರಗೋ ಬೆಳೆಸಿದರೆ ಅದೇ ಪರಮ ಧರ್ಮವು ಎಂದು ನಿಸ್ವಾರ್ಥದಿಂದ ಪರರಿಗೊದಗುವ ಮರ ಮತ್ತು ಅದನ್ನು ಬೆಳೆಸುವ ಪುರುಷಾರ್ಥವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 747,
    english:
      "How rich are they? How powerful are they? How famous are they? Man has only such thoughts about others. There is a whole lot of possessions that he has an enjoys. But he forgets them all and concentrates only on what others have. Is this how we show thankfulness to God (Lord Shiva)? - Mankutimma",
    kannada:
      "ಅವರೆಷ್ಟು ಧನವಂತರ್, ಇವರೆಷ್ಟು ಬಲವಂತರ್ ।\nಅವರೆಷ್ಟು ಯಶವಂತರ್ ಎನುವ ಕರುಬಿನಲಿ ॥\nಭವಿಕ ನಿನಗೆಷ್ಟಿಹುದೊ ಮರೆತು ನೀಂ ಕೊರಗುವುದು ।\nಶಿವನಿಗೆ ಕೃತಜ್ಞತೆಯೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೭ ॥",
    kannada_explanation:
      "ಅವರಿಗೆಷ್ಟು ಧನವಿದೆ, ಇವರಿಗೆಷ್ಟು ಬಲವಿದೆ ಮತ್ತು ಅವರೆಷ್ಟು ಯಶಸ್ವೀ ಜನ ಎಂದು ಅನ್ಯರ ಕಂಡು ಕೊರಗುವುದರಲ್ಲಿ ನಿನ್ನ ಬಳಿ ಏನಿಹುದು ಎಂದು ನೀನು ಮರೆತು ಹೋದರೆ ಅದು ಆ ಪರಮಾತ್ಮನಿಗೆ ಕೃತಜ್ಞತೆ ತೋರಿದಂತೆ ಆಗುತ್ತದೆಯೇ? ಎಂದು ಒಂದು ತಾತ್ವಿಕ ಪ್ರಶ್ನೆಯನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 748,
    english:
      "When you sit to eat, ask yourself if the water that was used came from your sweat (hardwork) or from other people's tears (tyranny). You must eat only that much which you have given to the world. Any amount more will be counted as un-recovered debt. - Mankutimma",
    kannada:
      "ಅನ್ನವುಣುವಂದು ಕೇಳ್: ಅದನು ಬೇಯಿಸಿದ ನೀರ್ ।\nನಿನ್ನ ದುಡಿತದ ಬೆಮರೊ, ಪೆರರ ಕಣ್ಣೀರೋ? ॥\nತಿನ್ನು ನೀಂ ಜಗಕೆ ತಿನಲಿತ್ತನಿತ; ಮಿಕ್ಕೂಟ ।\nಜೀರ್ಣಿಸದ ಋಣಶೇಷ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೮ ॥",
    kannada_explanation:
      "ನೀನು ತಿನ್ನುವ ಅನ್ನವನ್ನು ಬೇಯಿಸಿದ ನೀರು ನಿನ್ನ ದುಡಿಮೆಯಿಂದ ಪಡೆದದ್ದೋ ಅಥವಾ ಪರರನ್ನು ಪೀಡಿಸಿ ಪಡೆದದ್ದೋ ಎಂದು ನೀನು ಊಟಮಾಡುವಾಗ, ನಿನ್ನನ್ನೇ ನೀನು ಕೇಳಿಕೋ. ಜಗತ್ತಿಗೆ ನೀನು ಎಷ್ಟು ಕೊಟ್ಟಿರುತ್ತೀಯೋ ಅಷ್ಟನ್ನು ಮಾತ್ರ ಪಡೆದು ನೀನು ಉಣ್ಣು. ಅದಕ್ಕಿಂತ ಅಧಿಕವಾಗಿ ಪಡೆದು ಉಂಡರೆ ಅದು ನಿನ್ನೊಳಗೆ ಜೀರ್ಣವಾಗದೇ, ಅನ್ಯರಿಗೆ ಹಿಂತಿರುಗಿಸಲೇಬೇಕಾದ ಋಣವಾಗಿ ಉಳಿದುಬಿಡುತ್ತದೆ ಎಂದು, ಜಗತ್ತಿನಲ್ಲಿ ನಾವು ಅನುಭವಿಸುವುದೆಲ್ಲವನ್ನೂ ನಮ್ಮದೇ ಕಷ್ಟಾರ್ಜಿತವಾಗಿರಬೇಕೆಂದೂ ಅನ್ಯರಿಂದ ಪಡೆದದ್ದು ನಮಗೆ ದಕ್ಕುವುದಿಲ್ಲವೆಂದೂ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 749,
    english:
      "In this business of life, there is a way to make ultimate profit. The capital one needs is the understanding of the working of the world - unified theory of existence. The capital appreciation is in the form of the opportunity to participate in the grand illusion of world and enjoy it. The bonus interest are the pleasures we get to enjoy in this world while we are part of the illusion. - Mankutimma",
    kannada:
      "ಪರಮಲಾಭವ ಗಳಿಸೆ ಜೀವಿತವ್ಯಾಪಾರ ।\nಕಿರಬೇಕು ಮೂಲಧನವದು ತತ್ತ್ವದೃಷ್ಟಿ ॥\nಚಿರಲಾಭ ಜಗದಾತ್ಮಲೀಲಾವಿಹಾರಸುಖ ।\nಧರೆಯ ಸುಖ ಮೇಲ್ ಬಡ್ಡಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೪೯ ॥",
    kannada_explanation:
      "ಬದುಕಿನ ವ್ಯಾಪಾರದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಲಾಭವನ್ನು ಗಳಿಸಲು ‘ತತ್ವದೃಷ್ಟಿ’ಯೇ ನಮ್ಮ’ಮೂಲಧನ’ವಾಗಬೇಕು. ಪರಮಾತ್ಮಾನುಭವವೇ ಶಾಶ್ವತ ಲಾಭ. ಧರೆಯಮೇಲಿನ ಸುಖವು ಕೇವಲ ಮೇಲಿನ ಬಡ್ಡಿ ಎಂದು, ‘ಪರಮಸುಖ’ವಾವುದು ಎನ್ನುವುದನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 750,
    english:
      "Try to stay afloat and swim through the tides of life. Don't drown. Do good to others - give and take happiness. Don't get anxious when the final comes. Just leave everything and go. Try to mingle well in the world. - Mankutimma",
    kannada:
      "ಮುಳುಗದಿರು; ಜೀವನದ ತೆರೆಯ ಮೇಲೀಜುತಿರು ।\nಒಳಿತನಾಗಿಸು, ಕೊಡುತ ಕೊಳುತ ಸಂತಸವ ॥\nಕಳವಳಂಬಡದೆ ನಡೆ ಕಡೆಯ ಕರೆ ಬಂದಂದು ।\nಮಿಳಿತನಿರು ವಿಶ್ವದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೦ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲ್ಲಿ ಮುಳುಗಿಬಿಡಬೇಡ. ನದಿಯ ತೆರೆಯಮೇಲೆಯೇ ಈಜುತ್ತಿರುವಂತೆ ಜೀವನದಲ್ಲಿ ಅಂಟೀ ಅಂಟದಹಾಗೆ ಇರು. ಜಗತ್ತಿನಲ್ಲಿ ಅನ್ಯರಿಗೆ ಕೊಡುತ್ತಾ ಮತ್ತು ಅನ್ಯರಿಂದ ಪಡೆದುಕೊಳ್ಳುತ್ತಾ, ಸದಾಕಾಲ ಒಳಿತನ್ನೇ ಮಾಡುತ್ತಿರು. ಕಡೆಗೆ ಅಂತಕನ ಕರೆಬಂದಾಗ ಕಳವಳಪಡದೆ, ಗೊಣಗಾಡದೆ ಎಲ್ಲವನ್ನೂ ಬಿಟ್ಟು ಹೊರಡು. ಈ ಜಗತ್ತಿನಲ್ಲಿ ಸೇರಿದಂತೆ ಇರು ಎಂದು ನಿರ್ಲಿಪ್ತತೆಯಿಂದ ಬದುಕಿದರೂ ಜಗತ್ತಿಗೆ ಉಪಯುಕ್ತನಾಗಿ ಬದುಕುವ ದಾರಿಯನ್ನು ತೋರಿದ್ದಾರೆ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 751,
    english:
      "The whole world is an illusion created by magic. You are a part of it. Watch it without asking for more, or wanting it to stop. Don't let your soul develop any attachment towards it. You must play your part (and leave). - Mankutimma",
    kannada:
      "ಲೋಕವೆಲ್ಲವು ಚಿತ್ರವಿಂದ್ರಜಾಲದ ಕೃತ್ಯ ।\nಸಾಕೆನದೆ ಬೇಕೆನದೆ ನೋಡು ನೀನದನು ॥\nತಾಕಿಸದಿರಂತರಾತ್ಮಂಗಾವಿಚಿತ್ರವನು ।\nಹಾಕು ವೇಷವ ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೧ ॥",
    kannada_explanation:
      "ಇಡೀ ಜಗತ್ತು ಒಂದು ವಿಚಿತ್ರ ಇಂದ್ರಜಾಲದ ಕಾರ್ಯದಂತೆ, ಮಾಯೆಯಿಂದ ಕೂಡಿ ಇದೆ. ಇದು ಸಾಕು ಅಥವಾ ಇದು ಬೇಕು ಎನದೆ ಕೇವಲ ಸಾಕ್ಷಿಯಂತೆ ಇದನ್ನು ನೋಡು. ಇದರ ವಿಚಿತ್ರಗಳನ್ನು ನಿನ್ನ ಅಂತರಾತ್ಮಕ್ಕೆ ಅಂಟಿಸಿಕೊಳ್ಳಬೇಡ. ನಾಟಕದ ಪಾತ್ರದಾರಿಯಂತೆ ನಿನ್ನ ಜೀವನವನ್ನು ನಡೆಸು ಎಂದು, ನಾವು ಬದುಕಿನಲ್ಲಿ ಧರಿಸಿರುವ ಪಾತ್ರವನ್ನು ಹೇಗೆ ನಿಭಾಯಿಸಬೇಕು ಎಂದು ಸೂಚ್ಯವಾಗಿ ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 752,
    english:
      "Among all the foods, the best is the essence of the Parabrahman (God) himself. Once you have experienced it, then what is left in this world to ask for? People say that the way to realization is to lose attachment - letting go. If you have experienced God, then you will not find any difference among the person letting go, the act of letting go and the object being let go. You are the king of the world. - Mankutimma",
    kannada:
      "ಭೋಜನದಿ ಪ್ರಮಭೋಜನ ಪರಬ್ರಹ್ಮರಸ ।\nಯಾಚಿಸಲ್ಕೇನಿರ್ಪುದದನುಂಡ ಬಳಿಕ? ॥\nತ್ಯಾಜಕ ತ್ಯಾಗ ಸಂತ್ಯಾಜ್ಯ ಭೇದಗಳಿರದೆ ।\nರಾಜ ನೀಂ ಜಗಕೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೨ ॥",
    kannada_explanation:
      "ಭೋಜನಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮವಾದ ಭೋಜನ ಆ ‘ಪರಬ್ರಹ್ಮರಸಾಸ್ವಾದನೆ’. ಅದನ್ನು ಉಂಡ ಬಳಿಕ ಬೇರೇನೂ ಬೇಡಲಾಗುವುದಿಲ್ಲ. ಅದು ಸಂಪೂರ್ಣ ತೃಪ್ತಿಯನ್ನು ನೀಡುವಂತಹ ಊಟ. ಆ ಊಟವನ್ನುಣ್ಣುವಾಗ ಇದು ಬೇಕು, ಇದನ್ನು ಬಿಡಬಹುದು ಮತ್ತು ಇದು ಬೇಡ ಎನ್ನುವ ಪ್ರಶ್ನೆಯೇ ಬರುವುದಿಲ್ಲ. ಹಾಗೆ ಬೇಧವು ಅಳಿದ ಬಳಿಕ, ಎಲ್ಲ ಬೇಧಗಳನ್ನೂ ಮೆಟ್ಟಿ ನಿಂತ ಬಳಿಕ, ನೀನು ಜಗವನ್ನು ಗೆದ್ದ ರಾಜನ ಭಾವ ಸಿಗುತ್ತದೆ ಎಂದು ಪರಿಪೂರ್ಣ ಬದುಕಿನ ಸಾರ್ಥಕತೆಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 753,
    english:
      "Understand the brahman (God) by understanding his world. See the brahman in all beings He created. Experience the brahman through the senses. Salvation is possible through this path - experiencing the world (not by abandoning it). - Mankutimma",
    kannada:
      "ಬ್ರಹ್ಮಾನುಸಂಧಾನ ಲೋಕಸಂಧಾನದಲಿ ।\nಬ್ರಹ್ಮದರ್ಶನವೆಲ್ಲ ಜೀವರೂಪದಲಿ ॥\nಬ್ರಹ್ಮಾನುಭವ ದೇಹಕರಣಾನುಭವಗಳಲಿ ।\nಮರ್ಮವಿದು ಮುಕ್ತಿಗೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೩ ॥",
    kannada_explanation:
      'ಆ ಪರಮಾತ್ಮ ‘ ಸುಮ್ಮನೊಬ್ಬಂಟಿಯೆಂತಿಹುದು? ಬೇಸರವಹುದು ಹೊಮ್ಮುವೆನು ಕೋಟಿರೂಪದಲಿ ನಾನೆಂದು( ಮುಕ್ತಕ ೭೪)" ಎಂದು ಈ ಜಗತ್ತಿನಲ್ಲಿ ಹಲವಾರು ರೂಪಗಳಲ್ಲಿ ಪ್ರಕಟವಾದನೆಂದು ಹೇಳುತ್ತಾ, ಈ ಲೋಕದಲ್ಲಿರುವುದೆಲ್ಲಾ ಬೇರೆಬೇರೆ ರೂಪಗಳನ್ನು ಧಾರಣೆಮಾಡಿದ ಆ ‘ ಪರಬ್ರಹ್ಮ’ ನೇ ಎನ್ನುತ್ತಾರೆ ಗುಂಡಪ್ಪನವರು. ಹಾಗಾಗಿ ಲೋಕವನ್ನು ಸರಿಯಾಗಿ ಅನುಸಂಧಾನಮಾಡಿದರೆ ಆ ಪರಬ್ರಹ್ಮನನ್ನು ಅನುಸಂಧಾನ ಮಾಡಿದಂತೆಯೇ. ಆ ಪರಬ್ರಹ್ಮಾನುಭಾವವನ್ನು ದೇಹವೆಂಬ ಸಾಧನದಿಂದಲೇ ಸಾಧಿಸಬೇಕು. ಇದೇ ‘ಮುಕ್ತಿಸಾಧನೆ’ ಯ ಮರ್ಮ ಎಂದು ಒಂದು ಗಹನವಾದ ತತ್ವವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು',
  },
  {
    number: 754,
    english:
      "The creator is everywhere. Experience him sometimes in a flower gardern, sometimes in a friendsly get together, sometimes in music, sometimes in scriptures, sometimes in worldly dealings and sometimes in silence. - Mankutimma",
    kannada:
      "ಒಮ್ಮೆ ಹೂದೋಟದಲಿ, ಒಮ್ಮೆ ಕೆಳೆಕೂಟದಲಿ।\nಒಮ್ಮೆ ಸಂಗೀತದಲಿ, ಒಮ್ಮೆ ಶಾಸ್ತ್ರದಲಿ ॥\nಒಮ್ಮೆ ಸಂಸಾರದಲಿ, ಮತ್ತೊಮ್ಮೆ ಮೌನದಲಿ ।\nಬ್ರಹ್ಮಾನುಭವಿಯಾಗೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೪ ॥",
    kannada_explanation:
      "ಒಮ್ಮೆ ಹೂದೋಟದಲಿ ಸುತ್ತಾಡುವಾಗ, ಒಮ್ಮೆ ಗೆಳೆಯರೊಂದಿಗೆ ಸಮಯ ಕಳೆಯುವಾಗ, ಒಂದು ಸಂಗೀತ ಸಭೆಯಲ್ಲಿ ನಾದಗಳನಾಲಿಸುವಾಗ, ಸಂಸಾರದ ಸುಳಿಯಲ್ಲಿ ಸುತ್ತುವಾಗ ಅಥವಾ ಮೌನವಾಗಿರುವಾಗ ನೀನು ‘ ಪರ ಬ್ರಹ್ಮ’ ವಸ್ತುವಿನ ಅನುಭವನ್ನು ಪಡೆಯುತ್ತಾ ಇರು ಎಂದು ಒಂದು ಸೂಕ್ಷ್ಮ ವಿಚಾರವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 755,
    english:
      "It is not enough if you just understand it. You must always remember it. In all your thoughts, there must be the presence of the ultimate truth. What is the use of a clerk (in a bank) talking about and keeping account of millions? At the end of the day he has to get only wages to meet his ends. - Mankutimma",
    kannada:
      "ಮತಿಗರ್ಥವಾದೊಡೇಂ? ಸ್ಮೃತಿಯೊಳದು ನೆಲಸಿರಲಿ ।\nಸತತ ಸಂಧಾನದಲಿ ಪರಮಾರ್ಥವಿರಲಿ ॥\nಶತಲಕ್ಷಧನದ ಲೆಕ್ಕವ ಬಾಯಿ ನುಡಿದೊಡೇಂ? ।\nಭೃತಿಯೆಷ್ಟು ವೆಚ್ಚಕ್ಕೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೫ ॥",
    kannada_explanation:
      "ಪರಮಾತ್ಮನ ವಿಚಾರ ಬುದ್ಧಿಗೆ ಅರ್ಥವಾದರೇನು? ಅದು ನೆನಪಿನಲ್ಲಿ ಉಳಿಯಬೇಕು. ಹಾಗೆ ಉಳಿದದ್ದು ಅಂತರಂಗದಲ್ಲಿ ಅನುಸಂಧಾನಗೊಳ್ಳಬೇಕು. ಬಾಯಿಯಲ್ಲಿ ಕೋಟಿ ಕೋಟಿ ಧನದ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿದರೂ, ನಮ್ಮ ವೆಚ್ಚಕ್ಕೆ ನಮ್ಮ ಕಿಸೆಯಲ್ಲಿ ಉಳಿಯುವುದೆಷ್ಟು ಎನ್ನುವುದನ್ನು ನೋಡಬೇಕು ಎಂದು ಹೇಳಿ, ಪರಬ್ರಹ್ಮವಸ್ತುವು ನಮ್ಮ ಮನದಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಉಳಿಯಬೇಕೆನ್ನುವ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ",
  },
  {
    number: 756,
    english:
      "In the kingdom of qualities, there are four qualities that are the best. Courage is the first. Second is wisdom that lets you choose the right over wrong. Having compassion towards all is the third which is the root of all morality. Dispassionate attachment is the fourth and the best of them all. - Mankutimma",
    kannada:
      "ಸಾರ್ವಭೌಮತೆ ನಾಲ್ಕು ಗುಣಕೆ ಗುಣರಾಜ್ಯದಲಿ ।\nಧೈರ್ಯ ಮೊದಲಿನದೆರಡನೆಯದು ಮತಿಯೋಜೆ ॥\nಸರ್ವದಯೆ ಮೂರನೆಯದದುವೆ ನೀತಿಯ ಮೂಲ ।\nನಿರ್ಮಮತ್ವವೆ ಮುಕುಟ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೬ ॥",
    kannada_explanation:
      "ಗುಣಗಳಲ್ಲಿ ನಾಲ್ಕು ಗುಣಗಳು ಅತ್ಯುತ್ತಮ ಗುಣಗಳು. ಮೊದಲನೆಯದು ಧೈರ್ಯ, ಎರಡನೆಯದು ಬುದ್ಧಿಯ ಶಕ್ತಿ, ನೀತಿಯ ಮೂಲವಾದ ಸರ್ವರಲ್ಲೂ ದಯಾಗುಣ ಮೂರನೆಯದು ಮತ್ತು ಮಿಕ್ಕೆಲ್ಲಕ್ಕೂ ಕಿರೀಟಪ್ರಾಯವಾಗಿರುವುದು, ನಿರ್ಮಮತೆ ನಾಲ್ಕನೆಯ ಗುಣ ಎಂದು ಆತ್ಮೋದ್ಧಾರಕ್ಕೆ ಮನುಷ್ಯನಲ್ಲಿ ಇರಬೇಕಾದ ಗುಣಲಕ್ಷಣಗಳನ್ನೂ ನಮಗೆ ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 757,
    english:
      "Let there be a lots of love without attachment. Let you have the courage of Bheema without the hatred. Let there be rituals and rules without being just namesake and punishing(or showoff). Let there be pleasantness everywhere. - Mankutimma",
    kannada:
      "ವ್ಯಾಮೋಹವಿಲ್ಲದ ಪ್ರೇಮ ನಿರ್ಭರವಿರಲಿ ।\nಭೀಮಸಾಹಸವಿರಲಿ ಹಗೆತನವನುಳಿದು ॥\nನೇಮನಿಷ್ಠೆಗಳಿರಲಿ ಡಂಭಕಠಿಣತೆ ಬಿಟ್ಟು ।\nಸೌಮ್ಯವೆಲ್ಲಡೆಯಿರಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೭ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿ ನಾವು ಅನ್ಯರಿಗೆ ತೋರುವ ಪ್ರೇಮಕ್ಕೆ ವ್ಯಾಮೋಹದ ಲೇಪನವಿರಬಾರದು, ಸಾಹಸದಿಂದ ಕೆಲಸಮಾಡಬೇಕೇ ಹೊರತು ಅದಕ್ಕೆ ದ್ವೇಷದ ಲೇಪನವಿರಬಾರದು, ನಮ್ಮ ಆಚಾರ ವಿಚಾರಗಳಲ್ಲಿ ನಿಯಮ ನಿಷ್ಠೆ ಇರಬೇಕು, ಆದರೆ ಅದಕ್ಕೆ ಡಂಬಾಚಾರದ, ಅತಿಯಾದ ಪ್ರದರ್ಶನದ ಆಸೆಯ ಲೇಪನವಿರಬಾರದು, ಎಂದು ಹೇಳುತ್ತಾ ನಮ್ಮ ಎಲ್ಲ ನಡವಳಿಕೆಯಲ್ಲೂ ಸೌಮ್ಯತೆಯಿರಬೇಕು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 758,
    english:
      "Morality has courage as father and magnanimity as mother. When you are in control of your life, you should not worry about what you have lost. You should be ready for whatever future has in store for you. In the process, if you can get some happiness, make full use of it. - Mankutimma",
    kannada:
      "ಔದಾರ್ಯ ತಾಯಿ ನೀತಿಗೆ, ಧೈರ್ಯವೇ ತಂದೆ ।\nಸ್ವಾಧಿಪತ್ಯದೆ ನೀನು ಬಾಳನಾಳುವೊಡೆ ॥\nಹೋದುದನು ನೆನೆಯದಿರು, ಬರುವುದಕೆ ಸಿದ್ಧನಿರು ।\nಆದನಿತು ಸಂತೋಷ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೮ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಬಾಳನ್ನು ನಿನ್ನಿಷ್ಟದಂತೆ ನೀನೇ ನಡೆಸಲಾದರೆ ನೀತಿಗೆ ಔದಾರ್ಯವೇ ತಾಯಿ, ಧೈರ್ಯವೇ ತಂದೆ. ಗತಿಸಿಹೋದದ್ದನ್ನು ನೆನೆಯದೆ ಮುಂಬರುವುದಕ್ಕೆ ಸದಾ ಸಿದ್ದನಿರು ಎಂದು ಹೇಳುತ್ತಾ ಬಾಳಿನ ಕೆಲವು ಸೂತ್ರಗಳನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 759,
    english:
      "Don't neglect what you have while counting what you don't have. Try to identify the good and pleasant among many unpleasant things. You should relish what you have and let go of what does not come to you. That is the path to happiness. - Mankutimma",
    kannada:
      "ಬರದಿಹುದರೆಣಿಕೆಯಲಿ ಬಂದಿಹುದ ಮರೆಯದಿರು ।\nಗುರುತಿಸೊಳಿತಿರುವುದನು ಕೇಡುಗಳ ನಡುವೆ ॥\nಇರುವ ಭಾಗ್ಯವ ನೆನೆದು ಬಾರೆನೆಂಬುದನು ಬಿಡು ।\nಹರುಷಕದೆ ದಾರಿಯೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೫೯ ॥",
    kannada_explanation:
      "ಕೈಗೆ ಸಿಗದೇ ಇರುವುದರ ಲೆಕ್ಕಾಚಾರದಲ್ಲಿ ಕೈಲಿರುವುದನ್ನು ಮರೆಯದೆ ಇರು. ನಮಗೆ ಕಾಣುವ ಬಹಳಷ್ಟು ಕೇಡುಗಳ ಮದ್ಯೆ ಒಳ್ಳೆಯದನ್ನು ಗುರುತಿಸು. ಕೈಗೆ ಸಿಗುವುದಿಲ್ಲ ಎಟುಕುವುದಿಲ್ಲ ಎನ್ನುವುದನ್ನು ಬಿಟ್ಟು ಕೈಯಲ್ಲೇ ಇರುವ ಭಾಗ್ಯವನ್ನು ತೃಪ್ತಿಯಿಂದ ಅನುಭವಿಸು. ಆನಂದಕ್ಕೆ, ಸಂತೋಷಕ್ಕೆ ಇದೇ ದಾರಿ ಎಂದು, ನಿಜವಾದ ಹರುಷಕ್ಕೆ ದಾರಿಯನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 760,
    english:
      "Don't think about the lives that we have already lived. We should concentrate in the ones which are yet to come. By keeping our eyes set in the front - God created us like this so that we should be forward looking. - Mankutimma",
    kannada:
      "ಮುನ್ನಾದ ಜನುಮಗಳ ನೆನಸಿನಿಂ ನಿನಗೇನು? ।\nಇನ್ನುಮಿಹುದಕೆ ನೀಡು ಮನವನ್; ಎನ್ನುವವೋಲ್ ॥\nಬೆನ್ನ ಪಿಂತಿನದು ಕಾಣಿಸದಂತೆ ಪರಮೇಷ್ಠಿ ।\nಕಣ್ಣನಿಟ್ಟನು ಮುಖದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೦ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಜನ್ಮಗಳ ನೆನಪಿನಿಂದ ನಿನಗೇನಾಗಬೇಕಾಗಿದೆ. ಇಂದಿನ ಜನ್ಮಕ್ಕೆ ನೀನು ಮಹತ್ವವನ್ನು ನೀಡು ಎನ್ನುವಂತೆ ಬೆನ್ನ ಹಿಂದಿನದು ಕಾಣಿಸದಂತೆ ಮತ್ತು ಮುಂದೆ ಮಾತ್ರ ನೋಡುವಂತೆ ಮುಖದಲ್ಲಿ ಕಣ್ಣನ್ನು ಇಟ್ಟಿಹನು ನಮಗೆ ಆ ಸೃಷ್ಟಿಕರರ್ತ, ಎಂದು ಹೇಳುತ್ತಾ, ಬದುಕಿನಲ್ಲಿ ಕಳೆದುಹೋದದ್ದನ್ನು ಬಿಟ್ಟು, ಮುನ್ನೋಟವಿಟ್ಟುಕೊಳ್ಳಬೇಕೆಂದು ಸೂಚಿಸಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 761,
    english:
      "The eyes wander in front of us a lot. What can it see from behind the head? Like that we cannot do anything about the past. The past has an end. We are free from it. You must spread your mind into the future - not past. - Mankutimma",
    kannada:
      "ಲೋಚನದ ಸಂಚಾರ ಮುಖದ ಮುಂದಕಪಾರ ।\nಗೋಚರಿಪುದೇನದಕೆ ತಲೆಯ ಹಿಂದಣದು? ॥\nಪ್ರಾಚೀನ ಹೊರತು ಸ್ವತಂತ್ರ ನೀಂ, ಸಾಂತವದು ।\nಚಾಚು ಮುಂದಕೆ ಮನವ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೧ ॥",
    kannada_explanation:
      "ಕಣ್ಣುಗಳ ನೋಟದ ವ್ಯಾಪ್ತಿ ಮುಖದ ಮುಂದಕ್ಕೆ ಬಹಳ ಅಪಾರವಾದದ್ದು. ಆದರೆ ಅದಕ್ಕೆ ತಲೆಯ ಹಿಂದಿನದು ಕಾಣುವುದೇನು? ಇಲ್ಲ . ಹಾಗೆಯೇ ಗತಿಸಿಹೋದ ಪ್ರಾಚೀನ ವಿಷಯಗಳೆಲ್ಲವು ಮುಗಿದುಹೋದ ವಿಷಯಗಳು . ಅವುಗಳನ್ನು ತೊರೆದರೆ ನೀನು ಸ್ವತಂತ್ರನಾಗುತ್ತೀಯೆ. ಹಾಗಾಗಿ ನಿನ್ನ ಮನವನ್ನು ಮುಂದಕ್ಕೆ ತೆಗೆದುಕೊಂಡು ಹೋಗು ಎಂದು ಆದೇಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 762,
    english:
      "In our life on this world, let our goal be to scale Mt Meru (Mountain of Gold). The day you forget about Meru, it will be a path to hell. What if it is far away? What if you are handicapped? Let the memory of the home town give you strength. - Mankutimma",
    kannada:
      "ಧಾರುಣಿಯ ನಡಿಗೆಯಲಿ ಮೇರುವಿನ ಗುರಿಯಿರಲಿ ।\nಮೇರುವನು ಮರೆತಂದೆ ನಾರಕಕೆ ದಾರಿ ॥\nದೂರವಾದೊಡದೇನು? ಕಾಲು ಕುಂಟಿರಲೇನು? ।\nಊರ ನೆನಪೇ ಬಲವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೨ ॥",
    kannada_explanation:
      "ಭೂಮಿಯ ಮೇಲೆ ನಾವು ಹುಟ್ಟಿ ಬದುಕುವಾಗ, ಗುರಿ ಉನ್ನತವಾಗಿರಲಿ. ಉನ್ನತವಾದ ಗುರಿಯನ್ನು ಮರೆತರೆ ಅದೇ ನರಕಕ್ಕೆ ದಾರಿ. ಉನ್ನತವಾದ ‘ಗುರಿ’ ದೂರವಾಗಿದ್ದರೇನು ಅಥವಾ ಅದನ್ನು ತಲುಪಲು ನಮ್ಮ ಕಾಲು ಕುಂಟಾಗಿದ್ದರೇನು, ನಮ್ಮ ಊರಿನ ನೆನಪೇ ನಮಗೆ ಅಲ್ಲಿಗೆ ತಲುಪಲು ಬಲವನ್ನು ಕೊಡುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾ ಪಾರಮಾರ್ತ್ಯದ ಗುರಿಯಿರಬೇಕು ಎಂದು ಪರೋಕ್ಷವಾಗಿ ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ .",
  },
  {
    number: 763,
    english:
      "There are hundreds of peaks (which one may confuse to be the actual peak) on Mt Meru.. There are hundreds of paths to the top. There are hundreds of resting points. You must mingle well with all other travelers with compassion. Let the thoughts of the Meru itself be your strength. - Mankutimma",
    kannada:
      "ಮೇರುಪರ್ವತಕಿಹುವು ನೂರೆಂಟು ಶಿಖರಗಳು ।\nದಾರಿ ನೂರಿರಬಹುದು, ನಿಲುವ ಕಡೆ ನೂರು ॥\nಸಾರು ನೀಂ ಯಾತ್ರಿಕರಿಗೆಲ್ಲ ಕೆಳೆಯಾಗಿರುತೆ ।\nಮೇರುಸಂಸ್ಮೃತಿಯೆ ಬಲ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೩ ॥",
    kannada_explanation:
      "ಮೇರುಪರ್ವತಕ್ಕೆ ನೂರೆಂಟು ಶಿಖರಗಳು ಉಂಟು. ಅದನ್ನು ತಲುಪಲು ನೂರಾರು ದಾರಿಗಳಿರಬಹುದು. ದಾರಿಗುಂಟ ನೂರಾರು ತಂಗುದಾಣಗಳಿರಬಹುದು. ಅದನ್ನು ತಲುಪಲು ನಿನ್ನ ಪ್ರಯಾಣದಲ್ಲಿ ಸಹ ಯಾತ್ರಿಕರೊಡನೆ ಗೆಳೆತನವನ್ನು ಬೆಳೆಸಿಕೊಂಡು ಪ್ರಯಾಣಮಾಡು, ಆದರೆ ಮುಂದಕ್ಕೆ ಸಾಗಲು ಮೇರುವನ್ನು ತಲುಪುವ ಗುರಿಯೇ ನಿನಗೆ ಬಲಕೊಡುತ್ತದೆ ಎಂದು ಔನ್ನತ್ಯದ ನಮ್ಮ ಪ್ರಯಾಣ ಹೇಗಿರಬೇಕು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 764,
    english:
      "There was once a great believer in Lord Shiva by the name - Nanda. He was born in lower caste and was forbidden from entering temples. But he had a dream of Shiva dancing his signature Tandava steps in a elegant court of Gods. After having this dream that was the only thing he could think of. His single minded devotion made him forget (free himself from) all the worldly ties and finally become one with the Holy Spirit. - Mankutimma",
    kannada:
      "ಧನ್ಯ ಹೊಲೆಯರ ನಂದ; ಹಿಡಿದುದವನನು ಕನಸು ।\nಸ್ವರ್ಣಸಭೆಯಾ ಶೈವತಾಂಡವದ ಕನಸು ॥\nಅನ್ಯ ಚಿಂತೆಗಳನದು ಬಿಡಿಸುತವನಾತ್ಮವನು ।\nಚಿನ್ಮಯಕೆ ಸೇರಿಸಿತು - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೪ ॥",
    kannada_explanation:
      "ಅವನಿಗೆ ಸ್ವರ್ಣಸಭೆಯಲ್ಲಿ ಶಿವತಾಂಡವವನ್ನು ನೋಡುವ ಕನಸು. ಅನ್ಯ ಚಿಂತೆಗಳನ್ನು ಬಿಟ್ಟು ಕೇವಲ ಅದನ್ನೇ ಚಿಂತಿಸುತ್ತಿದ್ದನಾದ್ದರಿಂದ ಆ ದರುಶನದಿಂದಲೇ ಅವನ ಆತ್ಮಕ್ಕೆ ಮುಕ್ತಿ ಸಿಕ್ಕಿತು, ಅಂತಹ ‘ಹೊಲೆಯರ ನಂದ’ ಧನ್ಯ ಎಂದು ಏಕಾಗ್ರತೆಯಿಂದ ಪರತತ್ವವನ್ನು ಹೇಗೆ ಸಾಧಿಸಬಹುದು ಎಂದು ಒಂದು ಕತೆಯನ್ನು ಉದಾಹರಿಸಿ ತಿಳಿಸಲೆತ್ನಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 765,
    english:
      "Shabari had another kind of sublime devotion towards Rama. She thought that only when Rama is happy could she be happy. So, she made sure that all the fruits she chose for him were sweet by tasting them herself. This blurring of the personal with the supreme soul is exemplified in Shabari. - Mankutimma",
    kannada:
      "ತನ್ನ ರುಚಿ ರಾಮರುಚಿ; ತನ್ನ ಸಂತುಷ್ಟಿ ಪರಿ- ।\nಪೂರ್ಣವಪ್ಪುದು ರಾಮಸಂತುಷ್ಟಿಯಿಂದೆ ॥\nಎನ್ನುವಾ ಸಾಜಾದಾ ದೈವಾತ್ಮಭಾವದಲಿ ।\nಧನ್ಯಳಾದಳು ಶಬರಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೫ ॥",
    kannada_explanation:
      "ತನಗೆ ರುಚಿಯಾಗಿ ಕಂಡದ್ದು ರಾಮನಿಗೂ ರುಚಿಯಾಗುವುದು. ರಾಮನಿಗೆ ರುಚಿಯಾಗಿ ಕಂಡು ರಾಮ ತೃಪ್ತಿಪಟ್ಟರೆ ಅವನ ತೃಪ್ತಿಯೇ ನನ್ನ ತೃಪ್ತಿ ಎನ್ನುವ ದೈವಾತ್ಮಭಾವವನ್ನು ಅನುಭವಿಸಿ ಶಬರಿ ಧನ್ಯಳಾದಳು, ಎಂದು ಶಬರಿಯ ವೃತ್ತಾಂತವನ್ನು ಅರುಹುತ್ತಾ ದೈವ ತೃಪ್ತಿಯಲ್ಲೇ ಮಾನವ ತೃಪ್ತಿ ಕಾಣಬೇಕು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 766,
    english:
      "Surrendering to a greater call and thinking about it day and night, not thinking about any other thing, seeing everything else in its light - spending the life thus is what Hanuman teaches us to do. To Hanuman, devotion towards Rama was that greater call. - Mankutimma",
    kannada:
      "ಘನತತ್ತ್ವವೊಂದಕ್ಕೆ ದಿನರಾತ್ರಿ ಮನಸೋತು ।\nನೆನೆಯದಿನ್ನೊಂದನೆಲ್ಲವ ನೀಡುತದರಾ ॥\nಅನುಸಂಧಿಯಲಿ ಜೀವಭಾರವನು ಮರೆಯುವುದು ।\nಹನುಮನುಪದೇಶ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೬ ॥",
    kannada_explanation:
      "ಮಹತ್ತರವಾದ ತತ್ವಕ್ಕೆ ದಿನರಾತ್ರಿ ಮನಸ್ಸನ್ನು ತೊಡಗಿಸಿಕೊಂಡು, ಬೇರಾವುದನ್ನೂ ನೆನೆಯದಂತೆ ಆ ಘನ ತತ್ವದಲ್ಲಿ ಲೀನವಾಗಿ ತನ್ನ ಜೀವ ಭಾರವನು ಮರೆಯುವಂತಹ ಒಂದು ಆದರ್ಶದ ನಿದರ್ಶನವನ್ನು ತೋರುವುದೇ ಮಹಾತ್ಮ ಹನುಮಂತನ ಜೀವನವೆಂದು ಹೇಳುತ್ತಾ, ಏಕಾಗ್ರತೆಯಿಂದ ಆತ್ಮಾನುಸಂಧಾನ ಮಾಡಿಕೊಂಡಾಗ ಲಭ್ಯವಾಗುವ ಮೇರು ಸ್ಥಿತಿಯನ್ನು ನಮಗೆ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 767,
    english:
      "Living from moment to moment, day to day and finding small happiness in little small pocket and leading the entire life thus. It is a lighthearted way of leading life and a good plan. This is the plan followed by a dog. - Mankutimma\n\n[Translator's note: There are other interpretation about a sage name Shaunaka who was a proponent of such a lifestyle.]",
    kannada:
      "ಕ್ಷಣದಿಂದನುಕ್ಷಣಕೆ, ದಿನದಿಂದ ಮರುದಿನಕೆ ।\nಅನಿತನಿತರೊಳೆ ಬದುಕುತಾಯುವನು ಕಳೆವಾ ॥\nಮನದ ಲಘುಸಂಚಾರವೊಂದು ಯೋಗದುಪಾಯ ।\nಶುನಕೋಪದೇಶವದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೭ ॥",
    kannada_explanation:
      "‘ಹೊಲೆಯನಂದ’ ‘ಶಬರಿ’ ಮತ್ತು ‘ಹನುಮಂತ’ ರನ್ನು ಮತ್ತು ಅವರ ಭಕ್ತಿ ಮತ್ತು ಶ್ರದ್ಧೆಯನ್ನು ಈ ಹಿಂದಿನ ಮೂರು ಮುಕ್ತಕಗಳಲ್ಲಿ ಉಲ್ಲೇಖಮಾಡಿ, ಈ ಮುಕ್ತಕದಲ್ಲಿ ಒಂದು ನಾಯಿಯ ಜೀವನವನ್ನು ತೋರಿ, ‘ನೋಡಿ ಇದರಿಂದಲೂ ಬದುಕಿನ ಮಹತ್ತತ್ವವನ್ನು ಕಲಿಯಬಹುದು’ ಎಂದು ನಮಗೆ ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 768,
    english:
      "Everyone is worried about what would happen to them. Nobody is asking what is good for the world? When we use our wisdom with a world view and expand our consciousness, that becomes a path to salvation. - Mankutimma",
    kannada:
      "ಗತಿಯೇನು ಎನಗೆನುತ ಕೇಳ್ವವರೆ ಎಲ್ಲರುಂ ।\nಹಿತವೆಂತು ಜಗಕೆಂದು ಕೇಳುವವರಾರು? ॥\nಮತಿಯ ವಿಶ್ವದಿ ಬೆರಸಿ ಜೀವಿತವ ವಿಸ್ತರಿಸೆ ।\nಪಥ ಮುಕ್ತಿಗಾಗಳೇ - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೮ ॥",
    kannada_explanation:
      "ಮುಂದಕ್ಕೆ ನನ್ನ ಗತಿಯೇನು? ಎಂದು ಕೇಳುವವರೇ ಹೆಚ್ಚು ಜನರಿದ್ದಾರೆ. ಜಗದ ಹಿತದ ಚಿಂತನೆ ಮಾಡುವವರಾರೂ ಇಲ್ಲ. ಮನದ ಆಲೋಚನೆಯನ್ನು ವಿಸ್ತಾರಗೊಳಿಸಿ ಸ್ವಾರ್ಥವನ್ನು ಬಿಟ್ಟು ಜಗಚ್ಚಿಂತನೆಯಲ್ಲಿ ಸರ್ವರ ಹಿತ, ಒಳಿತಿಗಾಗಿ ತೊಡಗಿಸಿಕೊಂಡರೆ, ಅದೇ ಜೀವನದಲ್ಲಿ ‘ಮುಕ್ತಿ’ಗೆ ದಾರಿ ಎಂದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 769,
    english:
      "One day we feast. We stay hungry as a ritual on some other day. One day will be very busy. Another day will be for rest. When the two are well interspersed, life will be happy. If there are days of only one kind, then life becomes tough - like walking on one leg. - Mankutimma",
    kannada:
      "ಒಂದುದಿನವೌತಣಕೆ, ಉಪವಾಸಕಿನ್ನೊಂದು ।\nಸಂದಣಿಯದಿನವೊಂದು, ಬಿಡುವು ದಿನವೊಂದು ॥\nಹೊಂದಿರ್ದೊಡುಭಯಮುಂ ಜೀವಕದು ಸುಖ ಚಲನ ।\nಒಂದುಕಾಲ್ನಡೆ ಸುಖವೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೬೯ ॥",
    kannada_explanation:
      "ಒಂದೇ ಕಾಲಿನ ನಡಿಗೆ ಹೇಗೆ ಸುಖವಲ್ಲವೋ, ಹಾಗೆಯೇ, ಒಂದು ದಿನ ಔತಣಕ್ಕೆ ಹೋಗುವುದು ಮತ್ತೊಂದು ದಿನ ಉಪವಾಸದ ವ್ರತವನ್ನನುಸರಿಸುವುದು, ಒಂದು ದಿನಸಮಾರಂಭದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುವುದು ಮತ್ತೊಂದು ದಿನ ಪೂರ್ಣ ಬಿಡುವನ್ನು ಅನುಭವಿಸುವುದು, ಹೀಗೆ ಎರಡೂ ರೀತಿಯ ಅನುಭವಗಳಿದ್ದರೆ ಬದುಕಿನಲ್ಲಿ ಚೈತನ್ಯವಿರುತ್ತದೆ ಎಂದು ಬದುಕಿನಲ್ಲಿ ಸ್ವಾರಸ್ಯವನ್ನು ಅನುಭವಿಸುವ ಬಗೆಯನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 770,
    english:
      "The two eyes set you a single target and the two hands help you to achieve a single goal that the mind sets. There is unity through duality and duality inside unity. This is the mark of the Cosmic Spirit of God. - Mankutimma",
    kannada:
      "ನೇತ್ರಯುಗಳಂ ಪಿಡಿಗುಮೊಂದು ಲಕ್ಷ್ಯವ ಕೂಡಿ ।\nಹಸ್ತಯುಗ ಸಾಧಿಪುದು ಮನದರ್ಥವೊಂದನ್ ॥\nದ್ವೈತದಿಂದದ್ವೈತವದ್ವೈತದೊಳ್ ದ್ವೈತ ।\nಚೈತನ್ಯ ಲೀಲೆಯಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೦ ॥",
    kannada_explanation:
      "‘ಎರಡು’ ಕಣ್ಗಳ ದೃಷ್ಟಿಯ ಹಿಡಿತಕ್ಕೆ ಸಿಕ್ಕುವುದು ‘ಒಂದು’ ಲಕ್ಷ್ಯ. ಆ ‘ಒಂದು’ ಲಕ್ಷ್ಯವನ್ನಿಟ್ಟುಕೊಂಡು ಸಾಧಿಸುವುದಕ್ಕೆ ‘ಎರಡು’ ಕೈಗಳ ಪ್ರಯತ್ನ. ಆ ‘ಎರಡು’ ಕೈಗಳ ಪ್ರಯತ್ನ ಸಾಧಿಸುವುದು ಮನದ ‘ಒಂದು’ ಅರ್ಥವನ್ನು. ಹೀಗೆ ದ್ವೈತದಿಂದ ಅದ್ವೈತ ಮತ್ತು ಅದ್ವೈತಕ್ಕಾಗಿ ದ್ವೈತದ ಪರಸ್ಪರ ಬಾಂಧವ್ಯವು ಪರಮಾತ್ಮನ ಲೀಲಾವಿನೋದವಷ್ಟೇ, ಎಂದು ಒಂದು ಹಲವಕ್ಕೆ ಮತ್ತು ಹಲವು ಒಂದಕ್ಕೆ ಪೂರಕವಾಗಿದೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎನ್ನುವ ತತ್ವವನ್ನು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 771,
    english:
      "This is the summary of the three prevalent treatises about the universe. One says God is like an ocean and beings are like an iceberg - made of the same material but visibly different and supported by God. Second one says that God is like milk and beings are like ghee - the two are indistinguishable till one makes an effort to churn it. The third one says, good is kheer (a sweet dish) and beings are like raisins in it. Beings are just a item in the recipe and clearly distinguishable from the complete product (Kheer). - Mankutimma",
    kannada:
      "ನೀರಧಿ ಬ್ರಹ್ಮ, ನೀರ್ಗಲ್ ಜೀವವೆನುತೊಂದು ।\nಕ್ಷೀರವದು, ಘೃತವಿದದರೊಳಗೆನ್ನುತೊಂದು ॥\nಕೀರು ಪರಮಾನ್ನವದು, ದ್ರಾಕ್ಷಿಯಿದೆನುತ್ತೊಂದು ।\nಮೂರಿಂತು ಮತವಿವರ - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೧ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿಕರ್ತ ಬ್ರಹ್ಮ ಕಡಲಂತೆ, ಜೀವ ಕಡಲ ಮೇಲೆ ತೇಲುವ ಮಂಜಗಡ್ಡೆಯಂತೆ ಎನ್ನುವುದು ಒಂದು ಅಭಿಪ್ರಾಯ, ಪರಮಾತ್ಮ ಹಾಲು ಆ ಹಾಲಿನಲ್ಲಿ ಇರುವ ತುಪ್ಪವೇ ಜೀವ ಎನ್ನುವುದು ಇನ್ನೊಂದು ಅಭಿಪ್ರಾಯ , ಆ ಪರಮಾತ್ಮ ಪಾಯಸ ಪರಮಾನ್ನವಿದ್ದಹಾಗೆ. ಅದರಲ್ಲಿ ತೇಲಾಡುವ ದ್ರಾಕ್ಷಿಯೇ ಜೀವ ಎನ್ನುವುದು ಮತ್ತೊಂದು ಅಭಿಪ್ರಾಯ. ಹೀಗೆ ಪರಮಾತ್ಮ ಮತ್ತು ಜೀವಾತ್ಮರ ಸ್ವರೂಪ ಕುರಿತು ಮೂರು ಅಭಿಪ್ರಾಯಗಳಿವೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 772,
    english:
      "Let there by three treatises or there hundred. All of them agree that there is one thing - God like - that supports the entire creation of this universe. What ever treatise that looks at the truth this way can not be harmful to the world. - Mankutimma",
    kannada:
      "ಮೂರಿರಲಿ ವಾದ, ಮುನ್ನೂರಿರಲಿ; ಸಕಲರುಂ ।\nಸಾರವಸ್ತುವನೊಂದನೊಪ್ಪಿಕೊಳುವವರೇ ॥\nಪಾರಮಾರ್ಥಿಕವನಂತೆಣಿಸಿದ ವ್ಯವಹಾರ ।\nಭಾರವಾಗದು ಜಗಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೨ ॥",
    kannada_explanation:
      "ಹಿಂದಿನ ಮುಕ್ತಕದಲ್ಲಿ ಹೇಳಿದಂತೆ ಪರಮಾರ್ಥದ ಅಭಿಪ್ರಾಯ ಮೂರಿರಲಿ ಅಥವಾ ಮುನ್ನೂರಿರಲಿ, ಆದರೆ ಎಲ್ಲರೂ ಆ ಪರಮಾರ್ಥದ ಮೂಲವಸ್ತುವು ಒಂದೇ ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾರೆ. ಎಲ್ಲರ ಮನಸ್ಸು ಯಾವ ರೂಪದಲ್ಲಾದರೂ ಸರಿ, ಕೇವಲ ಒಂದೇ ಪರಬ್ರಹ್ಮ ವಸ್ತುವನ್ನು ಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಪರಸ್ಪರ ವ್ಯವಹರಿಸಿದರೆ ಜಗತ್ತಿನ ಬದುಕು ಹಗುರವೆಂದೆನಿಸುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 773,
    english:
      "This is a very good plan to live happily. On the outside we must engage in every worldly activity that we deem fit. Inside, we should be detached to it. On the outside we must give hundred percent to the work at hand. Inside, we must not care too much about its result. On the outside we must take part in the every-day progress of the world - birth, suffering, happiness and death. Inside, we should not care about it. - Mankutimma",
    kannada:
      "ಹೊರಗೆ ಲೋಕಾಸಕ್ತಿಯೊಳಗೆ ಸಕಲ ವಿರಕ್ತಿ ।\nಹೊರಗೆ ಕಾರ್ಯಧ್ಯಾನವೊಳಗುದಾಸೀನ ॥\nಹೊರಗೆ ಸಂಸೃತಿಭಾರವೊಳಗದರ ತಾತ್ಸಾರ ।\nವರಯೋಗಮಾರ್ಗವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೩ ॥",
    kannada_explanation:
      "ಹೊರಗೆ ಲೋಕದಲ್ಲಿ ಆಸಕ್ತಿ ಮತ್ತು ಒಳಗೆ ಎಲ್ಲದರಲ್ಲೂ ವಿರಕ್ತಿ. ಹೊರಗೆ ಸದಾಕಾಲ ಕಾರ್ಯ ತತ್ಪರತೆ ಆದರೆ ಯಾವುದರಲ್ಲೂ ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಉದಾಸೀನ. ಹೊರಗೆ ಸಂಸ್ಕೃತಿಯ ಭಾರ, ಒಳಗೆ ಅದರಲ್ಲಿ ತಾತ್ಸಾರ, ಈ ರೀತಿಯಿರುವುದು ಶ್ರೇಷ್ಠತಮ ಯೋಗಮಾರ್ಗವೆಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 774,
    english:
      "It is easier to bask in sunlight than look at the sun directly. It is easier to understand by examples than to learn all the scriptures first hand. We all want to learn about the universal truth. But is there a teacher who can simplify it for us? Where can we start the search for him? You will be fortunate the day you get him. - Mankutimma",
    kannada:
      "ತರಣಿದರ್ಶನಕಿಂತ ಕಿರಣಾನುಭವ ಸುಲಭ ।\nಪರಮಶಾಸ್ತ್ರಕ್ಕಿಂತ ಸರಿಯುದಾಹರಣೆ ॥\nಪರಮತತ್ತ್ವ ಕಂಡ ಗುರುವನರಸುವುದೆಲ್ಲಿ? ।\nದೊರೆತಂದು ನೀಂ ಧನ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೪ ॥",
    kannada_explanation:
      "ಸೂರ್ಯನನ್ನು ನೋಡುವುದಕ್ಕಿಂತ ಅವನ ಕಿರಣಗಳಿಂದ ಹೊರಸೂಸುವ ಬೆಳಕು ಸಹನೀಯ. ಅತ್ಯುತ್ತಮ ಶಾಸ್ತ್ರಗಳನ್ನು ಅರಿಯುವುದಕ್ಕಿಂತ ಅದರ ಸಾರವನ್ನು ಉದಾಹರಣೆಯಾಗಿ ನೋಡಿದರೆ ಅರ್ಥವಾಗುವುದು ಸುಲಭ. ಹಾಗೆ ಪರತತ್ವವನ್ನು ಅರಿತ ಗುರುವನ್ನು ಅರಸುವುದು ಎಲ್ಲಿ? ಅಂತಹ ಗುರು ದೊರೆತ ದಿನ ನೀನು ಧನ್ಯ, ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 775,
    english:
      "For a plain sight, the crow and nightingale look similar. But they are very different in their qualities. Just like that, a Yogi (ascetic) may also look to be a normal person enjoying his stay in this world. He mingles with every one with their happiness, grief and jubilations. But inside he is noble person deeply and selflessly concerned about others on the world. - Mankutimma",
    kannada:
      "ಕಾಗೆಯುಂ ಕೋಗಿಲೆಯುಮೊಂದೆ ಮೇಲ್ನೋಟಕ್ಕೆ ।\nಯೋಗಿಯುಂ ಸಂಸಾರಭೋಗಿಯೇ ಹೊರಕೆ ॥\nಲೋಗರವೊಲಿರುತೆ ಸುಖದುಃಖಸಂಭ್ರಮಗಳಲಿ ।\nತ್ಯಾಗಿಯವನ್ ಆಂತರದಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೫ ॥",
    kannada_explanation:
      "ಕಾಗೆ ಮತ್ತು ಕೋಗಿಲೆಗಳು ಮೇಲು ನೋಟಕ್ಕೆ ಒಂದೇ ರೀತಿ ಕಾಣುತ್ತವೆ. ಯೋಗಿಯೂ ಹೊರನೋಟಕ್ಕೆ ಸಂಸಾರಿಯಂತೆ ಕಾಣುತ್ತಾನೆ. ಭೋಗಿಯಂತೆ ಕಾಣುತ್ತಾನೆ. ಆದರೆ ಅವನು ಲೋಕದ ಎಲ್ಲ ಜನರಂತೆ ಕಾಣುತ್ತಾ ಎಲ್ಲಾ ಸುಖ ದುಃಖ ಸಂಭ್ರಮಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುತ್ತಾ ಅಂತರಂಗದಲ್ಲಿ ತ್ಯಾಗಿಯಾಗಿರುತ್ತಾನೆ, ಎಂದು ತ್ಯಾಗಿಗಳ ಲಕ್ಷಣವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 776,
    english:
      "God comes in front of us in different forms. Man does not recognize it. He thinks it just another beautiful creature of this world. He will let go of it even after getting it. - Mankutimma",
    kannada:
      "ಪರಿಪರಿಯ ರೂಪದಲಿ ಪರದೈವ ಕಣ್ಮುಂದೆ ।\nಚರಿಸುತಿರೆ ನರನದರ ಗುರುತನರಿಯದೆಯೆ ॥\nಧರೆಯದದು ತನ್ನಂದದ ಪ್ರಾಣಿಯೆಂದೆಣಿಸಿ ।\nತೊರೆಯುವನು ದೊರೆತುದನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೬ ॥",
    kannada_explanation:
      "ವಿದವಿದವಾದ ರೂಪಗಳನ್ನು ಹೊತ್ತು ಆ ಪರದೈವ ಕಣ್ಣ ಮುಂದೆಯೇ ಓಡಾಡುತ್ತಾ ಇದ್ದರೂ ಅದರ ಗುರುತನ್ನು ತಿಳಿಯಲಾಗದೆ, ಅದೂ ಸಹ ಭೂಮಿಯ ಮೇಲೆ ಓಡಾಡುವ ತನ್ನಂತಹ ಮತ್ತೊಂದು ಪ್ರಾಣಿ, ಎಂದು ತಿಳಿದು ಕೈಗೆ ಸಿಕ್ಕ ದೈವವನ್ನು ಬಿಟ್ಟು ಬಿಡುತ್ತಾನೆ, ಮನುಷ್ಯ ಎಂದು ಸರ್ವಾತ್ಮಾನುಭವದ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 777,
    english:
      "God may come to you in ordinary form as another worldly person. He comes to you to give you a boon. But to see him (as God) you need to have righteous ways. How will a greedy (interested in enjoying pleasures) ever get a boon? (He will not be able to recognize God and treat him well) - Mankutimma",
    kannada:
      "ಸಾಮಾನ್ಯ ರೂಪದಲಿ, ಸಂಸಾರಿವೇಷದಲಿ ।\nಸ್ವಾಮಿ ನಿನ್ನೆಡೆಗೆ ಬರಬಹುದು ವರ ನೀಡಿ ॥\nಮೈಮೆ ಕಾಂಬೊಡೆ ನಿನಗೆ ಸಂಸ್ಕಾರವಿರಬೇಕು ।\nತಾಮಸಿಗೆ ವರವೆಲ್ಲಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೭ ॥",
    kannada_explanation:
      "ಪರಮಾತ್ಮ ನಿನಗೆ ವರ ನೀಡಲು, ಸಾಮಾನ್ಯನ ರೂಪಧರಿಸಿ ಬರಬಹುದು, ಸಂಸಾರಿಯ ವೇಷಧರಿಸಿ ಬರಬಹುದು. ಅವನ ಮಹಿಮೆಯನ್ನು ಕಾಣಲು ಒಂದು ಉನ್ನತ ಸಂಸ್ಕಾರವಿರಬೇಕು. ತಾಮಸ ಗುಣವುಳ್ಳವನಿಗೆ ವರವೆಲ್ಲಿ ಸಿಗುವುದು ಎಂದು ಸರ್ವಾತ್ಮಾನುಭವದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 778,
    english:
      "These are the qualities that will help you lead a happy life. Disinterest in the material pleasures, indulging in understanding of the world, always being hardworking, exercising patience when fail, keeping a balanced mind when faced with troubles, treating all other beings as same (equal to self). - Mankutimma",
    kannada:
      "ವಿಷಯಭೋಗವಿರಕ್ತಿ, ವಿಶ್ವಲೀಲಾಸಕ್ತಿ ।\nಕೃಷಿಗೆ ಸಂತತ ದೀಕ್ಷೆ, ವಿಫಲಕೆ ತಿತಿಕ್ಷೆ ॥\nವಿಷಮದಲಿ ಸಮದೃಷ್ಟಿ, ವಿವಿಧಾತ್ಮ ಸಂಸೃಷ್ಟಿ ।\nಕುಶಲಸಾಧನಗಳಿವು - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೮ ॥",
    kannada_explanation:
      "ವಿಷಯಗಳ ಭೋಗದಲಿ ವಿರಕ್ತಿ, ವಿಶ್ವ ಲೀಲೆಯಲ್ಲಿ ಆಸಕ್ತಿ, ಕರ್ತವ್ಯವನ್ನು ಮಾಡಲು ಸದಾ ನಿರತ, ವೈಫಲ್ಯಕ್ಕೆ ಅವಿಚಲಿತ, ಜಗತ್ತಿನ ವೈವಿಧ್ಯತೆಯಲ್ಲಿ ಸಮದೃಷ್ಟಿ, ಜಗತ್ತಿನ ಆತ್ಮಗಳೆಲ್ಲವೂ ಒಂದೇ ಎನ್ನುವ ಜಗದಾತ್ಮಭಾವ, ಇಂತಹ ಗುಣಗಳಿದ್ದರೆ ಅವುಗಳು ಪರತತ್ವವನ್ನು ಅರಿಯುವ ಪ್ರಯತ್ನಕ್ಕೆ ಸೂಕ್ತವಾದ ಸಾಧನಗಳು ಎಂದು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 779,
    english:
      "A person is really fortunate if he has all these together: rightful wages for his work, limited worries of tomorrow, a good group of friends to lessen his burden of life, satisfaction in simplicity and eyes set on the universal truth. - Mankutimma",
    kannada:
      "ದೊರೆವ ಜೀತಕೆ ದುಡಿತ, ಮರುದಿನದ ಚಿಂತೆ ಮಿತ ।\nಹೊರೆಯ ಹಗುರಾಗಿಸುವ ಕೆಳೆಯರೊಡನಾಟ ॥\nಸರಳತೆಯ ಪರಿತುಷ್ಟಿ, ಪರಮಾರ್ಥ ದೃಷ್ಟಿಯಿವು ।\nಸರಿಗೂಡೆ ಸುಕೃತವದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೭೯ ॥",
    kannada_explanation:
      "ನಮಗೆ ಎಷ್ಟು ಹಣ ಸಿಗುತ್ತದೋ ಅಷ್ಟಕ್ಕೆ ನಿರ್ವಂಚನೆಯಿಂದ ದುಡಿತ, ಮುಂದೇನು ಎನ್ನುವುದರ ಕುರಿತು ಮಿತವಾದ ಚಿಂತೆ, ಜೀವನದ ಹೊರೆಯನ್ನು ಹಗುರಾಗಿಸಿಕೊಳ್ಳಬಹುದಾದಂತಹ ಸಂಗ ಸಹವಾಸಗಳು, ಸರಳವಾದಂತಹ ಜೀವನದ ಶೈಲಿಯಿದ್ದರೆ, ಬದುಕಿನಲ್ಲಿ ಪರಮಾರ್ಥ ಚಿಂತನೆಗೆ ಸಾಕಷ್ಟು ಸಮಯಸಿಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 780,
    english:
      "There is a season for rain, one for growth and one for harvest. The tree of life will grow according to the schedule set by time. Wisdom, good character, detachment and salvation will all come when the time is ripe. - Mankutimma",
    kannada:
      "ಮಳೆಗೊಂದು ಬೆಳೆಗೊಂದು ಫಲಕೊಂದು ಋತುವಂತೆ ।\nಬೆಳೆಯಿಪುದು ಜೀವವೃಕ್ಷವ ಕಾಲನಿಯತಿ ॥\nತಿಳಿವುಮೊಳ್ತನಮುಂ ವಿರಕ್ತಿಯುಂ ಮುಕ್ತಿಯುಂ ।\nಗಳಿಗೆ ಸರಿಸೇರ್ದಂದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೦ ॥",
    kannada_explanation:
      "ಮಳೆಗೆ ಒಂದು ಋತು, ಬೆಳೆಗೆ ಒಂದು ಋತು, ಫಲಕ್ಕೆ ಒಂದು ಋತುವಿರುವಂತೆ, ಈ ಜೀವವೆಂಬ ವೃಕ್ಷವೂ ಕಾಲಾನುಕಾಲಕ್ಕೆ ಬೆಳೆಯುತ್ತದೆ.ಅದೇ ರೀತಿಸರಿಯಾದ ಸಮಯ ಕೂಡಿಬಂದಾಗ ತಿಳಿವು, ಒಳ್ಳೆಯತನವು, ವಿರಕ್ತಿ ಮತ್ತು ಮುಕ್ತಿಗಳೂ ಲಭ್ಯವಾಗುತ್ತದೆ ಎಂಬ ಅರಿವನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 781,
    english:
      "Can one sow the seed in the morning and expect a harvest by evening? Time has a great role to play in out efforts. Can one forget about time and cook food hurriedly? Patience makes the finished product complete. - Mankutimma",
    kannada:
      "ಕಾಳನುದಯದಿ ಬಿತ್ತೆ ಸಂಜೆಗದು ಪೈರಹುದೆ? ।\nಪಾಲುಂಟು ಕಾಲಂಗೆ ನಮ್ಮ ಕೃಷಿಗಳಲಿ ॥\nವೇಳೆ ಗಡು ಮರೆತಾತುರದಿನ್ ಅಡುಗೆ ಪಕ್ಕಹುದೆ ।\nತಾಳುಮೆಯೆ ಪರಿಪಾಕ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೧ ॥",
    kannada_explanation:
      "ಸೂರ್ಯೋದಯದ ಸಮಯಕ್ಕೆ ಕಾಳ ಬಿತ್ತಿದರೆ ಸಂಜೆಯ ವೇಳೆಗೆ ಅದು ಮೊಳೆತು ಪೈರಾಗುವುದೇ? ಎಲ್ಲಕ್ಕೂ ಸಮಯದ ಒಂದು ನಿಯಮವುಂಟು. ಅಡುಗೆ ಮಾಡುವಾಗ ಇಟ್ಟ ವಸ್ತುಗಳು ಕಾದು, ಬೆಂದು ಪಕ್ವವಾಗಲು ಒಂದು ಸಮಯದ ಮಿತಿ ಇದೆ ಅಲ್ಲವೇ? ಆತುರ ಪಟ್ಟರೆ ಅಡುಗೆ ಪಕ್ವವಾಗುವುದೇ ಹಾಗಾಗಿ ಜಗತ್ತಿನಲ್ಲಿ ನಾವು ಪಕ್ವವಾಗಬೇಕಾದರೆ ತಾಳ್ಮೆ ಬಹಳ ಮುಖ್ಯ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 782,
    english:
      "Fortunate are those people who possess these: ability to finish that day's task on the same days, satisfaction with whatever they have (or get), a mind that neither grieves nor rejoices come what may, friends of the entire world, their sight set on the universal truth.  - Mankutimma",
    kannada:
      "ಅಂದಿಗಂದಿನ ಕೆಲಸ, ಸಂದನಿತರಲಿ ತೃಪ್ತಿ ।\nಕುಂದದುಬ್ಬದ ಮನಸು ಬಂದುದೇನಿರಲಿ ॥\nಬಂಧು ಮತಿ ಲೋಕದಲಿ, ಮುನ್ ದೃಷ್ಟಿ  ಪರಮದಲಿ ।\nಹೊಂದಿರಲಿವದು ಪುಣ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೨ ॥",
    kannada_explanation:
      "ಅಂದಿಗೆ ಅಂದಿನ ಕೆಲಸ, ಬಂದದ್ದರಲ್ಲಿ ಸಂತೃಪ್ತಿ. ಏನೇ ಸಿಕ್ಕರೂ, ಕಡಿಮೆ ಸಿಕ್ಕರೆ ಕೊರಗದೆ, ಸಿಕ್ಕರೆ ಗರ್ವಪಡದೆ, ಜಗತ್ತಿನ ಎಲ್ಲರೂ ನನ್ನ ಬಂಧುಗಳೇ ಎನ್ನುವಭಾವದಿಂದ, ಜಗತ್ತಿನ ಮೇಲೆ ಅಲ್ಲದೆ ಪರತತ್ವದ ದೃಷ್ಟಿ ಇತ್ತು ಪ್ರಯತ್ನ ಯಾರಿಗೆ ಮಾಡಲಾಗುತ್ತದೆಯೋ, ಅವರೇ ಪುಣ್ಯವಂತರು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 783,
    english:
      "This is a wise advice to you: Be prepared for everything. Your karma will come back to you in full force - good or bad. You cannot control it. You will pray God for relief. But He may not listen. On the other hand, miracles can happen. It's not unheard of. There is no limit for magnanimity. Be prepared for everything. - Mankutimma",
    kannada:
      "ಬುದ್ಧಿಮಾತಿದು ನಿನಗೆ; ಸಿದ್ಧನಿರು ಸಕಲಕ್ಕಂ ।\nಎದ್ದು ಕುಣಿಯಲಿ ಕರ್ಮ; ದೈವ ನಿದ್ರಿಸಲಿ ॥\nಅದ್ಭುತಗಳರಿದಲ್ಲ; ಭವ್ಯಕ್ಕೆ ಹದ್ದಿಲ್ಲ ।\nಸಿದ್ಧನಾಗೆಲ್ಲಕಂ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೩ ॥",
    kannada_explanation:
      "ನೀ ಮಾಡಿದ ಕರ್ಮಾನುಸಾರ ನಿನ್ನ ಜೀವನ ಎಷ್ಟೇ ಏರುಪೇರಾಗಲಿ ಅಥವಾ ದೈವದ ಸಹಾಯ ನಿನಗೆ ಇಲ್ಲದಿರಲಿ. ನಿನಗೆ ಇದು ಬುದ್ಧಿಮಾತು, ಕೇಳಿಕೋ ಎಲ್ಲಕ್ಕೂ ಸಿದ್ಧನಿರು. ಜಗತ್ತಿನಲ್ಲಿ ಪವಾಡಗಳು ಮತ್ತು ಅದ್ಭುತಗಳು ಅಪರೂಪವಲ್ಲ ಮತ್ತು ಪರಮಾತ್ಮನ ಶಕ್ತಿಗೆ ಮಿತಿಯೇ ಇಲ್ಲ, ಹಾಗಾಗಿ ನೀನು ಎಲ್ಲದಕ್ಕೂ ಸಿದ್ಧನಾಗಿರು ಎಂದು ಧೈರ್ಯದಿಂದ ಬದುಕಬೇಕಾದ ಮನಸ್ತತ್ವವನ್ನು ಹೇಗೆ ರೂಢಿಸಿಕೊಳ್ಳಬೇಕೆಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 784,
    english:
      "Anything may happen. Be prepared for that. Sun may go cold and Moon may get hotter. Earth may melt and world may go empty. You face it with courage and silently be prepared for it. - Mankutimma",
    kannada:
      "ಏನಾದೊಡೆಯುಮಪ್ಪುದುಂಟು, ಸಿದ್ಧನಿರದಕೆ ।\nಭಾನು ತಣುವಾದಾನು; ಸೋಮ ಸುಟ್ಟಾನು ॥\nಕ್ಷೋಣಿಯೇ ಕರಗೀತು; ಜಗ ಶೂನ್ಯವಾದೀತು ।\nಮೌನದಲಿ ಸಿದ್ಧನಿರು - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೪ ॥",
    kannada_explanation:
      "ದಗದಗಿಸುವ ಸೂರ್ಯನೇ ತಣ್ಣಗಾಗಬಹುದು, ಶೀತಲ ಚಂದ್ರ ಬೆಂಕಿಯಾಗಿ ಸುಡಬಹುದು. ಭೂಮಿಯೇ ಕರಗಿಹೋಗಬಹುದು. ಜಗತ್ತಿನಲ್ಲಿ ಏನೂ ಇಲ್ಲದೆ ಸಂಪೂರ್ಣ ಶೂನ್ಯವಾಗಬಹುದು. ಇದಾವುದಕ್ಕೂ ವಿಚಲಿತನಾಗದೆ, ಮೌನದಿಂದ ಎಲ್ಲವನ್ನೂ ಎದುರಿಸಲಿಕ್ಕೆ ಸಿದ್ಧನಾಗಿರು, ಎಂದು ಬದುಕಿನಲ್ಲಿ ನಿರ್ಭಯವಾದ ಜೀವನಕ್ಕೆ ಒಂದು ಕಿವಿಮಾತನ್ನು ನಮಗೆ ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 785,
    english:
      "It seems as though the anxiety in our minds will never end. But one day, it will go away on its own. Just like a break in the clouds converts a dull cloudy moment into a bright sunny day. That happiness is the real happiness. - Mankutimma",
    kannada:
      "ಕುಂದದೆಂದಿಗುಮೆನ್ನಿಸುವ ಮನದ ಕಾತರತೆ ।\nಯೆಂದೊ ತಾನೆ ಬಳಲಿ ತಣ್ಣಗಾಗುವುದು ॥\nಮಂದದಾ ಕಾರ್ಮೋಡ ಬಿರಿದು ರವಿ ಬೆಳಗುವನು ।\nಅಂದಿನಾ ಸುಖವೆ ಸುಖ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೫ ॥",
    kannada_explanation:
      "ದಪ್ಪ ಮತ್ತು ದಟ್ಟವಾದ ಕಾರ್ಮೋಡ, ಮಳೆ ಸುರಿದೋ ಅಥವಾ ಗಾಳಿಯ ಆರ್ಭಟಕ್ಕೋ ಚದುರಿಹೋಗಿ, ಸೂರ್ಯನ ಬೆಳಕು ಮತ್ತೆ ಬೆಳಗುವಂತೆ, ಎಂದಿಗೂ ಕಡಿಮೆಯಾಗುವುದೇ ಇಲ್ಲವೇನೋ ಎನ್ನುವ ಮನಸ್ಸಿನ ಕಳವಳ, ಕಾತರತೆ, ತಾನೇ ತಾನಾಗಿ ಕಡಿಮೆಯಾಗಿ ಮನಸ್ಸಿಗೆ ನಿರಾಳವಾದಾಗ ನಮಗಾಗುವ ಸುಖವೇ, ನಿಜವಾದ ಸುಖ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 786,
    english:
      "It is pleasant to know that everything has to end. Even the misery that is created by our senses (longing for pleasure). But it has an end - by your order, by its defeat or by sheer frustration. Let the senses attain peace. - Mankutimma",
    kannada:
      "ಅನ್ತವೆಲ್ಲಕುಮಿರುವುದಿರಲಿ; ವಿಷಯೇಂದ್ರಿಯದ ।\nಸಂತಾಪವುಂ ಮುಗಿವುದೆಂಬುದಲ ಪುಣ್ಯ? ॥\nಎಂತೊ, ನಿನ್ನಾಜ್ಞೆಯಿನೊ, ತಾಂ ಸೋತೋ, ಬೇಸತ್ತೊ ।\nಶಾಂತಿವಡೆಯಲಿ ಕರಣ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೬ ॥",
    kannada_explanation:
      "ಎಲ್ಲಕ್ಕೂ ಒಂದು ಅಂತ್ಯವಿದೆ ಎನ್ನುವ ವಿಚಾರ ಒತ್ತಟ್ಟಿಗಿರಲಿ. ವಿಷಯಾಸಕ್ತಿಯಿಂದ ಇಂದ್ರಿಯಗಳು ಪಡುವ ದುಃಖಕ್ಕೆ ಒಂದು ಅಂತ್ಯವುಂಟು ಎನ್ನುವುದೇ ಪುಣ್ಯ. ಆ ಅಂತ್ಯ ಹೇಗಾದರೂ ಆಗಬಹುದು, ನೀನೇ ಇಂದ್ರಿಯ ನಿಗ್ರಹ ಮಾಡಬಹುದು ಅಥವಾ ಅವುಗಳೇ ಸೋತು ಹೋಗಬಹುದು ಅಥವಾ ಅನುಭವಿಸಿದ್ದು ಸಾಕಾಗಿ ಬೇಸತ್ತುಹೋಗಬಹುದು. ಹೇಗಾದರಾಗಲಿ ಇಂದ್ರಿಯಗಳ ಪ್ರಚೋದನೆಯಿಂದ ನಿರಂತರ ಕ್ರಿಯೆಯಲ್ಲಿ ಮಗ್ನರಾದ ಅಂಗಾಂಗಗಳು ಶಾಂತವಾದರೆ ಸಾಕು ಎಂದು ಬದುಕಿನಲ್ಲಿ ನಾವು ಪಡೆಯಬೇಕಾದ ನಿಜವಾದ ಶಾಂತಿಯ ಸ್ವರೂಪವನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 787,
    english:
      "Chicken pox will rattle a baby bad and leave. Just like that love and other desires will rattle grownup by raking up feelings. Later they subside. When the anxiety ends, it is happiness. - Mankutimma",
    kannada:
      "ಶೀತಾಳೆ ಸಿಡುಬು ಶಿಶುಗಳ ಕುಲುಕಿ ತೆರಳುವುದು ।\nಪ್ರೀತಿಕಾಮನೆಗಳಷ್ಟಿಷ್ಟು ಬೆಳೆದವರ ॥\nಯಾತನೆಗಳಿಂ ಕುದಿಸಿ ಕುಲುಕಿ ಬಳಿಕಾರುವುವು ।\nಕಾತರತೆ ಕಳೆಯೆ ಸುಖ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೭ ॥",
    kannada_explanation:
      "ಮಕ್ಕಳಿಗೆ ಸಿಡುಬು ಶೀತಾಳೆಗಳಂತಹ ಖಾಯಿಲೆಗಳು ಬಂದು, ಅವರನ್ನು ಒಂದು ಬಾರಿ ನಡುಗಿಸಿ ಮತ್ತೆ ಬಾರದಂತೆ ಹೊರಟು ಹೋಗುತ್ತವೆ. ದೊಡ್ಡವರನ್ನು ಪ್ರೀತಿ, ಆಸೆಗಳಂತಹ ಭಾವಗಳು ಒಂದು ರೋಗದಂತೆ ಹಿಡಿದು ಯಾತನೆಗೊಳಪಡಿಸುತ್ತದೆ. ಕೆಲಕಾಲ ಅಲುಗಾಡಿಸಿ ಮತ್ತೆ ಆರಿಹೋಗುತ್ತವೆ. ಹಾಗಿ ಆರಿ ನಮ್ಮಲ್ಲಿನ ಕಾತರತೆ ಕಡಿಮೆಯಾದರೆ ಅದೇ ಸುಖ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 788,
    english:
      "What can be said about the misery when fever batters the body? But when the misery subsides, we feel like in a new body. Just like that by whatever means, when the senses come back into our control, it feels like a new birth to the soul. - Mankutimma",
    kannada:
      "ಜ್ವರ ಬಂದು ತನು ಬೆಂದ ಯಾತನೆಯ ಮಾತೇನು? ।\nಉರಿಬೇಗೆಯಿಳಿಯೆ ಹೊಸ ಹೊಸಬನಾ ನರನು ॥\nಕರಣತಪನೆಗಳಿಳಿಯೆ, ಕಾರಣವದೇನಿರಲಿ ।\nಮರುಜನ್ಮವಾತ್ಮಂಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೮ ॥",
    kannada_explanation:
      "ಜ್ವರ ಬಂದು ತನು ಎಂದರೆ ದೇಹ ಆ ಜ್ವರದ ತಾಪದಿಂದ ಬೆಂದು ಯಾತನೆಯನ್ನು ಅನುಭವಿಸಿದ ನಂತರ, ಆ ಜ್ವರ, ಕಡಿಮೆಯಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುವಾಗ ಒಂದು ರೀತಿಯ ಹೊಸತನದ, ಅನುಭವವಾಗುತ್ತದೆಯಲ್ಲವೇ, ಅದೇ ರೀತಿ ವಾಂಛೆಗಳಿಂದ ಉಂಟಾದ ಬೇಗೆಯೂ ಅಡಗಿ ಅಂದ್ರಿಯಗಳು ಶಾಂತವಾದರೆ ಮನುಷ್ಯನಿಗೆ ಅದು ಮರುಜನ್ಮದ ರೀತಿ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ. ",
  },
  {
    number: 789,
    english:
      "Be like a blade of grass at the bottom of a mountain. It leads a peaceful life by itself, offers solace to people who foot hurt while climbing down, it survives winds which even big trees can not. Be like a fragrant flower to your own household. Always spread smiles and happiness. Be like a stone when providence showers rains of trouble on you. Be like jaggery and sugar to the weak and people in need of your help. Be one among everybody. - Mankutimma",
    kannada:
      "ಹುಲ್ಲಾಗು ಬೆಟ್ಟದಡಿ, ಮನೆಗೆ ಮಲ್ಲಿಗೆಯಾಗು ।\nಕಲ್ಲಾಗು ಕಷ್ಟಗಳ ಮಳೆಯ ವಿಧಿ ಸುರಿಯೆ ॥\nಬೆಲ್ಲ ಸಕ್ಕರೆಯಾಗು ದೀನದುರ್ಬಲರಿಂಗೆ ।\nಎಲ್ಲರೊಳಗೊಂದಾಗು - ಮಂಕುತಿಮ್ಮ ॥ ೭೮೯ ॥",
    kannada_explanation:
      "ನೀನು, ಬೆಟ್ಟದಡಿ ದನಕರುಗಳಿಗೆ ಮೇವಾಗುವಂತಹ ಹುಲ್ಲಾಗು, ನಿನ್ನ ಮನೆಗೆ ಸುವಾಸನಾಭರಿತವಾದ ಮಲ್ಲಿಗೆಯ ಹೂವಂತಾಗು, ವಿಧಿ ನಿನ್ನ ಬದುಕಿನಲ್ಲಿ ಕಷ್ಟಗಳನ್ನು ಮಳೆಯಂತೆ ಸುರಿದರೆ, ನೀ ಕಲ್ಲಂತೆ ಗಟ್ಟಿಯಾಗಿ ಅವುಗಳನ್ನು ಎದುರಿಸು , ದೀನರಿಗೆ ದುರ್ಬಲರಿಗೆ ನೀನು ಬೆಲ್ಲದಂತಾಗು, ಎಲ್ಲರೊಳು ಒಂದಾಗು ಎಂದು ಸ್ವಾರಸ್ಯಕರ ಬದುಕಿನ ಗುಟ್ಟನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 790,
    english:
      "Do something. Any work that you can find is good enough. Never belittle yourself (by comparing yourself to a blade of grass). In this world, there is no work that is inferior. There is a place for every job. - Mankutimma",
    kannada:
      "ಏನಾನುಮಂ ಮಾಡು ಕೈಗೆ ದೊರೆತುಜ್ಜುಗವ ।\nನಾನೇನು ಹುಲ್ಲುಕಡ್ಡಿಯೆಂಬ ನುಡಿ ಬೇಡ ॥\nಹೀನಮಾವುದುಮಿಲ್ಲ ಜಗದ ಗುಡಿಯೂಳಿಗದಿ ।\nತಾಣ ನಿನಗಿಹುದಲ್ಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೦ ॥",
    kannada_explanation:
      "ಕೈಗೆ ಸಿಕ್ಕ ಯಾವುದಾದರೂ ಉದ್ಯೋಗವನ್ನು ಮಾಡು. ‘ನಾನು ಹುಲುಮಾನವ, ನನ್ನ ಕೈಲೇನಾಗುತ್ತದೆ’ ಎನ್ನುವ ಮಾತನ್ನು ಆಡಬೇಡ. ಈ ಜಗತ್ತೆಂಬ ದೇವಾಲಯದಲ್ಲಿ ಯಾವ ಕೆಲಸವೂ ಹೀನವಾದ ಕೆಲಸವಿಲ್ಲ. ನಿನಗೂ ಏನಾದರೂ ಕೈಂಕರ್ಯ, ಕೆಲಸ ಮಾಡಲು ಅವಕಾಶವಿದೆ ಎಂದು ಹೇಳುತ್ತಾ ಜಗತ್ತಿನಲ್ಲಿ ಸೃಷ್ಟಿಯಾದ ಪ್ರತೀ ವಸ್ತುವಿಗೂ ಒಂದು ಪ್ರಯೋಜವಿದೆ ಎಂಬ ಸತ್ಯವನ್ನು ಪ್ರಕಾಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 791,
    english:
      "This world is a temple that gets destroyed and built again every day. All the people are servants at that temple. A house, a state, a family or a religion - everything is insignificant in comparison. Everything is just a part of the same world which undergoes change every day. - Mankutimma",
    kannada:
      "ದಿನದಿನವು ಕುಸಿದು ಕಟ್ಟಿಸಿಕೊಳುವ ಗುಡಿ ವಿಶ್ವ ।\nಜನರೆಲ್ಲರಾಗುಡಿಯ ಕೆಲಸದಾಳುಗಳು ॥\nಮನೆಯೇನು? ನಾಡೇನು? ಕುಲವೇನು? ಮಠವೇನು? ।\nಎಣಿಸೆಲ್ಲವದೆಯೆಂದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೧ ॥",
    kannada_explanation:
      "ಪ್ರತಿನಿತ್ಯವೂ ಕುಸಿದು ಬಿದ್ದು ಮತ್ತೆ ಮತ್ತೆ ಕಟ್ಟಲ್ಪಡುವುದೇ ಈ ಜಗತ್ತೆಂಬ ದೇವಾಲಯ. ಕೆಡವುವ ಮತ್ತು ಕಟ್ಟುವ ಕೆಲಸದಲ್ಲಿ ಎಲ್ಲಾ ಜನರೂ ಕೆಲಸದಾಳುಗಳು. ಮನೆ, ನಾಡು, ಕುಲ, ಮಠ ಹೀಗೆ ಎಲ್ಲದರಲ್ಲೂ ಮತ್ತು ಎಲ್ಲವೂ ಆ ಪರಮಾತ್ಮನೆಂದು ತಿಳಿದುಕೋ ಎಂದು, ಗುಂಡಪ್ಪನವರು ಆದೇಶಿಸಿದ್ದಾರೆ ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 792,
    english:
      "You must ask God this - Don't provoke me with desires. Don't tie me up with attachments. Don't present me tough dilemmas to choose from. Don't remind me of hurting memories. - Mankutimma",
    kannada:
      "ಆಶೆಗಳ ಕೆಣಕದಿರು, ಪಾಶಗಳ ಬಿಗಿಯದಿರು ।\nಕ್ಲೇಶದ ಪರೀಕ್ಷೆಗಳಿಗೆನ್ನ ಕರೆಯದಿರು ॥\nಬೇಸರದ ಪಾತಕಸ್ಮೃತಿಯ ಚುಚ್ಚದಿರ್: ಎನ್ನು- ।\nತೀಶನನು ಬೇಡುತಿರೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೨ ॥",
    kannada_explanation:
      '" ಹೇ ಪರಮಾತ್ಮ, ನನ್ನಲ್ಲಿ ಆಸೆಗಳು ಉಂಟಾಗದಂತೆ ಮಾಡು , ಜೀವನದ ಬಂಧಗಳಿಂದ ಬಿಗಿಯಲ್ಪಡದಂತೆ ಮಾಡು. ಬದುಕಿನ ಕಷ್ಟತರವಾದ ಪರೀಕ್ಷೆಗಳಿಗೆನ್ನ ಗುರಿಮಾಡದಿರು. ಗತಿಸಿಹೋದ ಕಾಲದಲ್ಲಿ ನಾನು ಮಾಡಿದ ಪಾಪಗಳ ನೆನಪು ನನಗೆ ಇಲ್ಲದಂತಾಗುವಂತೆ ಕರುಣಿಸು" ಎಂದು ಸದಾಕಾಲ ಆ ಜಗದ್ರಕ್ಷಕನನ್ನು ಬೇಡುತ್ತಿರು ಎಂದು ತಮಗೆ ತಾವೇ ಹೇಳಿಕೊಳ್ಳುತ್ತಾ, ನಮಗೂ ಯಾವ ಮಾರ್ಗ ಅನುಸರಣೀಯ ಎಂದು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 793,
    english:
      "One part of the creation is me. All other parts of the creation is another part. There is a universal truth where all difference between self and the rest is lost. Having mind set on that truth but living happily in this dual world is a wise drama to act. - Mankutimma",
    kannada:
      "ನಾನೆಂಬುದೊಂದಂಶವಿತರ ಜಗವೊಂದಂಶ ।\nನಾನು ನೀನುಗಳಳಿದ ಸರ್ವೈಕ್ಯವೊಂದು ॥\nಧ್ಯಾನಿಸುತ್ತೈಕ್ಯವನು ಪಾಲಿಸುವುದುಭಯವನು ।\nಜಾಣಿನಾ ನಾಟಕವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೩ ॥",
    kannada_explanation:
      "ನಾನು ಎಂಬುದು ಒಂದು ಅಂಶ. ನಾವಿರುವ, ಈ ಜಗತ್ತು ಎಂಬುದು ಇನ್ನೊಂದು ಅಂಶ. ನಾನು ನೀನು ಎಂಬ ಬೇಧವು ಇಲ್ಲವಾದರೆ ಎಲ್ಲವೂ ಐಕ್ಯವಾಗಿ ಒಂದಾಗುತ್ತದೆ. ಭೇಧಗಳಿರುವ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಇದ್ದು ಸಾಮಾನ್ಯವಾಗಿ ಜೀವಿಸುತ್ತಾ ಅಂತಹ ‘ಸರ್ವೈಕ್ಯ’ವನ್ನು ಧ್ಯಾನಿಸುವುದು, ಜಾಣತನದ ನಾಟಕ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 794,
    english:
      "Let the mind expand with hundreds and hundreds of experiences. Let the light from these experiences expand the seas of life. Once the attachment towards body is lost, life dances with the universal cosmic spirit. - Mankutimma",
    kannada:
      "ಮನಸು ಬೆಳೆಯಲಿ ಭುಜಿಸಿ ನೂರು ನೂರನುಭವವ ।\nಹೊನಲು ನೂರೀ ಬಾಳ ಕಡಲನುಬ್ಬಿಸಲಿ ॥\nತನುಬಂಧ ಕಳಚಿ, ಜೀವವಖಂಡಚೇತನದ ।\nಕುಣಿತದಲಿ ಕೂಡಿರಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೪ ॥",
    kannada_explanation:
      "ನೂರಾರು ನದಿಗಳು ಬಂದು ಸೇರಿ ಕಡಲು ಉಬ್ಬುವಂತೆ, ಬಾಳಿನಲ್ಲಿ ಮನಸ್ಸಿನ ಕಡಲೂ ಸಹ ನೂರಾರು ಅನುಭವಗಳ ಮಹಾಪೂರದಿಂದ ಬೆಳೆಯಬೇಕು, ವಿಕಾಸಗೊಳ್ಳಬೇಕು. ದೇಹದ ವ್ಯಾಮೋಹವನ್ನು ತೊರೆದು ಪರಬ್ರಹ್ಮವಸ್ತುವಿನ ತಾಂಡವದೊಡಗೂಡಿ, ನಿನ್ನ ಆತ್ಮವೂ ಸಂಭ್ರಮಿಸಲಿ ಎಂದು ಒಂದು ಅದ್ಭುತವಿಚಾರವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 795,
    english:
      "You must feel that you are one with the world. See oneself in a seed that this sprouting to become a sapling, in the rising sun, in a growing child, in the looks of friends. You must feel one with anything that evokes emotion. - Mankutimma",
    kannada:
      "ಮೊಳೆವ ಸಸಿಯೊಳು ನಾನು, ತೊಳಗುವಿನನೊಳು ನಾನು  ।\nಬೆಳೆವ ಶಿಶುವೊಳು ನಾನು, ಕೆಳೆನೋಟ ನಾನು ॥\nಕಳಕಳಿಸುವೆಲ್ಲಮುಂ ನಾನೆಂದು ಭಾವಿಸುತೆ ।\nಒಳಗೂಡು ವಿಶ್ವದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೫ ॥",
    kannada_explanation:
      "ಮೊಳೆಯುವ ಸಸಿಯಲ್ಲಿ ನಾನು, ಬೆಳಗುವ ಪ್ರಭೆಯಲ್ಲಿ ನಾನು ಬೆಳೆವ ಶಿಶುವಿನಲ್ಲಿ ನಾನು, ಸ್ನೇಹಭಾವದಲ್ಲಿ ನಾನು, ಜಗತ್ತಿನ ಎಲ್ಲ ಜನರ ಕಳಕಳಿಯಲ್ಲಿ ನಾನು, ನಾನೆಂಬ ಭಾವದಿಂದ ಜಗತ್ತಿನಲ್ಲಿ ನೀನು ಒಂದಾಗು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 796,
    english:
      "If the right seed is sown into a receptive ground, a sapling sprouts. But if you fry it, it will not sprout but pops open and becomes a tasty snack. Actions performed by a person with the knowledge of universal truth will not result in cycle of actions and reactions. It is a seed that will not be sown again. - Mankutimma",
    kannada:
      "ಸರಿ ಹದದ ಕಾಳು ತಿರೆಯಪ್ಪಿದೊಡೆ ಮೊಳೆಯುವುದು ।\nಹುರಿದೊಡದು ಮೊಳೆಯದರಳಹುದು ಬಾಯ್ಸವಿಗೆ ॥\nಪರಮತತ್ತ್ವಜ್ಞಾನಿಯೊಡರಿಸುವ ಕರುಮಗಳು ।\nಮರುಬೆಳೆಗೆ ಬಿತ್ತಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೬ ॥",
    kannada_explanation:
      "ಸರಿಯಾಗಿ ಹದವಾದ ಕಾಳು ಭೂಮಿಯ ಸಂಸರ್ಗದಿಂದ ಸಸಿಯಾಗಿ ಮೊಳೆಯುವುದು. ಆದರೆ ಅದೇ ಕಾಳನ್ನು ಹುರಿದುಬಿಟ್ಟರೆ ಅದು ಅರಳಾಗಿ ಬಾಯ ರುಚಿಗೆ ದಕ್ಕುತ್ತದೆ. ಪರಮತತ್ವವನ್ನು ಪ್ರತಿಪಾದಿಸುವ ಮತ್ತು ಅನುಸರಿಸುವ ತತ್ವಜ್ಞಾನಿಯ ಕರ್ಮಗಳು ಮುಕ್ತಿಗೆ ಹೊರತು ಮರು ಜನ್ಮಕ್ಕಲ್ಲ ಎಂದು ಜಗದ ಅಂಟು ಮತ್ತು ಅಂಟಿಲ್ಲದ ಸ್ಥಿತಿಗಳ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ. ",
  },
  {
    number: 797,
    english:
      "A burnt rope just looks like a rope. It does not have the strenght of the rope. The world as we see it is also like that. It is only strong only when one has the knowledge of the universal truth.  - Mankutimma",
    kannada:
      "ಸುಟ್ಟ ಹಗ್ಗದ ಬೂದಿ ರೂಪಮಾತ್ರದಿ ಹಗ್ಗ ।\nಗಟ್ಟಿ ಜಗವಂತು ತತ್ತ್ವಜ್ಞಾನ ಸೋಕೆ ॥\nತೊಟ್ಟಿಹುದು ಲೋಕರೂಪವ, ತಾತ್ತ್ವಿಕನ ವೃತ್ತಿ ।\nಕಟ್ಟದವನಾತ್ಮವನು - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೭ ॥",
    kannada_explanation:
      "ಒಂದು ಹಗ್ಗವನ್ನು ಸುಟ್ಟ ನಂತರ ಅದರ ಬೂದಿ ಹಗ್ಗದ ಆಕಾರದಲ್ಲಿ ಇದ್ದರೂ ಹಗ್ಗವಾಗಿರದೆ ಇರುವಂತೆ, ತತ್ವಜ್ಞಾನದ ಬೆಂಕಿಯ ಸ್ಪರ್ಶವಾದ ತತ್ವಶಾಸ್ತ್ರಜ್ಞನು ಲೌಕಿಕನಂತೆ ಕಂಡರೂ ಈ ಜಗತ್ತು ಅವನನ್ನು ತನ್ನತ್ತ ಸೆಳೆಯುವುದರಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದು ತತ್ವಜ್ಞಾನಿಯ ಪರಿಯನ್ನು ಅರುಹಿದ್ದಾರೆ ನಮಗೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 798,
    english:
      "Does a pessimist have anything to ask of the Gods? Does an ascetic ever afraid of any loss? For a person who has understood it all (universal truth), is there any difference between near or far? He is the master of his own path. - Mankutimma",
    kannada:
      "ನೈರಾಶ್ಯನಿರತಂಗೆ ದೇವತೆಗಳಿಂದೇನು? ।\nವೈರಾಗ್ಯಪಥಿಕಂಗೆ ನಷ್ಟಭಯವೇನು? ॥\nಪಾರಂಗತಂಗಂತರಾಳ ದೂರಗಳೇನು? ।\nಸ್ವೈರಪಥವಾತನದು - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೮ ॥",
    kannada_explanation:
      "ನಿರಾಶೆಯಿಂದ ಕೂಡಿದವನಿಗೆ ದೇವತೆಗಳಿಂದ ಏನಾಗಬೇಕು? ವೈರಾಗ್ಯದ ಹಾದಿಯಲ್ಲಿ ನಡೆಯುವವನಿಗೆ ನಷ್ಟದ ಭಯವೆಲ್ಲಿರುವುದು? ಅಂತರಂಗದಲ್ಲಿ ಪರತತ್ವವನ್ನು ಅನುಸಂಧಾನ ಮಾಡುವವಗೆ, ಯಾವ ದೂರವೂ ದೊಡ್ಡದಲ್ಲ. ಈ ಮೂರೂ ರೀತಿಯ ಜನರದು ‘ಸ್ವ-ಇಚ್ಚೆ’ ಯ ಹಾದಿ ಎಂದು ವಿಮರ್ಶೆಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 799,
    english:
      "Gods will create fear and desire in us. This is to prevent the coward and pitiful people astray from God's path. If a person is ready to take anything that fate throws at him - what should he be afraid of?  - Mankutimma",
    kannada:
      "ಘೋರವನು ಮೋಹವನು ದೇವತೆಗಳಾಗಿಪರು ।\nಭೀರು ಯಾಚಕರಾಸ್ಥೆ ತಪ್ಪದಿರಲೆಂದು ॥\nಆರಿಂದಲೇಂ ಭೀತಿ, ಏಂ ಬಂದೊಡದ ಕೊಳುವ ।\nಪರಮಾರ್ಥಿಕನಿಗೆಲೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೭೯೯ ॥",
    kannada_explanation:
      "ಭಯಪಡುವ ಮತ್ತು ಯಾಚಕರಾದ ಜನರು ತಮ್ಮಲ್ಲಿ ಆಸ್ಥೆ ಮತ್ತು ಶ್ರದ್ಧೆಗಳನ್ನು ಎಲ್ಲಿ ಕಳೆದುಕೊಂಡುಬಿಡುವರೋ ಎಂದು ದೇವತೆಗಳು, ಭುವಿಯ ಮನುಜರಿಗೆ ಮೋಹವನ್ನು ಮತ್ತು ಆ ಮೋಹದಿಂದುಂಟಾಗುವ ಘೋರವಾದ ಕಷ್ಟಗಳನ್ನುನೀಡುತ್ತಾರೆ. ಆದರೆ ಏನೇ ಬಂದರೂ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ, ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ ಮತ್ತು ತಡೆದುಕೊಳ್ಳುತ್ತೇನೆ ಎನ್ನುವ ಧೋರಣೆಯನ್ನು ಪಾಲಿಸುವ ಪಾರಮಾರ್ಥವನ್ನು ನಂಬಿಕೊಂಡವನಿಗೆ ಯಾರಿಂದಲೂ ಭೀತಿಯಿರುವುದಿಲ್ಲ ಎಂದು ವಿಮರ್ಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 800,
    english:
      "It does not matter whether the fruit is ripe or not for a person whose stomach is filled. For a person who has realized the complete truth, there is no sin or good karma. When viewed from a high position (mountaintop), mounds and holes in the groubd below cannot be seen. There can not be anything missing (or crooked) in the complete.  - Mankutimma",
    kannada:
      "ಹಣ್ಣೇನು ಕಾಯೇನು ಹೊಟ್ಟೆ ತುಂಬಿರುವಂಗೆ? ।\nಪುಣ್ಯವೇಂ ಪಾಪವೇಂ ಪೂರ್ಣದರ್ಶನಿಗೆ? ॥\nಉನ್ನತ ಶಿಖರದಿಂ ತಿಟ್ಟೇನು ಕುಳಿಯೇನು? ।\nಪೂರ್ಣತೆಗೆ ಸೊಟ್ಟೇನು? - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೦ ॥",
    kannada_explanation:
      "ಹೊಟ್ಟೆ ತುಂಬಿ, ಬೇರೇನೂ ತಿನ್ನಲು ಇಷ್ಟಪಡದವನಿಗೆ ಹಣ್ಣಾದರೇನು? ಕಾಯಾದರೇನು? ಪರತತ್ವದ ಪೂರ್ಣ ದರ್ಶನವಾದವನಿಗೆ ಪಾಪವೇನು? ಪುಣ್ಯವೇನು? ಎತ್ತರದ ಬೆಟ್ಟದಲ್ಲಿ ನಿಂತು ನೋಡುವವನಿಗೆ ಕೆಳಗಿನ ಭೂಭಾಗದಲ್ಲಿರುವ ಹಳ್ಳ ದಿಣ್ಣೆಗಳು ಸಮನಾಗಿ ಕಾಣುವಂತೆ ಪೂರ್ಣತೆಯನ್ನು ಸಾಧಿಸಿದವನಿಗೆ ಯಾವುದೂ ಸೊಟ್ಟಗೆ ಕಾಣುವುದಿಲ್ಲ ಎಂದು ಹೇಳುತ್ತಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 801,
    english:
      '"If one climbs up a hill and looks far, he can not make out the details of the topology below - walls, signs on the wall, gardens, holes. Likewise, we all should reach a higher state of being where the petty differences in people and other life don\'t matter any more. Let your mind expand to such a wide inclusive consciousness." - Mankutimma',
    kannada:
      "ಕೋಡುಗಲ್ಲನು ಹತ್ತಿ ದೂರವನು ನೋಳ್ಪಂಗೆ ।\nಗೋಡೆಗೊತ್ತುಗಳೇನು? ಮೇಡು ಕುಳಿಯೇನು? ॥\nನೋಡು ನೀನುನ್ನತದಿ ಜನಜೀವಿತವ ।\nಮಾಡುದಾರದ ಮನವ - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೧ ॥",
    kannada_explanation:
      "ಎತ್ತರದ ಕೋಡುಗಲ್ಲನ್ನು ಹತ್ತಿ, ಅಲ್ಲಿಂದ ಕೆಳಗೆ ನೋಡುವವನಿಗೆ, ಕೆಳಗೆ ಕಟ್ಟಿರುವ ಗೋಡೆಗಳಾಗಲೀ, ಗೂಟಗಳಾಗಲೀ, ಗುಡ್ದಗಳಾಗಲೀ, ಹಳ್ಳಗಳಾಗಲೀ ಹೇಗೆ ಬಿಡಿಬಿಡಿಯಾಗಿ ಕಾಣುವುದಿಲ್ಲವೋ, ಹಾಗೆಯೇ ನೀನು ಅರಿವಿನ ಉನ್ನತದಿ ನಿಂತು ಉದಾರವಾದ ಮನಸ್ಸಿನಿಂದ ಜನರ ಜೀವಿತವ ನೋಡು ಎಂದು ಆದೇಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 802,
    english:
      '"For a person who has already climbed to the upper rooms, there is no use of the stairs. If a person is already detached from everything, then his actions will not any implications (of sin or otherwise). Once a person has reached the supreme consciousness, petty discussions on morality stop bothering him. They are as important as discarded flowers (waste) after worship." - Mankutimma',
    kannada:
      "ಹರ್ಮ್ಯಾಗ್ರಕೇರಿ ಸೋಪಾನದಿನತೀತನಹೆ ।\nನಿರ್ಮಮತೆಗೇರಿ ಕರ್ಮಾತೀತನಪ್ಪೆ ॥\nಬ್ರಹ್ಮಪದದಿಂದ ಧರ್ಮಾಧರ್ಮಳ ನಿಯಮ ।\nನಿರ್ಮಾಲ್ಯವಾಗುವುದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೨ ॥",
    kannada_explanation:
      "ಉಪ್ಪರಿಗೆಯನ್ನು ಏರಿದಮೇಲೆ, ಅದನ್ನೇರಲು ಬಳಸಿದ ಮೆಟ್ಟಿಲುಗಳಿಗೆ ನೀನು ಅತೀತನಾಗುವೆ. ಮಮಕಾರವನ್ನು ತೊರೆದರೆ, ಕರ್ಮಕ್ಕೆ ಅತೀತನಾಗಿ ನಿಲ್ಲುವೆ. ಅದೇ ರೀತಿ ಬ್ರಹ್ಮಜ್ಞಾನದ ಉತ್ತುಂಗ ಸ್ಥಿತಿಗೆ ತಲುಪಿದ ನಂತರ ಧರ್ಮ ಮತ್ತು ಅಧರ್ಮದ ನಿಯಮಗಳಿಗೆಲ್ಲ ಅತೀತನಾಗುವೆ. ಹೀಗೆ ಮೇಲೇರಲು ಬಳಸಿದ, ಮೆಟ್ಟಿಲು, ಕರ್ಮಗಳು ಮತ್ತು ಧರ್ಮಾಧರ್ಮದ ನಿಯಮಗಳು, ಹಿಂದಿನ ದಿನ ದೇವರಿಗೆ ಅಲಂಕಾರಕ್ಕಾಗಿ ಇಡಲ್ಪಟ್ಟ ಹೂಗಳನ್ನು, ಮರುದಿನ ನೈರ್ಮಾಲ್ಯವೆಂದು ತೆಗೆದುಹಾಕುವಂತೆ, ಎಂದು ಒಂದು ಅದ್ಭುತವಿಚಾರವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 803,
    english:
      '"I am one among everybody. Everybody is one with me. I look at everything. I walk alongside everything. I laugh, I cry. I will be sweet to the world. I shall be a rock to myself. Only a person who can do this is completely free." - Mankutimma',
    kannada:
      "ಎಲ್ಲರೊಳು ತಾನು ತನ್ನೊಳಗೆಲ್ಲರಿರುವವೋ- ।\nಲೆಲ್ಲೆಲ್ಲಿಯುಂ ನೋಡಿ ನಡೆದು ನಗುತಳುತ ॥\nಬೆಲ್ಲ ಲೋಕಕ್ಕಾಗಿ ತನಗೆ ತಾಂ ಕಲ್ಲಾಗಿ ।\nಬಲ್ಲವನೆ ಮುಕ್ತನಲ - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೩ ॥",
    kannada_explanation:
      "ಎಲ್ಲರಲ್ಲಿ ತಾನು ಮತ್ತು ತನ್ನೊಳಗೆ ಎಲ್ಲರಿದ್ದಾರೆ ಎನ್ನುವಂತೆ ನಡೆದುಕೊಂಡು ಬದುಕಿನಲ್ಲಿ ನಗುತ, ಅಳುತ, ಲೋಕಕ್ಕೆ ಬೆಲ್ಲದಂತೆ ಇದ್ದರೂ ಒಳಗೆ ಕಲ್ಲಂತೆ ಇರಬಲ್ಲವನೇ ಮುಕ್ತ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 804,
    english:
      '"Is there a way you can classify things in this world as auspicious or otherwise? No. It always depends on perspective, context and highly subjective. They are inseparable. But there is one truth that goes beyond both auspicious and inauspicious. If you follow that, there will be no fear." - Mankutimma',
    kannada:
      "ಶುಭವಾವುದಶುಭವಾವುದು ಲೋಕದಲಿ ನೋಡೆ? ।\nವಿಭಜಿಸಲ್ಕಾಗದನ್ಯೋನ್ಯಸಂಬಂಧ ॥\nಉಭಯವನು ಮೀರ್ದ ಸಾಮ್ಯದ ನೀತಿಯೊಂದಿಹುದು ।\nಅಭಯಪಥವದು ನಿನಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೪ ॥",
    kannada_explanation:
      "ಹಾಗೆ ನೋಡಿದರೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಶುಭ ಮತ್ತು ಅಶುಭ ಎನ್ನುವುದಾವುದು? ಇವೆರಡರನಡುವೆ ಒಂದು ಅನ್ಯೋನ್ಯ ಸಂಬಂಧವಿದೆ ಮತ್ತು ಶುಭಾಶುಭಗಳನ್ನು ಮೀರಿದಂತಹ ಮತ್ತು ಇವೆರಡನ್ನೂ ಸಮನ್ವಯಗೊಳಿಸುವ ಒಂದು ನೀತಿಯಿದೆ. ಆ ನೀತಿಯ ಪಥವನ್ನು ತುಳಿದರೆ ಅಲ್ಲಿ ನಮಗೆ ಅಭಯವೇ ಸಿಗುತ್ತದೆ ಎಂದು ಲೋಕದ ಮತ್ತು ಲೋಕಾತೀತವಾದ ವಿಚಾರವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 805,
    english:
      '"There is only one emperor in creation. It is he who can think that the whole universe is himself. He will embrace the world with a clear conscience without any distortion. He brings good to everyone." - Mankutimma',
    kannada:
      "ಸಾರ್ವಭೌಮನು ಸೃಷ್ಟಿಯೊಳಗದೊರ್ವನೆ ಕಾಣೊ ।\nಸರ್ವವನು ತನ್ನಾತ್ಮವೆಂದು ಬದುಕುವನು ॥\nನಿರ್ವಿಕಾರಾಂತರಂಗದಿ ಜಗವ ಧರಿಸುವನು ।\nಸರ್ವಮಂಗಳನವನು - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೫ ॥",
    kannada_explanation:
      "ಯಾವುದೇ ರೀತಿಯ ಮನೋವಿಕಾರಗಳಿಲ್ಲದೆ, ಜಗತ್ತಿನಲ್ಲಿ ಸಂಚರಿಸುವ ಚೇತನವೇ ತನ್ನ ಆತ್ಮವೆಂದು, ಜಗತ್ತನ್ನು ಧಾರಣೆಮಾಡಿದವನು, ಸಕಲ ರೀತಿಯಲ್ಲೂ ಮಂಗಳಮಯನಾಗಿರುತ್ತಾನೆ ಮತ್ತು ಅವನೇ ಸಾರ್ವಭೌಮನು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 806,
    english:
      '"One who can help without feeling proud about it; an officer who does not throw his weight around; a benevolent person who can see the world as-is without any distortion; a person who respects and supports all dharma (religion); a person whose moves around searching for salvation. - all these people can become teachers of the world." - Mankutimma',
    kannada:
      "ಗರ್ವಪಡದುಪಕಾರಿ, ದರ್ಪ ಬಿಟ್ಟಧಿಕಾರಿ ।\nನಿರ್ವಿಕಾರದ ನಯನದಿಂ ನೋಳ್ಪುದಾರಿ ॥\nಸರ್ವಧರ್ಮಾಧಾರಿ, ನಿರ್ವಾಣಸಂಚಾರಿ ।\nಉರ್ವರೆಗೆ ಗುರುವವನು - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೬ ॥",
    kannada_explanation:
      "ಉಪಕಾರ ಮಾಡಿ ತಾನು ಮಾಡಿದೆನೆಂಬ ಗರ್ವ ಪಡದವನು, ಅಧಿಕಾರವಿದ್ದರೂ ದರ್ಪವನು ತೋರದವನು, ನಿರ್ವಿಕಾರದಿಂದ ಜಗವನ್ನು ನೋಡುವ ಉದಾರಿ, ಎಲ್ಲ ಧರ್ಮಗಳನ್ನೂ ಧರಿಸಿರುವವನು ಮತ್ತು ಮಾನಸಿಕವಾಗಿ ಪರತತ್ವದಲ್ಲಿ ನಿಂತು ನಿರ್ವಾಣದಲ್ಲಿರುವವನು ಈ ಜಗತ್ತಿಗೆ ಗುರುವಂತೆ ಇರುವನು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 807,
    english:
      "\"To see one's growth in the growth of the world. To wander one's soul freely in the streets of the world. To see the completeness of life only among all the other life in this world. A person who is able to do the above will be happy.\" - Mankutimma",
    kannada:
      "ಜಗದ ಕಲ್ಯಾಣದೊಳಗಾತ್ಮ ಕಲ್ಯಾಣವನು ।\nಜಗದ ಬೀದಿಗಳೊಳು ನಿಜಾತ್ಮ ಯಾತ್ರೆಯನು ॥\nಜಗದ ಜೀವಿತದಿ ನಿಜಜೀವಿತದ ಪೂರ್ತಿಯನು ।\nಬಗೆಯಲರಿತವನೆ ಸುಖಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೭ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಕಲ್ಯಾಣದೊಳು ಆತ್ಮ ಕಲ್ಯಾಣವನು, ಜಗತ್ತಿನ ಬೀದಿಗಳಲ್ಲಿ ನಿಜ ಆತ್ಮ ಯಾತ್ರೆಯನು, ಜಗತ್ತಿನ ಬದುಕಿನಲ್ಲಿ ವೈಯಕ್ತಿಕ ಬದುಕಿನ ಪರಿಪೂರ್ಣತೆಯನ್ನು ಕಾಣಬಲ್ಲವನೇ ಸುಖಿ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 808,
    english:
      '"To be able to treat everything in this world as if his own is a tough exercise. It has to be practiced tirelessly. Once mastered it is as simple as breathing. Once your inner self is disciplined, there is no need for any external forces to impose rules. To be free and flexible outside, the inside must be disciplined and strong." - Mankutimma',
    kannada:
      "ಚಿರ ಶಿಕ್ಷೆಯಿಂ ನಿನಗೆ ಸರ್ವಾತ್ಮತಾಭ್ಯಾಸ ।\nಸರಳ ಸಹಜವದಹುದು ಮೂಗಿನುಸಿರವೊಲು ॥\nಪರನಿಯತಿಯಿರದು ಸ್ವತಸಿದ್ಧ ನಿಯತಿಯಿರೆ ।\nಹೊರಸಡಿಲಕೊಳಹಿಡಿತ - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೮ ॥",
    kannada_explanation:
      "ಕಾಣುವ ಎಲ್ಲೆಲ್ಲೂ ಮತ್ತು ಕಾಣುವ ಎಲ್ಲದರಲ್ಲೂ ಆ ಪರಬ್ರಹ್ಮವಸ್ತುವನ್ನೇ ಕಾಣುವ ಅಭ್ಯಾಸವಾಗಬೇಕಾದರೆ ಮನಸ್ಸು ಬುದ್ಧಿಗಳಿಗೆ ನಿರಂತರ ಶಿಕ್ಷಣವಾಗಬೇಕು. ಸಹಜವಾದ ನಮ್ಮ ಉಸಿರಾಟದಂತೆ ಆ ಭಾವ ನಮ್ಮಲ್ಲಿ ಮೂಡಬೇಕು. ಇದಕ್ಕೆ ಹೊರಗಿನ ನಿಯಮಗಳಾವುದೂ ಇರುವುದಿಲ್ಲ, ಅದು ಸ್ವತಃ ಅಭ್ಯಾಸದಿಂದ ತನ್ನಲ್ಲಿ ತಾನೇ ಕಂಡುಕೊಂಡ ಸತ್ಯವಾಗಬೇಕು. ಅಂತಹ ಸ್ಥಿತಿ ತಲುಪಲು ಹೊರಗೆ ಸಹಜವಾಗಿ ಎಲ್ಲರಂತೆಯೇ ಇದ್ದರೂ, ಒಳಗೆ ಮನಸ್ಸುಬುದ್ಧಿಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತಮ್ಮ ಹಿಡಿತದಲ್ಲಿಟ್ಟುಕೊಂಡಿರಬೇಕು, ಎನ್ನುವುದೇ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 809,
    english:
      '"For a person who treats the whole of creation as himself, there is no fear. He has unlimited love to give to the world. He is a realized soul. He does not (need not) care about various philosophies of duality or singularity, about rituals and penances." - Mankutimma',
    kannada:
      "ದ್ವೈತವೇನದ್ವೈತವೇನಾತ್ಮದರ್ಶನಿಗೆ? ।\nಶ್ರೌತಾದಿವಿಧಿಯೇನು? ತಪನಿಯಮವೇನು? ॥\nನೀತಿ ಸರ್ವಾತ್ಮಮತಿಯದರಿನಮಿತ ಪ್ರೀತಿ ।\nಭೀತಿಯಿಲ್ಲದನವನು - ಮಂಕುತಿಮ್ಮ ॥ ೮೦೯ ॥",
    kannada_explanation:
      "ಆತ್ಮದರ್ಶನವಾದವನಿಗೆ ‘ದ್ವೈತ’ ಮತ್ತು ಅದ್ವೈತದಿಂದ ಏನಾಗಬೇಕು?. ಶ್ರುತಿಗಳು ವಿಧಿಸಿರುವ ನಿಯಮಗಳ ಪಾಲನೆ, ತಪಸ್ಸು ಮುಂತಾದವುಗಳನ್ನು ಅವನು ಮಾಡಬೇಕೆಂದಿಲ್ಲ. ಅವನಿಗೆ ಜಗತ್ತಿನಲ್ಲೆಲ್ಲಾ ಪರಮಾತ್ಮನ ಮತ್ತು ಪರತತ್ವದ ದರ್ಶನವಾಗುತ್ತಿರುವಾಗ ಅದರಿಂದ ಎಲ್ಲರಲ್ಲೂಅಮಿತವಾದ ಪ್ರೀತಿಯನ್ನು ಹೊಂದಿರುತ್ತಾನಾದ್ದರಿಂದ ಅವನು ನಿರ್ಭೀತನಾಗಿರುತ್ತಾನೆ ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 810,
    english:
      '"Devotion, actions, logic - any of these alone is not enough to get the full picture of the universal truth. It requires a lot of penance. It requires the mind to be subject to wide range of experiences throughout life. Only then will the mind be purified to be able to comprehend the truth." - Mankutimma',
    kannada:
      "ಬರಿಭಕ್ತಿ ಬರಿಕರ್ಮ ಬರಿತರ್ಕ ದೊರಕಿಸದು ।\nಪರಮಾತ್ಮ ದರ್ಶನವ; ಬೇಕದಕೆ ತಪಸು ॥\nಪರಿಪೂರ್ಣ ಜೀವನಾನುಭವತಾಪದಿ ಮತಿಯು ।\nಪರಿಪಕ್ವವಾಗಲದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೦ ॥",
    kannada_explanation:
      "ಕೇವಲ ಭಕ್ತಿ, ಕರ್ಮ ಅಥವಾ ತರ್ಕದಿಂದ ಪರಮಾತ್ಮ ದರ್ಶನವಾಗುವುದಿಲ್ಲ. ಅದಕ್ಕೆ ತಪಸ್ಸು ಬೇಕು, ಜೀವನದ ಪರಿಪೂರ್ಣ ಅನುಭವದ ಬೇಗೆಯಲ್ಲಿ ಬೆಂದು ಹೊರಬಂದರೆ ಆಗ ನಮ್ಮ ಬುದ್ಧಿ ಪಕ್ವವಾಗುತ್ತದೆ ಎಂದು, ಪರತತ್ವ ದರ್ಶನಕ್ಕೆ ಅಗತ್ಯವಾಗಿ ಆಗಬೇಕಾದ ಸಂಸ್ಕಾರದ ಬಗ್ಗೆ ನುಡಿದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 811,
    english:
      '"The inner conscience must be calibrated so that the worldly dealings will not be too heavy. Everyday actions must be in such a way that they do not suffocate the inner conscience. Balancing both of them is greatest art of life." - Mankutimma',
    kannada:
      "ಹೊರಗು ಹೊರೆಯಾಗದವೊಲ್ ಒಳಗನನುಗೊಳಿಸಿ, ನೀ- ।\nನೊಳಗು ಶೆಕೆಯಾಗದವೊಲ್ ಅಳವಡಿಸೆ ಹೊರಗ ॥\nಸರಿಸಮದೊಳೆರಡನುಂ ಬಾಳಿನಲಿ ಜೋಡಿಪುದೆ ।\nಪರಮಜೀವನಯೋಗ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೧ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಹೊರಗಿನದನ್ನು ಹೊರೆಯೆಂದು ಭಾವಿಸದಂತೆ ನಮ್ಮ ಒಳಗನ್ನು ಸಿದ್ಧಗೊಳಿಸಿ, ನಮ್ಮ ಹೊರಗು ನಮ್ಮೊಳಗೆ ನುಗ್ಗಿ ಬಿಸಿಯನ್ನುಂಟು ಮಾಡದಂತೆ ನಮ್ಮಒಳಗನ್ನೂ ಅಳವಡಿಸಿಕೊಂಡು,ಇವೆರಡನ್ನೂ ಸರಿಸಮವಾಗಿ ಜೋಡಿಸಿಕೊಳ್ಳಲಾದರೆ ಅದೇ ಜೀವನದಲ್ಲಿ ಅದೇ ಅತ್ಯುತ್ತಮವಾದ ಯೋಗ ಎಂದು ಹೇಳಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 812,
    english:
      '"One must cry; one must laugh. But there must be a sensible limit to both that one must not cross. The emotions in our heart must flow like a river (not stagnant like a pond). But, our mind must be like a rock that does not move even a bit in spite of facing endless waves. This is the picture of a wise man." - Mankutimma',
    kannada:
      "ಅಳಬೇಕು, ನಗಬೇಕು, ಸಮತೆ ಶಮವಿರಬೇಕು ।\nಹೊಳೆಯ ನೆರೆವೊಲು ಹೃದಯರಸ ಹರಿಯಬೇಕು ॥\nಅಲೆಯಿನಲುಗದ ಬಂಡೆಯವೊಲಾತ್ಮವಿರಬೇಕು ।\nತಿಳಿದವರ ಚರಿತವದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೨ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿ ಬದುಕುವಾಗ ಎಲ್ಲರೊಡನೆ ಸೇರಿ ನಗಬೇಕು, ಸಮಯ ಬಂದಾಗ ಅಳಲೂ ಬೇಕು. ಆದರೆ ಅಂತರಂಗದಲ್ಲಿ ಶಮ, ಎಂದರೆ ನಿಗ್ರಹವಿರಬೇಕು. ಹೃದಯದ ಭಾವರಸವು, ಹೊಳೆಯ ನೆರೆಯಂತೆ ಹರಿಯಬೇಕು. ಆದರೆ ಆತ್ಮ ಆ ಭಾವರಸದ ಹೊಡೆತಕ್ಕೆ ಜಗ್ಗದೆ, ಬಂಡೆಯಂತೆ ದೃಢವಾಗಿ ಇರಬೇಕು. ಜಗತ್ತಿನಲ್ಲಿ, ‘ಅರಿತವರ ಮತ್ತು ಜ್ಞಾನಿ’ಗಳ ನಡವಳಿಕೆ ಆ ರೀತಿಯಿರುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 813,
    english:
      '"Let there be no pain in the heart due to complete renouncement. Let there no headaches due to excessive involvement either. Wear the armour of selflessness and the swords of this world will not be able to hurt you." - Mankutimma',
    kannada:
      "ಬಿಟ್ಟೆನೆಲ್ಲವನೆಂಬ ಹೃದಯಶೋಷಣೆ ಬೇಡ ।\nಕಟ್ಟಿಕೊಳ್ಳುವ ಶಿರಃಪೀಡೆಯುಂ ಬೇಡ ॥\nತೊಟ್ಟು ನಿರಹಂಕೃತಿಯ ಕವಚವನು ನೀಂ ಪೋರು ।\nಮುಟ್ಟದಿಳೆಯಸಿ ನಿನ್ನ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೩ ॥",
    kannada_explanation:
      "ನಾನು ಎಲ್ಲವನ್ನೂ ಬಿಟ್ಟಿದ್ದೇನೆ ಎಂದು ಹೃದಯ ಶೋಷಣೆಯನ್ನೂ ಮಾಡಿಕೊಳ್ಳಬೇಡ ಅಥವಾ ಎಲ್ಲವನ್ನೂ ಕಟ್ಟಿಕೊಂಡು ತಲೆನೋವನ್ನೂ ತಂದುಕೊಳ್ಳಬೇಡ. ‘ನಿರಹಂಕಾರ’ ದ ಕವಚವನ್ನು ತೊಟ್ಟುಬಿಡು. ಆಗ ಈ ಜಗತ್ತಿನ ಕತ್ತಿಯ ಅಲಗು ನಿನ್ನನ್ನು ಏನೂ ಮಾಡಲಾಗದು ಎಂದು ಘಾಸಿಗೊಳ್ಳದೆ ಬದುಕನ್ನು ಹೇಗೆ ಸಾಗಿಸಬೇಕು ಎನ್ನುವುದನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ, ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 814,
    english:
      '"A judge sets aside all thoughts of personal gain aside and listens to all the parties in a case. He needs this detachment to be able to give impartial judgments. One must exercise the same detachment (selflessness) and work towards bettering this world." - Mankutimma',
    kannada:
      "ನ್ಯಾಯಾಧಿಪತಿ ತನ್ನ ಮತಿ ಮನಸುಗಳನೆಲ್ಲ ।\nಸ್ವೀಯಲಾಭಸ್ಮರಣೆಯುಳಿದು ವಿವಾದಗಳಾ ॥\nದಾಯನಿರ್ಣಯಕೆ ಯೋಜಿಸುವಂತೆ, ನೀಂ ಜಗದ ।\nಶ್ರೇಯಸ್ಸಿಗುಜ್ಜುಗಿಸು - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೪ ॥",
    kannada_explanation:
      "ನಿರ್ಮಮಕಾರದ, ನಿರ್ಮೋಹದ ಮತ್ತು ನಿರಹಂಕಾರದ ಸ್ಥಿತಿ ಬಹಳ ಉತ್ತಮವಾದ ಸ್ಥಿತಿ ಎಂದು ಹಿಂದಿನ ಮುಕ್ತಕದಲ್ಲಿ ಉಲ್ಲೇಖವಾಗಿದೆ. ಆದರೆ ಆ ಸ್ಥಿತಿಯನ್ನು ತಲುಪುವುದು ಹೇಗೆ ಎಂಬುದನ್ನು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಉಲ್ಲೇಖಿಸುತ್ತಾ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು,ನ್ಯಾಯಾಧಿಪತಿಯು ನ್ಯಾಯ ವಿತರಣೆ ಮಾಡುವಾಗ, ಹೇಗೆ ತನ್ನ ಸ್ವಂತ ಲಾಭವನ್ನು ಬದಿಗಿಟ್ಟು ತನ್ನ ಮನಸ್ಸು ಮತ್ತು ಬುದ್ಧಿಗಳನ್ನು, ಕೇವಲ ದಾವೆ ಹೂಡಿದವರ ಹಿತವನ್ನು ದೃಷ್ಟಿಯಲ್ಲಿಟ್ಟುಕೊಂಡು ತೀರ್ಮಾನಮಾಡಲು ಉಪಯೋಗಿಸುತ್ತಾನೋ ಹಾಗೆ, ಜಗತ್ತಿನಲ್ಲಿ ಜೀವಿಸುವಾಗ ನಿನ್ನ ಸ್ವಂತದ ಹಿತವನ್ನು ಬದಿಗಿಟ್ಟು ಜಗತ್ತಿನ ಹಿತಕ್ಕಾಗಿ ದುಡಿ, ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 815,
    english:
      "\"For a horse names 'human endeavor', desire is a whip and fear is a chain. Its misery is dealing between both at the same time - the whip and the chain. But is a brave man rides it, the horse neither needs a whip not a chain. It can reach its goal naturally. \" - Mankutimma",
    kannada:
      "ಪೌರುಷಾಶ್ವಕ್ಕಾಶೆ ಛಾಟಿ, ಭಯ ಕಡಿವಾಣ ।\nಹಾರಾಟವದರದಾ ವೇಧೆಗಳ ನಡುವೆ ॥\nಧೀರನೇರಿರೆ, ಹೊಡೆತ ಕಡಿತವಿಲ್ಲದೆ ಗುರಿಗೆ ।\nಸಾರುವುದು ನೈಜದಿಂ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೫ ॥",
    kannada_explanation:
      "ಹುಮ್ಮಸ್ಸಿನಿಂದ ಶಕ್ತಿಯುತವಾಗಿ ಮುನ್ನುಗ್ಗುವ ಮನಸ್ಸೆಂಬ ಕುದುರೆಗೆ ಆಸೆಯೇ ಚಾವಟಿ ಮತ್ತು ಭಯವೇ ಕಡಿವಾಣ. ಬದುಕಿನಲ್ಲಿ ಬರುವ ಸುಖ ಸಂತೋಷಗಳು,ನೋವು ವೇದನೆಗಳ ನಡುವೆ ಇದರ ಹಾರಾಟ. ಆದರೆ ಧೀರನಾದವನು, ವಿವೇಕವಂತನಾದವನು ಆ ಕುದುರೆಯನ್ನು ಏರಿದರೆ, ಈ ಚಾವಟಿಯ ಹೊಡೆತ ಅಥವಾ ಕಡಿವಾಣದ ಹಿಡಿತಗಳಿಲ್ಲದೆ, ತನ್ನ ಗುರಿಯತ್ತ ಸಹಜವಾಗಿ ಸಾಗುವುದು ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 816,
    english:
      '"If you want good health for you mind as well as your body, you have to follow a many simple morals. You must always think, speak and do good. You will escape the cycle of sin begetting sin if you put this in practice." - Mankutimma',
    kannada:
      "ಆರೋಗ್ಯಭಾಗ್ಯವನು ಮನಕೆ ತನುಗೆಂತಂತೆ ।\nಹಾರಯಿಸುವೊಡೆ ಹಲವು ಸರಳ ನೀತಿಗಳ ॥\nಧಾರಯಿಸು ನೆನಸಿನಲಿ ನುಡಿಯಲ್ಲಿ ನಡತೆಯಲಿ ।\nಪಾರಾಗು ಸುಳಿಯಿಂದ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೬ ॥",
    kannada_explanation:
      "ದೇಹಾರೋಗ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಕೆಲವು ಸರಳ ನೀತಿಗಳನ್ನು ಪಾಲಿಸುವಂತೆ, ಕೆಲವು ಸರಳ ಸೂತ್ರಗಳನ್ನು ಪಾಲಿಸುವುದರಿಂದ ಮನದ ಆರೋಗ್ಯವನ್ನೂ ಬದುಕಿನಲ್ಲಿ ಸುಳಿಯಂತಹ ಸ್ಥಿತಿಗಳಲ್ಲಿ ಸಿಲುಕಿಕೊಳ್ಳದೆ ಪಾರಾಗು ಎಂದು ಸೂಚನೆಯನ್ನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 817,
    english:
      "\"If you want to know a tree well, don't pluck its roots. Don't tear its leaves and branches. Instead - water it, pour some manure, plough its bankings - enjoy touching its fresh sprouts and flowers. That is a good way to know the trees.\" - Mankutimma",
    kannada:
      "ಮರವ ನೀನರಿಯುವೊಡೆ ಬುಡವ ಕೀಳಲು ಬೇಡ ।\nತರಿಯಬೇಡೆಲೆಕಡ್ಡಿಗಳ ಪರೀಕ್ಷಣಕೆ ॥\nಎರೆ ನೀರ, ಸುರಿ ಗೊಬ್ಬರವ, ಕೆದಕು ಪಾತಿಯನು ।\nನಿರುಕಿಸುತ ತಳಿರಲರ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೭ ॥",
    kannada_explanation:
      "ಒಂದು ಮರವನ್ನು ಅರಿಯಲು ಅದರ ಬುಡವನ್ನು ಕೀಳಬೇಡ. ಅದರ ಎಲೆ ಮತ್ತು ಕಡಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಲೆಂದು ತರಿಯಬೇಡ. ಬದಲಾಗಿ ಅದಕ್ಕೆ ನೀರನ್ನು ಹಾಯಿಸು, ಅದರ ಪಾತಿಯನ್ನು ಕೆದಕಿ ಸ್ವಲ್ಪ ಗೊಬ್ಬರವನ್ನು ಕೊಟ್ಟು ಅದರಲ್ಲಿ ಚಿಗುರುವ ಎಲೆಗಳ ಮೇಲಿಂದ ಬೀಸುವ ತಂಪಾದ ಮಂದಮಾರುತವನ್ನು ನಿರೀಕ್ಷಿಸು, ಎಂದು ಹೇಳುತ್ತಾ ಈ ಜಗತ್ತೆಂಬ ಹೂದೋಟದಲ್ಲಿ ನಾವು ಹೇಗಿರಬೇಕು ಎನ್ನುವುದಕ್ಕೆ ಒಂದು ದೃಷ್ಟಾಂತದ ಮೂಲಕ ವಿವರಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 818,
    english:
      '"The early doctors came to know about the medicinal value of all the plants by observing the animals of the forest use them. The did not find it by theorizing. What can be achieved by debates? The ultimate truth can only be realized through experiences in life." - Mankutimma',
    kannada:
      "ವನಜಂತುಗಳ ಸಸ್ಯಮೂಲಿಕಾಹಾರದಿಂ ।\nಗುಣವನರಿತವರಾದಿವೈದ್ಯರೌಷಧದೊಳ್ ॥\nಒಣತರ್ಕಗಳಿನೇನು? ಜೀವನದ ವಿವಿಧರಸ- ।\nದನುಭವದಿ ತತ್ತ್ವವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೮ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ವನ್ಯ ಮೃಗಗಳು ತಮ್ಮ ಅನಾರೋಗ್ಯದ ಕಾರಣವನ್ನು ತಾವೇ ಅರಿತು ತಮಗೆ ಬೇಕಾದ ಔಷಧೀಯ ಗಿಡ ಮೂಲಿಕೆಗಳನ್ನು ತಾವೇ ಕಂಡುಗೊಳ್ಳುವ ಗುಣವನ್ನು ಅನುಸರಿಸಿ ಮನುಕುಲದ ಆದಿ ವೈದ್ಯರುಗಳು ಔಷಧಿಗಳನ್ನು ಕಂಡುಕೊಂಡರು. ಹಾಗೆಯೇ, ಒಣತರ್ಕಮಾಡದೆ ಬದುಕಿನ ಅನುಭವದಿಂದ ಜೀವನದ ತತ್ವದ ರಸಾನುಭವವನ್ನು ಪಡೆಯಬೇಕು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 819,
    english:
      '"If you cut it (a tree) to examine it - all you will be left is dried wood and bark. If you don\'t cut it, life flows and enhances in it. Similarly, we should not examine/analyze our lives too much. We must put in enough efforts to make it blossom well." - Mankutimma',
    kannada:
      "ಕಡಿದೊಡೆ ಪರೀಕ್ಷೆಗುಳಿವುವು ಸತ್ತನಾರುಗಳು ।\nಕಡಿಯದಿರೆ ಮರದಿ ಪರಿಯುವುದು ಜೀವರಸ ॥\nಬಿಡುವಮ್ ಈ ಬಾಳ್ ಅದೇಕೆಂಬ ಚರ್ಚೆಯ; ನಾವು ।\nದುಡಿವಮ್ ಅದು ಪೆಂಪುಗೊಳೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೧೯ ॥",
    kannada_explanation:
      "ಮುಕ್ತಕ ೮೧೭ನ್ನು ಮುಂದುವರೆಸಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಮರದ ಕೊಂಬೆ ರೆಂಬೆಗಳನ್ನು ಕಡಿದರೆ ನಿನಗೆ ಸಿಗುವುದು ಕೇವಲ ಜೀವಕಳೆದುಕೊಂಡ ನಾರುಗಳು, ಬೇರುಗಳು. ಕಡಿಯದಿದ್ದರೆ ಅವುಗಳಲ್ಲಿ ಜೀವರಸ ಹರಿಯುವುದು. ಈ ಬಾಳೂ ಸಹ ಹೀಗೆಯೇ. ಇದು ಏಕೆ? ಏನು? ಹೀಗೇಕೆ? ಹಾಗೇಕಲ್ಲ? ಮುಂತಾದ ಚರ್ಚೆಗೆ ಎಡೆಕೊಡದೆ ಬದುಕನ್ನು ವೃದ್ಧಿಗೊಳಿಸುವ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗೊಳಿಸುವ ಕೆಲಸದಲ್ಲಿ ತೊಡಗಿದರೆ ಒಳ್ಳೆಯದು, ಎಂದಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 820,
    english:
      '"There are three parts to any transaction in life - self, the world and luck. It is the party who has the third part who usually gets his way. If one understands this, life will be easy and happy." - Mankutimma',
    kannada:
      "ಜೀವನವ್ಯಾಪಾರ ಮೂವರೊಟ್ಟು ವಿಚಾರ ।\nಭಾವಿಪೊಡೆ ನೀನು, ಜಗ, ಇನ್ನೊಂದದೃಷ್ಟ ॥\nಆವಗಂ ಮೂರನೆಯ ಭಾಗಸ್ಥನಿಚ್ಛೆ ಬಲ ।\nಈ ವಿವರವರಿಯೆ ಸುಖ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೦ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಜೀವನದ ವ್ಯಾಪಾರದಲ್ಲಿ ಮೂರು ಜನರ ಒಟ್ಟುವಿಚಾರ ಸಮ್ಮಿಳಿತವಾಗಿರುತ್ತದೆ. ಯೋಚಿಸಿ ನೋಡಿದರೆ ಒಂದು ನೀನು, ಎರಡನೆಯದು ಈ ಜಗತ್ತು ಮತ್ತು ಮೂರನೆಯದು ಆ ಕಾಣದ ಕೈ. ಆದರೆ ಆ ಕಾಣದ ಶಕ್ತಿಯ ಬಲ ಮತ್ತು ಪ್ರಭಾವವೇ ಅಧಿಕವಾಗಿರುತ್ತದೆ. ಈ ವಿವರಗಳನ್ನು ಅರಿತುಕೊಂಡರೆ ನೆಮ್ಮದಿಯಾಗಿರಬಹುದು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 821,
    english:
      '"What antic one does in this world for happiness? We must accept whatever happiness comes to us like wind. If we try to grab it by swing our arms, fatigue and sweat will be the only outcome. We must reduce anxiety and find calm." - Mankutimma',
    kannada:
      "ಏನೇನು ಹಾರಾಟ ಸುಖಕೆಂದು ಲೋಕದಲಿ! ।\nತಾನಾಗಿ ಗಾಳಿವೊಲ್ ಬಂದ ಸುಖವೆ ಸುಖ ॥\nನೀನೆ ಕೈಬೀಸಿಕೊಳೆ ನೋವು ಬೆವರುಗಳೆ ಫಲ ।\nಮಾಣು ಮನದುಬ್ಬಸವ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೧ ॥",
    kannada_explanation:
      "ಈ ಲೋಕದಲ್ಲಿ ಸುಖವನ್ನು ಪಡೆಯಲು ಮನುಷ್ಯರು ಏನೆಲ್ಲ ರೀತಿಯ ಹಾರಾಟ ಮಾಡುತ್ತಾರೆ. ಆದರೆ ಪ್ರಯತ್ನಪೂರ್ವಕವಾಗಿ ಪಡೆದ ಸುಖ ಸುಖವಲ್ಲ, ತಾನಾಗೆ ಲಭ್ಯವಾದ ಸುಖವೇ ಸುಖ. ಗಾಳಿಯನ್ನು ನಾವೇ ಬೀಸಿಕೊಂಡರೆ ಕೇವಲ ಕೈ ನೋವು, ಮೈ ಬೆವರುಗಳೇ ಫಲ. ಹಾಗಲ್ಲದೆ ತಾನೇ ಬೀಸುವ ಗಾಳಿ ಹಿತ ತರುತ್ತದೆ. ಹಾಗಾಗಿ ಸುಖ ಪಡೆಯಲು ನಮ್ಮ ಅತಿ ಪ್ರಯತ್ನವನ್ನು ಬಿಡಬೇಕು ಎನ್ನುವ ಸಂದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 822,
    english:
      '"Persistent hard work without anxiety will benefit all. If one acts as if he is possessed, then it is not good for the soul. If you do all work in an excited state, then the third party (God, Fate or Luck) involved – other than you and the work, will not be happy." - Mankutimma',
    kannada:
      "ಆತುರತೆಯಿರದ ಸತತೋದ್ಯೋಗ ಸರ್ವಹಿತ ।\nಭೂತದಾವೇಶವಾತುರತೆಯಾತ್ಮಕ್ಕೆ ॥\nಕಾತರನು ನಿನಾಗೆ ಮೂರನೆಯ ಸಹಭಾಗಿ ।\nಪ್ರೀತನಾಗುವನೇನೊ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೨ ॥",
    kannada_explanation:
      "‘ಆತುರತೆ’ ಯಿಲ್ಲದೆ ಸತತವಾಗಿ ಕಾರ್ಯನಿರತನಾಗಿದ್ದರೆ ಅದು ಸರ್ವರ ಹಿತಕ್ಕೆ ಕಾರಣವಾಗುತ್ತದೆ. ಹಾಗಲ್ಲದೆ ಆತುರತೆಯನ್ನು ತೋರಿದರೆ ಅದು ಆತ್ಮಕ್ಕೆ ಭೂತದಾವೇಶದಂತಾಗುತ್ತದೆ. ನೀನು ಕಾತರನಾಗಿ ಸದಾಕಾಲವಿದ್ದರೆ, ನಿನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳಲ್ಲಿ ತನ್ನ ಪಾತ್ರವನ್ನೂ ವಹಿಸುವ ಆ ಮೂರನೆಯವನು ಸುಪ್ರೀತನಾಗುವನೇನೋ? ಎಂದು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 823,
    english:
      '"Stubbornness may be right. But it does not do any good. Cuffs are still a restraint even if they are made of pearls and gold. Your body will bleed even if it is your son who stabs. We need to learn to be objective and bring peace to our minds and look at all things equally." - Mankutimma',
    kannada:
      "ಎಣಿಕೆಯೊಳಿತಾದೊಡೆಯುಮೊಳಿತನಾಗಿಸದು ಹಟ ।\nಮಣಿಕನಕ ಸಂಕೋಲೆ ತನುವ ಬಂಧಿಸದೇಂ? ॥\nತನಯನಿರಿದಸಿ ನಿನ್ನ ಮೈಯ ಹುಣ್ಣಾಗಿಸದೆ? ।\nಮನ ಸರ್ವಸಮವಿರಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೩ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಆಲೋಚನೆ ಉತ್ತಮವಾದರೂ, ಉತ್ತಮ ಕಾರ್ಯವನ್ನೇ ಮಾಡಲು ನಮ್ಮ ಹಟ ನಮ್ಮನ್ನು ಬಿಡುವುದಿಲ್ಲ. ಬಂಗಾರ ಮತ್ತು ಮಣಿಗಳಿಂದ ಪೋಣಿಸಲ್ಪಟ್ಟ ಸಂಕೋಲೆಯಾದರೂ ಅದು ನಮ್ಮ ದೇಹವನ್ನು ಬಂಧಿಸುವುದಿಲ್ಲವೇ? ನಮ್ಮ ಮಗನೇ ಆದರೂ, ಅವನು ಕತ್ತಿಯಿಂದ ನಮ್ಮನ್ನು ಇರಿದರೆ ಮೈ ಹುಣ್ಣಾಗುವುದಿಲ್ಲವೇ? ಹಾಗಾಗಿ ಮನ ಸರ್ವ ಸಮವಿರಲಿ ಎಂದು ಒಂದು ಉತ್ತಮ ವಿಚಾರವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 824,
    english:
      "\"If you do not reach the goal at first, try again. By your skill, or by luck's help, or due to previous good karma – your efforts may fructify. You don't give up and keep on trying.\" - Mankutimma",
    kannada:
      "ಗುರಿಯನೈದದೊಡೊಮ್ಮೆ ಮರಳಿ ನೀನುಜ್ಜುಗಿಸು ।\nಕರಯುಕ್ತಿ ಪೆರ್ಚಿಯೋ, ದೈವ ಕರುಣಿಸಿಯೋ ॥\nಕರುಮಋಣ ಸಂಧಿಸಿಯೊ ಕೈಗೂಡಬಹುದು ಗುರಿ ।\nಪರವೆಯಿಡದುಜ್ಜುಗಿಸು - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೪ ॥",
    kannada_explanation:
      "ನಿನ್ನ ಕೃಷಿಯಿಂದ ಆಸೆಪಟ್ಟ ಗುರಿ ತಲುಪಲಾಗದಿದ್ದರೆ ಮತ್ತೆ ಪ್ರಯತ್ನ ಮಾಡು. ನಮ್ಮ ಪ್ರಯತ್ನ ಮತ್ತು ನಿರಂತರ ಕೃಷಿಯಿಂದಲೋ, ಆ ದೈವದ ಕರುಣೆಯಿಂದಲೋ ಅಥವಾ ನಮ್ಮ ಪೂರ್ವ ಕರ್ಮದ ಫಲವೆಂಬಂತೆಯೋ,ನಾವು ಹಿಡಿದ ಕೆಲಸ ಗುರಿ ತಲುಪಬಹುದು. ಆದರೆ ಇವಾವುದರ ಪರಿವೆಯೂ ಇಲ್ಲದೆ ನೀನು ನಿನ್ನ ಕೃಷಿಯನ್ನು ಮುಂದುವರೆಸು ಎಂದು ಬದುಕಿನಲ್ಲಿ ಆಸೆಪಟ್ಟ ಗುರಿಯನ್ನು ತಲುಪುವ ಸೂಕ್ತ ಮಾರ್ಗವನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 825,
    english:
      '"The finest of the fine arts is the art of living. One can not teach it by external instructions. One must learn to give and take, to concede and convince. Life will be beautiful then. This wisdom will come from inner peace only." - Mankutimma',
    kannada:
      "ಕಲೆಗಳಲಿ ಪರಮಕಲೆ ಜೀವನದ ಲಲಿತಕಲೆ ।\nಕಲಿಸಲದನಳವಲ್ಲ ಬಾಹ್ಯಬೋಧನೆಯಿಂ ॥\nಒಲಿದೊಲಿಸಿಕೊಳುವ ಲೌಕಿಕನಯದ ಸೊಗಸ ನೀಂ ।\nತಿಳಿವುದೊಳಹದದಿಂದ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೫ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿರುವ ಎಲ್ಲಾ ಕಲೆಗಳಲ್ಲಿ ಅತೀ ಉತ್ತಮವಾದ ಕಲೆ ಎಂದರೆ ‘ಬದುಕುವ’ ಕಲೆ. ಇದನ್ನು ಹೊರ ಬೋಧನೆಯಿಂದ ಕಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಾವು ಜಗತ್ತಿಗೆ ಒಲಿದು, ಜಗತ್ತನ್ನು ನಾವು ಒಲಿಸಿಕೊಳ್ಳುವುದೇ ಬದುಕಿನ ಸೊಗಸು. ಇದನ್ನು ನೀನು ನಿನ್ನ ಅಂತರಂಗದ ಮಂಥನದಿಂದ ಅರಿತುಕೋ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 826,
    english:
      '"Music one of the fine arts. Literature is another. There is another which shows off the beauty of expressions and the body – dance and drama. When all these come together in everyday life, then life itself will be an auspicious art." - Mankutimma',
    kannada:
      "ಸಂಗೀತಕಲೆಯೊಂದು, ಸಾಹಿತ್ಯಕಲೆಯೊಂದು ।\nಅಂಗಾಂಗ ಭಾವ ರೂಪಣದ ಕಲೆಯೊಂದು ॥\nಸಂಗಳಿಸಲೀ ಕಲೆಗಳನುನಯವು ಚರ್ಯೆಯಲಿ ।\nಮಂಗಳೋನ್ನತ ಕಲೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೬ ॥",
    kannada_explanation:
      "ಸಂಗೀತ, ಸಾಹಿತ್ಯ, ನಾಟ್ಯ ಮುಂತಾದವು ಒಂದೊಂದು ಕಲೆಗಳು. ನಮ್ಮ ಬದುಕನ್ನು ರೂಪಿಸುವ ನಮ್ಮ ಆಚಾರ ವಿಚಾರದಲ್ಲಿ ಈ ಕಲೆಗಳ ವಿಚಾರವು ಚರ್ಚೆಯಾದಲ್ಲಿ ಜೀವಿಸುವ ಕಲೆಯೂ ಅತ್ಯುತ್ತಮವಾಗುತ್ತದೆ ಎನ್ನುವ ವಿಚಾರವನ್ನು ನಮ್ಮ ಮುಂದೆ ಇಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 827,
    english:
      '"One must be very careful of his actions in this world. He must tread with fear, humility and compassion. It is in this world that he faces lot of competition (crowd), diseases, relatives who grow him up. This world is practically the root of all his existence. Hence he needs to be very careful of what his actions will entail." - Mankutimma',
    kannada:
      "ಲೋಕದಲಿ ಭಯವಿರಲಿ, ನಯವಿರಲಿ, ದಯೆಯಿರಲಿ ।\nನೂಕುನುಗ್ಗುಗಳತ್ತ, ಸೋಂಕುರೋಗಗಳು ॥\nಸಾಕಿಸಲಹುವರುಮ್ ಅತ್ತಲೆ ನಿನಗೆ; ನಿನ್ನೆಲ್ಲ ।\nಲೋಕ ಮೂಲವು ನೋಡೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೭ ॥",
    kannada_explanation:
      "ಜೀವಿಸುವ ಕಲೆಯನ್ನು ಮುಂದುವರೆಸುತ್ತಾ, ಬದುಕುವಾಗ ಭಯವಿರಲಿ, ನಡವಳಿಕೆಯಲ್ಲಿ ನಯವಿರಲಿ ಮತ್ತು ಸೃಷ್ಟಿಯ ಮಿಕ್ಕೆಲ್ಲದರಲ್ಲಿ ದಯೆ ಇರಲಿ ಎಂದು ಹೇಳುತ್ತಾ, ಜನಸಂದಣಿಯಿಂದ ಮತ್ತು ಅವರಿಂದ ನಿನಗೆ ಅಂಟಬಹುದಾದ ರೋಗಗಳಿಂದ, ಅಷ್ಟೇಕೆ, ಸಾಕಿ ಸಲುಹಿದವರಿಂದಲೂ ಸಾಧ್ಯವಾದಷ್ಟು ದೂರವಿರು,ನಿನ್ನ ಗಮನವೆಲ್ಲ ‘ ನೀನು ಎಲ್ಲಿಂದ ಬಂದೆ, ಏನು ತಂದೆ ಮತ್ತೆ ಮುಂದಕ್ಕೆ ಎಲ್ಲಿಗೆ ಮತ್ತು ಹೇಗೆ ಹೋಗಬೇಕು ಎನ್ನುವುದರಲ್ಲಿ ಎಂದು ಒಂದು ಎಚ್ಚರಿಕೆಯ ಮಾತನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 828,
    english:
      '"Stop being anxious. Give up restlessness. Let your mind be free from rush, violence and fear. These are all distractions. If the light is wavering, the eye loses sight of the goal. Let that not happen to you. Clear wisdom will only be seen when you have peace with in you." - Mankutimma',
    kannada:
      "ಕಳವಳವ ನೀಗಿಬಿಡು, ತಳಮಳವ ದೂರವಿಡು ।\nಕಳೆ, ತಳ್ಳು ಗಲಭೆ ಗಾಬರಿಯ ಮನದಿಂದ ॥\nಅಲೆದಾಡುತಿರೆ ದೀಪ ಕಣ್ಗೆ ಗುರಿ ತಪ್ಪುವುದು ।\nತಿಳಿತಿಳಿವು ಶಾಂತಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೮ ॥",
    kannada_explanation:
      "ಜೀವನದ ಕಲೆಯ ಪರಿಯನ್ನು ನಮಗರಿವಾಗಿಸಲು ತಿಳುವಳಿಕೆಯನ್ನು ನೀಡುತ್ತಾ, ಚಿಂತೆಯನ್ನು ಬಿಡು, ಆತಂಕವನ್ನು ದೂರತಳ್ಳು, ಗಾಬರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿಕೋ ಮತ್ತು ಮನದಲ್ಲಿ ನಡೆಯುವ ಹೋರಾಟವನ್ನು ದೂರತಳ್ಳು, ಎಂದು ಹೇಳುತ್ತಾ ಒಂದು ಉದಾಹರಣೆಯನ್ನು ನೀಡಿ, ಬೆಳಕು ಒಂದೇ ಕಡೆ ಇದ್ದರೆ ಗುರಿಯನ್ನು ಸರಿಯಾಗಿ ನೋಡಬಹುದು, ಹಾಗಲ್ಲದೆ ಬೆಳಕು ಸರಿದಾಡುತ್ತಿದ್ದರೆ ಗುರಿಸಾಧನೆ ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಮನಸ್ಸು ತಿಳಿಯಾಗಿದ್ದಲ್ಲಿ ಶಾಂತಿಯನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 829,
    english:
      '"Your mind is like the water of the pond. When undisturbed, it will be clear. But people of this world will get into the pond and as a result the dirt from the bottom will float and make it dirty. But if you let it settle without any more disturbance, it will again get cleared. That is the power of finding peace inside." - Mankutimma',
    kannada:
      "ಕೊಳದ ಜಲ ನಿನ್ನ ಮನ; ಲೋಗರದರೊಳಗಿಳಿಯೆ ।\nತಳದ ಕಸ ತೇಲುತ್ತ ಬಗ್ಗಡವದಹುದು ॥\nಕಲಕದದ್ದೆದೆ ಕೊಂಚ ಬಿಟ್ಟಿದ್ದೊಡದು ಮರಳಿ ।\nತಿಳಿಯಹುದು ಶಾಂತಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೨೯ ॥",
    kannada_explanation:
      "ಮನಸ್ಸೆಂಬುದು ಒಂದು ಸರೋವರ ಅಥವಾ ಕೊಳವಿದ್ದಂತೆ. ಲೋಕದ ವಿಚಾರಗಳು ಅದರೊಳಕ್ಕೆ ಬಿದ್ದರೆ ತಳಗೆ ಅಡಗಿದ್ದ ಕಸ ಕದಡಿ ಹೋಗುತ್ತದೆ ಮತ್ತು ಬಗ್ಗಡವಾಗುತ್ತದೆ. ಮತ್ತೆ ಸ್ವಲ್ಪ ಹೊತ್ತು ಕದಡದೆ ಕಲಕದೆ ಇದ್ದರೆ, ಮತ್ತೆ ತಿಳಿಯಾಗುವುದು ಎಂದು ಮಾನಸ ಸರೋವರದ ವಿಚಾರವನ್ನು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 830,
    english:
      '"Don\'t cringe and berate anything in this world as filth, rotten, dirty or infested. There is value to filth also in this symbiotic nature of life. It is the filth that sets apart the clean as clean." - Mankutimma',
    kannada:
      "ಕೊಳಕೆಂದು, ಹುಳುಕೆಂದು, ಹೇಸಿಗೆಯ ಹುಳುವೆಂದು ।\nಇಳೆಯೊಳಾವುದರೊಳಮಸಹ್ಯಪಡಬೇಡ ॥\nಬೆಲೆಯುಂಟು ಕೊಳೆಗಮೀ ಜೀವಸಾಮಾಗ್ರಿಯಲಿ ।\nಕೊಳೆ ಶುಚಿಖ್ಯಾಪಕವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೦ ॥",
    kannada_explanation:
      '"ನಿನ್ನ ಮನಸ್ಸು ತಿಳಿಯಾಗಿರಿಸಿಕೊಳ್ಳಬೇಕು ಎಂದು ನಿನಗೆ ಬೇಡವಾದದ್ದೆಲ್ಲ ‘ಕೊಳಕು, ಕುಲುಕು, ಹೇಸಿಗೆ, ಹುಳ’ ಎಂದು ಹೇಳುತ್ತಾ ಈ ಜಗತ್ತಿನಲ್ಲಿರುವಾವುದನ್ನೂ ಅಸಹ್ಯ ಪಟ್ಟುಕೊಳ್ಳಬೇಡ". ಜಗತ್ತಿನ ಜೀವನದ ಸಮಗ್ರತೆಯಲ್ಲಿ, ಸೃಷ್ಟಿಯ ಪ್ರತಿಯೊಂದು ವಸ್ತುವಿಗೂ ಒಂದು ಬೆಲೆಯುಂಟು. ಕೊಳೆ ನಮಗೆ ಶುಚಿಯನ್ನು ಜ್ಞಾಪಿಸುತ್ತಿರುತ್ತದೆ, ಎಂದು ಮಾನಸಿಕ ಸಮಭಾವದ ಮೂಲಕ ಶಾಂತಿಯನ್ನು ಸಾಧಿಸುವ ಪರಿಯನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 831,
    english:
      '"Can God not take form that can scare you? Can God not enjoy himself in all the dirty stinking filth? What is filth? What is dirt? All of it has its place in this web of life. In dirt, one must remember the cleanliness and be happy." - Mankutimma',
    kannada:
      "ತಳೆಯಲಾರನೆ ಬೊಮ್ಮ ಬೀಭತ್ಸರೂಪಗಳ? ।\nನಲಿಯಲಾರನೆ ತಿಪ್ಪೆರೊಚ್ಚು ನಾತದಲಿ? ॥\nಮಲವೇನೊ! ಹೊಲೆಯೇನೊ! ಜೀವಸಂಬಧವಲ ।\nಮಲಿನದಲಿ ನೆನೆ ಶುಚಿಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೧ ॥",
    kannada_explanation:
      "ಆ ಪರಬ್ರಹ್ಮನು ಭಯಂಕರವಾದ ರೂಪಗಳನ್ನು ಧರಿಸಲಾರನೆ? ಅವನು ಹೊಲಸು ನಾರುವ ತಿಪ್ಪೆಗುಂಡಿಯಲ್ಲೂ ಸಂತಸಿಸಲಾರನೆ? ಬದುಕಿನ ಸಂಬಂಧದಲಿ ಮಲಿನವಾದದ್ದು, ಹೊಲಸಾದದ್ದು ಎಲ್ಲವೂ ಉಂಟು. ಮಲಿನತೆಯಲ್ಲಿ ಇದ್ದರೂ ಶುಚಿತ್ವವನ್ನು ನೀನು ಸದಾ ನೆನೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 832,
    english:
      '"Anything that makes us happy and brings peace to us is liberating. Be it worshiping at a temple, listening to a story (about God), seeing something beautiful, a song, helping the poor – anything would do as long as it can rest the anxiety in the mind and attain peace." - Mankutimma',
    kannada:
      "ಗುಡಿಯ ಪೂಜೆಯೊ, ಕಥೆಯೊ, ಸೊಗಸುನೋಟವೊ, ಹಾಡೊ ।\nಬಡವರಿಂಗುಪಕೃತಿಯೊ, ಆವುದೋ ಮನದ ॥\nಬಡಿದಾಟವನು ನಿಲಿಸಿ ನೆಮ್ಮದಿಯನೀವೊಡದೆ ।\nಬಿಡುಗಡೆಯೊ ಜೀವಕ್ಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೨ ॥",
    kannada_explanation:
      "ಗುಡಿಯ ಪೂಜೆಯಿಂದಲೋ, ಪುರಾಣ ಪುಣ್ಯ ಕಥಾ ಶ್ರವಣದಿಂದಲೋ, ಮೈ ಮರೆತು ಸೊಗಸಾದ ಪ್ರಕೃತಿಯ ನೋಟವನ್ನು ನೋಡುವುದರಲ್ಲಿಯೋ, ದಯಾ ಭಾವದಿಂದ ದೀನಗರಿಗುಪಕಾರವನ್ನು ಮಾಡುವುದರಿಂದಲೋ, ಹೀಗೆ ಯಾವುದಾದರೂ ರೀತಿಯಲ್ಲಿ ಮನಸ್ಸಿನ ಚಂಚಲ ಬಡಿದಾಟವನ್ನು ನಿಲ್ಲಿಸಿ ನೆಮ್ಮದಿಯನ್ನು ಪಡೆಯಬಹುದಾದರೆ, ಅದೇ ‘ಜೀವ’ ಕ್ಕೆ ಮುಕ್ತಿ ಅಥವಾ ಬಂಧನದಿಂದ ಬಿಡುಗಡೆ ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 833,
    english:
      "\"Don't blow smoke into happy eyes. Don't give up on this world equating this to be just a cemetery. Get on with your work with same enthusiasm as a kid walking and playing in front of its parents. Leave all other worries behind – they are all just banter.\" - Mankutimma",
    kannada:
      "ನಗುನಗುವ ಕಣ್ಗಳಿಗೆ ಹೊಗೆಯನೂದಲುಬೇಡ ।\nಜಗವ ಸುಡುಗಾಡೆನುವ ಕಟುತಪಸು ಬೇಡ ॥\nಮಗುವು ತಾಯ್ತಂದೆಕಣ್ಮುಂದೆ ನಡೆವಂತೆ ನಡೆ ।\nಮಿಗೆಚಿಂತೆ ತಲೆಹರಟೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೩ ॥",
    kannada_explanation:
      "ನಗುನಗುತಾ ಇರುವ ಕಣ್ಣುಗಳಿಗೆ ಹೊಗೆಯನೂದ ಬೇಡ. ಈ ಜಗತ್ತು ಒಂದು ಸುಡುಗಾಡು, ಇದೇಕೆ ಬೇಕು ಎನ್ನುವ ಹಠವೂ ಬೇಡ. ಸಹಜವಾಗಿ ತಂದೆ ತಾಯಿಗಳ ಮುಂದೆ ನಡೆದು ನಲಿದಾಡುವ ಮಗುವಂತೆ ಜೀವಿಸು. ಮಿಕ್ಕೆಲ್ಲಾ ವಿಚಾರಗಳೂ ಕೇವಲ ‘ತಲೆಹರಟೆ ‘ ಎಂದು ಬಾಳುವ ರೀತಿಯ ಬಗ್ಗೆ ಒಂದು ಕಿವಿಮಾತನ್ನು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 834,
    english:
      '"Like, this, that or some how, the story of this life will end. It may end now, then or at sometime. But it will definitely end. When it ends, we forget everything of this birth. That is a very good fortune. Being dead (under the earth) is liberation." - Mankutimma',
    kannada:
      "ಹೀಗೋ ಹಾಗೋ ಹೇಗೋ ಜನುಮಕಥೆ ಮುಗಿಯುವುದು ।\nಈಗಲೋ ಆಗಲೋ ಎಂ‌ದೋ ಮುಗಿಯುವುದು ॥\nಸಾಗಿಮುಗಿವುದು; ಮುಗಿದು ಮರೆವುದದೆ ನರಸುಕೃತ ।\nಭೂಗತಸ್ಥಿತಿ ಮುಕುತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೪ ॥",
    kannada_explanation:
      "ಹಾಗೋ ಹೇಗೊ ಹೇಗೆ ಒಂದು ರೀತಿಯಲ್ಲಿ ಹುಟ್ಟಿದವರೆಲ್ಲರ ಜನ್ಮದ ಕಥೆ ಮುಗಿಯುತ್ತದೆ. ಈಗಲೇ ಆಗಬಹುದು, ಯಾವಾಗಲೋ ಅಥವಾ ಇನ್ಯಾವಾಗಲೋ ಆಗಬಹುದು. ಅಂತೂ ಇಂತೂ ಬದುಕು ಸಾಗಿ ಖಂಡಿತವಾಗಿಯೂ ಮುಗಿಯುತ್ತದೆ, ಮುಗಿದು ಈ ಜಗತ್ತು ಆ ವ್ಯಕ್ತಿಯನ್ನು ಮರೆಯುತ್ತದೆ. ಹಾಗೆ ಮರೆತುಹೋಗುವುದೇ ಮನುಷ್ಯ ಪಡೆದುಕೊಂಡು ಬಂದಂತಹ ಪುಣ್ಯ. ಮಣ್ಣಲ್ಲಿ ಮಣ್ಣಾಗಿಹೋಗುವುದೂ ಸಹ ಒಂದು ರೀತಿಯ ಮುಕ್ತಿಯೇ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 835,
    english:
      '"Why should one fear Death? He is a friend who takes you to a different land. There is a different picture there. If you have lived your life without any sins, then what have you got to fear? It is just a different place to stay - thats all." - Mankutimma',
    kannada:
      "ಮೃತ್ಯುವಿಂ ಭಯವೇಕೆ? ದೇಶಾಂತರಕ್ಕೊಯ್ವ ।\nಮಿತ್ರನಾತಂ; ಚಿತ್ರ ಹೊಸದಿರ್ಪುದಲ್ಲಿ ॥\nಸಾತ್ತ್ವಿಕದಿ ಬಾಳ್ದವಂಗೆತ್ತಲೇಂ ಭಯವಿಹುದು? ।\nಸತ್ರ ಹೊಸದಿಹುದು ನಡೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೫ ॥",
    kannada_explanation:
      "ಸಾವಿನ ಭಯವೇಕೆ? ಈ ಸಾವು ಎಂಬುದು ನಮ್ಮನ್ನು ಹೊಸ ಹೊಸ ಪ್ರದೇಶಗಳನ್ನು ತೋರಿಸುವ, ನಮ್ಮ ಮಿತ್ರ. ಹೊಸ ಸ್ಥಳದಲ್ಲಿ ಹೊಸ ಚಿತ್ರವಿರುತ್ತದೆ. ಈ ಜನ್ಮದಲ್ಲಿ ಸಾತ್ವಿಕನಾಗಿ ಬಾಳಿದವನಿಗೆ, ಮುಂದಿನ ಬಾಳು ಇನ್ನಷ್ಟು ಸುಂದರವಾಗಿರುತ್ತದೆಂಬ ಭಾವದಿಂದ, ಮೃತ್ಯುವಿನ ಭಯವಿರಬೇಕಾಗಿಲ್ಲ. ಅಲ್ಲಿ ಎಲ್ಲವೂ ಹೊಸದಾಗಿರುತ್ತದೆ, ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 836,
    english:
      '"Creation is a big mystery. Greatest mystery is about life. This is true, that is false - all such logic are just banter. In this cave, there lies the root of all mystery. The mystery itself surrounds everything - inside and out." - Mankutimma',
    kannada:
      "ಬಹುರಹಸ್ಯವೊ ಸೃಷ್ಟಿ, ಬ್ರಹ್ಮರಹಸ್ಯವೊ ಜೀವ ।\nಅಹುದದಲ್ಲವಿದೆಂಬ ವಾದ ಬರಿ ಹರಟೆ ॥\nಗುಹೆಯೊಳಿಹುದೆಲ್ಲ ತತ್ತ್ವಗಳ ತತ್ತ್ವದ ಮೂಲ ।\nಬಹಿರಂತರ ರಹಸ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೬ ॥",
    kannada_explanation:
      "ಸೃಷ್ಟಿ ಬಹಳ ರಹಸ್ಯ. ಜೀವವೂ ಬಹಳ ರಹಸ್ಯದಿಂದ ಕೂಡಿದೆ. ಇದು ಹೌದು, ಅದು ಆಲ್ಲ, ಇದು ಇರಬಹುದು ಅಥವಾ ಅದೂ ಇರಬಹುದು ಎಂಬ ವಿಚಾರಗಳು ಕೇವಲ ವ್ಯರ್ಥ ಮಾತುಗಳು. ಒಳಹೊರಗುಗಳ ರಹಸ್ಯದ ಮೂಲವೇ ನಮ್ಮ ಅಂತರಂಗದ ಒಳಪದರಗಳಲ್ಲಿ ಅಡಗಿದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 837,
    english:
      '"Wherever I see, there are hidden demons. Traces of ghosts wandering in the dark. A thick darkness envelopes the secret of life. How am I to see the naked truth?" - Mankutimma',
    kannada:
      "ಎತ್ತೆತ್ತ ನೋಡಲುಂ ಗುಪ್ತ ಭೂತಗಳಯ್ಯ ।\nಕತ್ತಲೆಯೊಳಾಡುತಿಹ ದೆವ್ವಗಳ ಸುಳಿವು ॥\nಮುತ್ತಿ ಮುಸುಕಿಹುದು ಜೀವನದ ರಹಸ್ಯವೊಂದು ।\nಬೆತ್ತಲೆಯದಹುದೆಂತು? - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೭ ॥",
    kannada_explanation:
      '"ಎಲ್ಲಿ ನೋಡಿದರಲ್ಲಿ ಬಚ್ಚಿಟ್ಟುಕೊಂಡಿರುವ ಭೂತಗಳು. ಕತ್ತಲೆಯಲ್ಲಿ ಓಡಾಡುತಿಹ ದೆವ್ವಗಳು. ‘ಜೀವ’ ವನ್ನು ರಹಸ್ಯವೊಂದು ಮುಸುಕಿದಂತಿದೆ. ಮುಸುಕು ತೊಲಗಿ ನಮಗೆ ಆ ರಹಸ್ಯ ತೋರುವುದು ಹೇಗೆ? " ಎನ್ನುತ್ತಾ ಒಂದು ಅದ್ಭುತ ವಿಚಾರವನ್ನು ನಮ್ಮ ಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 838,
    english:
      '"The truth about birth and death is concealed behind a veil. In this deciet is hidden all the truth about attachment. Just like darkness covers the birth of the Sun and the Moon. It is your task to decipher the mystery and see the truth for yourself." - Mankutimma',
    kannada:
      "ಮುಸುಕಿಹುದು ಹುಟ್ಟಳಿವುಗಳ ಕಾರಣವ ಮಬ್ಬು ।\nಮಸಕಿನಲಿ ಹುದುಗಿಹುವು ಮೋಹಮೂಲಗಳು ॥\nನಿಶಿ ಮುಚ್ಚಿಹುದು ದಿನಪಚಂದಿರರ ಹುಟ್ಟೆಡೆಯ ।\nಮಿಸುಕುವ ರಹಸ್ಯ ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೮ ॥",
    kannada_explanation:
      "ಹುಟ್ಟು ಸಾವುಗಳ ಕಾರಣಗಳು ನಿಚ್ಚಳವಾಗಿಲ್ಲದೆ ಕವಿಯಲ್ಪಟ್ಟಿವೆ. ಈ ಜಗತ್ತಿನ ಮೇಲೆ ಮೋಹದ ಕಾರಣವೂ ಸಹ ಕವಿಯಲ್ಪಟ್ಟಿದೆ. ಸೂರ್ಯ ಚಂದ್ರರ ಉಗಮಸ್ಥಾನದ ಜ್ಞಾನವೂ ನಮಗಿಲ್ಲ. ಹಾಗೆಯೇ ನೀನೂ ಸಹ ಇವುಗಳಿಗೆಲ್ಲಾ ಸ್ಪಂದಿಸುವ ಒಂದು ರಹಸ್ಯವೇ, ಎಂದು ಸೃಷ್ಟಿಯ ರಹಸ್ಯಗಳ ಬಗ್ಗೆ ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 839,
    english:
      '"One can not know what grain of sand is carried by what wind or what spec of dust is carrying what energy particle. Life is thus a puppet controlled by strings that you cannot see. Try to think and contemplate on those strings." - Mankutimma',
    kannada:
      "ಆವ ಗಾಳಿಯದಾವ ಧೂಳ್ಕಣವ ಪೊತ್ತಿಹುದೊ! ।\nಆವ ಧೂಳಿನೊಳಾವ ಚೈತನ್ಯಕಣವೋ! ॥\nಜೀವವಿಂತಜ್ಞಾತ ಸೂತ್ರದಾಟದ ಬೊಂಬೆ ।\nಭಾವಿಸಾ ಸೂತ್ರಗಳ - ಮಂಕುತಿಮ್ಮ ॥ ೮೩೯ ॥",
    kannada_explanation:
      "ಯಾವ ಗಾಳಿಯು ಯಾವ ಧೂಳಿನ ಕಣವನ್ನು ಹೊತ್ತು ತರುತ್ತದೋ, ಯಾವ ಧೂಳಿನ ಕಣದಲ್ಲಿ ಯಾವ ಚೈತನ್ಯವು ಅಡಗಿದೆಯೊ!!!! ಜೀವವೂ ಸಹ ಹೀಗೆಯೇ ಯಾವುದೊ ಒಂದು ಅಜ್ಞಾತ ಶಕ್ತಿಯ ಕೈಯಲ್ಲಿನ ಸೂತ್ರದ ಆಟಕ್ಕೆ ಬೊಂಬೆಯಂತೆ ಕುಣಿಯುತ್ತದೆ. ಆ ಸೂತ್ರಗಳನ್ನು ಭಾವಿಸು ಎಂದು ಹೇಳುತ್ತಾ ಪರಮ ಚೈತನ್ಯವು ಹೇಗೆ ಇಡೀ ಜಗತ್ತನ್ನು ನಡೆಸುತ್ತಿದ್ದರೂ, ತನ್ನ ಕ್ರಿಯೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಗೊಡದೆ ನಿಗೂಢವಾಗಿಟ್ಟಿರುವ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 840,
    english:
      '"Where has this food that you eat come from? The rice is from somewhere. The manure is from elsewhere. Water from somewhere else. The meal has been prepared owing to the efforts of many many people. The debt of food is untraceable." - Mankutimma',
    kannada:
      "ಭುಕ್ತಿ ನಿನಗೆಲ್ಲಿಯದು? ಭತ್ತ ತಾನೆಲ್ಲಿಯದೊ! ।\nಎತ್ತಲಿನ ಗೊಬ್ಬರವೊ! ಎತ್ತಲಿನ ನೀರೋ! ॥\nಭಾಕ್ತವಾರಾರ ದುಡಿತದಿನೊ ನಿನಗಾಗಿಹುದು! ।\nಗುಪ್ತಗಾಮಿನಿಯೊ ಋಣ - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೦ ॥",
    kannada_explanation:
      "ನೀನುಣ್ಣುವ ಆಹಾರ ನಿನಗೆಲ್ಲಿಂದ ಸಿಕ್ಕಿತು? ಆ ಆಹಾರದಲ್ಲಿನ ಅನ್ನದ ಅಕ್ಕಿಯ ಬತ್ತ ಎಲ್ಲಿಂದ ಬಂದಿತೋ? ಆ ಬತ್ತವ ಬೆಳೆಯಲು ಹಾಕಿದ ಗೊಬ್ಬರವೆಲ್ಲಿಯದೋ? ಮತ್ತು ಆ ಬೆಳೆಗೆ ಹನಿಸಿದ ನೀರು ಎಲ್ಲಿಯದೋ? ಆ ಬೆಳೆಯನ್ನು ಬೆಳೆಸಲು ಯಾರ್ಯಾರ ಶ್ರಮ ಸೇರಿದೆಯೋ? ಇವ್ಯಾವುದೂ ನಮಗೆ ತಿಳಿಯುವುದಿಲ್ಲ ಮತ್ತು ಅರ್ಥವೂ ಆಗುವುದಿಲ್ಲ. ಇದೆಲ್ಲ ನಾವು ಪಡೆದುಕೊಂಡು ಬಂದಂತಹ, ಆದರೆ ‘ಅಭೇದನೀಯ ರಹಸ್ಯ ಋಣ’ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 841,
    english:
      '"When you spit out, you will not know which stream that goes into. It reaches some land which holds a seed that gets and germinates with life. That becomes food for someone later. Because that person could eat, the world will be effected differently. Who can describe the entire chain of causation?" - Mankutimma',
    kannada:
      "ನಿನ್ನೆಂಜಲಗುಳಾವ ಕಾಲುವೆಯ ಸೇರುವುದೊ! ।\nಮಣ್ಣಾವುದದರಿಂದೆ ಗರ್ಭವತಿಯಹುದೋ! ॥\nಅನ್ನವದರಿಂದಾರ್ಗೊ! ಲೋಕಕವರಿಂದೇನೊ! ।\nಬಣ್ಣಿಸುವರಾರದನು? - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೧ ॥",
    kannada_explanation:
      "ನೀನುಂಡು ಕೈ ತೊಳೆವ ನೀರು ಯಾವ ಕಾಲುವೆಯ ಸೇರುವುದೋ? ಆ ಕಾಲುವೆಯ ನೀರು ಯಾವ ಭೂಮಿಯನ್ನು ತಣಿಸುವುದೋ? ಹಾಗೆ ತಣಿದ ಯಾವ ಭೂಮಿ ಪೈರ ತಳೆಯುವುದೋ? ಆ ಪೈರಿಂದಾಗುವ ಕಾಳಿನ ಆಹಾರ ಯಾರ ಉದರವ ಸೇರುವುದೋ? ಆ ಕಾಳ ತಿಂದವರಿಂದ ಲೋಕಕ್ಕೇನು ಮಾಡುವರೋ? ಎಂಬ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಮಗೆ ಎಂದಿಗೂ ಉತ್ತರ ಸಿಗಲಾರದು ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ನಡೆಯುವ ವಿಧ್ಯಮಾನಗಳ ನಿಗೂಢತೆಯನ್ನು ಬಣ್ಣಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 842,
    english:
      '"A cow grazes in someone\'s field, drinks water from some stream and someone milks it. Somebody will drink that milk. From the strength that he gets from drinking the milk, he will do actions that effects the world in some way. Try to think about the chain of causation and debt." - Mankutimma',
    kannada:
      "ಆವ ನೆಲದಲಿ ಮೇದೊ, ಆವ ನೀರನು ಕುಡಿದೊ ।\nಆವು ಹಾಲ್ಗರೆವುದದನಾರು ಕುಡಿಯುವನೋ! ॥\nಆವ ಬಲವದರಿನೊಗೆದೇಂಗೆಯ್ಸುವುದೊ ಜಗಕೆ! ।\nಭಾವಿಸಾ ಋಣಗತಿಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೨ ॥",
    kannada_explanation:
      "ಯಾವುದೋ ನೆಲದಲ್ಲಿ ಬೆಳೆದ ಹುಲ್ಲನ್ನು ತಿಂದು ಯಾವುದೋ ಕೆರೆಯ ಅಥವಾ ತೊರೆಯ ನೀರನ್ನು ಕುಡಿದು ಒಂದು ಹಸು ಹಾಲನ್ನು ನೀಡುತ್ತದೆ. ಆ ಹಾಲನ್ನು ಯಾರು ಕುಡಿಯುವರೋ ಮತ್ತು ಹಾಗೆ ಕುಡಿದವರಿಂದ ಎಂತಹ ಕಾರ್ಯವಾಗುತ್ತದೆಯೊ ಮತ್ತು ಆ ಕಾರ್ಯದಿಂದ ಈ ಜಗತ್ತಿಗೆ ಏನುಪಯೋಗವೋ ಕಂಡವರಾರು? ಇದು ಋಣಗತಿ, ಇದನ್ನು ಭಾವಿಸು ಎಂದು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 843,
    english:
      '"In each breath there is there are so many living cells. On each spec of dust, there is so many energy particles. Each one is just following the consequences of their previous actions. No one can be certain of their next move. Surrender to the mystery that is behind this machinery of causation." - Mankutimma',
    kannada:
      "ಸೇರಿರ್ಪುವುಸಿರುಸಿರುಗಳೊಳೆಷ್ಟೊ ಜೀವಾಣು ।\nಹಾರುತಿಹುವೆಷ್ಟೊ ಚೇತನ ಧೂಳುಕಣದೊಳ್ ॥\nಪ್ರಾರಬ್ಧಗತಿಯ ನಿಶ್ಚಯದಿ ತಿಳಿದವರಿಲ್ಲ ।\nಆ ರಹಸ್ಯಕ್ಕೆರಗೊ! - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೩ ॥",
    kannada_explanation:
      "ನಾವು ಎಳೆದುಕೊಳ್ಳುವ ಪ್ರತೀ ಉಸಿರಿನಲ್ಲೂ ಬಹಳಷ್ಟು ಜೀವಾಣುಗಳು ಸೇರಿರುತ್ತವೆ. ನಮ್ಮ ಸುತ್ತಲಿನ ಧೂಳಲ್ಲಿ ಚೈತನ್ಯದ ಅದೆಷ್ಟು ಕಣಗಳಿವೆಯೋ!! ಯಾವುದು, ಹೇಗೆ, ಎಲ್ಲಿಂದ ಬಂದು ನಮ್ಮೊಳಕ್ಕೆ ಸೇರಿಕೊಳ್ಳುತ್ತದೆ ಎಂದು ಖಂಡಿತವಾಗಿ ಯಾರಿಂದಲೂ ಹೇಳಲಾಗುವುದಿಲ್ಲ. ಇದೊಂದು ರಹಸ್ಯ ಮತ್ತು ಆ ರಹಸ್ಯಕ್ಕೆ ನಮಿಸು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 844,
    english:
      '"Make sure that your shadow is not falling on other people. Let them live as they please in their own light. What do you know about the ups and downs of their life. Don\'t force yourself as their mentor (without them asking for it)." - Mankutimma',
    kannada:
      "ಬೀಳಿಸದಿರೆಲೊ ನಿನ್ನ ನೆರಳನಿತರರ ಮೇಲೆ ।\nಬಾಳಿಕೊಳುಗವರು ತಂತಮ್ಮ ಬೆಳಕಿನಲಿ ॥\nಮೇಲುಬೀಳುಗಳಾರ್ಗದೆಂತೊ ನೀನೇನರಿವೆ? ।\nತಾಳದಿರು ಗುರುತನವ - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೪ ॥",
    kannada_explanation:
      "ನಿನ್ನ ನೆರಳಿನ ಛಾಯೆಯನ್ನು ಇತರರ ಮೇಲೆ ಬೀಳಿಸದೆ ಇರು. ಅವರು ತಮ್ಮದೇ ಬೆಳಕಿನಲ್ಲಿ ಬಾಳಿಕೊಳ್ಳಲಿ. ಯಾರಿಗೆ ಯಾವುದು ಮೇಲು ಅಥವಾ ಕೀಳು ಎನ್ನುವುದನ್ನು ನೀನು ಏನು ಅರಿತುಕೊಂಡಿದ್ದೀಯೆ? ನೀನು ಗುರು ಪದವಿಯನ್ನು ತಾಳದೆ ಇರು ಎಂದು ಒಂದು ಸೂಕ್ತ ಬುದ್ಧಿವಾದವನ್ನು ನಮಗೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 845,
    english:
      "\"Why do you want the adventure of controlling some other life (apart from yours)? Isn't your load enough? Why do you want to carry other people's burden also? If a bud blooms by itself in a plant, it gives pleasure to everybody. If you force it to your liking, then it may not. Not everything in this world can run according to rules like in a prison.\" - Mankutimma",
    kannada:
      "ಪೆರತೊಂದು ಬಾಳ ನೀನಾಳ್ವ ಸಾಹಸವೇಕೆ? ।\nಹೊರೆ ಸಾಲದೇ ನಿನಗೆ, ಪೆರರ್ಗೆ ಹೊಣೆವೋಗೆ? ॥\nಮರದಿ ನನೆ ನೈಜದಿಂದರಳೆ ಸೊಗವೆಲ್ಲರ್ಗೆ ।\nಸೆರೆಮನೆಯ ಸೇಮವೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೫ ॥",
    kannada_explanation:
      "ಬೇರೊಬ್ಬರ ಬದುಕನ್ನು ಆಳುವ ಆಸೆ ಮತ್ತು ಸಾಹಸ ನಿನಗೇಕೆ? ನೀನು ಹೊತ್ತು ತಂದಿರುವ ನಿನ್ನ ಜೀವನದ ಹೊರೆ ನಿನಗೆ ಸಾಲದೇ? ಅನ್ಯರಿಗೆ ಹೊರೆಯಾಗುವಂತಹ ನಿನ್ನ ಸಲಹೆ ಸಂದೇಶಗಳು ಅವರಿಗೇಕೆ? ಮರದಲ್ಲಿನ ಮೊಗ್ಗು ಸಹಜವಾಗಿ ಅರಳಿದರೆ ಅದು ಸೊಗಸು. ನಿರ್ಬಂಧದಲ್ಲಿ ನಡೆಸುವ ಸೆರೆಮನೆಯ ವಾಸ ಕ್ಷೇಮವೇ? ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾ ಅನ್ಯರ ಜೀವನದಲ್ಲಿ ಹಸ್ತಕ್ಷೇಪ ಮಾಡದಿರುವುದು ಸೂಕ್ತವೆನ್ನುವ ಸಂದೇಶವನ್ನು ನಮಗೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 846,
    english:
      '"What will happen after death? Does one become a bodyless soul? or a ghost? Will there be a different world? Or another birth in this world? Whatever! There is no one who has comeback or brought a message from those who have seen. How does all that effect our life in this world?" - Mankutimma',
    kannada:
      "ಮರಣದಿಂ ಮುಂದೇನು? ಪ್ರೇತವೋ? ಭೂತವೋ? ।\nಪರಲೋಕವೋ? ಪುನರ್ಜನ್ಮವೊ? ಅದೇನೋ! ॥\nತಿರುಗಿ ಬಂದವರಿಲ್ಲ, ವರದಿ ತಂದವರಿಲ್ಲ ।\nಧರೆಯ ಬಾಳ್ಗದರಿನೇಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೬ ॥",
    kannada_explanation:
      "ಮರಣದ ನಂತರವೇನು? ನಾವು ಪ್ರೇತವಾಗುತ್ತೇವೇಯೋ, ಭೂತವಾಗುತ್ತೇವೆಯೋ, ಪರಲೋಕಕ್ಕೆ, ಸೇರುತ್ತೇವೆಯೋ ಅಥವಾ ಮತ್ತೆ ಜನ್ಮಪಡೆದುಕೊಳ್ಳುತ್ತೇವೆಯೋ, ಅದೇನೋ ಗೊತ್ತಿಲ್ಲ. ಏಕೆಂದರೆ ಮರಣಹೊಂದಿದವರಾರೂ ಹಿಂತಿರುಗಿ ಬಂದಿಲ್ಲ ಮತ್ತು ನಮಗೆ ಯಾವ ರೀತಿಯ ವರದಿಯನ್ನೂ ನೀಡಿಲ್ಲ. ಆ ವಿಷಯಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳುವುದರಿಂದ, ಇಲ್ಲಿನ ಬದುಕು, ಯಾವ ರೀತಿಯಿಂದಲೂ ಬದಲಾಗುವುದಿಲ್ಲ. ಹಾಗಾಗಿ ಅದರ ಬಗ್ಗೆ ಚಿಂತಿಸುವುದು ಬೇಡ ಎನ್ನುವ ಸಂದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 847,
    english:
      '"If the hard work put in agriculture is right, then is there any doubt about the produce? You must lead the life in this world thus (to the best standards of morality). What can the after life have for you then? The life here is the gates to the life later." - Mankutimma',
    kannada:
      "ನೆಲದ ಬೇಸಾಯ ತಾನೊಳ್ಳಿತಾಗಿರೆ ನಿನಗೆ ।\nಫಲದೆಂತಹುದೆಂಬ ಶಂಕೆಗೆಡೆಯುಂಟೆ? ॥\nಒಳಿತರೊಳೆ ನೀಂ ಬಾಳು; ಪರವದೆಂತಿರ್ದೊಡೇಂ? ।\nಇಳೆಯೆ ಬಾಗಿಲು ಪರಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೭ ॥",
    kannada_explanation:
      "ಹೇಗೆ, ರೈತ ತನ್ನ ನೆಲದ ಬೇಸಾಯವನ್ನು ಸೂಕ್ತ ರೀತಿಯಲ್ಲಿ ಮಾಡಿದ್ದರೆ ‘ ಫಸಲು ಹೇಗೆ ಬರುತ್ತದೋ? ‘ ಎನ್ನುವ ಅನುಮಾನ ಪದಬೇಕಾಗಿಲ್ಲವೋ, ಅದೇ ರೀತಿ ಒಳ್ಳೆಯತನದಿಂದ ಬಾಳಿದರೆ ಬದುಕಿನ ನಂತರ ಎಂತಹ ಫಲಗಳು ಸಿಗುತ್ತವೆಯೋ ಎಂದು ಚಿಂತಿಸುವ ಅಗತ್ಯವೇ ಇಲ್ಲ, ಏಕೆಂದರೆ ಈ ಭೂಮಿಯ ಜೀವನವೇ ಪರಕ್ಕೆ ಬಾಗಿಲು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 848,
    english:
      '"The immovable Himalaya is like the Creator. The flowing Ganges is like the illusion of this creation. The world is the molten form of the solid matter of the universal truth. One who knows how to see the truth as well as the world in two different views (and balance them) will find peace inside." - Mankutimma',
    kannada:
      "ಸ್ಥಿರ ಹಿಮಾಚಲ ಬೊಮ್ಮ, ಚರ ಜಾಹ್ನವಿಯೆ ಮಾಯೆ ।\nಪರಸತ್ತ್ವ ಘನದ ವಿದ್ರವರೂಪ ವಿಶ್ವ ॥\nಪರಮಾರ್ಥಕೊಂದಕ್ಷಿ ವೆವಹಾರಕಿನ್ನೊಂದು ।\nಎರಡುಮೊಂದಾಂತರ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೮ ॥",
    kannada_explanation:
      "ಆಚಲವಾದಂತಹ ಹಿಮಾಲಯ ಪರ್ವತದಂತೆ ಪರಬ್ರಹ್ಮ ವಸ್ತುವು. ಜಗತ್ತಿನ ಮಾಯೆಯೇ ಆ ಹಿಮಾಲಯ ಪರ್ವತದಿಂದ ಹೊರಡುವ ಜಾಹ್ನವಿ,ಎಂದರೆ ಗಂಗಾನದಿಯಂತೆ. ಹಾಗೆಯೇ ಪರಸತ್ವ ಎನ್ನುವುದು ಘನರೂಪವಾದರೆ, ಈ ವಿಶ್ವ ಆ ಪರಸತ್ವದ ದ್ರವ ರೂಪ. ಪರಮಾರ್ಥವನ್ನು ನೋಡುವ ಮತ್ತು ಜಗತ್ತಿನ ವ್ಯವಹಾರವನ್ನು ನೋಡುವ ನಮ್ಮ ದೃಷ್ಟಿ ಬೇರೆಬೇರೆಯಾದರೂ ಎರಡರೊಳಗಿರುವ ಅಂತರಂಗದ ಸತ್ವ ಒಂದೇ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 849,
    english:
      '"Grasp this thought with single minded attention. There is no purpose, no explanation to the dance of the Creator. You get though your role in this act even if it means suffering. You must do so without much cribbing - with stiff lips. It is the only way to find peace." - Mankutimma',
    kannada:
      "ಒಮ್ಮನಸಿನಿಂದ ನೀನೀ ತತ್ತ್ವವಂ ಗ್ರಹಿಸು ।\nಬ್ರಹ್ಮಲೀಲೆಗೆ ಗೊತ್ತುಗುರಿ ಲೆಕ್ಕವಿಲ್ಲ ॥\nಸುಮ್ಮನಿರು ನಿನ್ನ ಪಾಡನು ಪಡುತ ತುಟಿ ಬಿಗಿದು ।\nನೆಮ್ಮದಿಗೆ ದಾರಿಯದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೪೯ ॥",
    kannada_explanation:
      "ಏಕಾಗ್ರ ಮನಸ್ಸಿನಿಂದ ನೀನು ಈ ತತ್ವವನ್ನು ಗ್ರಹಿಸು. ಪರಮಾತ್ಮನ ಲೀಲಾವಿನೋದಕ್ಕೆ ಮಿತಿಯಿಲ್ಲ, ಗೊತ್ತು ಗುರಿಯಿಲ್ಲ. ನಿನಗೆ ಸಂದ ಪಾಡನ್ನು ಪಡುತ್ತ ಮೌನವಾಗಿ, ಸುಮ್ಮನೆ, ಶಾಂತವಾಗಿರು. ನೆಮ್ಮದಿಯ ಬದುಕಿಗೆ ಇದೇ ದಾರಿ,ಎಂಬ ಸಂದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 850,
    english:
      '"The world is nothing but the dance of the creator. Every being is part of the dance as one of his body parts. His original energy flames manifest as the action in this world. You are just a carrier of that energy. " - Mankutimma',
    kannada:
      "ನೃತ್ಯವೋ ಬ್ರಹ್ಮನಟರಾಜನದು ಜಗವೆಲ್ಲ ।\nಪ್ರತ್ಯೇಕ ಜೀವದಶೆಯವನಂಗಭಂಗಿ ॥\nಸತ್ಯಸತ್ತ್ವಜ್ವಾಲೆ ವಿಶ್ವಮಾಯಾಲೀಲೆ ।\nಪ್ರತ್ಯಗಾತ್ಮನು ನೀನು - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೦ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತೆಲ್ಲ, ಆ ಪರಬ್ರಹ್ಮನ ನಾಟ್ಯವಿದ್ದಂತೆ. ಇಲ್ಲಿರುವ ಜೀವಿಗಳೆಲ್ಲವೂ ಅವನ ಆ ನಾಟ್ಯದ ಬೇರೆಬೇರೆ ವಿಧದ ಭಂಗಿಗಳು. ಶುದ್ಧಸತ್ವದ ಆ ಬೆಂಕಿಯೇ ಈ ವಿಶ್ವದಲ್ಲಿ ಮಾಯಾಲೀಲೆಯನ್ನು ತೋರುತ್ತಿದೆ. ನೀನು ಕೇವಲ ಆ ಪರಬ್ರಹ್ಮ ವಸ್ತುವಿನ ವಿಸ್ತೃತ ರೂಪವಷ್ಟೆ, ಎಂದು ಒಂದು ಗಹನವಾದ ತತ್ವವನ್ನು ಪ್ರತಿಪಾದಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 851,
    english:
      '"Open your eyes and see the dance of the Creator in his creation. Close your eyes and you will see the immovable pure truth. If you can see both these worlds and balance them both, then you will find peace in the middle of your heart." - Mankutimma',
    kannada:
      "ಕಣ್ದೆರೆದು ನೋಡು, ಚಿತ್ಸತ್ತ್ವಮೂರ್ತಿಯ ನೃತ್ಯ ।\nಕಣ್ಮುಚ್ಚಿ ನೋಡು, ನಿಶ್ಚಲ ಶುದ್ಧ ಸತ್ತ್ವ ॥\nಉನ್ಮುಖನು ನೀನೆರಡು ಜಗಕವಿರುತಿರಲಾಗ ।\nಹೃನ್ಮಧ್ಯದಲಿ ಶಾಂತಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೧ ॥",
    kannada_explanation:
      "ಕಣ್ಣನ್ನು ತೆರೆದು ನೋಡಿದರೆ ಪರತತ್ವದ ಪ್ರತಿ ನಿತ್ಯ ಬದಲಾಗುವ ಕೋಟಿ ಕೋಟಿ ರೂಪದ ಸುಂದರ ನೃತ್ಯ, ಲೀಲಾವಿನೋದ. ಕಣ್ಮುಚ್ಚಿ ನೋಡಿದರೆ ಇಡೀ ಜಗತ್ತನ್ನು ಆವರಿಸಿಕೊಂಡು ಆಳುವ ಶುದ್ಧ ಮತ್ತು ನಿಶ್ಚಲ ಪರತತ್ವದ ದರ್ಶನ . ಹೀಗೆ ನೀನು ಎರಡೂ ಸ್ಥಿತಿಗಳನ್ನು ಸಮಭಾವದಿಂದ ನೋಡಿದರೆ ಮನಸ್ಸಿನಂತರಾಳದಲ್ಲಿ ಶಾಂತಿ ನೆಲೆಸುತ್ತದೆ ಎನ್ನುವುದೇ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 852,
    english:
      '"Every day, every year, every epoch, as time flows - there will be new questions, new tests to mankind. In response to these times, mankind\'s efforts and his evaluation of happiness has changed. Only thing that is constant is the unending energy flow." - Mankutimma',
    kannada:
      "ನವನವ ಪ್ರಶ್ನೆಗಳು, ನವನವ ಪರೀಕ್ಷೆಗಳು ।\nದಿವಸಾಬ್ದಯುಗ ಚಕ್ರ ತಿರುತಿರುಗಿದಂತೆ ॥\nಪ್ರವಹಿಪ್ಪುವದರಂತೆ ಪೌರುಷ ಹಿತಪ್ರಜ್ಞೆ ।\nಅವಿರತದ ಚೈತನ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೨ ॥",
    kannada_explanation:
      "ದಿನ, ವರುಷ ಯುಗಗಳು ಕಳೆದಂತೆ ಮನುಷ್ಯನ ಮನಸ್ಸಿನಲ್ಲಿ ಹೊಸ ಹೊಸ ಪ್ರಶ್ನೆಗಳು ಉದ್ಭವಿಸುತ್ತವೆ ಮತ್ತು ಅವನು ಹೊಸ ಹೊಸ ಪ್ರಯೋಗಗಳನ್ನು ಮಾಡುತ್ತಲೇ ಇರುತ್ತಾನೆ. ಹೀಗೆ ಆತ್ಮಹಿತವನ್ನು ವೃದ್ಧಿಗೊಳಿಸಿಕೊಳ್ಳಲು, ಆ ಪರತತ್ವದ ಚೈತನ್ಯ ನಿರಂತರ ಕೃಷಿ ಮಾಡುತ್ತಲೇ ಇರುತ್ತದೆ ಎನ್ನುವುದೇ ಈ ಮುಕ್ತಕದ ಹೂರಣ.",
  },
  {
    number: 853,
    english:
      '"For one to be completely happy in this world, every body (barring none) should be happy - in totality. Even if one of them is unhappy, his sigh filled with grief will become poisonous and consume (envelope) the entire world." - Mankutimma',
    kannada:
      "ಸಾರ್ವಲೌಕಿಕಸೌಖ್ಯ ನೆಲಸುವನ್ನೆಗಮಿಳೆಯೊ- ।\nಳೊರ್ವನುಂ ಸುಖಿಯಲ್ತು, ದಿಟದಿ. ಪೂರ್ಣದಲಿ ॥\nಒರ್ವನುಬ್ಬಸದ ಬಿಸಿ ವಿಷವಾಯುವಾಗಿ ತಾ ।\nನುರ್ವರೆಯ ಮುಸುಕೀತು - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೩ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಯ ಮೇಲೆ ಸರ್ವಜನರ ಸುಖ ನೆಲೆಗೊಳ್ಳುವ ತನಕ ಎಲ್ಲರೂ ಸುಖಿಗಳು ಎಂದು ಹೇಳಲು ಆಗುವುದಿಲ್ಲ. ಇಲ್ಲಿ ಎಲ್ಲರೂ ಸರ್ವ ಕಾಲಕ್ಕೂ ಸುಖಿಗಳಲ್ಲ ಎನ್ನುವುದು ಸತ್ಯ. ಏಕೆಂದರೆ ಯಾರೋ ಒಬ್ಬನ ಉಬ್ಬಸದ ಉಸಿರು ವಿಷಗಾಳಿಯಾಗಿ ಈ ಜಗತ್ತನ್ನೇ ಆವರಿಸಿಕೊಳ್ಳಬಹುದು ಎಂದು ಹೇಳುತ್ತಾ ಜಗತ್ತಿನ ಮನುಷ್ಯನ ಬದುಕಿನ ಒಂದು ಆಯಾಮವನ್ನು ನಮಗೆ ತೋರಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ. ",
  },
  {
    number: 854,
    english:
      '"Is there a something like universal happiness? What is the path to get that? What are the ways to achieve it? Where can one find a teacher to show us the way? If we embark on a mission to set the past right - will the same actions not become crooked in the future?" - Mankutimma',
    kannada:
      "ಸರ್ವಹಿತವೊಂದುಂಟೆ? ಅದಕೆ ಪಥ ನಮಗುಂಟೆ? ।\nನಿರ್ವಾಹಸಾಧನಗಳೆತ್ತ? ಗುರುವೆತ್ತ? ॥\nಪೂರ್ವವನು ನೆಟ್ಟಗಿಪ ನರಕೃತಿಯಿನಾಗದೇನ್ ।\nಅರ್ವಾಚಿಯಲಿ ಸೊಟ್ಟು? - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲರಿಗೂ ಹಿತವಾದುದು ಎನ್ನುವುದು ಉಂಟೆ? ಇದ್ದರೆ ಅದನ್ನು ಸಾಧಿಸುವ ಹಾದಿ ಯಾವುದು? ಅದನ್ನು ಸಾಧಿಸಲು ನಮಗಿರುವ ಉಪಕರಣಗಳಾವುವು? ನಮಗದನ್ನು ಕಲಿಸುವ ಗುರುವು ಯಾರು? ತಮ್ಮ ಪೂರ್ವವನ್ನು ಸರಿಪಡಿಸಿಕೊಳ್ಳಲು ಮನುಷ್ಯರ ಈಗಿನ ಕರ್ಮಗಳಿಂದ ಸಾಧ್ಯವಿಲ್ಲವೇ? ಹಾಗೆ ಸರಿಪಡಿಸಿಕೊಳ್ಳುವ ಪ್ರಯತ್ನದಲ್ಲಿ ಭವಿಷ್ಯದ ಬದುಕು ಸೊಟ್ಟಗಾಗುವುದಿಲ್ಲವೇನು? ಎನ್ನುವ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುತ್ತಾ, ಕೆಲವು ವಿಚಾರಗಳ ಮಂಥನಕ್ಕೆ ನಮಗೆ ಆಹ್ವಾನವಿತ್ತಂತೆ ಇದೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರ ಈ ಮುಕ್ತಕ.",
  },
  {
    number: 855,
    english:
      '"It is not easy in this human world to understand what is good and what is bad. Some look to the right, some look to the left. If you follow the fickle definition of human happiness - how can one ever find happiness?" - Mankutimma',
    kannada:
      "ಸುಲಭವೇನಲ್ಲ ನರಲೋಕಹಿತನಿರ್ಧಾರ ।\nಬಲಕೆ ನೋಳ್ಪರ್ ಕೆಲರು, ಕೆಲರೆಡಕೆ ನೋಳ್ಪರ್ ॥\nವಿಲವಿಲನೆ ಚಪಲಿಸುವ ಮನುಜಸ್ವಭಾವದಲಿ ।\nನೆಲೆಗೊತ್ತು ಹಿತಕೆಲ್ಲಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೫ ॥",
    kannada_explanation:
      "ಲೋಕದಲ್ಲಿ ಸರ್ವರ ಹಿತವನ್ನು ನಿರ್ಧರಿಸುವುದು ಸುಲಭವೇನಲ್ಲ. ಏಕೆಂದರೆ ಚಪಲತೆಯಿಂದ ಕೂಡಿದ ಚಂಚಲ ಮನಸ್ಸಿನ ಮನುಷ್ಯರಲ್ಲಿ ಕೆಲವರು ಬಲಕ್ಕೆ ನೋಡಿದರೆ ಕೆಲವರು ಎಡಕ್ಕೆ ನೋಡುತ್ತಾರೆ. ಹಾಗಿರುವಾಗ ಆ ಹಿತವನ್ನು ಸಾಧಿಸಲು ನೆಲೆಯೂ ಇಲ್ಲ ಹಾದಿಯೂ ಕಾಣುವುದಿಲ್ಲ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 856,
    english:
      '"The righteousness and the bow of Rama, the wisdom of Krishna and the compassion of Gautama - all these could not eradicate evil/grief from this earth permanently. What can common people do even after a lot of struggling? We must find solace and happiness in just trying." - Mankutimma',
    kannada:
      "ರಾಮಕಾರ್ಮುಕ, ಕೃಷ್ಣಯುಕ್ತಿ, ಗೌತಮಕರುಣೆ ।\nಭೂಮಿಭಾರವನಿಳುಹೆ ಸಾಲದಾಗಿರಲು ॥\nಸಾಮಾನ್ಯರೆನಿತು ತಾಂ ಪೆಣಗಿದೊಡಮೇನಹುದು? ।\nಕ್ಷೇಮವೆಂದುಂ ಮೃಗ್ಯ  - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೬ ॥",
    kannada_explanation:
      "ರಾಮನ ಬಿಲ್ಲು, ಕೃಷ್ಣನ ಯುಕ್ತಿ, ಗೌತಮನ ಕಾರುಣ್ಯಗಳು ಈ ಭೂ ಭಾರವನ್ನಿಳಿಸಲು ಸಾಲದಾಗಿರಲು ಸಾಮಾನ್ಯ ಮನುಷ್ಯರು ಎಷ್ಟು ಹೆಣಗಾಡಿದರೇನು, ಜಗತ್ತಿನ ಕ್ಷೇಮವನ್ನು ಸಾಧಿಸಲಾಗುವುದೇ? ಸರ್ವ ಜನರ, ಸಮನಾದ ಕ್ಷೇಮವೆಂದೂ ಕೈಗೆಟುಕದ ಮರೀಚಿಕೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 857,
    english:
      '"Let the constant endeavor be an end by itself. Action is a savior of mankind. it is the life of this world. If everyone in this world magically became satisfied and there is nothing left to do - wouldn\'t it be the end of story for this world?" - Mankutimma',
    kannada:
      "ಸತತಮಾರ್ಗಣೆ, ಸಿದ್ಧಿಯಂತಿರಲಿ, ಮಾರ್ಗಣೆಯೆ ।\nಗತಿ ಮನುಜಲೋಕಕ್ಕೆ ; ಜಗದ ಜೀವವದು ॥\nಕೃತಕಾಮರೆಲ್ಲರಾದೊಡೆ ಕೃತ್ಯವುಳಿಯದೊಡೆ ।\nಕಥೆಮುಗಿವುದಲ ಜಗಕೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೭ ॥",
    kannada_explanation:
      "ಮನುಜ ಲೋಕದಲ್ಲಿ,’ಸರ್ವಹಿತ ಅಥವಾ ಸರ್ವಸುಖ’ ವನ್ನು ಸಾಧಿಸುವ ವಿಚಾರವನ್ನು ಮುಂದುವರೆಸುತ್ತಾ, ಅದನ್ನು ಸಾಧಿಸುವುದಿರಲಿ, ಅದರ ನಿರಂತರ ಹುಡುಕಾಟವೇ ಮನುಜ ಲೋಕಕ್ಕೆ ಉಳಿದಿರುವ ಗತಿ. ಏಕೆಂದರೆ, ಎಲ್ಲರೂ ತಮಗೆ ಬೇಕಾದುದೆಲ್ಲ ಸಿಕ್ಕಿದೆ, ಮತ್ತೇನೂ ಆಸೆಯಿಲ್ಲ, ಹಾಗಾಗಿ ನಮಗಿನ್ನೇನೂ ಮಾಡಲು ಉಳಿದಿಲ್ಲ ಎಂದು ಯೋಚಿಸಿಬಿಟ್ಟರೆ, ಜಗತ್ತಿನ ಕಥೆಯೇ ಮುಗಿದು ಹೋಗುವುದಲ್ಲ. ಹಾಗಾಗಿ ನಾವು ಬಯಸುವ ‘ ಸರ್ವಹಿತ ಅಥವಾ ಸರ್ವಸುಖ’ ದ ಸ್ಥಿತಿ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಬರುವುದೇ ಇಲ್ಲ ಎಂದು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 858,
    english:
      '"To find happiness, we do work - actions. The consequences of actions are accumulated beyond the present lives. This is the rule that the world runs on. The main source of development in this world is the human desire. But does it every have victory or an end?" - Mankutimma',
    kannada:
      "ಪ್ರಿಯಹಿತಗಳನ್ವೇಷೆಯಿಂ ಕರ್ಮಪರಿಪೋಷೆ ।\nಕ್ರಿಯೆಯ ಪಾರಂಪರ್ಯ ಜನ್ಮಾಂತರೀಯ ॥\nನಿಯತವಿಂತು ಜಗತ್ಪ್ರವರ್ಧನೆಗೆ ನರತೃಷ್ಣೆ ।\nಜಯ ಪೂರ್ಣವೆಂದದಕೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೮ ॥",
    kannada_explanation:
      "ತನಗೆ ಪ್ರಿಯ ಮತ್ತು ಹಿತವಾದದ್ದನ್ನು ಹುಡುಕುವ ಮನುಷ್ಯನ ಕರ್ಮಗಳ ನಿರಂತರ ಪೋಷಣೆ, ಪರಂಪರಾನುಗತವಾಗಿ, ಜನ್ಮಜನ್ಮಾಂತರಗಳಿಂದ ನಡೆಯುತ್ತಿದೆ. ವಿಧಿ ಅಥವಾ ವಿಧಾತ ತನ್ನ ಈ ಜಗತ್ತಿನ ವರ್ಧನೆಗಾಗಿಯೇ ನರನ ಮನಸ್ಸಿನಲ್ಲಿ ಬಯಕೆಗಳನ್ನು ಹುಟ್ಟಿಸುತ್ತದೆ(ತ್ತಾನೆ). ಈ ಬಯಕೆಗಳು ಮತ್ತು ಅವುಗಳ ಪೂರೈಕೆಗೆ ನಡೆಯುವ ಪ್ರಯತ್ನಗಳು ಅವ್ಯಾಹತವಾಗಿ ನಡೆಯುತ್ತಿರುವುದರಿಂದ, ‘ಅವನಿಗೆ ಸಂಪೂರ್ಣ ಜಯ ಎಂದು ಸಿಗುವುದೋ’ ಎಂದು ಒಂದು ಅದ್ಬುತ ವಿಚಾರವನ್ನು ನಮ್ಮ ಮುಂದೆ ಇಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 859,
    english:
      "\"Nature always exerts enough force to correct man's course. On his part, man always tries to shape nature to his advantage/liking. A farmer, a metallurgist, a sculptor, an automobile engineer - Aren't they all exerting force to change nature?\" - Mankutimma",
    kannada:
      "ಪ್ರಕೃತಿಯನವರತ ಮನುಜನ ತಿದ್ದುತಿರುವಂತೆ ।\nವಿಕೃತಿಗೊಳಿಸುವನವನುಮ್ ಆಕೆಯಂಗಗಳ ॥\nಭೂಕೃಷಿಕ ರಸತಂತ್ರಿ ಶಿಲ್ಪಿ ವಾಹನಯಂತ್ರಿ ।\nವ್ಯಾಕೃತಿಸರೇನವಳ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೫೯ ॥",
    kannada_explanation:
      "ಪ್ರಕೃತಿ ನಿರಂತರವಾಗಿ ಮನುಷ್ಯನನ್ನು ತಿದ್ದುತ್ತಿರುವಂತೆಯೇ, ಮನುಷ್ಯ ಪ್ರಕೃತಿಯನ್ನು ವಿರೂಪಗೊಳಿಸುತ್ತಾನೆ. ಭೂಮಿಯನ್ನು ಕೃಷಿ ಮಾಡುವವನು, ಭೂ ಗರ್ಭದಿಂದ ರಾಸಾಯನಿಕಗಳನ್ನು, ಅದಿರುಗಳನ್ನು ಶೋಧಿಸುವವನು, ಲೋಹ ಮತ್ತು ಕಲ್ಲುಗಳಿಂದ ಶಿಲ್ಪಗಳನ್ನು ಮಾಡುವವನು, ತನ್ನ ಯಾತ್ರೆಗಾಗಿ ವಾಹನಗಳನ್ನು ತಯಾರುಮಾಡುವವನು ಎಲ್ಲರೂ ಈ ಪ್ರಕೃತಿಯನ್ನು ವಿಕೃತ ಗೊಳಿಸುವುದಿಲ್ಲವೇನು? ಎಂದು ಮನುಷ್ಯ ಮತ್ತು ಪ್ರಕೃತಿಯ ನಡುವಿನ ಪರಸ್ಪರ ಸಂಬಂಧವನ್ನು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 860,
    english:
      '"nature provokes man with desires. To satisfy this desire, he creates machines and mechanisms with his intellect. By the grace of this divine sculptor (through his energy residing in man) nature is altered now and then. This leads to the repeat of the cycle. Nature and mankind thus have an symbiotic relation." - Mankutimma',
    kannada:
      "ಸೃಷ್ಟಿ ಚೋದನೆಗಳಿಂ ನರನೊಳಿಷ್ಟಗಳುದಯ- ।\nವಿಷ್ಟಸಿದ್ದಿಗೆ ಯಂತ್ರತಂತ್ರಗಳ ಯುಕ್ತಿ ॥\nತ್ವಷ್ಟೃಕುಶಲದೆ ಸೃಷ್ಟಿ ವಿಕೃತಿ; ಇಂತನ್ಯೋನ್ಯ ।\nಸ್ಪೃಷ್ಟರ್ ಪ್ರಕೃತಿ ನರರು - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೦ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನ ಮನಸ್ಸಿನಲ್ಲಿ ಉದ್ಭವವಾಗುವ ಆಸೆಗಳು ಸೃಷ್ಟಿಯ ಪ್ರೇರಣೆ ಮತ್ತು ಪ್ರಚೋದನೆಯಿಂದಲೇ ಆಗುತ್ತದೆ. ಹಾಗೆ ಉದ್ಭವವಾದ ಅವನ ಇಷ್ಟಗಳನ್ನು ಪೂರೈಸಿಕೊಳ್ಳಲು ಸಾಧನಗಳನ್ನೂ ಪ್ರಕೃತಿಯೇ ನಿರ್ಮಿಸಿದೆ. ಆ ಸಾಧನಗಳನ್ನು ಉಪಯೋಗಿಸಿಕೊಂಡು ಮನುಷ್ಯ, ತಂತ್ರ ಮತ್ತು ಯುಕ್ತಿಗಳಿಂದ ತನ್ನ ಇಷ್ಟಗಳನ್ನು ಪೂರೈಸಿಕೊಳ್ಳುತ್ತಾನೆ. ಹೀಗೆ ಸೃಷ್ಟಿಕರ್ತನ ಕುಶಲತೆಯಿಂದಲೇ ಮಾನವನ ಮೂಲಕ ಸೃಷ್ಟಿ ವಿಕೃತಗೊಳ್ಳುತ್ತದೆ. ಹೀಗೆ ಪ್ರಕೃತಿ ಮತ್ತು ಮಾನವರ ಸಂಬಂಧ ಅನ್ಯೋನ್ಯವಾಗಿದೆ ಎಂದು ಮನುಷ್ಯ ಮತ್ತು ಪ್ರಕೃತಿಯ ಸಂಬಂಧವನ್ನು ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ .",
  },
  {
    number: 861,
    english:
      '"Human story is nothing more than  a retelling of the past. Poetry and Science are following the same rules of the universe. New culture is only an excerpt of the old ones. The new and old grow depending on each other. The old needs the new to keep themselves alive and the new needs old to take form." - Mankutimma',
    kannada:
      "ದಿವ್ಯ ಚರಿತಂಗಳ ಪ್ರತ್ಯುಕ್ತಿ ನರಚರಿತೆ ।\nಕಾವ್ಯ ವಿಜ್ಞಾನಗಳ್ ನಿಗಮಾನುಸರಗಳ್ ॥\nನವ್ಯಸಂಪದವಾರ್ಷಸಂಪದುದ್ಧೃತವಿಂತು ।\nಸವ್ಯಪೇಕ್ಷಗಳುಭಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೧ ॥",
    kannada_explanation:
      "ಇಂದಿನ ಮನುಷ್ಯರ ಜೀವನ ಹಿಂದಿನ ದಿವ್ಯಪುರುಷರ ಮಹೋನ್ನತವಾದ ನಡವಳಿಕೆಯ ಪ್ರತಿಬಿಂಬದಂತಿದೆ. ಇಂದಿನ ಕಾವ್ಯ ಮೀಮಾಂಸೆಗಳು ನಿಗಮವನ್ನು ಅನುಸರಿಸಿಯೇ ಬರೆಯಲ್ಪಟ್ಟಿದೆ . ಇಂದಿನ ಸಕಲ ಸಂಪತ್ತೂ ಋಷಿಮುನಿಗಳು ಮತ್ತು ನಮ್ಮ ಪೂರ್ವಜರ ಬದುಕಿನ ಮೇಲೆ ಸಮಗ್ರವಾಗಿ ಬೆಳೆದು ನಿಂತಿದೆ. ಹೀಗೆ ನವೀನ ಮತ್ತು ಪುರಾತನಗಳೆರಡೂ ಪರಸ್ಪರಾಧಾರಪಟ್ಟಿವೆ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಬದಲಾಗುತ್ತಿರುವ ಸ್ಥಿತಿಯನ್ನು, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 862,
    english:
      '"If you seek to find happiness in whatever state you are in - then you must first understand that everything here has greater meaning in the context of the universe. Once you start evaluating the profits and losses of this world on an absolute scale of the universe, you will be able to achieve balance in life in this world." - Mankutimma',
    kannada:
      "ಇರುವುದರೊಳಾದನಿತು ಸೊಗವ ಪಡೆವೊಡೆ ಲೋಗರ್ ।\nಅರಿಗೆ ಮೊದಲ್ ಇಹಕೆ ಪರದಾವರಣವಿಹುದನ್ ॥\nಪರಮಾರ್ಥಗಣಿತದಿಂದಿಹದರ್ಥಗಳನೆಣಿಸೆ ।\nಸರಿ ಲೋಕಬಾಂಧವ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೨ ॥",
    kannada_explanation:
      "ಇರುವುದರಲ್ಲಿ ಆದಷ್ಟು ಆನಂದವನ್ನು ಪಡೆಯಲು ಮೊದಲು, ಇಹಕ್ಕೆ ಎಂದರೆ, ಪ್ರಪಂಚವನ್ನು ಆವರಿಸಿಕೊಂಡಿರುವ ಪರವನ್ನು ಅರಿಯುವುದು ಅವಶ್ಯಕ. ಪರಮಾರ್ಥದ ಲೆಕ್ಕಾಚಾರಗಳಿಂದ ನಮ್ಮ ಈ ಜಗತ್ತಿನ ಬಾಳನ್ನು ಅರ್ಥೈಸಿಕೊಳ್ಳಲು ಪ್ರಯತ್ನಪಟ್ಟರೆ, ನಮ್ಮ ಮತ್ತು ಈ ಲೋಕದ ಭಾಂಧವ್ಯದ ಸ್ವರೂಪ ನಮಗೆ ಅರ್ಥವಾಗುತ್ತದೆ ಎಂದು ವಿವರಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 863,
    english:
      '"A blind old lady may give a beech nut to her grandson thinking (and telling) that it is an almond. That does not make it sweet. Does it? Is it just enough to have all the good intentions at heart? Is it wise? Is it the right thing? Can great things (like getting elixir which required the churning of the ocean) get done just like that (by god intentions alone)?" - Mankutimma',
    kannada:
      'ಮುದಿಕುರುಡಿ ಹೊಂಗೆಯನು "ಬಾದಾಮಿ, ಕೋ" ಯೆನುತ ।\nಪದುಳದಿಂ ಮೊಮ್ಮಂಗೆ ಕೊಡಲು ಸಿಹಿಯಹುದೆ? ॥\nಹೃದಯವೊಳಿತಾದೊಡೇಂ? ತಿಳಿವಿಹುದೆ? ಜಾಣಿಹುದೆ? ।\nಸುಧೆ ಬಂತೆ ಸುಲಭದಲಿ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೩ ॥',
    kannada_explanation:
      'ಮುದುಕಿಯಾದ ಕುರುಡಿ ಮೊಮ್ಮಗನಮೇಲೆ ಪ್ರೀತಿ ಮತ್ತು ಅಕ್ಕರೆಯಿಂದ "ಬಾದಾಮಿಯನ್ನು ತೆಗೆದುಕೋ" ಎಂದು ಹೊಂಗೆಯ ಬೀಜವನ್ನು ಕೊಟ್ಟರೆ ಆ ಹೊಂಗೆಯ ಬೀಜ ಬಾದಾಮಿಯಂತೆ ಸಿಹಿಯಾಗಿರಲು ಸಾಧ್ಯವೇ? ಮನಸ್ಸು ಒಳ್ಳೆಯದಾದರೇನು,ಅಂತಹ ಮನಸ್ಸಿನಿಂದ ಕಾರ್ಯಮಾಡುವಾಗ ಅರಿವು ಮತ್ತು ಜಾಣತನವಿಲ್ಲದಿದ್ದರೆ, ಪ್ರಯೋಜನವಿಲ್ಲ. ಸಮುದ್ರ ಮಂಥನದಲ್ಲಿ ಕಡೆಗೆ ಬಂದದ್ದು ಅಮೃತವೇ ಆದರೂ ಅದು ಸುಲಭಕ್ಕೆ ಬಂತೇ? ಎಂದು, ಸರ್ವಕಾಲಕ್ಕೂ ಸೂಕ್ತವಾದ ವಿಚಾರವನ್ನು ಮಂಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 864,
    english:
      '"What is the result of everyone in this world being in pursuit of happiness? See, It\'s just conflict. Man has engaged in conflict much like the animals every where. What else can be expected to happen then? The forest fire will cease only after turning the entire forest into ashes. Hatred is also thus." - Mankutimma',
    kannada:
      "ಜಗದ ಸೊಗದರಸಿಕೆಯ ಫಲ, ನೋಡು, ಬರಿ ಕಲಹ ।\nಮೃಗಗಳಾವೇಶಗೊಳಲಿಪ್ಪುದಿನ್ನೇನು? ॥\nಮುಗಿಯುವುದು ಕಾಳ್ಗಿಚ್ಚು ವನ ಬೂದಿಯಾದಂದು ।\nಹಗೆತನವುಮಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೪ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿನ ಜೀವನದಲ್ಲಿ, ಸುಖ, ಸಂತೋಷ, ಆನಂದ ಮುಂತಾದವುಗಳ ಹುಡುಕುವಿಕೆಯಿಂದ ಕೇವಲ ಕಲಹ, ಜಗಳಗಳು ಉಂಟಾಗಿವೆ. ಪಾಶವೀ ಪ್ರವೃತ್ತಿಯಿಂದ ಮತ್ತೇನನ್ನು ತಾನೇ ಸಾಧಿಸಲು ಸಾಧ್ಯ? ಕಾಡಿನಲ್ಲಿನ ಬೆಂಕಿ ಕಾಡನ್ನು ಸಂಪೂರ್ಣ ಸುಟ್ಟು ಬೂದಿಯಾಗಿಸದ ಹೊರತು ತಣ್ಣಗಾಗುವುದಿಲ್ಲ. ಹಾಗಾಗಿ ಆನಂದದಿಂದ ಇರಬೇಕಾದರೆ ಹಗೆತನವನ್ನು ಬಿಡು ಎಂದು ಆದೇಶಮಾಡಿದ್ದಾರೆ ಗುಂಡಪ್ಪನವರು ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 865,
    english:
      '"When the summer heat subsides and earth receives showers, there will be fresh sprouts all around making everyone happy. Gold also gets its luster only after heated in the furnace. Our lives are also thus. It gets purified by the tears of misery. After that there will be a new beginning of happiness." - Mankutimma',
    kannada:
      "ಉರಿಯಾರಿ ಮಳೆಗರೆಯೆ ಮರಳಿ ಸಸಿಯೇಳಿವುದು ।\nಮರುಗನೊಂದುವುದು ಪೊನ್ ಪುಟ ಕಾದ ಬಳಿಕ ॥\nನರಜೀವವಂತು ಶುಚಿಯಹುದು ದುಃಖಾಶ್ರುವಿಂ ।\nತರುವಾಯ ಪುನರುದಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೫ ॥",
    kannada_explanation:
      "ಹಾಗೆ ಮನುಷ್ಯ-ಮನುಷ್ಯರ ನಡುವಿನ ಪಾಶವೀ ಪ್ರವೃತ್ತಿಯಿಂದ ಉಂಟಾದ ಹಗೆತನದಿಂದ, ‘ಸರ್ವನಾಶ’ವಾದರೂ,’ಶಾಶ್ವತನಾಶ’ವಾಗದೆ, ಬಿಸಿಲಿನ ದಗೆಗೆ ಉರಿದುಹೋದ ಇಳೆಯ ಸಸಿಗಳೆಲ್ಲಾ, ಬೇಸಿಗೆ ಕಳೆದು, ಮಳೆ ಬೀಳಲು ಮತ್ತೆ ಚಿಗುರುವಂತೆ, ಅಧಿಕ ಶಾಖದಲ್ಲಿ ಕಾಯಿಸಲ್ಪಟ್ಟ ಹೊನ್ನು ಮತ್ತೆ ಅಧಿಕ ಮೆರುಗಿನಿಂದ ಥಳಥಳಿಯುವಂತೆ, ತನ್ನ ಅಹಂಕಾರದ ಬೇಗೆಯಲ್ಲಿ ಬೆಂದ ಮಾನವ ಜೀವಿ, ಪಶ್ಚಾತ್ತಾಪದ ಕಣ್ಣೀರಿನಿಂದ, ಹಗುರಾಗಿ, ಶುದ್ಧನಾಗಿ ಮತ್ತೆ ಹೊಸತನವನ್ನು ತನ್ನ ಜೀವನದಲ್ಲಿ ತುಂಬಿಕೊಳ್ಳುತ್ತಾನೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಸನ್ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 866,
    english:
      '"For the soul to be happy, it must reside in a healthy happy body. All the advances in science, organizations and nations with their latest inventions and discoveries will make living in this world prosperous." - Mankutimma',
    kannada:
      "ಆತುಮದ ಸಂಸ್ಥಿತಿಗೆ ದೈಹಿಕಸಮಾಧಾನ; ।\nಭೌತವಿಜ್ಞಾನದಾ ರಾಷ್ಟ್ರ ಸಂಸ್ಥೆಗಳಾ ॥\nನೂತನ ವಿವೇಕಪ್ರಯೋಗಗಳಿನಾದೀತು ।\nಭೂತಿಸಂಪದ ಜಗಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೬ ॥",
    kannada_explanation:
      "ಆತ್ಮದ ಸುಸ್ಥಿತಿಗೆ ದೇಹ ಸಮಾಧಾನವಾಗಿರಬೇಕು. ಭೌತಿಕ ವಿಜ್ಞಾನದ ಪ್ರಯೋಗಗಳಿಂದ, ಹೊಸ ಹೊಸ ಸಾಧನಗಳನ್ನು ಕಂಡುಹಿಡಿಯುತ್ತಾ ರಾಷ್ಟ್ರಗಳು ಮತ್ತು ಆ ರಾಷ್ಟ್ರಗಳಲ್ಲಿನ ಸಂಸ್ಥೆಗಳು ಸಂಪತ್ತನ್ನು ಸೃಷ್ಟಿಸಿ ಜನರ ಸುಖಸಾಧನಗಳಾಗಿಸುತ್ತಾರೆ ಎಂದು, ಜಗತ್ತಿನಲ್ಲಿ ಮನುಷ್ಯನ ‘ ಸುಖಸಾಧನಗಳ ‘ ಹುಡುಕುವಿಕೆಯ ಮತ್ತೊಂದು ಆಯಾಮವನ್ನು ಪರಿಚಯಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 867,
    english:
      '"To try is our duty. Only when one tries, he learns. He will know what is good for himself. This knowledge is the fruit of trying. Only when you try often and be persevere will the soul grow in strength. To try is the only way to get educated." - Mankutimma',
    kannada:
      "ಯತನ ಕರ್ತವ್ಯವದು, ನಮಗೆ ವಿದ್ಯಾಭ್ಯಾಸ ।\nಹಿತಪರಿಜ್ಞಾನ ಯತ್ನಾನುಭವ ಫಲಿತ ॥\nಸತತಯತ್ನದಿನಾತ್ಮ ಶಕ್ತಿ ಪರಿವರ್ಧಿಪುದು ।\nಯತನ ಜೀವನಶಿಕ್ಷೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೭ ॥",
    kannada_explanation:
      "ಪ್ರಯತ್ನಪಡುವುದು ಕರ್ತವ್ಯ. ಅದು ನಮಗೆ ಅದೊಂದು ಕಲಿಕೆಯ ಮಾರ್ಗ. ಹಿತವಾದ ಪರಿಜ್ಞಾನದ ವೃದ್ಧಿಯೇ, ಪ್ರಯತ್ನದ ಅನುಭವದಿಂದ ಸಿಗುವ ಫಲಿತ. ಬದುಕಿನಲ್ಲಿ ಸತತವಾದ ಪ್ರಯತ್ನದಿಂದ ಆತ್ಮಶಕ್ತಿಯ ವೃದ್ಧಿಯಾಗುವುದು. ಸತತವಾಗಿ ಪ್ರಯತ್ನವನ್ನು ಪಡುವುದೇ ಜೀವನದಲ್ಲಿ ಶಿಕ್ಷೆಯಂತೆ ಎನ್ನುತ್ತಾರೆ ಡಿವಿಜಿಯವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 868,
    english:
      "\"Don't think that your small efforts of half a day will not do any impact. When such small efforts all come together, then life becomes beautiful. Doesn't the small fruit from a tree on the path quench your hunger a bit? Is the small jaaji (variety of jasmine) with mild fragrance not capable of giving you \" - Mankutimma",
    kannada:
      "ಅರೆದಿನದ ನಮ್ಮ ಯತ್ನದಿನದೇನೆನ್ನದಿರು ।\nಕಿರಿದುಮೊಡಗೂಡಿರಲು ಸಿರಿಯಹುದುಬಾಳ್ಗೆ ॥\nಪರಿಪೋಷಿಸದೆ ನಿನ್ನೊಡಲ ದಾರಿಮರದ ಫಲ? ।\nಕಿರುಜಾಜಿ ಸೊಗಕುಡದೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೮ ॥",
    kannada_explanation:
      '‘ನಮ್ಮದು ಅಲ್ಪ ಪ್ರಯತ್ನ, ಇದರಿಂದ ಏನಾಗಬಹುದು ಮಹಾ’ ಎನ್ನುವ ಭಾವ ಬೇಡ. ಏಕೆಂದರೆ ಚಿಕ್ಕ ಚಿಕ್ಕ ಸಾಧನೆಗಳಿಂದಲೇ ಬಾಳು ಸಂವೃದ್ಧವಾಗುತ್ತದೆ. "ಸಾಲುಮರಗಳು ನಮಗೆ ನೆರಳನ್ನು ನೀಡುವುದಿಲ್ಲವೇ? ಜಾಜಿಯ ಹೂವು ಸಣ್ಣದಾದರೂ ಸುಗಂಧವನ್ನು ನೀಡುವುದಿಲ್ಲವೇ?" ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ನಮ್ಮ ಕಿಂಚಿತ್ ಕೃತಿಯಿಂದಲೂ ಬಾಳಿಗೆ ಒಂದು ಅರ್ಥವನ್ನು ಕಂಡುಕೊಳ್ಳಬಹುದು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 869,
    english:
      '"Searching (striving) for the answer is important. Not the result. What one gets finally is a different matter altogether. Is there a person who can claim that he can get heaven to earth? It is enough if one can find a acceptable solution without obstacles that involves everyone sharing and caring about each other. That is nothing short of heaven and is the great ideal to live by." - Mankutimma',
    kannada:
      "ಮಾರ್ಗಣೆಯೆ ಮುಖ್ಯ; ಲಭ್ಯದ ಮಾತದಂತಿರಲಿ ।\nಸ್ವರ್ಗವನು ಭುವಿಗಿಳಿಸಬಲ್ಲವನದಾರು? ॥\nಅರ್ಗಲ ವಿಹೀನ ಸರ್ವಾರ್ಥ ಸಹಭಾಗಿತೆಯೆ ।\nಅರ್ಘಾರ್ಹತತ್ತ್ವವೆಲೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೬೯ ॥",
    kannada_explanation:
      "ಎಲ್ಲರೂ ಎಲ್ಲಾ ಕಾಲಕ್ಕೂ ಸುಖದ ಸಾಧನಗಳನ್ನು ಹುಡುಕುವುದೇ ಮುಖ್ಯ. ಅದರಿಂದ ಏನು ಸಿಕ್ಕಿತು ಅಥವಾ ಇಲ್ಲ ಎನ್ನುವ ಮಾತು ಒತ್ತಟ್ಟಿಗಿರಲಿ. ಎಲ್ಲಾ ಸುಖಗಳ ತಾಣವಾದ ಸ್ವರ್ಗವನು ಈ ಭೂಮಿಯಮೇಲೆ ತರಬಲ್ಲವನು ಯಾರು? ಜಗತ್ತಿನಲ್ಲಿರುವ ಸುಖಸಾಧನಗಳನ್ನು, ಅಬಾಧಿತವಾಗಿ ಅಡೆತಡೆಯಿಲ್ಲದೆ ಸಮಾನವಾಗಿ ಎಲ್ಲರೂ ಹಂಚಿಕೊಂಡು ಬಾಳುವುದೇ ಅತ್ಯುತ್ತಮ ತತ್ವ ಎನ್ನುತ್ತಾರೆ, ಸನ್ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 870,
    english:
      '"About the elixir that the Gods drink - is it all sweet or has traces of sour and salt? In the food of this world, there is definitely a mixture of all six tastes. If there is absolutely not bitterness - not even an grain of it, then man would spend his entire life sleeping. Isn\'t it?" - Mankutimma',
    kannada:
      "ದಿವಿಜಸುಧೆ ಬರಿಮಧುವೊ; ಹುಳಿಯುಪ್ಪು ಮಿಶ್ರಿತವೊ? ।\nಅವನಿಯುಣಿಸಿನಲಿ ಷಡ್ರಸ ತಪ್ಪದಿಹುದು ॥\nಲವಲೇಶಮಾನುಮಿರದಿರೆ ಕಯ್ಪು  ಜೀವನದಿ ।\nಪವಳಿಸಿರನೇ ನರನು? - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೦ ॥",
    kannada_explanation:
      "ದೇವಲೋಕದ ಅಮೃತ ಬರೀ ಸಿಹಿಯೋ ಹುಳಿಯುಪ್ಪುಮಿಶ್ರಿತವೋ?, ಗೊತ್ತಿಲ್ಲ. ಆದರೆ ಭೂಮಿಯ ಆಹಾರದಲ್ಲಿ ಷಡ್ರಸಗಳು ತಪ್ಪದೆ ಇರುವುದು. ಬದುಕಿನ ಅನುಭವದಲ್ಲಿ ಎಲ್ಲವೂ ಸವಿಯಾಗಿ ಸ್ವಲ್ಪವಾದರೂ ಕಹಿ ಇರದೇ ಇದ್ದರೆ, ಮನುಷ್ಯ ಸದಾ ಮಲಗಿ ನಿದ್ರಿಸದೆ ಇರುವುದ್ದಿಲ್ಲವೇ? ಎಂದು ಪ್ರಶ್ನಿಸುತ್ತಾ ಮಿಶ್ರ ಅನುಭವಗಳ ಸೂಕ್ತತೆಯನ್ನು ಮತ್ತು ಅವಶ್ಯಕತೆಯನ್ನೂ ಸಹ ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರುಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 871,
    english:
      '"Who deserves what? Who should not get what? One must make an attempt to learn this secret. There are multiple uses of this knowledge of rightly assigning causes for events and thereby determining the deservedness of people. If one does not understand it properly, then it will only encourage stealing." - Mankutimma',
    kannada:
      "ಆರಿಗಾವುದು ತಕ್ಕುದಾರಿಗಾವುದು ದಕ್ಕ- ।\nದೀ ರಹಸ್ಯದಿನಾದ ಸಾಹ್ಯವುಪಕಾರ ॥\nತಾರತಮ್ಯವಿವೇಕವರಿಯದಾ ಸಂಸ್ಕಾರ ।\nಪ್ರೇರಕವೊ ಚೌರ್ಯಕ್ಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೧ ॥",
    kannada_explanation:
      "ಯಾರು ಯಾರಿಗೆ ಏನು ತಕ್ಕುದ್ದೋ ಅವರವರಿಗೆ ಅದು ದಕ್ಕುತ್ತದೆ. ಆದರೆ ಯಾರಿಗೆ ಏನು ಸೂಕ್ತವಾದದ್ದು ಮತ್ತು ಯಾರಿಗೆ ಏನು ದಕ್ಕುತ್ತದೆ ಎನ್ನುವುದು ರಹಸ್ಯವಾಗಿರುವುದು. ಆ ರಹಸ್ಯವನ್ನು ಅರಿತರೆ ನಮಗೆ ಉಪಕಾರವಾಗುತ್ತದೆ. ನಾವು ಬಯಸಿದ್ದು ಮತ್ತು ನಾವು ಪಡೆದಿದ್ದರ ನಡುವಿನ ಅಂತರವನ್ನು ಅರಿತರೆ ಸಂಸ್ಕಾರ ಬೆಳೆಯುತ್ತದೆ. ಹಾಗೆ ಅರಿಲಾಗದಿದ್ದರೆ, ನಮಗೆ ಸಿಗದ ವಸ್ತುವನ್ನು ಪಡೆಯಲು ಕಳ್ಳತನಮಾಡಲು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸುತ್ತದೆ, ಎಂದು ಉಲ್ಲೇಖ ಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 872,
    english:
      '"A hut is nothing more than a few dried straw a few sticks. It is very easy to plant such thoughts in the minds of people who are happily living in the hut. It is easy to make them feel miserable with their present state and wish for more. You would have disturbed the peace and happiness in that household. How are you planning to give it back?" - Mankutimma',
    kannada:
      "ಗುಡಿಸಲೇನೊಣಹುಲ್ಲು ಕಡ್ಡಿ ಮಣ್ಣೆನ್ನುತಲಿ ।\nಬಡವನಲಿ ಕೊರತೆಗಳ ನೆಡುವುದರಿದಲ್ಲ ॥\nಕೆಡಿಸಿದಾ ಗುಡಿಸಿಲಿನ ನೆಮ್ಮದಿಯ ಮತ್ತೆಂತು ।\nಕೊಡಲಹುದವಂಗೆ ನೀಂ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೨ ॥",
    kannada_explanation:
      "ಗುಡಿಸಲನ್ನು ‘ ಅದೇನು ಮಹಾ!!! ಒಣಹುಲ್ಲಿನಿಂದ, ಕಡ್ಡಿ ಮಣ್ಣಿನಿಂದ’ ಕಟ್ಟಿರುವುದು ಎಂದು ತಾತ್ಸಾರದಿಂದ ಅದರಲ್ಲಿ ವಾಸಿಸುವ ಬಡವನನ್ನು ಹೀನಾಯವಾಗಿ ಕಂಡು ಆ ಗುಡಿಸಲನ್ನು ಕೆಡವಿ ಕೆಡಿಸಿದರೆ, ಆ ಗುಡಿಸಿಲಿನಲ್ಲೇ ಅವನಿಗೆ ಸಿಗುತ್ತಿದ್ದ ನೆಮ್ಮದಿಯನ್ನು, ಮತ್ಯಾವುದರಿಂದಲಾದರೂ, ಅವನಿಗೆ ಕೊಡಲಾಗುತ್ತದೆಯೇ? ಎಂದು, ಅವರವರ ಸುಖ ಸಾಧನ ಅವರವರಿಗೆ ಸೂಕ್ತ ಎನ್ನುವಂತಹ ಸೂತ್ರವನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 873,
    english:
      '"Is it called helping when you wake up a tired person sleeping happily on the floor to send him searching for a bed to sleep on? With the intension of helping, one must not disturb the peace and happiness of someone. It is not easy to do good." - Mankutimma',
    kannada:
      "ಬಳಲಿ ನೆಲದಲಿ ಮಲಗಿ ಮೈಮರೆತು ನಿದ್ರಿಪನ ।\nಕುಲುಕಿ ಹಾಸಿಗೆಯನರಸೆನುವುದುಪಕೃತಿಯೆ? ॥\nಒಳಿತನೆಸಗುವೆನೆಂದು ನೆಮ್ಮದಿಯ ನುಂಗದಿರು ।\nಸುಲಭವಲ್ಲೊಳಿತೆಸೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೩ ॥",
    kannada_explanation:
      "ಯಾರೋ ಒಬ್ಬ ದುಡಿದು ಸುಸ್ತಾಗಿ, ನೆಲದಮೇಲೆ ಮಲಗಿ ನಿದ್ರಿಸುತ್ತಿರುವವನನ್ನು ಅಲುಗಾಡಿಸಿ, ಎಬ್ಬಿಸಿ, ಹಾಸಿಗೆಯನ್ನು ಹುಡುಕಿಕೊಂಡು ಮಲಗಿಕೋ ಎಂದು ಹೇಳುವುದು ಉಪಕಾರವೇನು? ಉಪಕಾರಮಾಡುವೆ ಎಂದು ಪರರ ನೆಮ್ಮದಿಯನ್ನು ಕಸಿಯಬೇಡ. ಮತ್ತೊಬ್ಬರಿಗೆ ಒಳಿತನ್ನು ಮಾಡುವುದು ಅಷ್ಟು ಸುಲಭವಲ್ಲ ಎಂದು ಪರರಿಗುಪಕರಿಸುವ ಪರಿಯನ್ನು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 874,
    english:
      '"Friend, you cannot break the mud pot with the promise to show a golden one. Have you got the license to mine gold so that you can show these dreams to people? If people are comfortable drinking water (which suits well to their body) then you should not ask them throw water away and get used to milk. Will they be happy doing so?" - Mankutimma',
    kannada:
      "ಮಡಕೆಯನು ಬಡಿದು ಹೊನ್ ಕೊಡವ ತೋರುವ ಸಖನೆ ।\nಪಡೆದಿಹೆಯ ರಹದಾರಿಯನು ಹೊನ್ನ ಗಣಿಗೆ? ॥\nಒಡಲಿಗೊಗ್ಗಿದ ನೀರ ಚೆಲ್ಲಿದೊಡದೇಂ ಪಾಲ ।\nಕುಡಿವ ಸಂತಸಕೆಣೆಯೆ? - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೪ ॥",
    kannada_explanation:
      "ಮಣ್ಣಿನ ಮಡಿಕೆಯನ್ನು ಒಡೆದುಹಾಕಿ,’ ಓ!! ನಿನಗೆ ಬಂಗಾರದ ಮಡಿಕೆಯನ್ನು ಕೊಡುವೆ ‘ ಎಂದು ಹೇಳಲು ಬಂಗಾರದ ಗಣಿ ನಿನ್ನ ಬಳಿ ಇದೆಯೇನು? ದೇಹಕ್ಕೆ ಒಗ್ಗಿದ ನೀರನ್ನು ಚೆಲ್ಲಿ ಹಾಲನ್ನು ಕೊಟ್ಟರೂ ನೀರನ್ನು ಕುಡಿವ ಸಂತಸಕ್ಕೆ ಅದು ಸಮವೇನು? ಎಂದು ಸಂತಸದ ಮತ್ತು ತೃಪ್ತಿಯ ಸ್ವರೂಪದ ವಿಚಾರವನ್ನು ನಮ್ಮಮುಂದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 875,
    english:
      '"This world is very old. It is an ancient one. It has grown over the ages imbibing a lot of emotions (crores of them) and each of them have left deep stains on its culture. It is hence not easy to change its very nature. It does not like being hurried also. Change does happen, but very slowly." - Mankutimma',
    kannada:
      "ಬಲುಹಳೆಯ ಲೋಕವಿದು, ಬಲುಪುರಾತನಲೋಕ ।\nಬೆಳೆದಿರ್ಪುದಿದು ಕೋಟಿರಸಗಳನು ಪೀರ್ದು ॥\nಸುಲಭವಲ್ಲದರ ಸ್ವಭಾವವನು ಮಾರ್ಪಡಿಸೆ ।\nಸಲದಾತುರೆಯದಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೫ ॥",
    kannada_explanation:
      "ಈ ಲೋಕ ಬಹಳ ಹಳೆಯದು, ಪುರಾತನವಾದದ್ದು. ಇದು ಅಂದಿನಿಂದ ಇಂದಿನವರೆಗೆ ಕೋಟಿ ಕೋಟಿ ರಸಗಳನ್ನು ಹೀರಿಕೊಂಡು ಬದಲಾಗಿದೆ. ಅದರ ಸ್ವಭಾವವನ್ನು ಸುಲಭದಲ್ಲಿ ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಮತ್ತು ಅದನ್ನು ಬದಲಾಯಿಸಲು ಆತುರಪಡುವುದು ಸರಿಯಲ್ಲ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 876,
    english:
      '"Do you think you can order River Indus to go back to the Himalayas and flow in a different beautiful way? Human energy and resulting culture is also like that. It follows and changes according to the circumstances reacting the best it can to the current situations. It is not a blind march." - Mankutimma',
    kannada:
      "ಸಿಂಧುವನು ಹಿಮಗಿರಿಗೆ ಹಿಂದಿರುಗಿ ಬೇರೊಂದು ।\nಚೆಂದದಲಿ ಪರಿದು ಬಾರೆಂದಾಣತಿಪೆಯಾ? ॥\nಸಂದರ್ಭವಿಡಿದು ಜನಚೈತನ್ಯ ಪರಿದಿಹುದು ।\nಅಂಧಗತಿಯಲ್ಲವದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೬ ॥",
    kannada_explanation:
      "ಹಿಮಾಲಯದಿಂದ ಹರಿದು ಬರುವ ಸಿಂಧೂ ನದಿಯನ್ನು ‘ಹಿಮಾಲಯಕ್ಕೆ ಹಿಂದಕ್ಕೆ ಹೋಗಿ ಬೇರೆಯ ರೀತಿಯ ವೈಯ್ಯಾರದಿಂದ ಹರಿದು ಬಾ’ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆಯೇ? ಭೂಮಿಯ ಮೇಲ್ಮೈ, ಇಳಿಜಾರು ಹೇಗಿದೆಯೋ ಅದರಂತೆ ಸಹಜವಾಗಿ ಹರಿದು ಬರುತ್ತಿದೆ,ಸಿಂಧು. ಇದೇ ರೀತಿ ಕಾಲವನ್ನುಸರಿಸಿ ಸಂಧರ್ಭಕ್ಕನುಸಾರವಾಗಿ ಜನರ ಜೀವನದ ಗತಿ ಸಾಗುತ್ತದೆ. ಆದರೆ ಜನ ಜೀವನದ ಗತಿ ಕುರುಡುಗತಿ ಅಲ್ಲ, ಎಂದು ಬದುಕು ಎಷ್ಟು ಸಹಜವಾಗಿ ಮುಂದೆ ಹೋಗುತ್ತದೆ ಎನ್ನುವುದಕ್ಕೆ ಒಂದು ಉಪಮೆಯ ಸಹಿತ ವಿವರಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 877,
    english:
      '"There were intelligent people even before us her. They also thought about the general well being of the entire world. They worked hard too. What is so special about our efforts? If we over-do the change, then it may lead to new diseases (physical, mental and social). Let the change and modernization be in moderation." - Mankutimma',
    kannada:
      "ಮತಿವಂತರಿದ್ದರಲ ನಮ್ಮ ಹಿಂದೆಯುಮಿಲ್ಲಿ ।\nಹಿತಚಿಂತಕರು ಜನಕೆ, ಕೃತಪರಿಶ್ರಮರು? ॥\nಅತಿವೈದ್ಯದಿಂದ ಹೊಸರುಜಿನಕೆಡೆಯಾದೀತೊ ।\nಮಿತಿಯಿಂ ನವೀಕರಣ - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೭ ॥",
    kannada_explanation:
      "ಈ ಭೂಮಿಯಲ್ಲಿ ನಮಗಿಂತ ಹಿಂದೆ ಬುದ್ಧಿವಂತರು ಇದ್ದರಲ್ಲವೇ? ಸರ್ವ ಜನರ ಹಿತದ ಬಗ್ಗೆ ಚಿಂತೆಮಾಡುವವರು ಇದ್ದರಲ್ಲವೇ? ಜಗತ್ತಿನ ಒಳಿತಿಗಾಗಿ ದುಡಿದವರು ಇದ್ದರಲ್ಲವೇ? ಅತಿಯಾದ ವೈದ್ಯದಿಂದ ಹೊಸರೋಗಕ್ಕೆ ಎಣೆ ಮಾಡಿಕೊಟ್ಟಂತೆ, ಇರುವುದನ್ನು ಅತಿಯಾಗಿ, ತೀವ್ರತೆಯಿಂದ ಬದಲಿಸಿದೆ, ಮಿತಿಯಿಂದ ನವೀನತೆಯನ್ನು ಕಂಡುಕೊಳ್ಳಬೇಕು, ಎಂದು ಒಂದು ಸೂಚನೆ ಮತ್ತು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 878,
    english:
      '"Don\'t break the foundation even if you intend to only correct it. Before shaking it have you thought through if would be capable of building it again? If you want the plant to grow well, you should not replant it elsewhere by plucking its roots. One must not hurry to change others." - Mankutimma',
    kannada:
      "ಒಡೆಯದಿರು ತಳಹದಿಯ ಸರಿವಡಿಪೆನದನೆಂದು ।\nಸಡಲಿಸುವ ನೀಂ ಮರಳಿ ಕಟ್ಟಲರಿತವನೇಂ? ॥\nಗಿಡವ ಸರಿ ಬೆಳೆಯಿಸಲು ಬುಡವ ಕೀಳ್ವುದು ಸರಿಯೆ? ।\nದುಡುಕದಿರು ತಿದ್ದಿಕೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೮ ॥",
    kannada_explanation:
      "ಇರುವುದನ್ನು ಸರಿಪಡಿಸುವ ಭರಾಟೆಯಲ್ಲಿ ಅದರ ಅಡಿಪಾಯವನ್ನು ಅಲುಗಾಡಿಸಬೇಡ.ನಿನಗೆ ಮತ್ತೆ ಅದನ್ನು ಹಾಗೆ ಕಟ್ಟಲು ಗೊತ್ತಿದೆಯೇನು? ಒಂದು ಗಿಡವ ಸರಿಯಾಗಿ ಬೆಳೆಸಲು ಅದರ ಬೇರುಗಳನ್ನೇ ಕೀಳುವುದು ಸರಿಯೇ? ಹಾಗಾಗಿ ಇರುವುದನ್ನು ತಿದ್ದಲು ಆತುರಪಡಬೇಡ ಎಂದು ಒಂದು ಸೂಕ್ತ ಹಿತವಚನವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 879,
    english:
      '"As long as there is any animal instinct left in a man, there will be conflict, quarrels and wars. People many not kill out of hatred, but they will kill due to hunger. Man has always enjoyed watching conflict - be in ram fighting, arguments in an meeting or organized fighting." - Mankutimma',
    kannada:
      "ಮೃಗಶೇಷವಿರುವನಕ ಜಗಳ ತಪ್ಪದು ಜಗದಿ ।\nಹಗೆಗೆ ಕೊಲದವರು ಹಸಿವಿಂದ ಕೊಂದಾರು ॥\nಟಗರು ಜೂಜೋ ಸಭೆಯ ರಗಳೆಯೋ ಕುಸ್ತಿಯೋ ।\nಸೊಗ ಜನಕೆ ರಣರಂಗ - ಮಂಕುತಿಮ್ಮ ॥ ೮೭೯ ॥",
    kannada_explanation:
      "ಮನುಷ್ಯನಲ್ಲಿ ಮೃಗಾಂಶದ ಶೇಷವಿರುವತನಕ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಜಗಳ ತಪ್ಪುವುದಿಲ್ಲ. ದ್ವೇಷಕ್ಕೆ ಕೊಲ್ಲದಿದ್ದರೂ, ಹಸಿವಿನಿಂದ ಕೊಂದಾರು. ಇವರಿಗೆ ಒಟ್ಟಾರೆ ಜಗಳ ಅಥವಾ ಕಲಹದಲ್ಲಿ ಆಸಕ್ತಿ. ತಾವು ಜಗಳವಾಡದಿದ್ದರೂ, ಅದು ಟಗರುಗಳ ಹೋರಾಟದ ಜೂಜಾಗಲೀ, ಒಂದು ಸಭೆಯಲ್ಲಿ ನಡೆಯುವ ರಗಳೆಯ ಜಗಳವಾಗಲೀ ಅಥವಾ ಅಖಾಡದಲ್ಲಿ ಮಲ್ಲರ ನಡುವೆ ನಡೆಯುವ ಕುಸ್ತಿಯ ಪಂದ್ಯವಾಗಲೀ, ಅನ್ಯರು ಆಡುವ ಜಗಳವನ್ನಾದರೂ ನೋಡಿ ಸಂತಸಪಡುವ ಪ್ರವೃತ್ತಿ ಮನುಷ್ಯನದು, ಎಂದು ಮಾನವರಲ್ಲಿನ ಮೃಗತ್ವದ ಗುಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 880,
    english:
      '"Man is running fast in the cycle of desire-satisfaction-more-desires. During this, he may wear a necklace of pearls. While running fast, it may get entangled and suffocate him. His back may get broken under the weight of all the grand endeavors to satisfy his lofty ambitions." - Mankutimma',
    kannada:
      "ತನ್ನ ಮನೋರಥಂಗಳ ಚಕ್ರವೇಗದಿನೆ ।\nತನ್ನ ಮಣಿಹಾರಗಳ ಸಿಕ್ಕು ಬಿಗಿತದಿನೇ ॥\nತನ್ನ ಸಂಕಲ್ಪ ವಿಪರೀತದಿನೆ ಮಾನವನ ।\nಬೆನ್ನು ಮುರಿದೀತೇನೊ! - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೦ ॥",
    kannada_explanation:
      "ಸಾಧ್ಯಾಸಾಧ್ಯತೆಗಳ ವಿವೇಚನೆ ಇಲ್ಲದೆ, ಅತಿವೇಗವಾಗಿ ಓಡುವ ನಮ್ಮ ಮನಸ್ಸು, ಅತೀ ಉತ್ತಮವಾದ ಇಚ್ಚೆಗಳನ್ನೇ ಹಾರಗಳಂತೆ ತೊಟ್ಟು, ನಮ್ಮ ಕ್ಷಮತೆಗೂ ಮೀರಿದ ಮತ್ತು ವಿಪರೀತವಾದ ಕೆಲಸವನ್ನು ಸಾಧಿಸಲು ಪ್ರಯತ್ನಪಡುವ ನಾವು, ಆ ವಿಪರೀತ ಪ್ರಯತ್ನದಿಂದಲೇ ಪತನವಾಗುವ ಸಾಧ್ಯತೆ ಇದೆ, ಎನ್ನುವ ವಿಚಾರವನ್ನು ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ.",
  },
  {
    number: 881,
    english:
      '"These are the sources of happiness for the mankind - desire that knows one\'s bounds, efforts that always keep the propriety of Dharma in mind, patience till difficult times pass, knowledge that death is not the end of everything." - Mankutimma',
    kannada:
      "ಮಿತಿಯನರಿತಾಶೆ, ಸಮುಚಿತವ ಮರೆಯದ ಯತ್ನ ।\nತೈತಿಕ್ಷೆ ಕಷ್ಟಾಂಶದಪರಿಹಾರ್ಯತೆಗೆ ॥\nಮೃತಿಯೆ ಜೀವನಕಥೆಯ ಕೊನೆಯಲ್ಲವೆಂಬರಿವು ।\nಹಿತಗಳಿವು ನರಕುಲಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೧ ॥",
    kannada_explanation:
      "ನಮ್ಮ ಮಿತಿಗಳನ್ನು ಅರಿತು ಆಸೆಪಡುವುದು, ಸೂಕ್ತತೆಯನ್ನು ಮರೆಯದ ಪ್ರಯತ್ನ, ಕಷ್ಟಗಳು ಪರಿಹಾರವಾಗದಿದ್ದರೆ, ಅದನ್ನು ತಡೆದುಕೊಳ್ಳುವ ತಾಳ್ಮೆ, ಮರಣವೇ ನಮ್ಮ ಜೀವನದ ಕಥೆಗೆ ಅಂತ್ಯವಲ್ಲ ಎಂಬ ಅರಿವು ಇದ್ದರೆ, ಅಂತಹ ಅರಿವು ಮಾನವ ಕುಲಕ್ಕೆ ಹಿತವನ್ನುಂಟು ಮಾಡುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 882,
    english:
      '"The goal of making nations, races and sects is to aid sharing and caring for each other. Each man must realize that he is just an atom (cell) of the whole. He must work towards the overall well being of the whole. Only then, the world will look beautiful - like a festival day." - Mankutimma',
    kannada:
      "ಸರ್ವಾರ್ಥ ಸಹಭಾಗಿತೆಗೆ ರಾಷ್ಟ್ರ ಕುಲ ವರ್ಗ ।\nಸರ್ವದಣು ತಾನೆನುತ್ತೋರೊರ್ವ ಮನುಜನ್ ॥\nಸರ್ವಜೀವ ಸಮೃದ್ಧಿಗನುಗೂಡಿ ದುಡಿಯುತಿರೆ ।\nಪರ್ವವಂದಿಳೆಗೆಲವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೨ ॥",
    kannada_explanation:
      "ರಾಷ್ಟ್ರ, ಕುಲ,ವರ್ಗ ಇತ್ಯಾದಿ ವಿಭಾಗಗಳು, ಮಾನವರು ಸಹಜೀವನವನ್ನು ಮಾಡಲು ಅನುಕೂಲವಾಗುವಂತೆ ಇವೆ. ಪ್ರತಿಯೊಬ್ಬ ಮನುಷ್ಯನೂ, ತಾನು ಸರ್ವದಲ್ಲಿ ‘ಅಣು’ಮಾತ್ರ ಎಂದು ಬಗೆದು, ಸರ್ವರ ಜೀವನದ ಸಂವೃದ್ಧಿಗೆ ಕೃಷಿಮಾಡಿದ ದಿನ, ಈ ಜಗತ್ತಿಗೆ ‘ಪರ್ವ’ದಿನ ಅಥವಾ ಸಂಭ್ರಮದ ದಿನ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 883,
    english:
      '"There will be prosperity in abundance in this world when people realize that the soul is to be cared for more than the body, when people find peace within themselves and find ways to do so by themselves, when people learn to share with others equally what they have." - Mankutimma',
    kannada:
      "ಕಾಯಕಿಂತಾತ್ಮ ಪಿರಿತೆಂದು ಜನವರಿತಂದು ।\nಸ್ವೀಯೇಚ್ಛೆಯಿಂದ ಸಮಾಧಾನ ಕೆಡದಂದು ॥\nದಾಯ ಸಮ ಸಂಸೃಷ್ಟಿ  ಭೂಭಾಗ್ಯವಾದಂದು ।\nಶ್ರೇಯ ನೆರೆವುದು ಜಗಕೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೩ ॥",
    kannada_explanation: "",
  },
  {
    number: 884,
    english:
      '"Material advances and science will make life easier. That should allow man to contemplate and expand his consciousness to the entire universe. The splendor of what we can see (this world) should not make us forget or ignore what we cannot see (the rest of the universe). If we can do that, there will be prosperity everywhere." - Mankutimma',
    kannada:
      "ವಸ್ತು ವಿಜ್ಞಾನದಿಂ ಜೀವನಸಮೃದ್ಧಿ ಮಿಗೆ ।\nವಿಸ್ತರಿಸೆ ವಿಶ್ವೈಕ್ಯಭಾವ ಜನಮನದೊಳ್ ॥\nದೃಷ್ಟಲೋಕದ ಬೆಡಗದೃಷ್ಟವನು ಮರಸದಿರೆ ।\nಸ್ವಸ್ತಿ ಲೋಕಕ್ಕೆಲ್ಲ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೪ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನಲ್ಲಿರುವ ವಸ್ತುಗಳ ಕುರಿತಾದಂತಹ ವಿಜ್ಞಾನದ ವಿಷಯದಲ್ಲಿ ಹೆಚ್ಚು ಸಂಶೋಧನೆಯಿಂದ ಜನಜೀವನ ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ಜಗತ್ತಿನ ಜನರು ಪರಸ್ಪರ ಹತ್ತಿರವಾಗಿ ಒಂದು ವಿಶ್ವೈಕ್ಯಭಾವ ಉಂಟಾಗುತ್ತದೆ. ಆದರೆ ಕಣ್ಣಿಗೆ ಕಾಣುವ ಈ ಜಗತ್ತಿನ ಬೆಡಗು,ಎಂದರೆ ಮಾಯೆ, ಈ ಜಗತ್ತನ್ನು ಮತ್ತು ಈ ಜಗತ್ತಿನ ಮಾಯೆಯನ್ನು ಸೃಷ್ಟಿಸಿದ, ಆದರೂ ಕಣ್ಣಿಗೆ ಕಾಣದ, ಆ ಪರಮ ಶಕ್ತಿಯ ವಿಸ್ಮರಣೆಯನ್ನುಂಟಾಗದಿದ್ದರೆ ಲೋಕದಲ್ಲಿ ಸ್ವಸ್ತಿ, ಎಂದರೆ ಜನಜೀವನದಲ್ಲಿ ಸ್ವಾಸ್ಥ್ಯ(ಆರೋಗ್ಯ) ಉಂಟಾಗುತ್ತದೆ ಎಂದು, ಜಗತ್ತು ಮತ್ತು ಜಗನ್ನಿಯಾಮಕನ ನಡುವೆ ಸಮನ್ವಯವನ್ನು ಕಂಡುಕೊಳ್ಳಬೇಕಾದ ಅವಶ್ಯಕತೆಯನ್ನು ಅರುಹಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 885,
    english:
      '"In the discipline of the society, in the way wealth gets distributed, in the way people learn (accumulate knowledge), in the way people evaluate qualities - if there is human values, compassion and morality; then there will be ubiquitous happiness in this world." - Mankutimma',
    kannada:
      "ಜಾನಪದ ಶಿಷ್ಟಿಯಲಿ, ಸಂಪತ್ಸಮಷ್ಟಿಯಲಿ ।\nಜ್ಞಾನಸಂಧಾನದಲಿ, ಮೌಲ್ಯ ಗಣನೆಯಲಿ ॥\nಮಾನವತೆ ಮಾನುಷ್ಯ ಧಾರ್ಮಿಕತೆಯೆದ್ದುನಿಲೆ ।\nಆನಂದ ಧರೆಗಂದು - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೫ ॥",
    kannada_explanation:
      "ಜನಪದದಲ್ಲಿ ಶಿಸ್ತನ್ನು ಪಾಲಿಸುವುದರಲ್ಲಿ, ಸಮುಷ್ಟಿಯ ಸಂಪತ್ತನ್ನು ಅನುಭವಿಸುವುದರಲ್ಲಿ, ಜ್ಞಾನದ ಅನುಸಂಧಾನದಲಿ, ಮೌಲಗಳ ಲೆಕ್ಕಾಚಾರದಲ್ಲಿ, ಮಾನವತೆಯೇ ಧರ್ಮವಾಗಿ, ಈ ಭುವಿಯಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಬೇರೂರಿದಾಗ, ಈ ಭುವಿಗೆ ಅಂದೇ ಆನಂದದ ದಿನ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು,ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 886,
    english:
      '"The progress of this world is like that of the Holy Fig tree. A twig here, some leaves there will wilt and die. But there will be sprouts and fresh leaves elsewhere. The leaves twigs and branches are the only things that are temporary. The trunk and the roots are permanent. The world lives on - only parts of it flourish and perish in time." - Mankutimma',
    kannada:
      "ಅಶ್ವತ್ಥವಿಲ್ಲಿ ಬಾಡಿದೊಡೇನು? ಚಿಗುರಲ್ಲಿ; ।\nನಶ್ವರತೆ ವಿಟಪ ಪರ್ಣಂಗಳಲಿ ಮಾತ್ರ; ॥\nಶಾಶ್ವತತೆ ರುಂಡಮೂಲದಲಿ; ಪರಿಚರಿಸದನು ।\nವಿಶ್ವಪ್ರಗತಿಯಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೬ ॥",
    kannada_explanation:
      "ಅಶ್ವತ್ಥ ವೃಕ್ಷವು, ಒಂದುಕಡೆ ಬಾಡಿದರೆ ಮತ್ತೊಂದು ಕಡೆ ಚಿಗುರುವುದು. ಹಾಗೆ ಬಾಡುವುದು, ಕೇವಲ ಕೊಂಬೆಗಳು ಮತ್ತು ಅದರ ಎಲೆಗಳು ಮಾತ್ರ. ಆದರೆ, ಅದರ ಕಾಂಡ ಮತ್ತು ಬೇರುಗಳು ಶಾಶ್ವತವಾಗಿರುತ್ತವೆ. ಹಾಗಾಗಿ ಅದನ್ನು ಉಪಚರಿಸಿದರೆ, ಆ ಮರವು ಹೇಗೆ ಶಾಶ್ವತವಾಗಿರುವುದೋ, ಹಾಗೆಯೇ ಒಂದು ಕಡೆ ಹಳತಾಗಿ ನಾಶವಾಗುತ್ತಿದ್ದರೆ, ಮತ್ತೊಂದು ಕಡೆ ಬೆಳೆಯುತ್ತಿರುವ ಈ ಜಗದ್ವೃಕ್ಷವನ್ನೂ, ಉಪಚರಿಸಿದರೆ, ಈ ವಿಶ್ವದ ಪ್ರಗತಿಯೂ ಸಹ ಇರುತ್ತದೆ ಎಂದು, ಜಗತ್ತಿನ ಜೀವನದ ಮತ್ತು ಅದರ ಪ್ರಗತಿಯ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 887,
    english:
      '"If you are looking for absolute happiness, then you should turn your search inwards with pure intentions. There you can find happiness that can not bettered. You will have the soul of the universe in your sight and experience complete cosmic peace." - Mankutimma',
    kannada:
      "ಪರಿಪೂರ್ಣಸುಖವನೆಳಸುವನು ತನ್ನೊಳಗಡೆಗೆ ।\nತಿರುಗಿಸಲಿ ತನ್ನ ದೃಷ್ಟಿಯನು ನಿರ್ಮಲದಿಂ ॥\nನಿರತಿಶಯ ಸುಖವಲ್ಲಿ, ವಿಶ್ವಾತ್ಮ ವೀಕ್ಷೆಯಲಿ ।\nಪರಸತ್ತ್ವ ಶಾಂತಿಯಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೭ ॥",
    kannada_explanation:
      "ಪರಿಪೂರ್ಣ ಸುಖವನ್ನು ಅರಸುವವನು ಮನಸ್ಸಿನಲ್ಲಿ ಕಶ್ಮಲರಹಿತನಾಗಿ, ಅಂತರ್ಮುಖಿಯಾದಾಗ ಅವನಿಗೆ ಅಲ್ಲಿ, ವಿಶ್ವಾತ್ಮಭಾವದಿಂದ, ಬೇಧಗಳು ನಶಿಸಿ, ಪರತತ್ವದ ಶಾಂತಿಯಲ್ಲಿ, ಅಲೌಕಿಕ ಆನಂದದ ಅನುಭವವಾಗುತ್ತದೆ, ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 888,
    english:
      '"The experience of realization of the universal soul is very personal. It can not be taught, learnt or described. The happiness so got is immense and infinite. How can any happiness got by worldly pleasures even match up? Any such happiness is finite and there will always be other pleasures that will give more happiness." - Mankutimma',
    kannada:
      "ವ್ಯಕ್ತಿಮಾತ್ರದ ವಿಭವ ವಿಶ್ವಾತ್ಮತಾನುಭವ ।\nಮುಕ್ತಿ ಸುಖವಾಂತರಿಕವದು ನಿರವಧಿಸುಖ ॥\nಭಾಕ್ತ ಪ್ರಪಂಚಸುಖವೆಂತಪರಿಮಿತವಹುದು? ।\nರಿಕ್ತ ಸುಖ ಭಾಹ್ಯ ಸುಖ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೮ ॥",
    kannada_explanation:
      "ವಿಶ್ವಾತ್ಮಾನುಭವ ಎನ್ನುವುದು ವ್ಯಕ್ತಿಗತವಾದ ಅನುಭವ. ನಿರಂತರವಾದ ಆ ಆನಂದದ ಸ್ಥಿತಿ, ಕೇವಲ ಆಂತರಿಕ ಭಾವ. ಈ ಸ್ಥಿತಿ ಮುಕ್ತ ಸ್ಥಿತಿ. ಆದರೆ ಬಾಹ್ಯ ಪ್ರಪಂಚದ ವಿಷಯಗಳ ಮೇಲೆ ಅಧಾರಪಟ್ಟಿರುವ ಸುಖ, ಅಪರಿಮಿತ ಸುಖವಾಗಲು ಹೇಗೆ ಸಾಧ್ಯ? ಹಾಗೆ ಬಾಹ್ಯ ವಸ್ತು, ವಿಷಯ ಮತ್ತು ವ್ಯಕ್ತಿಗಳ ಮೇಲೆ ಆಧಾರಪಟ್ಟಿರುವ ಸುಖ ಕೇವಲ ತಾತ್ಕಾಲಿಕ ಮತ್ತು ಕೀಳುಮಟ್ಟದ ಸುಖ, ಎಂದು ಅಂತರಂಗದ ಅನುಭವದ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 889,
    english:
      '"It is an illusion that one can find complete happiness in the external world. Happiness in this world always has an end. It comes in pieces (followed by pieces of grief). When one realizes the (gets the sight of) universal truth by his own efforts, then he will get a taste of complete happiness - that only he can enjoy." - Mankutimma',
    kannada:
      "ಭ್ರಾಂತಿಯೋ ಸಂಪೂರ್ಣ ಸುಖದಾಶೆ ಬಾಹ್ಯದಲಿ ।\nಸಾಂತ ಲೋಕದ ಸೌಖ್ಯ, ಖಂಡಖಂಡವದು ॥\nಸ್ವಾಂತಕೃಷಿಯಿಂ ಬ್ರಹ್ಮವೀಕ್ಷೆ ಲಭಿಸಿರ್ದೊಡೇ- ।\nಕಾಂತ ಪೂರ್ಣಾನಂದ - ಮಂಕುತಿಮ್ಮ ॥ ೮೮೯ ॥",
    kannada_explanation:
      "ಬಾಹ್ಯ ಬದುಕಿನಲ್ಲಿ ನಮಗೆ ಸಂಪೂರ್ಣ ಅಥವಾ ಪರಿಪೂರ್ಣ ಸುಖ ಸಿಗುತ್ತದೆ ಎನ್ನುವುದು ‘ಭ್ರಮೆ’. ಏಕೆಂದರೆ ಬಾಹ್ಯ ಸುಖಗಳೆಲ್ಲಾ ತುಂಡು ತುಂಡಾದದ್ದು. ಸ್ವಂತ ಪ್ರಯತ್ನದಿಂದ ಪರಬ್ರಹ್ಮವಸ್ತುವನ್ನು ನೋಡಲಾದರೆ ಅದು ನಮಗೆ ಸಿಗುವ ಪೂರ್ಣಾನಂದ, ಎಂದು ಸಂಪೂರ್ಣ ಆನಂದದ ವಿಚಾರವನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 890,
    english:
      '"This world is a ever churning (changing) ocean of temporary forms and named objects. There are waves created by the exhalation of the Creator. If one can hold on to the waves and swim towards the center of the ripples, he will succeed in finding the secret of the universe." - Mankutimma',
    kannada:
      "ನಶ್ವರಾಕೃತಿ ನಾಮಮಯ ವಿಶ್ವಾರ್ಧಿಯಿದು ।\nಶಾಶ್ವತಬ್ರಹ್ಮದುಚ್ಛ್ವಾಸ ಘನ ಬಿಂದು ॥\nಪ್ರಶ್ವಸಿತದಲೆಗಳನೆ ಪಿಡಿದು ಗುರಿಯರಿತೀಜೆ ।\nವಿಶ್ವಮೂಲಾಪ್ತಿಯಲ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೦ ॥",
    kannada_explanation:
      "ಒಂದು ಶಾಶ್ವತ ಘನಬಿಂದುವಾದ ಆ ಪರಮಾತ್ಮನ ಉಸಿರಾಟದ ಉಚ್ವಾಸ, ನಿಶ್ವಾಸಗಳಂತಿರುವ ಮತ್ತು ಕಾಲಗತಿಯಲ್ಲಿ ಹೇಳ ಹೆಸರಿಲ್ಲದಂತೆಯೇ ಕಳೆದುಹೋಗುವ, ನಮ್ಮ ರೂಪ ಮತ್ತು ನಾಮಗಳಿಂದಲೇ ತುಂಬಿರುವುದು ಈ ಜಗತ್ತೆಂಬ ಕಡಲು. ಸಮುದ್ರದ ಉಸಿರಾಟದ ಉಚ್ವಾಸ ನಿಶ್ವಾಸದಂತಿರುವ, ಅದರ ಅಲೆಗಳನ್ನು ಹಿಡಿದು, ಎಂದರೆ ಗಮನಿಸಿದರೆ, ಅದರ ಮೂಲವಾದ ಕಡಲು ದೊರೆಯುವಂತೆ, ಈ ವಿಶ್ವದಲ್ಲಿರುವ, ನಮ್ಮ ರೂಪ ಮತ್ತು ನಾಮಗಳ ಮೂಲಕವೇ ವಿಶ್ವದ ಮೂಲವಾದ ಆ ಪರಮಾತ್ಮನನ್ನು ಅರಿತು, ಪಡೆಯಬಹುದು ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 891,
    english:
      '"All your good and bad experiences (sweet and sour) will dissolve anonymously in the sea (salty). All your qualities are similarly neutralized when you go back to the creator. It may be good karma, bad karma, misery or happiness - all of them dissolve and look good when it is with the Creator (as whole, and not individual)." - Mankutimma',
    kannada:
      "ನಿನ್ನ ಕಹಿಸಿಹಿಯೆಲ್ಲ ಕಡಲೊಳುಪ್ಪಾಗುವುದು ।\nನಿನ್ನೆಲ್ಲ ಗುಣಗಳುಂ ಬ್ರಹ್ಮದೊಳಗಂತು ॥\nಪುಣ್ಯವೋ, ಪಾಪವೋ, ಅಹಿತವೋ, ಹಿತವೊ ಅದು ।\nಚೆನ್ನಹುದು ಬೊಮ್ಮನಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೧ ॥",
    kannada_explanation:
      "ನದಿಯ ಸಿಹಿ ನೀರು ಹರಿದು ಕಡಲ ಸೇರಿದಾಗ ಉಪ್ಪಾಗುತ್ತದೆ. ಹಾಗೆಯೇ, ಬದುಕಿನಲ್ಲಿ ನೀನುಂಡ ಕಹಿ-ಸಿಹಿಗಳೆಲ್ಲವೂ ಪರಬ್ರಹ್ಮನಲ್ಲಿ ಲೀನವಾಗುತ್ತವೆ. ನೀನು ಮಾಡಿರುವ, ಪುಣ್ಯವೋ,ಪಾಪವೋ,ಅಹಿತವೋ, ಹಿತವೊ ಅದು ಅವನಲ್ಲಿ ಸೇರಿದಮೇಲೆ, ಅದ್ಯಾವುದೂ ಇಲ್ಲದೆ ಪರಬ್ರಹ್ಮನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಸೇರಿಹೋಗುತ್ತದೆ, ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 892,
    english:
      '"There are two sources of the universal truth. One is outside, beyond this universe, far away, in the blue of the sky. The other is inside, in the greatest depth of the heart (mind) and hidden. Both of them are telling the same things. When you can listen to them both and reconcile, you will be an enlightened soul." - Mankutimma',
    kannada:
      "ಹೊರಗೆ, ವಿಶ್ವದಿನಾಚೆ, ದೂರದಲಿ, ನೀಲದಲಿ ।\nಒಳಗೆ, ಹೃತ್ಕೂಪದಾಳದಲಿ, ಮಸಕಿನಲಿ ॥\nನೆಲೆಗಳಿಂತೆರಡು ಮೂಲ ರಹಸ್ಯಕವುಗಳುಲಿ  ।\nಕಲೆತಂದು ನೀಂ ಜ್ಞಾನಿ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೨ ॥",
    kannada_explanation:
      "ಹೊರಗೆ, ಎಂದರೆ ಈ ಜಗತ್ತಿನ ಪರಿಧಿಯಿಂದ ಆಚೆ, ದೂರದಲಿ, ಗಗನದಲ್ಲಿರುವ ರಹಸ್ಯಶಕ್ತಿ ಮತ್ತು ಒಳಗೆ, ಎಂದರೆ ಹೃದಯಾಂತರಾಳದಲಿ, ಮಸುಕುಮಸುಕಾಗಿರುವ ನಮ್ಮ ಆತ್ಮ ಶಕ್ತಿ ಎರಡೂ ಕಲೆತು ಒಂದಾದಾಗ ನಮಗೆ ಜ್ಞಾನವುಂಟಾಗುತ್ತದೆ, ಮತ್ತು ನಾವು ಜ್ಞಾನಿಗಳಾಗುತ್ತೇವೆ ಎಂದು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 893,
    english:
      '"When awake one will always say that the dream land is untrue. Right? Similarly, for a person sleeping - the wakeful world is also untrue. But it is certain that behind the sleeping, alert and the dreaming selfs of a person there is a hidden soul who observes all these and is not influenced by any of these." - Mankutimma',
    kannada:
      "ಸ್ವಪ್ನಲೋಕವ ಜಾಗೃತಂ ಸುಳ್ಳೆನುವನಲ್ತೆ? ।\nಸುಪ್ತಂಗೆ ಜಾಗೃತನ ಲೋಕಮುಂ ಸುಳ್ಳೇ ॥\nಸ್ವಪ್ನ ಜಾಗ್ರತ್ಸುಪ್ತಿಗಳ ಹಿಂದೆ ನಿರ್ಲಿಪ್ತ- ।\nಗುಪ್ತಾತ್ಮನಿಹುದು ದಿಟ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೩ ॥",
    kannada_explanation:
      "ಸ್ವಪ್ನ ಲೋಕವನ್ನು ಜಾಗೃತನು ಸುಳ್ಳು ಎನ್ನುವಂತೆ, ಮಲಗಿ ನಿದ್ರಿಸುವವನಿಗೆ ಜಾಗೃತನ ಲೋಕವೂ ಸುಳ್ಳೆನಿಸುತ್ತದೆ. ಈ ಜಾಗೃತ, ಸ್ವಪ್ನ ಮತ್ತು ಸುಪ್ತ, ಅವಸ್ಥೆಗಳಿಗೆ ಅತೀತವಾದ ಮತ್ತು ಈ ಅವಸ್ಥೆಗಳ ಪ್ರಭಾವಕ್ಕೊಳಗಾಗದ,ಎಂದರೆ ನಿರ್ಲಿಪ್ತ ಸ್ಥಿತಿಯಲ್ಲಿ, ಗೂಢವಾಗಿ ‘ಆತ್ಮ’ವಿರುವುದು ದಿಟ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 894,
    english:
      '"The rise and setting of the Sun is what gives us a scale to measure time and direction (space). Right? What if there was no Sun? All sense of time and direction will fall apart. What then remains is the endless, pure truth of the Creator that has no dependence on time or space. You should shed all feelings that are based on partial truths and dissolve in that supreme pure truth." - Mankutimma',
    kannada:
      "ಭಾನೂದಯಾಸ್ತಗಳಿನಲ್ತೆ ದಿಕ್ಕಾಲಗಳ ।\nಮಾನಗಣಿತವು ನಮಗೆ? ಭಾನುವಿರದೊಡದೇಂ? ॥\nಅನಂತ್ಯ, ಶುದ್ಧಸತ್ತಾ ಮಾತ್ರ, ಬೊಮ್ಮನದು ।\nಲೀನನಾಗದರೊಳಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೪ ॥",
    kannada_explanation:
      "ಸೂರ್ಯನ ಉದಯ ಮತ್ತು ಮುಳುಗುವಿಕೆಯಿಂದ, ದಿಕ್ಕುಗಳ ಅಳತೆ ಮತ್ತು ಕಾಲದ ಲೆಕ್ಕಾಚಾರವನ್ನು ನಾವು ಮಾಡುತ್ತೇವೆ. ಸೂರ್ಯನೇ ಇಲ್ಲದೆ ಇದ್ದಿದ್ದರೆ? ಆಗ ಅನಂತವಾದ ಪರಬ್ರಹ್ಮನ ಶುದ್ಧ ಸತ್ವ ಎಲ್ಲೆಡೆಯಲ್ಲೂ ಕಾಣುತ್ತದೆ. ಅಂತಹ ಶುದ್ಧ ಸತ್ವದಲ್ಲಿ ಲೀನವಾಗು ಎಂದು ಆದೇಶಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 895,
    english:
      '"In this worldly existence, feelings and names are important. These have origins in numbers, qualities, actions or other characteristics. They form the link between the object and the name it is known by. But the real existence (of the object) is beyond the measuring scale or the name it gets because of it." - Mankutimma',
    kannada:
      "ಸಂಕೇತಭಾವಮಯ ಲೋಕಜೀವನದ ನಯ ।\nಸಂಖ್ಯೆ ಗುಣ ಹೇತು ಕಾರ್ಯಗಳ ಲಕ್ಷಣದಿಂ- ॥\nದಂಕಿತಂಗಳು ಪದಪದಾರ್ಥ ಸಂಬಂಧಗಳು ।\nಅಂಕೆ ಮೀರ್ದುದು ಸತ್ತ್ವ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೫ ॥",
    kannada_explanation:
      "ಈ ಲೋಕದ ಜೀವನ, ಸಂಕೇತ ಮತ್ತು ಭಾವಗಳಿಂದ ಕೂಡಿದೆ. ಸಂಖ್ಯೆ,ಗುಣ ಮತ್ತು ಕಾರ್ಯ ಲಕ್ಷಣಗಳಿಂದ ಪದಾರ್ಥಗಳ ಗುರುತು ಮತ್ತು ಅವುಗಳ ಪರಸ್ಪರ ಸಂಬಂಧಗಳಿರುತ್ತವೆ. ಆದರೆ ಇವುಗಳೆಲ್ಲಕ್ಕೂ ಆಧಾರವಾದ ಆ ಪರತತ್ವ, ಈ ಎಲ್ಲದರಿಂದ ಅತೀತವಾಗಿರುತ್ತದೆ, ಎಂದು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 896,
    english:
      '"What has the soul got to do with the details of physical science? What does one have to do with different stories about the afterlife? What has one got to do with all the divisions in the society based on caste, morality and other social norms? The soul is not hurt by any of these. It remains pure and untouched by anything that is temporary." - Mankutimma',
    kannada:
      "ಭೌತವಿಜ್ಞಾನ ವಿವರಗಳಿನೇನಾತ್ಮಂಗೆ? ।\nಪ್ರೇತಪ್ರಯಾಣಕಥೆಯೆಂತಿರ್ದೊಡೇನು? ॥\nಜಾತಿ ನೀತಿ ಸಮಾಜ ವರ್ಗ ಭೇದದಿನೇನು? ।\nಘಾತಿಯಿಲ್ಲಾತ್ಮಂಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೬ ॥",
    kannada_explanation:
      "ಭೌತ ವಿಜ್ಞಾನದ ವಿವರಗಳಿಂದ ಆತ್ಮನಿಗೇನಾಗಬೇಕಾಗಿದೆ? ಆತ್ಮ, ಈ ದೇಹವನ್ನು ಬಿಟ್ಟಮೇಲೆ ಏನಾಗುವುದು ಎನ್ನುವ ವಿಚಾರ ಹೇಗಿದ್ದರೇನು?ಅದರಿಂದ ಆತ್ಮಕ್ಕೇನು? ಜಾತಿ, ನೀತಿ, ಸಮಾಜ ಮತ್ತು ವರ್ಗ ಭೇಧದಿಂದ ಅದಕ್ಕೆ ಏನಾಗಬೇಕು? ಇವಾವುಗಳಿಂದಲೂ ಆತ್ಮನಿಗೆ ಯಾವ ರೀತಿಯ ಧಕ್ಕೆಯೂ ಉಂಟಾಗುವುದಿಲ್ಲ, ಎಂದು ಹೊರಗಿನ ರೂಪ ಮತ್ತು ಅದರೊಳಗಿರುವ ಚೇತನದ ವಿಷಯಗಳನ್ನು ಪ್ರಸ್ತಾಪಮಾಡಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 897,
    english:
      '"There is a school of thought that proposes that nothing exists. Existence is nothing but a big zero. But what is that one can feel to be existing? If not anything, there is at least the feeling that nothing else exists. That feeling is at least very real. That is just a thought. You should consider it as the truth and surrender to it. In reality, the zero existence logic itself is a big zero." - Mankutimma',
    kannada:
      "ಶೂನ್ಯವೆಲ್ಲವುಮೆಂಬೊಡಂತೆನಿಸುವುದದೇನು? ।\nಅನ್ಯವಿಲ್ಲೆನುವರಿವದೊಂದಿರ್ಪುದಲ್ತೆ? ॥\nಚಿನ್ಮಯವನದನೆ ನೀಂ ಸತ್ಯವೆಂದಾಶ್ರಯಿಸು ।\nಶೂನ್ಯವಾದವೆ ಶೂನ್ಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೭ ॥",
    kannada_explanation:
      "ದೇವರಿಲ್ಲ, ಎಲ್ಲವೂ ಶೂನ್ಯ ಎಂದು ನೀನು ಹೇಳುವುದಾದರೆ, ಹಾಗೆ ಹೇಳುವುದಕ್ಕೆ, ನಿನಗೆ, ಆ ಅರಿವಿಲ್ಲದೆ, ಹೇಗೆ ಅನಿಸುತ್ತದೆ?. ದೇವರು ಇಲ್ಲ ಎಂದು ಹೇಳುವ ಅರಿವಾದರೂ ಅಲ್ಲಿ ಇದೆಯಲ್ಲ. ಆ ಅರಿವೇ ಸತ್ವ, ಚಿನ್ಮಯ ಸ್ವರೂಪವಾದ ಪರಮಾತ್ಮ. ಹಾಗಾಗಿ ನೀನು ಅದನ್ನು ಆಶ್ರಯಿಸು. ಶೂನ್ಯ ಎಂದು ಹೇಳಲು ಒಂದು ವ್ಯಕ್ತಿ ಮತ್ತು ಶೂನ್ಯವೆಂದು ಹೇಳುವ ಅರಿವು, ಎಂದರೆ ಜ್ಞಾನವು, ಇದೆಯಾದ್ದರಿಂದ ಶೂನ್ಯವಾದವೇ, ‘ಶೂನ್ಯ’ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 898,
    english:
      '"This world is a procession. There are pictures of people and foxes. There are characters of a play. Various kinds of dresses, various languages. The come in search of excitement, rejoice and leave. This world is a wonderful procession." - Mankutimma',
    kannada:
      "ನರನರೀ ಚಿತ್ರಗಳು, ನಾಟಕದ ಪಾತ್ರಗಳು ।\nಪರಿಪರಿಯ ವೇಷಗಳು, ವಿವಿಧ ಭಾಷೆಗಳು ॥\nಬರುತಿಹುವು, ಬೆರಗನರಸಿ ಮೆರೆಯುವುವು, ತೆರಳುವುವು ।\nಮೆರವಣಿಗೆಯೋ ಲೋಕ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೮ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತನ್ನು ಒಂದು ಮೆರವಣಿಗೆ ಎಂದು ಹೇಳಿ, ಈ ಮೆರವಣಿಗೆಯಲ್ಲಿರುವುದು, ಪ್ರಕೃತಿ ಮತ್ತು ಪುರುಷರ ಚಿತ್ರಗಳು, ಕೇವಲ ನಾಟಕಕದ ಪಾತ್ರಗಳಂತೆ ಇವೆ, ಇವು ಆಡುವ ಭಾಷೆಗಳು ಬೇರೆ ಬೇರೆ. ಇವರು ತೊಡುವ ವೇಷಗಳು ಪರಿಪರಿಯಾದದ್ದು. ಈ ಪಾತ್ರಗಳು ಬರುತ್ತವೆ, ಆ ಪಾತ್ರದಲ್ಲಿ ಮೆರೆಯುತ್ತವೆ ಮತ್ತು ನೇಪತ್ಯಕ್ಕೆ ಸರಿದು ಹೋಗುತ್ತವೆ. ಪರಮಾತ್ಮ ಸೃಷ್ಟಿಯಾದ ಈ ಲೋಕ ಒಂದು ಮೆರವಣಿಗೆಯಂತೆ ಅನಿಸುತ್ತದೆ ಎಂದು, ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 899,
    english:
      '"Keep aside all things worldly about this world - the matter, the illusion and so on. Throw away everything that is perceived by senses only. What is left is the universal truth - something that has no form and dependence. Let your mind flow towards that." - Mankutimma',
    kannada:
      "ಜಗದೀ ಜಗತ್ತ್ವವನು, ಮಾಯಾವಿಚಿತ್ರವನು ।\nಒಗೆದಾಚೆ ಬಿಸುಡೆಲ್ಲ ಕರಣವೇದ್ಯವನು ॥\nಮಿಗುವುದೇಂ? ರೂಪಾಖ್ಯೆಯೊಂದುಮಿಲ್ಲದ ವಸ್ತು ।\nಹೊಗಿಸಾ ಕಡೆಗೆ ಮತಿಯ - ಮಂಕುತಿಮ್ಮ ॥ ೮೯೯ ॥",
    kannada_explanation:
      "ಜಗತ್ವದಿಂದ(ಜಗತ್ ತತ್ವ) ಆಗಿರುವ ಈ ಜಗತ್ತಿನ ಚಿತ್ರ ವಿಚಿತ್ರವಾದ ಮಾಯಾ ಚಿತ್ರವನ್ನು ತೆಗೆದು ಬಿಸಾಡು, ನಿನಗೆ ಈ ಜಗತ್ತಿನ ಅರಿವುಂಟಾಗಿಸುವ ಎಲ್ಲ ಉಪಕರಣಗಳನ್ನೂ ಒಗೆಯಾಚೆ. ನಂತರ ಮಿಗುವುದು ಏನು? ರೂಪ, ಹೆಸರು ಮುಂತಾದವುಗಳಾವುದೂ ಇಲ್ಲದ ಒಂದು ವಸ್ತು. ಅದನ್ನು ಅರಿಯಲು ನಿನ್ನ ಬುದ್ಧಿಯನ್ನು ಆ ಕಡೆ ತಿರುಗಿಸು ಎಂದು ಉಪದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 900,
    english:
      '"There is air around us exerting pressure on our bodies. But our mind does not take notice of this pressure. Just like that the day when our soul does not take notice of the pressure the rest of the world puts on us - we can call ourselves as liberated (attained salvation or nirvana)." - Mankutimma',
    kannada:
      "ಸುತ್ತ ಮುತ್ತಣ ಗಾಳಿಯಾವಗಂ‌ ನಮ್ಮೊಡಲ- ।\nನೊತ್ತಿದೊಡಮಾ ಹೊರೆಯ ಮನಸು ಕಾಣದವೋಲ್ ॥\nಬಿತ್ತರದ ಲೋಕಭಾರವನಾತ್ಮನರಿಯದಿರೆ ।\nಮುಕ್ತ ಲಕ್ಷಣವದುವೆ - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೦ ॥",
    kannada_explanation:
      "ಸುತ್ತಲಿನ ಗಾಳಿ ನಮ್ಮ ದೇಹವನ್ನು ಯಾವಾಗಲೂ ಒತ್ತಿ ಹಿಡಿದ್ದರೂ, ಹೇಗೆ ಅದರ ಭಾರ ನಮ್ಮ ಮನಸ್ಸಿಗೆ ಭಾಸವಾಗುವುದಿಲ್ಲವೋ, ಹಾಗೆಯೇ ಈ ವಿಸ್ತಾರವಾದ ಲೋಕದ ಭಾರ ನಮ್ಮ ಆತ್ಮಕ್ಕೆ ಭಾಸವಾಗದಿದ್ದರೆ ಅದೇ ‘ಆತ್ಮ’ ದ ಮುಕ್ತ ಸ್ಥಿತಿ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 901,
    english:
      "The water in the little pot will make a lot of noise. It will sing merrily having forgotten about the ocean. The water of the ocean on the other hand will speak a lot by its silence. If you put the pot into the sea, the mud dissolves and the water from the pot will unite with water outside and become silent. - Mankutimma",
    kannada:
      "ನಾನು ನಾನೇ ನಾನೆನುತ್ತೆ ಕಿರಿಕೊಡದ ನೀರ್ ।\nಗಾನಗೆಯ್ವುದು ಹೆಮ್ಮೆಯಿಂ ಕಡಲ ಮರೆತು ॥\nನೂನದಿಂದೆಲ್ಲವನುವಬ್ಧಿಯೊಳಗದನಿರಿಸೆ ।\nಮೌನವದು ಮಣ್ಕರಗಿ - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೧ ॥",
    kannada_explanation:
      "ನೀರು ತುಂಬಿದ ಒಂದು ಚಿಕ್ಕ ಮಣ್ಣಿನ ಕೊಡ, ತನಗಿಂತ ಕೋಟ್ಯಾಂತರಪಟ್ಟು ಹಿರಿಯದಾದ, ಕಡಲನ್ನು ಮರೆತು, ‘ನಾನು’ ಎಂಬ ಭಾವದಿಂದ, ನಾನೇ ಎಲ್ಲವೂ, ಎನ್ನ ಬಿಟ್ಟರೆ ಬೇರಾವುದೂ ಇಲ್ಲವೆಂಬಂತಹ ಭಾವವನ್ನು ಬೀಗುತ್ತದೆ. ಆದರೆ ಆ ಕೊಡವನ್ನು ತೆಗೆದುಕೊಂಡು ಹೋಗಿ ಸಮುದ್ರದ ನೀರಿನಲ್ಲಿ ಮುಳುಗಿಸಿದರೆ ಆಗ ಆ ಕೊಡದ ನೀರು ಕಡಲ ನೀರಲ್ಲಿ ಸೇರಿ, ಆ ಕೊಡದ ಮಣ್ಣು ಕರಗಿ ಮೌನವಾಗಿ ‘ನಾನು’ ಎಂಬ ಭಾವವಿಲ್ಲದಂತಾಗುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 902,
    english:
      "If a person lies down and reads a book, sleep will slowly take over and the book will slip from his hand. Similarly, when ripe a fruit shall fall down by itself. Just like that, when one accumulates enough experience in life he will drop all association with this world, the goals, the rules - everything will dissolve. - Mankutimma",
    kannada:
      "ಮಲಗಿದೋದುಗನ ಕೈಹೊತ್ತಿಗೆಯು ನಿದ್ದೆಯಲಿ ।\nಕಳಚಿ ಬೀಳ್ವುದು; ಪಕ್ವಫಲವಂತು ತರುವಿಂ ॥\nಇಳೆಯ ಸಂಬಂಧಗಳು ಸಂಕಲ್ಪನಿಯಮಗಳು ।\nಸಡಿಲುವುವು ಬಾಳ್ ಮಾಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೨ ॥",
    kannada_explanation:
      "ಕೈಯಲ್ಲಿ ಪುಸ್ತಕವನ್ನು ಹಿಡಿದು ಓದುತ್ತಾ ಮಲಗಿದವನಿಗೆ ನಿದ್ರೆ ಬಂದರೆ ಹೇಗೆ ಕೈಯಲ್ಲಿರುವ ಪುಸ್ತಕ ಜಾರಿ ಬೀಳುತ್ತದೆಯೋ ಹಾಗೆಯೇ, ಪಕ್ವವಾದ ಫಲವೂ ಮರದಿಂದ ಬೀಳುತ್ತದೆ. ಈ ಜಗತ್ತಿನ ಸಂಬಂಧಗಳು, ಸಂಕಲ್ಪಗಳು ಮತ್ತು ನಿಯಮಗಳೂ ಸಹ ನಾವು ಅಂತರಂಗದಲ್ಲಿ ಪಕ್ವವಾದಂತೆ ಸಡಿಲವಾಗುವುವು, ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 903,
    english:
      "In the pursuit of salvation (nirvana), one must not hurry a lot. Salvation is not possible without a lot of suffering. One must not lose sight of the goal and always follow the path of common morality. Salvation is certain when you do so. It is only a matter of when. - Mankutimma",
    kannada:
      "ಮೋಕ್ಷದಾಶೆಯೊಳಮತ್ಯಾತುರತೆಯೊಳಿತಲ್ಲ ।\nಶಿಕ್ಷೆ ಬಹುಕಾಲ ನಡೆಯದೆ ಮೋಕ್ಷವಿಲ್ಲ ॥\nಲಕ್ಷ್ಯ ತಪ್ಪದೆ ಚರಿಸು ಸಾಮಾನ್ಯಧರ್ಮಗಳ ।\nಮೋಕ್ಷ ಸ್ವತಸ್ಸಿದ್ದ- ಮಂಕುತಿಮ್ಮ ॥ ೯೦೩ ॥",
    kannada_explanation:
      "ಮೋಕ್ಷ ಪಡೆಯಬೇಕೆಂಬ ಆಸೆಯಲ್ಲಿ ಅತಿಯಾದ ಆತುರತೆ ಸರಿಯಲ್ಲ. ಏಕೆಂದರೆ ಮೋಕ್ಷದ ಸ್ಥಿತಿಗೆ ತಲುಪಲು ಬಹುಕಾಲದ ಶಿಕ್ಷೆ, ಎಂದರೆ ಶಿಕ್ಷಣ ಅಗತ್ಯ. ಆ ಹಾದಿಯಲ್ಲಿ ಗುರಿಯನ್ನು ಬಿಡದೆ ಬಹಳಕಾಲ ಸಾಮನ್ಯಧರ್ಮಗಳ ಸಾಧನೆ ಮಾಡಿದರೆ, ಮೋಕ್ಷ ಖಂಡಿತ ಸಿಗುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 904,
    english:
      "Shoulder some responsibilities. Suffer some pain. Attack your enemies a bit. While doing so, never lose sight of right and wrong. Dance well in the drama of this world. Lead a happy dancing life in your palace of the soul. - Mankutimma",
    kannada:
      "ವಹಿಸು ಕೆಲ ಭಾರಗಳ; ಸಹಿಸು ಕೆಲ ನೋವುಗಳ ।\nಪ್ರಹರಿಸರಿಗಳನನಿತು ಯುಕ್ತಗಳನರಿತು ॥\nಮಹಿಯ ನಾಟಕದಿ ನೀಂ ಮನಸಿಟ್ಟು ಕುಣಿಕುಣಿದು ।\nವಿಹರಿಸಾತ್ಮಾಲಯದಿ- ಮಂಕುತಿಮ್ಮ ॥ ೯೦೪ ॥",
    kannada_explanation:
      "ಬದುಕಿನಲ್ಲಿ ಕೆಲವು ಭಾರಗಳನ್ನು ಹೊತ್ತುಕೋ, ಕೆಲವು ನೋವುಗಳನ್ನು ಸಹಿಸಿಕೋ, ನಿನ್ನ ಶತ್ರುಗಳನ್ನು ಆದಷ್ಟು ಬಗ್ಗುಬಡಿ, ಬದುಕುವಾಗ ಯುಕ್ತ-ಅಯುಕ್ತಗಳನ್ನು ಅರಿತು, ನಿನಗೆ ವಹಿಸಿದ ಈ ಭೂಮಿಯ ಮೇಲಿನ ನಾಟಕದಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ತೊಡಗಿಸಿಕೊಂಡು, ನಿನ್ನ ಪಾತ್ರವನ್ನು ವಹಿಸು. ಹಾಗೆ ಮಾಡುವಾಗ ನೀನು ಆತ್ಮದ ಆಲಯದಲ್ಲಿ ವಿಹರಿಸು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 905,
    english:
      "When a dog is sleeping peaceful on a pile of garbage, one may think that it is contemplating on the wisdom of its ancestors, or repenting for some action, or just thinking about something good and pleasant. But once there is a whiff of something (tasty) it will jump from there and follow the smell. Human mind is also thus. It is hard to find peace. Even when found, it is very easily disturbed by distractions. - Mankutimma",
    kannada:
      "ಶ್ವಾನ ತಿಪ್ಪೆಯ ಮೇಲೆ ಮಲಗಿರಲು ಪೂರ್ವಿಕ- ।\nಜ್ಞಾನ ಪಶ್ಚಾತ್ತಾಪ ಶುಭಚಿಂತೆಯಂತೆ ॥\nಏನೋ ವಾಸನೆ ಬೀಸಲದು ಹಾರಿ ದುಮುಕುವುದು ।\nಮಾನವನ ಮನಸಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೫ ॥",
    kannada_explanation:
      "ಈ ಮುಕ್ತಕದಲ್ಲಿ ಮಾನವನ ಮನಸ್ಸನ್ನು ನಾಯಿಗೆ ಹೋಲಿಸಿದ್ದಾರೆ. ಇಲ್ಲಿ ನಾಯಿಯ ಉಪಮೆಯನ್ನು ಕೊಟ್ಟು, ತಿಪ್ಪೆಗುಂಡಿಯ ಮೇಲೆ ಮಲಗಿದ ನಾಯಿ ಕಣ್ಣ ಮುಚ್ಚಿ ತನ್ನ ಪೂರ್ವ ಜ್ಞಾನವನ್ನು ಕೆದಕಿ ಅಲ್ಲಿ ಆದ ತಪ್ಪುಗಳನ್ನು ಕುರಿತು ಪಶ್ಚಾತ್ತಾಪ ಪಡುತ್ತಿರಲು, ಅದಕ್ಕೆ ಯಾವುದಾದರೂ ವಸ್ತುವಿನ ವಾಸನೆ ಬರಲು ತಕ್ಷಣ ತನ್ನೆಲ್ಲಾ ಆಲೋಚನೆ ಪಶ್ಚಾತ್ತಾಪಗಳನ್ನು ತೊರೆದು ‘ಚಂಗೆಂದು ‘ ಆ ವಾಸನೆ ಬಂದ ಕಡೆಗೆ ಹಾರುತ್ತದೆಂದು ಹೇಳಿ, ಮಾನವನ ಮನಸ್ಸೂ ಸಹ ಹಾಗೆಯೇ ಎಂದು ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು. ",
  },
  {
    number: 906,
    english:
      "Realization of the ultimate truth is not possible unless you mind is pure. Cleaning one's mind is a not a magic (trick) known to the intellect. One must learn a lot from the world around him, live life doing good deeds - that will give a strength that can make (and keep) the mind pure. - Mankutimma",
    kannada:
      "ತತ್ತ್ವಸಾಕ್ಷಾತ್ಕಾರ ಚಿತ್ತಶುದ್ಧಿಯಿನಹುದು ।\nಚಿತ್ತಶೋಧನೆ ಮತಿಚಮತ್ಕಾರವಲ್ಲ ॥\nಬಿತ್ತರದ ಲೋಕಪರಿಪಾಕದಿಂ, ಸತ್ಕರ್ಮ ।\nಸಕ್ತಿಯಿಂ ಶುದ್ಧತೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೬ ॥",
    kannada_explanation:
      "ತತ್ವದ ಅರಿವು ಕೇವಲ ಚಿತ್ತದ ಶುದ್ಧಿಯಿಂದ ಆಗುತ್ತದೆ. ಚಿತ್ತದಲ್ಲಿನ ಕಶ್ಮಲಗಳನ್ನು ತೆಗೆಯುವುದು ಕೇವಲ ಬುದ್ಧಿವಂತಿಕೆಯ ಕೆಲಸವಲ್ಲ. ಆಸಕ್ತಿಯಿಂದ ಸತ್ಕರ್ಮಗಳನ್ನು ಮಾಡುತ್ತಾ ಬದುಕಿನ ಅನುಭವವನ್ನು ಪಡೆದು ಮತ್ತು ಆ ಅನುಭವದ ಸಾರವನ್ನು ಅಂತರಂಗಕ್ಕೆ ‘ಪಾಕ’ದಂತೆ ಇಳಿಸಿಕೊಂಡಾಗ, ಚಿತ್ತದ ಶುದ್ಧತೆ ಸಿದ್ಧಿಸುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 907,
    english:
      "One must follow diet to keep in good health - not because one likes the diet menu. The world exists to punish the mind,not to be loved. One must possess laudable qualities to preserve order in this world, not to gain anything. These are a code a sage has to live by.  - Mankutimma",
    kannada:
      "ತನುರುಜೆಗೆ ಪಥ್ಯಾನ್ನ, ಬಾಯ ಚಪಲಕ್ಕಲ್ಲ ।\nಮನದ ಶಿಕ್ಷೆ ಲೋಕ, ಮಮಕಾರಕಲ್ಲ ॥\nಗುಣಚರ್ಯೆ ವಿಶ್ವಸಮರಸಕೆ, ಕಾಮಿತಕಲ್ಲ ।\nಮುನಿವೃತ್ತಿ ಸೂತ್ರವಿದು - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೭ ॥",
    kannada_explanation:
      "ದೇಹದ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡುವುದಕ್ಕಾಗಿ ಪಥ್ಯದ ಆಹಾರ, ನಮ್ಮ ಬಾಯಿ ಚಪಲವನ್ನು ತೀರಿಸಲು ಅಲ್ಲ. ಈ ಲೋಕದ ಬದುಕು ನಮಗೆ ಜೀವನದಲ್ಲಿ ಪಾಠ ಕಲಿಸಲಿಕ್ಕಾಗಿಯೇ ಹೊರತು, ಮಮಕಾರವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು ಅಲ್ಲ. ನಮ್ಮ ಗುಣ ಮತ್ತು ನಮ್ಮ ನಡವಳಿಕೆ, ಜಗತ್ತಿನಲ್ಲಿ ನಮ್ಮನ್ನು ಸಮರಸದೊಂದಿಗೆ ಬದುಕಲೇ ವಿನಃ, ನಮ್ಮ ಸ್ವಂತದ ಆಸೆಗಳನ್ನು ಈಡೇರಿಸಿಕೊಳ್ಳಲು ಅಲ್ಲ. ಹೀಗೆ ಬದುಕುವುದೇ ಋಷಿಗಳಂತೆ ಬದುಕುವುದಕ್ಕೆ ಸೂತ್ರ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 908,
    english:
      "If one learns to live by sacrificing for the sake of others, he will own the entire world. A mother (in a household) is never worried about her own stomach. If the husband and the children eat well and become happy, she will feel as if she has just eaten ghee. One must follow this ideal. - Mankutimma",
    kannada:
      "ತ್ಯಜಿಸಿ ಭುಜಿಸಲ್ಕಲಿತವನೆ ಜಗಕೆ ಯಜಮಾನ ।\nನಿಜಕುಕ್ಷಿ ಚಿಂತೆಯೇಂ ಮೊದಲು ಮನೆತಾಯ್ಗೆ? ॥\nಭುಜಿಪ ಪತಿಸುತರೊಪ್ಪು ತುಪ್ಪವವಳೂಟಕ್ಕೆ ।\nಭಜಿಸು ನೀನಾ ವ್ರತವ- ಮಂಕುತಿಮ್ಮ ॥ ೯೦೮ ॥",
    kannada_explanation:
      "ತನ್ನಲಿರುವುದನ್ನು ಪರರಿಗೆ ನೀಡಿ ತಾನು ಉಣ್ಣುವವನೇ ಈ ಜಗತ್ತಿಗೆ ಯಜಮಾನನಂತೆ. ತಾಯಿಗೆ ತನ್ನ ಹಸಿವಿನ ಚಿಂತೆ ಇರುತ್ತದೇನು? ತನ್ನ ಪತಿ ಮತ್ತು ಮಕ್ಕಳು ಭುಜಿಸಿ ತೃಪ್ತಿಪಟ್ಟರೆ ಅವಳಿಗದೇ ತುಪ್ಪದೂಟದ ಸಮಾನ. ಅಂತಹ ಪ್ರವೃತ್ತಿಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳುವ ವ್ರತವನ್ನು ನೀನೂ ಸಹ ಆಚರಿಸು, ಎಂಬ ಸಂದೇಶವನ್ನು, ಆದೇಶದ ರೂಪದಲ್ಲಿ ನಮಗೆ ಇತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ .",
  },
  {
    number: 909,
    english:
      "When one is still a child, he would cry and pester the elders for a doll. In time, he grows up savoring all the worldly experiences and becomes wise and responsible. He will have his children to bring up - who will now cry and pester for dolls. He will handle them with a fatherly hat - doing what is best in the child's interest. If one also behaves the same way with the world (understanding and fatherly) then he is really wise. - Mankutimma",
    kannada:
      "ಮಗುವಾಗಿ ಬೊಂಬೆಗೆಂದತ್ತು ಪಿರಿಯರ ಕಾಡಿ ।\nಜಗದುಣಿಸುಗಳನುಂಡು ಬೆಳೆದವಂ ತಾನೆ ॥\nಮಗುಗಳನು ಬೆಳೆಸುತ್ತ ಮೆನೆಯನಾಳುವವೋಲು ।\nಜಗವನಾಳ್ವನು ಜಾಣ - ಮಂಕುತಿಮ್ಮ ॥ ೯೦೯ ॥",
    kannada_explanation:
      "ಮಗುವಾಗಿದ್ದಾಗ ಬೊಂಬೆಗಾಗಿ, ಹಿರಿಯರನ್ನು ಕಾಡಿ, ಅತ್ತು, ಗೋಳಾಡಿ ಹಾಗೆ ಪಡೆದದ್ದನ್ನು, ಅನುಭವಿಸಿ, ಸಂತೋಷಪಟ್ಟು ಬೆಳೆದ ತಾನೇ , ಮಕ್ಕಳನ್ನು ಬೆಳೆಸುತ್ತಾ, ಮನೆಯಲ್ಲಿ ಹಿರಿಯನಾಗಿ, ಎಲ್ಲವನ್ನೂ ಆಳುವವನಂತೆ ಈ ಜಗತ್ತನ್ನು ಆಳುವವನು, ಜಾಣ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 910,
    english:
      "He was born among he common. Grew up among the common. But then the people gave him the responsibility of the governing, he executed it very well - fair, just and courageously. Only a person with good morals like Lincoln (like a yogi) can become the king and rule the whole world. - Mankutimma",
    kannada:
      "ಸಾಮಾನ್ಯರೊಳ್ ಪುಟ್ಟಿ, ಸಾಮಾನ್ಯರೊಳ್ ಬೆಳೆದು ।\nಭೂಮಿಪತಿಪಟ್ಟವನು ಜನ ತನಗೆ ಕಟ್ಟಲ್ ॥\nಸಾಮರ್ಥ್ಯದಿಂದವರನಾಳ್ದ ಲಿಂಕನನಂತೆ ।\nಸ್ವಾಮಿ ಲೋಕಕೆ ಯೋಗಿ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೦ ॥",
    kannada_explanation:
      "ಇಲ್ಲಿ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ೧೮೬೧-೬೫ ರ ನಡುವೆ ಅಮೇರಿಕಾ ದೇಶದ ಅಧ್ಯಕ್ಷನಾಗಿದ್ದ ‘ಅಬ್ರಹಾಂ ಲಿಂಕನ್’ ನ ವಿಚಾರವನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತಾ, ಹೇಗೆ ಅವನು ಸಾಮಾನ್ಯರಲ್ಲಿ ಹುಟ್ಟಿ, ಬೆಳದು ತನ್ನ ಸಾಮರ್ಥ್ಯ, ಸ್ವಾರ್ಥರಾಹಿತ್ಯ ಮತ್ತು ತ್ಯಾಗದಿಂದ, ಭೂಮಿಪತಿ ಪಟ್ಟವನ್ನು ಏರಿದ, ಎಂದು ಹೇಳುತ್ತಾ ಅಂತಹವರು ತಮ್ಮ ಯೋಗ್ಯತೆಯಿಂದ ಲೋಕಕ್ಕೆ ಸ್ವಾಮಿಯಂತಾಗುತ್ತಾರೆ ಎಂದು ಹೇಳುತ್ತಾರೆ.",
  },
  {
    number: 911,
    english:
      "Sidney was a English Knight. He was injured badly in a battle against Spain. On his death bed, in spite of being very thirsty he refused to take water telling that another soldier lying next to him need it more than him. He derived satisfaction from the uncompromising practice of morality. Remember him and his acts. - Mankutimma\n\n[Translator's note: Read this for the account of Sir Philip Sidney: http://www.poetsgraves.co.uk/sidney.htm]",
    kannada:
      "ರಣದಿ ಬಿದ್ದಾ ನೈನ್ಯಪತಿ ಸಿಡ್ನಿಯುತ್ಕ್ರಮಣ- ।\nದೊಣಗುಬಾಯಿಗೆ ನೀರ್ನೊಡ್ಡಲ್ ಅದನವನು ॥\nತನಗಿಂತ ಕೆಲದ ಭಟಗದು ಸಲ್ವುದೆಂದಿತ್ತು ।\nತಣಿವನಾಂತುದ ನೆನೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೧ ॥",
    kannada_explanation:
      "ರಣರಂಗದಲ್ಲಿ ಬಿದ್ದ ಸೈನ್ಯಾಧಿಪತಿ ‘ಸಿಡ್ನಿ’ಗೆ ಬಾಯಾರಿದಾಗ, ಅವನ ಸೇವಕ ಅವನಿಗೆ ನೀರನ್ನು ನೀಡಲು ಬಂದಾಗ, ಅವನು ತನಗಿಂತ, ತನ್ನ ಕೈಕೆಳಗೆ ಹೋರಾಡುವ ಸಾಮಾನ್ಯ ಸೈನಿಕನಿಗೆ ಇನ್ನೂ ಹೆಚ್ಚು ಬಾಯಾರಿಕೆಯಾಗಿ ಅವನಿಗೆ ಆ ನೀರಿನ ಅವಶ್ಯಕತೆ ಇರಬಹುದೆಂದು, ಆ ನೀರನ್ನು ಅವನಿಗೆ ನೀಡಿ ಸಂತೋಷಪಡುತ್ತಾನೆ. ನೀನೂ ಸಹ ಆ ರೀತಿ ನೀಡಿ ಸಂತಸಪಡು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 912,
    english:
      "One has to live in this world known to his senses and get all teh experiences he can. Then he has to reach out to (think about) entities that are extra sensory - God, Universe, etc.. Once he has a handle on that, then he can control his own senses and create happiness in this world. Such a wise person will attain salvation from the endless cycle of births. - Mankutimma",
    kannada:
      "ಇಂದ್ರಿಯಗಳೊಳು ಬಾಳಿ ಜೀವ ಪಕ್ವಂಗೊಳ್ಳ- ।\nಲಿಂದ್ರಿಯಂಗಳ ಮೀರಿ ಮೇಲೇರಿ ಜಾಣಿಂ- ॥\nದಿಂದ್ರಿಯಂಗಳನಾಳಿ ಲೋಕವಂ ಸಂತಯಿಪ ।\nಬಂಧು ಜೀವನ್ಮುಕ್ತ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೨ ॥",
    kannada_explanation:
      "ಇಂದ್ರಿಯಗಳ ಅನುಭವಗಳನ್ನು ಪಡೆದು, ಬದುಕಿನ ಅನುಭವಗಳಿಂದ ಪಕ್ವವಾಗಿ, ಆ ಇಂದ್ರಿಯಗಳು ನೀಡುವ ಸುಖಗಳ ಅಪೇಕ್ಷೆಯನ್ನು ತೊರೆದು, ಅಂತರಂಗದಿಂದ ಬೆಳೆದು ಮೇಲೆ ಏರಿ, ಜಾಣತನದಿಂದ ಇಂದ್ರಿಯಗಳನ್ನು ಹತೋಟಿಗೆ ತಂದುಕೊಂಡು, ಅನ್ಯರ, ಎಂದರೆ ಇನ್ನೂ ಇಂದ್ರಿಯಗಳ ಸುಳಿಯಲ್ಲಿ ಇರುವವರನ್ನು ಸಂತೈಸುವ ಸ್ಥಿತಿಗೆ ತಲುಪಿದರೆ ಅವನೇ ‘ಜೀವನ್ಮುಕ್ತ ‘ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 913,
    english:
      "Try to get as varied experience as possible. Learn about a lot of things in this world. Life magnanimously. Don't isolate yourself and live in dark corners and edges. Expose yourself to the world. The Sun will infuse freshness and life into this world. Be a part of it. When you do so, death will just be a small matter to you. - Mankutimma",
    kannada:
      "ವಿಸ್ತಾರದಲಿ ಬಾಳು, ವೈಶಾಲ್ಯದಿಂ ಬಾಳು ।\nಕತ್ತಲೆಯ ಮೊಡುಕು ಮೂಲೆಗಳ ಸೇರದಿರು ॥\nಭಾಸ್ಕರನನುಗ್ರಹವೆ ನೂತ್ನ ಜೀವನಸತ್ತ್ವ ।\nಮೃತ್ಯು ನಿನಗಲ್ಪತೆಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೩ ॥",
    kannada_explanation:
      "ವಿಸ್ತಾರದಲ್ಲಿ ಬಾಳು, ವೈಶಾಲ್ಯತೆಯಿಂದ ಬದುಕು, ಅಜ್ಞಾನದಿಂದ ಜಗತ್ತಿನ ಸಂಪರ್ಕ ತೊರೆದು ಮೂಲೆ ಸೇರದಿರು. ಬೆಳಕನ್ನೇ ತೋರುವ ಆ ಭಾಸ್ಕರನ ಅನುಗ್ರಹದಿಂದಲೇ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಎಲ್ಲವೂ ನವನವೀನವಾಗಿ ಮತ್ತೆ ಬದುಕಿನ ಉತ್ಸಾಹವನ್ನು ತುಂಬಿಕೊಳ್ಳುತ್ತವೆ. ಒಂದು ವಿಸ್ತಾರವಾದ ಬದುಕಿನಲ್ಲಿ ‘ಸಾವು’ ಎನ್ನುವುದು ಒಂದು ತೀರ ‘ಗೌಣ’ ವಾದ ವಿಷಯ ಎಂಬುದನ್ನು ತಿಳಿ, ಎನ್ನುವ ಸಂದೇಶವನ್ನು ನೀಡುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 914,
    english:
      "Life in this world is like an ocean. You be a wave in it. Lose all thoughts of being different and separate in the ocean. Wind will be strong and toss you from side to side. Deal with it by floating, rising and just swaying along with it. Enjoy it and treat it like a sport you would be playing. - Mankutimma",
    kannada:
      "ತೆರೆಯಾಗು ವಿಶ್ವಜೀವನದ ದಿವ್ಯಾಬ್ಧಿಯಲಿ ।\nಕರಗಿಸದರಲಿ ನಿನ್ನ ಬೇರೆತನದರಿವ ॥\nಮರುತನುರುಬನು ತಾಳುತೇಳುತೋಲಾಡುತ್ತ ।\nವಿರಮಿಸಾ ಲೀಲೆಯಲಿ -  ಮಂಕುತಿಮ್ಮ ॥ ೯೧೪ ॥",
    kannada_explanation:
      "‘ ನಾನು ಬೇರೆ’ ಎನ್ನುವ ಭಾವವನ್ನು ತೊರೆದು, ಕಡಲಿನಲ್ಲಿ ಗಾಳಿಯ ಬೀಸುವಿಕೆಯಿಂದ, ಮೇಲೇಳುತಾ, ಬೀಳುತಾ ಕಡಲಲ್ಲಿ ಒಂದಾಗುವ ‘ ಅಲೆ’ಯಂತೆ ನೀನೂ ಸಹ ಈ ಜಗತ್ಸಾಗರದಲ್ಲಿ ಮತ್ತು ಪರಮಾತ್ಮನ ಲೀಲೆಯಲ್ಲಿ ಒಂದಾಗಿ ಬಾಳು, ಎಂದು ಆದೇಶವನ್ನಿತ್ತಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 915,
    english:
      "If you look closely, every think mankind does is a waste. There is no ever-lasting achievement. Then, what is the purpose of living. Some say that it is to accumulate as much good karma as possible. Even that seems wrong and leads to some pride and arrogance. If one smiles and makes others smile as much as possible, then there is some light moments on this life. Rest everything in this world is just a burden. - Mankutimma",
    kannada:
      "ಬರಿಯ ಪೊಳ್ಳು ವಿಚಾರ ಮಾನುಷವ್ಯಾಪಾರ ।\nಪರಿಕಿಸಲು ಪುಣ್ಯವೆಂಬುದುಮಹಂಕಾರ ॥\nಅರಳಿ ಮೊಗವನಿತಿನಿತು, ನಕ್ಕು ನಗಿಸಿರೆ ಸಾರ ।\nಹೊರೆ ಮಿಕ್ಕ ಸಂಸಾರ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೫ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ಮನುಷ್ಯ ಮನುಷ್ಯರ ನಡುವೆ ನಡೆಯುವುದೆಲ್ಲಾ ಹುರುಳು-ತಿರುಳು ಇಲ್ಲದ ಪೊಳ್ಳುವಿಚಾರ. ಸೂಕ್ಷ್ಮವಾಗಿ ಪರೀಕ್ಷಿಸಿ ನೋಡಿದರೆ ಪುಣ್ಯವೆಂಬುದೂ ಸಹ ಅಹಂಕಾರದ ಮಾತು. ಮುಖವನ್ನು ಪ್ರಸನ್ನವಾಗಿಟ್ಟುಕೊಂಡು ತಾನೂ ನಕ್ಕು, ಇತರರನ್ನೂ ನಗಿಸಿದರೆ, ಬದುಕು ಸತ್ವಯುತವಾಗಿರುತ್ತದೆ. ಮಿಕ್ಕ ಸಂಸಾರವೆಲ್ಲ ಕೇವಲ ಭಾರವಾದ ಹೊರೆಯಾಗಿರುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 916,
    english:
      "So what if you have to take thousands of births? What have you got to lose? So what if you have to do a lot of work (actions) in those lives? What is your difficulty? As long as God stays in your heart (you know the truth about God and creation), then why would you care about the illusions of this world created by Maya? All of them will be as simple as friendly banter with your wife. - Mankutimma",
    kannada:
      "ಜನ್ಮ ಸಾವಿರ ಬರಲಿ, ನಷ್ಟವದರಿಂದೇನು? ।\nಕರ್ಮ ಸಾವಿರವಿರಲಿ, ಕಷ್ಟ ನಿನಗೇನು? ॥\nಬ್ರಹ್ಮ ಹೃದಯದಿ ನಿಲ್ಲೆ ಮಾಯೆಯೇಂಗೈದೊಡೇಂ? ।\nಇಮ್ಮಿದಳ ಸರಸವದು - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೬ ॥",
    kannada_explanation:
      "ಸಾವಿರಾರು ಜನ್ಮಗಳು ಬರಲಿ, ಅದರಿಂದ ನಷ್ಟವೇನೂ ಇಲ್ಲ. ಆ ಜನ್ಮಗಳಲ್ಲಿ, ನಮ್ಮ ಕರ್ಮಗಳು ಸಾವಿರಾರು ಆಗಲಿ, ‘ಬ್ರಹ್ಮ’ ಹೃದಯದಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ನಿಂತರೆ, ಅದನ್ನು ಅನುಭವಿಸಲು ನಮಗೇನು ಕಷ್ಟ? ಈ ಮಾಯೆಯೆಂಬ ಮೋಹಿನಿ ಎನು ಮಾಡಿದರೇನು? ಈ ಜಗತ್ತಿನ ಲೀಲಾ ವಿನೋದವನ್ನು, ಪ್ರೇಯಸಿಯ ಸರಸವೆಂಬಂತೆ ಬಗೆದು ಶಾಂತವಾಗಿ ಜೀವಿಸಬಹುದು ಎಂದು ಬದುಕಿನಲ್ಲಿ ಇದ್ದು, ಅದನ್ನು ಅನುಭವಿಸುತ್ತಾ ಇದ್ದರೂ, ನಿರ್ಲಿಪ್ತತೆಯ ಜೀವನದ ಮಾರ್ಗವನ್ನು ತೋರಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 917,
    english:
      "To laugh(and be happy) is natural to all beings. To make another happy is a noble deed. Even better is being happy by seeing others happy. You must pray to God to make you happy, to give you ability to make others happy, to be happy by making others happy. That is the best boon you can ask for. - Mankutimma",
    kannada:
      "ನಗುವು ಸಹಜದ ಧರ್ಮ; ನಗಿಸುವುದು ಪರಧರ್ಮ ।\nನಗುವ ಕೇಳುತ ನಗುವುದತಿಶಯದ ಧರ್ಮ ॥\nನಗುವ ನಗಿಸುವ ನಗಿಸಿ ನಗುತ ಬಾಳುವ ವರವ ।\nಮಿಗೆ ನೀನು ಬೇಡಿಕೊಳೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೭ ॥",
    kannada_explanation:
      "ನಗುವುದು ಮಾನವನ ಸಹಜವಾದ ಧರ್ಮ. ನಗಿಸುವುದು ನಾವು ಆಚರಿಸಬಹುದಾದ, ಪರಧರ್ಮ. ಮತ್ತೊಬ್ಬರ ನಗುವನ್ನು ಕೇಳುತ್ತಾ, ನಾವು ನಗುವುದು ಅತಿಶಯದ ಧರ್ಮ. ನಾವು ನಗುವ, ನಗಿಸುವ, ಮತ್ತೊಬ್ಬರನ್ನು ನಗಿಸುವಾಗ ನಾವೂ ನಗುವಂತಹ ಭಾವವಿರಲಿ ಎಂದು ಆ ವರವನ್ನು, ನೀನು ಅಧಿಕವಾಗಿ ಪರಮಾತ್ಮನಲ್ಲಿ ಬೇಡಿಕೊಳ್ಳು, ಎಂದು ಒಂದು ಅದ್ಭುತ ಸಂದೇಶವನ್ನು ಹೇಳಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು, ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 918,
    english:
      "You have contemplated on it for a long time - about the mystery of life. After much thinking, you have finally mastered the truth. For the outside world, you have conquered the truth. But deep in side your conscience, when you are silently meditating - you will remember the truth again and again and surrender to it. - Mankutimma",
    kannada:
      "ನೆನೆನೆನೆದು ಗಹನವನು, ಜೀವನರಹಸ್ಯವನು ।\nಮನವ ಬಳಲಿಸಿ ಸೋಲಿಸಿರುವ ತತ್ತ್ವವನು ॥\nಮನದೇಕಾಂತದಲಿ ಮೌನದ ಧ್ಯಾನದಲಿ ।\nಮಣಿಮಣಿದು ಕೈಮುಗಿಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೮ ॥",
    kannada_explanation:
      "ಮೌನದದಿಂದ ಮಾಡುವ ಧ್ಯಾನದಲ್ಲಿ ಮತ್ತು ಮನನ ಮಾಡುವಾಗಿನ ಏಕಾಂತದಲ್ಲಿ, ನಿನ್ನ ಮನವನ್ನು ಬಳಲಿಸಿ, ಸೋಲಿಸಿರುವ ಆ ಗಹನವಾದ ಜೀವನ ರಹಸ್ಯವನ್ನು ನೆನೆನೆನೆದು, ಬಾರಿ ಬಾರಿ ತಲೆಬಾಗಿ, ಕೈ ಮುಗಿಯೋ ಎಂದು ಒಂದು ಆದೇಶವನ್ನು ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 919,
    english:
      "Birth of life is a mystery. End of life is also a mystery. The lief in between is nothing but a mirage. If you think deeply, this is the ultimate truth. The whole world is an illusion created by Brahma. The only thing that stands on its own truth is the supreme soul itself (Brahma himself). - Mankutimma",
    kannada:
      "ಜೀವದುದಯ ರಹಸ್ಯ, ಜೀವವಿಲಯ ರಹಸ್ಯ ।\nಜೀವನದ ದೃಶ್ಯ ಮರುವಿನ ಬಿಸಿಲ್ಗುದುರೆ ॥\nಭಾವಿಸಲಿದೇ ತತ್ತ್ವ; ಬ್ರಹ್ಮಮಾಯೆಯೆ ವಿಶ್ವ ।\nಕೇವಲಾತ್ಮ ಬ್ರಹ್ಮ - ಮಂಕುತಿಮ್ಮ ॥ ೯೧೯ ॥",
    kannada_explanation:
      "ಒಂದು ಜೀವಿಯ ಹುಟ್ಟು ಮತ್ತು ಸಾವು ಎರಡೂ ನಮಗೆ ರಹಸ್ಯವಾಗಿಯೇ ಇದೆ. ಇನ್ನು ಜೀವನದ ದೃಶ್ಯವೋ, ಮರಳುಗಾಡಿನ ಮರೀಚಿಕೆಯಂತೆ ಇದೆ. ನಾವು ಇಷ್ಟನ್ನು ಮಾತ್ರ ಭಾವಿಸಿಕೊಳ್ಳಬಹುದು ಮತ್ತು ನಮಗೆ ಆರ್ಥವಾಗುವುದು ಇಷ್ಟೇ ತತ್ವ. ಪರಮಾತ್ಮನು ಸೃಷ್ಟಿಸಿರುವ ಮಾಯೆಯೇ ‘ವಿಶ್ವ’. ಮಾಯೆಯಿಂದ ಹೊರಬಂದರೆ ನಮಗೆ ಕೇವಲ ಬ್ರಹ್ಮದ ಅನುಭವವಾಗುತ್ತದೆ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 920,
    english:
      "One must pray thus: Let the anxiety in my heart and restlessness in my senses die down. Let my life dissolve in the life of the world. Let the earth accept me in its womb. Let the world forget me. - Mankutimma",
    kannada:
      "ಆರಲೆನ್ನಯ ಹೃದಯ ಕರಣಗಳ ಕಾವುಗಳು ।\nಸೇರಲೆನ್ನಯ ಜೀವ ವಿಶ್ವಜೀವದಲಿ ॥\nಧಾರುಣಿಯ ಮಡಿಲೆನ್ನ ಕೊಳಲಿ; ಜಗ ಮರೆತಿರಲಿ ।\nಹಾರಯಿಸು ನೀನಿಂತು - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೦ ॥",
    kannada_explanation:
      '"ಪುಟಿದು ಕುಣಿದೇಳುವ ನನ್ನ ಮನಸ್ಸು ಬುದ್ಧಿ ಮತ್ತು ದೇಹದ ತುಡಿತಗಳೆಲ್ಲವೂ ಶಾಂತವಾಗಲಿ. ನನ್ನ ಜೀವ ವಿಶ್ವಾತ್ಮದಲ್ಲಿ ಸೇರಲಿ. ಭೂಮಿ ನನ್ನನ್ನು ತನ್ನೊಳಗೆ ಸೇರಿಸಿಕೊಳ್ಳಲಿ ಮತ್ತು ಜಗತ್ತು ನನ್ನನ್ನು ಮರೆತುಹೋಗಲಿ," ಎನ್ನುವಂತಹ ಬಯಕೆಗಳನ್ನಿಟ್ಟುಕೋ ಎಂದು, ಬದುಕಿನಿಂದ ನಿರ್ಗಮಿಸುವಾಗ ಯಾವ ರೀತಿಯ ಮನೋಭಾವವಿಟ್ಟುಕೊಳ್ಳಬೇಕೆಂಬುದರ ಸೂಚನೆ ನೀಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.',
  },
  {
    number: 921,
    english:
      "One must try to get into this state of mind: I will enter the ocean of lives (this world), will drown, will drown again and again till I lose all feelings of being different from the world. I will watch the play between the earth and the sky and dance with joy and forget myself. What a beautiful relaxed state of mind it is indeed? - Mankutimma",
    kannada:
      "ಇಳಿಯುವೆನು ಮುಳುಗುವೆನು ವಿಶ್ವಾತ್ಮಸಾಗರದಿ ।\nಮುಳುಮುಳುಗಿ ಕಳೆಯುವನು ಬೇರೆತನದರಿವ ॥\nಇಳೆಬಾನ್ಗಳಾಟದಲಿ ಕುಣಿಯುವೆನು ಮೈಮರೆತು ।\nಗಳಿಸೀ ಮನಃಸ್ಥಿತಿಯ - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೧ ॥",
    kannada_explanation:
      "ನಾನು ಬೇರೆ, ನಾನು ಎಲ್ಲರಿಗಿಂತ ಭಿನ್ನ ಎನ್ನುವ ಭಾವವನ್ನು ಕಳೆದುಕೊಂಡು, ವಿಶ್ವಾತ್ಮಭಾವದ ಸಾಗರಲ್ಲಿ ನಾನು ಇಳಿಯುತ್ತೇನೆ, ಮುಳುಗುತ್ತೇನೆ, ಈ ಆಕಾಶ ಮತ್ತು ಧಾರೆಗಳ ನಡುವಿನ ಬಾಳಿನಲ್ಲಿ ಮೈ ಮರೆತು ಕುಣಿಯುತ್ತೇನೆ, ಎನ್ನುವಂತಹ ಆಶಯಗಳನ್ನು ತುಂಬಿಕೊಂಡ ಮನಸ್ಸಿನ ಸ್ಥಿತಿಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳುತ್ತೇನೆ ಎಂದು ಹೇಳುತ್ತಾ, ನಮಗೂ ಅಂತಹ ಸ್ಥಿತಿಗೆ ಹೋಗಲು ಮಾರ್ಗವನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ನಮ್ಮ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 922,
    english:
      "Now is the time to bow to everybody - to the relatives, to the partners, to the people who gave you joy, to those who cleansed the mind, to those who became your teacher by making you realize that the world is just an illusion; enough with it. Pray to all of them to accept your bow. - Mankutimma",
    kannada:
      "ಎಲ್ಲರಿಗಮೀಗ ನಮೊ - ಬಂಧುಗಳೆ, ಭಾಗಿಗಳೆ ।\nಉಲ್ಲಾಸವಿತ್ತವರೆ, ಮನವ ತೊಳೆದವರೆ ॥\nಟೊಳ್ಳು ಜಗ, ಸಾಕು ಬಾಳ್ - ಎನಿಸಿ ಗುರುವಾದವರೆ ।\nಕೊಳ್ಳಿರೀ ನಮವನೆನು- ಮಂಕುತಿಮ್ಮ ॥ ೯೨೨ ॥",
    kannada_explanation:
      "ನನ್ನ ಬಂಧುಗಳೇ, ನನ್ನ ಬದುಕನ್ನು ಹಂಚಿಕೊಂಡವರೇ, ಎನಗೆ ಸಂತೋಷವನ್ನು ಕೊಟ್ಟವರೇ, ಎನ್ನ ಮನವನ್ನು ತೊಳೆದವರೇ, ಈ ಜಗತ್ತು ಟೊಳ್ಳು, ಈ ಬಾಳು ಸಾಕು ಎನ್ನುವಂತಹ ಭಾವವನ್ನು ಎನಗೆ ಬರುವಂತೆ ಮಾಡಿ, ನನ್ನ ಗುರುಸ್ಥಾನದಲ್ಲಿರುವವರೇ, ನಿಮಗೆಲ್ಲರಿಗೂ ನನ್ನ ನಮಸ್ಕಾರ, ಎಂದು ಹೇಳುತ್ತಾ, ನೀವೂ ಸಹ ಅಂತಹ ಭಾವ ಮನಸ್ಸಿನಲ್ಲಿ ತುಂಬಿಕೊಂಡು ನೀವು ನಮನವನ್ನು ಹೇಳಿ ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 923,
    english:
      "Who can be your teacher? You are an orphan. You learn from anyone who is willing to teach - just like eating left overs from anyone. Lead your life thus. Why do you need a named relationship - teacher and student? You are your own teacher.  - Mankutimma",
    kannada:
      "ನಿನಗಾರು ಗುರುವಹರು? ನೀನೊಬ್ಬ ತಬ್ಬಲಿಗ ।\nಉಣುತ ದಾರಿಯ ಕೆಲದಿ ಸಿಕ್ಕಿದೆಂಜಲನು ॥\nದಿನವ ಕಳೆ; ಗುರುಶಿಷ್ಯಪಟ್ಟಗಳು ನಿನಗೇಕೆ? ।\nನಿನಗೆ ನೀನೇ ಗುರುವೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೩ ॥",
    kannada_explanation:
      "ನಿನಗೆ ಯಾರು ಗುರುವಾಗುತ್ತಾರೆ? ನೀನೊಬ್ಬ ಗತಿಯಿಲ್ಲದವ. ದಾರಿಯಲ್ಲಿ ಸಿಕ್ಕಿದೆಂಜಲನ್ನು ತಿನ್ನುತ್ತ ದಿನವನ್ನು ದೂಡು. ನಿನಗೊಬ್ಬ ಗುರು, ನೀನೊಬ್ಬ ಶಿಷ್ಯ ಎಂಬ ಪಟ್ಟಗಳು ನಿನಗೇಕೆ? ನಿನಗೆ ನೀನೆ ಗುರುವೋ, ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 924,
    english:
      "It is not used for making roof for the house. It has no flowers that a lady can wear on her head. It does not have sweet fruits, neither juicy nuts. The garden weed is thus utterly useless. You are just like that. Once dried (dead), just equivalent to firewood. - Mankutimma",
    kannada:
      "ಮನೆಯ ಮಾಳಿಗೆಗಲ್ಲ, ಮುಡಿಯ ಕೊಪ್ಪಿಗೆಗಲ್ಲ ।\nಇನಿವಣ್ಣು ತನಿಯ ಕಾಳೆಂಬುದೇನಿಲ್ಲ ॥\nಬಣಗು ಕುರಿಚಲು ಗಿಡದ ಬಾಳೇನು? ನೀನಂತು ।\nಒಣಗಿದೊಡೆ ಸವುದೆ ಸರಿ - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೪ ॥",
    kannada_explanation:
      "ನೀನು ಒಂದು ಕುರಿಚಲು ಗಿಡವಿದ್ದಂತೆ. ಹೇಗೆ ಕುರಿಚಲು ಗಿಡ, ಯಾವ ಮನೆಯ ಮಾಳಿಗೆಗೆ ತೊಲೆಯೋ, ಧೂಲವೋ ಆಗುವುದಿಲ್ಲವೋ ಅಥವಾ ಯಾರ ಮುಡಿಗೂ ಅಂದ ಮತ್ತು ಸುಗಂಧವನ್ನೀಯುವ ಹೂಗಳನ್ನು ಅರಳಿಸುವುದಿಲ್ಲವೋ ಅಥವಾ ರುಚಿಯಾದ ಹಣ್ಣೋ ಅಥವಾ ಅಹಾರವಾಗಬಹುದಾದ ಧಾನ್ಯವನ್ನೋ ಕೊಡುವುದಿಲ್ಲವೋ ಹಾಗೆಯೇ ನಿನ್ನ ಜೀವನವೂ ಸಹ, ನಿಷ್ಪ್ರಯೋಜಕ. ಹೇಗೆ ಕುರಿಚಲು ಗಿಡ ಒಣಗಿದರೆ ಕೇವಲ ಒಲೆಗೆ ಒಡ್ಡಲು ಸೌದೆಯಾಗಬಹುದೋ ಅದೇ ರೀತಿ ನೀನು ಎಂದು, ನಮ್ಮೆಲ್ಲರ ಬದುಕಿನ ಪರಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 925,
    english:
      "When will start living like a mendicant - having just a carry bag as a possession, going from town to town, singing songs, forgetting about burdens, letting the joys and griefs not affect your mind? That day, you will be truly happy. - Mankutimma",
    kannada:
      "ಜೋಳಿಗೆಯ ಪಿಡಿದು ನೀನೂರಿನೂರಿಗೆ ನಡೆದು ।\nಹೇಳುತ್ತ ಹಾಡುಗಳ, ಭಾರಗಳ ಮರೆತು ॥\nಬೀಳು ಮೇಲುಗಳೆಣಿಕೆಯಿಂ ಮನವನಲುಗಿಸದೆ ।\nಬಾಳ ನಡಸುವುದೆಂದೊ?- ಮಂಕುತಿಮ್ಮ ॥ ೯೨೫ ॥",
    kannada_explanation:
      'ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ಒಂದು ವಿರಕ್ತಭಾವದ ಆಶಯವನ್ನು ಹೊತ್ತು, ತಮಗೆ ತಾವೇ, "ನೀನು, ಕಷ್ಟ ಸುಖಗಳ ಗೆರೆಯನ್ನು ದಾಟಿದ ಮನಸ್ಸನ್ನು ಹೊಂದಿದ ಜೋಗಿಯಂತೆ, ಜೋಳಿಗೆಯನು ಹಿಡಿದು, ಊರಿಂದ ಊರಿಗೆ ಹಾಡುತ್ತಾ, ಬದುಕಿನ ಭಾರವನು ಮರೆತು ಬಾಳನ್ನು ನಡೆಸುವುದು ಎಂದೋ?" ಎಂದು ಕೇಳಿಕೊಳ್ಳುತ್ತಾ, ಅಂತಹ ಮುಕ್ತ ಭಾವದ ಬದುಕನ್ನು ನಡೆಸಿದರೆ ಚೆನ್ನ ಎನ್ನುವಂತಹ ಸಂದೇಶವನ್ನು ನಮಗೂ ನೀಡಿದ್ದಾರೆ.',
  },
  {
    number: 926,
    english:
      "One must leave his house when he stops feeling for the house, when he does not have the strength to clean up the mess. He must leave the world. He must never become a burden to the world. he must go away and disappear so that the world does not even remember him. - Mankutimma",
    kannada:
      "ತೊಲಗೆಲವೊ ಮನೆಯಿಂದ ಮನವು ಬರಡಾದಂದೆ ।\nಹೊಲಸ ತೊಳೆಯಲು ತೋಳ್ಗೆ ಬಲ ಕುಗ್ಗಿದಂದೆ ॥\nತೊಲಗು ಜಗದಿಂ ದೂರ, ಇಳೆಗಾಗದಿರು ಭಾರ ।\nತೊಲಗಿ ನೀಂ ಮರೆಯಾಗು - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೬ ॥",
    kannada_explanation:
      "ಮನಸ್ಸು ಬರಡಾದಂದು, ಮನದ ಹೊಲಸನ್ನು ತೊಳೆಯಲು ಶಕ್ತಿ ಕುಗ್ಗಿದರೆ, ಜಗಕ್ಕೆ ಮತ್ತು ಜಗದ ಜನರಿಗೆ ಭಾರವಾಗದೆ, ಮನೆ ಬಿಟ್ಟು ದೂರ ಯಾರಿಗೂ ಹೊರೆಯಾಗದ ಹಾಗೆ ಹೊರಟು ಬಿಡು ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 927,
    english:
      "Go to a place where there is no one. Go to the cemetery. Go to place where you will not get attached to. Go to a place where you will not feel sad. Dissolve your mind (into the soul of supreme conscious). Go and sleep there without even parting your lips. - Mankutimma",
    kannada:
      "ತೊಲಗು ನಿರ್ಜನದೆಡೆಗೆ; ತೊಲಗು ಮಸಣದ ಕಡೆಗೆ ।\nಒಲವ ಬೇಡಿಸದೆಡೆಗೆ; ಅಳುವು ಬರದೆಡೆಗೆ ॥\nವಿಲಯವಾಗಿಸಿ ಮನವನ್, ಅಲುಗಾಡಿಸದೆ ತುಟಿಯ ।\nತೊಲಗಿ ಮಲಗಲ್ಲಿ ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೭ ॥",
    kannada_explanation:
      "ಯಾರೂ ಇಲ್ಲದ ಕಡೆಗೆ, ಸಾವಿನೆಡೆಗೆ ತೊಲಗು. ಯಾರಿಂದಲೂ ಪ್ರೀತಿ ಒಲವು ಬಯಸದ ಮತ್ತು ದುಃಖವಿಲ್ಲದ ಸ್ಥಿತಿಯಲ್ಲಿ ನಿನ್ನ ಮನಸ್ಸನ್ನು ಲಯಗೊಳಿಸು. ಮೌನದಿಂದ ನೀನು ಅಂತಹ ಸ್ಥಿತಿಯಲ್ಲಿ ಮಲಗು ಎಂದು ಆದೇಶಿಸುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 928,
    english:
      "They say a wild elephant knows its end time in advance. When it is time, it enters a far away cave in the forest and silently lets go of its life there. You should announce your end like that- by retreating from the world. - Mankutimma",
    kannada:
      "ಕಡೆಗಾಲವನು ತಾನೆ ಮುನ್ನರಿತು ಕಾಡಾನೆ- ।\nಯಡವಿಯೊಳದೊಂದು ದೂರದ ಗವಿಯನೈದಿ ॥\nಬಿಡುವುದಾಯೆಡೆ ಮೌನದಿಂದಸುವನೆನ್ನುವರು ।\nಕಡೆಯ ಸಾರಂತು ನೀಂ- ಮಂಕುತಿಮ್ಮ ॥ ೯೨೮ ॥",
    kannada_explanation:
      "‘ ಕಾಡಾನೆ ‘ ತನ್ನ ಮರಣ ಸನ್ನಿಹಿತವಾಯಿತೆಂದು ಮೊದಲೇ ಅರಿತು, ಕಾಡಿನಲ್ಲಿನ ಒಂದು ಗುಹೆಯೊಳಕ್ಕೆ ಸೇರಿ, ಮೌನವಾಗಿ ತನ್ನ ಉಸಿರನ್ನು ಬಿಡುವುದು ಎಂದು ಹೇಳುತ್ತಾರೆ. ನೀನೂ ಸಹ, ನಿನ್ನ ಅಂತ್ಯಕಾಲ ಹತ್ತಿರವಾದಾಗ, ಹಾಗೆ ದೂರ ಸರಿದು, ಮೌನವಾಗಿ ಕೊನೆಯುಸಿರನ್ನು ಬಿಟ್ಟು ಈ ಲೋಕದಿಂದ ಸರಿದು ಹೋಗು ಎಂದು, ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 929,
    english:
      "You did not come into this world silently. All your life you have been struggling and fighting. Can let this chaos be at least on your last day? Pray for a death in your sleep. - Mankutimma",
    kannada:
      "ಸದ್ದುಮಾಡದೆ ನೀನು ಜಗಕೆ ಬಂದವನಲ್ಲ ।\nಒದ್ದಾಟ ಗುದ್ದಾಟ ಬಾಳೆಲ್ಲವಾಯ್ತು ॥\nಗದ್ದಲವ ಬಿಡಲು ಕಡೆದಿನವಾನುಮಾದೀತೆ? ।\nನಿದ್ದೆವೊಲು ಸಾವು ಪಡೆ - ಮಂಕುತಿಮ್ಮ ॥ ೯೨೯ ॥",
    kannada_explanation:
      "ನೀನು ಈ ಜಗತ್ತಿಗೆ ಬರುವಾಗ ಸದ್ದುಮಾಡಿಕೊಂಡೇ ಬಂದವನು ಮತ್ತು ಬಾಳಿನುದ್ದಕ್ಕೂ ಗದ್ದಲದಲ್ಲೇ ಬದುಕಿದವನು. ಕಡೆಯಪಕ್ಷ ನಿನ್ನ ಅಂತಿಮ ಕ್ಷಣದಲ್ಲಾದರೂ ಈ ಗದ್ದಲದಿಂದ ಹೊರಬಂದು ನಿದ್ರೆಯಂತಹ ಸಾವನ್ನು ಪಡೆ ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 930,
    english:
      "Pray for such a passing (death). Let you not have to wait for someone to hand feed you. Let you be never heavy for other's shoulders. Let no attachment bind you to them. - Mankutimma",
    kannada:
      "ಆರ ಕೈತುತ್ತಿಗಂ ನಿನ್ನ ಕಾಯಿಸದೆ ವಿಧಿ ।\nಯಾರ ಭುಜಕಂ ನಿನ್ನ ಭಾರವಾಗಿಸದೆ ॥\nಆರ ಸೆಲೆ ಸುಳಿವುಮಂಟದವೊಲಾಗಿಸಿ ನಿನ್ನ ।\nಪಾರಗಾಣಿಸ ಬೇಡು - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೦ ॥",
    kannada_explanation:
      '"ಯಾರೋ ನೀಡುವ ಕೈ ತುತ್ತಿಗೆ ನಾನು ಕಾಯುವಂತಾಗದೆ, ಯಾರ ಭುಜಕ್ಕೂ ನಾನು ಹೊರೆಯಾಗದೆ, ಯಾರದೇ ಪ್ರೀತಿ, ಪ್ರೇಮ ಮತ್ತು ಮೋಹಗಳ ಸೆಳೆತಕ್ಕೆ ಅಂಟದಹಾಗೆ, ಈ ಜಗತ್ತಿನಿಂದ ನಿರ್ಗಮಿಸುವ ದಾರಿ ತೋರೋ " ಎಂದು ಪರಮಾತ್ಮನಲ್ಲಿ ಬೇಡು ಎಂದು, ತಮಗೇನು ಬೇಕೋ ಅದನ್ನು ಹೇಳುತ್ತಾ, ನೀವೂ ಸಹ ಅದನ್ನೇ ಬೇಡಿ ಪಡೆದುಕೊಳ್ಳಿ ಎಂದು ಆದೇಶಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.',
  },
  {
    number: 931,
    english:
      "If you pass on while your mind is immersed in listening to the words from vedanta and other scriptutres like namaka and anuvaaka, songs sung in the ragas kedara, gauLa, maniranga and aarabhi - then it is a sure path to salvation (no re-births). - Mankutimma",
    kannada:
      "ವೇದಾಂತವಾಕ್ಯಗಳ ನಮಕಾನುವಾಕಗಳ ।\nಕೇದಾರಗೌಳ ಮಣಿರಂಗಾರಭಿಗಳ ॥\nನಾದಂಗಳಲಿ ಮನವ ಬೆರಸಿ ನೀನುತ್ಕ್ರಮಿಸೆ ।\nಸಾಧನವೊ ಮುಕ್ತಿಗದು - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೧ ॥",
    kannada_explanation:
      "ವೇದಾಂತದ ವಾಕ್ಯಗಳನ್ನು ಅಥವಾ ಉಪನಿಷತ್ತಿನ ಸಾರವನ್ನು ಸಾರುವ ವಾಕ್ಕುಗಳಲ್ಲಿ ಅಥವಾ ಕೇದಾರಗೌಳ, ಮಣಿರಂಗ ಅಥವಾ ಆರಭಿಯಂತಹ ಸಂಗೀತದ ರಾಗಗಳಲ್ಲಿನ ವಿಸ್ತಾರವನ್ನು ಕೇಳುತ್ತಾ ಅದರೊಳಗೆ ತಲ್ಲೀನನಾಗಿ ನೀನು ಈ ಜಗತ್ತನ್ನು ತೊರೆದರೆ, ಅದೇ ಮುಕ್ತಿಗೆ ಸಾಧನ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 932,
    english:
      "Creator (and his creation) is like a ocean of mesmerizing music involving raagas like mohana, ananda bhairavi, shankarabharana, shaahana, kuranji, kedaara, kaapi. You soak it all in and drown in it. - Mankutimma",
    kannada:
      "ಮೋಹನಾನಂದಭೈರವಿ ಶಂಕರಾಭರಣ ।\nಶಾಹನ ಕುರಂಜಿ ಕೇದಾರ ಕಾಪಿಗಳ ॥\nಮೋಹ ಸರ್ವಸ್ವಗಳ ರಾಗಾಬ್ಧಿಯೋ ಬ್ರಹ್ಮ ।\nಗಾಹಿಸದರೊಳಗೆ ನೀಂ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೨ ॥",
    kannada_explanation:
      "ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಸಂಗೀತದಲ್ಲಿ ಬಹಳ ಆಸಕ್ತಿಯುಳ್ಳವರಾಗಿದ್ದರು, ಸ್ವತಃ ವಾಗ್ಗೇಯಕಾರರಾಗಿದ್ದರು ಮತ್ತು ಸಂಗೀತ ಶಾಸ್ತ್ರವನ್ನು ಚೆನ್ನಾಗಿ ಬಲ್ಲವರಾಗಿದ್ದರು. ಹಾಗಾಗಿ ಅವರು ಏನೆನ್ನುತ್ತಾರೆ ನೋಡಿ!!!!! ‘ಮೋಹನ, ಆನಂದಭೈರವಿ, ಶಂಕರಾಭರಣ, ಶಾಹನ, ಕುರಂಜಿ, ಕೇದಾರ, ಕಾಪಿ’ ಗಳಂತಹ ರಾಗಗಳಲ್ಲಿ ಹೊರ ಹೊಮ್ಮುವ ಸಂಗೀತವು ಪರಬ್ರಹ್ಮನನ್ನು ಆರಾಧಿಸುವ ರಾಗಗಳ ಕಡಲು. ಆ ವಿಸ್ತಾರವಾದ ರಾಗಗಳ ಕಡಲಲ್ಲಿ ನೀನು ಮುಳುಗಿ ಲೀನವಾಗು ಎಂಬ, ಕಿವಿಮಾತನ್ನು ಹೇಳಿದ್ದಾರೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 933,
    english:
      "Life is hard. It is difficult to understand what is the right thing to do. One may have read and learnt about a thousand subtleties about morality and wisdom. But if not even a little soaks into his character, then it is all a waste. When it is not in one's character to be moral, the only way out is to brood over each decision carefully. - Mankutimma",
    kannada:
      "ಕಷ್ಟ ಜೀವದ ಪಾಕ; ಕಷ್ಟ ಧರ್ಮವಿವೇಕ ।\nಎಷ್ಟೆಷ್ಟು ನೀತಿಯುಕ್ತಿಗಳ ಬಗೆದಡೆಯುಂ ॥\nಇಷ್ಟಷ್ಟು ನಿನ್ನೊಳ್ ಒಳಿತಿಳಿವಿಲ್ಲದಿರೆ ನಷ್ಟ ।\nದೃಷ್ಟಿಸೂಕ್ಷ್ಮವೆ ಗತಿಯೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೩ ॥",
    kannada_explanation:
      "ಜೀವ ಪಕ್ವವಾಗುವುದು ಕಷ್ಟ. ಧರ್ಮದ ವಿವೇಕ ಬರುವುದೂ ಸಹ ಕಷ್ಟ. ಎಷ್ಟು ನೀತಿಕಥೆಗಳನ್ನು ಓದಿ, ಕೇಳಿ ಅರಿತುಕೊಂಡರೂ, ಅಂತರಂಗದಲ್ಲಿನ ವಿವೇಕ ಉದ್ದೀಪನವಾಗದಿದ್ದರೆ ಪ್ರಯೋಜನವಿಲ್ಲ. ಅವುಗಳನ್ನು ಅರಿಯಲು ಸೂಕ್ಷ್ಮ ದೃಷ್ಟಿಯಿರಬೇಕು ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 934,
    english:
      "There are hundreds of sects (religions) in this world. You are free to choose what ever you feel is true. Once you get the summary of what that religion is all about, you should contemplate on it - just like you make a dish after getting the ingredients. You will get your dish ready. Like that, every man's religion is his own. - Mankutimma",
    kannada:
      "ನೂರಾರು ಮತವಿಹುದು ಲೋಕದುಗ್ರಾಣದಲಿ ।\nಆರಿಸಿಕೊ ನಿನ್ನ ರುಚಿಗೊಪ್ಪುವುದನದರೊಳ್ ॥\nಸಾರದಡುಗೆಯನೊಳವಿಚಾರದೊಲೆಯಲಿ ಮಾಡು ।\nಬೇರೆ ಮತಿ ಬೇರೆ ಮತ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೪ ॥",
    kannada_explanation:
      "ಈ ಜಗತ್ತಿನಲ್ಲಿ ನೂರಾರು ಮತಗಳಿವೆ. ನಿನ್ನ ಮನಸ್ಸಿಗೆ ಇಷ್ಟವಾದ ಯಾವುದಾದರೊಂದು ಮತವನ್ನು ನೀನು ಆರಿಸಿಕೋ. ನಿನ್ನ ಮನಸ್ಸಿನ ಒಲೆಯಲ್ಲಿ ಆ ವಿಚಾರವನ್ನು ಅಡುಗೆಮಾಡಿ ಸಾರವನ್ನು ಅನುಭವಿಸು. ಯಾರ ಬುದ್ಧಿ ಹೇಗಿರುತ್ತದೋ ಹಾಗೆ ಅವರ ಮತ, ಎಂದರೆ ಅಭಿಪ್ರಾಯ ಹಾಗಿರುತ್ತದೆ, ಎಂದಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 935,
    english:
      "There are so many herbs - pepper, long pepper, ginger, cummins. All of them are medicines. Each ailment is different and requires different medicine. Just like that, you have so many formulas to help you when you are faced with moral dilemmas. You are considered wise if you know when to apply what formula.  - Mankutimma",
    kannada:
      "ಮೆಣಸು ಹಿಪ್ಪಲಿ ಶುಂಠಿ ಜೀರಿಗೆಗಳೆಲ್ಲ ಸರಿ ।\nಅನುವಪ್ಪುದೊಂದೊಂದು ರೋಗಕೊಂದೊಂದು ॥\nನಿನಗಮಂತೆಯೆ ನೂರು ನೀತಿಸೂತ್ರಗಳಿರಲು ।\nಅನುವನರಿವುದೆ ಜಾಣು - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೫ ॥",
    kannada_explanation:
      "ಮೆಣಸು ಹಿಪ್ಪಲಿ ಶುಂಠಿ ಜೀರಿಗೆ ಮುಂತಾದ ಪದಾರ್ಥಗಳು ಔಷಧೀಯ ಗುಣಗಳನ್ನು ಹೊಂದಿದ್ದು, ನಮ್ಮ ದೇಹದ ಒಂದೊಂದು ರೋಗಕ್ಕೆ ಒಂದೊಂದು ಔಷಧಿಯಂತೆ ಸೂಕ್ತವಾಗಿರುತ್ತವೆ. ಅದೇ ರೀತಿ ನಮ್ಮ ಮಾನಸಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ರುಗ್ಣತೆ ಅಥವಾ ಖಾಯಿಲೆಯನ್ನು ವಾಸಿಮಾಡಲು ನೂರಾರು ನೀತಿ ಸೂತ್ರಗಳು ಇರುವಾಗ, ನಿನಗೆ ಸೂಕ್ತವಾದದ್ದನ್ನು ಆರಿಸಿಕೊಳ್ಳುವುದೇ ಜಾಣತನ ಎಂದು ಉಲ್ಲೇಖಮಾಡಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 936,
    english:
      "In order to come to a clear vision of how one must lead a life morally - I thought about many things and contemplated alone a lot. Also took excerpts from various book and experiences that are known to be absolute truths. I strung these poems thus. - Mankutimma",
    kannada:
      "ವಿಶದಮಾದೊಂದು ಜೀವನಧರ್ಮದರ್ಶನವ- ।\nನುಸುರಿಕೊಳೆ ತನ್ನ ಮನಸಿಗೆ ತಾನೆ ಬಗೆದು ॥\nನಿಸದವಂ ಗ್ರಂಥಾನುಭವಗಳಿಂದಾರಿಸುತ ।\nಹೊಸೆದನೀ ಕಗ್ಗವನು - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೬ ॥",
    kannada_explanation:
      'ಹಿಂದಿನ ಎರಡು ಮುಕ್ತಕಗಳಲ್ಲಿ "ನಿನ್ನ ಮನಕೆ ಒಪ್ಪುವ ಮತವನ್ನು ಆಯ್ದುಕೊಂಡು ಅಂತರಂಗದಲ್ಲಿ ಮಥನಮಾಡಿ ನಿನಗೆ ಕಂಡ ಸತ್ಯವನ್ನು ಭದ್ರವಾಗಿ ಹಿಡಿದುಕೊಂಡು ಮುಂದುವರೆ" ಎಂದು ನಮಗೆ ಅರುಹಿದ್ದಾರೆ, ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ ತಾನು ಸಹ ಹೀಗೆಯೇ ಮಾಡಿದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು',
  },
  {
    number: 937,
    english:
      "To touch one's heart and get its approval, a song that is composed with good music is the best. Prose is good to convey everyday happenings as well as deep philosophy. In between are poems - just like someone who has left eh ground and not yet met the sky. - Mankutimma",
    kannada:
      "ಹೃದ್ಯ ಹೃದಯೇಂಗಿತಕೆ ರಾಗ ತಾಳದ ಕಟ್ಟು ।\nಗದ್ಯ ಲೌಕಿಕ ತಾತ್ವಿಕಕ್ಕಚ್ಚುಕಟ್ಟು ॥\nಮಧ್ಯದಲಿ ಮಿಸುಕಿ, ನೆಲಬಿಟ್ಟು ಬಾನ್ ಮುಟ್ಟದಿಹ ।\nಪದ್ಯವಧಿಕಪ್ರಸಂಗಿ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೭ ॥",
    kannada_explanation:
      "ನಮ್ಮ ‘ಹೃದಯ’ದ ಇಂಗಿತವನ್ನು ಅರುಹಲು, ರಾಗ ತಾಳ ಮತ್ತು ಲಯಗಳ ಚೌಕಟ್ಟಿನಲ್ಲಿರುವ ‘ಸಂಗೀತ’ ಮಾಧ್ಯಮವಾಗುತ್ತದೆ. ಲೌಕಿಕದ ತತ್ವಗಳನ್ನು ಹೇಳಲು, ಗದ್ಯ ಅಚ್ಚುಕಟ್ಟಾಗಿರುತ್ತದೆ. ಆದರೆ ಇವೆರಡರ ಮಧ್ಯೆ ಇದ್ದು ಇತ್ತ ಭೂಮಿಯ ಮೇಲೂ ನಿಲ್ಲಲಾಗದೆ ಅತ್ತ ಆಕಾಶಕ್ಕೂ ಎರಲಾಗದೆ ಇರುವ ‘ಪದ್ಯ’ ರೂಪ ಅಧಿಕಪ್ರಸಂಗಿ ಎನ್ನುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 938,
    english:
      "Not a poet, nor a scientist. He is just a common man. Within his limits, he has found something for his soul that he thinks is a suitable balance. With that he has strung this series of poems in common man's language. He chose poems because they are easy to remember. - Mankutimma",
    kannada:
      "ಕವಿಯಲ್ಲ, ವಿಜ್ಞಾನಿಯಲ್ಲ, ಬರಿ ತಾರಾಡಿ ।\nಅವನರಿವಿಗೆಟುಕುವವೊಲೊಂದಾತ್ಮನಯವ ॥\nಹವಣಿಸಿದನಿದನು ಪಾಮರಜನದ ಮಾತಿನಲಿ ।\nಕವನ ನೆನಪಿಗೆ ಸುಲಭ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೮ ॥",
    kannada_explanation:
      "ನಾನು ಕವಿಯಲ್ಲ, ವಿಜ್ಞಾನಿಯೂ ಅಲ್ಲ, ಕೇವಲ ಅಲ್ಲಿಂದಿಲ್ಲಿಗೆ ತಾರಾಡುವವನು. ನನ್ನ ಅರಿವಿಗೆ ಎಟುಕಿದ್ದನ್ನು ಆತ್ಮದೊಂದಿಗೆ ಅನುನಯಿಸಿ ಸಾಮಾನ್ಯ ಜನರ ಮಾತಿನಲ್ಲಿ ಹೊಂದಿಸಿಬರೆದಿದ್ದೇನೆ. ಕವನ ನೆನಪಿಗೆ ಸುಲಭವೆಂದು ಇದನ್ನು ಪದ್ಯದ ರೂಪದಲ್ಲಿ ಬರೆದಿದ್ದೇನೆ, ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 939,
    english:
      "It is not that after reading this book, there will be no more doubts. It is also not that what we believe today will hold up for ever. If someone points at some shortcoming, I have a open mind to correct. But for now, I believe this right. - Mankutimma",
    kannada:
      "ಸಂದೇಹವೀ ಕೃತಿಯೊಳಿನ್ನಿಲ್ಲವೆಂದಲ್ಲ ।\nಇಂದು ನಂಬಿಹುದೆ ಮುಂದೆಂದುಮೆಂದಲ್ಲ ॥\nಕುಂದು ತೋರ್ದಂದದನು ತಿದ್ದಿಕೊಳೆ ಮನಸುಂಟು ।\nಇಂದಿಗೀ ಮತವುಚಿತ - ಮಂಕುತಿಮ್ಮ ॥ ೯೩೯ ॥",
    kannada_explanation:
      "ನಾನು ಬರೆದ ಈ ಕೃತಿಯಲ್ಲಿ ಇನ್ನು ‘ಸಂದೇಹವೇ ಇಲ್ಲ’ ಎಂದಲ್ಲ, ಇರಬಹುದು. ಇಂದು ನಾನು ನಂಬಿರುವ ವಿಷಯಗಳೇ ಮುಂದೆಯೂ ಎಂದೆಂದಿಗೂ ಅನ್ವಯ ಎಂದೂ ಅಲ್ಲ. ಯಾರಾದರೂ ನಾ ಬರೆದದ್ದರಲ್ಲಿ ಕೊರತೆ ಅಥವಾ ಕುಂದನ್ನು ತೋರಿದರೆ, ಅದನ್ನು ಒಪ್ಪಿಕೊಂಡು, ನಾನು ನನ್ನನ್ನು ತಿದ್ದಿಕೊಳ್ಳಲು ಸದಾ ಸಿದ್ಧ. ಆದರೆ ಇಂದು ನಾ ಬರೆದಿರುವುದುಇಂದಿಗೆ ಉಚಿತವೆನಿಸುತ್ತದೆ ಎಂದು, ಬಹಳ ವಿನಯವಾಗಿ, ವಿಶಾಲ ಮನೋಭಾವದಿಂದ ತಮ್ಮ ಮನದಾಳವನ್ನು ತೆರೆದಿಟ್ಟಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 940,
    english:
      "I have not paid too much attention to grammar and composition. This book has been written using experiences coming out of leading a tough life in this world. I have written what I have believed in. To accept it is left to the readers. - Mankutimma",
    kannada:
      "ವ್ಯಾಕರಣ ಕಾವ್ಯ ಲಕ್ಷಣಗಳನು ಗಣಿಸದೆಯೆ ।\nಲೋಕತಾಪದಿ ಬೆಂದು ತಣಿಪನೆಳಸಿದವಂ ॥\nಈ ಕಂತೆಯಲಿ ತನ್ನ ನಂಬಿಕೆಯ ನೆಯ್ದಿಹನು ।\nಸ್ವೀಕರಿಕೆ ಬೇಳ್ಪವರು - ಮಂಕುತಿಮ್ಮ ॥ ೯೪೦ ॥",
    kannada_explanation:
      "ವ್ಯಾಕರಣ ಮತ್ತು ಕಾವ್ಯ ಲಕ್ಷಣಗಳನ್ನಾವುದನ್ನೂ ಪರಿಗಣಿಸದೆ, ಬದುಕಿನ ಬೇಗೆಯಲ್ಲಿ ಬೆಂದು, ನೊಂದು, ಬವಣೆಯಿಂದ ಸಾಂತ್ವನವನ್ನು ಬಯಸಿದವನು, ಅದರಿಂದ ಪಡೆದ ರಸಾನುಭವವನ್ನು ಮತ್ತು ತಾನು ನಂಬಿದ ವಿಚಾರವನ್ನು, ಈ ‘ ಕಗ್ಗ’ ಎಂಬ ಕಂತೆಯಲ್ಲಿ ಹೆಣೆದಿಹನು. ಬೇಕಿದ್ದವರು ಸ್ವೀಕರಿಸಬಹುದು ಎಂದು, ನಿರ್ಲಿಪ್ತತೆಯ ಪರಮಾವಧಿಯನ್ನು ಮೆರೆಯುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 941,
    english:
      "If you don't think that 'mankutimma' does not suit well as a pen name, you can change it more serious names - venka (Lord Venkateshvara), kanka (Dharmaraya) or shankaraarya (Adi Shankara). If people read it that is enough. Why do you have any doubts on whether people will accept it as-is or not? - Mankutimma",
    kannada:
      "ಮಂಕುತಿಮ್ಮನ ಹೆಸರು ಬಿಂಕಕ್ಕೆ ಸಾಲದೆನೆ ।\nವೆಂಕನಿಗೊ ಕಂಕನಿಗೊ ಶಂಕರಾರ್ಯನಿಗೊ ॥\nಅಂಕಿತವ ಮಾಳ್ಕೆ ಜನರವರೋದಿದರೆ ಸಾಕು ।\nಶಂಕೆ ನಿನಗೇನಿಹುದೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯೪೧ ॥",
    kannada_explanation:
      "ಒಂದು ಹೆಸರಿಡಬೇಕು ಎನ್ನುವ ಬಿಂಕಕ್ಕೆ ‘ ಮಂಕುತಿಮ್ಮ’ನ ಹೆಸರು ಸಾಲದೇನು? ಅದಕ್ಕೆ ವೆಂಕಟರಮಣ, ಧರ್ಮರಾಯ ಅಥವಾ ಶಂಕಾರಾಚಾರ್ಯರಂತಹ ಖ್ಯಾತ ಹೆಸರುಗಳನ್ನೇ ಅಂಕಿತವನ್ನಾಗಿ ಇಡಬೇಕೇನು? ಹೆಸರಿಗಿಂತ ತತ್ವವನ್ನು ಮತ್ತು ಸತ್ವವನ್ನು ಅರಿಯಬೇಕೆಂದು ಜನರು ಓದಿದರೆ ಸಾಕು, ಅದರೊಳಗೆ ನಿನಗೇನೂ ಅನುಮಾನ ? ಎಂದು ಹೆಸರಿಗಿಂತ ಬರಹದಲ್ಲಿನ ತಿರುಳು ಮುಖ್ಯ ಎನ್ನುವಂತೆ ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 942,
    english:
      "What can wish for? What can you ask God for? What is good today, can it be good tomorrow also? How can we now decide what ill be good for all times to come? Let us all surrender to the God who knows it all and not bother too much about future. - Mankutimma",
    kannada:
      "ಹರಸುವುದದೇನ ನೀಂ? ವರವದೇನೆಂದರಿವೆ? ।\nಸರಿಯಿಂದು ತೋರುವುದು ನಾಳೆ ಸರಿಯಿಹುದೆ? ॥\nನಿರುಕಿಸುವುದೆಂತು ಚಿರಕಾಲದೊಳ್ಳಿತನಿಂದು? ।\nಅರಿವ ದೈವವೆ ಪೊರೆಗೆ - ಮಂಕುತಿಮ್ಮ ॥ ೯೪೨ ॥",
    kannada_explanation:
      "ಮತ್ತೊಬ್ಬರನ್ನು ಹರಸುವುದಾಗಲೀ ಅಥವಾ ತನಗಾಗಿ ಏನನ್ನಾದರೂ ಬೇಡುವುದಾಗಲೀ ಮಾಡಲು ನೀನು ಅದನ್ನು ಸರಿಯಾಗಿ ಅರಿತಿದ್ದೀಯೇನು? ಏಕೆಂದರೆ ಇಂದು ಸರಿಯೆನ್ನಿಸುವುದು, ಸದಾಕಾಲ ಸರಿಯಿರುತ್ತದೆ ಎಂದು ನಿನಗೆ ಗೊತ್ತಿದೆಯೇ? ಅಥವಾ ಏನನ್ನಾದರೂ ಬೇಡುವಾಗ ನಿನಗೆ ಸೂಕ್ತವಾದದ್ದನ್ನೇ ಬೇಡುತ್ತಿದ್ದೇನೆಂದು ನಿನಗೆ ಗೊತ್ತಿದೆಯೇ? ಹಾಗಿರಬೇಕಾದರೆ ಧೀರ್ಘಕಾಲದ ಹಿತವನ್ನು ಇಂದು ಬಯಸುವುದು ಹೇಗೆ ? ಆ ದೈವವೇ ಎಲ್ಲವನ್ನೂ ಅರಿತು ಪೊರೆಯುವುದುಂಟು ಎಂದು ಹೇಳುತ್ತಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 943,
    english:
      "There is no guarantee that God whom we believe in will grant all our wishes. Even if he did, we are not sure if what we wish is good for us. In such circumstances, it is best to assume that what ever happens is happening for good and is according to His will. Face all circumstances with a strong heart. - Mankutimma",
    kannada:
      "ಬೇಡಿದುದನೀವನೀಶ್ವರನೆಂಬ ನೆಚ್ಚಿಲ್ಲ ।\nಬೇಡಲೊಳಿತಾವುದೆಂಬುದರರಿವುಮಿಲ್ಲ ॥\nಕೂಡಿಬಂದುದನೆ ನೀನ್ ಅವನಿಚ್ಛೆಯೆಂದು ಕೊಳೆ ।\nನೀಡುಗೆದೆಗಟ್ಟಿಯನು - ಮಂಕುತಿಮ್ಮ ॥ ೯೪೩ ॥",
    kannada_explanation:
      "ನೀನು ಆ ಪರಮಾತ್ಮನಲ್ಲಿ ಬೇಡಿದುದನ್ನೆಲ್ಲಾ ನಿನಗವನು ಕೊಡುವನು ಎಂದು ನಂಬಿಕೆಯಿಲ್ಲ. ಅಷ್ಟೇ ಅಲ್ಲ ಅವನಲ್ಲಿ ಏನನ್ನು ಬೇಡಬೇಕು ಮತ್ತು ಏನನ್ನು ಬೇಡಬಾರದು ಎಂಬುದರ ಪ್ರಜ್ಞೆಯೂ ನಿನಗಿಲ್ಲ. ಹಾಗಿರುವಾಗ ಆಯಾ ಸಮಯಕ್ಕೆ ಸಿಕ್ಕದ್ದನ್ನು ಆ ಪರಮಾತ್ಮನೇ ಇತ್ತದ್ದೆಂದು ಅರಿತು, ನಂಬಿ ಹಾಗೆ ಬಂದದ್ದನ್ನು ಅನುಭವಿಸಲು ನಿನ್ನ ಎದೆಯನ್ನು ಗಟ್ಟಿಯಾಗಿಸಿಕೋ ಎಂದು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು.",
  },
  {
    number: 944,
    english:
      "Let everybody and every nation develop habits of sharing so that all our hunger is satisfied by us giving to one another. Let us all remember at all times that God is watching over us. Let us find peace in such thoughts. - Mankutimma",
    kannada:
      "ತಮೆಲ್ಲ ಹಸಿವುಗಳ ತಣಿಯಿಪನಿತನ್ಯೋನ್ಯ ।\nಹೊಮ್ಮುಗೌದಾರ್ಯ ಜನಜನಪದಂಗಳಲಿ ॥\nಬೊಮ್ಮನೆಲ್ಲರನಾಳ್ವನಿಹನೆನುವ ನೆನಪಿನಲಿ ।\nನೆಮ್ಮದಿಯ ಪಡೆಗೆ ಜಗ - ಮಂಕುತಿಮ್ಮ ॥ ೯೪೪ ॥",
    kannada_explanation:
      "ಜಗತ್ತಿನ ಜನರೆಲ್ಲರ ಬಯಕೆಗಳನ್ನು ಈಡೇರಿಸಲು ಇರುವ ಜಗದ್ವಸ್ತುಗಳನ್ನು ಜಗತ್ತಿನ ಜನರೆಲ್ಲರೂ ಸೌಹಾರ್ಧತೆಯಿಂದ, ಔದಾರ್ಯದಿಂದ ಮತ್ತು ಅನ್ಯೋನ್ಯತೆಯಿಂದ ಹಂಚಿಕೊಂಡು ಬಾಳಲಿ. ಎಲ್ಲರನ್ನೂ ಕಾಯುವ ಪರಬ್ರಹ್ಮನೊಬ್ಬನಿರುವನು ಎಂದು ದೃಢವಾಗಿ ನಂಬಿ, ನೆಮ್ಮದಿಯನ್ನು ಈ ಜಗತ್ತು ಪಡೆಯಲಿ ಎಂದು ತುಂಬು ಹೃದಯದ ಆಶಯವನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
  {
    number: 945,
    english:
      "Surrender (pursue) the mystery of life. Surrender to the truth behind it. Surrender to the constant hope and effort to make life endurable. Surrender to the inner self that is calm and serious. Surrender to the Cosmic spirit of the universe. - Mankutimma",
    kannada:
      "ಶರಣುವೊಗು ಜೀವನರಹಸ್ಯದಲಿ ಸತ್ತ್ವದಲಿ ।\nಶರಣು ಜೀವನವ ಸಮವೆನಿಪ ಯತ್ನದಲಿ ॥\nಶರಣಂತರಾತ್ಮ ಗಂಭೀರಪ್ರಶಾಂತಿಯಲಿ ।\nಶರಣು ವಿಶ್ವಾತ್ಮದಲಿ - ಮಂಕುತಿಮ್ಮ ॥ ೯೪೫ ॥",
    kannada_explanation:
      "ಜೀವನದ ಸತ್ವದ ರಹಸ್ಯಕ್ಕೆ ನೀನು ಶರಣಾಗು. ಈ ಜೀವನವನ್ನು ಹೂವಂತೆ ಸುಂದರವಾಗಿಸುವ ಪ್ರಯತ್ನಕ್ಕೆ ಶರಣಾಗು. ಅಂತರಂಗದ ಪ್ರಶಾಂತತೆಯಲ್ಲಿ ಗಂಭೀರವಾಗಿ ಪರತತ್ವಕ್ಕೆ ಶರಣಾಗು. ಜಗತ್ತಿನಲ್ಲಿರುವ ವಿಶ್ವಾತ್ಮಭಾವಕ್ಕೆ ಶರಣಾಗು ಎಂದು ನಾವು ನಮ್ಮ ನಮ್ಮ ಜೀವನಗಳಲ್ಲಿ ಅಂತಿಮವಾಗಿ ಸಾಧಿಸಿಬೇಕಾದ ಸ್ಥಿತಿಯನ್ನು ಸೂಚಿಸಿದ್ದಾರೆ ಮಾನ್ಯ ಗುಂಡಪ್ಪನವರು ನಮಗೆ ಈ ಮುಕ್ತಕದಲ್ಲಿ.",
  },
];

const kagga: KaggaProps[] = kaggaData.map((item) => ({
  ...item,
  id: String(item.number),
}));

// Generate sorted slugs
export const sortedSlugs = kagga.toSorted((a, b) => a.number - b.number);

export default kagga;

// =============================================
//  AmiiToon — Script principal
//  IMAGINe Studio × HwR Engine — v1.0.0
// =============================================

const VERSION = '1.0.0';
const STORAGE_KEY = 'amiitoon_owned';

// ── Données amiibo (du plus ancien au plus récent pour l'API matching)
const AMIIBO_DATA = [
  // ─── SPLATOON 1 — Vague 1 (29 mai 2015) ───
  {
    id: 's1-girl-orange',
    nameFR: 'Inkling Fille Orange',
    nameEN: 'Inkling Girl',
    variantIndex: 0,
    game: 1, wave: 'Vague 1',
    releaseEU: '29/05/2015', releaseJP: '28/05/2015', releaseNA: '29/05/2015',
    description: "La première Inkling Fille, icône absolue de la saga Splatoon depuis 2015. Reconnaissable à ses tentacules orange et son Splat Duo Blaster.",
    gear: {
      s1: 'Lunettes Scolaires · T-shirt Scolaire Blanc · Baskets Roses — 20 défis Concentraceur',
      s2: 'Pinces Scolaires (Run Speed Up) · Cardigan Scolaire (Opening Gambit) · Bottines à Franges (Cold-Blooded)',
      s3: 'Barrette Scolaire (Ink Saver Main) · Uniforme Scolaire (Ink Recovery Up) · Chaussures Scolaires (Run Speed Up)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's1-boy-blue',
    nameFR: 'Inkling Garçon Bleu',
    nameEN: 'Inkling Boy',
    variantIndex: 0,
    game: 1, wave: 'Vague 1',
    releaseEU: '29/05/2015', releaseJP: '28/05/2015', releaseNA: '29/05/2015',
    description: "L'Inkling Garçon originel, avec ses tentacules bleues et son Aéropistoleur. Compagnon inséparable de la Fille Orange depuis le lancement de la saga.",
    gear: {
      s1: 'Calotte Ronde · Sweat Rouleau · Baskets Bleues — 20 défis Rouleau',
      s2: 'Casque Samouraï (Swim Speed Up) · Veste Samouraï (Special Charge Up) · Sandales Samouraï (Ink Saver Sub)',
      s3: 'Casque Samouraï (Swim Speed Up) · Veste Samouraï (Special Charge Up) · Sandales Samouraï (Ink Saver Sub)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's1-squid-green',
    nameFR: 'Calamar Inkling Vert',
    nameEN: 'Inkling Squid',
    variantIndex: 0,
    game: 1, wave: 'Vague 1',
    releaseEU: '29/05/2015', releaseJP: '28/05/2015', releaseNA: '29/05/2015',
    description: "Le premier Calamar Inkling, symbole de la transformation en calamar propre à la saga. Sa forme compacte et ses grands yeux en font l'un des amiibo les plus reconnaissables.",
    gear: {
      s1: 'Lunettes Calamar · T-shirt Calamar · Baskets Calamar — 20 défis Peinture',
      s2: 'Masque Armure Mk1 (Ink Resistance Up) · Armure Mk1 (Special Charge Up) · Bottes Armure Mk1 (Bomb Defense Up)',
      s3: 'Masque Armure Mk1 · Armure Mk1 · Bottes Armure Mk1'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 1 — Vague 2 (7 juillet 2016) ───
  {
    id: 's1-callie',
    nameFR: 'Ayo (Callie)',
    nameEN: 'Callie',
    variantIndex: 0,
    game: 1, wave: 'Vague 2',
    releaseEU: '07/07/2016', releaseJP: '07/07/2016', releaseNA: '08/07/2016',
    description: "Ayo est la moitié pop-star du duo Les Chouettes (Squid Sisters). Exubérante et énergique, elle est l'annonciatrice des Splatfests dans Inkopolis. Son sort dans Splatoon 2 est au cœur de l'intrigue principale.",
    gear: {
      s1: 'Concerts exclusifs dans Inkopolis Plaza',
      s2: 'Casque Héroïque Réplique · Veste Héroïque Réplique · Chaussures Héroïques Réplique (après mode Histoire)',
      s3: 'Casque Héroïque Réplique · Veste Héroïque Réplique · Chaussures Héroïques Réplique'
    },
    comingSoon: false, image: null
  },
  {
    id: 's1-marie',
    nameFR: 'Oly (Marie)',
    nameEN: 'Marie',
    variantIndex: 0,
    game: 1, wave: 'Vague 2',
    releaseEU: '07/07/2016', releaseJP: '07/07/2016', releaseNA: '08/07/2016',
    description: "Oly est la moitié cool et sarcastique du duo Les Chouettes. Guide du joueur dans Octo Valley (Splatoon 1) et professeur de calme absolu. Elle joue un rôle clé dans Splatoon 2.",
    gear: {
      s1: 'Concerts exclusifs dans Inkopolis Plaza',
      s2: 'Casque Armure Réplique · Veste Armure Réplique · Bottes Armure Réplique (après mode Histoire)',
      s3: 'Casque Armure Réplique · Veste Armure Réplique · Bottes Armure Réplique'
    },
    comingSoon: false, image: null
  },
  {
    id: 's1-boy-purple',
    nameFR: 'Inkling Garçon Violet',
    nameEN: 'Inkling Boy',
    variantIndex: 1,
    game: 1, wave: 'Vague 2',
    releaseEU: '07/07/2016', releaseJP: '07/07/2016', releaseNA: '08/07/2016',
    description: "Variante colorée de l'Inkling Garçon originel, en violet. Plus difficile à trouver que son homologue bleu, cette version fait partie de la deuxième vague de figurines Splatoon.",
    gear: {
      s2: 'Casque Samouraï (Swim Speed Up) · Veste Samouraï (Special Charge Up) · Sandales Samouraï (Ink Saver Sub)',
      s3: 'Casque Samouraï (Swim Speed Up) · Veste Samouraï (Special Charge Up) · Sandales Samouraï (Ink Saver Sub)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's1-girl-green',
    nameFR: 'Inkling Fille Verte',
    nameEN: 'Inkling Girl',
    variantIndex: 1,
    game: 1, wave: 'Vague 2',
    releaseEU: '07/07/2016', releaseJP: '07/07/2016', releaseNA: '08/07/2016',
    description: "Variante verte de l'Inkling Fille. Sorti en juillet 2016 dans la deuxième vague, elle est considérée comme rare par les collectionneurs comparée à la version orange originale.",
    gear: {
      s2: 'Pinces Scolaires (Run Speed Up) · Cardigan Scolaire (Opening Gambit) · Bottines à Franges (Cold-Blooded)',
      s3: 'Barrette Scolaire · Uniforme Scolaire · Chaussures Scolaires'
    },
    comingSoon: false, image: null
  },
  {
    id: 's1-squid-orange',
    nameFR: 'Calamar Inkling Orange',
    nameEN: 'Inkling Squid',
    variantIndex: 1,
    game: 1, wave: 'Vague 2',
    releaseEU: '07/07/2016', releaseJP: '07/07/2016', releaseNA: '08/07/2016',
    description: "Recoloriage orange du Calamar Inkling original. Fait partie de la vague 2, aux côtés des Squid Sisters. Sa teinte chaude le distingue du calamar vert de la première vague.",
    gear: {
      s2: 'Masque Armure Mk1 · Armure Mk1 · Bottes Armure Mk1',
      s3: 'Masque Armure Mk1 · Armure Mk1 · Bottes Armure Mk1'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 2 — Vague 3 (21 juillet 2017) ───
  {
    id: 's2-girl-pink',
    nameFR: 'Inkling Fille Rose',
    nameEN: 'Inkling Girl',
    variantIndex: 2,
    game: 2, wave: 'Vague 3',
    releaseEU: '21/07/2017', releaseJP: '13/07/2017', releaseNA: '21/07/2017',
    description: "La version Splatoon 2 de l'Inkling Fille, avec un design actualisé et ses tentacules roses néon. Elle incarne le style rafraîchi de la suite très attendue de la saga.",
    gear: {
      s2: 'Pinces Scolaires (Run Speed Up) · Cardigan Scolaire (Opening Gambit) · Bottines à Franges (Cold-Blooded)',
      s3: 'Barrette Scolaire · Uniforme Scolaire · Chaussures Scolaires'
    },
    comingSoon: false, image: null
  },
  {
    id: 's2-boy-green',
    nameFR: 'Inkling Garçon Vert',
    nameEN: 'Inkling Boy',
    variantIndex: 2,
    game: 2, wave: 'Vague 3',
    releaseEU: '21/07/2017', releaseJP: '13/07/2017', releaseNA: '21/07/2017',
    description: "La version Splatoon 2 de l'Inkling Garçon, avec un look actualisé aux tentacules vert vif. Lancé avec la sortie de Splatoon 2 en juillet 2017.",
    gear: {
      s2: 'Casque Samouraï · Veste Samouraï · Sandales Samouraï',
      s3: 'Casque Samouraï · Veste Samouraï · Sandales Samouraï'
    },
    comingSoon: false, image: null
  },
  {
    id: 's2-squid-purple',
    nameFR: 'Calamar Inkling Violet',
    nameEN: 'Inkling Squid',
    variantIndex: 2,
    game: 2, wave: 'Vague 3',
    releaseEU: '21/07/2017', releaseJP: '13/07/2017', releaseNA: '21/07/2017',
    description: "Le Calamar Inkling version Splatoon 2, en violet profond. Troisième variation de ce personnage emblématique, sorti au lancement de Splatoon 2.",
    gear: {
      s2: 'Masque Armure Mk1 · Armure Mk1 · Bottes Armure Mk1',
      s3: 'Masque Armure Mk1 · Armure Mk1 · Bottes Armure Mk1'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 2 — Vague 4 (13 juillet 2018) ───
  {
    id: 's2-pearl',
    nameFR: 'Perle',
    nameEN: 'Pearl',
    variantIndex: 0,
    game: 2, wave: 'Vague 4',
    releaseEU: '13/07/2018', releaseJP: '13/07/2018', releaseNA: '13/07/2018',
    description: "Perle est l'animatrice impulsive et ultra-énergique du duo Les Chouikettes (Off the Hook). Petite en taille mais immense en attitude, sa voix est sa plus grande arme. Elle est le personnage central de Splatoon 2.",
    gear: {
      s2: 'Couronne Nacre · Hoodie Nacre · Baskets Nacre',
      s3: 'Couronne Nacre L (Sub Resistance Up) · Couronne Nacre S (Sub Resistance Up) · Hoodie Nacre · Baskets Nacre'
    },
    comingSoon: false, image: null
  },
  {
    id: 's2-marina',
    nameFR: 'Coralie',
    nameEN: 'Marina',
    variantIndex: 0,
    game: 2, wave: 'Vague 4',
    releaseEU: '13/07/2018', releaseJP: '13/07/2018', releaseNA: '13/07/2018',
    description: "Coralie est la moitié calme et analytique des Chouikettes. Ancienne Octaling, elle a fait le choix de rejoindre la société Inkling. DJ et ingénieure de génie, elle apporte un contrepoint parfait à l'énergie de Perle.",
    gear: {
      s2: 'Coiffure Coralie · Polo Rose Crevette (Ink Resistance Up) · Bottes Coralie',
      s3: 'Coiffure Coralie · Polo Rose Crevette · Bottes Coralie'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 2 — Vague 5 (9 novembre 2018) ───
  {
    id: 's2-octoling-girl',
    nameFR: 'Fille Octaling',
    nameEN: 'Octoling Girl',
    variantIndex: 0,
    game: 2, wave: 'Vague 5',
    releaseEU: '09/11/2018', releaseJP: '09/11/2018', releaseNA: '09/11/2018',
    description: "L'Octaling Fille, membre de la civilisation des Octariens. Introduite dans Splatoon 2, elle représente l'ennemi réconcilié devenu allié. Son design sombre et élégant en fait l'une des figurines préférées des collectionneurs.",
    gear: {
      s2: 'Chapeau Enchanté · Robe Enchantée · Bottes Enchantées',
      s3: 'Chapeau Enchanté (Ink Saver Main) · Robe Enchantée (Thermal Ink) · Bottes Enchantées (Run Speed Up)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's2-octoling-boy',
    nameFR: 'Garçon Octaling',
    nameEN: 'Octoling Boy',
    variantIndex: 0,
    game: 2, wave: 'Vague 5',
    releaseEU: '09/11/2018', releaseJP: '09/11/2018', releaseNA: '09/11/2018',
    description: "L'Octaling Garçon, avec son casque distinctif et sa tenue sombre. Contrepart masculin de l'Octaling Fille, il débloque un équipement de chevalier médiéval unique dans Splatoon 2 et 3.",
    gear: {
      s2: 'Casque d\'Acier · Plastron d\'Acier · Jambières d\'Acier',
      s3: 'Casque d\'Acier (Special Charge Up) · Plastron d\'Acier (Ink Saver Sub) · Jambières d\'Acier (Object Shredder)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's2-octoling-octopus',
    nameFR: 'Poulpe Octaling',
    nameEN: 'Octoling Octopus',
    variantIndex: 0,
    game: 2, wave: 'Vague 5',
    releaseEU: '09/11/2018', releaseJP: '09/11/2018', releaseNA: '09/11/2018',
    description: "La forme poulpe de l'Octaling, pendant Octarien du Calamar Inkling. Sa couleur rose framboise et ses grands yeux expressifs en font l'une des figurines les plus attachantes de la collection.",
    gear: {
      s2: 'Cagoule Poisson Frais · Gants Poisson Frais · Bottes Poisson Frais',
      s3: 'Cagoule Poisson Frais · Gants Poisson Frais · Bottes Poisson Frais'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 3 — Vague 7 (11 novembre 2022) ───
  {
    id: 's3-inkling-yellow',
    nameFR: 'Inkling Jaune',
    nameEN: 'Inkling',
    variantIndex: 0,
    game: 3, wave: 'Vague 7',
    releaseEU: '11/11/2022', releaseJP: '11/11/2022', releaseNA: '11/11/2022',
    description: "L'Inkling version Splatoon 3, avec son design épuré et ses tentacules jaune vif. Incarnant le style de Chromoville, elle représente la nouvelle génération de la franchise.",
    gear: {
      s3: 'Barrette Scolaire (Ink Saver Main) · Uniforme Scolaire (Ink Recovery Up) · Chaussures Scolaires (Run Speed Up)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-octoling-blue',
    nameFR: 'Octaling Bleu',
    nameEN: 'Octoling',
    variantIndex: 0,
    game: 3, wave: 'Vague 7',
    releaseEU: '11/11/2022', releaseJP: '11/11/2022', releaseNA: '11/11/2022',
    description: "L'Octaling version Splatoon 3, en bleu profond. Cette version actualisée reflète l'intégration des Octalings dans la société de Splatoon 3, où ils coexistent pleinement avec les Inklings.",
    gear: {
      s3: 'Casque d\'Acier (Special Charge Up) · Plastron d\'Acier (Ink Saver Sub) · Jambières d\'Acier (Object Shredder)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-smallfry',
    nameFR: 'Salmio',
    nameEN: 'Smallfry',
    variantIndex: 0,
    game: 3, wave: 'Vague 7',
    releaseEU: '11/11/2022', releaseJP: '11/11/2022', releaseNA: '11/11/2022',
    description: "Salmio est le petit compagnon Salmonoïde du joueur dans Splatoon 3. Adorable et dévoué, il accompagne l'Agent 3 dans son aventure. Sa figurine est l'une des plus mignonnes de toute la saga.",
    gear: {
      s3: 'Items quotidiens aléatoires · Sphère de matière · Coffre de ressources (mode Histoire)'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 3 — Vague 8 (17 novembre 2023) ───
  {
    id: 's3-shiver',
    nameFR: 'Raimi (Shiver)',
    nameEN: 'Shiver',
    variantIndex: 0,
    game: 3, wave: 'Vague 8',
    releaseEU: '17/11/2023', releaseJP: '17/11/2023', releaseNA: '17/11/2023',
    description: "Raimi est la leader charismatique des Grands Fonds (Deep Cut). Mystérieuse et imperturbable, elle est une combattante redoutable dont les thèmes marins inspirent la terreur. Elle préside les Splatfests de Splatoon 3.",
    gear: {
      s3: 'Masque Hohojiro (Sub Resistance Up) · Top Chomper (Ink Saver Main) · Platfins Requin (Swim Speed Up)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-frye',
    nameFR: 'Angie (Frye)',
    nameEN: 'Frye',
    variantIndex: 0,
    game: 3, wave: 'Vague 8',
    releaseEU: '17/11/2023', releaseJP: '17/11/2023', releaseNA: '17/11/2023',
    description: "Angie est la membre la plus impulsive et explosive des Grands Fonds. Son style électrique et ses anguilles de combat font d'elle un personnage aussi dangereux qu'adorable. Sa figurine capture parfaitement son énergie débordante.",
    gear: {
      s3: 'Masque Onaga (Ink Recovery Up) · Tank Anguille (Run Speed Up) · Chaussettes Anguille (Swim Speed Up)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-bigman',
    nameFR: 'Pasquale (Big Man)',
    nameEN: 'Big Man',
    variantIndex: 0,
    game: 3, wave: 'Vague 8',
    releaseEU: '17/11/2023', releaseJP: '17/11/2023', releaseNA: '17/11/2023',
    description: "Pasquale est la raie manta géante membre des Grands Fonds. Doux et timide malgré sa taille imposante, il s'exprime uniquement par des sons. Sa figurine est la plus grande et spectaculaire du trio Deep Cut.",
    gear: {
      s3: 'Masque Manta (Ink Saver Sub) · Grand Imperméable (Special Power Up) · Bottes Manta (Object Shredder)'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON 3 — Vague 9 (5 septembre 2024) ───
  {
    id: 's3-callie-alterna',
    nameFR: 'Ayo (Alterna)',
    nameEN: 'Callie',
    variantIndex: 1,
    game: 3, wave: 'Vague 9',
    releaseEU: '05/09/2024', releaseJP: '05/09/2024', releaseNA: '05/09/2024',
    description: "Ayo dans sa tenue d'Alterna, inspirée du DLC Le Retour des Mammifèriens. Ses couleurs noir et jaune acide rappellent son rôle de Neo-Agent 3. Particularité unique : les détails de la figurine brillent sous lumière noire.",
    gear: {
      s3: 'Réplique Poignée Héroïque (Last-Ditch Effort) · Réplique Combinaison de Survie (Ink Resistance Up) · Réplique Chaussures de Survie (Stealth Jump)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-marie-alterna',
    nameFR: 'Oly (Alterna)',
    nameEN: 'Marie',
    variantIndex: 1,
    game: 3, wave: 'Vague 9',
    releaseEU: '05/09/2024', releaseJP: '05/09/2024', releaseNA: '05/09/2024',
    description: "Oly dans sa tenue de Capitaine, héritée de son rôle dans Splatoon 3. Élégante et déterminée, sa figurine capture la sagesse de l'ancienne Agent 3 devenue guide. Comme Ayo, elle possède des détails luminescents sous UV.",
    gear: {
      s3: 'Réplique Casquette Capitaine (Ink Resistance Up) · Réplique Poncho (Ninja Squid) · Réplique Tongs (Special Power Up)'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-pearl-sideorder',
    nameFR: 'Perle (Tour de l\'Ordre)',
    nameEN: 'Pearl',
    variantIndex: 1,
    game: 3, wave: 'Vague 9',
    releaseEU: '05/09/2024', releaseJP: '05/09/2024', releaseNA: '05/09/2024',
    description: "Perle dans sa tenue du DLC Side Order (Tour de l'Ordre). Habillée d'un blanc impérial avec des accents dorés, elle incarne la version alternative du DLC. Sa base en or la distingue immédiatement de la Perle originale.",
    gear: {
      s3: 'Couronne World Tour (Ink Saver Main) · Veste Matelassée World Tour (Special Charge Up) · Bottes World Tour (Swim Speed Up)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
    },
    comingSoon: false, image: null
  },
  {
    id: 's3-marina-sideorder',
    nameFR: 'Coralie (Tour de l\'Ordre)',
    nameEN: 'Marina',
    variantIndex: 1,
    game: 3, wave: 'Vague 9',
    releaseEU: '05/09/2024', releaseJP: '05/09/2024', releaseNA: '05/09/2024',
    description: "Coralie dans sa tenue du DLC Side Order, en blanc et doré. Sa pose dynamique et ses tentacules cyan la distinguent nettement de la version Splatoon 2. Elle partage avec Perle TdO la fonctionnalité du Grand Festival.",
    gear: {
      s3: 'Casque World Tour (Ink Recovery Up) · Veste World Tour (Run Speed Up) · Talons World Tour (Special Power Up)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
    },
    comingSoon: false, image: null
  },
  // ─── SPLATOON RAIDERS — (23 juillet 2026) ───
  {
    id: 'raiders-shiver',
    nameFR: 'Raimi (Raiders)',
    nameEN: 'Shiver Raiders',
    variantIndex: 0,
    game: 'raiders', wave: 'Raiders',
    releaseEU: '23/07/2026', releaseJP: '23/07/2026', releaseNA: '23/07/2026',
    description: "Raimi dans sa tenue de Splatoon Raiders. Le trio Grands Fonds revient avec des designs inédits pour accompagner le nouveau jeu de la saga. Équipement débloqué à confirmer.",
    gear: { s3: 'Équipement Raiders — à confirmer' },
    comingSoon: true, image: null
  },
  {
    id: 'raiders-frye',
    nameFR: 'Angie (Raiders)',
    nameEN: 'Frye Raiders',
    variantIndex: 0,
    game: 'raiders', wave: 'Raiders',
    releaseEU: '23/07/2026', releaseJP: '23/07/2026', releaseNA: '23/07/2026',
    description: "Angie dans sa tenue de Splatoon Raiders. Une nouvelle aventure pour le membre le plus fougueux des Grands Fonds. Équipement débloqué à confirmer.",
    gear: { s3: 'Équipement Raiders — à confirmer' },
    comingSoon: true, image: null
  },
  {
    id: 'raiders-bigman',
    nameFR: 'Pasquale (Raiders)',
    nameEN: 'Big Man Raiders',
    variantIndex: 0,
    game: 'raiders', wave: 'Raiders',
    releaseEU: '23/07/2026', releaseJP: '23/07/2026', releaseNA: '23/07/2026',
    description: "Pasquale dans sa tenue de Splatoon Raiders. La raie manta géante revient pour une nouvelle mission. Équipement débloqué à confirmer.",
    gear: { s3: 'Équipement Raiders — à confirmer' },
    comingSoon: true, image: null
  }
];

// Ordre d'affichage : du plus récent au plus ancien
const DISPLAY_ORDER = [...AMIIBO_DATA].reverse();

// Nombre total d'amiibo comptabilisés (hors Raiders "à venir")
const TOTAL_COUNT = AMIIBO_DATA.filter(a => !a.comingSoon).length;

// ── LocalStorage
function loadOwned() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}
function saveOwned(owned) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(owned));
}
let owned = loadOwned();

// ── État de l'application
let currentFilter = 'all'; // 'all' | 1 | 2 | 3 | 'raiders' | 'info'

// ── IDs d'images confirmés (GitHub raw AmiiboAPI)
const IMG_BASE = 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_';
const KNOWN_IMAGE_IDS = {
  's1-girl-orange':    '01010000-03560902', // ✓ confirmé
  's1-squid-green':    '01050000-03580902', // ✓ confirmé
  's1-callie':         '01060000-03590902', // ✓ confirmé
  's1-marie':          '01070000-035a0902', // ✓ confirmé
  's1-boy-purple':     '01080000-035b0902', // ✓ confirmé
  's1-girl-green':     '01410000-035c0902', // ✓ confirmé
  's3-inkling-yellow': '08000100-04150402', // ✓ confirmé
  's3-shiver':         '08070000-04330402', // ✓ confirmé
  's3-frye':           '08080000-04340402', // ✓ confirmé
  's3-bigman':         '08090000-04350402', // ✓ confirmé
};

// ── Fetch images (hardcodé + fallback API)
async function fetchAmiiboImages() {
  // Étape 1 : appliquer les IDs hardcodés connus
  AMIIBO_DATA.forEach(a => {
    if (KNOWN_IMAGE_IDS[a.id]) {
      a.image = IMG_BASE + KNOWN_IMAGE_IDS[a.id] + '.png';
    }
  });

  // Étape 2 : API fallback pour les amiibo sans image
  try {
    const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Splatoon');
    const data = await res.json();
    const apiList = data.amiibo.filter(a => a.type === 'Figure');

    const sortByRelease = (a, b) => {
      const da = new Date(a.release?.eu || a.release?.jp || a.release?.na || '9999');
      const db = new Date(b.release?.eu || b.release?.jp || b.release?.na || '9999');
      return da - db;
    };

    // Groupe exact par nom, trié par date de sortie
    const exactGroups = {};
    apiList.forEach(api => {
      const key = api.name.toLowerCase().trim();
      if (!exactGroups[key]) exactGroups[key] = [];
      exactGroups[key].push(api);
    });
    Object.values(exactGroups).forEach(g => g.sort(sortByRelease));

    // Groupe normalisé (supprime "- Yellow", "- Blue" etc.)
    const normGroups = {};
    apiList.forEach(api => {
      const key = api.name.toLowerCase().replace(/\s*[-–]\s*\w+$/, '').trim();
      if (!normGroups[key]) normGroups[key] = [];
      normGroups[key].push(api);
    });
    Object.values(normGroups).forEach(g => g.sort(sortByRelease));

    AMIIBO_DATA.forEach(a => {
      if (a.image) return; // déjà défini
      const key = a.nameEN.toLowerCase().trim();
      const pool = exactGroups[key] || normGroups[key] || [];
      if (pool[a.variantIndex]) {
        a.image = pool[a.variantIndex].image;
      }
    });
  } catch (e) {
    console.warn('AmiiToon: API image fetch failed', e);
  }
}

// ── Mode clair / sombre
const THEME_KEY = 'amiitoon_theme';
function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeBtn(saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeBtn(next);
}
function updateThemeBtn(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.title = theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre';
}

// ── Couleurs par jeu
function getGameColor(game) {
  switch(game) {
    case 1: return 'var(--s1)';
    case 2: return 'var(--s2)';
    case 3: return 'var(--s3)';
    case 'raiders': return 'var(--raiders)';
    default: return 'var(--s3)';
  }
}

function getGameLabel(game) {
  switch(game) {
    case 1: return 'Splatoon';
    case 2: return 'Splatoon 2';
    case 3: return 'Splatoon 3';
    case 'raiders': return 'Raiders';
    default: return '';
  }
}

// ── Progress bar
function updateProgress() {
  const ownedCount = AMIIBO_DATA.filter(a => !a.comingSoon && owned[a.id]).length;
  const pct = Math.round((ownedCount / TOTAL_COUNT) * 100);
  const remaining = TOTAL_COUNT - ownedCount;

  document.getElementById('progress-bar-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${ownedCount} / ${TOTAL_COUNT}`;
  document.getElementById('progress-pct').textContent = `${pct}%`;
  document.getElementById('progress-remaining').textContent =
    remaining === 0
    ? '<svg style="width:14px;height:14px;vertical-align:middle;margin-right:4px" viewBox="0 0 24 24" fill="var(--yellow)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Collection complète !'
    : `${remaining} restante${remaining > 1 ? 's' : ''}`;
}

// ── Rendu de la grille
function renderGrid() {
  const grid = document.getElementById('amiibo-grid');
  const infoSection = document.getElementById('info-section');

  if (currentFilter === 'info') {
    grid.style.display = 'none';
    infoSection.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  infoSection.style.display = 'none';

  const list = DISPLAY_ORDER.filter(a => {
    if (currentFilter === 'all') return true;
    return a.game === currentFilter;
  });

  grid.innerHTML = list.map(a => {
    const isOwned = !a.comingSoon && owned[a.id];
    const imgSrc = a.image || '';
    const color = getGameColor(a.game);

    return `
      <div class="amiibo-card ${isOwned ? 'owned' : ''} ${a.comingSoon ? 'coming-soon' : ''}"
           data-id="${a.id}"
           style="--game-color: ${color}"
           onclick="openModal('${a.id}')">
        <div class="card-top-bar"></div>
        <div class="card-img-wrap">
          ${imgSrc
            ? `<img src="${imgSrc}" alt="${a.nameFR}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : ''}
          <div class="card-img-fallback" style="${imgSrc ? 'display:none' : 'display:flex'}">
            <svg viewBox="0 0 60 60" width="60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="30" rx="28" ry="28" fill="${color}" opacity="0.15"/>
              <text x="30" y="38" text-anchor="middle" font-size="28" fill="${color}">🦑</text>
            </svg>
          </div>
        </div>
        <div class="card-body">
          <div class="card-name">${a.nameFR}</div>
          <div class="card-wave">${getGameLabel(a.game)} · ${a.wave}</div>
        </div>
        <div class="card-badges">
          ${a.comingSoon ? '<span class="badge badge-soon">À venir</span>' : ''}
          ${isOwned ? '<span class="badge badge-owned">✓ Collecté</span>' : ''}
        </div>
        ${isOwned ? '<div class="owned-splat"></div>' : ''}
      </div>
    `;
  }).join('');
}

// ── Modal
function openModal(id) {
  const a = AMIIBO_DATA.find(x => x.id === id);
  if (!a) return;

  const isOwned = !a.comingSoon && owned[a.id];
  const color = getGameColor(a.game);

  // Contenu gear
  const gearRows = [];
  if (a.gear.s1) gearRows.push(`<tr><td><span class="gear-game" style="background:var(--s1)">Splatoon</span></td><td>${a.gear.s1}</td></tr>`);
  if (a.gear.s2) gearRows.push(`<tr><td><span class="gear-game" style="background:var(--s2)">Splatoon 2</span></td><td>${a.gear.s2}</td></tr>`);
  if (a.gear.s3) gearRows.push(`<tr><td><span class="gear-game" style="background:var(--s3-dark)">Splatoon 3</span></td><td>${a.gear.s3}</td></tr>`);
  if (a.gear.bonus) gearRows.push(`<tr><td><span class="gear-game" style="background:#8B5CF6">Bonus</span></td><td>${a.gear.bonus}</td></tr>`);

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header" style="--game-color:${color}">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-game-tag" style="background:${color}">${getGameLabel(a.game)} · ${a.wave}</div>
    </div>
    <div class="modal-body">
      <div class="modal-img-section">
        ${a.image
          ? `<img class="modal-img" src="${a.image}" alt="${a.nameFR}" onerror="this.style.display='none'">`
          : `<div class="modal-img-placeholder">🦑</div>`}
        ${a.comingSoon ? '<div class="modal-soon-badge">À venir — 23/07/2026</div>' : ''}
      </div>
      <div class="modal-info">
        <h2 class="modal-name" style="color:${color}">${a.nameFR}</h2>
        <p class="modal-desc">${a.description}</p>

        <div class="modal-dates">
          <h3>
            <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Dates de sortie
          </h3>
          <table class="dates-table">
            <tr><td><span class="region-tag eu">EU</span> Europe</td><td>${a.releaseEU}</td></tr>
            <tr><td><span class="region-tag jp">JP</span> Japon</td><td>${a.releaseJP}</td></tr>
            <tr><td><span class="region-tag na">NA</span> Amérique du Nord</td><td>${a.releaseNA}</td></tr>
          </table>
        </div>

        <div class="modal-gear">
          <h3>
            <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Équipement débloqué
          </h3>
          ${gearRows.length
            ? `<table class="gear-table">${gearRows.join('')}</table>`
            : '<p class="gear-none">Équipement à confirmer.</p>'}
        </div>

        ${!a.comingSoon ? `
        <button class="toggle-owned-btn ${isOwned ? 'is-owned' : ''}"
                style="--game-color:${color}"
                onclick="toggleOwned('${a.id}')">
          ${isOwned ? '✓ Dans ma collection' : '+ Ajouter à ma collection'}
        </button>` : ''}
      </div>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Toggle owned
function toggleOwned(id) {
  const a = AMIIBO_DATA.find(x => x.id === id);
  if (!a || a.comingSoon) return;

  owned[id] = !owned[id];
  if (!owned[id]) delete owned[id];
  saveOwned(owned);
  updateProgress();
  renderGrid();

  // Update button in modal
  const btn = document.querySelector('.toggle-owned-btn');
  if (btn) {
    const isOwned = owned[id];
    btn.className = `toggle-owned-btn ${isOwned ? 'is-owned' : ''}`;
    btn.textContent = isOwned ? '✓ Dans ma collection' : '+ Ajouter à ma collection';
  }
}

// ── Menu hamburger
function toggleMenu() {
  document.getElementById('side-menu').classList.toggle('open');
  document.getElementById('menu-overlay').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('side-menu').classList.remove('open');
  document.getElementById('menu-overlay').classList.remove('open');
}

function setFilter(f) {
  currentFilter = f;
  closeMenu();

  // Update active state
  document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-filter="${f}"]`)?.classList.add('active');

  renderGrid();

  // Update page title
  const titles = {
    all: 'AmiiToon',
    1: 'Splatoon',
    2: 'Splatoon 2',
    3: 'Splatoon 3',
    raiders: 'Splatoon Raiders',
    info: 'Infos'
  };
  document.getElementById('page-title').textContent = titles[f] || 'AmiiToon';
}

// ── Splash screen
function hideSplash() {
  const splash = document.getElementById('splash');
  splash.classList.add('hidden');
  setTimeout(() => splash.style.display = 'none', 700);
}

// ── Init
async function init() {
  loadTheme();
  setTimeout(hideSplash, 2000);
  document.getElementById('splash').addEventListener('click', hideSplash);

  // Fetch images then render
  await fetchAmiiboImages();
  updateProgress();
  renderGrid();
}

document.addEventListener('DOMContentLoaded', init);

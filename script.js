// =============================================
//  AmiiToon — Script principal
//  IMAGINe Studio × HwR Engine — v1.0.2
// =============================================

const VERSION = '1.0.2';
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
    description: "Ayo est la moitié pop-star du duo des Calamazones. Exubérante et énergique, elle est l'annonciatrice des Splatfests dans Chromapolis. Son sort dans Splatoon 2 est au cœur de l'intrigue principale.",
    gear: {
      s1: 'Concerts exclusifs dans Inkopolis Plaza',
      s2: 'Casque Héroïque Réplique · Veste Héroïque Réplique · Chaussures Héroïques Réplique (après mode Histoire)',
      s3: 'Casque Héroïque Réplique · Veste Héroïque Réplique · Chaussures Héroïques Réplique',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    description: "Oly est la moitié cool et sarcastique du duo des Calamazones. Guide du joueur dans l'Octavallée (Splatoon) et professeure de calme absolu. Elle joue un rôle clé dans Splatoon 2.",
    gear: {
      s1: 'Concerts exclusifs dans Inkopolis Plaza',
      s2: 'Casque Armure Réplique · Veste Armure Réplique · Bottes Armure Réplique (après mode Histoire)',
      s3: 'Casque Armure Réplique · Veste Armure Réplique · Bottes Armure Réplique',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    description: "Recoloriage orange du Calamar Inkling original. Fait partie de la vague 2, aux côtés des Calamazones. Sa teinte chaude le distingue du calamar vert de la première vague.",
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
    description: "Perle est l'animatrice impulsive et ultra-énergique du duo des Tenta-Cool. Petite en taille mais immense en attitude, sa voix est sa plus grande arme. Elle est le personnage central de Splatoon 2.",
    gear: {
      s2: 'Couronne Nacre · Hoodie Nacre · Baskets Nacre',
      s3: 'Couronne Nacre L (Sub Resistance Up) · Couronne Nacre S (Sub Resistance Up) · Hoodie Nacre · Baskets Nacre',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    description: "Coralie est la moitié calme et analytique des Tenta-Cool. Ancienne Octaling, elle a fait le choix de rejoindre la société Inkling. DJ et ingénieure de génie, elle apporte un contrepoint parfait à l'énergie de Perle.",
    gear: {
      s2: 'Coiffure Coralie · Polo Rose Crevette (Ink Resistance Up) · Bottes Coralie',
      s3: 'Coiffure Coralie · Polo Rose Crevette · Bottes Coralie',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    nameEN: 'Inkling - Yellow',
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
    description: "Raimi est la leader charismatique des Tridenfer. Mystérieuse et imperturbable, elle est une combattante redoutable dont les thèmes marins inspirent la terreur. Elle préside les Splatfests de Splatoon 3.",
    gear: {
      s3: 'Masque Hohojiro (Sub Resistance Up) · Top Chomper (Ink Saver Main) · Platfins Requin (Swim Speed Up)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    description: "Angie est la membre la plus impulsive et explosive des Tridenfer. Son style électrique et ses anguilles de combat font d'elle un personnage aussi dangereux qu'adorable. Sa figurine capture parfaitement son énergie débordante.",
    gear: {
      s3: 'Masque Onaga (Ink Recovery Up) · Tank Anguille (Run Speed Up) · Chaussettes Anguille (Swim Speed Up)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    description: "Pasquale est la raie manta géante membre des Tridenfer. Doux et timide malgré sa taille imposante, il s'exprime uniquement par des sons. Sa figurine est la plus grande et spectaculaire du trio.",
    gear: {
      s3: 'Masque Manta (Ink Saver Sub) · Grand Imperméable (Special Power Up) · Bottes Manta (Object Shredder)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
      s3: 'Réplique Poignée Héroïque (Last-Ditch Effort) · Réplique Combinaison de Survie (Ink Resistance Up) · Réplique Chaussures de Survie (Stealth Jump)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
      s3: 'Réplique Casquette Capitaine (Ink Resistance Up) · Réplique Poncho (Ninja Squid) · Réplique Tongs (Special Power Up)',
      bonus: 'Permet de revisiter le Grand Festival (3 variantes) depuis le menu amiibo — depuis la v9.2.0'
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
    description: "Coralie dans sa tenue du DLC Tour de l'Ordre : un tailleur orange avec brassière noire. Sa pose dynamique et ses tentacules teintées d'indigo la distinguent nettement de la version Splatoon 2.",
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
    description: "Raimi dans sa tenue de Splatoon Raiders. Le trio des Tridenfer revient avec des designs inédits pour accompagner le nouveau jeu de la saga. Équipement débloqué à confirmer.",
    gear: { s3: 'Équipement Raiders — à confirmer', bonus: 'Fonction Grand Festival probable (à confirmer à la sortie)' },
    comingSoon: true, image: null
  },
  {
    id: 'raiders-frye',
    nameFR: 'Angie (Raiders)',
    nameEN: 'Frye Raiders',
    variantIndex: 0,
    game: 'raiders', wave: 'Raiders',
    releaseEU: '23/07/2026', releaseJP: '23/07/2026', releaseNA: '23/07/2026',
    description: "Angie dans sa tenue de Splatoon Raiders. Une nouvelle aventure pour le membre le plus fougueux des Tridenfer. Équipement débloqué à confirmer.",
    gear: { s3: 'Équipement Raiders — à confirmer', bonus: 'Fonction Grand Festival probable (à confirmer à la sortie)' },
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
    gear: { s3: 'Équipement Raiders — à confirmer', bonus: 'Fonction Grand Festival probable (à confirmer à la sortie)' },
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

// ── Images directement depuis amiibo.life (toutes vérifiées)
const AL = 'https://amiibo.life/assets/figures/amiibo/splatoon/';
const AMIIBO_IMAGES = {
  // Splatoon 1 — Vague 1
  's1-girl-orange':     AL + 'inkling-girl-f1d802538ad1f255c7f1effd49c054d23e45df2cdcbf477c3601a39172c206c8.png',
  's1-boy-blue':        AL + 'inkling-boy-a80fb08b13693e551d9991f9b1a944c9d7e2dea9c5f62441fff84eceb9feb36a.png',
  's1-squid-green':     AL + 'inkling-squid-4480133eda5adc7bcff15606ecc372a776b4cd12d68b4981a63d899e84ee2353.png',
  // Splatoon 1 — Vague 2
  's1-callie':          AL + 'callie-7e1e4a0f045ec272e976be692cf466b6e29bc0fe86a5c8ca9f1b991c37e44e2f.png',
  's1-marie':           AL + 'marie-583f82cc7d577b73305da7790961148ef3aa0177f9126a9dcd10393bdc4e899a.png',
  's1-boy-purple':      AL + 'inkling-boy-purple-98c5f8e65981b820e74094ca0385c9f6d103d4da3691d86a2980a5d98a8274b7.png',
  's1-girl-green':      AL + 'inkling-girl-lime-green-bc52db1c411f9eb4f42c7f47ff66e959d3518d3964bbe42b657f5695f5266d89.png',
  's1-squid-orange':    AL + 'inkling-squid-orange-da4d597d6a4ab8281a06640982a948b9c7806042749bf63d11b3bffcd3053576.png',
  // Splatoon 2 — Vague 3
  's2-girl-pink':       AL + 'inkling-girl-neon-pink-923face3a1801bdf9396d77d5f575fdda51d4fe54d37c84d9cd192337c722720.png',
  's2-boy-green':       AL + 'inkling-boy-neon-green-e4926da73e705bba28127e3635e3434db4129e676d6160f210651821d2de4c21.png',
  's2-squid-purple':    AL + 'inkling-squid-neon-purple-ad466b88b70750d2e4099b648cc4230d1006981431fe33171dbc9eb07157eb1b.png',
  // Splatoon 2 — Vague 4
  's2-pearl':           AL + 'pearl-d5e40d7f7ab1c149a6a1e3611c56b034bff990d32efde5b555bd998e0e7347fb.png',
  's2-marina':          AL + 'marina-da21ecd1c30b604c4313a00b8324cf3f4dfa8d72bd777ccc3b3c6cd6db53cc83.png',
  // Splatoon 2 — Vague 5
  's2-octoling-girl':   AL + 'octoling-girl-9d5144aab476de1647681a6ac16d986b9c1c5e6fe1dbf89fde0b8f61e4e6ac9a.png',
  's2-octoling-boy':    AL + 'octoling-boy-3b369e4710a048efe04f33b042288a86873586d2ff001a74eaea8ad5e4eec0aa.png',
  's2-octoling-octopus':AL + 'octoling-octopus-0c8396b495b0c9f22a2dfd6940dc4fe3e0bcc6c563fe054f9e8444c80714df62.png',
  // Splatoon 3 — Vague 7
  's3-inkling-yellow':  AL + 'inkling-yellow-45f90832cc9c9aecfeed6e7020a0696af7ee00cd93b1b1c488683d478d3a8140.png',
  's3-octoling-blue':   AL + 'octoling-blue-7cc177de5aedb455a97547b170d1dc6bc9c03b63601d5af710fc5016e3824fa5.png',
  's3-smallfry':        AL + 'smallfry-45265040d68a662447fae154b9613053b703307a851e8b9ea2cafc839246bdf2.png',
  // Splatoon 3 — Vague 8
  's3-shiver':          AL + 'shiver-9fb56a75d77120cd244759ef1bcda8b1d56b5cc93bba35ddc1701b84b55743b6.png',
  's3-frye':            AL + 'frye-d0f7d3c7c74da7168a6f4fbfeedaf07e46cdad887828cade7e6c70eeb6b893e4.png',
  's3-bigman':          AL + 'big-man-c5b821d5440e5de1a474e2f2f0b82159c82526f7de4d33b93e43a458215e529d.png',
  // Splatoon 3 — Vague 9
  's3-callie-alterna':  AL + 'callie-alterna-a49354eb5a19ffc61f1cc18d7de7d02f27b0ce3538582fb31c44c74207156a21.png',
  's3-marie-alterna':   AL + 'marie-alterna-898259f385f11349cee3a984b1194a4cf13d678b27bee18e7a6ad5c84e92009e.png',
  's3-pearl-sideorder': AL + 'pearl-side-order-9d57aa508780a405aef59128538a1499c6b86fd5eb879cfc4ac6a98bbe0d8256.png',
  's3-marina-sideorder':AL + 'marina-side-order-f8ab4b11486a435b2f8e4e4f9d6c3d00d7331ae61e03e66a84f621a339d628f6.png',
  // Splatoon Raiders — images officielles déjà publiées (23/07/2026)
  'raiders-shiver':     AL + 'shiver-splatoon-raiders-6f6fefeb7ae406dd98e74b57673e7e0308901c8073a5ebb115d65d010f351367.png',
  'raiders-frye':       AL + 'frye-splatoon-raiders-5ba1f6b4e7fce4f6e88334a6c66ffd2a09196b95fd377352b609b65c66ee46e5.png',
  'raiders-bigman':     AL + 'big-man-splatoon-raiders-b1340eafa13037d6dd9635a7cf9773d07ac273dcd15bcbe9f306d9698984c81c.png',
};

// ── Application des images (aucun appel API nécessaire)
async function fetchAmiiboImages() {
  AMIIBO_DATA.forEach(a => {
    if (AMIIBO_IMAGES[a.id]) {
      a.image = AMIIBO_IMAGES[a.id];
    }
  });
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

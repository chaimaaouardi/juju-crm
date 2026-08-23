// Radar Juju — mis à jour automatiquement chaque lundi matin par l'agent de veille.
// Ne pas éditer la structure : cat, name, buy, sell, trend(1-5), tag[type,label], en (mot-clé gros), gt (mot-clé tendance FR).
// cat : peluche | bijoux | cheveux | tech | rentree | beaute | utile | maison | autre
// La règle Juju : la marge d'abord, la catégorie ensuite. Mode ET utilitaire.
window.RADAR_UPDATED = "2026-08-23";
window.RADAR_PRODUCTS = [
  // ---------- UTILE : dépannage, météo, saison (le client achète parce qu'il en a besoin MAINTENANT) ----------
  {cat:"utile",name:"Parapluie pliant coupe-vent",buy:1.9,sell:8,trend:5,tag:["win","jour de pluie = tout part"],en:"3 fold auto open windproof umbrella",gt:"parapluie pliant"},
  {cat:"utile",name:"Parapluie canne grande taille",buy:3,sell:10,trend:4,tag:["win","hommes & seniors"],en:"straight golf umbrella 8 ribs",gt:"parapluie tempête"},
  {cat:"utile",name:"Poncho de pluie jetable",buy:0.25,sell:2.5,trend:4,tag:["win","×10 · à garder sous la table"],en:"disposable PE rain poncho",gt:"poncho de pluie"},
  {cat:"utile",name:"Chaussettes coton (lot de 3)",buy:1.5,sell:5,trend:4,tag:["win","réassort permanent"],en:"cotton crew socks bulk multipack",gt:"chaussettes pas cher"},
  {cat:"utile",name:"Chaussettes thermiques hiver",buy:0.8,sell:3,trend:4,tag:["hot","novembre → février"],en:"thermal terry winter socks thick",gt:"chaussettes thermiques"},
  {cat:"utile",name:"Ensemble bonnet + écharpe + gants",buy:1.9,sell:9,trend:5,tag:["win","+7 € par vente"],en:"winter beanie scarf gloves 3 piece set",gt:"ensemble bonnet écharpe gants"},
  {cat:"utile",name:"Gants tactiles polaires",buy:1.2,sell:4,trend:4,tag:["hot","vague de froid"],en:"touchscreen fleece winter gloves",gt:"gants tactiles"},
  {cat:"utile",name:"Sac de courses pliable / tote",buy:0.4,sell:3,trend:4,tag:["win","×7 · client type marché"],en:"foldable shopping tote bag nonwoven",gt:"sac de courses pliable"},
  {cat:"utile",name:"Chaufferettes mains jetables",buy:0.15,sell:1.5,trend:4,tag:["hot","vague de froid"],en:"disposable hand warmer patch",gt:"chaufferette main"},
  {cat:"utile",name:"Coupe-ongles / kit manucure",buy:0.3,sell:2,trend:3,tag:["win","dépannage · ×6"],en:"nail clipper set stainless steel",gt:"coupe ongles"},
  {cat:"utile",name:"Cintres velours antidérapants (×10)",buy:1.2,sell:5,trend:3,tag:["win","vendu par lot de 10"],en:"velvet non slip clothes hangers",gt:"cintres velours"},

  // ---------- MAISON : cuisine, ménage, rangement, animaux ----------
  {cat:"maison",name:"Crochets adhésifs muraux (blister)",buy:0.3,sell:2,trend:4,tag:["win","×6 · achat d'impulsion"],en:"self adhesive wall hooks set",gt:"crochet adhésif"},
  {cat:"maison",name:"Chiffons microfibre (lot de 5)",buy:0.9,sell:5,trend:4,tag:["win","consommable, ça revient"],en:"microfiber cleaning cloth bulk",gt:"chiffon microfibre"},
  {cat:"maison",name:"Éponges magiques mélamine (×10)",buy:0.4,sell:2.5,trend:3,tag:["win","×6"],en:"melamine magic cleaning sponge",gt:"éponge magique"},
  {cat:"maison",name:"Torchons de cuisine gaufrés",buy:0.35,sell:2,trend:3,tag:["win","3 pour 5 €"],en:"waffle weave kitchen towel cotton",gt:"torchon cuisine"},
  {cat:"maison",name:"Ouvre-bocal caoutchouc",buy:0.15,sell:2,trend:3,tag:["win","×13 · plaît aux seniors"],en:"rubber jar opener grip",gt:"ouvre bocal"},
  {cat:"maison",name:"Gant / brosse anti-poils animaux",buy:0.7,sell:5,trend:4,tag:["win","propriétaires chien-chat"],en:"pet hair remover glove brush",gt:"brosse anti poils"},
  {cat:"maison",name:"Boîte repas / lunch box",buy:1.2,sell:6,trend:3,tag:["risk","contact alim. = exiger la DoC"],en:"pp lunch box food container",gt:"lunch box"},
  {cat:"maison",name:"Désodorisant voiture (clip aération)",buy:0.4,sell:2,trend:3,tag:["risk","parfum = étiquetage CLP"],en:"car air freshener vent clip",gt:"désodorisant voiture"},

  // ---------- SAISON : Noël (à commander dès octobre) ----------
  {cat:"autre",name:"Emballage cadeau Noël (rouleaux, sacs)",buy:0.6,sell:2.5,trend:4,tag:["hot","décembre = LE mois"],en:"christmas gift wrapping paper roll bulk",gt:"emballage cadeau noël"},
  {cat:"autre",name:"Déco Noël petit prix (boules, guirlandes)",buy:1,sell:5,trend:4,tag:["hot","non lumineux uniquement"],en:"christmas ball ornament set",gt:"décoration noël"},

  // ---------- MODE / ACCESSOIRES : les valeurs sûres du rayon ----------
  {cat:"peluche",name:"Porte-clés peluche (charm de sac)",buy:1.2,sell:6,trend:5,tag:["hot","générique, jamais Labubu"],en:"plush keychain bag charm",gt:"porte clé peluche"},
  {cat:"peluche",name:"Boîte mystère / mini-figurine",buy:1.5,sell:6,trend:4,tag:["win","effet unboxing"],en:"blind box mystery figure",gt:"blind box"},
  {cat:"bijoux",name:"Bijoux acier inoxydable",buy:1.8,sell:9,trend:5,tag:["win","ne noircit pas · zéro retour"],en:"stainless steel jewelry wholesale",gt:"bijoux acier inoxydable"},
  {cat:"bijoux",name:"Charms de sac / initiales",buy:1,sell:5,trend:5,tag:["hot","+153 % de recherches"],en:"bag charm keychain letter initial",gt:"charm de sac"},
  {cat:"bijoux",name:"Bracelets perles à personnaliser",buy:0.5,sell:4,trend:4,tag:["win","tu le montes devant la cliente"],en:"beaded name bracelet diy",gt:"bracelet perle prénom"},
  {cat:"cheveux",name:"Claw clips acétate (écaille)",buy:1.25,sell:5,trend:5,tag:["win","vrai acétate, pas ABS"],en:"cellulose acetate hair claw clip",gt:"pince claw clip"},
  {cat:"cheveux",name:"Barrettes / mini pinces (lot)",buy:0.4,sell:3,trend:4,tag:["win","impulsif ado"],en:"hair clips set girls bulk",gt:"barrettes cheveux"},
  {cat:"tech",name:"Bijoux de téléphone (phone charms)",buy:1,sell:5,trend:4,tag:["hot","même cliente que les charms"],en:"phone charm strap beaded",gt:"bijou de téléphone"}
];

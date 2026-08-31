// Radar Juju — mis à jour automatiquement chaque lundi matin par l'agent de veille.
// Ne pas éditer la structure : cat, name, buy, sell, trend(1-5), tag[type,label], en (mot-clé gros), gt (mot-clé tendance FR).
// cat : peluche | bijoux | cheveux | tech | rentree | beaute | utile | maison | autre
// La règle Juju : la marge d'abord, la catégorie ensuite. Mode ET utilitaire.
window.RADAR_UPDATED = "2026-08-31";
window.RADAR_PRODUCTS = [
  // ---------- UTILE : fin de rentrée + premier froid (le client achète parce qu'il en a besoin MAINTENANT) ----------
  {cat:"utile",name:"Parapluie pliant coupe-vent",buy:1.9,sell:8,trend:5,tag:["win","premières pluies d'automne"],en:"3 fold auto open windproof umbrella",gt:"parapluie pliant"},
  {cat:"utile",name:"Poncho de pluie jetable",buy:0.25,sell:2.5,trend:4,tag:["win","×10 · à garder sous la table"],en:"disposable PE rain poncho",gt:"poncho de pluie"},
  {cat:"utile",name:"Bonnet tricot unisexe",buy:1.3,sell:6,trend:4,tag:["win","premier froid = duo bonnet+gants"],en:"unisex knit beanie wholesale",gt:"bonnet homme femme"},
  {cat:"utile",name:"Gants tactiles chauds hiver",buy:1.3,sell:5,trend:4,tag:["win","les mains gèlent au marché aussi"],en:"winter touchscreen knit gloves",gt:"gants tactiles hiver"},
  {cat:"utile",name:"Chaussettes chaudes thermo (lot de 3)",buy:1.7,sell:6,trend:4,tag:["win","réassort permanent, premier froid"],en:"thermal winter socks bulk multipack",gt:"chaussettes chaudes hiver"},
  {cat:"utile",name:"Sac de courses pliable / tote",buy:0.4,sell:3,trend:4,tag:["win","×7 · client type marché"],en:"foldable shopping tote bag nonwoven",gt:"sac de courses pliable"},
  {cat:"utile",name:"Lampe torche LED rechargeable USB",buy:1.5,sell:7,trend:4,tag:["risk","électrique = CE+DEEE"],en:"usb rechargeable led flashlight",gt:"lampe torche led"},
  {cat:"utile",name:"Chaufferette main gel réutilisable",buy:0.8,sell:5,trend:4,tag:["win","premier froid, dépannage instantané"],en:"reusable gel click hand warmer",gt:"chaufferette main réutilisable"},

  // ---------- MAISON : cuisine, ménage, rangement, animaux, cocooning premier froid ----------
  {cat:"maison",name:"Crochets adhésifs muraux (blister)",buy:0.3,sell:2,trend:4,tag:["win","×6 · achat d'impulsion"],en:"self adhesive wall hooks set",gt:"crochet adhésif"},
  {cat:"maison",name:"Chiffons microfibre (lot de 5)",buy:0.9,sell:5,trend:4,tag:["win","consommable, ça revient"],en:"microfiber cleaning cloth bulk",gt:"chiffon microfibre"},
  {cat:"maison",name:"Gant / brosse anti-poils animaux",buy:0.7,sell:5,trend:4,tag:["win","+30 % demande animalerie"],en:"pet hair remover glove brush",gt:"brosse anti poils"},
  {cat:"maison",name:"Range-couverts tiroir extensible",buy:1.3,sell:6,trend:3,tag:["win","tendance rangement tiroir 2026"],en:"expandable drawer cutlery tray organizer",gt:"range couverts tiroir"},
  {cat:"maison",name:"Boîte repas / lunch box",buy:1.2,sell:6,trend:3,tag:["risk","contact alim. = exiger la DoC"],en:"pp lunch box food container",gt:"lunch box"},
  {cat:"maison",name:"Chaussons peluche moelleux",buy:1.8,sell:8,trend:4,tag:["win","cocooning premier froid"],en:"plush fluffy winter house slippers",gt:"chaussons peluche"},

  // ---------- RENTRÉE : papeterie kawaii, ça tourne encore fort jusqu'à la Toussaint ----------
  {cat:"rentree",name:"Trousse peluche kawaii (capybara/axolotl)",buy:1.5,sell:7,trend:5,tag:["hot","tendance collège, fin de rentrée"],en:"plush kawaii pencil case animal",gt:"trousse peluche kawaii"},
  {cat:"rentree",name:"Stylos gel pointe fine multicolores (lot)",buy:0.9,sell:5,trend:4,tag:["win","écriture + bullet journal"],en:"fine tip gel pens multicolor set",gt:"stylos gel fine pointe"},
  {cat:"rentree",name:"Gommes parfumées fantaisie (lot)",buy:0.3,sell:2.5,trend:4,tag:["win","impulsif ado · ×8"],en:"scented novelty erasers bulk",gt:"gomme parfumée"},
  {cat:"rentree",name:"Stickers / washi tape kawaii",buy:0.4,sell:3,trend:4,tag:["win","personnalisation agenda/trousse"],en:"kawaii washi tape sticker set",gt:"washi tape kawaii"},

  // ---------- AUTRE : Halloween / Toussaint, on anticipe fin octobre ----------
  {cat:"autre",name:"Colliers / bracelets lumineux Halloween (lot)",buy:0.3,sell:3,trend:5,tag:["hot","Toussaint approche, jetable soirée"],en:"glow stick necklace bracelet halloween party",gt:"collier lumineux halloween"},
  {cat:"autre",name:"Kit déco Halloween (toile + araignées)",buy:0.5,sell:4,trend:4,tag:["hot","vitrine de stand · dépenses déco +15 %"],en:"halloween spider web decoration kit",gt:"déco halloween pas cher"},

  // ---------- MODE / ACCESSOIRES : valeurs sûres + nouveautés TikTok confirmées ----------
  {cat:"peluche",name:"Porte-clés peluche (charm de sac)",buy:1.2,sell:6,trend:5,tag:["hot","générique, jamais Labubu"],en:"plush keychain bag charm",gt:"porte clé peluche"},
  {cat:"bijoux",name:"Bijoux acier inoxydable",buy:1.8,sell:9,trend:5,tag:["win","ne noircit pas · zéro retour"],en:"stainless steel jewelry wholesale",gt:"bijoux acier inoxydable"},
  {cat:"bijoux",name:"Charms de sac / initiales",buy:1,sell:5,trend:5,tag:["hot","+153 % de recherches"],en:"bag charm keychain letter initial",gt:"charm de sac"},
  {cat:"bijoux",name:"Bracelets perles à personnaliser",buy:0.5,sell:4,trend:4,tag:["win","tu le montes devant la cliente"],en:"beaded name bracelet diy",gt:"bracelet perle prénom"},
  {cat:"cheveux",name:"Claw clips acétate à charms interchangeables",buy:1.7,sell:8,trend:5,tag:["hot","charms + perles à clipser, tendance confirmée 2026"],en:"cellulose acetate claw clip interchangeable charms",gt:"pince claw clip charm"},
  {cat:"tech",name:"Bijoux de téléphone (phone charms)",buy:1,sell:5,trend:4,tag:["hot","même cliente que les charms"],en:"phone charm strap beaded",gt:"bijou de téléphone"},

  // ---------- BEAUTÉ : tendance clean girl / mob wife, sans risque électrique ----------
  {cat:"beaute",name:"Kit faux-cils auto-adhésifs",buy:1,sell:6,trend:4,tag:["risk","colle = CPNP + allergènes à afficher"],en:"self adhesive false eyelash kit",gt:"faux cils auto adhésif"},
  {cat:"beaute",name:"Ice roller visage",buy:1.2,sell:6,trend:3,tag:["win","tendance skincare, pas d'électrique"],en:"facial ice roller skincare tool",gt:"ice roller visage"}
];

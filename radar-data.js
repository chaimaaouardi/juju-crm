// Radar Juju — mis à jour automatiquement chaque lundi matin par l'agent de veille.
// Ne pas éditer la structure : cat, name, buy, sell, trend(1-5), tag[type,label], en (mot-clé gros), gt (mot-clé tendance FR).
// cat : peluche | bijoux | cheveux | tech | rentree | beaute | utile | maison | autre
// La règle Juju : la marge d'abord, la catégorie ensuite. Mode ET utilitaire.
window.RADAR_UPDATED = "2026-09-21";
window.RADAR_PRODUCTS = [
  // ---------- UTILE : pluie + froid qui s'installe ----------
  {cat:"utile",name:"Parapluie pliant coupe-vent",buy:1.9,sell:8,trend:5,tag:["win","pluies d'automne, réassort permanent"],en:"3 fold auto open windproof umbrella",gt:"parapluie pliant"},
  {cat:"utile",name:"Poncho de pluie jetable",buy:0.25,sell:2.5,trend:4,tag:["win","×10 · à garder sous la table"],en:"disposable PE rain poncho",gt:"poncho de pluie"},
  {cat:"utile",name:"Bonnet tricot unisexe",buy:1.3,sell:6,trend:5,tag:["win","froid qui s'installe, réassort permanent"],en:"unisex knit beanie wholesale",gt:"bonnet homme femme"},
  {cat:"utile",name:"Gants tactiles chauds hiver",buy:1.3,sell:5,trend:4,tag:["win","les mains gèlent au marché aussi"],en:"winter touchscreen knit gloves",gt:"gants tactiles hiver"},
  {cat:"utile",name:"Chaussettes chaudes thermo (lot de 3)",buy:1.7,sell:6,trend:4,tag:["win","réassort permanent, premier froid"],en:"thermal winter socks bulk multipack",gt:"chaussettes chaudes hiver"},
  {cat:"utile",name:"Sac de courses pliable / tote",buy:0.4,sell:3,trend:4,tag:["win","×7 · client type marché"],en:"foldable shopping tote bag nonwoven",gt:"sac de courses pliable"},
  {cat:"utile",name:"Gourde isotherme inox 500ml",buy:1.6,sell:8,trend:3,tag:["risk","contact alimentaire = règl. 1935/2004"],en:"stainless steel insulated water bottle",gt:"gourde isotherme inox"},
  {cat:"utile",name:"Chaufferette de poche réutilisable (clic)",buy:0.9,sell:5,trend:4,tag:["win","premier froid + soirées Halloween au marché"],en:"reusable click heat hand warmer pack",gt:"chaufferette main réutilisable"},

  // ---------- MAISON : cuisine, rangement, ménage, animaux, cocooning premier froid ----------
  {cat:"maison",name:"Chiffons microfibre (lot de 5)",buy:0.9,sell:5,trend:4,tag:["win","consommable, ça revient"],en:"microfiber cleaning cloth bulk",gt:"chiffon microfibre"},
  {cat:"maison",name:"Gant / brosse anti-poils animaux",buy:0.7,sell:5,trend:4,tag:["win","+30 % demande animalerie"],en:"pet hair remover glove brush",gt:"brosse anti poils"},
  {cat:"maison",name:"Chaussons peluche moelleux",buy:1.8,sell:8,trend:4,tag:["win","cocooning premier froid"],en:"plush fluffy winter house slippers",gt:"chaussons peluche"},
  {cat:"maison",name:"Calendrier de l'avent à remplir (DIY)",buy:0.6,sell:5,trend:3,tag:["win","anticipation Noël, à commander maintenant vu le délai import"],en:"fillable advent calendar bags diy kit",gt:"calendrier avent à remplir"},

  // ---------- AUTRE : Toussaint/Halloween, pic attendu fin octobre ----------
  {cat:"autre",name:"Colliers / bracelets lumineux Halloween (lot)",buy:0.3,sell:3,trend:5,tag:["hot","Toussaint approche, jetable soirée"],en:"glow stick necklace bracelet halloween party",gt:"collier lumineux halloween"},
  {cat:"autre",name:"Guirlande lumineuse LED Halloween",buy:1.8,sell:9,trend:4,tag:["risk","électrique = CE+DEEE, +30% ventes déco tech"],en:"led string lights halloween orange purple",gt:"guirlande lumineuse halloween"},
  {cat:"autre",name:"Sac à bonbons Halloween réutilisable",buy:0.4,sell:3.5,trend:4,tag:["win","dépannage trick-or-treat, marge ×8"],en:"halloween trick or treat tote bag",gt:"sac bonbons halloween"},

  // ---------- MODE / ACCESSOIRES : valeurs sûres + nouveautés confirmées ----------
  {cat:"bijoux",name:"Bijoux acier inoxydable",buy:1.8,sell:9,trend:5,tag:["win","ne noircit pas · zéro retour"],en:"stainless steel jewelry wholesale",gt:"bijoux acier inoxydable"},
  {cat:"bijoux",name:"Charms de sac / initiales",buy:1,sell:5,trend:5,tag:["hot","+153 % de recherches, tendance confirmée 2026"],en:"bag charm keychain letter initial",gt:"charm de sac"},
  {cat:"bijoux",name:"Bracelets perles à personnaliser",buy:0.5,sell:4,trend:4,tag:["win","tu le montes devant la cliente"],en:"beaded name bracelet diy",gt:"bracelet perle prénom"},
  {cat:"bijoux",name:"Bague ajustable acier gravée (initiale)",buy:0.6,sell:4,trend:4,tag:["win","même cliente que les charms, vente croisée"],en:"adjustable stainless steel initial ring",gt:"bague acier initiale"},
  {cat:"bijoux",name:"Broche vintage décorative",buy:0.8,sell:5,trend:3,tag:["win","tendance broche façon bijou 2026, petite niche mais marge correcte"],en:"vintage decorative brooch pin wholesale",gt:"broche vintage bijou"},
  {cat:"cheveux",name:"Pince cheveux acétate façon peigne / barrette",buy:1.4,sell:7,trend:5,tag:["hot","remplace le claw clip classique, tendance confirmée 2026"],en:"acetate hair comb slide clip french pin style",gt:"pince cheveux peigne acétate"},
  {cat:"cheveux",name:"Claw clip acétate à charms interchangeables",buy:1.7,sell:7,trend:3,tag:["win","classique qui se tasse, le peigne prend le relais"],en:"cellulose acetate claw clip interchangeable charms",gt:"pince claw clip charm"},
  {cat:"cheveux",name:"Chouchou velours épais hiver",buy:0.5,sell:3.5,trend:3,tag:["win","petit prix, gros volume, saison froide"],en:"thick velvet scrunchie winter hair tie",gt:"chouchou velours hiver"},
  {cat:"tech",name:"Bijoux de téléphone (phone charms)",buy:1,sell:5,trend:4,tag:["hot","même cliente que les charms"],en:"phone charm strap beaded",gt:"bijou de téléphone"},
  {cat:"peluche",name:"Porte-clés peluche (charm de sac)",buy:1.2,sell:6,trend:4,tag:["risk","peluche assimilée jouet = CE+EN71"],en:"plush keychain bag charm",gt:"porte clé peluche"},
  {cat:"peluche",name:"Mini peluche Halloween (fantôme/citrouille)",buy:1.3,sell:6,trend:4,tag:["risk","Toussaint approche, peluche assimilée jouet = CE+EN71"],en:"mini halloween plush ghost pumpkin keychain",gt:"peluche halloween citrouille fantôme"},

  // ---------- BEAUTÉ : tendance skincare gadgets, sans risque électrique ----------
  {cat:"beaute",name:"Rouleau de jade / gua sha visage",buy:1.2,sell:7,trend:4,tag:["win","gadget skincare tendance Amazon FR, pas d'électrique"],en:"jade roller gua sha facial tool",gt:"rouleau de jade visage"},
  {cat:"beaute",name:"Kit faux-cils auto-adhésifs",buy:1,sell:6,trend:3,tag:["risk","colle = CPNP + allergènes à afficher"],en:"self adhesive false eyelash kit",gt:"faux cils auto adhésif"}
];

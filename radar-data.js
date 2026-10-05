// Radar Juju — mis à jour automatiquement chaque lundi matin par l'agent de veille.
// Ne pas éditer la structure : cat, name, buy, sell, trend(1-5), tag[type,label], en (mot-clé gros), gt (mot-clé tendance FR).
// cat : peluche | bijoux | cheveux | tech | rentree | beaute | utile | maison | autre
// La règle Juju : la marge d'abord, la catégorie ensuite. Mode ET utilitaire.
window.RADAR_UPDATED = "2026-10-05";
window.RADAR_PRODUCTS = [
  // ---------- UTILE : froid installé + Halloween à 3 semaines + Noël à anticiper (délai import) ----------
  {cat:"utile",name:"Parapluie pliant coupe-vent",buy:1.9,sell:8,trend:5,tag:["win","pluies d'automne, réassort permanent"],en:"3 fold auto open windproof umbrella",gt:"parapluie pliant"},
  {cat:"utile",name:"Poncho de pluie jetable",buy:0.25,sell:2.5,trend:4,tag:["win","×10 · à garder sous la table"],en:"disposable PE rain poncho",gt:"poncho de pluie"},
  {cat:"utile",name:"Bonnet tricot unisexe",buy:1.3,sell:6,trend:5,tag:["win","froid installé, réassort permanent"],en:"unisex knit beanie wholesale",gt:"bonnet homme femme"},
  {cat:"utile",name:"Gants tactiles chauds hiver",buy:1.3,sell:5,trend:4,tag:["win","les mains gèlent au marché aussi"],en:"winter touchscreen knit gloves",gt:"gants tactiles hiver"},
  {cat:"utile",name:"Chaussettes chaudes thermo (lot de 3)",buy:1.7,sell:6,trend:4,tag:["win","réassort permanent, plein froid"],en:"thermal winter socks bulk multipack",gt:"chaussettes chaudes hiver"},
  {cat:"utile",name:"Sac de courses pliable / tote",buy:0.4,sell:3,trend:4,tag:["win","×7 · client type marché"],en:"foldable shopping tote bag nonwoven",gt:"sac de courses pliable"},
  {cat:"utile",name:"Chaufferette de poche réutilisable (clic)",buy:0.9,sell:5,trend:4,tag:["win","plein froid, best-seller de poche"],en:"reusable click heat hand warmer pack",gt:"chaufferette main réutilisable"},
  {cat:"utile",name:"Bonnet lumineux LED Noël clignotant",buy:2.2,sell:9,trend:4,tag:["risk","électrique = CE+DEEE, à commander maintenant vu le délai import"],en:"led light up christmas beanie hat flashing",gt:"bonnet lumineux noël"},

  // ---------- MAISON : cuisine, rangement, ménage, animaux ----------
  {cat:"maison",name:"Chiffons microfibre (lot de 5)",buy:0.9,sell:5,trend:4,tag:["win","consommable, ça revient"],en:"microfiber cleaning cloth bulk",gt:"chiffon microfibre"},
  {cat:"maison",name:"Gant / brosse anti-poils animaux",buy:0.7,sell:5,trend:4,tag:["win","+30 % demande animalerie"],en:"pet hair remover glove brush",gt:"brosse anti poils"},
  {cat:"maison",name:"Calendrier de l'avent à remplir (DIY)",buy:0.6,sell:5,trend:4,tag:["win","anticipation Noël, à commander maintenant vu le délai import"],en:"fillable advent calendar bags diy kit",gt:"calendrier avent à remplir"},
  {cat:"maison",name:"Boîte de rangement alimentaire hermétique (riz/pâtes)",buy:1.4,sell:7,trend:4,tag:["risk","contact alimentaire = règl. 1935/2004 · gadget rangement viral TikTok"],en:"airtight food storage container rice wholesale",gt:"boite de rangement alimentaire hermétique"},
  {cat:"maison",name:"Tapis à lécher pour chien / chat",buy:1.1,sell:7,trend:4,tag:["win","ralentit la gamelle, tendance animalerie confirmée 2026"],en:"dog cat slow feeder lick mat",gt:"tapis à lécher chien"},
  {cat:"maison",name:"Collier LED sécurité nocturne pour chien",buy:1.2,sell:6,trend:4,tag:["risk","pile/LED = CE+DEEE, balades d'hiver dans le noir"],en:"led dog safety collar night walk",gt:"collier led chien nuit"},

  // ---------- TECH : gadget déco viral, sans lien avec la mode ----------
  {cat:"tech",name:"Mini projecteur étoiles galaxie Bluetooth 4-en-1",buy:2.6,sell:11,trend:5,tag:["risk","électrique = CE+DEEE, viral TikTok déco chambre, à commander maintenant"],en:"galaxy star projector bluetooth speaker 4in1",gt:"projecteur étoiles bluetooth"},

  // ---------- HALLOWEEN (à 3 semaines) + NOËL anticipé (délai import) ----------
  {cat:"autre",name:"Colliers / bracelets lumineux Halloween (lot)",buy:0.3,sell:3,trend:5,tag:["hot","Halloween dans 3 semaines, jetable soirée"],en:"glow stick necklace bracelet halloween party",gt:"collier lumineux halloween"},
  {cat:"autre",name:"Guirlande / bunting déco noir et or Halloween",buy:1.6,sell:8,trend:4,tag:["hot","le noir et or chic remplace l'orange classique, tendance confirmée 2026"],en:"black gold gothic halloween bunting garland fabric",gt:"déco halloween noir et or"},
  {cat:"autre",name:"Guirlande lumineuse LED Noël blanc chaud",buy:2,sell:10,trend:4,tag:["risk","électrique = CE+DEEE, à commander maintenant vu le délai import"],en:"warm white led string lights christmas indoor outdoor",gt:"guirlande lumineuse noël"},

  // ---------- MODE / ACCESSOIRES : valeurs sûres + nouveautés confirmées AW2026 ----------
  {cat:"bijoux",name:"Bijoux acier inoxydable",buy:1.8,sell:9,trend:5,tag:["win","ne noircit pas · zéro retour"],en:"stainless steel jewelry wholesale",gt:"bijoux acier inoxydable"},
  {cat:"bijoux",name:"Charms de sac / initiales",buy:1,sell:5,trend:5,tag:["hot","+153 % de recherches, tendance confirmée 2026"],en:"bag charm keychain letter initial",gt:"charm de sac"},
  {cat:"bijoux",name:"Boucles d'oreilles XXL dorées sculpturales",buy:1.1,sell:7,trend:5,tag:["hot","boucles surdimensionnées, tendance confirmée AW2026-27"],en:"oversized gold statement earrings wholesale",gt:"boucles d'oreilles xxl dorées"},
  {cat:"bijoux",name:"Bracelets perles à personnaliser",buy:0.5,sell:4,trend:4,tag:["win","tu le montes devant la cliente"],en:"beaded name bracelet diy",gt:"bracelet perle prénom"},
  {cat:"cheveux",name:"Pince cheveux acétate façon peigne / barrette",buy:1.4,sell:7,trend:5,tag:["hot","remplace le claw clip classique, tendance confirmée 2026"],en:"acetate hair comb slide clip french pin style",gt:"pince cheveux peigne acétate"},
  {cat:"cheveux",name:"Barrette métal bruni finition mate",buy:0.9,sell:5,trend:3,tag:["win","finition métal bruni, tendance confirmée AW2026"],en:"matte burnished metal hair barrette clip",gt:"barrette cheveux métal mat"},
  {cat:"cheveux",name:"Chouchou velours épais hiver",buy:0.5,sell:3.5,trend:3,tag:["win","petit prix, gros volume, saison froide"],en:"thick velvet scrunchie winter hair tie",gt:"chouchou velours hiver"},
  {cat:"peluche",name:"Mini squishy animal mignon (vache/axolotl/capybara)",buy:0.8,sell:5,trend:5,tag:["risk","jouet enfant = CE+EN71, recherches +200 % sur ces motifs en 2026"],en:"mini squishy animal toy highland cow axolotl capybara",gt:"squishy animal mignon"},
  {cat:"peluche",name:"Mini peluche Halloween (fantôme/citrouille)",buy:1.3,sell:6,trend:4,tag:["risk","Halloween dans 3 semaines, peluche assimilée jouet = CE+EN71"],en:"mini halloween plush ghost pumpkin keychain",gt:"peluche halloween citrouille fantôme"},

  // ---------- BEAUTÉ : gadget skincare tendance, sans risque électrique ----------
  {cat:"beaute",name:"Rouleau de jade / gua sha visage",buy:1.2,sell:7,trend:4,tag:["win","gadget skincare tendance Amazon FR, pas d'électrique"],en:"jade roller gua sha facial tool",gt:"rouleau de jade visage"}
];

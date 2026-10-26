// Radar Juju — mis à jour automatiquement chaque lundi matin par l'agent de veille.
// Ne pas éditer la structure : cat, name, buy, sell, trend(1-5), tag[type,label], en (mot-clé gros), gt (mot-clé tendance FR).
// cat : peluche | bijoux | cheveux | tech | rentree | beaute | utile | maison | autre
// La règle Juju : la marge d'abord, la catégorie ensuite. Mode ET utilitaire.
window.RADAR_UPDATED = "2026-10-26";
window.RADAR_PRODUCTS = [
  // ---------- UTILE : froid bien installé + Noël à anticiper (délai import ~8 semaines) ----------
  {cat:"utile",name:"Parapluie pliant coupe-vent",buy:1.9,sell:8,trend:5,tag:["win","pluies d'automne-hiver, réassort permanent"],en:"3 fold auto open windproof umbrella",gt:"parapluie pliant"},
  {cat:"utile",name:"Bonnet tricot unisexe",buy:1.3,sell:6,trend:5,tag:["win","froid installé, réassort permanent"],en:"unisex knit beanie wholesale",gt:"bonnet homme femme"},
  {cat:"utile",name:"Gants tactiles chauds hiver",buy:1.3,sell:5,trend:4,tag:["win","les mains gèlent au marché aussi"],en:"winter touchscreen knit gloves",gt:"gants tactiles hiver"},
  {cat:"utile",name:"Chaussettes chaudes thermo (lot de 3)",buy:1.7,sell:6,trend:4,tag:["win","réassort permanent, plein froid"],en:"thermal winter socks bulk multipack",gt:"chaussettes chaudes hiver"},
  {cat:"utile",name:"Chaufferette de poche réutilisable (clic)",buy:0.9,sell:5,trend:4,tag:["win","plein froid, best-seller de poche"],en:"reusable click heat hand warmer pack",gt:"chaufferette main réutilisable"},
  {cat:"utile",name:"Gant grattoir pare-brise polaire",buy:1.3,sell:6,trend:4,tag:["win","premiers givres, aucun risque réglementaire"],en:"ice scraper mitt windshield glove fleece lined",gt:"gant grattoir pare-brise voiture"},
  {cat:"utile",name:"Bonnet lumineux LED Noël clignotant",buy:2.2,sell:9,trend:4,tag:["risk","électrique = CE+DEEE, à commander maintenant vu le délai import"],en:"led light up christmas beanie hat flashing",gt:"bonnet lumineux noël"},

  // ---------- MAISON : cuisine, rangement, ménage, animaux ----------
  {cat:"maison",name:"Chiffons microfibre (lot de 5)",buy:0.9,sell:5,trend:4,tag:["win","consommable, ça revient"],en:"microfiber cleaning cloth bulk",gt:"chiffon microfibre"},
  {cat:"maison",name:"Calendrier de l'avent à remplir (DIY)",buy:0.6,sell:5,trend:5,tag:["win","~8 semaines avant Noël, dernière fenêtre confortable pour commander"],en:"fillable advent calendar bags diy kit",gt:"calendrier avent à remplir"},
  {cat:"maison",name:"Boîte de rangement alimentaire hermétique (riz/pâtes)",buy:1.4,sell:7,trend:4,tag:["risk","contact alimentaire = règl. 1935/2004 · gadget rangement viral TikTok"],en:"airtight food storage container rice wholesale",gt:"boite de rangement alimentaire hermétique"},
  {cat:"maison",name:"Tapis à lécher pour chien / chat",buy:1.1,sell:7,trend:4,tag:["win","ralentit la gamelle, tendance animalerie confirmée 2026"],en:"dog cat slow feeder lick mat",gt:"tapis à lécher chien"},
  {cat:"maison",name:"Bouillotte sèche micro-ondes graines de lin",buy:1.5,sell:7,trend:4,tag:["win","froid installé, cadeau cocooning petit prix"],en:"microwave heat pack wheat bag reusable",gt:"bouillotte sèche micro-ondes"},

  // ---------- TECH : gadget déco / cadeau, sans lien avec la mode ----------
  {cat:"tech",name:"Mini projecteur étoiles galaxie Bluetooth 4-en-1",buy:2.6,sell:11,trend:5,tag:["risk","électrique = CE+DEEE, viral TikTok déco chambre, à commander maintenant"],en:"galaxy star projector bluetooth speaker 4in1",gt:"projecteur étoiles bluetooth"},
  {cat:"tech",name:"Veilleuse LED tactile rechargeable enfant",buy:1.8,sell:8,trend:4,tag:["risk","électrique = CE+DEEE, cadeau de Noël enfant, à commander maintenant"],en:"touch led night light rechargeable kids",gt:"veilleuse led tactile"},

  // ---------- HALLOWEEN (à écouler) + NOËL anticipé (délai import) ----------
  {cat:"autre",name:"Colliers / bracelets lumineux Halloween (lot)",buy:0.3,sell:3,trend:3,tag:["hot","derniers jours avant Halloween (31/10), à écouler"],en:"glow stick necklace bracelet halloween party",gt:"collier lumineux halloween"},
  {cat:"autre",name:"Guirlande lumineuse LED Noël blanc chaud",buy:2,sell:10,trend:4,tag:["risk","électrique = CE+DEEE, à commander maintenant vu le délai import"],en:"warm white led string lights christmas indoor outdoor",gt:"guirlande lumineuse noël"},
  {cat:"autre",name:"Boules de Noël incassables (lot)",buy:1,sell:6,trend:4,tag:["win","décor Noël sans électrique, alternative sûre aux guirlandes LED"],en:"shatterproof christmas ball ornaments bulk",gt:"boules de noël incassables"},
  {cat:"autre",name:"Nœud XXL ruban velours sapin / cadeau",buy:0.5,sell:4,trend:4,tag:["win","retour des nœuds et rubans XXL, teintes bordeaux/vert/doré, tendance AH2026"],en:"oversized velvet bow christmas tree ribbon",gt:"nœud xxl sapin ruban"},

  // ---------- MODE / ACCESSOIRES : valeurs sûres + nouveautés confirmées AW2026-27 ----------
  {cat:"bijoux",name:"Bijoux acier inoxydable",buy:1.8,sell:9,trend:5,tag:["win","ne noircit pas · zéro retour"],en:"stainless steel jewelry wholesale",gt:"bijoux acier inoxydable"},
  {cat:"bijoux",name:"Charms de sac / initiales",buy:1,sell:5,trend:5,tag:["hot","+153 % de recherches, tendance confirmée 2026"],en:"bag charm keychain letter initial",gt:"charm de sac"},
  {cat:"bijoux",name:"Boucles d'oreilles XXL dorées sculpturales",buy:1.1,sell:7,trend:5,tag:["hot","boucles surdimensionnées, tendance confirmée AW2026-27"],en:"oversized gold statement earrings wholesale",gt:"boucles d'oreilles xxl dorées"},
  {cat:"bijoux",name:"Bracelet porte-bonheur perles (œil/trèfle/fer à cheval)",buy:0.6,sell:5,trend:4,tag:["hot","motifs porte-bonheur, tendance bijoux AH2026-27 confirmée"],en:"lucky charm beaded bracelet evil eye clover horseshoe",gt:"bracelet porte-bonheur perles"},
  {cat:"cheveux",name:"Pince cheveux acétate façon peigne / barrette",buy:1.4,sell:7,trend:5,tag:["hot","remplace le claw clip classique, tendance confirmée 2026"],en:"acetate hair comb slide clip french pin style",gt:"pince cheveux peigne acétate"},
  {cat:"cheveux",name:"Pince à chignon velours oversize",buy:1.1,sell:6,trend:5,tag:["hot","chignon oversize en velours/satin, tendance confirmée automne 2026"],en:"oversized velvet hair claw clip bun",gt:"pince à chignon velours oversize"},

  {cat:"peluche",name:"Mini squishy animal mignon (vache/axolotl/capybara)",buy:0.8,sell:5,trend:5,tag:["risk","jouet enfant = CE+EN71, recherches +200 % sur ces motifs en 2026"],en:"mini squishy animal toy highland cow axolotl capybara",gt:"squishy animal mignon"},
  {cat:"peluche",name:"Mini peluche porte-clés Noël (renne/lutin/ours bonnet)",buy:1.2,sell:6,trend:4,tag:["risk","Noël à anticiper vu le délai import, peluche assimilée jouet = CE+EN71"],en:"mini christmas plush keychain reindeer elf",gt:"peluche porte-clés noël"},

  // ---------- BEAUTÉ : skincare tendance n°1 TikTok Ads, sans risque électrique ----------
  {cat:"beaute",name:"Rouleau de jade / gua sha visage",buy:1.2,sell:7,trend:4,tag:["win","gadget skincare tendance Amazon FR, pas d'électrique"],en:"jade roller gua sha facial tool",gt:"rouleau de jade visage"},
  {cat:"beaute",name:"Brosse nettoyante visage silicone douce",buy:0.9,sell:6,trend:4,tag:["win","skincare = catégorie n°1 TikTok Ads 2026, manuelle donc pas d'électrique"],en:"silicone facial cleansing brush manual",gt:"brosse nettoyante visage silicone"}
];

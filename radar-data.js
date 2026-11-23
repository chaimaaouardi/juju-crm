// Radar Juju — mis à jour automatiquement chaque lundi matin par l'agent de veille.
// Ne pas éditer la structure : cat, name, buy, sell, trend(1-5), tag[type,label], en (mot-clé gros), gt (mot-clé tendance FR).
// cat : peluche | bijoux | cheveux | tech | rentree | beaute | utile | maison | autre
// La règle Juju : la marge d'abord, la catégorie ensuite. Mode ET utilitaire.
window.RADAR_UPDATED = "2026-11-23";
window.RADAR_PRODUCTS = [
  // ---------- UTILE : Black Friday (27/11) passe, Noël à moins de 5 semaines, réassort permanent ----------
  {cat:"utile",name:"Parapluie pliant coupe-vent",buy:1.9,sell:8,trend:5,tag:["win","pluies d'automne-hiver, réassort permanent"],en:"3 fold auto open windproof umbrella",gt:"parapluie pliant"},
  {cat:"utile",name:"Bonnet tricot unisexe",buy:1.3,sell:6,trend:5,tag:["win","froid installé, réassort permanent"],en:"unisex knit beanie wholesale",gt:"bonnet homme femme"},
  {cat:"utile",name:"Gants tactiles chauds hiver",buy:1.3,sell:5,trend:4,tag:["win","les mains gèlent au marché aussi"],en:"winter touchscreen knit gloves",gt:"gants tactiles hiver"},
  {cat:"utile",name:"Chaussettes chaudes thermo (lot de 3)",buy:1.7,sell:6,trend:4,tag:["win","réassort permanent, plein froid"],en:"thermal winter socks bulk multipack",gt:"chaussettes chaudes hiver"},
  {cat:"utile",name:"Chaufferette de poche réutilisable (clic)",buy:0.9,sell:5,trend:5,tag:["win","plein froid + marchés de Noël, best-seller de poche à moins de 5 semaines des fêtes"],en:"reusable click heat hand warmer pack",gt:"chaufferette main réutilisable"},
  {cat:"utile",name:"Plaid polaire ultra-doux XXL",buy:2.4,sell:10,trend:5,tag:["win","cadeau cocooning n°1, dernière fenêtre d'import confortable avant Noël"],en:"fleece throw blanket soft oversized wholesale",gt:"plaid polaire doux"},
  {cat:"utile",name:"Porte-clés traceur Bluetooth anti-perte",buy:2.2,sell:9,trend:4,tag:["risk","électrique = CE+DEEE, cadeau de dépannage avant Noël, forte marge"],en:"mini bluetooth key finder tracker wholesale",gt:"traceur bluetooth clés"},

  // ---------- MAISON : cuisine, rangement, animaux, cadeaux utilitaires increvables ----------
  {cat:"maison",name:"Boîte de rangement alimentaire hermétique (riz/pâtes)",buy:1.4,sell:7,trend:4,tag:["risk","contact alimentaire = règl. 1935/2004 · gadget rangement viral TikTok"],en:"airtight food storage container rice wholesale",gt:"boite de rangement alimentaire hermétique"},
  {cat:"maison",name:"Tapis à lécher pour chien / chat",buy:1.1,sell:7,trend:4,tag:["win","niche animaux = l'une des plus résilientes en 2026"],en:"dog cat slow feeder lick mat",gt:"tapis à lécher chien"},
  {cat:"maison",name:"Manteau chien hiver polaire",buy:1.8,sell:8,trend:4,tag:["win","animalerie en forte hausse + grand froid, aucun risque réglementaire"],en:"dog winter coat fleece lined wholesale",gt:"manteau chien hiver"},
  {cat:"maison",name:"Bouillotte sèche micro-ondes graines de lin",buy:1.5,sell:7,trend:4,tag:["win","froid installé, cadeau cocooning petit prix"],en:"microwave heat pack wheat bag reusable",gt:"bouillotte sèche micro-ondes"},
  {cat:"maison",name:"Gourde isotherme inox",buy:1.6,sell:8,trend:4,tag:["win","cadeau utilitaire increvable, zéro risque réglementaire, vendu toute l'année"],en:"stainless steel insulated water bottle wholesale",gt:"gourde isotherme inox"},

  // ---------- TECH : gadget déco / soirée, à commander maintenant pour Noël et le Nouvel An ----------
  {cat:"tech",name:"Mini projecteur étoiles galaxie Bluetooth 4-en-1",buy:2.6,sell:11,trend:5,tag:["risk","électrique = CE+DEEE, viral TikTok déco chambre, à commander maintenant pour Noël"],en:"galaxy star projector bluetooth speaker 4in1",gt:"projecteur étoiles bluetooth"},
  {cat:"tech",name:"Bracelet / collier lumineux LED soirée",buy:0.5,sell:4,trend:4,tag:["risk","pile/électrique = CE+DEEE, achat d'impulsion pour le réveillon du 31, marge énorme"],en:"led light up bracelet necklace glow party wholesale",gt:"bracelet lumineux led soirée"},

  // ---------- DÉCO NOËL & NOUVEL AN : dernière fenêtre d'import avant les deux fêtes ----------
  {cat:"autre",name:"Guirlande lumineuse LED Noël blanc chaud",buy:2,sell:10,trend:5,tag:["risk","électrique = CE+DEEE, dernière fenêtre d'import avant Noël"],en:"warm white led string lights christmas indoor outdoor",gt:"guirlande lumineuse noël"},
  {cat:"autre",name:"Bonnet de Père Noël pailleté",buy:0.4,sell:3.5,trend:5,tag:["win","achat d'impulsion ultime à l'approche de Noël, coût quasi nul, rotation record"],en:"christmas santa hat sequin wholesale",gt:"bonnet père noël pailleté"},
  {cat:"autre",name:"Nœud XXL ruban velours sapin / cadeau",buy:0.5,sell:4,trend:4,tag:["win","retour des nœuds et rubans XXL, teintes bordeaux/vert/doré, tendance confirmée défilés AH2026-27"],en:"oversized velvet bow christmas tree ribbon",gt:"nœud xxl sapin ruban"},
  {cat:"autre",name:"Kit fête du Nouvel An (confettis, serpentins, chapeaux 2027)",buy:0.8,sell:5,trend:5,tag:["win","réveillon du 31 décembre à moins de 6 semaines, achat d'impulsion, marge énorme"],en:"new year eve party kit confetti hats 2027",gt:"kit nouvel an confettis chapeaux"},
  {cat:"autre",name:"Gants longs satin / dentelle soirée",buy:1,sell:7,trend:4,tag:["hot","gants d'opéra repérés sur les podiums AH2026-27, parfait pour les fêtes de fin d'année"],en:"long satin lace opera gloves evening wholesale",gt:"gants longs satin soirée"},

  // ---------- MODE / ACCESSOIRES : valeurs sûres + bijoux volumineux confirmés AH2026-27 ----------
  {cat:"bijoux",name:"Bijoux acier inoxydable",buy:1.8,sell:9,trend:5,tag:["win","ne noircit pas · zéro retour"],en:"stainless steel jewelry wholesale",gt:"bijoux acier inoxydable"},
  {cat:"bijoux",name:"Charms de sac / initiales",buy:1,sell:5,trend:5,tag:["hot","accessoire n°1 2026 pour personnaliser sac et bijoux, tendance confirmée"],en:"bag charm keychain letter initial",gt:"charm de sac"},
  {cat:"bijoux",name:"Charm résine Noël (Père Noël / sapin / flocon)",buy:0.5,sell:4,trend:5,tag:["hot","déclinaison fêtes du charm, forte rotation à moins de 5 semaines de Noël"],en:"resin christmas charm santa snowman pendant bulk",gt:"charm noël résine"},
  {cat:"bijoux",name:"Boucles d'oreilles XXL dorées sculpturales",buy:1.1,sell:7,trend:5,tag:["hot","2026 année des accessoires selon la presse mode, bijoux volumineux confirmés AH2026-27"],en:"oversized gold statement earrings wholesale",gt:"boucles d'oreilles xxl dorées"},
  {cat:"cheveux",name:"Pince cheveux acétate façon peigne / barrette",buy:1.4,sell:7,trend:5,tag:["hot","remplace le claw clip classique, tendance confirmée 2026"],en:"acetate hair comb slide clip french pin style",gt:"pince cheveux peigne acétate"},
  {cat:"cheveux",name:"Pince à chignon velours oversize",buy:1.1,sell:6,trend:5,tag:["hot","chignon oversize en velours/satin, tendance confirmée automne 2026"],en:"oversized velvet hair claw clip bun",gt:"pince à chignon velours oversize"},

  {cat:"peluche",name:"Mini squishy animal mignon (vache/axolotl/capybara)",buy:0.8,sell:5,trend:5,tag:["risk","jouet enfant = CE+EN71, recherches en forte hausse sur ces motifs en 2026"],en:"mini squishy animal toy highland cow axolotl capybara",gt:"squishy animal mignon"},

  // ---------- BEAUTÉ : cadeaux de Noël petit prix et skincare TikTok, vigilance CPNP ----------
  {cat:"beaute",name:"Rouleau de jade / gua sha visage",buy:1.2,sell:7,trend:4,tag:["win","gadget skincare tendance Amazon FR, pas d'électrique"],en:"jade roller gua sha facial tool",gt:"rouleau de jade visage"},
  {cat:"beaute",name:"Boule de bain effervescente parfumée",buy:0.5,sell:4,trend:4,tag:["risk","cosmétique = déclaration CPNP, cadeau de Noël classique petit prix, forte rotation en fin d'année"],en:"fizzy bath bomb gift set wholesale",gt:"boule de bain effervescente"}
];

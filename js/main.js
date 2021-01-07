// // on construit notre tableau qui contiendra les differrents numeros de la roue 
// // on utilise la variable segment du fichier segment.js.
// let tabNumeros = segment.map(function (item) {
//   return item.segmentName
// })

// // On definit une marge de securite pour eviter que 
// // la tete de lecture s'arrete a la limite entre deux tranches.
// let ecartSecu = 0;

// // Le nombre de tours avant l'arret de la roue.
// let nbTours = 30;

// // Le tableau qui contiendra les plages d'angles possibles en fonctions du numero
// let tabAngles = [];

// // La largeur d'un segment de numero en prenant en compte l'ecart de securite
// let largeurSegment = (360 / tabNumeros.length) - ecartSecu;

// //L'angle de rotation au début est de 360°/nbNumero
// let coeffRotation = 360 / (tabNumeros.length);

// //La roue n'est pas en marche	
// let arret = false;

// //Un décompte qui permet d'effectuer un certain nombre de tours avant de ralentir
// let decompte = nbTours * tabNumeros.length;

// //NUMERO DEPART
// let numeroDepart = 0;

// //Index du numero depart dans le tableau  tabNumeros
// let indexNumeroDepart = tabNumeros.findIndex(function (item) {
//   return item == numeroDepart;
// });

// let IDInterval;

// // On recupere la roue
// let roue = $('#wheel');;

// let rotation = 0;



// //On détermine les plages d'angles pour chaque segement en prenant compte de l'écart de sécurité
// for (let i = 0; i < tabNumeros.length; i++) {

//   let tabAnglesTemp = [];

//   tabAnglesTemp.push(
//     (i + 1) * ecartSecu + i * largeurSegment
//   );

//   tabAnglesTemp.push(
//     (i + 1) * ecartSecu + (i + 1) * largeurSegment - ecartSecu
//   );

//   tabAngles.push(tabAnglesTemp);
// }


// //Roration de départ en fonction de la case choisie
// roue.rotate(((tabAngles[indexNumeroDepart][1] - tabAngles[indexNumeroDepart][0]) + tabAngles[indexNumeroDepart][0] + 3 * coeffRotation) - 72);

// //fait tourner la roue
// function tournerRoue() {

//   decompte--;

//   //Si le décompte est à zéro on enclenche le ralentit		
//   if (decompte == 0) {
//     arret = true;
//   }

//   //Diminue le coeffRotation=>roue ralentit, 
//   if (arret == true && coeffRotation > 0) {
//     coeffRotation -= 1;
//   }

//   //Si la roue est à l'arret on supprime l'intervalle		
//   else if (arret == true && coeffRotation <= 0) {
//     clearInterval(IDInterval);
//   }

//   rotation += coeffRotation;

//   //On effectue une rotation de la roue en fonction du coeff rotation
//   roue.rotate(rotation);
// }


// function rotationRoue() {
//   //On supprime l'intervalle s'il s'agit d'un deuxième lancé
//   clearInterval(IDInterval);

//   //on appelle la méthode toutes les 30ms
//   IDInterval = setInterval(tournerRoue, 10);
// }



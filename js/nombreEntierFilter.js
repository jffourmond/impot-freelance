app.filter('nombreEntier',function() {

   /**
    * @returns Exemple : 99999.99 => '100 000'
    */ 
  	return function(nombreAvecVirgules){
     
      var arrondi = '' + Math.round(nombreAvecVirgules);
      var resultat = '';
     
      var compteur123 = 0;
      for (i = arrondi.length - 1; i >= 0; i--){
        
        if (compteur123 === 3){
          resultat = arrondi[i] + ' ' + resultat;
          compteur123 = 0;
        } else {
          resultat = arrondi[i] + resultat;
        }
        compteur123++;
      }
     
      return resultat;
   };
	
});

'use strict'
let TanqueDeAgua = {
  //enciende:encendido,
  agua: false,
  calentarAgua: function(enciendo){
    this.enciendo = enciendo;
    if (this.agua === true && this.enciendo === true){
      console.log("El agua se ha calentado correctamente");
      return true;
      
    }else if (this.agua==false && this.enciendo == true){
      console.log("No Hay agua en el tanque, proceda a llenar");
      return false;
    }else{
      console.log("No esta encendida la cafetera, por lo que no puedo proceder");
      return false;
    }
  }
};

let Molino = {
  granos: false,
  on: function (enciendo) {
   this.enciendo = enciendo;
    if(this.granos === true && this.enciendo === true){
      console.log("existen granos y esta encendido, procediendo a moler " );
      return true;
    }else if(this.granos === false && this.enciendo === true){
      console.log("No hay granos"  );
      return false;
    }else{
      console.log("No esta encendido");
    }
    
  }
};

let Mesclador = {

  prepararTaza: function(granos, agua){
    this.granos = granos;
    this.agua = agua;
    if (this.granos === true && this.agua === true  ){
      console.log("Procediendo a hacer taza de cafe");
      console.log("Se ha preparado la taza de cafe");
    }else if (this.granos == false && this.agua == true){
      console.log("h");
    }
  }

}

let Hacercafe = {
  enciendo: false,
  molino: Molino,
  tanqueDeAgua: TanqueDeAgua,
  mesclador: Mesclador,
  tazaDeCafe: function (){
    let m = this.molino.on(this.enciendo);
    
    if(m){
      this.t = this.tanqueDeAgua.calentarAgua(this.enciendo);
    }
    
    if (this.t){
     // console.log(this.t)
      //console.log(m)
      this.mesclador.prepararTaza(m , this.t);
    }
    
    
   
  } 
  
}
  


Hacercafe.enciendo = true;
Hacercafe.molino.granos= true;
Hacercafe.tanqueDeAgua.agua = true;
Hacercafe.tazaDeCafe();

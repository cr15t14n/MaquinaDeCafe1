
let Encender= {
  estado : false
}

let CantidadGranos={
  cantidad: false
}

let Agua={
  cantidad: false
}


let MolerGranos = {
  //Encender.call(this);
  moler: function(){
    if (Encender.estado == false){
      console.log("esta apagado");
     // Encender.estado = true;
    }else{
      console.log("esta encendida");
      
    }
  }

}

let CoffeMaker ={

  on: function(){
    //Encender
    Encender.estado = true;
    console.log("La cafetera se ha encendido");
  },

  granos: function(){
    CantidadGranos.estado = true
  }
}

let objCafe = Object.create(MolerGranos);//se crea el objeto
objCafe.moler();

let cofe= Object.create(CoffeMaker);
cofe.on()

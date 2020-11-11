
let Encender= {
  estado : false
}

let CantidadGranos={
  cantidad: true
}

let Awa={
  cantidad: true
}


let MolerGranos = {
  //Encender.call(this);
  moler: function(){
    if (Encender.estado == false || CantidadGranos == false){
      console.log("esta apagado, o no se puede moler");
     // Encender.estado = true;
    }else{
      console.log("esta encendida");
    }
  }

}

let CoffeMaker ={
  start: function(){
    
  }
}

let objCafe = Object.create(MolerGranos);//se crea el objeto
objCafe.moler();
objCafe.moler();

let cofe= Object.create(CoffeMaker);
cofe.start(Encender)

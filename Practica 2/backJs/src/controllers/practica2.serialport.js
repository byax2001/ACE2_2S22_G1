//metodos para post en la API

const postearCalorias = (bodFuerza)=>{

    const words = bodFuerza.split(',');
    const myJSON = { "caloriasQuem": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Calorias'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearFrecuenciaRep = (bodRitmo)=>{

    const words = bodRitmo.split(',');
    const myJSON = { "vel_rep": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/FrecuenciaRep'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearRango = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "rango": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Rango'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearFrecCard = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "pulsoCard": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Frecuencia'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearDatUsuario = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "edad": words[1].replace('\r',''), "peso": fechaAct,"genero":"1", "estatura": "", "usuarioID": ""};
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/DataUsu'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearUsuario = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "nombreUsu": words[1].replace('\r',''), "pass": fechaAct };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Usuario'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

export const methods = {
    postearCalorias,
    postearFrecuenciaRep,
    postearRango,
    postearFrecCard,
    postearDatUsuario,
    postearUsuario
};
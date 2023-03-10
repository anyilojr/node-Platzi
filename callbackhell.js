function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Blablabla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}



// -- 

console.log('Iniciando proceso...');
hola('Anyilo', function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
            console.log('Terminando proceso...');
                });
            });
        });

    });
});
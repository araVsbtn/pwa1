self.addEventListener(
    'fetch',  // se desea manejar el evento fetch
    function(evento){
        console.log(evento);
        console.log(evento.request.url);
    }
);
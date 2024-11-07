let tipo = 'lepero';

function historiasLepero(nombreProta) {
    const historias = [`${nombreProta} organizaba la fiesta del pueblo, pero una serie de incidentes cómicos hicieron que todo saliera mal…`,
    `${nombreProta} vio un letrero misterioso en la plaza, pero lo que contenía le hizo cambiar de idea…`,
    `${nombreProta} encontró a un vendedor ambulante que le ofreció algo muy raro, pero que a la postre, cambió su vida…`,
    `${nombreProta} no podía creerlo: una cabra apareció en el tejado de su casa, y lo que ocurrió después fue aún más extraño…`,
    `${nombreProta} soñó que su gallo cantaba a medianoche, y desde ese día, las cosas comenzaron a suceder de manera muy extraña…`,
    `${nombreProta} asistió a la boda de su tía Rosita, pero lo que parecía una fiesta tranquila se convirtió en una serie de enredos…`,
    `${nombreProta} encontró un corcho flotando en el mar, y lo que traía consigo era un mensaje que nadie esperaba…`,
    `${nombreProta} participó en la tradicional carrera de burros del pueblo, pero durante la competencia algo muy raro ocurrió…`,
    `${nombreProta} hizo una apuesta en el bar del pueblo, pero lo que pensaba que sería un simple juego, terminó en algo mucho más grande…`,
    `${nombreProta} vio a su perro perseguir a un pavo, pero lo que parecía una simple carrera, se convirtió en una gran aventura…`,
    `${nombreProta} pasó la tarde trabajando en la huerta, pero cuando cayó la noche, todo se volvió más misterioso…`,
    `${nombreProta} siempre tenía miedo del espantapájaros del campo, pero una noche decidió descubrir el secreto que escondía…`,
    `${nombreProta} tenía un perro que parecía saber bailar, y pronto, todo el pueblo se agolpó para ver su increíble talento…`,
    `${nombreProta} descubrió que su abuela tenía una receta secreta para hacer el mejor guiso de la comarca, pero alguien quería robarla…`,
    `${nombreProta} estaba obsesionado con el antiguo reloj de la plaza del pueblo, hasta que una tarde descubrió algo que cambiaría todo…`];
    return historias[Math.floor(Math.random() * historias.length)];
};

function historiasMurciano(nombreProta) {
    const historias = [`${nombreProta} cultivaba tomates en su huerto, pero un día, encontró algo extraño entre las plantas…`,
    `${nombreProta} pasó todo un verano en La Manga, pero nunca olvidó aquel misterioso objeto flotante…`,
    `${nombreProta} se levantaba antes que el sol, y aquel día, el mar le guardaba un secreto…`,
    `${nombreProta} había crecido cerca del faro de Cabo de Palos, pero nunca imaginó que una noche encontraría algo muy raro en su interior…`,
    `${nombreProta} preparaba la fiesta más grande de la huerta murciana, hasta que algo inesperado ocurrió…`,
    `${nombreProta} decidió pasar la noche en las ruinas del castillo, desafiando las leyendas locales…`,
    `${nombreProta} siempre pedaleaba por la Rambla, pero un día, un giro en el camino lo llevó a un lugar nunca antes visto…`,
    `${nombreProta}, una experta herbolaria, encontró una planta en el monte que nadie conocía y que parecía tener poderes curativos…`,
    `${nombreProta} decidió regresar a su pueblo después de muchos años, pero las cosas ya no eran como las recordaba…`,
    `${nombreProta} quería ser torero, pero en la feria encontró algo más que un toro bravo…`,
    `${nombreProta} preparaba queso en su granja, pero un día, algo extraño ocurrió durante el proceso de curado…`,
    `${nombreProta}, tras años de trabajo en la ciudad, subió al tren hacia su pueblo con la esperanza de que todo cambiara…`,
    `${nombreProta} vivió junto al río Segura, pero una noche de tormenta, las aguas trajeron algo que cambió su vida…`,
    `${nombreProta} participaba en la tradicional procesión de los marineros, hasta que algo en la procesión cambió para siempre…`,
    `${nombreProta}, en sus excursiones por las montañas murcianas, descubrió un valle secreto que guardaba un enigma antiguo…`];
    return historias[Math.floor(Math.random() * historias.length)];
};

function actualizarTipo(){
    if(tipo === 'lepero'){
        tipo = 'murciano';
    } else {
        tipo = 'lepero';
    }
}

function mostrarHistoria(){
    let nombreProta = document.getElementById('nombreProta').value;
    if(tipo === 'lepero'){
        let historia = historiasLepero(nombreProta);
        document.getElementById('mostrarHistoria').innerText = historia;
    } else {
        let historia = historiasMurciano(nombreProta);
        document.getElementById('mostrarHistoria').innerText = historia;
    }
}
let body = document.querySelector('body');// prendo da html il tag <body> con document.querySelector
let apriCarello = document.querySelector('.imageCart');
let chiudiCarello = document.querySelector('.chiudiCarello');

// creo la funzione per aprire il carrello cliccandoci sopra
/*con la variabile apricarello uso il metodo AddEventListener dove cliccando 
dopo aver assegnato ad imageCart la bvariabile apriCarello,creo un funzione dentro la quale usando il metodo classList.add,
si aggiunge active al body modificabile tramite css*/
apriCarello.addEventListener('click', ()=>{
    body.classList.add('mostra');
})

// creo la funzione per chiudere il carrello cliccando sopra "chiudi"
chiudiCarello.addEventListener('click', ()=> {
    body.classList.remove('mostra');
})

//creo la variabile products e ci metto un array di prodotti con le loro caratteristiche 
let products = [
    {
        id: 140,
        name: 'COMPUTER',
        image: 'computer1.png',
        price: 700, 
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
        },
    {
        id:401,
        name: 'COMPUTER',
        image: 'computer2.png',
        price: 600,
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
        },
    {
        id: 580,
        name: 'COMPUTER',
        image: 'computer3.png',
        price: 900,
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
    },
    {
        id: 425,
        name: 'COMPUTER',
        image: 'computer4.png',
        price: 400,
        offer:true,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
    },
    {
        id: 960,
        name: 'COMPUTER',
        image: 'computer5.png',
        price: 850,
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
    },

    {
        id: 901,
        name: 'NOTEBOOK',
        image: 'computer1.png',
        price: 1500, 
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
        },
    {
        id: 604,
        name: 'NOTEBOOK',
        image: 'computer2.png',
        price: 2000,
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
        },
    {
        id: 961,
        name: 'NOTEBOOK',
        image: 'computer3.png',
        price: 900,
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
    },
    {
        id: 520,
        name: 'NOTEBOOK',
        image: 'computer4.png',
        price: 400,
        offer: true,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
    },
    {
        id: 901,
        name: 'NOTEBOOK',
        image: 'computer5.png',
        price: 750,
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
    },
    {
        id: 695,
        name: 'SMARTPHONE',
        image: 'computer1.png',
        price: 400, 
        offer: true,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
        },
    {
        id: 741,
        name: 'SMARTPHONE',
        image: 'computer2.png',
        price: 800,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
        },
    {
        id: 852,
        name: 'SMARTPHONE',
        image: 'computer3.png',
        price: 700,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
    },
    {
        id: 639,
        name: 'SMARTPHONE',
        image: 'computer4.png',
        price: 600,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
    },
    {
        id: 456,
        name: 'SMARTPHONE',
        image: 'computer5.png',
        price: 500,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
    },
];


/*per creare  menu dinamico, creo delle variabili e per ogni variabile vado a pescare con document.querySelector la classe corrispondente
 da html ed creo anche il  div dove mettere i prodotti*/
let menuComputer = document.querySelector('.computer');
let menuPortatile = document.querySelector('.portatili');
let menuSmartphone = document.querySelector('.smpartphone');
let productCellsDiv = document.querySelector('.productCells');

/*creo la funzione a nome test gli do parametro category,poi dichiaro che productCells.innerHTML è vuoto per il momento
dopo creo la variabile prodotto e con il metodo  procut.filtr va a prendere la category e per ogni prodotto va a prendere il valore 
*/
function test(category){
    console.log(category)
    productCellsDiv.innerHTML = '';
    let prodotto = products.filter(product => product.name === category);
    prodotto.forEach((value) => {       /* per ogni prodotto vado a prendere il valore */
        let cellsDiv = document.createElement('div');
        cellsDiv.classList.add('items');/* a cellsDiv cioè il  div  creato nella riga prima aggiungiamo la classe (ClassList) items */ 
        if(value.offer === false){
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="cartAdd(${value.id})">Add to cart </button>
            <button onclick="apriModal(${value.id})" class="openModal">Product details</button>`;
            productCellsDiv.appendChild(cellsDiv); /* cellsDiv viene inserito e quindi visualizzato come figlio (appendChild) all'interno di productCellsDiv*/
        }else{
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="cartAdd(${value.id})">Add to cart</button>
            <button onclick="apriModal(${value.id})" class="openModal">Product details</button>
            <img id="scontoIcon" src="sconto5652111.png"/ width=50 heigth=50>`;
            productCellsDiv.appendChild(cellsDiv);   
        }
    });
};

//Creazione PopUp- per ogni elemento in html creo una variabile e  vado a pescare da html con il metodo document.querySelector
//nella funzione test ho inseriito il bottone con onlick a nome apriModal 
  
const productPopUp = document.querySelector('.productPopUp');
const chiudiModal = document.querySelector('.chiudiModal');
const modalPopUp = document.querySelector('.popup');

// con la funzione apriModal vado ad aprire il PopUp
// alla funzione do il parametro id 


function apriModal(id) { // dichiaro il parametro id perchè lodichiaro anche nella funzione infoModa,dato che senza parametro id non saprebbe quale prodotto andare a considerare,prednere
   productPopUp.classList.add('show'); //creo un funzione dentro la quale usando il metodo classList.add,si aggiunge show alla const productpopUp 
   
   infoModal(id); // facciamo call back di una funzione 
};


// con la funzione  infoModal(id) inserisco nel modal tutti i dati del prodotto scelto
function infoModal(id){
    let newList = document.createElement('li');
    newList.className='listaPopUp'// con il metodo className do una classe alla variabile newList una classe che userò nel css
    modalPopUp.innerHTML = '';
    products.forEach((value) => {
    if(value.id === id) {
            newList.innerHTML = `
            <img src="${value.image}"/width=30% >
            <div id="productName">${value.name}</div>
            <div> cod:${value.id}</div>
            <div>${value.details}</div>
            <div>${value.price.toLocaleString()}€</div>
            <button class="chiudiModal" onclick="noPopUp()">Chiudi</button>
            `;
            modalPopUp.appendChild(newList);
    }});
    console.log('fatto')
};
// chiudo la finestra di modal
function noPopUp() {
    productPopUp.classList.remove('show');
};

//CARRELLO
//dopo aver creato tutti gli elementi nel html
// creo variabili e vado a pescarli da html con document.querySelector()
// creo una variabile e dichiaro un array vuoto dove andranno i prodotti del carrello
//creo una funzione per caricare i prodotti nel carrello,dopo creo una variabile che ha valore 0 che userò
// nella funzione e aggiungerò per ogni prodotto aggiunto il suo prezzo((p.es.)value.price),
//poi vado a creare una funzione,gli assegno un parametro e con il metodo forEach,prendo il value di ogni prodotto,
//creo una lista con document.createElement che deve essere uguale al id e se id é uguale ad id aggiungo il prodotto 
//ed il prezzo con il pretodo push,che verrà aggiunta all'array vuoto che avevo creaato prima 
// poi con template literals aggiungo tutti i valori necessari e con appendChild butto tutto dentro
//poi con la proprietà innerText aggiungiamo la quantità  alla variabile di array vuoto.length + il prezzo 
let listaCarello = document.querySelector('.listaCarello');
let total = document.querySelector('.total');
let quantità = document.querySelector('.quantità');

// creo una variabile e dichiaro un array vuoto dove andranno i prodotti del carrello
let CartProducts = [];


// creo una variabile a cui assegno il valore 0
let prezzoTotale = 0;
//creo una funzione per caricare i prodotti nel carrello
function cartAdd(id){
    products.forEach((value) => {
        let contNuovo = document.createElement('li');
        if(value['id'] === id) {
            prezzoTotale  += value.price;
            CartProducts.push(id) /* push è un metodo che si usa per aggiungere un'ulteriore elemento dentro  array  */
            contNuovo.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div> ${value.name} </div>
                <div>cod: ${value.id}</div>
                <div> ${value.price}€</div>
            `;
            listaCarello.appendChild(contNuovo);
        }

        /* prendiamo l'elemento span che ha classe quantià e con il metodo innerText 
        gli scriviamo dentro dinamicamente il numero dei prodotti che js corrisponde
         alla lunghezza di CartProducts che è l'array vuoto creato prima della funzione
          poi prendiamo l'elemnto div che ha come classe total e con il metodo innerText
           gli scriviamo dentro dinamicamente il prezzoTotale di tutti i prodotti*/
    quantità.innerText = CartProducts.length;  
    total.innerText = prezzoTotale + ' €';
    })
}

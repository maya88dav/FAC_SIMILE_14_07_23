let body = document.querySelector('body');
let apriCarello = document.querySelector('.imageCart');
let chiudiCarello = document.querySelector('.chiudiCarello');

// creo la funzione per aprire il carrello cliccandoci sopra
apriCarello.addEventListener('click', ()=>{
    body.classList.add('active');
})

// creo la funzione per chiudere il carrello cliccando sopra "chiudi"
chiudiCarello.addEventListener('click', ()=> {
    body.classList.remove('active');
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
        offer: true,
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
dopo creo la variabile data e con il metodo  procut.filtr va a prendere la category e per ogni data va a prendere il valore 
*/
function test(category){
    console.log(category)
    productCellsDiv.innerHTML = '';
    let data = products.filter(product => product.name === category);
    data.forEach((value) => {
        let cellsDiv = document.createElement('div');
        cellsDiv.classList.add('items');
        if(value.offer === false){
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="cartAdd(${value.id})">Add to cart </button>
            <button onclick="apriModal(${value.id})" class="openModal">Product details</button>`;
            productCellsDiv.appendChild(cellsDiv);
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

// creo il PopUp,creo variabili e con document.querySelector vado a pescarli da HTML
  
const productPopUp = document.querySelector('.productPopUp');
const chiudiModal = document.querySelector('.chiudiModal');
const modalPopUp = document.querySelector('.popup');

// con la funzione apriModal vado ad aprire il PopUp


function apriModal(id) {
   productPopUp.classList.add('show');
   infoModal(id);
};


// con la funzione  infoModal(id) inserisco nel modal tutti i dati del prodotto scelto
function infoModal(id){
    let newList = document.createElement('li');
    newList.className='listaPopUp'
    modalPopUp.innerHTML = '';
    products.forEach((value) => {
    if(value.id === id) {
            newList.innerHTML = `
            <img src="${value.image}"/width=30% >
            <div id="productName">${value.name}</div>
            <div> cod:${value.id}</div>
            <div>${value.details}</div>
            <div>${value.price.toLocaleString()}€</div>
            <button class="chiudiModal" onclick="closingModal()">Chiudi</button>
            `;
            modalPopUp.appendChild(newList);
    }});
    console.log('fatto')
};
// chiudo la finestra di modal
function closingModal() {
    productPopUp.classList.remove('show');
};

//CARRELLO
// creo variabili e vado a pescarli da html
let listaCarello = document.querySelector('.listaCarello');
let total = document.querySelector('.total');
let quantità = document.querySelector('.quantità');

// creo una variabile e dichiaro un array vuoto dove andranno i prodotti del carrello
let CartProducts = [];


//creo una funzione per caricare i prodotti nel carrello
var prezzoTotale = 0; prezzoTotale

function cartAdd(id){
    let calcola = 0;
    products.forEach((value) => {
        let contNuovo = document.createElement('li');
        contNuovo.id = id;
        if(value['id'] === id) {
            prezzoTotale = prezzoTotale + value.price;
            CartProducts.push(id)
            contNuovo.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div> ${value.name} </div>
                <div>cod: ${value.id}</div>
                <div> ${value.price}€</div>
            `;
            listaCarello.appendChild(contNuovo);
        }
    quantità.innerText = CartProducts.length;
    total.innerText = prezzoTotale.toLocaleString() + ' €';
    })
}

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. 
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 



var oggetto = {
    'nome' : 'tommaso',
    'cognome' : 'venza',
    'eta' : 36,
};

oggetto['capelli'] = 'marroni';


for ( var key in oggetto ) {
    console.log(oggetto[key]);
}

var utenteNome = prompt('inserisci un nome');
var utenteCognome = prompt('inserisci un cognome');
var UtenteEta = parseInt(prompt('inserisci un numero'));


var arrayDiOggetti = [
    {
        'nome' : 'Tommaso',
        'cognome' : 'Venza',
        'eta' : 36,
    },

    {
        'nome' : 'Monica',
        'cognome' : 'Poggianti',
        'eta' : 24
    },

    {
        'nome' : 'Simone',
        'cognome' : 'Poli',
        'eta' : 36
    },

    {
         'nome' : 'Niccolò',
         'cognome' : 'Bacci',
         'eta' : 30,
    },

    {
        'nome' : 'Alessandro',
        'cognome' : 'Zanini',
        'eta' : 90,
    },

    {
        'nome' : utenteNome,
        'cognome' : utenteCognome,
        'eta' : UtenteEta,
    }  
];

arrayDiOggetti['nome'] = utenteNome;
arrayDiOggetti['cognome'] = utenteCognome;
arrayDiOggetti['eta'] = UtenteEta;


    for (var i = 0; i < arrayDiOggetti.length; i++) {
        // console.log(arrayDiOggetti[i]);

        var iterazione = arrayDiOggetti[i];

        console.log(iterazione['nome']);
        console.log(iterazione['cognome']);
        console.log(iterazione['eta']);
    }



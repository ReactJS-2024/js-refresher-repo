// ! OBJEKTI

const ad = {
    creator: 'Marko Bojkic',
    publishedAt: new Date(),
    subject: 'Audi A3 Sport',
    isPriceNegotiable: true,
    description: 'Perfectly conditioned Audi A3...',
    price: 20000,
    colors: ['black', 'white'],
    showMainData: function() {
        return `${this.subject} (${this.price} $)`
    }
};

console.log(ad.showMainData());

// * Dodeljivanje dodatnih property-a objekta

ad.additionalData = {
    previousOwner: 'Pera Peric'
};

console.log(ad.additionalData.previousOwner ? `Previous owner is ${ad.additionalData.previousOwner}` : `No previous owner.`);


// * Pristupanje property-ima objekta pomocu sintakse uglastih zagrada

console.log(`Price is negotiable: ${ad['isPriceNegotiable']}`);

// * Ovaj nacin pristupanja property-ima pogodan je kod dinamickog pristupanja property-ima

const props = Object.keys(ad); // keys metoda vraca niz property-a za objekat koji se prosledi kao parametar ovoj metodi

props.forEach((prop) => {
    // console.log(prop);
    console.log(`${prop}: ${ad[prop]}`); // dinamicki pristup property-ima objekta
});


// * Destructing of objects
 
const {description, colors} = ad;

console.log(description);

console.log(colors);



// ! NIZOVI

const ads = [
    {id: 1, subject: 'Audi A5'},
    {id: 2, subject: 'BMW X6'}
];

// * Push - metoda koja dodaje novi element na kraj niza

ads.push({
    id: 3,
    subject: 'Yamaha RX7'
});

console.log(ads.length);


// * Map - metoda koja prolazi kroz niz i transformise elemente vracajuci novi niz tih transformisanih elemenata

const adsSubjects = ads.map(ad => ad.subject);

console.log(adsSubjects);


// * Destructing of arrays

const colors1 = ['red', 'blue', 'green'];

const [firstC, secondC] = colors1;

console.log(firstC);

console.log(secondC);

console.log(colors1);


// ! SET - kolekcija unikatnih vrednosti. To znaci da se svaka vrednost moze pojaviti samo JEDNOM u setu.

const numbers = new Set([1,2,3]);

// Dodavanje elemenata u set 
numbers.add(4);

// Provera da li element postoji u set-u
console.log(numbers.has(9));

// Brisanje elementa iz set-a
numbers.delete(1);

// Prolazak kroz sve vrednosti
numbers.forEach(num => console.log(num));

// Prikaz velicine set-a
console.log(`Final size of numbers set is ${numbers.size}`);

console.log(numbers);


// * primer

const paginationSizes = ['5', '10', '15', '15', '15'];

const paginationSet = new Set(paginationSizes);

console.log(paginationSet);



// ! FUNKCIJE - re-usable kod koji obavlja neku funkcionalnost 

// * 1. function declaration (deklaracija funkcija)

function multiply(x,y) {
    return x*y;
}

console.log(multiply(5,10));

console.log(multiply(4,3));


// * 2. function expression (izrazavanje funkcija)

const divide = (x,y) => x/y; // one-liner funkcija (funkcija zapisana u jednoj liniji koda)

console.log(divide(8,4));

const upgradedDivide = () => {
    const a = Math.floor(Math.random() * 1000);
    const b = Math.ceil(Math.random() * 1000);
    return a/b;
}

console.log(upgradedDivide().toFixed(2));

// import { addingFunc, divideFunc } from "./calculationUtils";

// import myApiUrl from "./apiUtil";
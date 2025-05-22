// const name = 'Bill';
// const age = 23;
// const kids = ['Sally', 'Susan', 'Jennifer'];

// const name2 = 'Hillary';
// const age2 = 21;
// const kids2 = ['Johnny', 'Jimmy'];

// const bill = ['Bill', 23, ['Sally', 'Susan', 'Jennifer']];
//                 0      1              2

const bill = {
  name: 'Bill',
  age: 23,
  kids: ['Sally', 'Susan', 'Jennifer'],
  greet: () => {
    console.log('Howdy');
  },
  sayGoodbye: (name) => {
    console.log(`See ya later, ${name}`);
  }
}

const keyImLookingFor = 'kids';

bill.age = 26;
bill.location = 'Montana';

// bill.greet();

// bill.sayGoodbye('Jill');

// console.log(bill);


const product = {
  name: 'Crocs Unisex Adult Classic Clog',
  rating: 4.8,
  images: [],
  description: 'Best shoes ever!',
  price: 49.99,
  productDetails: {
    fabricType: '100% Synthetic',
    origin: 'imported',
    soleMaterial: 'Ethylene Vinyl Acetate',
    keywords: ['shoes', 'crocs', 'footwear']
  }
}

product.yearCreated = 2025;
product.name = 'Super Crocs';

// const keyToDelete = prompt('ENTER A KEY');
// delete product[keyToDelete];


for(const key in product.productDetails) {
  // console.log(key)
  // console.log(product[key]);
}





const students = [
  { 
    name: 'Kimmy', 
    age: 12 
  }, 
  { 
    name: 'Ralph', 
    age: 13 
  }, 
  { 
    name: 'Paul', 
    age: 10 
  }
];


for(let i = 0; i < students.length; i++) {
  const student = students[i];
  // console.log(student.name);
}


const favoriteCounts = {};
// bunnies: 3, ducks: 2, turtles: 1, cats: 2

// { bunnies: 1 }
// { bunnies: 2 }

const userFavoritesInput = prompt('Put your favorites (repeat based on how much you like it)', 'bunnies,bunnies,bunnies,ducks,ducks,turtles,cats,cats');
const favsArray = userFavoritesInput.split(',');
// console.log(favsArray);

// go through each item
// check if it already exists in the object
  // if it doesn't exist
    // add the key to the object with a count of 1
  // if it already exists
    // add one to the value
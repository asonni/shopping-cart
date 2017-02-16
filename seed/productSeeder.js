var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'World of Warcrft Video Game',
    description: 'Awesome Game!!!!',
    price: 20
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Call of Duty Video Game',
    description: 'Awesome Game!!!!',
    price: 30
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Minecrafts Video Game',
    description: 'Awesome Game!!!!',
    price: 40
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Dark Souls 3 Video Game',
    description: 'Awesome Game!!!!',
    price: 50
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic 1 Video Game',
    description: 'Awesome Game!!!!',
    price: 44
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic 2 Video Game',
    description: 'Awesome Game!!!!',
    price: 16
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic 4 Video Game',
    description: 'Awesome Game!!!!',
    price: 99.99
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic 5 Video Game',
    description: 'Awesome Game!!!!',
    price: 20
  })
];

var done = 0;
for (var i=0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
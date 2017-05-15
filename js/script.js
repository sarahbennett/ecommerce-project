var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
];

cart = [];

function addToCart(itemToAdd) {
  event.preventDefault();
  var itemToAdd = document.getElementById("addButton").name;
  alert("Congrats! The " + itemToAdd + " scarf has been added to your cart.");

  if (itemToAdd === products[0].name) {
    cart.push(products[0].name + ", " + products[0].price);
  } else if (itemToAdd === products[1].name) {
    cart.push(products[1].name + ", " + products[1].price);
  } else if (itemToAdd === products[2].name) {
    cart.push(products[2].name + ", " + products[2].price);
  } else if (itemToAdd === products[3].name) {
    cart.push(products[3].name + ", " + products[3].price);
  } else if (itemToAdd === products[4].name) {
    cart.push(products[4].name + ", " + products[4].price);
  } else if (itemToAdd === products[5].name) {
    cart.push(products[5].name + ", " + products[5].price);
  } else if (itemToAdd === products[6].name) {
    cart.push(products[6].name + ", " + products[6].price);
  } else if (itemToAdd === products[7].name) {
    cart.push(products[7].name + ", " + products[7].price);
  }
  console.log("Your cart now has " + cart.length + " amazing scarves in it!");
};

function removeFromCart(itemToRemove) {
  event.preventDefault();
  var itemToRemove = document.getElementById("removeButton").name;
  alert("You are removing the " + itemToRemove + " scarf from your cart.");

  if (itemToRemove === products[0].name) {
    cart.pop(products[0].name + ", " + products[0].price);
  } else if (itemToRemove === products[1].name) {
    cart.pop(products[1].name + ", " + products[1].price);
  } else if (itemToRemove === products[2].name) {
    cart.pop(products[2].name + ", " + products[2].price);
  } else if (itemToRemove === products[3].name) {
    cart.pop(products[3].name + ", " + products[3].price);
  } else if (itemToRemove === products[4].name) {
    cart.pop(products[4].name + ", " + products[4].price);
  } else if (itemToRemove === products[5].name) {
    cart.pop(products[5].name + ", " + products[5].price);
  } else if (itemToRemove === products[6].name) {
    cart.pop(products[6].name + ", " + products[6].price);
  } else if (itemToRemove === products[7].name) {
    cart.pop(products[7].name + ", " + products[7].price);
  }
  console.log("You have removed the " + itemToRemove + " from your cart. Now you have " + cart.length + " amazing scarves in your cart!");
};

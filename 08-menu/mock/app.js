menu = [
  {
    image: "images/item-1.jpeg",
    title: "Buttermilk Pancakes",
    price: 15.99,
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "breakfast"
  },
  {
    image: "images/item-2.jpeg",
    title: "Diner Double",
    price: 13.99,
    description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    type: "dinner"
  },
  {
    image: "images/item-3.jpeg",
    title: "Godzilla Milkshake",
    price: 6.99,
    description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    type: "shake"
  },
  {
    image: "images/item-4.jpeg",
    title: "Country Delight",
    price: 20.99,
    description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    type: "lunch"
  },
  {
    image: "images/item-5.jpeg",
    title: "Egg Attack",
    price: 22.99,
    description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    type: "dinner"
  },
  {
    image: "images/item-6.jpeg",
    title: "Oreo Dream",
    price: 18.99,
    description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    type: "shake"
  },
  {
    image: "images/item-7.jpeg",
    title: "Bacon Overflow",
    price: 8.99,
    description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    type: "lunch"
  },
  {
    image: "images/item-8.jpeg",
    title: "American Classic",
    price: 12.99,
    description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    type: "dinner"
  },
  {
    image: "images/item-9.jpeg",
    title: "Quarantine Buddy",
    price: 16.99,
    description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "shake"
  },
  {
    image: "images/item-10.jpeg",
    title: "Bison Steak",
    price: 22.99,
    description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "dinner"
  },
]

const menuDisplay = document.getElementById('menu-display');

const allFilterBtn = document.getElementById('all-filter-btn');
const breakfastFilterBtn = document.getElementById('breakfast-filter-btn');
const lunchFilterBtn = document.getElementById('lunch-filter-btn');
const shakeFilterBtn = document.getElementById('shakes-filter-btn');
const dinnerFilterBtn = document.getElementById('dinner-filter-btn');

allFilterBtn.addEventListener('click', () => loadAll());
breakfastFilterBtn.addEventListener('click', () => loadFiltered('breakfast'));
lunchFilterBtn.addEventListener('click', () => loadFiltered('lunch'));
shakeFilterBtn.addEventListener('click', () => loadFiltered('shake'));
dinnerFilterBtn.addEventListener('click', () => loadFiltered('dinner'));

window.addEventListener('DOMContentLoaded', function() {
  loadAll();
})

function clearAll() {
  menuDisplay.innerHTML = "";
}

function loadAll() {
  clearAll();
  menu.forEach(function(item) {
    loadItem(item);
  })
}

function loadFiltered(filter) {
  clearAll();
  menu.forEach(function(item) {
    if (item.type == filter) {
      loadItem(item);
    }
  })
}

function loadItem(item) {
  const {image, title, price, description} = item;
    // console.log(title, price, description);
    menuDisplay.innerHTML += 
    `<div class="menu-item">
      <img src="${image}" alt="image of menu item">
      <div class="item-info">
        <div class="item-heading">
          <h4 class="item-title">${title}</h4>
          <p class="item-price">$${price}</p>
        </div>
        <p class="item-description">${description}</p>  
      </div>
    </div>`
}
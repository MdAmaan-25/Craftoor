const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });



/*
let carts = document.querySelectorAll('.addCart,.icons');

let products = [
  {
    name: 'QURAN HAMPER',
    tag: 'quran hamper',
    price: 500,
    inCart: 0
  },
  {
    name: 'ENGAGEMENT HAMPER',
    tag: 'engagement hamper',
    price: 700,
    inCart: 0
    },
    
    
    
    {
     name: 'CHOCOLATE HAMPER',
     tag: 'chocolatehamper',
     price: 300,
     inCart: 0
     },
    
    
    
    
    {
     name: 'ALPHABET HAMPER',
     tag: 'alphabethamper',
     price: 400,
     inCart: 0
     },
    
    
    
    
    {
     name: 'WEDDING HAMPER',
     tag: 'weddinghamper',
     price: 500,
     inCart: 0
     },
    
    
    
    
    
    {
     name: 'EID HAMPER',
     tag: 'eidhamper',
     price: 350,
     inCart: 0
     },
    
    
    
    
    
    {
     name: 'ANNIVERSARY HAMPER',
     tag: 'anniversaryhamper',
     price: 600,
     inCart: 0
     },
    
    
    
    {
     name: 'RAMADAN HAMPER',
     tag: 'ramadanhamper',
     price: 450,
     inCart: 0
     },
    
    
    
    
    
    {
     name: 'BIRTHDAY HAMPER',
     tag: 'birthdayhamper',
     price: 250,
     inCart: 0
     },
    
    
    
    
    
    {
     name: 'FERRERO HAMPER',
     tag: 'ferrerohamper',
     price: 800,
     inCart: 0
     },
    
    
    
    
    {
     name: 'BRACELET HAMPER',
     tag: 'bracelethamper',
     price: 600,
     inCart: 0
     },
     {

      name: 'FERRERO BOUQUET',
  
      tag: 'ferrerobouquet',
  
      price: 700,
      
  inCart: 0
    
  },
  
  
  {
  
      name: 'CHOCOLATE BOUQUET',
  
      tag: 'chocolatebouquet',
  
      price: 500,
      
  inCart: 0
    
  },
  
  {
  
      name: 'CRAFTED BOUQUET',
  
      tag: 'craftedbouquet',
  
      price: 750,
      
  inCart: 0
    
  },
  
  {
  
      name: 'GYPSOPHILA BOUQUET',
  
      tag: 'gypsophilabouquet',
  
      price: 650,
      
  inCart: 0
    
  },
  
  
  {
  
      name: 'FLOWER BOUQUET',
  
      tag: 'flowerbouquet',
  
      price: 750,
      
  inCart: 0
    
  },
  
  {
  
      name: 'MINIMAL BABY BOUQUET',
  
      tag: 'minimalbabybouquet',
  
      price: 850,
      
  inCart: 0
    
  },
  
  
  
  {
  
      name: 'GALAXY BOUQUET',
  
      tag: 'galaxybouquet',
  
      price: 700,
      
  inCart: 0
    
  },
  {

    name: 'BIRTHDAY ALBUM',

    tag: 'birthdayalbum',

    price: 1200,
    
inCart: 0
  
},



{

    name: 'BABY ALBUM',

    tag: 'babyalbum',

    price: 600,
    
inCart: 0
  
},

{

    name: 'WEDDING ALBUM',

    tag: 'weddingalbum',

    price: 950,
    
inCart: 0
  
},


{

    name: 'MEMORY ALBUM',

    tag: 'memoryalbum',

    price: 840,
    
inCart: 0
  
},

{

    name: 'DAD SPECIAL ALBUM',

    tag: 'dadspecialalbum',

    price: 650,
    
inCart: 0
  
},


{

    name: 'MOM SPECIAL ALBUM',

    tag: 'momspecialalbum',

    price: 700,
    
inCart: 0
  
},


{

    name: 'ANNIVERSARY ALBUM',

    tag: 'anniversaryalbum',

    price: 950,
    
inCart: 0
  
},

{

    name: 'COUPLE ALBUM',

    tag: 'couplealbum',

    price: 900,
    
inCart: 0
  
},


{

    name: 'FAMILY ALBUM',

    tag: 'familyalbum',

    price: 700,
    
inCart: 0
  
},
{

  name: 'BIRTHDAY CARD',

  tag: 'birthdaycard',

  price: 600,
  
inCart: 0

},

{

  name: 'BEST FRIEND CARD',

  tag: 'bestfriendcard',

  price: 600,
  
inCart: 0

},

{

  name: 'BUTTERFLY CARD',

  tag: 'butterflycard',

  price: 600,
  
inCart: 0

},


{

  name: 'DATE CARD',

  tag: 'datecard',

  price: 500,
  
inCart: 0

},

{

  name: 'FOR HER CARD',

  tag: 'forhercard',

  price: 450,
  
inCart: 0

},


{

  name: 'FOR HIM CARD',

  tag: 'forhimcard',

  price: 600,
  
inCart: 0

},


{

  name: 'GREETING CARD',

  tag: 'greetingcard',

  price: 500,
  
inCart: 0

},

{

  name: 'MAZE CARD',

  tag: 'mazecard',

  price: 550,
  
inCart: 0

},

{

  name: 'TRIFOLD CARD',

  tag: 'trifoldcard',

  price: 600,
  
inCart: 0

},

{

  name: 'INVITATION CARD',

  tag: 'invitationcard',

  price: 600,
  
inCart: 0

},
{

  name: 'CUSTOM CARD',

  tag: 'invitationcard',

  price: 800,
  
inCart: 0
},
{
   name: 'FERRERO BOX',
   tag: 'ferrerobox',
   price: 640,
   inCart: 0
   },
  
  
  {
   name: 'BIRTHDAY BOX',
   tag: 'birthdaybox',
   price: 700,
   inCart: 0
   },
  
  
  {
   name: 'HEART BOX',
   tag: 'heartbox',
   price: 500,
   inCart: 0
   },
  
  
  
  {
   name: 'TRUNK BOX',
   tag: 'trunkbox',
   price: 800,
   inCart: 0
   },
  
  
  {
   name: 'INFINITY BOX',
   tag: 'infinitybox',
   price: 850,
   inCart: 0
   },
  
  
  
  {
   name: 'CAKE BOX',
   tag: 'cakebox',
   price: 600,
   inCart: 0
   },
  
  
  
  {
   name: 'CHOCOLATE BOX',
   tag: 'chocolatebox',
   price: 400,
   inCart: 0
   },
  
  
  
  
  {
   name: 'COUPLE BOX',
   tag: 'couplebox',
   price: 900,
   inCart: 0
   },
  
  
  
  
  {
   name: 'EID BOX',
   tag: 'eidbox',
   price: 700,
   inCart: 0
   },
  
  
  
  {
   name: 'RAMADAN BOX',
   tag: 'ramadanbox',
   price: 800,
   inCart: 0
   },
  
  
  
  {
   name: 'WEDDING BOX',
   tag: 'weddingbox',
   price: 1000,
   inCart: 0
   }, 
  
  {
   name: 'EXPLOSION BOX',
   tag: 'explosionbox',
   price: 1500,
   inCart: 0
   },
   {
     name: 'FOOD HAMPER BOX',
     tag: 'foodhamperbox',
     price: 2000,
     inCart: 0
     },
    
    
    {
     name: 'FOR HER',
     tag: 'for her',
     price: 950,
     inCart: 0
     },
    
    
    
    {
     name: 'FOR HIM',
     tag: 'forhim',
     price: 900,
     inCart: 0
     },
   {
    name: 'BIRTHDAY ENVELOPE',
    tag: 'birthdayenvelope',
    price: 100,
    inCart: 0
  },

{
    name: 'CUSTOM ENVELOPE',
    tag: 'customenvelope',
    price: 200,
    inCart: 0
  },

{
    name: 'ENVELOPE BOX',
    tag: 'envelopebox',
    price: 300,
    inCart: 0
  },

{
    name: 'WAX SEAL ENVELOPE',
    tag: 'waxsealenvelope',
    price: 400,
    inCart: 0
  },


{
    name: 'MARBLE ENVELOPE',
    tag: 'marbleenvelope',
    price: 300,
    inCart: 0
  },

{
    name: 'CUSTOM NAME ENVELOPE',
    tag: 'customnameenvelope',
    price: 300,
    inCart: 0
  },
  

]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click',() => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.nav-item span').textContent = productNumbers;
  }
}

function cartNumbers(product){
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if(productNumbers) {
  localStorage.setItem('cartNumbers',productNumbers +1);
  document.querySelector('.nav-item span').textContent= productNumbers +1;
}else{
  localStorage.setItem('cartNumbers',1);
  document.querySelector('.nav-item span').textContent=1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {

    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify
  (cartItems));
}


function totalCost(product) {
  let cartCost = localStorage.getItem('totalcost');

  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalcost", cartCost + product.price);
  }else {
    localStorage.setItem("totalcost", product.price);
  }
}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");

  if(cartItems && productContainer){
    productContainer.innerHTML = ' ';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class='product'>
      <ion-icon name="close-circle"></ion-icon>
      <img src="./images/${item.tag}.jpg".>
      <span>${item.name}</span>
      </div>
      <div class="price">${item.price}</div>


      `
    })
  }
}

onLoadCartNumbers();
displayCart();

*/

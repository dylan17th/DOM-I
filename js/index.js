const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//Start of my code

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//creating two new variables for the nav bar 
const navBar7 = document.createElement('a');
const navBar8 = document.createElement('a');

//declearing the nav element
const navElement = document.querySelector('nav');

//creating a varible for the header element
const headerElement = document.querySelector('header');

//changing the backgroundcolor/padding/margin/borderRadiusof the header variable
headerElement.style.backgroundColor = 'seagreen';
headerElement.style.padding = '1rem 1rem 3rem 1rem';
headerElement.style.margin = '1rem';
headerElement.style.borderRadius = '10px';

//appending the two children into the nav element
navElement.appendChild(navBar7);
navElement.prepend(navBar8);

// navigation bar variables
const navBar1 = document.querySelector('a');
const navBar2 = document.querySelector('a:nth-child(2)');
const navBar3 = document.querySelector('a:nth-child(3)');
const navBar4 = document.querySelector('a:nth-child(4)');
const navBar5 = document.querySelector('a:nth-child(5)');
const navBar6 = document.querySelector('a:nth-child(6)');

//assigning content to the nav bar
navBar1.textContent = siteContent.nav["nav-item-1"];
navBar2.textContent = siteContent.nav["nav-item-2"];
navBar3.textContent = siteContent.nav["nav-item-3"];
navBar4.textContent = siteContent.nav["nav-item-4"];
navBar5.textContent = siteContent.nav["nav-item-5"];
navBar6.textContent = siteContent.nav["nav-item-6"];

//two varibales content assigned to navigation bar
navBar7.textContent = "Blog";
navBar8.textContent = "Meet Team";

//section cta h1 variable 
const headingTop = document.querySelector('h1');

//assign h1 variable text content
headingTop.textContent = siteContent.cta.h1;

//need to assign a line break in h1 variable


//created a button variable
const button = document.querySelector('button');

//adding background color/border/radius to the button
button.style.backgroundColor = 'seagreen';
button.style.border = '2px solid black';
button.style.borderRadius = '10px';

//assigned the button text content
button.textContent= siteContent.cta.button;

//creating 2 labels for the name and email buttons 
const nameLabel = document.createElement('label');
const emailLabel = document.createElement('label');

//assign label elements contents
nameLabel.textContent ='Full Name';
emailLabel.textContent = 'E-mail';

//styling for the label
emailLabel.style.color = "seagreen";
nameLabel.style.color = "seagreen";

//creating 2 input elements 
const nameInput = document.createElement('input');
const emailInput = document.createElement('input');

//Assigning email input and name input attributes type/name/id/placeholder
nameInput.type = 'text';
nameInput.placeholder = 'Johnny Appleseed';
nameInput.id = 'name';
nameInput.name = 'name';
emailInput.type = 'text';
emailInput.placeholder= 'example@eample.com'
emailInput.id = 'email';
emailInput.name = 'email';

//making the box wider
nameInput.style.width = '15rem';
nameInput.style.height = '2rem';
emailInput.style.width = '23rem';
emailInput.style.height = '2rem';

//appending the inputs to the corresponding labels
nameLabel.appendChild(nameInput);
emailLabel.appendChild(emailInput);

//creating a variable for cta so i can append the labels onto the screen after a click event
const ctaDiv  = document.querySelector('.cta');

//creating div to append
const divForSign = document.createElement('div');

//creating the add form function
function addForms(){
ctaDiv.appendChild(divForSign);
divForSign.appendChild(nameLabel);
divForSign.appendChild(emailLabel);
ctaDiv.style.justifyContent = "space-around";
ctaImage.style.width ='40%';
ctaDiv.style.flexWrap="wrap";
divForSign.style.display = 'flex';
divForSign.style.justifyContent = 'space-between';
divForSign.style.marginTop = '2rem';
divForSign.style.marginBottom = '-3rem';
divForSign.style.padding = '2rem';
emailLabel.style.display ='block';
nameLabel.style.display ='block';
emailLabel.style.fontSize ='1.5rem';
nameLabel.style.fontSize ='1.5rem';
}

//creating a event listener for the button on click
button.addEventListener('click', addForms);

///section cta image variable
const ctaImage = document.querySelector('#cta-img');

//changed the circle image source 
ctaImage.src = siteContent.cta["img-src"];

//h4 headings variable === node list
const headingH4 = document.querySelectorAll('h4');

//declearing variables for each h4 from the node list 
const headingFeatures = headingH4[0];
const headingAbout = headingH4[1];
const headingServices= headingH4[2];
const headingProduct = headingH4[3];
const headingVision = headingH4[4];
const headingContact = headingH4[5];

//h4 assigning content

//top-content heading 4 
headingFeatures.textContent = siteContent["main-content"]["features-h4"];
headingAbout.textContent = siteContent["main-content"]["about-h4"];

//bottom-content heading 4
headingServices.textContent = siteContent["main-content"]["services-h4"];
headingProduct.textContent = siteContent["main-content"]["product-h4"];
headingVision.textContent = siteContent["main-content"]["vision-h4"];

//contact heading 4
headingContact.textContent = siteContent.contact["contact-h4"];

//creating a variable for all paragraph tags
const allParaTags = document.querySelectorAll('p');

//declearing variables for each paragrpah

//top content paragraph variables
const paragraphFeatures = allParaTags[0];
const paragraphAbout= allParaTags[1];

//bottom content paragraphs variables
const paragraphServices = allParaTags[2];
const paragraphProduct = allParaTags[3];
const paragraphVision = allParaTags[4];

//contact paragrpahs variables
const paragraphAddress = allParaTags[5];
const paragraphPhone = allParaTags[6];
const paragraphEmail = allParaTags[7];

//footer paragraph variables
let paragraphCopyright = allParaTags[8];

//assign content to the paragraph tags

//top-content paragrpahs assigning content
paragraphFeatures.textContent = siteContent["main-content"]["features-content"];
paragraphAbout.textContent = siteContent["main-content"]["about-content"];

//Bottom-content paragrpahs assigning content
paragraphServices.textContent = siteContent["main-content"]["services-content"];
paragraphProduct.textContent = siteContent["main-content"]["product-content"];
paragraphVision.textContent = siteContent["main-content"]["vision-content"];

//Contact paragrpahs assigning content
paragraphAddress.textContent = siteContent.contact.address;
paragraphPhone.textContent = siteContent.contact.phone;
paragraphEmail.textContent = siteContent.contact.email;

//Footer paragrpahs assigning content
paragraphCopyright.textContent = siteContent.footer.copyright;

//creating a varibale for the middle image
const middleImg = document.querySelector('#middle-img');

//assign the source of the photo 

middleImg.src= siteContent["main-content"]["middle-img-src"];











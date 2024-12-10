const body = document.querySelector('.body');
const about = document.querySelector('.about-body');
const contact = document.querySelector('.contact');
const service = document.querySelector('.service');
const portfolio = document.querySelector('.portfolio');
const support = document.querySelector('.support');

function resetStyles() {
  about.style.display = 'none';
  contact.style.display = 'none';
  support.style.display = 'none';
  portfolio.style.display = 'none';
  service.style.display = 'none';
  body.style.display = 'none';
}



document.querySelector('#home')?.addEventListener('click', () => {
    resetStyles();
    body.style.display ='flex';
   
  });
  
  


document.querySelector('#about')?.addEventListener('click', () => {
    resetStyles();
   
      about.style.display = 'flex'; 

  
  });

  

document.querySelector('#contact')?.addEventListener('click', () => {
    resetStyles();
   
      contact.style.display = 'flex'; 

  
  });


  

document.querySelector('#service')?.addEventListener('click', () => {
    resetStyles();
   
      service.style.display = 'flex'; 

  });

  

document.querySelector('#portfolio')?.addEventListener('click', () => {
    resetStyles();
   
      portfolio.style.display = 'flex'; 

  
  });


  

document.querySelector('#support')?.addEventListener('click', () => {
    resetStyles();
   
      support.style.display = 'flex'; 

  
  });

  function opacity() {
    body.style.opacity = '0.5';
    about.style.opacity= '0.5';
    contact.style.opacity = '0.5';
    support.style.opacity = '0.5';
    portfolio.style.opacity = '0.5';
    service.style.opacity = '0.5';
  }

  
function opacity2() {
  body.style.opacity = '1';
  about.style.opacity= '1';
  contact.style.opacity = '1';
  support.style.opacity = '1';
  portfolio.style.opacity = '1';
  service.style.opacity = '1';
}

let hamburger = document.querySelector('.fa-bars'); // Select the first element with class 'fa-bars'
let navbar = document.querySelector('.nav2');
let list = document.querySelector('.fa-list');



hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navbar.style.opacity='1';
  list.style.display ='block'
  hamburger.style.display ='none'
  opacity();
  
});


list.addEventListener('click', () => {
  list.style.display ='none';
  hamburger.style.display ='block';
  
});


window.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove('active');
    opacity2();
    list.style.display ='none';
  hamburger.style.display ='block';
    
  }
});



// Remove the active class on scroll
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  list.style.display ='none';
  hamburger.style.display ='block';
  navbar.classList.remove('disabled');
  opacity2();
});

// Function to switch stylesheets based on screen width
function updateStylesheet() {
  const link = document.getElementById('stylesheet');
  
  // Check if link element exists
  if (!link) {
      console.error('Stylesheet link not found!');
      return;
  }

  if (window.innerWidth <= 768) {
      link.href = 'mobile.css'; // Switch to mobile styles
  } else {
      link.href = 'test.css'; // Switch to default styles
  }
}

// Update styles on load
updateStylesheet();

// Update styles whenever the window is resized
window.addEventListener('resize', updateStylesheet);





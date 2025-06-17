import './style.css'

// contenedor raiz 
const app = document.querySelector('#app');

// variable para el tema
let isWinterTheme = false;

// Elementos (se crearán dinámicamente)
let mainTitle, themeBtn;

// Función para crear el header
function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    
    // Título principal
    mainTitle = document.createElement('h1');
    mainTitle.id = 'main-title';
    mainTitle.textContent = 'Los Videojuegos de los Siete Reinos';
    
    // Subtítulo
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Forja tu destino en las tierras de Westeros';

    // Botón de tema
    themeBtn = document.createElement('button');
    themeBtn.id = 'theme-btn';
    themeBtn.className = 'theme-button';
    themeBtn.textContent = '🔥 Cambiar Tema';

    // Añadir evento de clic para alternar tema
    themeBtn.addEventListener('click', toggleTheme);

    // Montar elementos en el header
    header.appendChild(mainTitle);
    header.appendChild(subtitle);
    header.appendChild(themeBtn);
    return header;
}

// Función para alternar tema
function toggleTheme() {
    isWinterTheme = !isWinterTheme;
    
    if (isWinterTheme) {
        document.body.classList.add('winter-theme');
        themeBtn.textContent = '🔥 Tema de Fuego';
        setTimeout(() => {
            mainTitle.textContent = "El Invierno llega a los Videojuegos";
        }, 200);
    } else {
        document.body.classList.remove('winter-theme');
        themeBtn.textContent = '❄️ Tema de Hielo';
        setTimeout(() => {
            mainTitle.textContent = "Los Videojuegos de los Siete Reinos";
        }, 200);
    }
    
    themeBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        themeBtn.style.transform = 'scale(1)';
    }, 200);
}

//Funcion para crear una barra de navegación
function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  const logo = document.createElement('div');
  logo.className = 'nav-logo';
  logo.textContent = 'GoT Games';

  const navLinks = document.createElement('ul');
  navLinks.className = 'nav-links';
  const links = ['Inicio', 'Juegos', 'Noticias', 'Contacto'];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = link;
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  nav.appendChild(logo);
  nav.appendChild(navLinks);
  return nav;
}

//Crear un carrusel de imágenes
function createImageCarousel() {
  const carouselSection = document.createElement('section');
  carouselSection.className = 'carousel-section';

  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  // Lista de imágenes (puedes usar cualquier URL)
  const imageUrls = [
    'https://res.cloudinary.com/dqstycwjr/image/upload/v1750132231/Una-guida-per-principianti-a-Game-of-Thrones-Kingsroad_j1srim.png',
    'https://res.cloudinary.com/dqstycwjr/image/upload/v1750132230/game-of-thrones-kingsroad-rpg-kostenlos-gameplay-got-steam-reviews-paywall-1_w37zni.png',
    'https://res.cloudinary.com/dqstycwjr/image/upload/v1750132229/capsule_616x353_wb2fkv.jpg',
  ];

  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Juego de Game of Thrones';
    img.className = 'carousel-image';
    carousel.appendChild(img);
  });

  carouselSection.appendChild(carousel);
  return carouselSection;
}

function startCarousel() {
  const images = document.querySelectorAll('.carousel-image');
  let current = 0;

  images[current].classList.add('active');

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000); // Cambia de imagen cada 3 segundos
}




    // Crear y montar componentes
    const header = createHeader();
    const navbar = createNavbar();
    const carousel = createImageCarousel();
    
    // Montar en el DOM
    app.appendChild(header);
    app.appendChild(navbar);
    app.appendChild(carousel);

    startCarousel(); // ⏱ Inicia el carrusel

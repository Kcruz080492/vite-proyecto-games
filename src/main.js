import './style.css'

// contenedor raiz 
const app = document.querySelector('#app');

//variable para el tema
let isWinterTheme = false;

//lements (se crearán dinámicamente)
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
    // Crear y montar componentes
    const header = createHeader();
    
    // Montar en el DOM
    app.appendChild(header);

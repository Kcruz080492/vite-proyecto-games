import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// Referencia al contenedor raíz
const app = document.querySelector('#app')

// Crear elementos principales
const header = document.createElement('header')
const nav = document.createElement('nav')
const main = document.createElement('main')
const footer = document.createElement('footer')

// Encabezado
const titulo = document.createElement('h1')
const imagen = document.createElement('img')
imagen.src = 'https://sgimage.netmarble.com/images/netmarble/got/20241014/ockv1728906752798.png'
titulo.textContent = 'Explora los videojuegos de Game of Thrones'
header.appendChild(titulo)
header.appendChild(imagen)

// Barra de navegación
nav.classList.add('navbar')

const logo = document.createElement('div')
logo.classList.add('logo')
logo.textContent = 'GoT Games'

const navLinks = document.createElement('ul')
navLinks.classList.add('nav-links')

const secciones = ['Inicio', 'Juegos', 'Noticias', 'Contacto']
secciones.forEach(seccion => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'
  a.textContent = seccion
  li.appendChild(a)
  navLinks.appendChild(li)
})

nav.appendChild(logo)
nav.appendChild(navLinks)
app.appendChild(nav)


// Sección de videojuegos
const juegos = [
  {
    nombre: 'Game of Thrones: Conquest',
    descripcion: 'Conquista territorios y haz alianzas en Poniente.',
    imagen: 'https://via.placeholder.com/300x150?text=Conquest'
  },
  {
    nombre: 'Winter is Coming',
    descripcion: 'Juego de estrategia ambientado en la muerte de Ned Stark.',
    imagen: 'https://via.placeholder.com/300x150?text=Winter+is+Coming'
  },
  {
    nombre: 'Reigns: Game of Thrones',
    descripcion: 'Decisiones que definen el destino de los reinos.',
    imagen: 'https://via.placeholder.com/300x150?text=Reigns+GoT'
  }
]

juegos.forEach(juego => {
  const tarjeta = document.createElement('article')
  tarjeta.classList.add('videojuego')

  const nombre = document.createElement('h2')
  nombre.textContent = juego.nombre

  const imagen = document.createElement('img')
  imagen.src = juego.imagen
  imagen.alt = juego.nombre

  const desc = document.createElement('p')
  desc.textContent = juego.descripcion

  tarjeta.appendChild(nombre)
  tarjeta.appendChild(imagen)
  tarjeta.appendChild(desc)

  main.appendChild(tarjeta)
})

// Botón para cambiar color de fondo
const boton = document.createElement('button')
boton.textContent = 'Cambiar fondo'
boton.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === '#1e1e1e' ? '#0a0a0a' : '#1e1e1e'
})
main.appendChild(boton)

// Pie de página
const mensajeFooter = document.createElement('p')
mensajeFooter.textContent = 'Creado por fans de Westeros © 2025'
footer.appendChild(mensajeFooter)

// Inyectar todo en #app
app.appendChild(header)
app.appendChild(main)
app.appendChild(footer)

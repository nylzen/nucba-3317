import ScrollReveal from "scrollreveal";
const discoverSection = document.getElementById('discover')
const infoSection = document.getElementById('info')
const productsSection = document.getElementById('products')
const heroSection = document.getElementById('hero')

const revealSection = (section) => {
    ScrollReveal().reveal(section, {
        delay: 200, // Lo que tarda en iniciar el efecto
        distance: '100px', // Distancia que recorre el efecto
        duration: 2000, // Duración del efecto
        origin: 'bottom', // Dirección del efecto
        reset: true,
        opacity: 0, // Opacidad inicial
        mobile: true, // Si se ve en móvil
    })
}

export const scrollEffectInit = () => {
    revealSection(discoverSection)
    revealSection(infoSection)
    revealSection(productsSection)
    revealSection(heroSection)
}
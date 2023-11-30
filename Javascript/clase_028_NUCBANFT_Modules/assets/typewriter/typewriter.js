import Typewriter from 'typewriter-effect/dist/core';
// const typewriterSpan = document.querySelector('.typewriter')
const typewriterSpan = document.querySelector('.tuki')

const typewriter = new Typewriter(typewriterSpan, {
    delay: 50,
    loop: true,
})

export const typewriterInit = () => {
    typewriter
        .pauseFor(1000)
        .typeString('Crypto')
        .pauseFor(1500)
        .deleteChars(6)
        .typeString('Tecnologia')
        .pauseFor(1500)
        .deleteChars(5)
        .typeString('Nucba')
        .pauseFor(1500)
        .start()
}
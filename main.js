const boton = document.getElementById('btnComp')
const texto = document.getElementById('txtComp')
const lock = document.getElementById('lock')
const hearts = document.getElementById('hearts')
const congr = document.getElementById('cong')
const vinculo = document.getElementById('vinc')

boton.addEventListener('click', Comprobar);

function Comprobar(){
    texto.value = texto.value.trim()
    if(texto.value == "Levitating" || texto.value == "levitating"){
        boton.disabled = true
        lock.style.display = "none"
        hearts.style.display = "block"
        setTimeout(() => {
            hearts.style.display = "none"
        }, 1000);
        setTimeout(() => {
            congr.className = "pfelicidades"
        }, 1000);
        setTimeout(() => {
            vinculo.style.display = "block"
        }, 1000);
    } else {
        window.alert("Clave incorrecta, sigue intentando.")
    }
}
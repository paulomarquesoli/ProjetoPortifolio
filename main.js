function ampliar(idImg) {
    document.querySelector(idImg).style.width = '100%'
}

var galeria = document.querySelectorAll('.img-galeria')

for (let contador = 0; contador < galeria.length; contador++) {
    
    const img = galeria[contador]
    const idImg = `#img${contador}`

    img.onclick = function () {
        ampliar(idImg)
    }
}

function scrollTimeline(amount) {
    document.getElementById('timeline').scrollBy({ left: amount, behavior: 'smooth' });
}


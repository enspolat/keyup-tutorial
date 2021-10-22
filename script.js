const input = document.getElementById('input')
const box = document.getElementById('box')
const text = document.getElementById('text')

// input.addEventListener('keyup', function() {
//     console.log(input.value)
//     box.style.background = input.value
//     text.innerHTML = input.value
// })

const degerYakala = function(e) {
    box.style.background = e.target.value
    text.innerHTML = input.value
    console.log(document.getElementById('input').value);

  }
  input.addEventListener('keyup', degerYakala);





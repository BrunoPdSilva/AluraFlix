const form = document.querySelector('.addForm');
const result = document.querySelector('#result')

let listFilms = []
    filmName = []

form.addEventListener('submit', e => {
  e.preventDefault()
  
  filmName.push(form.title.value)
  adicionaFilme()
})

function adicionaFilme() {
  if (listFilms.includes(form.url.value)){
    alert('Filme já adicionado')
  } else {

    result.innerHTML += `<div style="text-align: center;">
                            <div style="position: relative;" class="banner">
                              <p>${form.title.value}</p>
                              <img src="${form.url.value}" id="poster">
                              <i class="far fa-trash-alt delete"></i>
                            </div>
                         </div>`
    listFilms.push(form.url.value)
  }


  form.reset()
}

result.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})

/* listFilms.forEach((filme, index) => {
  console.log(listFilms.includes(filme))
  if (listFilms.includes(form.url.value)) {
    console.log('listFilms incluí esse filme')
    result.innerHTML += ""
  } else {
    console.log('Não Inclui. Entrei no if else')
    console.log(`url: ${filme}`)
    result.innerHTML += ` <div style="text-align: center; margin: 0; padding: 0;">
    <p>${form.title.value}</p>
    <img src="${form.url.value}" id="poster">
  </div>`
  } */
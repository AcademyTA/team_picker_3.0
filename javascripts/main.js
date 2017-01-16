const results = document.getElementById('results')
const form = document.getElementById('members')
const textarea = document.getElementById('names')

function shuffle(names) {
  let totalNames = names.length
  let temp, random

  while (totalNames) {
    random = Math.floor(Math.random() * totalNames--);
    temp = names[totalNames];
    names[totalNames] = names[random];
    names[random] = temp;
  }

  return names;
}

form.addEventListener('submit', function(event) {
  event.preventDefault()

  let names = shuffle(textarea.value.split(', '))

  let namesHTML = names.map(function(name, index) {
    return `
      <div class="col-md-2 card">
        <h1>${index + 1}</h1>
        <h2 class="hidden">${name}</h2>
      </div>
    `
  })

  results.innerHTML = namesHTML.join('')

  document.querySelectorAll('.card').forEach(function(name) {
    name.addEventListener('click', function(event) {
      let number = event.currentTarget.children[0]
      let person = event.currentTarget.children[1]

      number.style.display = 'none'
      person.className = ''
    })
  })
})

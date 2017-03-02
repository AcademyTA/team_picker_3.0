const results = document.getElementById('results')
const winners = document.getElementById('winners')
const form = document.getElementById('members')
const textarea = document.getElementById('names')
let partners

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

function renderCards() {
  let namesHTML = partners.map(function(name, index) {
    return `
      <div class="col-md-2 card" data-id="${index}">
        <h1>${index + 1}</h1>
        <h5 class="hidden">${name}</h5>
      </div>
    `
  })

  results.innerHTML = namesHTML.join('')

  addListenersToCards()
}

function addListenersToCards() {
  document.querySelectorAll('.card').forEach(function(name) {
    name.addEventListener('click', function(event) {
      let winner = event.currentTarget
      let number = winner.children[0]
      let person = winner.children[1]

      number.style.display = 'none'
      person.className = ''

      winner.style.backgroundColor = '#CB0D0F'
      winner.style.color = 'white'
      winners.appendChild(winner)
      partners.splice(winner.dataset['id'], 1)

      renderCards()
    })
  })
}

form.addEventListener('submit', function(event) {
  event.preventDefault()

  winners.innerHTML = ''
  partners = shuffle(textarea.value.split(', '))

  renderCards()
})

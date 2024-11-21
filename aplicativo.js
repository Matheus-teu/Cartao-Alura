function makeCard(category, question, answer) {
    let container = document.getElementById('container')
    let card = document.createElement('article')
    card.className = 'card'

    card.innerHTML = `
<div class="card__content">
<h3>${category}</h3>
<div class="card__content__question">
    <p>${question}</p>
</div>
<div class="card__content__answer">
    <p>${answer}</p>
</div>
</div>
`
    let answerIsVisible = false;

    function turnCard() {
        answerIsVisible = !answerIsVisible
        card.classList.toggle('active', answerIsVisible);
    }
    card.addEventListener('click', turnCard)

    container.appendChild(card);
}
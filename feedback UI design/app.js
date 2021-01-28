
const panels = document.querySelectorAll('.rating')
const sendbtn = document.querySelector('.btn')
const container = document.querySelector('.panel-container')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

sendbtn.forEach
    panl.addEventListener('click', () => {
    sendbtn.forEach(rating_el => rating_el.classList.add('.fa-heart'))
})

function addClasses() {
    panels.forEach(panel => {
        panel.classList.add('inactive')
    })

}

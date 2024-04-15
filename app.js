const audioEl = document.getElementById('audio').getElementsByTagName("audio")
const btnEl = document.getElementById('btns')

btnEl.onclick = (event) => {
    let index = event.target.dataset.key
    let type = event.target.dataset.type
    console.log(index)
}
var coffee = document.getElementsByClassName("fa-coffee");
var trash = document.getElementsByClassName("fa-trash");


var completed = document.querySelectorAll('.finish')
for(element of completed){
  element.addEventListener('click', crossOut)
  // console.log(element)
}


function crossOut(){
  console.log('hi')

  const name = this.parentNode.parentNode.querySelector('.nme').innerText
  const order = this.parentNode.parentNode.querySelector('.ord').innerText
  // const barista = this.parentNode.parentNode.querySelector('.pig').innerText
  const isCompleted = this.parentNode.parentNode.querySelector('.hide').innerText
  const objectId = this.parentElement.id


  console.log('fluff')
  fetch('messages', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'order': order,
      'isCompleted': isCompleted,
      '_id': objectId

    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })


}

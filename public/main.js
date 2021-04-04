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

// function crossOut(){
//   console.log('hi')
//
//   const name = this.parentNode.parentNode.childNodes[1].innerText
//   const order = this.parentNode.parentNode.childNodes[3].innerText
//   // const size = this.parentNode.parentNode.childNodes[5].innerText
//   // const regular = this.parentNode.parentNode.childNodes[7].innerText
//   // const mocha = this.parentNode.parentNode.childNodes[9].innerText
//   // const caramel = this.parentNode.parentNode.childNodes[11].innerText
//   const isCompleted = this.parentNode.parentNode.querySelector('.hide').innerText
//   // const coffee = this.parentNode.parentNode.childNodes[17].innerText
//   // const trash = this.parentNode.parentNode.childNodes[19].innerText
//   const objectId = this.parentElement.id
//   console.log('fluff')
//   fetch('messages', {
//     method: 'put',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       'name': name,
//       'order': order,
//       // 'size': size,
//       // 'regular': regular,
//       // 'mocha': mocha,
//       // 'caramel': caramel,
//       'isCompleted': isCompleted,
//       '_id': objectId
//
//     })
//   })
//   .then(response => {
//     if (response.ok) return response.json()
//   })
//   .then(data => {
//     console.log(data)
//     window.location.reload(true)
//   })
//
//
// }

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const order = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'order': order
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });

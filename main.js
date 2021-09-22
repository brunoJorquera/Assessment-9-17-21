const fortuneBtn = document.getElementById('fortune-btn')
const fortuneContainer = document.getElementById('fortune-display')
const addFortuneForm = document.getElementById('add-fortune-form')
const phraseBtn = document.getElementById('phrase-btn')
const phraseContainer = document.getElementById('phrase-display')
const addPhraseForm = document.getElementById('phrase-form')
const deleteBtn = document.getElementById('delete-btn')

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

fortuneBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/fortune')
        .then(res => {
            fortuneContainer.innerHTML = ''
            const fortuneElement = document.createElement('li')
            console.log(fortuneElement)
            fortuneElement.textContent = res.data
            fortuneContainer.append(fortuneElement)
            console.log(res.data)
        })
        .catch(err => console.log(err))
})

addFortuneForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const addFortuneInput = document.getElementById('fortune-input')
    const {value} = addFortuneInput

    axios.post('http://localhost:4000/api/fortune', {value})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

})

phraseBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/phrase')
        .then(res => {
            phraseContainer.innerHTML = 'Available Phrases:'
            const phraseElement = document.createElement('p')
            phraseElement.textContent = res.data
            phraseContainer.append(phraseElement)
            console.log(res.data)
        })
        .catch(err => console.log(err))
})

addPhraseForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const addPhraseInput = document.getElementById('phrase-input')
    const {value} = addPhraseInput

    axios.post('http://localhost:4000/api/phrase', {value})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

})

deleteBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    axios.delete(`http://localhost:4000/api/phrase/:value`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
})


// // https://ed.devmountain.com/materials/skills/back-end/



// // const cardContainer = document.querySelector('#card-container')
// //       const form = document.querySelector('form')

// //       const baseURL = 'http://localhost:4000/api/cards'

// //       const cardsCallBack = ({ data: cards }) => displayCards(cards)
// //       const errCallBack = err => console.log(err)

// //       const getAllCards = () => axios.get(baseURL).then(cardsCallBack).catch(errCallBack)
// //       const createCard = body => axios.post(baseURL, body).then(cardsCallBack).catch(errCallBack)

//       document.getElementById("complimentButton").onclick = function () {
//         axios.get("http://localhost:4000/api/compliment/")
//             .then(function (response) {
//               const data = response.data;
//               alert(data);
//             });
//       };
//     //   document.getElementById("fortuneButton").onclick = function (){
//     //     axios.get("http://localhost:4000/api/fortune/")
//     //         .then(function (response){
//     //           const data = response.data;
//     //           alert(data);
//     //         });
//     //   };

//       const fortuneBtn = document.getElementById('fortuneBtn')
//       const fortuneDisplayContainer = document.getElementById('fortuneDisplay')

//       console.dir(fortuneDisplay)

//       fortuneBtn.addEventListener('click', () => {
//          axios.get('http://localhost:4000/api/fortune')
//             .then(res => {
//                 // Below clears the results and only shows one fortune at a time
//                 fortuneDisplayContainer.innerHTML = ''
//                 // Below creates a list within a container
//                 const fortuneElement = document.createElement('li')
//                 // console.log(fortuneElement) 
//                 fortuneElement.textContent = res.data
//                 fortuneDisplayContainer.append(fortuneElement)
//                 console.log(res.data)
//             })
//             .catch(err => console.log(err))
//       })

//       const addFortuneForm = document.getElementById('add-fortune-form')
      
//       addFortuneForm.addEventListener('submit', (e) => {
//           e.preventDefault()
//           const addFortuneInput = document.getElementById('fortune-input')

//           const {value} = addFortuneInput
          
          
//           axios.post('http://localhost:4000/api/fortune', {value})
//             .then(res => {
//                 console.log(res.data)
//             })
//             .catch(err => console.log(err))
//       })
      
//       const colorPicker = document.getElementById('color-picker')
//       const body = document.querySelector('body')

//       colorPicker.addEventListener('change', (e) => {
//           console.log(e.target.value)
//           const colorBody = {
//               color: e.target.value
//           }
//           axios.put(`http://localhost:4000/api/color`, colorBody)
//             .then(res => {
//                 body.style.background = res.data
//             })
//             .catch(err => console.log(err))
//       })

//       const setBackgroundToFave = () => {
//           axios.get('http://localhost:4000/api/color')
//             .then(res => {
//                 body.style.background = res.data
//             })
//             .catch(err => console.log(err))
//       }

//       setBackgroundToFave();

//       const numSelector = document.getElementById('num-selector')

//       numSelector.addEventListener('change', (e) => {
//           console.log(e.target.value)
//       })

//     //   document.getElementById("featureThree").onclick = function (){
//     //     axios.get("http://localhost:4000/api/advice/")
//     //         .then(function (response){
//     //           const data = response.data;
//     //           alert(data);
//     //         });
//     //   };
      
//     //   document.getElementById("rouletteBtn").onclick = function (){
//     //     axios.get("http://localhost:4000/api/roulette/")
//     //         .then(function (response){
//     //           const data = response.data;
//     //           alert(data);
//     //         });
//     //   };

//     //   function submitHandler(e){
//     //     e.preventDefault()

//     //     let phrase = document.querySelector('#simpleOne')

//     //     let bodyObj = {
//     //       phrase: phrase.value
//     //     }

//     //     createCard(bodyObj)

//     //     phrase.value = ''
//     //   }

//     //   function createRandomCard(card) {
//     //     const randomCard = document.createElement('div')
//     //     randomCard.classList.add('random-card')
//     //     randomCard.addEventListener('click', deletePhrase)
//     //     randomCard.innerHTML = `<h3>${card.phrase}</h3>
//     //     <button id="deletePls">delete</button>
//     //     `

//     //     cardContainer.appendChild(randomCard)
//     //   }

//     //   function deletePhrase (e){
//     //     e.target.remove();
//     //   }

//     //   function displayCards(arr) {
//     //     cardContainer.innerHTML = ''
//     //     for (let i = 0; i < arr.length; i++) {
//     //       createRandomCard(arr[i])
//     //     }
//     //   }

//     //   form.addEventListener('submit', submitHandler)
const express = require("express");
const cors = require("cors");
const cards = []

const app = express();

// let globalId = 1

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random complimentlet 
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req,res) => {
  const fortunes = ["A bright path awaits you in your future!",
  "Your zipper is down, might want to fix that.",
  "Remember to floss, you might need to, especially soon!",
  "Beds don't make themselves, seek organization in your life.",
  "Look both ways before crossing the street, it might save you!"
];

// console.log('I work')
let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex]

res.status(200).send(randomFortune)

});

app.get('/api/cards', (req,res) => {
  res.status(200).send(cards)
})
// app.delete('/api/cards/:id', (req,res) => {
//   const {phrase} = req.params
//   let index = cards.findIndex(elem => elem.phrase === +phrase)
//   cards.splice(index, 1)
//   res.status(200).send(cards)
// })
app.post('/api/cards', (req,res) => {
  const {phrase} = req.body
  let newCard = {
    phrase,
  }
  if(!phrase){
    return res.status(400).send('Missing field')
  } else{
    cards.push(newCard)
    return res.status(200).send(cards)
  }
})
// app.put('/api/cards/:id', (req,res) => {
//   const {id} = req.params
//   const {type} = req.body
//   let index = cards.findIndex(elem => elem.id === +id)
//   if(cards[index].cool === 10 && type === 'plus'){
//     res.status(400).send('is it really cooler than 10?')
//   } else if(cards[index].cool === 0 && type === 'minus'){
//     res.status(400).send('nothing is more lame than zero!')
//   } else if (type === 'plus'){
//     cards[index].cool++
//     res.status(200).send(cards)
//   } else if (type === 'minus'){
//     cards[index].cool--
//     res.status(200).send(cards)
//   } else {
//     res.status(400)
//   }
// })

app.listen(4000, () => console.log("Server running on 4000"));

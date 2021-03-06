const express = require("express");
const cors = require("cors");

const ctrl = require('./controllers/controller.js')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', ctrl.getFortune)
app.post('/api/fortune', ctrl.addFortune)

app.get('/api/phrase', ctrl.getPhrase)
app.post('/api/phrase', ctrl.addPhrase)
app.delete('/api/phrase/:value', ctrl.deletePhrase)

app.listen(4000, () => console.log("Server running on 4000"));


// const express = require("express");
// const cors = require("cors");
// // const cards = []
// const fortuneCtrl = require('./controllers/fortuneController.js')

// const app = express();

// // let globalId = 1

// app.use(cors());

// app.use(express.json()); // When we want to be able to accept JSON.

// app.get("/api/compliment", (req, res) => {
//   const compliments = ["Gee, you're a smart cookie!",
// 					 "Cool shirt!",
// 					 "Your Javascript skills are stellar.",
//   ];
//   // choose random complimentlet 
//   let randomIndex = Math.floor(Math.random() * compliments.length);
//   let randomCompliment = compliments[randomIndex];

//   res.status(200).send(randomCompliment);
  
// });

// app.get('/api/fortune', fortuneCtrl.getFortune)

// app.post('/api/fortune', fortuneCtrl.addFortune)

// app.get('/api/color', fortuneCtrl.getFavColor)
// app.put('/api/color', fortuneCtrl.changeColor)

// // app.get('/api/fortune', (req,res) => {
// //   const fortunes = ["A bright path awaits you in your future!",
// //   "Your zipper is down, might want to fix that.",
// //   "Remember to floss, you might need to, especially soon!",
// //   "Beds don't make themselves, seek organization in your life.",
// //   "Look both ways before crossing the street, it might save you!"
// // ];

// // // console.log('I work')
// // let randomIndex = Math.floor(Math.random() * fortunes.length);
// // let randomFortune = fortunes[randomIndex]

// // res.status(200).send(randomFortune)

// // });

// // app.get('/api/advice', (req,res) => {
// //   const advices = ["Code one thing at a time.",
// //   "Make a path for your goals and start.",
// //   "Start using a planner!",
// //   "When someone is seeking 'advice', ask them if they truly want advice or someone to talk to.",
// //   "Practice coding outside of class more often!"
// // ];

// // let randomIndex = Math.floor(Math.random() * advices.length);
// // let randomAdvice = advices[randomIndex]

// // res.status(200).send(randomAdvice)

// // });

// // app.get('/api/roulette', (req,res) => {
// //   const roulette = ["One","Two","Three","Four","Five"];

// // let randomIndex = Math.floor(Math.random() * roulette.length);
// // let randomNum = roulette[randomIndex]

// // res.status(200).send(randomNum)

// // });

// // app.get('/api/cards', (req,res) => {
// //   res.status(200).send(cards)
// // })
// // app.delete('/api/cards/:id', (req,res) => {
// //   const {phrase} = req.params
// //   let index = cards.findIndex(elem => elem.phrase === +phrase)
// //   cards.splice(index, 1)
// //   res.status(200).send(cards)
// // })
// // app.post('/api/cards', (req,res) => {
// //   const {phrase} = req.body
// //   let newCard = {
// //     phrase,
// //   }
// //   if(!phrase){
// //     return res.status(400).send('Missing field')
// //   } else{
// //     cards.push(newCard)
// //     return res.status(200).send(cards)
// //   }
// // })

// app.listen(4000, () => console.log("Server running on 4000"));

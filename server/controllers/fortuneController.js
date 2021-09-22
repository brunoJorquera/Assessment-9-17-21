const fortunes = [
    'Your career will be bountiful',
    'You will find the love of your life at Tacobell',
    "Don't order the chicken fried rice!",
    "You will learn CSS soon",
    "Don't drop that dun da dun"
  ]

  let favColor = '#fff'

module.exports = {
    getFortune: (req,res) =>{
        const randIndex = Math.floor(Math.random() * fortunes.length)
        let fortune = fortunes[randIndex]
        res.status(200).send(fortune)
    },
    addFortune: (req,res) => {
        console.log('is this workin?')
        console.log(req.body)
        const {value} = req.body
        fortunes.push(value)

        res.status(200).send(fortunes)
    },
    getFavColor: (req,res) => {
        res.status(200).send(favColor)
    },
    changeColor: (req,res) => {
        const {color} = req.body
        console.log(color)
        res.status(200).send(color)
    }
}
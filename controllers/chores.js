import { Chore } from '../models/chore.js'


function index (req, res) {
  res.send('this is the chores page')
  // Chore.find({})
  // .then (chores => {
  //   res.render('chores/index', {
  //     chores: chores,
  //     time: req.time
  //   })
  // })
  // .catch (error => {
  //   console.log(error)
  //   res.redirect('/')
  // })
}


export {
  index
}
import { Chore } from '../models/chore.js'


function index (req, res) {
  Chore.find({})
  .then (chores => {
    res.render('chores/index', {
      chores: chores,
      time: req.time
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect('/')
  })
}

function newChore (req, res) {
  res.render('chores/new')
}

function create (req, res) {
  console.log('this is a console log!!!!', req.body)
  Chore.create(req.body)
  .then(chore => {
    res.redirect('/chores')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/chores')
  })
}

function show(req, res) {
  console.log('this is the id of the chore', req.params.id)
  Chore.findById(req.params.id)
  .then(chore => {
    res.render('chores/show', {
      chore: chore
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/chores')
  })
}




export {
  index,
  newChore as new,
  create,
  show
}
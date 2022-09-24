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

function deleteChore (req, res) {
  console.log('I am deleting a chore!')
  Chore.findByIdAndDelete(req.params.id)
  .then(chore => {
    res.redirect('/chores')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/chores')
  })
}

function edit (req, res) {
  console.log('I am editing a chore!')
  Chore.findById(req.params.id)
  .then(foundChore => {
    res.render('chores/edit', {
      chore: foundChore
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/chores')
  })
}

function update (req, res) {
  req.body.done = !!req.body.done
  Chore.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(chore => {
    res.redirect(`/chores/${chore._id}`)
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
  show,
  deleteChore as delete,
  edit,
  update
}
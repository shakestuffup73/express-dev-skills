import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
    .then(skills => {
      res.render('skills/index', {
        skills: skills,
        time: req.time
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body)
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}

function show(req, res) {
  Skill.findById(req.params.id)
    .then(skill => {
      res.render('skills/show', {
        skill: skill
      })
    })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}

function edit(req, res) {
  Skill.findById(req.params.id)
    .then(foundSkill => {
      res.render('skills/edit', {
        skill: foundSkill // passing an object where the key is skill and the value is skill...1st skill is how will be referred to in the view - the 2nd skill and the .then (skill => ) need to match...skill: foundSkill just defines foundSkill as skill in the view page
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}

function update(req, res) {
  req.body.done = !!req.body.done
  Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(skill => {
      res.redirect(`/skills/${skill._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}


export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update,
}
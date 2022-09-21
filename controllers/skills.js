import { skills } from '../data/skills.js'

function index (req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

export {
  index
}
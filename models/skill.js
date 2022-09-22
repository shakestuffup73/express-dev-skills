import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema ({
  text: String,
  outdoors: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}
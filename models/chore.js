import mongoose from 'mongoose'

const Schema = mongoose.Schema

const choreSchema = new Schema ({
  text: String,
  done: Boolean,
})

const Chore = mongoose.model('Chore', choreSchema)

export {
  Chore
}
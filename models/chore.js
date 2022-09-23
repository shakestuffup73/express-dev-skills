import mongoose from 'mongoose'

const Schema = mongoose.Schema

const choreSchema = new Schema ({
  name: String,
  done: Boolean,
})

const Chore = mongoose.model('Chore', choreSchema)

export {
  Chore
}
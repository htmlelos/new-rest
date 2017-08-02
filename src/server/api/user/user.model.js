import bcrypt from 'bcrypt-nodejs'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

let SALT_WORK_FACTOR = 12

const UserSchema = new userSchema({
  username: {
    type: string,
    require: 'debe indicar el nombre de usuarios',
    index: true
  },
  email: {
    type: string
  },
  password: {
    type: string
  }
})

UserSchema.pre('save', function (next) {
  let user = this
  let now = new Date()
  // Se asigna la fecha actual al usuario
  if (!this.createdAt) {
    this.createdAt = now
  }
  // Solo encriptar el password si se ha modificado la contraseña o es un nuevo usuario
  if (process.env.NODE_ENV === 'test') {
    SALT_WORK_FACTOR = 1
  }
  // Genera una nueva salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (error, ))
})

export default mongoose.model('User', UserSchema)
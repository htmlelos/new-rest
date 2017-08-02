import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/db')

const database = mongoose.connection

export default database

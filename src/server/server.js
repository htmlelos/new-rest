import countries from './api/countries'
import listen from './server.listen'
import database from './services/database/mongoose'
import express from 'express'

const app = express()

// countries(app)

listen(app)
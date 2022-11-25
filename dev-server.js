import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./dist'))

app.listen(3000, () => {
    console.log('Listening on 3000')
})
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./dist'))


const events = [
    {
        title: "Event Item 1",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-10-26T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "Event Item 2",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-06-11T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "Event Item 3",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-08-12T22:32:45.369Z"),
        status: 'published'
    },
    {
        title: "Event Item 4",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-11-14T22:32:45.369Z"),
        status: 'published'
    },
]

const news = [
    {
        title: "News Item 1",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-10-26T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "News Item 2",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-06-11T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "News Item 3",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-08-12T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "News Item 4",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-11-14T22:32:45.369Z"),
        status: 'published'
    }
]

app.get('/events', (req, res) => {
    res.status(200).json(events)
})

app.get('/news', (req, res) => {
    res.status(200).json(news)
})



app.listen(3000, () => {
    console.log('Listening on 3000')
})
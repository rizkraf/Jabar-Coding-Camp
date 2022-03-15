// soal 1

var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

readBooks(10000, books[0], () => {
    readBooks(7000, books[1], () => {
        readBooks(5000, books[2], () => {
            readBooks(1000, books[3], () => {
            })
        })
    })
})
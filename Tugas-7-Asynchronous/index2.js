// soal 2

var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

readBooksPromise(10000, books[0])
    .then(() => readBooksPromise(7000, books[1]))

    .then(() => readBooksPromise(5000, books[2]))

    .then(() => readBooksPromise(1000, books[3]))

    .catch(() => { })

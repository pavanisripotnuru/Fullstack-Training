let movies = require("../data/movies.json")

const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')


function findAllMovies() {
    return new Promise((resolve,reject) => {
            resolve(movies);
    });
}


function findById(id) {
    return new Promise((resolve, reject) => {
        const movie = movies.find((m) => m.id === id)
        resolve(movie)
    })
}

function create(movie) {
    return new Promise((resolve, reject) => {
        const newMoive = {id: uuidv4(), ...movie}
        movies.push(newMoive)
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/movies.json', movies);
        }
        resolve(newMoive)
    })
}


function update(id, movie) {
    return new Promise((resolve, reject) => {
        const index = movies.findIndex((m) => m.id === id)
        movies[index] = {id, ...movie}
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/movies.json', movies);
        }
        resolve(movies[index])
    })
}


function remove(id) {
    return new Promise((resolve, reject) => {
        movies = movies.filter((m) => m.id !== id)
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/movies.json', movies);
        }
        resolve()
    })
}
module.exports = {
    findAllMovies,
    findById,
    create,
    update,
    remove
}
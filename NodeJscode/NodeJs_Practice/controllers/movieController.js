const Movies =  require("../models/movieModel")

const { getPostData } = require('../utils')

async function getAllMovies(req,res) {
    try {
    const movies = await Movies.findAllMovies();
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(movies))
    }catch(error) {
        console.log(error);
    }
}

async function getMovie(req, res, id) {
    try {
        const movie = await Movies.findById(id)

        if(!movie) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Movie Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(movie))
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a Movie
// @route   POST /api/movie
async function createMoive(req, res) {

    try {

        const body = await getPostData(req)

        const { name, Director, Cast } = JSON.parse(body)

        const movie = {
            name,
            Director,
            Cast
        }

        const newMovie = await Movies.create(movie)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newMovie))  

    } catch (error) {
        console.log(error)
    }
}
async function updateMoive(req, res, id) {
    try {
        const movie = await Movies.findById(id)

        if(!movie) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'movie Not Found' }))
        } else {
            const body = await getPostData(req)

            const { name, Director, Cast} = JSON.parse(body)

            const updatedMovie = {
                name: name || movie.name,
                Director: Director || movie.Director,
                Cast: Cast || movie.Cast
            }

            const updMoives = await Movies.update(id, updatedMovie)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updMoives)) 
        }
 

    } catch (error) {
        console.log(error)
    }
}

async function deleteMoive(req, res, id) {
    try {
        const movie = await Movies.findById(id)

        if(!movie) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Movie Not Found' }))
        } else {
            await Movies.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Movies ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllMovies,
    getMovie,
    createMoive,
    updateMoive,
    deleteMoive
}
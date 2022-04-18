const { getConnection } = require('./connection')
const getMovies = (request, response) => {
  getConnection.query('SELECT * FROM movies ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUMoveById = (request, response) => {
  const id = parseInt(request.params.id)

  getConnection.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createMovie = (request, response) => {
  const { id,name,rating,director,genre } = request.body

  getConnection.query('INSERT INTO movies (id,name,rating,director,genre) VALUES ($1,$2,$3,$4,$5)', [id,name,rating,director,genre], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`movie added with ID: ${id}`)
  })
}

const updateMovie = (request, response) => {
  const id = parseInt(request.params.id)
  console.log(id)
  const {name,rating,director,genre} = request.body

  getConnection.query(
    'UPDATE movies SET name = $1, rating = $2, director=$3, genre=$4 WHERE id = $5',
    [name,rating,director,genre,id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`movie modified with ID: ${id}`)
    }
  )
}

const deleteMovie = (request, response) => {
  const id = parseInt(request.params.id)

  getConnection.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`movie deleted with ID: ${id}`)
  })
}

module.exports = {
  getMovies,
  getUMoveById,
  createMovie,
  updateMovie,
  deleteMovie,
}
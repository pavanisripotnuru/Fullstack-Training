const { response } = require('express')
const { getConnection } = require('./connection')

const getUsers = (request, response) => {
  getConnection.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  getConnection.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { id, first_name,last_name,email,dob,gender,salary,age } = request.body


  getConnection.query('INSERT INTO users (id, first_name,last_name,email,dob,gender,salary,age) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [id, first_name,last_name,email,dob,gender,salary,age], (error, results) => {
    if (error) {
      throw error
    }

    response.status(201).send(`emp added with ID: ${id}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { first_name,last_name,email,dob,gender,salary,age } = request.body

  getConnection.query(
    'UPDATE users SET first_name = $1, last_name = $2, email= $3, dob=$4, gender=$5, salary=$6, age=$7 WHERE id = $8',
    [first_name,last_name,email,dob,gender,salary,age, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`emp modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  getConnection.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`emp deleted with ID: ${id}`)
  })
}

const getUserByAge = (request, response) => {
  const age = parseInt(request.params.id)
  console.log(age)
  //getConnection.query('SELECT * FROM users WHERE age > $1', [age], (error, results) => {
    getConnection.query('select * from users where ((current_date-dob)/365)>$1', [age], (error, results) => {
    if (error) {
     
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMovieNamesByUserId = (request,response) => {
  const user_id = parseInt(request.params.id)
  console.log(user_id)
  getConnection.query('select m.name as movie_name, um.user_id, um.movie_id from users_movies um join movies m on m.id=um.movie_id where um.user_id=$1', [user_id], (error,results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserNamesByMovieId = (request,response) => {
  const user_id = parseInt(request.params.id)
  console.log(user_id)
  getConnection.query('select u.first_name as user_name, um.user_id, um.movie_id from users_movies um join users u on u.id=um.user_id where um.movie_id=$1', [user_id], (error,results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const registerUser = (request,response) => {
  console.log("Register User Request called")
  const { name,last_name,email,password,confirm_password,gender,age } = request.body
  //console.log(request)
  console.log(request.body)
  console.log(request.body.gender)

  getConnection.query('INSERT INTO reg_user (name,last_name,email,password,confirm_password,gender,age ) VALUES ($1,$2,$3,$4,$5,$6,$7)', [name,last_name,email,password,confirm_password,gender,age ], (error, results) => {
    if (error) {
      response.status(500).send(`something went wrong`)
    }

    response.status(200).send(`reg_user added with name ${name} is success`)
  })
  //response.status(200).json("success")
}

const loginUser = (request,response) => {
  console.log("Login User Request called")
  const {email,password} = request.body
  //console.log(request)
  console.log(request.body)
  console.log(request.body.email)

  getConnection.query('SELECT * from reg_user where email=$1 and password=$2', [email,password], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    response.status(200).send(results.rows)
  })
  //response.status(200).json("success")
}



module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByAge,
  getMovieNamesByUserId,
  getUserNamesByMovieId,
  registerUser,
  loginUser

}
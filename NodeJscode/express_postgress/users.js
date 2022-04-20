const { response } = require('express')
const { getConnection } = require('./connection')
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const jwt_decode=require('jwt-decode');
//const secret_key = 'Saltkey@2022';
//const act_token = jwt.sign({id:'123456'}, secret_key);
const { sign } = require("jsonwebtoken");
require('dotenv').config();

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

async function registerUser(request,response) {
  console.log("Register User Request called")
  const { name,last_name,email,password,confirm_password,gender,age } = request.body
  //console.log(request)
  console.log(request.body)
  console.log(request.body.gender)

  hashedPassword = await bcrypt.hash(password, 10);
  hashedConfirmedPassword = await bcrypt.hash(confirm_password, 10);
  console.log(hashedPassword);
  console.log(hashedConfirmedPassword);

  const result = await checkIsEmailExistsOrNot(request.body.email);
  if(result) {
    getConnection.query('INSERT INTO reg_user (name,last_name,email,password,confirm_password,gender,age ) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, email', [name,last_name,email,hashedPassword,hashedConfirmedPassword,gender,age ], (error, results) => {
      if (error) {
        return response.status(500).send(`something went wrong`)  
      }
      console.log(results);
      const jsontoken = sign({ result: results.rows }, process.env.JWT_KEY, {
        expiresIn: "1h"
      });
      //return response.status(200).send(results.rows);
      return response.status(200).json({
        success: 1,
        message: "User Added successfully",
        token: jsontoken,
        data:results.rows
      });
      //response.status(200).send(`reg_user added with name ${name} is success`)
    })
  } else {
      console.log("Register "+false)
      response.status(400).send(`User Email ${email} Already exists in the database`)
    }
}
function checkIsEmailExistsOrNot(email) {
  return new Promise((resolve, reject) => {
    let result = false;
    console.log("Checking is email inside method")
  getConnection.query('select name from reg_user where email=$1', [email], (error,results) => {
  if(error) {
    return response.status(500).send(`unable to fectch the user of email ${email}`)
  }
  console.log(results.rowCount)
  if(results.rowCount>=1) {
    console.log(`User Email ${email} Already exists in the database`)
   resolve(result);
  }else {
    console.log(`User Email ${email} not exists in the database`)
    result= true;
    resolve(result);
  }
  })
});

}




const loginUser = (request,response) => {
  console.log("Login User Request called")
  const {email,password} = request.body
  //console.log(request)
  console.log(request.body)
  console.log(request.body.email)
  /*const token = request.headers.authorization;
  console.log("token"+token);
  if(!token) {
    return response.status(401).json('Unauthorize user')
  }
  let decoded_id='';
  jwt.verify(token,secret_key,function(error, decoded) {
    console.log(decoded)
    if(decoded ===undefined) {
      return response.status(401).json('Not valid user to access this resource')

    }else{
      console.log(decoded.id)
    }
    
  });*/

  getConnection.query('SELECT * from reg_user where email=$1', [email], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    if (results.rows.length > 0) {

      const user = results.rows[0];
      console.log(user)
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log(err);
          return response.status(404).send(`something went wrong`)

        }
        if (isMatch) {
          const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
            expiresIn: "1h"
          });
          //return response.status(200).send(results.rows);
          return response.status(200).json({
            success: 1,
            message: "login successfully",
            token: jsontoken,
            data:results.rows
          });
        }else {
         return response.status(404).send(`No user exist with given password in the database`)

        }

      });
    }else {
      response.status(404).send(`No user exist with ${email} in the database`)

    }
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
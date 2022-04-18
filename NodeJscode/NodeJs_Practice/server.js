const http = require('http')
const { getProducts,getProduct,createProduct, updateProduct,deleteProduct} = require('./controllers/productController')
const { getAllMovies, getMovie,createMoive,updateMoive, deleteMoive } = require('./controllers/movieController')
//const productController = require('./controllers/productController')
const server = http.createServer((req, res) => {
  // console.log(req)

   if(req.url === '/api/products' && req.method === 'GET') {
      getProducts(req, res)

   }else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method ==='GET'){
      const id = req.url.split('/')[3]
      getProduct(req,res,id)

   } else if(req.url === '/api/products' && req.method === 'POST'){
      createProduct(req,res)

     }  else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
         const id = req.url.split('/')[3]
         updateProduct(req, res, id)

     } else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
         const id = req.url.split('/')[3]
         deleteProduct(req, res, id)

     }else if(req.url === '/api/movies' && req.method === 'GET') {
         getAllMovies(req,res)

     }else if(req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        getMovie(req,res,id)

     }else if(req.url === '/api/movies' && req.method === 'POST'){
         createMoive(req,res)

      }  else if(req.url.match(/\/api\/movies\/\w+/) && req.method === 'PUT') {
         const id = req.url.split('/')[3]
         updateMoive(req, res, id)

     } else if(req.url.match(/\/api\/movies\/\w+/) && req.method === 'DELETE') {
         const id = req.url.split('/')[3]
         deleteMoive(req, res, id)
      

     }
      else {
         console.log("Inside")

      res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
   }
});

const PORT =  process.env.PORT || 8081
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))



























/*var http = require('http');

http.createServer((req,res)=>{
   
  res.write("Hello World");
   res.end();
   console.log("Server is running")
}).listen(8081)*/


/*const http = require('http');

const products = require('./data/products.json')
const server = http.createServer((req,res)=>{
   if(req.url === '/api/products' && req.method === 'GET') {
   res.writeHead(200,{'Content-type':'application/json'});
   res.end(JSON.stringify(products));
   }else {
      res.writeHead(404, {'Content-type':'application/json'});
      res.end(JSON.stringify('Resource not found'))
   }
})
const PORT = process.env.PORT || 8081
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))*/
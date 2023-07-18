const db= require('../models')
const redis= require('redis');// used redis
//defining redis 
const redis_port= 6379;

const client= redis.createClient(redis_port);
//create main model
const Product = db.sequelize.models.product;


// main work
// redis function 
 const redisc=async (req,res,next)=>
 {
  let id=req.params[id];

  client.get(id,(err,data) =>{
    if (err) throw err;

    if (data !== null){
      res.send(data);

    }
    else{
      next ();
    }
      
  })

 }

//1. create product

const addProduct = async (req,res)=>{

let info = {
    title:req.body.title,
    price: req.body.price,
    description:req.body.description,
    published:req.body.published ? req.body.published:false
}
const product = await Product.create(info)
client.set(product);
res.status(200).send(product)
}




//2.get all products 
const getAllProducts = async(req,res)=>
{
    let products = await Product.findAll({})
   client.set(products);
    res.status(200).send(products)
}

//3. get single product
const getOneProduct = async(req,res)=>{
  let id= req.params.id
    let products = await Product.findone({where:{id:id}})
    client.set(products);
    res.status(200).send(products)
}

//4. update product
const updateProduct = async(req,res)=>
{   let id = req.params.id
   const product = await Product.update(req.body,{where:{id:id}})

res.status(200).send(product)
}

//5. delete product by id 
 const deleteProduct = async (req,res) =>{
   let id=req.params.id

   await Product.destroy({where:{id:id}})
  res.status(200).send('Product is deleted!')
 }

 //6. get published product

 const getPublishedProduct = async(req,res)=>{

    const Products = await Product.findAll({where:{published: true}})
    client.set(Products);
    res.status(200).send(Products)
 }

 module.exports={
 addProduct,
 getAllProducts,
 getOneProduct,
 updateProduct,
 deleteProduct,
 getPublishedProduct,
 redisc



 }
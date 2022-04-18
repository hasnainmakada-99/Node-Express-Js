const express=require('express');

const {products}=require('./data');

const app=express();

app.get('/', (req, res)=>{
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.listen(5000, ()=>{
    console.log('listening on port 5000....');
})

app.get('/api/products', (req, res)=>{
    const newProducts= products.map((product)=>{
        const {id, name, image}=product; // we destructured the json by getting only the id, name and image from it
        return {id, name, image} // and return those 3 parameters in the form of object
    })

    return res.json(newProducts); // res.json fucntion returns the json file
})

// starting from routes

app.get('/api/products/:productID', (req, res)=>{  
    // we have to provide the id over here and its not a url which is embedded in
    const {productID}=req.params;

   const singleProduct=products.find((product)=>product.
   id===Number(productID));

    if(!singleProduct){
        res.status(404).send('Product not found');
    }


    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req,  res)=>{
    console.log(req.params);
    res.send('hello world');
})

// the req.query is used to get the query which the user inquires in the url

app.get('/api/v1/query', (req, res)=>{
    const {search, limit}=req.query;
    let sortedProducts=[...products];
    // console.log(req.query);
    if(search){
       sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
       })
    }

    if(limit){
        sortedProducts=sortedProducts.slice(0, Number(limit)); // will filter the sorted products according to the limit
    }

    if(sortedProducts.length<1){
        res.status(200).json([{success: true, data: false}]);
         res.send("Sorry the product does not exist in our database");
    }
    res.status(200).json(sortedProducts);
})
// to run server command: node server

//restar the server after any change 

const express=require("express")
const Stripe =require("stripe")
const cors=require("cors")

const products = require('./data/products-data.json')


const stripe=new Stripe("sk_test_51LpFAZIdQtsXmsq3o3v45uCDXuW6DsR1hIQ72KxA9DNWujQ34PVEvpvJdLwK7nQ44uvmy1TAGtV80A2agrSXdHmF002XGPN9qJ")
console.log(stripe)
const app=express();

//middleware
//todo:add a cors that you need for example: 
        // app.use(cors("http://localhost:3001"))
app.use(cors())
app.use(express.json())

app.post("/api/checkout",async (req,res)=>{
    const {id,amount}=req.body
    console.log("amount :",amount)
    try{
     const payment=   await stripe.paymentIntents.create({
        payment_method:id,
        //todo:this math.round is because paymentIntents need a integer amount
        amount:Math.round(amount),
        currency:"EUR",
        description:'Basket of products',
        confirm:true,
        payment_method_types: ['card'],
     });
     console.log('Intent payment : ',payment)
     return res.status(200).json({message:'Successful Payment'})

    }catch(error){
        console.log('errorrrrrrrrrrrrrr :',error)
        return res.json({message:error.raw.message})
    }


}) 


app.get('/api/products', (req, res) => { 
    console.log('products----------',products.products)
    return res.status(200).json(products.products)});


app.listen(3001,()=>console.log("Server listening port",3001))
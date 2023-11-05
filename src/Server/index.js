const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hyww9ng.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const doctorCollection = client.db("health-care").collection("doctors");
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send("health care is running")
})
app.listen(port,()=>{
    console.log(`health care is running on port:${port}`);
})

/*
* --------------------------
*    Naming Convention
* --------------------------
* users= userCollection
* app.get('/users') ----for getting all users in server
* app.get('/users/:id')---a particular id will get
*app.post(/users) -----create a user
* app.patch('/users/:id') ---particular user will update
* app.put('/users/:id') ----update
* app.delete('/users/:id') ----delete
*/
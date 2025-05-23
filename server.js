// server.js
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI,
//     {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// }).then(() => {
// 	console.log('Connected to MongoDB')
// });

// // Routes
// app.use('/api/events', eventRoutes);

// // Start server
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });



const uri = "mongodb+srv://college_events_d24it177:<db_password>@cluster0.h8ytp2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


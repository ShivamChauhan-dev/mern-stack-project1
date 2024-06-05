require("dotenv").config();
const express = require("express")
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contect-router");
const serviceRoute = require("./router/service-route")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
var cors = require('cors')

// Configure CORS to allow requests from 'http://localhost:5173'
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true
  }));

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is runnine at port: ${PORT}`)
    })
});



require("dotenv").config();
const express = require("express")
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contect-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");


app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is runnine at port: ${PORT}`)
    })
});



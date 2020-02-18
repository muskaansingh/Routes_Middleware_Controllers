const express = require("express");
const app = express();
const morgan = require("morgan");

//bring in routes
const postRoutes = require("./post.js");

//middleware
app.use(morgan("dev"));

//app.get('/', postRoutes.getPosts);

app.use("/", postRoutes);



const port = 8080
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});
const express = require("express");
const body = require("body-parser");
var blogSchema = require("./models");

const app = express();
app.use(body.urlencoded());
const URL = "mongodb+srv://abhijithjakkam:123@cluster0.5mxaemz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 3000;

var blog = {
  title: "",
  author: "",
  body: "",
}

app.get("/get_blogs", (req, res)=>{
  if(req){
    res.send(blog);
  }

})

app.post("/post_a_blog", (req, res)=>{
  try{
    const response = req.body;
    const {title, author, body} = response;
    blog.title = title;
    blog.author = author;
    blog.body = body
    console.log(blog);

    res.send("ok done")
  }
  catch{
    console.log("error occured")
  }

})

app.listen(PORT, ()=>{
  console.log("port in listening");
})





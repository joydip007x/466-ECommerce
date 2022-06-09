const express= require('express');
const app= express();
const db=require('./db')

const UIDRoute = require('./routes/userIDRoute')

app.use(express.json());

app.use('/bankAPI/users',UIDRoute)

app.get("/",(req,res)=>{

    res.send( "<div style=background-color:LightGray;text-align:center; padding: 200px > <h2><b>This bank is &hearts;</b></h2>"+
    "<a href=https://www.youtube.com/watch?v=5xmHH_LCAzs>Tumi Jano Na (তুমি জানো না)</a> <br>"+
    "<b> তুমি জানো না, জানো না রে প্রিয় তুমি মোর জীবনের সাধনা।    তোমায় প্রথম যেদিন জেনেছি, মনে আপন মেনেছি<br>"+
    "তুমি বন্ধু আমার মন মানো না।ও.. তুমি জানো না, জানো না রে প্রিয় তুমি মোর জীবনের সাধনা।,<br>"+
    "ও ভাই অর্থ কোনো খুজি নাহি পাইরে, ভাই রে, ভাই রে আমি কতই রঙ্গ দেখি দুনিয়ায় <br>"+
    " দেখ ভালো জনে রইল ভাঙা ঘরে, মন্দ যে সে সিংহাসনে চড়ে। <br>"+
    " ও ভাই সোনার ফসল ফলায় যে তার দুই বেলা জোটেনা আহার,<br>"+
    " সোনার ফসল ফলায় যে তার দুই বেলা জোটেনা আহার। <br>"+
    " হীরার খনির মজুর হয়ে কানাকড়ি নাই, ও ভাই হীরার খনির মজুর হয়ে কানাকড়ি নাই <br>"+
    " ও তার কানাকড়ি নাই, ওরে ভাই রে, ওরে ভাই রে, ভাই রে <br>"+
    " কতই রঙ্গ দেখি দুনিয়ায়। ওরে ভাই রে, ও ভাই কতই রঙ্গ দেখি দুনিয়ায়, আমি কতই রঙ্গ দেখি দুনিয়ায়। </b><br></div>"+
    "<div style=background-color:LightGray;text-align:center;> "+
    "<iframe width=640 height=480 "+
    "src=https://www.youtube.com/embed/5xmHH_LCAzs "+
    "title=YouTube video player frameborder=0 "+
    "allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;></iframe>"+
     "</div>"
    
    )
})

const port= process.env.port || 9000;

app.listen(port, ()=> 'BANK SERVER');
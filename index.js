/* Required External Modules/** */
 const express =require('express')
 const path =require('path')
 const bodyParser = require('body-parser')
/**
 * App Variables/** */
const app = express();
const port = process.env.port || 4000;

/**
 *  App Configuration*/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/**
 * Routes Definitions*/
app.get('/',(req,res)=>{
    res.render("index")
});
app.route('/user')
    .get((req,res)=>{
        res.render('pageNotFound')
    })
    .post((req,res)=>{
        res.render("user" ,{
    user:{
        firstname:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email

}


})
});
/**
 * Server Activation */
app.listen(port);
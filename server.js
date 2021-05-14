const cookieParser = require('cookie-parser');
const express = require('express');
const app =  express();

//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '227600496619-j1jj98rbgatqdbeqtl1ka3tkg38oplog.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

const POST = process.env.POST || 5000;

//Middleware

app.set('view engine ','ejs');
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render('index.ejs');
})



app.post('/',(req,res)=>{
    let token = req.body.token;

    console.log(token);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload);
      }
      verify()
      .then(()=>{
          res.cookie('session-token',token);
          res.send('success');
      })
      .catch(console.error);
    
})

app.get('/dashboard',checkAuthenticated,(req,res)=>{
    let user = req.user;
    res.render('dashboard.ejs',{user});
})
 

app.get('/hobby',(req,res)=>{
  res.render('hobby.ejs');
})


app.get('/admin',(req,res)=>{
  res.render('admin.ejs');
})
app.get('/editBook',(req,res)=>{
  res.render('editBook.ejs');
})
app.get('/book',(req,res)=>{
  res.render('book.ejs');
})
app.get('/editHobby',(req,res)=>{
  res.render('editHobby.ejs');
})

app.get('/logout',(req,res)=>{
    res.clearCookie('session-token');
    res.redirect('/');
})
app.get('/add',(req,res)=>{
  res.render('add.ejs');
})

function checkAuthenticated(req,res,next){
    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify()
      .then(()=>{
            req.user = user;
            next();
      })
      .catch(err =>{
          res.redirect('/');
          console.log(err);
      });
}

app.listen(POST,()=>{
    console.log(`Server running on port ${POST}`);
})
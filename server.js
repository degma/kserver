const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'xpsm1530',
      database : 'test'
    }
  });

  console.log(db.select('*').from('Usuario'));

app.use(bodyParser.json());
const database = {
    usuario: [
        {
            id: '123',
            nombre: 'Martin',
            email: 'martinplate@gmail.com',
            password: 'cookies',
            ingreso: new Date()
        }
    ]
}

app.get('/', (req,res) => {
    res.send('this is working');
})

app.post('/signin', (req,res) => {
    
    if( req.body.email === database.usuario[0].email && req.body.password === database.usuario[0].password){
        res.json( "success");
    } else {
        res.status(400).json('error!');
    }
})


app.post('/register',(req,res)=> {
    const { email, name, password} = req.body;
    database.usuario.push ({
        id: '125',
        nombre: 'Martin',
        email: 'martinplate@gmail.com',
        password: 'cookies',
        ingreso: new Date()
    })

})

app.listen(3000, ()=>{
    console.log('app is runing in port 3000');
})
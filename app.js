let express = require('express')
let app = express();
let cors = require('cors');

let port = 9000;
app.use(cors());
app.get('/',(req,res)=>{
    res.send({
        message: 'Hello Gls!'
    });
});
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
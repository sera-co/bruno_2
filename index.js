const express = require('express');
const mongoose=require('mongoose')
const userRoutes=require('./routes/user.route')

const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.json());
app.use('/api',userRoutes)
mongoose.connect(process.env.DB_URI)
    .then(()=>console.log("MongDB connected"))
    .catch((err)=>console.error('Error connecting',err))

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

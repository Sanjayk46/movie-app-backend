const express = require("express")
//const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require('dotenv');
const {connectDB} = require('./database/db.js');
const userRoutes = require('./routes/userRoutes')
const favRoutes = require('./routes/favorite');
const likeRoutes = require('./routes/like')
const commentRoutes = require('./routes/comment');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');
dotenv.config();

const port = process.env.PORT;
//database connection
connectDB();

const app = express()

const corsOption={
    origin:"http://localhost:3000/",
    credentials: true
}
//cros connection
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());

//routes connection
app.use('/api/user',userRoutes)
app.use('/api/fav',favRoutes)
app.use('/api/like',likeRoutes);
app.use('/api/comment',commentRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`app is running ${port}`);
})
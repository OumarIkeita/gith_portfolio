import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
//Login Form Router file
import FormLogin from './FormtUrl/FormLogin.js'
//END
//Register Form Router file
import FormRegister from './FormtUrl/FormRegister.js'
//END
//Mongoose Connexion Router file
import connectDB from './MongDB/MongoDB.js'
//END

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
//Mongoose Connection
connectDB()
///END
/// create Employee Form for Register
app.use(FormRegister);
//END
//Login Employee
app.use(FormLogin);
//END
//Port number
const port = process.env.URL_local || 3001;
//server http
app.listen(port, () => {
  console.log(`server has started ${port}`);
});

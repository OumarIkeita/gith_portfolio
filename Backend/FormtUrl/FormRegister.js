import express from 'express'
import cors from 'cors'
import EmployeeModel from '../models/employees.js'
const router = express.Router()
router.use(cors())

router.post('/register', (req,res)=>{
    EmployeeModel.create(req.body).then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({message:`error ${err}`})
    })
})
export default router;
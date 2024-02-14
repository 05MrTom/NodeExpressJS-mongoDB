const Task = require('../models/User')


const registerUser = async (req,res) =>{
    try{
        const user = await Task.create(req.body)
        res.status(201).json({user})
    }catch(error){
        res.status(409).json({msg:error})
    }
}

const getAllUser = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const getUser = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({uuid: taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const removeUser = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({uuid: taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task}) 
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const updateUser = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id: taskID},req.body, {
            new:true,runValidators:true
        })
        res.status(200).json({id:taskID, data:req.body})
        
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Task.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


module.exports={
    registerUser,
    getAllUser,
    getUser,
    updateUser,
    removeUser,
    loginUser
}
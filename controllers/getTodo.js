//import the model
const Todo = require('../models/todo');

exports.getTodo = async(req,res)=>{
    try{
        //fetch all the todos from db
        const todos = await Todo.find();
        //send the response with a successflag
        res.status(200).json({
            success:true,
            data:todos,
            message:'Entries fetched successfully'
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //extract the id from the request params
        const id = req.params.id;
        //fetch the todo with id from db
        const todos = await Todo.findById(id);

        if(!todos){
            return res.status(404).json({
                success:false,
                message:`Entry with id ${id} not found`
            })
        }
        //send the response with a successflag
        res.status(200).json({
            success:true,
            data:todos,
            message:`Entry with id ${id} fetched successfully`
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
}
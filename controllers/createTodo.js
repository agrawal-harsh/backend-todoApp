//import the model
const todo = require('../models/todo');

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from req.body
        const {title, description} = req.body;
        //create a new todo object and insert in db
        const response = await todo.create({title,description});
        //send the response with a successflag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully'
        });
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:'Server Error',
            message:err.message
        })
    }
}
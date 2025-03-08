//import the model
const Todo = require('../models/todo');

exports.deleteTodo = async(req,res)=>{
    try{
        //extract the id from the request params
        const id = req.params.id;
        //delete the todo with id from db
        const todos = await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            data:todos,
            message:`Entry with id ${id} deleted successfully`
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

//import the model
const Todo = require('../models/todo');

exports.updateTodo = async(req,res)=>{
    try{
        //extract the id from the request params
        const id = req.params.id;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            id,
            {title,description,updatedAt:Date.now()}
        );
        res.status(200).json({
            success:true,
            data:todo,
            message: `Entry with id ${id} updated successfully`
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

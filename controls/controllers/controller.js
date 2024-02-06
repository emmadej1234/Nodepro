
const getAlltasks = (req,res) =>{
    res.send('get all task')
}

const createtasks =(req,res)=>{
 res.json(req.body)
}

const gettasks =(req,res)=>{
    res.json({id:req.params.id})
   }

const updatetasks =(req,res)=>{
    res.send("update task")
   }

const deletetasks =(req,res)=>{
    res.json({id:req.params.id})
   }

module.exports ={
    getAlltasks,createtasks,gettasks,updatetasks,deletetasks
}
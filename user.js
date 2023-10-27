// app.get("/users",(req,res)=>{
//     res.send(user)
//     })
    
//     app.post("/user",(req,res)=>{
//         user.push({id:user.length+1,...req.body})
        
//         res.send({
//             message:"succesfully added"
//         })
//     })
//     app.put("/user/:id",(req,res)=>{
//     let index=user.findIndex(v=> v.id===Number(req.params.id));
//     if(index!== -1){
//     user.splice(index,1,{id:Number(req.params.id),...req.body})}
//     res.send({message:"user successfully updated"})
//     })
//     app.delete("/user/:id",(req,res)=>{
//         let index=user.findIndex(v=> v.id===Number(req.params.id));
//        if(index !== -1){
//         user.splice(index,1)
//        }
//     res.send({message:"user successfully deleted"})
//     })
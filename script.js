const http=require("http")
http.createServer((req,res)=>{
    
   
    if(req.url==='/'){
        res.write("hai")
        res.end()
    }
    else if(req.url==='/about'){
        res.write("haiyyy")
        res.end()
    }
})
.listen(4000,()=>console.log("server is running"))
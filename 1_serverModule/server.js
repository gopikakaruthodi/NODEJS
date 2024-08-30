const http= require("http")

http.createServer((req,res)=>{
    console.log("server started");
    res.end("Hello All")

}).listen(3000)
const fs=require("fs")

// write
// fs.writeFile("msg.txt","Hey Guys",(error)=>{
//     if(error){
//         console.log("Unable to write");
//     }

// })

// append

// fs.appendFile("msg.txt"," How are you?",(error)=>{
//     if(error){
//         console.log("Unable to append");
//     }
// })

// Read

// fs.readFile("msg.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("Unable to Read");
//     }
//     else{
//         console.log(data);
//     }

// })

// delete file

// fs.unlink("msg.txt",(error)=>{
//     if(error){
//         console.log("unable to delete");
//     }
// })

// create folder

// fs.mkdir("pages",(error)=>{
//     if(error){
//         console.log("unable to create folder");
//     }
// })

// fetch files from folder
fs.readdir("pages",(error,data)=>{
    if(error){
        console.log("Unable to read");
    }
    else{
        console.log(data);
    }
})


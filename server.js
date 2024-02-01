const http= require('http');
const fs=require('fs');
const PORT=3000;

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method)

res.setHeader('Content-Type', 'text/html')
let path ='./views/';

switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode=200;
        break;
    case '/about' :
         path += 'about.html';
         break;
    case '/about-me' :
         path += 'about.html';
         res.setHeader('Location','/about')
         res.end();
         break;
    default:
        path += 'page404.html';
        res.stausCode=404;
        break;

}


fs.readFile(path,(err,data)=>{
  if(err){
    console.log(err);
    res.end();
  }else{
    res.statusCode= 200;
    res.end(data);
  }

 })
});

server.listen(PORT,'localhost',()=>{
  console.log(`listening in port:${PORT}`)
});


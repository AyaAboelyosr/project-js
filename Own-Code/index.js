//const fs = require('fs');
//const textIn=fs.readFileSync('./txt/input.txt','utf-8');
//fs.readFileSync(`${txt}\\input.txt`);
//console.log(textIn);
const fs = require('fs');
const http =require('http');
const url =require('url');
// const http = require('http');
// const url = require('url');
// // slugify is the last part of URL that contains aunique string
// // that identifies the resource that the website is displaying.
// const slugify = require('slugify');
// const replaceTemplate = require('./modules/replaceTemplate');

//////////////////////////////
// FILES

// // Blocking, synchronous way
// // read data from the input file and return it.
 //const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
 //console.log(textIn);
 //const textOut ='This is What we know about the A vokado:  ${textIn}.\nCreated on ${Date.now()}';
 //fs.writeFileSync("./txt/output.txt", textOut);
 //console.log('File Written!');
 // blocking asynchronu
 
// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
   // console.log(data2);

// })
///////////////////////////////
//server
const server=http.createServer((req,res) => {
    const PathName=req.url;
    if ( PathName=='/'||PathName == '/overview'){
        res.end('This is Overview');
    }else if(PathName== '/product'){
        res.end('This is product');
    }else{
        res.writeHead(404,{
            'Content-type':'txt/html',
            'my-own-header':'hello-world'
           
        });
        res.end('<h1>page not found</h1>');
    }

    //console.log(req);
    res.end('Hello from the server');


});
server.listen(8000,'127.0.0.1',() => {
    console.log('Listening to req in port 8000');
})


const http = require('http');

const fs = require('fs');

http.createServer((request, response)=>{

    const file = request.url == '/' ? './WWW/index.html': `./WWW/${request.url}`;
    fs.readFile(file,(err,data)=>{
        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("not found");
            response.end();
        }
        else
            response.writeHead(200, {"Content-Type":"text/html"});
            response.write(data);
            response.end();
    });

    
}).listen(4444);
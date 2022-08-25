const http=require('http');

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page!!')
    }
    if(req.url==='/about'){
        res.end('this is our short history')
    }
    res.end(
            `<h1>Oops!!</h1>
            <p>We cant seem to find this page!!</p>`
        )
    }).listen(5000)
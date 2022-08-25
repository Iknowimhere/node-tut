const fs=require('fs')

fs.readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
    } else {
     let first=result;
        fs.writeFile('./content/subfolder/result-async.txt',`Here is the result: ${first}`,(err,result)=>{
            if (err) {
                console.log(err);
            } else {
                console.log(result);
        }
    })
    }
})


const fs=require('fs')

let rf=fs.readFileSync('./content/subfolder/first.txt','utf8');
let rs=fs.readFileSync('./content/subfolder/second.txt','utf8');
console.log(rf,rs);

fs.writeFileSync('./content/subfolder/result.txt',`result is ${rf},${rs}`,{flag:'a'})

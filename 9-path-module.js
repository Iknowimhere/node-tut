const path=require('path');

let sep=path.sep
console.log(sep);

let join=path.join('/tutorial','eno ondu','demo.txt');
console.log(join);


let base=path.basename(join)
console.log(base);


let resolve=path.resolve(__dirname,join)
console.log(resolve);

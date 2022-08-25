// OS -module
const os=require('os');


// info about user
const user=os.userInfo();
console.log(user);


// method returns the system up time

console.log(`the system is up for ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS);
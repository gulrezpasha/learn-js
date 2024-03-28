const user={
    username:"pasha",
    logincount:8,
    signedIn: true
}

function User(username,logincount,signedIn){
    this.username=username;
    this.logincount=logincount;
    this.signedIn=signedIn

    return this
}
const userOne=new User("Loveyy",13,true)
const userTwo=new User("honeyy",14,false)
console.log(userOne);
console.log(userTwo);
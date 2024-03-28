class User{
    constructor(username){
        this.username=username;

    }
  logMe(){
    console.log(`Username :${this.username}`);
  }
 static createId(){
    return`123`
  }

}
const pasha=new User("pasha")
// console.log(pasha.createId());

class Teacher extends User{
constructor(username,email){
    super(username);
    this.email= email;
}
}

const phone =new Teacher("phn","i@phn.com")
phone.logMe();
class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai =new Teacher("pasha","pasha@gmail.com","1223455")
chai.addCourse();

const tea=new User("tea")
tea.logMe();


const users = ['Vladimir','Igor','Sergei'];

const addUser = (username,callback) => {
    setTimeout(() => {
        users.push(username);
        callback();
    },200)

}

const getUsers = () => {
    setTimeout(()=>{
        console.log(users);
    },100)

}

addUser('Ivan', getUsers);


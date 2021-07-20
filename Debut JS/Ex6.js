let user = {
    nom:'bob',
    description:'il est bob',
    budget:0,
}
let Duser = {
    nom:'bob',
    description:'il est bob',
    budget:0,
    adresse: {
        name:'test',
        google:'oui'
    }
}

function thune(user){
    if (user.budget==null | user.budget==0) {
        user.description='Oublié'
    }
    else if (user.budget>0 & user.budget<5) {
        user.description='Travail'
    }
    else if (user.budget==5) {
        user.description='Bière'
    }else{
        user.description='Tournée'
    }
    console.log(user.description);
}

function key(user){
    for(k in user){
        console.log(k)
    }
}

function prop(user){
    for(k in user){
        console.log(user[k])
    }
}

function read(user){
    console.log(Object.values(user));
}

function number(Duser){
    let i=0;
    for(k in Duser){
        i++;
        console.log(typeof k)
        if (typeof k =='object'){
            for(j in k){
                console.log(j)
                i++;
            }
        }
    }
    console.log(i);
}

/*thune(user);

key(user);

prop(user);*/

number(Duser);
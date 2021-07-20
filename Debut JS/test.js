/*var a = 5;
var b = '2';
var ab=a+b;
if (ab==52) {
    console.log(a ,'+',b, '=' ,ab);
}
console.log(ab == 52 ? 'OK':'KO');

for (let i = 1; i < 100; i+=2) {
    if (i%2!=0) {
        console.log(i);
    }
}

for (let i = 1; i < 100; i++) {
    if (i%2!=0) {
        console.log(i);
    }
}

var j=0;
while (j<100) {
    if (j%2!=0) {
        console.log(j);
    }
    j++;
}

let list = ["a","b","c","d","e"];
let list34 = list.splice[2,2];// récupère à partir du N élément , sur N élément

for (let i = 0; i < list.length; i++) {
    if ( i==1 ) {
        console.log("Seconde element")
    }
}*/
/*
function calcul(params) {
    if (1<params & params<100) {
        if (params%3==0) {
            console.log(params,"ok")
        }
    }
}

for (let i = 0; i < 100; i++) {
    calcul(i);
}
*//*
function inver(alpha) {
    let s = alpha.split('').reverse().join('');
    console.log(s);
}*/
//let tableau =[5,6,3,12,1,5];
//
/*
let tableau =[5,6,3,12,1,5];
let truncate=2;
truncateArray(tableau);
function truncateArray(tab){
    let trun=[];
    for (let i = 0; i <= truncate; i++) {
        trun.push(tab[i]);
    }
    console.log(trun);
}
*/
// sort

let tableau =[5,6,3,12,1,5];
sortAndRemove(tableau);

function getMaxFromArray(tab){
    let max=0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i]>max) {
            max=tab[i];
        }
    }
    return max;
}
function sortAndRemove(tab){
    let copy = tab.slice();
    let listSortRemove = new Array();
    let j =0;
    let index=0;
    for (let i = 0; i < tab.length; i++) {
        j = getMaxFromArray(copy);
        if(listSortRemove.includes(j)) {
            index =listSortRemove.indexOf(j);
            listSortRemove.splice(index,1);
        }
        index =copy.indexOf(j);
        listSortRemove.unshift(j);
        copy.splice(index,1);
    }
    console.log(listSortRemove);
}

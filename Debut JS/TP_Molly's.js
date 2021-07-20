/*const Date_debut = Date.now();
function start() {
    console.log('Je rentre dans le restaurant à '+ (Date.now()-Date_debut) );
    waitingTable();
}
function waitingTable() {
    console.log('J attends une table à '+ (Date.now()-Date_debut) );
    setTimeout(() => order(), 1000);
}
function order() {
    console.log('Je commande à '+ (Date.now()-Date_debut) );
    waitingBurger();
}
function waitingBurger() {
    console.log('J attends le burger à '+ (Date.now()-Date_debut) );
    setTimeout(() => eat(),2000);
}
function eat() {
    console.log('Je mange le burger à '+ (Date.now()-Date_debut) );
    waitingPay();
}
function waitingPay() {
    console.log('J attends pour payer à '+ (Date.now()-Date_debut) );
    setTimeout(() => leaving(),5000);
}
function leaving(){
    console.log('J ai payé et je peux partir à '+ (Date.now()-Date_debut) );
}
start()
*/

const Date_debut = Date.now();

function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

async function start()  {
    try{
        console.log('Je rentre dans le restaurant à '+ (Date.now()-Date_debut) );
        const restaurant = await Promise.all(waitingTable(),order(),waitingBurger(),eat(),waitingPay(),leaving()) ;
    }catch (e){
        console.log('FAIL');
    }
}
const waitingTable = async () => {
    console.log('J attends une table à '+ (Date.now()-Date_debut) );
    const attente = later(1000)
}
const order = async () => {
    console.log('Je commande à '+ (Date.now()-Date_debut) );
}
const waitingBurger = async () => {
    console.log('J attends le burger à '+ (Date.now()-Date_debut) );
    const attente = later()
}
const eat = async () => {
    console.log('Je mange le burger à '+ (Date.now()-Date_debut) );
}
const waitingPay = async () => {
    console.log('J attends pour payer à '+ (Date.now()-Date_debut) );
    const attente = later(5000)
}
const leaving = async () =>
{
    console.log('J ai payé et je peux partir à '+ (Date.now()-Date_debut) );
}


start()
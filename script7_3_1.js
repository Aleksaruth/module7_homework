// Написать, функцию, которая принимает в качестве аргумента объект и 
// выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.


const user = {
    firstName: 'Владимир',
    age: 44
};

function printObject (user) {

    for (let key in user) {
        if (user.hasOwnProperty(key)) {
        console.log(key + ':' + user[key]);
        }
    }
}


printObject(user);
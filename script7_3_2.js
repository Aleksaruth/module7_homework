//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.





function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const person = {
    name: "Alexa", 
    city: "SPB",

  };

  console.log(showProps(person, "name"));  // true
  console.log(showProps(person, "names")); // false

const { internet, name, image, lorem, random, helpers, date }  = require('faker')

const users = [];

let i = 1;
while(i <= 15) {
    users.push({
        "id": random.alphaNumeric(10),
        title: 'Become a ' + name.jobType(),
        creationDate: date.past(),
        duration: random.number(300),
        description: lorem.words(50)
    })
    i++;
}
console.log(JSON.stringify(users));
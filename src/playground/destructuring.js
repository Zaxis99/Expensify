/*const person = {
    name: 'Zack',
    age: 29,
    location: {
        city: 'Halifax',
        temp: 15
    }
};

const {name: firstname = 'Anonymous', age} = person;

console.log(`${firstname} is ${age}.`);

const {temp: temperature, city} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);*/

/////////////////////////////////////////////////

const address = ['214 Willett Street', 'Halifax', 'NS', 'B3M4B2'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , amount] = item;

console.log(`A medium ${coffee} costs ${amount}.`);
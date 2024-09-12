let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let evenNumbers = [];   
let oddNumbers = [];   

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]); 
    } else {
        oddNumbers.push(array[i]);   
    }
}

console.log('Четные числа:', evenNumbers);
console.log('Нечетные числа:', oddNumbers);


let line = [];
let commands = [];

while (true) {
    let word = prompt('Введите команду');
    if (word === 'stop') {
        break;
    }
    commands.push(word);
}
commands.forEach(command => {
    let parts = command.split(', ');
    if (parts[0] === 'add') {
        line.push(parts[1]);
    } else if (parts[0] === 'del') {
        line.forEach((item, index) => {
            if (item === parts[1]) {
                line.splice(index, 1);
            }
        });
    }
    console.log(line);
});






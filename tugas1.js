const fruits = ['apple', 'banana', 'cherry']
fruits.slice(0, 2)
// console.log(fruits)
// outputnya ['apple', 'banana']

//method 2
const myNum = [1, 2, 3]
myNum.push(4);  
console.log(myNum)
// outputnya : [1, 2, 3, 4]
//methode 3"pop" menghapus array dari belakang 
const myNum = [1, 2, 3]
myNum.pop()
console.log(myNum)
// outputnya : [1, 2]
// nmr 4
const myNum = [1, 2, 3]
myNum.shift();
console.log(myNum)
// outputnya : [2, 3]
// nmr 5
const myNum = [3, 4]
myNum.unshift(1, 2);
console.log(myNum)
// outputnya : [1, 2, 3, 4]

// nmr 6
const myNum = [1, 2, 3]
myNum.shift();
console.log(myNum)
// outputnya : [2, 3]

// nmr 7
const debian = ['ubuntu', 'mint', 'kali']
const redhat = ['rhel', 'centos']
const arch = ['manjaro', 'chakra']
const linuxDistro = debian.concat(redhat, arch)
console.log(linuxDistro)
// output : ['ubuntu', 'mint', 'kali', 'rhel', 'centos', 'manjaro', 'chakra' ]

// nmr 8
onst fruits = ['apple', 'banana', 'cherry']
fruits.splice(0, 1) // menghapus 1 item di index 0
console.log(fruits) // ['banana', 'cherry']

// nmr 9
const fruits = ['apple', 'banana', 'cherry']
fruits.indexOf('apple') // return 0
fruits.indexOf('mango') // return -1
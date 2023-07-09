            //number 1 method slice
// const Hobbies = ['Reading', 'Badminton', 'Healing','coding','jajan']
// Hobbies.slice()
// console.log(Hobbies.slice(1,4))


// outputnya ['reading', 'Badminton','Healing']

                //number 2 method push/ menambahkan element padaarray dari belakang
// const myNilai = [80, 90, 65]
// myNilai.push(90,40);  
// console.log(myNilai)
// outputnya : [80, 90, 65, 90,40]



         //number 3 methode"pop" / menghapus array dari belakang 
// const favoritFood = ['sego Liwet','thengkleng','gudeg','bakso']
// favoritFood.pop()
// console.log(favoritFood)
// outputnya : ['sego liwet','thengkleng','gudeg']

        // nmr 4 method "shift" / menghapus array dari depan
// const  favoritFruits = ['apple','oranges','mangostin','grape']
// favoritFruits.shift();
// console.log(favoritFruits)
// outputnya : ['oranges','mangostin','grape']

                // nmr 5 method unshift/ menambahkan elemen pada array dari depan
const favoritDrink = ['mineral water', 'orange juice']
favoritDrink.unshift('avocado juice', 'milk');
console.log(favoritDrink)
// // outputnya : ['avocado juice', 'milk','mineral water', 'orange juice' ]

            // nmr 6 method "shift"/
const myNum = [1, 2, 3]
myNum.shift();
console.log(myNum)
outputnya : [2, 3]

            // nmr 7
const debian = ['ubuntu', 'mint', 'kali']
const redhat = ['rhel', 'centos']
const arch = ['manjaro', 'chakra']
const linuxDistro = debian.concat(redhat, arch)
console.log(linuxDistro)
// output : ['ubuntu', 'mint', 'kali', 'rhel', 'centos', 'manjaro', 'chakra' ]

// // nmr 8
// const fruits = ['apple', 'banana', 'cherry']
// fruits.splice(0, 1) // menghapus 1 item di index 0
// // console.log(fruits) // ['banana', 'cherry']

// // nmr 9
// const fruits = ['apple', 'banana', 'cherry']
// fruits.indexOf('apple') // return 0
// fruits.indexOf('mango') // return -1
// // console.log(fruits)
const data = ['Maulana', 'Fatah', 'Langgeng', 'Ikhlas', 'Dhika'];
const number = [12, 53, 12, 64, 2, 46, 55, 60];

const deteckName = (search, limit, callback) => {
  let output = [];
  let round = 0;
  data.forEach(element => {
    if (element.toLowerCase().includes(search.toLowerCase())) {
        if (round< limit){
      output = [...output, element];
      round += 1;
        }
    }
  });
 callback (output);
};
const print = data => console.log(data)
console.log(deteckName("ta", 2, print))

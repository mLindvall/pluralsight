function test(msg) {
    let invoiceNumber = "99";
    //  msg = `my invoice ${invoiceNumber}`;
    console.log(msg);
}

let invoiceNumber = "00";
test(`my invoice ${invoiceNumber}`);


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6).filter(w => w.includes("x") > 0);
console.log(result);
console.time("test");
let r = []
for (word of words) {
  if (word.length > 6) {
    r.push({w: word, name: "mike"});
  }
}
console.timeEnd("test");
// console.log(r);









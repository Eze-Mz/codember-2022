async function fixUsers() {
  const data = await fetch("https://codember.dev/users.txt").then((res) =>
    res.text()
  );
  const users = data
    //split when encounter 2 whitespace character (spaces, tabs, line breaks).
    .split(/\s\s/g)
    //remove all line breaks and carriage return
    .map((user) => user.replace(/(\r\n|\n|\r)/gm, ""));

  const problemArray = [];
  users.forEach((user, i) => {
    let matches = user.match(/usr/g);
    if (matches.length === 2) {
      problemArray.push(user);
    }
  });
  500;

  const allEqual = (arr) => arr.every((v) => v === arr[0]);

  //console.log(problemArray);

  const corrupted = [];
  const solution = [];
  function check(user) {
    return (
      user.includes("usr:") &&
      user.includes("age:") &&
      user.includes("eme:") &&
      user.includes("psw:") &&
      user.includes("loc:") &&
      user.includes("fll:")
    );
  }

  users.forEach((user) => {
    if (check(user)) {
      solution.push(user);
    } else {
      corrupted.push(user);
    }
  });

  console.log("corrupted: " + corrupted.length);
  console.log("valid: " + solution.length + problemArray.length);
  console.log("last valid: " + solution[solution.length - 1]);
}

fixUsers();

/*
SOLUTION FROM: https://github.com/jimmyalcala/codember/blob/main/challenge01.js
async function getUsers() {
  let response =  await fetch('https://codember.dev/users.txt')
  let data =  await response.text()
  return data.split('\n\n')
}

function userIsValid(user){
  let keys = ['usr:', 'eme:', 'psw:','loc:','age:','fll:']
  return keys.every(key => user.includes(key));
}

let users = await getUsers()
let valids = users.filter(userIsValid)
let lastValid = valids.slice(-1)[0].replaceAll('\n',' ').replaceAll(' ',',')
let username = lastValid.slice(lastValid.indexOf('usr:')+4,lastValid.indexOf(','))

console.log(`${valids.length}${username}`) 


*/

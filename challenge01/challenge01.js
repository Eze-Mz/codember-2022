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

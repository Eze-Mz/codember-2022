async function decryptMsg() {
  const data = await fetch(" https://codember.dev/encrypted.txt").then((res) =>
    res.text()
  );
  //split every word code
  const words = data.split(" ");
  let codes = [];

  //loop through the words and que de codes for every letter
  for (let index = 0; index < words.length; index++) {
    codes.push([]);
    while (words[index].length > 0) {
      //take first 3 numbers
      let code = words[index].slice(0, 3);
      //if the code is valid, the 2 numbers instead of 3
      if (Number(code) > 255) {
        code = words[index].slice(0, 2);
      }
      codes[index].push(Number(code));
      //delete the code already taken
      words[index] = words[index].replace(code, "");
    }
  }
  const solution = codes.map((code) => String.fromCharCode(...code));
  console.log(...solution);
}

decryptMsg();

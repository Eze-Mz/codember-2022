async function decryptMsg() {
  const data = await fetch(" https://codember.dev/encrypted.txt").then((res) =>
    res.text()
  );
  const words = data.split(" ");
  let arr = words[0].match(/1\d{2}|9\d{1}/g);
  let codes = [];
  for (let index = 0; index < words.length; index++) {
    codes.push([]);
    while (words[index].length > 0) {
      let code = words[index].slice(0, 3);
      if (Number(code) > 255) {
        code = words[index].slice(0, 2);
      }
      codes[index].push(Number(code));
      words[index] = words[index].replace(code, "");
    }
  }
  const solution = codes.map((code) => String.fromCharCode(...code));
  console.log(arr);
}

decryptMsg();
//console.log("m".charCodeAt(0));

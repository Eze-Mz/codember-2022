async function decryptMsg() {
  /* const data = await fetch(" https://codember.dev/encrypted.txt").then((res) =>
    res.text()
  ); */
  const data =
    "73 107110111119 121111117 121111117 100111 110111116 107110111119 109101 73 97109 1199711699104105110103 121111117 73 97109 102111108108111119105110103 121111117 68111 121111117 11997110116 116111 11210897121 8010897121 119105116104 109101 79107 7610111639115 11210897121 82117110 116104105115 9911110910997110100 11511798109105116 116561181061045651505752561029911097108";
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

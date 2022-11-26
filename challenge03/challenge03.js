//This solutions works if al colors are different, but no if ["blue", "blue", "blue", "blue"], do not return 1, blue
async function attempt1() {
  /* const data = await fetch("https://codember.dev/colors.txt").then((res) =>
    res.json()
  ); */
  const data = ["blue", "blue", "blue", "blue"];
  //console.log(data);

  let color1;
  let color2;
  let counted = [];
  let count = 0;
  data.forEach((color, i) => {
    if (i === 0) {
      color1 = color;
      color2 = data[i + 1];
    } else if (
      (color === color1 && data[i - 1] === color2) ||
      (color === color2 && data[i - 1] === color1)
    ) {
      count++;
    } else {
      count++;
      counted.push([count, data[i - 1]]);
      color1 = data[i - 1];
      color2 = color;
      count = 1;
    }
    if (i === data.length - 1) {
      counted.push([count, data[i]]);
    }
  });
  console.log(counted);
  const maxZebra = counted.reduce((a, b) => {
    if (a[0] > b[0]) {
      return a;
    } else {
      return b;
    }
  });
  console.log(maxZebra);
  return maxZebra;
}

async function attempt2() {
  const data = await fetch("https://codember.dev/colors.txt").then((res) =>
    res.json()
  );
}

attempt1();
//attempt2();

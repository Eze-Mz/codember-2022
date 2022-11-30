async function battleRoyale() {
  const data = await fetch("https://codember.dev/mecenas.json").then((res) =>
    res.json()
  );

  let dataIndex = data.map((_, i) => i);

  while (dataIndex.length > 1) {
    let battle = dataIndex.filter((_, i) => i % 2 === 0);
    if (dataIndex.length % 2 !== 0) {
      battle.shift();
    }
    dataIndex = battle;
  }

  console.log(`${data[dataIndex]}-${dataIndex}`);
}

battleRoyale();

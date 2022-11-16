const REQUIRED_FIELDS = ["usr", "eme", "psw", "age", "loc", "fll"];

async function getValidUsers() {
  const data = await fetch("https://codember.dev/users.txt").then((res) =>
    res.text()
  );
  const users = data
    //split string on double newline
    .split("\n\n")
    //remove newlines in every user
    .map((user) => user.replaceAll("\n", " "));

  function checkUser(user) {
    //check if the user includes every field
    return REQUIRED_FIELDS.every((field) => user.includes(field));
  }

  const validUsers = users.filter((user) => checkUser(user));

  const [, lastUsername] = validUsers.at(-1).match(/usr:(@\w+)/);

  console.log(`${validUsers.length}${lastUsername}`);
}

getValidUsers();

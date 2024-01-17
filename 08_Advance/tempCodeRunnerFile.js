async function getAllUser() {
  try {
    const response = await fetch("https://api.github.com/users/asrinibash");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: " + error);
  }
}
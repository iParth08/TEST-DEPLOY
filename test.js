console.log("This is a safe line.");
console.log("This is a safe line.");
console.log("This is a safe line.");

console.log(process.env.SECRET_KEY);

console.log("This is a safe line.");

// This is a secret

console.log("I will alter this later.");

console.log(" This is from deploy branch");

async function main() {
  await axios.get("http://localhost:5000/test", {
    headers: {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
    },
  });
}

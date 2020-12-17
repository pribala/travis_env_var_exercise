
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const favoriteFood = process.env.NAME;
console.log(`My favorite food is ${favoriteFood}`);
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();

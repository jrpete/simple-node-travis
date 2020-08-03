const FAVORITE_FOOD = process.env.TEST_VAR;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_FOOD} rocks!`);
    await sleep(5000);
  }
}

main();

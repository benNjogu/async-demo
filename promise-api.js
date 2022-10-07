const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Asynch operation 1...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Asynch operation 2...");
    resolve(2);
  }, 2000);
});

Promise.all([p, p2]).then((result) => console.log(result));

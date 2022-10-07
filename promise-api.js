const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asynch operation 1...");
    reject(new Error("because something failed..."));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Asynch operation 2...");
    resolve(2);
  }, 2000);
});

//If one promise is rejected, the final promise returned is considered rejected
Promise.all([p, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));

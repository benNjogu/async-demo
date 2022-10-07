const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1); //Pending => resolved/fulfilled
    reject(new Error("message")); //Pending => rejected
  }, 2000);
});

p.then((result) => console.log("Result ", result)).catch((err) =>
  console.log("Error", err.message)
);

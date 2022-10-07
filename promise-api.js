const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const p2 = Promise.reject(new Error("Reason for rejection"));
p.catch((err) => console.log(err));

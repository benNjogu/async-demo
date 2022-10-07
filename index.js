console.log("Before");
/*getUser(1, (user) => {
  console.log("User", user);
  getRepositories(user.gitHubUserName, (repos) => {
    console.log("Repos", repos);
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});*/

/*const p = getUser(1);
p.then(user => getRepositories(user.gitHubUserName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));*/

//Async and Await approach
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUserName);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log('Error ', error);
    }
}

displayCommits();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUserName: "Ben" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      //resolve(["repo1", "repo2", "repo3"]);
      reject(new Error('Could not get the repos'))
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["commit"]);
    }, 2000);
  });
}

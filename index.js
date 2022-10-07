console.log("Before");
getUser(1, getRepositorys);
console.log("After");

function getRepositorys(user) {
  console.log("User", user);
  getRepositories(user.gitHubUserName, displayRepos);
}

function displayRepos(repos) {
  console.log("Repos", repos);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUserName: "Ben" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
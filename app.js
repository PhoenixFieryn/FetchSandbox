document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Get local JSON data
function getJson() {
  fetch('posts.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}
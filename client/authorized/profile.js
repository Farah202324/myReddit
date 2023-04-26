const postContainer = document.querySelector('.posts-section');

const username = document.querySelector('#name');
username.textContent = document.cookie.split(';')[0].split('=')[1]

const getProfile = (data) => {
  Object.entries(data).forEach(([key, post]) => {
    const div = document.createElement('div');
    div.setAttribute('id', key);
    div.innerHTML = `
    <div class="post-image">
    <img src="${post.image_url}" alt="Post Image">
  </div>
  <div class="post-content">
    <h3 class="post-title">${post.title}</h3>
    <p>${post.content}</p>
    <div class="post-details">
      <span class="post-author">Posted by ${post.username}</span>
      <img src="${post.profile_picture}" alt="Profile Picture">
      <span class="post-vote">votes:${post.value}<button id="voteUp">vote+</button><button id="voteDown">vote-</button></span>
    </div>
  </div>
`;
    postContainer.appendChild(div);
  });
};
fetch('/getProfileData')
  .then((res) => res.json())
  .then((data) => {
    getProfile(data);
  })
  .catch((err) => console.log(err));

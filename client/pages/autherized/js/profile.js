const postContainer = document.querySelector('#posts-section');

const username = document.querySelector('#username');
const name = document.createElement('h1');
name.textContent = document.cookie.split(';')[0].split('=')[1];
username.appendChild(name);

const getProfile = (data) => {
  data.forEach((e) => {
    const div = document.createElement('div');
    div.setAttribute('id', e.id);
    div.innerHTML = `
    <div class="user-post-${e.id} user-post">
    <div class="vote">
    <i class="fas fa-long-arrow-alt-up up"></i>
    <div>
      <p class="votes-num" id="votes-num">0</p>
    </div>
    <i class="fas fa-long-arrow-alt-down down"></i>
    </div>

  
    <div class="post-content">
    <div class="post-title username"><h3>${e.username}</h3></div>
    <div class="post-title"><h4>${e.title}</h4></div>
    <div class="post-desc"><p>${e.content}</p></div>
      <div class="post-title">
        <div class="post-desc"></div>
      </div>
      <div class="post-footer" id="postFooter">
        <div class="comments-sec">
          <i class="fas fa-comment-alt"></i>
          <p class="comment-label">Comments</p>
        </div>
      </div>
        <div class="delete">
          <a id=${e.id} class='deleteBtn' href="/deletePost/${e.id}">Delete</a>
        </div>
    </div>
    </div>
`;
    postContainer.appendChild(div);
  });
};
fetch('/getProfile')
  .then((res) => res.json())
  .then((data) => {
    getProfile(data);
  })
  .catch((err) => console.log(err));

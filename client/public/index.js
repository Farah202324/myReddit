const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  getPosts(searchTerm);
});

function getPosts(searchTerm) {
  let url = './getPosts';
  if (searchTerm) {
    url += `?search=${searchTerm}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
      if (Array.isArray(data)) {
        data.forEach((post) => {
          if (!searchTerm || post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            const postElement = createPostElement(post);
            postList.appendChild(postElement);
          }
        });
      }
    });
}

function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.className = 'post';
  postElement.innerHTML = `
      <div class="post-image">
        <img src="${post.image_url}" alt="Post Image">
      </div>
      <div class="post-content">
        <h3 class="post-title">${post.title}</h3>
        <p>${post.content}</p>
        <div class="post-details">
          <span class="post-author">Posted by ${post.username}</span>
          <img src="${post.profile_picture}" alt="Profile Picture">
          <span class="post-vote">votes:${post.value}</span>
        </div>
      </div>
    `;
  return postElement;
}

window.addEventListener('load', () => {
  getPosts();
});

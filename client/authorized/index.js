/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
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
      <span class="post-vote">votes:${post.value}<button id="voteUp">vote+</button><button id="voteDown">vote-</button></span>
    </div>
  </div>
`;

  return postElement;
}

function votePost(postId, isUpvote) {
  return fetch('/vote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      postId,
      isUpvote,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to vote on post');
    }
  });
}

function updatePostVote(postElement, post) {
  const voteElement = postElement.querySelector('.post-vote');
  voteElement.innerHTML = `${post.value}<button id="voteUp">vote+</button><button id="voteDown">vote-</button>`;
  const voteUpButton = postElement.querySelector('#voteUp');
  const voteDownButton = postElement.querySelector('#voteDown');

  voteUpButton.addEventListener('click', () => {
    votePost(post.id, true).then(() => {
      post.value++;
      updatePostVote(postElement, post);
    });
  });
  voteDownButton.addEventListener('click', () => {
    votePost(post.id, false).then(() => {
      post.value--;
      updatePostVote(postElement, post);
    });
  });
}

const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', () => {
  fetch('/logout', { method: 'POST' })
    .then(() => {
      console.log('Logged out successfully');
      window.location.href = '/public';
    })
    .catch((error) => {
      console.error('Failed to logout', error);
    });
});


window.addEventListener('load', () => {
  getPosts();
  updatePostVote();
});

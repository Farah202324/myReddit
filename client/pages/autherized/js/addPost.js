/* eslint-disable camelcase */
const addPostForm = document.querySelector('#create-post-form');

addPostForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  const image_url = document.querySelector('#image_url').value;

  fetch('/addPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, image_url }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = '/autherized';
    })
    .catch((error) => console.error(error));
});

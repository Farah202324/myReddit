const addPostForm = document.querySelector('#create-post-form');

addPostForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
 
  const image_url = document.querySelector('#image_url').value;

  try {
    const response = await fetch('/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, image_url }),
    });
    if (!response.ok) {
      throw new Error('Failed to add post');
    }
    const data = await response.json();
    console.log(data);
    window.location.replace('/');
  } catch (err) {
    console.error(err);
  }
});

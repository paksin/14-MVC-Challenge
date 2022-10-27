const newFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('.new-post-form').dataset.postid;
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/edits/${post_id}`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

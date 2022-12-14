const commentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('.new-comment-form').dataset.postid;
  const comment = document.querySelector('#comment-desc').value.trim();
  console.log(post_id);
  console.log(comment);

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentHandler);

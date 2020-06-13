// comments
// here be dragons!

// API
const apiURL = 'https://project-1-api.herokuapp.com';
const apikey = 'ba8be611-9724-438e-8b35-ce3ed5727f30';

requestComments = () => {
  axios.get(`${apiURL}/comments?api_key=${apikey}`)
    .then((response) => {
      response.data.forEach((item) => {
        addComment(item);
      });
    })
    .catch((error) => console.error(`Could not GET ${apiURL}/comments`));
}

requestComments();

// add a new comment to the DOM
const addComment = (arr) => {
  // create a new element
  const newEl = (tag) => {
    return document.createElement(tag);
  }
  // write to DOM
  const commentList = document.getElementById('commentList');
  const comment = newEl('div');
  const commentDivider = newEl('div');
  const commentWrapper = newEl('div');
  const commentAvatar = newEl('div');
  const commentBody = newEl('div');
  const commentImg = newEl('img');
  const commentAuthorWrapper = newEl('div');
  const commentContent = newEl('div');
  const commentAuthor = newEl('div');
  const commentTime = newEl('div');

  commentList.appendChild(comment).classList.add('comment');

  comment.appendChild(commentDivider).classList.add('comment__divider');
  comment.appendChild(commentWrapper).classList.add('comment-wrapper');

  commentWrapper.appendChild(commentAvatar).classList.add('comment__avatar');
  commentAvatar.appendChild(commentImg).setAttribute('src', 'https://placehold.jp/150x150.png');

  commentWrapper.appendChild(commentBody).classList.add('comment__body');

  commentBody.appendChild(commentAuthorWrapper).classList.add('comment__author-wrapper');
  commentAuthorWrapper.appendChild(commentAuthor).classList.add('comment__author');
  commentAuthor.innerText = arr.name;
  commentAuthorWrapper.appendChild(commentTime).classList.add('comment__time');
  commentTime.innerText = arr.timestamp;

  commentBody.appendChild(commentContent).classList.add('comment__content');
  commentContent.innerText = arr.comment;
}

// const iterateReturn = (arr) => {
//   arr.forEach((currentValue, i) => {
//     addComment(commentArray[i]);
//   });
// };

// comment constructor
class Comment {
  constructor(name, comment, timestamp) {
    this.name = name;
    this.comment = comment;
    this.timestamp = timestamp;
  };
}

// comment submission
document.getElementById('form').addEventListener('submit', () => {
  const authorName = document.getElementById('commentAuthorName').value;
  const content = document.getElementById('commentContent').value;
  const submitTime = new Date().toLocaleString().split(' ')[0];

  const newComment = new Comment(authorName, content,  submitTime);

  event.preventDefault();
  // document.getElementById('commentList').innerHTML = '';
  addComment(newComment);
  // iterateReturn(commentArray);
  form.reset();
});

// generate footer copyright year
//
(copyrightDate = () => {
  const element = document.getElementById('copyrightDate');
  const year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();


// comments
// here be dragons!

// API
const apiURL = 'https://project-1-api.herokuapp.com';
const apikey = 'ba8be611-9724-438e-8b35-ce3ed5727f30';

// GET comments
const getComments = () => {
  axios.get(`${apiURL}/comments?api_key=${apikey}`)
    .then((response) => {
      response.data.forEach((item) => {
        addComment(item);
      });
    })
    .catch((error) => console.error(error));
};

getComments();

// add a new comment to the DOM
const addComment = (arr) => {
  // create a new element
  const newEl = (tag) => {
    return document.createElement(tag);
  }
  // write to DOM
  const commentList = document.getElementById('commentList');
  const firstChild = commentList.firstChild;
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

  const insertComment= commentList.insertBefore(comment, firstChild);

  comment.appendChild(commentDivider).classList.add('comment__divider');
  comment.appendChild(commentWrapper).classList.add('comment-wrapper');

  commentWrapper.appendChild(commentAvatar).classList.add('comment__avatar');
  commentAvatar.appendChild(commentImg).setAttribute('src', 'https://placehold.jp/150x150.png');

  commentWrapper.appendChild(commentBody).classList.add('comment__body');

  commentBody.appendChild(commentAuthorWrapper).classList.add('comment__author-wrapper');
  commentAuthorWrapper.appendChild(commentAuthor).classList.add('comment__author');
  commentAuthor.innerText = arr.name;

  commentAuthorWrapper.appendChild(commentTime).classList.add('comment__time');
  commentTime.innerText = timeSincePost(arr.timestamp);

  commentBody.appendChild(commentContent).classList.add('comment__content');
  commentContent.innerText = arr.comment;
};

// comment submission
document.getElementById('form').addEventListener('submit', () => {
  event.preventDefault();

  const authorName = document.getElementById('commentAuthorName').value;
  const content = document.getElementById('commentContent').value;

  // POST to API
  axios.post(`${apiURL}/comments?api_key=${apikey}`, {
    name: authorName,
    comment: content
  })
    .catch((error) => console.log(`Failed to POST ${apiURL}/comments`))

  // add submitted comment to DOM without refresh
  // comment constructor
  class Comment {
    constructor(name, comment) {
      this.name = name;
      this.comment = comment;
      this.timestamp = 'now';
    };
  }
  const newComment = new Comment(authorName, content);
  addComment(newComment);

  form.reset();
});

// dynamic timestamp
let timeSincePost = (test) => {
  const diff = (Date.now() - test) / 1000;

  switch (true) {
    // new submission
    case test === 'now':
      return 'now';
      break;

    // less than one minute
    case diff < 60:
      return `${Math.floor(diff)}s`;
      break;

    // hours ago
    case diff >= 60 && diff < 3600:
      return `${Math.floor((diff)/60)}m`;
      break;

    // days ago
    case diff >= 3600 && diff < 86400:
      return `${Math.floor(diff/3600)}h`;
      break;

    // weeks ago
    case diff >= 86400 && diff < 604800:
      return `${Math.floor(diff/86400)}w`;
      break;

    // months ago
    case diff >= 604800 && diff < 31556952:
      return `${Math.floor(diff/604800)}m`;
      break;

    // years ago
    case diff >= 31556952:
      return `${Math.floor(diff/31556952)}y`;
      break;

    default:
      return '';
  }
}

// generate footer copyright year
//
(copyrightDate = () => {
  const element = document.getElementById('copyrightDate');
  const year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();


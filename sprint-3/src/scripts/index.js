// comments
// here be dragons!

let commentArray = [
  {
    'author': 'Micheal Lyons',
    'time': '12/18/2018',
    'content': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
  },
  {
    'author': 'Gary Wong',
    'time': '12/12/2018',
    'content': 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
  },
  {
    'author': 'Theodore Duncan',
    'time': '12/15/2018',
    'content': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
  },
];

// create a new element
const newEl = (tag) => {
  return document.createElement(tag);
}

// scaffold a comment in the DOM
const makeComment = () => {
  const commentList = document.querySelector('#commentList');
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
  commentAuthorWrapper.appendChild(commentTime).classList.add('comment__time');

  commentBody.appendChild(commentContent).classList.add('comment__content');
}

// fill comment from `commentArray`
const displayComment = (n) => {
  const commentAuthor = document.querySelectorAll('.comment__author');
  const commentTime = document.querySelectorAll('.comment__time');
  const commentContent = document.querySelectorAll('.comment__content');

  commentAuthor[n].innerText = commentArray[n].author;
  commentTime[n].innerText = commentArray[n].time;
  commentContent[n].innerText = commentArray[n].content;
}

// populate the DOM
const populateComment = () => {
  for (let i = 0; i < commentArray.length; i++) {
    displayComment(i);
  }
}

// load existing comments on load
const loadComments = (i) => {
  commentArray.forEach(() => {
    makeComment();
  });

  populateComment();
}

window.onload = loadComments();

// write a submitted comment
const writeComment = () => {
  makeComment();
  displayComment(0);
  populateComment();
}

// comment submission
const submitButton = document.querySelector('#submitBtn');

submitButton.addEventListener('click', () => {
  const form = document.querySelector('#form');

  form.onsubmit = (event) => {
    event.preventDefault();
    form.reset();
  }

  const authorName = document.querySelector('#commentAuthorName').value;
  const content = document.querySelector('#commentContent').value;

  commentArray.unshift({
    'author': authorName,
    'time': new Date().toLocaleString().split(' ')[0],
    'content': content,
  })

  writeComment();
});

// generate footer copyright year
//
(copyrightDate = () => {
  const element = document.querySelector('#copyrightDate');
  const year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();


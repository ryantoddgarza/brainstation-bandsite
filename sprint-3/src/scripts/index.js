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
    'time': '11/15/2018',
    'content': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
  },
];

// scaffold a comment in the DOM
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
  commentAuthor.innerText = arr.author;
  commentAuthorWrapper.appendChild(commentTime).classList.add('comment__time');
  commentTime.innerText = arr.time;

  commentBody.appendChild(commentContent).classList.add('comment__content');
  commentContent.innerText = arr.content;
}

const iterateReturn = (arr) => {
  arr.forEach((currentValue, i) => {
    addComment(commentArray[i]);
  });
};

window.onload = iterateReturn(commentArray);

// comment constructor
class Comment {
  constructor(author, content, time) {
    this.author = author;
    this.content = content;
    this.time = time;
  };
}

// comment submission
document.getElementById('form').addEventListener('submit', () => {
  const authorName = document.getElementById('commentAuthorName').value;
  const content = document.getElementById('commentContent').value;
  const submitTime = new Date().toLocaleString().split(' ')[0];

  const newComment = new Comment(authorName, content,  submitTime);

  event.preventDefault();
  commentArray.unshift(newComment);
  document.getElementById('commentList').innerHTML = '';
  iterateReturn(commentArray);
  form.reset();
});

// generate footer copyright year
//
(copyrightDate = () => {
  const element = document.getElementById('copyrightDate');
  const year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();


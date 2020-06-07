// comments

let commentArray = [
  {
    'author': 'Micheal Lyons',
    'time': '12/18/2018',
    'content': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
  }
];

const buildCommentHtmlInDom = (n) => {
  const commentList = document.querySelector('.comment-list');
  const div = document.createElement('div');

  commentList.appendChild(div).classList.add('comment');
};

buildCommentHtmlInDom();

const writeCommentToDom = (n) => {
  const commentAuthor = document.querySelectorAll('.comment__author');
  const commentTime = document.querySelectorAll('.comment__time');
  const commentContent = document.querySelectorAll('.comment__content');

  commentAuthor[n].innerText = commentArray[n].author;
  commentTime[n].innerText = commentArray[n].time;
  commentContent[n].innerText = commentArray[n].content;
}

writeCommentToDom(0);






// generate footer copyright year
(copyrightDate = () => {
  const element = document.querySelector('#copyrightDate');
  const year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();

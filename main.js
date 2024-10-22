switchIframe(1);

function switchIframe(index) {
  document.querySelector('iframe').src = 'design' + index + '/index.html';
}
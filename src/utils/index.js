export const preventBodyScroll = (condition) => {
  let body = document.querySelector('body');

  if (condition) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
};

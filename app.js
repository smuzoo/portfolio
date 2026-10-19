const data = window.PORTFOLIO;
function externalLink(label, url) {
  const a = document.createElement('a'); a.textContent = label + ' ↗'; a.href = url;
  a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'text-link'; return a;
}
for (const item of data.socials) document.querySelector('#social-links').append(externalLink(item.label, item.url));
for (const item of data.projects) {
  const article = document.createElement('article');
  const image = document.createElement('img'); image.src = item.image; image.alt = item.title; image.loading = 'lazy';
  const h = document.createElement('h4'); h.textContent = item.title;
  const meta = document.createElement('p'); meta.className = 'project-meta'; meta.textContent = item.meta;
  const description = document.createElement('p'); description.textContent = item.description;
  article.append(image, h, meta, description, externalLink(item.label, item.url));
  document.querySelector('#projects').append(article);
}
const dialog = document.querySelector('#image-dialog');
for (const button of document.querySelectorAll('[data-image]')) button.addEventListener('click', () => {
  const target = document.querySelector('#dialog-image'); target.src = button.dataset.image;
  target.alt = button.querySelector('img').alt; dialog.showModal();
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
// Only one piece of media plays at a time.
document.addEventListener('play', e => {
  if (e.target.matches('audio,video')) for (const media of document.querySelectorAll('audio,video')) if (media !== e.target) media.pause();
}, true);

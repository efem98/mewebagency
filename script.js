  var typed = new Typed('.change', {
        strings : ["designer", "developer", "printer"],
        typedSpeed: 150,
        backSpeed: 150,
        loop: true
    });


// const openBtn = document.getElementById('openAboutLink');
// const closeBtn = document.getElementById('closeAbout');
// const aboutSection = document.getElementById('about');


// openBtn.addEventListener('click', () => {
//   aboutSection.classList.add('active');
// });

// closeBtn.addEventListener('click', () => {
//   aboutSection.classList.remove('active');
// });

const pages = document.querySelectorAll('.slideup');
const links = document.querySelectorAll('[data-open]');

// Open page
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const pageId = link.dataset.open;

    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    document.body.classList.add('no-scroll');
  });
});

// Close page
pages.forEach(page => {
  page.querySelector('.closeAbout').addEventListener('click', () => {
    page.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});


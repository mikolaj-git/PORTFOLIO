const cogBtn = document.querySelector('.nav__cog-btn');
const cogBox = document.querySelector('.nav__cog-menu');
const allNavLinks = document.querySelectorAll('.nav__cog-menu-link');
const footerYear = document.querySelector('.footer__year');


const cogHandler = () => {
	cogBox.classList.toggle('nav__cog-menu--active');
	cogBtn.classList.add('nav__cog-btn-icon--rotate');

	allNavLinks.forEach((link) => {
		link.addEventListener('click', () => {
			cogBox.classList.remove('nav__cog-menu--active')
			cogBtn.classList.remove('nav__cog-btn-icon--rotate');
		});
	});

	cogLinksAnimation();
};

const cogLinksAnimation = () => {
	let delayTime = 3;

	allNavLinks.forEach((link) => {
		link.classList.toggle('nav-link-animation');

		link.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

cogBtn.addEventListener('click', cogHandler);

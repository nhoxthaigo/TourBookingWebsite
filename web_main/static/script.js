const tourPackages = [
	{
		name: 'Africa - Amazing African Safari',
		duration: '5 Hours',
		rating: 4,
		reviewCount: 2,
		price: '$100',
		imageUrl: 'path/to/image1.jpg',
	},
	{
		name: 'Europe - Romantic European Getaway',
		duration: '3 Days',
		rating: 5,
		reviewCount: 5,
		price: '$200',
		imageUrl: 'path/to/image2.jpg',
	},
	{
		name: 'Asia - Cultural Asian Experience',
		duration: '7 Days',
		rating: 4.5,
		reviewCount: 3,
		price: '$800',
		imageUrl: 'path/to/image3.jpg',
	},
	{
		name: "D'Ran - Lam Dong, VietNam",
		duration: '5 Hours',
		rating: 4,
		reviewCount: 2,
		price: '$100',
		imageUrl: 'path/to/image1.jpg',
	},
	{
		name: 'Ma Bo -Lam Dong, VietNam',
		duration: '1 Days',
		rating: 5,
		reviewCount: 5,
		price: '$500',
		imageUrl: 'path/to/image2.jpg',
	},
	{
		name: 'Sapa - VietNam',
		duration: '7 Days',
		rating: 4.5,
		reviewCount: 3,
		price: '$800',
		imageUrl: 'path/to/image3.jpg',
	},
	// Add more tour packages as needed
];

const productContainer = document.querySelector('.tour-packages-items');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to render products
function renderTourPackages(startIndex) {
	productContainer.innerHTML = '';
	for (let i = startIndex; i < startIndex + 3; i++) {
		if (tourPackages[i]) {
			const tourPackage = tourPackages[i];
			const tourPackageItem = document.createElement('div');
			tourPackageItem.classList.add('tour-packages-item');
			tourPackageItem.innerHTML = `
          <div class="img-item" style="background-image: url(${tourPackage.imageUrl})"></div>
          <div class="info-item">
            <div class="info-item-des">
              <a href="#" class="des-item-name">${tourPackage.name}</a>
              <div class="des-item-duration">
                <i class="fa-regular fa-clock"></i>
                <span>${tourPackage.duration}</span>
              </div>
              <div class="item-rating">
                <div class="star-rating">
                  ${renderStarRating(tourPackage.rating)}
                </div>
                <span>(${tourPackage.reviewCount} review${tourPackage.reviewCount !== 1 ? 's' : ''})</span>
              </div>
            </div>
            <div class="info-item-price">
              <span>From</span>
              <div class="price">${tourPackage.price}</div>
            </div>
          </div>
        `;
			productContainer.appendChild(tourPackageItem);
		}
	}
}

// Function to render star rating icons
function renderStarRating(rating) {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0;
	const starRating = [];
	for (let i = 0; i < fullStars; i++) {
		starRating.push('<i class="fa-solid fa-star"></i>');
	}
	if (halfStar) {
		starRating.push('<i class="fa-solid fa-star-half"></i>');
	}
	const remainingStars = 5 - starRating.length;
	for (let i = 0; i < remainingStars; i++) {
		starRating.push('<i class="fa-regular fa-star"></i>');
	}
	return starRating.join('');
}

// Function to handle next button click
function onNextClick() {
	currentIndex += 3;
	if (currentIndex >= tourPackages.length) {
		currentIndex = 0;
	}
	renderTourPackages(currentIndex);
}

// Function to handle previous button click
function onPrevClick() {
	currentIndex -= 3;
	if (currentIndex < 0) {
		currentIndex = Math.floor(tourPackages.length / 3) * 3;
	}
	renderTourPackages(currentIndex);
}

nextBtn.addEventListener('click', onNextClick);
prevBtn.addEventListener('click', onPrevClick);

// Initial render
renderTourPackages(currentIndex);

// Automatically show next products after 2 seconds
setInterval(() => {
	onNextClick();
}, 2000);

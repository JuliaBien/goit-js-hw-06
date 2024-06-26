const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector('ul.gallery');
for (let i = 0; i < images.length; i++) {
  galleryList.insertAdjacentHTML(
    'beforeend',
    `<li><img src=${images[i].url} alt=${images[i].alt}/></li>`
  );
}
const galleryItem = document.querySelector('img');
galleryItem.style.width = '200px';
galleryList.style.display = 'flex';
galleryList.style.gap = '30px';

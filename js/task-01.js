const categories = document.querySelectorAll('.item');
const categoryName = document.querySelectorAll('.item>h2');
const categoryElements = document.querySelectorAll('.item>ul');
console.log('Number of categories:', categories.length);
for (let i = 0; i < categories.length; i += 1) {
  console.log('Category:', categoryName[i].textContent);
  console.log('Elements:', categoryElements[i].children.length);
}

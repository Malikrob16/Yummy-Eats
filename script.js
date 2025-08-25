// Updated: Add click event listeners to all card-content elements
document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded");

  // Select all card-content elements
  // Use querySelectorAll to get a NodeList of all elements with the class 'card-content'
  const cardContents = document.querySelectorAll('.card-content');
  const restdetails = document.getElementById('rest-details');

  // Add click event listener to each card-content element
  // Use forEach to iterate over the NodeList
  cardContents.forEach(function(cardcontent) {
    cardcontent.addEventListener('click', function() {
      console.log("A card was clicked!");
      
      const restaurantName = cardcontent.querySelector('h2').innerText;
      const restaurantLocation = cardcontent.querySelector('p').innerText;
      restdetails.innerHTML = `
        <h2>${restaurantName}</h2>
        <p>${restaurantLocation}</p>
      `;
    });
  });
});

// Original: Basic DOMContentLoaded event listener
// My original code
document.addEventListener('DOMContentLoaded', function() {
    console.log("The DOM is fully loaded");
});

const cardcontent = document.getElementById('card-content')
const restdetails = document.getElementById('rest-details')

cardcontent.addEventListener('click', function() {
    console.log("Card clicked!");

    const restaurantName = cardcontent.querySelector('h2').innerText;
    const restaurantLocation = cardcontent.querySelector('p').innerText;

    restdetails.innerHTML = `
      <h2>${restaurantName}</h2> +
      <p>${restaurantLocation}</p>
    `;
});
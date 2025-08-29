// Add click event listeners to all card-content elements
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

      const restCard = cardcontent.parentElement;

      const bgImage = restCard.style.backgroundImage;

      console.log(bgImage);

      let imageUrl = '';
      if (bgImage && bgImage.startsWith('url(')) {
        imageUrl = bgImage.slice(4, -1).replace(/["']/g, "");
      }
      
      const restaurantName = cardcontent.querySelector('h2').innerText;
      const restaurantInformation = cardcontent.querySelector('p').innerHTML;

      restdetails.innerHTML = `
        <h2>${restaurantName}</h2>
        <img src="${imageUrl}" alt="${restaurantName}" style="; border-radius:20px; margin-bottom:10px;">
        <p>${restaurantInformation}</p>
      `;
    });
  });
});
// Add click event listeners to all card-content elements
document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded");

  // Select all card-content elements
  // Use querySelectorAll to get a NodeList of all elements with the class 'card-content'
  const restCards = document.querySelectorAll('rest-card');
  const cardContents = document.querySelectorAll('.card-content');
  const restdetails = document.getElementById('rest-details');
  const createAccount = document.getElementById('create-account-button');
  const closepopupButton = document.getElementById('closepopupbutton');
  const popupContainer = document.getElementById('popup-container');

  createAccount.addEventListener("click", () => {
    popupContainer.style.display = 'flex';
    console.log("Create account button was clicked");
  });

  closepopupButton.addEventListener("click", () => {
    popupContainer.style.display = 'none';
    console.log("Creation popup was closed");
  });

  // Helper function to display restaurant details
  function showDetails(cardcontent) {
    const restCard = cardcontent.parentElement;
    const bgImage = restCard.style.backgroundImage;

    let imageUrl = '';

    if (bgImage && bgImage.startsWith('url(')) {
      imageUrl = bgImage.slice(4, -1).replace(/["']/g, "");
    }
    const restaurantName = cardcontent.querySelector('h2').innerText;
    const restaurantInformation = cardcontent.querySelector('p').innerHTML;

    restdetails.innerHTML = `
      <h2>${restaurantName}</h2>
      <img src="${imageUrl}" alt="${restaurantName}" style="border-radius:20px;margin-bottom:10px;">
      <p>${restaurantInformation}</p>
    `;

    // Scroll to the details section
    restdetails.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // Add click event listener to each card-content element
  cardContents.forEach(function(cardcontent) {
    cardcontent.addEventListener('click', function(event) {
      console.log("A card was clicked!")
      event.stopPropagation();
      showDetails(cardcontent);
    });
  });

  // Add click event listener to each rest-card element
  restCards.forEach(function(card) {
    card.addEventListener('click', function(event) {
      console.log("A card was clicked!")
      const cardcontent = card.querySelector('.card-content');
      if (cardcontent) {
        showDetails(cardcontent);
      }
    });
  });
});
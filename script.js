// Add click event listeners to all card-content elements
document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded");

  // Select all card-content elements
  // Use querySelectorAll to get a NodeList of all elements with the class 'card-content'
  const restCards = document.querySelectorAll('rest-card');
  const cardContents = document.querySelectorAll('.card-content');
  const restList = document.getElementById('rest-list');
  const restdetails = document.getElementById('rest-details');
  let restaurantData = [];
  const createAccount = document.getElementById('create-account-button');
  const closepopupButton = document.getElementById('closepopupbutton');
  const popupContainer = document.getElementById('popup-container');

  
  // Popup Open / close events
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape'){
      popupContainer.style.display = 'none';
      console.log("Creation popup was closed");
    }
  })

  createAccount.addEventListener("click", () => {
    popupContainer.style.display = 'flex';
    console.log("Create account button was clicked");
  });

  closepopupButton.addEventListener("click", () => {
    popupContainer.style.display = 'none';
    console.log("Creation popup was closed");
  });

  fetch('restaurants.json')
    .then(res => res.json())
    .then(data => {
      restaurantData = data;
      console.log("Data was loaded");
      console.log(data)
      restList.innerHTML = data.map(rest => `
        <div class="rest-card" data-id="${rest.id}" tabindex="0" style="background-image: url('${rest.image}');">
          <div class="card-content">
            <h2>${rest.name}</h2>
            <p>
              Location: ${rest.location} <br>
              Price Range: ${rest.priceRange}
            </p>
            <button class="order-button">Order Now</button>
          </div>
        </div>
        `).join('');

        restList.querySelectorAll('.rest-card').forEach(card => {
          card.addEventListener('click', function() {
            const id = parseInt(card.getAttribute('data-id'));
            const rest = restaurantData.find(r => r.id === id);
            if (rest) {
              restdetails.innerHTML = `
                <h2>${rest.name}</h2>
                <img src="${rest.image}" alt="${rest.name}" style="border-radius:20px;margin-bottom:10px">
                <p>Location: ${rest.location}</p>
                <p>Price Range: ${rest.priceRange}</p>
                <p>Star Rating: ${rest.starRating} / 5.0</p>
                <p>Menu: ${rest.menu.join(' , ')}</p>
                <div class="detail-buttons">
                  <button class="contact-button">Contact</button>
                  <button class="order-button">Order Now</button>
                </div>
                `;
                restdetails.scrollIntoView({behavior: "smooth", block: "center"});
            }
          });
        });
    });
});
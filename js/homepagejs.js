
    // header section  here

    let menuBtn = document.getElementById('menu-btn');
    let menu = document.querySelector('.menu');
    let phoneNumberLink = document.querySelector('.number-btn');

    menuBtn.onclick = () => {
      toggleMenu();
    };

    // Close the menu when clicking outside or on the close button
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && event.target !== menuBtn) {
        menu.classList.remove('active');
      }
    });

    // Function to toggle the menu
    function toggleMenu() {
      menu.classList.toggle('active');
    }
// search-btn-container section starts here

 let cart = document.querySelector('.search-btn-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function filterOptions() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const optionsContainer = document.getElementById('optionsContainer');
    const options = optionsContainer.getElementsByClassName('option-item');

    for (let i = 0; i < options.length; i++) {
      const optionText = options[i].textContent.toLowerCase();
      if (optionText.includes(input)) {
        options[i].style.display = 'block';
      } else {
        options[i].style.display = 'none';
      }
    }

    if (input === '') {
      optionsContainer.classList.remove('show');
    } else {
      optionsContainer.classList.add('show');
    }

  }

  // search-btn-container section ends here

//  social popup box  section starts (This code for when we click on social meidia button in header section. then this box will open in popup effect) 

        // JavaScript code
        const openFormButton = document.getElementById('openFormButton');
        const formPopup = document.getElementById('popup');

        openFormButton.addEventListener('click', () => {
            formPopup.classList.add('visible');
        });

        formPopup.addEventListener('click', (event) => {
            if (event.target.id === 'popup' || event.target.classList.contains('social-close-btn')) {
                formPopup.classList.remove('visible');
            }
        });

 // social popup box  section ends

 //  social popup box  section starts (This code for when we click on social meidia button in header section. then this box will open in popup effect) 

        // JavaScript code
        const openFormButton1 = document.getElementById('openFormButton1');
        const formPopup12 = document.getElementById('popup12');

        openFormButton1.addEventListener('click', () => {
            formPopup.classList.add('visible');
        });

        formPopup.addEventListener('click', (event) => {
            if (event.target.id === 'popup12' || event.target.classList.contains('social-close-btn12')) {
                formPopup.classList.remove('visible');
            }
        });

 // social popup box  section ends

// JavaScript for the image popup starts here

window.onload = function() {
  // Wait 5 seconds before showing the popup
  setTimeout(function() {
     document.getElementById('image-popup').style.display = 'flex';
  }, 2000);

  // Close the popup when the user clicks outside of it
  document.addEventListener('click', function(event) {
     if (event.target.id === 'image-popup' || event.target.classList.contains('close-btn')) {
        document.getElementById('image-popup').style.display = 'none';
     }
  });
};

// JavaScript for the image popup ends here


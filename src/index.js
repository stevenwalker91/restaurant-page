import { generateHomePage } from './home.js';
import { generateMenuPage } from './menu.js';
import { generateContactPage } from './contact.js';
import './style.css';




const renderPage = (event) => {
    
    //kill the function if its not one of the list items selected
    if (event.target.tagName !== 'LI') {
        return;
    }

    //get the div that will be updated
    const content = document.getElementById('responsive-content');


    //get the id of the clicked nav item
    const btnClicked = event.target.id;
    let contentToAdd;

    //check which button is clicked and call the relevant function to generate html
    if (btnClicked == 'home-btn') {
        contentToAdd = generateHomePage();
    } else if (btnClicked === 'menu-btn') {
        contentToAdd = generateMenuPage();
    } else if (btnClicked === 'contact-btn') {
        contentToAdd = generateContactPage();
    }
    
    //this stuff will be consistent each click
    content.innerHTML = contentToAdd;

}

//listen for nav clicks
const navList = document.getElementById('nav-list');
navList.addEventListener('click', renderPage);


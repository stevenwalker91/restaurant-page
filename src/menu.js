export function generateMenuPage () {
    //check its connecting

    let recipes = [];

    //constructor object for creating new menu items object
    function MenuItem(name, description, price, menuType){
        this.name = name;
        this.description = description;
        this.price = price;
        this.menuType = menuType;
        this.visibleInLibrary = false;
    }

    function addItemToMenu(name, description, price, menuType){
        const newItem = new MenuItem(name, description, price, menuType);
        recipes.push(newItem);
    }

    //set up some default items for menu

    addItemToMenu('Chicken Jalfrezi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer.', 12, 'Curries');
    addItemToMenu('Chicken Balti', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer.', 12, 'Curries');
    addItemToMenu('Lamb Rogan Josh', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer.', 13, 'Curries');
    addItemToMenu('Rice', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer.', 3, 'Sides');
    addItemToMenu('Chips', 'Not very traditional.', 3, 'Sides');
    addItemToMenu('Chips & Rice', 'Chips and rice Grace, chips AND rice.', 3, 'Sides');
    addItemToMenu('Coca Cola', 'A refreshing beverage.', 1, 'Drinks');
    addItemToMenu('Irn Bru', 'A Scottish drink.', 1, 'Drinks');
    addItemToMenu('Tennents', 'A lovely beeer.', 1, 'Drinks');


    //return the unique menu types into an array so we can set up a different section for each
    const menuTypes = [...new Set(recipes.map(item => item.menuType))];
    
    let sectionHtml = '';
    //iterate over each menu type to create a section
    menuTypes.forEach((element) => { 
        //filter to get recipes for current menu type only
        let recipesInMenu = recipes.filter(recipe => recipe.menuType == element);
        sectionHtml += `<h2>${element}</h2><div class="menu-section">`;

        //now iterate over each recipe to create html
        recipesInMenu.forEach((element) => {
            console.log(element);
            sectionHtml += `<div class="menu-item"><span class="menu-name">${element.name}</span><span class="menu-space"></span><span class="menu-price">£${element.price}</span><span class="menu-description">${element.description}</span></div>`;
        })
        sectionHtml += '</div>';

    })

    const testhtml = `<div class="container-black"><div class="container"><div class="inner-container"><h1>Menu</h1>${sectionHtml}</div></div></div>`

    return testhtml;
}
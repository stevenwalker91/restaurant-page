export function generateHomePage () {
    //check its connecting
    console.log('hello');

    //get the default div
    const content = document.getElementById('content');
    const newContent = document.createElement('div');

    newContent.innerHTML = 'Home Page';
    
    content.appendChild(newContent);


}
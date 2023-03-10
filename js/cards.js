// RENDER CARDS DYNAMICALLY

//Create an array to store the information on the index cards
const indexCardsArray = [
    {
        image: '../images/snapshoot-portfolio.png',
        imagesrc: '../images/img-plaholder.png',
        imagealt: '',
        title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
        languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        live: 'https://ruthmy.github.io/portfolio/',
        github: 'https://github.com/ruthmy',
    },
    {
        image: '../images/snapshoot-portfolio.png',
        imagesrc: '../images/img-plaholder.png',
        imagealt: '',
        title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
        languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        live: 'https://ruthmy.github.io/portfolio/',
        github: 'https://github.com/ruthmy',
    },
    {
        image: '../images/snapshoot-portfolio.png',
        imagesrc: '../images/img-plaholder.png',
        imagealt: '',
        title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
        languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        live: 'https://ruthmy.github.io/portfolio/',
        github: 'https://github.com/ruthmy',
    },
    {
        image: '../images/snapshoot-portfolio.png',
        imagesrc: '../images/img-plaholder.png',
        imagealt: '',
        title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
        languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        live: 'https://ruthmy.github.io/portfolio/',
        github: 'https://github.com/ruthmy',
    },
    {
        image: '../images/snapshoot-portfolio.png',
        imagesrc: '../images/img-plaholder.png',
        imagealt: '',
        title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
        languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        live: 'https://ruthmy.github.io/portfolio/',
        github: 'https://github.com/ruthmy',
    },
    {
        image: '../images/snapshoot-portfolio.png',
        imagesrc: '../images/img-plaholder.png',
        imagealt: '',
        title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
        languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        live: 'https://ruthmy.github.io/portfolio/',
        github: 'https://github.com/ruthmy',
    },
];

//// Create the HTML syntaxis for the card
/*
function createCard(card) {
    return `    
        <div class="recent-works__img">
            <img src="/images/img-plaholder.png" alt="Project">
            <div class="recent-works__info">
                <h3 class="recent-works__title">ThisMulti-Post Stories Gain+Glory</h3>
                <ul class="recent-works__tags">
                    <li class="recent-works__tag">Ruby on rails</li>
                    <li class="recent-works__tag">css</li>
                    <li class="recent-works__tag">JavaScript</li>
                    <li class="recent-works__tag">html</li>
                </ul>
                <button class="recent-works__link" href="#">See Project</button>
            </div>
        </div>    
    `;
}
*/


/////////This section is to create the cards \\\\\\\\\\\\\\\\\\\\

// Get the body element so you can show the overlay on the hole screen
const body = document.querySelector('body');
// Get the father element by the class name
const section = document.querySelector('.recent-works__cards');

// Create the principal tag for cards
const card = document.createElement('section');
card.className = 'recent-works__card';

//This variable is for the cards, I'm put one by one in here and then it will be sent.
let insideCard = ``;

indexCardsArray.forEach(function(singleCardContent) {
    //This line let me see that I'm actually get it the array and let me see each of the object rendered in the console.
    //console.log(singleCardContent);
  
    //Here, I put teh cards one by one in the previous empty insideCard variable.
    insideCard = insideCard +
        `
        <div class="recent-works__img">
            <img src="${singleCardContent.imagesrc}" alt="${singleCardContent.imagealt}">
            <div div class="recent-works__info">
                <h3 class="recent-works__title">${singleCardContent.title}</h3>
                <ul class="recent-works__tags">
                    <li class="recent-works__tag">${singleCardContent.languages[0]}</li>
                    <li class="recent-works__tag">${singleCardContent.languages[1]}</li>
                    <li class="recent-works__tag">${singleCardContent.languages[2]}</li>
                    <li class="recent-works__tag">${singleCardContent.languages[3]}</li>
                </ul>
                <button class="recent-works__link" href="#">See Project</button>
            </div>
        </div>  
    `;
    // uncomment the line below to see the output in the browser console.
    console.log(insideCard);
  });













// Now create, I need to add it to the DOM
// card will be inside the section variable
section.appendChild(card);

// Create the HTML syntaxis for the card
card.innerHTML = `    
        <div class="recent-works__img">
            <img src="/images/img-plaholder.png" alt="Project">
            <div class="recent-works__info">
                <h3 class="recent-works__title">ThisMulti-Post Stories Gain+Glory</h3>
                <ul class="recent-works__tags">
                    <li class="recent-works__tag">Ruby on rails</li>
                    <li class="recent-works__tag">css</li>
                    <li class="recent-works__tag">JavaScript</li>
                    <li class="recent-works__tag">html</li>
                </ul>
                <button class="recent-works__link" href="#">See Project</button>
            </div>
        </div>    
`;







//-------------------------------------------------------------------------------------------------------------------------------------------

/////////////This section is to open the modal when the user click on the See Project button\\\\\\\\\\\\\\\\
const openModal = document.querySelector('.recent-works__link');
openModal.addEventListener('click', () => {
  // Here is the code to created the modal
  // First goes the overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  // Then comes the actual modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  // Create the HTML syntaxis for the modal
  modal.innerHTML = `
        <div class="modal-window">
            <div class="modal-header">
                <div><button class="modal__close-button">&times;</button></div>
                <img src="/images/snapshoot-portfolio.png" alt="Project">
            </div>
            <div class="modal-body">
                <div class="modal-title">
                    <h3>Keeping track of hundreds of components</h3>
                    <a class="modal__link link1" href="#">
                        <span>See Live</span>
                        <img src="images/see-live-icon.svg" alt="" class="modal-icon">
                    </a>
                    <a class="modal__link link2" href="#">
                        <span>See Source</span>
                        <img src="images/see-source-icon.svg" alt="" class="modal-icon">
                    </a>
                </div>                    
            </div>
                <ul class="modal__tags">
                    <li class="modal__tag">Ruby on rails</li>
                    <li class="modal__tag">css</li>
                    <li class="modal__tag">JavaScript</li>
                    <li class="modal__tag">html</li>
                </ul>
                <p class="modal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
        </div>     
    `;

  // Modal will be inside the overlay
  overlay.appendChild(modal);
  // Overlay will be inside the section
  body.appendChild(overlay);

  /// ////Listener fo the close button ///////////////////
  const closeButton = document.querySelector('.modal__close-button');
  closeButton.addEventListener('click', () => {
    // Modal will be inside the overlay
    overlay.removeChild(modal);

    // Overlay will be inside the section
    body.removeChild(overlay);
  });
});

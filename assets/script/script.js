
import * as utils from './utils.js';
import { User, Subscriber } from './classes.js';

//Posting
const postButton = utils.select('.post-button');
const selectPic = utils.getElement('select-pic');
const postText = utils.select('textarea');
const display = utils.select('.display-area');

//Modal
const modal = utils.getElement('modal');
const modalName = utils.select('.popup-name');
const modalEmail = utils.select('.popup-email');
const modalButton = utils.getElement('modal-button');

//Image
let image = "";
let profilePic = "./assets/img/profile-1.jpg";

//Set Initial Values, otherwise weird things happen
postText.value = "";
modal.style.visibility = "hidden";


//Create Subscriber
const userProfile = new Subscriber(
  'ID205241',
  'Gabe',
  'GabyBaby',
  'g_linski@fakemail.com',
  ['Basket Weaving', 'Board Games','Living in Winnipeg'],
  ['Hula Hoop Enthusiests', 'Parakeet Watch','Bring back Veronica Mars'],
  false
)

function reset(){
  postText.value = "";
  image = "";
}

function getDate(){
  const now = new Date();
  return now.toDateString();
}

function createPost(){
  //Data for HTML Elements
  let userPic = '';
  let userDisplayName = userProfile.userName;
  const date = getDate();
  let text = postText.value;

  if(text != "" || image != ""){
    //HTML Elements 
    let userImg = utils.create('img');
    userImg.src = profilePic;
    let userH3 = utils.create('h3');
    userH3.innerText = userDisplayName;
    let dateSmall = utils.create('small');
    dateSmall.innerText = date;
    let textP = utils.create('p');
    textP.innerText = text;


    //Feed HTML divs
    //Basic Structure of Feed
    let feedDiv = utils.create('div');
    let headDiv = utils.create('div');
    let userDiv = utils.create('div');
    let profileDiv = utils.create('div');
    let infoDiv = utils.create('div');
    let photoDiv = utils.create('div');

    //Building the Feed Div
    feedDiv.appendChild(headDiv);
    headDiv.appendChild(userDiv);
    userDiv.appendChild(profileDiv);
    profileDiv.appendChild(userImg);
    userDiv.appendChild(infoDiv);
    infoDiv.appendChild(userH3);
    infoDiv.appendChild(dateSmall);
    infoDiv.appendChild(textP);

    //Adding Classes to the Divs
    feedDiv.classList.add('feed');
    headDiv.classList.add('head');
    userDiv.classList.add('user');
    profileDiv.classList.add('profile-photo');
    infoDiv.classList.add('info');

    //If the image isn't empty.
    if(image != ""){
      console.log('here');
      let reader = new FileReader();
      let newImage = utils.create('img')
      //Reads my file.
      reader.onload = function() {
        newImage.src = reader.result;
        newImage.style.display = 'block'; 
      }; 
      reader.readAsDataURL(image);
      photoDiv.appendChild(newImage);
      photoDiv.classList.add('photo');
      feedDiv.appendChild(photoDiv);
    }

    display.appendChild(feedDiv);
    reset();
  }
}

// Add an event listener to listen for file selection
selectPic.addEventListener('change', function(event) {
  image = event.target.files[0];
});

//Modal Functions
function popupModal(){

  if(modal.style.visibility === "hidden"){
    modal.style.visibility = "visible";
  }
  else{
    modal.style.visibility = "hidden";
  }
  const nameEmail = userProfile.getInfo();
  modalName.innerText = nameEmail[0];
  modalEmail.innerText = nameEmail[1];

}

// Event Listeners
modalButton.addEventListener("click", popupModal);
postButton.addEventListener("click", createPost);





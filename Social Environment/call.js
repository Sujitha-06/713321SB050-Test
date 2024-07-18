// Get the elements
const callList = document.getElementById('call');
const callWindow = document.querySelector('.call-window');
const callHeader = document.querySelector('.call-header');
const callsDiv = document.querySelector('.calls');
const sendButton = document.getElementById('send-button');

// Add event listener to the call list items
callList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const callerName = e.target.querySelector('h3').textContent;
    const callerImage = e.target.querySelector('img').src;
    updateCallWindow(callerName, callerImage);
  }
});

// Update the call window with the selected caller's information
function updateCallWindow(callerName, callerImage) {
  callHeader.innerHTML = `
    <img src="${callerImage}" alt="${callerName} Profile Picture">
    <h3>${callerName}</h3>
  `;
  callsDiv.innerHTML = ''; // Clear the calls div
}

// Add event listener to the send button
sendButton.addEventListener('click', () => {
  // You can add your call logic here
  alert('CALLING....');
});
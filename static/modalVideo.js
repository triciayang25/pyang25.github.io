// Select elements
const openModalBtn = document.getElementById('openModalBtn');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close-btn');
const videoIframe = document.getElementById('videoIframe');

// YouTube video URL (replace with the actual video URL you want to show)
const videoURL = 'https://youtu.be/LpY01emp4l0';  // Example YouTube video

// Open the modal and set the video URL
openModalBtn.addEventListener('click', function() {
    videoIframe.src = videoURL;  // Set the src of the iframe to the video URL
    videoModal.classList.add('show');  // Show the modal
});

// Close the modal and stop the video when the close button is clicked
closeBtn.addEventListener('click', function() {
    videoModal.classList.remove('show');  // Hide the modal
    videoIframe.src = '';  // Stop the video by clearing the iframe's src
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === videoModal) {
        videoModal.classList.remove('show');
        videoIframe.src = '';  // Stop the video
    }
});

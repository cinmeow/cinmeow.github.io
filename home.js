
/* opening tabs on links for icons clicks */
// This is really stupid, figure out how to call these funtions with variables based on what was clicked

function newTabLinkedin() {window.open("https://www.linkedin.com/in/chih-hsien-cindy-lin-0520/", "_blank");}
function newTabGit() {window.open("https://github.com/cinmeow", "_blank");}
function newTabInsta() {window.open("https://www.instagram.com/_cinnomnom/?hl=en", "_blank");}
function meme() {window.open("https://www.youtube.com/watch?v=XpC04fMrhd8"), "_blank"};

/* adjusting website for window size */
/* code from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php*/
function adjustWindow() {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
}

//window.addEventListener('resize', adjustWindow);
//adjustWindow();
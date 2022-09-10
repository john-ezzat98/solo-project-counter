
let guestScore = 0 ;
let homeScore = 0 ;
let guestScoreEl = document.getElementById('guest-score');
let homeScoreEl = document.getElementById('home-score');
function AddOneGuest(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function AddTwoGuest(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    
}
function AddThreeGuest(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function AddOneHome(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}
function AddTwoHome(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
function AddThreeHome(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function resetScore(){
    guestScore = 0;
    homeScore = 0;
    guestScoreEl.textContent = 0;
    homeScoreEl.textContent = 0;
}
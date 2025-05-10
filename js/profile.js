// Check authorization on page load
document.addEventListener('DOMContentLoaded', function() {
    const isAuthorized = localStorage.getItem('isAuthorized');
    console.log('Auth status:', isAuthorized); // Debug log
    
    
    if (isAuthorized !== 'true') {
        console.log('Redirecting to login...'); // Debug log
        window.location.replace('login.html');
    }
});

// Simple authorization check
if (localStorage.getItem('isAuthorized') !== 'true') {
    window.location.href = '../login.html';
}



function signOut(){
    localStorage.setItem('isAuthorized', false)
    window.location.href='../login.html'
}
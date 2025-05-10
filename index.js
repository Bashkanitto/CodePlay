// Global user object
const user = {
    username: 'admin',
    password: 'admin',
    isAuthorized: false
};

// Initialize authorization state from localStorage
function initAuth() {
    const storedAuth = localStorage.getItem('isAuthorized');
    if(!storedAuth) localStorage.setItem('isAuthorized', false)
    user.isAuthorized = storedAuth === 'true';
}

// Toggle authorization state
function toggleIsAuthorized() {
    user.isAuthorized = !user.isAuthorized;
    localStorage.setItem('isAuthorized', user.isAuthorized);
    return user.isAuthorized;
}

// Check credentials
function checkCredentials(username, password) {
    if (username === user.username && password === user.password) {
        toggleIsAuthorized();
        return true;
    }
    return false;
}

// Initialize on load
initAuth();

// Export functions
export { toggleIsAuthorized, checkCredentials, user };

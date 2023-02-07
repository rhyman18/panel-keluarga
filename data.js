// variabel form login navbar
let navUsername = document.getElementById('navUsername');
let navPassword = document.getElementById('navPassword');
let btnLogin = document.getElementById('btnLogin');
let btnLogout = document.getElementById('btnLogout');
// variabel form login responsive
let resUsername = document.getElementById('resUsername');
let resPassword = document.getElementById('resPassword');
let resLogin = document.getElementById('resLogin');
let resLogout = document.getElementById('resLogout');
let judulRes = document.getElementById('judulRes');
// cek user login
let navLink = document.getElementById('navLink');
let btnLink = document.getElementById('btnLink');
let btnAdmin = document.getElementById('btnAdmin');
// cek local storage
let session = localStorage.getItem('status');
let role = localStorage.getItem('role');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');


// cek login
if (session == 'on') {
    // cek user di halaman depan
    navUsername.style.display = 'none';
    navPassword.style.display = 'none';
    btnLogin.style.display = 'none';
    btnLogout.style.display = '';
    resUsername.style.display = 'none';
    resPassword.style.display = 'none';
    resLogin.style.display = 'none';
    resLogout.style.display = '';
    judulRes.style.display = 'none';
    navLink.href = 'panel.html';
    navLink.innerHTML = 'Panel';
    btnLink.href = 'panel.html';
    btnLink.innerHTML = 'Panel';
}

// cek role admin
if (role == 0) {
    btnAdmin.style.display = 'none';
}

// login
function login() {
    if (navUsername.value == username && navPassword.value == password && session == 'off') {
        localStorage.setItem('status', 'on');
        window.location.reload();
    } else if (resUsername.value == username && resPassword.value == password && session == 'off') {
        localStorage.setItem('status', 'on');
        window.location.reload();
    } else {
        alert('Username atau Password Salah');
    }
}

// logout
function logout() {
    localStorage.setItem('status', 'off');
    window.location.replace('index.html');
}
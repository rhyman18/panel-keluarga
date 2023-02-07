// variabel form login navbar
let navUsername = document.getElementById('navUsername');
let navPassword = document.getElementById('navPassword');
let btnLogin = document.getElementById('btnLogin');
let btnLogout = document.getElementById('btnLogout');

// cek local storage
let session = localStorage.getItem('status');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

// cek pendaftaran username
let inputUsername = document.getElementById('daftarUsername');
let inputName = document.getElementById('daftarNama');
let inputTtl = document.getElementById('daftarTtl');
let inputPassword = document.getElementById('daftarPassword');
let inputRole = document.getElementById('daftarRole');
let inputSetuju = document.getElementById('daftarSetuju');

// cek user login
let tampilUser = document.getElementById('tampilUser');
let tampilDaftar = document.getElementById('tampilDaftar');
let tampilPesan = document.getElementById('tampilPesan');

// cek form
let lowerCase = /[a-z]/;
let upperCase = /[A-Z]/;
let numberCase = /[0-9]/;
let specialCase = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
let specialCase2 = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

// error form
let err = 'rgba(255, 0, 0, 0.2)';
let cttUsername = document.getElementById('cttUsername');
let cttName = document.getElementById('cttNama');
let cttTtl = document.getElementById('cttTtl');
let cttPassword = document.getElementById('cttPassword');
let cttSetuju = document.getElementById('cttSetuju');

// cek login
if (session == 'on') {
    navUsername.style.display = 'none';
    navPassword.style.display = 'none';
    btnLogin.style.display = 'none';
    btnLogout.style.display = '';
    // cek user di form pendaftaran
    tampilUser.style.display = '';
    tampilDaftar.style.display = 'none';
    tampilPesan.innerHTML = 'Anda Sudah Menjadi Bagian dari Anggota Keluarga Ari Budiman. Silahkan Masuk Ke Panel Untuk Menggunakan Fitur yang ada.';
}

// login
function login() {
    if (navUsername.value == username && navPassword.value == password && session == 'off') {
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

// daftar
function daftar() {
    // variabel sukses
    var usernameS;
    var nameS;
    var ttlS;
    var passwordS;
    var roleS;
    var setujuS;

    // cek form username
    if (!inputUsername.value.match(specialCase) && inputUsername.value.length >= 3 && inputUsername.value.length <= 10) {
        // username berhasil
        usernameS = 1;
        inputUsername.style.background = "";
        cttUsername.style.color = "";
    } else {
        inputUsername.style.background = err;
        cttUsername.style.color = 'red';
    }

    // cek form nama
    if (!inputName.value.match(specialCase2) && inputName.value.length >= 2 && inputName.value.length <= 30) {
        // nama berhasil
        nameS = 1;
        inputName.style.background = "";
        cttName.style.color = "";
    } else {
        inputName.style.background = err;
        cttName.style.color = 'red';
    }

    // get date and year
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let date = new Date(inputTtl.value);
    let year = date.getFullYear();
    let notChild = nowYear - 6;
    let notOld = nowYear - 70;

    // cek form tanggal lahir
    if (inputTtl.value && year >= notOld && year <= notChild) {
        // tanggal berhasil
        ttlS = 1;
        inputTtl.style.background = "";
        cttTtl.style.color = "";
    } else {
        inputTtl.style.background = err;
        cttTtl.style.color = 'red';
    }

    // cek form password
    if (!inputPassword.value.match(specialCase) && inputPassword.value.match(lowerCase) && inputPassword.value.match(upperCase) && inputPassword.value.match(numberCase) && inputPassword.value.length >= 6 && inputPassword.value.length <= 12) {
        // password berhasil
        passwordS = 1;
        inputPassword.style.background = "";
        cttPassword.style.color = "";
    } else {
        inputPassword.style.background = err;
        cttPassword.style.color = 'red';
    }

    // cek form role
    if (inputRole.value <= 5) {
        // role terpilih
        roleS = 1;
        inputRole.style.background = "";
    } else {
        inputRole.style.background = err;
    }

    // cek form setuju
    if (inputSetuju.checked) {
        // setuju
        setujuS = 1;
        cttSetuju.style.color = "";
    } else {
        cttSetuju.style.color = 'red';
    }

    // semua benar
    if (usernameS == 1 && nameS == 1 && ttlS == 1 && passwordS == 1 && roleS == 1 && setujuS == 1) {
        localStorage.setItem("status", "on");
        localStorage.setItem("role", inputRole.value);
        localStorage.setItem("username", inputUsername.value);
        localStorage.setItem("password", inputPassword.value);
        localStorage.setItem("nama", inputName.value);
        localStorage.setItem("ttl", inputTtl.value);
        window.location.replace('panel.html');
    }
}
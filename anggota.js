// variabel form login navbar
let navUsername = document.getElementById('navUsername');
let navPassword = document.getElementById('navPassword');
let btnLogin = document.getElementById('btnLogin');
let btnLogout = document.getElementById('btnLogout');

// cek user login
let navLink = document.getElementById('navLink');
let userOnly = document.getElementById("userOnly");

// cek local storage
let session = localStorage.getItem('status');
let role = localStorage.getItem('role');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let name = localStorage.getItem('nama');
let ttl = localStorage.getItem("ttl");

// variabel panel
let panelJudul = document.getElementById("panelJudul");
let panelIsi = document.getElementById("panelIsi");
let isi1 = document.getElementById("isi1");
let isi2 = document.getElementById("isi2");
let isiNama = document.getElementById("isiNama");
let isiTtl = document.getElementById("isiTtl");
let isiRole = document.getElementById("isiRole");
let isiPesan = document.getElementById("isiPesan");

// waktu
let nowDate = new Date();
let nowYear = nowDate.getFullYear();
let ttl2 = new Date(ttl);
let ttlYear = ttl2.getFullYear();
let opsi1 = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}
let opsi2 = {year: 'numeric', month: 'long', day: 'numeric'}
let umur = nowYear - ttlYear;

if (session == "on") {
    navUsername.style.display = "none";
    navPassword.style.display = "none";
    btnLogin.style.display = "none";
    btnLogout.style.display = "";
    panelJudul.innerHTML = "Panel Keluarga"
    isi1.innerHTML = `Selamat Datang <u>${username}</u> di Panel Keluarga Saya. Semoga Anda Betah dan Terimakasih telah menjadi bagian dari Kami.`;
    isi2.innerHTML = `Anda berkunjung pada hari ${nowDate.toLocaleDateString("id-ID", opsi1)}.`;
    isiNama.innerHTML = `: ${name}`;
    isiTtl.innerHTML = `: ${ttl2.toLocaleDateString("id-ID", opsi2)} (${umur} Tahun)`;
    if (role == 0) {
        isiRole.innerHTML = ": Admin";
        isiPesan.innerHTML = ": Good job Coding Boss";
    } else if (role == 1) {
        isiRole.innerHTML = ": Teman";
        if (umur <= 12) {
            isiPesan.innerHTML = ": Ari bisa temenan sama bocil kok";
        } else if (umur <= 18) {
            isiPesan.innerHTML = ": Ari temenan sama Abegeh";
        } else if (umur < 27) {
            isiPesan.innerHTML = ": Lu udah nikah belum Bro?";
        } else if (umur == 27) {
            isiPesan.innerHTML = ": Kita Seumuran Bro";
        } else if (umur > 27) {
            isiPesan.innerHTML = ": Ari bisa temenan sama Bapack2 kok";
        } else if (umur >= 50) {
            isiPesan.innerHTML = ": Temenan sama kakek2 dong wkwk"
        }
    } else if (role == 2) {
        isiRole.innerHTML = ": Saudara";
        if (umur <= 12) {
            isiPesan.innerHTML = ": Hello sodara bocil";
        } else if (umur <= 18) {
            isiPesan.innerHTML = ": Wih sodara Ari Abegeh";
        } else if (umur < 27) {
            isiPesan.innerHTML = ": Cepet Nikah Kyoudai";
        } else if (umur == 27) {
            isiPesan.innerHTML = ": Kita Seumuran Kyoudai";
        } else if (umur > 27) {
            isiPesan.innerHTML = ": Hello sodara Bapack2";
        } else if (umur >= 50) {
            isiPesan.innerHTML = ": Gak ngerti lagi dah sodara Gue udh Kolot"
        }
    } else if (role == 3) {
        isiRole.innerHTML = ": Adik";
        if (umur <= 12) {
            isiPesan.innerHTML = ": Adick2 bocil, Mau Top Up epep?";
        } else if (umur <= 18) {
            isiPesan.innerHTML = ": Halo Adick2 Abegeh";
        } else if (umur < 27) {
            isiPesan.innerHTML = ": Adick2 mau mabar gak? Kuy Gass";
        } else if (umur == 27) {
            isiPesan.innerHTML = ": Adik kok seumuran -.-";
        } else if (umur > 27) {
            isiPesan.innerHTML = ": Gak salah adik pak? Lu udh Bapack2";
        } else if (umur >= 50) {
            isiPesan.innerHTML = ": Gak salah adik kek? Lu udh Kolot"
        }
    } else if (role == 4) {
        isiRole.innerHTML = ": Kakak";
        if (umur <= 12) {
            isiPesan.innerHTML = ": Bocil bau kencur mau jadi Kakak2";
        } else if (umur <= 18) {
            isiPesan.innerHTML = ": Cil-cil umur lu aja masih dibawah gue";
        } else if (umur < 27) {
            isiPesan.innerHTML = ": Umur lo masih dibawah gue, Gak salah ini?";
        } else if (umur == 27) {
            isiPesan.innerHTML = ": Kakak kok seumuran -.-";
        } else if (umur > 27) {
            isiPesan.innerHTML = ": Walaupun Bapack2 tapi senior hehe";
        } else if (umur >= 50) {
            isiPesan.innerHTML = ": Wadu, ini mah kakak gue mau expired"
        }
    } else if (role == 5) {
        isiRole.innerHTML = ": Pacar";
        if (umur <= 12) {
            isiPesan.innerHTML = ": Aku bukan pedofil lho...";
        } else if (umur <= 18) {
            isiPesan.innerHTML = ": Adick2 tunggu gede dulu ya, baru boleh pacaran";
        } else if (umur < 27) {
            isiPesan.innerHTML = ": Hallo Gadis2 manis <3 Luvv U";
        } else if (umur == 27) {
            isiPesan.innerHTML = ": Kita udh sama2 dewasa, Nikah aja yuk";
        } else if (umur > 27) {
            isiPesan.innerHTML = ": Maap ni bu, Mending jadi ibu saya aja";
        } else if (umur >= 50) {
            isiPesan.innerHTML = ": Astagfirullah nek, nyebut"
        }
    } else {
        isiRole.innerHTML = ": Error";
    }
} else {
    navLink.href = "daftar.html"
    navLink.innerHTML = "Daftar";
    panelJudul.innerHTML = "Akses Dilarang";
    panelJudul.style.color = "red";
    panelIsi.innerHTML = "Mohon Maaf, Anda tidak dapat mengakses Panel Keluarga dikarenakan Anda belum Masuk atau belum Mendaftar. Silahkan kembali ke Halaman Depan.";
    panelIsi.style.color = "red";
    userOnly.style.display = "none";
}

function login() {
    if (navUsername.value == username && navPassword.value == password && session == 'off') {
        localStorage.setItem('status', 'on');
        window.location.reload();
    } else {
        alert('Username atau Password Salah');
    }
}

function logout() {
    localStorage.setItem('status', 'off');
    window.location.replace('index.html');
}
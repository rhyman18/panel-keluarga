// cek local storage data
let sesi = localStorage.getItem('status');
let role = localStorage.getItem('role');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let nama = localStorage.getItem('nama');
let ttl = localStorage.getItem('ttl');

// variabel form
// 0. username navbar
// 1. password navbar
// 2. username responsive (index only)
// 3. password responsive (index only)
let input = document.getElementsByClassName('form-control');

// definisikan role
let jabatan = ["Admin", "Teman", "Saudara", "Adik", "Kakak", "Pacar"];

// tombol masuk dan keluar 0 = navbar, 1 = responsive (index) ctt. responsive logout di register ada
let btnLogin = document.getElementsByClassName('btn-outline-success');
let btnLogout = document.getElementsByClassName('btn-outline-danger');

// link daftar/panel
let navLink = document.getElementById('navLink');

// container khusus login/tidak
// halaman daftar 0 = default, 1 = khusus user
let konten = document.getElementsByClassName('container');

// pesan untuk user/tidak
let pesan = document.getElementById('pesan');

// notifikasi modal
let getModal = document.getElementById('modal');
let modal = new bootstrap.Modal(getModal, {
    keyboard: true, focus: true, backdrop: 'static'
});

// modal children
let modalJudul = getModal.children[0].children[0].children[0].children[0];
let modalPesan = getModal.children[0].children[0].children[1];
let modalTombol = getModal.children[0].children[0].children[2];

// notifikasi toast
let getToast = document.getElementById('toast');
let toast = new bootstrap.Toast(getToast);
let toastPesan = document.getElementsByClassName('toast-body');

// cek input form register
let lowerCase = /[a-z]/;
let upperCase = /[A-Z]/;
let numberCase = /[0-9]/;
let specialNoSpace = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
let specialWithSpace = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
let red = 'rgba(255, 0, 0, 0.2)';
let green = 'rgba(0, 255, 0, 0.2)';

// tanggal sekarang
let waktu = new Date();
let nowYear = waktu.getFullYear();
const opsiWaktu = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let nowDate = waktu.toLocaleDateString('id-ID', opsiWaktu);
let nowTime = waktu.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

// offcanvas manipulasi
let offcanvasJam = document.getElementById('offcanvasJam');
let offcanvasPesan = document.getElementById('offcanvasPesan');
offcanvasJam.innerHTML = `${nowDate} (${nowTime})`;
// isi offcanvas default
offcanvasPesan.innerHTML = '<b>Selamat datang di Keluarga Ari Budiman.</b><br>Keluarga saya berada di Ciamis, Jawa Barat, Indonesia. Keluarga yang ramah lingkungan, humble, dan pastinya kocak.<br><br>';
offcanvasPesan.innerHTML += '<b>Benefit Menjadi Keluarga Saya?</b><br><ul class="mb-0 pb-0"><li>Diakui Legal oleh Lembaga Resmi.</li><li>Dapat Login dan Mengatur Panel Keluarga.</li><li>Terlihat Lebih Keren dan Trendy.</li></ul><br>';
offcanvasPesan.innerHTML += '<b>Tertarik Menjadi Keluarga Saya?</b><br>Anda Bisa Mendaftar Menjadi Bagian dari Keluarga Saya, dan Rasakan Benefitnya Setelah Menjadi dari Bagian Keluarga Saya.<br><br>';
offcanvasPesan.innerHTML += '<b>Tunggu apa Lagi? Segera Daftar! GRATIS!!!</b><br><i>(Tidak Dipungut Biaya Apapun)</i><br><br>';
offcanvasPesan.innerHTML += '<div><a href="daftar.html" class="btn d-block btn-dark m-2">Daftar</a></div>';

// khusus sesi login dimana saja
if (sesi === 'true') {
    input[0].style.display = 'none';
    input[1].style.display = 'none';
    btnLogin[0].style.display = 'none';
    btnLogout[0].style.display = '';
    navLink.href = 'panel.html';
    navLink.innerText = 'Panel';

    // isi offcanvas khusus
    offcanvasPesan.innerHTML = `Selamat datang <b>${nama}</b>.<br>`;
    offcanvasPesan.innerHTML += `Anda terdaftar sebagai <b>${jabatan[role]}</b>.<br><br>`;
    offcanvasPesan.innerHTML += 'Terimakasih sudah Menjadi bagian dari Keluarga Kami. Semoga sehat selalu, dan semangat untuk Beraktivitas.';
}

// khusus page index
if (lokasi === 'index') {
    // tombol 0 = daftar, 1 = admin
    let btnLink = document.getElementsByClassName('btn-dark');

    // index login
    if (sesi === 'true') {
        input[2].style.display = 'none';
        input[3].style.display = 'none';
        btnLogin[1].style.display = 'none';
        btnLogout[1].style.display = '';
        btnLink[0].href = 'panel.html';
        btnLink[0].innerText = 'Panel';
        pesan.style.display = 'none';
    }

    // jika role admin
    if (role === '0')
        btnLink[1].style.display = 'none';
}

// khusus page daftar
if (lokasi === 'daftar') {
    // variabel input data dari parent div bagan
    // children 0 = label atas, 1 = form input, 2 = label pesan
    let baganUsername = document.getElementById('username');
    let baganName = document.getElementById('name');
    let baganTtl = document.getElementById('ttl');
    let baganPassword = document.getElementById('password');
    // lihat password 0 = input lihat pass, 1 = label
    let baganLihat = baganPassword.children[3].children;
    let baganPassword2 = document.getElementById('password2');
    let baganRole = document.getElementById('role');
    // checkbox 0 = input setuju, 1 = label 
    let baganSetuju = document.getElementById('setuju');

    // variabel form
    let inputUsername = baganUsername.children[1];
    let inputName = baganName.children[1];
    let inputTtl = baganTtl.children[1];
    let inputPassword = baganPassword.children[1];
    let inputLihat = baganLihat[0];
    let inputPassword2 = baganPassword2.children[1];
    let inputRole = baganRole.children[1];
    let inputSetuju = baganSetuju.children[0];
    let btnDaftar = document.getElementById('daftar');
    let btnLoading = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Daftar...';

    // variabel sukses undefinied
    let usernameS;
    let nameS
    var ttlS;
    var passwordS;
    var roleS;
    var setujuS;

    // daftar login
    if (sesi === 'true') {
        konten[0].style.display = 'none';
        konten[1].style.display = '';
        pesan.innerText = 'Anda Sudah Menjadi Bagian dari Anggota Keluarga Ari Budiman. Silahkan Masuk Ke Panel Untuk Menggunakan Fitur yang ada.';
    }

    // mendefinisikan posisi keluarga
    for (let i = 1; i < jabatan.length; i++) {
        let buat = document.createElement('option');
        buat.value = i;
        buat.innerText = jabatan[i];
        inputRole.appendChild(buat);
    }

    // fungsi validasi form
    function cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS) {
        if (usernameS === true && nameS === true && ttlS === true && passwordS === true && roleS === true && setujuS === true) {
            // enable buton daftar
            setTimeout(() => {
                btnDaftar.disabled = false;
                btnDaftar.innerHTML = 'Daftar';
            }, 1000);
        } else {
            // disable button daftar loading
            btnDaftar.disabled = true;
            btnDaftar.innerHTML = btnLoading;
        }
    }

    // cek form username
    inputUsername.addEventListener('input', () => {
        if (!inputUsername.value.match(specialNoSpace) && inputUsername.value.length >= 3 && inputUsername.value.length <= 10) {
            // input benar
            inputUsername.style.background = green;
            baganUsername.children[0].style.color = 'green';
            baganUsername.children[2].style.color = 'green';
            usernameS = true;
        } else {
            // input salah
            inputUsername.style.background = red;
            baganUsername.children[0].style.color = 'red';
            baganUsername.children[2].style.color = 'red';
            usernameS = false;
        }

        // cek username telah terdaftar
        if (inputUsername.value === username) {
            popdown(3);
            // input salah
            inputUsername.style.background = red;
            baganUsername.children[0].style.color = 'red';
            baganUsername.children[2].style.color = 'red';
            usernameS = false;
        }

        // cek daftar
        cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS);
    });

    // cek form nama
    inputName.addEventListener('input', () => {
        if (!inputName.value.match(specialWithSpace) && inputName.value.length >= 2 && inputName.value.length <= 30) {
            // input benar
            inputName.style.background = green;
            baganName.children[0].style.color = 'green';
            baganName.children[2].style.color = 'green';
            nameS = true;
        } else {
            // input salah
            inputName.style.background = red;
            baganName.children[0].style.color = 'red';
            baganName.children[2].style.color = 'red';
            nameS = false;
        }

        // cek daftar
        cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS);
    });

    // cek form tanggal lahir
    inputTtl.addEventListener('change', () => {
        // get date and year
        let date = new Date(inputTtl.value);
        let year = date.getFullYear();
        let notChild = nowYear - 6;
        let notOld = nowYear - 70;

        if (inputTtl.value && year >= notOld && year <= notChild) {
            // tanggal berhasil
            inputTtl.style.background = green;
            baganTtl.children[0].style.color = 'green';
            baganTtl.children[2].style.color = 'green';
            ttlS = true;
        } else {
            // tanggal gagal
            inputTtl.style.background = red;
            baganTtl.children[0].style.color = 'red';
            baganTtl.children[2].style.color = 'red';
            ttlS = false;
        }

        // cek daftar
        cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS);
    });

    // cek form password
    inputPassword.addEventListener('input', () => {
        if (!inputPassword.value.match(specialNoSpace) && inputPassword.value.match(lowerCase) && inputPassword.value.match(upperCase) && inputPassword.value.match(numberCase) && inputPassword.value.length >= 6 && inputPassword.value.length <= 12) {
            // password berhasil
            inputPassword.style.background = green;
            baganPassword.children[0].style.color = 'green';
            baganPassword.children[2].style.color = 'green';
        } else {
            // password gagal
            inputPassword.style.background = red;
            baganPassword.children[0].style.color = 'red';
            baganPassword.children[2].style.color = 'red';
        }

        // button daftar loading
        btnDaftar.innerHTML = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Daftar...';
    });

    // cek form lihat password
    inputLihat.addEventListener('click', () => {
        // toggle lihat password
        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
            inputPassword2.type = 'text';
        } else {
            inputPassword.type = 'password';
            inputPassword2.type = 'password';
        }

        // button daftar loading
        btnDaftar.innerHTML = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Daftar...';
    });

    // cek form ulangi password
    inputPassword2.addEventListener('input', () => {
        if (inputPassword2.value === inputPassword.value) {
            // password sama
            inputPassword2.style.background = green;
            baganPassword2.children[0].style.color = 'green';
            baganPassword2.children[2].style.color = 'green';
            passwordS = true;
        } else {
            // password tidak sama
            inputPassword2.style.background = red;
            baganPassword2.children[0].style.color = 'red';
            baganPassword2.children[2].style.color = 'red';
            passwordS = false;
        }

        // cek daftar
        cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS);
    });

    // cek form role
    inputRole.addEventListener('change', () => {
        if (inputRole.value <= 5) {
            inputRole.style.background = green;
            roleS = true;
        } else {
            inputRole.style.background = red;
            roleS = false;
        }

        // cek daftar
        cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS);
    });

    // cek persetujuan
    inputSetuju.addEventListener('click', () => {
        if (inputSetuju.checked) {
            // setuju
            baganSetuju.children[1].style.color = 'green';
            setujuS = true;
        } else {
            baganSetuju.children[1].style.color = 'red';
            setujuS = false;
        }

        // cek daftar
        cekdaftar(usernameS, nameS, ttlS, passwordS, roleS, setujuS);
    });

    // tombol daftar jika di klik
    btnDaftar.addEventListener('click', () => {
        if (usernameS === true && nameS === true && ttlS === true && passwordS === true && roleS === true && setujuS === true) {
            popup(3);
        } else {
            popup();
        }
    });

    // daftar jika sukses
    function daftar() {
        popdown(2);

        let konfirmasiDaftar = document.getElementById('konfirmasiDaftar');
        konfirmasiDaftar.disabled = true;
        konfirmasiDaftar.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Proses...';

        setTimeout(() => {
            konfirmasiDaftar.disabled = false;
            konfirmasiDaftar.innerHTML = 'Ya';
            localStorage.setItem('status', true);
            localStorage.setItem('username', inputUsername.value);
            localStorage.setItem('nama', inputName.value);
            localStorage.setItem('ttl', inputTtl.value);
            localStorage.setItem('password', inputPassword2.value);
            localStorage.setItem('role', inputRole.value);
            window.location.replace('panel.html');
        }, 5000);
    }
}

// khusus page panel
if (lokasi === 'panel') {
    // div userOnly
    let userOnly = document.getElementById('userOnly');

    // variabel panel
    let panelJudul = document.getElementById('panelJudul');
    let panelIsi = document.getElementById('panelIsi');
    let isi1 = document.getElementById('isi1');
    let isi2 = document.getElementById('isi2');
    let isiNama = document.getElementById('isiNama');
    let isiTtl = document.getElementById('isiTtl');
    let isiRole = document.getElementById('isiRole');
    let isiPesan = document.getElementById('isiPesan');

    // menghitung waktu
    let ttl2 = new Date(ttl);
    let ttlYear = ttl2.getFullYear();
    let umur = nowYear - ttlYear;

    // pesan kesan sesuai role dan umur
    let dataPesan = [
        {
            pesan12: 'Good job Coding Boss',
            pesan18: 'Good job Coding Boss',
            pesan26: 'Good job Coding Boss',
            pesan27: 'Good job Coding Boss',
            pesan28: 'Good job Coding Boss',
            pesan50: 'Good job Coding Boss'
        },
        {
            pesan12: 'Ari bisa temenan sama bocil kok.',
            pesan18: 'Ari temenan sama Abegeh.',
            pesan26: 'Lu udah nikah belum Bro?',
            pesan27: 'Kita Seumuran Bro.',
            pesan28: 'Ari bisa temenan sama Bapack2 kok.',
            pesan50: 'Temenan sama kakek2 dong wkwk..'
        },
        {
            pesan12: 'Hello sodara bocil.',
            pesan18: 'Wih sodara Ari Abegeh.',
            pesan26: 'Cepet Nikah Kyoudai.',
            pesan27: 'Kita Seumuran Kyoudai.',
            pesan28: 'Hello sodara Bapack2.',
            pesan50: 'Gak ngerti lagi dah sodara Gue udh Kolot.'
        },
        {
            pesan12: 'Adick2 bocil, Mau Top Up epep?',
            pesan18: 'Halo Adick2 Abegeh.',
            pesan26: 'Adick2 mau mabar gak? Kuy Gass',
            pesan27: 'Adik kok seumuran -.-',
            pesan28: 'Gak salah lu jadi adik gue pak? Lu udh Bapack2',
            pesan50: 'Gak salah lu jadi adik gue kek? Lu udh Kolot'
        },
        {
            pesan12: 'Bocil bau kencur mau jadi Kakak2.',
            pesan18: 'Cil-cil umur lu aja masih dibawah gue.',
            pesan26: 'Umur lo masih dibawah gue, Gak salah ini?',
            pesan27: 'Kakak kok seumuran -.-',
            pesan28: 'Walaupun Bapack2 tapi senior hehe',
            pesan50: 'Wadu, ini mah kakak gue mau expired'
        },
        {
            pesan12: 'Aku bukan pedofil lho...',
            pesan18: 'Adick2 tunggu gede dulu ya, baru boleh pacaran',
            pesan26: 'Hallo Gadis manis <3 Luvv U',
            pesan27: 'Kita udh sama2 dewasa, Nikah aja yuk',
            pesan28: 'Maap ni tan, Mending jadi tante saya aja',
            pesan50: 'Astagfirullah nek, nyebut...'
        }
    ];

    // menampilkan pesan sesuai umur dan role
    let pesanJadi;
    if (umur <= 12)
        pesanJadi = dataPesan[role].pesan12;
    else if (umur <= 18)
        pesanJadi = dataPesan[role].pesan18;
    else if (umur <= 26)
        pesanJadi = dataPesan[role].pesan26;
    else if (umur == 27)
        pesanJadi = dataPesan[role].pesan27;
    else if (umur >= 28)
        pesanJadi = dataPesan[role].pesan28;
    else if (umur <= 50)
        pesanJadi = dataPesan[role].pesan50;

    // panel member
    if (sesi === 'true') {
        panelJudul.innerText = 'Panel Keluarga';
        isi1.innerHTML = `Selamat Datang <u>${username}</u> di Panel Keluarga Saya. Semoga Anda Betah dan Terimakasih telah menjadi bagian dari Kami.`;
        isi2.innerText = `Anda berkunjung pada hari ${nowDate} (${nowTime}).`;
        isiNama.innerText = `: ${nama}`;
        isiTtl.innerText = `: ${ttl2.toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' })} (${umur} Tahun)`;
        isiRole.innerText = `: ${jabatan[role]}`;
        isiPesan.innerText = `: ${pesanJadi}`;
    } else {
        navLink.href = "daftar.html"
        navLink.innerHTML = "Daftar";
        navLink.classList = "nav-link"
        panelJudul.innerHTML = "Akses Dilarang";
        panelJudul.style.color = "red";
        panelIsi.innerHTML = "Mohon Maaf, Anda tidak dapat mengakses Panel Keluarga dikarenakan Anda belum Masuk atau belum Mendaftar. Silahkan kembali ke Halaman Depan.";
        panelIsi.style.color = "red";
        userOnly.style.display = "none";
    }
}

// modal
function popup(t = 0) {
    if (t === 0) {
        // gagal login
        modalJudul.innerText = 'Peringatan';
        modalPesan.innerText = 'Username atau Password Salah, silahkan diulang.';
    } else if (t === 1) {
        // konfirmasi logout
        modalJudul.innerText = 'Peringatan';
        modalPesan.innerText = 'Apakah anda Yakin ingin Keluar?';
        // buat tombol konfirmasi
        modalTombol.innerHTML = '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button id="keluar" type="button" class="btn btn-danger" onclick="logout(1)">Keluar</button>';
    } else if (t === 2) {
        // sukses login
        modalJudul.innerText = 'Selamat Datang';
        modalPesan.innerText = `Hello ${nama}, Selamat mengatur panel di keluarga Saya :)`;
        // buat tombol konfirmasi
        modalTombol.innerHTML = '<button type="button" id="masuk" class="btn btn-success" onclick="login(1)">Lanjut</button>';
    } else if (t === 3 && lokasi === 'daftar') {
        // konfirmasi daftar
        modalJudul.innerText = 'Peringatan';
        modalPesan.innerText = 'Apakah anda Yakin sudah mengisi data yang Benar?';
        // buat tombol konfirmasi
        modalTombol.innerHTML = '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tidak</button><button id="konfirmasiDaftar" type="button" class="btn btn-primary" onclick="daftar()">Ya</button>';
    }

    // eksekusi modal
    modal.show();
}

// toast
function popdown(t = 0) {
    // hitung waktu di toast
    let hitung = document.getElementById('hitung');

    function mundur(j = 5) {
        for (let i = 0; i < j; i++) {
            setTimeout(() => {
                hitung.innerText = `${j - i} detik..`;
            }, i * 1000);
        }
    }

    if (t === 0) {
        toastPesan[0].innerText = 'Anda Berhasil Keluar, Silahkan tunggu...';

        mundur(2);
    } else if (t === 1) {
        toastPesan[0].innerText = 'Anda Berhasil Masuk, Silahkan tunggu...';

        mundur();
    } else if (t === 2) {
        toastPesan[0].innerText = 'Anda Berhasil Mendaftar, Silahkan tunggu...';

        mundur();
    } else if (t === 3) {
        toastPesan[0].innerText = 'Username sudah Terdaftar, Silahkan coba yang lain.';

        mundur();
    }

    // eksekusi toast
    toast.show();
}

// klik login
function login(y = 0) {
    let btnMasuk = document.getElementById('masuk');
    btnLogin[0].disabled = true;
    btnLogin[0].innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

    if (lokasi === 'index') {
        btnLogin[1].disabled = true;
        btnLogin[1].innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Masuk...';
    }

    if (y === 1) {
        btnMasuk.disabled = true;
        btnMasuk.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Lanjut...';

        setTimeout(() => {
            btnMasuk.disabled = false;
            btnMasuk.innerHTML = 'Lanjut';
            localStorage.setItem('status', true);
            window.location.replace('panel.html');
        }, 1000);

    } else {
        setTimeout(() => {
            btnLogin[0].disabled = false;
            btnLogin[0].innerHTML = 'Masuk';

            if (lokasi === 'index') {
                btnLogin[1].disabled = false;
                btnLogin[1].innerHTML = 'Masuk';
            }

            if (input[0].value === username && input[1].value === password && sesi === 'false') {
                popdown(1);
                popup(2);

                setTimeout(() => {
                    localStorage.setItem('status', true);
                    window.location.replace('panel.html');
                }, 5000);
            } else if (lokasi === 'index' && input[2].value === username && input[3].value === password && sesi === 'false') {
                popdown(1);
                popup(2);

                setTimeout(() => {
                    localStorage.setItem('status', true);
                    window.location.replace('panel.html');
                }, 5000);
            } else {
                popup();
            }

        }, 1000);
    }
}

// klik logout
function logout(y = 0) {
    let btnKeluar = document.getElementById('keluar');

    if (y === 1) {
        popdown();

        btnKeluar.disabled = true;
        btnKeluar.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Keluar...';

        setTimeout(() => {
            btnKeluar.disabled = false;
            btnKeluar.innerHTML = 'Keluar';
            localStorage.setItem('status', false);
            window.location.replace('index.html');
        }, 2000);
    } else if (y === 0) {
        btnLogout[0].disabled = true;
        btnLogout[0].innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Keluar...';

        if (lokasi === 'index' || 'daftar') {
            btnLogout[1].disabled = true;
            btnLogout[1].innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Keluar...';
        }

        setTimeout(() => {
            btnLogout[0].disabled = false;
            btnLogout[0].innerHTML = 'Keluar';

            if (lokasi === 'index' || 'daftar') {
                btnLogout[1].disabled = false;
                btnLogout[1].innerHTML = 'Keluar';
            }
            popup(1);
        }, 1000);
    }
}


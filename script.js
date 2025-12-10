// Mengubah konten HTML
document.getElementById("judul").innerHTML = "Selamat Datang di Website Kami!";
document.getElementById("deskripsi").textContent = "Ini adalah deskripsi halaman";

// Mengubah style CSS
let header = document.getElementById("judul");
header.style.color = "blue";
header.style.fontSize = "32px";
header.style.fontWeight = "bold";
header.style.textAlign = "center";
header.style.backgroundColor = "#f0f0f0";
header.style.padding = "20px";

// Event listener untuk button click
document.getElementById("tombol").addEventListener("click", function() {
    alert("Tombol telah diklik!");
    console.log("User mengklik tombol");
});

// Mengambil dan menampilkan nilai dari input
function tampilkanNama() {
    let nama = document.getElementById("inputNama").value;
    
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }
    
    document.getElementById("hasil").innerHTML = "Halo, <strong>" + nama + "</strong>! Selamat datang!";
    document.getElementById("hasil").style.color = "green";
}

// Toggle class untuk show/hide content
document.getElementById("toggleBtn").addEventListener("click", function() {
    let content = document.getElementById("content");
    content.classList.toggle("hidden");
    
    // Ubah text button
    if (content.classList.contains("hidden")) {
        this.textContent = "Tampilkan Content";
    } else {
        this.textContent = "Sembunyikan Content";
    }
});

// Membuat elemen baru dan menambahkannya
function tambahItem() {
    let input = document.getElementById("itemBaru").value;
    
    if (input === "") return;
    
    // Buat elemen li baru
    let li = document.createElement("li");
    li.textContent = input;
    li.style.padding = "5px";
    li.style.cursor = "pointer";
    
    // Tambah event untuk hapus ketika diklik
    li.addEventListener("click", function() {
        this.remove();
    });
    
    // Tambahkan ke list
    document.getElementById("daftarItem").appendChild(li);
    
    // Kosongkan input
    document.getElementById("itemBaru").value = "";
}

// Event untuk form submission
document.getElementById("formData").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    
    console.log("Data yang disubmit:");
    console.log("Nama:", nama);
    console.log("Email:", email);
    
    alert("Data berhasil disubmit!");
});

// Query selector (lebih fleksibel)
let paragraf = document.querySelectorAll("p");
paragraf.forEach((p, index) => {
    p.style.color = index % 2 === 0 ? "blue" : "red";
});
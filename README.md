# tugasbesar-web3-kel2
Ini adalah repository dari Tugas Besar Praktek Web 3 milik Kelompok 2 3IF-02
Nama Anggota Kelompok :
 1. Alya Ainun Hanifah Wijaksono (161014033)
 2. Faradilla Agustin (160613062)
 3. Yuli Rahayu (161014021)

Note:
 1. Nama Database: if2_kelompok2_bookstore
 
 2. Kunjungi link 159.89.194.18:3202/admin untuk mengunjungi hasil tugas besar kami dari sisi admin. Pada halaman tsb telah tersedia button.
 - [Admin] default data buku yang akan diinput adalah :
        {
          title: "Buku Komputer",
          desc: "Ini deskripsi",
          price: 50000,
          size: "21x15cm",
          writer: "Alya Ainun",
          publisher: "Elex Media Komputindo",
          page: "300",
          year_of_publish: 2016,
          isbn: 123456,
          category: "Computer"
	       }
- [Admin] default buku yang akan diedit adalah buku dengan id: 1 yang akan berubah seperti berikut :
           {
             title: "Buku Kesehatan",
             desc: "Ini Buku Kesehatan",
             price: 700000,
             size: "25x15cm",
             writer: "Yuli Rahayu",
             publisher: "Airlangga",
             page: "490",
             year_of_publish: 2018,
             isbn: 6453487462,
             category: "Edukasi Kesehatan"
            }
- [Admin] default buku yang akan dihapus adalah buku dengan id:1

 3. Kunjungi link 159.89.194.18:3202/dashboard untuk mengunjungi hasil tugas besar kami dari sisi user. Pada halaman tersebut, telah tesedia button.
- [User] default user yang akan order buku adalah user dengan id: 2 (ada di controller order)
- [User] default buku yang akan diorder adalah buku dengan id:1 dan 3 (ada di controller order)
- [User] user dapat melihat detail order dengan id (order): 4
- [User] user dapat melihat detail buku dengan id (buku): 1
- [User] user dapat melihat list buku yang tersedia

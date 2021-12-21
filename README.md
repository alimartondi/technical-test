# technical-test

Company Profile Form

-Website ini dibuat dengan HTML, CSS dan vanilla JavaScript, ditambah framework CSS menggunakan Bootstrap v5

Dengan ketentuan dua form, bagian kiri (bagian atas saat di mobile view) adalah form untuk company profile, bagian kanan (bagian bawah saat mobile view) form untuk question
Dibagian paling atas ada logo di sebelah kiri dan dua button di sebelah kanan, yaitu button submit dan cancel, dimana button submit untuk mengirim data yang ada di form company profile, sedangkan cancel untuk mengosongkan value-nya
Kedua (Company Profile & Question) form di validasi dengan required (tidak boleh kosong), kecuali untuk description di form company profile

-Submit Data
Setelah data dikirim menggunakan HTTP POST Method (fetch), data dikirim atau kelola menggunakan Google Sheets
Apabila data berhasil di submit, akan muncul alert success, begitu juga ketika gagal
Ketika proses submit, button send di form question akan menampilkan button dengan sepinner
Sedangkan button submit di form company profile akan disabled ketika proses pengiriman data

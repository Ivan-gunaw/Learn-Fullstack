# LANGKAH - LANGKAH PEMBUATAN API
1. buat-lah 1 folder terlebih dahulu -> misalkan beri nama "basic-express"

2. open "Terminal" pada file induk (LEARN-FULLSTACK)

3. masukan pada terminal -> `cd "nama-file"` // untuk memastikan kita akan beroperasi pada folder tsb.

4. masukan pada terminal -> `npm init -y` // untuk membuat file "package-json" -> menyimpan informasi NPM/modul dalam applikasi 
    kita || notes : NPM = Node Package Manager.

5. masukan pada terminal -> `npm install express` // untuk menginstal modul dari package pada folder kita -> saat sudah mengin-
    stall maka pada folder "basic-express" akan muncul file (1. "package-lock.json" & 2. "node_modules").

6. masukan pada terminal -> `npm install nodemon pg sequelize`.

7. PENTING!!! -> HARUS MEMBUAT file ".gitignore_" -> masukan file (1. "package-lock.json" & 2. "node_modules") ke dalam folder
    ".gitignore_" // untuk menghindari kedua file tersebut di push ke dalam git saat melakukan "commit-push".

8. membuat folder "controllers" & folder "routes".

9. pada folder "controllers" -> buat file "todoController" & "userController".

10. pada folder "routes" -> buat file "index.js", "users.js", "todos.js".

11. masukan pada terminal -> `npx nodemon app.js` // untuk menjalankan node.JS || notes : nama file yang dijalankan bebas app.js
    hanyalah contoh nama file.

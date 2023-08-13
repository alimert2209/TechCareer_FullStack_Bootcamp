// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız.
const sayi1 = parseInt(prompt("1. sayıyı giriniz."))
const sayi2 = parseInt(prompt("2. sayıyı giriniz."))
alert("İki sayının toplamı: " + (sayi1 + sayi2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-2
// Kullanıcıdan aldığımız sayıyı dereceden fahrenheit'a çeviren JS kodu yazınız.
// Formül: (derece*9/5)+32 
const degree = parseInt(prompt("Derece cinsinden sıcaklık giriniz."));
alert("Fahrenheit cinsinden sıcaklık: " + ((degree * 9 / 5) + 32));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız.
const x = parseInt(prompt("x değerini giriniz."));
const k = parseInt(prompt("k değerini giriniz."));
const y = (3 * x) + (4 * k);
alert("y değeri: " + y);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
const sonuc = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));
alert("Sonuç: " + sonuc);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-5
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım.
// 1-)mutlak değeri alsın 5.9
alert(Math.abs(-5.9));
// 2-)yuvarlama yapsın  6.0
alert(Math.round(-5.9));
// 3-)karesini alsın 36.00
alert(Math.pow(Math.round(-5.9), 2));
// 4-)karekök alsın 6.0
alert(Math.sqrt(Math.pow(Math.round(-5.9), 2)))
// 5-)yuvarlama yapsın 6.0
alert(Math.round(-5.9));
// 6-)çıkan sonucu 5 bölsün 6/5=1
alert(Math.round(-5.9) / 5);
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
alert(Math.min(1, 5));
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
alert(Math.min(1, 5) % 2 == 0 ? Math.min(1, 5) + 5 : Math.min(1, 5) + 3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-6 : Kullanıcı tarafından girilen bir sayının negatif mi pozitif mi olduğunu ekrana yazdıralım.
// NOT: cast kullanarak
const sayi = parseInt(prompt("Sayı giriniz."));
alert(sayi < 0 ? "Sayı negatif" : "Sayı pozitif");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-7 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
// const password = prompt("Password giriniz.");
// const repassword = prompt("Repassword giriniz.");
// alert(password == repassword ? "Şifre Aynı" : "Şifreler uyuşmuyor");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-8
// kullanıcı tarafından girilen bir kelimenin (prompt)
const word = prompt("Birkaç kelime yazın.")
// S-1) Kaç karakterlidir ? (length)
alert(word.length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
alert(word.trim().length)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
alert(word.toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
alert(word.toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimesini değiştirin. (replace, substring, indexOf)
alert(word.replace(word.substring(0, word.indexOf(" ")), "javascript"))
console.log(userData.replace("xxxxxxx"), "javascript");
console.log(userData.replace(userData.substring(0, userData.indexOf(" ")), "javascript"));
// S-6) yazdığınız kelime "javascript ile mi başlıyor" ? (startsWith())
alert(word.startsWith("javascript"))
// S-7) yazdığınız kelime "javascript ile mi bitiyor" ? (endsWith())
alert(word.endsWith("javascript"))
// S-8) ilk harf nedir  ? (charAt())
alert(word.charAt(0))
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
alert(word.concat(" ben js öğreniyorum"))
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
alert(word.substring(0, 4))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)
let sayi3 = parseInt(prompt("Sayı giriniz."));
function isPositiveOrNegative(sayi3) {
    if (sayi3 < 0)
        console.log("Sayı negatif");
    else if (sayi3 > 0)
        console.log("Sayı pozitif");
    else
        console.log("Sayı sıfır");
}
isPositiveOrNegative(sayi3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız). 
const sayi4 = parseInt(prompt("Sayı giriniz."));
const isEvenOrOdd = function (sayi4) {
    return sayi4 % 2 == 0 ? "Sayı çift" : "Sayı tek";
}
isEvenOrOdd(sayi4);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak
const sayi5 = parseInt(prompt("Sayı giriniz."));
switch (sayi5) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Hatalı giriş");
        break;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const hesapla = () => {
    let sayi;
    do {
        sayi = parseInt(prompt("1 ile 50 arasında bir sayı giriniz."));
    } while (sayi < 1 && sayi > 50);

    let total = 0;
    let evenCount = 0, evenTotal = 0;
    let oddCount = 0, oddTotal = 0;

    for (let i = 0; i < sayi; i++) {

        if (sayi == 44) {
            console.log("Secret key! Çıkış yapılıyor...");
            return;
        }
        if (i == 7) break;
        if (i % 2 == 0) {
            evenCount++;
            evenTotal += i;
        } else {
            oddCount++;
            oddTotal += i;
        }
        total += i;

    }
    console.log("Toplam: " + total);
    console.log("Çift sayıların toplamı: " + evenTotal);
    console.log("Çift sayıların sayısı: " + evenCount);
    console.log("Tek sayıların toplamı: " + oddTotal);
    console.log("Tek sayıların sayısı: " + oddCount);
}
hesapla();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var input = prompt("Adınız");

let mask = () => {
    let dizi = input.split(" ");

    for (let i = 0; i < dizi.length; i++) {
        dizi[i] = dizi[i].charAt(0).toUpperCase() + "*".repeat(dizi[i].length - 1);
    }

    console.log(dizi.join(" "));
}
mask();




/*------ATM Uygulamasi
1- Bakiye goruntuleme
2- para cekme
3- para yatirma
4- cikis
*/

let balance = 1000;
const line = "\r\n";

let text = prompt(
    "1- Bakiye Goruntuleme" + line +
    "2- Para Yatirma" + line +
    "3- Para Cekme" + line +
    "4- Cikis" + line +
    "Lutfen Yapmak Istediginiz Islemi Rakam Olarak Giriniz :");

switch (text) {

    case "1":
        alert("Bakiyeniz :" + balance)
        break;
    case "2":
        let deposited = Number(prompt("Lutfen Yatirilacak Miktari Giriniz"));
        alert("Guncel Bakiyeniz :" + line + (deposited + balance));
        break;
    case "3":
        let withdraw = Number(prompt("Cekmek Istediginiz Miktari Giriniz :"))

        if (withdraw <= balance) {
            alert("Islem Basarili!" + line +
                "Kalan Bakiyeniz :" + (balance - withdraw))
        }
        else {
            alert("Hesabiniz de ki tutar Cekmek Istediginiz Tutar dan Buyuktur." + line +
                "Cekebileceginiz Max Tutar :" + balance);

        }
        break;
    case "4":
        alert("Basarili Bir Sekilde Cikis Yapilmistir.");
        break;
    default:
        alert("Lutfen Yukaridaki Islem Sayilerinden Birini Giriniz");
        break;

}



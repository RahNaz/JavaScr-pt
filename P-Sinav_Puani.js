// Sinav Puani Hesaplama
/*
math      = 14 soru * 2.5 = 
phisycs   = 11 soru * 2
Dari      = 6  soru * 1.5
Chemistry = 10 soru * 2
biology   = 10 soru * 2
*/
const line = "\r\n";
let math = 0;
let physics = 0;
let dari = 0;
let biology = 0;
let chemistry = 0;


let message = prompt("Lutfen Yapmak Istediginiz Islemi Seciniz : " + line +
    "1 - Puan Hesapla" + line +
    "2 - Cikis Yap")



switch (message) {
    case "1":
        let mathC = Number(prompt("Math dogru Cevap sayisini giriniz :"));
        let mathW = Number(prompt("Math Yanlis Cevap sayisini giriniz :"));

        if (mathC<0 || mathC>14) {
            alert("Hatali Giris !")
            break;
        }
        if (mathW<0 || mathW>14) {
            alert("Hatali Giris !")
            break;
        }
        
        let physicsC = Number(prompt("Fizik Dogru Cevap sayisini giriniz :"));
        let physicsW = Number(prompt("Fizik Yanlis Cevap sayisini giriniz :"));

        if (physicsC<0 || physicsC>11) {
            alert("Hatali Giris !")
            break;
        }
        if (physicsW<0 || physicsW>11) {
            alert("Hatali Giris !")
            break;
        }
        
        let dariC = Number(prompt("Dari Dogru Cevap sayisini giriniz :"));
        let dariW = Number(prompt("Dari Yanlis Cevap sayisini giriniz :"));

        if (dariC<0 || dariC>6) {
            alert("Hatali Giris !")
            break;
        }
        if (dariW<0 || dariW>6) {
            alert("Hatali Giris !")
            break;
        }
        
        let biologyC = Number(prompt("Bioloji Dogru Cevap sayisini giriniz :"));
        let biologyW =  Number(prompt("Bioloji Yanlis Cevap sayisini giriniz :"));

        if (biologyC<0 || biologyC>10) {
            alert("Hatali Giris !")
            break;
        } 
         if (biologyW<0 || biologyW>10) {
            alert("Hatali Giris !")
            break;
        }
        
        let chemistryC = Number(prompt("Kimiya Dogru Cevap sayisini giriniz :"));
        let chemistryW = Number(prompt("Kimiya Yanlis Cevap sayisini giriniz :"));

        if (chemistryC<0 || chemistryC>10) {
            alert("Hatali Giris !")
            break;
        }
        if (chemistryW<0 || chemistryW>10) {
            alert("Hatali Giris !")
            break;
        }

        let net = (mathC-(mathW/4))*2.5 + (dariC-(dariW/4))*1.5 + (biologyC-(biologyW/4))*2 + (chemistryC-(chemistryW/4))*2 + (physicsC-(physicsW/4))*2;
        alert("Toplam Puaniniz : "+ net);


        break;
    case "2":
        alert("Basarili Bir sekilde Cikis Yapilmistir !")

        break;
    
    default :
    alert("Lutfen Dogru bir Secim Yapiniz")

}

// Var - Let - Const

/*
      ------- SCOPE (Kapsam) -------
      -> Global Scope   : her yerden erisebilirsiniz.
      -> Function Scope : tanimladigimiz foksiyon icerisinde erisebiliriz.
      -> Block Scope    :
    
*/

var degiskenIsmi = 10;  //global scope

//console.log(degiskenIsmi);


function method(){
    var b = 9;    // function scope

    console.log(b)
}

method()

console.clear()
/*
-------------------------------------------degisken tanimlama yontemi

var/let/const degiskenIsmi = degiskenDegeri;
let yas = 23;

*/

// var : tanimladigimiz her degisken function scope dur.

function selamVer(){
    var selam = "herkese selam"; // function scope
    if(true){
        var b = 10;  // normal da blok scope ama var ile tanimladigimiz icin function scope
        console.log(b)
    }
    
    console.log(selam)
}

selamVer();

//var a = 5;
//var a = 10;
//console.log(a) var ile ayni degisken isminden birden fazla degisken tanimlanabiliyor 

// if(true){
//     let a = 7;
//     let a = 32;
//     console.log(a)  ayni degisken isminden iki tane verdigimiz icin hata verir.
// }



// let ve const arasinda ki far :

// const (constant) sabit demek  ornek:

// const user = {
//     username : "rahmet nazar",
//     password : "12334"
// }

// console.log(user)



/* ----------------------------------------------- veri tipleri :

1- string
2- number
3- bolean 
4- null
5- undefined 
6- Object
7- function
*/

let isim = "rahmet nazar";  //string
console.log(typeof isim);

let sayi1 = 5 ;  //number
console.log(sayi1);

let a = 5;   // boolean true ve false oldugunu gostermek icin kullanilir
let b = 3.5;

console.log(5>3.5)
console.log(b>a)

let c= null ; // bos
console.log(c)

let d;
console.log(d)



//object

let user = {
    isim : "rahmet",
    soyisim : "nazar",
    yas : 24
}

console.log(user)

// diziler de bir object veri tipidir

let rakamlar = [1,2,3,4,5]
 
console.log(rakamlar);

//function veri tipi

let func = function(){
    console.log('merhaba ben rahmet')
}
func()
console.log(typeof func)



// ----------------------------------------------- Aritmatik Operatorler

/*
   =    -> atama operatoru onemli !
   +    -> toplama operatoru ama string veri tipi icin birlestirme operatoru olarak kullanilir
   -    -> cikarma operatoru
   *    -> carpma islemi
   /    -> bolme operatoru
   %    -> mod alma operatoru
   ++   -> 1 arttirmak icin kullanilir
   --   -> 1 azaltmak icin kullanilir
   **   -> ussu almak icin kullanilir


*/

// ------------------------------------------- atama operatoruleri :

/*
   =    degeri degiskene ata
   ==   sadece degerleri esitleigine bakar
   ===  hem degerlerini hemde tiplerini esitligine bakar
   +=
   -=
   *=
   /*
   %=
   **=
*/

// let age = 24;

// console.log(5==5) 

// let sub1 = 60;
// let sub2 = 70;
// let resault = sub1 + sub2;

// console.log(resault==150);

// console.log(5=="5")

// console.log(5==="5")


let sayi = 4;
sayi = sayi + 2;
sayi += 2

console.log(sayi)



// ---------------------------------------- Mantiksal Operatorler :

/*
     && : ve   true + true + false = false
     || : veya true + true + false = true
     !  : degil zeddini almak icin kullanilir
*/

let theAge = 20;
let money  = 3500;
let health = false;

console.log(theAge>18 && money>3000 && health==true);

console.log(4<9 && 7>5 || 4<2)

console.log( !(5>1) )


// ------------------------------------------------ karsilastirma operaturleri

/*
     !=   -> esit degil
     >    -> buyuktur
     <    -> kucuktur
     >=   -> buyuk esit
     <=   -> kucuk esit
*/


// -------------------------------------------------- Dialog Kutulari

/*
      - Alert
      - Prompt
      - Confirm
*/

// *not kullanici dan alinan degerler hez zaman string olarak gelir.

// alert("merhaba nasilsin brom");

// let isiminiz = prompt("isminizi giriniz");
// let Yasiniz = prompt("Yasinizi girini")


// console.log("isim : " + isiminiz);
// console.log("yas : " + Yasiniz);

//let sonuc = confirm( "silmek istedignize emin misinz")

//console.log(sonuc);


// ----------------------------------------------- Kosul Yapilari


// let not = 40;

// if(not>=50){
//     console.log("Tebrikler Gectiniz , notunuz : " + not)
// }else{
//     console.log("Basarisiz :( " + not)
// }

// ornek vize ortalamasini bulmak
// vize1 %25 + vize2 %30 + vize3 %45

// let vize1 = Number(prompt("vize1 notunuzu giriniz"));
// let vize2 = Number(prompt("vize2 notunuzu giriniz"));
// let final = Number(prompt("final notonuzu giriniz"));

// let avarage = (vize1*(25/100)) + (vize2*(30/100)) + (final*(45/100));

// if (avarage>=60) {
//     alert("Tebrikler Dersten Gectiniz :)")
    
// }else{
//     alert("Gecemediniz , gecmis olsun :(")
// }



// let LuckNO = Number (prompt("Lutfen 1-4 arasi bir numara giriniz :"));

// if (LuckNO===1) {
//     alert("gelecekte cok mutlu ve zengin olacaksin!")
// } 
// else if (LuckNO==2) {
//     alert("gelecekte iyi bir aile babasi olacaksin :)");
// }

// else if (LuckNO==3) {
//     alert("Gelecekte Anne Babanla yasayacaksin :)");
// }

// else if (LuckNO==4) {
//     alert("geleceke dunya turune birlikte gezebilecegin bir es bulacaksin :)");
// }

// else {
//     alert("dogru numarayi gir yoksa gelecekte fakir kalacaksin hahaha")
// }


// ----------------------------------------- coklu if kullanimi


// beden kitle endeksi hesaplama :

// let kilo = Number (prompt("Kilonuzu Giriniz"));
// let boy = Number (prompt("Boyunuzu Giriniz"));

// let resault = kilo/boy**2;

// if(kilo=="") {
//     console("bu alan bos birakilamaz");
// }
// if (boy=="" && boy>=3.5) {
//     console.log("bu alan bos birakalamaz veya dogru bicimde doldurunuz")
// }

// if(resault<18.5) {
//     alert("Ideal Kilonun Altinda"+ resault +"kg/m^2")
// }
// else if(resault>=18.5 && resault<=24.9) {
//     alert("Ideal Kiloda"+ resault +"kg/m^2")
// }
// else if(resault>=25 && resault<=29.9) {
//     alert("Ideal Kilonun Ustunde"+ resault +"kg/m^2")
// }
// else if(resault>=30 && resault<=39.9) {
//     alert("Ideak Kilonun Cok ustunde (obez)"+ resault +"kg/m^2")
// }
// else if(resault>=40) {
//     alert("Ideal Kilonun Cok Cok ustunde (morbid obez"+ resault +"kg/m^2")
// }



// -------------------------Switch (deger)

// let no = prompt("Lutfen 1-5 Arasi Bir Sayi Giriniz");

// switch(no){
//     case "1" :
//         console.log('Girilen Sayi "Bir"');
//     break;
//     case "2" :
//         console.log('Girilen Sayi "iki"');
//     break;
//     case "3" :
//         console.log('Girilen Sayi "Uc"');
//     break;
//     case "4" :
//         console.log('girilen Sayi "Uc"');
//     break;
//     case "4" :
//         console.log('Girilen Sayi "Dort"');
//     break;
//     case "5" :
//         console.log("Girilen Sayi 'Bes'");
//     break;
//     default :
//     console.log("Yanlis sayi giridiniz."+"\r\n"+"lutfen bilirtilen rakamlardan birini giriniz.  ");
//     break;

// }


// ----------------------------------------- Tur Donusumu 

//let x = 5;
//let y = "24";
//let z = Number(y);
//veya
//let y = Number("24")
//console.log(x+y);

// ---------- parseInt()
// let x = 8;
// let y = parseInt("12")
// console.log(x+y);



//   ------------------------ Breakponit ve Tooltip Nedir -----------------------

// tooltip : her hengi bir metodi yazarkan yaninda pop-up pencere de cikan aciklamalara denir.


// breakpoint veya debugger : kodlarimizi hatasini bulmayi kolaylastirmak icin kullanilir 
                          //  her satiri ayri ayri calistirir ve yazildigi satirdan itibaren asagi dogru okumaya baslar

// debugger;
// let x = 30;
// let y = 20;
// let f = x+y;
// let g = f+x+y;
// let k = x+y+f+g;

// let sonucc = x+y+f+g+k;
// console.log("sonuc : "+sonucc)
 

//------------------------------ LOOPS (Donguler)------------------------

/*
      1- For
      2- While
      3- Do-While
      4- ForEach
*/


// calisma mantigi :   for(degisken; kosul; arttirma-azaltma){kodlar}

for(let i = 2; i<10; i++){
    if(i%2==1){
        console.log(i);
    }
    
}

for(let i=1; i<=10 ; i++){
    if(i%2==1){
        console.log("Rahmet "+i)
    }else{
        console.log("Nazar "+i)
    }
}

for(i=50; i>=1; i--){
    console.log(i)
}

// 1 den 50'ye kadar olan sayilarin ardisik toplamini bulmaa:
let total = 0;

for(i=1; i<=50; i++){
    total+=i; //total = total+i
    

}
console.log("Toplam : "+total);


//2- while

// 1 den 10 a kadar

// let sayac = 1;

// while (sayac<=10) {
    
//     console.log(sayac)
//     sayac++;
// }



// 20 ye kadar olan cift sayilari while ile ekrana yazdirmak:

// let sayac = 0;

// while(sayac<=20){
    
//     if(sayac%2==0){
//      console.log(sayac)
//     }
//     sayac++
// }



// let sayac = 1;
// while(true){
//     console.log(sayac);
//     if(sayac==7){
//         break;
//     }
//     sayac++

// }




// ------------------Do While---------------

/*
do{
    kodlar
}while(kosul);

ile 1 den 20'ye kadar olan tek sayilirin toplamini bulma.
*/

let sayac = 1;
let toplam = 0;

do{

if(sayac%2==1){
    toplam+=sayac
}
 sayac++

}while(sayac<=20)
console.log("1 den 20'ye kadar tek sayilrin Toplami : "+toplam);


//------------------------------------ Break And Continue------------------------------------


for(i=1; i<=10; i++){
    console.log(i)
    if (i==8) {
        break;
    }
}


let sayac1 = 1;

while(sayac1<=20){
    console.log(sayac1);
    if(sayac1==13){
        break;
    }
    sayac1++
}

// ? Continue donguyu bir kereye mahsus kirmak:

for(i=1; i<=20; i++){
    if(i>20){
        break;
    }
     if(i==7){
        continue;
     }console.log(i);
    
}



//-------------------------------------Metodlar(Methods---------------------------
/*
        her hengi bir kod blokunu istedigimiz yerde copy&paste yapmadan
         kullanabilmek icin metodlari kullaniriz.
        
         function metodIsmi(Parametra,.......){
            kodlar.......
         }
*/
 //            Parametresiz Metodlar

 //  void : geriye deger dondurmeyen fonksiyon

function yazdir(){
    console.log("Rahamet Nazar")
} // bu bir metoddir ve istedigimiz yerde cagirarak calistirabilriz.

yazdir(); // metodumuzu cagirdik


function sum(){
    a = 5
    b = 8
    console.log(a+b)
}

sum()


//             Parametreli Metodlar

// function userName(name,sureName){
    
//     console.log(name+" "+sureName);
// }

// userName("Rahmet","Nazar");
// userName("Rafiq","Nazar");

// let yas = Number(prompt("yasinizi giriniz "));

// function chekIt(age) {
//     if(yas>=18){
//         alert("Ehliyet Almaya Uygunsunuz")
//     }else{
//         alert("Ehliyet Almazsiniz.")
//     }
    
// }

// chekIt(yas);


//   :  geriye deger donduren metod :

// return : bir metodun degerini baska bir yerde kullanabilmek icin kullnilir ve buna da geriye donduren metod denir




// function cube(number){
//     let resault = number*number*number;
//     return resault; //! resault degiskenini disrida kullanabilmek ve foksiyonu bitirmek icin return kullandik.
// }

// let toFindCube = cube(2);
// console.log(toFindCube)

// function kare(number) {
//     let resault = number*number;
//     console.log(resault);
    
// }

// kare(toFindCube);



//--------------------------------- Diziler [Array]---------------------------
// bir den fazla verileri tek cati altinda tutmak icin kullanilir.

// let dizi = ['rahmet',21,true,null];
// console.log(typeof dizi)

// FOREACH dongusu

let names = ["rahmet","nimat","rafiq","zehra"];
names[1] = 20
console.log(names);

names.forEach(function(isim){
    console.log(isim)
});

console.log("deneme")

let Arry = [
    [3,5,8,3,8,5],
    [2,876,0,2,45634,8764],
    [534,76,24,7]
]
for (i=0 ; i<Arry.length ; i++){
    for (j=0 ; j<Arry[i].length ; j++)
       console.log(Arry[i][j])
}
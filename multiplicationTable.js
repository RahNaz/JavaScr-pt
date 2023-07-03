// Carpim Tablosu

//? for(i=1; i<=10; i++){
//?    for(j=1; j<=10; j++){
//?         console.log(i+" x "+j+" = "+(i*j));
//?     }
//? console.log("------------")
//? }


// Asal Sayi Bulmak:


//! let sayi = Number([prompt("Lutfen Bir Sayi Giriniz : ")]);
//! let resault = true;

//! for(i=2; i>= Math.floor(sayi/2); i++){
//!     if(sayi%i==0){
//!         resault = false;
//!         break;

//!     }
//! }

//! if(resault=true){
//!     alert(sayi+" Sayisi Asal Bir Sayidir.");
//! }else{
//!     alert(sayi+" Sayisi Asal Bir Sayi Degildir.")
//! }







// 1 den 1000 kadar olan asal sayilr ve adedi:



// for (i = 2; i <= 1000; i++) {

//     let isPrime = true;

//     for (j = 3; j<i; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime == true) {
//         console.log(i);
//     }
// }



/*
Faktoriyel Hesaplama
*/

// let multipal = 1;
// let factorial = Number(prompt("Lutfen Faktorialini Almak Istediginiz Sayiyi Giriniz : "))
// for(i=factorial; i>=1; i--){
//     multipal = multipal*i;
// }


// //? Armstrong sayi ornek : 153 = 1*1*1 + 5*5*5 + 3*3*3

// let armStrong = prompt('Lutfen Sayinizi armStrong olup olmadigini kontrol etmek icin giriniz :');
// let total = 0;

// for(i = 0; i<armStrong.length; i++){
//     let rakam = armStrong.charAt(i);
//     total+= rakam*rakam*rakam;

// }

// if(Number(armStrong==total)){
//     alert("Bir Armstrong Sayisidir : "+total)
// }else{
//     alert("Bir Armstrong Sayisi Degildir.")
// }






//mukemmel sayi Bulma : sayini tam bolenlerinin toplam o sayinin 2 katina esitse bu sayiya mukemmel sayi denir.
// 6 = 1 ,2 ,3,6 = 12     28 = 1,2,4,7,14,28 = 56

function perfectNumber(numbers) {
    let total1 = 0;
    for (let i = 2; i <= numbers/2; i++) {
        if(numbers%i==0){
            total1+=i;
        }
        
    }

    total1+=1+numbers;

    if(total1==numbers*2){
        alert("it is perfect number");
    }else{
        alert("its not a perfect number")
    }

}

perfectNumber(114)


//Decimel To Binary 


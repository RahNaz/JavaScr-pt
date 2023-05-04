// Benzin Istasiyonu

/*
    1-Dizel  : 24.53
    2-Benzin : 22.25
    3-LPG    : 11.1


    Gelen Musteriden Alacagimiz Bilgiler:
    1-Yakit Tipi
    2-Yuklenecek yakit litresi
  
*/


let dizel = 24.53 , Benzin = 22.25 , LPG = 11.1;
const enter = "\r\n";

let fuelType = Number (prompt("Lutfen yakit tipini rakam olarak seciniz :"+ enter +"1:Dizel"+ enter +"2:Benzin"+ enter +"3:LPG"));



if(fuelType===1){
    let litre = Number(prompt("dizeli sectiniz ."+enter+"Lutfen litre miktarini giriniz:"));
    let price1 = Number(prompt("islemi tutari : "+dizel*litre+"TL"+enter+"tutari giriniz"))
    let price = dizel*litre;

    if(price===price1){
        console.log("tebrikler islem basarili")
    }

    else if(price1>price){
        console.log("Tebrikler isleminiz basarili"+enter+"Iade tutariniz : "+ (price1-price)+"TL")
    }

    else if(price1<price){
        console.log("Bakiyeniz Yetersiz")
    }


    else {
        console.log("Bakiyeniz Yetersiz")
    }
}



else if(fuelType===2){
    let litre = Number(prompt("benzini sectiniz ."+enter+"Lutfen litre miktarini giriniz:"));
    let price1 = Number(prompt("islemi tutari : "+Benzin*litre+"TL"+enter+"tutari giriniz"))
    let price = Benzin*litre;
    if(price===price1){
        console.log("tebrikler islem basarili")
    }
    else if(price1>price){
        console.log("Tebrikler isleminiz basarili"+enter+"Iade tutariniz : "+ (price1-price)+"TL")
    }

    else if(price1<price){
        console.log("Bakiyeniz Yetersiz")
    }

    else{
        console.error("hatali giris")
    }
}




else if(fuelType===3){
    let litre = Number(prompt("LPG'yi sectiniz ."+enter+"Lutfen litre miktarini giriniz:"));
    let price1 = Number(prompt("islemi tutari : "+LPG*litre+"TL"+enter+"tutari giriniz"))
    let price = LPG*litre;

    if(price===price1){
        console.log("tebrikler islem basarili")
    }

    else if(price1>price){
        console.log("Tebrikler isleminiz basarili"+enter+"Iade tutariniz : "+ (price1-price)+"TL")
    }

    else if(price1<price){
        console.log("Bakiyeniz Yetersiz")
    }

    else{
        console.error("hatali giris")
    }
}




else{
    console.warn("lutfen seciminizi dogru yapiniz.")
    
}

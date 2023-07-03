// herf sayisi bulma uygulamasi

let thText = "merhaba ben javascript ogrenmekteyim. evalallah elbet bunu basaracagim."
let toFind = prompt("Lutfen Bulmak Istediginiz Harfi Giriniz :");

let resault1 = find(toFind);
alert(resault1)

function find(letter){
    let total = 0;

    for(i=0; i<thText.length; i++){
        if(thText.charAt(i).toLocaleLowerCase()==toFind.toLocaleLowerCase()){
            total+=1;
        }
    }
    return total;
};

console.log("testing")




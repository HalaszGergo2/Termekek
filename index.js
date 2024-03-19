import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat() {
let txt = "<table>";
    for (let i = 0; i < GYUMOLCSOK.length; i++) {
        txt += `
        <tr>
            <td>${GYUMOLCSOK[i].nev}</td>
            <td>${GYUMOLCSOK[i].tomeg}</td>
            <td>${GYUMOLCSOK[i].ar}</td>
        </tr>`
    }
    txt += "</table>"
    return txt;
}

const tablazatELEM = document.getElementById("feladat_1")
tablazatELEM.innerHTML += letrehozTablazat(GYUMOLCSOK)

// 2. feladat
function osszesit() {
    let osszTomeg = 0
    let osszAr = 0
    let txt = ""
    for (let i = 0; i < GYUMOLCSOK.length; i++) {
        osszTomeg += GYUMOLCSOK[i].tomeg
        osszAr += GYUMOLCSOK[i].ar
    }
    txt += "A gyümölcsök súlya összesen: "+osszTomeg+"g<br>"
    txt += "A gyümölcsök ára összesen:"+osszAr+"Ft"
    return txt 
}

const osszesitoELEM = document.getElementById("feladat_2")
osszesitoELEM.innerHTML += osszesit(GYUMOLCSOK)

// 3. feladat
function vasarol() {
    let gyumolcsELEMEK = document.querySelectorAll("#feladat_1 tr")
    console.log(gyumolcsELEMEK)
    for (let index = 0; index < gyumolcsELEMEK.length; index++) {
        gyumolcsELEMEK[index].addEventListener("click", function(){
            berakottELEMEK.innerHTML += `<tr>
            <td>${GYUMOLCSOK[index].nev}</td>
        </tr>`
        })
        
    }
    let berakottELEMEK = document.querySelectorAll("#feladat_3")[0]
}
vasarol()

// 4. feladat
function torolEsemeny() {

}


const telebeler = [
{
    fin: "7AA56TR",
    soyad: "Əsgərov",
    ad: "Tahir",
    tevellud: 2000,
    telebedirmi: true,
    yasHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }

    
},

{
    fin: "54HY897",
    soyad: "İsmayılov",
    ad: "Murad",
    tevellud: 2008,
    telebedirmi: false,
    yasHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},

{
    fin: "KL54FR2",
    soyad: "Mahmudova",
    ad: "Günay",
    tevellud: 2001,
    telebedirmi: true,
    yasHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},

{
    fin: "0TSET5N",
    soyad: "Şamilov",
    ad: "İsrafil",
    tevellud: 1993,
    telebedirmi: false,
    yasHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},

{
    fin: "955FG45",
    soyad: "Qurbanov",
    ad: "Salman",
    tevellud: 2001,
    telebedirmi: true,
    yasHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
}

]

for(let i=0; i< telebeler.length; i++) {
    document.querySelector("tbody").innerHTML += `<tr>
    <th scope="row">${telebeler[i].fin}</th>
    <td>${telebeler[i].soyad}</td>
    <td>${telebeler[i].ad}</td>
    <td>${telebeler[i].tevellud}</td>
    <td>${telebeler[i].telebedirmi ? "Telebedir" : "Mezundur"}</td>
    <td>${telebeler[i].yasHesabla()}</td>
    <td> <i class="bi bi-pencil-square"></i> </td>
    <td> <i class="bi bi-trash"></i> </td>
    </tr>`
}

// let yash = 13
// if(yash < 13) {
//     alert("Imtahana buraxila bilmez!")
// }

// // // else if(yash == 13) {
// // //     alert("Imtahana buraxilsin!")
// // }

// else {
//     alert("Bakalavriat seviyyesi ucun uygundur!")
// }


// ternary operator  (Qısa yazılış forması)
// yash < 13 ? alert("imtahana buraxilmir") : alert("Buraxilir")


// Requlyar funksiya (yəni adi funksiya)
// function hesabla(eded1, eded2) {
//     return eded1 + eded2
// }
// // DRY (Dont Repeat Yourself) - Yəni: Özün təkrarlama
// console.log(hesabla(34, 44))
// console.log(hesabla(22, 25))
// console.log(hesabla(10, 20))

// Arrow funksiya (yəni Ox funksiya) - 2015 - ci ildə gələn funksiyadır. Oxa bənzədiyinə görə ox funksiya deyirik.
// Bir sətirlik kodlar üçün nəzərdə tutulub.
// (Fiqurlu mötərizə olmayan yerdə return yazmaq olmaz.)
const oxFunksiya = (eded1, eded2) => eded1 + eded2

console.log(oxFunksiya(65, 54))

/*İntervyuda soruşulan sual:
 Funksiyanın hansı növü var?
 1. Requlyar funksiya (adi funksiya)
 2. Arrow funksiya (ox funksiya)
 3. IIFE (Immediately Invoked Function Expression) Anında özünü çağıran funksiya
 
 məsələn: */
(function() {
    console.log("Hello")
}())
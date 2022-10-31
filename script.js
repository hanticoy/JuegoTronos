let mylbname = document.querySelector("#lbname")
let mylbwords = document.querySelector("#lbwords")
let mylbtitles = document.querySelector("#lbtitles")

let mystark = document.querySelector("#stark")
mystark.addEventListener('click', function () { consultarApi (mylbname,mylbwords,mylbtitles, 362)} , false);

let mytargaryen = document.querySelector("#targaryen")
mytargaryen.addEventListener('click', function () { consultarApi (mylbname,mylbwords,mylbtitles, 378)} , false);

let mylannister = document.querySelector("#lannister")
mylannister.addEventListener('click', function () { consultarApi (mylbname,mylbwords,mylbtitles, 229)} , false);

let mybaratheon = document.querySelector("#baratheon")
mybaratheon.addEventListener('click', function () { consultarApi (mylbname,mylbwords,mylbtitles, 17)} , false);



function consultarApi(objName,objWords,objTitles, id) {
    
    $.get("https://anapioficeandfire.com/api/characters/" +id, 
            function (data) {

                console.log(data);
                objName.innerHTML = data['name'] 
                objWords.innerHTML = data['gender'] + ' / born ' + data['born'] 

                let books = data['books']
                let strLibros = "Ha participado en todas estas SAGAS:"
                for (x=0; x < books.length; x++){
                    strLibros   = strLibros + ' / ' + books[x]
                }
                objTitles.innerHTML  =strLibros; 
                  
            }
    )
}

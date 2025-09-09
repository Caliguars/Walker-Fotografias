valor = 0;
valor2 = 0;
valor3 = 0;
valor4 = 0;
valor5 = 0;
valor6 = 0;
valor7 = 0;


function aumentar1(){
    valor++;
    mostrarTotal();
}

function aumentar2(){
    valor2++;
    mostrarTotal();
}

function aumentar3(){
    valor3++;
    mostrarTotal();
}

function aumentar4(){
    valor4++;
    mostrarTotal();
}

function aumentar5(){
    valor5++;
    mostrarTotal();
}

function aumentar6(){
    valor6++;
    mostrarTotal();
}

function aumentar7(){
    valor7++;
    mostrarTotal();
}

function mostrarTotal(){
    total = valor*200 + valor2*150 + valor3*300 + valor4*800 + valor5*450 + valor6*550 + valor7*750;
    document.getElementById("quantiitens").innerHTML = valor+valor2+valor3+valor4+valor5+valor6+valor7;
    document.getElementById("valor").innerHTML = total;
}

function pesquisa(){
    let input = document.getElementById("barradepesquisa").value
    input = input.toLowerCase()
    let books = document.getElementsByClassName("card")
    for(i = 0; i < books.length; i++){
        if(!books[i].innerHTML.toLowerCase().includes(input)){
            books[i].style.display = "none"
        }else{
            books[i].style.display =  "list-item"
        }
    }

    
}

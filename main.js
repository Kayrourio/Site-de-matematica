var multiplicacao_abrir = document.querySelector(".multiplicacao");
var divisao_abrir = document.querySelector(".divisao");
var adicao_abrir = document.querySelector(".adicao");
var subtracao_abrir = document.querySelector(".subtracao");
var notacao_abrir = document.querySelector(".notacaoCientifica");

var entendendo_o_site = document.querySelector(".explicacao")
var explicacao_dasM = document.querySelector(".explicacao_das_materias")
var exercicios = document.querySelector(".exercicios")

multiplicacao_abrir.addEventListener("click", ir_pag_exer, aba_mul);
divisao_abrir.addEventListener("click", ir_pag_exer, aba_div);
adicao_abrir.addEventListener("click", ir_pag_exer, aba_adi);
subtracao_abrir.addEventListener("click", ir_pag_exer, aba_sub);
notacao_abrir.addEventListener("click", ir_pag_exer, aba_not);


entendendo_o_site.textContent = "Esse site foi criado por alunos para ajudar outros alunos. Seu principal objetivo é explicar uma matéria de matemática e entregar exercícios para os alunos aprenderem, pois, sabemos como é dificil para alguns criarem exercicios. Aqui temos diversas matérias de matemática, apenas escolher uma e você aprenderá o que fazer.                                         "

function ir_pag_exer(){
    console.log("abriu");
    window.location.href = "pagina_de_exercicios.html";
}


function aba_mul(){
    console.log("abriu");
    window.location.href = "pagina_de_exercicios.html";
    explicacao_dasM.textContent = "mul";
}
function aba_div(){
    explicacao_dasM.textContent = "div";
}
function aba_adi(){
    explicacao_dasM.textContent = "adi";
}
function aba_sub(){
    explicacao_dasM.textContent = "sub";
}
function aba_not(){
    explicacao_dasM.textContent = "not";
}

const questions = document.querySelectorAll('.question'); /*Seleciona todos os objetos com a classe 'question' */
const qt = document.querySelectorAll('.qt'); /*Seleciona todos os objetos com a classe 'question' */

questions.forEach(question => { /*Irá executar o código em cada elemento que possue a classe 'question'*/
    const questionNumber = question.getAttribute('data-question'); /*Para cada elemento com a classe 'question' iremos pegar o valor de atributo do 'data-question' e armazenar na constante 'questionNumber'*/ 
    const answer = document.querySelector(`.answer[data-answer="${questionNumber}"]`); /* Irá procurar em todos os elementos do documento que possui a classe 'answer' e a 'data-answer' que corresponde a 'questionNumber' e irá armazenas na constante 'answer'*/
    const symbol = question.querySelector('.symbol'); /*Irá selecionar o elemento com classe 'symbol' e armazenar na constante 'symbol'*/
    const qt = question.querySelector('.qt'); /*Irá selecionar o elemento com classe 'qt' e armazenar na constante 'qt'*/

    function toggleAnswer() { /*criar alternância, caso não tenha a classe 'active' nos elementos com classe 'answer' e 'symbol' ele adiciona, se já possuir, ele retira*/
        answer.classList.toggle('active');
        symbol.classList.toggle('active');
        qt.classList.toggle('active');
        
    }

    question.addEventListener('click', toggleAnswer); /*Chama a função 'toggleAnswer' ao clicar no elemento que possui a classe 'question'*/
    symbol.addEventListener('click', toggleAnswer);/*Chama a função 'toggleAnswer' ao clicar no elemento que possui a classe 'symbol'*/
});
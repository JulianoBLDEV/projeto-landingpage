const q1 = document.getElementById('q1');
const s1 = document.getElementById('s1');

function toggleanswer1(){
    const a1 = document.getElementById('a1');
    a1.classList.toggle('active');
    s1.classList.toggle('active');

}
q1.addEventListener('click', toggleanswer1);
s1.addEventListener('click', toggleanswer1);
/*-----------------------------------------------------*/
const q2 = document.getElementById('q2');
const s2 = document.getElementById('s2');

function toggleanswer2(){
    const a2 = document.getElementById('a2');
    a2.classList.toggle('active');
    s2.classList.toggle('active');
}
q2.addEventListener('click', toggleanswer2);
s2.addEventListener('click', toggleanswer2);
/*-----------------------------------------------------*/
const q3 = document.getElementById('q3');
const s3 = document.getElementById('s3');

function toggleanswer3(){
    const a3 = document.getElementById('a3');
    a3.classList.toggle('active');
    s3.classList.toggle('active');
}
q3.addEventListener('click', toggleanswer3);
s3.addEventListener('click', toggleanswer3);
/*-----------------------------------------------------*/
const q4 = document.getElementById('q4');
const s4 = document.getElementById('s4');

function toggleanswer4(){
    const a4 = document.getElementById('a4');
    a4.classList.toggle('active');
    s4.classList.toggle('active');
}
q4.addEventListener('click', toggleanswer4);
s4.addEventListener('click', toggleanswer4);
/*-----------------------------------------------------*/
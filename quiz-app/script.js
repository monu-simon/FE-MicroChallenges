const quizData = [{
        question: 'The population census in India is conducted after every',
        a: '5 years',
        b: '10 years',
        c: '12 years',
        d: '15years',
        answer: 'b'
    },
    {
        question: 'Which city is know as the diamond city of India',
        a: 'Ahamedabad',
        b: 'Chandigarh',
        c: 'Hyderabad',
        d: 'Surat',
        answer: 'd'
    },
    {
        question: 'What is the target year to achieve clean, affordable energy for all, as per the ‘UN Energy Plan of Action’?',
        a: '2025',
        b: '2030',
        c: '2040',
        d: '2050',
        answer: 'b'
    },
    {
        question: 'For which of the following disciplines is Nobel Prize awarded?’?',
        a: 'Physics and Chemistry',
        b: 'Physiology or Medicine',
        c: 'Literature, Peace and Economics',
        d: 'All of the above',
        answer: 'd'
    },
    {
        question: 'Coral reefs in India can be found in?',
        a: 'the coast of Orissa',
        b: 'Waltair',
        c: 'Rameshwaram',
        d: 'Trivandrum',
        answer: 'c'
    },
    {
        question: 'G-15 is an economic grouping of',
        a: 'First World Nations',
        b: 'Second World Nations',
        c: 'Third World Nations',
        d: 'Fourth World Nations',
        answer: 'c'
    },
    {
        question: 'Fathometer is used to measu',
        a: 'Earthquakes',
        b: 'Rainfall',
        c: 'Ocean depth',
        d: 'Sound intensity',
        answer: 'c'
    }
]
let currentQuestion;

function setQuestions(input) {

    if (!currentQuestion) currentQuestion = 0;
    else currentQuestion = input
    const question = document.getElementById('question');
    const optiona = document.getElementById('alabel');
    const optionb = document.getElementById('blabel');
    const optionc = document.getElementById('clabel');
    const optiond = document.getElementById('dlabel');
    const button = document.getElementById('button');


    question.innerHTML = quizData[currentQuestion].question;
    optiona.innerHTML = quizData[currentQuestion].a;
    optionb.innerHTML = quizData[currentQuestion].b;
    optionc.innerHTML = quizData[currentQuestion].c;
    optiond.innerHTML = quizData[currentQuestion].d;
}
setQuestions();

button.addEventListener('click', () => {
    const p = document.querySelector('p');
    var checkRadio = document.querySelector('input[name="answer"]:checked');
    if (currentQuestion < quizData.length) {
        console.log(checkRadio.id)
        if (checkRadio.id === quizData[currentQuestion].answer) {
            p.innerHTML = ''
            currentQuestion++;
            setQuestions(currentQuestion)
        } else {
            p.innerHTML = 'Wrong answer'
        }
    } else {
        p.style.color = 'green'
        p.innerHTML = 'Quiz Ended'
    }
})
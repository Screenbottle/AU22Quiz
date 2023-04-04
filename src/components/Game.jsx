import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const Game = (props) => {

    const questions = getQuestions();

    //const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    let currentQuestion = 1;

    let navigate = useNavigate();
    const params = useParams();

    if ('currentquestion' in params) {
        if (params.currentquestion > 0 && params.currentquestion <= questions.length) {
            currentQuestion = Number(params.currentquestion);
        }
    }

    let question = questions[currentQuestion - 1];

    const handleAnswer = () => {
        if(selectedAnswer === question.correct) {
            console.log("Rätt!");
            props.answeredCorrectly();
            
        }

        if (currentQuestion < questions.length) {
            navigate('/game/' + (currentQuestion + 1));
        }
        else {
            navigate('/result');
        }
    }

    const options = question.answers.map((answer, index) => 
        <p className="option" key={index}>
            <label>
                <input type="radio" name="question "onClick={() => setSelectedAnswer(index)}/> {answer}
            </label>
        </p>
    );

    return (
        <section>
            <h3>{question.question}</h3>
            {options}
            <button onClick={handleAnswer}>Answer</button>
        </section>
    );
}

const getQuestions = () => {
    return [
        {
            question: 'När är Julafton?',
            answers: [
                '24 maj',
                '24 december',
                '3 maj'
            ],
            correct: 1,
        },
        {
            question: 'Vilka är sista datum för inlämningsuppgiften?',
            answers: [
                '24 maj',
                '24 december',
                '14 april'
            ],
            correct: 2,
        },
        {
            question: 'Vad är bäst?',
            answers: [
                'Teams',
                'Discord',
                'Zoom'
            ],
            correct: 2,
        },
        {
            question: 'Vilket är bäst?',
            answers: [
                'MacOS',
                'Windows',
                'Linux'
            ],
            correct: 0,
        },
    ]
}

export default Game;
import React, { useState } from 'react'
import './Quiz.css'

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'Асмандын оңү кандай?',
      answerOptions: [
        { answerText: 'көк', isCorrect: true },
        { answerText: 'жашыл', isCorrect: false },
        { answerText: 'кызыл', isCorrect: false },
      ],
    },
    {
      questionText: 'Бир жумада канча күн бар?',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'Ит кандай үн чыгарат?',
      answerOptions: [
        { answerText: 'Мяу', isCorrect: false },
        { answerText: 'Кря', isCorrect: false },
        { answerText: 'Гав', isCorrect: true },
      ],
    },
    {
      questionText: 'Кыргыз тилинде канча тамга бар?',
      answerOptions: [
        { answerText: '26', isCorrect: false },
        { answerText: '30', isCorrect: true },
        { answerText: '33', isCorrect: false },
      ],
    },
  ];

  const Click = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = current + 1;
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart= () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Натыйжалар</h2>
          <p>сиз {questions.length}төн {score} тура жооп алдыңыз</p>
          <button className='sad' onClick={restart}>Пройти тест заново</button>
        </div>
      ) : (
        <div>
          <h2>Тест</h2>
          <div>
            <p>
              {questions.length} суроонун {current + 1}:
            </p>
            <p>{questions[current].questionText}</p>
            <div className='cont'>
              {questions[current].answerOptions.map((answerOption, index) => (
                <button className='dt' key={index} onClick={() => Click(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz
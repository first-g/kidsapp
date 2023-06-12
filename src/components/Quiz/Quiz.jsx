import React, { useState } from 'react'
import './Quiz.css'
import { Link } from "react-router-dom";
import { RightCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

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

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='quiz'>
      <div className="container">
        <div className="quiz__body">
          <div className="arrow">
            <Link to={"/kidsapp"}>
              <CloseCircleOutlined />
            </Link>
            <Link to={"/kidsapp/quiz"}>
              <RightCircleOutlined />
            </Link>
          </div>
          <div className="quiz__main">
          {showScore ? (
            <div className='quiz__res'>
              <p>сиз {questions.length}төн {score} тура жооп алдыңыз</p>
              <button className='sad' onClick={restart}>Пройти тест заново</button>
            </div>
          ) : (
            <div className='quiz__content'>
              <p className='quiz__count'>
                {questions.length} суроонун {current + 1}:
              </p>
              <p className='quiz__text'>{questions[current].questionText}</p>
              <div className='quiz__answers'>
                {questions[current].answerOptions.map((answerOption, index) => (
                  <button className='dt' key={index} onClick={() => Click(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz
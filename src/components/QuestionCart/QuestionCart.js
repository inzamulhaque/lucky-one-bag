import React from 'react';
import "./QuestionCart.css";

const QuestionCart = ({ quetion }) => {
    const { question, answer } = quetion;
    return (
        <div className='questionCart'>
            <div className="questionInfo">
                <h2>{question}</h2>
                <p>{answer.frist}</p>
                <br />
                <p>{answer?.second}</p>
            </div>
        </div>
    );
};

export default QuestionCart;
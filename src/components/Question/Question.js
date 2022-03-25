import React, { useEffect, useState } from 'react';
import QuestionCart from '../QuestionCart/QuestionCart';
import "./Question.css"

const Question = () => {
    const [question, SetQuestion] = useState([]);
    useEffect(() => {
        fetch("question.json")
            .then(res => res.json())
            .then(data => SetQuestion(data));
    }, []);

    return (
        <>
            <h1 className="title">Question</h1>
            <div className='question'>
                <div className="showQuestion">
                    {
                        question.map(quetion => <QuestionCart key={quetion.id} quetion={quetion} />)
                    }
                </div>
                <div className="whiteSpaceForCart">

                </div>
            </div>
        </>
    );
};

export default Question;
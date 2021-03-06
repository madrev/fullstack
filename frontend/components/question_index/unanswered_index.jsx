import React from 'react';
import Link from 'react-router';

const UnansweredIndex = ({questions, openModal}) => (
  <div className='unanswered-index'>
    <h2>New Questions</h2>
    <h3>Be first to answer</h3>
    <ul>
      { questions.slice(0,6).map( question =>
          <li key={question.id}>
            <a onClick={openModal(question)}>{question.title}</a>
          </li>
      )}
    </ul>
  </div>
);

export default UnansweredIndex;

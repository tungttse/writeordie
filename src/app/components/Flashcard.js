import React from 'react';

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div onClick={toggleShowAnswer} style={{ cursor: 'pointer' }}>
      <h2>Question:</h2>
      <p>{question}</p>
      {showAnswer && (
        <>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </>
      )}
    </div>
  );
};

export default Flashcard;
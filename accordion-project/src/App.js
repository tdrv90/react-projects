import { useState } from 'react'
import data from './mockdata'
import './index.css';
import Question from './components/Question';

function App() {
  const [questions, setQuestions] = useState(data)


  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

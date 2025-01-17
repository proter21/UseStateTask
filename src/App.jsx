import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState("start"); // Текуща стъпка: "start", "question", "end"
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Индекс на текущия въпрос

  const questions = [
    {
      text: "Кое от изброените най-добре описва React?",
      answers: [
        "Библиотека за управление на бази данни",
        "Библиотека за изграждане на потребителски интерфейси",
        "CSS Framework",
      ],
      correctAnswer: 1, // Индексът на правилния отговор
    },
    {
      text: "Какво представлява useState в React?",
      answers: [
        "Метод за създаване на класови компоненти",
        "Hook за управление на състояния в функционални компоненти",
        "Функция за изпълнение на странични ефекти",
      ],
      correctAnswer: 1,
    },
    {
      text: "Какво е Virtual DOM в React?",
      answers: [
        "API за манипулиране на DOM елементи",
        "Лека репрезентация на реалния DOM, използвана за оптимизация",
        "Функция за рендиране на сървърна страна",
      ],
      correctAnswer: 1,
    },
    {
      text: "Каква е основната разлика между класовите и функционалните компоненти в React?",
      answers: [
        "Функционалните компоненти могат да имат състояние, а класовите – не",
        "Класовите компоненти могат да имат състояние, а функционалните – не",
        "Класовите компоненти са по-бързи от функционалните",
      ],
      correctAnswer: 1,
    },
  ];

  const startQuiz = () => {
    setStep("question");
    setCurrentQuestionIndex(0);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep("end");
    }
  };

  const restartQuiz = () => {
    setStep("start");
    setCurrentQuestionIndex(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {step === "start" && (
        <div>
          <h1>Добре дошли в логическия тест!</h1>
          <button
            onClick={startQuiz}
            style={{
              fontSize: "16px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Започни теста
          </button>
        </div>
      )}

      {step === "question" && (
        <div>
          <h2>Въпрос {currentQuestionIndex + 1}:</h2>
          <p>{questions[currentQuestionIndex].text}</p>
          <div>
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={nextQuestion}
                style={{
                  fontSize: "16px",
                  padding: "10px 20px",
                  margin: "5px",
                  cursor: "pointer",
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "end" && (
        <div>
          <h1>Тестът е завършен!</h1>
          <button
            onClick={restartQuiz}
            style={{
              fontSize: "16px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Започни отначало
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

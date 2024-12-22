import { useRef } from "react";

import WORDS, { TOPICS } from "../Words/Words";
import Topic from "../Topic/Topic";

import "./Topics.css";

const Topics = () => {

  const dictionary = useRef(null);
  const lesson = useRef(null);

  const numberOfTopics = 6;
  const topics = [];
  const differentTasks = 3;
  let currentTopic = 0;

  let correctTasks = 0;

  for (let i = 0; i < numberOfTopics; i++) {
    let topic = new Topic(i, WORDS);
    topics.push(topic);
    console.log(1004, topics);
  }

  function endLesson(div) {
    console.log('end of the lesson');
    div.innerHTML = '';
    const finishDiv = document.createElement('div');
    finishDiv.innerHTML = `Урок пройден!\nПравильных ответов: ${correctTasks}/10`;
    finishDiv.classList.add('finishElement');
    
    const button = document.createElement('button');
    button.classList.add('finishButton');
    button.innerHTML = 'Продолжить';
    button.addEventListener('click', () => {
      div.innerHTML = '';
      div.classList.remove('fullscreen');
    })
    finishDiv.appendChild(button);
    div.appendChild(finishDiv);

  }

  function nextTask(tasks, div) {
    console.log('task start', tasks);
    div.innerHTML = '';

    const exitButton = document.createElement('button');
    exitButton.innerHTML = 'Назад';
    exitButton.classList.add('exitButton');
    exitButton.addEventListener('click', () => {
      div.innerHTML = '';
      div.classList.remove('fullscreen');
    })
    div.appendChild(exitButton);

    if (!tasks.length) {
      endLesson(div);
    }
    else {
      const task = tasks.shift();
      switch (task.type) {
        case 1: {
          const theTask = document.createElement('div');
          theTask.classList.add('taskElement');
          theTask.innerHTML = 'Переведите предложение: ';

          let part1Task, wordTask, part2Task, part1Translate, wordTranslate, part2Translate;
          const language = Math.floor(Math.random() * 2 - 0.000001);
          const sentence = task.word.sentences[task.sentence];
          if (language === 0) {
            part1Task = sentence.part1Russian;
            wordTask = sentence.word.RussianWord;
            part2Task = sentence.part2Russian;
            part1Translate = sentence.part1English;
            wordTranslate = sentence.word.EnglishWord;
            part2Translate = sentence.part2English;
          }
          else {
            part1Translate = sentence.part1Russian;
            wordTranslate = sentence.word.RussianWord;
            part2Translate = sentence.part2Russian;
            part1Task = sentence.part1English;
            wordTask = sentence.word.EnglishWord;
            part2Task = sentence.part2English;
          }

          const translateSentence = document.createElement('div');
          translateSentence.classList.add('taskElement');
          translateSentence.innerHTML = part1Translate + wordTranslate + part2Translate;

          const taskSentence = document.createElement('div');
          taskSentence.classList.add('taskElement');
          taskSentence.innerHTML = part1Task + '...' + part2Task;

          const input = document.createElement('input');
          input.classList.add('taskElement');
          input.placeholder = 'Введите перевод';

          const continueText = document.createElement('div');
          continueText.classList.add('taskElement');

          const continueButton = document.createElement('button');
          continueButton.classList.add('taskElement');
          continueButton.innerHTML = 'Проверить';

          continueButton.addEventListener('click', () => {
            if (input.value.toLocaleLowerCase() === wordTask.toLocaleLowerCase()) {
              continueText.innerHTML = 'Правильно!';
              correctTasks++;
            }
            else {
              continueText.innerHTML = `Неправильно! Перевод: ${part1Task + wordTask + part2Task}`;
            }
            continueButton.innerHTML = 'Продолжить';
            continueButton.addEventListener('click', () => {
              console.log('next task from previous');
              nextTask(tasks, div);
            });
          });

          div.appendChild(theTask);
          div.appendChild(translateSentence);
          div.appendChild(taskSentence);
          div.appendChild(input);
          div.appendChild(continueText);
          div.appendChild(continueButton);

          break;
        }

        case 2: {
          console.log('task type 2');

          const theTask = document.createElement('div');
          theTask.classList.add('taskElement');
          theTask.innerHTML = 'Сопоставьте слова с переводом:';

          const button1top = document.createElement('button');
          const button2top = document.createElement('button');
          const button3top = document.createElement('button');
          const button1bottom = document.createElement('button');
          const button2bottom = document.createElement('button');
          const button3bottom = document.createElement('button');

          const buttons = [];
          buttons.push(button1top);
          buttons.push(button1bottom);
          buttons.push(button2top);
          buttons.push(button2bottom);
          buttons.push(button3top);
          buttons.push(button3bottom);

          const topic2Words = topics[currentTopic].getWords(3);

          button1top.innerHTML = topic2Words[0].EnglishWord;
          button2top.innerHTML = topic2Words[1].EnglishWord;
          button3top.innerHTML = topic2Words[2].EnglishWord;

          const correctOrder = [{
            first: 0,
            second: 0,
          }, {
            first: 1,
            second: 0,
          }, {
            first: 2,
            second: 0,
          }];

          const bottomButtonsOrder = [0, 1, 2];
          let number1 = Math.trunc(Math.random() * 3 - 0.0000001);
          button1bottom.innerHTML = topic2Words[bottomButtonsOrder[number1]].RussianWord;
          correctOrder[bottomButtonsOrder[number1]].second = 0;
          bottomButtonsOrder.splice(number1, 1);

          let number2 = Math.trunc(Math.random() * 2 - 0.0000001);
          button2bottom.innerHTML = topic2Words[bottomButtonsOrder[number2]].RussianWord;
          correctOrder[bottomButtonsOrder[number2]].second = 1;
          bottomButtonsOrder.splice(number2, 1);

          button3bottom.innerHTML = topic2Words[bottomButtonsOrder[0]].RussianWord;
          correctOrder[bottomButtonsOrder[0]].second = 2;
          console.log("Buttons order", correctOrder);
          console.log(correctOrder);

          const enteredOrder = [];

          buttons.forEach(button => {
            button.classList.add('matchWordsButton');
            button.addEventListener('click', () => {
              button.classList.remove('mamatchWordsButton');
              button.classList.add('matchWordsButtonPressed');
            })
          })

          button1top.addEventListener('click', () => {
            enteredOrder.push(0);
          })
          button2top.addEventListener('click', () => {
            enteredOrder.push(1);
          })
          button3top.addEventListener('click', () => {
            enteredOrder.push(2);
          })
          button1bottom.addEventListener('click', () => {
            enteredOrder.push(0);
          })
          button2bottom.addEventListener('click', () => {
            enteredOrder.push(1);
          })
          button3bottom.addEventListener('click', () => {
            enteredOrder.push(2);
          })

          const continueButton = document.createElement('button');
          continueButton.classList.add('taskElement');
          continueButton.innerHTML = 'Проверить';
          continueButton.addEventListener('click', () => {
            console.log(enteredOrder);
            if (enteredOrder.length === 6) {
              if (correctOrder[enteredOrder[0]].second === enteredOrder[1] &&
                correctOrder[enteredOrder[2]].second === enteredOrder[3] &&
                correctOrder[enteredOrder[4]].second === enteredOrder[5]
              ) {
                correctTasks++;
                console.log('Task 2 correct');
              }
            }
            continueButton.innerHTML = 'Продолжить';
            continueButton.addEventListener('click', () => {
              console.log('next task from previous');
              nextTask(tasks, div);
            });
          });
          continueButton.addEventListener('click', () => {
            nextTask(tasks, div);
          });

          div.appendChild(theTask);
          const topButtons = document.createElement('p');
          topButtons.classList.add('taskElement');
          topButtons.classList.add('flexElement');
          topButtons.appendChild(button1top);
          topButtons.appendChild(button2top);
          topButtons.appendChild(button3top);
          div.appendChild(topButtons);
          const bottomButtons = document.createElement('p');
          bottomButtons.classList.add('taskElement');
          bottomButtons.classList.add('flexElement');
          bottomButtons.appendChild(button1bottom);
          bottomButtons.appendChild(button2bottom);
          bottomButtons.appendChild(button3bottom);
          div.appendChild(bottomButtons);
          div.appendChild(continueButton);
          break;
        }

        case 3: {
          console.log('task type 3');
          const theTask = document.createElement('div');
          theTask.classList.add('taskElement');
          theTask.innerHTML = 'Переведите слово: ';

          let wordTask, wordTranslate;
          const language = Math.floor(Math.random() * 2 - 0.000001);
          if (language === 0) {
            wordTask = task.word.RussianWord
            wordTranslate = task.word.EnglishWord;
          }
          else {
            wordTranslate = task.word.RussianWord;
            wordTask = task.word.EnglishWord;
          }

          const translateSentence = document.createElement('div');
          translateSentence.classList.add('taskElement');
          translateSentence.innerHTML = wordTranslate;

          const input = document.createElement('input');
          input.classList.add('taskElement');
          input.placeholder = 'Введите перевод';

          const continueText = document.createElement('div');
          continueText.classList.add('taskElement');

          const continueButton = document.createElement('button');
          continueButton.classList.add('taskElement');
          continueButton.innerHTML = 'Проверить';

          continueButton.addEventListener('click', () => {
            if (input.value.toLocaleLowerCase() === wordTask.toLocaleLowerCase()) {
              continueText.innerHTML = 'Правильно!';
              correctTasks++;
            }
            else {
              continueText.innerHTML = `Неправильно! Перевод: ${wordTask}`;
            }
            continueButton.innerHTML = 'Продолжить';
            continueButton.addEventListener('click', () => {
              console.log('next task from previous');
              nextTask(tasks, div);
            });
          });

          div.appendChild(theTask);
          div.appendChild(translateSentence);
          div.appendChild(input);
          div.appendChild(continueText);
          div.appendChild(continueButton);

          break;
        }
        default: {
          break;
        }
      }
    }
  }

  function openLesson() {

    correctTasks = 0;

    const lessondiv = lesson.current;
    lessondiv.classList.add('fullscreen');

    const exitButton = document.createElement('button');
    exitButton.innerHTML = 'Назад';
    exitButton.classList.add('exitButton');
    exitButton.addEventListener('click', () => {
      lessondiv.innerHTML = '';
      lessondiv.classList.remove('fullscreen');
    })
    lessondiv.appendChild(exitButton);

    console.log(1003, topics);
    const tasks = topics[currentTopic].makeTasks(10, differentTasks);

    console.log(1002, tasks);
    nextTask(tasks, lessondiv);

  }

  function openDictionary() {
    console.log('dictionary 1 opened');

    const dictionarydiv = dictionary.current;
    dictionarydiv.classList.add('fullscreen');
    const dictionaryWords = topics[currentTopic].words;

    const exitButton = document.createElement('button');
    exitButton.innerHTML = 'Назад';
    exitButton.classList.add('exitButton');
    exitButton.addEventListener('click', () => {
      dictionarydiv.innerHTML = '';
      dictionarydiv.classList.remove('fullscreen');
    })
    dictionarydiv.appendChild(exitButton);

    const wordsDiv = document.createElement('div');
    wordsDiv.classList.add('dictionaryElement');

    dictionaryWords.forEach(word => {
      const englishWord = word.EnglishWord;
      const russianWord = word.RussianWord;
      let language = 0;

      const worddiv = document.createElement('div');
      worddiv.innerHTML = englishWord;
      worddiv.onclick = () => {
        worddiv.innerHTML = language ? englishWord : russianWord;
        language = !language;
        if(language) {
          worddiv.classList.add('dictionaryWordPressed');
        }
        else {
          worddiv.classList.remove('dictionaryWordPressed');
        }
      }
      worddiv.classList.add('dictionaryWord');

      wordsDiv.appendChild(worddiv);
    })

    dictionarydiv.appendChild(wordsDiv);

  }

  function openTopic(event, number) {

    currentTopic = number;
    const buttons = document.getElementsByClassName('topicButton');
    Array.prototype.forEach.call(buttons, function (button) {
      button.classList.remove('activeTopicButton');
    });
    event.target.classList.add('activeTopicButton');

  }

  return (
    <div className="fullscreen">
      {TOPICS.map((topic, index) => <button
        key={index}
        onClick={(event) => openTopic(event, index)}
        className="topicButton"
      >{topic.topic}</button>)}

      <div className="unitDiv">
        <div ref={dictionary} className="dictionaryElement"/>
        <button
          className="dictionary unitElement"
          onClick={() => openDictionary()}
        >
          Словарь
        </button>
        <div ref={lesson} className="lessonElement"/>
        <button
          className="lesson unitElement"
          onClick={() => openLesson()}
        >
          Задания
        </button>
      </div>
    </div>
  );

}

export default Topics;
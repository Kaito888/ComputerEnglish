export default class Topic {

    constructor(number, words) {
        //this.topic = number;
        this.words = [];
        words.forEach(word => {
            if (word.topic === number) {
                this.words.push(word);
            }
        });
    }

    makeTasks(numberOfTasks, numberOfDifferentTasks) {
        const tasks = [];
        for (let i = 0; i < numberOfTasks; i++) {
            const word = this.words[Math.trunc(Math.random() * (this.words.length - 1))];
            const sentenceNumber = Math.floor(Math.random() * (word.sentences.length - 1));
            const task = {
                word: word,
                type: Math.floor(Math.random() * numberOfDifferentTasks - 0.000001) + 1,
                sentence: sentenceNumber,
            }
            tasks.push(task);
        }
        return tasks;
    }

    getWords(number) {
        const words = [];
        const initialWords = [];
        this.words.forEach(word => {
            initialWords.push(word);
        })
        number = number < initialWords.length - 1 ? number : initialWords.length - 1;
        for (let i = 0; i < number; i++) {
            let index = Math.floor(Math.random() * initialWords.length - 0.000001);
            words.push({
                EnglishWord: initialWords[index].EnglishWord,
                RussianWord: initialWords[index].RussianWord,
            });
            initialWords.splice(index, 1);
        }
        return words;
    }

}
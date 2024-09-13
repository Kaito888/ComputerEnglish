const Topic1 = () => {

    function openDictionary1() {
        console.log("dictionary1 opened");
    }

    function openDictionary2() {
        console.log("dictionary2 opened");
    }

    function openLesson1() {
        console.log("lesson1 opened");
    }

    function openLesson2() {
        console.log("lesson2 opened");
    }

    return (
        <div className="topic1">
            <div className="themeUnit" onClick={() => openDictionary1()}>
                Dictionary1
            </div>
            <div className="themeUnit" onClick={() => openDictionary2()}>
                Dictionary2
            </div>
            <div className="themeUnit" onClick={() => openLesson1()}>
                Lesson1
            </div>
            <div className="themeUnit" onClick={() => openLesson2()}>
                Lesson2
            </div>
        </div>
    )
}

export default Topic1;
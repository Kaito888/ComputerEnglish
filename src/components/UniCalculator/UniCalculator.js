import { useRef } from "react";

import useUniCalculator from "../../modules/UniCalculator/useUniCalculator";

import MyButton from "../components/MyButton/MyButton";

const UniCalculator = () => {
    const refA = useRef(null);
    const refB = useRef(null);
    const calc = useUniCalculator(refA, refB);

    const operands = [
        {
            operand: 'add',
            text: '+',
        }, {
            operand: 'sub',
            text: '-',
        }, {
            operand: 'mult',
            text: '*',
        }, {
            operand: 'div',
            text: '/',
        }, {
            operand: 'pow',
            text: '^',
        }, {
            operand: 'prod',
            text: 'x',
        },
    ];

    return (<>
        <div>
            <textarea ref={refA}></textarea>
            <textarea ref={refB}></textarea>
        </div>
        {operands.map((op, index) =>
            <MyButton
                key={index}
                text={op.text}
                operand={op.operand}
                onClick={() => calc(op.operand)}
            />
        )}
    </>)
}

export default UniCalculator;
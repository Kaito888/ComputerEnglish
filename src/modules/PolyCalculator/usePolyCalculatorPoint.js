import PolynomialCalculator from './PolynomialCalculator';
import Calculator from '../UniCalculator/Calculator';

export default function usePolyCalculator(polyPoint, polyA) {
    const calc = new PolynomialCalculator();
    const pointCalc = new Calculator();
    return () => {
        if (polyPoint && polyA) {
            const a = calc.getPolynomial(polyA.current.value);
            const x = pointCalc.getEntity(polyPoint.current.value);

            polyPoint.current.value = a.getValue(x).toString();
        }
    }
}
function add(a, b) {
    const numA = toNumber(a);
    if (typeof (numA) === 'string') {
        console.log(numA);
        return "ERROR";
    }

    const numB = toNumber(b);
    if (typeof (numB) === 'string') {
        console.log(numB);
        return 'ERROR';
    }

    return numA + numB;
}

function subtract(a, b) {
    const numA = toNumber(a);
    if (typeof (numA) === 'string') {
        console.log(numA);
        return 'ERROR'
    }

    const numB = toNumber(b);
    if (typeof (numB) === 'string') {
        console.log(numB);
        return 'ERROR';
    }

    return numA - numB;
}

function multiply(a, b) {
    const numA = toNumber(a);
    if (typeof (numA) === 'string') {
        console.log(numA);
        return 'ERROR'
    }

    const numB = toNumber(b);
    if (typeof (numB) === 'string') {
        console.log(numB);
        return 'ERROR';
    }

    return numA * numB;
}

function divide(a, b) {
    if (b === 0) return 'DIVIDE BY 0';

    const numA = toNumber(a);
    if (typeof (numA) === 'string') {
        console.log(numA);
        return 'ERROR'
    }

    const numB = toNumber(b);
    if (typeof (numB) === 'string') {
        console.log(numB);
        return 'ERROR';
    }

    return numA / numB;
}

function toNumber(a) {
    if (a === undefined) return "argument is undefined.";
    if (typeof (a) != 'number') {
        console.log(`converting ${a} to a number.`);
        if (a.includes('.')) {
            val = parseFloat(a);
            if (isNaN(val)) {
                return `Error parsing ${a} as float`;
            }
            else {
                return val;
            }
        }
        else {
            val = parseInt(a);
            if (isNaN(val)) {
                return `Error parsing ${a} as int`;
            }
            else {
                return val;
            }
        }
    }

    return a;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return 'ERROR';
    }
}

console.log('result is ' + add('x' + 'y'));
console.log('result is ' + add('x', 'y'));
console.log('result is ' + add('1', '1'));
console.log('result is ' + add('1', 'y'));
console.log('result is ' + add(1, 2));
console.log('result is ' + add(1.1, 2.3));
console.log('result is ' + add('1.1', '2.3'));
console.log('result is ' + add('1', '2.3'));
console.log('result is ' + add(1, '2.3'));

testSubtract('x');
testSubtract('x', 'y');
testSubtract('3', '2');
testSubtract(3, 2);
testSubtract(4.3, 2.1);

function testSubtract(a, b) {
    console.log('');
    console.log(`Subtract ${a}, ${b}`);
    console.log(`${a} - ${b} = ${subtract(a, b)}`)
}

testMultiply('x');
testMultiply('x', 'y');
testMultiply('3', '2');
testMultiply(3, 2);
testMultiply(4.3, 2.1);

function testMultiply(a, b) {
    console.log('');
    console.log(`Multiply ${a}, ${b}`);
    console.log(`${a} * ${b} = ${multiply(a, b)}`)
}

testDivide('x');
testDivide('x', 'y');
testDivide('3', '2');
testDivide(3, 2);
testDivide(4.3, 2.1);
testDivide(4.3, 0);

function testDivide(a, b) {
    console.log('');
    console.log(`Divide ${a}, ${b}`);
    console.log(`${a} / ${b} = ${divide(a, b)}`)
}

testOperate('+', 4, 5);
testOperate('-', 8, 3);
testOperate('*', 8, 3);
testOperate('/', 8, 3);
testOperate('/', 8, 0);

function testOperate(operator, a, b) {
    console.log("");
    console.log(`${a} ${operator} ${b}`);
    console.log(`${a} ${operator} ${b} = ${operate(operator, a, b)}`);
}

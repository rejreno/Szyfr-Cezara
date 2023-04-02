export function caesar13(inputText) {
    const patternROT = 'abcdefghijklmnopqrstuvwxyz';
    const movingROT = 13;
    let outputText = '';

    if(typeof inputText !== 'string' || inputText.length == 0) {
        return 'Written text is not text type or is empty!'
    }

    const sensitiveCaseCodedArray = codeCasesSensitivity(inputText);
    let lowerInputText = inputText.toLowerCase();

    for (const inputChar of lowerInputText) {
        if(patternROT.includes(inputChar)) {
            if(movingROT - patternROT.indexOf(inputChar) > 0) {
                outputText += patternROT[patternROT.indexOf(inputChar) + movingROT];
            }
            else {
                outputText += patternROT[movingROT - (patternROT.length - patternROT.indexOf(inputChar))];
            }
        }
        else if(Number(inputChar).toString() !== 'NaN') {
            outputText += inputChar;
        }
    }

    return decodeCasesSensitivity(outputText, sensitiveCaseCodedArray);
}

function codeCasesSensitivity(inputText) {
    const sensitiveCaseCodedArray = [];
    for (const inputChar of inputText) {
        if(inputChar == inputChar.toLowerCase()) {
            sensitiveCaseCodedArray.push(0);
        }
        else if(inputChar == inputChar.toUpperCase()) {
            sensitiveCaseCodedArray.push(1);
        }
    } 

    return sensitiveCaseCodedArray;
}

function decodeCasesSensitivity(inputText, sensitiveCaseCodedArray) {
    let resultText = '';
    for (let index = 0; index < inputText.length; index++) {
        if(sensitiveCaseCodedArray[index] == 1) {
            resultText += inputText[index].toUpperCase();
        }
        else if(sensitiveCaseCodedArray[index] == 0) {
            resultText += inputText[index].toLowerCase();
        }
    }

    return resultText;
}
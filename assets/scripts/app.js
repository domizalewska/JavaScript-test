

function getUserNumberInput() {
    return parseInt(getUserNumberInput.value);
}

function createAndwriteOutput(operator, resultBeforeCalc, calcNumber)
{
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}

function writeToLog(
operationIdentifier,
prevResult,
operationNumber,
newResult
){
    const logEntry = {
        operation: "Add",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


function add() 
{
    const enteredNumber = getUserNumberInput();
    const initialResult = enteredNumber;
    currentResult += enteredNumber;
    createAndwriteOutput('+', initialResult, enteredNumber);
    
}
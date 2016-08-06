$(document).ready(function () {
    // make our variables global to the runtime of our application
    var firstNumber, secondNumber, operator, result, isOperatorChosen, isCalculated;

    // use a function to initialize our calculator. this way when the user hits clear
    // we can guarantee that we're in the exact same state as we were when the app started.
    function initializeCalculator () {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $('#firstNumber, #secondNumber, #operator, #result').empty();
    }

    // add an on click listener to all elements that have the class 'number'
    $('.number').on('click', function () {
        // check if we've already ran a calculation, if we have, just exit
        if (isCalculated) return;

        // if operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber += this.value;
            $('#secondNumber').html(secondNumber);
        } else {
            firstNumber += this.value;
            $('#firstNumber').html(firstNumber);
        }
    });

    // add an on click listener to all elements that have the class 'operator'
    $('.operator').on('click', function () {
        // check if we've already ran a calculation, if we have, just exit
        if (isCalculated) return;

        // set isOperatorChosen to true so we start writing to secondNumber
        isOperatorChosen = true;

        // store off the operator
        operator = this.value;

        // set the html of the #operator to the text of what was clicked
        $('#operator').html($(this).text());
    });


    // add an on click listener to all elements that have the class 'equal'
    $('.equal').on('click', function () {
        // if we already clicked equal, don't do the calculation again
        if (isCalculated) return;

        // set isCalculated to true so that we dont get in a weird UI state
        // by clicking buttons again
        isCalculated = true;

        // use parseInt to convert our string representation of numbers into actual
        // integers so javascript can run our operators
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // based on the operator that was chosen, run the operation and set
        // the html of the result of that opearation
        var result;
        if (operator == "plus"){
            result = firstNumber + secondNumber;
        }

        if (operator == "minus"){
            result = firstNumber - secondNumber;
        }

        if (operator == "times"){
            result = firstNumber * secondNumber;
        }

        if (operator == "divide"){
            result = firstNumber / secondNumber;
        }

        if (operator == "power"){
            result = Math.pow(firstNumber, secondNumber);
        }

        $('#result').html(result);
    });

    // add an on click listener to all elements that have the class 'clear'
    $('.clear').on('click', function () {
        // call initializeCalculater so we can reset the state of our app
        initializeCalculator();
    });

    // call initializeCalculater so we can set the state of our app
    initializeCalculator();
});
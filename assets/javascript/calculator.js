$(document).ready(function () {
    var firstNumber, secondNumber, operator, result, isOperatorChosen, isCalculated;

    // Empties results and sets calculator ready for use
    function initializeCalculator () {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $('#firstNumber, #secondNumber, #operator, #result').empty();
    }

    // Click event for Number Buttons
    $('.number').on('click', function () {
        if (isCalculated) return;

        if (isOperatorChosen) {
            secondNumber += this.value;
            $('#secondNumber').html(secondNumber);
        } else {
            firstNumber += this.value;
            $('#firstNumber').html(firstNumber);
        }
    });

    // Click events for operators
    $('.operator').on('click', function () {
        if (isCalculated) return;
        isOperatorChosen = true;
        operator = this.value;
        $('#operator').html($(this).text());
    });


    // Click event for Equal button
    $('.equal').on('click', function () {
        if (isCalculated) return;
        isCalculated = true;

        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

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

        $('#result').html("= &nbsp " + result);
    });

    // Click event for clear button
    $('.clear').on('click', function () {
        initializeCalculator();
    });

    // Resets for original calculator theme
    $('#currentTheme').on('click', function () {
        $('.btn').css({ 'background-color' : '', 'opacity' : '' });;
    });

    // Changes color theme
    $('#colorChanger2').on('click', function () {
        $('.btn').css( "background-color", "#00897b");
        $('.operator').css( "background-color", "#039be5");
        $('#buttonEqual').css( "background-color", "#d81b60");
        $('.colorChanger').css( "background-color", "white");
        $('#clear').css( "background-color", "white");
    });

    // Changes color theme
    $('#colorChanger3').on('click', function () {
        $('.btn').css( "background-color", "#fb8c00");
        $('.operator').css( "background-color", "#76ff03");
        $('#buttonEqual').css( "background-color", "#e53935");
        $('.colorChanger').css( "background-color", "white");
        $('#clear').css( "background-color", "white");
    });

    initializeCalculator();
});

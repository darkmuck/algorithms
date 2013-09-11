    var numbers = [3,5,2,4,7,9,6,4,5];
    var tmp;
    for (var i = 0; i < numbers.length; i += 1) {
        for (var j = i; j > 0; j -= 1) {
            if (numbers[j] < numbers[j - 1]) {
                tmp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = tmp;
            }
        }
    }
    console.log(numbers);
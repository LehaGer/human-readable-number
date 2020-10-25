module.exports = function toReadable (number) {

    function checkFirstNine(ApolNum){
        let ReadableNumFN;
        switch (ApolNum) {
            case 1: 
                ReadableNumFN = "one";
                break;
            case 2: 
                ReadableNumFN = "two";
                break;
            case 3:
                ReadableNumFN = "three";
                break;
            case 4:
                ReadableNumFN = "four";
                break;
            case 5:
                ReadableNumFN = "five";
                break;
            case 6:
                ReadableNumFN = "six";
                break;
            case 7:
                ReadableNumFN = "seven";
                break;
            case 8:
                ReadableNumFN = "eight";
                break;
            case 9:
                ReadableNumFN = "nine";
                break;
            default:
                break;
        }
        return ReadableNumFN;
    }

    function checkTenNineteen(ApolNum){
        let ReadableNumTN = "";
        switch (ApolNum) {
            case 0: 
                ReadableNumTN = "zero";
                break;
            case 10:
                ReadableNumTN = "ten";
                break;
            case 11:
                ReadableNumTN = "eleven";
                break;
            case 12:
                ReadableNumTN = "twelve";
                break;
            case 13:
                ReadableNumTN = "thirteen";
                break;
            case 14:
                ReadableNumTN = "fourteen";
                break;
            case 15:
                ReadableNumTN = "fifteen";
                break;
            case 16:
                ReadableNumTN = "sixteen";
                break;
            case 17:
                ReadableNumTN = "seventeen";
                break;
            case 18:
                ReadableNumTN = "eighteen";
                break;
            case 19:
                ReadableNumTN = "nineteen";
                break;
            default:
                break;
        }
        return ReadableNumTN;
    }

    function checkTenMult(ApolNum){
        let ReadableNumTN = "";
        switch (ApolNum) {
            case 20: 
                ReadableNumTN = "twenty";
                break;
            case 30:
                ReadableNumTN = "thirty";
                break;
            case 40:
                ReadableNumTN = "forty";
                break;
            case 50:
                ReadableNumTN = "fifty";
                break;
            case 60:
                ReadableNumTN = "sixty";
                break;
            case 70:
                ReadableNumTN = "seventy";
                break;
            case 80:
                ReadableNumTN = "eighty";
                break;
            case 90:
                ReadableNumTN = "ninety";
                break;
            default:
                break;
        }
        return ReadableNumTN;
    }

    let ReadableNum = "";

    if(number >= 100){
        ReadableNum += (checkFirstNine(+((number - number%100)/100).toFixed(0)) + " hundred");
        if(number%100 !== 0) 
            ReadableNum += " ";
    }
    if(number%100 >= 20){
        ReadableNum += checkTenMult(+(number%100 - number%10).toFixed(0));
        if(number%10 !== 0) {
            ReadableNum += " ";
            ReadableNum += checkFirstNine(number%10);
        }
            
    }else if(number%100 >= 10){
        ReadableNum += checkTenNineteen(number%100);
    }else if(number%10 > 0){
        ReadableNum += checkFirstNine(number%10);
    }else if(number === 0){
        ReadableNum += "zero";
    }

    return ReadableNum;
}

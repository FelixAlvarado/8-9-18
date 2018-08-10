function smallString(string) {
    let count = 1;
    let lastLetter = string[0];
    let result = '';
    for (let i = 1; i < string.length; i++){
        if (string[i] === lastLetter){
            count += 1;
        } else {
            let newAddition = lastLetter + count.toString();
            result += newAddition;
            lastLetter = string[i];
            count = 1;
        }
        if (i === string.length - 1){
            let newAddition = lastLetter + count.toString(); 
            result += newAddition;
        }
    }
    return result.length < string.length ? result : string;
}
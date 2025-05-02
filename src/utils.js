//checking for vowels and constants
//checking for uppercase and lowercase
//ignoring numbers, punctuations
//show error for non-strings and empty strings
export function pointsForWord(word) {
    if(typeof word !== "string") {
        throw new TypeError("input must be a string")
    }

    if(word.length === 0) {
        return 0
    }
    let points = 0 
    for (const char of word) {
        if(/[a-z]/i.test(char)) {
            points += /[aeiou]/.test(char.toLowerCase()) ? 1 : 2
        }
        //else ignore numbers, punctuations and emojis
    }
    return points;
}




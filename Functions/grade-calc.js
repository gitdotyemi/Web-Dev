// const gradeCalc = function (studentScore, totalScore) {
//     const gradePercent = (studentScore / totalScore)  * 100
//     let letterGrade = ""

//     if (gradePercent >= 90) {
//         letterGrade = "A"
//     } else if (gradePercent >= 80) {
//         letterGrade = "B"
//     } else if (gradePercent >= 70) {
//         letterGrade = "C"
//     } else if (gradePercent >= 60) {
//         letterGrade = "D"
//     } else {
//         letterGrade = "F"
//     }

//     return `You got a ${letterGrade} (${gradePercent}%)!`
// }

// const result = gradeCalc(10, 20)
// console.log(result)


const gradeCalc = function (studentScore, totalScore) {

    if (typeof studentScore === "number" && typeof totalScore === "number") {
        const gradePercent = (studentScore / totalScore)  * 100
        let letterGrade = ""

        if (gradePercent >= 90) {
            letterGrade = "A"
        } else if (gradePercent >= 80) {
            letterGrade = "B"
        } else if (gradePercent >= 70) {
            letterGrade = "C"
        } else if (gradePercent >= 60) {
            letterGrade = "D"
        } else {
            letterGrade = "F"
        }

    return `You got a ${letterGrade} (${gradePercent}%)!`
    } else {
        throw Error("Arguments must be a number")
    }
}

try {
    const result = gradeCalc(10, "true")
    console.log(result)
} catch (e) {
    console.log(e.message)
}
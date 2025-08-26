
// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output: 
//     {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


function problem4(array) {
    let result = {}
    for (let i = 1; i <= 9; i++) {
        let count = 0
        for (let num of array) {
            if (num % i === 0) {
                count++
            }
        }
        result[i] = count
    }
    return result
}

let input = [1,2,8,9,12,46,76,82,15,20,30]
console.log(problem4(input))
let mat1 = [
    [1, 2],
    [3, 4]
]

let mat2 = [
    [5, 6],
    [7, 8]
]

function multiplyMatrices(mat1, mat2){ //Exercise 1
    let result = [];
    for(let row = 0; row < mat1.length; ++row){
        result[row] = [];
        for(let col = 0; col < mat2[0].length; ++col){
            let sum = 0;
            for(let i = 0; i < mat1[0].length; ++i){
                sum += mat1[row][i] * mat2[i][col];
            }
            result[row][col] = sum 
        }
    }
    return result
}

console.log(multiplyMatrices(mat1, mat2));


module.exports = {
    multiplyMatrices    
}








function sumOfMatrices(mat1, mat2){ //Exercise 2
    for(let row = 0; row < mat1.length; ++row){
        for(let col = 0; col < mat1[0].length; ++col){
            mat1[row][col] += mat2[row][col]
        }
    }

    return mat1
}

console.log(sumOfMatrices(mat1, mat2));


module.exports = {
    sumOfMatrices
}








let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function sumOfEachRow(matrix){ //Exercise 3
    let finalMatrix = [];
    for(let row = 0; row < matrix.length; ++row){
        let sum = 0;
        for(let col = 0; col < matrix[row].length; ++col){
            sum += matrix[row][col]
        }
        finalMatrix.push(sum);
    }
    return finalMatrix        
}

console.log(sumOfEachRow(matrix));

module.exports = {
    sumOfEachRow
}
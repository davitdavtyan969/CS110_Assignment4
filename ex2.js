let mat1 = [
    [1, 2],
    [3, 4]
]

let mat2 = [
    [5, 6],
    [7, 8]
]


function sumOfMatrices(mat1, mat2){
    for(let row = 0; row < mat1.length; ++row){
        for(let col = 0; col < mat1[0].length; ++col){
            mat1[row][col] += mat2[row][col]
        }
    }

    return mat1
}

console.log(sumOfMatrices(mat1, mat2));


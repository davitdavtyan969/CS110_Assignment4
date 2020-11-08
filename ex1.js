// function matrixProduct(mat1, mat2){

//     let newMat = getBlanckMatrix(mat1)
//     for(let row = 0; row < mat1.length; ++row){
//         for(let col = 0; col < mat1[0].length; ++col){
//                 newMat += (mat1[row][i] * mat2[i][col])
//             }
            
//         }
//     }
//     return newMat
// }

// console.log(matrixProduct(mat1, mat2));

let mat1 = [
    [1, 2],
    [3, 4]
]

let mat2 = [
    [5, 6],
    [7, 8]
]

// function getBlanckMatrix(matrix){
//     let newMat = [];
//     for(let i = 0; i < matrix.length; ++i){
//         newMat [i] = []
//     }
//     return newMat
// }

// function matrixProduct(mat1, mat2){
//     let newMat = getBlanckMatrix(mat1);
//     for(let row = 0; row < mat1.length; ++row){
//         for(let col = 0; col < mat1[0].length; ++col){
//             newMat [0] [0] = (mat1[0][0] * mat2[0][0]) + (mat1[0][1] * mat2[1][0])
//             newMat [0] [1] = (mat1[0][0] * mat2[0][1]) + (mat1[0][1] * mat2[1][1])
//             newMat [1] [0] = (mat1[1][0] * mat2[0][0]) + (mat1[1][1] * mat2[1][0])
//             newMat [1] [1] = (mat1[1][0] * mat2[0][1]) + (mat1[1][1] * mat2[1][1])
//         }
//     }
//     return newMat   
// }

// console.log(matrixProduct(mat1, mat2)) 

function multiplyMatrices(mat1, mat2){
    let result = [];
    for(let i = 0; i < mat1.length; ++i){
        result[i] = [];
        for(let j = 0; j < mat2[0].length; ++j){
            let sum = 0;
            for(let k = 0; k < mat1[0].length; ++k){
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum 
        }
    }
    return result
}

console.log(multiplyMatrices(mat1, mat2));
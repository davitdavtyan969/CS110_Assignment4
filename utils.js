
// function det(matrix){
//     return matrix[0] [0] * matrix[1] [1] - matrix[1] [0] * matrix[0] [1]
// }

let mat1 = [
    [1, 2],
    [3, 4],
]

let mat2 = [
    [5, 6],
    [7, 8],
]

// console.log(det(A));
// console.log(A[0] [0]);


// function trace(matrix){
//     let sum = 0;
//     for(let row = 0; row < matrix.length; ++row){
//         for(let col = 0; col < matrix[0].length; ++col){
//             if(row == col){
//                 sum += matrix[row] [col]
//             }
//         }
//     } 

//     return sum 
// }

// console.log(trace(A));

function matrixProduct(mat1, mat2){
    let newMat = [];
    for(let row = 0; row < mat1.length; ++row){
        for(let col = 0; col < mat2[0].length; ++col){
            for(let col = 0; row)
            newMat[row][col] = mat1[row][col] * mat2[row][col]
        }
    }

    return newMat;
}

console.log(matrixProduct(mat1, mat2));


// if(mat1.length !== mat2.length || mat1[0].length !== mat2[0].length){
//     console.log("Invalid input");
// }
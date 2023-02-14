
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                while (matrix[i].length > 0) {
                    result.push(matrix[i].shift())
                }
            }
            if (i % 2 === 1) {
                while (matrix[i].length > 0) {
                    result.push(matrix[i].pop())
                }
            }
        }
    }
    return result;
}

const record = [4,7,2,9,43,4,21,78,32,12];

//1. sort array


// const sortedArrayAsc = record.sort((a,b)=> {
//     if (a < b)
//     {
//         return -1
//     }

//     if(a > b){
//         return 1
//     }

//     return 0
// });


// const sortedArrayDesc = record.sort((a,b)=> {
//     if (a < b)
//     {
//         return 1
//     }

//     if(a > b){
//         return - 1
//     }

//     return 0
// });



function binarySearch(data, num){

    const sortedArray = data.sort((a,b)=> a - b);

    console.log(sortedArray);

    let lowerBoundary = 0;
    let upperBoundary = data.length - 1;

    

    while(lowerBoundary < upperBoundary){

        if(data[lowerBoundary] === num){
            return lowerBoundary;
        }

        if(data[upperBoundary] === num){
            return upperBoundary;
        }

        const middleIndex = Math.round((lowerBoundary + upperBoundary) / 2);

        if(num === data[middleIndex]){
            return middleIndex;
        }

        if(num > data[middleIndex]){
            lowerBoundary = middleIndex + 1;
        }else{
            upperBoundary = middleIndex -1;
        }
    }

    return -1;
}

console.log(binarySearch(record, 78));
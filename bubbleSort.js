

function bubbleSort(array)
{
    let sortComplete = false;

    let lastPos = array.length - 1;

    while(!sortComplete)
    {   
        sortComplete = true;

        for(let i = 0; i < lastPos; i++)
        {
            if(array[i] > array[i+1]){
                const itemAtI = array[i];

                const itemAtIPlus1 = array[i + 1];

                array[i] = itemAtIPlus1;
                array[i+1] = itemAtI;

                sortComplete = false;
            }
        }

        lastPos--;
        
    }
    return array;
}

let record = [4,7,2,9,43,4,21,78,32,12]

console.log(bubbleSort(record));
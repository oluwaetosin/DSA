def binarySearch(array ,search_value):

        array.sort()
        sorted_array = array
        lower_boundary = 0
        upper_boundary = len(sorted_array) - 1

        print(sorted_array)

        while(lower_boundary <= upper_boundary):

            if search_value == sorted_array[lower_boundary]:
               return lower_boundary

            if search_value == sorted_array[upper_boundary]:
                return upper_boundary

            middleNum =  round((upper_boundary + lower_boundary ) / 2)

            if sorted_array[middleNum] == search_value :
                return middleNum

            if search_value > middleNum:

                lower_boundary = middleNum + 1

            elif search_value < middleNum:
                upper_boundary = middleNum -1

        return NULL

record = [4,7,2,9,43,4,21,78,32,12]

print(binarySearch(record, 43) )   



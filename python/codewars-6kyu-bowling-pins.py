"""
Task:

Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:


I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1

You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:


I I   I
 I   I
  I   
   I   

Return a string with the current field.

Note that:

You begin a new line with \n
Each Line must be 7 chars long
Fill the missing pins with a whitespace

"""

def bowling_pins(arr):
     
    positional_array = [7,8,9,10,4,5,6,2,3,1]
    index_list = []
    res_list = []
    spacer = 0

    for idx,item in enumerate(positional_array):
        if positional_array[idx] in arr:
            index_list.append(positional_array.index(positional_array[idx]))

    for idx in range(10):
        pin_char = 'I'

        if idx in index_list:
            pin_char = ' '

        if idx in [0, 4, 7]:
            res_list.append(' '*spacer + pin_char + ' ')
        elif idx in [3,6,8]:
            res_list.append( pin_char+ ' '*spacer + '\n')
            spacer += 1
        elif idx == 9:
            res_list.append( ' '*spacer + pin_char + ' '*spacer )
        else:
            res_list.append(pin_char + ' ')
    return ''.join(res_list)
    

bowling_pins([2,3])  

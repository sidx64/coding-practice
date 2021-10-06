"""
You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
Rules

Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.
Example 1

input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}
Example 2

input = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

output = {
  "1": [],
  "2": [],
  "3": ["A"],
}
Example 3

input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}

"""

def remove_duplicate_ids(obj):
    # get list of keys
    key_list = sorted(map(int,obj.keys()))
    values_count = len(key_list)
    res = {}
    print(key_list)
    for idx, key in enumerate(key_list):
        current_values = sorted(list(set(obj[str(key)])))
        count = idx+1
        # print(current_values)
        while count != len(key_list):
            print(obj[str(key_list[count])])
            
            comp_values = obj[str(key_list[count])]
            print(set(comp_values)-set(current_values))
            count+=1


        # count = idx
        # while count < len(key_list):
        #     if(idx < len(key_list)-1):
        #         for item in values:
        #             if item in list(set(obj[str(key_list[count])])):
        #                 values.remove(item)
        #                 res[key] = sorted(values)
        #     else:
        #         res[key] = values
            
        #     count+=1

    # print(res)
    return 


# test
a = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
}
b = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["F", "B", "D"],
}

remove_duplicate_ids(b)


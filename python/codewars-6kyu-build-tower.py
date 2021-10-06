"""
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

3
-----


"""

def tower_builder(n_floors):
    max_str_length = (n_floors*2)-1
    res = []

    # build here
    for i in range(1, n_floors+1):

        str_val = '*'*(int(2*(i-1)))
        space_val = ' '*(int((max_str_length-len(str_val))/2))

        res.append(space_val+str_val+space_val)

tower_builder(5)

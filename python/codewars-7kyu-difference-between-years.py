"""
Write a function that receives two strings as parameter. 
This strings are in the following format of date: YYYY/MM/DD. 

Your job is: Take the years and calculate the difference between them.

Examples:

'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
At this level, you don't need validate months and days to calculate the difference.

"""
import math

def how_many_years (date1,date2):
    return abs(int(date1.split('/')[0]) - int(date2.split('/')[0]))


how_many_years ('1997/10/10', '2015/10/10') # 18
how_many_years ('1990/10/10', '2015/10/10') # 25
how_many_years ('2015/10/10', '1990/10/10') # 25
how_many_years ('1992/10/24', '2015/10/24') # 23
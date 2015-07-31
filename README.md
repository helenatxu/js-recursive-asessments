JS Assessments

==================

To run each program from the terminal, go inside the assessment folder and type:
$ node answer.js input.txt


As a potential improvement for all assessments would be to add more validation and test cases, to test the behavior with different scenarios, like entering unexpected input data.

# Assessment 1

This program returns each sentence with its words in reverse order.

First it reads the input file, split the lines and split each line in words assigning each word to a position inside an array.

Then, it applies the reverse function and convert the array to a string.

I have assumed that each word is separated by an empty space and each sentence by a new line.

--


# Assessment 2

This program reads the quantities entered in pennies, removes the 'p' at the end of the quantity and returns the number of different combinations of the available coins to return the change for that quantity.
For this version I choosed the Dynamic Programming solution, which creates a temporary 2-dimensional array and fills it in a bottom-up way.

The available coins are stored in an array.

I have assumed that the quantities are always expressed in pennies, like '1p' or '250p' and are equal or higher than 0.

If the amount entered is 0 and the coins available are 0, then return the empty combination.
If the moneyAmount entered is exactly 0, then return 1 combination, which means there is one combination with no coins.


--


# Assessment 3

I decided to use the Moment.js (http://momentjs.com/), a very useful date library to manipulate, format and show dates. After doing 'npm install' it should be installed in the node_modules folder.

To run this program from the terminal, go inside the assessment folder and type:
$ npm install
$ node answer.js input.txt

This program reads the range of months / year entered and sets the dates to the first Sunday of the first week of the month.

Then, it call a recursive function that first checks if we have already passed the given range.
After that, it calls another recursive function that counts the number of Sundays in a specific month while moves forward in the range. If the specific month has exactly 5 Sundays, it counts one more month.
Finally, return the counts of the months with exactly 5 weeks within the given range.

I have assumed that months are entered as a string (by its name in English) and year as an integer, and words in a range separated by empty spaces.

As a potential improvement, I would add more conditions to check different types input data and validation of ranges.
I would also try if an iterative solution would have perform better.

--


# Assessment 4

This program reads the range and maps each number inside an array. Then, inside a nested loop that iterates through all combinations of base^power for the given range, calculating the power and pushing it to an array.
Later, the array is sent to a function that iterates it removing all duplicates and saving the unique power values inside a new array, while marking at the same time that value as 'existing' in a temporary object.
At the end, the length of the 'cleaned' array is returned, which represents the number of unique power values.

I have assumed that the ranges are entered as a pair of integers in one line.

As a potential improvement for this assessment, I would try to separate the nested loops into two different functions. I would also refactor more the getRange function.

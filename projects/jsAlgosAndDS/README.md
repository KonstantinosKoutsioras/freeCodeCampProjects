# Javascript and Data Structures
This folder contains the projects which are needed to complete the certification for FreeCodeCamp's said lecture.

## Summary
This wasn't my first time learning JS but -God- I felt like I learned some things for the first time. Coming from a C/C++ background, I had a very hard time grasping around the methods concerning arrays and strings, which this course does a *pretty* good job at teaching you most of them. Below I'll go in detail in what you should expect in each one of the projects. Mind you, I'll be listing them the order they are in the course and not on GitHub(If someone knows how to change the order, please show me. I can't be bothered.). Overall, a good experience. 

## JS? Never heard of 'em
Further comments are provided in the code, but I myself am not convinced that the way I write comments is the most understandable yet. Nevertheless, here you go.

### Palindrome Checker
This algorithm is pretty straightforward, given you know what a palindrome is. Palindrome is a series of characters that are read the same way normal or reversed(most times not accounting spaces or whole words). With that out of the way, the characters pertaining this algorithm are numbers and lowercased letters so it's not that hard to grasp the concept. With a simple RegEx pattern, toLowerCase() and some more regex magic we get a **very** basic version of a palindrome algorithm.

### Roman Numeral Converter
I thought I knew Roman Numerals before this challenge. Turns out I didn't but I do know. 
Anyway, the code starts with initiating an object containing the patterns you would need to convert an *integer* number(Pretty sure Romans didn't know what a float number was) in the decimal system. We get rid of the negative cases and 0(zero didn't have its own numeral) and then we initialize an array in which we'll push each value. 
The basic concept is that we isolate each digit of the number and we need a way to recognize if it's in the tens, hundreds, thousands or just unit. We start by splitting the number argument given to us to its individual digits and then implementing an incrementor which each time a loop is completed it is multiplied by 10. In each loop we parse our number to an integer as to get rid of the digits past the floating point(really fancy stuff). Then we look for the specified property in our object and push its value to the array, which is then returned as a string after join()ing it. [Read More About Roman Numerals.](https://www.mathsisfun.com/roman-numerals.html)

### Caesar's Cipher(ROT13)
Probably the one I had more fun on cause turns out I like ASCII manipulation, even at a laughed at algorithm for its awful encryption.
Caesar's Cipher is one of the oldest forms of encryption and ROT13 is one of its many forms. For you to find the letter you are looking for you have to look 13 letters ahead, hence its name. You can't go beyond Z so you just start from A again. We need a way to map each character to a number but, luckily someone thought ahead of us(we weren't alive probably). All characters belong in what we call an ASCII table, which consists of these characters and their values as consecutive numbers. For example, the code for capital A is 65. For capital B is 66 and the list goes on.
So, knowing that, we know how to do calculations with each particular letter with its corresponding code. We strategically pick the code of A,Z and N. Why N you ask? N is placed exactly at the middle of the English alphabet and we use it as a guide to add 13 or subtract 13. Oh yeah, that's what the code does. Basic addition or subtraction. ONWARDS! [ASCII Table](https://www.asciitable.com/)

### Telephone Number Validator
This algorithm wants you to write a Regular Expression pattern that matches a bunch of valid formats of US phone numbers. This is the one I had to learn RegEx. I sat myself down and played with a site called regex101(plenty similar sites too) and after hours of imaginary swearing and fights, it finally clicked. I would try to go into more detail on how the regex works but I would suggest that you drop into one of the aforementioned sites and check it out yourself. Try as you might, I believe RegEx is one of the things each individual has to learn alone at a certain level and above. The code is four lines and returns `true` or `false` depending on if the number matches or not.

### Cash Register
Last one, and the most difficult among the rest. Where the other algorithms needed some smart thinking and small deviation from basic programming practices, this one required some more attention. As a concept it is pretty simple. You handle a money transaction based on dollars. You have the price of the item, the money the customer gives you and the cash in the drawer of your cash register. The money in your drawer is given as a 2-dimensional array containing an array with a currency value and the currency's amount. We need to return an object containing info if the register is able to give change with the `status: 'OPEN'` and an array containing the remaining money in the register, has the exact change with the `status: 'CLOSED'`and the original array, and if the drawer does not have enough money for change then you give `status: 'INSUFFICIENT FUNDS'`and return an empty array. 
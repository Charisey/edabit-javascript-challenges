
Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word of the argument is equal to 'zero' or 'one' (case insensitive) you should consider it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

### Examples

```
textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero one one two")  ➞ "01010101"

textToNumberBinary("one Zero zero one zero zero one one one one one zero oNe one one zero one zerO") ➞ "1001001111101110"

textToNumberBinary("zero one zero one zero one zero three") ➞ ""

textToNumberBinary("one one") ➞ ""
```

### Notes
- You must return the result as a string.
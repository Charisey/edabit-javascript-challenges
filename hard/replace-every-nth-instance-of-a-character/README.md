
Create a function that takes a string and replaces every `nth` instance of `oldChar` with `newChar`. Your function will have four parameters:
- **str** — The original input text to be processed.- **nth** — The `nth` instance to be replaced.- **oldChar** — The character being replaced.- **newChar** — The character replacing `oldChar`.
In other words, if `str` is "abababa", `nth` is 3, `oldChar` is "a" and `newChar` is "Z", you would replace the 3rd insrtance of "a" with "Z", returning "ababZba".

### Examples

```
replaceNth("Vader said: No, I am your father!", 2, "a", "o") ➞ "Vader soid: No, I am your fother!"

replaceNth("A glittering gem is not enough.", 0, "o", "-") ➞ "A glittering gem is not enough."
```

### Notes
- If `nth` is 0, negative or larger than instances of `oldChar`, return the original string.- Tests are case sensative.
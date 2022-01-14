# Class 05 - Lecture Notes

## CSS Units

### Absolute

Not recommended for responsive websites!

- PX - by far the most commonly used absolute unit

### Relative

- `%` - percentages
  - Percentages are always relative to some other value
  - Sometimes it's a value from the parent and other times it's a value from the element itself
  - `width: 50%` - half the width of the parent
  - `line-height: 50%` - half the font-size of the element itself
- `em`
  - `font-size: 1em` - equals the font-size of the parent
  - `font-size: 2em` - twice the font-size of the parent, etc
  - With other properties, 1em is equal to the computed font-size of the element itself... like with `line-height`.
- `rem` - root em
  - Relative to the **root `<html>` element**'s font size. Often easier to work with.
  - If the root font size is 20px, 1 rem is 20px, 2rem is 40px, etc.
- `vw` & `vh` - view height & view width
  - `1vw` is 1% of the width of the viewport(area of the window in which web content can be seen)
  - `1vh` is 1% of the height of the viewport
  - `height: 100vh` - would make that element take up the full height on the screen
  
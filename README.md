# Digital Clock

A simple digital clock that shows the current time as HH:MM:SS and updates every second. Built for Task 4 (Digital Clock) of my Web Development internship.

**Live page:** YOUR_GITHUB_PAGES_LINK_HERE

## About the project

The page displays the current hours, minutes, and seconds in large digits on a blue block, on a plain white page. The time updates automatically every second, and single-digit values have a leading zero (for example 07:05:09).

## Objective

To practice JavaScript `Date` objects, timers, DOM selection, and DOM updates.

## Tools used

- HTML5
- CSS3
- JavaScript
- VS Code
- Git and GitHub (free)

## How it works

1. `document.getElementById("clock")` selects the element that shows the time (DOM selection).
2. `updateClock()` creates a `new Date()` and reads the current hours, minutes, and seconds with `getHours()`, `getMinutes()`, and `getSeconds()`.
3. A helper function, `addZero()`, uses `String(number).padStart(2, "0")` to add a leading zero to single-digit values.
4. The three values are joined as `HH:MM:SS` and written into the page with `textContent` (DOM update).
5. `updateClock()` is called once immediately, so the page doesn't show the placeholder for the first second. Then `setInterval(updateClock, 1000)` runs it every 1000 milliseconds (timer).

The clock uses the 24-hour format, which matches the HH:MM:SS format in the task.

## Styling and responsiveness

- A white page with a blue (`#1f5fbf`) clock block and white digits, kept simple and clean.
- Flexbox centers the content on the screen.
- A monospace font keeps every digit the same width, so the clock doesn't shift sideways as the numbers change.
- A media query for screens of 600px and below reduces the text size and padding, so the clock fits on phones.

## Project structure

```
digital-clock/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Outcome

A working live digital clock that updates every second, shows leading zeros correctly, and looks clean on desktop and mobile. This task taught me how to get the time with the `Date` object, run code repeatedly with `setInterval`, and update a page from JavaScript.

## Author

Cedrick Niyibikora
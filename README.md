# Sitetracker Coding Challenge

## Pre requisites

Clone the repository and get the app running.
<br>
Create a new branch for each challenge

## Challenge #1

### The stubborn TextInput

The application lets the user add rows to a list by hitting the 'Add row' button. Once a new row is added to the list, users can edit the value by hitting the pencil icon and typing the new value... or can they? It seems like the TextInput doesn't want it's text to be changed. Can you make it work?

## Challenge #2

### To render or not to render

Uncomment line 22 in MyReduxList.js

> `// console.log('Render MyReduxList');`

and line 16 in ListItem.js

> `// console.log('Render ListItem', this.props.item.index + 1);`

Then follow these steps:

1. Tap the 'Add row' button twice
2. On the second row: _ipsum_, tap the pencil icon
3. Change the text from \*ipsu\***_m_** to \*ipsu\***_t_** and save the change

You will see the following output in the console:

    Render MyReduxList  // Initial render

    Render MyReduxList  // First tap on Add row
    Render ListItem 1

    Render MyReduxList  // Second tap on Add row
    Render ListItem 1
    Render ListItem 2
    Render ListItem 1
    Render ListItem 2

    Render ListItem 2   // Tap on pencil icon

    Render MyReduxList  // Delete letter 'm'
    Render ListItem 1
    Render ListItem 2

    Render MyReduxList  // Type letter 't'
    Render ListItem 1
    Render ListItem 2

    Render ListItem 2   // Tap enter on the keyboard

Can you optimize the code so you get the following output?

    Render MyReduxList  // Initial render

    Render MyReduxList  // First tap on Add row
    Render ListItem 1

    Render MyReduxList  // Second tap on Add row
    Render ListItem 2

    Render ListItem 2   // Tap on pencil icon
    Render MyReduxList  // Delete letter 'm'
    Render ListItem 2
    Render MyReduxList  // Type letter 't'
    Render ListItem 2
    Render ListItem 2   // Tap enter on the keyboard

## Challenge #3

### Bye by Lorem Ipsum

If a user wants to add a new word to the list, they have to click on the plus button and the edit the value that is added by default. This isn't very user friendly.
<br>
<br>

1. Usign react-navigation add a stack navigator
2. When the user taps the plus button, they should be taken to a separate screen where they add a new word instead of adding one from the dictionary
3. Navigating to the main list should display the new word added. The edit functionality should remain in place

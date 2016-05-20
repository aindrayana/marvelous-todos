# Marvelous-Todos
Mini project with React, Webpack and Firebase.

##Functionality:

“Add an item” area functionality:
- Adding an item to a column
- The user enters an item in the text box
- The user selects a column from the drop box
- The user clicks items “Add Item” and the item is added to the correct column

Deleting an item
- The user clicks the “x” by an item and it is removed from the column

Searching
- As the user enters text in the search box, both columns are filtered to display only items matching the text entered thus far

## Hierarchy of the components:
- Header
- Section
  * ItemAction
    * AddItem
    * SearchItem
  * Column1
  * Column2

## How to try:
- clone repo:
```
git clone git@github.com:aindrayana/marvelous-todos.git
```
- install npm component
```
npm install
```
- run server
```
npm run dev
```
- run browser on http://localhost:3000/


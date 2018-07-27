# Rachel Hardin: Code Louisville Front End Project SP2018

This site can be viewed simply by opening the index.html file.

## Description
```
This project is a simple website for a friend who is currently on hiatus from live-streaming video games. He is hoping to return soon, and this site will offer a simple way for his fans to interact with him and check on his status. Because of his sudden disappearance from streaming, there is a running joke that he is dead, so the site plays off of that. You can click the "test his fate" button on the site to generate a random fortune.

```



## Custom CSS Classes
```
The classes I created are:

1. nav
navbar container styling, rounded edges

2. container
the container for my content columns to allow consistent sizing by scale and positioning

3. column
my content columns, rounded edges

4. pressme
the button to trigger my click-event javascript. added hover effects for extra pizazz

5. menu
navbar contents styled to take full width at mobile breakpoint so they stack vertically instead of spread across the screen.

6. twitter
the navbar menu item styled to be positioned at the left of the navbar on desktop/tablet

7. title
center titling of the site styled at desktop/tablet breakpoint to be centered at the top in the navbar

8. podcast
the navbar menu item styled to be positioned at the right of the navbar on desktop/tablet



## Custom JavaScript Functions
```
The javascript function I created is fortuneFunction().

First, an array, fortuneArray, is created with multiple premade fortunes in it.
Then, within the fortuneFunction(), the variable yourFortune is set to equal a randomly generated fortune pulled from the fortuneArray. This is done by using the Math.floor method with the arguments of the Math.random method multiplied against the length of the fortuneArray. I chose to use the length method instead of specifying the exact number of array items so the script wouldn't have to be modified if I added or removed items from the fortuneArray. This returned a number indexed to an item in the fortuneArray, which then would call the item to be set as the value for yourFortune. Then, using the getElementById method, I pulled the fortune paragraph from the html by its id, cookie, and used the innerText method to set the paragraph's text to the randomly selected fortune assigned to the yourFortune variable. By putting the process of assigning a value to yourFortune inside of the fortuneFunction(), this allowed a new fortune to be generated upon repeated clicks, as the onclick event of the pressme item is set to run the fortuneFunction().


https://github.com/Js1005915/RetroConsoleGallery.git

How does it get the info?

When you click the get consoles button, it calles getConsoles(), which creates a GET request to the API,
awaits a readystate of 4 and 200 status, and then it gets the data and parses it into JSON.
It then calls the displayConosoles(data) function and passes in the parsed data so that it can read it

.open | makes the connection from the browser to the server
.onreadstatechange | waits for it to successfully connect
.send | this is telling it that the code we have previously wrote in the onreadystatechange to be sent to the server


Summary Calculation
The summary is calculated through 3 main steps
1. Creates the oldest and newest games and sets them to the first item in the data.consoles array, also setting totalGames to 0
2. Goes through a for each loop of each game console inside the consoles array, checks if its older or newer than the current oldest or newest game and changes it depending on the outcome, x.year > oldestGame.year ? if yes, oldestGame = x | Also adds + 1 to totalGames for each console that is ran through the loop
3. changes the innertext for the summaryline to include all of our brand new info we have aquired
const loadConsolesButtonObj = document.getElementById("loadConsolesButton")

var httpRequest = new XMLHttpRequest()

var data = null

const cardDivObj = document.getElementById("cardDiv")

const summaryLineBoxObj = document.getElementById("summaryLineBox")

const errorParagraphObj = document.getElementById("errorParagraph")



function getConsoles() {
    cardDivObj.innerHTML = ""
    //sets the httprequest to open the API
    httpRequest.open("get", "https://ozarktechwebdev.com/api/consoles.json")

    //ONCE this has changed and is ready, it gives us the data from the API
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            data = JSON.parse(httpRequest.responseText)
        }
    }
    //sends the request to the server
    httpRequest.send()


    //printing it out for my sake
    console.log(data)

    //adds the elemts for each game and appends each one as a new div
    data.consoles.forEach((game) => {
        newh2 = document.createElement("h2")
        newh2.textContent = game.name

        newimg = document.createElement("img")
        newimg.src = game.image
        newimg.alt = game.manufacturer

        newp = document.createElement("p")
        newp.textContent = `Manufacturer ${game.manufacturer} | Year ${game.year}`


        newdiv = document.createElement("div")
        newdiv.appendChild(newh2)
        newdiv.appendChild(newimg)
        newdiv.appendChild(newp)

        cardDivObj.appendChild(newdiv)
    })

    //adding the tracking of the oldest, newest, and total games
    oldestGame = data.consoles[0]
    newestGame = data.consoles[0]
    totalGames = 0

    //goes through each game, checks if its older or newer than the current oldest/newest and changes it if so
    data.consoles.forEach((game) => {
        if (game.year < oldestGame.year) {
            oldestGame = game
        }
        else if (game.year > newestGame.year) {
            newestGame = game
        }
        totalGames += 1
    })
    //chaning the summary text
    summaryLineBoxObj.innerText = `${totalGames} Consoles | Oldest ${oldestGame.name} ${oldestGame.year} | Newest ${newestGame.name} ${newestGame.year}`
}


loadConsolesButtonObj.addEventListener("click", getConsoles)

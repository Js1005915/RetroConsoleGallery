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
}


loadConsolesButtonObj.addEventListener("click", getConsoles)

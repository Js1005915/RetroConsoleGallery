const loadConsolesButtonObj = document.getElementById("loadConsolesButton")

var httpRequest = new XMLHttpRequest()

var data = null;



function getConsoles() {
    httpRequest.open("get", "https://ozarktechwebdev.com/api/consoles.json")

    httpRequest.onreadystatechange = function()  {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            data = JSON.parse(httpRequest.responseText)
        }
    }

    httpRequest.send()
    console.log(data)

}


loadConsolesButtonObj.addEventListener("click", getConsoles)

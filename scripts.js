// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {

    document.getElementById("takeoff").addEventListener('click', function() {
        let confirm = window.confirm('Confirm that the shuttle is ready for takeoff?');
        if (confirm) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });

    document.getElementById("landing").addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    document.getElementById("missionAbort").addEventListener('click', () => {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    })

    let altitude = 0
    let ship = document.getElementById("rocket");
    ship.style.position = "absolute";
    ship.style.bottom = "0px";
    ship.style.left = "310px";

    document.getElementById("up").addEventListener('click', () => {   
        let height = document.getElementById("spaceShuttleHeight"); 

       
        if (parseInt(ship.style.bottom) < 240) {
            ship.style.bottom = (parseInt(ship.style.bottom) + 10) + "px";
            altitude += 10000;
            height.innerHTML = altitude;
        }
    })

    document.getElementById("down").addEventListener('click', () => {
        let height = document.getElementById("spaceShuttleHeight");
        if (parseInt(ship.style.bottom) > 0) {
            altitude -= 10000;
            height.innerHTML = altitude;
            ship.style.bottom = (parseInt(ship.style.bottom) - 10) + "px";
        }
     })
    
    document.getElementById("left").addEventListener('click', () => {
        if (parseInt(ship.style.left) > 0) {
            ship.style.left = (parseInt(ship.style.left) - 10) + "px";
        }
    })

    document.getElementById("right").addEventListener('click', event => {
        if (parseInt(ship.style.left) < 650) {
            ship.style.left = (parseInt(ship.style.left) + 10) + "px";
        }
    })

}

window.addEventListener('load', init);
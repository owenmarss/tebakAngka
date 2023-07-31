let target = Math.floor(Math.random() * 100);
console.log(target);
let jarak = 0;
let hasilTebakan = "";

function nebak() {
    let tebakan = document.getElementById("myTebakan").value;

    if (tebakan == target) {
        hasilTebakan = "Tebakan Anda Benar!!!";
        document.getElementById("hasil").className = "correct";
    } else if (tebakan < target) {
        jarak = target - tebakan;
        if (jarak <= 5) {
            hasilTebakan = "Kurang dekat banget";
        } else if (jarak <= 15) {
            hasilTebakan = "Kurang dekat";
        } else if (jarak <= 25) {
            hasilTebakan = "Kurang jauh";
        } else if (jarak <= 50) {
            hasilTebakan = "Kurang jauh banget";
        } else {
            hasilTebakan = "Kurang jauh banget ++";
        }
        document.getElementById("hasil").className = "too-low";
    } else if (tebakan > target) {
        jarak = tebakan - target;
        if (jarak <= 5) {
            hasilTebakan = "Kelebihan dekat banget";
        } else if (jarak <= 15) {
            hasilTebakan = "Kelebihan dekat";
        } else if (jarak <= 25) {
            hasilTebakan = "Kelebihan jauh";
        } else if (jarak <= 50) {
            hasilTebakan = "Kelebihan jauh banget";
        } else {
            hasilTebakan = "Kelebihan jauh banget ++";
        }
        document.getElementById("hasil").className = "too-high";
    }

    document.getElementById("hasil").innerHTML = hasilTebakan;
}

// Add event listener to the input field to handle Enter key press
document.getElementById("myTebakan").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent form submission
        nebak(); // Call the nebak() function when Enter key is pressed
    }
});
function convertTime() {
    let input = document.getElementById("timeInput").value.trim();
    
    if (!input) {
        document.getElementById("result").innerText = "Please enter a time";
        return;
    }
    
    let parts = input.split(" ");
    if (parts.length < 2) {
        document.getElementById("result").innerText = "Please enter time in format: HH:MM AM/PM";
        return;
    }
    
    let time = parts[0];
    let period = parts[1].toUpperCase();

    let timeParts = time.split(":");
    if (timeParts.length < 2) {
        document.getElementById("result").innerText = "Invalid time format. Use HH:MM";
        return;
    }
    
    let hour = parseInt(timeParts[0]);
    let minute = timeParts[1];

    if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    if (period === "AM" && hour === 12) {
        hour = 0;
    }

    hour = hour.toString().padStart(2, "0");

    let militaryTime = hour + ":" + minute;

    document.getElementById("result").innerText =
        "Military Time: " + militaryTime;
}
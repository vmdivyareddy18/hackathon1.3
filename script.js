function sendMoney() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("result").innerHTML =
        "₹" + amount + " sent to " + name + " successfully ✅";
}

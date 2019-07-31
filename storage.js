/* global sessionStorage */

const bookingButton = document.getElementById("booking");

bookingButton.addEventListener("click", () => {
    const lastName = document.getElementById("lastname").value;
    const firstName = document.getElementById("firstname").value;
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("firstName", firstName);
    console.log(localStorage.getItem("firstName"), localStorage.getItem("lastName"));
    document.getElementById("canvas_container").classList.remove("none");
    document.getElementById("canvas_container").classList.add("display");
});
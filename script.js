const form = document.getElementById("submit");

form.addEventListener("submit", function () {
    event.preventDefault();
    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.id = "post";

    // Create an h2 element
    const newH2 = document.createElement("h2");
    const newH3 = document.createElement("h3");
    var heading = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    newH2.textContent = heading;
    newH3.textContent = author;

    // Create a p element
    const newP = document.createElement("p");
    var content = document.getElementById("content").value;
    newP.textContent = content;

    // Append the h2 and p elements to the div
    newDiv.appendChild(newH2);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newP);

    // Append the new div to the body
    document.body.appendChild(newDiv);
});

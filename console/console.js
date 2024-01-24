function scrollToSection() {
  var sectionMore = document.getElementById("sectionMore");

  // Check if the target section exists
  if (sectionMore) {
    sectionMore.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Target section not found");
  }
}

// Attach the scrollToSection function to the button click event
var btMoreElements = document.querySelectorAll(".btMore");

// Check if at least one element with the class 'btMore' exists
if (btMoreElements.length > 0) {
  // Attach the event listener to the first element found
  btMoreElements[0].addEventListener("click", scrollToSection);
} else {
  console.error("Button not found");
}

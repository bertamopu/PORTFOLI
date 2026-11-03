console.log("Javascript working...");

new WOW({ animateClass: "animate__animated", offset: 200 }).init();

let visuals = document.querySelectorAll(".projecte .visuals");

for (let i = 0; i < visuals.length; i++) {
  let video = visuals[i].querySelector("video");

  visuals[i].addEventListener("mouseenter", function () {
    video.currentTime = 0;
    video.play();
  });

  visuals[i].addEventListener("mouseleave", function () {
    video.pause();
  });
}

const cursor = Cursorly.init();

// Add your own image as a new cursor icon
const cursorIndex = cursor.addIcon("images/estrella-gran.svg", 64, 64); // Specify the image path and size

// Activate your custom icon
cursor.setIcon(cursorIndex);

cursor.setEffect({
  name: "sparkle", // 'trail', 'sparkle', 'emojiSnow', etc.
  color: "#f5cf86", // Hex color or "rainbow"
  density: 10, // Optional, number of particles per mouse move
  size: [3, 8], // Optional, min and max particle size
  decay: 0.92, // Optional, particle shrink rate
});

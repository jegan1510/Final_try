const galleryContainer = document.querySelector(".gallery");

// Define folders and image ranges
const folders = [
  { name: "Photo1", from: 1, to: 13 },
  { name: "Photo2", from: 14, to: 29 },
  { name: "Photo3", from: 30, to: 41 },
  { name: "Photo4", from: 42, to: 54 },
  { name: "Photo5", from: 56, to: 65 },
  { name: "Photo6", from: 66, to: 75 }, // Add more folders as needed
  { name: "Photo7", from: 76, to: 86 },
  { name: "Photo8", from: 87, to: 98 },
  { name: "Photo9", from: 99, to: 109 },
  { name: "Photo10", from: 110, to: 120 },
  { name: "Photo11", from: 121, to: 132 },
  { name: "Photo12", from: 133, to: 143 },
  { name: "Photo13", from: 144, to: 153 },
  { name: "Photo14", from: 154, to: 163 },
  { name: "Photo15", from: 164, to: 174 },
  { name: "Photo16", from: 175, to: 182 },
];

let galleryImages = [];
let currentIndex = 0;

folders.forEach((folder) => {
  for (let i = folder.from; i <= folder.to; i++) {
    const img = document.createElement("img");
    const basePath = `${folder.name}/Photo${i}`;

    img.src = `${basePath}.jpg`; // Try .jpg first
    img.alt = `Memory ${i}`;
    img.classList.add("gallery-img");
    
    // Append only when loaded (optional for better UX)
    img.onload = () => {
      galleryContainer.appendChild(img);
      galleryImages.push(img.src);

      img.addEventListener("click", () =>
        openLightbox(img.src, galleryImages.length - 1)
      );
    };
  }
});

// Lightbox setup
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

function openLightbox(src, index) {
  lightbox.classList.add("active");
  lightboxImg.src = src;
  currentIndex = index;
  lightbox.focus();
}

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.tabIndex = 0;

lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
  if (e.key === "Escape") lightbox.classList.remove("active");
});

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex];
}

function showPrevImage() {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex];
}

// Slider functionality

const sliders = {}; // Stores currentOffset per slider

function setupSlider(sliderId) {
  const sliderSection = document.getElementById(sliderId);
  if (!sliderSection) return;

  const boxContainer = sliderSection.querySelector(".box-container");
  const slider = sliderSection.querySelector(".slider");
  const previousBtn = sliderSection.querySelector(".arrow.left");
  const nextBtn = sliderSection.querySelector(".arrow.right");
  const boxes = boxContainer.querySelectorAll(".box");

  // Initialize offset for this slider
  sliders[sliderId] = 0;

  function updateSlider() {
    const boxWidth = boxes[0].offsetWidth + 20;
    const maxOffset = boxContainer.scrollWidth - slider.offsetWidth;
    const currentOffset = sliders[sliderId];

    boxContainer.style.transform = `translateX(-${currentOffset}px)`;

    previousBtn.disabled = currentOffset <= 0;
    nextBtn.disabled = currentOffset >= maxOffset - 5;
  }

  previousBtn.addEventListener("click", () => {
    const boxWidth = boxes[0].offsetWidth + 20;
    sliders[sliderId] = Math.max(0, sliders[sliderId] - boxWidth);
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    const boxWidth = boxes[0].offsetWidth + 20;
    const maxOffset = boxContainer.scrollWidth - slider.offsetWidth;
    sliders[sliderId] = Math.min(sliders[sliderId] + boxWidth, maxOffset);
    updateSlider();
  });

  // Initial state
  updateSlider();
}

window.addEventListener("DOMContentLoaded", () => {
  setupSlider("artisan");
  setupSlider("singaporean");
  setupSlider("beverages");
});

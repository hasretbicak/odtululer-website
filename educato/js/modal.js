let modal = document.createElement("div");
modal.className = "modal";
document.body.appendChild(modal);

let modalContent = document.createElement("img");
modalContent.className = "modal-content";
modal.appendChild(modalContent);

let closeBtn = document.createElement("span");
closeBtn.className = "close";
closeBtn.innerHTML = "&times;";
modal.appendChild(closeBtn);

function openModal(img) {
    modal.style.display = "block";
    modalContent.src = img.src;

    currentImageIndex = Array.from(document.querySelectorAll('.grid-item img')).indexOf(img);
    allImages = document.querySelectorAll('.grid-item img');
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

let prevButton = document.createElement("span");
prevButton.className = "prev";
prevButton.innerHTML = "&#10094;";
modal.appendChild(prevButton);

let nextButton = document.createElement("span");
nextButton.className = "next";
nextButton.innerHTML = "&#10095;";
modal.appendChild(nextButton);

nextButton.onclick = function () {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    modalContent.src = allImages[currentImageIndex].src;
}

prevButton.onclick = function () {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    modalContent.src = allImages[currentImageIndex].src;
}

function getImageTypesMenuScreenElement() {
    return document.getElementById("image-types-menu-screen");
}

function getImageTypesMenuElement() {
    return document.getElementById("image-types-menu");
}

function getImageScreenElement() {
    return document.getElementById("image-screen");
}

function getShowImageTypesMenuScreenElement() {
    return document.getElementById("show-image-types-menu-screen");
}

function getToggleImageOrderSwitchElement() {
    return document.getElementById("toggle-image-order-switch");
}

function getToggleImageTitleSwitchElement() {
    return document.getElementById("toggle-image-title-switch");
}

function getToggleMultipleImagesSwitchElement() {
    return document.getElementById("toggle-multiple-images-switch");
}

function getImageTitleElement() {
    return document.getElementById("image-title");
}

function getImagePreviewElement() {
    return document.getElementById("image-preview");
}

function getImagePreviewContainerElement() {
    return document.getElementById("image-preview-container");
}

function getImageListPreviewContainerElement() {
    return document.getElementById("image-list-preview-container");
}

function getImageListPreviewElement() {
    return document.getElementById("image-list-preview");
}

function getImageNavigationBarElement() {
    return document.getElementById("image-navigation-bar");
}

function getCurrentImageNumberElement() {
    return document.getElementById("current-image-number");
}

function getTotalImageNumberElement() {
    return document.getElementById("total-image-number");
}

function getPreviousImageButtonElement() {
    return document.getElementById("previous-image-button");
}

function getNextImageButtonElement() {
    return document.getElementById("next-image-button");
}

function getToggleImageTitleElement() {
    return document.getElementById("toggle-image-title");
}

function getToggleMultipleImagesElement() {
    return document.getElementById("toggle-multiple-images");
}

function showImageTypesMenuScreen() {
    const imageTypesMenuScreenElement = getImageTypesMenuScreenElement();
    imageTypesMenuScreenElement.classList.remove("hidden");
}

function hideImageTypesMenuScreen() {
    const imageTypesMenuScreenElement = getImageTypesMenuScreenElement();
    imageTypesMenuScreenElement.classList.add("hidden");
}

function showImageScreen() {
    const imageScreenElement = getImageScreenElement();
    imageScreenElement.classList.remove("hidden");
}

function hideImageScreen() {
    const imageScreenElement = getImageScreenElement();
    imageScreenElement.classList.add("hidden");
}

function updateImagePreview(appState) {
    const currentImage = appState.getCurrentImage();
    const imageSrc = getImageUrl(currentImage);
    const imagePreviewElement = getImagePreviewElement();
    imagePreviewElement.setAttribute("src", imageSrc);
}

function updateImageListPreview(appState) {
    const images = appState.getImages();
    const imageListElement = getImageListPreviewElement();
    imageListElement.innerHTML = "";
    images.forEach((image) => {
        const imageListItemElement = document.createElement("figure");
        imageListItemElement.classList.add("image-list-item");
        const imageListItemTitleElement = document.createElement("figcaption");
        imageListItemTitleElement.textContent = image.title;
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", getImageUrl(image));
        imageElement.setAttribute("alt", image.title);

        imageListItemElement.appendChild(imageElement);
        imageListItemElement.appendChild(imageListItemTitleElement);

        imageListElement.appendChild(imageListItemElement);
    });
}

function populateImageTypesMenu(imageTypes, appState) {
    const imageTypesMenuElement = getImageTypesMenuElement();
    imageTypes.forEach((imageType) => {
        const imageTypeButtonElement = document.createElement("button");
        imageTypeButtonElement.classList.add("image-type-button");

        const imageTypeIconElement = document.createElement("img");
        imageTypeIconElement.setAttribute("src", getImageTypeUrl(imageType));
        imageTypeIconElement.setAttribute("alt", "");
        imageTypeIconElement.classList.add("image-type-icon");

        const imageTypeTitleElement = document.createElement("span");
        imageTypeTitleElement.textContent = imageType.title;
        imageTypeTitleElement.classList.add("image-type-title");

        imageTypeButtonElement.appendChild(imageTypeIconElement);
        imageTypeButtonElement.appendChild(imageTypeTitleElement);

        imageTypeButtonElement.addEventListener("click", () => {
            appState.setSelectedType(imageType.type);
            appState.setImages(filterByType(images, imageType.type));
            appState.setCurrentImageIndex(0);
            toggleImageOrder(appState);
            updateImagePreview(appState);
            updateImageListPreview(appState);
            updateImageTitle(appState);
            updateCurrentImageNumber(appState);
            updateTotalImageNumber(appState);
            hideImageTypesMenuScreen();
            showImageScreen();
        });
        imageTypesMenuElement.appendChild(imageTypeButtonElement);
    });
}

function updateTotalImageNumber(appState) {
    const images = appState.getImages();
    const totalImageNumberElement = getTotalImageNumberElement();
    totalImageNumberElement.textContent = images.length;
}

function updateCurrentImageNumber(appState) {
    const index = appState.getCurrentImageIndex();
    const currentImageNumberElement = getCurrentImageNumberElement();
    currentImageNumberElement.textContent = index + 1;
}

function updateImageTitle(appState) {
    const image = appState.getCurrentImage();
    const imageTitleElement = getImageTitleElement();
    imageTitleElement.textContent = image.title;
}

function updateToggleSwitch(checked, element) {
    checked ? element.classList.add("checked") : element.classList.remove("checked");
}

function getRandomBackgroundColor(backgroundColors) {
    return getRandomValueFromArray(backgroundColors);
}

function initBody(backgroundColors) {
    document.body.style.background = getRandomBackgroundColor(backgroundColors);
}

function toggleDisplayImageTitle(appState) {
    const imageTitleElement = getImageTitleElement();
    const imageListPreviewElement = getImageListPreviewElement();
    if (appState.getDisplayImageTitle()) {
        imageTitleElement.classList.remove("hidden");
        imageListPreviewElement.classList.add("show-title");
    } else {
        imageTitleElement.classList.add("hidden");
        imageListPreviewElement.classList.remove("show-title");
    }
}

function toggleDisplayMultipleImages(appState) {
    const imageListPreviewContainerElement = getImageListPreviewContainerElement();
    const imagePreviewContainerElement = getImagePreviewContainerElement();
    const imageNavigationBarElement = getImageNavigationBarElement();
    if (appState.getDisplayMultipleImages()) {
        imageListPreviewContainerElement.classList.remove("hidden");
        imageNavigationBarElement.classList.add("hidden");
        imagePreviewContainerElement.classList.add("hidden");
    } else {
        imageListPreviewContainerElement.classList.add("hidden");
        imageNavigationBarElement.classList.remove("hidden");
        imagePreviewContainerElement.classList.remove("hidden");
    }
}

function initShowImageTypesMenuScreen(appState) {
    const showImageTypesMenuScreenElement = getShowImageTypesMenuScreenElement();
    showImageTypesMenuScreenElement.addEventListener("click", () => {
        appState.setSelectedType(null);
        appState.setImages(null);
        appState.setCurrentImageIndex(0);
        hideImageScreen();
        showImageTypesMenuScreen();
    });
}

function initImagePreview(appState) {
    const imagePreviewElement = getImagePreviewElement();
    imagePreviewElement.addEventListener("click", () => {
        handleNextImageButtonOnClick(appState);
    });
}

function toggleImageOrder(appState) {
    const images = appState.getImages();
    if (appState.getSortAlphabetically()) {
        appState.setImages(sortByTitle(images));
    } else {
        appState.setImages(sortRandomly(images));
    }
}

function initToggleImageOrderOnChange(appState) {
    const toggleImageOrderSwitchElement = getToggleImageOrderSwitchElement();
    toggleImageOrderSwitchElement.addEventListener("change", (event) => {
        appState.setSortAlphabetically(event.target.checked);
        appState.setCurrentImageIndex(0);
        toggleImageOrder(appState);
        updateImagePreview(appState);
        updateImageTitle(appState);
        updateCurrentImageNumber(appState);
        updateImageListPreview(appState);
        updateToggleSwitch(event.target.checked, toggleImageOrderSwitchElement);
    });
}

function initToggleImageTitleOnChange(appState) {
    const toggleImageTitleElement = getToggleImageTitleElement();
    const toggleImageTitleSwitchElement = getToggleImageTitleSwitchElement();
    toggleImageTitleElement.addEventListener("change", (event) => {
        appState.setDisplayImageTitle(event.target.checked);
        toggleDisplayImageTitle(appState);
        updateToggleSwitch(event.target.checked, toggleImageTitleSwitchElement);
    });
}

function initToggleMultipleImagesOnChange(appState) {
    const toggleMultipleImagesElement = getToggleMultipleImagesElement();
    const toggleMultipleImagesSwitchElement = getToggleMultipleImagesSwitchElement();
    toggleMultipleImagesElement.addEventListener("change", (event) => {
        appState.setDisplayMultipleImages(event.target.checked);
        toggleDisplayMultipleImages(appState);
        updateToggleSwitch(event.target.checked, toggleMultipleImagesSwitchElement);
    });
}

function initPreviousImageButton(appState) {
    const previousImageButtonElement = getPreviousImageButtonElement();
    previousImageButtonElement.addEventListener("click", () => {
        const currentIndex = appState.getCurrentImageIndex();
        const newIndex = currentIndex - 1;
        const images = appState.getImages();
        appState.setCurrentImageIndex(newIndex >= 0 ? newIndex : images.length - 1);
        updateImagePreview(appState);
        updateImageTitle(appState);
        updateCurrentImageNumber(appState);
    });
}

function handleNextImageButtonOnClick(appState) {
    const currentIndex = appState.getCurrentImageIndex();
    const newIndex = currentIndex + 1;
    const images = appState.getImages();
    appState.setCurrentImageIndex(newIndex < images.length ? newIndex : 0);
    updateImagePreview(appState);
    updateImageTitle(appState);
    updateCurrentImageNumber(appState);
}

function initNextImageButton(appState) {
    const nextImageButtonElement = getNextImageButtonElement();
    nextImageButtonElement.addEventListener("click", () => {
        handleNextImageButtonOnClick(appState);
    });
}

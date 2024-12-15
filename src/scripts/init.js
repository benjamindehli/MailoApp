if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then((reg) => console.log("service Worker: registered"))
            .catch((err) => console.log(`service worker; Error:${err}`));
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initBody(backgroundColors);
    const appState = new AppState();
    populateImageTypesMenu(imageTypes, appState);
    initShowImageTypesMenuScreen(appState);
    initImagePreview(appState);
    initToggleImageOrderOnChange(appState);
    initToggleImageTitleOnChange(appState);
    initToggleMultipleImagesOnChange(appState);
    initPreviousImageButton(appState);
    initNextImageButton(appState);
});

class AppState {
    constructor(props) {
        this.selectedType = props?.selectedType || null;
        this.images = props?.images || [];
        this.currentImageIndex = props?.currentImageNumber || 0;
        this.displayImageTitle = props?.displayImageTitle || false;
        this.displayMultipleImages = props?.displayMultipleImages || false;
    }
    getSelectedType() {
        return this.selectedType;
    }
    setSelectedType(selectedType) {
        this.selectedType = selectedType;
    }
    getImages() {
        return this.images;
    }
    setImages(images) {
        this.images = images;
    }
    getCurrentImageIndex() {
        return this.currentImageIndex;
    }
    setCurrentImageIndex(index) {
        this.currentImageIndex = index;
    }
    getDisplayImageTitle() {
        return this.displayImageTitle;
    }
    setDisplayImageTitle(displayImageTitle) {
        this.displayImageTitle = displayImageTitle;
    }
    getDisplayMultipleImages() {
        return this.displayMultipleImages;
    }
    setDisplayMultipleImages(displayMultipleImages) {
        this.displayMultipleImages = displayMultipleImages;
    }
    getCurrentImage() {
        return this.images[this.currentImageIndex];
    }
}

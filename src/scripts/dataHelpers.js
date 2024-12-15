function filterByPropertyValue(array, property, value) {
    return array.filter((arrayItem) => {
        return arrayItem[property] === value;
    });
}

function filterByType(array, type) {
    return filterByPropertyValue(array, "type", type);
}

function sortByPropertyValue(array, property) {
    return array.sort((a, b) => {
        return a[property].localeCompare(b[property], "no-NB");
    });
}

function sortByTitle(array) {
    return sortByPropertyValue(array, "title");
}

function sortRandomly(array) {
    return array.sort(() => {
        return 0.5 - Math.random();
    });
}

function getImagePath() {
    return "/src/data/images/";
}

function getImageTypePath() {
    return "/src/data/imageTypes/";
}

function getImageFileName(image) {
    return `${image.type}_${image.key}.${image.fileExtension}`;
}

function getImageTypeFileName(imageType) {
    return `type_${imageType.type}.svg`;
}

function getImageUrl(image) {
    const imagePath = getImagePath();
    const imageFileName = getImageFileName(image);
    return `${imagePath}${imageFileName}`;
}

function getImageTypeUrl(imageType) {
    const imageTypePath = getImageTypePath();
    const imageTypeFileName = getImageTypeFileName(imageType);
    return `${imageTypePath}${imageTypeFileName}`;
}

function getRandomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

import { DATA_ARRAY } from "./inputData";

const ITEMS = DATA_ARRAY;

const ARTICLE_ID_REGEX = /^[0-9.]+$/;
const BASE_IMG_URL_PATH = "/images";
const EXT = ".png";

export function searchItem(searchText) {

    let filteredList = []

    if (ARTICLE_ID_REGEX.test(searchText))
        filteredList = ITEMS.filter((item) => item.articleId.includes(searchText))
    else
        filteredList = ITEMS.filter((item) => item.model.toLowerCase().includes(searchText.toLowerCase()))

    return filteredList
}

export function getItems() {
    return ITEMS;
}

export function formatAmount(amt) {

    let formattedAmount = amt.toString();

    const groups = [];

    groups.unshift(formattedAmount.slice(-3));
    formattedAmount = formattedAmount.slice(0, -3);

    while (formattedAmount.length > 2) {
        groups.unshift(formattedAmount.slice(-2));
        formattedAmount = formattedAmount.slice(0, -2);
    }
    if (formattedAmount) {
        groups.unshift(formattedAmount);
    }

    return groups.join(",");
}

export function getImageUrl(articleId) {

    return `${BASE_IMG_URL_PATH}/${articleId.replaceAll(".", "_")}${EXT}`;
}

export function getItemByArticleId(articleId) {

    return ITEMS.find((item) => item.articleId === articleId);
}
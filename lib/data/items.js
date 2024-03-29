import { HAFFLE_DATA_ARRAY, HINDWARE_DATA_ARRAY } from "./inputData";

const HAFFLE_ITEMS = HAFFLE_DATA_ARRAY;
const HINDWARE_ITEMS = HINDWARE_DATA_ARRAY;

const ARTICLE_ID_REGEX = /^[0-9.]+$/;
const BASE_IMG_URL_PATH = "/images";
const EXT = ".png";

export function searchItem(isHaffele, searchText) {

    const itemList = isHaffele ? HAFFLE_ITEMS : HINDWARE_ITEMS;

    let filteredList = []

    if (ARTICLE_ID_REGEX.test(searchText))
        filteredList = itemList.filter((item) => item.articleId.includes(searchText))
    else
        filteredList = itemList.filter((item) => item.model.toLowerCase().includes(searchText.toLowerCase()))

    return filteredList
}

export function getItems(isHaffele) {
    return isHaffele ? HAFFLE_ITEMS : HINDWARE_ITEMS;
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

    const SUB_DIR = articleId.includes("H.") ? 'hindware' : 'haffele';

    return `${BASE_IMG_URL_PATH}/${SUB_DIR}/${articleId.replaceAll("H.", "").replaceAll(".", "_")}${EXT}`;
}

export function getItemByArticleId(isHaffele, articleId) {

    const itemList = isHaffele ? HAFFLE_ITEMS : HINDWARE_ITEMS;

    return itemList.find((item) => item.articleId === articleId);
}
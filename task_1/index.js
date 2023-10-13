import { encoded, translations } from './data.js';

function decodeFields(encoded, translations) {
    const decoded = encoded.map(item => {
        const decodedItem = {...item };

        for (const key in item) {
            if (key.endsWith("Id")) {
                const id = item[key];
                if (id in translations) {
                    decodedItem[key] = translations[id];
                }
            }
        }

        return decodedItem;
    });

    const uniqueIds = Array.from(
        new Set(encoded.flatMap(item => Object.values(item).filter(val => typeof val === "string" && val.endsWith("Id")))));

    return { decoded, uniqueIds };
}

const result = decodeFields(encoded, translations);
console.log("Decoded:", result.decoded);
console.log("Unique Ids:", result.uniqueIds);
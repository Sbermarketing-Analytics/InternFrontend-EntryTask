import {encoded, translations} from './data.js'

// returns a new array with decoded deep copies.
function decode(objArr, idToStrTable, ignoredKeysArr) {
    let i = objArr.length;
    let res = [];
    let uniqueIds = new Set();

    while (--i >= 0) {
        let newObj = {...objArr[i]};
        for (let [key, id] of Object.entries(newObj)) {
            if (ignoredKeysArr.includes(key)) continue;
            newObj[key] = idToStrTable[id] ?? id;
            uniqueIds.add(id);
        }
        res.push(newObj);
    }

    return [res, uniqueIds];
}

// this one changes the input array like array.sort does but uses/creates less GC
function decodeInPlace(objArr, idToStrTable, ignoredKeysArr) {
    let i = objArr.length;
    let uniqueIds = new Set();

    while (--i >= 0) {
        for (let [key, id] of Object.entries(objArr[i])) {
            if (ignoredKeysArr.includes(key)) continue;
            objArr[i][key] = idToStrTable[id] ?? id;
            uniqueIds.add(id);
        }
    }

    return [objArr, uniqueIds];
}

function destructiveButPerformant() {
    const ignored = ['groupId', 'service', 'formatSize', 'ca'];
    const [decoded, uniques] =  decodeInPlace(encoded, translations, ignored);
    console.log('DECODED TABLE: ')
    console.table(decoded);
    console.log(`Unique ids (${uniques.size}) : `, ...uniques)
}

function clean() {
    const ignored = ['groupId', 'service', 'formatSize', 'ca'];
    const [decoded, uniques] =  decode(encoded, translations, ignored);
    console.table(encoded);
    console.log('has been decoded into');
    console.table(decoded);
    console.log('using below table');
    console.log(translations);
    console.log(`found ${uniques.size} unique Ids which are: `, ...uniques);
    console.log('Ignored keys: ', ignored);
}

clean();

// destructiveButPerformant();
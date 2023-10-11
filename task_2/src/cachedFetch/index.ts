function cachedFetchFactory() {
    const cache = new Map();
    return async function cachedFetch(url: string) {
        console.log('getting: ', url);
        if (cache.has(url)) {
            console.log('got from cache: ', url);
            return cache.get(url);
        }
        const req = await fetch(url);
        const body = await req.json();
        console.log('fetched: ', url);
        cache.set(url, body);
        return body;
    };
}

export default cachedFetchFactory();
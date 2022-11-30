export const ApiRequest = async(url) => {
    const resp = await fetch(url, {
        method: 'GET', 
        mode: 'cors', 
        cache: 'force-cache'
    });

    return await resp.json();
};
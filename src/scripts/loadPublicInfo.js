export default (api) => {
    return fetch(api + "public_info")
        .then(r => r.json());
}
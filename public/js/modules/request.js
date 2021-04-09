export default async function request(
    url,
    data,
    method = "GET"
) {
    let body = null;
    if (data) body = JSON.stringify(data)
    const res = await fetch(url, {
        body,
        method,
        headers: { 'Content-Type': 'application/json' }
    })
    const dataRes = await res.json()
    return dataRes
}
export async function apiFetch(url, options={}) {
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json', ...options.headers
        },
        ...options,
    });
    if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
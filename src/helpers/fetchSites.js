export async function getSites(url = "https://api.netlify.com/api/v1/sites") {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "christian17zxe@gmail.com",
            Authorization: "Bearer 1oPacn5PkNvgHKj2A8cPl_ns3dsuK9CHm8l7S8Fjn0I"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    });
    return response.json();
}

export default getSites
async function request(
    urlString: string,
    method = "GET",
    headers = {},
    body = null
): Promise<any> {
    const bodyObj = body ? JSON.stringify(body) : null;
    console.log("urlString", urlString, method, body);

    try {
        const response = await fetch(urlString, {
            method,
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: bodyObj,
        });

        return response.json();
    } catch (error) {
        console.error("Error in request", error);

        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
}

export const get = (url: string, headers: any = null) => {
    return request(url, "GET", headers);
};

export const post = (url: string, body: any, headers: any = null) => {
    return request(url, "POST", headers, body);
};

export const put = (url: string, body: any, headers: any = null) => {
    return request(url, "PUT", headers, body);
};

export const patch = (url: string, body: any, headers: any = null) => {
    return request(url, "PATCH", headers, body);
};

export const del = (url: string, headers: any = null) => {
    return request(url, "DELETE", headers);
};

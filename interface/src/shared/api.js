const API_URL = 'http://localhost:8000';

export const postSentence = async (sentence) => {
    return await fetch(`${API_URL}/generate_image`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify({
            description: 'Mock description',
        }),
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        });
};

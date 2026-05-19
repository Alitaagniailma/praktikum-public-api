const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Gagal mengambil data dari API");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

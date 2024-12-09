export async function fetchProducts() {
    let data: any = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products ?? [];
}
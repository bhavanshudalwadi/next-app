export async function fetchProducts() {
    let data: any = await fetch("https://dummyjson.com/products"); /* eslint-disable  @typescript-eslint/no-explicit-any */
    data = await data.json();
    return data.products ?? [];
}
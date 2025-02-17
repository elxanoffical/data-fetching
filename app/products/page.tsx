type Product = {
  id: number;
  title: string;
  price: number;
  descripton: string;
};
export default async function ProductsPage() {
  const detailResponse = await fetch("http://localhost:3001/products/1")
  const details = await detailResponse.json()
  const response = await fetch("http://localhost:3001/products",{
    cache: "no-store"
  })
  const products = await response.json();
  console.log(products);
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => {
        return (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-lg font-medium">{product.title}</h2>
            <p>{product.descripton}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <p>{details.price}</p>
          </li>
        );
      })}
    </ul>
  );
}

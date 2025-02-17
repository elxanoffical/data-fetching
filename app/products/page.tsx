import { cookies } from "next/headers";
type Product = {
  id: number;
  title: string;
  price: number;
  descripton: string;
};
export default async function ProductsPage() {
  const response = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });
  const products = await response.json();

  const cookiesStore = cookies();
  (await cookiesStore).get("theme");

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
          </li>
        );
      })}
    </ul>
  );
}

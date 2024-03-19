import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </>
  );
}

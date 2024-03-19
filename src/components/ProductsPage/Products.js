import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </>
  );
}

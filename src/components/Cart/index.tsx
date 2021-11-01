import { useCart } from "../../Providers/Cart";
import { CartList, Container } from "./styles";

export const Cart = () => {
  const { cart, deleteProduct } = useCart();

  return (
    <CartList>
      {cart.map((product, index) => (
        <Container>
          <img src={product.image} alt={product.title} />
          <span>{product.title}</span>
          <span>{product.price}</span>
          <button onClick={() => deleteProduct(product, index)}>Remover</button>
        </Container>
      ))}
    </CartList>
  );
};

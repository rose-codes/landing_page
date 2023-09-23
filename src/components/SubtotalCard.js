import { useShopContext } from "../hooks/useShopContext";
import { Card, makeStyles } from "@fluentui/react-components";
export const SubtotalCard = () => {
  const { getCartSubtotal } = useShopContext();
  const subtotal = getCartSubtotal();
  return (
    <Card>
      <div className="heading">Subtotal</div>
      <div>Tax and shipping and handling will be calculated at checkout.</div>
      <div>Subtotal: ${subtotal}</div>
      <button>Checkout</button>
    </Card>
  );
};

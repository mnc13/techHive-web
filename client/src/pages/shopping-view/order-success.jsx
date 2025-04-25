import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateOrderStatus } from "@/store/shop/order-slice";

function OrderSuccessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

    // Update order status for COD
    dispatch(updateOrderStatus({ orderId, status: "pending" })).then((data) => {
      if (data?.payload?.success) {
        sessionStorage.removeItem("currentOrderId");
        navigate("/shop/payment-success");
      }
    });
  }, [dispatch, navigate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing Order...Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default OrderSuccessPage;

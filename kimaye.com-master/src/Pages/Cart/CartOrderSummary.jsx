import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartData } from "../../Redux/cart/action";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({ quantity }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  // const [cartData, SetCartData] = useState([]);
  // const [quantity, setQuantity] = useState(1);


  const cartData=useSelector((store)=>store.CartReducer.cart);
  
  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch]);

  let total = 0;
  if (cartData.length > 0) {
    cartData.map((item) => (total += Number(item.price) * quantity));
  }

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal">{total} &#8377;</OrderSummaryItem>

        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {total} &#8377;
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="green"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
    </Stack>
  );
};

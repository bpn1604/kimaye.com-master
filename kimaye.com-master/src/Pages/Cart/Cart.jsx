import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { getCartData } from "../../Redux/cart/action";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  
  const [quantity, setQuantity] = useState(0);
  
  


  const dispatch=useDispatch();
  const cartData =useSelector((store)=>store.CartReducer.cart);

  useEffect(() => {
   
     dispatch(getCartData())
  }, [dispatch]);

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      mt="100px"
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart {cartData.length} items
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary quantity={quantity} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link to="/" color="blue">
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Cart;

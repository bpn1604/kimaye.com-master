import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import upi from "../Icons/upi.png";
import gpay from "../Icons/gpay.png";
import paytm from "../Icons/paytm.png";
import phonepay from "../Icons/phonepay.png";
import debiticon from "../Icons/debiticon.jpg";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../Redux/cart/action";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const [cartData, SetCartData] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch=useDispatch();

  useEffect(() => {
    axios
      .get("https://databasekemay.onrender.com/cart")
      .then((r) => SetCartData(r.data))
      .catch((e) => console.log(e));
  }, []);

  let total = 0;
  if (cartData.length > 0) {
    cartData.map((item) => (total += Number(item.price)));
  }
  // console.log(total);


  const emptyCart=()=>{
    const id=cartData.id;
    // console.log(id);
    dispatch(removeCart(id));
  }

  return (
    <Box>
      <Flex>
        <Box
          width={{ base: "100%", md: "100%", lg: "70%" }}
          height="fit-content"
        >
          <Box
            margin="40px"
            padding="20px"
            borderRadius="20px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            width={{ base: "100%", md: "80%", lg: "60%" }}
            marginX="auto"
            lineHeight="50px"
          >
            <Text>Name</Text>
            <Input placeholder="Enter Your Name" />
            <Text>Email</Text>
            <Input placeholder="Enter Your Email" />
            <Text>Mobile Number</Text>
            <Input placeholder="Enter Your Mobile Number" />
            <Text>Delivery Address</Text>
            <Input placeholder="Enter Your Delivery Address" />
          </Box>
          <HStack padding="20px" justifyContent="center">
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="green" value="1">
                  <Image src={upi} htmlWidth="70px" />
                </Radio>
                <Radio colorScheme="green" value="2">
                  <Image src={gpay} htmlWidth="70px" />
                </Radio>
                <Radio colorScheme="green" value="3">
                  <Image src={paytm} htmlWidth="70px" />
                </Radio>
                <Radio colorScheme="green" value="4">
                  <Image src={phonepay} htmlWidth="70px" />
                </Radio>
                <Radio colorScheme="green" value="5">
                  <Image src={debiticon} htmlWidth="100px" />
                </Radio>
              </Stack>
            </RadioGroup>
          </HStack>
        </Box>

        {/* for desktop */}
        <Box
          background="Menu"
          width="30%"
          display={{ base: "none", md: "none", lg: "inline-flex" }}
        >
          <VStack
            margin="40px"
            width="100%"
            borderRadius="20px"
            lineHeight="40px"
            padding="20px"
            height="fit-content"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          >
            <Text fontWeight="bold">Order Summery</Text>
            <Flex justifyContent="space-between" gap="200px">
              <Text fontWeight="500">SubTotal</Text>

              <Text>{total} &#8377;</Text>
            </Flex>
            <Flex justifyContent="space-between" gap="160px">
              <Text fontWeight="500">Delivery Charges</Text>

              <Text>{5} &#8377;</Text>
            </Flex>
            <Flex justifyContent="space-between" gap="180px">
              <Text fontWeight="500">Order Total</Text>

              <Text>{total + 5} &#8377;</Text>
            </Flex>
            <Flex justifyContent="space-between" gap="160px">
              <Button
                colorScheme="blue"
                onClick={() => (
                  toast({
                    title: "You Placed the order",
                    position: "top-right",
                    description:
                      "Your order will be delivered soon ! continue shoping...",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  }),
                  navigate("/")
                )}
              >
                Place Order
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>

      {/* for mobile devides */}
      <Box
        height="fit-content"
        justifyContent="center"
        display={{ base: "inline-flex", md: "inline-flex", lg: "none" }}
      >
        <VStack
          margin="40px"
          width="100%"
          borderRadius="20px"
          lineHeight="40px"
          padding="20px"
          height="fit-content"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        >
          <Text fontWeight="bold">Order Summery</Text>
          <Flex justifyContent="space-between" gap="150px">
            <Text fontWeight="500">SubTotal</Text>

            <Text>{total} &#8377;</Text>
          </Flex>
          <Flex justifyContent="space-between" gap="110px">
            <Text fontWeight="500">Delivery Charges</Text>

            <Text>{5} &#8377;</Text>
          </Flex>
          <Flex justifyContent="space-between" gap="136px">
            <Text fontWeight="500">Order Total</Text>

            <Text>{total + 5} &#8377;</Text>
          </Flex>
          <Flex justifyContent="space-between" gap="160px">
            <Button
              colorScheme="blue"
              onClick={() => (
                toast({
                  title: "You Placed the order",
                  position: "top-right",
                  description:
                    "Your order will be delivered soon ! continue shoping...",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                }),
                emptyCart,
                navigate("/")
              )}
            >
              Place Order
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default Checkout;

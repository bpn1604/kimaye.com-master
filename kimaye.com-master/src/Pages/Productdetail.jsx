import {
  Box,
  Button,
  Image,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../Redux/app/action";
import { useToast } from '@chakra-ui/react'
import { MdLocalShipping } from "react-icons/md";
import axios from "axios";
import { getCartData } from "../Redux/cart/action";






const Productdetail = () => {
  const toast = useToast()
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const appdata = useSelector((store) => store.AppReducer.appdata);
  // console.log(appdata);
  const [currentproduct, setCurrentproduct] = useState({});
  // console.log(currentproduct);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  //single product find

  useEffect(() => {
    if (id) {
      const temp = appdata.find((item) => item.id === Number(id));
      temp && setCurrentproduct(temp);
    }
  }, [id, appdata, location]);



  //cart

  const handleCart=()=>{
    
    axios
    .post("https://databasekemay.onrender.com/cart",currentproduct)
    .then((r)=>dispatch(getCartData()))
  }

  return (
    <div>
      <br />
     

      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                currentproduct.image
              }
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {currentproduct.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={500}
                fontSize={"2xl"}
              >
                &#8377; {currentproduct.price} INR (MRP)
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                 Festive season is here! You can get upto 50% off on Selected products
                </Text>
                <Text fontSize={"lg"}>
                  Get the best deal on {currentproduct.title} in this festive season save upto 50% on every product you buy from kimaye.com  You can buy this product as low as {currentproduct.price}  &#8377; only! Buy now Hurry up!
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  WHAT WE PROVIDE
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Best of the best handchoosen items</ListItem>
                    <ListItem>IFD Certified</ListItem>{" "}
                    <ListItem>Live Shipment track</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Door Step Delivery</ListItem>
                    <ListItem>Fastest Delevery</ListItem>
                    <ListItem>Instant Refund</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Product Name:
                    </Text>{" "}
                    {currentproduct.title}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                       Price:
                    </Text>{" "}
                    &#8377; {currentproduct.price}  INR
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Weight Per item:
                    </Text>{" "}
                    500 gm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Certification-Tests:
                    </Text>{" "}
                    FDI Certified
                  </ListItem>
                 
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Return Policy:
                    </Text>{" "}
                    Instant Cashback
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Product Quality:
                    </Text>{" "}
                   Fresh Handpicked{" "}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={(e)=>(
                
                handleCart(),

                toast({
                  position:"top-right",
                  title: '',
                  description: "Your Product is added to cart",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })

              )}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>4-5 business Hours delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Productdetail;

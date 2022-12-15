import { Box, CloseButton, Flex, Image, Link, Select, Stack, Text, useColorModeValue,useColorModeValue as mode, useToast, Button } from '@chakra-ui/react'
import * as React from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { getCartData } from '../../Redux/cart/action';





// const QuantitySelect = (props) => {
 

//   return (
//     <Select
//       maxW="64px"
//       aria-label="Select quantity"
//       focusBorderColor={useColorModeValue('#7d9c5b ', '#7d9c5b ')}
//       {...props}
      
//     >
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//       <option value="4">4</option>
//     </Select>
//   )
// }

export const CartItem = (props) => {

 
  const toast=useToast();
  const dispatch=useDispatch();
  const {
    id,
    title,
    description,
    quantity,
    setQuantity,
    image,
    price,
    onChangeQuantity,
    
  } = props;

  
  const handleDelete = (id) => {
    axios
      .delete(`https://databasekemay.onrender.com/cart/${id}`)
      .then((res) => (
        dispatch(getCartData()),
        toast({
          title: "Item Deleted.",
          description: "1 Item has been Removed From Your Cart",
          position: "top-right",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      ))
      .catch(() => null);

      setTimeout(() => {
        dispatch(getCartData())
      },1000)
  };


  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={image}
          alt={title}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{title}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              {description}
            </Text>
          </Stack>
         
        </Box>
      </Stack>

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            setQuantity(+e.currentTarget.value)
          }}
        /> */}
      
        <Text> &#8377;{price} INR</Text>
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={()=>handleDelete(id)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Button fontSize="sm"  onClick={()=>handleDelete(id)}>
          Remove
        </Button>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            setQuantity(+e.currentTarget.value)
          }}
        /> */}
       
        <Text> &#8377; {price} INR</Text>
      </Flex>
    </Flex>
  )
}
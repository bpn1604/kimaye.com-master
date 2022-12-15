import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate=useNavigate();
  //   console.log(email, pass);

  const handlesubmit = () => {
    if(email&&pass)
    {

      const params = {
        email: email,
        pass: pass,
      };
  
      axios.post("https://databasekemay.onrender.com/user", params)
      .then((r)=>alert("Signup successfull"))
      .then((r)=>navigate("/"))
      .catch((e)=>null);
    }
   
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
         <Heading color="red.400">Be the part</Heading>
        <Image htmlWidth="200px" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" />
        <Heading color="red.400">Family</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handlesubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  {/* <Link>forgot password?</Link> */}
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={()=>{
                  if(email&&pass)
                  {
                    navigate("/")
                  }
                }}
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      {/* <Box>
        Already a User ?{" "}
        <Link color="teal.500" to="/login">
          Login
        </Link>
      </Box> */}
    </Flex>
  );
};

export default Signup;

import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Box, Wrap } from "@chakra-ui/layout";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Alert } from "@chakra-ui/alert";
import LoginError from "components/LoginError";

const SignInPage = () => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const response = await fetch("api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      return router.push("/afterLogin");
    } else {
      <LoginError />
    }
  };

  return (
    <Wrap p="1rem" m="3">
            <form onSubmit={handleSubmit}>
      <Box m="3">
        <FormLabel>Email:</FormLabel>
           <Input type="text" ref={emailInput} />
      </Box>
      <Box m="3">
      <FormLabel>Password:</FormLabel>
           <Input type="text" ref={passwordInput} />
      </Box>
      <Box m="3">
        <Button type="submit">Sign in</Button>
      </Box>
    </form>
    </Wrap>

  );
};

export default SignInPage;
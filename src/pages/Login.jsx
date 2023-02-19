import React, { useEffect } from "react";
import { Container, Button, Typography } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        if (user) {
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast.error(errorMessage);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => user && navigate("/hotels"));
  });

  return (
    <>
      <Container
        sx={{ display: "grid", placeContent: "center", height: "100vh" }}
        maxWidth="md"
      >
        <Typography textAlign={"center"} variant="h4" sx={{ marginBottom: 4 }}>
          Welcome to BookStay
        </Typography>
        <Button onClick={handleLogin} variant="outlined" color="primary">
          Login with google
        </Button>
      </Container>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            fontSize: 14,
          },
        }}
      />
    </>
  );
}

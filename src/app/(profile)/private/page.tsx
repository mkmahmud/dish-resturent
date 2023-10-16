"use client"
import { ReactNode, useEffect } from "react"; 
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    // Check for authentication here (e.g., check if the token exists in the cookie)
    const token = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("token="))
      ?.split("=")[1];

    if (!token) { 
      router.push("/login"); // Redirect to the login page if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;

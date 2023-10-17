"use client"
import { ReactNode, useEffect } from "react"; 
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode ;  
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
     const token = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("token="))
      ?.split("=")[1];

    if (!token) { 
      router.push("/login"); 
    }
  }, [router]);

  return <div>{children}</div>;
};

export default PrivateRoute;

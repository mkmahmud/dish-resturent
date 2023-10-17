import { useEffect, useState } from "react";

function useCookieData(cookieName: unknown) {
  const [cookieData, setCookieData] = useState<string | null>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${cookieName}=`));

    if (cookie) {
      const cookieValue = cookie.split("=")[1];
      // Ensure the retrieved value is not null before setting it
      if (cookieValue !== null) {
        setCookieData(cookieValue);
      }
    }
  }, [cookieName]);

  return cookieData;
}

export default useCookieData;

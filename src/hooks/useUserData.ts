import Cookies from "js-cookie";

export default function (name: string) {
  const storedData = Cookies.get(name);

  if (storedData) {
    // If data is found, parse it from JSON
    const userData = JSON.parse(storedData);
    return userData;
  } else {
    // Handle the case when data is not found in cookies
    console.log("No data found in cookies.");
  }
}

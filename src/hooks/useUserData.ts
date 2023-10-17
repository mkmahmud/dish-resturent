export default function (name: string) {
  const storedData = localStorage.getItem(name);

  if (storedData) {
    // If data is found, parse it from JSON
    const userData = JSON.parse(storedData);
    return userData;
  } else {
    // Handle the case when data is not found in localStorage
    console.log("No data found in localStorage.");
  }
}

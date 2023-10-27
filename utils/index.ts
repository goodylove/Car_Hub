const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b56fb78aa8mshc9b8cea991e5a8bp1f9f2ejsnc08f26791d65",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const res = await fetch(url, {
    headers,
  });
  const result = await res.json();
  return result;
}

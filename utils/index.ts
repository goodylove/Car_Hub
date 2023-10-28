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

export const calculateCarRate = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileAgeFactor = 0.1;
  const ageFactor = 0.05;
  const mileAgerate = city_mpg * mileAgeFactor;
  const agerate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileAgeFactor + agerate;
  return rentalRatePerDay.toFixed(0);
};

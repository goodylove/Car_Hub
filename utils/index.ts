import { CarProps } from "@/Types";

const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

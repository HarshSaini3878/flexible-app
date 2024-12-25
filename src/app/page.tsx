import { fetchCars } from "../utils/index";
import { HomeProps } from "../types/index";
import { fuels, yearsOfProduction } from "../constants/index";
import Hero from "@/components/Hero";
// import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "../components";

export default async function Home({ searchParams }: HomeProps) {
  

  return (
    <main className='overflow-hidden '>
      <Hero />

      
    </main>
  );
}
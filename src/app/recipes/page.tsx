'use client';
import BackBtn from '@/components/BackBtn';
import { RecipeCard } from '@/components/RecipeCard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface RecipeData {
  summary: string;
  title: string;
  cookingMinutes: number;
  image: string;
  id: string;
}

export default function Recipes() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const cuisine = searchParams.get('cuisine');
  const maxReadyTime = searchParams.get('maxReadyTime');

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}&apiKey=373855f8f448475bb641ab88ba11ada9`
      );
      const data = await res.json();
      if (data && Array.isArray(data.results)) {
        setResult(data.results);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setResult([]);
    }
  };

  return (
    <>
      <BackBtn />
      <h1 className="text-4xl font-bold mt-20 text-center">
        All recipes found
      </h1>
      <ul className="flex justify-center flex-wrap gap-6 mt-12">
        {result.map((item: RecipeData) => {
          return (
            <RecipeCard
              key={item.id}
              summary={item.summary}
              title={item.title}
              cookingMinutes={item.cookingMinutes}
              image={item.image}
              id={item.id}
            />
          );
        })}
      </ul>
    </>
  );
}

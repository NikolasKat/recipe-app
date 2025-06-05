'use client';

import { Suspense, useEffect, useState } from 'react';
import { RecipeData } from '../page';
import { usePathname } from 'next/navigation';
import BackBtn from '@/components/BackBtn';
import Loading from '@/components/Loading';

export default function RecipeId() {
  const [result, setResult] = useState<RecipeData | null>(null);
  const pathname = usePathname();
  const lastSlashIndex = pathname.lastIndexOf('/');
  const id = pathname.substring(lastSlashIndex + 1);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=373855f8f448475bb641ab88ba11ada9`
      );
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setResult(null);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-4xl mx-auto p-6 pt-23 text-white rounded-lg shadow-lg">
        <BackBtn />

        <h1 className="text-4xl font-extrabold mb-4">{result?.title}</h1>
        <h2 className="text-xl font-serif text-justify italic  mb-6 text-lg">
          {result?.summary}
        </h2>
        <img
          src={result?.image}
          alt={result?.title}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </Suspense>
  );
}

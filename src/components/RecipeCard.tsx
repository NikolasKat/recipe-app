import { RecipeData } from '@/app/recipes/page';
import Link from 'next/link';
import { FC } from 'react';

export const RecipeCard: FC<RecipeData> = ({ id, summary, title, image }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`recipes/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {summary}
      </p>
      <img src={image} alt="image" className="w-full" />
    </div>
  );
};

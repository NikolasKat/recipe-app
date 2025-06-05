"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
   const [query, setQuery] = useState<string>("");
   const [cuisine, setCuisine] = useState<string>("");
   const [maxReadyTime, setMaxReadyTime] = useState<string>("");
   const router = useRouter();
   const cuisineOptions: string[] = [
      "",
      "African",
      "Asian",
      "British",
      "Thai",
      "Indian",
   ];

   const handleSubmit = (e) => {
      e.preventDefault();
      router.push(
         `/recipes?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}`
      );
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
         <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
               Recipe Finder
            </h1>

            <form className="space-y-4">
               <div>
                  <label
                     htmlFor="query"
                     className="block text-gray-700 text-sm font-medium mb-1"
                  >
                     Recipe Keyword:
                  </label>
                  <input
                     required
                     type="text"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     placeholder="pasta, chicken, salad"
                     className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
               </div>
               <div>
                  <label
                     htmlFor="cuisine"
                     className="block text-gray-700 text-sm font-medium mb-1"
                  >
                     Cuisine:
                  </label>
                  <select
                     required
                     id="cuisine"
                     value={cuisine}
                     onChange={(e) => setCuisine(e.target.value)}
                     className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                     {cuisineOptions.map((recipe, index) => (
                        <option key={index} value={recipe}>
                           {recipe}
                        </option>
                     ))}
                  </select>
               </div>
               <div>
                  <label
                     htmlFor="maxReadyTime"
                     className="block text-gray-700 text-sm font-medium mb-1"
                  >
                     Max Preparation Time (minutes):
                  </label>
                  <input
                     required
                     type="number"
                     id="maxReadyTime"
                     value={maxReadyTime}
                     onChange={(e) => setMaxReadyTime(e.target.value)}
                     placeholder="type minutes"
                     min="1"
                     className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
               </div>
               <Link
                  href={{
                     pathname: "/recipes",
                     query: { query, cuisine, maxReadyTime },
                  }}
                  onClick={handleSubmit}
                  className={
                     "block text-center w-full py-2 mt-6 rounded-lg text-white font-semibold transition duration-30 bg-gray-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  }
               >
                  Find the recipe
               </Link>
            </form>
         </div>
      </div>
   );
}

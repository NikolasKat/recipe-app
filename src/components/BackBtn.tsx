'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="text-white p-3 bg-gray-900 absolute top-3 left-3 cursor-pointer"
      onClick={() => router.back()}
    >
      {'Go back >>'}
    </button>
  );
}

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center p-5 mt-6">
      <h2 className="text-3xl font-semibold">Something went wrong! 😫</h2>

      <button
        onClick={() => reset()}
        className="text-xl text-blue-700 hover:underline"
      >
        Try again
      </button>
    </div>
  );
}

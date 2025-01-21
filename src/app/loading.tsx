"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-4 border-blue-300 border-dotted rounded-full animate-spin-reverse"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
      <style jsx>{`
        @keyframes spin-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-reverse {
  animation: spin-reverse 1.5s linear infinite;
}

      `}</style>
    </div>
  );
}




// "use client";

// export default function Loading() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <p className="text-2xl font-semibold text-blue-500 animate-pulse">
//         Loading...
//       </p>
//     </div>
//   );
// }






// "use client";

// export default function Loading() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-50">
//       <div className="grid grid-cols-3 gap-2">
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-100"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-200"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-300"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-400"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-500"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-600"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-700"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-800"></div>
//         <div className="w-6 h-6 bg-blue-500 rounded animate-pulse delay-900"></div>
//       </div>
//       <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
//     </div>
//   );
// }





// "use client";

// export default function Loading() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="relative w-16 h-16">
//         <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-0 left-1/2 animate-orbit"></div>
//         <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 left-0 animate-orbit delay-150"></div>
//         <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-0 left-1/2 animate-orbit delay-300"></div>
//         <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 right-0 animate-orbit delay-450"></div>
//       </div>
//       <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
//       <style jsx>{`
//         @keyframes orbit {
//           0% {
//             transform: rotate(0deg) translateX(50px) rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg) translateX(50px) rotate(-360deg);
//           }
//         }
//         .animate-orbit {
//           animation: orbit 1.5s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

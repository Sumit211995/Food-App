
export default function Shimmer() {

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 p-4 rounded-lg shadow-md animate-pulse w-full">
        <div className="h-40 bg-gray-400 rounded mb-4"></div>
        <div className="h-4 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded mb-2 w-1/3"></div>
      </div>
    </div>
  );
}

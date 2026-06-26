import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">

      <div className="text-center">

        <div className="relative w-28 h-28 mx-auto mb-6 animate-pulse">

          <Image
            src="/images/logo.png"
            alt="Trivoya Travels"
            fill
            className="object-contain"
          />

        </div>

        <div className="w-52 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">

          <div className="h-full w-1/2 bg-orange-500 animate-[loading_1.5s_ease-in-out_infinite]"></div>

        </div>

        <p className="mt-6 text-gray-600 font-medium">
          Preparing your next adventure...
        </p>

      </div>

    </div>
  );
}
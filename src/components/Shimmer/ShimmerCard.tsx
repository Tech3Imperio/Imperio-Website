export default function ShimmerCard() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-2 md:px-8 mt-6 pb-10 place-items-center">
      <div className="relative w-[10.5rem] md:w-[14rem] lg:w-[20rem] xl:w-[16rem] overflow-hidden rounded-none bg-white  shadow-lg before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <div className="h-52 md:h-60 w-full rounded-none bg-neutral-400"></div>
        <div className="p-2 flex justify-center ">
          <div className="h-5 w-[90%] rounded-none bg-neutral-400"></div>
        </div>
      </div>
      <div className="relative w-[10.5rem] md:w-[14rem] lg:w-[20rem] xl:w-[16rem] overflow-hidden rounded-none bg-white  shadow-lg before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <div className="h-52 md:h-60 w-full rounded-none bg-neutral-400"></div>
        <div className="p-2 flex justify-center ">
          <div className="h-5 w-[90%] rounded-none bg-neutral-400"></div>
        </div>
      </div>
      <div className="relative w-[10.5rem] md:w-[14rem] lg:w-[20rem] xl:w-[16rem] overflow-hidden rounded-none bg-white  shadow-lg before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <div className="h-52 md:h-60 w-full rounded-none bg-neutral-400"></div>
        <div className="p-2 flex justify-center ">
          <div className="h-5 w-[90%] rounded-none bg-neutral-400"></div>
        </div>
      </div>
    </div>
  );
}

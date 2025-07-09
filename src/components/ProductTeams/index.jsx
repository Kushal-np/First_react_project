import myImage from "../../assets/thefeaturephoto.png"

function ProductTeams() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16">
      <div className="flex justify-center items-center flex-col gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
        
        <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mb-2">
          Advanced Shortcuts
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight sm:leading-snug fonty">
          Built For Modern Product Teams
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl leading-relaxed">
          Open AI reads and understands your files, and with nothing more than a single line of feedback,
          you can go further than the speed of thought.
        </p>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mt-4 sm:mt-6 md:mt-8">
          <img 
            src={myImage} 
            alt="Product feature demonstration" 
            className="w-[100vw] h-auto rounded-lg shadow-xl"
          />
        </div>
        
      </div>
    </div>
  );
}

export default ProductTeams
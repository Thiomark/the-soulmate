import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function NeoSoul() {
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      <Header />

      <main className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2">
                NEO SOUL & RNB
              </h1>
              <div className="w-24 md:w-32 h-0.5 bg-gray-800"></div>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
              MUSICIAN
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="rounded-full aspect-square w-64 md:w-80 lg:w-96 mx-auto overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg"
                  alt="JST.REA artist portrait in circular frame, black and white aesthetic"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#E67E50] leading-tight mb-4">
                JST.REA
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Fashion() {
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      <Header />

      <main className="px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
                ABOUT JST.REA
              </h1>
              <div className="w-32 h-0.5 bg-gray-800"></div>
            </div>
            <div className="text-4xl md:text-5xl font-light text-gray-800">
              FASHION
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div className="bg-[#B5C28A] aspect-[3/4] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#B5C28A] to-[#A0B070] flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="text-sm">Fashion Image</div>
                    <div className="text-xs mt-1">Striped outfit styling</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-[#D4C5B0] aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#D4C5B0] to-[#C5B5A0] flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="text-sm">Fashion Image</div>
                    <div className="text-xs mt-1">
                      Colorful patchwork jacket
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#8B7355] aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#8B7355] to-[#7A6348] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm">Fashion Image</div>
                    <div className="text-xs mt-1">
                      White graphic tee styling
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
              Where rhythm meets fabric.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              My fashion is an extension of my sound bold, clean, and
              unapologetically me. From curated fits to custom concepts, I wear
              stories the same way I sing them with intention and edge.
            </p>

            <div className="flex items-end justify-between">
              <div className="text-6xl md:text-8xl font-bold text-[#E67E50] leading-none">
                MY
                <br />
                BRAND
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

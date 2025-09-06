import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Musician() {
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      <Header />

      <main className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-2">
                ABOUT JST.REA
              </h1>
              <div className="w-24 md:w-32 h-0.5 bg-gray-800"></div>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
              MUSICIAN
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#4A90C2] leading-tight">
                ORIGIN
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  I'm an R&B artist whose sound was born in 2020 and shaped by
                  late-night thoughts, real emotions, and rhythms that hit where
                  words can't. My music blends smooth melodies with raw stories
                  sometimes tender, sometimes bold, always honest.
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Whether it's love, heartbreak, or healing, I say what many
                  feel but few can express.
                </p>
              </div>

              <div className="flex items-center space-x-2 pt-4">
                <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m9 9 5 3-5 3z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  @ jst.betsoe
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-black rounded-lg aspect-[4/5] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm">Artist Image</div>
                    <div className="text-xs mt-1 opacity-70">
                      Portrait in shadows
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

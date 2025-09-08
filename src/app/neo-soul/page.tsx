import BackButton from "../../components/BackButton";

export default function NeoSoul() {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
              NEO-SOUL
            </h1>
            <div className="w-32 h-0.5 bg-gray-800"></div>
          </div>
          <div className="text-4xl md:text-5xl font-light text-gray-800">
            VIBES
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-6xl md:text-8xl font-bold text-[#4A90C2] leading-tight">
              SOUL
              <br />
              MUSIC
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Neo-soul represents a movement that honors the past while pushing into the future.
              It&apos;s about authentic expression, raw emotion, and the kind of music that speaks to your soul.
            </p>
          </div>
          
          <div className="aspect-square rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#4A90C2] to-[#3A7BA2] flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <p className="text-lg font-light">The Sound of Soul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import BackButton from "../../components/BackButton";

export default function Fashion() {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
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
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg"
                alt="JST.REA wearing striped overalls with white puffy sleeves against olive green background"
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184871/the_soulmates/the_soulmates/fashion-patchwork-jacket.jpg"
                alt="Colorful crocheted patchwork jacket with geometric patterns in red, blue, cream and black"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/fashion-graphic-tee.jpg"
                alt="White graphic t-shirt with artistic animal silhouettes and Spanish text"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
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
    </div>
  );
}
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="group cursor-pointer">
        <div className="aspect-[4/5] rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden relative">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-sm md:text-base font-light text-gray-600 tracking-wide text-center">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ServiceCard;

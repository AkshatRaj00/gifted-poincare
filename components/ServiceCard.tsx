// src/components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <div className="bg-purple-800 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold mb-3">{title}</h4>
        <p className="opacity-90 text-sm">{description}</p>
      </div>
      <p className="text-xl font-bold mt-4 text-indigo-300">{price}</p>
    </div>
  );
};

export default ServiceCard;

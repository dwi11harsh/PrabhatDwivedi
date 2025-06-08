import React from "react";

interface NeomorphicProgressProps {
  label: string;
  value: number;
  max: number;
  currency?: boolean;
}

const NeomorphicProgress: React.FC<NeomorphicProgressProps> = ({
  label,
  value,
  max,
  currency = false,
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-900">
          {currency ? `$${value}` : value}
        </span>
      </div>

      <div className="relative h-2 bg-neo-bg rounded-full shadow-neo-inset">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-neo-outset"></div>
        </div>
      </div>
    </div>
  );
};

export default NeomorphicProgress;

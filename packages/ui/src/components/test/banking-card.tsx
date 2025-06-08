import React from "react";
import NeomorphicCard from "./neomorphic-card";

const BankingCard: React.FC = () => {
  return (
    <NeomorphicCard className="bg-gradient-to-br from-green-400 to-green-600 text-white min-w-[300px]">
      <div className="space-y-4">
        <div className="text-lg font-mono tracking-wider">
          0000 0000 0000 0000
        </div>
        <div className="text-sm opacity-90">Card number</div>

        <div className="flex justify-between items-end">
          <div>
            <div className="text-lg font-semibold">Name</div>
            <div className="text-sm opacity-90">lorem ipsum</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">05 / 20</div>
            <div className="text-sm opacity-90">date</div>
          </div>
        </div>
      </div>
    </NeomorphicCard>
  );
};

export default BankingCard;

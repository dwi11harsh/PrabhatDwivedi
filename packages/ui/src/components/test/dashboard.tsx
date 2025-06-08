import React from "react";
import NeomorphicCard from "./neomorphic-card";
import NeomorphicIconButton from "./neomorphic-icon-button";
import NeomorphicProgress from "./neomorphic-progress";
import BankingCard from "./banking-card";

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-neo-bg p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Add Bank Details Card */}
          <NeomorphicCard className="col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                +
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Add user bank details
                </h3>
                <p className="text-sm text-gray-600">click the button</p>
              </div>
            </div>
          </NeomorphicCard>

          {/* Icon Buttons */}
          <div className="flex space-x-4">
            <NeomorphicIconButton icon="🔒" />
            <NeomorphicIconButton icon="$" />
            <NeomorphicIconButton icon="📊" />
            <NeomorphicIconButton icon="🛡️" />
            <NeomorphicIconButton icon="⚙️" />
            <NeomorphicIconButton icon="📅" />
          </div>

          {/* Progress Cards */}
          <NeomorphicCard className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <NeomorphicProgress
                label="Installment limit"
                value={250}
                max={500}
                currency
              />
              <NeomorphicProgress
                label="Credit limit"
                value={340}
                max={500}
                currency
              />
              <NeomorphicProgress
                label="Shopping limit"
                value={70}
                max={500}
                currency
              />
              <NeomorphicProgress
                label="ATM withdrawal limit"
                value={160}
                max={500}
                currency
              />
            </div>
          </NeomorphicCard>

          {/* Banking Card */}
          <div className="col-span-1">
            <BankingCard />
          </div>

          {/* Stats Cards */}
          <NeomorphicCard>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">$2,650</div>
              <div className="text-sm text-gray-600">Consumption</div>
            </div>
          </NeomorphicCard>

          <NeomorphicCard>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$1,375</div>
              <div className="text-sm text-gray-600">Income</div>
            </div>
          </NeomorphicCard>
        </div>
      </div>
    </div>
  );
};

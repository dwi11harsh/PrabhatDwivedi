import { Dashboard, DotBackground, TestCard } from "@repo/ui/components";
import Image from "next/image";

const Home = () => {
  return (
    <div className="p-10 h-[100vh]">
      <div className="bg-white p-5 h-full w-full outer-box-shadow rounded-3xl flex flex-wrap flex-col md:flex-row justify-center">
        <div className="flex w-full flex-col md:flex-row [&>*]:border [&>*]:border-black gap-5">
          <div className="md:w-[20%]">
            <ProfileCard />
          </div>
          <div className="md:w-[50%]">My Recent Works</div>
          <div className="md:w-[30%]">Stack, Quick Links & Player</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// hover shadow class:   [&>*:hover]:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]

const ProfileCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div
        className="flex items-center bg-gray-100 p-12 rounded-3xl 
                      shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] 
                      max-w-5xl"
      >
        {/* Left gradient card */}
        <div className="relative">
          <div
            className="w-80 h-80 rounded-[3rem] bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 
                          shadow-[inset_-15px_-15px_30px_rgba(255,255,255,0.1),inset_15px_15px_30px_rgba(0,0,0,0.1)]
                          flex items-center justify-center"
          >
            <div
              className="w-48 h-48 rounded-full bg-gray-200 
                            shadow-[15px_15px_30px_rgba(0,0,0,0.2),-15px_-15px_30px_rgba(255,255,255,0.8)]
                            overflow-hidden"
            >
              <Image
                src="/me.jpg"
                width={200}
                height={200}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="ml-16 flex-1">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                CHRISTIAN SØGAARD MOEN
              </h1>
              <p className="text-gray-500 mb-6">@christansmoen</p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Brand and communication strategy,
                <br />
                graphic design, illustration, art direction
                <br />
                and portrait photography
              </p>

              <p className="text-gray-500 text-lg">Creative at Superblaise</p>
            </div>

            {/* Social icons */}
            <div className="flex flex-col space-y-4 ml-8">
              {["Be", "⚡", "f", "📷", "🐦"].map((icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-xl bg-gray-100 
                                shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
                                flex items-center justify-center text-gray-700 font-bold text-lg
                                hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]
                                transition-all duration-300 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

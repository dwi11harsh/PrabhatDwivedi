export const TestCard = () => {
  return (
    <div className="p-10">
      {/* <!-- Categories --> */}
      <div
        className="p-10 shadow-[0_0_1.5rem_rgba(0,0,0,0.1),0.75rem_0.75rem_1.5rem_rgba(0,0,0,0.2)] rounded-xl flex flex-wrap justify-center gap-5 [&>*]:w-[8rem] [&>*]:h-[8rem] [&>*]:rounded-md [&>*]:bg-purple-7 [&>*]:py-4 [&>*:hover]:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] 
[&>*>div]:w-16 [&>*>div]:h-16 [&>*>div]:rounded-full [&>*>div]:text-white [&>*>div]:flex [&>*>div]:items-center [&>*>div]:justify-center [&>*>div]:mx-auto [&>*>h2]:text-[0.8rem] [&>*>h2]:mt-4 [&>*>h2]:text-center"
      >
        <div>
          {/* <!-- Icon Container --> */}
          <div className="bg-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              {" "}
              <path
                fill="currentColor"
                d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v2H5v2h23v10c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1z"
              />
            </svg>
          </div>

          {/* <!-- Title --> */}
          <h2>CREDIT CARD</h2>
        </div>

        <div className="shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]">
          {/* <!-- Icon Container --> */}
          <div className="bg-[#faab70]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              {" "}
              <path
                fill="currentColor"
                d="M26 10h-2.762A4.487 4.487 0 0 0 16 4.707A4.487 4.487 0 0 0 8.762 10H6a2.002 2.002 0 0 0-2 2v4a2.002 2.002 0 0 0 2 2v10a2.002 2.002 0 0 0 2 2h16a2.002 2.002 0 0 0 2-2V18a2.002 2.002 0 0 0 2-2v-4a2.002 2.002 0 0 0-2-2Zm-9-2.5a2.5 2.5 0 1 1 2.5 2.5H17ZM12.5 5A2.503 2.503 0 0 1 15 7.5V10h-2.5a2.5 2.5 0 0 1 0-5ZM6 12h9v4H6Zm2 6h7v10H8Zm16.001 10H17V18h7ZM17 16v-4h9l.001 4Z"
              />
            </svg>
          </div>

          {/* <!-- Title --> */}
          <h2>GIFT CARDS</h2>
        </div>

        <div>
          {/* <!-- Icon Container --> */}
          <div className="bg-[#7b90fd]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              {" "}
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                {" "}
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" />{" "}
                <path d="M16 10a4 4 0 0 1-8 0" />{" "}
              </g>
            </svg>
          </div>

          {/* <!-- Title --> */}
          <h2>ORDERS</h2>
        </div>
      </div>

      <div className="rounded-lg bg-[#e6e9f3] h-full sm:h-20 py-4 my-10 flex items-center justify-center shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]">
        <p className="w-[70%] text-sm">
          Stay on top of your order status, deals, new messages and more.{" "}
          <span className="text-[#7b90fd] cursor-pointer hover:underline">
            Enable notifications
          </span>
        </p>
      </div>

      <div className="w-40 h-40 bg-slate-510 rounded-2xl custom-shadow"></div>
    </div>
  );
};

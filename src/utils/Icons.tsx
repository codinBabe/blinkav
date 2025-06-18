const LeftArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2"
    aria-label="Previous Slide"
  >
    <svg
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-black"
    >
      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
    </svg>
  </button>
);

const RightArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2"
    aria-label="Next Slide"
  >
    <svg
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 rotate-180 text-black"
    >
      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
    </svg>
  </button>
);

export const Icons = {
  LeftArrow,
  RightArrow,
};

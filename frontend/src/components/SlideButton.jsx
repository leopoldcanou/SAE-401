const SlideButton = ({ onClick, direction }) => {
  const icon =
    direction === "left" ? (
      <svg
        width="30px"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m14 6 1.41 1.41-4.58 4.59 4.58 4.59-1.41 1.41-6-6z"></path>
        <path d="m0 0h24v24h-24z" fill="none"></path>
      </svg>
    ) : (
      <svg
        width="30px"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m10 6-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z"></path>
        <path d="m0 0h24v24h-24z" fill="none"></path>
      </svg>
    );

  return (
    <button
      className={`absolute ${direction === "left" ? "left-0 ml-6" : "right-0 mr-6"} top-1/2 hidden aspect-square -translate-y-1/2 transform  rounded-md bg-primary-black bg-opacity-5 px-3 backdrop-blur-3xl sm:block`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default SlideButton;

const Loading = () => {
  return (
    <div className="w-screen bg-white h-screen flex items-center justify-center ">
      <video autoPlay muted loop>
        <source src="/loading-splash.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;

import preloader from "/assets/preloader-animation.gif";

function Preloader() {
  return (
    <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center flex-col z-[99999]">
      <img src={preloader} alt="preloader" className="w-32" />
      <h1 className="text-2xl text-grayText">Loading...</h1>
    </div>
  );
}

export default Preloader;

import "./index.less";

export function ImageDesign() {
  const imgList = [
    {
      src: "vite.svg",
    },
    {
      src: "logo.png",
    },
    {
      src: "react.svg",
    },
    {
      src: "react.svg",
    },
    {
      src: "vite.svg",
    },
    {
      src: "logo/Cleveland_Cavaliers.png",
    },
  ];

  function addImageToCurrentCanvas(img: HTMLImageElement) {
    console.log(img);
  }

  return (
    <div className="design-panel-image">
      {imgList.map((img, i) => (
        <img
          src={img.src}
          width={100}
          key={"img__" + i}
          onClick={(e) => addImageToCurrentCanvas(e.target as HTMLImageElement)}
        />
      ))}
    </div>
  );
}

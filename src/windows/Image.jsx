import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const data = useWindowStore((state) => state.windows.imgfile.data);

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{data.name}</p>
      </div>

      <div className="preview">
        {data.imageUrl && (
          <img 
            src={data.imageUrl} 
            alt={data.name || "Image preview"} 
            loading="lazy"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;

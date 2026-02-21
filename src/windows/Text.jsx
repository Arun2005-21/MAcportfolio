import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const data = useWindowStore((state) => state.windows.txtfile.data);

  if (!data) return null;

  const image = data.image || data.imageUrl;
  const paragraphs = Array.isArray(data.description) ? data.description : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-4 space-y-4 bg-white">
        {image && (
          <img
            src={image}
            alt={data.name || "Content image"}
            className="w-full h-44 object-cover object-center rounded-lg"
            loading="lazy"
          />
        )}

        {data.subtitle && (
          <p className="text-sm font-semibold text-gray-800">{data.subtitle}</p>
        )}

        <div className="space-y-2">
          {paragraphs.map((paragraph, index) => (
            <p key={`${data.id ?? data.name}-p-${index}`} className="text-sm text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

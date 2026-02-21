import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import { locations } from "#constants";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow('resume');
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank");
    }
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveLocation(item);
              }
            }}
            role="button"
            tabIndex={0}
            className={clsx(
              "flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer",
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
            aria-label={`Select ${item.name}`}
          >
            <img src={item.icon} className="w-4" alt={`${item.name} icon`} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" aria-hidden="true" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList('Favorites', Object.values(locations))}
          {renderList('My Projects', locations.work.children)}
        </div>
      <ul className="content">
        {activeLocation?.children.map((item) => (
          <li
            key={item.id}
            className={item.position}
            onClick={() => openItem(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openItem(item);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open ${item.name}`}
          >
            <img src={item.icon} alt={`${item.name} icon`} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      </div>

    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

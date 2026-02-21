import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";

const Safari = () => {
  return (
  <>
  <div id="window-header">
    <WindowControls target="safari" />

      <button type="button" aria-label="Sidebar" className="ml-10 icon-button">
        <PanelLeft className="icon" />
      </button>

      <div className="flex items-center gap-1 ml-5">
        <button type="button" aria-label="Go back" className="icon-button">
          <ChevronLeft className="icon" />
        </button>
        <button type="button" aria-label="Go forward" className="icon-button">
          <ChevronRight className="icon" />
        </button>
      </div>

      <div className="flex-1 flex-center gap-3">
        <ShieldHalf className="icon" aria-hidden="true" />

        <div className="search">
          <Search className="icon" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="flex-1"
            aria-label="Search or enter website name"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button type="button" aria-label="Share" className="icon-button">
          <Share className="icon" />
        </button>
        <button type="button" aria-label="New tab" className="icon-button">
          <Plus className="icon" />
        </button>
        <button type="button" aria-label="Copy" className="icon-button">
          <Copy className="icon" />
        </button>
      </div>
  </div>

  {/* Body */}
  <div className="h-[calc(100%-60px)] overflow-y-auto">
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold text-pink-600">
        My Developer Blog
      </h2>

      <div className="space-y-10">
        {blogPosts.map(({ id, image, title, date, link }) => (
          <div
            key={id}
            className="grid grid-cols-[70px_1fr] gap-6 items-start"
          >
            <img
              src={image}
              alt={title}
              className="w-14 h-14 object-contain"
            />

            <div className="space-y-2">
              <p className="text-sm text-gray-500">{date}</p>

              <h3 className="text-base font-semibold text-gray-900">
                {title}
              </h3>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                Check out the full post <MoveRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Eye } from "lucide-react";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Try API first (works on Vercel)
        const incrementResponse = await fetch("/api/visits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (incrementResponse.ok) {
          const data = await incrementResponse.json();
          setVisitCount(data.count);
          return;
        }
      } catch (error) {
        // API failed, use localStorage fallback (for local development)
      }

      // Fallback to localStorage for local development
      try {
        const storedCount = localStorage.getItem("visitCount");
        let count = storedCount ? parseInt(storedCount, 10) : 0;
        
        // Check if this is a new session
        const sessionKey = "visitTracked_" + new Date().toDateString();
        if (!sessionStorage.getItem(sessionKey)) {
          count += 1;
          localStorage.setItem("visitCount", count.toString());
          sessionStorage.setItem(sessionKey, "true");
        }
        
        setVisitCount(count);
      } catch (error) {
        setVisitCount(0);
      }
    };

    trackVisit();
  }, []);

  // Format number with commas
  const formatNumber = (num) => {
    return num?.toLocaleString("en-US") || "0";
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Arun's Portfolio Logo" />
        <p className="font-bold">Arun's Portfolio</p>

        <ul>
          {navLinks.map(({id, name, type}) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => openWindow(type)}
                className="cursor-pointer"
                aria-label={`Open ${name}`}
              >
                <p>{name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <ul>
          {navIcons.map(({ id, img}) => (
            <li key={id}>
              <img src={img} className="icon" alt={`Navbar icon ${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/50 backdrop-blur-3xl rounded-md border border-white/40">
          <Eye className="w-3.5 h-3.5 text-black" strokeWidth={2} />
          <span className="text-sm font-medium text-black">
            {formatNumber(visitCount)}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

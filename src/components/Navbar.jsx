import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
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

      <div>
        <ul>
          {navIcons.map(({ id, img}) => (
            <li key={id}>
              <img src={img} className="icon" alt={`Navbar icon ${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
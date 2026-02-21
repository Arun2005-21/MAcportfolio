import WindowWrapper from "#hoc/WindowWrapper";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/IMG_20230827_151005_126.jpg"
          alt="Arun"
          className="w-20 rounded-full"
        />

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Let's Connect</h3>
          <p className="text-sm text-gray-600">
            Got an idea or want to build something cool in MERN + AI? I'm in.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arun.cpp21@gmail.com&su=Hello%20Arun&body=Hi%20Arun,%20I%20saw%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline font-mono text-sm"
          >
            arun.cpp21@gmail.com
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }} className="rounded-lg">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-3 p-3 text-white"
              >
                <img src={icon} alt={text} className="size-5" />
                <p className="text-sm font-medium">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;

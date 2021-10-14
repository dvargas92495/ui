import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

type ClerkItem = { title: string; display: string; id: string };

const UserProfileTab = ({
  id,
  subtitle = `Manage ${id}`,
  cards = [],
  icon,
}: {
  id: string;
  subtitle?: string;
  icon?: React.ReactNode;
  cards?: {
    title: string;
    description: string;
    items?: ClerkItem[];
    Component?: React.FC;
    onItemClick?: (e: React.MouseEvent, item: ClerkItem) => void;
  }[];
}) => {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    setMounted(true);
    window.addEventListener("hashchange", (e) => {
      setActive(e.newURL.endsWith(`#/${id}`));
    });
    setActive(window.location.hash === `#/${id}`);
  }, [setMounted, id, setActive]);
  const title = `${id.slice(0, 1).toUpperCase()}${id.slice(1)}`;
  return mounted ? (
    <>
      {ReactDOM.createPortal(
        <a
          className={`cl-navbar-link${active ? " cl-active" : ""}`}
          href={`${window.location.origin}/user#/${id}`}
        >
          {icon}
          {title}
        </a>,
        document.querySelector("nav.cl-navbar") || document.body
      )}
      {active &&
        ReactDOM.createPortal(
          <>
            <div className="cl-page-heading">
              <div className="cl-text-container">
                <h2 className="cl-title">{title}</h2>
                <p className="cl-subtitle">{subtitle}</p>
              </div>
            </div>
            {cards.map((c) => (
              <div
                className={
                  "wKjtxHPVelSpGxgKD4J-K _1OzNYgdyNED3jLWN6DXv1T cl-themed-card"
                }
                key={c.title}
              >
                <div>
                  <h1>{c.title}</h1>
                  <p>{c.description}</p>
                </div>
                {c.items && (
                  <div className="cl-titled-card-list">
                    {c.items.map((i) => (
                      <button
                        className="cl-list-item _1qJoyBQenGMr7kHEjL4Krl _2YW23wFdhOB4SEGzozPtqO qlMNWy3GFjlnVDhYmD_84"
                        key={i.id}
                        onClick={(e) => c.onItemClick?.(e, i)}
                      >
                        <div className={"_3cdHQF85GQrVzNyaksJFAn"}>
                          {i.title}
                        </div>
                        <div
                          className={
                            "_377YaX0RVdJAflWkqyk0_W _5doIP53SFIp-tF1LX17if"
                          }
                        >
                          <div>
                            <span className="cl-font-semibold ">
                              {i.display}
                            </span>
                          </div>
                          <div>
                            <svg
                              width="1.25em"
                              height="1.25em"
                              viewBox="0 0 20 20"
                              stroke="#335BF1"
                              fill="none"
                            >
                              <path
                                d="M3.333 10h13.332M11.666 5l5 5-5 5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {c.Component && (
                  <div style={{ padding: "24px 32px" }}>
                    <c.Component />
                  </div>
                )}
              </div>
            ))}
          </>,
          document.querySelector("div.cl-content") || document.body
        )}
    </>
  ) : (
    <div />
  );
};

export default UserProfileTab;

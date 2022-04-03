import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ConfirmationDialog from "./ConfirmationDialog";

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
    dialogTitle?: string;
    dialogContent?: string;
    getActions?: (
      i: ClerkItem,
      index: number
    ) => { text: string; onClick: () => Promise<unknown> }[] | (() => void);
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
  const ActionButton = ({
    onClick,
    ...i
  }: {
    onClick: () => void;
    title: string;
    display: string;
  }) => (
    <button
      className="cl-list-item tdcLsvPUy6va12fjbWeoaA== lDcSm5zthgXvDREoOppm+A== YQaXxv5CXpWrIgz9wCpq2g=="
      onClick={onClick}
    >
      <div className={"_9SNWFS-Vh0PZng3FdNfr4Q=="}>{i.title}</div>
      <div className={"+UDTovkDwHUg+nhZxGd0rQ== ydTkYqSHdXIQOM237Tl+rw=="}>
        <div className="xFJ5rpwkVmYhgKY1beHGww==">
          <div
            className="cl-list-item-entry "
            style={{ whiteSpace: "break-spaces" }}
          >
            {i.display}
          </div>
        </div>
        <div style={{ marginRight: "2.125em" }}>
          <svg
            width="1.25em"
            height="1.25em"
            viewBox="0 0 20 20"
            stroke="#335BF1"
            fill="none"
          >
            <path
              d="M3.333 10h13.332M11.666 5l5 5-5 5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
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
                className="TbneNCA4gZ19UdBjC4aa8w== UWBWNVaoq8lQMz06Xu2Cxg== cl-themed-card"
                key={c.title}
              >
                <div className="Em1H2funtme6EXt9AM65sQ==">
                  <h1 className="lxRDeMOoyAxXuzbXfY3AZA==">{c.title}</h1>
                  <p
                    className="lqA9GnSF-T6v3YCbt8CChA=="
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {c.description}
                  </p>
                </div>
                {c.items && (
                  <div className="cl-titled-card-list">
                    {c.items.map((i, index) => {
                      const action = c?.getActions?.(i, index);
                      return typeof action === "function" ? (
                        <ActionButton key={i.id} onClick={action} {...i} />
                      ) : (
                        <ConfirmationDialog
                          key={i.id}
                          title={c.dialogTitle || ''}
                          content={c.dialogContent || ''}
                          actions={action}
                          Button={({ onClick }) => (
                            <ActionButton key={i.id} onClick={onClick} {...i} />
                          )}
                        />
                      );
                    })}
                  </div>
                )}
                {c.Component && (
                  <div style={{ paddingTop: 24 }}>
                    <c.Component />
                  </div>
                )}
              </div>
            ))}
          </>,
          document.querySelector("div.cl-main") || document.body
        )}
    </>
  ) : (
    <div />
  );
};

export default UserProfileTab;

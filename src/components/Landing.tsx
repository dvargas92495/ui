import React, { SVGAttributes } from "react";

export const Splash = ({
  Logo,
  title,
  subtitle,
  primaryHref,
  secondaryHref,
}: {
  Logo: React.FunctionComponent<SVGAttributes<{}>>;
  title: string;
  subtitle: string;
  primaryHref: string;
  secondaryHref: string;
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "50%" }}>
        <h1>{title}</h1>
        <h6>
          <i>{subtitle}</i>
        </h6>
        <a href={`/${primaryHref}`} style={{ margin: 16 }}>
          <h6 style={{ margin: 0 }}>Getting Started</h6>
        </a>
        <a href={`/${secondaryHref}`} style={{ margin: 16 }}>
          <h6 style={{ margin: 0 }}>Explore</h6>
        </a>
      </div>
      <div
        style={{
          width: "10%",
        }}
      />
      <div
        style={{
          width: "40%",
          textAlign: "center",
        }}
      >
        <Logo
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export const Showcase = ({
  header,
  showCards,
}: {
  header: string;
  showCards: { title: string; description: string; image: string }[];
}) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h4>{header}</h4>
      </div>
      <div
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          display: "flex",
          gap: 16,
        }}
      >
        {showCards.map((b) => (
          <div style={{ width: "30%" }} key={b.title}>
            <div
              style={{
                height: 350,
                borderRadius: 8,
              }}
            >
              <h2 title={b.title} />
              <img title={b.title} src={b.image} style={{ margin: 16 }} />
              <p>{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const Stats = ({
  statHeader,
  statSubheader,
  stats,
}: {
  statHeader: string;
  statSubheader: string;
  stats: { value: string; label: string }[];
}) => {
  return (
    <>
      <h4>{statHeader}</h4>
      <h6>{statSubheader}</h6>
      <div
        style={{
          display: "flex",
          gap: 64,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        {stats.map((s) => (
          <div style={{ display: "flex", width: "33%" }} key={s.label}>
            <h4>{s.value}</h4>
            <h6 style={{ margin: 0 }}>{s.label}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

const Landing = ({ children }: { children: React.ReactNodeArray }) => {
  return (
    <div
      style={{
        marginTop: -64,
        width: "100%",
      }}
    >
      <style>{`main.main {
  max-width: unset;
}`}</style>
      {children.map((c, i) => (
        <div
          style={{
            paddingTop: 64,
            paddingBottom: 64,
            textAlign: "center",
            background:
              i % 4 === 0 ? "#3ba4dc40" : i % 4 === 2 ? "#f8a94a40" : "inherit",
          }}
          key={i}
        >
          <div style={{ maxWidth: 920 }}>{c}</div>
        </div>
      ))}
    </div>
  );
};

export default Landing;

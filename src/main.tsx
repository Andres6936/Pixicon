import React from "react";
import ReactDOM from "react-dom/client";

import { pixicon } from "./pixicon";
import { hash } from "./hash";
import "./styles.css";

const Canvas = () => {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  const [withInterval, setWithInterval] = React.useState(true);
  const [value, setValue] = React.useState<string>(
    wJ() + wJ() + wJ() + wJ() + wJ() + wJ(),
  );

  const onGenerate = () => {
    setValue(wJ() + wJ() + wJ() + wJ() + wJ() + wJ());
  };

  React.useEffect(() => {
    if (!withInterval) return;
    const intervalId = setInterval(() => {
      setValue(wJ() + wJ() + wJ() + wJ() + wJ() + wJ());
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [withInterval]);

  React.useEffect(() => {
    if (!ref.current) return;
    pixicon(ref.current, 28, hash(arst(value)), pixi);
  }, [ref, value]);

  return (
    <div className="flex grow(1) h-full w-full flex-col justify-center items-center">
      <canvas ref={ref} id="q" width={308} height={308}></canvas>
      <input
        onFocus={() => setWithInterval(false)}
        value={value}
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        type="text"
        placeholder="Type something here"
        className="(width:var(--size-canvas))"
      />
      <button
        onClick={() => {
          onGenerate();
          setWithInterval(false);
        }}
        className="(width:var(--size-canvas))"
      >
        Generate more
      </button>
      <Message />
    </div>
  );
};

const Message = () => {
  return (
    <div className=" (width:var(--size-canvas)) info">
      <b>pixicon</b> by{" "}
      <a target="_blank" href="http://github.com/bryc">
        @bryc
      </a>
      An experimental hashicon generator. Designed to produce highly identifable
      icons with as many different results as possible. It is a WIP, still
      looking into better pattern/color generation methods and different shapes.
      The code is also a bit unoptimized and longer than it could be. Click{" "}
      <a>here</a> to swap pixels or triangles. Click any small icon to load it
      into the big one. Click the big icon to pause/start the random marquee.
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>,
);

var pixi = document.location.search == "?alt" ? true : false;

function wJ() {
  return Math.random().toString(36).substr(2, 4);
}

function arst(a) {
  return a.trim
    ? Array.apply(0, Array(a.length)).map(function (x, i) {
        return a[i].charCodeAt();
      })
    : String.fromCharCode.apply(0, a);
}

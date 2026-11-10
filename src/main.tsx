import React from "react";
import ReactDOM from "react-dom/client";
import { cn } from "cn";

import { pixicon } from "./pixicon";
import { hash } from "./hash";
import "./styles.css";

const Canvas = () => {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  const [spawnTriangles, setSpawnTriangles] = React.useState(false);
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
    pixicon(ref.current, 28, hash(arst(value)), spawnTriangles);
  }, [ref, value]);

  return (
    <div className="flex grow(1) h-full w-full flex-col justify-center items-center">
      <canvas
        onClick={() => setWithInterval((prev) => !prev)}
        ref={ref}
        id="q"
        width={308}
        height={308}
      ></canvas>
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
      <label
        htmlFor="switch"
        className="flex flex-row items-center (gap:0.5em) (padding:0.5em)"
      >
        Off
        <input
          id="switch"
          className={cn(
            // Base styles
            "(appearance:none) inline-block (height:var(--height)) (width:calc(var(--height)*calc(1+var(--width)))) (background-color:#e5e5e5) (border:0) (border-radius:99em)",
            // After styles
            "(content:'')::after block::after (aspect-ratio:1)::after h-full::after (border-radius:50%)::after (background-color:white)::after (border:max(2px,0.125em)_solid_#808080)::after",
            // Checked styles
            "(background-color:#0088cc):checked (border-color:#0088cc):checked::after (translate:calc(var(--height)*var(--width))_0):checked::after",
            // Animations
            "(transition:background-color_100ms_ease-in-out) (transition:translate_100ms_ease-in-out)::after",
          )}
          type="checkbox"
          role="switch"
          onChange={({ currentTarget }) =>
            setSpawnTriangles(currentTarget.checked)
          }
        />
        On - Spawn triangles (Default: Pixels)
      </label>
      <p>Click the icon to pause/start the random spawn.</p>
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
      The code is also a bit unoptimized and longer than it could be.
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>,
);

function wJ() {
  return Math.random().toString(36).substring(2, 6);
}

function arst(a) {
  return a.trim
    ? Array.apply(0, Array(a.length)).map(function (x, i) {
        return a[i].charCodeAt();
      })
    : String.fromCharCode.apply(0, a);
}

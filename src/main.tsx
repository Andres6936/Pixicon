import React from "react";
import ReactDOM from "react-dom/client";

import { pixicon } from "./pixicon";
import { hash } from "./hash";
import "./styles.css";

const Canvas = () => {
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  const [value, setValue] = React.useState<string>(
    wJ() + wJ() + wJ() + wJ() + wJ() + wJ(),
  );

  const onGenerate = () => {
    setValue(wJ() + wJ() + wJ() + wJ() + wJ() + wJ());
  };

  React.useEffect(() => {
    if (!ref.current) return;
    pixicon(ref.current, 28, hash(arst(value)), pixi);

    //     document.querySelector("input").oninput = function () {
    //       pixicon(
    //         document.querySelector("canvas#q"),
    //         28,
    //         hash(arst(this.value)),
    //         pixi,
    //       );
    //     };
    //     document.querySelector("input").onfocus = function () {
    //       qactive = false;
    //     };
    //     document.querySelector("canvas#q").onclick = function () {
    //       qactive = !qactive;
    //     };
    //     var wat,
    //       qactive = true;
    //
    //     function startThing() {
    //       wat = setInterval(function () {
    //         if (qactive) {
    //           var str = wJ() + wJ() + wJ() + wJ() + wJ() + wJ();
    //           //console.log(str);
    //           pixicon(
    //             document.querySelector("canvas#q"),
    //             28,
    //             hash(arst(str)),
    //             pixi,
    //           );
    //           document.querySelector("input").value = str;
    //         }
    //       }, 500);
    //     }
    //
    //     startThing();
    //     for (var cnt = 66, cnv = [], i = 0; i < cnt; i++) {
    //       var c = document.createElement("canvas");
    //       cnv.push(c);
    //       document.querySelector("div#o").appendChild(c);
    //       if (i === cnt - 1)
    //         (more(), (document.querySelector("button").onclick = more));
    //     }
  }, [ref, value]);

  return (
    <div className="flex grow(1) h-full w-full flex-col justify-center items-center">
      <canvas ref={ref} id="q" width={308} height={308}></canvas>
      <input
        value={value}
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        type="text"
        placeholder="Type something here"
        className="(width:var(--size-canvas))"
      />
      <button onClick={onGenerate} className="(width:var(--size-canvas))">
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

function more() {
  for (var i = 0; i < cnt; i++) {
    var str = wJ() + wJ() + wJ() + wJ() + wJ() + wJ();
    cnv[i].id = "p";
    cnv[i].title = str;
    pixicon(cnv[i], 4, hash(arst(str)), pixi);

    cnv[i].onclick = function () {
      //pixicon(document.querySelector("canvas#q"),23, hash(arst(this.title)), pixi);
      qactive = false;
      document.querySelector("input").value = this.title;
      document.querySelector("input").dispatchEvent(new Event("input"));
      document.querySelector("canvas#q");
    };
  }
}

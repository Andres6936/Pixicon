import { pixicon, hash } from "@internal/pixicon"
import {  createCanvas } from "@napi-rs/canvas"

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

const canvas = createCanvas(308, 308);
pixicon(canvas, 28, hash(arst("andres6936")), false);

const png = await canvas.encode("png")
await Bun.write('./y.png', png)

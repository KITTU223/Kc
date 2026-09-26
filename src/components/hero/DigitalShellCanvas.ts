// Imperative Canvas 2D renderer: the portrait owns the only animation loop.
export function createDigitalShell(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  const pattern = document.createElement("canvas");
  const mask = document.createElement("canvas");
  const ink = pattern.getContext("2d");
  const reveal = mask.getContext("2d");
  let width = 0,
    height = 0,
    ratio = 1;
  let points: { x: number; y: number; life: number }[] = [];

  return {
    resize(w: number, h: number, imageWidth: number, imageHeight: number) {
      width = w;
      height = h;
      ratio = Math.min(devicePixelRatio || 1, 2);
      for (const surface of [canvas, pattern, mask]) {
        surface.width = Math.round(w * ratio);
        surface.height = Math.round(h * ratio);
      }
      if (!ink || !imageWidth || !imageHeight) return;
      const scale = Math.min(w / imageWidth, h / imageHeight);
      const iw = imageWidth * scale,
        ih = imageHeight * scale;
      ink.setTransform(ratio, 0, 0, ratio, 0, 0);
      ink.save();
      ink.translate((w - iw) / 2, h - ih);
      ink.scale(iw, ih);
      // Conservative head/shoulder contour works with an opaque source photo too.
      // No duplicated or filtered face is drawn over the photograph.
      const shape = new Path2D(
        "M .40 .20 C .39 .10 .60 .08 .62 .20 C .63 .26 .60 .30 .57 .32 L .57 .34 C .66 .35 .72 .37 .73 .44 L .74 .62 C .73 .68 .68 .70 .67 .73 L .70 .91 L .30 .91 L .33 .73 C .30 .69 .25 .65 .26 .59 L .28 .44 C .29 .38 .36 .35 .44 .34 L .44 .31 C .41 .28 .40 .24 .40 .20 Z",
      );
      ink.clip(shape);
      ink.lineWidth = 0.7 / iw;
      ink.strokeStyle = "rgba(121,242,192,0.65)";
      for (let y = 0.12; y < 0.94; y += 0.023) {
        ink.beginPath();
        ink.moveTo(0.24, y);
        ink.bezierCurveTo(0.39, y + 0.035, 0.61, y + 0.035, 0.76, y);
        ink.stroke();
      }
      for (let x = 0.25; x < 0.77; x += 0.024) {
        ink.beginPath();
        ink.moveTo(0.5 + (x - 0.5) * 0.35, 0.09);
        ink.bezierCurveTo(x, 0.3, 0.5 + (x - 0.5) * 0.7, 0.53, x, 0.94);
        ink.stroke();
      }
      ink.lineWidth = 1 / iw;
      ink.strokeStyle = "rgba(245,255,250,0.6)";
      ink.stroke(shape);
      ink.restore();
    },
    add(x: number, y: number) {
      if (x < 0 || y < 0 || x > width || y > height) return;
      points.push({ x, y, life: 1 });
      if (points.length > 32) points.shift();
    },
    clear() {
      points = [];
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    },
    draw(dt: number, intro: number | null) {
      if (!ctx || !reveal || !width || !height) return false;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      reveal.setTransform(1, 0, 0, 1, 0, 0);
      reveal.clearRect(0, 0, mask.width, mask.height);
      reveal.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = points.filter((point) => (point.life -= dt / 670) > 0);
      for (const point of points) {
        const radius = Math.max(60, Math.min(120, width * 0.25));
        const gradient = reveal.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          radius,
        );
        gradient.addColorStop(0, `rgba(255,255,255,${point.life * 0.75})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        reveal.fillStyle = gradient;
        reveal.fillRect(
          point.x - radius,
          point.y - radius,
          radius * 2,
          radius * 2,
        );
      }
      if (intro !== null && intro < 1) {
        reveal.fillStyle = `rgba(255,255,255,${0.85 * (1 - intro)})`;
        reveal.fillRect(0, 0, width, height);
        const scan = height * intro;
        const gradient = reveal.createLinearGradient(
          0,
          scan - 50,
          0,
          scan + 50,
        );
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, `rgba(255,255,255,${1 - intro})`);
        gradient.addColorStop(1, "transparent");
        reveal.fillStyle = gradient;
        reveal.fillRect(0, scan - 50, width, 100);
      }
      ctx.drawImage(pattern, 0, 0);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(mask, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      return points.length > 0 || (intro !== null && intro < 1);
    },
  };
}

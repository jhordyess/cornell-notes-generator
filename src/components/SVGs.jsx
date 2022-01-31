import React from "react";
import { Path, Polyline } from "@react-pdf/renderer";

const buildPolyline = (prev, curr, idx) => {
  try {
    return idx === 1
      ? prev.x + "," + prev.y + " " + curr.x + "," + curr.y
      : prev + " " + curr.x + "," + curr.y;
  } catch (error) {
    return "";
  }
};

const buildLines = (
  xBase = 0,
  yBase = 0,
  size = 0,
  times = 0,
  sep = 0,
  sw = true
) => {
  let str = "";
  try {
    str += `M${xBase},${yBase}`;
    for (let i = 1; i < times; i++) {
      str +=
        "m" +
        (sw ? "0," + sep + "h" : sep + ",0v") +
        (i % 2 === 0 ? -size : size);
    }
  } catch (error) {
  } finally {
    return str;
  }
};

const Lines = ({
  xBase = 0,
  yBase = 0,
  size = 0,
  times = 0,
  sep = 0,
  lineColor = "#000",
  orientation = true,
}) => {
  return (
    <Path
      d={buildLines(xBase, yBase, size, times, sep, orientation)}
      stroke={lineColor}
    />
  );
};

const OwnPolyline = ({ points = [], lineColor = "#000" }) => {
  return <Polyline points={points.reduce(buildPolyline)} stroke={lineColor} />;
};

const Border = ({
  xBase = 0,
  yBase = 0,
  xSize = 0,
  ySize = 0,
  lineColor = "#000",
}) => {
  return (
    <Path
      d={`M${xBase},${yBase}h${xSize}v${ySize}h${-xSize}v${-ySize}`}
      stroke={lineColor}
    />
  );
};
export { Lines, OwnPolyline, Border };

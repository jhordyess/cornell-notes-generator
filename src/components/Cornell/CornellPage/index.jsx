import React from "react";
import { Svg } from "@react-pdf/renderer";
import { Lines, Border } from "./SVG-elements";

const cm2px = (param = 0) => {
  return !isNaN(param) && param > 0
    ? (Math.round(param * (72 / 2.54) * 100) / 100).toString()
    : "0";
};

const Grid = ({
  rows = 0,
  cols = 0,
  cellWidth = 0.5,
  cellHeight = 0.5,
  borderColor = "#000",
  horiLineCol = "#000",
  vertLineCol = "#000",
  xAxisBase = 0,
  yAxisBase = 0,
}) => {
  const xSize = cm2px(cellWidth * cols);
  const ySize = cm2px(cellHeight * rows);
  const base = { xBase: cm2px(xAxisBase), yBase: cm2px(yAxisBase) };
  return (
    <>
      {/* Vertical lines */}
      <Lines
        {...base}
        size={ySize}
        times={cols}
        sep={cm2px(cellWidth)}
        lineColor={vertLineCol}
        orientation={false}
      />
      {/* Horizontal lines */}
      <Lines
        {...base}
        size={xSize}
        times={rows}
        sep={cm2px(cellHeight)}
        lineColor={horiLineCol}
        orientation={true}
      />
      {/* External border */}
      <Border {...base} xSize={xSize} ySize={ySize} lineColor={borderColor} />
    </>
  );
};

export default function ({
  rowsNotesCues,
  colsNotes,
  colsCues,
  rowsSummary,
  cellWidth = 0.5,
  cellHeight = 0.5,
  vSep = 0.425,
  hSep = cellWidth,
  color = "#000",
  sw = true,
  ...props
}) {
  props.cellWidth = cellWidth;
  props.cellHeight = cellHeight;
  props.borderColor = props.horiLineCol = props.vertLineCol = color;
  return (
    <Svg width={"100%"} height={"100%"}>
      {/* Notes */}
      <Grid
        rows={rowsNotesCues}
        cols={colsNotes}
        xAxisBase={sw ? 0 : colsCues * cellWidth + hSep}
        yAxisBase={0}
        {...props}
      />
      {/* Cues */}
      <Grid
        rows={rowsNotesCues}
        cols={colsCues}
        xAxisBase={sw ? colsNotes * cellWidth + hSep : 0}
        yAxisBase={0}
        {...props}
      />
      {/* Summary */}
      <Grid
        rows={rowsSummary}
        cols={colsNotes + colsCues + 1}
        xAxisBase={0}
        yAxisBase={rowsNotesCues * cellHeight + vSep}
        {...props}
      />
    </Svg>
  );
}

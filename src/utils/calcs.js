const unkCellSize = (width, height, rows, cols) => ({
  width: width,
  height: height,
  rows: rows,
  cols: cols,
  cellWidth: width / cols,
  cellHeight: height / rows,
});
const unkRowsCols = (width, height, cellWidth, cellHeight) => ({
  width: width,
  height: height,
  rows: height / cellHeight,
  cols: width / cellWidth,
  cellWidth: cellWidth,
  cellHeight: cellHeight,
});
const unkWidthHeight = (rows, cols, cellWidth, cellHeight) => ({
  width: cols * cellWidth,
  height: rows * cellHeight,
  rows: rows,
  cols: cols,
  cellWidth: cellWidth,
  cellHeight: cellHeight,
});

export { unkCellSize, unkRowsCols, unkWidthHeight };

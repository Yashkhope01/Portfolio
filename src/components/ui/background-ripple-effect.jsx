import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  className,
}) => {
  const [clickedCell, setClickedCell] = useState(null)

  const handleCellClick = (row, col) => {
    setClickedCell({ row, col })
  }

  useEffect(() => {
    if (clickedCell) {
      const timer = setTimeout(() => {
        setClickedCell(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [clickedCell])

  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <DivGrid
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        borderColor="rgb(75, 85, 99)"
        fillColor="transparent"
        clickedCell={clickedCell}
        onCellClick={handleCellClick}
        interactive={false}
        className="w-full h-full"
      />
    </div>
  )
}

const DivGrid = ({
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick,
  interactive = false,
  className,
}) => {
  const gridRef = useRef(null)
  const [cells, setCells] = useState([])

  useEffect(() => {
    const newCells = []
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newCells.push({ row, col })
      }
    }
    setCells(newCells)
  }, [rows, cols])

  const getCellDistance = (cellRow, cellCol) => {
    if (!clickedCell) return Infinity
    const dx = cellCol - clickedCell.col
    const dy = cellRow - clickedCell.row
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleCellClick = (row, col) => {
    if (onCellClick) {
      onCellClick(row, col)
    }
  }

  return (
    <div
      ref={gridRef}
      className={cn("grid gap-0", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: "fit-content",
        height: "fit-content",
      }}
    >
      {cells.map(({ row, col }) => {
        const distance = getCellDistance(row, col)
        const delay = distance * 30
        const shouldAnimate = clickedCell && distance < 10

        return (
          <motion.div
            key={`${row}-${col}`}
            className={cn(
              "border",
              interactive && "cursor-pointer hover:bg-gray-800/20 dark:hover:bg-gray-700/30 transition-colors"
            )}
            style={{
              width: cellSize,
              height: cellSize,
              borderColor: borderColor,
              backgroundColor: fillColor,
            }}
            animate={
              shouldAnimate
                ? {
                    opacity: [0.4, 0.8, 0.4],
                    backgroundColor: [
                      "transparent",
                      "rgba(107, 114, 128, 0.3)",
                      "transparent",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: delay / 1000,
              ease: "easeOut",
            }}
            onClick={() => handleCellClick(row, col)}
            onMouseEnter={() => {
              if (interactive && !clickedCell) {
                handleCellClick(row, col)
              }
            }}
          />
        )
      })}
    </div>
  )
}


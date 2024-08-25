// components/Spreadsheet.js
import React, { useState } from 'react';
import { useSpreadsheetStore } from '../store/spreadsheetStore';

const Spreadsheet = () => {
  const { cells, updateCell } = useSpreadsheetStore();
  const [currentCell, setCurrentCell] = useState(null);

  const handleInputChange = (e, row, col) => {
    updateCell(row, col, e.target.value);
  };

  return (
    <div className="grid grid-cols-20 gap-1">
      {cells.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
            className="border p-2 text-center"
            onFocus={() => setCurrentCell([rowIndex, colIndex])}
          />
        ))
      )}
    </div>
  );
};

export default Spreadsheet;

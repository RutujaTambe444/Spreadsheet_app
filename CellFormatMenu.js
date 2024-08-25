// components/CellFormatMenu.js
import React from 'react';
import { useSpreadsheetStore } from '../store/spreadsheetStore';

const CellFormatMenu = () => {
  const { cells, updateCellStyle } = useSpreadsheetStore();

  const applyStyle = (style) => {
    updateCellStyle(style);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => applyStyle('text-left')}>Left Align</button>
      <button onClick={() => applyStyle('text-center')}>Center Align</button>
      <button onClick={() => applyStyle('text-right')}>Right Align</button>
    </div>
  );
};

export default CellFormatMenu;

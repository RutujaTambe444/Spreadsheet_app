// pages/index.js
import React from 'react';
import Spreadsheet from '../components/Spreadsheet';
import CellFormatMenu from '../components/CellFormatMenu';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Spreadsheet App</h1>
      <CellFormatMenu />
      <Spreadsheet />
    </div>
  );
}

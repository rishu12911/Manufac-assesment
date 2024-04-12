import React from 'react';
import { WineRecord, calculateClassGammaStatistics } from './utils';
import { Table } from '@mantine/core'; //Mantine Table

interface Props {
  wineData: WineRecord[];
}

const ClassWiseGammaStatistics: React.FC<Props> = ({ wineData }) => {
  const classGammaStatistics = calculateClassGammaStatistics(wineData);

  return (
    <div className="statistics-container">
      <h2>Gamma Statistics</h2>
      {/* Mantine Table Component */}
      <Table className="statistics-table" > 
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classGammaStatistics).map((alcoholClass) => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {Object.keys(classGammaStatistics).map((alcoholClass) => (
              <td key={`mean_${alcoholClass}`}>{classGammaStatistics[parseInt(alcoholClass, 10)].mean.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {Object.keys(classGammaStatistics).map((alcoholClass) => (
              <td key={`median_${alcoholClass}`}>{classGammaStatistics[parseInt(alcoholClass, 10)].median.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {Object.keys(classGammaStatistics).map((alcoholClass) => (
              <td key={`mode_${alcoholClass}`}>{classGammaStatistics[parseInt(alcoholClass, 10)].mode.toFixed(2)}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ClassWiseGammaStatistics;

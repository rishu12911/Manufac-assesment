import React from 'react';
import { WineRecord, calculateClassFlavanoidsStatistics } from './utils';
import { Table } from '@mantine/core';


interface Props {
  wineData: WineRecord[];
}

const ClassWiseFlavanoidsStatistics: React.FC<Props> = ({ wineData }) => {
  const classFlavanoidsStatistics = calculateClassFlavanoidsStatistics(wineData);

  return (
    <div className="statistics-container">
      <h2>Flavanoids Statistics</h2>
      {/* //Mantine Table */}
      <Table className="statistics-table" >
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classFlavanoidsStatistics).map((alcoholClass) => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {Object.keys(classFlavanoidsStatistics).map((alcoholClass) => (
              <td key={`mean_${alcoholClass}`}>{classFlavanoidsStatistics[parseInt(alcoholClass, 10)].mean.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {Object.keys(classFlavanoidsStatistics).map((alcoholClass) => (
              <td key={`median_${alcoholClass}`}>{classFlavanoidsStatistics[parseInt(alcoholClass, 10)].median.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {Object.keys(classFlavanoidsStatistics).map((alcoholClass) => (
              <td key={`mode_${alcoholClass}`}>{classFlavanoidsStatistics[parseInt(alcoholClass, 10)].mode.toFixed(2)}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      
    </div>
  );
};

export default ClassWiseFlavanoidsStatistics;

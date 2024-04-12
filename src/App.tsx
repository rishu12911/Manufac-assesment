import React from 'react';
import wineData from './wineData.json';
import ClassWiseFlavanoidsStatistics from './ClassWiseFlavanoidsStatistics';
import ClassWiseGammaStatistics from './ClassWiseGammaStatistics';
import { WineRecord } from './utils';

const App: React.FC = () => {
  return (
    <div>
      <ClassWiseFlavanoidsStatistics wineData={wineData as WineRecord[]} />
      <ClassWiseGammaStatistics wineData={wineData as WineRecord[]} />
    </div>
  );
};

export default App;

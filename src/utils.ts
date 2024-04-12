export interface WineRecord {
    Alcohol: number;
    "Malic Acid": number;
    Ash: number;
    "Alcalinity of ash": number;
    Magnesium: number;
    "Total phenols": number;
    Flavanoids: number | string;
    "Nonflavanoid phenols": number | string;
    Proanthocyanins: number | string;
    "Color intensity": number;
    Hue: number;
    "OD280/OD315 of diluted wines": number | string;
    Unknown: number;
  }
  
  export const calculateClassFlavanoidsStatistics = (data: WineRecord[]) => {
    const classStatistics: { [key: number]: { mean: number; median: number; mode: number } } = {};
  
    // Group wine data by class
    const groupedData = data.reduce((acc: { [key: number]: WineRecord[] }, record) => {
      if (!acc[record.Alcohol]) {
        acc[record.Alcohol] = [];
      }
      acc[record.Alcohol].push(record);
      return acc;
    }, {});
  
    // Calculate Flavanoids for each record
    const flavanoids = data.map(record => typeof record.Flavanoids === 'number' ? record.Flavanoids : parseFloat(record.Flavanoids));
  
    // Calculate mean, median, and mode for Flavanoids within each class
    Object.keys(groupedData).forEach((alcoholClass) => {
      const flavanoidValues = groupedData[parseInt(alcoholClass, 10)].map(record => typeof record.Flavanoids === 'number' ? record.Flavanoids : parseFloat(record.Flavanoids));
      const mean = flavanoidValues.reduce((sum, value) => sum + value, 0) / flavanoidValues.length;
      const sortedValues = flavanoidValues.sort((a, b) => a - b);
      const median = sortedValues.length % 2 === 0
        ? (sortedValues[sortedValues.length / 2] + sortedValues[sortedValues.length / 2 - 1]) / 2
        : sortedValues[Math.floor(sortedValues.length / 2)];
      const modeMap: { [key: number]: number } = {};
      let maxCount = 0;
      let mode = 0;
      flavanoidValues.forEach((value) => {
        if (!modeMap[value]) modeMap[value] = 0;
        modeMap[value]++;
        if (modeMap[value] > maxCount) {
          maxCount = modeMap[value];
          mode = value;
        }
      });
  
      classStatistics[parseInt(alcoholClass, 10)] = { mean, median, mode };
    });
  
    return classStatistics;
  };
  
  export const calculateClassGammaStatistics = (data: WineRecord[]) => {
    const classStatistics: { [key: number]: { mean: number; median: number; mode: number } } = {};
  
    // Group wine data by class
    const groupedData = data.reduce((acc: { [key: number]: WineRecord[] }, record) => {
      if (!acc[record.Alcohol]) {
        acc[record.Alcohol] = [];
      }
      acc[record.Alcohol].push(record);
      return acc;
    }, {});
  
    // Calculate Gamma for each record
    const gammaValues = data.map(record => (record.Ash * record.Hue) / record.Magnesium);
  
    // Calculate mean, median, and mode for Gamma within each class
    Object.keys(groupedData).forEach((alcoholClass) => {
      const classGammaValues = groupedData[parseInt(alcoholClass, 10)].map(record => (record.Ash * record.Hue) / record.Magnesium);
      const mean = classGammaValues.reduce((sum, value) => sum + value, 0) / classGammaValues.length;
      const sortedValues = classGammaValues.sort((a, b) => a - b);
      const median = sortedValues.length % 2 === 0
        ? (sortedValues[sortedValues.length / 2] + sortedValues[sortedValues.length / 2 - 1]) / 2
        : sortedValues[Math.floor(sortedValues.length / 2)];
      const modeMap: { [key: number]: number } = {};
      let maxCount = 0;
      let mode = 0;
      classGammaValues.forEach((value) => {
        if (!modeMap[value]) modeMap[value] = 0;
        modeMap[value]++;
        if (modeMap[value] > maxCount) {
          maxCount = modeMap[value];
          mode = value;
        }
      });
  
      classStatistics[parseInt(alcoholClass, 10)] = { mean, median, mode };
    });
  
    return classStatistics;
  };
  
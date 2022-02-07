import { DataPoint } from "../classes/data-point";

export function timeSeriesToSimpleMovingAverage(
  timeSeries: DataPoint[],
  length: number
) {
  timeSeries = timeSeries.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return timeSeries.map((dataPoint, index) => {
    let timeSeriesCopy = [...timeSeries];
    let timeSeriesSlice = timeSeriesCopy.slice(index, index + length);
    if (timeSeriesSlice.length !== length) {
      return new DataPoint(dataPoint.date, 0);
    }
    let sum = timeSeriesSlice
      .map((dataPoint) => dataPoint.value)
      .reduce((a, b) => a + b);
    let value = sum / length;
    return new DataPoint(dataPoint.date, value);
  });
}

export function timeSeriesToMomentum(timeSeries: DataPoint[], length: number) {
  timeSeries = timeSeries.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // console.log(timeSeries)

  return timeSeries.map((dataPoint, index) => {
    if (index + length < timeSeries.length) {
      return new DataPoint(
        dataPoint.date,
        dataPoint.value - timeSeries[index + length].value
      );
    }

    return new DataPoint(dataPoint.date, 0);
  });
}

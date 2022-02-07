export function isDateOnOrPastTargetDate(
  day: number,
  month: number,
  year: number,
  targetDay: number,
  targetMonth: number,
  targetYear: number
): boolean {
  return (
    year > targetYear ||
    (year === targetYear && month > targetMonth) ||
    (year === targetYear && month === targetMonth && day >= targetDay)
  );
}

export function dateToDateString(date: Date) {
  let dateObject = new Date(date);
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getFullYear();
  return `${day}:${month}:${year}`;
}

export function altDateToDateString(day: number, month: number, year: number) {
  return `${day}:${month}:${year}`;
}

export function dateDifferenceInDays(dateA: Date, dateB: Date) {
  let dateAInMs = dateA.getTime();
  let dateBInMs = dateB.getTime();

  let deltaInMs = dateBInMs - dateAInMs;

  let deltaInDays = deltaInMs / 1000 / 60 / 60 / 24;
  return deltaInDays;
}

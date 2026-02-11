import { startOfISOWeek, setISOWeek, setISOWeekYear } from 'date-fns';

export function dateFromISOWeek(dateString: string): Date {
  const [year, week] = dateString.split('-');
  return startOfISOWeek(setISOWeek(setISOWeekYear(new Date(), +year), +week));
}

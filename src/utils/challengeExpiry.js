import endOfHour from 'date-fns/end_of_hour';
import endOfDay from 'date-fns/end_of_day';

import addHours from 'date-fns/add_hours';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';

export default {
  '4h': () => endOfHour(addHours(new Date(), 4)),
  '8h': () => endOfHour(addHours(new Date(), 8)),
  '1d': () => endOfDay(addDays(new Date(), 1)),
  '3d': () => endOfDay(addDays(new Date(), 3)),
  '1w': () => endOfDay(addDays(new Date(), 7)),
  '2w': () => endOfDay(addDays(new Date(), 14)),
  '1m': () => endOfDay(addMonths(new Date(), 1))
};

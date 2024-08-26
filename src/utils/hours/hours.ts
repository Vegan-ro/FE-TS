import { Hour } from '@/utils/hours/hours.types';

export const hours: Hour[] = [];

for (let i = 0; i < 24; i++) {
  hours.push({
    value: ('0' + i).slice(-2) + ':00',
    label: ('0' + i).slice(-2) + ':00',
  });
  hours.push({
    value: ('0' + i).slice(-2) + ':30',
    label: ('0' + i).slice(-2) + ':30',
  });
}

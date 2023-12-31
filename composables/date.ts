import dayjs from 'dayjs'

export {
  dayjs,
}

export function formatDate(date: string | Date, year = true) {
  return year
    ? dayjs(date).format('YYYY/MM/DD')
    : dayjs(date).format('M/DD')
}

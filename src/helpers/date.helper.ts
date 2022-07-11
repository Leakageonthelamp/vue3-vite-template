import dayjs from 'dayjs'

export const displayDate = (date: string, format: string) => {
  if(date) return dayjs(date).format(format)
  else date
}

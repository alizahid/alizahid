import moment from 'moment'

export default (date: string) => {
  const publishDate = moment(date)

  if (moment().diff(publishDate, 'years') > 0) {
    return publishDate.format('MMM D, YYYY')
  }

  return publishDate.format('MMM D')
}

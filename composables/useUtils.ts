export const useUtils = () => {
  const { locale, t } = useI18n();

  const defaultDateFormaterOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  /**
   * Format date to locale
   * @param date date to format
   */
  const formatDate = (
    date: Date | string,
    options: Intl.DateTimeFormatOptions = defaultDateFormaterOptions,
  ) => {
    let dateToFormat = date;
    if (typeof dateToFormat === 'string') {
      dateToFormat = new Date(date);
    }

    if (!(dateToFormat instanceof Date)) {
      return t('error.invalidDate');
    }

    return new Intl.DateTimeFormat(locale.value, options).format(dateToFormat);
  };

  /**
   * Remove undefined, null, empty string or empty array from object
   *
   * @param object
   * @returns object without undefined, null, empty string or empty array
   */
  const objectWithoutUndefined = (object: any) => {
    return Object.keys(object)
      .filter(
        (key) =>
          object[key] !== undefined &&
          object[key] !== null &&
          object[key] !== '' &&
          (!Array.isArray(object[key]) || object[key].length > 0),
      )
      .reduce((acc: any, key) => {
        acc[key] = object[key];
        return acc;
      }, {});
  };

  return {
    formatDate,
    objectWithoutUndefined,
  };
};

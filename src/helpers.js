export const getHumanReadableDate = (date) => {
  const locale = navigator.language;

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
  }).format(date);
};

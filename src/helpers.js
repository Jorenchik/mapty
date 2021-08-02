export const getHumanReadableDate = (date) => {
  const locale = navigator.language;

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};

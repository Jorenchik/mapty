export const getHumanReadableDate = (date) => {
  const locale = navigator.language;

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};

export const sortWorkouts = (workouts, order) => {
  const sortedWorkouts = workouts.slice(0);
  return sortedWorkouts.sort((a, b) => {
    if (order === "asc") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });
};

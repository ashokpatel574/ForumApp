export const timeAgo = (date) => {
  let currentDate = new Date();
  let yearDiff = currentDate.getFullYear() - new Date(date).getFullYear();

  if (yearDiff > 0) return `${yearDiff} year${yearDiff === 1 ? "" : "s"} ago`;

  let monthDiff = currentDate.getMonth() - new Date(date).getMonth();
  if (monthDiff > 0)
    return `${monthDiff} month${monthDiff === 1 ? "" : "s"} ago`;

  let dateDiff = currentDate.getDate() - new Date(date).getDate();
  if (dateDiff > 0) return `${dateDiff} day${dateDiff === 1 ? "" : "s"} ago`;

  let hourDiff = currentDate.getHours() - new Date(date).getHours();
  if (hourDiff > 0) return `${hourDiff} hour${hourDiff === 1 ? "" : "s"} ago`;

  let minuteDiff = currentDate.getMinutes() - new Date(date).getMinutes();
  if (minuteDiff > 0)
    return `${minuteDiff} minute${minuteDiff === 1 ? "" : "s"} ago`;
  return `a few seconds ago`;
};

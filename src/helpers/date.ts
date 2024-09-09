export function journalDate(date: Date) {
  // https://billwurtz.com/notebook.html esque
  // this formats the date like:
  // 1.1.21  12:00 am
  const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
  const year = date.getFullYear() % 100; // Extract last two digits of the year

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  return `${month}.${date.getDay()}.${year}  ${
    hours % 12 || 12
  }:${minutes} ${ampm}`;
}

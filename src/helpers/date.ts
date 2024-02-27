function journalDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
  const year = date.getFullYear() % 100; // Extract last two digits of the year

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  const formattedDate = `${month}.${day}.${year}  ${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  return formattedDate;
}

export { journalDate };

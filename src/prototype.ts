export const prettyMoney = (s: string) => {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
String.prototype.toDateDMY = function () {
  const parts = this.split("/");
  const year = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10) - 1; // Month indexes are 0-based
  const day = parseInt(parts[0], 10);
  const date = new Date(year, month, day);
  return date;
};

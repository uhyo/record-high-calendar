function csvFromTable(tbody) {
  let result = "";
  const rows = Array.from(tbody.rows).reverse();
  for (const row of rows) {
    const date = row.cells[0].textContent.trim();
    const num = row.cells[1].textContent.replace(/\D/g, "");
    console.log(date, num)
    const match = /^(\d{4})年(\d{1,2})月(\d{1,2})日$/.exec(date);
    if (match) {
      const year = match[1];
      const month = match[2];
      const day = match[3];
      result += `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")},${num}\n`;
    }
  }
  console.log(result);
}
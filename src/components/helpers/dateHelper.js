export function dateToPickFormatter(filter) {
  const years = ['2024', '2023', '2022', '2021', '2020', '2019'];
  const result = [];

  if (filter === '1 год') {
    // Формат: ['2024', '2023', '2022', ...]
    return years;
  }

  if (filter === '6 месяцев') {
    // Формат: ["H1'24", "H2'24", "H1'23", "H2'23", ...]
    years.forEach(year => {
      const shortYear = year.slice(-2);
      result.push(`H1'${shortYear}`);
      result.push(`H2'${shortYear}`);
    });
  }

  if (filter === '3 месяца') {
    // Формат: ['Q1'20', 'Q2'20', 'Q3'20', 'Q1'21', ...]
    years.forEach(year => {
      const shortYear = year.slice(-2);
      result.push(`Q1'${shortYear}`);
      result.push(`Q2'${shortYear}`);
      result.push(`Q3'${shortYear}`);
    });
  }

  if (filter === '1 месяц') {
    // Формат: ['01'24','02'24', '03'24', ... , '12'24']
    years.forEach(year => {
      const shortYear = year.slice(-2);
      for (let month = 1; month <= 12; month++) {
        const monthNumber = month.toString().padStart(2, '0'); // Форматируем номер месяца
        result.push(`${monthNumber}'${shortYear}`);
      }
    });
  }

  if (filter === '1 неделя') {
    // Формат: ['01'24','02'24', '03'24', ... , '52'24']
    years.forEach(year => {
      const shortYear = year.slice(-2);
      for (let week = 1; week <= 52; week++) {
        const weekNumber = week.toString().padStart(2, '0'); // Форматируем номер недели
        result.push(`${weekNumber}'${shortYear}`);
      }
    });
  }

  return result;
}
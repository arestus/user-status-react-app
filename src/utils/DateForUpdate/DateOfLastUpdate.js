export default function showLastDateUpdate() {
  let currentDate = new Date();
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const getCurrentDay = currentDate.getDate();
  const getCurrentMonth = currentDate.getMonth();
  const getCurrentYear = currentDate.getFullYear();
  const getCurrentHours = currentDate.getHours();
  const getCurrentMinutes = currentDate.getMinutes();
  const getCurrentSeconds = currentDate.getSeconds();
  return `${getCurrentDay} ${months[getCurrentMonth]} ${getCurrentYear} в ${getCurrentHours}:${getCurrentMinutes}:${getCurrentSeconds}`;
}

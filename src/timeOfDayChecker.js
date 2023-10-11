const determineTimeOfDay = (time) => {
  if ((time >=0 ) && (time <= 23)) {
    if ((time < 6) || (time >= 22)) {
      return 'ночь';
    } else if (time < 12) {
      return 'утро';
    } else if (time < 18) {
      return 'день';
    } else {
      return 'вечер';
    }
  }
    
  return 'ошибка данных';
};

export { determineTimeOfDay };
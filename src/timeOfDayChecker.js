const determineTimeOfDay = (time) => {
    if ((time >=0 ) && (time <= 23)) {
        if ((time >= 6) && (time < 12)) {
            return 'утро';
        }
        if ((time >= 12) && (time < 18)) {
            return 'день';
        }
        if ((time >= 18) && (time < 22)) {
            return 'вечер';
        }
        if ((time >= 22) || (time < 6)) {
            return 'ночь';
        }
    } else {
        return 'ошибка данных';
    }
};

export { determineTimeOfDay };
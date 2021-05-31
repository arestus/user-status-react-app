import { useState } from 'react';
import cities from '../../cities.json';

import styles from './FormMain.module.css';

const FormMain = () => {
  const [status, setStatus] = useState('Прежде чем действовать, надо понять');
  const [value, setValue] = useState('');
  const [input, setInput] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleChangeStatus = e => {
    e.preventDefault();
    setStatus(value);
  };

  const biggestCity = [...cities]
    .sort((a, b) => b.population - a.population)
    .splice(0, 1);

  const withoutBiggestCity = [...cities]
    .sort((a, b) => a.population - b.population)
    .splice(0, 22)
    .filter(city => city.population > 50000)
    .sort(function (a, b) {
      if (a.city < b.city) {
        return -1;
      }
      if (a.city > b.city) {
        return 1;
      }
      return 0;
    });

  const byAlpabate = [...biggestCity, ...withoutBiggestCity];

  return (
    <>
      <h1>Здравствуйте, Человек №3596941</h1>

      <a href="/#" onClick={() => setInput(!input)}>
        Изменить статус
      </a>

      {input && (
        <form onSubmit={handleChangeStatus}>
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Сменить статус</button>
        </form>
      )}

      <p>{status}</p>

      <div className={styles.container__form}>
        <form className={styles.form}>
          <select name="city" className={styles.form__select}>
            {byAlpabate.map(({ city }, i) => (
              <option value={city} key={i}>
                {city}
              </option>
            ))}
          </select>

          <label>
            <span>Пароль</span>
            <input type="password" name="password" />
            <span>Ваш новый пароль должен содержать не менее 5 символов.</span>
          </label>
          <label>
            <span>Пароль еще раз</span>
            <input type="password" name="password" />
            <span>
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </span>
          </label>
          <label>
            <span>Электронная почта</span>
            <input type="email" name="email" />
            <span>Можно изменить адрес, указанный при регистрации.</span>
          </label>
          <label>
            <span>Я согласен</span>
            <input type="checkbox" name="checkbox" />
            <span>принимать актуальную информацию на емейл</span>
          </label>
          <button type="submit">Изменить</button>
        </form>
      </div>
    </>
  );
};

export default FormMain;

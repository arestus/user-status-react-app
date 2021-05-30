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

  return (
    <>
      <h1>Здравствуйте, Человек №3596941</h1>

      <a href="#" onClick={() => setInput(!input)}>
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
          <select className={styles.form__select}>
            {cities.map((option, i) => (
              <option value={option.city} key={i}>
                {option.city}
              </option>
            ))}
          </select>
          <div className={styles.form__field}>
            <label>Пароль</label>
            <input type="text" />
            <span>Ваш новый пароль должен содержать не менее 5 символов.</span>
          </div>
          <div className={styles.form__field}>
            <label>Пароль еще раз</label>
            <input type="text" />
            <span>
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </span>
          </div>
          <div className={styles.form__field}>
            <label>Электронная почта</label>
            <input type="text" />
            <span>Можно изменить адрес, указанный при регистрации.</span>
          </div>
          <div className={styles.form__field}>
            <label>Я согласен</label>
            <input type="checkbox" />
            <span>принимать актуальную информацию на емейл</span>
          </div>
          <button type="submit">Изменить</button>
        </form>
      </div>
    </>
  );
};

export default FormMain;

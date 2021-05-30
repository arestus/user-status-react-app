import { useState } from 'react';

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
          <label>
            Пароль
            <input />
          </label>
          <label>
            Пароль еще раз
            <input />
          </label>
          <label>
            Электронная почта
            <input />
          </label>
          <label>
            Я согласен
            <input type="checkbox" />
          </label>
        </form>
      </div>
    </>
  );
};

export default FormMain;

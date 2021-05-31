import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import DateOfLastUpdate from '../../utils/DateForUpdate';
import cities from '../../cities.json';

// import styles from './FormMain.module.css';

const FormMain = () => {
  const [status, setStatus] = useState('Прежде чем действовать, надо понять');
  const [value, setValue] = useState('');
  const [inputText, setInputText] = useState(false);
  const [lastTimeUpdate, setLastTimeUpdate] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

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

  const byAlphabet = [...biggestCity, ...withoutBiggestCity];

  const onSubmit = data => {
    console.log(data);
    setLastTimeUpdate(DateOfLastUpdate());
  };

  return (
    <>
      <h1>Здравствуйте, Человек №3596941</h1>

      <a href="/#" onClick={() => setInputText(!inputText)}>
        Изменить статус
      </a>

      {inputText && (
        <form onSubmit={handleChangeStatus}>
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Сменить статус</button>
        </form>
      )}

      <p>{status}</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="city" {...register('city', { required: true })}>
            {byAlphabet.map(({ city }, i) => (
              <option value={city} key={i}>
                {city}
              </option>
            ))}
          </select>

          <label>
            <span>Пароль</span>
            <input
              type="password"
              name="password"
              {...register('password', {
                required: 'Укажите пароль',
                minLength: {
                  value: 5,
                  message: 'Используйте не менее 5 символов',
                },
                maxLength: {
                  value: 15,
                  message: 'Используйте не более  15 символов',
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <span>Ваш новый пароль должен содержать не менее 5 символов.</span>
          </label>
          <label>
            <span>Пароль еще раз</span>
            <input
              type="password"
              name="passwordRepeat"
              {...register('passwordRepeat', {
                validate: value =>
                  value === password.current || 'Пароли не совпадают',
                required: 'Укажите пароль',
                minLength: {
                  value: 5,
                  message: 'Используйте не менее 5 символов',
                },
                maxLength: {
                  value: 15,
                  message: 'Используйте не более  15 символов',
                },
              })}
            />
            {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
            <span>
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </span>
          </label>
          <label>
            <span>Электронная почта</span>
            <input
              type="email"
              name="email"
              {...register('email', { required: 'Укажите E-mail' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <span>Можно изменить адрес, указанный при регистрации.</span>
          </label>
          <label>
            <span>Я согласен</span>
            <input type="checkbox" name="checkbox" />
            <span>принимать актуальную информацию на емейл</span>
          </label>
          <button type="submit">Изменить</button>
        </form>
        <p>последние изменения {lastTimeUpdate}</p>
      </div>
    </>
  );
};

export default FormMain;

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import DateOfLastUpdate from '../../utils/DateForUpdate';
import byAlphabet from '../SortedCities';
import './FormMain.scss';

const FormMain = () => {
  const [status, setStatus] = useState('');
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

  const onSubmit = data => {
    console.log(data);
    setLastTimeUpdate(DateOfLastUpdate());
  };

  return (
    <>
      <div className="header">
        <h1 className="header__title">
          <span>Здравствуйте,</span> Человек №3596941
        </h1>

        <a
          href="/#"
          className="ref_button"
          onClick={() => setInputText(!inputText)}
        >
          Сменить статус
        </a>
      </div>

      {inputText ? (
        <form onSubmit={handleChangeStatus} className="form__status">
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Сменить статус</button>
        </form>
      ) : (
        <p className="header__status">{status}</p>
      )}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="select__title">
            Ваш город
            <select
              className="select__list"
              name="city"
              {...register('city', { required: true })}
            >
              {byAlphabet.map(({ city }, i) => (
                <option value={city} key={i}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="form__password">
            <label>
              <span className="input__password">Пароль</span>
              <input
                style={{ border: errors.password ? '1px solid #FF0000' : '' }}
                className="input__field"
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
              <span className="input__info">
                Ваш новый пароль должен содержать не менее 5 символов.
              </span>
              {errors.password ? (
                <p className="form__error">{errors.password.message}</p>
              ) : (
                <p className="form__no-error">Нету ошибок - заглушка</p>
              )}
            </label>
          </div>
          <div className="form__passwordRepeat">
            <label>
              <span className="input__password">Пароль еще раз</span>
              <input
                style={{
                  border: errors.passwordRepeat ? '1px solid #FF0000' : '',
                }}
                className="input__field-repeat"
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
              <span className="input__info">
                Повторите пароль, пожалуйста, это обезопасит вас с нами на
                случай ошибки.
              </span>
              {errors.passwordRepeat ? (
                <p className="form__error">{errors.passwordRepeat.message}</p>
              ) : (
                <p className="form__no-error">Нету ошибок - заглушка</p>
              )}
            </label>
          </div>
          <div className="form__email">
            <label>
              <span className="input__email">Электронная почта</span>
              <input
                style={{ border: errors.email ? '1px solid #FF0000' : '' }}
                className="input__field-email"
                type="email"
                name="email"
                {...register('email', { required: 'Укажите E-mail' })}
              />
              <span className="input__info">
                Можно изменить адрес, указанный при регистрации.
              </span>
              {errors.email ? (
                <p className="form__error">{errors.email.message}</p>
              ) : (
                <p className="form__no-error">Нету ошибок - заглушка</p>
              )}
            </label>
          </div>
          <div className="form__checkbox">
            <label>
              <span className="input__checkbox">Я согласен</span>
              <input
                type="checkbox"
                name="checkbox"
                className="input__field-checkbox"
              />
              <span>принимать актуальную информацию на емейл</span>
            </label>
          </div>
          <div className="form__agree">
            <button type="submit" className="form__button">
              Изменить
            </button>
            <p className="form__date">последние изменения {lastTimeUpdate}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormMain;

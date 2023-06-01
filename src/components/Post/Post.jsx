import { useEffect, useState } from 'react';
import { getToken, registerUser } from '../../services/services/services';

import SuccesImg from '../../images/success-image.svg';
import classNames from 'classnames';
import {
  Form,
  FormWrapper,
  Radio,
  PhoneExample,
  Section,
  Title,
  RadioWrapper,
  RadioLabel,
  FileInput,
  FormButton,
} from './Post.styled';
import { useForm } from 'react-hook-form';
import { validation } from '../../services/validation/validation';

const Post = () => {
  const [send, setSend] = useState(false);
  const [fileField, setFileField] = useState({});
  const [token, setToken] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      radio: '',
    },
  });

  const values = getValues();

  useEffect(() => {
    if (
      values.name === '' ||
      values.email === '' ||
      values.phone === '' ||
      values.radio === ''
    ) {
      setButtonStatus(true);
      return;
    } else {
      setButtonStatus(false);
    }
  }, [values.email, values.name, values.phone, values.radio]);

  useEffect(() => {
    getToken()
      .then(data => setToken(data.token))
      .catch(error => console.log(error));
  }, []);

  const handleFormSubmit = () => {
    const formData = new FormData();
    const values = getValues();

    formData.append('position_id', Number(values.radio));
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('photo', fileField[0]);

    registerUser(formData, token)
      .then(data => {
        if (data.success) {
          setSend(true);
          return;
        } else {
          validation(data);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Section id="post">
      {send ? (
        <FormWrapper className="post__form">
          <Title>User successfully registered</Title>
          <img src={SuccesImg} alt="" />
        </FormWrapper>
      ) : (
        <FormWrapper className="post__form">
          {' '}
          <Title>Working with POST request</Title>
          <Form
            method="post"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="register-user__form"
          >
            <label className="input">
              <input
                {...register('name', {
                  required: 'Enter valid name (Name Surname)',
                  pattern: {
                    value: /^[\p{L}]+ [\p{L}]+/gu,
                    message: 'Enter valid name (Name Surname)',
                  },
                })}
                className={classNames('input__field', {
                  error_input: errors.name,
                })}
                type="text"
                placeholder=" "
                name="name"
              />
              <span
                className={classNames('input__label', {
                  error_text: errors.name,
                })}
              >
                Your name
              </span>
              {errors.name && (
                <p className="error__message">{errors.name.message}</p>
              )}
            </label>
            <label className="input">
              <input
                {...register('email', {
                  required: 'Enter valid email (qwert@mail.com)',
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Enter valid email (qwert@mail.com)',
                  },
                })}
                className={classNames('input__field', {
                  error_input: errors.email,
                })}
                type="email"
                placeholder=" "
                name="email"
              />
              <span
                className={classNames('input__label', {
                  error_text: errors.email,
                })}
              >
                Email
              </span>

              {errors.email && (
                <p className="error__message">{errors.email.message}</p>
              )}
            </label>
            <label className="input">
              <input
                {...register('phone', {
                  required: 'Enter valid phone (+38 (XXX) XXX - XX - XX)',
                  pattern: {
                    value:
                      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,12}(\s*)?$/,
                    message: 'Enter valid phone (+38 (XXX) XXX - XX - XX)',
                  },
                })}
                type="phone"
                placeholder=" "
                name="phone"
                className={classNames('input__field', {
                  error_input: errors.phone,
                })}
              />
              <span
                className={classNames('input__label', {
                  error_text: errors.phone,
                })}
              >
                Phone
              </span>
              {errors.phone ? (
                <p className="error__message">{errors.phone.message}</p>
              ) : (
                <PhoneExample>+38 (XXX) XXX - XX - XX</PhoneExample>
              )}
            </label>
            <RadioWrapper>
              <p>Select your position</p>

              <div className="radio-item">
                <Radio
                  {...register('radio')}
                  type="radio"
                  name="radio"
                  id="1"
                  className="radio"
                  value="1"
                />
                <RadioLabel htmlFor="1">Frontend developer</RadioLabel>
              </div>

              <div className="radio-item">
                <Radio
                  {...register('radio')}
                  type="radio"
                  name="radio"
                  id="2"
                  className="radio"
                  value="2"
                />
                <RadioLabel htmlFor="2">Backend developer</RadioLabel>
              </div>

              <div className="radio-item">
                <Radio
                  {...register('radio')}
                  type="radio"
                  name="radio"
                  id="3"
                  className="radio"
                  value="3"
                />
                <RadioLabel htmlFor="3">Designer</RadioLabel>
              </div>
              <div className="radio-item">
                <Radio
                  {...register('radio')}
                  type="radio"
                  name="radio"
                  id="4"
                  className="radio"
                  value="4"
                />
                <RadioLabel htmlFor="4">QA</RadioLabel>
              </div>
            </RadioWrapper>
            <FileInput
              type="file"
              name="photo"
              onChange={evt => setFileField(evt.target.files)}
              accept="image/jpeg"
            />
            <FormButton type="submit" disabled={buttonStatus}>
              Sign up
            </FormButton>
          </Form>
        </FormWrapper>
      )}
    </Section>
  );
};

export default Post;

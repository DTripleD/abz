import { useEffect, useState } from 'react';
import { getToken, registerUser } from '../../services/services/services';
import SuccesImg from '../../images/svg/success-image.svg';
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
  const [token, setToken] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [radio, setRadio] = useState(null);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      radio: '',
      file: '',
    },
  });

  useEffect(() => {
    !name || !email || !phone || !radio || !file
      ? setButtonStatus(true)
      : setButtonStatus(false);
  }, [email, file, name, phone, radio]);

  useEffect(() => {
    getToken()
      .then(data => setToken(data.token))
      .catch(error => console.log(error));
  }, []);

  const handleFormSubmit = () => {
    const formData = new FormData();

    formData.append('position_id', Number(radio));
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', file[0]);

    registerUser(formData, token)
      .then(data => {
        data.success ? setSend(true) : validation(data);
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
                onChange={e => setName(e.target.value)}
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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPhone(e.target.value)}
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
                  onChange={e => setRadio(e.target.value)}
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
                  onChange={e => setRadio(e.target.value)}
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
                  onChange={e => setRadio(e.target.value)}
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
                  onChange={e => setRadio(e.target.value)}
                />
                <RadioLabel htmlFor="4">QA</RadioLabel>
              </div>
            </RadioWrapper>

            <label className="input">
              <FileInput
                {...register('file', {
                  required: 'Select your photo',
                })}
                className={classNames('input__field', {
                  error_input: errors.file,
                })}
                type="file"
                placeholder=" "
                name="file"
                accept="image/jpeg"
                onChange={e => setFile(e.target.files)}
              />
              {errors.file && (
                <p className="error__message">{errors.file.message}</p>
              )}
            </label>
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

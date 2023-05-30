import { useEffect, useState } from 'react';
import { getToken, registerUser } from '../../services/services';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SuccesImg from '../../images/success-image.svg';
import {
  Form,
  FormWrapper,
  Input,
  Radio,
  TextInput,
  PhoneExample,
} from './Post.styled';

const onChange = evt => {};

const Post = () => {
  const [position, setPosition] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [send, setSend] = useState(false);
  const [token, setToken] = useState('');

  const fileField = document.querySelector('input[type="file"]');

  useEffect(() => {
    getToken()
      .then(data => setToken(data.token))
      .catch(error => console.log(error));
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();

    if (fileField.files.lenght || !position || !name || !email || !phone) {
      Notify.warning('Fill in all the fields', { timeout: 3000 });
      return;
    }

    const formData = new FormData();
    formData.append('position_id', 2);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', fileField.files[0]);

    registerUser(formData, token)
      .then(data => {
        if (data.success) {
          console.log(data);
          setSend(true);
          return;
        } else {
          console.log(data);
          if (data?.fails?.phone) {
            Notify.warning(data?.fails?.phone.join(' '), { timeout: 3000 });
            return;
          }

          if (data?.fails?.email) {
            Notify.warning(data?.fails?.email.join(' '), { timeout: 3000 });
            return;
          }
        }

        if (data?.fails?.name) {
          Notify.warning(data?.fails?.name.join(' '), { timeout: 3000 });
          return;
        }

        if (data.message) {
          Notify.warning(data.message, { timeout: 3000 });
          return;
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <FormWrapper>
      {send ? (
        <div>
          <h2>User successfully registered</h2>
          <img src={SuccesImg} alt="" />
        </div>
      ) : (
        <div>
          {' '}
          <h2>Working with POST request</h2>
          <Form method="post" onSubmit={handleFormSubmit}>
            <TextInput
              type="text"
              placeholder="Your name"
              name="name"
              onChange={evt => setName(evt.target.value.trim())}
            />
            <TextInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={evt => setEmail(evt.target.value.trim())}
            />
            <label>
              <TextInput
                type="phone"
                placeholder="Phone"
                name="phone"
                onChange={evt => setPhone(evt.target.value.trim())}
              />
              <PhoneExample>+38 (XXX) XXX - XX - XX</PhoneExample>
            </label>
            <p>Select your position</p>
            <label onChange={evt => setPosition(evt.target.value)}>
              <Radio type="radio" name="position" value="Frontend developer" />
              Frontend developer
            </label>
            <label onChange={evt => setPosition(evt.target.value)}>
              <Radio type="radio" name="position" value="Backend developer" />
              Backend developer
            </label>
            <label onChange={evt => setPosition(evt.target.value)}>
              <Radio type="radio" name="position" value="Designer" />
              Designer
            </label>
            <label onChange={evt => setPosition(evt.target.value)}>
              <Radio type="radio" name="position" value="QA" />
              QA
            </label>
            <Input type="file" name="photo" />
            <button type="submit">Sign up</button>
          </Form>
        </div>
      )}
    </FormWrapper>
  );
};

export default Post;

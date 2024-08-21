import styles from './styles.module.scss';
import {Button, Form, Message, useToaster} from "rsuite";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const LoginComponent = () => {
  const [loader, setLoader] = useState(false);
  const [placement, setPlacement] = useState('topEnd')
  const toaster = useToaster()
  const navigate = useNavigate();

  const message = (
    <Message showIcon type={'error'} closable>
      <strong>Неверный логин или пароль</strong>
    </Message>
  );

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });


  const handleChange = (value, event) => {
    const name = event.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogIn = () => {
    setLoader(true);

    setTimeout(() => {
      if (formData.name === 'user' && formData.password === 'user') {
        localStorage.setItem('longAuthToken', formData.name);
        setLoader(false)
        navigate('/')
      } else {
        toaster.push(message, {placement, duration: 3000})
        setLoader(false)
      }
    }, 2000)

  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.ControlLabel>Логин</Form.ControlLabel>
        <Form.Control
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.ControlLabel>Пароль</Form.ControlLabel>
        <Form.Control
          name="password"
          type="password"
          autoComplete="off"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        onClick={handleLogIn}
        className={styles.btn}
        appearance="primary"
        color={"orange"}
        loading={loader}
      >
        Войти
      </Button>
    </Form>
  );
};
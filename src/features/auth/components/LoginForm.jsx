import { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import validateLogin from '../validations/validate-login';
import useAuth from '../../../hooks/use-auth';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState({});

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }
      
      await login(input);
      toast.success('login successfully');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-4">
        <div>
          <Input
            placeholder="Email address"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
            errorMessage={error.email}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            errorMessage={error.password}
          />
        </div>
        <Button bg="orange" color="white">
          Log in
        </Button>
      </div>
    </form>
  );
}

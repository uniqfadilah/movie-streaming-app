import React, { useEffect, useState } from 'react';
import Input from 'src/lib/components/atoms/Input';
import { validatePassword, validateUsername } from 'src/lib/helpers/validation';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from 'src/lib/hooks/useAuth';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[] | null>(null);
  const { login, isLoggedIn, loginWithGitHub } = useAuth();
  const [searchParams] = useSearchParams();
  const codeGithub = searchParams.get('code');
  useEffect(() => {
    if (codeGithub) {
      const authData = {
        token: 'dummyToken123',
        user: codeGithub,
      };
      login(authData);
    }
  }, [codeGithub, login]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
  }, [isLoggedIn, navigate]);
  const handleLogin = () => {
    setErrors(null);
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    const newErrors: string[] = [];
    if (usernameError) {
      newErrors.push(usernameError);
    }

    if (passwordError) {
      newErrors.push(passwordError);
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    const authData = {
      token: 'dummyToken123',
      user: username,
    };
    login(authData);
  };
  return (
    <div className="flex flex-col justify-center items-center text-white h-full ">
      <div className=" w-full max-w-[450px] rounded-lg bg-stone-900/80 flex flex-col justify-center relative items-center p-6">
        <h1 className="font-semibold text-xl">SIGNIN</h1>
        <div>
          {errors?.map((error: string, index: any) => (
            <p className="text-xs text-red-500" key={index}>
              {error}
            </p>
          ))}
        </div>

        <div className="space-y-4 w-full mt-12">
          <Input
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            placeholder="Username"
          />
          <Input
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            type="password"
          />
          <button
            onClick={handleLogin}
            className="rounded text-white p-4 w-full bg-red-600 hover:bg-red-700"
          >
            SIGNIN
          </button>
          <button
            onClick={() => loginWithGitHub()}
            className="rounded text-white p-4 w-full bg-stone-800 hover:bg-stone-900"
          >
            SIGNUP WITH GITHUB
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

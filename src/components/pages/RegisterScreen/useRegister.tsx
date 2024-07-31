import {getErrorMessage} from '@constants/errorUtils';
import {_handlerSetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useSignupUserMutation} from '@features/auth';
import {setCredentials} from '@features/auth/authSlice';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {z} from 'zod';

const formSchema = z
  .object({
    full_name: z.string().min(3, 'Full name must be at least 3 characters'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });

const useRegister = () => {
  const dispatch = useDispatch();
  const {navigation, resetNavigate, popAndNavigateScreen} = useNavigate();
  const [signupUser, {data, isError: isRegisterError, error: registerError}] =
    useSignupUserMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const {control, handleSubmit, setError} = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const body = {
        full_name: data.full_name,
        email: data.email,
        password: data.password,
      };

      const result = await signupUser({body}).unwrap();

      dispatch(
        setCredentials({user: result.data.user, token: result.data.token}),
      );
      await _handlerSetItem(Keys.token, result?.data?.token);
      resetNavigate('HomeScreen');
    } catch (err) {}
  };

  useEffect(() => {
    if (isRegisterError && registerError) {
      setErrorMessage(getErrorMessage(registerError));
    }
  }, [isRegisterError, registerError]);

  return {
    navigation,
    popAndNavigateScreen,
    control,
    handleSubmit,
    onSubmit,
    isRegisterError,
    errorMessage,
  };
};
export default useRegister;

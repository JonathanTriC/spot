import {getErrorMessage} from '@constants/errorUtils';
import {_handlerSetItem, showErrorToast} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useLoginUserMutation} from '@features/auth';
import {setCredentials} from '@features/auth/authSlice';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {z} from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const useLogin = () => {
  const dispatch = useDispatch();
  const {navigation, resetNavigate, popAndNavigateScreen} = useNavigate();
  const [
    loginUser,
    {data, isLoading, isError: isLoginError, error: loginError},
  ] = useLoginUserMutation();

  const {control, handleSubmit, setError} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const body = {
        email: data?.email,
        password: data?.password,
      };
      const result = await loginUser({body}).unwrap();
      dispatch(
        setCredentials({user: result.data.user, token: result.data.token}),
      );
      await _handlerSetItem(Keys.token, result?.data?.token);
      resetNavigate('HomeScreen');
    } catch (err) {}
  };

  useEffect(() => {
    if (isLoginError && loginError) {
      showErrorToast(getErrorMessage(loginError));
    }
  }, [isLoginError, loginError]);

  return {
    navigation,
    popAndNavigateScreen,
    control,
    handleSubmit,
    onSubmit,
    isLoginError,
  };
};
export default useLogin;

import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const useLogin = () => {
  const {navigation, navigateScreen, popAndNavigateScreen} = useNavigate();

  const {control, handleSubmit, setError} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  return {
    navigation,
    navigateScreen,
    popAndNavigateScreen,
    control,
    handleSubmit,
  };
};
export default useLogin;

import {API_METHOD} from '@api/apiMethods';
import {api} from '@api/rtkApi';
import {URL_PATH} from '@constants/url';

export const authService = api.injectEndpoints({
  endpoints: builder => ({
    signupUser: builder.mutation<BaseResponse<UserData>, any>({
      query: ({body}) => ({
        body,
        method: API_METHOD.POST,
        url: URL_PATH.userSignup,
      }),
    }),
    loginUser: builder.mutation<BaseResponse<UserData>, any>({
      query: ({body}) => ({
        method: API_METHOD.POST,
        url: URL_PATH.userLogin,
        body,
      }),
    }),
    loginGuest: builder.mutation<BaseResponse<UserData>, any>({
      query: () => ({
        method: API_METHOD.POST,
        url: URL_PATH.guestLogin,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLoginGuestMutation,
} = authService;

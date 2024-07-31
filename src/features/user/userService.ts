import {api} from '@api/rtkApi';
import {URL_PATH} from '@constants/url';

export const userService = api.injectEndpoints({
  endpoints: builder => ({
    getUserProfile: builder.query({
      query: () => URL_PATH.getUserProfile,
    }),
  }),
  overrideExisting: false,
});

export const {useGetUserProfileQuery} = userService;

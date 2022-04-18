import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RegisterApplicant {
  username: string;
  email: string;
  password: string;
  postingrole_user: string;
  generalrole_user: string;
  avatar: string;
}
interface ReturnToken {
  success: string;
  token: string;
  isAuthenticated?: boolean;
}

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',

    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
      const state = getState();
      console.log(state);

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    addRegisterApplicant: builder.mutation<ReturnToken, RegisterApplicant>({
      query: ({
        username,
        email,
        password,
        postingrole_user,
        generalrole_user,
        avatar,
      }) => ({
        url: '/auth/register',
        method: 'POST',
        body: {
          username,
          email,
          password,
          postingrole_user,
          generalrole_user,
          avatar,
        },
      }),
      transformResponse: (rawResult: ReturnToken, meta) => {
        let data: ReturnToken = { ...rawResult, isAuthenticated: true };
        console.log(data);

        return data;
      },
    }),
  }),
});

export const { useAddRegisterApplicantMutation } = authApi;

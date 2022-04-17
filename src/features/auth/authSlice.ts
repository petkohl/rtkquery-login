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
}
// getDepartments: builder.query({
//   query: params => ({
//       url: `departments`,
//       params,
//       // Transform and normalize API response
//       transform: response => {
//           console.log(response);
//           return response;
//       },
//   }),
//   transformResponse: (response) => response.some.deeply.nested.collection,
//   providesTags: result => {
//       return result
//           ? [
//                   ...result.items.map(({ id }) => ({ type: 'Department', id })),
//                   { type: 'Department', id: 'LIST' },
//             ]
//           : [{ type: 'Department', id: 'LIST' }];
//   },
// }),

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',

    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
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
        let data = { ...rawResult, isAuthenticated: true };
        console.log(data);

        return data;
      },
    }),
  }),
});

export const { useAddRegisterApplicantMutation } = authApi;

// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const KEY = '626e1b82034ec185d339338e';
// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://${KEY}.mockapi.io` }),
  endpoints: (builder) => ({
    getContactByName: builder.query({
      query: (name) => `contacts/${name}`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetContactByNameQuery } = contactsApi;
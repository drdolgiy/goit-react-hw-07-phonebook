import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://626e1b82034ec185d339338e.mockapi.io/api/v1/' }),
  tagTypes:['Contacts'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),  
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    })
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactsApi; 
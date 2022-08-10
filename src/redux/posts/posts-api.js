import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'posts',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NODE_ENV === 'production' ? '/api' : 'http://70.34.201.18:8080',
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: (page = 1) => `/posts?limit=6&page=${page}`,
      providesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApi;

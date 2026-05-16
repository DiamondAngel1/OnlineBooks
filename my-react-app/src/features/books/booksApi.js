import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4353/api/' }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => 'books/all',
        }),
    }),
});

export const { useGetBooksQuery } = booksApi;

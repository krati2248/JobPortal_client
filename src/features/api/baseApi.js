// src/features/api/baseApi.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://server-s9je.onrender.com/api/',
  credentials: 'include', 
});

export default baseQuery;

import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query";
import { MergeRequests, Projects } from "./gitlab";

type TopicArg<T extends (...args: any) => any> = {
  topic: T;
  params: Parameters<T>;
};

type Topics =
  | TopicArg<typeof Projects.all>
  | TopicArg<typeof MergeRequests.all>
  | TopicArg<typeof MergeRequests.create>;

const gitlabBaseQuery: BaseQueryFn<Topics> = async ({ topic, params }) => ({
  // @ts-ignore
  data: await topic(...(Array.isArray(params) ? params : [params])),
});

export const ProjectsApi = createApi({
  baseQuery: gitlabBaseQuery,
  endpoints: (builder) => ({
    all: builder.query({
      query: (params) => ({ topic: Projects.all, params }),
    }),
  }),
});

export const MergeRequestsApi = createApi({
  baseQuery: gitlabBaseQuery,
  endpoints: (builder) => ({
    all: builder.query({
      query: (params) => ({ topic: MergeRequests.all, params }),
    }),
    create: builder.mutation({
      query: (params) => ({ topic: MergeRequests.create, params }),
    }),
  }),
});

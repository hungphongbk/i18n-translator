import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query";
import { PaginatedRequestOptions } from "@gitbeaker/core/dist/types/infrastructure";
import { ProjectSchema } from "@gitbeaker/core/dist/types/resources/Projects";
import { Projects } from "./gitlab";

type Topics = typeof Projects.all;

const gitlabBaseQuery: BaseQueryFn<{ topic: Topics; params?: any }> = async ({
  topic,
  params,
}) => ({ data: await topic(params) });

export const ProjectsApi = createApi({
  baseQuery: gitlabBaseQuery,
  endpoints: (builder) => ({
    readAll: builder.query<ProjectSchema[], PaginatedRequestOptions>({
      query: (params) => ({ topic: Projects.all, params }),
    }),
  }),
});

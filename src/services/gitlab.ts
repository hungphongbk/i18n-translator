import { Gitlab } from "@gitbeaker/browser";

const gitlabApi = new Gitlab({
  host: process.env.NEXT_PUBLIC_GITLAB_HOST,
  token: process.env.NEXT_PUBLIC_GITLAB_TOKEN,
});

export const Projects = gitlabApi.Projects;
export const MergeRequests = gitlabApi.MergeRequests;

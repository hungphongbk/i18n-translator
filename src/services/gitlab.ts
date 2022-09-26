import { Gitlab } from "@gitbeaker/browser";

const gitlabApi = new Gitlab({
  host: process.env.GITLAB_HOST,
  token: process.env.GITLAB_TOKEN,
});

export const Projects = gitlabApi.Projects;
export const MergeRequests = gitlabApi.MergeRequests;

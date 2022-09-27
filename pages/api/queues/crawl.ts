import { Queue } from "quirrel/next";
import client from "../../../src/services/apollo-client";
import { gql } from "@apollo/client";

const query = gql`
  query I18nJson($fullPath: ID!, $path: String) {
    project(fullPath: $fullPath) {
      name
      repository {
        rootRef
        tree(path: $path) {
          trees {
            nodes {
              id
              name
            }
          }
          blobs {
            nodes {
              path
              flatPath
            }
          }
        }
      }
    }
  }
`;

export type Payload = {
  projectId: number;
  path?: string;
};
const CrawlQueue = Queue(
  "api/queues/crawl",
  async ({ projectId, path }: Payload) => {
    const { data } = await client.query({
      query,
      variables: {
        fullPath: projectId,
        path,
      },
    });
  }
);

export default CrawlQueue;

import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../src/services/apollo-client";
import { gql } from "@apollo/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const [projectId, branch] = req.query.components as [string, string];
  res.json({
    status: "success",
    // data: await Projects.show(15282186),
    data: await client.query({
      query: gql`
        query I18nJson($fullPath: ID!) {
          project(fullPath: $fullPath) {
            name
            repository {
              rootRef
              tree {
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
      `,
      variables: {
        fullPath: projectId,
      },
    }),
  });
};

export default handler;

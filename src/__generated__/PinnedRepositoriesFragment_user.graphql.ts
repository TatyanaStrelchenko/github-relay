/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RepositoryVisibility = "INTERNAL" | "PRIVATE" | "PUBLIC" | "%future added value";
export type PinnedRepositoriesFragment_user = {
    readonly pinnedItems: {
        readonly nodes: ReadonlyArray<{
            readonly id?: string | undefined;
            readonly nameWithOwner?: string | undefined;
            readonly forkCount?: number | undefined;
            readonly description?: string | null | undefined;
            readonly stargazerCount?: number | undefined;
            readonly visibility?: RepositoryVisibility | undefined;
            readonly primaryLanguage?: {
                readonly name: string;
                readonly color: string | null;
            } | null | undefined;
        } | null> | null;
    };
    readonly " $refType": "PinnedRepositoriesFragment_user";
};
export type PinnedRepositoriesFragment_user$data = PinnedRepositoriesFragment_user;
export type PinnedRepositoriesFragment_user$key = {
    readonly " $data"?: PinnedRepositoriesFragment_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PinnedRepositoriesFragment_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PinnedRepositoriesFragment_user",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 6
        }
      ],
      "concreteType": "PinnableItemConnection",
      "kind": "LinkedField",
      "name": "pinnedItems",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "nameWithOwner",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "forkCount",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "stargazerCount",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "visibility",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Language",
                  "kind": "LinkedField",
                  "name": "primaryLanguage",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "color",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "type": "Repository",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "pinnedItems(first:6)"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'e0febc2d0e93ed6f08f44f08c35ff77b';
export default node;

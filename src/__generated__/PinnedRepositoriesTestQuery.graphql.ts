/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PinnedRepositoriesTestQueryVariables = {};
export type PinnedRepositoriesTestQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"PinnedRepositoriesFragment_user">;
    } | null;
};
export type PinnedRepositoriesTestQuery = {
    readonly response: PinnedRepositoriesTestQueryResponse;
    readonly variables: PinnedRepositoriesTestQueryVariables;
};



/*
query PinnedRepositoriesTestQuery {
  user: node(id: "test-id") {
    __typename
    ...PinnedRepositoriesFragment_user
    id
  }
}

fragment PinnedRepositoriesFragment_user on User {
  pinnedItems(first: 6) {
    nodes {
      __typename
      ... on Repository {
        id
        nameWithOwner
        forkCount
        description
        stargazerCount
        visibility
        primaryLanguage {
          name
          color
          id
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PinnedRepositoriesTestQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PinnedRepositoriesFragment_user"
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PinnedRepositoriesTestQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
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
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
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
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Repository",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
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
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "8f3c8503ef4187bb7de1a1923bd56b1a",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "user": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "user.__typename": (v3/*: any*/),
        "user.id": (v4/*: any*/),
        "user.pinnedItems": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PinnableItemConnection"
        },
        "user.pinnedItems.nodes": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "PinnableItem"
        },
        "user.pinnedItems.nodes.__isNode": (v3/*: any*/),
        "user.pinnedItems.nodes.__typename": (v3/*: any*/),
        "user.pinnedItems.nodes.description": (v5/*: any*/),
        "user.pinnedItems.nodes.forkCount": (v6/*: any*/),
        "user.pinnedItems.nodes.id": (v4/*: any*/),
        "user.pinnedItems.nodes.nameWithOwner": (v3/*: any*/),
        "user.pinnedItems.nodes.primaryLanguage": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Language"
        },
        "user.pinnedItems.nodes.primaryLanguage.color": (v5/*: any*/),
        "user.pinnedItems.nodes.primaryLanguage.id": (v4/*: any*/),
        "user.pinnedItems.nodes.primaryLanguage.name": (v3/*: any*/),
        "user.pinnedItems.nodes.stargazerCount": (v6/*: any*/),
        "user.pinnedItems.nodes.visibility": {
          "enumValues": [
            "INTERNAL",
            "PRIVATE",
            "PUBLIC"
          ],
          "nullable": false,
          "plural": false,
          "type": "RepositoryVisibility"
        }
      }
    },
    "name": "PinnedRepositoriesTestQuery",
    "operationKind": "query",
    "text": "query PinnedRepositoriesTestQuery {\n  user: node(id: \"test-id\") {\n    __typename\n    ...PinnedRepositoriesFragment_user\n    id\n  }\n}\n\nfragment PinnedRepositoriesFragment_user on User {\n  pinnedItems(first: 6) {\n    nodes {\n      __typename\n      ... on Repository {\n        id\n        nameWithOwner\n        forkCount\n        description\n        stargazerCount\n        visibility\n        primaryLanguage {\n          name\n          color\n          id\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6752441d0ed12d19a243db7a6b6840b7';
export default node;

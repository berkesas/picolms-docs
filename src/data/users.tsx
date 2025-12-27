/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType = "general";

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Ajap Dictionary',
    description: 'Online dictionary website',
    preview: 'img/showcase/ajapsozluk.png',
    website: 'https://ajapsozluk.com/en/quiz',
    source: null,
    tags: ['general'],
  },
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  general: {
    label: translate({ message: "General" }),
    description: translate({
      message: "Websites using Pico LMS!",
      id: "showcase.tag.general.description",
    }),
    color: "#39b940ff",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("general"));
  return result;
}

export const sortedUsers = sortUsers();

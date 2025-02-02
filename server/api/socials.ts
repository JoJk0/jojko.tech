const socials = [
  {
    name: "Github",
    url: "https://github.com/jojk0",
    urlName: "@jojk0",
    icon: "line-md/github",
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/jojko.bsky.social",
    urlName: "@jojko.bsky.social",
    icon: "line-md/bluesky",
  },
  {
    name: "Mastodon",
    url: "/mastodon",
    urlName: "@jacob@jojko.tech",
    icon: "line-md/mastodon",
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/jojko",
    urlName: "in/jojko",
    icon: "line-md/linkedin",
  },
] as const;

export default defineEventHandler(() => socials);

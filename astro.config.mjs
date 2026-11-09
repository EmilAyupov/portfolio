import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner, repo] = repository.split("/");
const isUserOrOrgSite = repo === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "https://example.github.io",
  base: owner && repo && !isUserOrOrgSite ? `/${repo}` : "/",
  output: "static"
});

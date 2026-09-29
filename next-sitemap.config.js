/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://roshnistudio.com",

  generateRobotsTxt: true,
  generateIndexSitemap: false

  // changefreq: "weekly",
  // priority: 0.7,

  // autoLastmod: false, // IMPORTANT: stops fake updates

  // transform: async (_, path) => {
  //   if (path === "/") {
  //     return {
  //       loc: path,
  //       changefreq: "weekly",
  //       priority: 1.0
  //     };
  //   }

  //   if (path.startsWith("/projects")) {
  //     return {
  //       loc: path,
  //       changefreq: "monthly",
  //       priority: 0.8
  //     };
  //   }

  //   if (path === "/pricing") {
  //     return {
  //       loc: path,
  //       changefreq: "monthly",
  //       priority: 0.8
  //     };
  //   }

  //   if (path === "/contact") {
  //     return {
  //       loc: path,
  //       changefreq: "monthly",
  //       priority: 0.6
  //     };
  //   }

  //   if (path.startsWith("/legal")) {
  //     return {
  //       loc: path,
  //       changefreq: "monthly",
  //       priority: 0.3
  //     };
  //   }

  //   return {
  //     loc: path,
  //     changefreq: "monthly",
  //     priority: 0.5
  //   };
  // }
};

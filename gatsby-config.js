module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "recipes",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckur1j95t03wl01wc6ks6bftf/master",
    },
  },
],
};

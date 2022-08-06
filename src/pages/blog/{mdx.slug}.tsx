import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/layout";

interface DataProps {
  data: {
    mdx: {
      frontmatter: {
        date: string;
        title: string;
      };
      body: string;
    };
  };
}

const BlogPost = ({ data }: DataProps) => {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Typography variant="h6">{data.mdx.frontmatter.date}</Typography>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM.DD.YYYY")
        title
      }
      body
    }
  }
`;

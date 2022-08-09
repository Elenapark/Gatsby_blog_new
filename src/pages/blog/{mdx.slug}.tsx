import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout";

interface DataProps {
  data: {
    mdx: {
      frontmatter: {
        date: string;
        title: string;
        image_alt: string;
        image: {
          childImageSharp: {
            gatsbyImageData: string;
          };
        };
      };
      body: string;
    };
  };
}

const BlogPost = ({ data }: DataProps) => {
  //  getImage 함수를 이용해서 data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData를 편하게 받을 수 있음
  const image = getImage(data.mdx.frontmatter.image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Typography variant="h6">{data.mdx.frontmatter.date}</Typography>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.image_alt}
        style={{ width: "190px" }}
      />
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
        image_alt
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

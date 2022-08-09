import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { List, ListItem, Typography } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "@emotion/styled";

interface FileNodeProps {
  data: {
    allFile: {
      nodes: BlogTitle[];
    };
  };
}

interface BlogTitle {
  name: string;
}

interface MdxNodeProps {
  data: {
    allMdx: {
      nodes: MdxBlogInfo[];
    };
  };
}

interface MdxBlogInfo {
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
  slug: string;
}

const BlogPage = ({ data: { allMdx } }: MdxNodeProps) => {
  return (
    <Layout pageTitle="Blog">
      <List component="article">
        {/* {allFile.nodes.map((file, idx) => {
          return (
            <ListItem key={`file ${file.name} ${idx}`}>{file.name}</ListItem>
          );
        })} */}
        {allMdx.nodes.map((mdxNode) => {
          return (
            <>
              <ListItem key={`mdxNode ${mdxNode.id}`} sx={ListItemSx}>
                <Link
                  to={`/blog/${mdxNode.slug}`}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Typography variant="h6" mr={1}>
                    {mdxNode.frontmatter.title}
                  </Typography>
                </Link>
              </ListItem>
            </>
          );
        })}
      </List>
    </Layout>
  );
};

export default BlogPage;

//Page 컴포넌트에서는 components 폴더에서와 같이
//useStaticQuery를 쓰지않고 다른 방식으로 데이터를 가져옴.

// allFileNode
// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `;

// gatsby-source-filesystem => gatsby-transformer-plugin-mdx로 전환하는 이유
// the filesystem source plugin lets you query data about files,
// but it doesn’t let you use the data inside the files themselves.
// To make this possible, Gatsby supports transformer plugins,
// which take the raw content from source plugins and transform it into something more usable.

// allMdxNode
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM.D.YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

const ListItemSx = {
  color: "primary.main",
  display: "flex",
  justifyContent: "space-betweeen",
};

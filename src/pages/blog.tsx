import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { List, ListItem } from "@mui/material";

interface DataProps {
  data: {
    allFile: {
      nodes: BlogTitle[];
    };
  };
}
interface BlogTitle {
  name: string;
}

const BlogPage = ({ data: { allFile } }: DataProps) => {
  return (
    <Layout pageTitle="Blog">
      <List>
        {allFile.nodes.map((file, idx) => {
          return (
            <ListItem key={`file ${file.name} ${idx}`}>{file.name}</ListItem>
          );
        })}
      </List>
    </Layout>
  );
};

export default BlogPage;

//Page 컴포넌트에서는 components 폴더에서와 같이
//useStaticQuery를 쓰지않고 다른 방식으로 데이터를 가져옴.

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

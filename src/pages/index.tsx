import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"; //add an image from an external URL

const IndexPage = () => {
  return (
    <Layout>
      {/* 인덱스 페이지 */}
      {/* <StaticImage
        alt="imgEx"
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../images/icon.png"
      /> */}
    </Layout>
  );
};

export default IndexPage;

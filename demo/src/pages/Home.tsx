import React from "react";
import clsx from "clsx";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import Tabs from "@theme/Tabs";
// @ts-ignore
import TabItem from "@theme/TabItem";
// @ts-ignore
import CodeBlock from "@theme/CodeBlock";
import VanillaView3D from "../../../packages/view3d/src";
import License from "../components/License";

import styles from "./home.module.css";
import Features from "../components/home/Features";
import QuickStart from "../components/home/QuickStart";
import CDN from "../components/home/CDN";

class Home extends React.Component {
  public componentDidMount() {
    const view3D = new VanillaView3D("#home-view3d", {
      src: "/egjs-view3d/model/cube.glb",
      zoom: false,
      pitch: 25,
      initialZoom: -5,
      shadow: { blur: 1 },
      autoplay: { canInterrupt: false }
    });
  }

  public render() {
    return (<Layout>
      <div className="container pb-6">
        <div className={styles.max400}>
          <div id="home-view3d" className="view3d-wrapper view3d-square">
            <canvas className="view3d-canvas"></canvas>
          </div>
        </div>
        <section className="py-4">
          <div className={clsx(styles.packageName, "is-size-1", "has-text-centered", "mb-4")}>View3D</div>
          <div className={clsx(styles.badges, "mb-2")}>
            <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@egjs/view3d?logo=npm"></img>
            <img alt="License" src="https://img.shields.io/github/license/naver/egjs-view3d" />
            <img alt="Typescript" src="https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat-square&logo=typescript" />
            <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/naver/egjs-view3d?style=social" />
          </div>
          <Tabs
            groupId="framework"
            defaultValue="js"
            lazy={true}
            className={styles.mainTabs}
            values={[
              { label: "Javascript", value: "js" },
              { label: "React", value: "react" },
              { label: "Angular", value: "ng" },
              { label: "Vue@2", value: "vue2" },
              { label: "Vue@3", value: "vue3" },
              { label: "Svelte", value: "svelte" }
            ]}>
            <TabItem value="js">
              <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/view3d"}</CodeBlock>
            </TabItem>
            <TabItem value="react">
              <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/react-view3d"}</CodeBlock>
            </TabItem>
            <TabItem value="ng">
              <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/ngx-view3d"}</CodeBlock>
            </TabItem>
            <TabItem value="vue2">
              <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/vue-view3d"}</CodeBlock>
            </TabItem>
            <TabItem value="vue3">
              <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/vue3-view3d"}</CodeBlock>
            </TabItem>
            <TabItem value="svelte">
              <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/svelte-view3d"}</CodeBlock>
            </TabItem>
          </Tabs>
          <div className="subtitle has-text-centered">Fast & Customizable glTF 3D model viewer, packed with full of features!</div>
          <div className={styles.btnsWrapper}>
            <Link
              className="button mr-2"
              to="/docs">
                🚀 Get Started
            </Link>
            <Link
              className="button"
              to="/Playground">
                🚂 Playground
            </Link>
          </div>
        </section>
        <Features />
        <QuickStart />
        <CDN />
        <License className="py-4" items={[
          {
            name: "Potted Plant 04",
            link: "https://polyhaven.com/a/potted_plant_04",
            author: "Poly Haven",
            authorLink: "https://polyhaven.com/",
            license: "CC0"
          }
        ]} />
      </div>
    </Layout>);
  }
}

export default Home;

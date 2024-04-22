import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            {">"}_ {siteConfig.tagline}
            <span className={styles.cursor}></span>
          </p>
        </div>
        <div className={styles.centeredButton}>
          <Link to="/docs/Software%20Architecture/intro" className={styles.getStartedButton}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.layoutWrapper}>
        {" "}
        {/* Ensure this class is defined in your CSS */}
        <HomepageHeader />
        <HomepageFeatures />
      </div>
    </Layout>
  );
}

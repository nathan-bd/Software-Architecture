import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Made for learning",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        This was developed to teach myself to basics of React, JS, Github plus Github actions and whatever else i come across
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The contents aim is to develop a general understanding of the broad scope of what Software
        Architecture is.
      </>
    ),
  },
  {
    title: "Powered by ChatGPT",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>All content is provided by ChatGPT and validation by me.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col", styles.feature)}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

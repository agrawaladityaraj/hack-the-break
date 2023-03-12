import { forwardRef } from "react";
import Image from "next/image";
import { Group, Text, Select } from "@mantine/core";

import angular from "../assets/icons/angular.png";
import assembly from "../assets/icons/Assembly.png";
import cplusplus from "../assets/icons/cplusplus.png";
import css from "../assets/icons/css.png";
import django from "../assets/icons/django.png";
import html from "../assets/icons/html.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/js.png";
import node from "../assets/icons/node.png";
import other from "../assets/icons/other.png";
import python from "../assets/icons/python.png";
import r from "../assets/icons/R.png";
import react from "../assets/icons/reactjs.png";
import ruby from "../assets/icons/ruby.png";
import rust from "../assets/icons/rust.png";
import sql from "../assets/icons/sql.png";
import svelte from "../assets/icons/Svelte.png";
import swift from "../assets/icons/swift.png";
import typescript from "../assets/icons/typescript.png";

const images = {
  angular: angular,
  assembly: assembly,
  cplusplus: cplusplus,
  css: css,
  django: django,
  html: html,
  java: java,
  javascript: javascript,
  node: node,
  other: other,
  python: python,
  r: r,
  react: react,
  ruby: ruby,
  rust: rust,
  sql: sql,
  svelte: svelte,
  swift: swift,
  typescript: typescript,
};

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef(({ image, label, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Image src={images[image]} alt={label} height={20} width={20} />
      <div>
        <Text fz="lg" style={{ fontFamily: "Roboto Mono" }} size="sm">
          {label}
        </Text>
      </div>
    </Group>
  </div>
));

export default function MySelect({ data, addTechnology }) {
  return (
    <Select
      style={{ fontFamily: "Roboto Mono" }}
      placeholder="Search"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound={
        data.length
          ? "Nothing found here!"
          : "Jesus f**cking christ, you selected all of them you psycopath!!!"
      }
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim())
      }
      value={""}
      onChange={(value) => {
        addTechnology(value);
      }}
    />
  );
}

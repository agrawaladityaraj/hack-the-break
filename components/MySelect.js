import { useState, forwardRef } from "react";
import { Group, Avatar, Text, Select } from "@mantine/core";

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef(({ image, label, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar src={image} />
      <div>
        <Text fz="lg" style={{ fontFamily: "Roboto Mono" }} size="sm">
          {label}
        </Text>
      </div>
    </Group>
  </div>
));

export default function MySelect({ data, setData, addTechnology }) {
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
        setData(data.filter((item) => item.value != value));
        addTechnology(value);
      }}
    />
  );
}

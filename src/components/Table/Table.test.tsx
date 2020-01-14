import React from "react";
import { shallow } from "enzyme";
import { Table, TableHeader, TableBody, Column } from "./Table";

const table = (
  <Table
    data={[
      { name: "test1", distance: 30 },
      { name: "test2", distance: 40 }
    ]}
    columns={[
      { key: "name", display: "SERVER" },
      { key: "distance", display: "DISTANCE" }
    ]}
  />
);

describe("Table", () => {
  it("should render", () => {
    const wrapper = shallow(table);

    expect(wrapper).toBeTruthy();
  });

  it("should display the header", () => {
    const wrapper = shallow(table);

    expect(wrapper.find(TableHeader)).toHaveLength(1);
  });

  it("should display the body", () => {
    const wrapper = shallow(table);
    expect(wrapper.find(TableBody)).toHaveLength(1);
  });

  describe("TableHeader", () => {
    it("should display column headers", () => {
      const wrapper = shallow(
        <TableHeader
          columns={[
            { key: "name", display: "SERVER" },
            { key: "distance", display: "DISTANCE" }
          ]}
          onHeaderClick={jest.fn()}
        />
      );

      expect(
        wrapper
          .find(Column)
          .at(0)
          .text()
      ).toEqual("SERVER");
      expect(
        wrapper
          .find(Column)
          .at(1)
          .text()
      ).toEqual("DISTANCE");
    });

    it("should should call onHeaderClick with the column key", () => {
      const mockOnHeaderClick = jest.fn();

      const wrapper = shallow(
        <TableHeader
          columns={[
            { key: "name", display: "SERVER" },
            { key: "distance", display: "DISTANCE" }
          ]}
          onHeaderClick={mockOnHeaderClick}
        />
      );

      wrapper
        .find(Column)
        .at(0)
        .simulate("click");

      wrapper
        .find(Column)
        .at(1)
        .simulate("click");

      expect(mockOnHeaderClick).toHaveBeenCalledWith("name");
      expect(mockOnHeaderClick).toHaveBeenCalledWith("distance");
    });
  });
});

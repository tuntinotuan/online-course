import React from "react";
import Field from "../../../components/field/Field";
import Label from "../../../components/label/Label";
import DropdownTopic from "../../../components/dropdown/DropdownTopic";
import DropdownCategory from "../../../components/dropdown/DropdownCategory";
import DropdownIndustry from "../../../components/dropdown/DropdownIndustry";
import { useSelector } from "react-redux";

const CategoryBody = () => {
  const { allCategories, allIndustries, allTopics } = useSelector(
    (state) => state.category
  );
  return (
    <div className="grid grid-cols-3 gap-10">
      <Field>
        <Label>Categories</Label>
        <DropdownCategory
          placeholder={`${allCategories?.meta.pagination.total} categories`}
        ></DropdownCategory>
      </Field>
      <Field>
        <Label>Industries</Label>
        <DropdownIndustry
          placeholder={`${allIndustries?.meta.pagination.total} industries`}
        ></DropdownIndustry>
      </Field>
      <Field>
        <Label>Topics</Label>
        <DropdownTopic
          placeholder={`${allTopics?.meta.pagination.total} topics`}
          heightOption="!max-h-[500px] h-auto"
          showEdit
        ></DropdownTopic>
      </Field>
    </div>
  );
};

export default CategoryBody;

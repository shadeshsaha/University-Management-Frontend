"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // query er value hishebe set kora hoise ekhane.
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  // console.log("data: ", data);

  const { departments, meta } = data;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      // sorter: true,
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button
            onClick={() => console.log("data: ", data)}
            type="primary"
            danger
          >
            x
          </Button>
        );
      },
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "shadesh Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
  ];

  // parameters er position matters here.
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page: ", page);
    console.log("pageSize: ", pageSize);
  };

  // parameters er position matters here.
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    // order = kon order a sort hobe(asc/desc), field = kon field er upor sorting kortesi.
    const { order, field } = sorter;
    console.log("order: ", order, "field: ", field);
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>

      {/* Added department lists */}
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={tableData}
        pageSize={5}
        totalPages={100}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;

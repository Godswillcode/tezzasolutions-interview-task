import Table, { ColumnsType } from "antd/lib/table";
import { routePath } from "config/routesManagement/routePath";
import React from "react";
import { Link } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (_, val) => (
      <Link to={routePath.clientProfile(val.key).path}>{val.name}</Link>
    ),
  },

  {
    title: "Email",
    dataIndex: "email",
    render: (_, val) => (
      <Link to={routePath.clientProfile(val.key).path}>{val.email}</Link>
    ),
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Residential Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `Adegoke Oluwadailare`,
    email: `adegoketemiope1909@gmail.com`,
    phone: `08160730668`,
    address: `No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria`,
  });
}

export const ClientTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ x: 768 }}
    />
  );
};

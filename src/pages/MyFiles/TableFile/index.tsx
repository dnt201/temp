import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { SetStateAction, useEffect, useState } from "react";
import { iFile } from "../fakeData";

interface iPropsTableFile {
  selectedRowKeys: React.Key[];
  setSelectedRowKeys: (prevState: React.Key[]) => void;
}
const TableFile: React.FC<iPropsTableFile> = (props) => {
  const { selectedRowKeys, setSelectedRowKeys } = props;
  const [listData, setListData] = useState<iFile[]>([]);
  //#region mockData
  const dataSource: iFile[] = [
    {
      key: "1",
      name: "anhaTd2 The href attribute is required for an anchor to be keyboard accessibleaccessibleaccessibleaccessibleaccessible. Provide a valid, navigable address as the href value. If you cannot provideprovideprovideprovideprovideprovideprovideprovide an href, but still need the",
      linkTo: "https://fb.com,",
      owner: "Mike",
      addedDate: "20/10/2022",
    },
    {
      key: "2",
      name: "cnhaTd2",
      linkTo: "https://fb.com,",
      owner: "Mike",
      addedDate: "20/10/2022",
    },
  ];

  const columns: ColumnsType<iFile> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "65%",
      sorter: (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: "Link to",
      dataIndex: "linkTo",
      key: "linkTo",
      render: (text: string) => (
        <a onClick={(e) => e.stopPropagation()}>{text}</a>
      ),
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Added date",
      dataIndex: "addedDate",
      key: "addedDate",
      sorter: (a, b) =>
        a.addedDate.toDateDMY() > b.addedDate.toDateDMY()
          ? 1
          : a.addedDate.toDateDMY() < b.addedDate.toDateDMY()
          ? -1
          : 0,
    },
  ];
  //#endregion

  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            let temp = selectedRowKeys;
            if (selectedRowKeys.includes(record.key)) {
              temp = selectedRowKeys.filter((i) => i !== record.key);
              setSelectedRowKeys(temp);
            } else {
              setSelectedRowKeys([...temp, record.key]);
            }
          }, // click row
        };
      }}
      rowSelection={{
        type: "checkbox",
        selectedRowKeys,
        onChange: setSelectedRowKeys,
      }}
      className="table__container"
      dataSource={listData}
      columns={columns}
      pagination={{
        defaultCurrent: 1,
        // showSizeChanger: false
      }}
    />
  );
};

export default TableFile;

import { Image, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { SetStateAction, useEffect, useState } from "react";
import "./TableImage.less";
interface DataType {
  key: React.Key;
  name: string;
  linkTo: string;
  owner: string;
  addedDate: string;
}
interface iPropsTableImage {
  selectedRowKeys: React.Key[];
  setSelectedRowKeys: (prevState: React.Key[]) => void;
  keyTab?: string;
}
const TableImage: React.FC<iPropsTableImage> = (props) => {
  const { selectedRowKeys, setSelectedRowKeys } = props;
  const [listData, setListData] = useState<DataType[]>([]);
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  //#region mockData
  const dataSource: DataType[] = [
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
  for (let i = 3; i < 1000; i++) {
    dataSource.push({
      key: `${i}`,
      name: i % 2 === 0 ? i + "nhaTd2" : "dnhaTd2",
      linkTo: "https://fb.com",
      owner: i + "Mike",
      addedDate:
        i % 3 === 0 ? "20/10/2022" : i % 2 === 0 ? "19/01/2022" : "21/10/2022",
    });
  }
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "65%",
      sorter: (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
      ellipsis: {
        showTitle: true,
      },
      render: (data) => (
        <div className="tableImage__column--name__container">
          <Image
            height={"32px"}
            preview={{
              visible: isPreviewVisible,
              onVisibleChange: (visible, prevVisible) =>
                setPreviewVisible(visible),
            }}
            src="https://kenh14cdn.com/203336854389633024/2023/1/6/321091717547759233932570750017097785911155n-167301097067111059904.jpg"
          />
          <button
            onClick={(e) => {
              setPreviewVisible(!isPreviewVisible);
              console.log("click");
            }}
          >
            <span>{data}</span>
          </button>
        </div>
      ),
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

  useEffect(() => {
    setListData(dataSource);
  }, []);

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

export default TableImage;

import { DeleteOutlined } from "@ant-design/icons";
import { Modal, Tabs, TabsProps } from "antd";
import React, { useEffect, useState } from "react";
import "./style.less";
import TableFile from "./TableFile";
import TableImage from "./TableImage";

const MyFiles = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [filter, setFilter] = useState();

  //Call api
  useEffect(() => {}, [filter]);

  const items: TabsProps["items"] = [
    {
      key: "tableFile",
      label: <label className="tabLabel">Files</label>,
      children: (
        <TableFile
          selectedRowKeys={selectedRowKeys}
          setSelectedRowKeys={(state: React.Key[]) => setSelectedRowKeys(state)}
        />
      ),
    },
    {
      key: "tableImage",
      label: <label className="tabLabel">Images</label>,
      children: (
        <TableImage
          selectedRowKeys={selectedRowKeys}
          setSelectedRowKeys={(state: React.Key[]) => setSelectedRowKeys(state)}
        />
      ),
    },
  ];

  const showModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleOk = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="myFiles__container">
      <header>
        <h1 className="title"> My Files</h1>
      </header>
      <section>
        <Tabs
          onChange={() => {
            setSelectedRowKeys([]);
          }}
          className="tabs__container"
          defaultActiveKey="1"
          items={items}
          tabBarExtraContent={{
            right: (
              <button
                disabled={selectedRowKeys.length <= 0}
                className="deleteButton"
                onClick={() => showModal()}
              >
                {" "}
                <DeleteOutlined />{" "}
              </button>
            ),
          }}
          // onChange={onChange}
        />
      </section>
      <Modal
        title="Do you want to DELETE?"
        open={isDeleteModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          {selectedRowKeys.map((item, index) => (
            <span key={item}>
              {selectedRowKeys[index]}
              {index < selectedRowKeys.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </Modal>
    </div>
  );
};

export default MyFiles;

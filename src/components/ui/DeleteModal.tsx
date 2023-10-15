import { Modal } from "antd";

type DeleteModalProps = {
  title: string;
  subTitle: string;
  isModalOpen: boolean;
  handleOk: any;
  handleCancel: any;
};

const DeleteModal = ({
  title,
  subTitle,
  isModalOpen,
  handleOk,
  handleCancel,
}: DeleteModalProps) => {
  return (
    <Modal
      width={"350px"}
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p style={{ padding: "10px 0px" }}>{subTitle}</p>
    </Modal>
  );
};

export default DeleteModal;

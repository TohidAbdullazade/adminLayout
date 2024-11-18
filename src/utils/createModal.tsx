import { Modal } from "antd";
import { ReactNode } from "react";

interface ICreateModal {
  isOpen: boolean;
  children: ReactNode;
  onCloseFunction?: () => void;
  title: ReactNode;
  width?: string | number;
}

export default function CreateModal({
  children,
  isOpen,
  onCloseFunction,
  title,
  width,
}: ICreateModal) {
  return (
    <Modal
      onClose={close}
      width={width}
      title={title}
      maskClosable={false}
      closable
      footer={false}
      open={isOpen}
      onCancel={onCloseFunction}
    >
      {children}
    </Modal>
  );
}

import { ReactNode } from "react";
import Pagination from "../Pagination/Pagination";
import { IPaginationProps } from "../../interfaces";

interface PaginationWrapperProps {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...restProps
}: PaginationWrapperProps & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...restProps} />}
      {children}
      {bottom && <Pagination {...restProps} />}
    </>
  );
};

export default PaginationWrapper;

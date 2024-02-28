import { ReactNode } from 'react';

import PaginationButtons from '../PaginationButtons/PaginationButtons';
import { IPaginationProps } from '../../model/types';

interface PaginationProps {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...restProps
}: PaginationProps & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...restProps} />}
      {children}
      {bottom && <PaginationButtons {...restProps} />}
    </>
  );
};

export default Pagination;

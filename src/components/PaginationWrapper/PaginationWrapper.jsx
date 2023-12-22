import Pagination from "../Pagination/Pagination";

const PaginationWrapper = ({ top, bottom, children, ...restProps }) => {
  return (
    <>
      {top && <Pagination {...restProps} />}
      {children}
      {bottom && <Pagination {...restProps} />}
    </>
  );
};

export default PaginationWrapper;

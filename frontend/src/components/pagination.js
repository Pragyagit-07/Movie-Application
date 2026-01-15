import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ page, totalPages, onChange }) => (
  <MuiPagination
    page={page}
    count={totalPages}
    onChange={(e, val) => onChange(val)}
  />
);

export default Pagination;

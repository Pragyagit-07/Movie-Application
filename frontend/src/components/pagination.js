import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ page, totalPages, onChange }) => {
  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={(e, value) => onChange(value)}
      color="primary"
      sx={{ display: "flex", justifyContent: "center", mt: 3 }}
    />
  );
};

export default Pagination;

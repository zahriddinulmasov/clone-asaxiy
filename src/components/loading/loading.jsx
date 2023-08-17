import { CircularProgress } from "@mui/material";
import { InternalTitle, Wrapper } from "./loading.styles";

export const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress />
      <InternalTitle>Loading ...</InternalTitle>
    </Wrapper>
  );
};

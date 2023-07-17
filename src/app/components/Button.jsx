import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons({ text, onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        className="mr-3 bg-gray-50 font-bold text-primary hover:bg-gray-800"
        onClick={onClick}
      >
        {text}
      </Button>
    </Stack>
  );
}

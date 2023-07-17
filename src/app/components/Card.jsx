import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Image from "next/image";

export default function ActionAreaCard({
  image,
  alt,
  name,
  description,
  link,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="bg-primary text-center">
      <CardActionArea href={link} target="_blank">
        <Image component="img" src={image} alt={alt} className="h-[200px]" />
        <CardContent>
          <Typography gutterBottom component="div" className="text-3xl">
            {name}
          </Typography>
          <Typography color="text.secondary" className="text-xs">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

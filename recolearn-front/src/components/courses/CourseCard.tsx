import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import geoPattern from "geopattern";

import Link from "next/link";
import { useMemo } from "react";

interface CourseCardProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const CourseCard = ({
  title,
  subtitle,
  description,
}: CourseCardProps) => {
  const geopatternURI = useMemo(() => {
    const pattern = geoPattern.generate(title);
    return pattern.toDataUri();
  }, [title]);

  return (
    <Card variant="outlined" sx={{ maxWidth: 273 }}>
      <CardMedia
        component="div"
        sx={{
          height: 140,
          backgroundImage: `url(${geopatternURI})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <CardContent>
        <MuiLink
          underline="hover"
          gutterBottom
          sx={{
            color: "text.primary",
            fontWeight: 500,
            fontSize: "15px",
            letterSpacing: "1px",
            marginBottom: "0.5rem",
            display: "inline-block",
          }}
          component={Link}
          href={`/my-courses/${title}`}
        >
          {title}
        </MuiLink>
        {subtitle && (
          <Typography sx={{ fontWeight: 300, fontSize: "15px" }}>
            {subtitle}
          </Typography>
        )}

        {description && (
          <Typography sx={{ fontWeight: 300, fontSize: "13px" }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

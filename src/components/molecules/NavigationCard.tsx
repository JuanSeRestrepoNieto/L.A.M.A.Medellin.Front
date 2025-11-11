import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  type SvgIconProps,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
  path: string;
}

export const NavigationCard = ({
  title,
  description,
  icon: Icon,
  path,
}: NavigationCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15)",
        },
      }}
      onClick={() => navigate(path)}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Icon sx={{ fontSize: 40, color: "primary.main" }} />
          <ChevronRight sx={{ color: "text.secondary" }} />
        </Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

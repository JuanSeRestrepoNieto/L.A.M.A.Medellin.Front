import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Chip } from "@mui/material";
import { Logout, Business } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { Avatar } from "../molecules/Avatar";

interface HeaderProps {
  userName: string;
  userEmail: string;
  userRole: "admin" | "miembro";
}

export const Header = ({ userName, userEmail, userRole }: HeaderProps) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    enqueueSnackbar("Sesión cerrada correctamente", { variant: "info" });
    navigate("/");
  };

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Business sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portal Empresarial
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar name={userName} size={40} />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant="body2" fontWeight={600}>
                {userName}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" color="primary.light">
                  {userEmail}
                </Typography>
                <Chip
                  label={userRole}
                  size="small"
                  color={userRole === "admin" ? "secondary" : "default"}
                  sx={{ height: 18, fontSize: "0.65rem" }}
                />
              </Box>
            </Box>
          </Box>

          <Button
            color="inherit"
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Cerrar Sesión
          </Button>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{ display: { xs: "flex", md: "none" }, minWidth: "auto", p: 1 }}
          >
            <Logout />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

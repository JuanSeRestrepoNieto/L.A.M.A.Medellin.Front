import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import type { Member } from "../../types/data";
import { Header } from "../organisms/Header";
import { MembersGrid } from "../organisms/MemberGrid";
import useMember from "../../hooks/useMember";
import type { FilterMembers } from "../../types/filters";

const Members = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { getMembers } = useMember();
  const [members, setMembers] = useState<Member[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState<"admin" | "miembro">("miembro");
  const filter: FilterMembers = {
    pageSize: 50,
  };
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const role = localStorage.getItem("userRole") as "admin" | "miembro";

    if (!email) {
      navigate("/");
      return;
    }
    setMembers(getMembers(filter).data.data);
    setUserEmail(email);
    setUserRole(role);
  }, []);

  const userName = userEmail.split("@")[0];

  const handleEdit = (member: Member) => {
    enqueueSnackbar(`Editando miembro: ${member.nombre}`, { variant: "info" });
  };

  const handleDelete = (member: Member) => {
    enqueueSnackbar(`Eliminando miembro: ${member.nombre}`, {
      variant: "warning",
    });
  };

  console.log("Rendering Members page with members:", members);

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        minWidth: "100dvw",
        bgcolor: "background.default",
        maxWidth: "100vw",
      }}
    >
      <Header userName={userName} userEmail={userEmail} userRole={userRole} />

      <Container>
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/home")}
            variant="outlined"
          >
            Volver
          </Button>
          <Box>
            <Typography variant="h4" component="h1" fontWeight={700}>
              Miembros del Equipo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userRole === "admin"
                ? "Gestiona la información de los miembros"
                : "Visualiza la información de los miembros"}
            </Typography>
          </Box>
        </Box>

        <MembersGrid
          members={members}
          userRole={userRole}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Container>
    </Box>
  );
};

export default Members;

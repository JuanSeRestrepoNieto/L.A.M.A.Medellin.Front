import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import type { Member } from "../../types/data";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";

interface MemberCardProps {
  member: Member;
  userRole: "admin" | "miembro";
  onEdit?: (member: Member) => void;
  onDelete?: (member: Member) => void;
}

export const MemberCard = ({
  member,
  userRole,
  onEdit,
  onDelete,
}: MemberCardProps) => {
  const showActions = userRole === "admin";

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar name={member.nombre} size={56} />
            <Box>
              <Typography variant="h6" component="h3">
                {member.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.correoElectronico}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Cargo
            </Typography>
            <Badge>{member.cargo}</Badge>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Estado
            </Typography>
            <Badge variant={member.estado}>{member.estado}</Badge>
          </Box> */}
        </Box>

        {showActions && (
          <>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
              <IconButton
                color="primary"
                size="small"
                onClick={() => onEdit?.(member)}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                color="error"
                size="small"
                onClick={() => onDelete?.(member)}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

import { Box } from "@mui/material";
import type { Member } from "../../types/data";
import { MemberCard } from "../molecules/MemberCard";

interface MembersGridProps {
  members: Member[];
  userRole: "admin" | "miembro";
  onEdit?: (member: Member) => void;
  onDelete?: (member: Member) => void;
}

export const MembersGrid = ({
  members,
  userRole,
  onEdit,
  onDelete,
}: MembersGridProps) => {
  console.log("Rendering MembersGrid with members:", members);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 3,
      }}
    >
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          userRole={userRole}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
};

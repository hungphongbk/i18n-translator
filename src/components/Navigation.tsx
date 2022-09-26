import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";

export default function Navigation(): JSX.Element {
  return (
    <List>
      <ListItem>
        <ListItemButton variant="soft" color="primary">
          <ListItemDecorator sx={{ color: "inherit" }}>
            <InboxRoundedIcon fontSize="small" />
          </ListItemDecorator>
          <ListItemContent>Inbox</ListItemContent>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

import { List, ListItem, ListItemText, Typography } from "@mui/material";

export function Timeline_Res(): JSX.Element {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="h6" color="#fff">
              2024
            </Typography>
          }
          secondary={
            <Typography variant="body2" color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque nesciunt repudiandae debitis ullam error necessitatibus
              unde quae dignissimos placeat obcaecati, eos impedit, minima enim
              veniam reprehenderit beatae tenetur corrupti numquam!
            </Typography>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="h6" color="#fff">
              2023
            </Typography>
          }
          secondary={
            <Typography variant="body2" color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              minima sint necessitatibus debitis alias, maiores, sapiente
              commodi nulla sunt dolorem corrupti ipsam dolorum nobis, mollitia
              laboriosam consequuntur est accusamus non!
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

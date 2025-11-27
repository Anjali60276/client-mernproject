import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function Footer() {
  const [bgColor, setBgColor] = useState('#6F4E37'); // coffee brown

  return (
    <Sheet
      invertedColors
      sx={{
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
        bgcolor: bgColor,
        color: 'white',
      }}
    >
      {/* Top row with color switcher, social icons, email input */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['#6F4E37', '#4B3621', '#8B5E3C', '#A9746E'];
            const nextColorIndex = colors.indexOf(bgColor) + 1;
            setBgColor(colors[nextColorIndex] ?? colors[0]);
          }}
          aria-label="change color"
        >
          <ColorLensRoundedIcon fontSize="small" sx={{ color: 'white' }} />
        </IconButton>

        <Divider orientation="vertical" sx={{ borderColor: 'white' }} />

        <IconButton variant="plain" aria-label="facebook" sx={{ color: 'white' }}>
          <FacebookRoundedIcon />
        </IconButton>

        <IconButton variant="plain" aria-label="github" sx={{ color: 'white' }}>
          <GitHubIcon />
        </IconButton>

        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon sx={{ color: 'white' }} />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' }, color: 'white' }}
          aria-label="email input"
        />
      </Box>

      <Divider sx={{ my: 2, borderColor: 'white' }} />

      {/* Bottom row with coffee image and links */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
            bgcolor: 'transparent',
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img
              alt="coffee"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
            />
          </AspectRatio>

          <CardContent sx={{ color: 'white' }}>
            <Typography level="body-sm">Explore the Coffee World</Typography>
            <Typography level="body-xs">Blog post</Typography>
          </CardContent>
        </Card>

        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl', color: 'white' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton sx={{ color: 'white' }}>Home</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: 'white' }}>Shop</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: 'white' }}>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl', color: 'white' }}>Products</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton sx={{ color: 'white' }}>Espresso Machine</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: 'white' }}>Coffee Grinder</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: 'white' }}>French Press</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}

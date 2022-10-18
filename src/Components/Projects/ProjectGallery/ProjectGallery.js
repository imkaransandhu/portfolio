import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./ProjectGallery.scss";

const itemData = [
  {
    img: "restApi",
    title: "Rest Countries API",
    author: "@bkristastucchio",
  },
  {
    img: "reactTodo",
    title: "React ToDo",
    author: "@rollelflex_graphy726",
  },
  {
    img: "jsTodo",
    title: "JavsScript ToDo",
    author: "@helloimnik",
  },
  {
    img: "huddleSvg",
    title: "Huddle SVG's",
    author: "@nolanissac",
  },
  {
    img: "chatApp",
    title: "Chat App",
    author: "@hjrc33",
  },
  {
    img: "rockPaperScissor",
    title: "Stone Paper Scissor",
    author: "@arwinneil",
  },
];

const ProjectGallery = () => {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: { xs: "50rem", sm: "70rem", md: "100rem" },

        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.

        transform: "translateZ(0)",
      }}
      gap={5}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 1 : 1;
        const rows = item.featured ? 1 : 1;

        return (
          <ImageListItem
            className="project-gallery-box"
            key={item.img}
            cols={cols}
            rows={rows}
          >
            <img
              src={`./assets/images/projects/${item.img}.png`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                fontWeight: 700,
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default ProjectGallery;

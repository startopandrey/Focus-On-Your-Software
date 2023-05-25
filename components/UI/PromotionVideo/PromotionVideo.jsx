import Image from "next/image";
import React from "react";
import ReactCurvedText from "react-curved-text";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
const PromotionVideo = () => {
  const [openVideo, setOpenVideo] = React.useState(false); 
   const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  return (
    <div className="promotion">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openVideo}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: matchesMedium ?  710 : 370,
              bgcolor: "background.paper",
              height: matchesMedium ?  400 : 210,
              boxShadow: 24,
              border: "none !important",
              pb: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.youtube.com/embed/Z7ISKeGIikU"
            ></iframe>
          </Box>
        </Fade>
      </Modal>
      <div className="promotion_container">
        {" "}
        <div
          className="promotion_video__play"
          onClick={() => setOpenVideo(true)}
        >
          <div className="promotion_video__play_circle">
            <ReactCurvedText
              width={matchesMedium ?  300 : 200}
              height={matchesMedium ?  300 : 200}
              cx={matchesMedium ?  150 : 100}
              cy={matchesMedium ?  150 : 100}
              rx={matchesMedium ?  100 : 70}
              ry={matchesMedium ?  100 : 70}
              startOffset={10}
              reversed={true}
              text="*Promotion Video*Promotion Video"
              textProps={{
                style: { fontSize: matchesMedium ?  24 : 15, color: "#fff", fill: "#fff" },
              }}
              textPathProps={null}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            />
          </div>
          <PlayArrowIcon className="promotion_video__play_icon"></PlayArrowIcon>
          {/* <h3>Promotion Video</h3> */}
        </div>
        <div className="promo_video_container">
          <Image
            style={{ objectFit: "cover" }}
            layout="fill"
            alt="promo_video"
            src="/promo_video.png"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default PromotionVideo;

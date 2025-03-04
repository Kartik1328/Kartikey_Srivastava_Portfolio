import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function About() {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <h1 className="my-16 text-center text-5xl sm:mt-12 lg:-mt-16 ">
        My
        <span className="text-neutral-500 text-5xl"> Journey</span>
      </h1>

      <div className="TIMELINE ">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "35px", px: 2 }}>
              <Typography variant="h6" component="span">
                10th{" "}
                <span className="text-neutral-500 text-lg"> (2016-2017)</span>
              </Typography>
              <Typography>Little Flower School Gorakhpur</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "35px", px: 2 }}>
              <Typography variant="h6" component="span">
                12th{" "}
                <span className="text-neutral-500 text-lg"> (2018-2019)</span>
              </Typography>
              <Typography>Little Flower School Gorakhpur</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "35px", px: 2 }}>
              <Typography variant="h6" component="span">
                B.Tech{" "}
                <span className="text-neutral-500 text-lg"> (2019-2023)</span>
              </Typography>
              <Typography>
                {" "}
                Bharati Vidyapeeth College Of Engineering Pune Maharashtra
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "35px", px: 2 }}>
              <Typography variant="h6" component="span">
                Junior Full Stack Java Developer{" "}
                <span className="text-neutral-500 text-lg">
                  {" "}
                  (2023-Present)
                </span>
              </Typography>
              <Typography>CMS Computers INDIA Pvt.Ltd</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default About;

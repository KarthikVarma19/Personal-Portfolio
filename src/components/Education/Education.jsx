import Button from "@mui/material/Button";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import styles from "./Education.module.css";

export default function Education() {
  const myEducationData = [
    {
      institutionName: "Anil Neerukonda Institute of Technology and Sciences",
      institutionShortName: "ANITS",
      institutionLogoUrl:
        "https://res.cloudinary.com/karthikvarma/image/upload/v1750181761/Peronal/antislogo.jpg",
      institutionWebsiteLink: "https://www.anits.edu.in",
      qualification: "B.Tech - Information Technology",
      result: "CGPA : 9.3",
    },
    {
      institutionName: "Government Polytechnic, Visakhapatnam",
      institutionLogoUrl:
        "https://res.cloudinary.com/karthikvarma/image/upload/v1750181756/Peronal/gptvlogo-removebg.png",
      institutionShortName: "GPTV",
      institutionWebsiteLink: "https://www.govtpolyvisakhapatnam.in/",
      qualification: "Diploma - Electrical & Electronics Engineering",
      result: "Percentage : 87.95%",
    },
    {
      institutionName: "Chaitanya Public School, Ukkunagaram",
      institutionShortName: "CPS",
      institutionLogoUrl:
        "https://res.cloudinary.com/karthikvarma/image/upload/v1750181756/Peronal/cpslogo-removebg.png",
      institutionWebsiteLink: "https://www.srishtiworldschool.in/",
      qualification: "10th Class - AP SSC",
      result: "CGPA : 9.3",
    },
  ];

  const QualificationItem = ({
    institutionName,
    institutionLogoUrl,
    institutionShortName,
    institutionWebsiteLink,
    qualification,
    result,
  }) => {
    return (
      <div style={{ overflow: "hidden" }}>
        <Button
          variant=""
          href={institutionWebsiteLink}
          target="_blank"
          style={{
            textTransform: "none",
            padding: 0,
            margin: 0,
            display: "block",
            width: "100%",
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <img
                src={institutionLogoUrl}
                alt={institutionShortName}
                style={{
                  cursor: "pointer",
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  objectFit: "fill",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <div
              style={{
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TimelineContent sx={{ py: "0px", px: 2 }}>
                <Typography
                  fontSize="14px"
                  variant="h6"
                  fontFamily="Poppins, sans-serif"
                  className={styles.instituteName}
                  style={{
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {institutionName}
                </Typography>
                <Typography
                  fontSize="13px"
                  fontFamily="Poppins, sans-serif"
                  style={{ marginBottom: "3px" }}
                >
                  {qualification}
                </Typography>
                <Typography fontSize="13px" fontFamily="Poppins, sans-serif">
                  {result}
                </Typography>
              </TimelineContent>
            </div>
          </TimelineItem>
        </Button>
      </div>
    );
  };

  return (
    <div
      className={styles.timeLine}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Timeline position="right">
        {myEducationData.map(
          ({
            institutionName,
            institutionLogoUrl,
            institutionShortName,
            institutionWebsiteLink,
            qualification,

            result,
          }) => (
            <QualificationItem
              institutionName={institutionName}
              institutionLogoUrl={institutionLogoUrl}
              institutionShortName={institutionShortName}
              institutionWebsiteLink={institutionWebsiteLink}
              qualification={qualification}
              result={result}
            />
          )
        )}
      </Timeline>
    </div>
  );
}

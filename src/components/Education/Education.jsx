import Button from "@mui/material/Button";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import styles from "./Education.module.css";
import PropTypes from "prop-types";
import { getMyEducationData } from "../../utils/portfolio.data";

export default function Education() {
  const myEducationData = getMyEducationData();
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
              key={institutionName + institutionShortName + qualification + result}
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

const QualificationItem = ({
    institutionName,
    institutionLogoUrl,
    institutionShortName,
    institutionWebsiteLink,
    qualification,
    result,
  }) => {
  return(
      <div style={{ overflow: "hidden" }}>
        <Button
          variant=""
          href={institutionWebsiteLink}
          target="_blank"
          rel="noopener noreferrer"
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
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  objectFit: "fill"
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <div
              style={{
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <TimelineContent sx={{ py: "0px", px: 2 }}>
                <Typography
                  fontSize="14px"
                  variant="h6"
                  fontFamily="Poppins, sans-serif"
                  className={styles.instituteName}
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  {institutionName}
                </Typography>
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    marginBottom: "3px",
                    opacity: 0.75,
                    fontSize: "0.8rem",
                  }}
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




QualificationItem.propTypes = {
  institutionName: PropTypes.string,
  institutionLogoUrl: PropTypes.string,
  institutionShortName: PropTypes.string,
  institutionWebsiteLink: PropTypes.string,
  qualification: PropTypes.string,
  result: PropTypes.string,
};
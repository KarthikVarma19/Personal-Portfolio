import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiRedux } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";

import Skill from "./Skill";

import styles from "./Skills.module.css";
import { useState } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const Skills = () => {
  const LinkedListPointer = () => {
    return (
      <>
        <span style={{ color: "gray" }}>{"---->"}</span>
      </>
    );
  };

  const LinkedListNode = ({ Icon, skillName }) => {
    return (
      <>
        <div className={styles.linkedlistnode}>
          <div className={styles.iconContainer}>
            <span className={styles.iconName}>
              {skillName ? skillName + " " : "  "}
            </span>
            {Icon && <Icon size="20px" />}
          </div>
        </div>
      </>
    );
  };
  const TreeNode = ({ Icon, skillName }) => {
    return (
      <>
        <div className={styles.treenode}>{skillName}</div>
        {/* <div className={styles.treenode}>{Icon && <Icon size="20px" />}</div> */}
        <div className={styles.treenodepointer}>
          {/* Left Slant */}
          <div className={styles.leftSlant}></div>
          {/* Right Slant */}
          <div className={styles.rightSlant}></div>
        </div>
      </>
    );
  };
  const LinkedListDataStructure = () => {};

  const ArrayDataStructure = () => {
    return <></>;
  };

  const ArrayBlock = ({ Icon, skillName }) => {
    return (
      <>
        <div className={styles.arraynode}>
          <div className={styles.iconContainer}>
            <span className={styles.iconName}>
              {skillName ? skillName : "" + "  "}
            </span>
            {Icon && <Icon size="20px" />}
          </div>
        </div>
      </>
    );
  };

  const SetDataStructure = ({ children }) => {
    return (
      <>
        <div className={`${styles.statusBadge} ${styles.glowBadge}`}>
          <div className={styles.badgeContainer}>{children}</div>
        </div>
      </>
    );
  };
  const [showIcons, setShowIcons] = useState(true); // State to toggle icon visibility

  return (
    <>
      <div className={styles.showTextIconToggleButtonContainer}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={showIcons}
                onChange={(e) => setShowIcons(e.target.checked)}
              />
            }
            label="Names"
          />
        </FormGroup>
      </div>
      <div className="skills-section">
        <div className="skills-categories">
          <div className={styles.skillsCategory}>
            <h6>Frontend</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <div className={styles.treenodehead}>
                  <TreeNode Icon={FaReact} skillName={"React"} size="20px" />
                </div>
                <div className={styles.treenodelevelone}>
                  <div className={styles.treenodelevelonenodeone}>
                    <TreeNode Icon={FaJs} size="20px" skillName={"JS"} />
                  </div>
                  <div className={styles.treenodelevelonenodetwo}>
                    <TreeNode
                      Icon={BiLogoTypescript}
                      size="20px"
                      skillName={"TS"}
                    />
                  </div>
                </div>
                <div className={styles.treenodeleveltwo}>
                  <div className={styles.treenodeleveltwonodeone}>
                    <TreeNode Icon={FaHtml5} size="20px" skillName={"HTML"} />
                  </div>
                  <div className={styles.treenodeleveltwonodetwo}>
                    <TreeNode Icon={FaCss3Alt} size="20px" skillName={"CSS"} />
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Backend</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <LinkedListNode Icon={FaJava} skillName={"Java"} />
                <LinkedListPointer />

                <LinkedListNode Icon={FaNodeJs} skillName={"NodeJs"} />
                <LinkedListPointer />
                <LinkedListNode Icon={SiExpress} skillName={"Express"} />
                <LinkedListPointer />
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Databases</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <ArrayBlock Icon={SiMysql} skillName={"MySQL"} />
                <ArrayBlock Icon={BiLogoPostgresql} skillName={"PostgreSQL"} />
                <ArrayBlock Icon={DiSqllite} skillName={"SQLite"} />
                <ArrayBlock Icon={DiMongodb} skillName={"Mongodb"} />
                <ArrayBlock Icon={BsThreeDots} skillName={""} />
                <ArrayBlock Icon={IoLogoFirebase} skillName={"Firebase"} />
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Other Tools</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <SetDataStructure>
                <div className={styles.setDataStructureContainer}>
                  <div className={styles.setItem}>
                    <VscVscode size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaGitAlt size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaGithub size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaDocker size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <SiPostman size="20px" />
                  </div>
                </div>
              </SetDataStructure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

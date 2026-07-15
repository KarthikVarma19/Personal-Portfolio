import {
  FaJs, FaReact, FaGitAlt, FaGithub, FaDocker, FaNodeJs,
  FaJava, FaPython, FaAngular, FaAws, FaLinux,
} from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  SiPostman, SiExpress, SiTailwindcss, SiRedis,
  SiSpringboot, SiJest, SiSonarqube,
} from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import styles from "./Skills.module.css";

const Skills = () => {
  const LinkedListPointer = () => {
    return (
      <span style={{ color: "gray" }}>
        {"---->"}
      </span>
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
  const TreeNode = ({ skillName }) => {
    return (
      <>
        <div className={styles.treenode}>{skillName}</div>
        <div className={styles.treenodepointer}>
          {/* Left Slant */}
          <div className={styles.leftSlant}></div>
          {/* Right Slant */}
          <div className={styles.rightSlant}></div>
        </div>
      </>
    );
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

  return (
    <>
      <div className="skills-section p-2">
        <div className="skills-categories">
          <div className={styles.skillsCategory}>
            <h6>Languages</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <ArrayBlock Icon={FaJava} skillName={"Java"} />
                <ArrayBlock Icon={FaPython} skillName={"Python"} />
                <ArrayBlock Icon={FaJs} skillName={"JavaScript"} />
                <ArrayBlock Icon={BiLogoTypescript} skillName={"TypeScript"} />
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Frontend</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <div className={styles.treenodehead}>
                  <TreeNode Icon={FaReact} skillName={"React"} size="20px" />
                </div>
                <div className={styles.treenodelevelone}>
                  <div className={styles.treenodelevelonenodeone}>
                    <TreeNode Icon={FaAngular} size="20px" skillName={"Angular"} />
                  </div>
                  <div className={styles.treenodelevelonenodetwo}>
                    <TreeNode
                      Icon={SiTailwindcss}
                      size="20px"
                      skillName={"Tailwind"}
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Backend</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <LinkedListNode Icon={FaNodeJs} skillName={"Node.js"} />
                <LinkedListPointer />
                <LinkedListNode Icon={SiExpress} skillName={"Express"} />
                <LinkedListPointer />
                <LinkedListNode Icon={SiSpringboot} skillName={"Spring Boot"} />
                <LinkedListPointer />
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Databases</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <ArrayBlock Icon={BiLogoPostgresql} skillName={"PostgreSQL"} />
                <ArrayBlock Icon={DiMongodb} skillName={"MongoDB"} />
                <ArrayBlock Icon={SiRedis} skillName={"Redis"} />
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>AI / GenAI</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <ul>
                <ArrayBlock skillName={"LangChain"} />
                <ArrayBlock skillName={"LangGraph"} />
                <ArrayBlock skillName={"ChromaDB"} />
                <ArrayBlock skillName={"RAG"} />
                <ArrayBlock skillName={"Groq"} />
                <ArrayBlock Icon={BsThreeDots} skillName={""} />
              </ul>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h6>Cloud & Tools</h6>
            <div className={styles.skillsCategoryTreeStructureContainer}>
              <SetDataStructure>
                <div className={styles.setDataStructureContainer}>
                  <div className={styles.setItem}>
                    <FaAws size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaDocker size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaGitAlt size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaGithub size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <FaLinux size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <SiJest size="20px" />
                  </div>
                  <div className={styles.setItem}>
                    <SiSonarqube size="20px" />
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

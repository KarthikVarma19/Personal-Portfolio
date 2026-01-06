import styles from "./CodingStats.module.css";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { getCodingStatsData } from "../../utils/portfolio.data";

const RandomJoke = () => {
  const jokes = [
    {
      category: "dsa",
      jokes: [
        "Why did the recursive function break up with the loop? Because it had too many unresolved issues.",
        "Why don’t backtracking algorithms party? Because they always regret their last move.",
        "What do you call a DSA student who doesn’t practice? A Time Complexity Nightmare.",
        "Why did the graph traversal get anxiety? Too many edges and no direction.",
        "Why are brute force solutions bad at relationships? They try every possibility before committing.",
      ],
    },
    {
      category: "consistency",
      jokes: [
        "Leetcode streaks are like gym streaks—miss one day, and suddenly you’re debugging life.",
        "Consistency beats talent. Unless the talent memorized all test cases.",
        "If sleep is O(1), why do I keep sleeping like it’s O(n²)?",
        "I told my mom I debugged all night. She said 'That's okay beta, at least you're fixing your life somewhere.'",
        "Consistency is key—but sometimes, I just keep consistently failing test case #7.",
      ],
    },
    {
      category: "coding",
      jokes: [
        "Push to GitHub before lunch. Pray during lunch.",
        "My code doesn’t have bugs. It just develops unexpected features.",
        "Why did the junior dev refuse to use ChatGPT? Because he thought async meant anti-social.",
        "I love TypeScript. It lets me make sure my bugs are correctly typed.",
        "Interviewers: 'What’s your favorite design pattern?' Me: 'Copy-paste.'",
      ],
    },
    {
      category: "debugging",
      jokes: [
        "Debugging is like being the detective in a crime movie where you are both the murderer and the victim.",
        "First I write code. Then I debug. Then I Google. Then I StackOverflow. Then I cry.",
        "My program ran successfully on the first try... just kidding, April Fools.",
        "Why are devs scared of production? Because production fights back.",
        "99 bugs in the code, fix one... 117 bugs in the code.",
      ],
    },
    {
      category: "recursion_and_dp",
      jokes: [
        "I told my friend I solved a DP problem. He asked, 'How?' I said, 'With pain, tears, and a table.'",
        "What’s a programmer’s favorite bedtime story? The tale of Memoization and its long-lost sibling Recursion.",
        "Solving a tree problem: Step 1: Cry. Step 2: Draw the tree. Step 3: Still confused? Back to Step 1.",
      ],
    },
    {
      category: "interview",
      jokes: [
        "Why don’t CS students have a social life? Because BFS is the only level they go out.",
        "How does an SDE aspirant measure happiness? In number of green ticks on LeetCode.",
      ],
    },
  ];
  const randomCategory = jokes[Math.floor(Math.random() * jokes.length)];
  const randomJoke =
    randomCategory.jokes[
      Math.floor(Math.random() * randomCategory.jokes.length)
    ];

  return (
    <div>
      <p>{randomJoke}</p>
    </div>
  );
};

const CodingStats = () => {
  const codingStatsData = getCodingStatsData();
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => setIsLoading(false), 3500);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <section className={`${styles.cardOuterContainer} m-3 p-2 page-enter overflow-y-auto-scrollbar`}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {isLoading ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <output className={`spinner-border ${styles.loadingSpinner}`}>
                <span className="visually-hidden">Loading...</span>
              </output>
              <RandomJoke />
            </div>
          ) : (
              <iframe
                title="Coding Stats"
                src={codingStatsData.codingStatsUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "10px",
                }}
                onLoad={() => {
                  handleLoad();
                }}
              ></iframe>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CodingStats;

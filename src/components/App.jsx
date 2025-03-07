import Profile from "./Profile/Profile.jsx";
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "../transactions.json";
import { useEffect, useState } from "react";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";

export default function App() {
  // const [clicks, setClicks] = useState(() => {
  //   const savedClicks = window.localStorage.getItem("saved-clicks");
  //   if (savedClicks !== null) {
  //     return Number(savedClicks);
  //   }
  //   return 0;
  // });
  // const [isOpen, setIsOpen] = useState(false);
  // const [first, setFirst] = useState(false);
  // const [second, setSecond] = useState(false);

  // useEffect(() => {
  //   console.log("First update: ", first);
  // }, [first]);

  // useEffect(() => {
  //   console.log("Second update: ", second);
  // }, [second]);

  // useEffect(() => {
  //   console.log("First or second update: ", first + second);
  // }, [first, second]);

  // useEffect(() => {
  //   window.localStorage.setItem("saved-clicks", clicks);
  // }, [clicks]);

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const positivePercentage = totalFeedback
    ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      {/* <Button onUpdate={handleClick} value={clicks} />
      <Button onUpdate={handleClick} value={clicks} /> */}
      {/* <button onClick={handleToggle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && <Modal />} */}
      {/* <button onClick={handleClick}>You clicked {clicks} times</button> */}
      {/* <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset
      </button> */}
      {/* <button
        onClick={() => {
          setFirst(first + 1);
        }}
      >
        First: {first}
      </button>
      <button
        onClick={() => {
          setSecond(second + 1);
        }}
      >
        Second: {second}
      </button> */}
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        ></Options>
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

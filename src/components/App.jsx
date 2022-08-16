import React from "react";
import { useState} from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import styled from "styled-components";


const App = () => {
   const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const clickBtn = event => {
   const { id } = event.currentTarget;
    setState(prevState => ({...prevState, [id]: state[id] + 1}))
    };


  const options = Object.keys(state)
    const countTotalFeedback = state.good + state.neutral + state.bad;
    const countPositiveFeedbackPercentage = Math.ceil(state.good / countTotalFeedback * 100)
    return (
      <Container>
        <Section title="Please leave feedback 🙏">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={clickBtn}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification
              message="There is no feedback 🤷‍♀️"
            />) :
            (
            <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
            />)}
        </Section>
      </Container>
    )
            }
export default App;

const Container = styled.div`
  border-radius: 2px;
  box-sizing: border-box;
  padding: 15px;
  border: none;
  margin: 50px auto;
  width: 50%;
  background-color: #edc1ed;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;;
`;
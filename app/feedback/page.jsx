"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFeedback, removeFeedback } from "../redux/feedbackSlice";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const feed = useSelector((state) => state.feedback.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (feedback.trim() !== "") {
      dispatch(addFeedback(feedback));
      setFeedback("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Feedback Form</h1>
      <input
        type="text"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter Your Feedback"
      />
      <button onClick={handleAdd}>Add Feedback</button>

      <h2>Feedbacks ({feed.length})</h2>
      <ul>
        {feed.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(removeFeedback(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

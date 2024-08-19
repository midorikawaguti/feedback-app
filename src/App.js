import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';
import AboutPage from "./pages/AboutPage";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [reverse, setReverse] = useState(false);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const changeColors = () => {
        setReverse((prev) => !prev);
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <Router>
            <Header handleReverse={changeColors} />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <FeedbackForm reverse={reverse} handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                    reverse={reverse}
                                />
                            </>
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

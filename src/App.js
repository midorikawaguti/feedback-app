import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    const [reverse, setReverse] = useState(false);

    const changeColors = () => {
        setReverse((prev) => !prev);
    };

  

    return (
        <FeedbackProvider>
        <Router>
            <Header handleReverse={changeColors} />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <FeedbackForm reverse={reverse} />
                                <FeedbackStats />
                                <FeedbackList
                                    reverse={reverse}
                                />
                            </>
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
        </FeedbackProvider>
    );
}

export default App;

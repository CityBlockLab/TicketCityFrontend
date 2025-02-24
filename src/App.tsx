import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExploreEvents from "./Pages /EventsExpore";
import EventDetails from "./Pages /EventDetails";
import CreateEventForm from "./Pages /CreateEventsForm";
import EventPreview from "./Pages /EventsPreview";
import PublishedEvents from "./Pages /PublishedEvents";
import "./App.css";
import { usePrivy } from "@privy-io/react-auth";

const App: React.FC = () => {
  const { ready } = usePrivy();

  if (!ready) return <h2>Wallet getting ready...</h2>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExploreEvents />} />
        <Route path="/explore" element={<ExploreEvents />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<CreateEventForm />} />
        <Route path="/event-preview" element={<EventPreview />} />
        <Route path="/published-events" element={<PublishedEvents />} />
      </Routes>
    </Router>
  );
};

export default App;

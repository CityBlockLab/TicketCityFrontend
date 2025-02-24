import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface EventFormData {
  title: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  description: string;
  capacity: number;
  image: File | null;
  eventType: "FREE" | "PAID";
}

interface Ticket {
  type: "REGULAR" | "VIP";
  price?: number;
}

const EventPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventData = location.state as EventFormData | null;

  const [tickets, setTickets] = useState<Ticket[]>([]);

  if (!eventData) {
    return <p className="text-white text-center">No event data available.</p>;
  }

  const handleAddTicket = () => {
    setTickets([
      ...tickets,
      {
        type: "REGULAR",
        price: eventData.eventType === "PAID" ? 0 : undefined,
      },
    ]);
  };

  const handleTicketChange = (index: number, field: string, value: any) => {
    const updatedTickets = [...tickets];
    if (field === "price") {
      updatedTickets[index].price = value ? Number(value) : 0;
    } else {
      updatedTickets[index].type = value;
    }
    setTickets(updatedTickets);
  };

  const handleEditEvent = () => {
    navigate("/create-event", { state: eventData });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-[80%] mx-auto border border-[#3A3A3A] rounded-lg shadow-[1px_1px_10px_0px_#FFFFFF40] p-8">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          Event Preview
        </h1>

        {/* Event Details */}
        <div className="border border-borderStroke p-6 rounded-lg bg-searchBg">
          {eventData.image && (
            <img
              src={URL.createObjectURL(eventData.image)}
              alt="Event"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <h2 className="text-white text-xl font-semibold">
            {eventData.title}
          </h2>
          <p className="text-white">
            <strong>Date:</strong>{" "}
            {new Date(eventData.startDateTime).toDateString()} -{" "}
            {new Date(eventData.endDateTime).toDateString()}
          </p>
          <p className="text-white">
            <strong>Time:</strong>{" "}
            {new Date(eventData.startDateTime).toLocaleTimeString()} -{" "}
            {new Date(eventData.endDateTime).toLocaleTimeString()}
          </p>
          <p className="text-white">
            <strong>Location:</strong> {eventData.location}
          </p>
          <p className="text-white">
            <strong>Attendees Capacity:</strong> {eventData.capacity}
          </p>
          <p className="text-white">
            <strong>Type:</strong> {eventData.eventType}
          </p>
        </div>

        {/* Ticket Creation Section */}
        <div className="mt-8 border border-borderStroke p-6 rounded-lg bg-searchBg">
          <h2 className="text-white text-xl font-semibold mb-4">
            Create Ticket
          </h2>

          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-borderStroke rounded-lg">
              <label className="block text-white mb-2">Ticket Type</label>
              <select
                value={ticket.type}
                onChange={(e) =>
                  handleTicketChange(index, "type", e.target.value)
                }
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white">
                {eventData.eventType === "PAID" ? (
                  <>
                    <option value="REGULAR">REGULAR</option>
                    <option value="VIP">VIP</option>
                  </>
                ) : (
                  <option value="FREE">FREE</option>
                )}
              </select>

              {/* Show price input only for PAID event */}
              {eventData.eventType === "PAID" && (
                <div className="mt-4">
                  <label className="block text-white mb-2">
                    Ticket Price ($)
                  </label>
                  <input
                    type="number"
                    value={ticket.price || ""}
                    onChange={(e) =>
                      handleTicketChange(index, "price", e.target.value)
                    }
                    className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                    min="0"
                    placeholder="Enter ticket price"
                    required
                  />
                </div>
              )}
            </div>
          ))}

          <button
            onClick={handleAddTicket}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity mt-4">
            Add Ticket
          </button>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleEditEvent}
            className="bg-searchBg text-white py-3 px-6 rounded-lg font-semibold hover:opacity-80">
            Edit Event
          </button>
          <button className="bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-80">
            Publish Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPreview;

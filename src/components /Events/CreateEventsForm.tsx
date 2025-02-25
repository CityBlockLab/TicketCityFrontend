import { useState } from 'react';

interface CreateEventFormProps {
  onContinue: (formData: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    capacity: string;
    image: File | null;
    blockchain: string;
    smartContract: string;
  }) => void;
}

const CreateEventFormComponent = ({ onContinue }: CreateEventFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    capacity: '',
    image: null,
    blockchain: 'Ethereum',
    smartContract: ''
  });

  const handleChange = (e : any) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      setFormData(prev => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    onContinue(formData);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-[80%] mx-auto border border-[#3A3A3A] rounded-lg shadow-[1px_1px_10px_0px_#FFFFFF40] p-8">
        <h1 className="text-white text-2xl font-bold mb-8 text-center">Create New Event</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Event Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white min-h-[100px]"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Event Banner Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Blockchain</label>
                <select
                  name="blockchain"
                  value={formData.blockchain}
                  onChange={handleChange}
                  className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                >
                  <option value="Ethereum">Ethereum</option>
                  <option value="Polygon">Polygon</option>
                  <option value="Solana">Solana</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Smart Contract</label>
                <input
                  type="text"
                  name="smartContract"
                  value={formData.smartContract}
                  onChange={handleChange}
                  className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                  placeholder="0x..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Capacity</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventFormComponent;
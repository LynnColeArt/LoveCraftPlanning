import { useState } from 'react';
import { Plus, Trash2, Play, Save, Settings, MessageSquare, FileText } from 'lucide-react';

export default function ProjectInterface() {
  const [instruments, setInstruments] = useState([
    { id: 1, type: 'guitar', tuning: 'standard', style: 'fingerpicking' }
  ]);
  
  const [midiSettings, setMidiSettings] = useState({
    tempo: 120,
    timeSignatureTop: 4,
    timeSignatureBottom: 4,
    complexity: 5,
    humanization: 0.5
  });

  const [renderSettings, setRenderSettings] = useState({
    style: 'ambient',
    quality: 'high',
    mix: 'balanced'
  });

  const [chatMessages, setChatMessages] = useState([
    { role: 'system', content: 'New project started. How would you like to approach this song?' },
    { role: 'user', content: 'I want to create a dreamy pop song with ambient elements' }
  ]);

  return (
    <div className="h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Dream Pop Project</h2>
        <div className="space-y-2">
          <button className="w-full bg-blue-600 p-2 rounded flex items-center gap-2">
            <MessageSquare size={18} />
            Chat
          </button>
          <button className="w-full bg-gray-700 p-2 rounded flex items-center gap-2">
            <Settings size={18} />
            Settings
          </button>
          <button className="w-full bg-gray-700 p-2 rounded flex items-center gap-2">
            <FileText size={18} />
            Assets
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Chat Area */}
        <div className="flex-1 p-4 overflow-auto">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
              <div className={`inline-block p-3 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Settings Panel */}
        <div className="bg-gray-800 p-4">
          {/* Instruments */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-bold">Instruments</h3>
            {instruments.map((inst, i) => (
              <div key={inst.id} className="bg-gray-700 p-4 rounded">
                <div className="flex justify-between mb-2">
                  <h4>Instrument {i + 1}</h4>
                  <button onClick={() => setInstruments(instruments.filter(i => i.id !== inst.id))}>
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <select className="bg-gray-600 p-2 rounded">
                    <option>Guitar</option>
                    <option>Bass</option>
                    <option>Piano</option>
                    <option>Drums</option>
                  </select>
                  <select className="bg-gray-600 p-2 rounded">
                    <option>Standard</option>
                    <option>Drop D</option>
                    <option>Open G</option>
                  </select>
                  <select className="bg-gray-600 p-2 rounded">
                    <option>Fingerpicking</option>
                    <option>Strumming</option>
                    <option>Lead</option>
                  </select>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setInstruments([...instruments, { 
                id: Date.now(), 
                type: 'guitar', 
                tuning: 'standard', 
                style: 'fingerpicking' 
              }])}
              className="w-full bg-blue-600 p-2 rounded flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              Add Instrument
            </button>
          </div>

          {/* MIDI Settings */}
          <div className="bg-gray-700 p-4 rounded mb-4">
            <h3 className="text-lg font-bold mb-4">MIDI Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Tempo</label>
                <input 
                  type="number" 
                  value={midiSettings.tempo}
                  onChange={(e) => setMidiSettings({...midiSettings, tempo: parseInt(e.target.value)})}
                  className="w-full bg-gray-600 p-2 rounded"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time Signature</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number"
                    value={midiSettings.timeSignatureTop}
                    onChange={(e) => setMidiSettings({
                      ...midiSettings, 
                      timeSignatureTop: parseInt(e.target.value)
                    })}
                    className="w-16 bg-gray-600 p-2 rounded text-center"
                    min="1"
                  />
                  <span className="text-xl font-bold">/</span>
                  <input 
                    type="number"
                    value={midiSettings.timeSignatureBottom}
                    onChange={(e) => setMidiSettings({
                      ...midiSettings, 
                      timeSignatureBottom: parseInt(e.target.value)
                    })}
                    className="w-16 bg-gray-600 p-2 rounded text-center"
                    min="1"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Complexity</label>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={midiSettings.complexity}
                  onChange={(e) => setMidiSettings({
                    ...midiSettings, 
                    complexity: parseInt(e.target.value)
                  })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Humanization</label>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.1"
                  value={midiSettings.humanization}
                  onChange={(e) => setMidiSettings({
                    ...midiSettings, 
                    humanization: parseFloat(e.target.value)
                  })}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Render Settings */}
          <div className="bg-gray-700 p-4 rounded mb-4">
            <h3 className="text-lg font-bold mb-4">Render Settings</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Style</label>
                <select 
                  className="w-full bg-gray-600 p-2 rounded"
                  value={renderSettings.style}
                  onChange={(e) => setRenderSettings({...renderSettings, style: e.target.value})}
                >
                  <option>Ambient</option>
                  <option>Rock</option>
                  <option>Electronic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Quality</label>
                <select 
                  className="w-full bg-gray-600 p-2 rounded"
                  value={renderSettings.quality}
                  onChange={(e) => setRenderSettings({...renderSettings, quality: e.target.value})}
                >
                  <option>Draft</option>
                  <option>High</option>
                  <option>Ultra</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Mix Balance</label>
                <select 
                  className="w-full bg-gray-600 p-2 rounded"
                  value={renderSettings.mix}
                  onChange={(e) => setRenderSettings({...renderSettings, mix: e.target.value})}
                >
                  <option>Balanced</option>
                  <option>Instrument Focus</option>
                  <option>Ambient Focus</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 bg-green-600 p-2 rounded flex items-center justify-center gap-2">
              <Play size={18} />
              Generate
            </button>
            <button className="flex-1 bg-blue-600 p-2 rounded flex items-center justify-center gap-2">
              <Save size={18} />
              Save Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

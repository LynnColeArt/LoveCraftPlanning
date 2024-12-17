import React, { useState } from 'react';
import { MessageSquare, Plus, Check, X, Edit2, Wand2 } from 'lucide-react';

export default function MusicInterface() {
  const [chatMode, setChatMode] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Let's do something impossible. What kind of musical reality should we break today?" },
    { role: 'user', content: "I want to make medieval gregorian death metal with a 30-finger guitarist and a choir that can sing in five dimensions" }
  ]);
  
  const [suggestions, setSuggestions] = useState([
    { type: 'instrument', value: 'Quantum Guitar', status: 'suggested', notes: '30-finger impossible leads, dimensional harmonics' },
    { type: 'instrument', value: 'Hyperspatial Choir', status: 'accepted', notes: '5D vocal harmonies beyond human perception' },
    { type: 'mood', value: 'Sacred Chaos', status: 'suggested', notes: 'simultaneously devotional and destructive' },
    { type: 'style', value: 'Gregorian Death Fusion', status: 'suggested', notes: 'temporal-bending medieval blast beats' }
  ]);

  return (
    <div className="h-screen bg-black text-white flex">
      {/* Chat Area */}
      {chatMode && (
        <div className="w-1/2 border-r border-gray-600/20 flex flex-col">
          <div className="flex-1 p-4 overflow-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-lg ${
                  msg.role === 'user' ? 'bg-gray-700' : 'bg-gray-900'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-600/20">
            <input 
              type="text" 
              placeholder="Describe your impossible music..."
              className="w-full bg-gray-900 p-3 rounded"
            />
          </div>
        </div>
      )}

      {/* Working Area */}
      <div className={`flex-1 flex flex-col ${!chatMode && 'w-full'}`}>
        <div className="p-4 border-b border-gray-600/20 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-300">Project Elements</h2>
          <div className="flex gap-2">
            <button className="bg-pink-500 hover:bg-pink-600 p-4 rounded-lg text-white font-bold flex items-center justify-center gap-2 transition-colors">
              <Wand2 size={20} />
              Make It So!
            </button>
            <button 
              onClick={() => setChatMode(!chatMode)}
              className="bg-gray-900 p-2 rounded"
            >
              <MessageSquare size={20} className="text-gray-300" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-auto">
          {suggestions.map((item, i) => (
            <div key={i} className="mb-4 bg-gray-900 p-4 rounded flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">{item.type}</div>
                <div className="font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-500">{item.notes}</div>
              </div>
              <div className="flex gap-2">
                {item.status === 'suggested' ? (
                  <>
                    <button className="p-2 bg-green-600/30 hover:bg-green-600/50 rounded text-green-400">
                      <Check size={16} />
                    </button>
                    <button className="p-2 bg-red-600/30 hover:bg-red-600/50 rounded text-red-400">
                      <X size={16} />
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded text-gray-300">
                      <Edit2 size={16} />
                    </button>
                  </>
                ) : (
                  <div className="text-green-400">Accepted</div>
                )}
              </div>
            </div>
          ))}

          <button className="w-full bg-gray-900 hover:bg-gray-800 p-4 rounded flex items-center justify-center gap-2 text-gray-300">
            <Plus size={16} />
            Add Element
          </button>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DecisionNodeData, DecisionOption } from '../types';
import { SvgChevronRight, SvgInformationCircle, SvgQuestionMarkCircle, SvgClipboardDocumentCheck, SvgExclamationTriangle } from './Icons';

interface DecisionCardProps {
  node: DecisionNodeData;
}

const getNodeIcon = (nodeType?: 'step' | 'question' | 'info' | 'diagnosis') => {
  switch (nodeType) {
    case 'step': return <SvgClipboardDocumentCheck className="h-6 w-6 mr-2" />;
    case 'question': return <SvgQuestionMarkCircle className="h-6 w-6 mr-2" />;
    case 'info': return <SvgInformationCircle className="h-6 w-6 mr-2" />;
    case 'diagnosis': return <SvgExclamationTriangle className="h-6 w-6 mr-2 text-amber-400" />;
    default: return <SvgInformationCircle className="h-6 w-6 mr-2" />;
  }
};

const getTitleColor = (colorScheme?: 'green' | 'blue' | 'brown') => {
  switch (colorScheme) {
    case 'green': return 'text-emerald-300';
    case 'blue': return 'text-sky-300';
    case 'brown': return 'text-amber-300';
    default: return 'text-sky-300';
  }
};

const getBorderColor = (colorScheme?: 'green' | 'blue' | 'brown') => {
  switch (colorScheme) {
    case 'green': return 'border-emerald-500';
    case 'blue': return 'border-sky-500';
    case 'brown': return 'border-amber-500';
    default: return 'border-sky-500';
  }
};


const DecisionCard: React.FC<DecisionCardProps> = ({ node }) => {
  const navigate = useNavigate();

  const handleOptionClick = (option: DecisionOption) => {
    navigate(`/decision/${option.nextNodeId}`);
  };

  const titleColor = getTitleColor(node.colorScheme);
  const borderColor = getBorderColor(node.colorScheme);

  return (
    <div className={`bg-slate-800/70 backdrop-blur-md shadow-xl rounded-lg p-6 border-l-4 ${borderColor} transition-all duration-300 hover:shadow-2xl`}>
      <div className="flex items-center mb-4">
        {getNodeIcon(node.nodeType)}
        <h2 className={`text-2xl font-semibold ${titleColor}`}>{node.title}</h2>
      </div>
      
      {node.ginaReference && (
        <p className="text-xs text-slate-400 mb-1">Référence GINA: {node.ginaReference}</p>
      )}
      {node.detailsPage && (
        <p className="text-xs text-slate-400 mb-4">Détails: {node.detailsPage}</p>
      )}

      <div className="text-slate-300 space-y-3 mb-6 prose prose-sm prose-invert max-w-none">
        {typeof node.description === 'string' ? <p>{node.description}</p> : node.description}
      </div>

      {node.isTerminal && node.terminalMessage && (
        <div className="mt-4 p-3 bg-sky-700/30 rounded-md text-sky-200">
          <p>{node.terminalMessage}</p>
        </div>
      )}

      {!node.isTerminal && node.options.length > 0 && (
        <div className="mt-6 space-y-3">
          {node.options.map((option) => (
            <button
              key={option.nextNodeId}
              onClick={() => handleOptionClick(option)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-left font-medium transition-all duration-200 ease-in-out
                ${option.color === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white' : 
                  option.color === 'secondary' ? 'bg-slate-600 hover:bg-slate-700 text-slate-100' :
                  'bg-sky-600 hover:bg-sky-700 text-white'}
                 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500`}
            >
              <span>{option.text}</span>
              <SvgChevronRight className="h-5 w-5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DecisionCard;

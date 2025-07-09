
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DecisionNodeData, NodeID } from '../types';
import DecisionCard from '../components/DecisionCard';

interface DecisionTreeNavigatorProps {
  treeData: Record<NodeID, DecisionNodeData>;
}

const DecisionTreeNavigator: React.FC<DecisionTreeNavigatorProps> = ({ treeData }) => {
  const { nodeId } = useParams<{ nodeId: NodeID }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when node changes
    window.scrollTo(0, 0);
  }, [nodeId]);

  const currentNode = nodeId ? treeData[nodeId] : treeData['start'];

  if (!currentNode) {
    return (
      <div className="text-center p-8 bg-red-800/50 rounded-lg">
        <h2 className="text-2xl font-bold text-red-300 mb-4">Error: Node not found</h2>
        <p className="text-red-200">The requested decision node ({nodeId}) does not exist.</p>
        <button 
          onClick={() => navigate('/decision/start')}
          className="mt-6 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md shadow-md transition-colors"
        >
          Return to start
        </button>
      </div>
    );
  }

  return <DecisionCard node={currentNode} />;
};

export default DecisionTreeNavigator;

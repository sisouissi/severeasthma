import React from 'react';

export interface DecisionOption {
  text: string;
  nextNodeId: string;
  color?: 'primary' | 'secondary' | 'danger';
}

export type NodeID = 
  'start' | 
  'confirmDiagnosis' | 
  'lookForFactors' | 
  'optimizeManagement' | 
  'reviewResponse' |
  'isAsthmaUncontrolled' |
  'uncontrolledReferSpecialist' |
  'controlledStepDown' |
  'becomesUncontrolledOnStepDown' |
  'stillControlledOptimize' |
  'investigateFurther' | 
  'assessPhenotype' |
  'type2InflammationYesPathway' |
  'type2BiologicAvailableQuery' |
  'type2BiologicNotAvailableActions' |
  'type2InflammationNoPathway' |
  'considerBiologicsEntry' |
  'antiIgEInfo' |
  'antiIL5_IL5RInfo' |
  'antiIL4RaInfo' |
  'antiTSLPInfo' |
  'initiateBiologicTrial' |
  'evaluateBiologicResponse' |
  'biologicGoodResponseActions' |
  'biologicUnclearResponseActions' |
  'biologicNoResponseActions' |
  'switchToDifferentBiologic' |
  'returnToNonBiologicOptions' |
  'monitorAndManageSevereAsthma' |
  'endDifficultToTreatManagement' |
  'ginaDefinitions';


export interface DecisionNodeData {
  id: NodeID;
  title: string;
  description: React.ReactNode;
  options: DecisionOption[];
  ginaReference?: string;
  detailsPage?: string; 
  nodeType?: 'step' | 'question' | 'info' | 'diagnosis';
  colorScheme?: 'green' | 'blue' | 'brown'; // For GINA section color coding
  isTerminal?: boolean;
  terminalMessage?: string;
}

export interface Abbreviation {
  term: string;
  definition: string;
}

export interface MedicationCategory {
  name: string;
  medications: Medication[];
  description?: string;
}

export interface Medication {
  name: string;
  delivery?: string;
  useInAsthma?: string;
  adverseEffects?: string;
}

export interface MenuItem {
  label: string;
  path: string;
  // FIX: Changed icon type to React.FC<React.SVGProps<SVGSVGElement>> for precise matching with icon components
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
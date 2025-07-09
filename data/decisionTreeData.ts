
import React from 'react';
import { DecisionNodeData, NodeID } from '../types';

// FIX: All JSX in description fields converted to React.createElement calls to avoid parsing errors in a .ts file.
export const decisionTreeData: Record<NodeID, DecisionNodeData> = {
  start: {
    id: 'start',
    title: 'Start of the Decision Tree (Difficult-to-Treat Asthma)',
    colorScheme: 'green',
    nodeType: 'step',
    ginaReference: "Figure 2, GINA p.11",
    detailsPage: "p.15",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "This pathway is for adolescents and adults with symptoms and/or exacerbations despite medium or high dose ICS-LABA therapy, or taking maintenance oral corticosteroids (OCS)."),
      React.createElement("p", { className: "mb-2 text-sm text-amber-300" },
        React.createElement("em", null, "Consider referring to a specialist or severe asthma clinic at any stage.")
      ),
      React.createElement("p", null,
        React.createElement("strong", null, "Initial step: Investigate and manage difficult-to-treat asthma.")
      )
    ),
    options: [
      { text: 'Step 1: Confirm the diagnosis', nextNodeId: 'confirmDiagnosis' },
    ],
  },
  confirmDiagnosis: {
    id: 'confirmDiagnosis',
    title: '1. Confirm the Diagnosis (Asthma / Differential Diagnoses)',
    colorScheme: 'green',
    nodeType: 'step',
    ginaReference: "GINA p.15",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "Confirmation of the diagnosis is crucial. Between 12% and 50% of people assumed to have severe asthma do not have the correct diagnosis."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Key actions:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Perform a careful history and physical examination."),
        React.createElement("li", null, "Perform spirometry before and after bronchodilator."),
        React.createElement("li", null, "Seek objective evidence of variable expiratory airflow limitation."),
        React.createElement("li", null, "Consider bronchial provocation testing if spirometry is normal but suspicion of asthma persists."),
        React.createElement("li", null, "Evaluate the full flow-volume curve for upper airway obstruction.")
      ),
      React.createElement("p", { className: "mt-3 text-sm text-amber-300" },
        React.createElement("em", null, "Reference: GINA 2024 Strategy Report Box 1-2, 1-3, 1-4.")
      )
    ),
    options: [
      { text: 'Next: Look for contributing factors', nextNodeId: 'lookForFactors' },
    ],
  },
  lookForFactors: {
    id: 'lookForFactors',
    title: '2. Look for Contributory Factors',
    colorScheme: 'green',
    nodeType: 'step',
    ginaReference: "GINA p.16",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "Identify factors contributing to symptoms, exacerbations, and poor quality of life."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Important modifiable factors:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Incorrect inhaler technique (up to 80% of patients)."),
        React.createElement("li", null, "Suboptimal adherence (up to 75% of patients)."),
        React.createElement("li", null, "Comorbidities: obesity, GERD, chronic rhinosinusitis, OSA, anxiety, depression."),
        React.createElement("li", null, "Modifiable risk factors and triggers (smoking, environmental/occupational exposures, allergens)."),
        React.createElement("li", null, "Overuse of SABA."),
        React.createElement("li", null, "Medication side-effects.")
      )
    ),
    options: [
      { text: 'Next: Optimize management', nextNodeId: 'optimizeManagement' },
    ],
  },
  optimizeManagement: {
    id: 'optimizeManagement',
    title: '3. Optimize Management',
    colorScheme: 'green',
    nodeType: 'step',
    ginaReference: "GINA p.16",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "Review and optimize treatment for asthma, and for comorbidities and risk factors identified in Stage 2."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Key actions:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Asthma self-management education and personalized written action plan."),
        React.createElement("li", null, "Check and correct inhaler technique and adherence."),
        React.createElement("li", null, "Switch to ICS-formoterol maintenance and reliever therapy (MART) if available."),
        React.createElement("li", null, "Non-pharmacological interventions (smoking cessation, exercise, weight loss, vaccination)."),
        React.createElement("li", null, "Treat comorbidities and modifiable risk factors."),
        React.createElement("li", null, "Consider non-biologic add-on therapy (e.g. LAMA, LTRA) if not used."),
        React.createElement("li", null, "Consider a trial of high-dose ICS-LABA if not used.")
      )
    ),
    options: [
      { text: 'Next: Review response after 3-6 months', nextNodeId: 'reviewResponse' },
    ],
  },
  reviewResponse: {
    id: 'reviewResponse',
    title: '4. Review Response after ~3-6 months',
    colorScheme: 'green',
    nodeType: 'step',
    ginaReference: "GINA p.17",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "Assess the response to the above interventions."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Specific points to review:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Symptom control (frequency, SABA reliever use, night waking, activity limitation)."),
        React.createElement("li", null, "Exacerbations since last visit and their management."),
        React.createElement("li", null, "Medication side-effects."),
        React.createElement("li", null, "Inhaler technique and adherence."),
        React.createElement("li", null, "Lung function."),
        React.createElement("li", null, "Patient satisfaction and concerns.")
      )
    ),
    options: [
      { text: 'Is asthma still uncontrolled?', nextNodeId: 'isAsthmaUncontrolled' },
    ],
  },
  isAsthmaUncontrolled: {
    id: 'isAsthmaUncontrolled',
    title: 'Question: Is asthma still uncontrolled despite optimized therapy?',
    colorScheme: 'green',
    nodeType: 'question',
    ginaReference: "GINA p.17 (Figure 2)",
    description: React.createElement("p", null, "After 3-6 months of optimizing management, assess if the patient's asthma remains uncontrolled."),
    options: [
      { text: 'Yes, asthma is uncontrolled', nextNodeId: 'uncontrolledReferSpecialist', color: 'danger' },
      { text: 'No, asthma is now well-controlled', nextNodeId: 'controlledStepDown', color: 'primary' },
    ],
  },
  uncontrolledReferSpecialist: {
    id: 'uncontrolledReferSpecialist',
    title: 'Diagnosis: "Severe Asthma"',
    colorScheme: 'green',
    nodeType: 'diagnosis',
    ginaReference: "GINA p.17 (Figure 2)",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "If asthma remains uncontrolled, the diagnosis of severe asthma is confirmed."),
      React.createElement("p", { className: "font-semibold text-amber-300" }, "Action: Refer to a specialist or severe asthma clinic, if not already done."),
      React.createElement("p", { className: "mt-2" }, "The next phase will involve more in-depth investigation and targeted treatments for severe asthma.")
    ),
    options: [
      { text: 'Continue to severe asthma assessment (Specialist)', nextNodeId: 'investigateFurther' },
    ],
  },
  controlledStepDown: {
    id: 'controlledStepDown',
    title: 'Action: Consider stepping down treatment',
    colorScheme: 'green',
    nodeType: 'step',
    ginaReference: "GINA p.17 (Figure 2)",
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "If asthma is now well-controlled, consider stepping down treatment."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Order of step-down:"),
      React.createElement("ol", { className: "list-decimal list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Decrease/cease OCS first (if used), checking for adrenal insufficiency."),
        React.createElement("li", null, "Remove other add-on therapies."),
        React.createElement("li", null, "Decrease ICS dose. DO NOT stop ICS completely.")
      ),
      React.createElement("p", { className: "mt-2" }, "See GINA 2024 Strategy Report Box 4-13 for guidance on down-titration.")
    ),
    options: [
      { text: 'Does asthma become uncontrolled on step-down?', nextNodeId: 'becomesUncontrolledOnStepDown' },
    ],
  },
  becomesUncontrolledOnStepDown: {
    id: 'becomesUncontrolledOnStepDown',
    title: 'Question: Does asthma become uncontrolled when treatment is stepped down?',
    colorScheme: 'green',
    nodeType: 'question',
    ginaReference: "GINA p.17 (Figure 2)",
    description: React.createElement("p", null, "If asthma symptoms become uncontrolled or an exacerbation occurs when high-dose treatment is stepped down."),
    options: [
      { text: 'Yes, asthma becomes uncontrolled again', nextNodeId: 'uncontrolledReferSpecialist', color: 'danger' }, // Leads to "Severe Asthma" diagnosis
      { text: 'No, asthma remains controlled', nextNodeId: 'stillControlledOptimize', color: 'primary' },
    ],
  },
  stillControlledOptimize: {
    id: 'stillControlledOptimize',
    title: 'Management: Continue Optimization',
    colorScheme: 'green',
    nodeType: 'info',
    ginaReference: "GINA p.17 (Figure 2)",
    description: React.createElement("p", null, "If symptoms and exacerbations remain well-controlled despite treatment being stepped down, the patient does not have severe asthma. Continue optimizing management."),
    options: [
       { text: 'Return to start of pathway', nextNodeId: 'start' },
    ],
    isTerminal: true,
    terminalMessage: 'The patient does not meet the criteria for severe asthma at this stage. Continue monitoring and treatment optimization.'
  },
  investigateFurther: { // Step 5 (GINA Fig 3)
    id: 'investigateFurther',
    title: '5. Investigate Further and Provide Patient Support (Specialist)',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.18 (Figure 3)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "Continue to optimize management as in section 3 (including inhaler technique, adherence, comorbidities, non-pharmacologic strategies)."),
      React.createElement("strong", { className: "block mt-3 mb-1 text-sky-200" }, "Further investigations by specialist:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-2" },
        React.createElement("li", null, "Blood tests: CBC, CRP, IgG, IgA, IgM, IgE, fungal precipitins (Aspergillus)."),
        React.createElement("li", null, "Allergy testing (skin prick or specific IgE) if not already done."),
        React.createElement("li", null, "Imaging: Chest X-ray and/or high-resolution chest CT."),
        React.createElement("li", null, "Lung function: DLCO."),
        React.createElement("li", null, "Bone density scan (risk of osteoporosis with OCS/high-dose ICS)."),
        React.createElement("li", null, "Screen for adrenal insufficiency (patients on OCS or high-dose ICS)."),
        React.createElement("li", null, "If blood eosinophils ≥300/µL: look for non-asthma causes (parasites - e.g. Strongyloides serology)."),
        React.createElement("li", null, "If hypereosinophilia (e.g. ≥1500/µL): consider causes such as EGPA."),
        React.createElement("li", null, "Other directed testing based on clinical suspicion (e.g. ANCA, CT sinuses, BNP, echocardiogram).")
      ),
      React.createElement("strong", { className: "block mt-3 mb-1 text-sky-200" }, "Patient support:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Consider need for social/psychological support."),
        React.createElement("li", null, "Involve multidisciplinary team care if available."),
        React.createElement("li", null, "Invite patient to enroll in registry or clinical trial if appropriate.")
      )
    ),
    options: [
      { text: 'Next: Assess the severe asthma phenotype', nextNodeId: 'assessPhenotype' },
    ],
  },
  assessPhenotype: { // Step 6 (GINA Fig 3)
    id: 'assessPhenotype',
    title: '6. Assess the Severe Asthma Phenotype',
    colorScheme: 'blue',
    nodeType: 'question',
    ginaReference: 'GINA p.19 (Figure 3)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "The next step is to assess the patient's inflammatory phenotype – is it Type 2 high or low?"),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Could the patient have refractory Type 2 airway inflammation?"),
      React.createElement("p", { className: "text-sm text-slate-400 mb-2" }, "(Consider if any of the following are found while the patient is taking high-dose ICS or daily OCS)"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Blood eosinophils ≥150/µL AND/OR"),
        React.createElement("li", null, "FeNO ≥20 ppb AND/OR"),
        React.createElement("li", null, "Sputum eosinophils ≥2%, AND/OR"),
        React.createElement("li", null, "Asthma is clinically allergen-driven.")
      ),
      React.createElement("p", { className: "mt-2 text-xs text-amber-300" },
        React.createElement("em", null, "Note: Repeat blood eosinophils and FeNO up to 3x, at least 1-2 weeks after OCS or on the lowest possible OCS dose.")
      )
    ),
    options: [
      { text: 'Yes, signs of Type 2 inflammation are present', nextNodeId: 'type2InflammationYesPathway', color: 'primary' },
      { text: 'No, no clear signs of Type 2 inflammation', nextNodeId: 'type2InflammationNoPathway', color: 'secondary' },
    ],
  },
  type2InflammationYesPathway: { // Step 7 - Branch for Type 2 Inflammation YES (GINA Fig 3)
    id: 'type2InflammationYesPathway',
    title: '7. Type 2 Inflammation Present: Consider Other Treatments',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.19, p.20-21 (Figure 3)',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Key actions:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Consider adherence tests."),
        React.createElement("li", null, "Consider increasing the ICS dose for 3-6 months."),
        React.createElement("li", null, "Consider add-on non-biologic treatment for specific Type 2 clinical phenotypes (e.g. AERD, ABPA, chronic rhinosinusitis, nasal polyposis, atopic dermatitis).")
      )
    ),
    options: [
      { text: 'Is a Type 2 biologic therapy available/affordable?', nextNodeId: 'type2BiologicAvailableQuery' },
    ],
  },
  type2BiologicAvailableQuery: {
    id: 'type2BiologicAvailableQuery',
    title: 'Question: Is a targeted Type 2 biologic therapy available and affordable?',
    colorScheme: 'blue',
    nodeType: 'question',
    ginaReference: 'GINA p.19 (Figure 3), p.21',
    description: React.createElement("p", null, "Assess the availability and affordability of a biologic therapy targeting Type 2 inflammation."),
    options: [
      { text: 'Yes, available/affordable', nextNodeId: 'considerBiologicsEntry', color: 'primary' },
      { text: 'No, unavailable/unaffordable', nextNodeId: 'type2BiologicNotAvailableActions', color: 'secondary' },
    ],
  },
  type2BiologicNotAvailableActions: {
    id: 'type2BiologicNotAvailableActions',
    title: 'Actions if Type 2 Biologic Therapy is NOT Available/Affordable',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.19 (Figure 3), p.21',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Consider:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Higher dose ICS, if not used."),
        React.createElement("li", null, "Other add-on therapy (e.g. LAMA, LTRA, low dose azithromycin)."),
        React.createElement("li", null, "As a last resort, consider add-on low dose OCS, but implement strategies to minimize side-effects."),
        React.createElement("li", null, "Stop ineffective add-on therapies.")
      )
    ),
    options: [
      { text: 'Next: Monitor and manage ongoing', nextNodeId: 'monitorAndManageSevereAsthma' },
    ],
  },
  type2InflammationNoPathway: { // Step 7 - Branch for Type 2 Inflammation NO (GINA Fig 3)
    id: 'type2InflammationNoPathway',
    title: '7. No Evidence of Type 2 Inflammation: Consider Other Treatments',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.19, p.20 (Figure 3)',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Key actions:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Review the basics: differential diagnosis, inhaler technique, adherence, comorbidities, side-effects."),
        React.createElement("li", null, "Avoid exposures (tobacco smoke, allergens, irritants)."),
        React.createElement("li", null, "Consider investigations (if available and not done): sputum induction, high resolution chest CT, bronchoscopy."),
        React.createElement("li", null, "Consider trial of add-on treatments (if available and not already tried): LAMA, low dose azithromycin."),
        React.createElement("li", null, React.createElement("em", null,"Anti-IL4Rα*"), " if taking maintenance OCS."),
        React.createElement("li", null, React.createElement("em", null,"Anti-TSLP*"), " (but insufficient evidence in patients on maintenance OCS)."),
        React.createElement("li", null, "As last resort, consider add-on low dose OCS, but implement strategies to minimize side-effects."),
        React.createElement("li", null, "Consider bronchial thermoplasty (+ registry)."),
        React.createElement("li", null, "Stop ineffective add-on therapies.")
      ),
      React.createElement("p", { className: "mt-2 text-xs text-amber-300" }, "*Check local eligibility criteria for specific biologic therapies as these may vary.")
    ),
    options: [
      { text: 'Next: Monitor and manage ongoing', nextNodeId: 'monitorAndManageSevereAsthma' },
    ],
  },
  considerBiologicsEntry: { // Step 8 (GINA Fig 4) - Entry Point
    id: 'considerBiologicsEntry',
    title: '8. Consider Add-on Type 2-Targeted Biologic Therapy',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.21-24 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", {className: "mb-2"}, "For patients with exacerbations or poor symptom control on high dose ICS-LABA, AND who have evidence of Type 2 inflammation (see Step 6)."),
      React.createElement("p", { className: "mb-2" }, "Test for and treat parasitic infection where relevant before starting."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Factors to consider when choosing:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-3" },
        React.createElement("li", null, "Local payer eligibility criteria (*always check*)."),
        React.createElement("li", null, "Type 2 comorbidities (e.g. atopic dermatitis, nasal polyposis)."),
        React.createElement("li", null, "Predictors of response (see details for each biologic)."),
        React.createElement("li", null, "Cost, dosing frequency, route (SC or IV), patient preference.")
      ),
      React.createElement("p", { className: "text-sm text-amber-300" }, "The following sections detail the criteria for each class of biologic therapy.")
    ),
    options: [
      { text: 'View criteria for Anti-IgE (Omalizumab)', nextNodeId: 'antiIgEInfo' },
      { text: 'View criteria for Anti-IL5/IL5R', nextNodeId: 'antiIL5_IL5RInfo' },
      { text: 'View criteria for Anti-IL4Rα (Dupilumab)', nextNodeId: 'antiIL4RaInfo' },
      { text: 'View criteria for Anti-TSLP (Tezepelumab)', nextNodeId: 'antiTSLPInfo' },
      { text: 'I have chosen a biologic, initiate trial', nextNodeId: 'initiateBiologicTrial', color: 'primary'},
    ],
  },
  antiIgEInfo: {
    id: 'antiIgEInfo',
    title: 'Criteria for Anti-IgE (Omalizumab)',
    colorScheme: 'blue',
    nodeType: 'info',
    ginaReference: 'GINA p.22 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Eligibility (severe allergic asthma):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-2" },
        React.createElement("li", null, "Sensitization to an inhaled perennial allergen (skin prick testing or specific IgE)."),
        React.createElement("li", null, "Total serum IgE and body weight within dosing range."),
        React.createElement("li", null, "Exacerbations in last year.")
      ),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Predictors of good response:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Blood eosinophils ≥260/μL or FeNO ≥19.5 ppb (per one study; others showed efficacy regardless)."),
        React.createElement("li", null, "Childhood-onset asthma."),
        React.createElement("li", null, "Clinical history suggesting allergen-driven symptoms.")
      )
    ),
    options: [
      { text: 'Return to biologic selection', nextNodeId: 'considerBiologicsEntry' },
      { text: 'Initiate trial with this biologic', nextNodeId: 'initiateBiologicTrial', color: 'primary' },
    ],
  },
  antiIL5_IL5RInfo: {
    id: 'antiIL5_IL5RInfo',
    title: 'Criteria for Anti-IL5/IL5R (Mepolizumab, Reslizumab, Benralizumab)',
    colorScheme: 'blue',
    nodeType: 'info',
    ginaReference: 'GINA p.22-23 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Eligibility (severe eosinophilic asthma):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-2" },
        React.createElement("li", null, "Exacerbations in last year."),
        React.createElement("li", null, "Blood eosinophils above locally specified level (e.g. ≥150 or ≥300/μL). Cut-point may differ for patients on OCS.")
      ),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Predictors of good response (strongly predictive):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Higher blood eosinophil count."),
        React.createElement("li", null, "Higher number of exacerbations in previous year."),
        React.createElement("li", null, "Adult-onset asthma."),
        React.createElement("li", null, "Nasal polyps."),
        React.createElement("li", null, "Maintenance OCS at baseline.")
      )
    ),
    options: [
      { text: 'Return to biologic selection', nextNodeId: 'considerBiologicsEntry' },
      { text: 'Initiate trial with this biologic', nextNodeId: 'initiateBiologicTrial', color: 'primary' },
    ],
  },
  antiIL4RaInfo: {
    id: 'antiIL4RaInfo',
    title: 'Criteria for Anti-IL4Rα (Dupilumab)',
    colorScheme: 'blue',
    nodeType: 'info',
    ginaReference: 'GINA p.23-24 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Eligibility (severe eosinophilic/Type 2 asthma):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-2" },
        React.createElement("li", null, "Exacerbations in last year."),
        React.createElement("li", null, "Type 2 biomarkers above a specified level (e.g. blood eosinophils ≥150/μL AND ≤1500/µL; OR FeNO ≥25 ppb)."),
        React.createElement("li", null, "OR requirement for maintenance OCS.")
      ),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Predictors of good response (strongly predictive):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Higher blood eosinophils."),
        React.createElement("li", null, "Higher FeNO.")
      ),
      React.createElement("p", {className: "text-sm text-slate-400 mt-1"}, "May be particularly useful with comorbid atopic dermatitis or chronic rhinosinusitis with nasal polyposis.")
    ),
    options: [
      { text: 'Return to biologic selection', nextNodeId: 'considerBiologicsEntry' },
      { text: 'Initiate trial with this biologic', nextNodeId: 'initiateBiologicTrial', color: 'primary' },
    ],
  },
  antiTSLPInfo: {
    id: 'antiTSLPInfo',
    title: 'Criteria for Anti-TSLP (Tezepelumab)',
    colorScheme: 'blue',
    nodeType: 'info',
    ginaReference: 'GINA p.24 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Eligibility (severe asthma):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-2" },
        React.createElement("li", null, "Exacerbations in last year."),
        React.createElement("li", null, React.createElement("em", null, "May also be considered in patients with no elevated Type 2 markers (see Step 7, 'No evidence of Type 2 inflammation' pathway)."))
      ),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Predictors of good response:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Higher blood eosinophils."),
        React.createElement("li", null, "Higher FeNO."),
      )
    ),
    options: [
      { text: 'Return to biologic selection', nextNodeId: 'considerBiologicsEntry' },
      { text: 'Initiate trial with this biologic', nextNodeId: 'initiateBiologicTrial', color: 'primary' },
    ],
  },
  initiateBiologicTrial: {
    id: 'initiateBiologicTrial',
    title: 'Initiate Biologic Therapy Trial',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.24 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", {className: "mb-2"}, "Once a biologic is chosen based on eligibility criteria and patient characteristics:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
      React.createElement("li", null, "Administer the chosen biologic."),
      React.createElement("li", null, "Continue the trial for at least 4 months."),
      React.createElement("li", null, "Assess the response after this period."),
      React.createElement("li", null, "Practical advice: allow the refrigerated syringe/pen to reach room temperature before injection to reduce pain. Do not give the first dose on the same day as a vaccine (e.g. COVID-19) to distinguish side effects.")
      )
    ),
    options: [
      { text: 'Next: Evaluate response to biologic therapy', nextNodeId: 'evaluateBiologicResponse' },
    ],
  },
  evaluateBiologicResponse: {
    id: 'evaluateBiologicResponse',
    title: 'Evaluate Response to Biologic Therapy (after ≥4 months)',
    colorScheme: 'blue',
    nodeType: 'question',
    ginaReference: 'GINA p.24 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "After at least 4 months of trial, evaluate the response to the biologic therapy."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Criteria for good response (no universal definition, but consider):"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Reduction in exacerbations."),
        React.createElement("li", null, "Improved symptom control."),
        React.createElement("li", null, "Improved lung function."),
        React.createElement("li", null, "Reduction in side-effects (e.g., from OCS)."),
        React.createElement("li", null, "Decrease in treatment intensity (e.g., OCS dose reduction)."),
        React.createElement("li", null, "Patient satisfaction.")
      )
    ),
    options: [
      { text: 'Good response', nextNodeId: 'biologicGoodResponseActions', color: 'primary' },
      { text: 'Uncertain/partial response', nextNodeId: 'biologicUnclearResponseActions', color: 'secondary' },
      { text: 'No/insufficient response', nextNodeId: 'biologicNoResponseActions', color: 'danger' },
    ],
  },
  biologicGoodResponseActions: {
    id: 'biologicGoodResponseActions',
    title: 'Good Response to Biologic Therapy',
    colorScheme: 'blue',
    nodeType: 'info',
    ginaReference: 'GINA p.24 (Figure 4 & 5)',
    description: React.createElement("p", null, "Continue the biologic therapy. Proceed to ongoing monitoring and management of severe asthma."),
    options: [
      { text: 'Next: Monitor and manage ongoing (GINA Fig 5)', nextNodeId: 'monitorAndManageSevereAsthma' },
    ],
  },
  biologicUnclearResponseActions: {
    id: 'biologicUnclearResponseActions',
    title: 'Uncertain/Partial Response to Biologic Therapy',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.24 (Figure 4)',
    description: React.createElement("p", null, "If the response is uncertain or partial after 4 months, consider extending the trial to 6-12 months before making a final decision."),
    options: [
      { text: 'Re-evaluate after 6-12 months', nextNodeId: 'evaluateBiologicResponse' },
      { text: 'Consider as "No response"', nextNodeId: 'biologicNoResponseActions', color: 'secondary' },
    ],
  },
  biologicNoResponseActions: {
    id: 'biologicNoResponseActions',
    title: 'No/Insufficient Response to Biologic Therapy',
    colorScheme: 'blue',
    nodeType: 'step',
    ginaReference: 'GINA p.24 (Figure 4)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", {className: "mb-2"}, "Stop the current biologic therapy."),
       React.createElement("p", null, "Consider switching to a different Type 2-targeted biologic therapy, if the patient is eligible for another option and criteria warrant it.")
    ),
    options: [
      { text: 'Yes, try another biologic', nextNodeId: 'switchToDifferentBiologic' },
      { text: 'No, explore other non-biologic options', nextNodeId: 'returnToNonBiologicOptions' },
    ],
  },
  switchToDifferentBiologic: {
    id: 'switchToDifferentBiologic',
    title: 'Switch to a Different Biologic Therapy',
    colorScheme: 'blue',
    nodeType: 'info',
    description: React.createElement("p", null, "Return to the biologic selection step to assess eligibility for another option."),
    options: [
        { text: 'Return to biologic selection', nextNodeId: 'considerBiologicsEntry' }
    ]
  },
  returnToNonBiologicOptions: {
    id: 'returnToNonBiologicOptions',
    title: 'Return to Non-Biologic Options',
    colorScheme: 'blue',
    nodeType: 'info',
    description: React.createElement("p", null, "If no biologic is effective or appropriate, reconsider non-biologic treatment options for Type 2 inflammation (if present) or non-Type 2 asthma."),
    options: [
        { text: 'Review options for Type 2 inflammation (if applicable)', nextNodeId: 'type2BiologicNotAvailableActions' },
        { text: 'Review options if no Type 2 inflammation', nextNodeId: 'type2InflammationNoPathway' },
        { text: 'Go to monitoring and management', nextNodeId: 'monitorAndManageSevereAsthma'}
    ]
  },
  monitorAndManageSevereAsthma: { // Steps 9 & 10 (GINA Fig 5)
    id: 'monitorAndManageSevereAsthma',
    title: '9 & 10. Monitor and Manage Ongoing Severe Asthma',
    colorScheme: 'brown',
    nodeType: 'step',
    ginaReference: 'GINA p.25-26 (Figure 5)',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-2" }, "Ongoing collaboration between the patient, primary care physician, specialist, and other health professionals."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Re-evaluate every 3-6 months:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-2" },
        React.createElement("li", null, "Asthma: symptom control, exacerbations, lung function."),
        React.createElement("li", null, "Type 2 comorbidities (e.g. nasal polyposis, atopic dermatitis)."),
        React.createElement("li", null, "Medications: treatment intensity, side-effects, affordability."),
        React.createElement("li", null, "Patient satisfaction.")
      ),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "If good response to biologic therapy:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "First, consider decreasing/stopping OCS (and check for adrenal insufficiency)."),
        React.createElement("li", null, "Then, consider stopping other add-on asthma medications."),
        React.createElement("li", null, "Then, if asthma is well-controlled for 3-6 months, consider reducing ICS-LABA dose (but do not stop maintenance ICS-LABA)."),
        React.createElement("li", null, "Re-evaluate need for ongoing biologic therapy (generally after at least 12 months of treatment).")
      ),
      React.createElement("strong", { className: "block mt-2 mb-1 text-sky-200" }, "If NO good response to a Type 2 targeted therapy:"),
       React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4" },
        React.createElement("li", null, "Stop the biologic therapy."),
        React.createElement("li", null, "Review the basics (diagnosis, inhaler technique, adherence, comorbidities, emotional support)."),
        React.createElement("li", null, "Consider high resolution chest CT if not done."),
        React.createElement("li", null, "Reassess phenotype and treatment options."),
        React.createElement("li", null, "Do not stop ICS.")
      )
    ),
    options: [
      { text: 'End of monitoring section (Return to Home)', nextNodeId: 'start' }, // Or loop back to parts of specialist care
    ],
     isTerminal: true,
     terminalMessage: 'The management of severe asthma is an ongoing process. Refer to the full GINA guide for more details.'
  },
  endDifficultToTreatManagement: {
    id: 'endDifficultToTreatManagement',
    title: 'End of Initial Management for Difficult-to-Treat Asthma',
    colorScheme: 'blue',
    nodeType: 'info',
    description: React.createElement(React.Fragment, null,
      React.createElement("p", null, "This pathway has covered the initial steps and the transition to specialist care."),
      React.createElement("p", { className: "mt-2" }, "If severe asthma is confirmed, the pathway continues with phenotype assessment and treatment selection, including biologics, followed by ongoing monitoring."),
      React.createElement("p", { className: "mt-2" }, "Use the sidebar to explore other sections like Abbreviations and Medications.")
    ),
    options: [
       { text: 'Return to Home', nextNodeId: 'start' } 
    ],
    isTerminal: true,
    terminalMessage: 'For complete information, please consult the GINA 2024 guide.'
  },
  ginaDefinitions: { 
    id: 'ginaDefinitions',
    title: 'Key Definitions (GINA)',
    colorScheme: 'blue',
    nodeType: 'info',
    ginaReference: "GINA p.9",
    description: React.createElement(React.Fragment, null,
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Uncontrolled Asthma:"),
      React.createElement("ul", { className: "list-disc list-inside space-y-1 text-slate-300 pl-4 mb-3" },
        React.createElement("li", null, "Poor symptom control (frequent symptoms or reliever use, activity limited by asthma, night waking)."),
        React.createElement("li", null, "AND/OR Frequent exacerbations (≥2/year requiring OCS, or ≥1/year requiring hospitalization).")
      ),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Difficult-to-treat Asthma:"),
      React.createElement("p", { className: "text-slate-300 pl-4 mb-3" }, "Asthma that is uncontrolled despite prescribing of medium- or high-dose ICS with a second controller (usually a LABA) or with maintenance OCS, or that requires high-dose treatment to maintain good symptom control and reduce the risk of exacerbations."),
      React.createElement("strong", { className: "block mb-1 text-sky-200" }, "Severe Asthma:"),
      React.createElement("p", { className: "text-slate-300 pl-4" }, "A subset of difficult-to-treat asthma. It is asthma that is uncontrolled despite adherence with maximal optimized high-dose ICS-LABA treatment and management of contributory factors, or that worsens when high-dose treatment is decreased.")
    ),
    options: [],
    isTerminal: true,
    terminalMessage: 'These definitions are crucial for accurate classification.'
  }
};

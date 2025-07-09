
import React from 'react';
import { MedicationCategory } from '../types';
import { SvgBeaker } from '../components/Icons';

const medicationCategories: MedicationCategory[] = [
  {
    name: 'Inhaled Corticosteroids (ICS)',
    description: 'The most effective anti-inflammatory medications for asthma.',
    medications: [
      { name: 'Beclometasone', delivery: 'Pressurized metered-dose inhaler or dry-powder inhaler' },
      { name: 'Budesonide', delivery: 'Pressurized metered-dose inhaler or dry-powder inhaler' },
      { name: 'Fluticasone', delivery: 'Pressurized metered-dose inhaler or dry-powder inhaler' },
    ],
  },
  {
    name: 'ICS in combination with a Long-Acting Beta₂-Agonist (ICS-LABA)',
    description: 'Combination that improves symptoms and reduces exacerbations.',
    medications: [
      { name: 'Beclometasone-formoterol' },
      { name: 'Budesonide-formoterol' },
      { name: 'Fluticasone-salmeterol' },
    ],
  },
  {
    name: 'Biologics (for Type 2 severe asthma)',
    description: 'Targeted treatments for specific phenotypes of severe asthma.',
    medications: [
      { name: 'Omalizumab (Anti-IgE)'},
      { name: 'Mepolizumab (Anti-IL5)'},
      { name: 'Benralizumab (Anti-IL5R)'},
      { name: 'Dupilumab (Anti-IL4Rα)'},
      { name: 'Tezepelumab (Anti-TSLP)'},
    ]
  }
  // Add more categories and medications as needed
];

const MedicationsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <SvgBeaker className="h-8 w-8 mr-3 text-sky-400" />
        <h1 className="text-3xl font-bold text-sky-300">Asthma Medications (GINA 2024)</h1>
      </div>
      
      <p className="text-slate-300">
        Overview of the main classes of medications used in asthma management.
      </p>

      {medicationCategories.map((category, catIndex) => (
        <div key={catIndex} className="bg-slate-800/50 backdrop-blur-md shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-sky-300 mb-3">{category.name}</h2>
          {category.description && <p className="text-sm text-slate-400 mb-4">{category.description}</p>}
          <ul className="space-y-3">
            {category.medications.map((med, medIndex) => (
              <li key={medIndex} className="p-3 bg-slate-700/50 rounded-md shadow">
                <span className="font-medium text-slate-100">{med.name}</span>
                {med.delivery && <span className="text-xs text-slate-300 block">Delivery: {med.delivery}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-xs text-slate-400 mt-4">
        This list is indicative and not exhaustive. Local eligibility criteria and full product information should be consulted.
      </p>
    </div>
  );
};

export default MedicationsPage;

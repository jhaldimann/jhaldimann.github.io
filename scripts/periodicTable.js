let table = [
  [ 'H', 'Hydrogen', '1.00794', 1, 1, 'nonmetal' ],
  [ 'He', 'Helium', '4.002602', 18, 1, 'nobelgases' ],
  [ 'Li', 'Lithium', '6.941', 1, 2, 'alkali' ],
  [ 'Be', 'Beryllium', '9.012182', 2, 2, 'alkalin' ],
  [ 'B', 'Boron', '10.811', 13, 2, 'metaloids' ],
  [ 'C', 'Carbon', '12.0107', 14, 2, 'nonmetal' ],
  [ 'N', 'Nitrogen', '14.0067', 15, 2, 'nonmetal' ],
  [ 'O', 'Oxygen', '15.9994', 16, 2, 'nonmetal' ],
  [ 'F', 'Fluorine', '18.9984032', 17, 2, 'halogen' ],
  [ 'Ne', 'Neon', '20.1797', 18, 2, 'nobelgases' ],
  [ 'Na', 'Sodium', '22.98976...', 1, 3, 'alkali' ],
  [ 'Mg', 'Magnesium', '24.305', 2, 3, 'alkalin' ],
  [ 'Al', 'Aluminium', '26.9815386', 13, 3, 'othermetal' ],
  [ 'Si', 'Silicon', '28.0855', 14, 3, 'metaloids' ],
  [ 'P', 'Phosphorus', '30.973762', 15, 3, 'nonmetal' ],
  [ 'S', 'Sulfur', '32.065', 16, 3, 'nonmetal' ],
  [ 'Cl', 'Chlorine', '35.453', 17, 3, 'halogen' ],
  [ 'Ar', 'Argon', '39.948', 18, 3, 'nobelgases' ],
  [ 'K', 'Potassium', '39.948', 1, 4, 'alkali' ],
  [ 'Ca', 'Calcium', '40.078', 2, 4, 'alkalin' ],
  [ 'Sc', 'Scandium', '44.955912', 3, 4, 'transition' ],
  [ 'Ti', 'Titanium', '47.867', 4, 4, 'transition' ],
  [ 'V', 'Vanadium', '50.9415', 5, 4, 'transition' ],
  [ 'Cr', 'Chromium', '51.9961', 6, 4, 'transition' ],
  [ 'Mn', 'Manganese', '54.938045', 7, 4, 'transition' ],
  [ 'Fe', 'Iron', '55.845', 8, 4, 'transition' ],
  [ 'Co', 'Cobalt', '58.933195', 9, 4, 'transition' ],
  [ 'Ni', 'Nickel', '58.6934', 10, 4, 'transition' ],
  [ 'Cu', 'Copper', '63.546', 11, 4, 'transition' ],
  [ 'Zn', 'Zinc', '65.38', 12, 4, 'transition' ],
  [ 'Ga', 'Gallium', '69.723', 13, 4, 'othermetal' ],
  [ 'Ge', 'Germanium', '72.63', 14, 4, 'metaloids' ],
  [ 'As', 'Arsenic', '74.9216', 15, 4, 'metaloids' ],
  [ 'Se', 'Selenium', '78.96', 16, 4, 'nonmetal' ],
  [ 'Br', 'Bromine', '79.904', 17, 4, 'halogen' ],
  [ 'Kr', 'Krypton', '83.798', 18, 4, 'nobelgases' ],
  [ 'Rb', 'Rubidium', '85.4678', 1, 5, 'alkali' ],
  [ 'Sr', 'Strontium', '87.62', 2, 5, 'alkalin' ],
  [ 'Y', 'Yttrium', '88.90585', 3, 5, 'transition' ],
  [ 'Zr', 'Zirconium', '91.224', 4, 5, 'transition' ],
  [ 'Nb', 'Niobium', '92.90628', 5, 5, 'transition' ],
  [ 'Mo', 'Molybdenum', '95.96', 6, 5, 'transition' ],
  [ 'Tc', 'Technetium', '(98)', 7, 5, 'transition' ],
  [ 'Ru', 'Ruthenium', '101.07', 8, 5, 'transition' ],
  [ 'Rh', 'Rhodium', '102.9055', 9, 5, 'transition' ],
  [ 'Pd', 'Palladium', '106.42', 10, 5, 'transition' ],
  [ 'Ag', 'Silver', '107.8682', 11, 5, 'transition' ],
  [ 'Cd', 'Cadmium', '112.411', 12, 5, 'transition' ],
  [ 'In', 'Indium', '114.818', 13, 5, 'othermetal' ],
  [ 'Sn', 'Tin', '118.71', 14, 5, 'othermetal' ],
  [ 'Sb', 'Antimony', '121.76', 15, 5, 'metaloids' ],
  [ 'Te', 'Tellurium', '127.6', 16, 5, 'metaloids' ],
  [ 'I', 'Iodine', '126.90447', 17, 5, 'halogen' ],
  [ 'Xe', 'Xenon', '131.293', 18, 5, 'nobelgases' ],
  [ 'Cs', 'Caesium', '132.9054', 1, 6, 'alkali' ],
  [ 'Ba', 'Barium', '132.9054', 2, 6, 'alkalin' ],
  [ 'La-Lu', '', '1.0079', '', 6, 'othermetal' ],
  [ 'La', 'Lanthanum', '138.90547', 4, 9, 'lanthanoids' ],
  [ 'Ce', 'Cerium', '140.116', 5, 9, 'lanthanoids' ],
  [ 'Pr', 'Praseodymium', '140.90765', 6, 9, 'lanthanoids' ],
  [ 'Nd', 'Neodymium', '144.242', 7, 9, 'lanthanoids' ],
  [ 'Pm', 'Promethium', '(145)', 8, 9, 'lanthanoids' ],
  [ 'Sm', 'Samarium', '150.36', 9, 9, 'lanthanoids' ],
  [ 'Eu', 'Europium', '151.964', 10, 9, 'lanthanoids' ],
  [ 'Gd', 'Gadolinium', '157.25', 11, 9, 'lanthanoids' ],
  [ 'Tb', 'Terbium', '158.92535', 12, 9, 'lanthanoids' ],
  [ 'Dy', 'Dysprosium', '162.5', 13, 9, 'lanthanoids' ],
  [ 'Ho', 'Holmium', '164.93032', 14, 9, 'lanthanoids' ],
  [ 'Er', 'Erbium', '167.259', 15, 9, 'lanthanoids' ],
  [ 'Tm', 'Thulium', '168.93421', 16, 9, 'lanthanoids' ],
  [ 'Yb', 'Ytterbium', '173.054', 17, 9, 'lanthanoids' ],
  [ 'Lu', 'Lutetium', '174.9668', 18, 9, 'lanthanoids' ],
  [ 'Hf', 'Hafnium', '178.49', 4, 6, 'transition' ],
  [ 'Ta', 'Tantalum', '180.94788', 5, 6, 'transition' ],
  [ 'W', 'Tungsten', '183.84', 6, 6, 'transition' ],
  [ 'Re', 'Rhenium', '186.207', 7, 6, 'transition' ],
  [ 'Os', 'Osmium', '190.23', 8, 6, 'transition' ],
  [ 'Ir', 'Iridium', '192.217', 9, 6, 'transition' ],
  [ 'Pt', 'Platinum', '195.084', 10, 6, 'transition' ],
  [ 'Au', 'Gold', '196.966569', 11, 6, 'transition' ],
  [ 'Hg', 'Mercury', '200.59', 12, 6, 'transition' ],
  [ 'Tl', 'Thallium', '204.3833', 13, 6, 'othermetal' ],
  [ 'Pb', 'Lead', '207.2', 14, 6, 'othermetal' ],
  [ 'Bi', 'Bismuth', '208.9804', 15, 6, 'othermetal' ],
  [ 'Po', 'Polonium', '(209)', 16, 6, 'metaloids' ],
  [ 'At', 'Astatine', '(210)', 17, 6, 'halogen' ],
  [ 'Rn', 'Radon', '(222)', 18, 6, 'nobelgases' ],
  [ 'Fr', 'Francium', '(223)', 1, 7, 'alkali' ],
  [ 'Ra', 'Radium', '(226)', 2, 7, 'alkalin' ],
  [ 'Ac-Lr', '', '1.0079', '', 7, 'othermetal' ],
  [ 'Ac', 'Actinium', '(227)', 4, 10, 'actinoids' ],
  [ 'Th', 'Thorium', '232.03806', 5, 10, 'actinoids' ],
  [ 'Pa', 'Protactinium', '231.0588', 6, 10, 'actinoids' ],
  [ 'U', 'Uranium', '238.02891', 7, 10, 'actinoids' ],
  [ 'Np', 'Neptunium', '(237)', 8, 10, 'actinoids' ],
  [ 'Pu', 'Plutonium', '(244)', 9, 10, 'actinoids' ],
  [ 'Am', 'Americium', '(243)', 10, 10, 'actinoids' ],
  [ 'Cm', 'Curium', '(247)', 11, 10, 'actinoids' ],
  [ 'Bk', 'Berkelium', '(247)', 12, 10, 'actinoids' ],
  [ 'Cf', 'Californium', '(251)', 13, 10, 'actinoids' ],
  [ 'Es', 'Einstenium', '(252)', 14, 10, 'actinoids' ],
  [ 'Fm', 'Fermium', '(257)', 15, 10, 'actinoids' ],
  [ 'Md', 'Mendelevium', '(258)', 16, 10, 'actinoids' ],
  [ 'No', 'Nobelium', '(259)', 17, 10, 'actinoids' ],
  [ 'Lr', 'Lawrencium', '(262)', 18, 10, 'actinoids' ],
  [ 'Rf', 'Rutherfordium', '(267)', 4, 7, 'transition' ],
  [ 'Db', 'Dubnium', '(268)', 5, 7, 'transition' ],
  [ 'Sg', 'Seaborgium', '(271)', 6, 7, 'transition' ],
  [ 'Bh', 'Bohrium', '(272)', 7, 7, 'transition' ],
  [ 'Hs', 'Hassium', '(270)', 8, 7, 'transition' ],
  [ 'Mt', 'Meitnerium', '(276)', 9, 7, 'transition' ],
  [ 'Ds', 'Darmstadium', '(281)', 10, 7, 'transition' ],
  [ 'Rg', 'Roentgenium', '(280)', 11, 7, 'transition' ],
  [ 'Cn', 'Copernicium', '(285)', 12, 7, 'transition' ],
  [ 'Uut', 'Unutrium', '(284)', 13, 7, 'unknown' ],
  [ 'Fl', 'Flerovium', '(289)', 14, 7, 'unknown' ],
  [ 'Uup', 'Ununpentium', '(288)', 15, 7, 'unknown' ],
  [ 'Lv', 'Livermorium', '(293)', 16, 7, 'unknown' ],
  [ 'Uus', 'Ununseptium', '(294)', 17, 7, 'halogen' ],
  [ 'Uuo', 'Ununoctium', '(294)', 18, 7, 'nobelgases' ],
];

let init = () => {
  let baseframe = document.querySelector('.baseframe');

  for (let i = 1; i < 11; i++) {
    let row = document.createElement('div');
    row.className = 'row' + i;
    baseframe.appendChild(row);
  }

  table.forEach(( element ) => {
    let div = document.createElement('div');
    addDivs(div, element);
  });

  splitElements();

};

let addDivs = ( div, element ) => {
  let p = document.createElement("p");
  let secondP = document.createElement("p");
  p.innerHTML = element[ 0 ];
  secondP.innerHTML = element[ 2 ];
  secondP.className += "number";
  div.appendChild(p);
  div.appendChild(secondP);
  div.className = 'element ' + element[ 5 ];
  let row = document.querySelector('.row' + element[ 4 ]);
  row.appendChild(div);
};

let splitElements = () => {
  for (let i = 1; i < 8; i++) {
    let div = document.querySelector('.row' + i);

    if (div.childNodes.length === 18) {
      return;
    } else if (div.childNodes.length === 8) {
      for (let i = 0; i <= 9; i++) {
        appendElements(div,2);
      }
    } else {
      for (let i = 0; i <= 15; i++) {
        appendElements(div,1);
      }
    }
  }
};

let appendElements = (div, type) => {
  let newElement = document.createElement("div");
  let pElement = document.createElement("p");
  let secondPElement = document.createElement("p");
  pElement.innerHTML = "0";
  secondPElement.innerHTML = "0";
  secondPElement.className += "number";
  newElement.appendChild(pElement);
  newElement.appendChild(secondPElement);
  newElement.className = "element invisible";
  div.insertBefore(newElement, div.childNodes[ type ]);
}

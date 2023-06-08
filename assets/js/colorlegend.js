// Define your color legend data
const colorLegendData = [
  { color: '#33A036', label: 'Least', class: 'shade-1-button' },
  { color: '#147917', label: 'Lesser', class: 'shade-2-button' },
  { color: '#023020', label: 'Greater', class: 'shade-3-button' },
  { color: '#B59410', label: 'Greatest', class: 'shade-4-button' }
];

// Create the color legend elements dynamically within the wrapper
const colorLegendContainer = document.getElementById('color-legend-wrapper').querySelector('#color-legend');

colorLegendData.forEach(item => {
  const colorButton = document.createElement('button');
  colorButton.classList.add('color-button');
  colorButton.classList.add(item.class);
  colorButton.textContent = item.label;

  const legendItem = document.createElement('div');
  legendItem.appendChild(colorButton);
  colorLegendContainer.appendChild(legendItem);
});

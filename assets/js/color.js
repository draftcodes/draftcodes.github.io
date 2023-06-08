// Define your color legend data
const colorLegendData = [
  { color: '#FF0000', label: 'Red' },
  { color: '#00FF00', label: 'Green' },
  { color: '#0000FF', label: 'Blue' }
];

// Create the color legend elements dynamically
const colorLegendContainer = document.getElementById('color-legend');

colorLegendData.forEach(item => {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  colorBox.style.backgroundColor = item.color;

  const colorLabel = document.createElement('span');
  colorLabel.classList.add('color-label');
  colorLabel.textContent = item.label;

  const legendItem = document.createElement('div');
  legendItem.appendChild(colorBox);
  legendItem.appendChild(colorLabel);
  colorLegendContainer.appendChild(legendItem);
});

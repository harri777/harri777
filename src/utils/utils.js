function unescapeHtmlEntities(text) {
  const entities = [
    ['amp', '&'],
    ['lt', '<'],
    ['gt', '>'],
    ['quot', '"'],
    ['apos', "'"]
  ];

  for (let i = 0; i < entities.length; i++) {
    let entity = entities[i];
    let pattern = new RegExp('&' + entity[0] + ';', 'g');
    text = text.replace(pattern, entity[1]);
  }

  return text;
}

function removeCommas(str) {
  return str.replace(/,/g, '\n');
}

const renderSkills = () => {
  const render = SKILLS.map(skill => (
    `<img alt="${skill.name}" src="${skill.logo}" />`
  ))

  return removeCommas(render.toString());
}

module.exports = { unescapeHtmlEntities, removeCommas, renderSkills }
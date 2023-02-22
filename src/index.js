const Mustache = require('mustache');
const fs = require('fs');
const {renderSkills,  renderProjects } = require('./renderBlock')


const MUSTACHE_MAIN_DIR = './main.mustache';

const DATA = {
  name: 'Harrisson',
  skills: renderSkills(),
  projects: renderProjects(),
  refresh_date: new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/Sao_Paulo',
  }),
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();
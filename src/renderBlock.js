const { SKILLS, PROJECTS, GH_BASE_URL, GH_USER } = require("../constants");
const { removeCommas } = require("./utils/utils");

const renderSkills = () => {
  const render = SKILLS.map(skill => (
    `<img alt="${skill.name}" src="${skill.logo}" />`
  ))

  return removeCommas(render.toString());
}

const renderProjects = () => {
  const render = PROJECTS.map(project => {
    const link = `${GH_BASE_URL}/${GH_USER}/${project.slug}`
    const repo = `${GH_USER}/${project.slug}`

    return (
      `<tr>
        <td><a href="${link}"><b>${project.name}</b></a></td>
        <td><img alt="Stars" src="https://img.shields.io/github/stars/${repo}?style=flat-square&labelColor=343b41"/></td>
        <td><img alt="Forks" src="https://img.shields.io/github/forks/${repo}?style=flat-square&labelColor=343b41"/></td>
        <td><img alt="Issues" src="https://img.shields.io/github/issues/${repo}?style=flat-square&labelColor=343b41"/></td>
      </tr>`
    )
  })

  return removeCommas(render.toString());
}

module.exports = {
  renderSkills,
  renderProjects
}
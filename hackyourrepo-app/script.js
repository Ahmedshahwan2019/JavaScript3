"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const dropMenu = document.querySelector('.chose')
const repositoryName = document.querySelector('.repository-info p')
const repoDescription = document.querySelector('.description-info p')
const repoforks = document.querySelector('.forks-info p')
const updateInfo = document.querySelector('.update-info p')

const placeholderRepos = [{
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description: "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const getRepoInfo = () => {
  const dropMenuValue = dropMenu.value;
  for (let i = 0; i < placeholderRepos.length; i++) {
    const repoInfo = placeholderRepos[i];
    // console.log(repoInfo.name)
    if (dropMenuValue === repoInfo.name) {
      repositoryName.innerHTML = `<span><b>Repository:</b></span> ${repoInfo.name}`
      repoDescription.innerHTML = `<span><b>Description:</b></span> ${repoInfo.description}`
      repoforks.innerHTML = `<span><b>Forks:</b></span> ${repoInfo.forks}`
      updateInfo.innerHTML = `<span><b>Update:</b></span> ${repoInfo.updated}`
    }
  }
}


dropMenu.addEventListener('change', () => {
  getRepoInfo();
})
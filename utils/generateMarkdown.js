// get the license badge based on user input
function renderLicenseBadge(license) {
  //<img src=https://img.shields.io/badge/license-MIT-blue>
  switch (license[0]) {
    case "M":
      return "<img src=https://img.shields.io/badge/license-MIT-blue>"
    case "I":
      return "<img src=https://img.shields.io/badge/license-ISC-green>"
    case "G":
      return "<img src=https://img.shields.io/badge/license-GNU-red>"
    default:
    console.log('Something went wrong, license badge broke')
  }
}

// function to generate markdown for README
function generateMarkdown(answers) {
  let icon = renderLicenseBadge(answers.lic);
  return `# ${answers.title} 
  ${icon}
   
  ## Description  
  <a name="desc"></a>
  ${answers.desc} 
   
  ## Table of Contents 
  - [Description](#desc)\n
  - [Installation Instructions](#instr) \n
  - [Usage Info](#usage) \n
  - [Contribution Guidelines](#contr) \n
  - [Test Instructions](#test) \n
  - [License](#lic) \n
  - [Questions](#ques) \n
   
  ## Installation Instructions 
  <a name="instr"></a> 
   
  >${answers.instr} 
   
  ## Usage information 
  <a name="usage"></a>  
   
  ${answers.usage} 
   
  ## Contribution Guidelines 
  <a name="contr"></a>  
   
  ${answers.contr} 
   
  ## Test Instructions 
  <a name="test"></a>  
   
  ${answers.test} 
   
  ## License 
  <a name="lic"></a>  
  This software is licensed under the: \n
  ${answers.lic} 
   
  ## Questions 
  <a name="ques"></a>  
   
  [Github](#https://www.github.com/${answers.github}) \n
  For further questions, contact me at: ${answers.email} 
`;}

// make the generateMarkdown function available to other scripts.
module.exports = generateMarkdown;
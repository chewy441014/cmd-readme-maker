// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //<img src=https://img.shields.io/badge/license-MIT-blue>
  switch (license[0]) {
    case "M":
      // code block
      return "<img src=https://img.shields.io/badge/license-MIT-blue>"
    case "I":
      // code block
      return "<img src=https://img.shields.io/badge/license-ISC-blue>"
    case "G":
      // code block
      return "<img src=https://img.shields.io/badge/license-GNU-blue>"
    default:
    // code block
    console.log('something went wrong, license badge broke')
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Generate Markdown Function");
  answers = data;
  var icon = renderLicenseBadge(answers.lic);
  // console.log(questions.length)
  // console.log(answers)
  return `# ${answers.title} 
  ${icon}
   
  ## Description  
  ${answers.desc} 
   
  ## Table of Contents 
  - [Description](#desc)\n
  - [Installation Instructions](#instr) \n
  - [Usage Info](#usage) \n
  - [Contribution Guidelines](#contr) \n
  - [Test Instructions](#test) \n
  - [License](#lic) \n
  - [Questions](#ques) \n
   
  <a name="instr"></a> 
  ## Installation Instructions 
   
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
`;
}

module.exports = generateMarkdown;

// create the description section
const generateDescription = answers => {
if (!answers.description) {
return '';
}

return `## Description
${answers.description}
`;
};

// create the table of contents section
const generateTableOfContents = answers => {
    if (!answers.TableOfContents){
    return '';
}

return `## Table of Contents
${answers.TableOfContents}
`;
};
    

// create the Built With section
const generateBuiltWith = answers => {
    if (!answers.BuiltWith){
    return '';
}

return `## Built With
${answers.BuiltWith}
`;
};

// create the usage
const generateUsage = answers => {
    if (!answers.Usage) {
    return '';
}

return `## Usage
${answers.Usage}
`;
};

// create the websites
const generateWebsites = answers => {
    if (!answers.Websites) {
    return '';
}

return `## Websites
${answers.link}
`;
};

// credits
const generateCredits = answers => {
    if (!answers.Credits) {
    return '';
}

return `## Credits
${answers.credits}
`;
};

const generatePage = answers => {
return `# ${answers.title}
${generateDescription(answers)}
${generateTableOfContents(answers)}
${generateBuiltWith(answers)}
${generateUsage(answers)}
${generateWebsites(answers)}
${generateCredits(answers)}

`
}

module.exports=generatePage
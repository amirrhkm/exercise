# Report Week 1

## Task
    This week's main task involves a straightforward programming exercise. The goal is to create a program that reads text files, goes through each line in those files, extracts the first and last numbers from each line, combines them into a single value, and finally calculates the sum of these numbers from each line. The program is designed to handle text files with any number of lines, making it versatile for various scenarios.

## Friday (1/3/24)
    On Friday, I learned how to configure the GCC C compiler in the environment variables in order to execute .c files. After achieving success, the .c file can be compiled and executed using the PowerShell terminal. In addition, I have written the code for the primary task using the C programming language. Despite encountering multiple obstacles, I made the decision to write the code using Python and ultimately succeeded in accomplishing the primary objective. These activities serve as a review of prior information and syntax for writing various programming languages.

## Monday (4/3/24)
    On Monday, I acquired the knowledge of setting up the node environment in order to commence coding in nodejs. Upon completing the setup, I proceed to transform the primary task that I first wrote in Python into nodejs, which utilises a similar syntax to JavaScript. I have also acquired knowledge of version control system, specifically in the structure of the git environment, specifically about the processes of pushing and pulling repositories, establishing branches, developing on branches, merging branches, and understanding the benefits of using branches in team development.

## Tuesday (5/3/24)
    I became mindful of ECMAScript 6 (ES6), an upgrade to JavaScript that improves syntax and offers new features, on Tuesday. I then modified a couple of syntaxes from the old code to embrace upgraded ES6 syntax. Furthermore, I became familiar with git remote, which streamlines the process of sharing information regarding our advancement across several repositories.

## Wednesday (6/3/24)
    During my session on Wednesday, I acquired knowledge about TypeScript, which is a programming language that expands the capabilities of JavaScript. Additionally, I gained knowledge in configuring the package using the npm registry. The previous code has been modified by dividing it into multiple functions, namely readfiles(), compNum(), and sumNum(), each of which performs a specific task. The array returned by the readfiles() function will include all the lines from the file content. The function compendium () sequentially reads each character from a line and extracts just the digits. It then extracts the first and last numbers from each line and combines them into a single array that comprises all the extracted numbers from each line. sumNum() will return the sum of the values in the array obtained by compNum(). Subsequently, I proceed to run the necessary .js file following the process of transpiling the TypeScript code into JavaScript. I have also acquired knowledge of unit testing, mainly focusing on the Jest framework. This framework greatly simplifies the process of creating test functions. Next, I install the Jest package from npm and create a test function for each code function. After achieving success, I additionally used Prettier and ESLint to enhance the productivity of my TypeScript code. Finally, I added scripts to the package.json to directly perform the jobs for improved efficiency.

## Thursday (7/3/24)
    On Thursday, I acquired the knowledge to set up the configuration file .gitlab-ci.yml in order to automate the execution of all the necessary commands for GitLab to handle the execution of the code. I am also acquiring the skill of generating code documentation by utilising the TypeDoc package.

## Friday (8/3/24)
    On Friday, I continued to learn how to document functions using the TypeDoc package, when that is done, I conducted a self-learn on utilising LaTeX on Overleaf. I also conducted troubleshooting on the read file test function to provide a more accurate and expected while sending the code through GitLab CI.

## Result
    As a result, the tasks can be executed on TypeScript and can successfully provide results for unit testing using the Jest framework. The code for the task is accessible on GitLab, where every change is being pushed. Additionally, GitLab CI is used to execute all the necessary commands. All functions in the code have also been documented using TypeDoc.
/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a version controlled open source software that allows developers to track changes made in files. Git enables developers to work collaboratively.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'Github is an external file repository platform hosted on the internet that allows for version control and collaboration.'
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = 'git init is a command typed into the terminal that initializes a new git repository. To ensure this is done correctly, you must first check that you are in the directory that the working file is stored. Once this is comfirmed the git init command will transform that file into a git repository.'
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = 'git clone is a command typed into the terminal that copies an existing git repository. The command, like git init, is generally a one time operation. Git clone creates a development copy that developers can manage in their local repository. It enables mutliple developers to work on their own cloned versions which assists in collaboration.'
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'The git status command will illustrate the current state of the git working directory and staging area. It does not modify commits or make changes in the repository, and is therefore only an output command. It lists where the head is pointing, if there are changes to the file that have not been committed and the staged status of files. Git status will pinpoint the source of conflict when merge conflicts arise.'
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = 'git add takes the modifications in the working directory and stores the modified version in a staging area until a commit is ready to happen.' 
const gitAddCode = 'git add -A'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = 'git commit is a command that follows git add. It takes a screenshot of the state of the project at a specific time. Commits can be done at particilar milestones through out the projects development.'
const gitCommitCode = 'git commit'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = 'git push is a command that developers use when they are ready to upload the local repository to a remote repository, like Github.'
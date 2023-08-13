---
title: "Git and GitHub"
thumbnail: "https://miro.medium.com/max/1600/0*N_ilfuXnt_46LWOg"
date: "5 Jan, 2020"
author:
  name: "Devansh Baldwa"
  avatar: "https://miro.medium.com/fit/c/262/262/2*KA7hYyaXrUTbMnySgq3NNA.jpeg"
tags: ["Git", "Github", "Open Source", "Version Control", "Repositories"]
---

After reading this article, you will be able to use Git, GitHub, GitHub Desktop, and create your own repositories and push it on GitHub and even contribute to others’ repositories also. So Happy Learning :-

### WHAT IS GIT?

Git is a [free and open-source](https://git-scm.com/about/free-and-open-source) distributed Version Control System(VCS) designed to handle everything from small to very large projects with speed and efficiency. It is used for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.

### How Does A Version Control System like GIT Work?

![](https://miro.medium.com/max/1600/0*N_ilfuXnt_46LWOg)

### WHAT’S SO GREAT ABOUT GIT?

1. Popular
2. Local Operations can be done fast.
3. Lots of publicly clone-able code.
4. It’s Distributed.
5. Great for small projects, because they are mostly code files.

### WHAT IS GITHUB?

[GitHub](https://github.com/) is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. GitHub is a hosting service for Git repositories. Git is a tool, GitHub is a service for projects that use Git.

### CREATE YOUR GITHUB ACCOUNT

![](https://miro.medium.com/max/1600/0*CostYIN7UnqUsPwL)

![](https://miro.medium.com/max/1600/0*-ZRMLpU6ThVlfWGk)

![](https://miro.medium.com/max/1600/0*JXsRF_kxraW5R6v4)

### WHAT IS GITHUB DESKTOP?

GitHub Desktop is designed to simplify all processes and workflow in your GitHub. GitHub Desktop is a fast and easy way to contribute to projects from Windows and OS X, whether you are a seasoned, user or new user.

### HOW TO USE GIT?

Before you start using Git, you have to make it available on your computer. After installing the setup, we can use Git using the Git Bash or the command prompt or terminal of the OS. We generally prefer Git Bash in Windows as it an emulation layer for a command-line experience. For Linux, the terminal is sufficed :-)

![](https://miro.medium.com/max/1600/0*c8IiB6yxVjsJr9ku)

### LOCAL STATES IN GIT

1. **Working Directory (Directory holding all the projects and application files) →** It is the place for creating or editing files. Normally within the working directory is a hidden folder called the ‘.git’ the folder that contains the actual Git repository. Git repository manages the git commit history i.e all the changes that are permanently part of the git repository.
2. **Staging Area(git index) →** That is a holding area for queueing up changes for the next commit. since files have still not been committed one can move these files without impacting the history of changes.
3. **Commit History →** Set of changes to any one of the files.

The above three states are associated with only the local git repository.

NOTE — Main Branch is known as the “master” branch.

![](https://miro.medium.com/max/463/0*aIXCsW11qkIrmmDP)

**YOUR GIT BASH WILL LOOK LIKE THIS**

![](https://miro.medium.com/max/1600/0*AG9MAsrr6D_M_bQ3)

**CONFIGURING YOUR GIT BASH**

![](https://miro.medium.com/max/1600/0*dZka1EHqLvmxMdAo)

### GIT BASH COMMANDS

pwd → prints the working directory

cd → change directory

ls → lists the files in the current directory opened

ls -a → to see all files and folders, even the hidden ones

cd ~ → to return to the users home

clear →to push the contents of the current window up such that the current window becomes empty

exit → the git bash window

which(command name) → tells the location of the command

help(command name) → provides information on the command entered

mkdir (name of directory) → creates a directory

touch → to create a brand new file.

mv → to rename a file /to move a file into another directory

cp → copy command

cp (source file ) (destination)

rm → To remove a file

cd .. → To move into the just outer directory.

diff → To find out differences between into two files.

rmdir (name of directory) → removes a directory

### Two Ways Of Using GIT & GITHUB

1. To create our own repository and pushing on GitHub.
2. To contribute to somebody else’s repository which is cloned or forked from GitHub.

![](https://miro.medium.com/max/1366/0*ZljI_NDz7AV7TBCw)

![](https://miro.medium.com/max/1000/0*PYgLFDDXHxqk3lpa)

### FIRST WAY

1. **Create Your Own Repository** — Git repository is just a file location where you are storing all the files related to your project. We can take a local directory that is not under version control and can turn it into a Git repository.

Command → $ git init

This to initialize a current directory as your repository.

2. **Adding -**

To put the working copy of files in the staging area, we ADD the files i.e. the files and folders in the master directory are put in the staging area using the add command.

Command → $ git add . (To add all files and folders in the directory to the staging area)

Command → $ git add file_name.ext (To add a particular file or folder to the staging area)

NOTE — The command “$ git status” can be used to see the status of all files and folders in the repository.

3. **Committing** -

After adding, we move the files and folders from the staging area to the repository by using the commit command. While using commit, there always should a one phrase message/explanation which associates with the changes. The message will be tagged with the changes.

Command → $ git commit -m “This can be anything.”

NOTE — The command “$ git log” can be used to see all the commits made to the repository, where each commit has a particular ID.

4. **Adding a Remote** -

To add a new remote, use the “git remote add” command, in the directory our repository is stored at. The “git remote add” command takes two arguments:

1. A remote name 2) A remote URL

Command — $ git add remote origin https://github.com/id/Repo_Name.git

5. **Pushing to GitHub** -

We use the “git push” command to upload the local repository content to a remote repository. Pushing has the potential to overwrite changes, so caution should be taken when pushing. The “git push” command takes two arguments :

1. A remote name (the same one which was used while adding a remote)
2. A branch name

Command → $ git push -u origin master

![](https://miro.medium.com/max/1600/0*FBlv9rerZWuZcmN4)

This First Method is very helpful for our own projects as we can keep track of all changes made just with the help of our commits. This keeps all our projects safe and backed up. Also, it is very helpful during campus placements :-)

### SECOND WAY

**(CONTRIBUTING TO SOMEONE ELSES PROJECT)**

1. **Fork their repository** -

It is useful if you would like to start working off somebody else’s project on GitHub. This creates a GitHub project forked off the original project. There is no command-line equivalent for this, since this is a term used in a GitHub context.

NOTE — We can “Star” other people’s projects to follow what’s going on with that repo. It saves their repo in our Starred Repo list.

2.  **Clone a Repository** -

To get a copy of an existing Git repository, we use the Git command “git clone”. Every version of every file for the history of the project is pulled down by default when you run git clone.

Command → git clone < URL > (or) git@github.com/user_name/repo_name.git

Example → git clone https://github.com/user_name/repo_name

![](https://miro.medium.com/max/1600/0*bQ3YVH51nnEywVBd)

3. **Create a Branch (not necessary, but its helpful)** -

Git branches are effectively a pointer to a snapshot of our changes. We generally create a new branch to encapsulate the changes. This prevents unstable code to get merged into the main code. To create a branch,

Command → $ git branch BranchName

To see all branches of the repo, Command → $ git branch

Note — A special pointer called HEAD, helps Git know what branch we currently are on.

To switch to an existing branch,

Command → $ git checkout branch_name

After creating branches and making changes in the repository, we can merge i.e. combine branches for having all the changes made in a single branch. To merge a branch to the master, we must checkout to master branch and then,

Command → $ git merge branch_name

4.  **Committing the changes** -

We must commit the changes made with proper commit messages so that the changes made are understandable by the person whose repository we are contributing to.

5. **Push to the origin repository** -

After all the changes are committed, we push them to our own repository (just like we did in the First Method). Now, all our committed changes i.e. the modified repository is on our GitHub.

![](https://miro.medium.com/max/1600/0*64Xpjb_F6g7mReVd)

6.  **Submit your changes for review** -

If you go to your repository on GitHub, you’ll see a “compare and pull request” button. Click on that.

After that, submit your pull request. We can describe the changes we made & also chat with the person whose repository we want to contribute to.

![](https://miro.medium.com/max/700/0*Mbf6zsfPtE1VylM_)

![](https://miro.medium.com/max/1600/0*GYuE3WgQOZS5Fwlq)

After our pull request on their repository, they get to see what all changes were made by us & read the description provided by us. They can even converse with us regarding the project. They also check for any errors or conflicts in merging the repositories. If everything is fine, they can merge the two repositories.

![](https://miro.medium.com/max/1600/0*rZYTKTLiw2IQkq1I)

I hope this article helped you. To learn more concepts about Git and GitHub, you can take help of [https://githowto.com/](https://githowto.com/) , [https://try.github.io/](https://try.github.io/) and [https://speckyboy.com/resources-for-learning-git/](https://speckyboy.com/resources-for-learning-git/)

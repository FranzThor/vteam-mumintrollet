# Guide to GitHub repos for collaborators

**Author**: Joakim Thor

## Overview

**All commands in this tutorial are to be used in a Linux environment, WSL, Cygwin or the like, using the **git** utility.**

This is a non-thorough guide for project collaborators, on how to get started with a project repository on GitHub.

## Cloning a repository

First, one should clone said repository:

```
git clone https://github.com/FranzThor/vteam-mumintrollet.git
```

This will download the current state of the repository. This only has to be done once, or whenever you need to set up the repository on a new computer.

## Pulling and pushing to the repository

When working with the repository, it's pretty much mandatory pulling the current **branch** before pushing new commits.

In this project, we've decided on working with the **dev** branch, and from there merge working contributions to the branch **main**. However, you're free to create your own branch/es for your code, and from there merge to **main**.

### Pulling

When **pulling**, you're essentially updating your local repository to the chosen branch's current state. So if there's been any changes in the branch, you'll get the most updated version.

Pulling is a easy as:

```
git pull 
```

And switching branches are done through:

```
git checkout <BRANCH>
```

So for instance, if you want to contribute to the **dev** branch, you'd write:

```
git checkout dev
```

Below, when switching branch, one can see that I'm a commit behind the repository's current state.

![](https://i.imgur.com/JWQ1Z7R.png)

### Pushing

When **pushing** to the repository, you're submitting your contribution to the repository, in whatever branch you've chosen. 
**DO NOT** push directly into the **main** branch, instead, push to the **dev** branch or a branch you've created yourself.

**Pushing** is done with the commands:

```
git add .
git commit -m "YOUR COMMIT MESSAGE"
git push
```

When pushing, you'll be prompted to enter a password, and this is your **PAT** (Personal Access Token) you must create on GitHub, not your GitHub password.

You can create a PAT here, after you've logged in: https://github.com/settings/tokens

**Do not lose your PAT, else you'll have to create a new one.**

## Pull requests

When wanting to merge to main, one has to make a **pull request**. This is done on the GitHub website.

In the picture below, you can see the tab "Pull requests". It's there where you'll make your merge requests.

![](https://i.imgur.com/Uo6TcZh.png)

To make a new pull request, simply press the green button.

![](https://i.imgur.com/Jv1Bz4I.png)

When making a pull request, you must specify which branch you want to merge. You can do that by selecting your desired branch in the left field.

![](https://i.imgur.com/GAML9dU.png)

A merge is finalized when the request has been reviewed and accepted by one other contributor. This is merely a safety measure, to ensure at least two people has seen the code to be merged, before it's merged into the production branch, which is **main**.



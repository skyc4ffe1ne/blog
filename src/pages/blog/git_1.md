---
layout: ../../layouts/MarkdownPostLayout.astro
title: "What is a commit"
titlePreview: "How i understood and learned git"
description: "When I first heard about Git, I thought it was just some complex tool for professional developers. But the more I used it, the more I realized how helpful it is — not just for coding, but for learning and keeping track of what you're doing. In this post, I share how I started learning Git, what a 'commit' actually is, and why version control is a game-changer for anyone working on projects, even as a student like me."
author: "caffeine*"
genre: "General"
image:
  url: "/images/gif_test.gif"
  alt: "Logo of git"
tags:
  - name: "computer science"
  - name: "github"
  - name: "git"
pubDate: 24/10/2024
---

### Working Directory

It is a checkout of a specific version of the project.
These files are extracted from the compressed database in the <span class="h_color2">GIT directory</span> and saved to disk for use or modification.
In short is the local directory where you are working.

When we run `git status`, we see the status of the <span class="h_color3">Working Directory</span> and the <span class="h_color1">Staging Area</span>

### Staging Area

When we run `git add -A`, we take all the changes made and push them into the <span class="h_color1">Staging area</span>.

#### What is the _Staging area_?

It's a file in the <span class="h_color2">Git directory</span>, with all the information about the next commit.

### .git directory

When we run `git commit -m "text"` we push all the files in the <span class="h_color1">Staging area</span> to the <span class="h_color4">_versioning database._</span>

#### What is the _versioning database_?

Every time we create, `git init` on our machine the <span class="h_color4">versioning database</span> is created.
Inside it there are all the versions of our project that are divided into <span class="h_color5">_objects_.</span>

#### We have 3 types of objects

1. tree (folders)
2. blob (files)
3. commit

If you want to learn more about the objects this is the official link [Git Objects](https://git-scm.com/book/it/v2/Git-Internals-Git-Objects)

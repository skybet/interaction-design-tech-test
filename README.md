# Interaction Designer Technical Test

## Problem Overview

* Use CSS to style the provided markup to create a clean, intuitive user experience
* Fix/update any HTML that you may consider old or doesn't adhere to current best-practice guidelines
* Enhance the user experience using animation, interactions and updated process flows

## What We're Looking For

* Strong visual design
* Fully responsive for both web and device
* Well implemented typography and vertical rhythm
* Clean CSS
* Clear user journey and interaction patterns
* Understanding of JavaScript implementation and ability to update where necessary
* Clear handling of states, notably errors

## Notes

Ideally, we want to see how you find solutions so would prefer that existing frameworks (such as Bootstrap or Foundation) are not used. This does not include pre-processors, which are encouraged to enhance the writing of CSS if desired.

You should be able to run the app directly in the browser by viewing the index.html file, no server required.

## Problem Details

This test is built on top of our demo API ([http://skybettechtestapi.herokuapp.com](http://skybettechtestapi.herokuapp.com)) which is used to pull in a list of available bets and submit stakes to place actual bets.

The general flow provided is:

1. Show basic application skeleton
1. Read available bets from API
1. Present bets to the user
    * Event name, bet name and formatted odds
1. Allow the user to select one bet which gets displayed in a separate slip
1. Allow the user to enter a stake next to the bet in the betslip
    * Display potential returns for their bet
1. Allow the user to submit the bet to the API
1. Display any errors returned
1. Display the receipt returned by a successful placement
    * Event name, bet name, accepted odds, potential returns and transaction reference

> The demo API runs on a free Heroku instance so may initially take a long time to respond. After it has woken up, it should be nice and fast, it's just the first time it'll be sloooooow.

While everything is functional with the provided code, there are several problems that detract from the overall experience of the end user. They are there deliberately and it would be good to see how you improve them in your solution. If you don't have time to address them but have seen several things you'd improve with move time then add your thoughts to the provided `submission-notes.md` file.



## Timing

You have a window of 48 hours or thereabouts to send your submission back to us: this should be an ample opportunity for you to spend a few hours (rather than the whole of the two days) to do something that showcases all your skills without it being an exercise in instinct.  To that end, take your time and consider each aspect of the test, to try and show us as much of your breadth of knowledge as possible.

## How To Submit Your Work

We recommend you track all your work using git and would like to receive a git repository as a zip archive. To show us how you've gone about things, please create the git repo on starting the test and commit the provided files. As you develop your solution, keep commiting to the repo and when 2 hours are up, please commit and create a tag labeled '2 hours'.

If you have no experience working with git we'd appreciate you giving it a try but if you're really unsure how it all works then don't worry and simply zip up your work and supply as is.

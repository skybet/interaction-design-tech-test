# UX Designer Technical Test

## Problem Overview

* Use CSS to style the provided markup to create a clean, intuitive user experience.
* Fix any HTML that you may consider doesn't follow current best-practice guidelines
* Enhance the user experience using animation, interactions and updated process flows

## What We're Looking For

* Strong visual design
* Well implemented typography and vertical rhythm
* Clean CSS
* Clear user journey and interaction patterns
* Understanding of JavaScript implementation and ability to update where necessary
* Clear handling of states, notably errors

## Requirements

* The latest version of Chrome or Firefox

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

## Notes

Ideally, we want to see vanilla solutions so would prefer that existing frameworks (such as Bootstrap or Foundation) are not used. This does not include pre-processors, which can be used to enhance the writing of CSS if desired.

You should be able to run the app directly in the browser by viewing the index.html file, no server required.

## Timing

There's a massive scope for improvements to this code so it shouldn't be a surprise that we don't expect a "complete" solution in the time allocated. What you focus on is entirely your choice, we'll assess based on how far you've got and what you've chosen to tackle - in many respects there's no right answer. Whilst we encourage you to only spend 2 hours on this test, you are free to spend longer if you like, just don't spend too long!

## How To Submit Your Work

We recommend you track all your work using git and would like to receive a git repository as a zip archive. To show us how you've gone about things, please create the git repo on starting the test and commit the provided files. As you develop your solution, keep commiting to the repo and when 2 hours are up, please commit and create a tag labeled '2 hours'.

If you have no experience working with git we'd appreciate you giving it a try but if you're really unsure how it all works then don't worry and simply zip up your work and supply as is.

## Extra Credit

* Include media queries to provide optimal experiences for devices of varying capabilities
* Add the ability for the user to switch between [fractional and decimal odds](https://support.skybet.com/app/answers/detail/a_id/37/~/fraction-and-decimal-pricing)
* Enhance the JavaScript to give better feedback and introduce extra interaction touches
* Update the markup & CSS to introduce flexbox where appropriate

Good luck!

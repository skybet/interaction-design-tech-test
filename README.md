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

## Notes

Ideally, we want to see vanilla solutions so would prefer that existing frameworks (such as Bootstrap or Foundation) are not used. This does not include pre-processors, which can be used to enhance the writing of CSS if desired.

You should be able to run the app directly in the browser by viewing the index.html file, no server required.

## Extra Credit

* Include media queries to provide optimal experiences for devices of varying capabilities
* Include brand elements to follow the design direction seen on [skybet.com](https://skybet.com) and [m.skybet.com](https://m.skybet.com)
* Enhance the JavaScript to give better feedback and introduce extra interaction touches
* Update the markup & CSS to introduce flexbox where appropriate
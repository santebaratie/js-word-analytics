"use strict";

// Select UI elements
const textarea = document.querySelector(".card__board");
const clearBtn = document.querySelector(".btn--clear");
const charsText = document.querySelector(".chars-num");
const wordsText = document.querySelector(".words-num");
const twitterLimitText = document.querySelector(".twitter-limit");
const facebookLimitText = document.querySelector(".facebook-limit");


const TWITTER_LIMIT = 280;
const FACEBOOK_LIMIT = 2200;

textarea.addEventListener("input", (e) => {
  handleCharCount();
  const numberOfWords = handleWordCount();
  twitterLimitText.textContent = TWITTER_LIMIT - numberOfWords;
  facebookLimitText.textContent = FACEBOOK_LIMIT - numberOfWords;
})


function handleCharCount(){
  const numberOfChars = textarea.value.split("").length;
  charsText.textContent = numberOfChars;
  return numberOfChars;
}

function handleWordCount(){
  const numberOfWords = textarea.value.trim().split(" ").length;
  wordsText.textContent = numberOfWords
  return numberOfWords;
}


clearBtn.addEventListener("click", () => {
  textarea.value = '';
  handleCharCount();
  handleWordCount();
  const numberOfWords = handleWordCount();
  twitterLimitText.textContent = TWITTER_LIMIT - numberOfWords;
  facebookLimitText.textContent = FACEBOOK_LIMIT - numberOfWords;
})


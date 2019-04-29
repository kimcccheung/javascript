//2019-4-29 A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// shorthand for
// const promise = createAudioFileAsync(audioSettings); 
// promise.then(successCallback, failureCallback);

// A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);


doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
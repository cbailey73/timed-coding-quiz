# Timed Coding Quiz

## Description
This project was created to provide a quick, interactive way for new coders (like myself) to test their coding knowledge. The quiz itself consists of five questions, each of which are about either HTML, CSS, or JavaScript code. Upon starting the quiz, the user is presented with these five questions in succession, each with four answer choices. After they click on their answer choice, they are told whether it was correct and incorrect, and a "next" button pops up so that they can move on to the next question. Each question is worth 20 points, for a maximum score of 100.

There is an additional timed element to this quiz. A timer is displayed at the top of the page and is intitially set to 90 seconds. As soon as the quiz is started, the timer begins counting down. Additionally, if the user gets a question wrong 20 seconds will be subtracted from the timer.

The quiz ends when either the user has answered all questions or the timer runs out. When it is over, the user's score is displayed and they will be given an option to input their initials and click a button to submit them to local storage. The top 10 highest scores are displayed on a seperate page, which can be accessed by clicking the "highscores" link at the top of the page.

## Usage
Once you have landed on the main webpage, press the "start" button to start the quiz. This will also start the timer, which is displayed on the top right corner of the page. It is initially set to 90 seconds and counts down by the second. If the timer ends, the quiz ends, so keep an eye on it.

Once the start button is pressed, the first question will pop up with four answer choices below it. Read the question and choose the answer you think is correct. Whether you got it right or wrong will appear below the answer choices, along with a button labeled "next". Click that button to move on to the next question, and repeat the previous steps four more times. 

Once the quiz has ended your final score will pop up, along with a form that allows you to input your initials. If you wish, type in your initials and click the "submit" button under the form to save your score. The top 10 scores are displayed on a seperate "highscores" webpage, which you can navigate to by clicking the link titled "highscores" at the top left corner of the page.

If you want to try the quiz again, click the button labeled "restart quiz" located under the initials submission form.

## License 
This project is protected under an MIT license. Further details are provided in the "LICENSE" section of this repository.

## Credits
The format for answer choices and code for starting and ending the quiz was obtained by following this tutorial: https://simplestepscode.com/javascript-quiz-tutorial/

The Objects.entries() method used in the for loop to populate quiz questions and answers was obtained by following this tutorial: https://www.digitalocean.com/community/tutorials/js-object-entries-values

The getAttribute() method used to check quiz answers was obtained by following this tutorial: https://www.tabnine.com/code/javascript/functions/builtins/EventTarget/getAttribute

The code used to sort highscores and arrange them in a list was obtained by following this tutorial: https://stackoverflow.com/questions/62079466/sorting-high-scores-in-javascript

## Webpage
Click here to access the quiz: 

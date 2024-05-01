// Creatin of smaple data was done by using these methods

async function handleSubmitTestButtonClick() {
    // Stop the timer by clearing the interval
    clearInterval(timerInterval);

    // Gather result values to submit
    const results = construcTestData();
    console.log(results);
    for (let loopCount = 1; loopCount <= 20; loopCount++) {
        const results = construcTestData();
        try {
            await submitTestToServer(results); // Wait for the result before proceeding
            console.log(`Test ${loopCount} submitted successfully`);
        } catch (error) {
            console.error(`Error submitting test ${loopCount}:`, error);
        }
    }
}

function count(points) {
    let onesCount = 0;
    for (const point of points) {
        if (point === 1) {
            onesCount++;
        }
    }
    return onesCount;
}

function construcTestData() {
    points = generateRandomArrayAgrade(20);
    totalScore = count(points);
    const timeStamp = getRandomDateWithinLast10Days();
    console.log(timeStamp);
    const answers = [{ lessonName, timeStamp, totalScore, points }];
    return answers;
}

function getRandomDateWithinLast10Days() {
    const currentDate = new Date();
    const tenDaysAgo = new Date(currentDate);
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 8) + 1;
    tenDaysAgo.setDate(tenDaysAgo.getDate() - randomNumber);
    // Generate a random hour between 8 and 22 (10 p.m.)
    const randomHour = Math.floor(Math.random() * 15) + 8;
    // Create a new date with the random hour
    const randomDate = new Date(tenDaysAgo);
    randomDate.setHours(randomHour, 0, 0, 0);
    return randomDate;
}


function generateRandomArrayAgrade(length) {
    const randomArray = Array.from({ length }, () => 0); // Initialize with zeros
    // Generate a random number of 1s between 13 and 20 (inclusive)
    const numOnes = Math.floor(Math.random() * 8) + 13;
    // Set the values at random indices to 1
    for (let i = 0; i < numOnes; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * length);
      } while (randomArray[randomIndex] === 1); // Ensure we don't overwrite existing 1s
      randomArray[randomIndex] = 1;
    }
    return randomArray;
  }
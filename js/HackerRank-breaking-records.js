function breakingRecords(scores) {
    // Write your code here

    let min, max, minRecord, maxRecord;
    min = max = scores[0];
    minRecord = maxRecord = 0;

    scores.forEach((score) => {
        if (score > max) {
            max = score;
            maxRecord += 1;
        }
        if (score < min) {
            min = score;
            minRecord += 1;
        }
    });

    console.log([maxRecord, minRecord]);
    return [maxRecord, minRecord];
}

breakingRecords('10 5 20 20 4 5 2 25 1'.split(' ').map(Number));

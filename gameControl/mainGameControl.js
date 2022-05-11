
function tester() {
    var testString = 'This is the testString of mainGameControl.js file';
    var subTestFunction = () => {
        console.log(testString);
    }
    this.testFunction = () => {
        subTestFunction();
    }
};

module.exports = tester;
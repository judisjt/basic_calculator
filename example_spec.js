describe('test if the calculator buttons work', function () {
    it('tests every button', function () {
        browser.get('http://localhost:4200');
        element(by.buttonText('0')).click();
        element(by.buttonText('1')).click();
        element(by.buttonText('2')).click();
        element(by.buttonText('3')).click();
        element(by.buttonText('4')).click();
        element(by.buttonText('5')).click();
        element(by.buttonText('6')).click();
        element(by.buttonText('7')).click();
        element(by.buttonText('8')).click();
        element(by.buttonText('9')).click();
        element(by.buttonText('/')).click();
        element(by.buttonText('x')).click();
        element(by.buttonText('-')).click();
        element(by.buttonText('+')).click();
        element(by.buttonText('=')).click();
        element(by.buttonText('DEL')).click();
        element(by.buttonText('CE')).click();
    });
});

describe('A test for the plus button', function () {
    it('Makes sure the calculator can add two numbers together in between 1-9', function () {
        browser.get('http://localhost:4200');
        for (var i = 0; i < 6; i++) {

            var a = Math.floor(Math.random() * 10);
            var b = Math.floor(Math.random() * 10);

            var calculatorResult = element(by.id('result'));

            element(by.buttonText('' + a)).click();
            expect(calculatorResult.getText()).toEqual('0' + a);

            // clears text box
            element(by.buttonText('DEL')).click();
            expect(calculatorResult.getText()).toEqual('0');

            element(by.buttonText('' + a)).click();
            expect(calculatorResult.getText()).toEqual('0' + a);
            element(by.buttonText('+')).click();
            element(by.buttonText('DEL')).click();
            expect(calculatorResult.getText()).toEqual('0');

            element(by.buttonText('' + b)).click();
            element(by.buttonText('+')).click();
            expect(calculatorResult.getText()).toEqual('' + (a + b));

            element(by.buttonText('CE')).click();
            element(by.buttonText('DEL')).click();
            expect(calculatorResult.getText()).toEqual('0');

        }

    });
});

describe('Another test for the plus button', function () {
    it('Makes sure the calculator can add any kinds of random numbers together', function () {
        browser.get('http://localhost:4200');
        for (var i = 0; i < 6; i++) {

            var buttonClicks = Math.floor(Math.random() * 6);
            var calculatorResult = element(by.id('result'));

            for(i = 0; i <= buttonClicks; i++)
            {
                var randomButtonClick = Math.floor(Math.random() * 10)
                element(by.buttonText('' + randomButtonClick)).click();
            }
            // clears text box
            element(by.buttonText('DEL')).click();
            expect(calculatorResult.getText()).toEqual('0');

            for(i = 0; i <= buttonClicks; i++)
            {
                var randomButtonClick = Math.floor(Math.random() * 10)
                var a = element(by.buttonText('' + randomButtonClick)).click();
            }
            element(by.buttonText('+')).click();
            element(by.buttonText('DEL')).click();
            expect(calculatorResult.getText()).toEqual('0');

            for(i = 0; i <= buttonClicks; i++)
            {
                var randomButtonClick = Math.floor(Math.random() * 10);
                var a = element(by.buttonText('' + randomButtonClick)).click();
            }
            element(by.buttonText('+')).click();
            element(by.buttonText('CE')).click();
            element(by.buttonText('DEL')).click();
            expect(calculatorResult.getText()).toEqual('0');

        }

    });
});

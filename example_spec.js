describe('tset if the calculator buttons work', function(){
   it('tests every button', function(){
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

describe('test main use of calculator', function(){
    it('tests the plus button', function(){
        browser.get('http://localhost:4200');
        element(by.buttonText('9')).click();
        element(by.buttonText('+')).click();
        element(by.buttonText('DEL')).click();
        element(by.buttonText('5')).click();
        element(by.buttonText('+')).click();

        var calculatorResult = element(by.id('result')).getText();
        expect(calculatorResult).toEqual('14');
    });
});
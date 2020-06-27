describe("Helpers test", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of payments', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(40);
    });
  
    it('should sum total bill amount of payments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 150;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(250);
    });
  
    it('should sum total tip percent', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 12;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(32);
    });
  
    it('should sum tip percent of single tip', function () {
      expect(calculateTipPercent(100, 14)).toEqual(14);
      expect(calculateTipPercent(85, 15)).toEqual(18);
    });
  
    it('should create td from value and append to tr', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
    });
  
    it('should create delete td and append to tr', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });
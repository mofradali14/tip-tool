describe("Servers test", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server', function(){
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update #servertable', function(){
    submitServerInfo()
    updateServerTable()

    let tdList = document.querySelectorAll("#serverTable tbody tr td");

    expect(tdList.length).toEqual(2);
    expect(tdList[0].innerText).toEqual('Alice');
    expect(tdList[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverTbody.innerHTML = ''
    serverId = 0;
    allServers = {}
  });
});

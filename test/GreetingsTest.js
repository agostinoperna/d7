const Greetings = artifacts.require("Greetings");


// test suite
contract("Greetings", async (accounts) => {
    let contractInstance;
    const initialMessage = "I am ready!";
    const newMessage = "Hello ChainSkills!";


    before('setup contract for each test', async () => {
        // get an instance to the deployed contract
        contractInstance = await Greetings.deployed();
    })


    it("should be initialized with an initialised value", async () => {
        // read the message store in the contract
        const message = await contractInstance.getGreetings();
        assert.equal(message, initialMessage, "The initial message should be " + initialMessage);
    })

    it("should let us set a new message", async () => {
        // set a new message
        await contractInstance.setGreetings(
            newMessage, {
                from: accounts[1]
            });

        // read the message store in the contract
        const message = await contractInstance.getGreetings();
        assert.equal(message, newMessage, "The new message should be " + newMessage);
    })
})
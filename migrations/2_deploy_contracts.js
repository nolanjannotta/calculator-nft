const Calculator = artifacts.require("Calculator");
const CalcLib = artifacts.require("CalcLib");
const Base64 = artifacts.require("Base64")
const testnft = artifacts.require("testnft")

module.exports = function (deployer) {
  deployer.deploy(CalcLib);
  deployer.deploy(Base64);
  deployer.link(Base64, CalcLib);
  deployer.link(CalcLib, Calculator);
  deployer.deploy(Calculator);
  // deployer.deploy(testnft);
};


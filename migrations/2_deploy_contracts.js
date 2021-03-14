// truffle kreira artifact iz ToDoList.json (to je abstrakcija SC-a, koju sustav razumije, da ga potom moze stavit na blockchain)
const ToDoList = artifacts.require("./ToDoList.sol");
// svaki put kad se SC salje na blockchain mijenja se state blockchaina
// blockchain je na neki nacin velika baza
// SC mijenja state, a za to je potrebno poslat SC na blockchain, a to se radi preko Migration
// migracije imaju brojeve na osnovu koji se definira redosljed izvrsavanja
module.exports = function (deployer) {
  deployer.deploy(ToDoList);
};

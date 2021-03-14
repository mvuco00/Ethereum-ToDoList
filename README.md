# Ethereum-ToDoList

a ToDo app with Ethereum smart contracts

<div style="float: right">
<img alt="Ethereum" src="https://img.shields.io/badge/platform-Ethereum-lightgrey"/>
<img alt="Solidity" src="https://img.shields.io/badge/language-Solidity-blue"/>

</div>

## Commands

- deploying smart contract to blockchain

```
truffle migrate
```

- console

```
truffle console
```

- ToDoList is the name of the smart contract that is created in migrations folder. We retrive deployed copy of smart contract and assign it to variable todoList

```
todoList = await ToDoList.deployed()
```

- We can access smart contract properties

```
todoList.address
```

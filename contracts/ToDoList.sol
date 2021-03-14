// SPDX-Licence-Identifier: 	AFL-3.0
pragma solidity >=0.5.0; //verzija

contract ToDoList{
    // state variable (predstavljaju state contracta na blockchainu)
    // scope pripada cijelom contractu, a ne samo funkciji
    // public daje funkciju kojom se omogući čitanje taskCount vrijednosti unutar ToDoList contracta
    uint public taskCount=0;

}
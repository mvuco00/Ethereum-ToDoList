// SPDX-Licence-Identifier: 	AFL-3.0
pragma solidity >=0.5.0; //verzija

contract ToDoList {
    // state variable (predstavljaju state contracta na blockchainu). Sprema se u storage.
    // scope pripada cijelom contractu, a ne samo funkciji
    // public daje funkciju kojom se omogući čitanje taskCount vrijednosti unutar ToDoList contracta
    // uint -> nteger koj ne moze bit negativan
    uint256 public taskCount = 0;

    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    //taskove zelimo staviti u storage na blockchainu
    // tasks je također state varijabla
    // mapping je kao asosiative array pri kojom se spremaju key-value parovi
    // key će bit uint podatak (zapravo id), value je Task struct
    // public da bi ih mogli procitati
    // ne moze se iterirat mapping, nego jedino referencirat task jedan po jedan (npr tasks[1])
    // task = await todoList.tasks(1)
    // zato se koristi taskCount koji vodi racuna o broju taskova
    mapping(uint256 => Task) public tasks;

    // dodavanje inicijalnih podataka (koji se dodaju za vrime deploymenta)
    // default task
    constructor() public {
        createTask("Study solidity");
    }

    //memory se koristi samo u metodama
    //Memory is a byte-array, which hold the data in it until the execution of the function
    // fja prima content (text zadatka)
    function createTask(string memory _content) public {
        // prvo treba odredit id za task
        taskCount++;
        //dodavanje id-ja u Task
        // to je novi zadatak pa je completed false
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}

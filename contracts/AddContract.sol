pragma solidity ^0.4.24;

contract AddContract {

    /*
     *  Events
     */
    event AddEvent(uint value, uint total);
    uint public total;
    /*
     * Public functions
     */

    function addTotal(uint number)
        public
    {
        total += number;
        emit AddEvent(number, total);
    }    
}